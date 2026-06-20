// // import { useState, useEffect } from "react";
// // import {
// //     FaImage,
// //     FaBuilding,
// //     FaPhone,
// //     FaShapes,
// //     FaPalette,
// //     FaShareAlt,
// //     FaSquare,
// //     FaRegSquare
// // } from "react-icons/fa";

// // import { TbRectangleVertical } from "react-icons/tb";
// // // import { FaSquare, FaRegSquare } from "react-icons/fa";
// // import { FaDrawPolygon } from "react-icons/fa";
// // import { TbDiamond } from "react-icons/tb"; // ✅ THIS WORKS
// // import translations from "../data/translations";
// // import Tippy from "@tippyjs/react";
// // import "tippy.js/dist/tippy.css";

// // export default function LeftPanel({
// //     t,
// //     texts,
// //     setTexts,
// //     images,
// //     setImages,
// //     setBackground,
// //     blocks,
// //     setBlocks,
// //     language
// // }) {

// //     const [activeSection, setActiveSection] = useState(null);

// //     const inputClass =
// //         "w-full px-3 py-2 rounded-md bg-white text-[#0b1f33] border border-[#0b1f33]/40 shadow focus:outline-none focus:ring-2 focus:ring-[#0b1f33]";

// //     const label = key => translations[language]?.[key] || key;

// //     // const isMobile = window.innerWidth < 768;
// //     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

// //     useEffect(() => {
// //         const resize = () => setIsMobile(window.innerWidth < 768);
// //         window.addEventListener("resize", resize);
// //         return () => window.removeEventListener("resize", resize);
// //     }, []);

// //     const toggleSection = section => {
// //         setActiveSection(prev => prev === section ? null : section);
// //     };

// //     const show = section => !isMobile || activeSection === section;

// //     /* ---------------- TEXT UPDATE ---------------- */

// //     const updateText = (id, value) =>
// //         setTexts(texts.map(t => (t.id === id ? { ...t, text: value } : t)));

// //     const updateContact = (prefix, value) =>
// //         setTexts(
// //             texts.map(t =>
// //                 t.type === "contact" && t.text.startsWith(prefix)
// //                     ? { ...t, text: `${prefix} ${value}` }
// //                     : t
// //             )
// //         );

// //     /* ---------------- IMAGE ---------------- */

// //     const addImage = e => {
// //         const file = e.target.files[0];
// //         if (!file) return;

// //         const img = new Image();
// //         img.src = URL.createObjectURL(file);

// //         img.onload = () =>
// //             setImages(prev => [
// //                 ...prev,
// //                 {
// //                     id: Date.now(),
// //                     type: "image",
// //                     image: img,
// //                     x: 200,
// //                     y: 200,
// //                     width: 180,
// //                     height: 180,
// //                     rotation: 0
// //                 }
// //             ]);
// //     };

// //     const addSocial = src => {
// //         const img = new Image();
// //         img.src = src;

// //         img.onload = () =>
// //             setImages(prev => [
// //                 ...prev,
// //                 {
// //                     id: Date.now(),
// //                     type: "image",
// //                     image: img,
// //                     x: 120,
// //                     y: 120,
// //                     width: 48,
// //                     height: 48,
// //                     rotation: 0
// //                 }
// //             ]);
// //     };

// //     /* ---------------- BLOCKS ---------------- */

// //     const addBlock = shape => {
// //         setBlocks(prev => [
// //             ...prev,
// //             {
// //                 id: Date.now(),
// //                 shape,
// //                 x: 100,
// //                 y: 100,
// //                 width: 200,
// //                 height: 150,
// //                 rotation: 0,
// //                 fill: "rgba(0,0,0,0.5)"
// //             }
// //         ]);
// //     };

// //     /* ---------------- COLOR ---------------- */

// //     const lastBlock = blocks[blocks.length - 1];

// //     const changeColor = color => {
// //         if (!lastBlock) return;

// //         const rgba = lastBlock.fill || "rgba(0,0,0,0.5)";
// //         const alpha = rgba.split(",")[3]?.replace(")", "") || 0.5;

// //         const r = parseInt(color.substr(1, 2), 16);
// //         const g = parseInt(color.substr(3, 2), 16);
// //         const b = parseInt(color.substr(5, 2), 16);

// //         const newColor = `rgba(${r},${g},${b},${alpha})`;

// //         setBlocks(prev =>
// //             prev.map((b, i) => (i === prev.length - 1 ? { ...b, fill: newColor } : b))
// //         );
// //     };

// //     const changeAlpha = alpha => {
// //         if (!lastBlock) return;

// //         const rgba = lastBlock.fill.match(/\d+/g);
// //         const r = rgba[0];
// //         const g = rgba[1];
// //         const b = rgba[2];

// //         const newColor = `rgba(${r},${g},${b},${alpha})`;

// //         setBlocks(prev =>
// //             prev.map((b, i) => (i === prev.length - 1 ? { ...b, fill: newColor } : b))
// //         );
// //     };

// //     const hexFromRGBA = rgba => {
// //         const result = rgba?.match(/\d+/g);
// //         if (!result) return "#000000";
// //         const r = parseInt(result[0]).toString(16).padStart(2, "0");
// //         const g = parseInt(result[1]).toString(16).padStart(2, "0");
// //         const b = parseInt(result[2]).toString(16).padStart(2, "0");
// //         return `#${r}${g}${b}`;
// //     };

// //     const alphaFromRGBA = rgba => {
// //         const match = rgba?.match(/rgba\((\d+),(\d+),(\d+),([0-9.]+)\)/);
// //         return match ? parseFloat(match[4]) : 0.5;
// //     };

// //     return (
// //         <div className="leftpanel-container">

// //             {/* MOBILE ICON BAR */}

// //             {/* <div className="leftpanel-icons">

// //                 <Tippy content="Business Details">
// //                     <button className="icon-btn" onClick={() => toggleSection("business")}>
// //                         <FaBuilding />
// //                     </button>
// //                 </Tippy>

// //                 <Tippy content="Contact Details">
// //                     <button className="icon-btn" onClick={() => toggleSection("contact")}>
// //                         <FaPhone />
// //                     </button>
// //                 </Tippy>

// //                 <Tippy content="Images">
// //                     <button className="icon-btn" onClick={() => toggleSection("images")}>
// //                         <FaImage />
// //                     </button>
// //                 </Tippy>

// //                 <Tippy content="Shape Blocks">
// //                     <button className="icon-btn" onClick={() => toggleSection("blocks")}>
// //                         <FaShapes />
// //                     </button>
// //                 </Tippy>

// //                 <Tippy content="Social Icons">
// //                     <button className="icon-btn" onClick={() => toggleSection("social")}>
// //                         <FaShareAlt />
// //                     </button>
// //                 </Tippy>

// //             </div> */}

// //             <div className="leftpanel-icons">

// //                 <div className="icon-item">
// //                     <button className="icon-btn" onClick={() => toggleSection("business")}>
// //                         <FaBuilding />
// //                     </button>
// //                     {isMobile && <span className="icon-label">Business</span>}
// //                 </div>

// //                 <div className="icon-item">
// //                     <button className="icon-btn" onClick={() => toggleSection("contact")}>
// //                         <FaPhone />
// //                     </button>
// //                     {isMobile && <span className="icon-label">Contact</span>}
// //                 </div>

// //                 <div className="icon-item">
// //                     <button className="icon-btn" onClick={() => toggleSection("images")}>
// //                         <FaImage />
// //                     </button>
// //                     {isMobile && <span className="icon-label">Images</span>}
// //                 </div>

// //                 <div className="icon-item">
// //                     <button className="icon-btn" onClick={() => toggleSection("blocks")}>
// //                         <FaShapes />
// //                     </button>
// //                     {isMobile && <span className="icon-label">Shapes</span>}
// //                 </div>

// //                 <div className="icon-item">
// //                     <button className="icon-btn" onClick={() => toggleSection("social")}>
// //                         <FaShareAlt />
// //                     </button>
// //                     {isMobile && <span className="icon-label">Social</span>}
// //                 </div>

// //             </div>

// //             <div className={`leftpanel-full ${activeSection ? "active" : ""}`}>

// //                 {show("business") && (
// //                     <>
// //                         <h3 className="font-semibold">{t.business || "Business"}</h3>

// //                         <input
// //                             className={inputClass}
// //                             value={texts.find(t => t.id === 1)?.text || ""}
// //                             onChange={e => updateText(1, e.target.value)}
// //                         />

// //                         <input
// //                             className={inputClass}
// //                             value={texts.find(t => t.id === 2)?.text || ""}
// //                             onChange={e => updateText(2, e.target.value)}
// //                         />

// //                         <textarea
// //                             className={inputClass + " h-24 resize-none"}
// //                             value={texts.find(t => t.id === 3)?.text || ""}
// //                             onChange={e => updateText(3, e.target.value)}
// //                         />
// //                     </>
// //                 )}

// //                 {show("contact") && (
// //                     <>
// //                         <h3 className="font-semibold pt-2">{t.contact || "Contact"}</h3>

// //                         <input
// //                             className={inputClass}
// //                             value={texts.find(t => t.id === 4)?.text.replace("📞 ", "") || ""}
// //                             onChange={e => updateContact("📞", e.target.value)}
// //                         />

// //                         <input
// //                             className={inputClass}
// //                             value={texts.find(t => t.id === 5)?.text.replace("✉ ", "") || ""}
// //                             onChange={e => updateContact("✉", e.target.value)}
// //                         />

// //                         <input
// //                             className={inputClass}
// //                             value={texts.find(t => t.id === 6)?.text.replace("📍 ", "") || ""}
// //                             onChange={e => updateContact("📍", e.target.value)}
// //                         />
// //                     </>
// //                 )}

// //                 {show("images") && (
// //                     <>
// //                         <h3 className="font-semibold pt-2">{t.backgroundImage || "Background Image"} </h3>

// //                         <label className="flex items-center gap-2 py-2 px-3 bg-[#0b1f33] text-white rounded cursor-pointer shadow">
// //                             <FaImage /> Upload Background
// //                             <input
// //                                 type="file"
// //                                 accept="image/*"
// //                                 hidden
// //                                 onChange={e => {
// //                                     const file = e.target.files[0];
// //                                     if (!file) return;

// //                                     const reader = new FileReader();

// //                                     reader.onload = () => {
// //                                         const img = new window.Image();
// //                                         img.src = reader.result;

// //                                         img.onload = () => {
// //                                             setBackground({
// //                                                 type: "image",
// //                                                 image: img,
// //                                                 src: reader.result
// //                                             });
// //                                         };
// //                                     };

// //                                     reader.readAsDataURL(file);
// //                                 }}
// //                             />
// //                         </label>

// //                         <h3 className="font-semibold pt-3">{t.extraImages || "Extra Images"}</h3>

// //                         <label className="flex items-center gap-2 bg-[#0b1f33] text-white px-3 py-2 rounded cursor-pointer shadow">
// //                             <FaImage /> Upload
// //                             <input type="file" hidden onChange={addImage} />
// //                         </label>
// //                     </>
// //                 )}


// //                 {show("blocks") && (
// //                     <>
// //                         <h3 className="font-semibold pt-2">{t.blockShapes || "Shape Blocks"}</h3>

// //                         <div className="grid grid-cols-2 gap-3">

// //                             <button
// //                                 onClick={() => addBlock("rectangle")}
// //                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
// //                             >
// //                                 <FaSquare className="text-white text-sm" />
// //                                 Rectangle
// //                             </button>

// //                             <button
// //                                 onClick={() => addBlock("rhombus")}
// //                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
// //                             >
// //                                 <TbDiamond className="text-white text-sm rotate-45" />
// //                                 Rhombus
// //                             </button>

// //                             <button
// //                                 onClick={() => addBlock("parallelogram")}
// //                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
// //                             >
// //                                 <TbRectangleVertical className="text-white text-sm rotate-12" />
// //                                 Parallelogram
// //                             </button>

// //                             <button
// //                                 onClick={() => addBlock("trapezoid")}
// //                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
// //                             >
// //                                 <FaDrawPolygon className="text-white text-sm" />
// //                                 Trapezoid
// //                             </button>

// //                             <button
// //                                 onClick={() => addBlock("heptagon")}
// //                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow col-span-2 hover:bg-[#132f4c] transition"
// //                             >
// //                                 <FaShapes className="text-white text-sm" />
// //                                 Heptagon
// //                             </button>

// //                         </div>

// //                         {lastBlock && (
// //                             <>
// //                                 <h3 className="font-semibold pt-3">{t.blockColor || "Block Color"}</h3>

// //                                 <input
// //                                     type="color"
// //                                     value={hexFromRGBA(lastBlock.fill)}
// //                                     onChange={e => changeColor(e.target.value)}
// //                                     className="w-full h-10"
// //                                 />

// //                                 <input
// //                                     type="range"
// //                                     min="0"
// //                                     max="1"
// //                                     step="0.05"
// //                                     value={alphaFromRGBA(lastBlock.fill)}
// //                                     onChange={e => changeAlpha(e.target.value)}
// //                                     className="w-full"
// //                                 />
// //                             </>
// //                         )}

// //                     </>
// //                 )}



// //                 {show("social") && (
// //                     <>
// //                         <h3 className="font-semibold pt-2">{t.socialMedia || "Social Media"} </h3>

// //                         <div className="grid grid-cols-5 gap-2">
// //                             {["facebook", "instagram", "whatsapp", "youtube", "twitter"].map(name => (
// //                                 <button
// //                                     key={name}
// //                                     onClick={() => addSocial(`/social/${name}.png`)}
// //                                     className="p-2 bg-white rounded-lg shadow"
// //                                 >
// //                                     <img src={`/social/${name}.png`} />
// //                                 </button>
// //                             ))}
// //                         </div>
// //                     </>
// //                 )}

// //                 <div className="panel-actions">
// //                     <button
// //                         className="btn-close"
// //                         onClick={() => setActiveSection(null)}
// //                     >
// //                         Close
// //                     </button>

// //                     <button
// //                         className="btn-set"
// //                         onClick={() => setActiveSection(null)} // 🔥 auto close after action
// //                     >
// //                         Set
// //                     </button>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // }

// import { useState, useEffect } from "react";
// import {
//     FaImage,
//     FaBuilding,
//     FaPhone,
//     FaShapes,
//     FaPalette,
//     FaShareAlt,
//     FaSquare,
//     FaRegSquare
// } from "react-icons/fa";
// import { FaCircle, FaPlay } from "react-icons/fa";

// import { TbRectangleVertical } from "react-icons/tb";
// // import { FaSquare, FaRegSquare } from "react-icons/fa";
// import { FaDrawPolygon } from "react-icons/fa";
// import { TbDiamond } from "react-icons/tb"; // ✅ THIS WORKS
// import translations from "../data/translations";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";

// export default function LeftPanel({
//     t,
//     texts,
//     setTexts,
//     images,
//     setImages,
//     setBackground,
//     blocks,
//     setBlocks,
//     language
// }) {

//     const [activeSection, setActiveSection] = useState(null);

//     const inputClass =
//         "w-full px-3 py-2 rounded-md bg-white text-[#0b1f33] border border-[#0b1f33]/40 shadow focus:outline-none focus:ring-2 focus:ring-[#0b1f33]";

//     const label = key => translations[language]?.[key] || key;

//     // const isMobile = window.innerWidth < 768;
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//     useEffect(() => {
//         const resize = () => setIsMobile(window.innerWidth < 768);
//         window.addEventListener("resize", resize);
//         return () => window.removeEventListener("resize", resize);
//     }, []);

//     const toggleSection = section => {
//         setActiveSection(prev => prev === section ? null : section);
//     };

//     const show = section => !isMobile || activeSection === section;

//     /* ---------------- TEXT UPDATE ---------------- */

//     const updateText = (id, value) =>
//         setTexts(texts.map(t => (t.id === id ? { ...t, text: value } : t)));

//     const updateContact = (prefix, value) =>
//         setTexts(
//             texts.map(t =>
//                 t.type === "contact" && t.text.startsWith(prefix)
//                     ? { ...t, text: `${prefix} ${value}` }
//                     : t
//             )
//         );

//     /* ---------------- IMAGE ---------------- */

//     const addImage = e => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const img = new Image();
//         img.src = URL.createObjectURL(file);

//         img.onload = () =>
//             setImages(prev => [
//                 ...prev,
//                 {
//                     id: Date.now(),
//                     type: "image",
//                     image: img,
//                     x: 200,
//                     y: 200,
//                     width: 180,
//                     height: 180,
//                     rotation: 0
//                 }
//             ]);
//     };

//     const addSocial = src => {
//         const img = new Image();
//         img.src = src;

//         img.onload = () =>
//             setImages(prev => [
//                 ...prev,
//                 {
//                     id: Date.now(),
//                     type: "image",
//                     image: img,
//                     x: 120,
//                     y: 120,
//                     width: 48,
//                     height: 48,
//                     rotation: 0
//                 }
//             ]);
//     };

//     /* ---------------- BLOCKS ---------------- */

//     const addBlock = shape => {
//         setBlocks(prev => [
//             ...prev,
//             {
//                 id: Date.now(),
//                 shape,
//                 x: shape === "circle" || shape === "triangle" ? 200 : 100,
//                 y: shape === "circle" || shape === "triangle" ? 200 : 100,
//                 width: 200,
//                 height: 150,
//                 rotation: 0,
//                 fill: "rgba(0,0,0,0.5)"
//             }
//         ]);
//     };

//     /* ---------------- COLOR ---------------- */

//     const lastBlock = blocks[blocks.length - 1];

//     const changeColor = color => {
//         if (!lastBlock) return;

//         const rgba = lastBlock.fill || "rgba(0,0,0,0.5)";
//         const alpha = rgba.split(",")[3]?.replace(")", "") || 0.5;

//         const r = parseInt(color.substr(1, 2), 16);
//         const g = parseInt(color.substr(3, 2), 16);
//         const b = parseInt(color.substr(5, 2), 16);

//         const newColor = `rgba(${r},${g},${b},${alpha})`;

//         setBlocks(prev =>
//             prev.map((b, i) => (i === prev.length - 1 ? { ...b, fill: newColor } : b))
//         );
//     };

//     const changeAlpha = alpha => {
//         if (!lastBlock) return;

//         const rgba = lastBlock.fill.match(/\d+/g);
//         const r = rgba[0];
//         const g = rgba[1];
//         const b = rgba[2];

//         const newColor = `rgba(${r},${g},${b},${alpha})`;

//         setBlocks(prev =>
//             prev.map((b, i) => (i === prev.length - 1 ? { ...b, fill: newColor } : b))
//         );
//     };

//     const hexFromRGBA = rgba => {
//         const result = rgba?.match(/\d+/g);
//         if (!result) return "#000000";
//         const r = parseInt(result[0]).toString(16).padStart(2, "0");
//         const g = parseInt(result[1]).toString(16).padStart(2, "0");
//         const b = parseInt(result[2]).toString(16).padStart(2, "0");
//         return `#${r}${g}${b}`;
//     };

//     const alphaFromRGBA = rgba => {
//         const match = rgba?.match(/rgba\((\d+),(\d+),(\d+),([0-9.]+)\)/);
//         return match ? parseFloat(match[4]) : 0.5;
//     };

//     return (
//         <div className="leftpanel-container">

//             {/* MOBILE ICON BAR */}

//             {/* <div className="leftpanel-icons">

//                 <Tippy content="Business Details">
//                     <button className="icon-btn" onClick={() => toggleSection("business")}>
//                         <FaBuilding />
//                     </button>
//                 </Tippy>

//                 <Tippy content="Contact Details">
//                     <button className="icon-btn" onClick={() => toggleSection("contact")}>
//                         <FaPhone />
//                     </button>
//                 </Tippy>

//                 <Tippy content="Images">
//                     <button className="icon-btn" onClick={() => toggleSection("images")}>
//                         <FaImage />
//                     </button>
//                 </Tippy>

//                 <Tippy content="Shape Blocks">
//                     <button className="icon-btn" onClick={() => toggleSection("blocks")}>
//                         <FaShapes />
//                     </button>
//                 </Tippy>

//                 <Tippy content="Social Icons">
//                     <button className="icon-btn" onClick={() => toggleSection("social")}>
//                         <FaShareAlt />
//                     </button>
//                 </Tippy>

//             </div> */}

//             <div className="leftpanel-icons">

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={() => toggleSection("business")}>
//                         <FaBuilding />
//                     </button>
//                     {isMobile && <span className="icon-label">Business</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={() => toggleSection("contact")}>
//                         <FaPhone />
//                     </button>
//                     {isMobile && <span className="icon-label">Contact</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={() => toggleSection("images")}>
//                         <FaImage />
//                     </button>
//                     {isMobile && <span className="icon-label">Images</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={() => toggleSection("blocks")}>
//                         <FaShapes />
//                     </button>
//                     {isMobile && <span className="icon-label">Shapes</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={() => toggleSection("social")}>
//                         <FaShareAlt />
//                     </button>
//                     {isMobile && <span className="icon-label">Social</span>}
//                 </div>

//             </div>

//             <div className={`leftpanel-full ${activeSection ? "active" : ""}`}>

//                 {show("business") && (
//                     <>
//                         <h3 className="font-semibold">{t.business || "Business"}</h3>

//                         <input
//                             className={inputClass}
//                             value={texts.find(t => t.id === 1)?.text || ""}
//                             onChange={e => updateText(1, e.target.value)}
//                         />

//                         <input
//                             className={inputClass}
//                             value={texts.find(t => t.id === 2)?.text || ""}
//                             onChange={e => updateText(2, e.target.value)}
//                         />

//                         <textarea
//                             className={inputClass + " h-24 resize-none"}
//                             value={texts.find(t => t.id === 3)?.text || ""}
//                             onChange={e => updateText(3, e.target.value)}
//                         />
//                     </>
//                 )}

//                 {show("contact") && (
//                     <>
//                         <h3 className="font-semibold pt-2">{t.contact || "Contact"}</h3>

//                         <input
//                             className={inputClass}
//                             value={texts.find(t => t.id === 4)?.text.replace("📞 ", "") || ""}
//                             onChange={e => updateContact("📞", e.target.value)}
//                         />

//                         <input
//                             className={inputClass}
//                             value={texts.find(t => t.id === 5)?.text.replace("✉ ", "") || ""}
//                             onChange={e => updateContact("✉", e.target.value)}
//                         />

//                         <input
//                             className={inputClass}
//                             value={texts.find(t => t.id === 6)?.text.replace("📍 ", "") || ""}
//                             onChange={e => updateContact("📍", e.target.value)}
//                         />
//                     </>
//                 )}

//                 {show("images") && (
//                     <>
//                         <h3 className="font-semibold pt-2">{t.backgroundImage || "Background Image"} </h3>

//                         <label className="flex items-center gap-2 py-2 px-3 bg-[#0b1f33] text-white rounded cursor-pointer shadow">
//                             <FaImage /> Upload Background
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 hidden
//                                 onChange={e => {
//                                     const file = e.target.files[0];
//                                     if (!file) return;

//                                     const reader = new FileReader();

//                                     reader.onload = () => {
//                                         const img = new window.Image();
//                                         img.src = reader.result;

//                                         img.onload = () => {
//                                             setBackground({
//                                                 type: "image",
//                                                 image: img,
//                                                 src: reader.result
//                                             });
//                                         };
//                                     };

//                                     reader.readAsDataURL(file);
//                                 }}
//                             />
//                         </label>

//                         <h3 className="font-semibold pt-3">{t.extraImages || "Extra Images"}</h3>

//                         <label className="flex items-center gap-2 bg-[#0b1f33] text-white px-3 py-2 rounded cursor-pointer shadow">
//                             <FaImage /> Upload
//                             <input type="file" hidden onChange={addImage} />
//                         </label>
//                     </>
//                 )}


//                 {show("blocks") && (
//                     <>
//                         <h3 className="font-semibold pt-2">{t.blockShapes || "Shape Blocks"}</h3>

//                         <div className="grid grid-cols-2 gap-3">

//                             <button
//                                 onClick={() => addBlock("rectangle")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
//                             >
//                                 <FaSquare className="text-white text-sm" />
//                                 Rectangle
//                             </button>

//                             <button
//                                 onClick={() => addBlock("rhombus")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
//                             >
//                                 <TbDiamond className="text-white text-sm rotate-45" />
//                                 Rhombus
//                             </button>

//                             <button
//                                 onClick={() => addBlock("parallelogram")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
//                             >
//                                 <TbRectangleVertical className="text-white text-sm rotate-12" />
//                                 Parallelogram
//                             </button>

//                             <button
//                                 onClick={() => addBlock("trapezoid")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
//                             >
//                                 <FaDrawPolygon className="text-white text-sm" />
//                                 Trapezoid
//                             </button>
//                             <button
//                                 onClick={() => addBlock("triangle")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
//                             >
//                                 <FaPlay className="text-white text-sm rotate-90" />
//                                 Triangle
//                             </button>

//                             <button
//                                 onClick={() => addBlock("circle")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
//                             >
//                                 <FaCircle className="text-white text-sm" />
//                                 Circle
//                             </button>

//                             <button
//                                 onClick={() => addBlock("heptagon")}
//                                 className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow col-span-2 hover:bg-[#132f4c] transition"
//                             >
//                                 <FaShapes className="text-white text-sm" />
//                                 Heptagon
//                             </button>

//                         </div>

//                         {lastBlock && (
//                             <>
//                                 <h3 className="font-semibold pt-3">{t.blockColor || "Block Color"}</h3>

//                                 <input
//                                     type="color"
//                                     value={hexFromRGBA(lastBlock.fill)}
//                                     onChange={e => changeColor(e.target.value)}
//                                     className="w-full h-10"
//                                 />

//                                 <input
//                                     type="range"
//                                     min="0"
//                                     max="1"
//                                     step="0.05"
//                                     value={alphaFromRGBA(lastBlock.fill)}
//                                     onChange={e => changeAlpha(e.target.value)}
//                                     className="w-full"
//                                 />
//                             </>
//                         )}

//                     </>
//                 )}



//                 {show("social") && (
//                     <>
//                         <h3 className="font-semibold pt-2">{t.socialMedia || "Social Media"} </h3>

//                         <div className="grid grid-cols-5 gap-2">
//                             {["facebook", "instagram", "whatsapp", "youtube", "twitter"].map(name => (
//                                 <button
//                                     key={name}
//                                     onClick={() => addSocial(`/social/${name}.png`)}
//                                     className="p-2 bg-white rounded-lg shadow"
//                                 >
//                                     <img src={`/social/${name}.png`} />
//                                 </button>
//                             ))}
//                         </div>
//                     </>
//                 )}

//                 <div className="panel-actions">
//                     <button
//                         className="btn-close"
//                         onClick={() => setActiveSection(null)}
//                     >
//                         Close
//                     </button>

//                     <button
//                         className="btn-set"
//                         onClick={() => setActiveSection(null)} // 🔥 auto close after action
//                     >
//                         Set
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// }

// new update

import { useState, useEffect } from "react";
import {
    FaImage,
    FaBuilding,
    FaPhone,
    FaShapes,
    FaPalette,
    FaShareAlt,
    FaSquare,
    FaRegSquare
} from "react-icons/fa";
import { FaCircle, FaPlay } from "react-icons/fa";

import { TbRectangleVertical } from "react-icons/tb";
import { FaDrawPolygon } from "react-icons/fa";
import { TbDiamond } from "react-icons/tb"; // ✅ THIS WORKS
import translations from "../data/translations";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function LeftPanel({
    t,
    texts,
    setTexts,
    images,
    setImages,
    setBackground,
    blocks,
    setBlocks,
    language
}) {

    const [activeSection, setActiveSection] = useState(null);

    const inputClass =
        "w-full px-3 py-2 rounded-md bg-white text-[#0b1f33] border border-[#0b1f33]/40 shadow focus:outline-none focus:ring-2 focus:ring-[#0b1f33]";

    const label = key => translations[language]?.[key] || key;

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const resize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    const toggleSection = section => {
        setActiveSection(prev => prev === section ? null : section);
    };

    const show = section => !isMobile || activeSection === section;

    /* ---------------- TEXT UPDATE ---------------- */

    const updateText = (id, value) =>
        setTexts(texts.map(t => (t.id === id ? { ...t, text: value } : t)));

    const updateContact = (prefix, value) =>
        setTexts(
            texts.map(t =>
                t.type === "contact" && t.text.startsWith(prefix)
                    ? { ...t, text: `${prefix} ${value}` }
                    : t
            )
        );

    /* ---------------- IMAGE ---------------- */

    const addImage = e => {
        const file = e.target.files[0];
        if (!file) return;

        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () =>
            setImages(prev => [
                ...prev,
                {
                    id: Date.now(),
                    type: "image",
                    image: img,
                    x: 200,
                    y: 200,
                    width: 180,
                    height: 180,
                    rotation: 0
                }
            ]);
    };

    const addSocial = src => {
        const img = new Image();
        img.src = src;

        img.onload = () =>
            setImages(prev => [
                ...prev,
                {
                    id: Date.now(),
                    type: "image",
                    image: img,
                    x: 120,
                    y: 120,
                    width: 48,
                    height: 48,
                    rotation: 0
                }
            ]);
    };

    /* ---------------- BLOCKS ---------------- */

    const addBlock = shape => {
        setBlocks(prev => [
            ...prev,
            {
                id: Date.now(),
                shape,
                x: shape === "circle" || shape === "triangle" ? 200 : 100,
                y: shape === "circle" || shape === "triangle" ? 200 : 100,
                width: 200,
                height: 150,
                rotation: 0,
                fill: "rgba(0,0,0,0.5)"
            }
        ]);
    };

    /* ---------------- COLOR ---------------- */

    const lastBlock = blocks[blocks.length - 1];

    const changeColor = color => {
        if (!lastBlock) return;

        const rgba = lastBlock.fill || "rgba(0,0,0,0.5)";
        const alpha = rgba.split(",")[3]?.replace(")", "") || 0.5;

        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);

        const newColor = `rgba(${r},${g},${b},${alpha})`;

        setBlocks(prev =>
            prev.map((b, i) => (i === prev.length - 1 ? { ...b, fill: newColor } : b))
        );
    };

    const changeAlpha = alpha => {
        if (!lastBlock) return;

        const rgba = lastBlock.fill.match(/\d+/g);
        const r = rgba[0];
        const g = rgba[1];
        const b = rgba[2];

        const newColor = `rgba(${r},${g},${b},${alpha})`;

        setBlocks(prev =>
            prev.map((b, i) => (i === prev.length - 1 ? { ...b, fill: newColor } : b))
        );
    };

    const hexFromRGBA = rgba => {
        const result = rgba?.match(/\d+/g);
        if (!result) return "#000000";
        const r = parseInt(result[0]).toString(16).padStart(2, "0");
        const g = parseInt(result[1]).toString(16).padStart(2, "0");
        const b = parseInt(result[2]).toString(16).padStart(2, "0");
        return `#${r}${g}${b}`;
    };

    const alphaFromRGBA = rgba => {
        const match = rgba?.match(/rgba\((\d+),(\d+),(\d+),([0-9.]+)\)/);
        return match ? parseFloat(match[4]) : 0.5;
    };

    return (
        <div className="leftpanel-container">

            <div className="leftpanel-icons">

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => toggleSection("business")}>
                        <FaBuilding />
                    </button>
                    {isMobile && <span className="icon-label">Business</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => toggleSection("contact")}>
                        <FaPhone />
                    </button>
                    {isMobile && <span className="icon-label">Contact</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => toggleSection("images")}>
                        <FaImage />
                    </button>
                    {isMobile && <span className="icon-label">Images</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => toggleSection("blocks")}>
                        <FaShapes />
                    </button>
                    {isMobile && <span className="icon-label">Shapes</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => toggleSection("social")}>
                        <FaShareAlt />
                    </button>
                    {isMobile && <span className="icon-label">Social</span>}
                </div>

            </div>

            <div className={`leftpanel-full ${activeSection ? "active" : ""}`}>

                {show("business") && (
                    <>
                        <h3 className="font-semibold">{t.business || "Business"}</h3>

                        <input
                            className={inputClass}
                            value={texts.find(t => t.id === 1)?.text || ""}
                            onChange={e => updateText(1, e.target.value)}
                        />

                        <input
                            className={inputClass}
                            value={texts.find(t => t.id === 2)?.text || ""}
                            onChange={e => updateText(2, e.target.value)}
                        />

                        <textarea
                            className={inputClass + " h-24 resize-none"}
                            value={texts.find(t => t.id === 3)?.text || ""}
                            onChange={e => updateText(3, e.target.value)}
                        />
                    </>
                )}

                {show("contact") && (
                    <>
                        <h3 className="font-semibold pt-2">{t.contact || "Contact"}</h3>

                        <input
                            className={inputClass}
                            value={texts.find(t => t.id === 4)?.text.replace("📞 ", "") || ""}
                            onChange={e => updateContact("📞", e.target.value)}
                        />

                        <input
                            className={inputClass}
                            value={texts.find(t => t.id === 5)?.text.replace("✉ ", "") || ""}
                            onChange={e => updateContact("✉", e.target.value)}
                        />

                        <input
                            className={inputClass}
                            value={texts.find(t => t.id === 6)?.text.replace("📍 ", "") || ""}
                            onChange={e => updateContact("📍", e.target.value)}
                        />
                    </>
                )}

                {show("images") && (
                    <>
                        <h3 className="font-semibold pt-2">{t.backgroundImage || "Background Image"} </h3>

                        <label className="flex items-center gap-2 py-2 px-3 bg-[#0b1f33] text-white rounded cursor-pointer shadow">
                            <FaImage /> Upload Background
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    const reader = new FileReader();

                                    reader.onload = () => {
                                        const img = new window.Image();
                                        img.src = reader.result;

                                        img.onload = () => {
                                            setBackground({
                                                type: "image",
                                                image: img,
                                                src: reader.result
                                            });
                                        };
                                    };

                                    reader.readAsDataURL(file);
                                }}
                            />
                        </label>

                        <h3 className="font-semibold pt-3">{t.extraImages || "Extra Images"}</h3>

                        <label className="flex items-center gap-2 bg-[#0b1f33] text-white px-3 py-2 rounded cursor-pointer shadow">
                            <FaImage /> Upload
                            <input type="file" hidden onChange={addImage} />
                        </label>
                    </>
                )}


                {show("blocks") && (
                    <>
                        <h3 className="font-semibold pt-2">{t.blockShapes || "Shape Blocks"}</h3>

                        <div className="grid grid-cols-2 gap-3">

                            <button
                                onClick={() => addBlock("rectangle")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
                            >
                                <FaSquare className="text-white text-sm" />
                                Rectangle
                            </button>

                            <button
                                onClick={() => addBlock("rhombus")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
                            >
                                <TbDiamond className="text-white text-sm rotate-45" />
                                Rhombus
                            </button>

                            <button
                                onClick={() => addBlock("parallelogram")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
                            >
                                <TbRectangleVertical className="text-white text-sm rotate-12" />
                                Parallelogram
                            </button>

                            <button
                                onClick={() => addBlock("trapezoid")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
                            >
                                <FaDrawPolygon className="text-white text-sm" />
                                Trapezoid
                            </button>
                            <button
                                onClick={() => addBlock("triangle")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
                            >
                                <FaPlay className="text-white text-sm rotate-90" />
                                Triangle
                            </button>

                            <button
                                onClick={() => addBlock("circle")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow hover:bg-[#132f4c] transition"
                            >
                                <FaCircle className="text-white text-sm" />
                                Circle
                            </button>

                            <button
                                onClick={() => addBlock("heptagon")}
                                className="flex items-center gap-2 justify-center bg-[#0b1f33] text-white py-2 rounded-lg shadow col-span-2 hover:bg-[#132f4c] transition"
                            >
                                <FaShapes className="text-white text-sm" />
                                Heptagon
                            </button>

                        </div>

                        {lastBlock && (
                            <>
                                <h3 className="font-semibold pt-3">{t.blockColor || "Block Color"}</h3>

                                <input
                                    type="color"
                                    value={hexFromRGBA(lastBlock.fill)}
                                    onChange={e => changeColor(e.target.value)}
                                    className="w-full h-10"
                                />

                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.05"
                                    value={alphaFromRGBA(lastBlock.fill)}
                                    onChange={e => changeAlpha(e.target.value)}
                                    className="w-full"
                                />
                            </>
                        )}

                    </>
                )}



                {show("social") && (
                    <>
                        <h3 className="font-semibold pt-2">{t.socialMedia || "Social Media"} </h3>

                        <div className="grid grid-cols-5 gap-2">
                            {["facebook", "instagram", "whatsapp", "youtube", "twitter"].map(name => (
                                <button
                                    key={name}
                                    onClick={() => addSocial(`/social/${name}.png`)}
                                    className="p-2 bg-white rounded-lg shadow"
                                >
                                    <img src={`/social/${name}.png`} />
                                </button>
                            ))}
                        </div>
                    </>
                )}

                <div className="panel-actions">
                    <button
                        className="btn-close"
                        onClick={() => setActiveSection(null)}
                    >
                        Close
                    </button>

                    <button
                        className="btn-set"
                        onClick={() => setActiveSection(null)} // 🔥 auto close after action
                    >
                        Set
                    </button>
                </div>

            </div>
        </div>
    );
}

