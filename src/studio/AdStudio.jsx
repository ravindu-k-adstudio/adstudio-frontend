// import { useState, useRef, useEffect } from "react";
// import TemplateBrowser from "../components/TemplateBrowser";
// import templates from "../data/templates"
// import { TEMPLATE_SIZES } from "../data/templates";
// import { useNavigate, useLocation } from "react-router-dom";
// import TopBar from "./TopBar";
// import LeftPanel from "./LeftPanel";
// import RightPanel from "./RightPanel";
// import Canvas from "./Canvas";
// import translations from "../data/translations";
// import { useAuth } from "../context/AuthContext";
// import "../styles/adstudio-responsive.css";
// import { CANVAS_SIZES } from "../config/canvasSizes";


// const API_URL = import.meta.env.VITE_API_URL;

// const getCanvasDimensions = size => {
//     return CANVAS_SIZES[size]?.editor || CANVAS_SIZES.square.editor;
// };


// export default function AdStudio() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { user, token } = useAuth();
//     const editingAd = location.state?.ad || null;

//     const [language, setLanguage] = useState("en");
//     const t = translations[language] || translations.en;

//     const [adSize, setAdSize] = useState("square");
//     const [texts, setTexts] = useState([]);
//     const [images, setImages] = useState([]);
//     const [shapes, setShapes] = useState([]);
//     const [blocks, setBlocks] = useState([]);
//     const [borders, setBorders] = useState([]);
//     const [background, setBackground] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [showTemplates, setShowTemplates] = useState(false);

//     const [tool, setTool] = useState("select");
//     const [lineType, setLineType] = useState("default");
//     const [strokeColor, setStrokeColor] = useState("#0b1f33");
//     const [strokeWidth, setStrokeWidth] = useState(2);

//     const canvasRef = useRef(null);

//     const [history, setHistory] = useState([]);
//     const [step, setStep] = useState(-1);

//     const [adId, setAdId] = useState(editingAd?._id || null);

//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//     const [activeSection, setActiveSection] = useState(null);
//     const [editingBackground, setEditingBackground] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);


//     /* ---------------- INITIAL LOAD ONLY ---------------- */
//     useEffect(() => {
//         const { width, height } = getCanvasDimensions(adSize);

//         if (!editingAd) {
//             const centerX = width / 2;

//             setTexts(

//                 [
//                     {
//                         id: 1,
//                         type: "business",
//                         text: "Business Name",

//                         x: width * 0.05,
//                         y: height * 0.12,

//                         width: width * 0.9,

//                         align: "center",

//                         fontSize: width * 0.07,

//                         fill: "#111",

//                         fontFamily: "Poppins"
//                     },

//                     {
//                         id: 2,
//                         type: "business",
//                         text: "Tagline Here",

//                         x: width * 0.05,
//                         y: height * 0.24,

//                         width: width * 0.9,

//                         align: "center",

//                         fontSize: width * 0.04,

//                         fill: "#444",

//                         fontFamily: "Poppins"
//                     },
//                     {
//                         id: 3,
//                         type: "business",
//                         text: "Description goes here",

//                         x: width * 0.05,
//                         y: height * 0.38,

//                         width: width * 0.9,

//                         align: "center",

//                         fontSize: width * 0.032,

//                         fill: "#555",

//                         fontFamily: "Poppins"
//                     },

//                     {
//                         id: 4,
//                         type: "contact",
//                         text: "📞 123 456 789",

//                         x: width * 0.08,
//                         y: height * 0.78,

//                         width: width * 0.9,

//                         fontSize: width * 0.03,

//                         fill: "#111",

//                         fontFamily: "Poppins"
//                     },

//                     {
//                         id: 5,
//                         type: "contact",
//                         text: "✉ info@email.com",

//                         x: width * 0.08,
//                         y: height * 0.85,

//                         width: width * 0.9,

//                         fontSize: width * 0.03,

//                         fill: "#111",

//                         fontFamily: "Poppins"
//                     },

//                     {
//                         id: 6,
//                         type: "contact",
//                         text: "📍 Your Address",

//                         x: width * 0.08,
//                         y: height * 0.92,

//                         width: width * 0.9,

//                         fontSize: width * 0.03,

//                         fill: "#111",

//                         fontFamily: "Poppins"
//                     }
//                 ]


//             );

//             setImages([]);
//             setShapes([]);
//             setBlocks([]);
//             setBorders([]);
//             setBackground(null);
//             return;
//         }

//         const loadAd = async () => {
//             try {
//                 const parsed = JSON.parse(editingAd.data);

//                 setTexts(parsed.texts || []);
//                 setShapes(parsed.shapes || []);
//                 setBlocks(parsed.blocks || []);
//                 setBorders(parsed.borders || []);

//                 if (parsed.background?.type === "image" && parsed.background.src) {
//                     const img = new window.Image();
//                     img.crossOrigin = "anonymous"; // 🔥 ADD THIS LINE
//                     img.src = parsed.background.src;
//                     img.onload = () =>
//                         setBackground({
//                             ...parsed.background,

//                             x: parsed.background.x ?? 0,
//                             y: parsed.background.y ?? 0,

//                             width: parsed.background.width ?? width,
//                             height: parsed.background.height ?? height,

//                             rotation: parsed.background.rotation ?? 0,

//                             image: img
//                         });
//                 } else {
//                     setBackground(parsed.background || null);
//                 }

//                 const loadedImages = await Promise.all(
//                     (parsed.images || []).map(i =>
//                         new Promise(resolve => {
//                             const img = new window.Image();
//                             img.src = i.src;
//                             img.onload = () => resolve({ ...i, image: img });
//                             img.onerror = () => resolve({ ...i, image: null });
//                         })
//                     )
//                 );

//                 setImages(loadedImages);
//             } catch (err) {
//                 console.error("LOAD FAILED:", err);
//             }
//         };

//         loadAd();
//     }, [editingAd]);

//     /* ---------------- AUTO ALIGN TEXT WHEN SIZE CHANGES ---------------- */
//     useEffect(() => {
//         if (!texts.length) return;

//         const { width, height } = getCanvasDimensions(adSize);
//         const centerX = width / 8;

//         setTexts(prev =>
//             prev.map(t => {
//                 if (t.type === "business") {
//                     if (t.id === 1) return { ...t, x: centerX, y: height * 0.2 };
//                     if (t.id === 2) return { ...t, x: centerX, y: height * 0.3 };
//                     if (t.id === 3) return { ...t, x: centerX, y: height * 0.4 };
//                 }

//                 if (t.type === "contact") {
//                     if (t.id === 4) return { ...t, x: width * 0.05, y: height * 0.82 };
//                     if (t.id === 5) return { ...t, x: width * 0.05, y: height * 0.88 };
//                     if (t.id === 6) return { ...t, x: width * 0.05, y: height * 0.94 };
//                 }

//                 return t;
//             })
//         );
//     }, [adSize]);

//     /* ---------------- HISTORY ---------------- */
//     const pushHistory = snap => {
//         const serialized = {
//             ...snap,
//             images: snap.images.map(i => ({ ...i, image: undefined })),
//             borders: snap.borders || [],
//             background: snap.background?.type === "image"
//                 ? { ...snap.background, image: undefined }
//                 : snap.background
//         };

//         const h = history.slice(0, step + 1);
//         h.push(serialized);
//         setHistory(h);
//         setStep(h.length - 1);
//     };

//     const { width, height } = getCanvasDimensions(adSize);

//     const restoreImages = async state => {
//         const restoredImages = await Promise.all(
//             (state.images || []).map(i =>
//                 new Promise(resolve => {
//                     if (!i.src) return resolve(i);
//                     const img = new window.Image();
//                     img.crossOrigin = "anonymous"; // 🔥 ADD THIS
//                     img.src = i.src;
//                     img.onload = () => resolve({ ...i, image: img });
//                     img.onerror = () => resolve({ ...i, image: null });
//                 })
//             )
//         );

//         if (state.background?.type === "image" && state.background.src) {
//             const bgImg = new window.Image();
//             bgImg.crossOrigin = "anonymous"; // 🔥 ADD
//             bgImg.src = state.background.src;
//             bgImg.onload = () =>
//                 setBackground({
//                     ...state.background,

//                     x: state.background.x ?? 0,
//                     y: state.background.y ?? 0,

//                     width: state.background.width ?? getCanvasDimensions(adSize).width,
//                     height: state.background.height ?? getCanvasDimensions(adSize).height,

//                     rotation: state.background.rotation ?? 0,

//                     image: bgImg
//                 });
//         } else {
//             setBackground(state.background);
//         }

//         setTexts(state.texts);
//         setShapes(state.shapes);
//         setBlocks(state.blocks);
//         setBorders(state.borders || []);
//         setImages(restoredImages);
//     };

//     const undo = () => {
//         if (step <= 0) return;
//         restoreImages(history[step - 1]);
//         setStep(step - 1);
//     };

//     const redo = () => {
//         if (step >= history.length - 1) return;
//         restoreImages(history[step + 1]);
//         setStep(step + 1);
//     };

//     const deleteSelected = () => {
//         setTexts(t => t.filter(x => x.id !== selectedId));
//         setImages(i => i.filter(x => x.id !== selectedId));
//         setShapes(s => s.filter(x => x.id !== selectedId));
//         setBlocks(b => b.filter(x => x.id !== selectedId));
//         setSelectedId(null);
//         pushHistory({ texts, images, shapes, blocks, borders, background });
//     };

//     // /////////////////////////////////////template////////////////////////////////////////////////
//     const makeId = prefix =>
//         `${prefix}-${Date.now()}-${Math.random()
//             .toString(36)
//             .slice(2, 9)}`;


//     /*
//     |--------------------------------------------------------------------------
//     | Safe image loader
//     |--------------------------------------------------------------------------
//     */

//     const loadTemplateImage = src => {

//         return new Promise(resolve => {

//             if (!src) {
//                 resolve(null);
//                 return;
//             }

//             const img = new window.Image();

//             img.crossOrigin = "anonymous";

//             let finished = false;

//             const finish = result => {

//                 if (finished) return;

//                 finished = true;

//                 resolve(result);

//             };

//             img.onload = () => {

//                 finish(img);

//             };

//             img.onerror = () => {

//                 console.warn(
//                     "Template image failed:",
//                     src
//                 );

//                 /*
//                 |--------------------------------------------------------------------------
//                 | Do NOT reject the whole template.
//                 |--------------------------------------------------------------------------
//                 */

//                 finish(null);

//             };

//             img.src = src;

//         });

//     };


//     /*
//     |--------------------------------------------------------------------------
//     | Fallback image
//     |--------------------------------------------------------------------------
//     */

//     const createFallbackImage = () => {

//         const svg = `
//         <svg xmlns="http://www.w3.org/2000/svg"
//              width="600"
//              height="400"
//              viewBox="0 0 600 400">

//             <defs>
//                 <linearGradient id="g"
//                     x1="0"
//                     y1="0"
//                     x2="1"
//                     y2="1">

//                     <stop offset="0"
//                           stop-color="#0b1f33"/>

//                     <stop offset="1"
//                           stop-color="#0ea5e9"/>

//                 </linearGradient>
//             </defs>

//             <rect
//                 width="600"
//                 height="400"
//                 fill="url(#g)"
//             />

//             <circle
//                 cx="300"
//                 cy="160"
//                 r="70"
//                 fill="rgba(255,255,255,.18)"
//             />

//             <text
//                 x="300"
//                 y="275"
//                 text-anchor="middle"
//                 fill="white"
//                 font-size="34"
//                 font-family="Arial"
//                 font-weight="bold"
//             >
//                 AdStudio
//             </text>

//             <text
//                 x="300"
//                 y="315"
//                 text-anchor="middle"
//                 fill="rgba(255,255,255,.75)"
//                 font-size="18"
//                 font-family="Arial"
//             >
//                 Replace Image
//             </text>

//         </svg>
//     `;

//         const img = new window.Image();

//         img.src =
//             `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

//         return img;
//     };


//     /*
//     |--------------------------------------------------------------------------
//     | LOAD TEMPLATE
//     |--------------------------------------------------------------------------
//     */

//     const loadTemplate = async template => {

//         if (!template) {
//             throw new Error("Invalid template");
//         }

//         const selectedSize =
//             template.selectedSize ||
//             adSize ||
//             "square";

//         const dimensions =
//             TEMPLATE_SIZES[selectedSize];

//         if (!dimensions) {
//             throw new Error(
//                 `Unsupported template size: ${selectedSize}`
//             );
//         }

//         const [canvasWidth, canvasHeight] =
//             dimensions;


//         /*
//         |--------------------------------------------------------------------------
//         | 1. Load background
//         |--------------------------------------------------------------------------
//         */

//         let backgroundImage =
//             await loadTemplateImage(
//                 template.background?.src
//             );

//         if (!backgroundImage) {
//             backgroundImage =
//                 createFallbackImage();
//         }


//         /*
//         |--------------------------------------------------------------------------
//         | 2. Load all template images
//         |--------------------------------------------------------------------------
//         |
//         | IMPORTANT:
//         | Every image becomes the same structure used by your normal
//         | Canvas image layer.
//         |--------------------------------------------------------------------------
//         */

//         const imagePromises =
//             (template.images || []).map(
//                 async item => {

//                     let image =
//                         await loadTemplateImage(
//                             item.src
//                         );

//                     if (!image) {
//                         image =
//                             createFallbackImage();
//                     }

//                     return {

//                         id: makeId(
//                             item.type || "image"
//                         ),

//                         type: "image",

//                         image,

//                         src: item.src,

//                         x:
//                             (item.nx ?? 0) *
//                             canvasWidth,

//                         y:
//                             (item.ny ?? 0) *
//                             canvasHeight,

//                         width:
//                             (item.nw ?? 0.2) *
//                             canvasWidth,

//                         height:
//                             (item.nh ?? 0.2) *
//                             canvasHeight,

//                         rotation:
//                             item.rotation || 0,

//                         /*
//                         | Helpful metadata.
//                         */
//                         assetType:
//                             item.type || "image",

//                         social:
//                             item.social || null

//                     };

//                 }
//             );


//         const templateImages =
//             await Promise.all(imagePromises);


//         /*
//         |--------------------------------------------------------------------------
//         | 3. Convert texts
//         |--------------------------------------------------------------------------
//         */

//         const templateTexts =
//             (template.texts || []).map(item => {

//                 const width =
//                     Math.max(
//                         40,
//                         (item.nw ?? 0.5) *
//                         canvasWidth
//                     );

//                 const fontSize =
//                     Math.max(
//                         8,
//                         (item.fontScale ?? 0.04) *
//                         Math.min(
//                             canvasWidth,
//                             canvasHeight
//                         )
//                     );

//                 return {

//                     id: makeId("text"),

//                     type: "text",

//                     text: item.text || "Text",

//                     x:
//                         (item.nx ?? 0.05) *
//                         canvasWidth,

//                     y:
//                         (item.ny ?? 0.05) *
//                         canvasHeight,

//                     width,

//                     fontSize,

//                     fill:
//                         item.fill ||
//                         "#ffffff",

//                     fontFamily:
//                         item.fontFamily ||
//                         "Poppins",

//                     fontStyle:
//                         item.fontStyle ||
//                         "normal",

//                     align:
//                         item.align ||
//                         "left",

//                     underline:
//                         !!item.underline,

//                     letterSpacing:
//                         item.letterSpacing ||
//                         0,

//                     rotation:
//                         item.rotation ||
//                         0

//                 };

//             });


//         /*
//         |--------------------------------------------------------------------------
//         | 4. Convert blocks
//         |--------------------------------------------------------------------------
//         |
//         | Your Canvas getBlockShape() receives:
//         | shape, x, y, width, height, fill, rotation.
//         |--------------------------------------------------------------------------
//         */

//         const templateBlocks =
//             (template.blocks || []).map(item => {

//                 return {

//                     id: makeId("block"),

//                     shape:
//                         item.shape ||
//                         "rectangle",

//                     x:
//                         (item.nx ?? 0) *
//                         canvasWidth,

//                     y:
//                         (item.ny ?? 0) *
//                         canvasHeight,

//                     width:
//                         Math.max(
//                             5,
//                             (item.nw ?? 0.2) *
//                             canvasWidth
//                         ),

//                     height:
//                         Math.max(
//                             5,
//                             (item.nh ?? 0.2) *
//                             canvasHeight
//                         ),

//                     rotation:
//                         item.rotation ||
//                         0,

//                     fill:
//                         item.fill ||
//                         "rgba(0,0,0,0.4)"

//                 };

//             });


//         /*
//         |--------------------------------------------------------------------------
//         | 5. Background
//         |--------------------------------------------------------------------------
//         */

//         const newBackground = {

//             type: "image",

//             src:
//                 template.background?.src ||
//                 "",

//             image:
//                 backgroundImage,

//             value:
//                 template.background?.value ||
//                 "#111827",

//             x: 0,

//             y: 0,

//             width:
//                 canvasWidth,

//             height:
//                 canvasHeight,

//             rotation: 0

//         };


//         /*
//         |--------------------------------------------------------------------------
//         | 6. IMPORTANT:
//         | Change editor size BEFORE putting elements on canvas.
//         |--------------------------------------------------------------------------
//         */

//         setAdSize(selectedSize);


//         /*
//         |--------------------------------------------------------------------------
//         | 7. Replace current design
//         |--------------------------------------------------------------------------
//         */

//         setTexts(templateTexts);

//         setImages(templateImages);

//         setShapes([]);

//         setBlocks(templateBlocks);

//         setBackground(newBackground);


//         /*
//         |--------------------------------------------------------------------------
//         | 8. Clear selection
//         |--------------------------------------------------------------------------
//         */

//         setSelectedId(null);

//         selectedNodeRef.current = null;

//         setEditingBackground(false);


//         /*
//         |--------------------------------------------------------------------------
//         | 9. Exit drawing mode
//         |--------------------------------------------------------------------------
//         */

//         setTool("select");


//         /*
//         |--------------------------------------------------------------------------
//         | 10. History snapshot
//         |--------------------------------------------------------------------------
//         */

//         setTimeout(() => {

//             try {

//                 pushHistory();

//             } catch (error) {

//                 console.warn(
//                     "Template history snapshot skipped:",
//                     error
//                 );

//             }

//         }, 150);

//     };


//     /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

//     const replaceTemplateImage = (imageId, file) => {
//         if (!file) return;

//         if (!file.type.startsWith("image/")) {
//             alert("Please select an image file.");
//             return;
//         }

//         const reader = new FileReader();

//         reader.onload = event => {
//             const src = event.target.result;

//             const img = new window.Image();

//             img.onload = () => {

//                 setImages(prev =>
//                     prev.map(item =>
//                         item.id === imageId
//                             ? {
//                                 ...item,
//                                 image: img,
//                                 src
//                             }
//                             : item
//                     )
//                 );

//                 setTimeout(() => {
//                     pushHistory();
//                 }, 0);
//             };

//             img.onerror = () => {
//                 alert("The selected image could not be loaded.");
//             };

//             img.src = src;
//         };

//         reader.onerror = () => {
//             alert("Could not read the selected image.");
//         };

//         reader.readAsDataURL(file);
//     };



//     /* ---------------- SAVE ---------------- */
//     const saveAd = async () => {
//         if (!canvasRef.current) return;

//         try {
//             const editor = CANVAS_SIZES[adSize].editor;
//             const output = CANVAS_SIZES[adSize].export;

//             const pixelRatio = output.width / editor.width;

//             const image = canvasRef.current.toDataURL({
//                 pixelRatio
//             });

//             const payloadImages = images.map(i => ({
//                 ...i,
//                 src: i.image?.src || i.src,
//                 image: undefined
//             }));

//             const payloadBackground = background?.type === "image"
//                 ? { ...background, src: background.image?.src || background.src, image: undefined }
//                 : background;

//             const payload = {
//                 title: "My Ad",
//                 data: JSON.stringify({
//                     texts,
//                     images: payloadImages,
//                     shapes,
//                     blocks,
//                     borders,
//                     background: payloadBackground
//                 }),
//                 image,
//                 size: adSize,
//                 language
//             };

//             const url = adId ? `${API_URL}/ads/${adId}` : `${API_URL}/ads/save`;
//             const method = adId ? "PUT" : "POST";

//             const res = await fetch(url, {
//                 method,
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`
//                 },
//                 body: JSON.stringify(payload)
//             });

//             const result = await res.json();

//             if (!res.ok) {
//                 console.log("SAVE ERROR:", result); // ✅ DEBUG LOG
//                 throw new Error(result.message || "Save failed");
//             }
//             if (!adId) setAdId(result.ad._id);

//             alert("Ad saved successfully");
//         } catch (err) {
//             console.error("SAVE FAILED:", err);
//             alert("Failed to save ad");
//         }
//     };




//     return (
//         <div className="h-screen flex flex-col bg-white overflow-hidden">
//             <TopBar
//                 adSize={adSize}
//                 setAdSize={setAdSize}
//                 language={language}
//                 setLanguage={setLanguage}
//                 canvasRef={canvasRef}
//                 onSave={saveAd}
//                 onNavigate={p => navigate(p === "home" ? "/" : `/${p}`)}
//                 adId={adId}
//                 setAdId={setAdId}
//                 onOpenTemplates={() => setShowTemplates(true)}
//             />

//             <div className="studio-layout">
//                 <LeftPanel
//                     t={t}
//                     texts={texts}
//                     setTexts={setTexts}
//                     images={images}
//                     setImages={setImages}
//                     setBackground={setBackground}
//                     blocks={blocks}
//                     setBlocks={setBlocks}
//                     isMobile={isMobile}
//                     editingBackground={editingBackground}
//                     setEditingBackground={setEditingBackground}
//                     canvasWidth={width}
//                     canvasHeight={height}
//                 />
//                 <Canvas
//                     ref={canvasRef}
//                     adSize={adSize}
//                     texts={texts}
//                     setTexts={setTexts}
//                     images={images}
//                     setImages={setImages}
//                     onReplaceImage={replaceTemplateImage}
//                     shapes={shapes}
//                     setShapes={setShapes}
//                     blocks={blocks}
//                     setBlocks={setBlocks}
//                     borders={borders}
//                     setBorders={setBorders}
//                     background={background}
//                     selectedId={selectedId}
//                     setSelectedId={setSelectedId}
//                     tool={tool}
//                     setTool={setTool}
//                     lineType={lineType}
//                     setLineType={setLineType}
//                     strokeColor={strokeColor}
//                     setStrokeColor={setStrokeColor}
//                     strokeWidth={strokeWidth}
//                     setStrokeWidth={setStrokeWidth}
//                     pushHistory={() => pushHistory({ texts, images, shapes, blocks, background })}
//                     language={language}
//                     setActiveSection={setActiveSection}
//                     activeSection={activeSection}
//                     editingBackground={editingBackground}
//                     setEditingBackground={setEditingBackground}

//                 />
//                 <RightPanel
//                     t={t}
//                     texts={texts}
//                     setTexts={setTexts}

//                     borders={borders}
//                     setBorders={setBorders}

//                     canvasWidth={width}
//                     canvasHeight={height}

//                     selectedId={selectedId}
//                     tool={tool}
//                     setTool={setTool}
//                     lineType={lineType}
//                     setLineType={setLineType}
//                     strokeColor={strokeColor}
//                     setStrokeColor={setStrokeColor}
//                     strokeWidth={strokeWidth}
//                     setStrokeWidth={setStrokeWidth}
//                     undo={undo}
//                     redo={redo}
//                     deleteElement={deleteSelected}
//                     language={language}
//                     isMobile={isMobile}
//                     activeSection={activeSection}
//                     setActiveSection={setActiveSection}
//                     onOpenTemplates={() => setShowTemplates(true)}
//                 />
//             </div>
//             {showTemplates && (
//                 <TemplateBrowser
//                     adSize={adSize}
//                     onUseTemplate={loadTemplate}
//                     onClose={() => setShowTemplates(false)}
//                 />
//             )}
//         </div>
//     );
// }

//////////////////////////////////////meka hariyata wada /////////////////////////////////////////////////////////////////////
import { useState, useRef, useEffect } from "react";
import TemplateBrowser from "../components/TemplateBrowser";
import templates from "../data/templates"
import { TEMPLATE_SIZES } from "../data/templates";
import { useNavigate, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Canvas from "./Canvas";
import translations from "../data/translations";
import { useAuth } from "../context/AuthContext";
import "../styles/adstudio-responsive.css";
import { CANVAS_SIZES } from "../config/canvasSizes";

// const API_URL = "http://192.168.1.28:5000/api"; // your IP
const API_URL = import.meta.env.VITE_API_URL;

const getCanvasDimensions = size => {
    return CANVAS_SIZES[size]?.editor || CANVAS_SIZES.square.editor;
};


export default function AdStudio() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, token } = useAuth();
    const editingAd = location.state?.ad || null;

    const [language, setLanguage] = useState("en");
    const t = translations[language] || translations.en;

    const [adSize, setAdSize] = useState("square");
    const [texts, setTexts] = useState([]);
    const [templateData, setTemplateData] = useState(null);
    const [images, setImages] = useState([]);
    const [shapes, setShapes] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [borders, setBorders] = useState([]);
    const [background, setBackground] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [showTemplates, setShowTemplates] = useState(false);

    const [tool, setTool] = useState("select");
    const [lineType, setLineType] = useState("default");
    const [strokeColor, setStrokeColor] = useState("#0b1f33");
    const [strokeWidth, setStrokeWidth] = useState(2);

    const canvasRef = useRef(null);

    const [history, setHistory] = useState([]);
    const [step, setStep] = useState(-1);

    const [adId, setAdId] = useState(editingAd?._id || null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const [activeSection, setActiveSection] = useState(null);
    const [editingBackground, setEditingBackground] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    /* ---------------- INITIAL LOAD ONLY ---------------- */
    useEffect(() => {
        const { width, height } = getCanvasDimensions(adSize);

        if (!editingAd) {
            const centerX = width / 2;

            setTexts(

                [
                    {
                        id: 1,
                        type: "business",
                        text: "Business Name",

                        x: width * 0.05,
                        y: height * 0.12,

                        width: width * 0.9,

                        align: "center",

                        fontSize: width * 0.07,

                        fill: "#111",

                        fontFamily: "Poppins"
                    },

                    {
                        id: 2,
                        type: "business",
                        text: "Tagline Here",

                        x: width * 0.05,
                        y: height * 0.24,

                        width: width * 0.9,

                        align: "center",

                        fontSize: width * 0.04,

                        fill: "#444",

                        fontFamily: "Poppins"
                    },
                    {
                        id: 3,
                        type: "business",
                        text: "Description goes here",

                        x: width * 0.05,
                        y: height * 0.38,

                        width: width * 0.9,

                        align: "center",

                        fontSize: width * 0.032,

                        fill: "#555",

                        fontFamily: "Poppins"
                    },

                    {
                        id: 4,
                        type: "contact",
                        text: "📞 123 456 789",

                        x: width * 0.08,
                        y: height * 0.78,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Poppins"
                    },

                    {
                        id: 5,
                        type: "contact",
                        text: "✉ info@email.com",

                        x: width * 0.08,
                        y: height * 0.85,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Poppins"
                    },

                    {
                        id: 6,
                        type: "contact",
                        text: "📍 Your Address",

                        x: width * 0.08,
                        y: height * 0.92,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Poppins"
                    }
                ]


            );

            setImages([]);
            setShapes([]);
            setBlocks([]);
            setBorders([]);
            setBackground(null);
            return;
        }

        const loadAd = async () => {
            try {
                const parsed = JSON.parse(editingAd.data);

                setTexts(parsed.texts || []);
                setShapes(parsed.shapes || []);
                setBlocks(parsed.blocks || []);
                setBorders(parsed.borders || []);

                if (parsed.background?.type === "image" && parsed.background.src) {
                    const img = new window.Image();
                    img.crossOrigin = "anonymous"; // 🔥 ADD THIS LINE
                    img.src = parsed.background.src;
                    img.onload = () =>
                        setBackground({
                            ...parsed.background,

                            x: parsed.background.x ?? 0,
                            y: parsed.background.y ?? 0,

                            width: parsed.background.width ?? width,
                            height: parsed.background.height ?? height,

                            rotation: parsed.background.rotation ?? 0,

                            image: img
                        });
                } else {
                    setBackground(parsed.background || null);
                }

                const loadedImages = await Promise.all(
                    (parsed.images || []).map(i =>
                        new Promise(resolve => {
                            const img = new window.Image();
                            img.src = i.src;
                            img.onload = () => resolve({ ...i, image: img });
                            img.onerror = () => resolve({ ...i, image: null });
                        })
                    )
                );

                setImages(loadedImages);
            } catch (err) {
                console.error("LOAD FAILED:", err);
            }
        };

        loadAd();
    }, [editingAd]);

    /* ---------------- AUTO ALIGN TEXT WHEN SIZE CHANGES ---------------- */
    useEffect(() => {
        if (!texts.length) return;

        const { width, height } = getCanvasDimensions(adSize);
        const centerX = width / 8;

        setTexts(prev =>
            prev.map(t => {
                if (t.type === "business") {
                    if (t.id === 1) return { ...t, x: centerX, y: height * 0.2 };
                    if (t.id === 2) return { ...t, x: centerX, y: height * 0.3 };
                    if (t.id === 3) return { ...t, x: centerX, y: height * 0.4 };
                }

                if (t.type === "contact") {
                    if (t.id === 4) return { ...t, x: width * 0.05, y: height * 0.82 };
                    if (t.id === 5) return { ...t, x: width * 0.05, y: height * 0.88 };
                    if (t.id === 6) return { ...t, x: width * 0.05, y: height * 0.94 };
                }

                return t;
            })
        );
    }, [adSize]);

    /* ---------------- HISTORY ---------------- */
    const pushHistory = snap => {
        const serialized = {
            ...snap,
            images: snap.images.map(i => ({ ...i, image: undefined })),
            borders: snap.borders || [],
            background: snap.background?.type === "image"
                ? { ...snap.background, image: undefined }
                : snap.background
        };

        const h = history.slice(0, step + 1);
        h.push(serialized);
        setHistory(h);
        setStep(h.length - 1);
    };

    const { width, height } = getCanvasDimensions(adSize);

    const restoreImages = async state => {
        const restoredImages = await Promise.all(
            (state.images || []).map(i =>
                new Promise(resolve => {
                    if (!i.src) return resolve(i);
                    const img = new window.Image();
                    img.crossOrigin = "anonymous"; // 🔥 ADD THIS
                    img.src = i.src;
                    img.onload = () => resolve({ ...i, image: img });
                    img.onerror = () => resolve({ ...i, image: null });
                })
            )
        );

        if (state.background?.type === "image" && state.background.src) {
            const bgImg = new window.Image();
            bgImg.crossOrigin = "anonymous"; // 🔥 ADD
            bgImg.src = state.background.src;
            bgImg.onload = () =>
                setBackground({
                    ...state.background,

                    x: state.background.x ?? 0,
                    y: state.background.y ?? 0,

                    width: state.background.width ?? getCanvasDimensions(adSize).width,
                    height: state.background.height ?? getCanvasDimensions(adSize).height,

                    rotation: state.background.rotation ?? 0,

                    image: bgImg
                });
        } else {
            setBackground(state.background);
        }

        setTexts(state.texts);
        setShapes(state.shapes);
        setBlocks(state.blocks);
        setBorders(state.borders || []);
        setImages(restoredImages);
    };

    const undo = () => {
        if (step <= 0) return;
        restoreImages(history[step - 1]);
        setStep(step - 1);
    };

    const redo = () => {
        if (step >= history.length - 1) return;
        restoreImages(history[step + 1]);
        setStep(step + 1);
    };

    const deleteSelected = () => {
        setTexts(t => t.filter(x => x.id !== selectedId));
        setImages(i => i.filter(x => x.id !== selectedId));
        setShapes(s => s.filter(x => x.id !== selectedId));
        setBlocks(b => b.filter(x => x.id !== selectedId));
        setSelectedId(null);
        pushHistory({ texts, images, shapes, blocks, borders, background });
    };

    // /////////////////////////////////////template////////////////////////////////////////////////
    const makeId = prefix =>
        `${prefix}-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 9)}`;


    /*
    |--------------------------------------------------------------------------
    | Safe image loader
    |--------------------------------------------------------------------------
    */

    const loadTemplateImage = src => {

        return new Promise(resolve => {

            if (!src) {
                resolve(null);
                return;
            }

            const img = new window.Image();

            img.crossOrigin = "anonymous";

            let finished = false;

            const finish = result => {

                if (finished) return;

                finished = true;

                resolve(result);

            };

            img.onload = () => {

                finish(img);

            };

            img.onerror = () => {

                console.warn(
                    "Template image failed:",
                    src
                );

                /*
                |--------------------------------------------------------------------------
                | Do NOT reject the whole template.
                |--------------------------------------------------------------------------
                */

                finish(null);

            };

            img.src = src;

        });

    };


    /*
    |--------------------------------------------------------------------------
    | Fallback image
    |--------------------------------------------------------------------------
    */

    const createFallbackImage = () => {

        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="600"
             height="400"
             viewBox="0 0 600 400">

            <defs>
                <linearGradient id="g"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1">

                    <stop offset="0"
                          stop-color="#0b1f33"/>

                    <stop offset="1"
                          stop-color="#0ea5e9"/>

                </linearGradient>
            </defs>

            <rect
                width="600"
                height="400"
                fill="url(#g)"
            />

            <circle
                cx="300"
                cy="160"
                r="70"
                fill="rgba(255,255,255,.18)"
            />

            <text
                x="300"
                y="275"
                text-anchor="middle"
                fill="white"
                font-size="34"
                font-family="Arial"
                font-weight="bold"
            >
                AdStudio
            </text>

            <text
                x="300"
                y="315"
                text-anchor="middle"
                fill="rgba(255,255,255,.75)"
                font-size="18"
                font-family="Arial"
            >
                Replace Image
            </text>

        </svg>
    `;

        const img = new window.Image();

        img.src =
            `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

        return img;
    };


    /*
    |--------------------------------------------------------------------------
    | LOAD TEMPLATE
    |--------------------------------------------------------------------------
    */

    const loadTemplate = async template => {

        if (!template) {
            throw new Error("Invalid template");
        }

        setTemplateData(template);

        const selectedSize =
            template.selectedSize ||
            adSize ||
            "square";

        const dimensions =
            TEMPLATE_SIZES[selectedSize];

        if (!dimensions) {
            throw new Error(
                `Unsupported template size: ${selectedSize}`
            );
        }

        const [canvasWidth, canvasHeight] =
            dimensions;


        /*
        |--------------------------------------------------------------------------
        | 1. Load background
        |--------------------------------------------------------------------------
        */

        let backgroundImage =
            await loadTemplateImage(
                template.background?.src
            );

        if (!backgroundImage) {
            backgroundImage =
                createFallbackImage();
        }


        /*
        |--------------------------------------------------------------------------
        | 2. Load all template images
        |--------------------------------------------------------------------------
        |
        | IMPORTANT:
        | Every image becomes the same structure used by your normal
        | Canvas image layer.
        |--------------------------------------------------------------------------
        */

        const imagePromises =
            (template.images || []).map(
                async item => {

                    let image =
                        await loadTemplateImage(
                            item.src
                        );

                    if (!image) {
                        image =
                            createFallbackImage();
                    }

                    return {

                        id: makeId(
                            item.type || "image"
                        ),

                        type: "image",

                        image,

                        src: item.src,

                        x:
                            (item.nx ?? 0) *
                            canvasWidth,

                        y:
                            (item.ny ?? 0) *
                            canvasHeight,

                        width:
                            (item.nw ?? 0.2) *
                            canvasWidth,

                        height:
                            (item.nh ?? 0.2) *
                            canvasHeight,

                        rotation:
                            item.rotation || 0,

                        /*
                        | Helpful metadata.
                        */
                        assetType:
                            item.type || "image",

                        social:
                            item.social || null

                    };

                }
            );


        const templateImages =
            await Promise.all(imagePromises);


        /*
        |--------------------------------------------------------------------------
        | 3. Convert texts
        |--------------------------------------------------------------------------
        */

        // const templateTexts =
        //     (template.texts || []).map(item => {

        //         const width =
        //             Math.max(
        //                 40,
        //                 (item.nw ?? 0.5) *
        //                 canvasWidth
        //             );

        //         const fontSize =
        //             Math.max(
        //                 8,
        //                 (item.fontScale ?? 0.04) *
        //                 Math.min(
        //                     canvasWidth,
        //                     canvasHeight
        //                 )
        //             );

        //         return {

        //             id: makeId("text"),

        //             type: "text",

        //             text: item.text || "Text",

        //             x:
        //                 (item.nx ?? 0.05) *
        //                 canvasWidth,

        //             y:
        //                 (item.ny ?? 0.05) *
        //                 canvasHeight,

        //             width,

        //             fontSize,

        //             fill:
        //                 item.fill ||
        //                 "#ffffff",

        //             fontFamily:
        //                 item.fontFamily ||
        //                 "Poppins",

        //             fontStyle:
        //                 item.fontStyle ||
        //                 "normal",

        //             align:
        //                 item.align ||
        //                 "left",

        //             underline:
        //                 !!item.underline,

        //             letterSpacing:
        //                 item.letterSpacing ||
        //                 0,

        //             rotation:
        //                 item.rotation ||
        //                 0

        //         };

        //     });
        const templateTexts =
            (template.texts || []).map(item => {

                const width =
                    Math.max(
                        40,
                        (item.nw ?? 0.5) * canvasWidth
                    );

                const fontSize =
                    Math.max(
                        8,
                        (item.fontScale ?? 0.04) *
                        Math.min(
                            canvasWidth,
                            canvasHeight
                        )
                    );

                /*
                |--------------------------------------------------------------------------
                | IMPORTANT
                |--------------------------------------------------------------------------
                | Keep the IDs used by LeftPanel.
                |
                | 1 = Business name
                | 2 = Tagline
                | 3 = Description
                | 4 = Phone
                | 5 = Email
                | 6 = Address
                |
                | Offer intentionally gets a generated ID because LeftPanel
                | does not edit it.
                |--------------------------------------------------------------------------
                */

                let id = item.id;

                if (!id) {

                    if (item.role === "businessName") {
                        id = 1;
                    } else if (item.role === "tagline") {
                        id = 2;
                    } else if (item.role === "description") {
                        id = 3;
                    } else if (item.role === "phone") {
                        id = 4;
                    } else if (item.role === "email") {
                        id = 5;
                    } else if (item.role === "address") {
                        id = 6;
                    } else {
                        id = makeId("text");
                    }

                }

                return {

                    id,

                    /*
                    | Business fields must remain business.
                    | Contact fields must remain contact.
                    */
                    type:
                        item.type ||
                        (
                            ["phone", "email", "address"].includes(item.role)
                                ? "contact"
                                : "business"
                        ),

                    role: item.role || null,

                    text:
                        item.text || "Text",

                    x:
                        (item.nx ?? 0.05) *
                        canvasWidth,

                    y:
                        (item.ny ?? 0.05) *
                        canvasHeight,

                    width,

                    fontSize,

                    fill:
                        item.fill ||
                        "#ffffff",

                    fontFamily:
                        item.fontFamily ||
                        "Poppins",

                    fontStyle:
                        item.fontStyle ||
                        "normal",

                    align:
                        item.align ||
                        "left",

                    underline:
                        !!item.underline,

                    letterSpacing:
                        item.letterSpacing ||
                        0,

                    rotation:
                        item.rotation ||
                        0
                };

            });


        /*
        |--------------------------------------------------------------------------
        | 4. Convert blocks
        |--------------------------------------------------------------------------
        |
        | Your Canvas getBlockShape() receives:
        | shape, x, y, width, height, fill, rotation.
        |--------------------------------------------------------------------------
        */

        const templateBlocks =
            (template.blocks || []).map(item => {

                return {

                    id: makeId("block"),

                    shape:
                        item.shape ||
                        "rectangle",

                    x:
                        (item.nx ?? 0) *
                        canvasWidth,

                    y:
                        (item.ny ?? 0) *
                        canvasHeight,

                    width:
                        Math.max(
                            5,
                            (item.nw ?? 0.2) *
                            canvasWidth
                        ),

                    height:
                        Math.max(
                            5,
                            (item.nh ?? 0.2) *
                            canvasHeight
                        ),

                    rotation:
                        item.rotation ||
                        0,

                    fill:
                        item.fill ||
                        "rgba(0,0,0,0.4)"

                };

            });


        /*
        |--------------------------------------------------------------------------
        | 5. Background
        |--------------------------------------------------------------------------
        */

        const newBackground = {

            type: "image",

            src:
                template.background?.src ||
                "",

            image:
                backgroundImage,

            value:
                template.background?.value ||
                "#111827",

            x: 0,

            y: 0,

            width:
                canvasWidth,

            height:
                canvasHeight,

            rotation: 0

        };


        /*
        |--------------------------------------------------------------------------
        | 6. IMPORTANT:
        | Change editor size BEFORE putting elements on canvas.
        |--------------------------------------------------------------------------
        */

        setAdSize(selectedSize);


        /*
        |--------------------------------------------------------------------------
        | 7. Replace current design
        |--------------------------------------------------------------------------
        */

        setTexts(templateTexts);

        setImages(templateImages);

        setShapes([]);

        setBlocks(templateBlocks);

        setBackground(newBackground);


        /*
        |--------------------------------------------------------------------------
        | 8. Clear selection
        |--------------------------------------------------------------------------
        */

        setSelectedId(null);

        // selectedNodeRef.current = null;

        setEditingBackground(false);


        /*
        |--------------------------------------------------------------------------
        | 9. Exit drawing mode
        |--------------------------------------------------------------------------
        */

        setTool("select");


        /*
        |--------------------------------------------------------------------------
        | 10. History snapshot
        |--------------------------------------------------------------------------
        */

        // setTimeout(() => {

        //     try {

        //         pushHistory();

        //     } catch (error) {

        //         console.warn(
        //             "Template history snapshot skipped:",
        //             error
        //         );

        //     }

        // }, 150);
        setTimeout(() => {
            pushHistory({
                texts: templateTexts,
                images: templateImages,
                shapes: [],
                blocks: templateBlocks,
                borders: [],
                background: newBackground
            });
        }, 150);

    };


    /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

    const replaceTemplateImage = (imageId, file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = event => {
            const src = event.target.result;

            const img = new window.Image();

            img.onload = () => {

                setImages(prev =>
                    prev.map(item =>
                        item.id === imageId
                            ? {
                                ...item,
                                image: img,
                                src
                            }
                            : item
                    )
                );

                setTimeout(() => {
                    pushHistory();
                }, 0);
            };

            img.onerror = () => {
                alert("The selected image could not be loaded.");
            };

            img.src = src;
        };

        reader.onerror = () => {
            alert("Could not read the selected image.");
        };

        reader.readAsDataURL(file);
    };



    /* ---------------- SAVE ---------------- */
    const saveAd = async () => {
        if (!canvasRef.current) return;

        try {
            const editor = CANVAS_SIZES[adSize].editor;
            const output = CANVAS_SIZES[adSize].export;

            const pixelRatio = output.width / editor.width;

            const image = canvasRef.current.toDataURL({
                pixelRatio
            });

            const payloadImages = images.map(i => ({
                ...i,
                src: i.image?.src || i.src,
                image: undefined
            }));

            const payloadBackground = background?.type === "image"
                ? { ...background, src: background.image?.src || background.src, image: undefined }
                : background;

            const payload = {
                title: "My Ad",
                data: JSON.stringify({
                    texts,
                    images: payloadImages,
                    shapes,
                    blocks,
                    borders,
                    background: payloadBackground
                }),
                image,
                size: adSize,
                language
            };

            const url = adId ? `${API_URL}/ads/${adId}` : `${API_URL}/ads/save`;
            const method = adId ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const result = await res.json();

            if (!res.ok) {
                console.log("SAVE ERROR:", result); // ✅ DEBUG LOG
                throw new Error(result.message || "Save failed");
            }
            if (!adId) setAdId(result.ad._id);

            alert("Ad saved successfully");
        } catch (err) {
            console.error("SAVE FAILED:", err);
            alert("Failed to save ad");
        }
    };

    // ////////////////////////////////////////////////////

    /* ================= COMPLETE CANVAS RESET ================= */

    const resetCanvas = () => {
        const confirmed = window.confirm(
            "Are you sure you want to reset the canvas?\n\n" +
            "This will remove all images, shapes, blocks, borders and text changes " +
            "and restore the canvas to its starting point."
        );

        if (!confirmed) return;

        const { width, height } = getCanvasDimensions(adSize);

        setTexts([
            {
                id: 1,
                type: "business",
                text: "Business Name",

                x: width * 0.05,
                y: height * 0.12,

                width: width * 0.9,

                align: "center",

                fontSize: width * 0.07,

                fill: "#111",

                fontFamily: "Poppins"
            },

            {
                id: 2,
                type: "business",
                text: "Tagline Here",

                x: width * 0.05,
                y: height * 0.24,

                width: width * 0.9,

                align: "center",

                fontSize: width * 0.04,

                fill: "#444",

                fontFamily: "Poppins"
            },

            {
                id: 3,
                type: "business",
                text: "Description goes here",

                x: width * 0.05,
                y: height * 0.38,

                width: width * 0.9,

                align: "center",

                fontSize: width * 0.032,

                fill: "#555",

                fontFamily: "Poppins"
            },

            {
                id: 4,
                type: "contact",
                text: "📞 123 456 789",

                x: width * 0.08,
                y: height * 0.78,

                width: width * 0.9,

                fontSize: width * 0.03,

                fill: "#111",

                fontFamily: "Poppins"
            },

            {
                id: 5,
                type: "contact",
                text: "✉ info@email.com",

                x: width * 0.08,
                y: height * 0.85,

                width: width * 0.9,

                fontSize: width * 0.03,

                fill: "#111",

                fontFamily: "Poppins"
            },

            {
                id: 6,
                type: "contact",
                text: "📍 Your Address",

                x: width * 0.08,
                y: height * 0.92,

                width: width * 0.9,

                fontSize: width * 0.03,

                fill: "#111",

                fontFamily: "Poppins"
            }
        ]);

        // Remove everything added by the user/template
        setImages([]);
        setShapes([]);
        setBlocks([]);
        setBorders([]);

        // Restore default background
        setBackground(null);

        // Clear selection
        setSelectedId(null);

        // Exit background editing
        setEditingBackground(false);

        // Exit drawing mode
        setTool("select");

        // Reset drawing settings
        setLineType("default");
        setStrokeColor("#0b1f33");
        setStrokeWidth(2);

        // Clear active panel section
        setActiveSection(null);

        // Reset history
        setHistory([]);
        setStep(-1);

        // Clear loaded template
        setTemplateData(null);
    };


    //////////////////////////////////////////////////////////


    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden">
            <TopBar
                adSize={adSize}
                setAdSize={setAdSize}
                language={language}
                setLanguage={setLanguage}
                canvasRef={canvasRef}
                onSave={saveAd}
                onNavigate={p => navigate(p === "home" ? "/" : `/${p}`)}
                adId={adId}
                setAdId={setAdId}
                onOpenTemplates={() => setShowTemplates(true)}
            />

            <div className="studio-layout">
                <LeftPanel
                    t={t}
                    texts={texts}
                    setTexts={setTexts}
                    templateData={templateData}
                    images={images}
                    setImages={setImages}
                    setBackground={setBackground}
                    blocks={blocks}
                    setBlocks={setBlocks}
                    isMobile={isMobile}
                    editingBackground={editingBackground}
                    setEditingBackground={setEditingBackground}
                    canvasWidth={width}
                    canvasHeight={height}
                />
                <Canvas
                    ref={canvasRef}
                    adSize={adSize}
                    onReset={resetCanvas}
                    texts={texts}
                    setTexts={setTexts}
                    images={images}
                    setImages={setImages}
                    onReplaceImage={replaceTemplateImage}
                    shapes={shapes}
                    setShapes={setShapes}
                    blocks={blocks}
                    setBlocks={setBlocks}
                    borders={borders}
                    setBorders={setBorders}
                    background={background}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    tool={tool}
                    setTool={setTool}
                    lineType={lineType}
                    setLineType={setLineType}
                    strokeColor={strokeColor}
                    setStrokeColor={setStrokeColor}
                    strokeWidth={strokeWidth}
                    setStrokeWidth={setStrokeWidth}
                    pushHistory={() => pushHistory({ texts, images, shapes, blocks, background })}
                    language={language}
                    setActiveSection={setActiveSection}
                    activeSection={activeSection}
                    editingBackground={editingBackground}
                    setEditingBackground={setEditingBackground}

                />
                <RightPanel
                    t={t}
                    texts={texts}
                    setTexts={setTexts}

                    borders={borders}
                    setBorders={setBorders}

                    canvasWidth={width}
                    canvasHeight={height}

                    selectedId={selectedId}
                    tool={tool}
                    setTool={setTool}
                    lineType={lineType}
                    setLineType={setLineType}
                    strokeColor={strokeColor}
                    setStrokeColor={setStrokeColor}
                    strokeWidth={strokeWidth}
                    setStrokeWidth={setStrokeWidth}
                    undo={undo}
                    redo={redo}
                    deleteElement={deleteSelected}
                    language={language}
                    isMobile={isMobile}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    onOpenTemplates={() => setShowTemplates(true)}
                />
            </div>
            {showTemplates && (
                <TemplateBrowser
                    adSize={adSize}
                    onUseTemplate={loadTemplate}
                    onClose={() => setShowTemplates(false)}
                />
            )}
        </div>
    );
}