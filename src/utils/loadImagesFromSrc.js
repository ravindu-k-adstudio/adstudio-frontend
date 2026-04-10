// // // export const loadImagesFromSrc = async (imageAttrsArray) => {
// // //     const promises = imageAttrsArray.map(attrs => {
// // //         if (!attrs.src) {
// // //             console.warn("Skipping image node with no src:", attrs);
// // //             return Promise.resolve(null);
// // //         }
// // //         return new Promise(resolve => {
// // //             const img = new window.Image();
// // //             img.crossOrigin = "anonymous";
// // //             img.src = attrs.src;
// // //             img.onload = () => resolve({ ...attrs, id: crypto.randomUUID(), image: img });
// // //             img.onerror = () => {
// // //                 console.error("Failed to load image src:", attrs.src);
// // //                 resolve(null);
// // //             };
// // //         });
// // //     });

// // //     const results = await Promise.all(promises);
// // //     return results.filter(Boolean); // remove failed loads
// // // };

// // // 

// // export const loadImagesFromSrc = async (imageAttrsArray) => {
// //     const promises = imageAttrsArray.map(attrs => {
// //         return new Promise(resolve => {
// //             if (!attrs.src) {
// //                 console.warn("Image missing src:", attrs);
// //                 resolve(null);
// //                 return;
// //             }
// //             const img = new window.Image();
// //             img.crossOrigin = "anonymous"; // important if images are hosted externally
// //             img.src = attrs.src;
// //             img.onload = () => {
// //                 resolve({ ...attrs, id: crypto.randomUUID(), image: img });
// //             };
// //             img.onerror = (e) => {
// //                 console.error("Failed to load image:", attrs.src, e);
// //                 resolve(null); // still resolve to prevent blocking
// //             };
// //         });
// //     });

// //     const loadedImages = await Promise.all(promises);
// //     return loadedImages.filter(Boolean); // remove any failed images
// // };

// // 

// // utils/loadImagesFromSrc.js
// export const loadImagesFromSrc = async (imageAttrsArray) => {
//     const promises = imageAttrsArray.map(attrs => {
//         return new Promise(resolve => {
//             if (!attrs.src) {
//                 console.warn("Image missing src:", attrs);
//                 resolve(null);
//                 return;
//             }
//             const img = new window.Image();
//             img.crossOrigin = "anonymous";
//             img.src = attrs.src;
//             img.onload = () => {
//                 resolve({ ...attrs, id: crypto.randomUUID(), image: img });
//             };
//             img.onerror = (e) => {
//                 console.error("Failed to load image:", attrs.src, e);
//                 resolve(null);
//             };
//         });
//     });

//     const loadedImages = await Promise.all(promises);
//     return loadedImages.filter(Boolean);
// };

// 
export const loadImagesFromSrc = async (imageAttrsArray) => {
    const promises = imageAttrsArray.map((attrs, index) => {
        return new Promise((resolve) => {
            if (!attrs.src) {
                console.error("❌ Missing src in DB JSON:", attrs);
                resolve(null);
                return;
            }

            console.log("🟢 Loading image from src:", attrs.src.substring(0, 50));

            const img = new window.Image();
            img.crossOrigin = "anonymous";
            img.src = attrs.src;

            img.onload = () => {
                console.log("✅ Image loaded successfully");
                resolve({
                    ...attrs,
                    id: crypto.randomUUID(),
                    image: img,
                    src: attrs.src
                });
            };

            img.onerror = () => {
                console.error("❌ Failed loading image:", attrs.src);
                resolve(null);
            };
        });
    });

    const results = await Promise.all(promises);
    return results.filter(Boolean);
};

/*
$0.00 for 1 month, then $5.00/month. Renews monthly until cancelled. Cancel anytime in Settings before your trial ends to avoid charges. By subscribing, you agree to the Terms of Use, Promo Terms, and authorize OpenAI to store and charge your payment method.
*/