// import { useState, useEffect } from "react";
// import {
//     FaPen,
//     FaSlash,
//     FaSquare,
//     FaCircle,
//     FaEraser,
//     FaUndo,
//     FaRedo,
//     FaPlus,
//     FaTrash,
//     FaFont,
//     FaPalette,
//     FaLayerGroup
// } from "react-icons/fa";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";

// export default function RightPanel({
//     texts = [],
//     onOpenTemplates,
//     borders = [],
//     setBorders,

//     canvasWidth = 420,
//     canvasHeight = 420,

//     activeSection,
//     setActiveSection,
//     setTexts,
//     selectedId,
//     tool,
//     setTool,
//     lineType,
//     setLineType,
//     strokeColor,
//     setStrokeColor,
//     strokeWidth,
//     setStrokeWidth,
//     undo,
//     redo,
//     deleteElement,
//     t = {}
// }) {
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//     const [showLetterSpacing, setShowLetterSpacing] = useState(false);


//     useEffect(() => {
//         const resize = () => setIsMobile(window.innerWidth < 768);
//         window.addEventListener("resize", resize);
//         return () => window.removeEventListener("resize", resize);
//     }, []);

//     useEffect(() => {
//         if (selectedId && texts?.length && isMobile) {
//             const selectedText = texts.find(t => t.id === selectedId);
//             if (selectedText) {
//                 setActiveSection("text");
//             }
//         }
//     }, [selectedId, texts, isMobile]);

//     const toggleSection = section => {
//         setActiveSection(prev => (prev === section ? null : section));
//     };

//     const show = section => !isMobile || activeSection === section;


//     const selectedText = Array.isArray(texts)
//         ? texts.find(x => x.id === selectedId) || null
//         : null;

//     const disabled = !selectedText;


//     const updateText = (key, value) => {
//         if (!selectedText) return;

//         setTexts(prev =>
//             prev.map(x =>
//                 x.id === selectedText.id
//                     ? { ...x, [key]: value }
//                     : x
//             )
//         );
//     };

//     const addText = () => {
//         setTexts(prev => [
//             ...prev,
//             {
//                 id: Date.now(),
//                 type: "text",
//                 text: t.addText || "New Text",

//                 x: 120,
//                 y: 120,

//                 width: 250,

//                 fontSize: 24,

//                 fill: "#111111",

//                 fontFamily: "Poppins",

//                 fontStyle: "normal",

//                 align: "left",
//                 underline: false,
//                 letterSpacing: 0,
//             }
//         ]);
//     };

//     const toolBtn = active =>
//         `flex items-center justify-center gap-1 py-2 rounded-lg border
//         ${active ? "bg-[#0b1f33] text-white" : "bg-white text-[#0b1f33]"}
//         shadow-[0_4px_12px_rgba(11,31,51,0.25)]`;

//     return (

//         <div className="rightpanel-container">


//             <div className={`rightpanel-full ${activeSection ? "active" : ""}`}>

//                 <button
//                     onClick={onOpenTemplates}
//                     className="
//         w-full
//         flex
//         items-center
//         justify-center
//         gap-2
//         py-2.5
//         rounded-xl
//         bg-gradient-to-r
//         from-[#0b1f33]
//         to-[#12385d]
//         text-white
//         shadow-lg
//         hover:-translate-y-0.5
//         transition
//     "
//                 >
//                     <FaLayerGroup />
//                     Templates
//                 </button>




//                 {show("text") && (
//                     <>
//                         <h3 className="font-semibold text-lg">
//                             {t.textTools || "Text Tools"}
//                         </h3>

//                         <Tippy content={t.addText || "Add Text"}>
//                             <button
//                                 onClick={addText}
//                                 className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
//                             >
//                                 <FaPlus /> {t.addText || "Add Text"}
//                             </button>
//                         </Tippy>

//                         <div className={`space-y-2 ${disabled ? "opacity-50" : ""}`}>

//                             <label className="text-sm font-medium">
//                                 {t.text || "Text"}
//                             </label>

//                             <input
//                                 disabled={disabled}
//                                 className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
//                                 value={selectedText?.text || ""}
//                                 onChange={(e) => {
//                                     updateText("text", e.target.value);
//                                 }}
//                             />

//                             <label className="text-sm font-medium">
//                                 {t.fontSize || "Font Size"} {selectedText?.fontSize || 24}px
//                             </label>

//                             <input
//                                 type="range"
//                                 min="10"
//                                 max="120"
//                                 disabled={disabled}
//                                 value={selectedText?.fontSize || 24}
//                                 onChange={e => updateText("fontSize", Number(e.target.value))}
//                                 className="w-full"
//                             />

//                             <label className="text-sm font-medium">
//                                 Text Width
//                             </label>

//                             <input
//                                 type="range"
//                                 min="50"
//                                 max="800"
//                                 disabled={disabled}
//                                 value={selectedText?.width || 250}
//                                 onChange={(e) =>
//                                     updateText("width", Number(e.target.value))
//                                 }
//                                 className="w-full"
//                             />

//                             <label className="text-sm font-medium">
//                                 {t.textColor || "Text Color"}
//                             </label>

//                             <input
//                                 type="color"
//                                 disabled={disabled}
//                                 value={selectedText?.fill || "#000000"}
//                                 onChange={e => updateText("fill", e.target.value)}
//                                 className="w-full h-9 rounded border"
//                             />

//                             <label className="text-sm font-medium">
//                                 {t.fontFamily || "Font Family"}
//                             </label>

//                             <select
//                                 disabled={disabled}
//                                 className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
//                                 value={selectedText?.fontFamily || "Poppins"}
//                                 onChange={e => updateText("fontFamily", e.target.value)}
//                             >
//                                 <option style={{ fontFamily: "Poppins" }}>Poppins</option>
//                                 <option style={{ fontFamily: "Roboto" }}>Roboto</option>
//                                 <option style={{ fontFamily: "Montserrat" }}>Montserrat</option>
//                                 <option style={{ fontFamily: "Lato" }}>Lato</option>
//                                 <option style={{ fontFamily: "Open Sans" }}>Open Sans</option>
//                                 <option style={{ fontFamily: "Raleway" }}>Raleway</option>
//                                 <option style={{ fontFamily: "Oswald" }}>Oswald</option>
//                                 <option style={{ fontFamily: "Nunito" }}>Nunito</option>
//                                 <option style={{ fontFamily: "Merriweather" }}>Merriweather</option>
//                                 <option style={{ fontFamily: "Playfair Display" }}>Playfair Display</option>
//                                 <option style={{ fontFamily: "Ubuntu" }}>Ubuntu</option>
//                                 <option style={{ fontFamily: "Inter" }}>Inter</option>

//                                 {/* 🔥 New Fonts */}
//                                 <option style={{ fontFamily: "Brawler" }}>Brawler</option>
//                                 <option style={{ fontFamily: "Josefin Sans" }}>Josefin Sans</option>
//                                 <option style={{ fontFamily: "Libre Baskerville" }}>Libre Baskerville</option>
//                                 <option style={{ fontFamily: "Pinyon Script" }}>Pinyon Script</option>
//                                 <option style={{ fontFamily: "Lobster Two" }}>Lobster Two</option>
//                                 <option style={{ fontFamily: "Great Vibes" }}>Great Vibes</option>
//                             </select>

//                             {/* <div className="grid grid-cols-2 gap-2"> */}
//                             <div className="grid grid-cols-4 gap-2">

//                                 {/* Bold */}
//                                 <button
//                                     disabled={disabled}
//                                     onClick={() => {
//                                         if (!selectedText) return;

//                                         let current = selectedText.fontStyle || "";
//                                         let styles = current.split(" ").filter(Boolean);

//                                         if (styles.includes("bold")) {
//                                             styles = styles.filter(s => s !== "bold");
//                                         } else {
//                                             styles.push("bold");
//                                         }

//                                         updateText("fontStyle", styles.join(" ") || "normal");
//                                     }}
//                                     className={`aspect-square w-full rounded-lg border font-semibold text-sm
// transition-all duration-200 hover:-translate-y-0.5
// hover:shadow-lg active:scale-95 disabled:opacity-40
//         ${selectedText?.fontStyle?.includes("bold")
//                                             ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
//                                             : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
//                                         }`}
//                                 >
//                                     B
//                                 </button>

//                                 {/* Underline */}
//                                 <button
//                                     disabled={disabled}
//                                     onClick={() =>
//                                         updateText("underline", !selectedText?.underline)
//                                     }
//                                     className={`aspect-square w-full rounded-lg border font-semibold text-sm
// transition-all duration-200 hover:-translate-y-0.5
// hover:shadow-lg active:scale-95 disabled:opacity-40
//         ${selectedText?.underline
//                                             ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
//                                             : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
//                                         }`}
//                                 >
//                                     U
//                                 </button>

//                                 {/* Italic */}
//                                 <button
//                                     disabled={disabled}
//                                     onClick={() => {
//                                         if (!selectedText) return;

//                                         let current = selectedText.fontStyle || "";
//                                         let styles = current.split(" ").filter(Boolean);

//                                         if (styles.includes("italic")) {
//                                             styles = styles.filter(s => s !== "italic");
//                                         } else {
//                                             styles.push("italic");
//                                         }

//                                         updateText("fontStyle", styles.join(" ") || "normal");
//                                     }}
//                                     className={`aspect-square w-full rounded-lg border font-semibold text-sm
// transition-all duration-200 hover:-translate-y-0.5
// hover:shadow-lg active:scale-95 disabled:opacity-40
//         ${selectedText?.fontStyle?.includes("italic")
//                                             ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
//                                             : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
//                                         }`}
//                                 >
//                                     I
//                                 </button>

//                                 {/* Letter Spacing */}
//                                 <button
//                                     disabled={disabled}
//                                     onClick={() => setShowLetterSpacing(prev => !prev)}
//                                     className={`aspect-square w-full rounded-lg border font-semibold text-sm
// transition-all duration-200 hover:-translate-y-0.5
// hover:shadow-lg active:scale-95 disabled:opacity-40
//         ${showLetterSpacing
//                                             ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
//                                             : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
//                                         }`}
//                                 >
//                                     L↔s
//                                 </button>

//                             </div>
//                             {showLetterSpacing && (
//                                 <div className="mt-3">

//                                     <label className="text-sm font-medium">
//                                         Letter Spacing ({selectedText?.letterSpacing || 0}px)
//                                     </label>

//                                     <input
//                                         type="range"
//                                         min="-5"
//                                         max="20"
//                                         step="0.5"
//                                         disabled={disabled}
//                                         value={selectedText?.letterSpacing || 0}
//                                         onChange={(e) => {
//                                             updateText("letterSpacing", Number(e.target.value));

//                                             // Auto close after changing
//                                             setTimeout(() => {
//                                                 setShowLetterSpacing(false);
//                                             }, 800);
//                                         }}
//                                         className="w-full accent-cyan-500 mt-2"
//                                     />

//                                 </div>
//                             )}
//                         </div>
//                     </>
//                 )}

//                 {/* UNDO / REDO */}
//                 {!isMobile && (
//                     <div className="flex gap-3 pt-2">
//                         <button
//                             onClick={undo}
//                             className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
//                         >
//                             <FaUndo /> {t.undo || "Undo"}
//                         </button>

//                         <button
//                             onClick={redo}
//                             className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
//                         >
//                             <FaRedo /> {t.redo || "Redo"}
//                         </button>
//                     </div>
//                 )}

//                 {/* DELETE */}
//                 {!isMobile && (
//                     <button onClick={deleteElement}

//                         disabled={!selectedId}
//                         className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-red-600 text-white shadow disabled:opacity-40"
//                     >
//                         <FaTrash /> {t.delete || "Delete"}
//                     </button>
//                 )}


//                 {/* ================= BORDER TOOLS ================= */}

//                 {show("border") && (
//                     <>
//                         <h3 className="font-semibold text-lg">
//                             Border
//                         </h3>

//                         <button
//                             onClick={() => {
//                                 if (!setBorders) return;

//                                 const id = Date.now();

//                                 setBorders(prev => [
//                                     ...prev,
//                                     {
//                                         id,
//                                         type: "border",

//                                         x: 10,
//                                         y: 10,

//                                         width: Math.max(20, canvasWidth - 20),
//                                         height: Math.max(20, canvasHeight - 20),

//                                         stroke: "#0b1f33",
//                                         strokeWidth: 4,
//                                         style: "solid",
//                                         cornerRadius: 0
//                                     }
//                                 ]);
//                             }}
//                             className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
//                         >
//                             <FaPlus />
//                             Add Border
//                         </button>

//                         {(() => {
//                             const selectedBorder =
//                                 borders.find(b => b.id === selectedId) || null;

//                             if (!selectedBorder) {
//                                 return (
//                                     <div className="text-sm text-slate-500 mt-2 text-center">
//                                         Select a border to edit it
//                                     </div>
//                                 );
//                             }

//                             const updateBorder = (key, value) => {
//                                 setBorders(prev =>
//                                     prev.map(b =>
//                                         b.id === selectedBorder.id
//                                             ? { ...b, [key]: value }
//                                             : b
//                                     )
//                                 );
//                             };

//                             return (
//                                 <div className="space-y-3 mt-3">

//                                     {/* BORDER STYLE */}
//                                     <div>
//                                         <label className="text-sm font-medium">
//                                             Border Style
//                                         </label>

//                                         <select
//                                             value={selectedBorder.style || "solid"}
//                                             onChange={e =>
//                                                 updateBorder("style", e.target.value)
//                                             }
//                                             className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
//                                         >
//                                             <option value="solid">Solid</option>
//                                             <option value="dashed">Dashed</option>
//                                             <option value="dotted">Dotted</option>
//                                             <option value="double">Double</option>
//                                         </select>
//                                     </div>

//                                     {/* BORDER COLOR */}
//                                     <div>
//                                         <label className="text-sm font-medium">
//                                             Border Color
//                                         </label>

//                                         <input
//                                             type="color"
//                                             value={selectedBorder.stroke || "#0b1f33"}
//                                             onChange={e =>
//                                                 updateBorder("stroke", e.target.value)
//                                             }
//                                             className="w-full h-9 rounded border"
//                                         />
//                                     </div>

//                                     {/* BORDER WIDTH */}
//                                     <div>
//                                         <label className="text-sm font-medium">
//                                             Border Width ({selectedBorder.strokeWidth || 1}px)
//                                         </label>

//                                         <input
//                                             type="range"
//                                             min="1"
//                                             max="30"
//                                             value={selectedBorder.strokeWidth || 1}
//                                             onChange={e =>
//                                                 updateBorder(
//                                                     "strokeWidth",
//                                                     Number(e.target.value)
//                                                 )
//                                             }
//                                             className="w-full"
//                                         />
//                                     </div>

//                                     {/* CORNER RADIUS */}
//                                     <div>
//                                         <label className="text-sm font-medium">
//                                             Corner Radius ({selectedBorder.cornerRadius || 0}px)
//                                         </label>

//                                         <input
//                                             type="range"
//                                             min="0"
//                                             max="100"
//                                             value={selectedBorder.cornerRadius || 0}
//                                             onChange={e =>
//                                                 updateBorder(
//                                                     "cornerRadius",
//                                                     Number(e.target.value)
//                                                 )
//                                             }
//                                             className="w-full"
//                                         />
//                                     </div>

//                                 </div>
//                             );
//                         })()}
//                     </>
//                 )}


//                 {/* {show("draw") && ( */}
//                 {show("shapes") && (
//                     <>
//                         <h3 className="font-semibold text-lg">
//                             {t.drawingTools || "Drawing Tools"}
//                         </h3>

//                         <div className="grid grid-cols-3 gap-2 mt-2">
//                             <button className={toolBtn(tool === "brush")} onClick={() => setTool("brush")}>
//                                 <FaPen /> {t.brush || "Brush"}
//                             </button>
//                             <button className={toolBtn(tool === "line")} onClick={() => setTool("line")}>
//                                 <FaSlash />  {t.line || "Line"}
//                             </button>
//                             <button className={toolBtn(tool === "rectangle")} onClick={() => setTool("rectangle")}>
//                                 <FaSquare />  {t.rectangle || "Rectangle"}
//                             </button>
//                             <button className={toolBtn(tool === "circle")} onClick={() => setTool("circle")}>
//                                 <FaCircle />  {t.circle || "Circle"}
//                             </button>
//                             <button className={toolBtn(tool === "eraser")} onClick={() => setTool("eraser")}>
//                                 <FaEraser />  {t.eraser || "Eraser"}
//                             </button>
//                         </div>

//                         {tool === "line" && (
//                             <div className="mt-2">
//                                 <label className="text-sm font-medium">
//                                     {t.lineType || "Line Type"}
//                                 </label>
//                                 <select
//                                     className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
//                                     value={lineType || "thin"}
//                                     onChange={e => setLineType(e.target.value)}
//                                 >
//                                     <option value="thin">Thin</option>
//                                     <option value="thick">Thick</option>
//                                     <option value="thinToThick">Thin → Thick</option>
//                                     <option value="thickToThin">Thick → Thin</option>
//                                     <option value="thickCenter">Thin → Thick → Thin</option>
//                                 </select>
//                             </div>
//                         )}
//                         <label className="text-sm font-medium mt-3 block">
//                             {t.strokeColor || "Stroke Color"}
//                         </label>

//                         <input
//                             type="color"
//                             value={strokeColor}
//                             onChange={e => setStrokeColor(e.target.value)}
//                             className="w-full h-9 rounded border"
//                         />

//                         <label className="text-sm font-medium mt-2 block">
//                             {t.strokeWidth || "Stroke Width"}
//                         </label>

//                         <input
//                             type="range"
//                             min="1"
//                             max="20"
//                             value={strokeWidth}
//                             onChange={e => setStrokeWidth(Number(e.target.value))}
//                             className="w-full"
//                         />
//                     </>
//                 )}


//                 <div className="panel-actions">
//                     <button
//                         className="btn-close"
//                         onClick={() => {

//                             setActiveSection(null);

//                         }}
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
//             {/* MOBILE ICON BAR */}

//             <div className="rightpanel-icons">

//                 <div className="icon-item">

//                     <button
//                         className={`icon-btn ${activeSection === "templates" ? "active" : ""
//                             }`}
//                         onClick={onOpenTemplates}
//                     >
//                         <FaLayerGroup />
//                     </button>

//                     {isMobile && (
//                         <span className="icon-label">
//                             Templates
//                         </span>
//                     )}

//                 </div>

//                 <div className="icon-item">
//                     <button
//                         className={`icon-btn ${activeSection === "text" ? "active" : ""}`}
//                         onClick={() => toggleSection("text")}
//                     >
//                         <FaFont />
//                     </button>
//                     {isMobile && <span className="icon-label">Text</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button
//                         className={`icon-btn ${activeSection === "border" ? "active" : ""
//                             }`}
//                         onClick={() => toggleSection("border")}
//                     >
//                         <FaSquare />
//                     </button>

//                     {isMobile && (
//                         <span className="icon-label">Border</span>
//                     )}
//                 </div>

//                 <div className="icon-item">
//                     <button
//                         className={`icon-btn ${activeSection === "shapes" ? "active" : ""}`}
//                         onClick={() => toggleSection("shapes")}
//                     >
//                         <FaSquare />
//                     </button>
//                     {isMobile && <span className="icon-label">Shapes</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={undo}>
//                         <FaUndo />
//                     </button>
//                     {isMobile && <span className="icon-label">Undo</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={redo}>
//                         <FaRedo />
//                     </button>
//                     {isMobile && <span className="icon-label">Redo</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={deleteElement}>
//                         <FaTrash />
//                     </button>
//                     {isMobile && <span className="icon-label">Delete</span>}
//                 </div>

//                 <div className="icon-item">
//                     <button className="icon-btn" onClick={() => alert("Help guide coming soon")}>
//                         ?
//                     </button>
//                     {isMobile && <span className="icon-label">Help</span>}
//                 </div>

//             </div>
//         </div>

//     );
// }

/////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import {
    FaPen,
    FaSlash,
    FaSquare,
    FaCircle,
    FaEraser,
    FaUndo,
    FaRedo,
    FaPlus,
    FaTrash,
    FaFont,
    FaPalette,
    FaLayerGroup
} from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function RightPanel({
    texts = [],
    onOpenTemplates,
    borders = [],
    setBorders,

    canvasWidth = 420,
    canvasHeight = 420,

    activeSection,
    setActiveSection,
    setTexts,
    selectedId,
    tool,
    setTool,
    lineType,
    setLineType,
    strokeColor,
    setStrokeColor,
    strokeWidth,
    setStrokeWidth,
    undo,
    redo,
    deleteElement,
    t = {}
}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showLetterSpacing, setShowLetterSpacing] = useState(false);


    useEffect(() => {
        const resize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    useEffect(() => {
        if (selectedId && texts?.length && isMobile) {
            const selectedText = texts.find(t => t.id === selectedId);
            if (selectedText) {
                setActiveSection("text");
            }
        }
    }, [selectedId, texts, isMobile]);

    const toggleSection = section => {
        setActiveSection(prev => (prev === section ? null : section));
    };

    const show = section => !isMobile || activeSection === section;


    const selectedText = Array.isArray(texts)
        ? texts.find(x => x.id === selectedId) || null
        : null;

    const disabled = !selectedText;


    const updateText = (key, value) => {
        if (!selectedText) return;

        setTexts(prev =>
            prev.map(x =>
                x.id === selectedText.id
                    ? { ...x, [key]: value }
                    : x
            )
        );
    };

    const addText = () => {
        setTexts(prev => [
            ...prev,
            {
                id: Date.now(),
                type: "text",
                text: t.addText || "New Text",

                x: 120,
                y: 120,

                width: 250,

                fontSize: 24,

                fill: "#111111",

                fontFamily: "Poppins",

                fontStyle: "normal",

                align: "left",
                underline: false,
                letterSpacing: 0,
            }
        ]);
    };

    const toolBtn = active =>
        `flex items-center justify-center gap-1 py-2 rounded-lg border
        ${active ? "bg-[#0b1f33] text-white" : "bg-white text-[#0b1f33]"}
        shadow-[0_4px_12px_rgba(11,31,51,0.25)]`;

    return (

        <div className="rightpanel-container">


            <div className={`rightpanel-full ${activeSection ? "active" : ""}`}>

                <button
                    onClick={onOpenTemplates}
                    className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        py-2.5
        rounded-xl
        bg-gradient-to-r
        from-[#0b1f33]
        to-[#12385d]
        text-white
        shadow-lg
        hover:-translate-y-0.5
        transition
    "
                >
                    <FaLayerGroup />
                    Templates
                </button>




                {show("text") && (
                    <>
                        <h3 className="font-semibold text-lg">
                            {t.textTools || "Text Tools"}
                        </h3>

                        <Tippy content={t.addText || "Add Text"}>
                            <button
                                onClick={addText}
                                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
                            >
                                <FaPlus /> {t.addText || "Add Text"}
                            </button>
                        </Tippy>

                        <div className={`space-y-2 ${disabled ? "opacity-50" : ""}`}>

                            <label className="text-sm font-medium">
                                {t.text || "Text"}
                            </label>

                            <input
                                disabled={disabled}
                                className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
                                value={selectedText?.text || ""}
                                onChange={(e) => {
                                    updateText("text", e.target.value);
                                }}
                            />

                            <label className="text-sm font-medium">
                                {t.fontSize || "Font Size"} {selectedText?.fontSize || 24}px
                            </label>

                            <input
                                type="range"
                                min="10"
                                max="120"
                                disabled={disabled}
                                value={selectedText?.fontSize || 24}
                                onChange={e => updateText("fontSize", Number(e.target.value))}
                                className="w-full"
                            />

                            <label className="text-sm font-medium">
                                Text Width
                            </label>

                            <input
                                type="range"
                                min="50"
                                max="800"
                                disabled={disabled}
                                value={selectedText?.width || 250}
                                onChange={(e) =>
                                    updateText("width", Number(e.target.value))
                                }
                                className="w-full"
                            />

                            <label className="text-sm font-medium">
                                {t.textColor || "Text Color"}
                            </label>

                            <input
                                type="color"
                                disabled={disabled}
                                value={selectedText?.fill || "#000000"}
                                onChange={e => updateText("fill", e.target.value)}
                                className="w-full h-9 rounded border"
                            />

                            <label className="text-sm font-medium">
                                {t.fontFamily || "Font Family"}
                            </label>

                            <select
                                disabled={disabled}
                                className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
                                value={selectedText?.fontFamily || "Poppins"}
                                onChange={e => updateText("fontFamily", e.target.value)}
                            >
                                <option style={{ fontFamily: "Poppins" }}>Poppins</option>
                                <option style={{ fontFamily: "Roboto" }}>Roboto</option>
                                <option style={{ fontFamily: "Montserrat" }}>Montserrat</option>
                                <option style={{ fontFamily: "Lato" }}>Lato</option>
                                <option style={{ fontFamily: "Open Sans" }}>Open Sans</option>
                                <option style={{ fontFamily: "Raleway" }}>Raleway</option>
                                <option style={{ fontFamily: "Oswald" }}>Oswald</option>
                                <option style={{ fontFamily: "Nunito" }}>Nunito</option>
                                <option style={{ fontFamily: "Merriweather" }}>Merriweather</option>
                                <option style={{ fontFamily: "Playfair Display" }}>Playfair Display</option>
                                <option style={{ fontFamily: "Ubuntu" }}>Ubuntu</option>
                                <option style={{ fontFamily: "Inter" }}>Inter</option>

                                {/* 🔥 New Fonts */}
                                <option style={{ fontFamily: "Brawler" }}>Brawler</option>
                                <option style={{ fontFamily: "Josefin Sans" }}>Josefin Sans</option>
                                <option style={{ fontFamily: "Libre Baskerville" }}>Libre Baskerville</option>
                                <option style={{ fontFamily: "Pinyon Script" }}>Pinyon Script</option>
                                <option style={{ fontFamily: "Lobster Two" }}>Lobster Two</option>
                                <option style={{ fontFamily: "Great Vibes" }}>Great Vibes</option>
                            </select>

                            {/* <div className="grid grid-cols-2 gap-2"> */}
                            <div className="grid grid-cols-4 gap-2">

                                {/* Bold */}
                                <button
                                    disabled={disabled}
                                    onClick={() => {
                                        if (!selectedText) return;

                                        let current = selectedText.fontStyle || "";
                                        let styles = current.split(" ").filter(Boolean);

                                        if (styles.includes("bold")) {
                                            styles = styles.filter(s => s !== "bold");
                                        } else {
                                            styles.push("bold");
                                        }

                                        updateText("fontStyle", styles.join(" ") || "normal");
                                    }}
                                    className={`aspect-square w-full rounded-lg border font-semibold text-sm
transition-all duration-200 hover:-translate-y-0.5
hover:shadow-lg active:scale-95 disabled:opacity-40
        ${selectedText?.fontStyle?.includes("bold")
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
                                            : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
                                        }`}
                                >
                                    B
                                </button>

                                {/* Underline */}
                                <button
                                    disabled={disabled}
                                    onClick={() =>
                                        updateText("underline", !selectedText?.underline)
                                    }
                                    className={`aspect-square w-full rounded-lg border font-semibold text-sm
transition-all duration-200 hover:-translate-y-0.5
hover:shadow-lg active:scale-95 disabled:opacity-40
        ${selectedText?.underline
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
                                            : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
                                        }`}
                                >
                                    U
                                </button>

                                {/* Italic */}
                                <button
                                    disabled={disabled}
                                    onClick={() => {
                                        if (!selectedText) return;

                                        let current = selectedText.fontStyle || "";
                                        let styles = current.split(" ").filter(Boolean);

                                        if (styles.includes("italic")) {
                                            styles = styles.filter(s => s !== "italic");
                                        } else {
                                            styles.push("italic");
                                        }

                                        updateText("fontStyle", styles.join(" ") || "normal");
                                    }}
                                    className={`aspect-square w-full rounded-lg border font-semibold text-sm
transition-all duration-200 hover:-translate-y-0.5
hover:shadow-lg active:scale-95 disabled:opacity-40
        ${selectedText?.fontStyle?.includes("italic")
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
                                            : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
                                        }`}
                                >
                                    I
                                </button>

                                {/* Letter Spacing */}
                                <button
                                    disabled={disabled}
                                    onClick={() => setShowLetterSpacing(prev => !prev)}
                                    className={`aspect-square w-full rounded-lg border font-semibold text-sm
transition-all duration-200 hover:-translate-y-0.5
hover:shadow-lg active:scale-95 disabled:opacity-40
        ${showLetterSpacing
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-cyan-500/30"
                                            : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-600"
                                        }`}
                                >
                                    L↔s
                                </button>

                            </div>
                            {showLetterSpacing && (
                                <div className="mt-3">

                                    <label className="text-sm font-medium">
                                        Letter Spacing ({selectedText?.letterSpacing || 0}px)
                                    </label>

                                    <input
                                        type="range"
                                        min="-5"
                                        max="20"
                                        step="0.5"
                                        disabled={disabled}
                                        value={selectedText?.letterSpacing || 0}
                                        onChange={(e) => {
                                            updateText("letterSpacing", Number(e.target.value));

                                            // Auto close after changing
                                            setTimeout(() => {
                                                setShowLetterSpacing(false);
                                            }, 800);
                                        }}
                                        className="w-full accent-cyan-500 mt-2"
                                    />

                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* UNDO / REDO */}
                {!isMobile && (
                    <div className="flex gap-3 pt-2">
                        <button
                            onClick={undo}
                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
                        >
                            <FaUndo /> {t.undo || "Undo"}
                        </button>

                        <button
                            onClick={redo}
                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
                        >
                            <FaRedo /> {t.redo || "Redo"}
                        </button>
                    </div>
                )}

                {/* DELETE */}
                {!isMobile && (
                    <button onClick={deleteElement}

                        disabled={!selectedId}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-red-600 text-white shadow disabled:opacity-40"
                    >
                        <FaTrash /> {t.delete || "Delete"}
                    </button>
                )}


                {/* ================= BORDER TOOLS ================= */}

                {show("border") && (
                    <>
                        <h3 className="font-semibold text-lg">
                            Border
                        </h3>

                        <button
                            onClick={() => {
                                if (!setBorders) return;

                                const id = Date.now();

                                setBorders(prev => [
                                    ...prev,
                                    {
                                        id,
                                        type: "border",

                                        x: 10,
                                        y: 10,

                                        width: Math.max(20, canvasWidth - 20),
                                        height: Math.max(20, canvasHeight - 20),

                                        stroke: "#0b1f33",
                                        strokeWidth: 4,
                                        style: "solid",
                                        cornerRadius: 0
                                    }
                                ]);
                            }}
                            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0b1f33] text-white shadow"
                        >
                            <FaPlus />
                            Add Border
                        </button>

                        {(() => {
                            const selectedBorder =
                                borders.find(b => b.id === selectedId) || null;

                            if (!selectedBorder) {
                                return (
                                    <div className="text-sm text-slate-500 mt-2 text-center">
                                        Select a border to edit it
                                    </div>
                                );
                            }

                            const updateBorder = (key, value) => {
                                setBorders(prev =>
                                    prev.map(b =>
                                        b.id === selectedBorder.id
                                            ? { ...b, [key]: value }
                                            : b
                                    )
                                );
                            };

                            return (
                                <div className="space-y-3 mt-3">

                                    {/* BORDER STYLE */}
                                    <div>
                                        <label className="text-sm font-medium">
                                            Border Style
                                        </label>

                                        <select
                                            value={selectedBorder.style || "solid"}
                                            onChange={e =>
                                                updateBorder("style", e.target.value)
                                            }
                                            className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
                                        >
                                            <option value="solid">Solid</option>
                                            <option value="dashed">Dashed</option>
                                            <option value="dotted">Dotted</option>
                                            <option value="double">Double</option>
                                        </select>
                                    </div>

                                    {/* BORDER COLOR */}
                                    <div>
                                        <label className="text-sm font-medium">
                                            Border Color
                                        </label>

                                        <input
                                            type="color"
                                            value={selectedBorder.stroke || "#0b1f33"}
                                            onChange={e =>
                                                updateBorder("stroke", e.target.value)
                                            }
                                            className="w-full h-9 rounded border"
                                        />
                                    </div>

                                    {/* BORDER WIDTH */}
                                    <div>
                                        <label className="text-sm font-medium">
                                            Border Width ({selectedBorder.strokeWidth || 1}px)
                                        </label>

                                        <input
                                            type="range"
                                            min="1"
                                            max="30"
                                            value={selectedBorder.strokeWidth || 1}
                                            onChange={e =>
                                                updateBorder(
                                                    "strokeWidth",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full"
                                        />
                                    </div>

                                    {/* CORNER RADIUS */}
                                    <div>
                                        <label className="text-sm font-medium">
                                            Corner Radius ({selectedBorder.cornerRadius || 0}px)
                                        </label>

                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={selectedBorder.cornerRadius || 0}
                                            onChange={e =>
                                                updateBorder(
                                                    "cornerRadius",
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-full"
                                        />
                                    </div>

                                </div>
                            );
                        })()}
                    </>
                )}


                {/* {show("draw") && ( */}
                {show("shapes") && (
                    <>
                        <h3 className="font-semibold text-lg">
                            {t.drawingTools || "Drawing Tools"}
                        </h3>

                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <button className={toolBtn(tool === "brush")} onClick={() => setTool("brush")}>
                                <FaPen /> {t.brush || "Brush"}
                            </button>
                            <button className={toolBtn(tool === "line")} onClick={() => setTool("line")}>
                                <FaSlash />  {t.line || "Line"}
                            </button>
                            <button className={toolBtn(tool === "rectangle")} onClick={() => setTool("rectangle")}>
                                <FaSquare />  {t.rectangle || "Rectangle"}
                            </button>
                            <button className={toolBtn(tool === "circle")} onClick={() => setTool("circle")}>
                                <FaCircle />  {t.circle || "Circle"}
                            </button>
                            <button className={toolBtn(tool === "eraser")} onClick={() => setTool("eraser")}>
                                <FaEraser />  {t.eraser || "Eraser"}
                            </button>
                        </div>

                        {tool === "line" && (
                            <div className="mt-2">
                                <label className="text-sm font-medium">
                                    {t.lineType || "Line Type"}
                                </label>
                                <select
                                    className="w-full px-3 py-2 rounded-md border border-[#0b1f33]/40"
                                    value={lineType || "thin"}
                                    onChange={e => setLineType(e.target.value)}
                                >
                                    <option value="thin">Thin</option>
                                    <option value="thick">Thick</option>
                                    <option value="thinToThick">Thin → Thick</option>
                                    <option value="thickToThin">Thick → Thin</option>
                                    <option value="thickCenter">Thin → Thick → Thin</option>
                                </select>
                            </div>
                        )}
                        <label className="text-sm font-medium mt-3 block">
                            {t.strokeColor || "Stroke Color"}
                        </label>

                        <input
                            type="color"
                            value={strokeColor}
                            onChange={e => setStrokeColor(e.target.value)}
                            className="w-full h-9 rounded border"
                        />

                        <label className="text-sm font-medium mt-2 block">
                            {t.strokeWidth || "Stroke Width"}
                        </label>

                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={strokeWidth}
                            onChange={e => setStrokeWidth(Number(e.target.value))}
                            className="w-full"
                        />
                    </>
                )}


                <div className="panel-actions">
                    <button
                        className="btn-close"
                        onClick={() => {

                            setActiveSection(null);

                        }}
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
            {/* MOBILE ICON BAR */}

            <div className="rightpanel-icons">

                <div className="icon-item">

                    <button
                        className={`icon-btn ${activeSection === "templates" ? "active" : ""
                            }`}
                        onClick={onOpenTemplates}
                    >
                        <FaLayerGroup />
                    </button>

                    {isMobile && (
                        <span className="icon-label">
                            Templates
                        </span>
                    )}

                </div>

                <div className="icon-item">
                    <button
                        className={`icon-btn ${activeSection === "text" ? "active" : ""}`}
                        onClick={() => toggleSection("text")}
                    >
                        <FaFont />
                    </button>
                    {isMobile && <span className="icon-label">Text</span>}
                </div>

                <div className="icon-item">
                    <button
                        className={`icon-btn ${activeSection === "border" ? "active" : ""
                            }`}
                        onClick={() => toggleSection("border")}
                    >
                        <FaSquare />
                    </button>

                    {isMobile && (
                        <span className="icon-label">Border</span>
                    )}
                </div>

                <div className="icon-item">
                    <button
                        className={`icon-btn ${activeSection === "shapes" ? "active" : ""}`}
                        onClick={() => toggleSection("shapes")}
                    >
                        <FaSquare />
                    </button>
                    {isMobile && <span className="icon-label">Shapes</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={undo}>
                        <FaUndo />
                    </button>
                    {isMobile && <span className="icon-label">Undo</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={redo}>
                        <FaRedo />
                    </button>
                    {isMobile && <span className="icon-label">Redo</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={deleteElement}>
                        <FaTrash />
                    </button>
                    {isMobile && <span className="icon-label">Delete</span>}
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => alert("Help guide coming soon")}>
                        ?
                    </button>
                    {isMobile && <span className="icon-label">Help</span>}
                </div>

            </div>
        </div>

    );
}



