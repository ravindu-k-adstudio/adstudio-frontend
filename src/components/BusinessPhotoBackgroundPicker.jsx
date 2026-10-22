
// import React, { useMemo, useRef, useState } from "react";
// import {
//     BUSINESS_PHOTO_BACKGROUNDS,
//     BUSINESS_PHOTO_CATEGORIES,
//     BUSINESS_PHOTO_SHAPES,
//     BUSINESS_PHOTO_COLORS,
// } from "../data/businessPhotoBackgrounds";

// const shapeClipPaths = {
//     left: "polygon(0 0, 67% 0, 47% 100%, 0 100%)",
//     right: "polygon(33% 0, 100% 0, 100% 100%, 53% 100%)",
//     diagonal: "polygon(0 0, 76% 0, 52% 100%, 0 100%)",
//     curve: "ellipse(78% 100% at 0% 50%)",
//     circle: "circle(64% at 0% 50%)",
//     bottom: "polygon(0 48%, 100% 22%, 100% 100%, 0 100%)",
//     top: "polygon(0 0, 100% 0, 100% 52%, 0 72%)",
//     split: "polygon(0 0, 40% 0, 32% 100%, 0 100%, 68% 0, 100% 0, 100% 100%, 60% 100%)",
//     corner: "polygon(0 0, 60% 0, 0 72%)",
//     wave: "polygon(0 0, 66% 0, 60% 18%, 49% 36%, 45% 56%, 35% 77%, 25% 100%, 0 100%)",
//     full: "none",
//     minimal: "polygon(0 0, 42% 0, 30% 100%, 0 100%)",
// };

// const styles = {
//     backdrop: {
//         position: "fixed",
//         inset: 0,
//         zIndex: 10000,
//         background: "rgba(15,23,42,.68)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 16,
//     },
//     modal: {
//         width: "min(1180px, 96vw)",
//         maxHeight: "92vh",
//         overflow: "auto",
//         background: "#fff",
//         color: "#172033",
//         borderRadius: 18,
//         boxShadow: "0 24px 80px rgba(0,0,0,.28)",
//         fontFamily: "Inter, system-ui, sans-serif",
//     },
//     header: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: 12,
//         padding: "20px 24px",
//         borderBottom: "1px solid #e5e7eb",
//     },
//     body: {
//         display: "grid",
//         gridTemplateColumns: "minmax(0, 1.5fr) minmax(280px, .8fr)",
//         gap: 22,
//         padding: 22,
//     },
//     sectionTitle: {
//         fontSize: 14,
//         fontWeight: 750,
//         marginBottom: 10,
//     },
//     button: {
//         border: "1px solid #d1d5db",
//         background: "#fff",
//         color: "#172033",
//         borderRadius: 9,
//         padding: "9px 12px",
//         cursor: "pointer",
//         fontSize: 13,
//     },
//     primary: {
//         border: 0,
//         background: "#2563eb",
//         color: "#fff",
//         borderRadius: 9,
//         padding: "11px 18px",
//         cursor: "pointer",
//         fontWeight: 700,
//     },
// };

// function getShapeStyle(shape, color, opacity) {
//     return {
//         position: "absolute",
//         inset: 0,
//         backgroundColor: color,
//         opacity: opacity / 100,
//         clipPath: shapeClipPaths[shape] || shapeClipPaths.left,
//     };
// }

// export default function BusinessPhotoBackgroundPicker({
//     isOpen,
//     onClose,
//     onApply,
// }) {
//     const [category, setCategory] = useState("All");
//     const [search, setSearch] = useState("");
//     const [selectedId, setSelectedId] = useState(
//         BUSINESS_PHOTO_BACKGROUNDS[0]?.id
//     );
//     const [color, setColor] = useState("#FFFFFF");
//     const [opacity, setOpacity] = useState(88);
//     const [shape, setShape] = useState("left");

//     const fileInputRef = useRef(null);
//     const [uploadedBackground, setUploadedBackground] = useState(null);
//     const [uploadError, setUploadError] = useState("");

//     // const selected = BUSINESS_PHOTO_BACKGROUNDS.find(
//     //     (item) => item.id === selectedId
//     // );

//     // const filteredBackgrounds = useMemo(() => {
//     //     const term = search.trim().toLowerCase();

//     //     return BUSINESS_PHOTO_BACKGROUNDS.filter((item) => {
//     //         const categoryMatches =
//     //             category === "All" || item.category === category;

//     //         const searchMatches =
//     //             !term ||
//     //             item.name.toLowerCase().includes(term) ||
//     //             item.category.toLowerCase().includes(term) ||
//     //             item.keywords?.some((keyword) =>
//     //                 keyword.toLowerCase().includes(term)
//     //             );

//     //         return categoryMatches && searchMatches;
//     //     });
//     // }, [category, search]);


//     const allBackgrounds = useMemo(
//         () =>
//             uploadedBackground
//                 ? [uploadedBackground, ...BUSINESS_PHOTO_BACKGROUNDS]
//                 : BUSINESS_PHOTO_BACKGROUNDS,
//         [uploadedBackground]
//     );

//     const selected = allBackgrounds.find(
//         (item) => item.id === selectedId
//     );

//     const filteredBackgrounds = useMemo(() => {
//         const term = search.trim().toLowerCase();

//         return allBackgrounds.filter((item) => {
//             const categoryMatches =
//                 category === "All" || item.category === category;

//             const searchMatches =
//                 !term ||
//                 item.name.toLowerCase().includes(term) ||
//                 item.category.toLowerCase().includes(term) ||
//                 item.keywords?.some((keyword) =>
//                     keyword.toLowerCase().includes(term)
//                 );

//             return categoryMatches && searchMatches;
//         });
//     }, [allBackgrounds, category, search]);

//     function chooseBackground(item) {
//         setSelectedId(item.id);
//         setColor(item.color || "#FFFFFF");
//         setOpacity(item.opacity ?? 88);
//         setShape(item.shape || "left");
//     }

//     function applyBackground() {
//         if (!selected?.src) {
//             console.error("Selected background has no image source:", selected);
//             return;
//         }

//         onApply({
//             ...selected,
//             type: "business-photo",
//             color,
//             opacity,
//             shape,
//             overlay: "custom",
//         });

//         onClose();
//     }



//     function handleCustomBackgroundUpload(event) {
//         const file = event.target.files?.[0];

//         // Allow the user to select the same file again later.
//         event.target.value = "";

//         if (!file) return;

//         const allowedTypes = [
//             "image/jpeg",
//             "image/png",
//             "image/webp",
//         ];

//         if (!allowedTypes.includes(file.type)) {
//             setUploadError("Please upload a JPG, PNG, or WebP image.");
//             return;
//         }

//         const MAX_FILE_SIZE = 15 * 1024 * 1024;

//         if (file.size > MAX_FILE_SIZE) {
//             setUploadError("Please choose an image smaller than 15 MB.");
//             return;
//         }

//         setUploadError("");

//         const reader = new FileReader();

//         reader.onload = () => {
//             if (typeof reader.result !== "string") {
//                 setUploadError("Unable to read this image. Please try another file.");
//                 return;
//             }

//             const customBackground = {
//                 id: `custom-upload-${Date.now()}`,
//                 name: file.name,
//                 category: "Your Uploads",
//                 icon: "📤",
//                 src: reader.result,
//                 shape,
//                 color,
//                 opacity,
//                 overlay: "custom",
//                 keywords: ["custom", "uploaded", file.name.toLowerCase()],
//                 tags: ["Your Uploads", "Custom"],
//                 isCustomUpload: true,
//             };

//             setUploadedBackground(customBackground);
//             setSelectedId(customBackground.id);
//         };

//         reader.onerror = () => {
//             setUploadError("Unable to read this image. Please try again.");
//         };

//         reader.readAsDataURL(file);
//     }

//     if (!isOpen) return null;

//     return (
//         <div style={styles.backdrop} onMouseDown={onClose}>
//             <div
//                 style={styles.modal}
//                 onMouseDown={(event) => event.stopPropagation()}
//             >
//                 <header style={styles.header}>
//                     <div>
//                         <h2 style={{ margin: 0, fontSize: 21 }}>
//                             Business Photo Backgrounds
//                         </h2>
//                         <p style={{ margin: "5px 0 0", color: "#64748b", fontSize: 13 }}>
//                             Choose a photo, color and shape for your design.
//                         </p>
//                     </div>

//                     <button
//                         type="button"
//                         aria-label="Close background picker"
//                         onClick={onClose}
//                         style={{ ...styles.button, fontSize: 20, padding: "5px 12px" }}
//                     >
//                         ×
//                     </button>
//                 </header>

//                 <div style={styles.body}>
//                     <section style={{ minWidth: 0 }}>

//                         <div
//                             style={{
//                                 padding: 16,
//                                 marginBottom: 14,
//                                 border: "1px dashed #93a4bd",
//                                 borderRadius: 12,
//                                 background: "#f8fafc",
//                             }}
//                         >
//                             <input
//                                 ref={fileInputRef}
//                                 type="file"
//                                 accept="image/jpeg,image/png,image/webp"
//                                 onChange={handleCustomBackgroundUpload}
//                                 style={{ display: "none" }}
//                             />

//                             <div
//                                 style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: 12,
//                                     flexWrap: "wrap",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         width: 44,
//                                         height: 44,
//                                         display: "grid",
//                                         placeItems: "center",
//                                         borderRadius: 10,
//                                         background: "#dbeafe",
//                                         color: "#1d4ed8",
//                                         fontSize: 22,
//                                     }}
//                                 >
//                                     ↑
//                                 </div>

//                                 <div style={{ flex: 1, minWidth: 140 }}>
//                                     <div style={{ fontWeight: 750, fontSize: 14 }}>
//                                         Your Business Background
//                                     </div>

//                                     <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>
//                                         Upload your own photo and customize it before applying.
//                                     </div>
//                                 </div>

//                                 <button
//                                     type="button"
//                                     onClick={() => fileInputRef.current?.click()}
//                                     style={styles.primary}
//                                 >
//                                     + Upload photo
//                                 </button>
//                             </div>

//                             {uploadError && (
//                                 <p
//                                     role="alert"
//                                     style={{
//                                         color: "#b91c1c",
//                                         fontSize: 12,
//                                         margin: "10px 0 0",
//                                     }}
//                                 >
//                                     {uploadError}
//                                 </p>
//                             )}

//                             {uploadedBackground && (
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         gap: 10,
//                                         marginTop: 12,
//                                     }}
//                                 >
//                                     <img
//                                         src={uploadedBackground.src}
//                                         alt="Your uploaded background"
//                                         style={{
//                                             width: 64,
//                                             height: 46,
//                                             objectFit: "cover",
//                                             borderRadius: 7,
//                                         }}
//                                     />

//                                     <div style={{ flex: 1, minWidth: 0 }}>
//                                         <div
//                                             style={{
//                                                 fontSize: 12,
//                                                 fontWeight: 700,
//                                                 overflowWrap: "anywhere",
//                                             }}
//                                         >
//                                             {uploadedBackground.name}
//                                         </div>
//                                         <div style={{ fontSize: 11, color: "#64748b" }}>
//                                             Ready to preview and apply
//                                         </div>
//                                     </div>

//                                     <button
//                                         type="button"
//                                         onClick={() => {
//                                             setUploadedBackground(null);

//                                             if (selectedId === uploadedBackground.id) {
//                                                 setSelectedId(BUSINESS_PHOTO_BACKGROUNDS[0]?.id);
//                                             }
//                                         }}
//                                         style={styles.button}
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             )}
//                         </div>

//                         <input
//                             value={search}
//                             onChange={(event) => setSearch(event.target.value)}
//                             placeholder="Search backgrounds or business types..."
//                             style={{
//                                 width: "100%",
//                                 boxSizing: "border-box",
//                                 padding: 12,
//                                 border: "1px solid #d1d5db",
//                                 borderRadius: 10,
//                                 marginBottom: 12,
//                                 fontSize: 14,
//                             }}
//                         />

//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexWrap: "wrap",
//                                 gap: 7,
//                                 marginBottom: 16,
//                             }}
//                         >
//                             {["All", ...BUSINESS_PHOTO_CATEGORIES.map((c) => c.category)].map(
//                                 (name) => (
//                                     <button
//                                         type="button"
//                                         key={name}
//                                         onClick={() => setCategory(name)}
//                                         style={{
//                                             ...styles.button,
//                                             background: category === name ? "#172033" : "#fff",
//                                             color: category === name ? "#fff" : "#172033",
//                                             borderColor: category === name ? "#172033" : "#d1d5db",
//                                         }}
//                                     >
//                                         {name}
//                                     </button>
//                                 )
//                             )}
//                         </div>

//                         <div
//                             style={{
//                                 display: "grid",
//                                 gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
//                                 gap: 12,
//                             }}
//                         >
//                             {filteredBackgrounds.map((item) => {
//                                 const active = selectedId === item.id;

//                                 return (
//                                     <button
//                                         key={item.id}
//                                         type="button"
//                                         onClick={() => chooseBackground(item)}
//                                         aria-pressed={active}
//                                         style={{
//                                             border: active
//                                                 ? "3px solid #2563eb"
//                                                 : "1px solid #e2e8f0",
//                                             borderRadius: 11,
//                                             padding: 4,
//                                             background: "#fff",
//                                             textAlign: "left",
//                                             cursor: "pointer",
//                                             minWidth: 0,
//                                         }}
//                                     >
//                                         <div
//                                             style={{
//                                                 height: 105,
//                                                 position: "relative",
//                                                 overflow: "hidden",
//                                                 borderRadius: 7,
//                                                 background: "#e2e8f0",
//                                             }}
//                                         >
//                                             <img
//                                                 src={item.src}
//                                                 alt={item.name}
//                                                 loading="lazy"
//                                                 style={{
//                                                     width: "100%",
//                                                     height: "100%",
//                                                     objectFit: "cover",
//                                                     display: "block",
//                                                 }}
//                                                 onError={(event) => {
//                                                     event.currentTarget.style.opacity = "0.2";
//                                                 }}
//                                             />
//                                             <div
//                                                 style={getShapeStyle(
//                                                     item.shape,
//                                                     item.color || "#FFFFFF",
//                                                     item.opacity ?? 88
//                                                 )}
//                                             />
//                                             {active && (
//                                                 <span
//                                                     style={{
//                                                         position: "absolute",
//                                                         top: 6,
//                                                         right: 6,
//                                                         background: "#2563eb",
//                                                         color: "#fff",
//                                                         borderRadius: 20,
//                                                         padding: "3px 7px",
//                                                         fontSize: 11,
//                                                     }}
//                                                 >
//                                                     Selected
//                                                 </span>
//                                             )}
//                                         </div>
//                                         <div
//                                             style={{
//                                                 fontSize: 12,
//                                                 fontWeight: 700,
//                                                 padding: "8px 4px 5px",
//                                                 lineHeight: 1.35,
//                                             }}
//                                         >
//                                             {item.name}
//                                         </div>
//                                     </button>
//                                 );
//                             })}
//                         </div>

//                         {filteredBackgrounds.length === 0 && (
//                             <p style={{ color: "#64748b" }}>
//                                 No backgrounds match your search.
//                             </p>
//                         )}
//                     </section>

//                     <aside style={{ minWidth: 0 }}>
//                         <div style={styles.sectionTitle}>Live preview</div>

//                         <div
//                             style={{
//                                 position: "relative",
//                                 width: "100%",
//                                 aspectRatio: "4 / 3",
//                                 overflow: "hidden",
//                                 borderRadius: 12,
//                                 background: "#e2e8f0",
//                                 marginBottom: 20,
//                             }}
//                         >
//                             {selected?.src && (
//                                 <img
//                                     src={selected.src}
//                                     alt="Selected background preview"
//                                     style={{
//                                         position: "absolute",
//                                         inset: 0,
//                                         width: "100%",
//                                         height: "100%",
//                                         objectFit: "cover",
//                                     }}
//                                 />
//                             )}
//                             <div style={getShapeStyle(shape, color, opacity)} />
//                             <div
//                                 style={{
//                                     position: "absolute",
//                                     zIndex: 1,
//                                     left: 12,
//                                     right: 12,
//                                     bottom: 12,
//                                     color: color.toLowerCase() === "#ffffff" ? "#172033" : "#fff",
//                                     textShadow: "0 1px 5px rgba(0,0,0,.45)",
//                                     fontWeight: 800,
//                                     fontSize: 20,
//                                 }}
//                             >
//                                 YOUR BRAND
//                                 <div style={{ fontSize: 12, fontWeight: 500 }}>
//                                     Your message goes here
//                                 </div>
//                             </div>
//                         </div>

//                         <div style={styles.sectionTitle}>Overlay color</div>
//                         <div
//                             style={{
//                                 display: "grid",
//                                 gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
//                                 gap: 8,
//                                 marginBottom: 12,
//                             }}
//                         >
//                             {BUSINESS_PHOTO_COLORS.map((preset) => (
//                                 <button
//                                     key={preset}
//                                     type="button"
//                                     title={preset}
//                                     aria-label={`Choose ${preset}`}
//                                     onClick={() => setColor(preset)}
//                                     style={{
//                                         height: 30,
//                                         borderRadius: 7,
//                                         background: preset,
//                                         border:
//                                             color.toLowerCase() === preset.toLowerCase()
//                                                 ? "3px solid #2563eb"
//                                                 : "1px solid #cbd5e1",
//                                         cursor: "pointer",
//                                     }}
//                                 />
//                             ))}
//                         </div>

//                         <label
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 fontSize: 13,
//                                 marginBottom: 7,
//                             }}
//                         >
//                             <span>Custom color</span>
//                             <strong>{color.toUpperCase()}</strong>
//                         </label>
//                         <input
//                             type="color"
//                             value={color}
//                             onChange={(event) => setColor(event.target.value)}
//                             style={{
//                                 width: "100%",
//                                 height: 40,
//                                 padding: 3,
//                                 border: "1px solid #d1d5db",
//                                 borderRadius: 8,
//                                 background: "#fff",
//                                 marginBottom: 16,
//                                 cursor: "pointer",
//                             }}
//                         />

//                         <label
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 fontSize: 13,
//                                 marginBottom: 7,
//                             }}
//                         >
//                             <span>Color opacity</span>
//                             <strong>{opacity}%</strong>
//                         </label>
//                         <input
//                             type="range"
//                             min="0"
//                             max="100"
//                             step="5"
//                             value={opacity}
//                             onChange={(event) => setOpacity(Number(event.target.value))}
//                             style={{ width: "100%", marginBottom: 20 }}
//                         />

//                         <div style={styles.sectionTitle}>Overlay shape</div>
//                         <div
//                             style={{
//                                 display: "grid",
//                                 gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//                                 gap: 8,
//                                 marginBottom: 20,
//                             }}
//                         >
//                             {BUSINESS_PHOTO_SHAPES.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     type="button"
//                                     onClick={() => setShape(item.id)}
//                                     style={{
//                                         ...styles.button,
//                                         padding: "10px 5px",
//                                         fontSize: 12,
//                                         background: shape === item.id ? "#eff6ff" : "#fff",
//                                         borderColor: shape === item.id ? "#2563eb" : "#d1d5db",
//                                         color: shape === item.id ? "#1d4ed8" : "#172033",
//                                         fontWeight: shape === item.id ? 750 : 500,
//                                     }}
//                                 >
//                                     {item.name}
//                                 </button>
//                             ))}
//                         </div>

//                         <div
//                             style={{
//                                 display: "flex",
//                                 gap: 9,
//                                 justifyContent: "flex-end",
//                                 borderTop: "1px solid #e5e7eb",
//                                 paddingTop: 16,
//                             }}
//                         >
//                             <button type="button" onClick={onClose} style={styles.button}>
//                                 Cancel
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={applyBackground}
//                                 style={styles.primary}
//                             >
//                                 Apply background
//                             </button>
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//         </div>
//     );
// }


///////////////////////////////////////////////////


import React, { useMemo, useRef, useState } from "react";
import {
    BUSINESS_PHOTO_BACKGROUNDS,
    BUSINESS_PHOTO_CATEGORIES,
    BUSINESS_PHOTO_SHAPES,
    BUSINESS_PHOTO_COLORS,
} from "../data/businessPhotoBackgrounds";

const shapeClipPaths = {
    left: "polygon(0 0, 67% 0, 47% 100%, 0 100%)",
    right: "polygon(33% 0, 100% 0, 100% 100%, 53% 100%)",
    diagonal: "polygon(0 0, 76% 0, 52% 100%, 0 100%)",
    curve: "ellipse(78% 100% at 0% 50%)",
    circle: "circle(64% at 0% 50%)",
    bottom: "polygon(0 48%, 100% 22%, 100% 100%, 0 100%)",
    top: "polygon(0 0, 100% 0, 100% 52%, 0 72%)",
    split: "polygon(0 0, 40% 0, 32% 100%, 0 100%, 68% 0, 100% 0, 100% 100%, 60% 100%)",
    corner: "polygon(0 0, 60% 0, 0 72%)",
    wave: "polygon(0 0, 66% 0, 60% 18%, 49% 36%, 45% 56%, 35% 77%, 25% 100%, 0 100%)",
    full: "none",
    minimal: "polygon(0 0, 42% 0, 30% 100%, 0 100%)",
};

const styles = {
    backdrop: {
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(15,23,42,.68)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    modal: {
        width: "min(1180px, 96vw)",
        maxHeight: "92vh",
        overflow: "auto",
        background: "#fff",
        color: "#172033",
        borderRadius: 18,
        boxShadow: "0 24px 80px rgba(0,0,0,.28)",
        fontFamily: "Inter, system-ui, sans-serif",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "20px 24px",
        borderBottom: "1px solid #e5e7eb",
    },
    body: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.5fr) minmax(280px, .8fr)",
        gap: 22,
        padding: 22,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 750,
        marginBottom: 10,
    },
    button: {
        border: "1px solid #d1d5db",
        background: "#fff",
        color: "#172033",
        borderRadius: 9,
        padding: "9px 12px",
        cursor: "pointer",
        fontSize: 13,
    },
    primary: {
        border: 0,
        background: "#2563eb",
        color: "#fff",
        borderRadius: 9,
        padding: "11px 18px",
        cursor: "pointer",
        fontWeight: 700,
    },
};

function getShapeStyle(shape, color, opacity) {
    return {
        position: "absolute",
        inset: 0,
        backgroundColor: color,
        opacity: opacity / 100,
        clipPath: shapeClipPaths[shape] || shapeClipPaths.left,
    };
}

export default function BusinessPhotoBackgroundPicker({
    isOpen,
    onClose,
    onApply,
}) {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState(
        BUSINESS_PHOTO_BACKGROUNDS[0]?.id
    );
    const [color, setColor] = useState("#FFFFFF");
    const [opacity, setOpacity] = useState(88);
    const [shape, setShape] = useState("left");

    const fileInputRef = useRef(null);
    const [uploadedBackground, setUploadedBackground] = useState(null);
    const [uploadError, setUploadError] = useState("");

    // const selected = BUSINESS_PHOTO_BACKGROUNDS.find(
    //     (item) => item.id === selectedId
    // );

    // const filteredBackgrounds = useMemo(() => {
    //     const term = search.trim().toLowerCase();

    //     return BUSINESS_PHOTO_BACKGROUNDS.filter((item) => {
    //         const categoryMatches =
    //             category === "All" || item.category === category;

    //         const searchMatches =
    //             !term ||
    //             item.name.toLowerCase().includes(term) ||
    //             item.category.toLowerCase().includes(term) ||
    //             item.keywords?.some((keyword) =>
    //                 keyword.toLowerCase().includes(term)
    //             );

    //         return categoryMatches && searchMatches;
    //     });
    // }, [category, search]);


    const allBackgrounds = useMemo(
        () =>
            uploadedBackground
                ? [uploadedBackground, ...BUSINESS_PHOTO_BACKGROUNDS]
                : BUSINESS_PHOTO_BACKGROUNDS,
        [uploadedBackground]
    );

    const selected = allBackgrounds.find(
        (item) => item.id === selectedId
    );

    const filteredBackgrounds = useMemo(() => {
        const term = search.trim().toLowerCase();

        return allBackgrounds.filter((item) => {
            const categoryMatches =
                category === "All" || item.category === category;

            const searchMatches =
                !term ||
                item.name.toLowerCase().includes(term) ||
                item.category.toLowerCase().includes(term) ||
                item.keywords?.some((keyword) =>
                    keyword.toLowerCase().includes(term)
                );

            return categoryMatches && searchMatches;
        });
    }, [allBackgrounds, category, search]);

    function chooseBackground(item) {
        setSelectedId(item.id);
        setColor(item.color || "#FFFFFF");
        setOpacity(item.opacity ?? 88);
        setShape(item.shape || "left");
    }

    function applyBackground() {
        if (!selected?.src) {
            console.error("Selected background has no image source:", selected);
            return;
        }

        onApply({
            ...selected,
            type: "business-photo",
            color,
            opacity,
            shape,
            overlay: "custom",
        });

        onClose();
    }



    function handleCustomBackgroundUpload(event) {
        const file = event.target.files?.[0];

        // Allow the user to select the same file again later.
        event.target.value = "";

        if (!file) return;

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
            setUploadError("Please upload a JPG, PNG, or WebP image.");
            return;
        }

        const MAX_FILE_SIZE = 15 * 1024 * 1024;

        if (file.size > MAX_FILE_SIZE) {
            setUploadError("Please choose an image smaller than 15 MB.");
            return;
        }

        setUploadError("");

        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result !== "string") {
                setUploadError("Unable to read this image. Please try another file.");
                return;
            }

            const customBackground = {
                id: `custom-upload-${Date.now()}`,
                name: file.name,
                category: "Your Uploads",
                icon: "📤",
                src: reader.result,
                shape,
                color,
                opacity,
                overlay: "custom",
                keywords: ["custom", "uploaded", file.name.toLowerCase()],
                tags: ["Your Uploads", "Custom"],
                isCustomUpload: true,
            };

            setUploadedBackground(customBackground);
            setSelectedId(customBackground.id);
        };

        reader.onerror = () => {
            setUploadError("Unable to read this image. Please try again.");
        };

        reader.readAsDataURL(file);
    }

    if (!isOpen) return null;

    return (
        <div
            className="business-photo-picker-backdrop"
            style={styles.backdrop}
            onMouseDown={onClose}
        >
            <style>{`
                .business-photo-picker-backdrop {
                    box-sizing: border-box;
                    -webkit-overflow-scrolling: touch;
                }
                .business-photo-picker-backdrop *,
                .business-photo-picker-backdrop *::before,
                .business-photo-picker-backdrop *::after {
                    box-sizing: border-box;
                }
                .business-photo-picker-modal {
                    min-width: 0;
                    overscroll-behavior: contain;
                }
                .business-photo-picker-body {
                    min-width: 0;
                    align-items: start;
                }
                .business-photo-picker-body > section,
                .business-photo-picker-body > aside {
                    min-width: 0;
                    width: 100%;
                }
                .business-photo-picker-gallery {
                    min-width: 0;
                    grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr)) !important;
                }
                .business-photo-picker-actions {
                    flex-wrap: wrap;
                }
                @media (max-width: 760px) {
                    .business-photo-picker-backdrop {
                        padding: 8px !important;
                        align-items: stretch !important;
                        justify-content: center !important;
                    }
                    .business-photo-picker-modal {
                        width: 100% !important;
                        max-width: 100% !important;
                        max-height: calc(100vh - 16px) !important;
                        max-height: calc(100dvh - 16px) !important;
                        overflow-x: hidden !important;
                        overflow-y: auto !important;
                        border-radius: 12px !important;
                    }
                    .business-photo-picker-header {
                        padding: 14px !important;
                        align-items: flex-start !important;
                        gap: 8px !important;
                    }
                    .business-photo-picker-header h2 {
                        font-size: 17px !important;
                        line-height: 1.3 !important;
                    }
                    .business-photo-picker-header p {
                        font-size: 12px !important;
                        line-height: 1.4 !important;
                    }
                    .business-photo-picker-body {
                        display: grid !important;
                        grid-template-columns: minmax(0, 1fr) !important;
                        gap: 18px !important;
                        padding: 12px !important;
                    }
                    .business-photo-picker-upload {
                        padding: 12px !important;
                    }
                    .business-photo-picker-upload-row {
                        align-items: flex-start !important;
                        gap: 10px !important;
                    }
                    .business-photo-picker-upload-row > div:nth-child(2) {
                        flex: 1 1 150px !important;
                        min-width: 0 !important;
                    }
                    .business-photo-picker-upload-row button {
                        flex: 0 0 auto;
                        max-width: 100%;
                        white-space: normal;
                    }
                    .business-photo-picker-gallery {
                        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                        gap: 8px !important;
                    }
                    .business-photo-picker-gallery > button {
                        width: 100%;
                    }
                    .business-photo-picker-gallery > button > div:first-child {
                        height: clamp(85px, 28vw, 125px) !important;
                    }
                    .business-photo-picker-body aside {
                        padding-top: 2px;
                    }
                    .business-photo-picker-actions {
                        position: sticky;
                        bottom: -12px;
                        z-index: 3;
                        background: #fff;
                        padding: 12px 0 max(8px, env(safe-area-inset-bottom)) !important;
                        justify-content: stretch !important;
                    }
                    .business-photo-picker-actions button {
                        flex: 1 1 110px;
                        min-height: 42px;
                    }
                }
                @media (max-width: 360px) {
                    .business-photo-picker-gallery {
                        grid-template-columns: minmax(0, 1fr) !important;
                    }
                    .business-photo-picker-upload-row > div:first-child {
                        display: none !important;
                    }
                }
            `}</style>
            <div
                className="business-photo-picker-modal"
                style={styles.modal}
                onMouseDown={(event) => event.stopPropagation()}
            >
                <header className="business-photo-picker-header" style={styles.header}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 21 }}>
                            Business Photo Backgrounds
                        </h2>
                        <p style={{ margin: "5px 0 0", color: "#64748b", fontSize: 13 }}>
                            Choose a photo, color and shape for your design.
                        </p>
                    </div>

                    <button
                        type="button"
                        aria-label="Close background picker"
                        onClick={onClose}
                        style={{ ...styles.button, fontSize: 20, padding: "5px 12px" }}
                    >
                        ×
                    </button>
                </header>

                <div className="business-photo-picker-body" style={styles.body}>
                    <section style={{ minWidth: 0 }}>

                        <div
                            className="business-photo-picker-upload"
                            style={{
                                padding: 16,
                                marginBottom: 14,
                                border: "1px dashed #93a4bd",
                                borderRadius: 12,
                                background: "#f8fafc",
                            }}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={handleCustomBackgroundUpload}
                                style={{ display: "none" }}
                            />

                            <div
                                className="business-photo-picker-upload-row"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    flexWrap: "wrap",
                                }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: 10,
                                        background: "#dbeafe",
                                        color: "#1d4ed8",
                                        fontSize: 22,
                                    }}
                                >
                                    ↑
                                </div>

                                <div style={{ flex: 1, minWidth: 140 }}>
                                    <div style={{ fontWeight: 750, fontSize: 14 }}>
                                        Your Business Background
                                    </div>

                                    <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>
                                        Upload your own photo and customize it before applying.
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    style={styles.primary}
                                >
                                    + Upload photo
                                </button>
                            </div>

                            {uploadError && (
                                <p
                                    role="alert"
                                    style={{
                                        color: "#b91c1c",
                                        fontSize: 12,
                                        margin: "10px 0 0",
                                    }}
                                >
                                    {uploadError}
                                </p>
                            )}

                            {uploadedBackground && (
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        marginTop: 12,
                                    }}
                                >
                                    <img
                                        src={uploadedBackground.src}
                                        alt="Your uploaded background"
                                        style={{
                                            width: 64,
                                            height: 46,
                                            objectFit: "cover",
                                            borderRadius: 7,
                                        }}
                                    />

                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 700,
                                                overflowWrap: "anywhere",
                                            }}
                                        >
                                            {uploadedBackground.name}
                                        </div>
                                        <div style={{ fontSize: 11, color: "#64748b" }}>
                                            Ready to preview and apply
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setUploadedBackground(null);

                                            if (selectedId === uploadedBackground.id) {
                                                setSelectedId(BUSINESS_PHOTO_BACKGROUNDS[0]?.id);
                                            }
                                        }}
                                        style={styles.button}
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>

                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search backgrounds or business types..."
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                                padding: 12,
                                border: "1px solid #d1d5db",
                                borderRadius: 10,
                                marginBottom: 12,
                                fontSize: 14,
                            }}
                        />

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 7,
                                marginBottom: 16,
                            }}
                        >
                            {["All", ...BUSINESS_PHOTO_CATEGORIES.map((c) => c.category)].map(
                                (name) => (
                                    <button
                                        type="button"
                                        key={name}
                                        onClick={() => setCategory(name)}
                                        style={{
                                            ...styles.button,
                                            background: category === name ? "#172033" : "#fff",
                                            color: category === name ? "#fff" : "#172033",
                                            borderColor: category === name ? "#172033" : "#d1d5db",
                                        }}
                                    >
                                        {name}
                                    </button>
                                )
                            )}
                        </div>

                        <div
                            className="business-photo-picker-gallery"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                                gap: 12,
                            }}
                        >
                            {filteredBackgrounds.map((item) => {
                                const active = selectedId === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => chooseBackground(item)}
                                        aria-pressed={active}
                                        style={{
                                            border: active
                                                ? "3px solid #2563eb"
                                                : "1px solid #e2e8f0",
                                            borderRadius: 11,
                                            padding: 4,
                                            background: "#fff",
                                            textAlign: "left",
                                            cursor: "pointer",
                                            minWidth: 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: 105,
                                                position: "relative",
                                                overflow: "hidden",
                                                borderRadius: 7,
                                                background: "#e2e8f0",
                                            }}
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.name}
                                                loading="lazy"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    display: "block",
                                                }}
                                                onError={(event) => {
                                                    event.currentTarget.style.opacity = "0.2";
                                                }}
                                            />
                                            <div
                                                style={getShapeStyle(
                                                    item.shape,
                                                    item.color || "#FFFFFF",
                                                    item.opacity ?? 88
                                                )}
                                            />
                                            {active && (
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        top: 6,
                                                        right: 6,
                                                        background: "#2563eb",
                                                        color: "#fff",
                                                        borderRadius: 20,
                                                        padding: "3px 7px",
                                                        fontSize: 11,
                                                    }}
                                                >
                                                    Selected
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 700,
                                                padding: "8px 4px 5px",
                                                lineHeight: 1.35,
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {filteredBackgrounds.length === 0 && (
                            <p style={{ color: "#64748b" }}>
                                No backgrounds match your search.
                            </p>
                        )}
                    </section>

                    <aside style={{ minWidth: 0 }}>
                        <div style={styles.sectionTitle}>Live preview</div>

                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "4 / 3",
                                overflow: "hidden",
                                borderRadius: 12,
                                background: "#e2e8f0",
                                marginBottom: 20,
                            }}
                        >
                            {selected?.src && (
                                <img
                                    src={selected.src}
                                    alt="Selected background preview"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                            <div style={getShapeStyle(shape, color, opacity)} />
                            <div
                                style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    left: 12,
                                    right: 12,
                                    bottom: 12,
                                    color: color.toLowerCase() === "#ffffff" ? "#172033" : "#fff",
                                    textShadow: "0 1px 5px rgba(0,0,0,.45)",
                                    fontWeight: 800,
                                    fontSize: 20,
                                }}
                            >
                                YOUR BRAND
                                <div style={{ fontSize: 12, fontWeight: 500 }}>
                                    Your message goes here
                                </div>
                            </div>
                        </div>

                        <div style={styles.sectionTitle}>Overlay color</div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
                                gap: 8,
                                marginBottom: 12,
                            }}
                        >
                            {BUSINESS_PHOTO_COLORS.map((preset) => (
                                <button
                                    key={preset}
                                    type="button"
                                    title={preset}
                                    aria-label={`Choose ${preset}`}
                                    onClick={() => setColor(preset)}
                                    style={{
                                        height: 30,
                                        borderRadius: 7,
                                        background: preset,
                                        border:
                                            color.toLowerCase() === preset.toLowerCase()
                                                ? "3px solid #2563eb"
                                                : "1px solid #cbd5e1",
                                        cursor: "pointer",
                                    }}
                                />
                            ))}
                        </div>

                        <label
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: 13,
                                marginBottom: 7,
                            }}
                        >
                            <span>Custom color</span>
                            <strong>{color.toUpperCase()}</strong>
                        </label>
                        <input
                            type="color"
                            value={color}
                            onChange={(event) => setColor(event.target.value)}
                            style={{
                                width: "100%",
                                height: 40,
                                padding: 3,
                                border: "1px solid #d1d5db",
                                borderRadius: 8,
                                background: "#fff",
                                marginBottom: 16,
                                cursor: "pointer",
                            }}
                        />

                        <label
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: 13,
                                marginBottom: 7,
                            }}
                        >
                            <span>Color opacity</span>
                            <strong>{opacity}%</strong>
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={opacity}
                            onChange={(event) => setOpacity(Number(event.target.value))}
                            style={{ width: "100%", marginBottom: 20 }}
                        />

                        <div style={styles.sectionTitle}>Overlay shape</div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                gap: 8,
                                marginBottom: 20,
                            }}
                        >
                            {BUSINESS_PHOTO_SHAPES.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setShape(item.id)}
                                    style={{
                                        ...styles.button,
                                        padding: "10px 5px",
                                        fontSize: 12,
                                        background: shape === item.id ? "#eff6ff" : "#fff",
                                        borderColor: shape === item.id ? "#2563eb" : "#d1d5db",
                                        color: shape === item.id ? "#1d4ed8" : "#172033",
                                        fontWeight: shape === item.id ? 750 : 500,
                                    }}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div
                            className="business-photo-picker-actions"
                            style={{
                                display: "flex",
                                gap: 9,
                                justifyContent: "flex-end",
                                borderTop: "1px solid #e5e7eb",
                                paddingTop: 16,
                            }}
                        >
                            <button type="button" onClick={onClose} style={styles.button}>
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={applyBackground}
                                style={styles.primary}
                            >
                                Apply background
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
