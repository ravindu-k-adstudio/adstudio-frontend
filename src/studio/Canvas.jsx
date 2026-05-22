// import {
//     Stage,
//     Layer,
//     Rect,
//     Text,
//     Image as KonvaImage,
//     Line,
//     Circle,
//     Transformer,
//     RegularPolygon
// } from "react-konva";
// import { useRef, useState, useEffect, forwardRef } from "react";
// import FloatingToolbar from "./FloatinngToolbar";
// const CURSORS = {
//     brush: "crosshair",
//     line: "crosshair",
//     rectangle: "crosshair",
//     circle: "crosshair",
//     eraser: "crosshair",
//     select: "default",
//     move: "move",
//     text: "text"
// };

// const DRAW_TOOLS = ["brush", "eraser", "line", "rectangle", "circle"];

// /* ================= BLOCK SHAPE GENERATOR ================= */

// const getBlockShape = (b) => {

//     const w = b.width;
//     const h = b.height;

//     if (b.shape === "rectangle" || !b.shape) {
//         return <Rect key={b.id} {...b} />;
//     }

//     if (b.shape === "rhombus") {
//         const points = [
//             w / 2, 0,
//             w, h / 2,
//             w / 2, h,
//             0, h / 2
//         ];

//         return (
//             <Line
//                 key={b.id}
//                 x={b.x}
//                 y={b.y}
//                 points={points}
//                 closed
//                 fill={b.fill}
//                 rotation={b.rotation}
//                 draggable
//             />
//         );
//     }

//     if (b.shape === "parallelogram") {
//         const offset = w * 0.25;

//         const points = [
//             offset, 0,
//             w, 0,
//             w - offset, h,
//             0, h
//         ];

//         return (
//             <Line
//                 key={b.id}
//                 x={b.x}
//                 y={b.y}
//                 points={points}
//                 closed
//                 fill={b.fill}
//                 rotation={b.rotation}
//                 draggable
//             />
//         );
//     }

//     if (b.shape === "trapezoid") {

//         const top = w * 0.6;
//         const offset = (w - top) / 2;

//         const points = [
//             offset, 0,
//             offset + top, 0,
//             w, h,
//             0, h
//         ];

//         return (
//             <Line
//                 key={b.id}
//                 x={b.x}
//                 y={b.y}
//                 points={points}
//                 closed
//                 fill={b.fill}
//                 rotation={b.rotation}
//                 draggable
//             />
//         );
//     }

//     if (b.shape === "heptagon") {
//         return (
//             <RegularPolygon
//                 key={b.id}
//                 x={b.x + w / 2}
//                 y={b.y + h / 2}
//                 sides={7}
//                 radius={Math.min(w, h) / 2}
//                 fill={b.fill}
//                 rotation={b.rotation}
//                 draggable
//             />
//         );
//     }

//     return null;
// };


// const Canvas = forwardRef(function Canvas(
//     {
//         adSize,
//         texts,
//         setTexts,
//         images,
//         setImages,
//         shapes,
//         setShapes,
//         blocks,
//         setBlocks,
//         background,
//         selectedId,
//         setSelectedId,
//         tool,
//         setTool,
//         lineType,
//         setLineType,
//         strokeColor,
//         setStrokeColor,
//         strokeWidth,
//         setStrokeWidth,
//         pushHistory,
//         language,
//         setActiveSection,
//         activeSection,
//     },
//     ref
// ) {
//     const sizes = {
//         square: [600, 600],
//         portrait: [600, 650],
//         landscape: [800, 600],
//         visitingCard: [500, 300],
//         businessCard: [600, 400],
//         bookmark: [300, 650],
//         instagramPost: [900, 650],
//         instagramStory: [800, 650],
//         facebookCover: [820, 312]
//     };

//     const [W, H] = sizes[adSize] || [600, 600];

//     const stageRef = useRef(null);
//     const trRef = useRef(null);
//     const selectedNodeRef = useRef(null);
//     const containerRef = useRef(null);

//     const [isDrawing, setIsDrawing] = useState(false);
//     const [draftShape, setDraftShape] = useState(null);

//     const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
//     /* ================= AUTO SCALE FOR MOBILE ================= */

//     const [autoScale, setAutoScale] = useState(1);

//     useEffect(() => {
//         const resize = () => {
//             if (!containerRef.current) return;

//             const containerWidth = containerRef.current.offsetWidth;
//             const scale = containerWidth / W;

//             if (scale < 1) setAutoScale(scale);
//             else setAutoScale(1);
//         };

//         resize();
//         window.addEventListener("resize", resize);

//         return () => window.removeEventListener("resize", resize);
//     }, [W]);

//     /* ================= ZOOM CONTROLLER ================= */

//     const zoomLevels = [50, 75, 85, 100, 125, 150, 200, 300];
//     const [zoomPercent, setZoomPercent] = useState(85);

//     const zoom = zoomPercent / 100;

//     const increaseZoom = () => {
//         const next = zoomLevels.find(z => z > zoomPercent);
//         if (next) setZoomPercent(next);
//     };

//     const decreaseZoom = () => {
//         const prev = [...zoomLevels].reverse().find(z => z < zoomPercent);
//         if (prev) setZoomPercent(prev);
//     };

//     const finalScale = zoom * autoScale;

//     /* ================= CURSOR FIX ================= */

//     useEffect(() => {
//         const stage = stageRef.current;
//         if (!stage) return;

//         const container = stage.container();

//         if (isDrawing) {
//             container.style.cursor = "crosshair";
//             return;
//         }

//         if (tool === "text") {
//             container.style.cursor = "text";
//             return;
//         }

//         if (DRAW_TOOLS.includes(tool)) {
//             container.style.cursor = "crosshair";
//             return;
//         }

//         if (tool === "move") {
//             container.style.cursor = "move";
//             return;
//         }

//         container.style.cursor = "default";
//     }, [tool, isDrawing]);

//     /* ================= TRANSFORMER ================= */

//     useEffect(() => {
//         if (selectedNodeRef.current && trRef.current) {
//             trRef.current.nodes([selectedNodeRef.current]);
//             trRef.current.getLayer().batchDraw();
//         }
//     }, [selectedId]);


//     /* ================= toolbar ================= */
//     useEffect(() => {
//         if (!selectedNodeRef.current || !stageRef.current) return;

//         const node = selectedNodeRef.current;
//         const stage = stageRef.current;

//         const updatePosition = () => {
//             const box = node.getClientRect(); // ✅ absolute canvas coords
//             const stageBox = stage.container().getBoundingClientRect(); // ✅ DOM position

//             setToolbarPos({
//                 x: stageBox.left + box.x + box.width / 2,
//                 y: stageBox.top + box.y - 10
//             });
//         };

//         updatePosition();

//         node.on("dragmove transform", updatePosition);

//         return () => {
//             node.off("dragmove transform", updatePosition);
//         };

//     }, [selectedId, zoomPercent, autoScale]);

//     /* ================= DRAWING ================= */

//     const onMouseDown = e => {
//         if (!DRAW_TOOLS.includes(tool)) return;
//         if (e.target !== e.target.getStage()) return;

//         const pos = stageRef.current.getPointerPosition();
//         setIsDrawing(true);

//         if (tool === "brush" || tool === "eraser") {
//             setShapes(s => [
//                 ...s,
//                 {
//                     id: Date.now(),
//                     type: "free",
//                     tool,
//                     points: [pos.x, pos.y],
//                     stroke: strokeColor,
//                     strokeWidth
//                 }
//             ]);
//         }

//         if (tool === "line") {
//             setShapes(s => [
//                 ...s,
//                 {
//                     id: Date.now(),
//                     type: "line",
//                     lineType: lineType || "thin",
//                     points: [pos.x, pos.y, pos.x, pos.y],
//                     stroke: strokeColor,
//                     strokeWidth
//                 }
//             ]);
//         }

//         if (tool === "rectangle") {
//             setDraftShape({
//                 id: Date.now(),
//                 type: "rectangle",
//                 x: pos.x,
//                 y: pos.y,
//                 width: 0,
//                 height: 0,
//                 stroke: strokeColor,
//                 strokeWidth
//             });
//         }

//         if (tool === "circle") {
//             setDraftShape({
//                 id: Date.now(),
//                 type: "circle",
//                 x: pos.x,
//                 y: pos.y,
//                 radius: 0,
//                 stroke: strokeColor,
//                 strokeWidth
//             });
//         }
//     };


//     const onMouseMove = () => {
//         if (!isDrawing) return;
//         const pos = stageRef.current.getPointerPosition();

//         if (tool === "brush" || tool === "eraser") {
//             setShapes(s => {
//                 const last = { ...s[s.length - 1] };
//                 last.points = last.points.concat([pos.x, pos.y]);
//                 return [...s.slice(0, -1), last];
//             });
//         }

//         if (tool === "line") {
//             setShapes(s => {
//                 const last = { ...s[s.length - 1] };
//                 last.points = [last.points[0], last.points[1], pos.x, pos.y];
//                 return [...s.slice(0, -1), last];
//             });
//         }

//         if (tool === "rectangle") {
//             setDraftShape(d => ({ ...d, width: pos.x - d.x, height: pos.y - d.y }));
//         }

//         if (tool === "circle") {
//             const dx = pos.x - draftShape.x;
//             const dy = pos.y - draftShape.y;
//             setDraftShape(d => ({ ...d, radius: Math.sqrt(dx * dx + dy * dy) }));
//         }
//     };

//     const onMouseUp = () => {
//         if (!isDrawing) return;
//         setIsDrawing(false);
//         if (draftShape) {
//             setShapes(s => [...s, draftShape]);
//             setDraftShape(null);
//         }
//         pushHistory();
//     };

//     // //     /* ---------------- LINE TYPES FIX ---------------- */
//     const renderLine = s => {
//         const [x1, y1, x2, y2] = s.points;

//         if (s.lineType === "thin")
//             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth} lineCap="round" />;

//         if (s.lineType === "thick")
//             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth * 2} lineCap="round" />;

//         const segments = 20;
//         const lines = [];
//         for (let i = 0; i < segments; i++) {
//             const t1 = i / segments;
//             const t2 = (i + 1) / segments;
//             const sx = x1 + (x2 - x1) * t1;
//             const sy = y1 + (y2 - y1) * t1;
//             const ex = x1 + (x2 - x1) * t2;
//             const ey = y1 + (y2 - y1) * t2;

//             let width = s.strokeWidth;

//             if (s.lineType === "thinToThick")
//                 width = s.strokeWidth * (1 + t1);

//             if (s.lineType === "thickToThin")
//                 width = s.strokeWidth * (2 - t1);
//             if (s.lineType === "thickCenter") {
//                 const mid = Math.abs(0.5 - t1);
//                 width = s.strokeWidth * (2 - mid * 2);
//             }

//             lines.push(
//                 <Line
//                     key={`${s.id}-${i}`}
//                     points={[sx, sy, ex, ey]}
//                     stroke={s.stroke}
//                     strokeWidth={width}
//                     lineCap="round"
//                 />
//             );
//         }

//         return lines;
//     };

//     /* ================= SELECTED ELEMENT ================= */

//     const selectedElement =
//         texts.find(t => t.id === selectedId) ||
//         images.find(i => i.id === selectedId) ||
//         shapes.find(s => s.id === selectedId) ||
//         blocks.find(b => b.id === selectedId);

//     /* ================= DELETE FUNCTION ================= */

//     const deleteElement = () => {
//         if (!selectedId) return;

//         setTexts(prev => prev.filter(t => t.id !== selectedId));
//         setImages(prev => prev.filter(i => i.id !== selectedId));
//         setShapes(prev => prev.filter(s => s.id !== selectedId));
//         setBlocks(prev => prev.filter(b => b.id !== selectedId));

//         setSelectedId(null);
//         selectedNodeRef.current = null;

//         pushHistory();
//     };


//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 position: "relative",
//                 overflow: "auto",
//                 background: "#f1f5f9"
//             }}
//         >


//             {/* ZOOM CONTROLLER */}

//             <div
//                 style={{
//                     position: "absolute",
//                     bottom: 20,
//                     right: 25,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 10,
//                     background: "#ffffff",
//                     padding: "8px 12px",
//                     borderRadius: 10,
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
//                     zIndex: 20
//                 }}
//             >

//                 <button
//                     onClick={decreaseZoom}
//                     style={{
//                         fontSize: 18,
//                         width: 28,
//                         height: 28,
//                         borderRadius: 6,
//                         border: "1px solid #cbd5e1",
//                         background: "#fff"
//                     }}
//                 >
//                     −
//                 </button>

//                 <input
//                     type="range"
//                     min="50"
//                     max="300"
//                     step="25"
//                     value={zoomPercent}
//                     onChange={e => setZoomPercent(Number(e.target.value))}
//                     style={{ width: 100 }}
//                 />

//                 <button
//                     onClick={increaseZoom}
//                     style={{
//                         fontSize: 18,
//                         width: 28,
//                         height: 28,
//                         borderRadius: 6,
//                         border: "1px solid #cbd5e1",
//                         background: "#fff"
//                     }}
//                 >
//                     +
//                 </button>

//                 <select
//                     value={zoomPercent}
//                     onChange={e => setZoomPercent(Number(e.target.value))}
//                     style={{
//                         border: "1px solid #cbd5e1",
//                         borderRadius: 6,
//                         padding: "2px 6px"
//                     }}
//                 >
//                     {zoomLevels.map(z => (
//                         <option key={z} value={z}>{z}%</option>
//                     ))}
//                 </select>

//             </div>

//             <FloatingToolbar
//                 element={selectedElement}
//                 onDelete={deleteElement}
//                 onEdit={() => {
//                     if (selectedElement?.text) {
//                         setActiveSection("text");
//                     } else if (selectedElement?.image) {
//                         setActiveSection("image");
//                     } else {
//                         setActiveSection("shape");
//                     }
//                 }}
//                 position={toolbarPos}
//                 activeSection={activeSection} // ✅ ADD
//             />

//             {/* CENTERING WRAPPER */}

//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     minWidth: "100%",
//                     minHeight: "100%",
//                     padding: 40
//                 }}
//             >

//                 {/* SCALE WRAPPER */}

//                 <div
//                     style={{
//                         transform: `scale(${finalScale})`,
//                         transformOrigin: "center center",
//                         transition: "transform 0.2s ease"
//                     }}
//                 >


//                     <div
//                         style={{
//                             background: "#ffffff",
//                             borderRadius: 18,
//                             boxShadow: "0 20px 50px rgba(11,31,51,0.35)",
//                             padding: 14
//                         }}
//                     >

//                         <Stage
//                             ref={(node) => {
//                                 stageRef.current = node;
//                                 if (ref) ref.current = node;
//                             }}
//                             width={W}
//                             height={H}
//                             onMouseDown={onMouseDown}
//                             onMouseMove={onMouseMove}
//                             onMouseUp={onMouseUp}

//                             onTouchStart={onMouseDown}
//                             onTouchMove={onMouseMove}
//                             onTouchEnd={onMouseUp}
//                             onClick={e => {
//                                 if (e.target === e.target.getStage()) {
//                                     setSelectedId(null);
//                                     selectedNodeRef.current = null;
//                                 }
//                             }}
//                             onTap={e => {
//                                 if (e.target === e.target.getStage()) {
//                                     setSelectedId(null);
//                                     selectedNodeRef.current = null;
//                                 }
//                             }}
//                         >

//                             {/* BACKGROUND */}

//                             <Layer listening={false}>
//                                 <Rect width={W} height={H} fill="#f8fafc" cornerRadius={18} />
//                                 {background?.type === "color" &&
//                                     <Rect width={W} height={H} fill={background.value} />}

//                                 {background?.type === "image" && background.image &&
//                                     <KonvaImage image={background.image} width={W} height={H} />}
//                             </Layer>


//                             {/* BLOCKS */}

//                             <Layer>
//                                 {blocks.map(b => {
//                                     const shape = getBlockShape(b);
//                                     if (!shape) return null;

//                                     return (
//                                         <shape.type
//                                             {...shape.props}
//                                             key={b.id}
//                                             draggable

//                                             onClick={(e) => {
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(b.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}
//                                             onTap={(e) => {
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(b.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onDragEnd={(e) => {
//                                                 const { x, y } = e.target.position();
//                                                 setBlocks(prev =>
//                                                     prev.map(item =>
//                                                         item.id === b.id ? { ...item, x, y } : item
//                                                     )
//                                                 );
//                                                 pushHistory();
//                                             }}

//                                             onTransformEnd={(e) => {
//                                                 const node = e.target;
//                                                 const scaleX = node.scaleX();
//                                                 const scaleY = node.scaleY();
//                                                 node.scaleX(1);
//                                                 node.scaleY(1);

//                                                 const updated = {
//                                                     x: node.x(),
//                                                     y: node.y(),
//                                                     width: Math.max(10, b.width * scaleX),
//                                                     height: Math.max(10, b.height * scaleY),
//                                                     rotation: node.rotation()
//                                                 };

//                                                 setBlocks(prev =>
//                                                     prev.map(item =>
//                                                         item.id === b.id ? { ...item, ...updated } : item
//                                                     )
//                                                 );
//                                                 pushHistory();
//                                             }}
//                                         />
//                                     );
//                                 })}
//                             </Layer>


//                             {/* IMAGES */}

//                             <Layer>
//                                 {images.map(img => (
//                                     <KonvaImage
//                                         key={img.id}
//                                         {...img}
//                                         draggable
//                                         image={img.image}
//                                         onClick={e => {
//                                             e.cancelBubble = true;
//                                             setSelectedId(img.id);
//                                             selectedNodeRef.current = e.target;
//                                         }}

//                                         onDragEnd={(e) => {
//                                             const { x, y } = e.target.position();

//                                             setImages(prev =>
//                                                 prev.map(item =>
//                                                     item.id === img.id ? { ...item, x, y } : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}

//                                         onTap={e => {
//                                             e.cancelBubble = true;
//                                             setSelectedId(img.id);
//                                             selectedNodeRef.current = e.target;
//                                         }}

//                                         onTransformEnd={(e) => {
//                                             const node = e.target;

//                                             const scaleX = node.scaleX();
//                                             const scaleY = node.scaleY();

//                                             node.scaleX(1);
//                                             node.scaleY(1);

//                                             const updated = {
//                                                 x: node.x(),
//                                                 y: node.y(),
//                                                 width: Math.max(20, node.width() * scaleX),
//                                                 height: Math.max(20, node.height() * scaleY),
//                                                 rotation: node.rotation()
//                                             };

//                                             setImages(prev =>
//                                                 prev.map(item =>
//                                                     item.id === img.id ? { ...item, ...updated } : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}

//                                     />
//                                 ))}
//                             </Layer>


//                             {/* SHAPES */}

//                             <Layer>

//                                 {shapes.map(s => {

//                                     // ❌ skip lines & brush (complex)
//                                     if (s.type === "line" || s.type === "free") {
//                                         return renderLine(s);
//                                     }

//                                     if (s.type === "rectangle") {
//                                         return (
//                                             <Rect
//                                                 key={s.id}
//                                                 {...s}
//                                                 draggable

//                                                 onClick={(e) => {
//                                                     e.cancelBubble = true;
//                                                     setSelectedId(s.id);
//                                                     selectedNodeRef.current = e.target;
//                                                 }}

//                                                 onTap={(e) => {
//                                                     e.cancelBubble = true;
//                                                     setSelectedId(s.id);
//                                                     selectedNodeRef.current = e.target;
//                                                 }}

//                                                 onDragEnd={(e) => {
//                                                     const { x, y } = e.target.position();

//                                                     setShapes(prev =>
//                                                         prev.map(item =>
//                                                             item.id === s.id ? { ...item, x, y } : item
//                                                         )
//                                                     );

//                                                     pushHistory();
//                                                 }}

//                                                 onTransformEnd={(e) => {
//                                                     const node = e.target;

//                                                     const scaleX = node.scaleX();
//                                                     const scaleY = node.scaleY();

//                                                     node.scaleX(1);
//                                                     node.scaleY(1);

//                                                     const updated = {
//                                                         x: node.x(),
//                                                         y: node.y(),
//                                                         width: Math.max(10, node.width() * scaleX),
//                                                         height: Math.max(10, node.height() * scaleY),
//                                                         rotation: node.rotation()
//                                                     };

//                                                     setShapes(prev =>
//                                                         prev.map(item =>
//                                                             item.id === s.id ? { ...item, ...updated } : item
//                                                         )
//                                                     );

//                                                     pushHistory();
//                                                 }}
//                                             />
//                                         );
//                                     }

//                                     if (s.type === "circle") {
//                                         return (
//                                             <Circle
//                                                 key={s.id}
//                                                 {...s}
//                                                 draggable

//                                                 onClick={(e) => {
//                                                     e.cancelBubble = true;
//                                                     setSelectedId(s.id);
//                                                     selectedNodeRef.current = e.target;
//                                                 }}

//                                                 onTap={(e) => {
//                                                     e.cancelBubble = true;
//                                                     setSelectedId(s.id);
//                                                     selectedNodeRef.current = e.target;
//                                                 }}

//                                                 onDragEnd={(e) => {
//                                                     const { x, y } = e.target.position();

//                                                     setShapes(prev =>
//                                                         prev.map(item =>
//                                                             item.id === s.id ? { ...item, x, y } : item
//                                                         )
//                                                     );

//                                                     pushHistory();
//                                                 }}

//                                                 onTransformEnd={(e) => {
//                                                     const node = e.target;

//                                                     const scale = node.scaleX(); // circle uses one scale

//                                                     node.scaleX(1);
//                                                     node.scaleY(1);

//                                                     const updated = {
//                                                         x: node.x(),
//                                                         y: node.y(),
//                                                         radius: Math.max(5, s.radius * scale),
//                                                         rotation: node.rotation()
//                                                     };

//                                                     setShapes(prev =>
//                                                         prev.map(item =>
//                                                             item.id === s.id ? { ...item, ...updated } : item
//                                                         )
//                                                     );

//                                                     pushHistory();
//                                                 }}
//                                             />
//                                         );
//                                     }

//                                     return null;
//                                 })}
//                             </Layer>


//                             {/* TEXT */}

//                             <Layer>
//                                 {texts.map(t => (
//                                     <Text
//                                         key={t.id}
//                                         {...t}
//                                         draggable
//                                         align={["ar"].includes(language) ? "right" : "left"}
//                                         onClick={e => {
//                                             e.cancelBubble = true;
//                                             setSelectedId(t.id);
//                                             selectedNodeRef.current = e.target;
//                                         }}

//                                         onDragEnd={(e) => {
//                                             const { x, y } = e.target.position();

//                                             setTexts(prev =>
//                                                 prev.map(item =>
//                                                     item.id === t.id ? { ...item, x, y } : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}

//                                         onTap={e => {
//                                             e.cancelBubble = true;
//                                             setSelectedId(t.id);
//                                             selectedNodeRef.current = e.target;
//                                         }}

//                                         onTransformEnd={(e) => {
//                                             const node = e.target;

//                                             const scaleY = node.scaleY();

//                                             node.scaleX(1);
//                                             node.scaleY(1);

//                                             const updated = {
//                                                 x: node.x(),
//                                                 y: node.y(),
//                                                 fontSize: Math.max(10, t.fontSize * scaleY),
//                                                 rotation: node.rotation()
//                                             };

//                                             setTexts(prev =>
//                                                 prev.map(item =>
//                                                     item.id === t.id ? { ...item, ...updated } : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}

//                                     />
//                                 ))}
//                             </Layer>


//                             {/* TRANSFORMER */}

//                             {selectedNodeRef.current && (
//                                 <Layer>
//                                     <Transformer ref={trRef} />
//                                 </Layer>
//                             )}

//                         </Stage>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// });

// export default Canvas;

import {
    Stage,
    Layer,
    Rect,
    Text,
    Image as KonvaImage,
    Line,
    Circle,
    Transformer,
    RegularPolygon
} from "react-konva";
import { useRef, useState, useEffect, forwardRef } from "react";
import FloatingToolbar from "./FloatinngToolbar";
const CURSORS = {
    brush: "crosshair",
    line: "crosshair",
    rectangle: "crosshair",
    circle: "crosshair",
    eraser: "crosshair",
    select: "default",
    move: "move",
    text: "text"
};

const DRAW_TOOLS = ["brush", "eraser", "line", "rectangle", "circle"];

/* ================= BLOCK SHAPE GENERATOR ================= */

const getBlockShape = (b) => {

    const w = b.width;
    const h = b.height;

    if (b.shape === "rectangle" || !b.shape) {
        return <Rect key={b.id} {...b} />;
    }

    if (b.shape === "rhombus") {
        const points = [
            w / 2, 0,
            w, h / 2,
            w / 2, h,
            0, h / 2
        ];

        return (
            <Line
                key={b.id}
                x={b.x}
                y={b.y}
                points={points}
                closed
                fill={b.fill}
                rotation={b.rotation}
                draggable
            />
        );
    }

    if (b.shape === "parallelogram") {
        const offset = w * 0.25;

        const points = [
            offset, 0,
            w, 0,
            w - offset, h,
            0, h
        ];

        return (
            <Line
                key={b.id}
                x={b.x}
                y={b.y}
                points={points}
                closed
                fill={b.fill}
                rotation={b.rotation}
                draggable
            />
        );
    }

    if (b.shape === "trapezoid") {

        const top = w * 0.6;
        const offset = (w - top) / 2;

        const points = [
            offset, 0,
            offset + top, 0,
            w, h,
            0, h
        ];

        return (
            <Line
                key={b.id}
                x={b.x}
                y={b.y}
                points={points}
                closed
                fill={b.fill}
                rotation={b.rotation}
                draggable
            />
        );
    }
    if (b.shape === "triangle") {
        return (
            <RegularPolygon
                key={b.id}
                x={b.x}
                y={b.y}
                sides={3}
                radius={Math.min(b.width, b.height) / 2}
                fill={b.fill}
                rotation={b.rotation}
                draggable
            />
        );
    }

    if (b.shape === "circle") {
        return (
            <Circle
                key={b.id}
                x={b.x}
                y={b.y}
                radius={Math.min(b.width, b.height) / 2}
                fill={b.fill}
                rotation={b.rotation}
                draggable
            />
        );
    }

    if (b.shape === "heptagon") {
        return (
            <RegularPolygon
                key={b.id}
                x={b.x + w / 2}
                y={b.y + h / 2}
                sides={7}
                radius={Math.min(w, h) / 2}
                fill={b.fill}
                rotation={b.rotation}
                draggable
            />
        );
    }

    return null;
};


const Canvas = forwardRef(function Canvas(
    {
        adSize,
        texts,
        setTexts,
        images,
        setImages,
        shapes,
        setShapes,
        blocks,
        setBlocks,
        background,
        selectedId,
        setSelectedId,
        tool,
        setTool,
        lineType,
        setLineType,
        strokeColor,
        setStrokeColor,
        strokeWidth,
        setStrokeWidth,
        pushHistory,
        language,
        setActiveSection,
        activeSection,
    },
    ref
) {
    const sizes = {
        // square: [600, 600],
        // portrait: [600, 650],
        // landscape: [800, 600],
        // visitingCard: [500, 300],
        // businessCard: [600, 400],
        // bookmark: [300, 650],
        // instagramPost: [900, 650],
        // instagramStory: [800, 650],
        // facebookCover: [820, 312]


        square: [420, 420],
        portrait: [420, 520],
        landscape: [620, 420],

        visitingCard: [320, 180],
        businessCard: [350, 200],

        bookmark: [220, 520],

        instagramPost: [420, 420],
        instagramStory: [320, 570],

        facebookCover: [620, 240]
    };


    const [W, H] = sizes[adSize] || [600, 600];

    const stageRef = useRef(null);
    const trRef = useRef(null);
    const selectedNodeRef = useRef(null);
    const containerRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [draftShape, setDraftShape] = useState(null);

    const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
    /* ================= AUTO SCALE FOR MOBILE ================= */

    const [autoScale, setAutoScale] = useState(1);

    useEffect(() => {
        const resize = () => {
            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            const scale = containerWidth / W;

            if (scale < 1) setAutoScale(scale);
            else setAutoScale(1);
        };

        resize();
        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, [W]);

    /* ================= ZOOM CONTROLLER ================= */

    const zoomLevels = [50, 75, 100, 125, 150, 200, 300];
    const [zoomPercent, setZoomPercent] = useState(100);

    const zoom = zoomPercent / 100;

    const increaseZoom = () => {
        const next = zoomLevels.find(z => z > zoomPercent);
        if (next) setZoomPercent(next);
    };

    const decreaseZoom = () => {
        const prev = [...zoomLevels].reverse().find(z => z < zoomPercent);
        if (prev) setZoomPercent(prev);
    };

    const finalScale = zoom * autoScale;

    /* ================= CURSOR FIX ================= */

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const container = stage.container();

        if (isDrawing) {
            container.style.cursor = "crosshair";
            return;
        }

        if (tool === "text") {
            container.style.cursor = "text";
            return;
        }

        if (DRAW_TOOLS.includes(tool)) {
            container.style.cursor = "crosshair";
            return;
        }

        if (tool === "move") {
            container.style.cursor = "move";
            return;
        }

        container.style.cursor = "default";
    }, [tool, isDrawing]);

    /* ================= TRANSFORMER ================= */

    useEffect(() => {
        if (selectedNodeRef.current && trRef.current) {
            trRef.current.nodes([selectedNodeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [selectedId]);


    /* ================= toolbar ================= */
    useEffect(() => {
        if (!selectedNodeRef.current || !stageRef.current) return;

        const node = selectedNodeRef.current;
        const stage = stageRef.current;

        const updatePosition = () => {
            const box = node.getClientRect(); // ✅ absolute canvas coords
            const stageBox = stage.container().getBoundingClientRect(); // ✅ DOM position

            setToolbarPos({
                x: stageBox.left + box.x + box.width / 2,
                y: stageBox.top + box.y - 10
            });
        };

        updatePosition();

        node.on("dragmove transform", updatePosition);

        return () => {
            node.off("dragmove transform", updatePosition);
        };

    }, [selectedId, zoomPercent, autoScale]);

    /* ================= DRAWING ================= */

    const onMouseDown = e => {
        if (!DRAW_TOOLS.includes(tool)) return;
        if (e.target !== e.target.getStage()) return;

        const pos = stageRef.current.getPointerPosition();
        setIsDrawing(true);

        if (tool === "brush" || tool === "eraser") {
            setShapes(s => [
                ...s,
                {
                    id: Date.now(),
                    type: "free",
                    tool,
                    points: [pos.x, pos.y],
                    stroke: strokeColor,
                    strokeWidth
                }
            ]);
        }

        if (tool === "line") {
            setShapes(s => [
                ...s,
                {
                    id: Date.now(),
                    type: "line",
                    lineType: lineType || "thin",
                    points: [pos.x, pos.y, pos.x, pos.y],
                    stroke: strokeColor,
                    strokeWidth
                }
            ]);
        }

        if (tool === "rectangle") {
            setDraftShape({
                id: Date.now(),
                type: "rectangle",
                x: pos.x,
                y: pos.y,
                width: 0,
                height: 0,
                stroke: strokeColor,
                strokeWidth
            });
        }

        if (tool === "circle") {
            setDraftShape({
                id: Date.now(),
                type: "circle",
                x: pos.x,
                y: pos.y,
                radius: 0,
                stroke: strokeColor,
                strokeWidth
            });
        }
    };


    const onMouseMove = () => {
        if (!isDrawing) return;
        const pos = stageRef.current.getPointerPosition();

        if (tool === "brush" || tool === "eraser") {
            setShapes(s => {
                const last = { ...s[s.length - 1] };
                last.points = last.points.concat([pos.x, pos.y]);
                return [...s.slice(0, -1), last];
            });
        }

        if (tool === "line") {
            setShapes(s => {
                const last = { ...s[s.length - 1] };
                last.points = [last.points[0], last.points[1], pos.x, pos.y];
                return [...s.slice(0, -1), last];
            });
        }

        if (tool === "rectangle") {
            setDraftShape(d => ({ ...d, width: pos.x - d.x, height: pos.y - d.y }));
        }

        if (tool === "circle") {
            const dx = pos.x - draftShape.x;
            const dy = pos.y - draftShape.y;
            setDraftShape(d => ({ ...d, radius: Math.sqrt(dx * dx + dy * dy) }));
        }
    };

    const onMouseUp = () => {
        if (!isDrawing) return;
        setIsDrawing(false);
        if (draftShape) {
            setShapes(s => [...s, draftShape]);
            setDraftShape(null);
        }
        pushHistory();
    };

    // //     /* ---------------- LINE TYPES FIX ---------------- */
    const renderLine = s => {
        const [x1, y1, x2, y2] = s.points;

        if (s.lineType === "thin")
            return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth} lineCap="round" />;

        if (s.lineType === "thick")
            return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth * 2} lineCap="round" />;

        const segments = 20;
        const lines = [];
        for (let i = 0; i < segments; i++) {
            const t1 = i / segments;
            const t2 = (i + 1) / segments;
            const sx = x1 + (x2 - x1) * t1;
            const sy = y1 + (y2 - y1) * t1;
            const ex = x1 + (x2 - x1) * t2;
            const ey = y1 + (y2 - y1) * t2;

            let width = s.strokeWidth;

            if (s.lineType === "thinToThick")
                width = s.strokeWidth * (1 + t1);

            if (s.lineType === "thickToThin")
                width = s.strokeWidth * (2 - t1);
            if (s.lineType === "thickCenter") {
                const mid = Math.abs(0.5 - t1);
                width = s.strokeWidth * (2 - mid * 2);
            }

            lines.push(
                <Line
                    key={`${s.id}-${i}`}
                    points={[sx, sy, ex, ey]}
                    stroke={s.stroke}
                    strokeWidth={width}
                    lineCap="round"
                />
            );
        }

        return lines;
    };

    /* ================= SELECTED ELEMENT ================= */

    const selectedElement =
        texts.find(t => t.id === selectedId) ||
        images.find(i => i.id === selectedId) ||
        shapes.find(s => s.id === selectedId) ||
        blocks.find(b => b.id === selectedId);

    /* ================= DELETE FUNCTION ================= */

    const deleteElement = () => {
        if (!selectedId) return;

        setTexts(prev => prev.filter(t => t.id !== selectedId));
        setImages(prev => prev.filter(i => i.id !== selectedId));
        setShapes(prev => prev.filter(s => s.id !== selectedId));
        setBlocks(prev => prev.filter(b => b.id !== selectedId));

        setSelectedId(null);
        selectedNodeRef.current = null;

        pushHistory();
    };


    return (
        <div
            ref={containerRef}
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "auto",
                background: "#f1f5f9"
            }}
        >

            {/* ZOOM CONTROLLER */}

            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    right: 25,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: 10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    zIndex: 20
                }}
            >

                <button
                    onClick={decreaseZoom}
                    style={{
                        fontSize: 18,
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        background: "#fff"
                    }}
                >
                    −
                </button>

                <input
                    type="range"
                    min="50"
                    max="300"
                    step="25"
                    value={zoomPercent}
                    onChange={e => setZoomPercent(Number(e.target.value))}
                    style={{ width: 100 }}
                />

                <button
                    onClick={increaseZoom}
                    style={{
                        fontSize: 18,
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        border: "1px solid #cbd5e1",
                        background: "#fff"
                    }}
                >
                    +
                </button>

                <select
                    value={zoomPercent}
                    onChange={e => setZoomPercent(Number(e.target.value))}
                    style={{
                        border: "1px solid #cbd5e1",
                        borderRadius: 6,
                        padding: "2px 6px"
                    }}
                >
                    {zoomLevels.map(z => (
                        <option key={z} value={z}>{z}%</option>
                    ))}
                </select>

            </div>

            <FloatingToolbar
                element={selectedElement}
                onDelete={deleteElement}
                onEdit={() => {
                    if (selectedElement?.text) {
                        setActiveSection("text");
                    } else if (selectedElement?.image) {
                        setActiveSection("image");
                    } else {
                        setActiveSection("shape");
                    }
                }}
                onDuplicate={() => {
                    if (!selectedElement) return;

                    // TEXT DUPLICATION
                    if (selectedElement.text) {

                        const duplicated = {
                            ...selectedElement,
                            id: Date.now(),
                            x: selectedElement.x + 30,
                            y: selectedElement.y + 30
                        };

                        setTexts(prev => [...prev, duplicated]);

                        setSelectedId(duplicated.id);

                        setTimeout(() => {
                            pushHistory();
                        }, 0);
                    }
                }}
                position={toolbarPos}
                activeSection={activeSection} // ✅ ADD
            />

            {/* CENTERING WRAPPER */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "100%",
                    minHeight: "100%",
                    padding: 40
                }}
            >

                {/* SCALE WRAPPER */}

                <div
                    style={{
                        transform: `scale(${finalScale})`,
                        transformOrigin: "center center",
                        transition: "transform 0.2s ease"
                    }}
                >

                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: 18,
                            boxShadow: "0 20px 50px rgba(11,31,51,0.35)",
                            padding: 14
                        }}
                    >

                        <Stage
                            ref={(node) => {
                                stageRef.current = node;
                                if (ref) ref.current = node;
                            }}
                            width={W}
                            height={H}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onMouseUp}

                            onTouchStart={onMouseDown}
                            onTouchMove={onMouseMove}
                            onTouchEnd={onMouseUp}
                            onClick={e => {
                                if (e.target === e.target.getStage()) {
                                    setSelectedId(null);
                                    selectedNodeRef.current = null;
                                }
                            }}
                            onTap={e => {
                                if (e.target === e.target.getStage()) {
                                    setSelectedId(null);
                                    selectedNodeRef.current = null;
                                }
                            }}
                        >

                            {/* BACKGROUND */}

                            {/* BACKGROUND */}

                            <Layer listening={false}>

                                {/* default background */}
                                <Rect
                                    width={W}
                                    height={H}
                                    fill="#f8fafc"
                                    cornerRadius={18}
                                />

                                {/* solid color background */}
                                {
                                    background &&
                                    background.type === "color" && (
                                        <Rect
                                            width={W}
                                            height={H}
                                            fill={background.value}
                                        />
                                    )
                                }

                                {/* COVER MODE IMAGE BACKGROUND */}
                                {
                                    background &&
                                    background.type === "image" &&
                                    background.image && (() => {

                                        const img = background.image;

                                        const canvasRatio = W / H;
                                        const imgRatio = img.width / img.height;

                                        let drawWidth;
                                        let drawHeight;
                                        let offsetX = 0;
                                        let offsetY = 0;

                                        // image wider than canvas
                                        if (imgRatio > canvasRatio) {

                                            drawHeight = H;
                                            drawWidth = H * imgRatio;

                                            offsetX = -(drawWidth - W) / 2;

                                        }

                                        // image taller than canvas
                                        else {

                                            drawWidth = W;
                                            drawHeight = W / imgRatio;

                                            offsetY = -(drawHeight - H) / 2;
                                        }

                                        return (
                                            <KonvaImage
                                                image={img}
                                                x={offsetX}
                                                y={offsetY}
                                                width={drawWidth}
                                                height={drawHeight}
                                            />
                                        );

                                    })()
                                }

                            </Layer>


                            {/* BLOCKS */}

                            {/* <Layer>
                                {blocks.map(b => {
                                    const shape = getBlockShape(b);

                                    return shape ?
                                        <shape.type
                                            {...shape.props}
                                            key={b.id}
                                            onClick={e => {
                                                e.cancelBubble = true;
                                                setSelectedId(b.id);
                                                selectedNodeRef.current = e.target;
                                            }}
                                            onDragEnd={(e) => {
                                                const { x, y } = e.target.position();

                                                setBlocks(prev =>
                                                    prev.map(item =>
                                                        item.id === b.id ? { ...item, x, y } : item
                                                    )
                                                );

                                                pushHistory();
                                            }}
                                            onTap={e => {
                                                e.cancelBubble = true;
                                                setSelectedId(b.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onTransformEnd={(e) => {
                                                const node = e.target;

                                                const scaleX = node.scaleX();
                                                const scaleY = node.scaleY();

                                                node.scaleX(1);
                                                node.scaleY(1);

                                                const updated = {
                                                    x: node.x(),
                                                    y: node.y(),
                                                    width: Math.max(20, b.width * scaleX),
                                                    height: Math.max(20, b.height * scaleY),
                                                    rotation: node.rotation()
                                                };

                                                setBlocks(prev =>
                                                    prev.map(item =>
                                                        item.id === b.id ? { ...item, ...updated } : item
                                                    )
                                                );

                                                pushHistory();
                                            }}

                                        /> : null;
                                })}
                            </Layer> */}
                            <Layer>
                                {blocks.map(b => {
                                    const shape = getBlockShape(b);
                                    if (!shape) return null;

                                    return (
                                        <shape.type
                                            {...shape.props}
                                            key={b.id}
                                            draggable

                                            onClick={(e) => {
                                                e.cancelBubble = true;
                                                setSelectedId(b.id);
                                                selectedNodeRef.current = e.target;
                                            }}
                                            onTap={(e) => {
                                                e.cancelBubble = true;
                                                setSelectedId(b.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onDragEnd={(e) => {
                                                const { x, y } = e.target.position();
                                                setBlocks(prev =>
                                                    prev.map(item =>
                                                        item.id === b.id ? { ...item, x, y } : item
                                                    )
                                                );
                                                pushHistory();
                                            }}

                                            onTransformEnd={(e) => {
                                                const node = e.target;
                                                const scaleX = node.scaleX();
                                                const scaleY = node.scaleY();
                                                node.scaleX(1);
                                                node.scaleY(1);

                                                const updated = {
                                                    x: node.x(),
                                                    y: node.y(),
                                                    width: Math.max(10, b.width * scaleX),
                                                    height: Math.max(10, b.height * scaleY),
                                                    rotation: node.rotation()
                                                };

                                                setBlocks(prev =>
                                                    prev.map(item =>
                                                        item.id === b.id ? { ...item, ...updated } : item
                                                    )
                                                );
                                                pushHistory();
                                            }}
                                        />
                                    );
                                })}
                            </Layer>


                            {/* IMAGES */}

                            <Layer>
                                {images.map(img => (
                                    <KonvaImage
                                        key={img.id}
                                        {...img}
                                        draggable
                                        image={img.image}
                                        onClick={e => {
                                            e.cancelBubble = true;
                                            setSelectedId(img.id);
                                            selectedNodeRef.current = e.target;
                                        }}

                                        onDragEnd={(e) => {
                                            const { x, y } = e.target.position();

                                            setImages(prev =>
                                                prev.map(item =>
                                                    item.id === img.id ? { ...item, x, y } : item
                                                )
                                            );

                                            pushHistory();
                                        }}

                                        onTap={e => {
                                            e.cancelBubble = true;
                                            setSelectedId(img.id);
                                            selectedNodeRef.current = e.target;
                                        }}

                                        onTransformEnd={(e) => {
                                            const node = e.target;

                                            const scaleX = node.scaleX();
                                            const scaleY = node.scaleY();

                                            node.scaleX(1);
                                            node.scaleY(1);

                                            const updated = {
                                                x: node.x(),
                                                y: node.y(),
                                                width: Math.max(20, node.width() * scaleX),
                                                height: Math.max(20, node.height() * scaleY),
                                                rotation: node.rotation()
                                            };

                                            setImages(prev =>
                                                prev.map(item =>
                                                    item.id === img.id ? { ...item, ...updated } : item
                                                )
                                            );

                                            pushHistory();
                                        }}

                                    />
                                ))}
                            </Layer>


                            {/* SHAPES */}

                            <Layer>
                                {/* {shapes.map(s =>
                                    s.type === "circle" ? <Circle key={s.id} {...s} /> :
                                        s.type === "rectangle" ? <Rect key={s.id} {...s} /> :
                                            s.type === "line" || s.type === "free" ? renderLine(s) :
                                                null
                                )}

                                {draftShape &&
                                    draftShape.type &&
                                    draftShape.type !== "line" &&
                                    draftShape.type !== "free" && (

                                        draftShape.type === "circle"
                                            ? <Circle {...draftShape} />
                                            : <Rect {...draftShape} />
                                    )} */}
                                {shapes.map(s => {

                                    // ❌ skip lines & brush (complex)
                                    if (s.type === "line" || s.type === "free") {
                                        return renderLine(s);
                                    }

                                    if (s.type === "rectangle") {
                                        return (
                                            <Rect
                                                key={s.id}
                                                {...s}
                                                draggable

                                                onClick={(e) => {
                                                    e.cancelBubble = true;
                                                    setSelectedId(s.id);
                                                    selectedNodeRef.current = e.target;
                                                }}

                                                onTap={(e) => {
                                                    e.cancelBubble = true;
                                                    setSelectedId(s.id);
                                                    selectedNodeRef.current = e.target;
                                                }}

                                                onDragEnd={(e) => {
                                                    const { x, y } = e.target.position();

                                                    setShapes(prev =>
                                                        prev.map(item =>
                                                            item.id === s.id ? { ...item, x, y } : item
                                                        )
                                                    );

                                                    pushHistory();
                                                }}

                                                onTransformEnd={(e) => {
                                                    const node = e.target;

                                                    const scaleX = node.scaleX();
                                                    const scaleY = node.scaleY();

                                                    node.scaleX(1);
                                                    node.scaleY(1);

                                                    const updated = {
                                                        x: node.x(),
                                                        y: node.y(),
                                                        width: Math.max(10, node.width() * scaleX),
                                                        height: Math.max(10, node.height() * scaleY),
                                                        rotation: node.rotation()
                                                    };

                                                    setShapes(prev =>
                                                        prev.map(item =>
                                                            item.id === s.id ? { ...item, ...updated } : item
                                                        )
                                                    );

                                                    pushHistory();
                                                }}
                                            />
                                        );
                                    }

                                    if (s.type === "circle") {
                                        return (
                                            <Circle
                                                key={s.id}
                                                {...s}
                                                draggable

                                                onClick={(e) => {
                                                    e.cancelBubble = true;
                                                    setSelectedId(s.id);
                                                    selectedNodeRef.current = e.target;
                                                }}

                                                onTap={(e) => {
                                                    e.cancelBubble = true;
                                                    setSelectedId(s.id);
                                                    selectedNodeRef.current = e.target;
                                                }}

                                                onDragEnd={(e) => {
                                                    const { x, y } = e.target.position();

                                                    setShapes(prev =>
                                                        prev.map(item =>
                                                            item.id === s.id ? { ...item, x, y } : item
                                                        )
                                                    );

                                                    pushHistory();
                                                }}

                                                onTransformEnd={(e) => {
                                                    const node = e.target;

                                                    const scale = node.scaleX(); // circle uses one scale

                                                    node.scaleX(1);
                                                    node.scaleY(1);

                                                    const updated = {
                                                        x: node.x(),
                                                        y: node.y(),
                                                        radius: Math.max(5, s.radius * scale),
                                                        rotation: node.rotation()
                                                    };

                                                    setShapes(prev =>
                                                        prev.map(item =>
                                                            item.id === s.id ? { ...item, ...updated } : item
                                                        )
                                                    );

                                                    pushHistory();
                                                }}
                                            />
                                        );
                                    }

                                    return null;
                                })}
                            </Layer>


                            {/* TEXT */}

                            <Layer>
                                {texts.map(t => (
                                    <Text
                                        key={t.id}
                                        {...t}
                                        draggable
                                        align={["ar"].includes(language) ? "right" : "left"}
                                        onClick={e => {
                                            e.cancelBubble = true;
                                            setSelectedId(t.id);
                                            selectedNodeRef.current = e.target;
                                        }}

                                        onDragEnd={(e) => {
                                            const { x, y } = e.target.position();

                                            setTexts(prev =>
                                                prev.map(item =>
                                                    item.id === t.id ? { ...item, x, y } : item
                                                )
                                            );

                                            pushHistory();
                                        }}

                                        onTap={e => {
                                            e.cancelBubble = true;
                                            setSelectedId(t.id);
                                            selectedNodeRef.current = e.target;
                                        }}

                                        onTransformEnd={(e) => {
                                            const node = e.target;

                                            const scaleY = node.scaleY();

                                            node.scaleX(1);
                                            node.scaleY(1);

                                            const updated = {
                                                x: node.x(),
                                                y: node.y(),
                                                fontSize: Math.max(10, t.fontSize * scaleY),
                                                rotation: node.rotation()
                                            };

                                            setTexts(prev =>
                                                prev.map(item =>
                                                    item.id === t.id ? { ...item, ...updated } : item
                                                )
                                            );

                                            pushHistory();
                                        }}

                                    />
                                ))}
                            </Layer>


                            {/* TRANSFORMER */}

                            {selectedNodeRef.current && (
                                <Layer>
                                    <Transformer ref={trRef} />
                                </Layer>
                            )}

                        </Stage>

                    </div>
                </div>
            </div>
        </div>

    );
});

export default Canvas;

