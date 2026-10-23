// // // import {
// // //     Stage,
// // //     Layer,
// // //     Rect,
// // //     Text,
// // //     Image as KonvaImage,
// // //     Line,
// // //     Circle,
// // //     Transformer,
// // //     RegularPolygon,
// // //     Group,
// // //     Star
// // // } from "react-konva";
// // // import { useRef, useState, useEffect, forwardRef, Fragment } from "react";
// // // import FloatingToolbar from "./FloatinngToolbar";
// // // import WordArtPicker from "../components/WordArtPicker";
// // // const CURSORS = {
// // //     brush: "crosshair",
// // //     line: "crosshair",
// // //     rectangle: "crosshair",
// // //     circle: "crosshair",
// // //     eraser: "crosshair",
// // //     select: "default",
// // //     move: "move",
// // //     text: "text"
// // // };

// // // const DRAW_TOOLS = ["brush", "eraser", "line", "rectangle", "circle"];

// // // const createId = () => {
// // //     if (typeof crypto !== "undefined" && crypto.randomUUID) {
// // //         return crypto.randomUUID();
// // //     }

// // //     return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
// // // };

// // // /* ================= BLOCK SHAPE GENERATOR ================= */

// // // const getBlockShape = (b) => {

// // //     const w = b.width;
// // //     const h = b.height;

// // //     if (b.shape === "rectangle" || !b.shape) {
// // //         return <Rect key={b.id} {...b} />;
// // //     }

// // //     if (b.shape === "rhombus") {
// // //         const points = [
// // //             w / 2, 0,
// // //             w, h / 2,
// // //             w / 2, h,
// // //             0, h / 2
// // //         ];

// // //         return (
// // //             <Line
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 points={points}
// // //                 closed
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "parallelogram") {
// // //         const offset = w * 0.25;

// // //         const points = [
// // //             offset, 0,
// // //             w, 0,
// // //             w - offset, h,
// // //             0, h
// // //         ];

// // //         return (
// // //             <Line
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 points={points}
// // //                 closed
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "trapezoid") {

// // //         const top = w * 0.6;
// // //         const offset = (w - top) / 2;

// // //         const points = [
// // //             offset, 0,
// // //             offset + top, 0,
// // //             w, h,
// // //             0, h
// // //         ];

// // //         return (
// // //             <Line
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 points={points}
// // //                 closed
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }
// // //     if (b.shape === "triangle") {
// // //         return (
// // //             <RegularPolygon
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 sides={3}
// // //                 radius={Math.min(b.width, b.height) / 2}
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "circle") {
// // //         return (
// // //             <Circle
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 radius={Math.min(b.width, b.height) / 2}
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "heptagon") {
// // //         return (
// // //             <RegularPolygon
// // //                 key={b.id}
// // //                 x={b.x + w / 2}
// // //                 y={b.y + h / 2}
// // //                 sides={7}
// // //                 radius={Math.min(w, h) / 2}
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     return null;
// // // };


// // // const Canvas = forwardRef(function Canvas(
// // //     {
// // //         adSize,
// // //         onReset,
// // //         texts,
// // //         setTexts,
// // //         images,
// // //         setImages,
// // //         icons = [],
// // //         setIcons,
// // //         onIconColorChange,
// // //         onOpenClipArt,
// // //         onReplaceImage,
// // //         onOpenDiscountTags,
// // //         onOpenAIAssistance,
// // //         hideCanvasToolbar = false,
// // //         discountTags = [],
// // //         setDiscountTags,
// // //         shapes,
// // //         setShapes,
// // //         blocks,
// // //         setBlocks,
// // //         borders = [],
// // //         setBorders,

// // //         background,
// // //         selectedId,
// // //         setSelectedId,
// // //         tool,
// // //         setTool,
// // //         lineType,
// // //         setLineType,
// // //         strokeColor,
// // //         setStrokeColor,
// // //         strokeWidth,
// // //         setStrokeWidth,
// // //         pushHistory,
// // //         language,
// // //         setActiveSection,
// // //         activeSection,
// // //         editingBackground,
// // //         setEditingBackground,
// // //     },
// // //     ref
// // // ) {
// // //     const sizes = {
// // //         square: [420, 420],
// // //         portrait: [420, 520],
// // //         landscape: [620, 420],

// // //         visitingCard: [320, 180],
// // //         businessCard: [350, 200],

// // //         bookmark: [220, 520],

// // //         instagramPost: [420, 420],
// // //         instagramStory: [320, 570],

// // //         facebookCover: [620, 240]
// // //     };

// // //     const [W, H] = sizes[adSize] || [420, 420];
// // //     const stageRef = useRef(null);
// // //     const trRef = useRef(null);
// // //     const selectedNodeRef = useRef(null);
// // //     const nodeRegistryRef = useRef(new Map());


// // //     const registerNode = (id, node) => {
// // //         if (id == null) return;

// // //         const key = String(id);

// // //         if (node) {
// // //             nodeRegistryRef.current.set(key, node);
// // //         } else {
// // //             nodeRegistryRef.current.delete(key);
// // //         }
// // //     };

// // //     const containerRef = useRef(null);
// // //     const canvasWrapperRef = useRef(null);

// // //     const imageInputRef = useRef(null);
// // //     const replaceImageIdRef = useRef(null);

// // //     // Background drag tracking
// // //     const backgroundDraggingRef = useRef(false);

// // //     // Drawing state refs
// // //     const isDrawingRef = useRef(false);

// // //     const [isDrawing, setIsDrawing] = useState(false);
// // //     const [draftShape, setDraftShape] = useState(null);

// // //     const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
// // //     const [isMobileToolbarOpen, setIsMobileToolbarOpen] = useState(false);
// // //     useEffect(() => {
// // //         if (hideCanvasToolbar) {
// // //             setIsMobileToolbarOpen(false);
// // //         }
// // //     }, [hideCanvasToolbar]);
// // //     const [showWordArtLibrary, setShowWordArtLibrary] = useState(false);
// // //     /* ================= AUTO SCALE FOR MOBILE ================= */

// // //     const [autoScale, setAutoScale] = useState(1);

// // //     useEffect(() => {
// // //         const resize = () => {
// // //             if (!containerRef.current) return;

// // //             const containerWidth = containerRef.current.offsetWidth;
// // //             const scale = containerWidth / W;

// // //             if (scale < 1) setAutoScale(scale);
// // //             else setAutoScale(1);
// // //         };

// // //         resize();
// // //         window.addEventListener("resize", resize);

// // //         return () => window.removeEventListener("resize", resize);
// // //     }, [W]);


// // //     /* ================= ZOOM CONTROLLER ================= */
// // //     /* ================= ZOOM CONTROLLER ================= */

// // //     const zoomLevels = [25, 50, 75, 100, 125, 150, 200, 300];

// // //     const getIsMobile = () =>
// // //         typeof window !== "undefined" &&
// // //         window.matchMedia("(max-width: 768px)").matches;

// // //     const [zoomPercent, setZoomPercent] = useState(
// // //         getIsMobile() ? 75 : 100
// // //     );

// // //     /* Keep zoom synced with mobile/desktop breakpoint */
// // //     useEffect(() => {
// // //         const handleViewportChange = () => {
// // //             const mobile = getIsMobile();

// // //             setZoomPercent(prev => {
// // //                 // Only change the automatic starting zoom
// // //                 // when crossing between desktop and mobile.
// // //                 if (mobile && prev === 100) return 75;
// // //                 if (!mobile && prev === 75) return 100;

// // //                 return prev;
// // //             });
// // //         };

// // //         window.addEventListener("resize", handleViewportChange);

// // //         return () => {
// // //             window.removeEventListener("resize", handleViewportChange);
// // //         };
// // //     }, []);

// // //     const zoom = zoomPercent / 100;

// // //     const increaseZoom = () => {
// // //         const next = zoomLevels.find(z => z > zoomPercent);
// // //         if (next) setZoomPercent(next);
// // //     };

// // //     const decreaseZoom = () => {
// // //         const prev = [...zoomLevels].reverse().find(z => z < zoomPercent);
// // //         if (prev) setZoomPercent(prev);
// // //     };

// // //     const finalScale = zoom * autoScale;

// // //     /* ================= CURSOR FIX ================= */
// // //     useEffect(() => {
// // //         const stage = stageRef.current;
// // //         if (!stage) return;

// // //         const container = stage.container();

// // //         if (editingBackground) {
// // //             container.style.cursor = "grabbing";
// // //             return;
// // //         }

// // //         if (isDrawing) {
// // //             container.style.cursor = "crosshair";
// // //             return;
// // //         }

// // //         if (tool === "text") {
// // //             container.style.cursor = "text";
// // //             return;
// // //         }

// // //         if (DRAW_TOOLS.includes(tool)) {
// // //             container.style.cursor = "crosshair";
// // //             return;
// // //         }

// // //         if (tool === "move") {
// // //             container.style.cursor = "move";
// // //             return;
// // //         }

// // //         container.style.cursor = "default";
// // //     }, [tool, isDrawing, editingBackground]);

// // //     /* ================= BACKGROUND DRAG END ================= */

// // //     const finishBackgroundEditing = () => {
// // //         const node = selectedNodeRef.current;
// // //         const wasDragging = backgroundDraggingRef.current;

// // //         // Stop Konva dragging immediately
// // //         if (node) {
// // //             const { x, y } = node.position();

// // //             if (wasDragging) {
// // //                 setBackground(prev => ({
// // //                     ...prev,
// // //                     x,
// // //                     y
// // //                 }));
// // //             }

// // //             node.stopDrag();
// // //             node.draggable(false);
// // //         }

// // //         backgroundDraggingRef.current = false;

// // //         // Completely exit background editing
// // //         setEditingBackground(false);
// // //         setSelectedId(null);
// // //         selectedNodeRef.current = null;

// // //         // Remove transformer if anything is attached
// // //         if (trRef.current) {
// // //             trRef.current.nodes([]);
// // //             trRef.current.getLayer()?.batchDraw();
// // //         }

// // //         if (wasDragging) {
// // //             pushHistory();
// // //         }
// // //     };

// // //     /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

// // //     const openImageReplacement = imageId => {

// // //         if (!imageId) return;

// // //         replaceImageIdRef.current = imageId;

// // //         if (imageInputRef.current) {
// // //             imageInputRef.current.value = "";
// // //             imageInputRef.current.click();
// // //         }
// // //     };

// // //     const handleReplacementFile = e => {

// // //         const file = e.target.files?.[0];

// // //         const imageId = replaceImageIdRef.current;

// // //         if (!file || !imageId) {
// // //             replaceImageIdRef.current = null;
// // //             return;
// // //         }

// // //         if (onReplaceImage) {
// // //             onReplaceImage(imageId, file);
// // //         }

// // //         replaceImageIdRef.current = null;

// // //         e.target.value = "";
// // //     };

// // //     useEffect(() => {
// // //         const handleGlobalPointerUp = () => {
// // //             if (backgroundDraggingRef.current) {
// // //                 finishBackgroundEditing();
// // //             }
// // //         };

// // //         window.addEventListener("pointerup", handleGlobalPointerUp);
// // //         window.addEventListener("mouseup", handleGlobalPointerUp);
// // //         window.addEventListener("touchend", handleGlobalPointerUp);
// // //         window.addEventListener("touchcancel", handleGlobalPointerUp);

// // //         return () => {
// // //             window.removeEventListener("pointerup", handleGlobalPointerUp);
// // //             window.removeEventListener("mouseup", handleGlobalPointerUp);
// // //             window.removeEventListener("touchend", handleGlobalPointerUp);
// // //             window.removeEventListener("touchcancel", handleGlobalPointerUp);
// // //         };
// // //     }, []);
// // //     /* ================= TRANSFORMER ================= */
// // //     // Keep the Transformer mounted in its own permanent layer. Re-mounting the
// // //     // whole layer every time selectedId changes can cause the canvas to flash
// // //     // or clear in some React-Konva render cycles.
// // //     useEffect(() => {
// // //         const transformer = trRef.current;
// // //         if (!transformer) return;

// // //         const clearTransformer = () => {
// // //             transformer.nodes([]);
// // //             transformer.getLayer()?.batchDraw();
// // //         };

// // //         if (
// // //             selectedId == null ||
// // //             String(selectedId) === "background" ||
// // //             DRAW_TOOLS.includes(tool)
// // //         ) {
// // //             clearTransformer();
// // //             return;
// // //         }

// // //         const selectedKey = String(selectedId);
// // //         const isIconOrTag =
// // //             icons.some(item => String(item.id) === selectedKey) ||
// // //             discountTags.some(item => String(item.id) === selectedKey);

// // //         // Icons and discount tags must use their own registered Konva node.
// // //         // Never attach the previous selection's node if their ref isn't ready.
// // //         const node =
// // //             nodeRegistryRef.current.get(selectedKey) ||
// // //             (isIconOrTag ? null : selectedNodeRef.current);

// // //         if (!node || !node.getStage() || node.getStage() !== stageRef.current) {
// // //             clearTransformer();
// // //             return;
// // //         }

// // //         selectedNodeRef.current = node;
// // //         transformer.nodes([node]);
// // //         transformer.forceUpdate();
// // //         transformer.getLayer()?.batchDraw();
// // //     }, [
// // //         selectedId,
// // //         activeSection,
// // //         tool,
// // //         texts,
// // //         images,
// // //         icons,
// // //         shapes,
// // //         blocks,
// // //         borders,
// // //         discountTags
// // //     ]);

// // //     // /* ================= toolbar ================= */
// // //     useEffect(() => {
// // //         if (!selectedNodeRef.current || !stageRef.current) return;

// // //         const node = selectedNodeRef.current;
// // //         const stage = stageRef.current;

// // //         const updatePosition = () => {
// // //             const box = node.getClientRect(); // ✅ absolute canvas coords
// // //             const stageBox = stage.container().getBoundingClientRect(); // ✅ DOM position

// // //             setToolbarPos({
// // //                 x: stageBox.left + box.x + box.width / 2,
// // //                 y: stageBox.top + box.y - 10
// // //             });
// // //         };

// // //         updatePosition();

// // //         node.on("dragmove transform", updatePosition);

// // //         return () => {
// // //             node.off("dragmove transform", updatePosition);
// // //         };

// // //     }, [selectedId, zoomPercent, autoScale]);

// // //     useEffect(() => {
// // //         const handleOutsidePointer = (e) => {
// // //             if (!editingBackground) return;

// // //             const stage = stageRef.current;

// // //             if (!stage) return;

// // //             const rect = stage.container().getBoundingClientRect();

// // //             const insideStage =
// // //                 e.clientX >= rect.left &&
// // //                 e.clientX <= rect.right &&
// // //                 e.clientY >= rect.top &&
// // //                 e.clientY <= rect.bottom;

// // //             // Click/pointer outside the actual canvas
// // //             if (!insideStage) {
// // //                 finishBackgroundEditing();
// // //             }
// // //         };

// // //         document.addEventListener("pointerdown", handleOutsidePointer);

// // //         return () => {
// // //             document.removeEventListener(
// // //                 "pointerdown",
// // //                 handleOutsidePointer
// // //             );
// // //         };
// // //     }, [editingBackground]);

// // //     /*/////////////////////////////*/
// // //     const handleApplyWordArt = (wordArt) => {
// // //         const selectedText = texts?.find(
// // //             (item) => String(item.id) === String(selectedId) &&
// // //                 (item.type === "text" || item.text !== undefined)
// // //         );

// // //         if (!selectedText) {
// // //             alert("Please select a text object on the canvas first.");
// // //             return;
// // //         }

// // //         setTexts((previousTexts) =>
// // //             previousTexts.map((item) => {
// // //                 if (String(item.id) !== String(selectedId)) {
// // //                     return item;
// // //                 }

// // //                 return {
// // //                     ...item,
// // //                     ...wordArt.style,

// // //                     // Preserve the user's existing wording and placement.
// // //                     text: item.text,
// // //                     x: item.x,
// // //                     y: item.y,
// // //                     width: item.width,
// // //                     rotation: item.rotation ?? 0,
// // //                     id: item.id,
// // //                     type: item.type,
// // //                 };
// // //             })
// // //         );

// // //         setShowWordArtLibrary(false);
// // //     };

// // //     /* ================= DRAWING ================= */
// // //     const onMouseDown = e => {
// // //         if (!DRAW_TOOLS.includes(tool)) return;

// // //         // Never allow background editing while drawing
// // //         if (editingBackground) {
// // //             finishBackgroundEditing();
// // //             return;
// // //         }

// // //         const stage = stageRef.current;
// // //         if (!stage) return;

// // //         // Drawing starts only from empty canvas
// // //         if (e.target !== stage) return;

// // //         const pos = stage.getPointerPosition();
// // //         if (!pos) return;

// // //         setIsDrawing(true);
// // //         isDrawingRef.current = true;

// // //         const id = createId();

// // //         if (tool === "brush" || tool === "eraser") {
// // //             setShapes(s => [
// // //                 ...s,
// // //                 {
// // //                     id,
// // //                     type: "free",
// // //                     tool,
// // //                     points: [pos.x, pos.y],
// // //                     stroke: strokeColor,
// // //                     strokeWidth
// // //                 }
// // //             ]);
// // //             return;
// // //         }

// // //         if (tool === "line") {
// // //             setShapes(s => [
// // //                 ...s,
// // //                 {
// // //                     id,
// // //                     type: "line",
// // //                     lineType: lineType || "thin",
// // //                     points: [pos.x, pos.y, pos.x, pos.y],
// // //                     stroke: strokeColor,
// // //                     strokeWidth
// // //                 }
// // //             ]);
// // //             return;
// // //         }

// // //         if (tool === "rectangle") {
// // //             setDraftShape({
// // //                 id,
// // //                 type: "rectangle",
// // //                 x: pos.x,
// // //                 y: pos.y,
// // //                 width: 0,
// // //                 height: 0,
// // //                 stroke: strokeColor,
// // //                 strokeWidth
// // //             });
// // //             return;
// // //         }

// // //         if (tool === "circle") {
// // //             setDraftShape({
// // //                 id,
// // //                 type: "circle",
// // //                 x: pos.x,
// // //                 y: pos.y,
// // //                 radius: 0,
// // //                 stroke: strokeColor,
// // //                 strokeWidth
// // //             });
// // //         }
// // //     };

// // //     const onMouseMove = () => {
// // //         if (!isDrawing) return;

// // //         const stage = stageRef.current;
// // //         if (!stage) return;

// // //         const pos = stage.getPointerPosition();
// // //         if (!pos) return;

// // //         if (tool === "brush" || tool === "eraser") {
// // //             setShapes(s => {
// // //                 if (!s.length) return s;

// // //                 const last = { ...s[s.length - 1] };

// // //                 last.points = [
// // //                     ...last.points,
// // //                     pos.x,
// // //                     pos.y
// // //                 ];

// // //                 return [
// // //                     ...s.slice(0, -1),
// // //                     last
// // //                 ];
// // //             });

// // //             return;
// // //         }

// // //         if (tool === "line") {
// // //             setShapes(s => {
// // //                 if (!s.length) return s;

// // //                 const last = { ...s[s.length - 1] };

// // //                 last.points = [
// // //                     last.points[0],
// // //                     last.points[1],
// // //                     pos.x,
// // //                     pos.y
// // //                 ];

// // //                 return [
// // //                     ...s.slice(0, -1),
// // //                     last
// // //                 ];
// // //             });

// // //             return;
// // //         }

// // //         if (tool === "rectangle") {
// // //             setDraftShape(d => {
// // //                 if (!d) return d;

// // //                 return {
// // //                     ...d,
// // //                     width: pos.x - d.x,
// // //                     height: pos.y - d.y
// // //                 };
// // //             });

// // //             return;
// // //         }

// // //         if (tool === "circle") {
// // //             setDraftShape(d => {
// // //                 if (!d) return d;

// // //                 const dx = pos.x - d.x;
// // //                 const dy = pos.y - d.y;

// // //                 return {
// // //                     ...d,
// // //                     radius: Math.sqrt(
// // //                         dx * dx + dy * dy
// // //                     )
// // //                 };
// // //             });
// // //         }
// // //     };

// // //     const onMouseUp = () => {
// // //         if (!isDrawingRef.current) return;

// // //         isDrawingRef.current = false;
// // //         setIsDrawing(false);

// // //         setDraftShape(currentDraft => {
// // //             if (currentDraft) {
// // //                 setShapes(prev => [
// // //                     ...prev,
// // //                     currentDraft
// // //                 ]);
// // //             }

// // //             return null;
// // //         });

// // //         // ONE DRAW = ONE ACTION
// // //         setTool("select");

// // //         pushHistory();
// // //     };
// // //     // //     /* ---------------- LINE TYPES FIX ---------------- */
// // //     const renderLine = s => {
// // //         const [x1, y1, x2, y2] = s.points;

// // //         if (s.lineType === "thin")
// // //             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth} lineCap="round" />;

// // //         if (s.lineType === "thick")
// // //             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth * 2} lineCap="round" />;

// // //         const segments = 20;
// // //         const lines = [];
// // //         for (let i = 0; i < segments; i++) {
// // //             const t1 = i / segments;
// // //             const t2 = (i + 1) / segments;
// // //             const sx = x1 + (x2 - x1) * t1;
// // //             const sy = y1 + (y2 - y1) * t1;
// // //             const ex = x1 + (x2 - x1) * t2;
// // //             const ey = y1 + (y2 - y1) * t2;

// // //             let width = s.strokeWidth;

// // //             if (s.lineType === "thinToThick")
// // //                 width = s.strokeWidth * (1 + t1);

// // //             if (s.lineType === "thickToThin")
// // //                 width = s.strokeWidth * (2 - t1);
// // //             if (s.lineType === "thickCenter") {
// // //                 const mid = Math.abs(0.5 - t1);
// // //                 width = s.strokeWidth * (2 - mid * 2);
// // //             }

// // //             lines.push(
// // //                 <Line
// // //                     key={`${s.id}-${i}`}
// // //                     points={[sx, sy, ex, ey]}
// // //                     stroke={s.stroke}
// // //                     strokeWidth={width}
// // //                     lineCap="round"
// // //                 />
// // //             );
// // //         }

// // //         return lines;
// // //     };

// // //     /* ================= SELECTED ELEMENT ================= */

// // //     const selectedElement =
// // //         texts.find(t => t.id === selectedId) ||
// // //         images.find(i => i.id === selectedId) ||
// // //         icons.find(i => i.id === selectedId) ||
// // //         shapes.find(s => s.id === selectedId) ||
// // //         blocks.find(b => b.id === selectedId) ||
// // //         discountTags.find(t => t.id === selectedId) ||
// // //         borders.find(b => b.id === selectedId);


// // //     /* ================= DELETE FUNCTION ================= */

// // //     const deleteElement = () => {
// // //         if (!selectedId) return;

// // //         setTexts(prev => prev.filter(t => t.id !== selectedId));
// // //         setImages(prev => prev.filter(i => i.id !== selectedId));
// // //         if (setIcons) {
// // //             setIcons(prev =>
// // //                 prev.filter(i => i.id !== selectedId)
// // //             );
// // //         }
// // //         setShapes(prev => prev.filter(s => s.id !== selectedId));
// // //         setBlocks(prev => prev.filter(b => b.id !== selectedId));
// // //         setDiscountTags(prev => prev.filter(t => t.id !== selectedId));
// // //         setBorders(prev => prev.filter(b => b.id !== selectedId));

// // //         setSelectedId(null);
// // //         selectedNodeRef.current = null;

// // //         pushHistory();
// // //     };


// // //     // return (
// // //     //     <div
// // //     //         ref={containerRef}
// // //     //         style={{
// // //     //             flex: 1,
// // //     //             display: "flex",
// // //     //             justifyContent: "center",
// // //     //             alignItems: "center",
// // //     //             position: "relative",
// // //     //             overflow: "hidden",
// // //     //             background:
// // //     //                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
// // //     //         }}
// // //     //     >
// // //     return (
// // //         <div
// // //             ref={containerRef}
// // //             style={{
// // //                 flex: 1,
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //                 position: "relative",
// // //                 overflow: "hidden",
// // //                 background:
// // //                     "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
// // //             }}
// // //         >

// // //             <input
// // //                 ref={imageInputRef}
// // //                 type="file"
// // //                 accept="image/*"
// // //                 style={{ display: "none" }}
// // //                 onChange={handleReplacementFile}
// // //             />


// // //             {/* RESPONSIVE TOOLBAR SHELL */}
// // //             <div
// // //                 className="adstudio-toolbar-shell"
// // //                 style={{
// // //                     display: hideCanvasToolbar ? "none" : "flex",
// // //                     position: "absolute",
// // //                     top: 12,
// // //                     left: "50%",
// // //                     transform: "translateX(-50%)",
// // //                     width: "max-content",
// // //                     maxWidth: "calc(100% - 24px)",
// // //                     justifyContent: "center",
// // //                     alignItems: "center",
// // //                     zIndex: 30,
// // //                     boxSizing: "border-box",
// // //                 }}
// // //             >

// // //                 {/* MOBILE TOGGLE BUTTON */}
// // //                 <button
// // //                     type="button"
// // //                     className="adstudio-toolbar-toggle"
// // //                     onClick={() => setIsMobileToolbarOpen((previous) => !previous)}
// // //                     aria-label={isMobileToolbarOpen ? "Hide toolbar" : "Show toolbar"}
// // //                     aria-expanded={isMobileToolbarOpen}
// // //                     title={isMobileToolbarOpen ? "Hide tools" : "Show tools"}
// // //                 >
// // //                     <span className={isMobileToolbarOpen ? "toolbar-toggle-icon is-open" : "toolbar-toggle-icon"}>
// // //                         {isMobileToolbarOpen ? "✕" : "☰"}
// // //                     </span>
// // //                     <span className="toolbar-toggle-label">
// // //                         {isMobileToolbarOpen ? "Hide tools" : "Tools"}
// // //                     </span>
// // //                 </button>

// // //                 {/* EXISTING TOOLBAR */}
// // //                 <div
// // //                     className={`adstudio-canvas-toolbar ${isMobileToolbarOpen
// // //                         ? "adstudio-toolbar-menu-open"
// // //                         : "adstudio-toolbar-menu-closed"
// // //                         }`}
// // //                 >
// // //                     {/* KEEP YOUR EXISTING FIVE BUTTONS HERE:
// // //         AI Assistance, Backgrounds, Icons, Reset, Sale Tags.
// // //         Do not change their onClick handlers. */}

// // //                     {/* AI ASSISTANCE */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-ai-button"
// // //                         onClick={() => {
// // //                             if (onOpenAIAssistance) {
// // //                                 onOpenAIAssistance();
// // //                             } else {
// // //                                 window.dispatchEvent(
// // //                                     new CustomEvent("adstudio-open-ai-assistance")
// // //                                 );
// // //                             }
// // //                         }}
// // //                         title="AI Assistance"
// // //                         data-tippy-content="AI Assistance"
// // //                         aria-label="Open AI Assistance"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ✦
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             AI Assistance
// // //                         </span>
// // //                         <span className="adstudio-beta-label">
// // //                             Beta
// // //                         </span>
// // //                     </button>

// // //                     {/* BACKGROUNDS */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-background-button"
// // //                         onClick={() => onOpenClipArt?.()}
// // //                         title="Backgrounds"
// // //                         data-tippy-content="Backgrounds"
// // //                         aria-label="Open Backgrounds Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ▧
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Backgrounds
// // //                         </span>
// // //                     </button>

// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button"
// // //                         onClick={() => setIsBusinessPhotoLibraryOpen(true)}
// // //                         title="Business Photo Backgrounds"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ▧
// // //                         </span>
// // //                         <span>Business Photos T</span>
// // //                     </button>


// // //                     {/* WORD ART */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-sale-button"
// // //                         onClick={() => setShowWordArtLibrary(true)}
// // //                         title="Word Art"
// // //                         data-tippy-content="Word Art"
// // //                         aria-label="Open Word Art Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             Aa
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Word Art
// // //                         </span>
// // //                     </button>


// // //                     {/* ICONS */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-icons-button"
// // //                         onClick={() => {
// // //                             setSelectedId(null);
// // //                             selectedNodeRef.current = null;
// // //                             setEditingBackground(false);

// // //                             if (trRef.current) {
// // //                                 trRef.current.nodes([]);
// // //                                 trRef.current.getLayer()?.batchDraw();
// // //                             }

// // //                             window.dispatchEvent(
// // //                                 new CustomEvent("adstudio-open-icon-picker")
// // //                             );
// // //                         }}
// // //                         title="Icons"
// // //                         data-tippy-content="Icons"
// // //                         aria-label="Open Icon Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ✥
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Icons
// // //                         </span>
// // //                     </button>

// // //                     {/* DISCOUNT / SALE TAGS */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-sale-button"
// // //                         onClick={() => {
// // //                             setSelectedId(null);
// // //                             selectedNodeRef.current = null;
// // //                             setEditingBackground(false);

// // //                             if (trRef.current) {
// // //                                 trRef.current.nodes([]);
// // //                                 trRef.current.getLayer()?.batchDraw();
// // //                             }

// // //                             onOpenDiscountTags?.();
// // //                         }}
// // //                         title="Sale Tags — Discounts and Special Offers"
// // //                         data-tippy-content="Sale Tags"
// // //                         aria-label="Open Sale Tags Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             🏷
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Sale Tags
// // //                         </span>
// // //                     </button>


// // //                     {/* RESET */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-reset-button"
// // //                         onClick={onReset}
// // //                         title="Reset Canvas"
// // //                         data-tippy-content="Reset Canvas"
// // //                         aria-label="Reset Canvas"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ↻
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Reset
// // //                         </span>
// // //                     </button>


// // //                 </div>


// // //             </div>




// // //             {/* ================= END RESPONSIVE CANVAS TOOLBAR ================= */}



// // //             {/* ZOOM CONTROLLER */}

// // //             <div
// // //                 style={{
// // //                     position: "absolute",
// // //                     bottom: 20,
// // //                     right: 25,
// // //                     display: "flex",
// // //                     alignItems: "center",
// // //                     gap: 10,
// // //                     background: "#ffffff",
// // //                     padding: "8px 12px",
// // //                     borderRadius: 10,
// // //                     boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
// // //                     zIndex: 20
// // //                 }}
// // //             >

// // //                 <button
// // //                     onClick={decreaseZoom}
// // //                     style={{
// // //                         fontSize: 18,
// // //                         width: 28,
// // //                         height: 28,
// // //                         borderRadius: 6,
// // //                         border: "1px solid #cbd5e1",
// // //                         background: "#fff"
// // //                     }}
// // //                 >
// // //                     −
// // //                 </button>

// // //                 <input
// // //                     type="range"
// // //                     min="50"
// // //                     max="300"
// // //                     step="25"
// // //                     value={zoomPercent}
// // //                     onChange={e => setZoomPercent(Number(e.target.value))}
// // //                     style={{ width: 100 }}
// // //                 />

// // //                 <button
// // //                     onClick={increaseZoom}
// // //                     style={{
// // //                         fontSize: 18,
// // //                         width: 28,
// // //                         height: 28,
// // //                         borderRadius: 6,
// // //                         border: "1px solid #cbd5e1",
// // //                         background: "#fff"
// // //                     }}
// // //                 >
// // //                     +
// // //                 </button>

// // //                 <select
// // //                     value={zoomPercent}
// // //                     onChange={e => setZoomPercent(Number(e.target.value))}
// // //                     style={{
// // //                         border: "1px solid #cbd5e1",
// // //                         borderRadius: 6,
// // //                         padding: "2px 6px"
// // //                     }}
// // //                 >
// // //                     {zoomLevels.map(z => (
// // //                         <option key={z} value={z}>{z}%</option>
// // //                     ))}
// // //                 </select>

// // //             </div>


// // //             {/* =========================================================
// // //     ICON COLOR CONTROL
// // // ========================================================= */}

// // //             {selectedElement?.type === "icon" && (
// // //                 <div
// // //                     style={{
// // //                         position: "fixed",

// // //                         left:
// // //                             toolbarPos.x,

// // //                         top:
// // //                             toolbarPos.y + 38,

// // //                         transform:
// // //                             "translateX(-50%)",

// // //                         zIndex: 100,

// // //                         display: "flex",

// // //                         alignItems: "center",

// // //                         gap: 8,

// // //                         padding:
// // //                             "7px 10px",

// // //                         borderRadius: 10,

// // //                         background:
// // //                             "#ffffff",

// // //                         border:
// // //                             "1px solid #e2e8f0",

// // //                         boxShadow:
// // //                             "0 10px 30px rgba(0,0,0,0.16)"
// // //                     }}
// // //                 >

// // //                     <span
// // //                         style={{
// // //                             fontSize: 11,
// // //                             fontWeight: 600,
// // //                             color: "#475569"
// // //                         }}
// // //                     >
// // //                         Color
// // //                     </span>

// // //                     <input
// // //                         type="color"
// // //                         value={
// // //                             selectedElement.color ||
// // //                             "#0b1f33"
// // //                         }
// // //                         onChange={e => {

// // //                             if (
// // //                                 onIconColorChange
// // //                             ) {
// // //                                 onIconColorChange(
// // //                                     selectedElement.id,
// // //                                     e.target.value
// // //                                 );
// // //                             }
// // //                         }}
// // //                         style={{
// // //                             width: 30,
// // //                             height: 30,

// // //                             padding: 0,

// // //                             border: 0,

// // //                             background:
// // //                                 "transparent",

// // //                             cursor: "pointer"
// // //                         }}
// // //                     />

// // //                 </div>
// // //             )}


// // //             {/* ================= DISCOUNT TAG EDITOR ================= */}

// // //             {selectedElement?.type === "discountTag" && (
// // //                 <div
// // //                     style={{
// // //                         position: "fixed",
// // //                         left: toolbarPos.x,
// // //                         top: toolbarPos.y + 38,
// // //                         transform: "translateX(-50%)",
// // //                         zIndex: 110,
// // //                         display: "flex",
// // //                         alignItems: "center",
// // //                         flexWrap: "wrap",
// // //                         gap: 8,
// // //                         padding: 10,
// // //                         borderRadius: 12,
// // //                         background: "#ffffff",
// // //                         border: "1px solid #e2e8f0",
// // //                         boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
// // //                         maxWidth: "calc(100vw - 24px)",
// // //                     }}
// // //                 >
// // //                     <input
// // //                         aria-label="Discount tag text"
// // //                         value={selectedElement.text}
// // //                         maxLength={40}
// // //                         onChange={e => {
// // //                             const text = e.target.value;

// // //                             setDiscountTags(prev =>
// // //                                 prev.map(tag =>
// // //                                     tag.id === selectedId
// // //                                         ? { ...tag, text }
// // //                                         : tag
// // //                                 )
// // //                             );
// // //                         }}
// // //                         onBlur={() => pushHistory()}
// // //                         style={{
// // //                             width: 140,
// // //                             minWidth: 0,
// // //                             padding: "7px 9px",
// // //                             border: "1px solid #cbd5e1",
// // //                             borderRadius: 7,
// // //                             fontSize: 13,
// // //                         }}
// // //                     />

// // //                     <label title="Tag background color">
// // //                         <input
// // //                             aria-label="Tag background color"
// // //                             type="color"
// // //                             value={selectedElement.fill || "#dc2626"}
// // //                             onChange={e => {
// // //                                 const fill = e.target.value;

// // //                                 setDiscountTags(prev =>
// // //                                     prev.map(tag =>
// // //                                         tag.id === selectedId
// // //                                             ? { ...tag, fill }
// // //                                             : tag
// // //                                     )
// // //                                 );
// // //                             }}
// // //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// // //                         />
// // //                     </label>

// // //                     <label title="Tag text color">
// // //                         <input
// // //                             aria-label="Tag text color"
// // //                             type="color"
// // //                             value={selectedElement.textColor || "#ffffff"}
// // //                             onChange={e => {
// // //                                 const textColor = e.target.value;

// // //                                 setDiscountTags(prev =>
// // //                                     prev.map(tag =>
// // //                                         tag.id === selectedId
// // //                                             ? { ...tag, textColor }
// // //                                             : tag
// // //                                     )
// // //                                 );
// // //                             }}
// // //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// // //                         />
// // //                     </label>

// // //                     <label title="Tag border color">
// // //                         <input
// // //                             aria-label="Tag border color"
// // //                             type="color"
// // //                             value={selectedElement.borderColor || "#991b1b"}
// // //                             onChange={e => {
// // //                                 const borderColor = e.target.value;

// // //                                 setDiscountTags(prev =>
// // //                                     prev.map(tag =>
// // //                                         tag.id === selectedId
// // //                                             ? { ...tag, borderColor }
// // //                                             : tag
// // //                                     )
// // //                                 );
// // //                             }}
// // //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// // //                         />
// // //                     </label>
// // //                 </div>
// // //             )}


// // //             <FloatingToolbar
// // //                 element={selectedElement}
// // //                 onDelete={deleteElement}
// // //                 onEdit={() => {

// // //                     if (!selectedElement) return;

// // //                     if (selectedElement.text) {
// // //                         setActiveSection("text");
// // //                         return;
// // //                     }

// // //                     if (selectedElement.type === "icon") {
// // //                         return;
// // //                     }

// // //                     if (selectedElement.image) {
// // //                         setActiveSection("image");
// // //                         return;
// // //                     }

// // //                     setActiveSection("shapes");
// // //                 }}

// // //                 onDuplicate={() => {
// // //                     if (!selectedElement) return;

// // //                     if (selectedElement.type === "icon") {

// // //                         const duplicated = {
// // //                             ...selectedElement,

// // //                             id: createId(),

// // //                             x:
// // //                                 selectedElement.x + 30,

// // //                             y:
// // //                                 selectedElement.y + 30
// // //                         };

// // //                         setIcons(prev => [
// // //                             ...prev,
// // //                             duplicated
// // //                         ]);

// // //                         setSelectedId(
// // //                             duplicated.id
// // //                         );

// // //                         setTimeout(() => {
// // //                             pushHistory();
// // //                         }, 0);

// // //                         return;
// // //                     }

// // //                     // TEXT DUPLICATION
// // //                     if (selectedElement.text) {

// // //                         const duplicated = {
// // //                             ...selectedElement,
// // //                             id: Date.now(),
// // //                             x: selectedElement.x + 30,
// // //                             y: selectedElement.y + 30
// // //                         };

// // //                         setTexts(prev => [...prev, duplicated]);

// // //                         setSelectedId(duplicated.id);

// // //                         setTimeout(() => {
// // //                             pushHistory();
// // //                         }, 0);
// // //                     }
// // //                 }}
// // //                 position={toolbarPos}
// // //                 activeSection={activeSection} // ✅ ADD
// // //             />

// // //             {/* CENTERING WRAPPER */}

// // //             <div
// // //                 style={{
// // //                     display: "flex",
// // //                     justifyContent: "center",
// // //                     alignItems: "center",
// // //                     minWidth: "100%",
// // //                     minHeight: "100%",
// // //                     padding: 40
// // //                 }}
// // //             >

// // //                 {/* SCALE WRAPPER */}

// // //                 <div
// // //                     style={{
// // //                         transform: `scale(${finalScale})`,
// // //                         transformOrigin: "center center",
// // //                         transition: "transform 0.2s ease"
// // //                     }}
// // //                 >
// // //                     <div
// // //                         ref={canvasWrapperRef}
// // //                         style={{
// // //                             position: "relative",

// // //                             background:
// // //                                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #12385d 70%, #1e4f7a 100%)",

// // //                             borderRadius: 26,

// // //                             padding: 18,

// // //                             boxShadow:
// // //                                 "0 25px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",

// // //                             overflow: "hidden",

// // //                             border: "1px solid rgba(255,255,255,0.08)",

// // //                             backdropFilter: "blur(10px)"
// // //                         }}
// // //                     >

// // //                         <Stage
// // //                             ref={(node) => {
// // //                                 stageRef.current = node;
// // //                                 if (ref) ref.current = node;
// // //                             }}
// // //                             width={W}
// // //                             height={H}
// // //                             onMouseDown={onMouseDown}
// // //                             onMouseMove={onMouseMove}
// // //                             onMouseUp={onMouseUp}
// // //                             onMouseLeave={onMouseUp}

// // //                             onTouchStart={onMouseDown}
// // //                             onTouchMove={onMouseMove}
// // //                             onTouchEnd={onMouseUp}
// // //                             onTouchCancel={onMouseUp}
// // //                             onClick={e => {
// // //                                 if (e.target === e.target.getStage()) {
// // //                                     setSelectedId(null);
// // //                                     selectedNodeRef.current = null;

// // //                                     if (!isDrawing) {
// // //                                         setEditingBackground(false);
// // //                                     }
// // //                                 }
// // //                             }}
// // //                             onTap={e => {
// // //                                 if (e.target === e.target.getStage()) {
// // //                                     setSelectedId(null);
// // //                                     selectedNodeRef.current = null;

// // //                                     if (!isDrawing) {
// // //                                         setEditingBackground(false);
// // //                                     }
// // //                                 }
// // //                             }}

// // //                         // onMouseDown={(e) => {
// // //                         //     const clickedOnEmpty =
// // //                         //         e.target === e.target.getStage();

// // //                         //     if (clickedOnEmpty) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}

// // //                         // onTouchStart={(e) => {
// // //                         //     const clickedOnEmpty =
// // //                         //         e.target === e.target.getStage();

// // //                         //     if (clickedOnEmpty) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}
// // //                         //////////////////////////////////////////////////////////
// // //                         // onMouseDown={e => {
// // //                         //     if (e.target === e.target.getStage()) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}

// // //                         // onTouchStart={e => {
// // //                         //     if (e.target === e.target.getStage()) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}


// // //                         >

// // //                             {/* BACKGROUND */}

// // //                             <Layer listening={true}>

// // //                                 {/* default background */}
// // //                                 <Rect
// // //                                     width={W}
// // //                                     height={H}
// // //                                     fill={background?.value || "#f8fafc"}
// // //                                     listening={false}
// // //                                 />

// // //                                 {/* BACKGROUND IMAGE */}
// // //                                 {background?.type === "image" && background.image && (
// // //                                     <KonvaImage
// // //                                         image={background.image}

// // //                                         x={background.x ?? 0}
// // //                                         y={background.y ?? 0}

// // //                                         width={background.width ?? W}
// // //                                         height={background.height ?? H}

// // //                                         crop={background.crop}

// // //                                         rotation={background.rotation || 0}

// // //                                         listening={!DRAW_TOOLS.includes(tool)}

// // //                                         draggable={editingBackground}

// // //                                         onDblClick={(e) => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;

// // //                                             const node = e.target;

// // //                                             setEditingBackground(true);

// // //                                             setSelectedId("background");

// // //                                             selectedNodeRef.current = node;

// // //                                             requestAnimationFrame(() => {
// // //                                                 node.draggable(true);
// // //                                             });
// // //                                         }}

// // //                                         onDblTap={(e) => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;

// // //                                             const node = e.target;

// // //                                             setEditingBackground(true);

// // //                                             setSelectedId("background");

// // //                                             selectedNodeRef.current = node;

// // //                                             requestAnimationFrame(() => {
// // //                                                 node.draggable(true);
// // //                                             });
// // //                                         }}

// // //                                         onDragEnd={(e) => {

// // //                                             if (!editingBackground) {
// // //                                                 e.target.stopDrag();
// // //                                                 return;
// // //                                             }

// // //                                             const node = e.target;

// // //                                             const { x, y } =
// // //                                                 node.position();

// // //                                             setBackground(prev => ({
// // //                                                 ...prev,
// // //                                                 x,
// // //                                                 y
// // //                                             }));

// // //                                             node.stopDrag();
// // //                                             node.draggable(false);

// // //                                             setEditingBackground(false);

// // //                                             setSelectedId(null);

// // //                                             selectedNodeRef.current = null;

// // //                                             pushHistory();
// // //                                         }}
// // //                                     />
// // //                                 )}
// // //                             </Layer>


// // //                             {/* BLOCKS */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {blocks.map(b => {
// // //                                     const shape = getBlockShape(b);
// // //                                     if (!shape) return null;

// // //                                     return (
// // //                                         <shape.type
// // //                                             {...shape.props}
// // //                                             key={b.id}
// // //                                             draggable

// // //                                             onClick={(e) => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(b.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}
// // //                                             onTap={(e) => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(b.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onDragEnd={(e) => {
// // //                                                 const { x, y } = e.target.position();
// // //                                                 setBlocks(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === b.id ? { ...item, x, y } : item
// // //                                                     )
// // //                                                 );
// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={(e) => {
// // //                                                 const node = e.target;
// // //                                                 const scaleX = node.scaleX();
// // //                                                 const scaleY = node.scaleY();
// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 const updated = {
// // //                                                     x: node.x(),
// // //                                                     y: node.y(),
// // //                                                     width: Math.max(10, b.width * scaleX),
// // //                                                     height: Math.max(10, b.height * scaleY),
// // //                                                     rotation: node.rotation()
// // //                                                 };

// // //                                                 setBlocks(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === b.id ? { ...item, ...updated } : item
// // //                                                     )
// // //                                                 );
// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     );
// // //                                 })}
// // //                             </Layer>


// // //                             {/* IMAGES */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

// // //                                 {images.map(img => (
// // //                                     <KonvaImage
// // //                                         key={img.id}

// // //                                         x={img.x}
// // //                                         y={img.y}

// // //                                         width={img.width}
// // //                                         height={img.height}

// // //                                         rotation={img.rotation || 0}

// // //                                         image={img.image}

// // //                                         onDblClick={e => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             // Only template logo and template decorative photos
// // //                                             if (
// // //                                                 img.assetType !== "logo" &&
// // //                                                 img.assetType !== "photo"
// // //                                             ) {
// // //                                                 return;
// // //                                             }

// // //                                             e.cancelBubble = true;

// // //                                             setEditingBackground(false);

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current = e.target;

// // //                                             openImageReplacement(img.id);
// // //                                         }}

// // //                                         onDblTap={e => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             // Only template logo and template decorative photos
// // //                                             if (
// // //                                                 img.assetType !== "logo" &&
// // //                                                 img.assetType !== "photo"
// // //                                             ) {
// // //                                                 return;
// // //                                             }

// // //                                             e.cancelBubble = true;

// // //                                             setEditingBackground(false);

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current = e.target;

// // //                                             openImageReplacement(img.id);
// // //                                         }}

// // //                                         draggable={!DRAW_TOOLS.includes(tool)}

// // //                                         listening={!DRAW_TOOLS.includes(tool)}

// // //                                         onClick={e => {

// // //                                             setEditingBackground(false);

// // //                                             e.cancelBubble = true;

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current =
// // //                                                 e.target;
// // //                                         }}

// // //                                         onTap={e => {

// // //                                             setEditingBackground(false);

// // //                                             e.cancelBubble = true;

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current =
// // //                                                 e.target;
// // //                                         }}

// // //                                         onDragEnd={e => {

// // //                                             const { x, y } =
// // //                                                 e.target.position();

// // //                                             setImages(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === img.id
// // //                                                         ? {
// // //                                                             ...item,
// // //                                                             x,
// // //                                                             y
// // //                                                         }
// // //                                                         : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}

// // //                                         onTransformEnd={e => {

// // //                                             const node = e.target;

// // //                                             const scaleX =
// // //                                                 node.scaleX();

// // //                                             const scaleY =
// // //                                                 node.scaleY();

// // //                                             const newWidth =
// // //                                                 Math.max(
// // //                                                     20,
// // //                                                     node.width() *
// // //                                                     scaleX
// // //                                                 );

// // //                                             const newHeight =
// // //                                                 Math.max(
// // //                                                     20,
// // //                                                     node.height() *
// // //                                                     scaleY
// // //                                                 );

// // //                                             node.scaleX(1);
// // //                                             node.scaleY(1);

// // //                                             setImages(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === img.id
// // //                                                         ? {
// // //                                                             ...item,

// // //                                                             x: node.x(),
// // //                                                             y: node.y(),

// // //                                                             width: newWidth,
// // //                                                             height: newHeight,

// // //                                                             rotation:
// // //                                                                 node.rotation()
// // //                                                         }
// // //                                                         : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}

// // //                                     />
// // //                                 ))}

// // //                             </Layer>


// // //                             {/* =========================================================
// // //     ICONS
// // // ========================================================= */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

// // //                                 {icons.map(icon => {

// // //                                     if (!icon.image) {
// // //                                         return null;
// // //                                     }

// // //                                     return (

// // //                                         <KonvaImage
// // //                                             key={icon.id}
// // //                                             ref={node => registerNode(icon.id, node)}
// // //                                             image={icon.image}


// // //                                             x={icon.x}
// // //                                             y={icon.y}

// // //                                             width={icon.width}
// // //                                             height={icon.height}

// // //                                             rotation={
// // //                                                 icon.rotation || 0
// // //                                             }

// // //                                             draggable={
// // //                                                 !DRAW_TOOLS.includes(tool)
// // //                                             }

// // //                                             listening={
// // //                                                 !DRAW_TOOLS.includes(tool)
// // //                                             }

// // //                                             onClick={e => {

// // //                                                 if (
// // //                                                     DRAW_TOOLS.includes(
// // //                                                         tool
// // //                                                     )
// // //                                                 ) {
// // //                                                     return;
// // //                                                 }

// // //                                                 setEditingBackground(
// // //                                                     false
// // //                                                 );

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(
// // //                                                     icon.id
// // //                                                 );

// // //                                                 selectedNodeRef.current =
// // //                                                     e.target;
// // //                                             }}

// // //                                             onTap={e => {

// // //                                                 if (
// // //                                                     DRAW_TOOLS.includes(
// // //                                                         tool
// // //                                                     )
// // //                                                 ) {
// // //                                                     return;
// // //                                                 }

// // //                                                 setEditingBackground(
// // //                                                     false
// // //                                                 );

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(
// // //                                                     icon.id
// // //                                                 );

// // //                                                 selectedNodeRef.current =
// // //                                                     e.target;
// // //                                             }}

// // //                                             onDragEnd={e => {

// // //                                                 const {
// // //                                                     x,
// // //                                                     y
// // //                                                 } =
// // //                                                     e.target.position();

// // //                                                 setIcons(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === icon.id
// // //                                                             ? {
// // //                                                                 ...item,
// // //                                                                 x,
// // //                                                                 y
// // //                                                             }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={e => {

// // //                                                 const node =
// // //                                                     e.target;

// // //                                                 const scaleX =
// // //                                                     node.scaleX();

// // //                                                 const scaleY =
// // //                                                     node.scaleY();

// // //                                                 const newWidth =
// // //                                                     Math.max(
// // //                                                         20,
// // //                                                         node.width() *
// // //                                                         scaleX
// // //                                                     );

// // //                                                 const newHeight =
// // //                                                     Math.max(
// // //                                                         20,
// // //                                                         node.height() *
// // //                                                         scaleY
// // //                                                     );

// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 setIcons(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === icon.id
// // //                                                             ? {
// // //                                                                 ...item,

// // //                                                                 x: node.x(),
// // //                                                                 y: node.y(),

// // //                                                                 width:
// // //                                                                     newWidth,

// // //                                                                 height:
// // //                                                                     newHeight,

// // //                                                                 rotation:
// // //                                                                     node.rotation()
// // //                                                             }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     );
// // //                                 })}

// // //                             </Layer>


// // //                             {/* ================= DISCOUNT / SALE TAGS ================= */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {discountTags.map(tag => (

// // //                                     <Group
// // //                                         key={tag.id}
// // //                                         ref={node => registerNode(tag.id, node)}
// // //                                         x={tag.x}
// // //                                         y={tag.y}

// // //                                         scaleX={tag.width / 150}
// // //                                         scaleY={tag.height / 100}
// // //                                         rotation={tag.rotation || 0}
// // //                                         draggable={!DRAW_TOOLS.includes(tool)}
// // //                                         onClick={e => {
// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;
// // //                                             setEditingBackground(false);
// // //                                             setSelectedId(tag.id);
// // //                                             selectedNodeRef.current = e.currentTarget;
// // //                                         }}
// // //                                         onTap={e => {
// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;
// // //                                             setEditingBackground(false);
// // //                                             setSelectedId(tag.id);
// // //                                             selectedNodeRef.current = e.currentTarget;
// // //                                         }}
// // //                                         onDragEnd={e => {
// // //                                             const node = e.currentTarget;
// // //                                             const { x, y } = node.position();

// // //                                             setDiscountTags(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === tag.id ? { ...item, x, y } : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}
// // //                                         onTransformEnd={e => {
// // //                                             const node = e.currentTarget;

// // //                                             const newWidth = Math.max(35, 150 * node.scaleX());
// // //                                             const newHeight = Math.max(25, 100 * node.scaleY());

// // //                                             const updated = {
// // //                                                 x: node.x(),
// // //                                                 y: node.y(),
// // //                                                 width: newWidth,
// // //                                                 height: newHeight,
// // //                                                 rotation: node.rotation(),
// // //                                             };

// // //                                             node.scaleX(newWidth / 150);
// // //                                             node.scaleY(newHeight / 100);

// // //                                             setDiscountTags(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === tag.id
// // //                                                         ? { ...item, ...updated }
// // //                                                         : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}
// // //                                     >
// // //                                         {/* TAG SHAPE */}
// // //                                         {tag.shape === "burst" && (
// // //                                             <Star
// // //                                                 x={75}
// // //                                                 y={50}
// // //                                                 numPoints={12}
// // //                                                 innerRadius={35}
// // //                                                 outerRadius={45}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 shadowColor="#000000"
// // //                                                 shadowBlur={3}
// // //                                                 shadowOpacity={0.12}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "circle" && (
// // //                                             <Circle
// // //                                                 x={75}
// // //                                                 y={50}
// // //                                                 radius={42}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "rounded" && (
// // //                                             <Rect
// // //                                                 x={18}
// // //                                                 y={22}
// // //                                                 width={114}
// // //                                                 height={56}
// // //                                                 cornerRadius={15}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "rectangle" && (
// // //                                             <Rect
// // //                                                 x={10}
// // //                                                 y={27}
// // //                                                 width={130}
// // //                                                 height={46}
// // //                                                 cornerRadius={3}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "ribbon" && (
// // //                                             <Line
// // //                                                 points={[
// // //                                                     15, 18, 135, 18, 135, 80,
// // //                                                     115, 68, 95, 80, 75, 68,
// // //                                                     55, 80, 35, 68, 15, 80
// // //                                                 ]}
// // //                                                 closed
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 lineJoin="round"
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "bookmark" && (
// // //                                             <Line
// // //                                                 points={[42, 8, 108, 8, 108, 92, 75, 73, 42, 92]}
// // //                                                 closed
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 lineJoin="round"
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "hexagon" && (
// // //                                             <RegularPolygon
// // //                                                 x={75}
// // //                                                 y={50}
// // //                                                 sides={6}
// // //                                                 radius={43}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "ticket" && (
// // //                                             <Line
// // //                                                 points={[
// // //                                                     12, 22, 138, 22, 138, 39,
// // //                                                     127, 50, 138, 61, 138, 78,
// // //                                                     12, 78, 12, 61, 23, 50, 12, 39
// // //                                                 ]}
// // //                                                 closed
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 lineJoin="round"
// // //                                             />
// // //                                         )}

// // //                                         {/* EDITABLE TEXT */}
// // //                                         <Text
// // //                                             x={15}
// // //                                             y={30}
// // //                                             width={120}
// // //                                             height={40}
// // //                                             text={tag.text}
// // //                                             fill={tag.textColor}
// // //                                             fontSize={
// // //                                                 tag.text.length > 12
// // //                                                     ? 11
// // //                                                     : tag.text.length > 8
// // //                                                         ? 14
// // //                                                         : 18
// // //                                             }
// // //                                             fontFamily="Arial"
// // //                                             fontStyle="bold"
// // //                                             align="center"
// // //                                             verticalAlign="middle"
// // //                                             wrap="word"
// // //                                             listening={false}
// // //                                         />
// // //                                     </Group>
// // //                                 ))}
// // //                             </Layer>

// // //                             {/* ================= BORDERS ================= */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {borders.map(border => {

// // //                                     const isSelected = selectedId === border.id;

// // //                                     const dash =
// // //                                         border.style === "dashed"
// // //                                             ? [18, 10]
// // //                                             : border.style === "dotted"
// // //                                                 ? [3, 8]
// // //                                                 : undefined;

// // //                                     if (border.style === "double") {
// // //                                         return (
// // //                                             <Fragment key={border.id}>

// // //                                                 {/* OUTER BORDER */}
// // //                                                 <Rect
// // //                                                     x={border.x}
// // //                                                     y={border.y}
// // //                                                     width={border.width}
// // //                                                     height={border.height}
// // //                                                     stroke={border.stroke}
// // //                                                     strokeWidth={border.strokeWidth}
// // //                                                     cornerRadius={border.cornerRadius || 0}
// // //                                                     dash={undefined}
// // //                                                     fillEnabled={false}
// // //                                                     draggable

// // //                                                     onClick={e => {
// // //                                                         if (DRAW_TOOLS.includes(tool)) return;

// // //                                                         setEditingBackground(false);

// // //                                                         e.cancelBubble = true;

// // //                                                         setSelectedId(border.id);
// // //                                                         selectedNodeRef.current = e.target;
// // //                                                     }}

// // //                                                     onTap={e => {
// // //                                                         if (DRAW_TOOLS.includes(tool)) return;

// // //                                                         setEditingBackground(false);

// // //                                                         e.cancelBubble = true;

// // //                                                         setSelectedId(border.id);
// // //                                                         selectedNodeRef.current = e.target;
// // //                                                     }}

// // //                                                     onDragEnd={e => {
// // //                                                         const { x, y } = e.target.position();

// // //                                                         setBorders(prev =>
// // //                                                             prev.map(item =>
// // //                                                                 item.id === border.id
// // //                                                                     ? { ...item, x, y }
// // //                                                                     : item
// // //                                                             )
// // //                                                         );

// // //                                                         pushHistory();
// // //                                                     }}

// // //                                                     onTransformEnd={e => {
// // //                                                         const node = e.target;

// // //                                                         const scaleX = node.scaleX();
// // //                                                         const scaleY = node.scaleY();

// // //                                                         node.scaleX(1);
// // //                                                         node.scaleY(1);

// // //                                                         const updated = {
// // //                                                             x: node.x(),
// // //                                                             y: node.y(),
// // //                                                             width: Math.max(
// // //                                                                 20,
// // //                                                                 node.width() * scaleX
// // //                                                             ),
// // //                                                             height: Math.max(
// // //                                                                 20,
// // //                                                                 node.height() * scaleY
// // //                                                             )
// // //                                                         };

// // //                                                         setBorders(prev =>
// // //                                                             prev.map(item =>
// // //                                                                 item.id === border.id
// // //                                                                     ? { ...item, ...updated }
// // //                                                                     : item
// // //                                                             )
// // //                                                         );

// // //                                                         pushHistory();
// // //                                                     }}
// // //                                                 />

// // //                                                 {/* INNER BORDER */}
// // //                                                 <Rect
// // //                                                     x={
// // //                                                         border.x +
// // //                                                         border.strokeWidth * 3
// // //                                                     }
// // //                                                     y={
// // //                                                         border.y +
// // //                                                         border.strokeWidth * 3
// // //                                                     }
// // //                                                     width={Math.max(
// // //                                                         1,
// // //                                                         border.width -
// // //                                                         border.strokeWidth * 6
// // //                                                     )}
// // //                                                     height={Math.max(
// // //                                                         1,
// // //                                                         border.height -
// // //                                                         border.strokeWidth * 6
// // //                                                     )}
// // //                                                     stroke={border.stroke}
// // //                                                     strokeWidth={Math.max(
// // //                                                         1,
// // //                                                         border.strokeWidth / 2
// // //                                                     )}
// // //                                                     cornerRadius={Math.max(
// // //                                                         0,
// // //                                                         (border.cornerRadius || 0) -
// // //                                                         border.strokeWidth * 2
// // //                                                     )}
// // //                                                     listening={false}
// // //                                                 />

// // //                                             </Fragment>
// // //                                         );
// // //                                     }

// // //                                     return (
// // //                                         <Rect
// // //                                             key={border.id}

// // //                                             x={border.x}
// // //                                             y={border.y}

// // //                                             width={border.width}
// // //                                             height={border.height}

// // //                                             stroke={border.stroke}
// // //                                             strokeWidth={border.strokeWidth}

// // //                                             dash={dash}

// // //                                             cornerRadius={border.cornerRadius || 0}

// // //                                             fillEnabled={false}

// // //                                             draggable

// // //                                             onClick={e => {
// // //                                                 if (DRAW_TOOLS.includes(tool)) return;

// // //                                                 setEditingBackground(false);

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(border.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onTap={e => {
// // //                                                 if (DRAW_TOOLS.includes(tool)) return;

// // //                                                 setEditingBackground(false);

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(border.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onDragEnd={e => {
// // //                                                 const { x, y } = e.target.position();

// // //                                                 setBorders(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === border.id
// // //                                                             ? { ...item, x, y }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={e => {
// // //                                                 const node = e.target;

// // //                                                 const scaleX = node.scaleX();
// // //                                                 const scaleY = node.scaleY();

// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 const updated = {
// // //                                                     x: node.x(),
// // //                                                     y: node.y(),

// // //                                                     width: Math.max(
// // //                                                         20,
// // //                                                         node.width() * scaleX
// // //                                                     ),

// // //                                                     height: Math.max(
// // //                                                         20,
// // //                                                         node.height() * scaleY
// // //                                                     )
// // //                                                 };

// // //                                                 setBorders(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === border.id
// // //                                                             ? { ...item, ...updated }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     );
// // //                                 })}
// // //                             </Layer>

// // //                             {/* SHAPES */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {shapes.map(s => {

// // //                                     if (s.type === "free") {
// // //                                         return (
// // //                                             <Line
// // //                                                 key={s.id}
// // //                                                 points={s.points}
// // //                                                 stroke={s.stroke}
// // //                                                 strokeWidth={s.strokeWidth}
// // //                                                 tension={0.5}
// // //                                                 lineCap="round"
// // //                                                 lineJoin="round"
// // //                                                 globalCompositeOperation={
// // //                                                     s.tool === "eraser"
// // //                                                         ? "destination-out"
// // //                                                         : "source-over"
// // //                                                 }
// // //                                             />
// // //                                         );
// // //                                     }

// // //                                     if (s.type === "line") {
// // //                                         return renderLine(s);
// // //                                     }

// // //                                     if (s.type === "rectangle") {
// // //                                         return (
// // //                                             <Rect
// // //                                                 key={s.id}
// // //                                                 {...s}
// // //                                                 draggable

// // //                                                 onClick={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onTap={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onDragEnd={(e) => {
// // //                                                     const { x, y } = e.target.position();

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, x, y } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}

// // //                                                 onTransformEnd={(e) => {
// // //                                                     const node = e.target;

// // //                                                     const scaleX = node.scaleX();
// // //                                                     const scaleY = node.scaleY();

// // //                                                     node.scaleX(1);
// // //                                                     node.scaleY(1);

// // //                                                     const updated = {
// // //                                                         x: node.x(),
// // //                                                         y: node.y(),
// // //                                                         width: Math.max(10, node.width() * scaleX),
// // //                                                         height: Math.max(10, node.height() * scaleY),
// // //                                                         rotation: node.rotation()
// // //                                                     };

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, ...updated } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}
// // //                                             />
// // //                                         );
// // //                                     }

// // //                                     if (s.type === "circle") {
// // //                                         return (
// // //                                             <Circle
// // //                                                 key={s.id}
// // //                                                 {...s}
// // //                                                 draggable

// // //                                                 onClick={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onTap={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onDragEnd={(e) => {
// // //                                                     const { x, y } = e.target.position();

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, x, y } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}

// // //                                                 onTransformEnd={(e) => {
// // //                                                     const node = e.target;

// // //                                                     const scale = node.scaleX(); // circle uses one scale

// // //                                                     node.scaleX(1);
// // //                                                     node.scaleY(1);

// // //                                                     const updated = {
// // //                                                         x: node.x(),
// // //                                                         y: node.y(),
// // //                                                         radius: Math.max(5, s.radius * scale),
// // //                                                         rotation: node.rotation()
// // //                                                     };

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, ...updated } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}
// // //                                             />
// // //                                         );
// // //                                     }

// // //                                     return null;
// // //                                 })}
// // //                             </Layer>


// // //                             {/* TEXT */}


// // //                             {/* TEXT */}
// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {texts.map(t => (
// // //                                     <Fragment key={t.id}>
// // //                                         <Text
// // //                                             {...t}

// // //                                             // Do not give text an arbitrary 250px width.
// // //                                             // Ignore old widths that span almost the entire canvas.
// // //                                             width={
// // //                                                 Number.isFinite(Number(t.width)) &&
// // //                                                     Number(t.width) > 0 &&
// // //                                                     Number(t.width) < W * 0.85
// // //                                                     ? Number(t.width)
// // //                                                     : undefined
// // //                                             }

// // //                                             draggable
// // //                                             textDecoration={t.underline ? "underline" : ""}

// // //                                             align={
// // //                                                 ["ar"].includes(language)
// // //                                                     ? "right"
// // //                                                     : t.align || "left"
// // //                                             }

// // //                                             onClick={e => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(t.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onTap={e => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(t.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onDragEnd={e => {
// // //                                                 const { x, y } = e.target.position();

// // //                                                 setTexts(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === t.id
// // //                                                             ? { ...item, x, y }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={e => {
// // //                                                 const node = e.target;

// // //                                                 const scaleX = node.scaleX();
// // //                                                 const scaleY = node.scaleY();

// // //                                                 // Use the node's actual rendered width, not a stale
// // //                                                 // saved width that may equal the whole canvas width.
// // //                                                 const newWidth = Math.max(
// // //                                                     50,
// // //                                                     node.width() * scaleX
// // //                                                 );

// // //                                                 const newFontSize = Math.max(
// // //                                                     8,
// // //                                                     (Number(t.fontSize) || 24) * scaleY
// // //                                                 );

// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 const updated = {
// // //                                                     x: node.x(),
// // //                                                     y: node.y(),
// // //                                                     width: newWidth,
// // //                                                     fontSize: newFontSize,
// // //                                                     rotation: node.rotation()
// // //                                                 };

// // //                                                 setTexts(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === t.id
// // //                                                             ? { ...item, ...updated }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     </Fragment>
// // //                                 ))}
// // //                             </Layer>


// // //                             {draftShape && (
// // //                                 <Layer listening={false}>
// // //                                     {draftShape.type === "rectangle" && (
// // //                                         <Rect
// // //                                             {...draftShape}
// // //                                         />
// // //                                     )}

// // //                                     {draftShape.type === "circle" && (
// // //                                         <Circle
// // //                                             x={draftShape.x}
// // //                                             y={draftShape.y}
// // //                                             radius={draftShape.radius}
// // //                                             stroke={draftShape.stroke}
// // //                                             strokeWidth={draftShape.strokeWidth}
// // //                                         />
// // //                                     )}
// // //                                 </Layer>
// // //                             )}

// // //                             {/* TRANSFORMER: keep this layer mounted at all times */}
// // //                             <Layer>
// // //                                 <Transformer
// // //                                     ref={trRef}
// // //                                     rotateEnabled={true}
// // //                                     keepRatio={
// // //                                         selectedElement?.type === "icon" ||
// // //                                         selectedElement?.type === "discountTag"
// // //                                     }
// // //                                     centeredScaling={false}
// // //                                     enabledAnchors={[
// // //                                         "top-left",
// // //                                         "top-center",
// // //                                         "top-right",
// // //                                         "middle-left",
// // //                                         "middle-right",
// // //                                         "bottom-left",
// // //                                         "bottom-center",
// // //                                         "bottom-right"
// // //                                     ]}
// // //                                     borderStroke="#0ea5e9"
// // //                                     borderStrokeWidth={2}
// // //                                     anchorSize={12}
// // //                                     anchorStroke="#0ea5e9"
// // //                                     anchorFill="#ffffff"
// // //                                     anchorStrokeWidth={2}
// // //                                     padding={0}
// // //                                 />
// // //                             </Layer>

// // //                         </Stage>

// // //                     </div>
// // //                 </div>
// // //                 {showWordArtLibrary && (
// // //                     <WordArtPicker
// // //                         onClose={() => setShowWordArtLibrary(false)}
// // //                         onApply={handleApplyWordArt}
// // //                     />
// // //                 )}
// // //             </div>
// // //         </div>

// // //     );
// // // });

// // // export default Canvas;












// // // import {
// // //     Stage,
// // //     Layer,
// // //     Rect,
// // //     Text,
// // //     Image as KonvaImage,
// // //     Line,
// // //     Circle,
// // //     Transformer,
// // //     RegularPolygon,
// // //     Group,
// // //     Star
// // // } from "react-konva";
// // // import { useRef, useState, useEffect, forwardRef, Fragment } from "react";
// // // import FloatingToolbar from "./FloatinngToolbar";
// // // import WordArtPicker from "../components/WordArtPicker";
// // // const CURSORS = {
// // //     brush: "crosshair",
// // //     line: "crosshair",
// // //     rectangle: "crosshair",
// // //     circle: "crosshair",
// // //     eraser: "crosshair",
// // //     select: "default",
// // //     move: "move",
// // //     text: "text"
// // // };

// // // const DRAW_TOOLS = ["brush", "eraser", "line", "rectangle", "circle"];


// // // const createId = () => {
// // //     if (typeof crypto !== "undefined" && crypto.randomUUID) {
// // //         return crypto.randomUUID();
// // //     }

// // //     return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
// // // };

// // // /* ================= BLOCK SHAPE GENERATOR ================= */

// // // const getBlockShape = (b) => {

// // //     const w = b.width;
// // //     const h = b.height;

// // //     if (b.shape === "rectangle" || !b.shape) {
// // //         return <Rect key={b.id} {...b} />;
// // //     }

// // //     if (b.shape === "rhombus") {
// // //         const points = [
// // //             w / 2, 0,
// // //             w, h / 2,
// // //             w / 2, h,
// // //             0, h / 2
// // //         ];

// // //         return (
// // //             <Line
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 points={points}
// // //                 closed
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "parallelogram") {
// // //         const offset = w * 0.25;

// // //         const points = [
// // //             offset, 0,
// // //             w, 0,
// // //             w - offset, h,
// // //             0, h
// // //         ];

// // //         return (
// // //             <Line
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 points={points}
// // //                 closed
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "trapezoid") {

// // //         const top = w * 0.6;
// // //         const offset = (w - top) / 2;

// // //         const points = [
// // //             offset, 0,
// // //             offset + top, 0,
// // //             w, h,
// // //             0, h
// // //         ];

// // //         return (
// // //             <Line
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 points={points}
// // //                 closed
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }
// // //     if (b.shape === "triangle") {
// // //         return (
// // //             <RegularPolygon
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 sides={3}
// // //                 radius={Math.min(b.width, b.height) / 2}
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "circle") {
// // //         return (
// // //             <Circle
// // //                 key={b.id}
// // //                 x={b.x}
// // //                 y={b.y}
// // //                 radius={Math.min(b.width, b.height) / 2}
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     if (b.shape === "heptagon") {
// // //         return (
// // //             <RegularPolygon
// // //                 key={b.id}
// // //                 x={b.x + w / 2}
// // //                 y={b.y + h / 2}
// // //                 sides={7}
// // //                 radius={Math.min(w, h) / 2}
// // //                 fill={b.fill}
// // //                 rotation={b.rotation}
// // //                 draggable
// // //             />
// // //         );
// // //     }

// // //     return null;
// // // };


// // // const Canvas = forwardRef(function Canvas(
// // //     {
// // //         adSize,
// // //         onReset,
// // //         texts,
// // //         setTexts,
// // //         images,
// // //         setImages,
// // //         icons = [],
// // //         setIcons,
// // //         onIconColorChange,
// // //         onOpenClipArt,
// // //         onReplaceImage,
// // //         onOpenDiscountTags,
// // //         onOpenAIAssistance,
// // //         hideCanvasToolbar = false,
// // //         discountTags = [],
// // //         setDiscountTags,
// // //         shapes,
// // //         setShapes,
// // //         blocks,
// // //         setBlocks,
// // //         borders = [],
// // //         setBorders,

// // //         background,
// // //         selectedId,
// // //         setSelectedId,
// // //         tool,
// // //         setTool,
// // //         lineType,
// // //         setLineType,
// // //         strokeColor,
// // //         setStrokeColor,
// // //         strokeWidth,
// // //         setStrokeWidth,
// // //         pushHistory,
// // //         language,
// // //         setActiveSection,
// // //         activeSection,
// // //         editingBackground,
// // //         setEditingBackground,
// // //     },
// // //     ref
// // // ) {
// // //     const sizes = {
// // //         square: [420, 420],
// // //         portrait: [420, 520],
// // //         landscape: [620, 420],

// // //         visitingCard: [320, 180],
// // //         businessCard: [350, 200],

// // //         bookmark: [220, 520],

// // //         instagramPost: [420, 420],
// // //         instagramStory: [320, 570],

// // //         facebookCover: [620, 240]
// // //     };

// // //     const [W, H] = sizes[adSize] || [420, 420];
// // //     const stageRef = useRef(null);
// // //     const trRef = useRef(null);
// // //     const selectedNodeRef = useRef(null);
// // //     const containerRef = useRef(null);
// // //     const canvasWrapperRef = useRef(null);

// // //     const imageInputRef = useRef(null);
// // //     const replaceImageIdRef = useRef(null);

// // //     // Background drag tracking
// // //     const backgroundDraggingRef = useRef(false);

// // //     // Drawing state refs
// // //     const isDrawingRef = useRef(false);

// // //     const [isDrawing, setIsDrawing] = useState(false);
// // //     const [draftShape, setDraftShape] = useState(null);

// // //     const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
// // //     const [isMobileToolbarOpen, setIsMobileToolbarOpen] = useState(false);

// // //     useEffect(() => {
// // //         if (hideCanvasToolbar) {
// // //             setIsMobileToolbarOpen(false);
// // //         }
// // //     }, [hideCanvasToolbar]);
// // //     const [showWordArtLibrary, setShowWordArtLibrary] = useState(false);

// // //     /* ================= AUTO SCALE FOR MOBILE ================= */

// // //     const [autoScale, setAutoScale] = useState(1);

// // //     useEffect(() => {
// // //         const resize = () => {
// // //             if (!containerRef.current) return;

// // //             const containerWidth = containerRef.current.offsetWidth;
// // //             const scale = containerWidth / W;

// // //             if (scale < 1) setAutoScale(scale);
// // //             else setAutoScale(1);
// // //         };

// // //         resize();
// // //         window.addEventListener("resize", resize);

// // //         return () => window.removeEventListener("resize", resize);
// // //     }, [W]);


// // //     /* ================= ZOOM CONTROLLER ================= */

// // //     // const zoomLevels = [25, 50, 75, 100, 125, 150, 200, 300];
// // //     // // const [zoomPercent, setZoomPercent] = useState(100);
// // //     // const isMobileDevice =
// // //     //     typeof window !== "undefined" &&
// // //     //     window.matchMedia("(max-width: 768px)").matches;

// // //     // const [zoomPercent, setZoomPercent] = useState(
// // //     //     isMobileDevice ? 75 : 100
// // //     // );

// // //     // const zoom = zoomPercent / 100;

// // //     // const increaseZoom = () => {
// // //     //     const next = zoomLevels.find(z => z > zoomPercent);
// // //     //     if (next) setZoomPercent(next);
// // //     // };

// // //     // const decreaseZoom = () => {
// // //     //     const prev = [...zoomLevels].reverse().find(z => z < zoomPercent);
// // //     //     if (prev) setZoomPercent(prev);
// // //     // };

// // //     // const finalScale = zoom * autoScale;
// // //     /* ================= ZOOM CONTROLLER ================= */

// // //     const zoomLevels = [25, 50, 75, 100, 125, 150, 200, 300];

// // //     const getIsMobile = () =>
// // //         typeof window !== "undefined" &&
// // //         window.matchMedia("(max-width: 768px)").matches;

// // //     const [zoomPercent, setZoomPercent] = useState(
// // //         getIsMobile() ? 75 : 100
// // //     );

// // //     /* Keep zoom synced with mobile/desktop breakpoint */
// // //     useEffect(() => {
// // //         const handleViewportChange = () => {
// // //             const mobile = getIsMobile();

// // //             setZoomPercent(prev => {
// // //                 // Only change the automatic starting zoom
// // //                 // when crossing between desktop and mobile.
// // //                 if (mobile && prev === 100) return 75;
// // //                 if (!mobile && prev === 75) return 100;

// // //                 return prev;
// // //             });
// // //         };

// // //         window.addEventListener("resize", handleViewportChange);

// // //         return () => {
// // //             window.removeEventListener("resize", handleViewportChange);
// // //         };
// // //     }, []);

// // //     const zoom = zoomPercent / 100;

// // //     const increaseZoom = () => {
// // //         const next = zoomLevels.find(z => z > zoomPercent);
// // //         if (next) setZoomPercent(next);
// // //     };

// // //     const decreaseZoom = () => {
// // //         const prev = [...zoomLevels].reverse().find(z => z < zoomPercent);
// // //         if (prev) setZoomPercent(prev);
// // //     };

// // //     const finalScale = zoom * autoScale;

// // //     /* ================= CURSOR FIX ================= */
// // //     useEffect(() => {
// // //         const stage = stageRef.current;
// // //         if (!stage) return;

// // //         const container = stage.container();

// // //         if (editingBackground) {
// // //             container.style.cursor = "grabbing";
// // //             return;
// // //         }

// // //         if (isDrawing) {
// // //             container.style.cursor = "crosshair";
// // //             return;
// // //         }

// // //         if (tool === "text") {
// // //             container.style.cursor = "text";
// // //             return;
// // //         }

// // //         if (DRAW_TOOLS.includes(tool)) {
// // //             container.style.cursor = "crosshair";
// // //             return;
// // //         }

// // //         if (tool === "move") {
// // //             container.style.cursor = "move";
// // //             return;
// // //         }

// // //         container.style.cursor = "default";
// // //     }, [tool, isDrawing, editingBackground]);

// // //     /* ================= BACKGROUND DRAG END ================= */

// // //     const finishBackgroundEditing = () => {
// // //         const node = selectedNodeRef.current;
// // //         const wasDragging = backgroundDraggingRef.current;

// // //         // Stop Konva dragging immediately
// // //         if (node) {
// // //             const { x, y } = node.position();

// // //             if (wasDragging) {
// // //                 setBackground(prev => ({
// // //                     ...prev,
// // //                     x,
// // //                     y
// // //                 }));
// // //             }

// // //             node.stopDrag();
// // //             node.draggable(false);
// // //         }

// // //         backgroundDraggingRef.current = false;

// // //         // Completely exit background editing
// // //         setEditingBackground(false);
// // //         setSelectedId(null);
// // //         selectedNodeRef.current = null;

// // //         // Remove transformer if anything is attached
// // //         if (trRef.current) {
// // //             trRef.current.nodes([]);
// // //             trRef.current.getLayer()?.batchDraw();
// // //         }

// // //         if (wasDragging) {
// // //             pushHistory();
// // //         }
// // //     };

// // //     /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

// // //     const openImageReplacement = imageId => {

// // //         if (!imageId) return;

// // //         replaceImageIdRef.current = imageId;

// // //         if (imageInputRef.current) {
// // //             imageInputRef.current.value = "";
// // //             imageInputRef.current.click();
// // //         }
// // //     };

// // //     const handleReplacementFile = e => {

// // //         const file = e.target.files?.[0];

// // //         const imageId = replaceImageIdRef.current;

// // //         if (!file || !imageId) {
// // //             replaceImageIdRef.current = null;
// // //             return;
// // //         }

// // //         if (onReplaceImage) {
// // //             onReplaceImage(imageId, file);
// // //         }

// // //         replaceImageIdRef.current = null;

// // //         e.target.value = "";
// // //     };

// // //     useEffect(() => {
// // //         const handleGlobalPointerUp = () => {
// // //             if (backgroundDraggingRef.current) {
// // //                 finishBackgroundEditing();
// // //             }
// // //         };

// // //         window.addEventListener("pointerup", handleGlobalPointerUp);
// // //         window.addEventListener("mouseup", handleGlobalPointerUp);
// // //         window.addEventListener("touchend", handleGlobalPointerUp);
// // //         window.addEventListener("touchcancel", handleGlobalPointerUp);

// // //         return () => {
// // //             window.removeEventListener("pointerup", handleGlobalPointerUp);
// // //             window.removeEventListener("mouseup", handleGlobalPointerUp);
// // //             window.removeEventListener("touchend", handleGlobalPointerUp);
// // //             window.removeEventListener("touchcancel", handleGlobalPointerUp);
// // //         };
// // //     }, []);
// // //     /* ================= TRANSFORMER ================= */
// // //     // useEffect(() => {
// // //     //     if (!trRef.current) return;

// // //     //     const transformer = trRef.current;

// // //     //     if (
// // //     //         selectedId === null ||
// // //     //         selectedId === "background" ||
// // //     //         !selectedNodeRef.current
// // //     //     ) {
// // //     //         transformer.nodes([]);
// // //     //         transformer.getLayer()?.batchDraw();
// // //     //         return;
// // //     //     }

// // //     //     transformer.nodes([selectedNodeRef.current]);
// // //     //     transformer.getLayer()?.batchDraw();
// // //     // }, [selectedId, activeSection, tool]);


// // //     useEffect(() => {
// // //         const transformer = trRef.current;
// // //         if (!transformer) return;

// // //         if (
// // //             selectedId == null ||
// // //             selectedId === "background" ||
// // //             DRAW_TOOLS.includes(tool)
// // //         ) {
// // //             transformer.nodes([]);
// // //             transformer.getLayer()?.batchDraw();
// // //             return;
// // //         }

// // //         // Prefer the newly registered node (important for newly added icons/tags).
// // //         // Fall back to selectedNodeRef to preserve existing element selection.
// // //         const node =
// // //             nodeRegistryRef.current.get(String(selectedId)) ||
// // //             selectedNodeRef.current;

// // //         if (
// // //             !node ||
// // //             !node.getStage() ||
// // //             (node.id() && String(node.id()) !== String(selectedId))
// // //         ) {
// // //             transformer.nodes([]);
// // //             transformer.getLayer()?.batchDraw();
// // //             return;
// // //         }

// // //         selectedNodeRef.current = node;
// // //         transformer.nodes([node]);
// // //         transformer.forceUpdate();
// // //         transformer.getLayer()?.batchDraw();
// // //     }, [
// // //         selectedId,
// // //         activeSection,
// // //         tool,
// // //         texts,
// // //         images,
// // //         icons,
// // //         shapes,
// // //         blocks,
// // //         borders,
// // //         discountTags
// // //     ]);


// // //     // /* ================= toolbar ================= */
// // //     useEffect(() => {
// // //         if (!selectedNodeRef.current || !stageRef.current) return;

// // //         const node = selectedNodeRef.current;
// // //         const stage = stageRef.current;

// // //         const updatePosition = () => {
// // //             const box = node.getClientRect(); // ✅ absolute canvas coords
// // //             const stageBox = stage.container().getBoundingClientRect(); // ✅ DOM position

// // //             setToolbarPos({
// // //                 x: stageBox.left + box.x + box.width / 2,
// // //                 y: stageBox.top + box.y - 10
// // //             });
// // //         };

// // //         updatePosition();

// // //         node.on("dragmove transform", updatePosition);

// // //         return () => {
// // //             node.off("dragmove transform", updatePosition);
// // //         };

// // //     }, [selectedId, zoomPercent, autoScale]);

// // //     useEffect(() => {
// // //         const handleOutsidePointer = (e) => {
// // //             if (!editingBackground) return;

// // //             const stage = stageRef.current;

// // //             if (!stage) return;

// // //             const rect = stage.container().getBoundingClientRect();

// // //             const insideStage =
// // //                 e.clientX >= rect.left &&
// // //                 e.clientX <= rect.right &&
// // //                 e.clientY >= rect.top &&
// // //                 e.clientY <= rect.bottom;

// // //             // Click/pointer outside the actual canvas
// // //             if (!insideStage) {
// // //                 finishBackgroundEditing();
// // //             }
// // //         };

// // //         document.addEventListener("pointerdown", handleOutsidePointer);

// // //         return () => {
// // //             document.removeEventListener(
// // //                 "pointerdown",
// // //                 handleOutsidePointer
// // //             );
// // //         };
// // //     }, [editingBackground]);

// // //     /*////////////////////////////////*/

// // //     const handleApplyWordArt = (wordArt) => {
// // //         const selectedText = texts?.find(
// // //             (item) => String(item.id) === String(selectedId) &&
// // //                 (item.type === "text" || item.text !== undefined)
// // //         );

// // //         if (!selectedText) {
// // //             alert("Please select a text object on the canvas first.");
// // //             return;
// // //         }

// // //         setTexts((previousTexts) =>
// // //             previousTexts.map((item) => {
// // //                 if (String(item.id) !== String(selectedId)) {
// // //                     return item;
// // //                 }

// // //                 return {
// // //                     ...item,
// // //                     ...wordArt.style,

// // //                     // Preserve the user's existing wording and placement.
// // //                     text: item.text,
// // //                     x: item.x,
// // //                     y: item.y,
// // //                     width: item.width,
// // //                     rotation: item.rotation ?? 0,
// // //                     id: item.id,
// // //                     type: item.type,
// // //                 };
// // //             })
// // //         );

// // //         setShowWordArtLibrary(false);
// // //     };

// // //     /* ================= DRAWING ================= */
// // //     const onMouseDown = e => {
// // //         if (!DRAW_TOOLS.includes(tool)) return;

// // //         // Never allow background editing while drawing
// // //         if (editingBackground) {
// // //             finishBackgroundEditing();
// // //             return;
// // //         }

// // //         const stage = stageRef.current;
// // //         if (!stage) return;

// // //         // Drawing starts only from empty canvas
// // //         if (e.target !== stage) return;

// // //         const pos = stage.getPointerPosition();
// // //         if (!pos) return;

// // //         setIsDrawing(true);
// // //         isDrawingRef.current = true;

// // //         const id = createId();

// // //         if (tool === "brush" || tool === "eraser") {
// // //             setShapes(s => [
// // //                 ...s,
// // //                 {
// // //                     id,
// // //                     type: "free",
// // //                     tool,
// // //                     points: [pos.x, pos.y],
// // //                     stroke: strokeColor,
// // //                     strokeWidth
// // //                 }
// // //             ]);
// // //             return;
// // //         }

// // //         if (tool === "line") {
// // //             setShapes(s => [
// // //                 ...s,
// // //                 {
// // //                     id,
// // //                     type: "line",
// // //                     lineType: lineType || "thin",
// // //                     points: [pos.x, pos.y, pos.x, pos.y],
// // //                     stroke: strokeColor,
// // //                     strokeWidth
// // //                 }
// // //             ]);
// // //             return;
// // //         }

// // //         if (tool === "rectangle") {
// // //             setDraftShape({
// // //                 id,
// // //                 type: "rectangle",
// // //                 x: pos.x,
// // //                 y: pos.y,
// // //                 width: 0,
// // //                 height: 0,
// // //                 stroke: strokeColor,
// // //                 strokeWidth
// // //             });
// // //             return;
// // //         }

// // //         if (tool === "circle") {
// // //             setDraftShape({
// // //                 id,
// // //                 type: "circle",
// // //                 x: pos.x,
// // //                 y: pos.y,
// // //                 radius: 0,
// // //                 stroke: strokeColor,
// // //                 strokeWidth
// // //             });
// // //         }
// // //     };

// // //     const onMouseMove = () => {
// // //         if (!isDrawing) return;

// // //         const stage = stageRef.current;
// // //         if (!stage) return;

// // //         const pos = stage.getPointerPosition();
// // //         if (!pos) return;

// // //         if (tool === "brush" || tool === "eraser") {
// // //             setShapes(s => {
// // //                 if (!s.length) return s;

// // //                 const last = { ...s[s.length - 1] };

// // //                 last.points = [
// // //                     ...last.points,
// // //                     pos.x,
// // //                     pos.y
// // //                 ];

// // //                 return [
// // //                     ...s.slice(0, -1),
// // //                     last
// // //                 ];
// // //             });

// // //             return;
// // //         }

// // //         if (tool === "line") {
// // //             setShapes(s => {
// // //                 if (!s.length) return s;

// // //                 const last = { ...s[s.length - 1] };

// // //                 last.points = [
// // //                     last.points[0],
// // //                     last.points[1],
// // //                     pos.x,
// // //                     pos.y
// // //                 ];

// // //                 return [
// // //                     ...s.slice(0, -1),
// // //                     last
// // //                 ];
// // //             });

// // //             return;
// // //         }

// // //         if (tool === "rectangle") {
// // //             setDraftShape(d => {
// // //                 if (!d) return d;

// // //                 return {
// // //                     ...d,
// // //                     width: pos.x - d.x,
// // //                     height: pos.y - d.y
// // //                 };
// // //             });

// // //             return;
// // //         }

// // //         if (tool === "circle") {
// // //             setDraftShape(d => {
// // //                 if (!d) return d;

// // //                 const dx = pos.x - d.x;
// // //                 const dy = pos.y - d.y;

// // //                 return {
// // //                     ...d,
// // //                     radius: Math.sqrt(
// // //                         dx * dx + dy * dy
// // //                     )
// // //                 };
// // //             });
// // //         }
// // //     };

// // //     const onMouseUp = () => {
// // //         if (!isDrawingRef.current) return;

// // //         isDrawingRef.current = false;
// // //         setIsDrawing(false);

// // //         setDraftShape(currentDraft => {
// // //             if (currentDraft) {
// // //                 setShapes(prev => [
// // //                     ...prev,
// // //                     currentDraft
// // //                 ]);
// // //             }

// // //             return null;
// // //         });

// // //         // ONE DRAW = ONE ACTION
// // //         setTool("select");

// // //         pushHistory();
// // //     };
// // //     // //     /* ---------------- LINE TYPES FIX ---------------- */
// // //     const renderLine = s => {
// // //         const [x1, y1, x2, y2] = s.points;

// // //         if (s.lineType === "thin")
// // //             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth} lineCap="round" />;

// // //         if (s.lineType === "thick")
// // //             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth * 2} lineCap="round" />;

// // //         const segments = 20;
// // //         const lines = [];
// // //         for (let i = 0; i < segments; i++) {
// // //             const t1 = i / segments;
// // //             const t2 = (i + 1) / segments;
// // //             const sx = x1 + (x2 - x1) * t1;
// // //             const sy = y1 + (y2 - y1) * t1;
// // //             const ex = x1 + (x2 - x1) * t2;
// // //             const ey = y1 + (y2 - y1) * t2;

// // //             let width = s.strokeWidth;

// // //             if (s.lineType === "thinToThick")
// // //                 width = s.strokeWidth * (1 + t1);

// // //             if (s.lineType === "thickToThin")
// // //                 width = s.strokeWidth * (2 - t1);
// // //             if (s.lineType === "thickCenter") {
// // //                 const mid = Math.abs(0.5 - t1);
// // //                 width = s.strokeWidth * (2 - mid * 2);
// // //             }

// // //             lines.push(
// // //                 <Line
// // //                     key={`${s.id}-${i}`}
// // //                     points={[sx, sy, ex, ey]}
// // //                     stroke={s.stroke}
// // //                     strokeWidth={width}
// // //                     lineCap="round"
// // //                 />
// // //             );
// // //         }

// // //         return lines;
// // //     };

// // //     /* ================= SELECTED ELEMENT ================= */

// // //     const selectedElement =
// // //         texts.find(t => t.id === selectedId) ||
// // //         images.find(i => i.id === selectedId) ||
// // //         icons.find(i => i.id === selectedId) ||
// // //         shapes.find(s => s.id === selectedId) ||
// // //         blocks.find(b => b.id === selectedId) ||
// // //         discountTags.find(t => t.id === selectedId) ||
// // //         borders.find(b => b.id === selectedId);


// // //     /* ================= DELETE FUNCTION ================= */

// // //     const deleteElement = () => {
// // //         if (!selectedId) return;

// // //         setTexts(prev => prev.filter(t => t.id !== selectedId));
// // //         setImages(prev => prev.filter(i => i.id !== selectedId));
// // //         if (setIcons) {
// // //             setIcons(prev =>
// // //                 prev.filter(i => i.id !== selectedId)
// // //             );
// // //         }
// // //         setShapes(prev => prev.filter(s => s.id !== selectedId));
// // //         setBlocks(prev => prev.filter(b => b.id !== selectedId));
// // //         setBorders(prev => prev.filter(b => b.id !== selectedId));
// // //         setDiscountTags(prev => prev.filter(t => t.id !== selectedId));

// // //         setSelectedId(null);
// // //         selectedNodeRef.current = null;

// // //         pushHistory();
// // //     };



// // //     return (
// // //         <div
// // //             ref={containerRef}
// // //             style={{
// // //                 flex: 1,
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //                 position: "relative",
// // //                 overflow: "hidden",
// // //                 background:
// // //                     "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
// // //             }}
// // //         >

// // //             <input
// // //                 ref={imageInputRef}
// // //                 type="file"
// // //                 accept="image/*"
// // //                 style={{ display: "none" }}
// // //                 onChange={handleReplacementFile}
// // //             />


// // //             {/* RESPONSIVE TOOLBAR SHELL */}
// // //             <div
// // //                 className="adstudio-toolbar-shell"
// // //                 style={{
// // //                     display: hideCanvasToolbar ? "none" : "flex",
// // //                     position: "absolute",
// // //                     top: 12,
// // //                     left: "50%",
// // //                     transform: "translateX(-50%)",
// // //                     width: "max-content",
// // //                     maxWidth: "calc(100% - 24px)",
// // //                     justifyContent: "center",
// // //                     alignItems: "center",
// // //                     zIndex: 30,
// // //                     boxSizing: "border-box",
// // //                 }}
// // //             >
// // //                 {/* MOBILE TOGGLE BUTTON */}
// // //                 <button
// // //                     type="button"
// // //                     className="adstudio-toolbar-toggle"
// // //                     onClick={() => setIsMobileToolbarOpen((previous) => !previous)}
// // //                     aria-label={isMobileToolbarOpen ? "Hide toolbar" : "Show toolbar"}
// // //                     aria-expanded={isMobileToolbarOpen}
// // //                     title={isMobileToolbarOpen ? "Hide tools" : "Show tools"}
// // //                 >
// // //                     <span className={isMobileToolbarOpen ? "toolbar-toggle-icon is-open" : "toolbar-toggle-icon"}>
// // //                         {isMobileToolbarOpen ? "✕" : "☰"}
// // //                     </span>
// // //                     <span className="toolbar-toggle-label">
// // //                         {isMobileToolbarOpen ? "Hide tools" : "Tools"}
// // //                     </span>
// // //                 </button>

// // //                 {/* EXISTING TOOLBAR */}
// // //                 <div
// // //                     className={`adstudio-canvas-toolbar ${isMobileToolbarOpen
// // //                         ? "adstudio-toolbar-menu-open"
// // //                         : "adstudio-toolbar-menu-closed"
// // //                         }`}
// // //                 >
// // //                     {/* KEEP YOUR EXISTING FIVE BUTTONS HERE:
// // //         AI Assistance, Backgrounds, Icons, Reset, Sale Tags.
// // //         Do not change their onClick handlers. */}

// // //                     {/* AI ASSISTANCE */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-ai-button"
// // //                         onClick={() => {
// // //                             if (onOpenAIAssistance) {
// // //                                 onOpenAIAssistance();
// // //                             } else {
// // //                                 window.dispatchEvent(
// // //                                     new CustomEvent("adstudio-open-ai-assistance")
// // //                                 );
// // //                             }
// // //                         }}
// // //                         title="AI Assistance"
// // //                         data-tippy-content="AI Assistance"
// // //                         aria-label="Open AI Assistance"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ✦
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             AI Assistance
// // //                         </span>
// // //                         <span className="adstudio-beta-label">
// // //                             Beta
// // //                         </span>
// // //                     </button>

// // //                     {/* BACKGROUNDS */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-background-button"
// // //                         onClick={() => onOpenClipArt?.()}
// // //                         title="Backgrounds"
// // //                         data-tippy-content="Backgrounds"
// // //                         aria-label="Open Backgrounds Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ▧
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Backgrounds
// // //                         </span>
// // //                     </button>


// // //                     {/* WORD ART */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-sale-button"
// // //                         onClick={() => setShowWordArtLibrary(true)}
// // //                         title="Word Art"
// // //                         data-tippy-content="Word Art"
// // //                         aria-label="Open Word Art Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             Aa
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Word Art
// // //                         </span>
// // //                     </button>


// // //                     {/* ICONS */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-icons-button"
// // //                         onClick={() => {
// // //                             setSelectedId(null);
// // //                             selectedNodeRef.current = null;
// // //                             setEditingBackground(false);

// // //                             if (trRef.current) {
// // //                                 trRef.current.nodes([]);
// // //                                 trRef.current.getLayer()?.batchDraw();
// // //                             }

// // //                             window.dispatchEvent(
// // //                                 new CustomEvent("adstudio-open-icon-picker")
// // //                             );
// // //                         }}
// // //                         title="Icons"
// // //                         data-tippy-content="Icons"
// // //                         aria-label="Open Icon Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ✥
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Icons
// // //                         </span>
// // //                     </button>

// // //                     {/* RESET */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-reset-button"
// // //                         onClick={onReset}
// // //                         title="Reset Canvas"
// // //                         data-tippy-content="Reset Canvas"
// // //                         aria-label="Reset Canvas"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             ↻
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Reset
// // //                         </span>
// // //                     </button>

// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-sale-button"
// // //                         onClick={() => setShowWordArtLibrary(true)}
// // //                         title="Open Word Art library"
// // //                         aria-label="Open Word Art library"
// // //                     >
// // //                         <span aria-hidden="true">Aa</span>
// // //                         <span>Word Art</span>
// // //                     </button>

// // //                     {/* DISCOUNT / SALE TAGS */}
// // //                     <button
// // //                         type="button"
// // //                         className="adstudio-tool-button adstudio-sale-button"
// // //                         onClick={() => {
// // //                             setSelectedId(null);
// // //                             selectedNodeRef.current = null;
// // //                             setEditingBackground(false);

// // //                             if (trRef.current) {
// // //                                 trRef.current.nodes([]);
// // //                                 trRef.current.getLayer()?.batchDraw();
// // //                             }

// // //                             onOpenDiscountTags?.();
// // //                         }}
// // //                         title="Sale Tags — Discounts and Special Offers"
// // //                         data-tippy-content="Sale Tags"
// // //                         aria-label="Open Sale Tags Library"
// // //                     >
// // //                         <span className="adstudio-tool-icon" aria-hidden="true">
// // //                             🏷
// // //                         </span>
// // //                         <span className="adstudio-tool-label">
// // //                             Sale Tags
// // //                         </span>
// // //                     </button>

// // //                 </div>


// // //             </div>




// // //             {/* ================= END RESPONSIVE CANVAS TOOLBAR ================= */}


// // //             {/* ZOOM CONTROLLER */}

// // //             <div
// // //                 style={{
// // //                     position: "absolute",
// // //                     bottom: 20,
// // //                     right: 25,
// // //                     display: "flex",
// // //                     alignItems: "center",
// // //                     gap: 10,
// // //                     background: "#ffffff",
// // //                     padding: "8px 12px",
// // //                     borderRadius: 10,
// // //                     boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
// // //                     zIndex: 20
// // //                 }}
// // //             >

// // //                 <button
// // //                     onClick={decreaseZoom}
// // //                     style={{
// // //                         fontSize: 18,
// // //                         width: 28,
// // //                         height: 28,
// // //                         borderRadius: 6,
// // //                         border: "1px solid #cbd5e1",
// // //                         background: "#fff"
// // //                     }}
// // //                 >
// // //                     −
// // //                 </button>

// // //                 <input
// // //                     type="range"
// // //                     min="50"
// // //                     max="300"
// // //                     step="25"
// // //                     value={zoomPercent}
// // //                     onChange={e => setZoomPercent(Number(e.target.value))}
// // //                     style={{ width: 100 }}
// // //                 />

// // //                 <button
// // //                     onClick={increaseZoom}
// // //                     style={{
// // //                         fontSize: 18,
// // //                         width: 28,
// // //                         height: 28,
// // //                         borderRadius: 6,
// // //                         border: "1px solid #cbd5e1",
// // //                         background: "#fff"
// // //                     }}
// // //                 >
// // //                     +
// // //                 </button>

// // //                 <select
// // //                     value={zoomPercent}
// // //                     onChange={e => setZoomPercent(Number(e.target.value))}
// // //                     style={{
// // //                         border: "1px solid #cbd5e1",
// // //                         borderRadius: 6,
// // //                         padding: "2px 6px"
// // //                     }}
// // //                 >
// // //                     {zoomLevels.map(z => (
// // //                         <option key={z} value={z}>{z}%</option>
// // //                     ))}
// // //                 </select>

// // //             </div>


// // //             {/* =========================================================
// // //     ICON COLOR CONTROL
// // // ========================================================= */}

// // //             {selectedElement?.type === "icon" && (
// // //                 <div
// // //                     style={{
// // //                         position: "fixed",

// // //                         left:
// // //                             toolbarPos.x,

// // //                         top:
// // //                             toolbarPos.y + 38,

// // //                         transform:
// // //                             "translateX(-50%)",

// // //                         zIndex: 100,

// // //                         display: "flex",

// // //                         alignItems: "center",

// // //                         gap: 8,

// // //                         padding:
// // //                             "7px 10px",

// // //                         borderRadius: 10,

// // //                         background:
// // //                             "#ffffff",

// // //                         border:
// // //                             "1px solid #e2e8f0",

// // //                         boxShadow:
// // //                             "0 10px 30px rgba(0,0,0,0.16)"
// // //                     }}
// // //                 >

// // //                     <span
// // //                         style={{
// // //                             fontSize: 11,
// // //                             fontWeight: 600,
// // //                             color: "#475569"
// // //                         }}
// // //                     >
// // //                         Color
// // //                     </span>

// // //                     <input
// // //                         type="color"
// // //                         value={
// // //                             selectedElement.color ||
// // //                             "#0b1f33"
// // //                         }
// // //                         onChange={e => {

// // //                             if (
// // //                                 onIconColorChange
// // //                             ) {
// // //                                 onIconColorChange(
// // //                                     selectedElement.id,
// // //                                     e.target.value
// // //                                 );
// // //                             }
// // //                         }}
// // //                         style={{
// // //                             width: 30,
// // //                             height: 30,

// // //                             padding: 0,

// // //                             border: 0,

// // //                             background:
// // //                                 "transparent",

// // //                             cursor: "pointer"
// // //                         }}
// // //                     />

// // //                 </div>
// // //             )}

// // //             {/* ================= DISCOUNT TAG EDITOR ================= */}

// // //             {selectedElement?.type === "discountTag" && (
// // //                 <div
// // //                     style={{
// // //                         position: "fixed",
// // //                         left: toolbarPos.x,
// // //                         top: toolbarPos.y + 38,
// // //                         transform: "translateX(-50%)",
// // //                         zIndex: 110,
// // //                         display: "flex",
// // //                         alignItems: "center",
// // //                         flexWrap: "wrap",
// // //                         gap: 8,
// // //                         padding: 10,
// // //                         borderRadius: 12,
// // //                         background: "#ffffff",
// // //                         border: "1px solid #e2e8f0",
// // //                         boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
// // //                         maxWidth: "calc(100vw - 24px)",
// // //                     }}
// // //                 >
// // //                     <input
// // //                         aria-label="Discount tag text"
// // //                         value={selectedElement.text}
// // //                         maxLength={40}
// // //                         onChange={e => {
// // //                             const text = e.target.value;

// // //                             setDiscountTags(prev =>
// // //                                 prev.map(tag =>
// // //                                     tag.id === selectedId
// // //                                         ? { ...tag, text }
// // //                                         : tag
// // //                                 )
// // //                             );
// // //                         }}
// // //                         onBlur={() => pushHistory()}
// // //                         style={{
// // //                             width: 140,
// // //                             minWidth: 0,
// // //                             padding: "7px 9px",
// // //                             border: "1px solid #cbd5e1",
// // //                             borderRadius: 7,
// // //                             fontSize: 13,
// // //                         }}
// // //                     />

// // //                     <label title="Tag background color">
// // //                         <input
// // //                             aria-label="Tag background color"
// // //                             type="color"
// // //                             value={selectedElement.fill || "#dc2626"}
// // //                             onChange={e => {
// // //                                 const fill = e.target.value;

// // //                                 setDiscountTags(prev =>
// // //                                     prev.map(tag =>
// // //                                         tag.id === selectedId
// // //                                             ? { ...tag, fill }
// // //                                             : tag
// // //                                     )
// // //                                 );
// // //                             }}
// // //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// // //                         />
// // //                     </label>

// // //                     <label title="Tag text color">
// // //                         <input
// // //                             aria-label="Tag text color"
// // //                             type="color"
// // //                             value={selectedElement.textColor || "#ffffff"}
// // //                             onChange={e => {
// // //                                 const textColor = e.target.value;

// // //                                 setDiscountTags(prev =>
// // //                                     prev.map(tag =>
// // //                                         tag.id === selectedId
// // //                                             ? { ...tag, textColor }
// // //                                             : tag
// // //                                     )
// // //                                 );
// // //                             }}
// // //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// // //                         />
// // //                     </label>

// // //                     <label title="Tag border color">
// // //                         <input
// // //                             aria-label="Tag border color"
// // //                             type="color"
// // //                             value={selectedElement.borderColor || "#991b1b"}
// // //                             onChange={e => {
// // //                                 const borderColor = e.target.value;

// // //                                 setDiscountTags(prev =>
// // //                                     prev.map(tag =>
// // //                                         tag.id === selectedId
// // //                                             ? { ...tag, borderColor }
// // //                                             : tag
// // //                                     )
// // //                                 );
// // //                             }}
// // //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// // //                         />
// // //                     </label>
// // //                 </div>
// // //             )}


// // //             <FloatingToolbar
// // //                 element={selectedElement}
// // //                 onDelete={deleteElement}
// // //                 onEdit={() => {

// // //                     if (!selectedElement) return;

// // //                     if (selectedElement.text) {
// // //                         setActiveSection("text");
// // //                         return;
// // //                     }

// // //                     if (selectedElement.type === "icon") {
// // //                         return;
// // //                     }

// // //                     if (selectedElement.image) {
// // //                         setActiveSection("image");
// // //                         return;
// // //                     }

// // //                     setActiveSection("shapes");
// // //                 }}

// // //                 onDuplicate={() => {
// // //                     if (!selectedElement) return;

// // //                     if (selectedElement.type === "icon") {

// // //                         const duplicated = {
// // //                             ...selectedElement,

// // //                             id: createId(),

// // //                             x:
// // //                                 selectedElement.x + 30,

// // //                             y:
// // //                                 selectedElement.y + 30
// // //                         };

// // //                         setIcons(prev => [
// // //                             ...prev,
// // //                             duplicated
// // //                         ]);

// // //                         setSelectedId(
// // //                             duplicated.id
// // //                         );

// // //                         setTimeout(() => {
// // //                             pushHistory();
// // //                         }, 0);

// // //                         return;
// // //                     }

// // //                     // TEXT DUPLICATION
// // //                     if (selectedElement.text) {

// // //                         const duplicated = {
// // //                             ...selectedElement,
// // //                             id: Date.now(),
// // //                             x: selectedElement.x + 30,
// // //                             y: selectedElement.y + 30
// // //                         };

// // //                         setTexts(prev => [...prev, duplicated]);

// // //                         setSelectedId(duplicated.id);

// // //                         setTimeout(() => {
// // //                             pushHistory();
// // //                         }, 0);
// // //                     }
// // //                 }}
// // //                 position={toolbarPos}
// // //                 activeSection={activeSection} // ✅ ADD
// // //             />

// // //             {/* CENTERING WRAPPER */}

// // //             <div
// // //                 style={{
// // //                     display: "flex",
// // //                     justifyContent: "center",
// // //                     alignItems: "center",
// // //                     minWidth: "100%",
// // //                     minHeight: "100%",
// // //                     padding: 40
// // //                 }}
// // //             >

// // //                 {/* SCALE WRAPPER */}

// // //                 <div
// // //                     style={{
// // //                         transform: `scale(${finalScale})`,
// // //                         transformOrigin: "center center",
// // //                         transition: "transform 0.2s ease"
// // //                     }}
// // //                 >
// // //                     <div
// // //                         ref={canvasWrapperRef}
// // //                         style={{
// // //                             position: "relative",

// // //                             background:
// // //                                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #12385d 70%, #1e4f7a 100%)",

// // //                             borderRadius: 26,

// // //                             padding: 18,

// // //                             boxShadow:
// // //                                 "0 25px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",

// // //                             overflow: "hidden",

// // //                             border: "1px solid rgba(255,255,255,0.08)",

// // //                             backdropFilter: "blur(10px)"
// // //                         }}
// // //                     >

// // //                         <Stage
// // //                             ref={(node) => {
// // //                                 stageRef.current = node;
// // //                                 if (ref) ref.current = node;
// // //                             }}
// // //                             width={W}
// // //                             height={H}
// // //                             onMouseDown={onMouseDown}
// // //                             onMouseMove={onMouseMove}
// // //                             onMouseUp={onMouseUp}
// // //                             onMouseLeave={onMouseUp}

// // //                             onTouchStart={onMouseDown}
// // //                             onTouchMove={onMouseMove}
// // //                             onTouchEnd={onMouseUp}
// // //                             onTouchCancel={onMouseUp}
// // //                             onClick={e => {
// // //                                 if (e.target === e.target.getStage()) {
// // //                                     setSelectedId(null);
// // //                                     selectedNodeRef.current = null;

// // //                                     if (!isDrawing) {
// // //                                         setEditingBackground(false);
// // //                                     }
// // //                                 }
// // //                             }}
// // //                             onTap={e => {
// // //                                 if (e.target === e.target.getStage()) {
// // //                                     setSelectedId(null);
// // //                                     selectedNodeRef.current = null;

// // //                                     if (!isDrawing) {
// // //                                         setEditingBackground(false);
// // //                                     }
// // //                                 }
// // //                             }}

// // //                         // onMouseDown={(e) => {
// // //                         //     const clickedOnEmpty =
// // //                         //         e.target === e.target.getStage();

// // //                         //     if (clickedOnEmpty) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}

// // //                         // onTouchStart={(e) => {
// // //                         //     const clickedOnEmpty =
// // //                         //         e.target === e.target.getStage();

// // //                         //     if (clickedOnEmpty) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}
// // //                         //////////////////////////////////////////////////////////
// // //                         // onMouseDown={e => {
// // //                         //     if (e.target === e.target.getStage()) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}

// // //                         // onTouchStart={e => {
// // //                         //     if (e.target === e.target.getStage()) {
// // //                         //         setSelectedId(null);
// // //                         //         setEditingBackground(false);
// // //                         //     }
// // //                         // }}


// // //                         >

// // //                             {/* BACKGROUND */}

// // //                             <Layer listening={true}>

// // //                                 {/* default background */}
// // //                                 <Rect
// // //                                     width={W}
// // //                                     height={H}
// // //                                     fill={background?.value || "#f8fafc"}
// // //                                     listening={false}
// // //                                 />

// // //                                 {/* BACKGROUND IMAGE */}
// // //                                 {background?.type === "image" && background.image && (
// // //                                     <KonvaImage
// // //                                         image={background.image}

// // //                                         x={background.x ?? 0}
// // //                                         y={background.y ?? 0}

// // //                                         width={background.width ?? W}
// // //                                         height={background.height ?? H}

// // //                                         crop={background.crop}

// // //                                         rotation={background.rotation || 0}

// // //                                         listening={!DRAW_TOOLS.includes(tool)}

// // //                                         draggable={editingBackground}

// // //                                         onDblClick={(e) => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;

// // //                                             const node = e.target;

// // //                                             setEditingBackground(true);

// // //                                             setSelectedId("background");

// // //                                             selectedNodeRef.current = node;

// // //                                             requestAnimationFrame(() => {
// // //                                                 node.draggable(true);
// // //                                             });
// // //                                         }}

// // //                                         onDblTap={(e) => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;

// // //                                             const node = e.target;

// // //                                             setEditingBackground(true);

// // //                                             setSelectedId("background");

// // //                                             selectedNodeRef.current = node;

// // //                                             requestAnimationFrame(() => {
// // //                                                 node.draggable(true);
// // //                                             });
// // //                                         }}

// // //                                         onDragEnd={(e) => {

// // //                                             if (!editingBackground) {
// // //                                                 e.target.stopDrag();
// // //                                                 return;
// // //                                             }

// // //                                             const node = e.target;

// // //                                             const { x, y } =
// // //                                                 node.position();

// // //                                             setBackground(prev => ({
// // //                                                 ...prev,
// // //                                                 x,
// // //                                                 y
// // //                                             }));

// // //                                             node.stopDrag();
// // //                                             node.draggable(false);

// // //                                             setEditingBackground(false);

// // //                                             setSelectedId(null);

// // //                                             selectedNodeRef.current = null;

// // //                                             pushHistory();
// // //                                         }}
// // //                                     />
// // //                                 )}
// // //                             </Layer>



// // //                             {/* BLOCKS */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {blocks.map(b => {
// // //                                     const shape = getBlockShape(b);
// // //                                     if (!shape) return null;

// // //                                     return (
// // //                                         <shape.type
// // //                                             {...shape.props}
// // //                                             key={b.id}
// // //                                             draggable

// // //                                             onClick={(e) => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(b.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}
// // //                                             onTap={(e) => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(b.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onDragEnd={(e) => {
// // //                                                 const { x, y } = e.target.position();
// // //                                                 setBlocks(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === b.id ? { ...item, x, y } : item
// // //                                                     )
// // //                                                 );
// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={(e) => {
// // //                                                 const node = e.target;
// // //                                                 const scaleX = node.scaleX();
// // //                                                 const scaleY = node.scaleY();
// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 const updated = {
// // //                                                     x: node.x(),
// // //                                                     y: node.y(),
// // //                                                     width: Math.max(10, b.width * scaleX),
// // //                                                     height: Math.max(10, b.height * scaleY),
// // //                                                     rotation: node.rotation()
// // //                                                 };

// // //                                                 setBlocks(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === b.id ? { ...item, ...updated } : item
// // //                                                     )
// // //                                                 );
// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     );
// // //                                 })}
// // //                             </Layer>


// // //                             {/* IMAGES */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

// // //                                 {images.map(img => (
// // //                                     <KonvaImage
// // //                                         key={img.id}

// // //                                         x={img.x}
// // //                                         y={img.y}

// // //                                         width={img.width}
// // //                                         height={img.height}

// // //                                         rotation={img.rotation || 0}

// // //                                         image={img.image}

// // //                                         onDblClick={e => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             // Only template logo and template decorative photos
// // //                                             if (
// // //                                                 img.assetType !== "logo" &&
// // //                                                 img.assetType !== "photo"
// // //                                             ) {
// // //                                                 return;
// // //                                             }

// // //                                             e.cancelBubble = true;

// // //                                             setEditingBackground(false);

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current = e.target;

// // //                                             openImageReplacement(img.id);
// // //                                         }}

// // //                                         onDblTap={e => {

// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             // Only template logo and template decorative photos
// // //                                             if (
// // //                                                 img.assetType !== "logo" &&
// // //                                                 img.assetType !== "photo"
// // //                                             ) {
// // //                                                 return;
// // //                                             }

// // //                                             e.cancelBubble = true;

// // //                                             setEditingBackground(false);

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current = e.target;

// // //                                             openImageReplacement(img.id);
// // //                                         }}

// // //                                         draggable={!DRAW_TOOLS.includes(tool)}

// // //                                         listening={!DRAW_TOOLS.includes(tool)}

// // //                                         onClick={e => {

// // //                                             setEditingBackground(false);

// // //                                             e.cancelBubble = true;

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current =
// // //                                                 e.target;
// // //                                         }}

// // //                                         onTap={e => {

// // //                                             setEditingBackground(false);

// // //                                             e.cancelBubble = true;

// // //                                             setSelectedId(img.id);

// // //                                             selectedNodeRef.current =
// // //                                                 e.target;
// // //                                         }}

// // //                                         onDragEnd={e => {

// // //                                             const { x, y } =
// // //                                                 e.target.position();

// // //                                             setImages(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === img.id
// // //                                                         ? {
// // //                                                             ...item,
// // //                                                             x,
// // //                                                             y
// // //                                                         }
// // //                                                         : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}

// // //                                         onTransformEnd={e => {

// // //                                             const node = e.target;

// // //                                             const scaleX =
// // //                                                 node.scaleX();

// // //                                             const scaleY =
// // //                                                 node.scaleY();

// // //                                             const newWidth =
// // //                                                 Math.max(
// // //                                                     20,
// // //                                                     node.width() *
// // //                                                     scaleX
// // //                                                 );

// // //                                             const newHeight =
// // //                                                 Math.max(
// // //                                                     20,
// // //                                                     node.height() *
// // //                                                     scaleY
// // //                                                 );

// // //                                             node.scaleX(1);
// // //                                             node.scaleY(1);

// // //                                             setImages(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === img.id
// // //                                                         ? {
// // //                                                             ...item,

// // //                                                             x: node.x(),
// // //                                                             y: node.y(),

// // //                                                             width: newWidth,
// // //                                                             height: newHeight,

// // //                                                             rotation:
// // //                                                                 node.rotation()
// // //                                                         }
// // //                                                         : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}

// // //                                     />
// // //                                 ))}

// // //                             </Layer>


// // //                             {/* =========================================================
// // //     ICONS
// // // ========================================================= */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

// // //                                 {icons.map(icon => {

// // //                                     if (!icon.image) {
// // //                                         return null;
// // //                                     }

// // //                                     return (
// // //                                         <KonvaImage
// // //                                             key={icon.id}
// // //                                             ref={node => registerNode(icon.id, node)}
// // //                                             image={icon.image}

// // //                                             x={icon.x}
// // //                                             y={icon.y}

// // //                                             width={icon.width}
// // //                                             height={icon.height}

// // //                                             rotation={
// // //                                                 icon.rotation || 0
// // //                                             }

// // //                                             draggable={
// // //                                                 !DRAW_TOOLS.includes(tool)
// // //                                             }

// // //                                             listening={
// // //                                                 !DRAW_TOOLS.includes(tool)
// // //                                             }

// // //                                             onClick={e => {

// // //                                                 if (
// // //                                                     DRAW_TOOLS.includes(
// // //                                                         tool
// // //                                                     )
// // //                                                 ) {
// // //                                                     return;
// // //                                                 }

// // //                                                 setEditingBackground(
// // //                                                     false
// // //                                                 );

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(
// // //                                                     icon.id
// // //                                                 );

// // //                                                 selectedNodeRef.current =
// // //                                                     e.target;
// // //                                             }}

// // //                                             onTap={e => {

// // //                                                 if (
// // //                                                     DRAW_TOOLS.includes(
// // //                                                         tool
// // //                                                     )
// // //                                                 ) {
// // //                                                     return;
// // //                                                 }

// // //                                                 setEditingBackground(
// // //                                                     false
// // //                                                 );

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(
// // //                                                     icon.id
// // //                                                 );

// // //                                                 selectedNodeRef.current =
// // //                                                     e.target;
// // //                                             }}

// // //                                             onDragEnd={e => {

// // //                                                 const {
// // //                                                     x,
// // //                                                     y
// // //                                                 } =
// // //                                                     e.target.position();

// // //                                                 setIcons(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === icon.id
// // //                                                             ? {
// // //                                                                 ...item,
// // //                                                                 x,
// // //                                                                 y
// // //                                                             }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={e => {

// // //                                                 const node =
// // //                                                     e.target;

// // //                                                 const scaleX =
// // //                                                     node.scaleX();

// // //                                                 const scaleY =
// // //                                                     node.scaleY();

// // //                                                 const newWidth =
// // //                                                     Math.max(
// // //                                                         20,
// // //                                                         node.width() *
// // //                                                         scaleX
// // //                                                     );

// // //                                                 const newHeight =
// // //                                                     Math.max(
// // //                                                         20,
// // //                                                         node.height() *
// // //                                                         scaleY
// // //                                                     );

// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 setIcons(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === icon.id
// // //                                                             ? {
// // //                                                                 ...item,

// // //                                                                 x: node.x(),
// // //                                                                 y: node.y(),

// // //                                                                 width:
// // //                                                                     newWidth,

// // //                                                                 height:
// // //                                                                     newHeight,

// // //                                                                 rotation:
// // //                                                                     node.rotation()
// // //                                                             }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     );
// // //                                 })}

// // //                             </Layer>

// // //                             {/* ================= DISCOUNT / SALE TAGS ================= */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {discountTags.map(tag => (

// // //                                     <Group
// // //                                         key={tag.id}
// // //                                         ref={node => registerNode(tag.id, node)}
// // //                                         x={tag.x}
// // //                                         y={tag.y}

// // //                                         scaleX={tag.width / 150}
// // //                                         scaleY={tag.height / 100}
// // //                                         rotation={tag.rotation || 0}
// // //                                         draggable={!DRAW_TOOLS.includes(tool)}
// // //                                         onClick={e => {
// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;
// // //                                             setEditingBackground(false);
// // //                                             setSelectedId(tag.id);
// // //                                             selectedNodeRef.current = e.currentTarget;
// // //                                         }}
// // //                                         onTap={e => {
// // //                                             if (DRAW_TOOLS.includes(tool)) return;

// // //                                             e.cancelBubble = true;
// // //                                             setEditingBackground(false);
// // //                                             setSelectedId(tag.id);
// // //                                             selectedNodeRef.current = e.currentTarget;
// // //                                         }}
// // //                                         onDragEnd={e => {
// // //                                             const node = e.currentTarget;
// // //                                             const { x, y } = node.position();

// // //                                             setDiscountTags(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === tag.id ? { ...item, x, y } : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}
// // //                                         onTransformEnd={e => {
// // //                                             const node = e.currentTarget;

// // //                                             const newWidth = Math.max(35, 150 * node.scaleX());
// // //                                             const newHeight = Math.max(25, 100 * node.scaleY());

// // //                                             const updated = {
// // //                                                 x: node.x(),
// // //                                                 y: node.y(),
// // //                                                 width: newWidth,
// // //                                                 height: newHeight,
// // //                                                 rotation: node.rotation(),
// // //                                             };

// // //                                             node.scaleX(newWidth / 150);
// // //                                             node.scaleY(newHeight / 100);

// // //                                             setDiscountTags(prev =>
// // //                                                 prev.map(item =>
// // //                                                     item.id === tag.id
// // //                                                         ? { ...item, ...updated }
// // //                                                         : item
// // //                                                 )
// // //                                             );

// // //                                             pushHistory();
// // //                                         }}
// // //                                     >
// // //                                         {/* TAG SHAPE */}
// // //                                         {tag.shape === "burst" && (
// // //                                             <Star
// // //                                                 x={75}
// // //                                                 y={50}
// // //                                                 numPoints={12}
// // //                                                 innerRadius={35}
// // //                                                 outerRadius={45}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 shadowColor="#000000"
// // //                                                 shadowBlur={3}
// // //                                                 shadowOpacity={0.12}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "circle" && (
// // //                                             <Circle
// // //                                                 x={75}
// // //                                                 y={50}
// // //                                                 radius={42}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "rounded" && (
// // //                                             <Rect
// // //                                                 x={18}
// // //                                                 y={22}
// // //                                                 width={114}
// // //                                                 height={56}
// // //                                                 cornerRadius={15}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "rectangle" && (
// // //                                             <Rect
// // //                                                 x={10}
// // //                                                 y={27}
// // //                                                 width={130}
// // //                                                 height={46}
// // //                                                 cornerRadius={3}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "ribbon" && (
// // //                                             <Line
// // //                                                 points={[
// // //                                                     15, 18, 135, 18, 135, 80,
// // //                                                     115, 68, 95, 80, 75, 68,
// // //                                                     55, 80, 35, 68, 15, 80
// // //                                                 ]}
// // //                                                 closed
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 lineJoin="round"
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "bookmark" && (
// // //                                             <Line
// // //                                                 points={[42, 8, 108, 8, 108, 92, 75, 73, 42, 92]}
// // //                                                 closed
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 lineJoin="round"
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "hexagon" && (
// // //                                             <RegularPolygon
// // //                                                 x={75}
// // //                                                 y={50}
// // //                                                 sides={6}
// // //                                                 radius={43}
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                             />
// // //                                         )}

// // //                                         {tag.shape === "ticket" && (
// // //                                             <Line
// // //                                                 points={[
// // //                                                     12, 22, 138, 22, 138, 39,
// // //                                                     127, 50, 138, 61, 138, 78,
// // //                                                     12, 78, 12, 61, 23, 50, 12, 39
// // //                                                 ]}
// // //                                                 closed
// // //                                                 fill={tag.fill}
// // //                                                 stroke={tag.borderColor}
// // //                                                 strokeWidth={2}
// // //                                                 lineJoin="round"
// // //                                             />
// // //                                         )}

// // //                                         {/* EDITABLE TEXT */}
// // //                                         <Text
// // //                                             x={15}
// // //                                             y={30}
// // //                                             width={120}
// // //                                             height={40}
// // //                                             text={tag.text}
// // //                                             fill={tag.textColor}
// // //                                             fontSize={
// // //                                                 tag.text.length > 12
// // //                                                     ? 11
// // //                                                     : tag.text.length > 8
// // //                                                         ? 14
// // //                                                         : 18
// // //                                             }
// // //                                             fontFamily="Arial"
// // //                                             fontStyle="bold"
// // //                                             align="center"
// // //                                             verticalAlign="middle"
// // //                                             wrap="word"
// // //                                             listening={false}
// // //                                         />
// // //                                     </Group>
// // //                                 ))}
// // //                             </Layer>

// // //                             {/* ================= BORDERS ================= */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {borders.map(border => {

// // //                                     const isSelected = selectedId === border.id;

// // //                                     const dash =
// // //                                         border.style === "dashed"
// // //                                             ? [18, 10]
// // //                                             : border.style === "dotted"
// // //                                                 ? [3, 8]
// // //                                                 : undefined;

// // //                                     if (border.style === "double") {
// // //                                         return (
// // //                                             <Fragment key={border.id}>

// // //                                                 {/* OUTER BORDER */}
// // //                                                 <Rect
// // //                                                     x={border.x}
// // //                                                     y={border.y}
// // //                                                     width={border.width}
// // //                                                     height={border.height}
// // //                                                     stroke={border.stroke}
// // //                                                     strokeWidth={border.strokeWidth}
// // //                                                     cornerRadius={border.cornerRadius || 0}
// // //                                                     dash={undefined}
// // //                                                     fillEnabled={false}
// // //                                                     draggable

// // //                                                     onClick={e => {
// // //                                                         if (DRAW_TOOLS.includes(tool)) return;

// // //                                                         setEditingBackground(false);

// // //                                                         e.cancelBubble = true;

// // //                                                         setSelectedId(border.id);
// // //                                                         selectedNodeRef.current = e.target;
// // //                                                     }}

// // //                                                     onTap={e => {
// // //                                                         if (DRAW_TOOLS.includes(tool)) return;

// // //                                                         setEditingBackground(false);

// // //                                                         e.cancelBubble = true;

// // //                                                         setSelectedId(border.id);
// // //                                                         selectedNodeRef.current = e.target;
// // //                                                     }}

// // //                                                     onDragEnd={e => {
// // //                                                         const { x, y } = e.target.position();

// // //                                                         setBorders(prev =>
// // //                                                             prev.map(item =>
// // //                                                                 item.id === border.id
// // //                                                                     ? { ...item, x, y }
// // //                                                                     : item
// // //                                                             )
// // //                                                         );

// // //                                                         pushHistory();
// // //                                                     }}

// // //                                                     onTransformEnd={e => {
// // //                                                         const node = e.target;

// // //                                                         const scaleX = node.scaleX();
// // //                                                         const scaleY = node.scaleY();

// // //                                                         node.scaleX(1);
// // //                                                         node.scaleY(1);

// // //                                                         const updated = {
// // //                                                             x: node.x(),
// // //                                                             y: node.y(),
// // //                                                             width: Math.max(
// // //                                                                 20,
// // //                                                                 node.width() * scaleX
// // //                                                             ),
// // //                                                             height: Math.max(
// // //                                                                 20,
// // //                                                                 node.height() * scaleY
// // //                                                             )
// // //                                                         };

// // //                                                         setBorders(prev =>
// // //                                                             prev.map(item =>
// // //                                                                 item.id === border.id
// // //                                                                     ? { ...item, ...updated }
// // //                                                                     : item
// // //                                                             )
// // //                                                         );

// // //                                                         pushHistory();
// // //                                                     }}
// // //                                                 />

// // //                                                 {/* INNER BORDER */}
// // //                                                 <Rect
// // //                                                     x={
// // //                                                         border.x +
// // //                                                         border.strokeWidth * 3
// // //                                                     }
// // //                                                     y={
// // //                                                         border.y +
// // //                                                         border.strokeWidth * 3
// // //                                                     }
// // //                                                     width={Math.max(
// // //                                                         1,
// // //                                                         border.width -
// // //                                                         border.strokeWidth * 6
// // //                                                     )}
// // //                                                     height={Math.max(
// // //                                                         1,
// // //                                                         border.height -
// // //                                                         border.strokeWidth * 6
// // //                                                     )}
// // //                                                     stroke={border.stroke}
// // //                                                     strokeWidth={Math.max(
// // //                                                         1,
// // //                                                         border.strokeWidth / 2
// // //                                                     )}
// // //                                                     cornerRadius={Math.max(
// // //                                                         0,
// // //                                                         (border.cornerRadius || 0) -
// // //                                                         border.strokeWidth * 2
// // //                                                     )}
// // //                                                     listening={false}
// // //                                                 />

// // //                                             </Fragment>
// // //                                         );
// // //                                     }

// // //                                     return (
// // //                                         <Rect
// // //                                             key={border.id}

// // //                                             x={border.x}
// // //                                             y={border.y}

// // //                                             width={border.width}
// // //                                             height={border.height}

// // //                                             stroke={border.stroke}
// // //                                             strokeWidth={border.strokeWidth}

// // //                                             dash={dash}

// // //                                             cornerRadius={border.cornerRadius || 0}

// // //                                             fillEnabled={false}

// // //                                             draggable

// // //                                             onClick={e => {
// // //                                                 if (DRAW_TOOLS.includes(tool)) return;

// // //                                                 setEditingBackground(false);

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(border.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onTap={e => {
// // //                                                 if (DRAW_TOOLS.includes(tool)) return;

// // //                                                 setEditingBackground(false);

// // //                                                 e.cancelBubble = true;

// // //                                                 setSelectedId(border.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onDragEnd={e => {
// // //                                                 const { x, y } = e.target.position();

// // //                                                 setBorders(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === border.id
// // //                                                             ? { ...item, x, y }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTransformEnd={e => {
// // //                                                 const node = e.target;

// // //                                                 const scaleX = node.scaleX();
// // //                                                 const scaleY = node.scaleY();

// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 const updated = {
// // //                                                     x: node.x(),
// // //                                                     y: node.y(),

// // //                                                     width: Math.max(
// // //                                                         20,
// // //                                                         node.width() * scaleX
// // //                                                     ),

// // //                                                     height: Math.max(
// // //                                                         20,
// // //                                                         node.height() * scaleY
// // //                                                     )
// // //                                                 };

// // //                                                 setBorders(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === border.id
// // //                                                             ? { ...item, ...updated }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />
// // //                                     );
// // //                                 })}
// // //                             </Layer>

// // //                             {/* SHAPES */}

// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {shapes.map(s => {

// // //                                     if (s.type === "free") {
// // //                                         return (
// // //                                             <Line
// // //                                                 key={s.id}
// // //                                                 points={s.points}
// // //                                                 stroke={s.stroke}
// // //                                                 strokeWidth={s.strokeWidth}
// // //                                                 tension={0.5}
// // //                                                 lineCap="round"
// // //                                                 lineJoin="round"
// // //                                                 globalCompositeOperation={
// // //                                                     s.tool === "eraser"
// // //                                                         ? "destination-out"
// // //                                                         : "source-over"
// // //                                                 }
// // //                                             />
// // //                                         );
// // //                                     }

// // //                                     if (s.type === "line") {
// // //                                         return renderLine(s);
// // //                                     }

// // //                                     if (s.type === "rectangle") {
// // //                                         return (
// // //                                             <Rect
// // //                                                 key={s.id}
// // //                                                 {...s}
// // //                                                 draggable

// // //                                                 onClick={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onTap={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onDragEnd={(e) => {
// // //                                                     const { x, y } = e.target.position();

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, x, y } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}

// // //                                                 onTransformEnd={(e) => {
// // //                                                     const node = e.target;

// // //                                                     const scaleX = node.scaleX();
// // //                                                     const scaleY = node.scaleY();

// // //                                                     node.scaleX(1);
// // //                                                     node.scaleY(1);

// // //                                                     const updated = {
// // //                                                         x: node.x(),
// // //                                                         y: node.y(),
// // //                                                         width: Math.max(10, node.width() * scaleX),
// // //                                                         height: Math.max(10, node.height() * scaleY),
// // //                                                         rotation: node.rotation()
// // //                                                     };

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, ...updated } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}
// // //                                             />
// // //                                         );
// // //                                     }

// // //                                     if (s.type === "circle") {
// // //                                         return (
// // //                                             <Circle
// // //                                                 key={s.id}
// // //                                                 {...s}
// // //                                                 draggable

// // //                                                 onClick={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onTap={(e) => {
// // //                                                     setEditingBackground(false);
// // //                                                     e.cancelBubble = true;
// // //                                                     setSelectedId(s.id);
// // //                                                     selectedNodeRef.current = e.target;
// // //                                                 }}

// // //                                                 onDragEnd={(e) => {
// // //                                                     const { x, y } = e.target.position();

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, x, y } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}

// // //                                                 onTransformEnd={(e) => {
// // //                                                     const node = e.target;

// // //                                                     const scale = node.scaleX(); // circle uses one scale

// // //                                                     node.scaleX(1);
// // //                                                     node.scaleY(1);

// // //                                                     const updated = {
// // //                                                         x: node.x(),
// // //                                                         y: node.y(),
// // //                                                         radius: Math.max(5, s.radius * scale),
// // //                                                         rotation: node.rotation()
// // //                                                     };

// // //                                                     setShapes(prev =>
// // //                                                         prev.map(item =>
// // //                                                             item.id === s.id ? { ...item, ...updated } : item
// // //                                                         )
// // //                                                     );

// // //                                                     pushHistory();
// // //                                                 }}
// // //                                             />
// // //                                         );
// // //                                     }

// // //                                     return null;
// // //                                 })}
// // //                             </Layer>


// // //                             {/* TEXT */}


// // //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// // //                                 {texts.map(t => (
// // //                                     <Fragment key={t.id}>

// // //                                         <Text
// // //                                             {...t}
// // //                                             width={t.width || 250}
// // //                                             draggable
// // //                                             textDecoration={
// // //                                                 t.underline
// // //                                                     ? "underline"
// // //                                                     : ""
// // //                                             }
// // //                                             align={
// // //                                                 ["ar"].includes(language)
// // //                                                     ? "right"
// // //                                                     : t.align || "left"
// // //                                             }

// // //                                             onClick={e => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(t.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onDragEnd={(e) => {
// // //                                                 const { x, y } = e.target.position();

// // //                                                 setTexts(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === t.id ? { ...item, x, y } : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}

// // //                                             onTap={e => {
// // //                                                 setEditingBackground(false);
// // //                                                 e.cancelBubble = true;
// // //                                                 setSelectedId(t.id);
// // //                                                 selectedNodeRef.current = e.target;
// // //                                             }}

// // //                                             onTransformEnd={(e) => {

// // //                                                 const node = e.target;

// // //                                                 const scaleX = node.scaleX();
// // //                                                 const scaleY = node.scaleY();

// // //                                                 const newWidth = Math.max(
// // //                                                     50,
// // //                                                     (t.width || node.width()) * scaleX
// // //                                                 );

// // //                                                 const newFontSize = Math.max(
// // //                                                     8,
// // //                                                     t.fontSize * scaleY
// // //                                                 );

// // //                                                 node.scaleX(1);
// // //                                                 node.scaleY(1);

// // //                                                 const updated = {
// // //                                                     x: node.x(),
// // //                                                     y: node.y(),
// // //                                                     width: newWidth,
// // //                                                     fontSize: newFontSize,
// // //                                                     rotation: node.rotation()
// // //                                                 };

// // //                                                 setTexts(prev =>
// // //                                                     prev.map(item =>
// // //                                                         item.id === t.id
// // //                                                             ? { ...item, ...updated }
// // //                                                             : item
// // //                                                     )
// // //                                                 );

// // //                                                 pushHistory();
// // //                                             }}
// // //                                         />


// // //                                     </Fragment>
// // //                                 ))}
// // //                             </Layer>


// // //                             {draftShape && (
// // //                                 <Layer listening={false}>
// // //                                     {draftShape.type === "rectangle" && (
// // //                                         <Rect
// // //                                             {...draftShape}
// // //                                         />
// // //                                     )}

// // //                                     {draftShape.type === "circle" && (
// // //                                         <Circle
// // //                                             x={draftShape.x}
// // //                                             y={draftShape.y}
// // //                                             radius={draftShape.radius}
// // //                                             stroke={draftShape.stroke}
// // //                                             strokeWidth={draftShape.strokeWidth}
// // //                                         />
// // //                                     )}
// // //                                 </Layer>
// // //                             )}

// // //                             {/* TRANSFORMER */}

// // //                             {selectedId !== null &&
// // //                                 selectedId !== "background" &&
// // //                                 selectedNodeRef.current && (
// // //                                     <Layer>
// // //                                         <Transformer
// // //                                             ref={trRef}

// // //                                             rotateEnabled={false}
// // //                                             keepRatio={
// // //                                                 selectedElement?.type === "icon" ||
// // //                                                 selectedElement?.type === "discountTag"
// // //                                             }
// // //                                             centeredScaling={false}

// // //                                             enabledAnchors={[
// // //                                                 "top-left",
// // //                                                 "top-center",
// // //                                                 "top-right",
// // //                                                 "middle-left",
// // //                                                 "middle-right",
// // //                                                 "bottom-left",
// // //                                                 "bottom-center",
// // //                                                 "bottom-right"
// // //                                             ]}

// // //                                             borderStroke="#0ea5e9"
// // //                                             borderStrokeWidth={2}

// // //                                             anchorSize={12}
// // //                                             anchorStroke="#0ea5e9"
// // //                                             anchorFill="#ffffff"
// // //                                             anchorStrokeWidth={2}

// // //                                             padding={0}
// // //                                         />
// // //                                     </Layer>
// // //                                 )}

// // //                         </Stage>

// // //                     </div>
// // //                 </div>
// // //                 {showWordArtLibrary && (
// // //                     <WordArtPicker
// // //                         onClose={() => setShowWordArtLibrary(false)}
// // //                         onApply={handleApplyWordArt}
// // //                     />
// // //                 )}
// // //             </div>

// // //         </div>


// // //     );
// // // });

// // // export default Canvas;


// // /////////////////////////////////////////////////////////////////

// // import {
// //     Stage,
// //     Layer,
// //     Rect,
// //     Text,
// //     Image as KonvaImage,
// //     Line,
// //     Circle,
// //     Transformer,
// //     RegularPolygon,
// //     Group,
// //     Star
// // } from "react-konva";
// // import { useRef, useState, useEffect, forwardRef, Fragment } from "react";
// // import FloatingToolbar from "./FloatinngToolbar";
// // import WordArtPicker from "../components/WordArtPicker";
// // import BusinessPhotoBackgroundPicker from "../components/BusinessPhotoBackgroundPicker";
// // import BusinessPhotoCanvasBackground from "../components/BusinessPhotoCanvasBackground";
// // const CURSORS = {
// //     brush: "crosshair",
// //     line: "crosshair",
// //     rectangle: "crosshair",
// //     circle: "crosshair",
// //     eraser: "crosshair",
// //     select: "default",
// //     move: "move",
// //     text: "text"
// // };

// // const DRAW_TOOLS = ["brush", "eraser", "line", "rectangle", "circle"];

// // const createId = () => {
// //     if (typeof crypto !== "undefined" && crypto.randomUUID) {
// //         return crypto.randomUUID();
// //     }

// //     return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
// // };

// // /* ================= BLOCK SHAPE GENERATOR ================= */

// // const getBlockShape = (b) => {

// //     const w = b.width;
// //     const h = b.height;

// //     if (b.shape === "rectangle" || !b.shape) {
// //         return <Rect key={b.id} {...b} />;
// //     }

// //     if (b.shape === "rhombus") {
// //         const points = [
// //             w / 2, 0,
// //             w, h / 2,
// //             w / 2, h,
// //             0, h / 2
// //         ];

// //         return (
// //             <Line
// //                 key={b.id}
// //                 x={b.x}
// //                 y={b.y}
// //                 points={points}
// //                 closed
// //                 fill={b.fill}
// //                 rotation={b.rotation}
// //                 draggable
// //             />
// //         );
// //     }

// //     if (b.shape === "parallelogram") {
// //         const offset = w * 0.25;

// //         const points = [
// //             offset, 0,
// //             w, 0,
// //             w - offset, h,
// //             0, h
// //         ];

// //         return (
// //             <Line
// //                 key={b.id}
// //                 x={b.x}
// //                 y={b.y}
// //                 points={points}
// //                 closed
// //                 fill={b.fill}
// //                 rotation={b.rotation}
// //                 draggable
// //             />
// //         );
// //     }

// //     if (b.shape === "trapezoid") {

// //         const top = w * 0.6;
// //         const offset = (w - top) / 2;

// //         const points = [
// //             offset, 0,
// //             offset + top, 0,
// //             w, h,
// //             0, h
// //         ];

// //         return (
// //             <Line
// //                 key={b.id}
// //                 x={b.x}
// //                 y={b.y}
// //                 points={points}
// //                 closed
// //                 fill={b.fill}
// //                 rotation={b.rotation}
// //                 draggable
// //             />
// //         );
// //     }
// //     if (b.shape === "triangle") {
// //         return (
// //             <RegularPolygon
// //                 key={b.id}
// //                 x={b.x}
// //                 y={b.y}
// //                 sides={3}
// //                 radius={Math.min(b.width, b.height) / 2}
// //                 fill={b.fill}
// //                 rotation={b.rotation}
// //                 draggable
// //             />
// //         );
// //     }

// //     if (b.shape === "circle") {
// //         return (
// //             <Circle
// //                 key={b.id}
// //                 x={b.x}
// //                 y={b.y}
// //                 radius={Math.min(b.width, b.height) / 2}
// //                 fill={b.fill}
// //                 rotation={b.rotation}
// //                 draggable
// //             />
// //         );
// //     }

// //     if (b.shape === "heptagon") {
// //         return (
// //             <RegularPolygon
// //                 key={b.id}
// //                 x={b.x + w / 2}
// //                 y={b.y + h / 2}
// //                 sides={7}
// //                 radius={Math.min(w, h) / 2}
// //                 fill={b.fill}
// //                 rotation={b.rotation}
// //                 draggable
// //             />
// //         );
// //     }

// //     return null;
// // };


// // const Canvas = forwardRef(function Canvas(
// //     {
// //         adSize,
// //         onReset,
// //         texts,
// //         setTexts,
// //         images,
// //         setImages,
// //         icons = [],
// //         setIcons,
// //         onIconColorChange,
// //         onOpenClipArt,
// //         onReplaceImage,
// //         onOpenDiscountTags,
// //         onOpenAIAssistance,
// //         hideCanvasToolbar = false,
// //         discountTags = [],
// //         setDiscountTags,
// //         shapes,
// //         setShapes,
// //         blocks,
// //         setBlocks,
// //         borders = [],
// //         setBorders,

// //         background,
// //         setBackground,
// //         selectedId,
// //         setSelectedId,
// //         tool,
// //         setTool,
// //         lineType,
// //         setLineType,
// //         strokeColor,
// //         setStrokeColor,
// //         strokeWidth,
// //         setStrokeWidth,
// //         pushHistory,
// //         language,
// //         setActiveSection,
// //         activeSection,
// //         editingBackground,
// //         setEditingBackground,
// //     },
// //     ref
// // ) {
// //     const sizes = {
// //         square: [420, 420],
// //         portrait: [420, 520],
// //         landscape: [620, 420],

// //         visitingCard: [320, 180],
// //         businessCard: [350, 200],

// //         bookmark: [220, 520],

// //         instagramPost: [420, 420],
// //         instagramStory: [320, 570],

// //         facebookCover: [620, 240]
// //     };

// //     const [W, H] = sizes[adSize] || [420, 420];
// //     const stageRef = useRef(null);
// //     const trRef = useRef(null);
// //     const selectedNodeRef = useRef(null);
// //     const nodeRegistryRef = useRef(new Map());


// //     const registerNode = (id, node) => {
// //         if (id == null) return;

// //         const key = String(id);

// //         if (node) {
// //             nodeRegistryRef.current.set(key, node);
// //         } else {
// //             nodeRegistryRef.current.delete(key);
// //         }
// //     };

// //     const containerRef = useRef(null);
// //     const canvasWrapperRef = useRef(null);

// //     const imageInputRef = useRef(null);
// //     const replaceImageIdRef = useRef(null);

// //     // Background drag tracking
// //     const backgroundDraggingRef = useRef(false);

// //     // Drawing state refs
// //     const isDrawingRef = useRef(false);

// //     const [isDrawing, setIsDrawing] = useState(false);
// //     const [draftShape, setDraftShape] = useState(null);

// //     const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
// //     const [isMobileToolbarOpen, setIsMobileToolbarOpen] = useState(false);
// //     useEffect(() => {
// //         if (hideCanvasToolbar) {
// //             setIsMobileToolbarOpen(false);
// //         }
// //     }, [hideCanvasToolbar]);
// //     const [showWordArtLibrary, setShowWordArtLibrary] = useState(false);
// //     const [isBusinessPhotoLibraryOpen, setIsBusinessPhotoLibraryOpen] =
// //         useState(false);

// //     /* ================= AUTO SCALE FOR MOBILE ================= */

// //     const [autoScale, setAutoScale] = useState(1);

// //     useEffect(() => {
// //         const resize = () => {
// //             if (!containerRef.current) return;

// //             const containerWidth = containerRef.current.offsetWidth;
// //             const scale = containerWidth / W;

// //             if (scale < 1) setAutoScale(scale);
// //             else setAutoScale(1);
// //         };

// //         resize();
// //         window.addEventListener("resize", resize);

// //         return () => window.removeEventListener("resize", resize);
// //     }, [W]);


// //     /* ================= ZOOM CONTROLLER ================= */
// //     /* ================= ZOOM CONTROLLER ================= */

// //     const zoomLevels = [25, 50, 75, 100, 125, 150, 200, 300];

// //     const getIsMobile = () =>
// //         typeof window !== "undefined" &&
// //         window.matchMedia("(max-width: 768px)").matches;

// //     const [zoomPercent, setZoomPercent] = useState(
// //         getIsMobile() ? 75 : 100
// //     );

// //     /* Keep zoom synced with mobile/desktop breakpoint */
// //     useEffect(() => {
// //         const handleViewportChange = () => {
// //             const mobile = getIsMobile();

// //             setZoomPercent(prev => {
// //                 // Only change the automatic starting zoom
// //                 // when crossing between desktop and mobile.
// //                 if (mobile && prev === 100) return 75;
// //                 if (!mobile && prev === 75) return 100;

// //                 return prev;
// //             });
// //         };

// //         window.addEventListener("resize", handleViewportChange);

// //         return () => {
// //             window.removeEventListener("resize", handleViewportChange);
// //         };
// //     }, []);

// //     const zoom = zoomPercent / 100;

// //     const increaseZoom = () => {
// //         const next = zoomLevels.find(z => z > zoomPercent);
// //         if (next) setZoomPercent(next);
// //     };

// //     const decreaseZoom = () => {
// //         const prev = [...zoomLevels].reverse().find(z => z < zoomPercent);
// //         if (prev) setZoomPercent(prev);
// //     };

// //     const finalScale = zoom * autoScale;

// //     /* ================= CURSOR FIX ================= */
// //     useEffect(() => {
// //         const stage = stageRef.current;
// //         if (!stage) return;

// //         const container = stage.container();

// //         if (editingBackground) {
// //             container.style.cursor = "grabbing";
// //             return;
// //         }

// //         if (isDrawing) {
// //             container.style.cursor = "crosshair";
// //             return;
// //         }

// //         if (tool === "text") {
// //             container.style.cursor = "text";
// //             return;
// //         }

// //         if (DRAW_TOOLS.includes(tool)) {
// //             container.style.cursor = "crosshair";
// //             return;
// //         }

// //         if (tool === "move") {
// //             container.style.cursor = "move";
// //             return;
// //         }

// //         container.style.cursor = "default";
// //     }, [tool, isDrawing, editingBackground]);

// //     /* ================= BACKGROUND DRAG END ================= */

// //     const finishBackgroundEditing = () => {
// //         const node = selectedNodeRef.current;
// //         const wasDragging = backgroundDraggingRef.current;

// //         // Stop Konva dragging immediately
// //         if (node) {
// //             const { x, y } = node.position();

// //             if (wasDragging) {
// //                 setBackground(prev => ({
// //                     ...prev,
// //                     x,
// //                     y
// //                 }));
// //             }

// //             node.stopDrag();
// //             node.draggable(false);
// //         }

// //         backgroundDraggingRef.current = false;

// //         // Completely exit background editing
// //         setEditingBackground(false);
// //         setSelectedId(null);
// //         selectedNodeRef.current = null;

// //         // Remove transformer if anything is attached
// //         if (trRef.current) {
// //             trRef.current.nodes([]);
// //             trRef.current.getLayer()?.batchDraw();
// //         }

// //         if (wasDragging) {
// //             pushHistory();
// //         }
// //     };

// //     /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

// //     const openImageReplacement = imageId => {

// //         if (!imageId) return;

// //         replaceImageIdRef.current = imageId;

// //         if (imageInputRef.current) {
// //             imageInputRef.current.value = "";
// //             imageInputRef.current.click();
// //         }
// //     };

// //     const handleReplacementFile = e => {

// //         const file = e.target.files?.[0];

// //         const imageId = replaceImageIdRef.current;

// //         if (!file || !imageId) {
// //             replaceImageIdRef.current = null;
// //             return;
// //         }

// //         if (onReplaceImage) {
// //             onReplaceImage(imageId, file);
// //         }

// //         replaceImageIdRef.current = null;

// //         e.target.value = "";
// //     };

// //     useEffect(() => {
// //         const handleGlobalPointerUp = () => {
// //             if (backgroundDraggingRef.current) {
// //                 finishBackgroundEditing();
// //             }
// //         };

// //         window.addEventListener("pointerup", handleGlobalPointerUp);
// //         window.addEventListener("mouseup", handleGlobalPointerUp);
// //         window.addEventListener("touchend", handleGlobalPointerUp);
// //         window.addEventListener("touchcancel", handleGlobalPointerUp);

// //         return () => {
// //             window.removeEventListener("pointerup", handleGlobalPointerUp);
// //             window.removeEventListener("mouseup", handleGlobalPointerUp);
// //             window.removeEventListener("touchend", handleGlobalPointerUp);
// //             window.removeEventListener("touchcancel", handleGlobalPointerUp);
// //         };
// //     }, []);
// //     /* ================= TRANSFORMER ================= */
// //     // Keep the Transformer mounted in its own permanent layer. Re-mounting the
// //     // whole layer every time selectedId changes can cause the canvas to flash
// //     // or clear in some React-Konva render cycles.
// //     useEffect(() => {
// //         const transformer = trRef.current;
// //         if (!transformer) return;

// //         const clearTransformer = () => {
// //             transformer.nodes([]);
// //             transformer.getLayer()?.batchDraw();
// //         };

// //         if (
// //             selectedId == null ||
// //             String(selectedId) === "background" ||
// //             DRAW_TOOLS.includes(tool)
// //         ) {
// //             clearTransformer();
// //             return;
// //         }

// //         const selectedKey = String(selectedId);
// //         const isIconOrTag =
// //             icons.some(item => String(item.id) === selectedKey) ||
// //             discountTags.some(item => String(item.id) === selectedKey);

// //         // Icons and discount tags must use their own registered Konva node.
// //         // Never attach the previous selection's node if their ref isn't ready.
// //         const node =
// //             nodeRegistryRef.current.get(selectedKey) ||
// //             (isIconOrTag ? null : selectedNodeRef.current);

// //         if (!node || !node.getStage() || node.getStage() !== stageRef.current) {
// //             clearTransformer();
// //             return;
// //         }

// //         selectedNodeRef.current = node;
// //         transformer.nodes([node]);
// //         transformer.forceUpdate();
// //         transformer.getLayer()?.batchDraw();
// //     }, [
// //         selectedId,
// //         activeSection,
// //         tool,
// //         texts,
// //         images,
// //         icons,
// //         shapes,
// //         blocks,
// //         borders,
// //         discountTags
// //     ]);

// //     // /* ================= toolbar ================= */
// //     useEffect(() => {
// //         if (!selectedNodeRef.current || !stageRef.current) return;

// //         const node = selectedNodeRef.current;
// //         const stage = stageRef.current;

// //         const updatePosition = () => {
// //             const box = node.getClientRect(); // ✅ absolute canvas coords
// //             const stageBox = stage.container().getBoundingClientRect(); // ✅ DOM position

// //             setToolbarPos({
// //                 x: stageBox.left + box.x + box.width / 2,
// //                 y: stageBox.top + box.y - 10
// //             });
// //         };

// //         updatePosition();

// //         node.on("dragmove transform", updatePosition);

// //         return () => {
// //             node.off("dragmove transform", updatePosition);
// //         };

// //     }, [selectedId, zoomPercent, autoScale]);

// //     useEffect(() => {
// //         const handleOutsidePointer = (e) => {
// //             if (!editingBackground) return;

// //             const stage = stageRef.current;

// //             if (!stage) return;

// //             const rect = stage.container().getBoundingClientRect();

// //             const insideStage =
// //                 e.clientX >= rect.left &&
// //                 e.clientX <= rect.right &&
// //                 e.clientY >= rect.top &&
// //                 e.clientY <= rect.bottom;

// //             // Click/pointer outside the actual canvas
// //             if (!insideStage) {
// //                 finishBackgroundEditing();
// //             }
// //         };

// //         document.addEventListener("pointerdown", handleOutsidePointer);

// //         return () => {
// //             document.removeEventListener(
// //                 "pointerdown",
// //                 handleOutsidePointer
// //             );
// //         };
// //     }, [editingBackground]);

// //     /*/////////////////////////////*/
// //     const handleApplyWordArt = (wordArt) => {
// //         const selectedText = texts?.find(
// //             (item) => String(item.id) === String(selectedId) &&
// //                 (item.type === "text" || item.text !== undefined)
// //         );

// //         if (!selectedText) {
// //             alert("Please select a text object on the canvas first.");
// //             return;
// //         }

// //         setTexts((previousTexts) =>
// //             previousTexts.map((item) => {
// //                 if (String(item.id) !== String(selectedId)) {
// //                     return item;
// //                 }

// //                 return {
// //                     ...item,
// //                     ...wordArt.style,

// //                     // Preserve the user's existing wording and placement.
// //                     text: item.text,
// //                     x: item.x,
// //                     y: item.y,
// //                     width: item.width,
// //                     rotation: item.rotation ?? 0,
// //                     id: item.id,
// //                     type: item.type,
// //                 };
// //             })
// //         );

// //         setShowWordArtLibrary(false);
// //     };

// //     /* ================= DRAWING ================= */
// //     const onMouseDown = e => {
// //         if (!DRAW_TOOLS.includes(tool)) return;

// //         // Never allow background editing while drawing
// //         if (editingBackground) {
// //             finishBackgroundEditing();
// //             return;
// //         }

// //         const stage = stageRef.current;
// //         if (!stage) return;

// //         // Drawing starts only from empty canvas
// //         if (e.target !== stage) return;

// //         const pos = stage.getPointerPosition();
// //         if (!pos) return;

// //         setIsDrawing(true);
// //         isDrawingRef.current = true;

// //         const id = createId();

// //         if (tool === "brush" || tool === "eraser") {
// //             setShapes(s => [
// //                 ...s,
// //                 {
// //                     id,
// //                     type: "free",
// //                     tool,
// //                     points: [pos.x, pos.y],
// //                     stroke: strokeColor,
// //                     strokeWidth
// //                 }
// //             ]);
// //             return;
// //         }

// //         if (tool === "line") {
// //             setShapes(s => [
// //                 ...s,
// //                 {
// //                     id,
// //                     type: "line",
// //                     lineType: lineType || "thin",
// //                     points: [pos.x, pos.y, pos.x, pos.y],
// //                     stroke: strokeColor,
// //                     strokeWidth
// //                 }
// //             ]);
// //             return;
// //         }

// //         if (tool === "rectangle") {
// //             setDraftShape({
// //                 id,
// //                 type: "rectangle",
// //                 x: pos.x,
// //                 y: pos.y,
// //                 width: 0,
// //                 height: 0,
// //                 stroke: strokeColor,
// //                 strokeWidth
// //             });
// //             return;
// //         }

// //         if (tool === "circle") {
// //             setDraftShape({
// //                 id,
// //                 type: "circle",
// //                 x: pos.x,
// //                 y: pos.y,
// //                 radius: 0,
// //                 stroke: strokeColor,
// //                 strokeWidth
// //             });
// //         }
// //     };

// //     const onMouseMove = () => {
// //         if (!isDrawing) return;

// //         const stage = stageRef.current;
// //         if (!stage) return;

// //         const pos = stage.getPointerPosition();
// //         if (!pos) return;

// //         if (tool === "brush" || tool === "eraser") {
// //             setShapes(s => {
// //                 if (!s.length) return s;

// //                 const last = { ...s[s.length - 1] };

// //                 last.points = [
// //                     ...last.points,
// //                     pos.x,
// //                     pos.y
// //                 ];

// //                 return [
// //                     ...s.slice(0, -1),
// //                     last
// //                 ];
// //             });

// //             return;
// //         }

// //         if (tool === "line") {
// //             setShapes(s => {
// //                 if (!s.length) return s;

// //                 const last = { ...s[s.length - 1] };

// //                 last.points = [
// //                     last.points[0],
// //                     last.points[1],
// //                     pos.x,
// //                     pos.y
// //                 ];

// //                 return [
// //                     ...s.slice(0, -1),
// //                     last
// //                 ];
// //             });

// //             return;
// //         }

// //         if (tool === "rectangle") {
// //             setDraftShape(d => {
// //                 if (!d) return d;

// //                 return {
// //                     ...d,
// //                     width: pos.x - d.x,
// //                     height: pos.y - d.y
// //                 };
// //             });

// //             return;
// //         }

// //         if (tool === "circle") {
// //             setDraftShape(d => {
// //                 if (!d) return d;

// //                 const dx = pos.x - d.x;
// //                 const dy = pos.y - d.y;

// //                 return {
// //                     ...d,
// //                     radius: Math.sqrt(
// //                         dx * dx + dy * dy
// //                     )
// //                 };
// //             });
// //         }
// //     };

// //     const onMouseUp = () => {
// //         if (!isDrawingRef.current) return;

// //         isDrawingRef.current = false;
// //         setIsDrawing(false);

// //         setDraftShape(currentDraft => {
// //             if (currentDraft) {
// //                 setShapes(prev => [
// //                     ...prev,
// //                     currentDraft
// //                 ]);
// //             }

// //             return null;
// //         });

// //         // ONE DRAW = ONE ACTION
// //         setTool("select");

// //         pushHistory();
// //     };
// //     // //     /* ---------------- LINE TYPES FIX ---------------- */
// //     const renderLine = s => {
// //         const [x1, y1, x2, y2] = s.points;

// //         if (s.lineType === "thin")
// //             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth} lineCap="round" />;

// //         if (s.lineType === "thick")
// //             return <Line key={s.id} points={s.points} stroke={s.stroke} strokeWidth={s.strokeWidth * 2} lineCap="round" />;

// //         const segments = 20;
// //         const lines = [];
// //         for (let i = 0; i < segments; i++) {
// //             const t1 = i / segments;
// //             const t2 = (i + 1) / segments;
// //             const sx = x1 + (x2 - x1) * t1;
// //             const sy = y1 + (y2 - y1) * t1;
// //             const ex = x1 + (x2 - x1) * t2;
// //             const ey = y1 + (y2 - y1) * t2;

// //             let width = s.strokeWidth;

// //             if (s.lineType === "thinToThick")
// //                 width = s.strokeWidth * (1 + t1);

// //             if (s.lineType === "thickToThin")
// //                 width = s.strokeWidth * (2 - t1);
// //             if (s.lineType === "thickCenter") {
// //                 const mid = Math.abs(0.5 - t1);
// //                 width = s.strokeWidth * (2 - mid * 2);
// //             }

// //             lines.push(
// //                 <Line
// //                     key={`${s.id}-${i}`}
// //                     points={[sx, sy, ex, ey]}
// //                     stroke={s.stroke}
// //                     strokeWidth={width}
// //                     lineCap="round"
// //                 />
// //             );
// //         }

// //         return lines;
// //     };

// //     /* ================= SELECTED ELEMENT ================= */

// //     const selectedElement =
// //         texts.find(t => t.id === selectedId) ||
// //         images.find(i => i.id === selectedId) ||
// //         icons.find(i => i.id === selectedId) ||
// //         shapes.find(s => s.id === selectedId) ||
// //         blocks.find(b => b.id === selectedId) ||
// //         discountTags.find(t => t.id === selectedId) ||
// //         borders.find(b => b.id === selectedId);


// //     /* ================= DELETE FUNCTION ================= */

// //     const deleteElement = () => {
// //         if (!selectedId) return;

// //         setTexts(prev => prev.filter(t => t.id !== selectedId));
// //         setImages(prev => prev.filter(i => i.id !== selectedId));
// //         if (setIcons) {
// //             setIcons(prev =>
// //                 prev.filter(i => i.id !== selectedId)
// //             );
// //         }
// //         setShapes(prev => prev.filter(s => s.id !== selectedId));
// //         setBlocks(prev => prev.filter(b => b.id !== selectedId));
// //         setDiscountTags(prev => prev.filter(t => t.id !== selectedId));
// //         setBorders(prev => prev.filter(b => b.id !== selectedId));

// //         setSelectedId(null);
// //         selectedNodeRef.current = null;

// //         pushHistory();
// //     };


// //     // return (
// //     //     <div
// //     //         ref={containerRef}
// //     //         style={{
// //     //             flex: 1,
// //     //             display: "flex",
// //     //             justifyContent: "center",
// //     //             alignItems: "center",
// //     //             position: "relative",
// //     //             overflow: "hidden",
// //     //             background:
// //     //                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
// //     //         }}
// //     //     >
// //     return (
// //         <div
// //             ref={containerRef}
// //             style={{
// //                 flex: 1,
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 position: "relative",
// //                 overflow: "hidden",
// //                 background:
// //                     "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
// //             }}
// //         >

// //             <input
// //                 ref={imageInputRef}
// //                 type="file"
// //                 accept="image/*"
// //                 style={{ display: "none" }}
// //                 onChange={handleReplacementFile}
// //             />


// //             {/* RESPONSIVE TOOLBAR SHELL */}
// //             <div
// //                 className="adstudio-toolbar-shell"
// //                 style={{
// //                     display: hideCanvasToolbar ? "none" : "flex",
// //                     position: "absolute",
// //                     top: 12,
// //                     left: "50%",
// //                     transform: "translateX(-50%)",
// //                     width: "max-content",
// //                     maxWidth: "calc(100% - 24px)",
// //                     justifyContent: "center",
// //                     alignItems: "center",
// //                     zIndex: 30,
// //                     boxSizing: "border-box",
// //                 }}
// //             >

// //                 {/* MOBILE TOGGLE BUTTON */}
// //                 <button
// //                     type="button"
// //                     className="adstudio-toolbar-toggle"
// //                     onClick={() => setIsMobileToolbarOpen((previous) => !previous)}
// //                     aria-label={isMobileToolbarOpen ? "Hide toolbar" : "Show toolbar"}
// //                     aria-expanded={isMobileToolbarOpen}
// //                     title={isMobileToolbarOpen ? "Hide tools" : "Show tools"}
// //                 >
// //                     <span className={isMobileToolbarOpen ? "toolbar-toggle-icon is-open" : "toolbar-toggle-icon"}>
// //                         {isMobileToolbarOpen ? "✕" : "☰"}
// //                     </span>
// //                     <span className="toolbar-toggle-label">
// //                         {isMobileToolbarOpen ? "Hide tools" : "Tools"}
// //                     </span>
// //                 </button>

// //                 {/* EXISTING TOOLBAR */}
// //                 <div
// //                     className={`adstudio-canvas-toolbar ${isMobileToolbarOpen
// //                         ? "adstudio-toolbar-menu-open"
// //                         : "adstudio-toolbar-menu-closed"
// //                         }`}
// //                 >
// //                     {/* KEEP YOUR EXISTING FIVE BUTTONS HERE:
// //         AI Assistance, Backgrounds, Icons, Reset, Sale Tags.
// //         Do not change their onClick handlers. */}

// //                     {/* AI ASSISTANCE */}
// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button adstudio-ai-button"
// //                         onClick={() => {
// //                             if (onOpenAIAssistance) {
// //                                 onOpenAIAssistance();
// //                             } else {
// //                                 window.dispatchEvent(
// //                                     new CustomEvent("adstudio-open-ai-assistance")
// //                                 );
// //                             }
// //                         }}
// //                         title="AI Assistance"
// //                         data-tippy-content="AI Assistance"
// //                         aria-label="Open AI Assistance"
// //                     >
// //                         <span className="adstudio-tool-icon" aria-hidden="true">
// //                             ✦
// //                         </span>
// //                         <span className="adstudio-tool-label">
// //                             AI Assistance
// //                         </span>
// //                         <span className="adstudio-beta-label">
// //                             Beta
// //                         </span>
// //                     </button>

// //                     {/* BACKGROUNDS */}
// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button adstudio-background-button"
// //                         onClick={() => onOpenClipArt?.()}
// //                         title="Backgrounds"
// //                         data-tippy-content="Backgrounds"
// //                         aria-label="Open Backgrounds Library"
// //                     >
// //                         <span className="adstudio-tool-icon" aria-hidden="true">
// //                             ▧
// //                         </span>
// //                         <span className="adstudio-tool-label">
// //                             Backgrounds
// //                         </span>
// //                     </button>

// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button"
// //                         onClick={() => setIsBusinessPhotoLibraryOpen(true)}
// //                         title="Business Photo Backgrounds"
// //                     >
// //                         <span>Business Photos</span>
// //                     </button>


// //                     {/* WORD ART */}
// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button adstudio-sale-button"
// //                         onClick={() => setShowWordArtLibrary(true)}
// //                         title="Word Art"
// //                         data-tippy-content="Word Art"
// //                         aria-label="Open Word Art Library"
// //                     >
// //                         <span className="adstudio-tool-icon" aria-hidden="true">
// //                             Aa
// //                         </span>
// //                         <span className="adstudio-tool-label">
// //                             Word Art
// //                         </span>
// //                     </button>


// //                     {/* ICONS */}
// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button adstudio-icons-button"
// //                         onClick={() => {
// //                             setSelectedId(null);
// //                             selectedNodeRef.current = null;
// //                             setEditingBackground(false);

// //                             if (trRef.current) {
// //                                 trRef.current.nodes([]);
// //                                 trRef.current.getLayer()?.batchDraw();
// //                             }

// //                             window.dispatchEvent(
// //                                 new CustomEvent("adstudio-open-icon-picker")
// //                             );
// //                         }}
// //                         title="Icons"
// //                         data-tippy-content="Icons"
// //                         aria-label="Open Icon Library"
// //                     >
// //                         <span className="adstudio-tool-icon" aria-hidden="true">
// //                             ✥
// //                         </span>
// //                         <span className="adstudio-tool-label">
// //                             Icons
// //                         </span>
// //                     </button>

// //                     {/* DISCOUNT / SALE TAGS */}
// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button adstudio-sale-button"
// //                         onClick={() => {
// //                             setSelectedId(null);
// //                             selectedNodeRef.current = null;
// //                             setEditingBackground(false);

// //                             if (trRef.current) {
// //                                 trRef.current.nodes([]);
// //                                 trRef.current.getLayer()?.batchDraw();
// //                             }

// //                             onOpenDiscountTags?.();
// //                         }}
// //                         title="Sale Tags — Discounts and Special Offers"
// //                         data-tippy-content="Sale Tags"
// //                         aria-label="Open Sale Tags Library"
// //                     >
// //                         <span className="adstudio-tool-icon" aria-hidden="true">
// //                             🏷
// //                         </span>
// //                         <span className="adstudio-tool-label">
// //                             Sale Tags
// //                         </span>
// //                     </button>


// //                     {/* RESET */}
// //                     <button
// //                         type="button"
// //                         className="adstudio-tool-button adstudio-reset-button"
// //                         onClick={onReset}
// //                         title="Reset Canvas"
// //                         data-tippy-content="Reset Canvas"
// //                         aria-label="Reset Canvas"
// //                     >
// //                         <span className="adstudio-tool-icon" aria-hidden="true">
// //                             ↻
// //                         </span>
// //                         <span className="adstudio-tool-label">
// //                             Reset
// //                         </span>
// //                     </button>


// //                 </div>


// //             </div>




// //             {/* ================= END RESPONSIVE CANVAS TOOLBAR ================= */}



// //             {/* ZOOM CONTROLLER */}

// //             <div
// //                 style={{
// //                     position: "absolute",
// //                     bottom: 20,
// //                     right: 25,
// //                     display: "flex",
// //                     alignItems: "center",
// //                     gap: 10,
// //                     background: "#ffffff",
// //                     padding: "8px 12px",
// //                     borderRadius: 10,
// //                     boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
// //                     zIndex: 20
// //                 }}
// //             >

// //                 <button
// //                     onClick={decreaseZoom}
// //                     style={{
// //                         fontSize: 18,
// //                         width: 28,
// //                         height: 28,
// //                         borderRadius: 6,
// //                         border: "1px solid #cbd5e1",
// //                         background: "#fff"
// //                     }}
// //                 >
// //                     −
// //                 </button>

// //                 <input
// //                     type="range"
// //                     min="50"
// //                     max="300"
// //                     step="25"
// //                     value={zoomPercent}
// //                     onChange={e => setZoomPercent(Number(e.target.value))}
// //                     style={{ width: 100 }}
// //                 />

// //                 <button
// //                     onClick={increaseZoom}
// //                     style={{
// //                         fontSize: 18,
// //                         width: 28,
// //                         height: 28,
// //                         borderRadius: 6,
// //                         border: "1px solid #cbd5e1",
// //                         background: "#fff"
// //                     }}
// //                 >
// //                     +
// //                 </button>

// //                 <select
// //                     value={zoomPercent}
// //                     onChange={e => setZoomPercent(Number(e.target.value))}
// //                     style={{
// //                         border: "1px solid #cbd5e1",
// //                         borderRadius: 6,
// //                         padding: "2px 6px"
// //                     }}
// //                 >
// //                     {zoomLevels.map(z => (
// //                         <option key={z} value={z}>{z}%</option>
// //                     ))}
// //                 </select>

// //             </div>


// //             {/* =========================================================
// //     ICON COLOR CONTROL
// // ========================================================= */}

// //             {selectedElement?.type === "icon" && (
// //                 <div
// //                     style={{
// //                         position: "fixed",

// //                         left:
// //                             toolbarPos.x,

// //                         top:
// //                             toolbarPos.y + 38,

// //                         transform:
// //                             "translateX(-50%)",

// //                         zIndex: 100,

// //                         display: "flex",

// //                         alignItems: "center",

// //                         gap: 8,

// //                         padding:
// //                             "7px 10px",

// //                         borderRadius: 10,

// //                         background:
// //                             "#ffffff",

// //                         border:
// //                             "1px solid #e2e8f0",

// //                         boxShadow:
// //                             "0 10px 30px rgba(0,0,0,0.16)"
// //                     }}
// //                 >

// //                     <span
// //                         style={{
// //                             fontSize: 11,
// //                             fontWeight: 600,
// //                             color: "#475569"
// //                         }}
// //                     >
// //                         Color
// //                     </span>

// //                     <input
// //                         type="color"
// //                         value={
// //                             selectedElement.color ||
// //                             "#0b1f33"
// //                         }
// //                         onChange={e => {

// //                             if (
// //                                 onIconColorChange
// //                             ) {
// //                                 onIconColorChange(
// //                                     selectedElement.id,
// //                                     e.target.value
// //                                 );
// //                             }
// //                         }}
// //                         style={{
// //                             width: 30,
// //                             height: 30,

// //                             padding: 0,

// //                             border: 0,

// //                             background:
// //                                 "transparent",

// //                             cursor: "pointer"
// //                         }}
// //                     />

// //                 </div>
// //             )}


// //             {/* ================= DISCOUNT TAG EDITOR ================= */}

// //             {selectedElement?.type === "discountTag" && (
// //                 <div
// //                     style={{
// //                         position: "fixed",
// //                         left: toolbarPos.x,
// //                         top: toolbarPos.y + 38,
// //                         transform: "translateX(-50%)",
// //                         zIndex: 110,
// //                         display: "flex",
// //                         alignItems: "center",
// //                         flexWrap: "wrap",
// //                         gap: 8,
// //                         padding: 10,
// //                         borderRadius: 12,
// //                         background: "#ffffff",
// //                         border: "1px solid #e2e8f0",
// //                         boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
// //                         maxWidth: "calc(100vw - 24px)",
// //                     }}
// //                 >
// //                     <input
// //                         aria-label="Discount tag text"
// //                         value={selectedElement.text}
// //                         maxLength={40}
// //                         onChange={e => {
// //                             const text = e.target.value;

// //                             setDiscountTags(prev =>
// //                                 prev.map(tag =>
// //                                     tag.id === selectedId
// //                                         ? { ...tag, text }
// //                                         : tag
// //                                 )
// //                             );
// //                         }}
// //                         onBlur={() => pushHistory()}
// //                         style={{
// //                             width: 140,
// //                             minWidth: 0,
// //                             padding: "7px 9px",
// //                             border: "1px solid #cbd5e1",
// //                             borderRadius: 7,
// //                             fontSize: 13,
// //                         }}
// //                     />

// //                     <label title="Tag background color">
// //                         <input
// //                             aria-label="Tag background color"
// //                             type="color"
// //                             value={selectedElement.fill || "#dc2626"}
// //                             onChange={e => {
// //                                 const fill = e.target.value;

// //                                 setDiscountTags(prev =>
// //                                     prev.map(tag =>
// //                                         tag.id === selectedId
// //                                             ? { ...tag, fill }
// //                                             : tag
// //                                     )
// //                                 );
// //                             }}
// //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// //                         />
// //                     </label>

// //                     <label title="Tag text color">
// //                         <input
// //                             aria-label="Tag text color"
// //                             type="color"
// //                             value={selectedElement.textColor || "#ffffff"}
// //                             onChange={e => {
// //                                 const textColor = e.target.value;

// //                                 setDiscountTags(prev =>
// //                                     prev.map(tag =>
// //                                         tag.id === selectedId
// //                                             ? { ...tag, textColor }
// //                                             : tag
// //                                     )
// //                                 );
// //                             }}
// //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// //                         />
// //                     </label>

// //                     <label title="Tag border color">
// //                         <input
// //                             aria-label="Tag border color"
// //                             type="color"
// //                             value={selectedElement.borderColor || "#991b1b"}
// //                             onChange={e => {
// //                                 const borderColor = e.target.value;

// //                                 setDiscountTags(prev =>
// //                                     prev.map(tag =>
// //                                         tag.id === selectedId
// //                                             ? { ...tag, borderColor }
// //                                             : tag
// //                                     )
// //                                 );
// //                             }}
// //                             style={{ width: 30, height: 30, cursor: "pointer" }}
// //                         />
// //                     </label>
// //                 </div>
// //             )}


// //             <FloatingToolbar
// //                 element={selectedElement}
// //                 onDelete={deleteElement}
// //                 onEdit={() => {

// //                     if (!selectedElement) return;

// //                     if (selectedElement.text) {
// //                         setActiveSection("text");
// //                         return;
// //                     }

// //                     if (selectedElement.type === "icon") {
// //                         return;
// //                     }

// //                     if (selectedElement.image) {
// //                         setActiveSection("image");
// //                         return;
// //                     }

// //                     setActiveSection("shapes");
// //                 }}

// //                 onDuplicate={() => {
// //                     if (!selectedElement) return;

// //                     if (selectedElement.type === "icon") {

// //                         const duplicated = {
// //                             ...selectedElement,

// //                             id: createId(),

// //                             x:
// //                                 selectedElement.x + 30,

// //                             y:
// //                                 selectedElement.y + 30
// //                         };

// //                         setIcons(prev => [
// //                             ...prev,
// //                             duplicated
// //                         ]);

// //                         setSelectedId(
// //                             duplicated.id
// //                         );

// //                         setTimeout(() => {
// //                             pushHistory();
// //                         }, 0);

// //                         return;
// //                     }

// //                     // TEXT DUPLICATION
// //                     if (selectedElement.text) {

// //                         const duplicated = {
// //                             ...selectedElement,
// //                             id: Date.now(),
// //                             x: selectedElement.x + 30,
// //                             y: selectedElement.y + 30
// //                         };

// //                         setTexts(prev => [...prev, duplicated]);

// //                         setSelectedId(duplicated.id);

// //                         setTimeout(() => {
// //                             pushHistory();
// //                         }, 0);
// //                     }
// //                 }}
// //                 position={toolbarPos}
// //                 activeSection={activeSection} // ✅ ADD
// //             />

// //             {/* CENTERING WRAPPER */}

// //             <div
// //                 style={{
// //                     display: "flex",
// //                     justifyContent: "center",
// //                     alignItems: "center",
// //                     minWidth: "100%",
// //                     minHeight: "100%",
// //                     padding: 40
// //                 }}
// //             >

// //                 {/* SCALE WRAPPER */}

// //                 <div
// //                     style={{
// //                         transform: `scale(${finalScale})`,
// //                         transformOrigin: "center center",
// //                         transition: "transform 0.2s ease"
// //                     }}
// //                 >
// //                     <div
// //                         ref={canvasWrapperRef}
// //                         style={{
// //                             position: "relative",

// //                             background:
// //                                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #12385d 70%, #1e4f7a 100%)",

// //                             borderRadius: 26,

// //                             padding: 18,

// //                             boxShadow:
// //                                 "0 25px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",

// //                             overflow: "hidden",

// //                             border: "1px solid rgba(255,255,255,0.08)",

// //                             backdropFilter: "blur(10px)"
// //                         }}
// //                     >

// //                         <Stage
// //                             ref={(node) => {
// //                                 stageRef.current = node;
// //                                 if (ref) ref.current = node;
// //                             }}
// //                             width={W}
// //                             height={H}
// //                             onMouseDown={onMouseDown}
// //                             onMouseMove={onMouseMove}
// //                             onMouseUp={onMouseUp}
// //                             onMouseLeave={onMouseUp}

// //                             onTouchStart={onMouseDown}
// //                             onTouchMove={onMouseMove}
// //                             onTouchEnd={onMouseUp}
// //                             onTouchCancel={onMouseUp}
// //                             onClick={e => {
// //                                 if (e.target === e.target.getStage()) {
// //                                     setSelectedId(null);
// //                                     selectedNodeRef.current = null;

// //                                     if (!isDrawing) {
// //                                         setEditingBackground(false);
// //                                     }
// //                                 }
// //                             }}
// //                             onTap={e => {
// //                                 if (e.target === e.target.getStage()) {
// //                                     setSelectedId(null);
// //                                     selectedNodeRef.current = null;

// //                                     if (!isDrawing) {
// //                                         setEditingBackground(false);
// //                                     }
// //                                 }
// //                             }}

// //                         // onMouseDown={(e) => {
// //                         //     const clickedOnEmpty =
// //                         //         e.target === e.target.getStage();

// //                         //     if (clickedOnEmpty) {
// //                         //         setSelectedId(null);
// //                         //         setEditingBackground(false);
// //                         //     }
// //                         // }}

// //                         // onTouchStart={(e) => {
// //                         //     const clickedOnEmpty =
// //                         //         e.target === e.target.getStage();

// //                         //     if (clickedOnEmpty) {
// //                         //         setSelectedId(null);
// //                         //         setEditingBackground(false);
// //                         //     }
// //                         // }}
// //                         //////////////////////////////////////////////////////////
// //                         // onMouseDown={e => {
// //                         //     if (e.target === e.target.getStage()) {
// //                         //         setSelectedId(null);
// //                         //         setEditingBackground(false);
// //                         //     }
// //                         // }}

// //                         // onTouchStart={e => {
// //                         //     if (e.target === e.target.getStage()) {
// //                         //         setSelectedId(null);
// //                         //         setEditingBackground(false);
// //                         //     }
// //                         // }}


// //                         >

// //                             {/* BACKGROUND */}

// //                             <Layer listening={true}>

// //                                 {/* default background */}
// //                                 <Rect
// //                                     width={W}
// //                                     height={H}
// //                                     fill={background?.value || "#f8fafc"}
// //                                     listening={false}
// //                                 />

// //                                 {/* BACKGROUND IMAGE */}
// //                                 {background?.type === "image" && background.image && (
// //                                     <KonvaImage
// //                                         image={background.image}

// //                                         x={background.x ?? 0}
// //                                         y={background.y ?? 0}

// //                                         width={background.width ?? W}
// //                                         height={background.height ?? H}

// //                                         crop={background.crop}

// //                                         rotation={background.rotation || 0}

// //                                         listening={!DRAW_TOOLS.includes(tool)}

// //                                         draggable={editingBackground}

// //                                         onDblClick={(e) => {

// //                                             if (DRAW_TOOLS.includes(tool)) return;

// //                                             e.cancelBubble = true;

// //                                             const node = e.target;

// //                                             setEditingBackground(true);

// //                                             setSelectedId("background");

// //                                             selectedNodeRef.current = node;

// //                                             requestAnimationFrame(() => {
// //                                                 node.draggable(true);
// //                                             });
// //                                         }}

// //                                         onDblTap={(e) => {

// //                                             if (DRAW_TOOLS.includes(tool)) return;

// //                                             e.cancelBubble = true;

// //                                             const node = e.target;

// //                                             setEditingBackground(true);

// //                                             setSelectedId("background");

// //                                             selectedNodeRef.current = node;

// //                                             requestAnimationFrame(() => {
// //                                                 node.draggable(true);
// //                                             });
// //                                         }}

// //                                         onDragEnd={(e) => {

// //                                             if (!editingBackground) {
// //                                                 e.target.stopDrag();
// //                                                 return;
// //                                             }

// //                                             const node = e.target;

// //                                             const { x, y } =
// //                                                 node.position();

// //                                             setBackground(prev => ({
// //                                                 ...prev,
// //                                                 x,
// //                                                 y
// //                                             }));

// //                                             node.stopDrag();
// //                                             node.draggable(false);

// //                                             setEditingBackground(false);

// //                                             setSelectedId(null);

// //                                             selectedNodeRef.current = null;

// //                                             pushHistory();
// //                                         }}
// //                                     />
// //                                 )}


// //                                 {background?.type === "business-photo" && (
// //                                     <BusinessPhotoCanvasBackground
// //                                         background={background}
// //                                         width={W}
// //                                         height={H}
// //                                     />
// //                                 )}
// //                             </Layer>


// //                             {/* BLOCKS */}

// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// //                                 {blocks.map(b => {
// //                                     const shape = getBlockShape(b);
// //                                     if (!shape) return null;

// //                                     return (
// //                                         <shape.type
// //                                             {...shape.props}
// //                                             key={b.id}
// //                                             draggable

// //                                             onClick={(e) => {
// //                                                 setEditingBackground(false);
// //                                                 e.cancelBubble = true;
// //                                                 setSelectedId(b.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}
// //                                             onTap={(e) => {
// //                                                 setEditingBackground(false);
// //                                                 e.cancelBubble = true;
// //                                                 setSelectedId(b.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onDragEnd={(e) => {
// //                                                 const { x, y } = e.target.position();
// //                                                 setBlocks(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === b.id ? { ...item, x, y } : item
// //                                                     )
// //                                                 );
// //                                                 pushHistory();
// //                                             }}

// //                                             onTransformEnd={(e) => {
// //                                                 const node = e.target;
// //                                                 const scaleX = node.scaleX();
// //                                                 const scaleY = node.scaleY();
// //                                                 node.scaleX(1);
// //                                                 node.scaleY(1);

// //                                                 const updated = {
// //                                                     x: node.x(),
// //                                                     y: node.y(),
// //                                                     width: Math.max(10, b.width * scaleX),
// //                                                     height: Math.max(10, b.height * scaleY),
// //                                                     rotation: node.rotation()
// //                                                 };

// //                                                 setBlocks(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === b.id ? { ...item, ...updated } : item
// //                                                     )
// //                                                 );
// //                                                 pushHistory();
// //                                             }}
// //                                         />
// //                                     );
// //                                 })}
// //                             </Layer>


// //                             {/* IMAGES */}

// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

// //                                 {images.map(img => (
// //                                     <KonvaImage
// //                                         key={img.id}

// //                                         x={img.x}
// //                                         y={img.y}

// //                                         width={img.width}
// //                                         height={img.height}

// //                                         rotation={img.rotation || 0}

// //                                         image={img.image}

// //                                         onDblClick={e => {

// //                                             if (DRAW_TOOLS.includes(tool)) return;

// //                                             // Only template logo and template decorative photos
// //                                             if (
// //                                                 img.assetType !== "logo" &&
// //                                                 img.assetType !== "photo"
// //                                             ) {
// //                                                 return;
// //                                             }

// //                                             e.cancelBubble = true;

// //                                             setEditingBackground(false);

// //                                             setSelectedId(img.id);

// //                                             selectedNodeRef.current = e.target;

// //                                             openImageReplacement(img.id);
// //                                         }}

// //                                         onDblTap={e => {

// //                                             if (DRAW_TOOLS.includes(tool)) return;

// //                                             // Only template logo and template decorative photos
// //                                             if (
// //                                                 img.assetType !== "logo" &&
// //                                                 img.assetType !== "photo"
// //                                             ) {
// //                                                 return;
// //                                             }

// //                                             e.cancelBubble = true;

// //                                             setEditingBackground(false);

// //                                             setSelectedId(img.id);

// //                                             selectedNodeRef.current = e.target;

// //                                             openImageReplacement(img.id);
// //                                         }}

// //                                         draggable={!DRAW_TOOLS.includes(tool)}

// //                                         listening={!DRAW_TOOLS.includes(tool)}

// //                                         onClick={e => {

// //                                             setEditingBackground(false);

// //                                             e.cancelBubble = true;

// //                                             setSelectedId(img.id);

// //                                             selectedNodeRef.current =
// //                                                 e.target;
// //                                         }}

// //                                         onTap={e => {

// //                                             setEditingBackground(false);

// //                                             e.cancelBubble = true;

// //                                             setSelectedId(img.id);

// //                                             selectedNodeRef.current =
// //                                                 e.target;
// //                                         }}

// //                                         onDragEnd={e => {

// //                                             const { x, y } =
// //                                                 e.target.position();

// //                                             setImages(prev =>
// //                                                 prev.map(item =>
// //                                                     item.id === img.id
// //                                                         ? {
// //                                                             ...item,
// //                                                             x,
// //                                                             y
// //                                                         }
// //                                                         : item
// //                                                 )
// //                                             );

// //                                             pushHistory();
// //                                         }}

// //                                         onTransformEnd={e => {

// //                                             const node = e.target;

// //                                             const scaleX =
// //                                                 node.scaleX();

// //                                             const scaleY =
// //                                                 node.scaleY();

// //                                             const newWidth =
// //                                                 Math.max(
// //                                                     20,
// //                                                     node.width() *
// //                                                     scaleX
// //                                                 );

// //                                             const newHeight =
// //                                                 Math.max(
// //                                                     20,
// //                                                     node.height() *
// //                                                     scaleY
// //                                                 );

// //                                             node.scaleX(1);
// //                                             node.scaleY(1);

// //                                             setImages(prev =>
// //                                                 prev.map(item =>
// //                                                     item.id === img.id
// //                                                         ? {
// //                                                             ...item,

// //                                                             x: node.x(),
// //                                                             y: node.y(),

// //                                                             width: newWidth,
// //                                                             height: newHeight,

// //                                                             rotation:
// //                                                                 node.rotation()
// //                                                         }
// //                                                         : item
// //                                                 )
// //                                             );

// //                                             pushHistory();
// //                                         }}

// //                                     />
// //                                 ))}

// //                             </Layer>


// //                             {/* =========================================================
// //     ICONS
// // ========================================================= */}

// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

// //                                 {icons.map(icon => {

// //                                     if (!icon.image) {
// //                                         return null;
// //                                     }

// //                                     return (

// //                                         <KonvaImage
// //                                             key={icon.id}
// //                                             ref={node => registerNode(icon.id, node)}
// //                                             image={icon.image}


// //                                             x={icon.x}
// //                                             y={icon.y}

// //                                             width={icon.width}
// //                                             height={icon.height}

// //                                             rotation={
// //                                                 icon.rotation || 0
// //                                             }

// //                                             draggable={
// //                                                 !DRAW_TOOLS.includes(tool)
// //                                             }

// //                                             listening={
// //                                                 !DRAW_TOOLS.includes(tool)
// //                                             }

// //                                             onClick={e => {

// //                                                 if (
// //                                                     DRAW_TOOLS.includes(
// //                                                         tool
// //                                                     )
// //                                                 ) {
// //                                                     return;
// //                                                 }

// //                                                 setEditingBackground(
// //                                                     false
// //                                                 );

// //                                                 e.cancelBubble = true;

// //                                                 setSelectedId(
// //                                                     icon.id
// //                                                 );

// //                                                 selectedNodeRef.current =
// //                                                     e.target;
// //                                             }}

// //                                             onTap={e => {

// //                                                 if (
// //                                                     DRAW_TOOLS.includes(
// //                                                         tool
// //                                                     )
// //                                                 ) {
// //                                                     return;
// //                                                 }

// //                                                 setEditingBackground(
// //                                                     false
// //                                                 );

// //                                                 e.cancelBubble = true;

// //                                                 setSelectedId(
// //                                                     icon.id
// //                                                 );

// //                                                 selectedNodeRef.current =
// //                                                     e.target;
// //                                             }}

// //                                             onDragEnd={e => {

// //                                                 const {
// //                                                     x,
// //                                                     y
// //                                                 } =
// //                                                     e.target.position();

// //                                                 setIcons(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === icon.id
// //                                                             ? {
// //                                                                 ...item,
// //                                                                 x,
// //                                                                 y
// //                                                             }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}

// //                                             onTransformEnd={e => {

// //                                                 const node =
// //                                                     e.target;

// //                                                 const scaleX =
// //                                                     node.scaleX();

// //                                                 const scaleY =
// //                                                     node.scaleY();

// //                                                 const newWidth =
// //                                                     Math.max(
// //                                                         20,
// //                                                         node.width() *
// //                                                         scaleX
// //                                                     );

// //                                                 const newHeight =
// //                                                     Math.max(
// //                                                         20,
// //                                                         node.height() *
// //                                                         scaleY
// //                                                     );

// //                                                 node.scaleX(1);
// //                                                 node.scaleY(1);

// //                                                 setIcons(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === icon.id
// //                                                             ? {
// //                                                                 ...item,

// //                                                                 x: node.x(),
// //                                                                 y: node.y(),

// //                                                                 width:
// //                                                                     newWidth,

// //                                                                 height:
// //                                                                     newHeight,

// //                                                                 rotation:
// //                                                                     node.rotation()
// //                                                             }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}
// //                                         />
// //                                     );
// //                                 })}

// //                             </Layer>


// //                             {/* ================= DISCOUNT / SALE TAGS ================= */}

// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// //                                 {discountTags.map(tag => (

// //                                     <Group
// //                                         key={tag.id}
// //                                         ref={node => registerNode(tag.id, node)}
// //                                         x={tag.x}
// //                                         y={tag.y}

// //                                         scaleX={tag.width / 150}
// //                                         scaleY={tag.height / 100}
// //                                         rotation={tag.rotation || 0}
// //                                         draggable={!DRAW_TOOLS.includes(tool)}
// //                                         onClick={e => {
// //                                             if (DRAW_TOOLS.includes(tool)) return;

// //                                             e.cancelBubble = true;
// //                                             setEditingBackground(false);
// //                                             setSelectedId(tag.id);
// //                                             selectedNodeRef.current = e.currentTarget;
// //                                         }}
// //                                         onTap={e => {
// //                                             if (DRAW_TOOLS.includes(tool)) return;

// //                                             e.cancelBubble = true;
// //                                             setEditingBackground(false);
// //                                             setSelectedId(tag.id);
// //                                             selectedNodeRef.current = e.currentTarget;
// //                                         }}
// //                                         onDragEnd={e => {
// //                                             const node = e.currentTarget;
// //                                             const { x, y } = node.position();

// //                                             setDiscountTags(prev =>
// //                                                 prev.map(item =>
// //                                                     item.id === tag.id ? { ...item, x, y } : item
// //                                                 )
// //                                             );

// //                                             pushHistory();
// //                                         }}
// //                                         onTransformEnd={e => {
// //                                             const node = e.currentTarget;

// //                                             const newWidth = Math.max(35, 150 * node.scaleX());
// //                                             const newHeight = Math.max(25, 100 * node.scaleY());

// //                                             const updated = {
// //                                                 x: node.x(),
// //                                                 y: node.y(),
// //                                                 width: newWidth,
// //                                                 height: newHeight,
// //                                                 rotation: node.rotation(),
// //                                             };

// //                                             node.scaleX(newWidth / 150);
// //                                             node.scaleY(newHeight / 100);

// //                                             setDiscountTags(prev =>
// //                                                 prev.map(item =>
// //                                                     item.id === tag.id
// //                                                         ? { ...item, ...updated }
// //                                                         : item
// //                                                 )
// //                                             );

// //                                             pushHistory();
// //                                         }}
// //                                     >
// //                                         {/* TAG SHAPE */}
// //                                         {tag.shape === "burst" && (
// //                                             <Star
// //                                                 x={75}
// //                                                 y={50}
// //                                                 numPoints={12}
// //                                                 innerRadius={35}
// //                                                 outerRadius={45}
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                                 shadowColor="#000000"
// //                                                 shadowBlur={3}
// //                                                 shadowOpacity={0.12}
// //                                             />
// //                                         )}

// //                                         {tag.shape === "circle" && (
// //                                             <Circle
// //                                                 x={75}
// //                                                 y={50}
// //                                                 radius={42}
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                             />
// //                                         )}

// //                                         {tag.shape === "rounded" && (
// //                                             <Rect
// //                                                 x={18}
// //                                                 y={22}
// //                                                 width={114}
// //                                                 height={56}
// //                                                 cornerRadius={15}
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                             />
// //                                         )}

// //                                         {tag.shape === "rectangle" && (
// //                                             <Rect
// //                                                 x={10}
// //                                                 y={27}
// //                                                 width={130}
// //                                                 height={46}
// //                                                 cornerRadius={3}
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                             />
// //                                         )}

// //                                         {tag.shape === "ribbon" && (
// //                                             <Line
// //                                                 points={[
// //                                                     15, 18, 135, 18, 135, 80,
// //                                                     115, 68, 95, 80, 75, 68,
// //                                                     55, 80, 35, 68, 15, 80
// //                                                 ]}
// //                                                 closed
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                                 lineJoin="round"
// //                                             />
// //                                         )}

// //                                         {tag.shape === "bookmark" && (
// //                                             <Line
// //                                                 points={[42, 8, 108, 8, 108, 92, 75, 73, 42, 92]}
// //                                                 closed
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                                 lineJoin="round"
// //                                             />
// //                                         )}

// //                                         {tag.shape === "hexagon" && (
// //                                             <RegularPolygon
// //                                                 x={75}
// //                                                 y={50}
// //                                                 sides={6}
// //                                                 radius={43}
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                             />
// //                                         )}

// //                                         {tag.shape === "ticket" && (
// //                                             <Line
// //                                                 points={[
// //                                                     12, 22, 138, 22, 138, 39,
// //                                                     127, 50, 138, 61, 138, 78,
// //                                                     12, 78, 12, 61, 23, 50, 12, 39
// //                                                 ]}
// //                                                 closed
// //                                                 fill={tag.fill}
// //                                                 stroke={tag.borderColor}
// //                                                 strokeWidth={2}
// //                                                 lineJoin="round"
// //                                             />
// //                                         )}

// //                                         {/* EDITABLE TEXT */}
// //                                         <Text
// //                                             x={15}
// //                                             y={30}
// //                                             width={120}
// //                                             height={40}
// //                                             text={tag.text}
// //                                             fill={tag.textColor}
// //                                             fontSize={
// //                                                 tag.text.length > 12
// //                                                     ? 11
// //                                                     : tag.text.length > 8
// //                                                         ? 14
// //                                                         : 18
// //                                             }
// //                                             fontFamily="Arial"
// //                                             fontStyle="bold"
// //                                             align="center"
// //                                             verticalAlign="middle"
// //                                             wrap="word"
// //                                             listening={false}
// //                                         />
// //                                     </Group>
// //                                 ))}
// //                             </Layer>

// //                             {/* ================= BORDERS ================= */}

// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// //                                 {borders.map(border => {

// //                                     const isSelected = selectedId === border.id;

// //                                     const dash =
// //                                         border.style === "dashed"
// //                                             ? [18, 10]
// //                                             : border.style === "dotted"
// //                                                 ? [3, 8]
// //                                                 : undefined;

// //                                     if (border.style === "double") {
// //                                         return (
// //                                             <Fragment key={border.id}>

// //                                                 {/* OUTER BORDER */}
// //                                                 <Rect
// //                                                     x={border.x}
// //                                                     y={border.y}
// //                                                     width={border.width}
// //                                                     height={border.height}
// //                                                     stroke={border.stroke}
// //                                                     strokeWidth={border.strokeWidth}
// //                                                     cornerRadius={border.cornerRadius || 0}
// //                                                     dash={undefined}
// //                                                     fillEnabled={false}
// //                                                     draggable

// //                                                     onClick={e => {
// //                                                         if (DRAW_TOOLS.includes(tool)) return;

// //                                                         setEditingBackground(false);

// //                                                         e.cancelBubble = true;

// //                                                         setSelectedId(border.id);
// //                                                         selectedNodeRef.current = e.target;
// //                                                     }}

// //                                                     onTap={e => {
// //                                                         if (DRAW_TOOLS.includes(tool)) return;

// //                                                         setEditingBackground(false);

// //                                                         e.cancelBubble = true;

// //                                                         setSelectedId(border.id);
// //                                                         selectedNodeRef.current = e.target;
// //                                                     }}

// //                                                     onDragEnd={e => {
// //                                                         const { x, y } = e.target.position();

// //                                                         setBorders(prev =>
// //                                                             prev.map(item =>
// //                                                                 item.id === border.id
// //                                                                     ? { ...item, x, y }
// //                                                                     : item
// //                                                             )
// //                                                         );

// //                                                         pushHistory();
// //                                                     }}

// //                                                     onTransformEnd={e => {
// //                                                         const node = e.target;

// //                                                         const scaleX = node.scaleX();
// //                                                         const scaleY = node.scaleY();

// //                                                         node.scaleX(1);
// //                                                         node.scaleY(1);

// //                                                         const updated = {
// //                                                             x: node.x(),
// //                                                             y: node.y(),
// //                                                             width: Math.max(
// //                                                                 20,
// //                                                                 node.width() * scaleX
// //                                                             ),
// //                                                             height: Math.max(
// //                                                                 20,
// //                                                                 node.height() * scaleY
// //                                                             )
// //                                                         };

// //                                                         setBorders(prev =>
// //                                                             prev.map(item =>
// //                                                                 item.id === border.id
// //                                                                     ? { ...item, ...updated }
// //                                                                     : item
// //                                                             )
// //                                                         );

// //                                                         pushHistory();
// //                                                     }}
// //                                                 />

// //                                                 {/* INNER BORDER */}
// //                                                 <Rect
// //                                                     x={
// //                                                         border.x +
// //                                                         border.strokeWidth * 3
// //                                                     }
// //                                                     y={
// //                                                         border.y +
// //                                                         border.strokeWidth * 3
// //                                                     }
// //                                                     width={Math.max(
// //                                                         1,
// //                                                         border.width -
// //                                                         border.strokeWidth * 6
// //                                                     )}
// //                                                     height={Math.max(
// //                                                         1,
// //                                                         border.height -
// //                                                         border.strokeWidth * 6
// //                                                     )}
// //                                                     stroke={border.stroke}
// //                                                     strokeWidth={Math.max(
// //                                                         1,
// //                                                         border.strokeWidth / 2
// //                                                     )}
// //                                                     cornerRadius={Math.max(
// //                                                         0,
// //                                                         (border.cornerRadius || 0) -
// //                                                         border.strokeWidth * 2
// //                                                     )}
// //                                                     listening={false}
// //                                                 />

// //                                             </Fragment>
// //                                         );
// //                                     }

// //                                     return (
// //                                         <Rect
// //                                             key={border.id}

// //                                             x={border.x}
// //                                             y={border.y}

// //                                             width={border.width}
// //                                             height={border.height}

// //                                             stroke={border.stroke}
// //                                             strokeWidth={border.strokeWidth}

// //                                             dash={dash}

// //                                             cornerRadius={border.cornerRadius || 0}

// //                                             fillEnabled={false}

// //                                             draggable

// //                                             onClick={e => {
// //                                                 if (DRAW_TOOLS.includes(tool)) return;

// //                                                 setEditingBackground(false);

// //                                                 e.cancelBubble = true;

// //                                                 setSelectedId(border.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onTap={e => {
// //                                                 if (DRAW_TOOLS.includes(tool)) return;

// //                                                 setEditingBackground(false);

// //                                                 e.cancelBubble = true;

// //                                                 setSelectedId(border.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onDragEnd={e => {
// //                                                 const { x, y } = e.target.position();

// //                                                 setBorders(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === border.id
// //                                                             ? { ...item, x, y }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}

// //                                             onTransformEnd={e => {
// //                                                 const node = e.target;

// //                                                 const scaleX = node.scaleX();
// //                                                 const scaleY = node.scaleY();

// //                                                 node.scaleX(1);
// //                                                 node.scaleY(1);

// //                                                 const updated = {
// //                                                     x: node.x(),
// //                                                     y: node.y(),

// //                                                     width: Math.max(
// //                                                         20,
// //                                                         node.width() * scaleX
// //                                                     ),

// //                                                     height: Math.max(
// //                                                         20,
// //                                                         node.height() * scaleY
// //                                                     )
// //                                                 };

// //                                                 setBorders(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === border.id
// //                                                             ? { ...item, ...updated }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}
// //                                         />
// //                                     );
// //                                 })}
// //                             </Layer>

// //                             {/* SHAPES */}

// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// //                                 {shapes.map(s => {

// //                                     if (s.type === "free") {
// //                                         return (
// //                                             <Line
// //                                                 key={s.id}
// //                                                 points={s.points}
// //                                                 stroke={s.stroke}
// //                                                 strokeWidth={s.strokeWidth}
// //                                                 tension={0.5}
// //                                                 lineCap="round"
// //                                                 lineJoin="round"
// //                                                 globalCompositeOperation={
// //                                                     s.tool === "eraser"
// //                                                         ? "destination-out"
// //                                                         : "source-over"
// //                                                 }
// //                                             />
// //                                         );
// //                                     }

// //                                     if (s.type === "line") {
// //                                         return renderLine(s);
// //                                     }

// //                                     if (s.type === "rectangle") {
// //                                         return (
// //                                             <Rect
// //                                                 key={s.id}
// //                                                 {...s}
// //                                                 draggable

// //                                                 onClick={(e) => {
// //                                                     setEditingBackground(false);
// //                                                     e.cancelBubble = true;
// //                                                     setSelectedId(s.id);
// //                                                     selectedNodeRef.current = e.target;
// //                                                 }}

// //                                                 onTap={(e) => {
// //                                                     setEditingBackground(false);
// //                                                     e.cancelBubble = true;
// //                                                     setSelectedId(s.id);
// //                                                     selectedNodeRef.current = e.target;
// //                                                 }}

// //                                                 onDragEnd={(e) => {
// //                                                     const { x, y } = e.target.position();

// //                                                     setShapes(prev =>
// //                                                         prev.map(item =>
// //                                                             item.id === s.id ? { ...item, x, y } : item
// //                                                         )
// //                                                     );

// //                                                     pushHistory();
// //                                                 }}

// //                                                 onTransformEnd={(e) => {
// //                                                     const node = e.target;

// //                                                     const scaleX = node.scaleX();
// //                                                     const scaleY = node.scaleY();

// //                                                     node.scaleX(1);
// //                                                     node.scaleY(1);

// //                                                     const updated = {
// //                                                         x: node.x(),
// //                                                         y: node.y(),
// //                                                         width: Math.max(10, node.width() * scaleX),
// //                                                         height: Math.max(10, node.height() * scaleY),
// //                                                         rotation: node.rotation()
// //                                                     };

// //                                                     setShapes(prev =>
// //                                                         prev.map(item =>
// //                                                             item.id === s.id ? { ...item, ...updated } : item
// //                                                         )
// //                                                     );

// //                                                     pushHistory();
// //                                                 }}
// //                                             />
// //                                         );
// //                                     }

// //                                     if (s.type === "circle") {
// //                                         return (
// //                                             <Circle
// //                                                 key={s.id}
// //                                                 {...s}
// //                                                 draggable

// //                                                 onClick={(e) => {
// //                                                     setEditingBackground(false);
// //                                                     e.cancelBubble = true;
// //                                                     setSelectedId(s.id);
// //                                                     selectedNodeRef.current = e.target;
// //                                                 }}

// //                                                 onTap={(e) => {
// //                                                     setEditingBackground(false);
// //                                                     e.cancelBubble = true;
// //                                                     setSelectedId(s.id);
// //                                                     selectedNodeRef.current = e.target;
// //                                                 }}

// //                                                 onDragEnd={(e) => {
// //                                                     const { x, y } = e.target.position();

// //                                                     setShapes(prev =>
// //                                                         prev.map(item =>
// //                                                             item.id === s.id ? { ...item, x, y } : item
// //                                                         )
// //                                                     );

// //                                                     pushHistory();
// //                                                 }}

// //                                                 onTransformEnd={(e) => {
// //                                                     const node = e.target;

// //                                                     const scale = node.scaleX(); // circle uses one scale

// //                                                     node.scaleX(1);
// //                                                     node.scaleY(1);

// //                                                     const updated = {
// //                                                         x: node.x(),
// //                                                         y: node.y(),
// //                                                         radius: Math.max(5, s.radius * scale),
// //                                                         rotation: node.rotation()
// //                                                     };

// //                                                     setShapes(prev =>
// //                                                         prev.map(item =>
// //                                                             item.id === s.id ? { ...item, ...updated } : item
// //                                                         )
// //                                                     );

// //                                                     pushHistory();
// //                                                 }}
// //                                             />
// //                                         );
// //                                     }

// //                                     return null;
// //                                 })}
// //                             </Layer>


// //                             {/* TEXT */}



// //                             {/* TEXT */}
// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
// //                                 {texts.map(t => (
// //                                     <Fragment key={t.id}>
// //                                         <Text
// //                                             {...t}

// //                                             // Do not give text an arbitrary 250px width.
// //                                             // Ignore old widths that span almost the entire canvas.
// //                                             width={
// //                                                 Number.isFinite(Number(t.width)) &&
// //                                                     Number(t.width) > 0 &&
// //                                                     Number(t.width) < W * 0.85
// //                                                     ? Number(t.width)
// //                                                     : undefined
// //                                             }

// //                                             draggable
// //                                             textDecoration={t.underline ? "underline" : ""}

// //                                             align={
// //                                                 ["ar"].includes(language)
// //                                                     ? "right"
// //                                                     : t.align || "left"
// //                                             }

// //                                             onClick={e => {
// //                                                 setEditingBackground(false);
// //                                                 e.cancelBubble = true;
// //                                                 setSelectedId(t.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onTap={e => {
// //                                                 setEditingBackground(false);
// //                                                 e.cancelBubble = true;
// //                                                 setSelectedId(t.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onDragEnd={e => {
// //                                                 const { x, y } = e.target.position();

// //                                                 setTexts(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === t.id
// //                                                             ? { ...item, x, y }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}

// //                                             onTransformEnd={e => {
// //                                                 const node = e.target;

// //                                                 const scaleX = node.scaleX();
// //                                                 const scaleY = node.scaleY();

// //                                                 // Use the node's actual rendered width, not a stale
// //                                                 // saved width that may equal the whole canvas width.
// //                                                 const newWidth = Math.max(
// //                                                     50,
// //                                                     node.width() * scaleX
// //                                                 );

// //                                                 const newFontSize = Math.max(
// //                                                     8,
// //                                                     (Number(t.fontSize) || 24) * scaleY
// //                                                 );

// //                                                 node.scaleX(1);
// //                                                 node.scaleY(1);

// //                                                 const updated = {
// //                                                     x: node.x(),
// //                                                     y: node.y(),
// //                                                     width: newWidth,
// //                                                     fontSize: newFontSize,
// //                                                     rotation: node.rotation()
// //                                                 };

// //                                                 setTexts(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === t.id
// //                                                             ? { ...item, ...updated }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}
// //                                         />
// //                                     </Fragment>
// //                                 ))}
// //                             </Layer>



// //                             {/* 
// //                             <Layer listening={!DRAW_TOOLS.includes(tool)}>


// //                                 {texts.map(t => (
// //                                     <Fragment key={t.id}>

// //                                         <Text
// //                                             {...t}
// //                                             width={t.width || 250}
// //                                             draggable
// //                                             textDecoration={
// //                                                 t.underline
// //                                                     ? "underline"
// //                                                     : ""
// //                                             }
// //                                             align={
// //                                                 ["ar"].includes(language)
// //                                                     ? "right"
// //                                                     : t.align || "left"
// //                                             }

// //                                             onClick={e => {
// //                                                 setEditingBackground(false);
// //                                                 e.cancelBubble = true;
// //                                                 setSelectedId(t.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onDragEnd={(e) => {
// //                                                 const { x, y } = e.target.position();

// //                                                 setTexts(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === t.id ? { ...item, x, y } : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}

// //                                             onTap={e => {
// //                                                 setEditingBackground(false);
// //                                                 e.cancelBubble = true;
// //                                                 setSelectedId(t.id);
// //                                                 selectedNodeRef.current = e.target;
// //                                             }}

// //                                             onTransformEnd={(e) => {

// //                                                 const node = e.target;

// //                                                 const scaleX = node.scaleX();
// //                                                 const scaleY = node.scaleY();

// //                                                 const newWidth = Math.max(
// //                                                     50,
// //                                                     (t.width || node.width()) * scaleX
// //                                                 );

// //                                                 const newFontSize = Math.max(
// //                                                     8,
// //                                                     t.fontSize * scaleY
// //                                                 );

// //                                                 node.scaleX(1);
// //                                                 node.scaleY(1);

// //                                                 const updated = {
// //                                                     x: node.x(),
// //                                                     y: node.y(),
// //                                                     width: newWidth,
// //                                                     fontSize: newFontSize,
// //                                                     rotation: node.rotation()
// //                                                 };

// //                                                 setTexts(prev =>
// //                                                     prev.map(item =>
// //                                                         item.id === t.id
// //                                                             ? { ...item, ...updated }
// //                                                             : item
// //                                                     )
// //                                                 );

// //                                                 pushHistory();
// //                                             }}
// //                                         />


// //                                     </Fragment>
// //                                 ))}
// //                             </Layer> */}


// //                             {draftShape && (
// //                                 <Layer listening={false}>
// //                                     {draftShape.type === "rectangle" && (
// //                                         <Rect
// //                                             {...draftShape}
// //                                         />
// //                                     )}

// //                                     {draftShape.type === "circle" && (
// //                                         <Circle
// //                                             x={draftShape.x}
// //                                             y={draftShape.y}
// //                                             radius={draftShape.radius}
// //                                             stroke={draftShape.stroke}
// //                                             strokeWidth={draftShape.strokeWidth}
// //                                         />
// //                                     )}
// //                                 </Layer>
// //                             )}

// //                             {/* TRANSFORMER: keep this layer mounted at all times */}
// //                             <Layer>
// //                                 <Transformer
// //                                     ref={trRef}
// //                                     rotateEnabled={true}
// //                                     keepRatio={
// //                                         selectedElement?.type === "icon" ||
// //                                         selectedElement?.type === "discountTag"
// //                                     }
// //                                     centeredScaling={false}
// //                                     enabledAnchors={[
// //                                         "top-left",
// //                                         "top-center",
// //                                         "top-right",
// //                                         "middle-left",
// //                                         "middle-right",
// //                                         "bottom-left",
// //                                         "bottom-center",
// //                                         "bottom-right"
// //                                     ]}
// //                                     borderStroke="#0ea5e9"
// //                                     borderStrokeWidth={2}
// //                                     anchorSize={12}
// //                                     anchorStroke="#0ea5e9"
// //                                     anchorFill="#ffffff"
// //                                     anchorStrokeWidth={2}
// //                                     padding={0}
// //                                 />
// //                             </Layer>

// //                         </Stage>

// //                     </div>
// //                 </div>
// //                 {showWordArtLibrary && (
// //                     <WordArtPicker
// //                         onClose={() => setShowWordArtLibrary(false)}
// //                         onApply={handleApplyWordArt}
// //                     />
// //                 )}


// //                 <BusinessPhotoBackgroundPicker
// //                     isOpen={isBusinessPhotoLibraryOpen}
// //                     onClose={() => setIsBusinessPhotoLibraryOpen(false)}
// //                     onApply={(photo) => {
// //                         // Record the current state if your existing history system supports it.
// //                         if (typeof pushHistory === "function") {
// //                             pushHistory();
// //                         }

// //                         setBackground({
// //                             ...photo,
// //                             type: "business-photo",
// //                         });

// //                         setSelectedId(null);
// //                     }}
// //                 />
// //             </div>
// //         </div>

// //     );
// // });

// // export default Canvas;

// ///////////above is working

// import {
//     Stage,
//     Layer,
//     Rect,
//     Text,
//     Image as KonvaImage,
//     Line,
//     Circle,
//     Transformer,
//     RegularPolygon,
//     Group,
//     Star
// } from "react-konva";
// import { useRef, useState, useEffect, forwardRef, Fragment } from "react";
// import FloatingToolbar from "./FloatinngToolbar";
// import WordArtPicker from "../components/WordArtPicker";
// import BusinessPhotoBackgroundPicker from "../components/BusinessPhotoBackgroundPicker";
// import BusinessPhotoCanvasBackground from "../components/BusinessPhotoCanvasBackground";
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

// const createId = () => {
//     if (typeof crypto !== "undefined" && crypto.randomUUID) {
//         return crypto.randomUUID();
//     }

//     return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
// };

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
//     if (b.shape === "triangle") {
//         return (
//             <RegularPolygon
//                 key={b.id}
//                 x={b.x}
//                 y={b.y}
//                 sides={3}
//                 radius={Math.min(b.width, b.height) / 2}
//                 fill={b.fill}
//                 rotation={b.rotation}
//                 draggable
//             />
//         );
//     }

//     if (b.shape === "circle") {
//         return (
//             <Circle
//                 key={b.id}
//                 x={b.x}
//                 y={b.y}
//                 radius={Math.min(b.width, b.height) / 2}
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
//         onReset,
//         texts,
//         setTexts,
//         images,
//         setImages,
//         icons = [],
//         setIcons,
//         onIconColorChange,
//         onOpenClipArt,
//         onReplaceImage,
//         onOpenDiscountTags,
//         onOpenAIAssistance,
//         hideCanvasToolbar = false,
//         discountTags = [],
//         setDiscountTags,
//         shapes,
//         setShapes,
//         blocks,
//         setBlocks,
//         borders = [],
//         setBorders,

//         background,
//         setBackground,
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
//         editingBackground,
//         setEditingBackground,
//     },
//     ref
// ) {
//     const sizes = {
//         square: [420, 420],
//         portrait: [420, 520],
//         landscape: [620, 420],

//         visitingCard: [320, 180],
//         businessCard: [350, 200],

//         bookmark: [220, 520],

//         instagramPost: [420, 420],
//         instagramStory: [320, 570],

//         facebookCover: [620, 240]
//     };

//     const [W, H] = sizes[adSize] || [420, 420];
//     const stageRef = useRef(null);
//     const trRef = useRef(null);
//     const selectedNodeRef = useRef(null);
//     const nodeRegistryRef = useRef(new Map());


//     const registerNode = (id, node) => {
//         if (id == null) return;

//         const key = String(id);

//         if (node) {
//             nodeRegistryRef.current.set(key, node);
//         } else {
//             nodeRegistryRef.current.delete(key);
//         }
//     };

//     const containerRef = useRef(null);
//     const canvasWrapperRef = useRef(null);

//     const imageInputRef = useRef(null);
//     const replaceImageIdRef = useRef(null);

//     // Background drag tracking
//     const backgroundDraggingRef = useRef(false);

//     // Drawing state refs
//     const isDrawingRef = useRef(false);

//     const [isDrawing, setIsDrawing] = useState(false);
//     const [draftShape, setDraftShape] = useState(null);

//     const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
//     const [isMobileToolbarOpen, setIsMobileToolbarOpen] = useState(false);
//     useEffect(() => {
//         if (hideCanvasToolbar) {
//             setIsMobileToolbarOpen(false);
//         }
//     }, [hideCanvasToolbar]);
//     const [showWordArtLibrary, setShowWordArtLibrary] = useState(false);
//     const [isBusinessPhotoLibraryOpen, setIsBusinessPhotoLibraryOpen] =
//         useState(false);

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
//     /* ================= ZOOM CONTROLLER ================= */

//     const zoomLevels = [25, 50, 75, 100, 125, 150, 200, 300];

//     const getIsMobile = () =>
//         typeof window !== "undefined" &&
//         window.matchMedia("(max-width: 768px)").matches;

//     const [zoomPercent, setZoomPercent] = useState(
//         getIsMobile() ? 75 : 100
//     );

//     /* Keep zoom synced with mobile/desktop breakpoint */
//     useEffect(() => {
//         const handleViewportChange = () => {
//             const mobile = getIsMobile();

//             setZoomPercent(prev => {
//                 // Only change the automatic starting zoom
//                 // when crossing between desktop and mobile.
//                 if (mobile && prev === 100) return 75;
//                 if (!mobile && prev === 75) return 100;

//                 return prev;
//             });
//         };

//         window.addEventListener("resize", handleViewportChange);

//         return () => {
//             window.removeEventListener("resize", handleViewportChange);
//         };
//     }, []);

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

//         if (editingBackground) {
//             container.style.cursor = "grabbing";
//             return;
//         }

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
//     }, [tool, isDrawing, editingBackground]);

//     /* ================= BACKGROUND DRAG END ================= */

//     const finishBackgroundEditing = () => {
//         const node = selectedNodeRef.current;
//         const wasDragging = backgroundDraggingRef.current;

//         // Stop Konva dragging immediately
//         if (node) {
//             const { x, y } = node.position();

//             if (wasDragging) {
//                 setBackground(prev => ({
//                     ...prev,
//                     x,
//                     y
//                 }));
//             }

//             node.stopDrag();
//             node.draggable(false);
//         }

//         backgroundDraggingRef.current = false;

//         // Completely exit background editing
//         setEditingBackground(false);
//         setSelectedId(null);
//         selectedNodeRef.current = null;

//         // Remove transformer if anything is attached
//         if (trRef.current) {
//             trRef.current.nodes([]);
//             trRef.current.getLayer()?.batchDraw();
//         }

//         if (wasDragging) {
//             pushHistory();
//         }
//     };

//     /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

//     const openImageReplacement = imageId => {

//         if (!imageId) return;

//         replaceImageIdRef.current = imageId;

//         if (imageInputRef.current) {
//             imageInputRef.current.value = "";
//             imageInputRef.current.click();
//         }
//     };

//     const handleReplacementFile = e => {

//         const file = e.target.files?.[0];

//         const imageId = replaceImageIdRef.current;

//         if (!file || !imageId) {
//             replaceImageIdRef.current = null;
//             return;
//         }

//         if (onReplaceImage) {
//             onReplaceImage(imageId, file);
//         }

//         replaceImageIdRef.current = null;

//         e.target.value = "";
//     };

//     useEffect(() => {
//         const handleGlobalPointerUp = () => {
//             if (backgroundDraggingRef.current) {
//                 finishBackgroundEditing();
//             }
//         };

//         window.addEventListener("pointerup", handleGlobalPointerUp);
//         window.addEventListener("mouseup", handleGlobalPointerUp);
//         window.addEventListener("touchend", handleGlobalPointerUp);
//         window.addEventListener("touchcancel", handleGlobalPointerUp);

//         return () => {
//             window.removeEventListener("pointerup", handleGlobalPointerUp);
//             window.removeEventListener("mouseup", handleGlobalPointerUp);
//             window.removeEventListener("touchend", handleGlobalPointerUp);
//             window.removeEventListener("touchcancel", handleGlobalPointerUp);
//         };
//     }, []);
//     /* ================= TRANSFORMER ================= */
//     // Keep the Transformer mounted in its own permanent layer. Re-mounting the
//     // whole layer every time selectedId changes can cause the canvas to flash
//     // or clear in some React-Konva render cycles.
//     useEffect(() => {
//         const transformer = trRef.current;
//         if (!transformer) return;

//         const clearTransformer = () => {
//             transformer.nodes([]);
//             transformer.getLayer()?.batchDraw();
//         };

//         if (
//             selectedId == null ||
//             String(selectedId) === "background" ||
//             DRAW_TOOLS.includes(tool)
//         ) {
//             clearTransformer();
//             return;
//         }

//         const selectedKey = String(selectedId);
//         const isIconOrTag =
//             icons.some(item => String(item.id) === selectedKey) ||
//             discountTags.some(item => String(item.id) === selectedKey);

//         // Icons and discount tags must use their own registered Konva node.
//         // Never attach the previous selection's node if their ref isn't ready.
//         const node =
//             nodeRegistryRef.current.get(selectedKey) ||
//             (isIconOrTag ? null : selectedNodeRef.current);

//         if (!node || !node.getStage() || node.getStage() !== stageRef.current) {
//             clearTransformer();
//             return;
//         }

//         selectedNodeRef.current = node;
//         transformer.nodes([node]);
//         transformer.forceUpdate();
//         transformer.getLayer()?.batchDraw();
//     }, [
//         selectedId,
//         activeSection,
//         tool,
//         texts,
//         images,
//         icons,
//         shapes,
//         blocks,
//         borders,
//         discountTags
//     ]);

//     // /* ================= toolbar ================= */
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

//     useEffect(() => {
//         const handleOutsidePointer = (e) => {
//             if (!editingBackground) return;

//             const stage = stageRef.current;

//             if (!stage) return;

//             const rect = stage.container().getBoundingClientRect();

//             const insideStage =
//                 e.clientX >= rect.left &&
//                 e.clientX <= rect.right &&
//                 e.clientY >= rect.top &&
//                 e.clientY <= rect.bottom;

//             // Click/pointer outside the actual canvas
//             if (!insideStage) {
//                 finishBackgroundEditing();
//             }
//         };

//         document.addEventListener("pointerdown", handleOutsidePointer);

//         return () => {
//             document.removeEventListener(
//                 "pointerdown",
//                 handleOutsidePointer
//             );
//         };
//     }, [editingBackground]);

//     /*/////////////////////////////*/
//     const handleApplyWordArt = (wordArt) => {
//         const selectedText = texts?.find(
//             (item) => String(item.id) === String(selectedId) &&
//                 (item.type === "text" || item.text !== undefined)
//         );

//         if (!selectedText) {
//             alert("Please select a text object on the canvas first.");
//             return;
//         }

//         setTexts((previousTexts) =>
//             previousTexts.map((item) => {
//                 if (String(item.id) !== String(selectedId)) {
//                     return item;
//                 }

//                 return {
//                     ...item,
//                     ...wordArt.style,

//                     // Preserve the user's existing wording and placement.
//                     text: item.text,
//                     x: item.x,
//                     y: item.y,
//                     width: item.width,
//                     rotation: item.rotation ?? 0,
//                     id: item.id,
//                     type: item.type,
//                 };
//             })
//         );

//         setShowWordArtLibrary(false);
//     };

//     /* ================= DRAWING ================= */
//     const onMouseDown = e => {
//         if (!DRAW_TOOLS.includes(tool)) return;

//         // Never allow background editing while drawing
//         if (editingBackground) {
//             finishBackgroundEditing();
//             return;
//         }

//         const stage = stageRef.current;
//         if (!stage) return;

//         // Drawing starts only from empty canvas
//         if (e.target !== stage) return;

//         const pos = stage.getPointerPosition();
//         if (!pos) return;

//         setIsDrawing(true);
//         isDrawingRef.current = true;

//         const id = createId();

//         if (tool === "brush" || tool === "eraser") {
//             setShapes(s => [
//                 ...s,
//                 {
//                     id,
//                     type: "free",
//                     tool,
//                     points: [pos.x, pos.y],
//                     stroke: strokeColor,
//                     strokeWidth
//                 }
//             ]);
//             return;
//         }

//         if (tool === "line") {
//             setShapes(s => [
//                 ...s,
//                 {
//                     id,
//                     type: "line",
//                     lineType: lineType || "thin",
//                     points: [pos.x, pos.y, pos.x, pos.y],
//                     stroke: strokeColor,
//                     strokeWidth
//                 }
//             ]);
//             return;
//         }

//         if (tool === "rectangle") {
//             setDraftShape({
//                 id,
//                 type: "rectangle",
//                 x: pos.x,
//                 y: pos.y,
//                 width: 0,
//                 height: 0,
//                 stroke: strokeColor,
//                 strokeWidth
//             });
//             return;
//         }

//         if (tool === "circle") {
//             setDraftShape({
//                 id,
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

//         const stage = stageRef.current;
//         if (!stage) return;

//         const pos = stage.getPointerPosition();
//         if (!pos) return;

//         if (tool === "brush" || tool === "eraser") {
//             setShapes(s => {
//                 if (!s.length) return s;

//                 const last = { ...s[s.length - 1] };

//                 last.points = [
//                     ...last.points,
//                     pos.x,
//                     pos.y
//                 ];

//                 return [
//                     ...s.slice(0, -1),
//                     last
//                 ];
//             });

//             return;
//         }

//         if (tool === "line") {
//             setShapes(s => {
//                 if (!s.length) return s;

//                 const last = { ...s[s.length - 1] };

//                 last.points = [
//                     last.points[0],
//                     last.points[1],
//                     pos.x,
//                     pos.y
//                 ];

//                 return [
//                     ...s.slice(0, -1),
//                     last
//                 ];
//             });

//             return;
//         }

//         if (tool === "rectangle") {
//             setDraftShape(d => {
//                 if (!d) return d;

//                 return {
//                     ...d,
//                     width: pos.x - d.x,
//                     height: pos.y - d.y
//                 };
//             });

//             return;
//         }

//         if (tool === "circle") {
//             setDraftShape(d => {
//                 if (!d) return d;

//                 const dx = pos.x - d.x;
//                 const dy = pos.y - d.y;

//                 return {
//                     ...d,
//                     radius: Math.sqrt(
//                         dx * dx + dy * dy
//                     )
//                 };
//             });
//         }
//     };

//     const onMouseUp = () => {
//         if (!isDrawingRef.current) return;

//         isDrawingRef.current = false;
//         setIsDrawing(false);

//         setDraftShape(currentDraft => {
//             if (currentDraft) {
//                 setShapes(prev => [
//                     ...prev,
//                     currentDraft
//                 ]);
//             }

//             return null;
//         });

//         // ONE DRAW = ONE ACTION
//         setTool("select");

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
//         icons.find(i => i.id === selectedId) ||
//         shapes.find(s => s.id === selectedId) ||
//         blocks.find(b => b.id === selectedId) ||
//         discountTags.find(t => t.id === selectedId) ||
//         borders.find(b => b.id === selectedId);


//     /* ================= DELETE FUNCTION ================= */

//     const deleteElement = () => {
//         if (!selectedId) return;

//         setTexts(prev => prev.filter(t => t.id !== selectedId));
//         setImages(prev => prev.filter(i => i.id !== selectedId));
//         if (setIcons) {
//             setIcons(prev =>
//                 prev.filter(i => i.id !== selectedId)
//             );
//         }
//         setShapes(prev => prev.filter(s => s.id !== selectedId));
//         setBlocks(prev => prev.filter(b => b.id !== selectedId));
//         setDiscountTags(prev => prev.filter(t => t.id !== selectedId));
//         setBorders(prev => prev.filter(b => b.id !== selectedId));

//         setSelectedId(null);
//         selectedNodeRef.current = null;

//         pushHistory();
//     };


//     // return (
//     //     <div
//     //         ref={containerRef}
//     //         style={{
//     //             flex: 1,
//     //             display: "flex",
//     //             justifyContent: "center",
//     //             alignItems: "center",
//     //             position: "relative",
//     //             overflow: "hidden",
//     //             background:
//     //                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
//     //         }}
//     //     >
//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 flex: 1,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 position: "relative",
//                 overflow: "hidden",
//                 background:
//                     "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
//             }}
//         >

//             <input
//                 ref={imageInputRef}
//                 type="file"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 onChange={handleReplacementFile}
//             />


//             {/* RESPONSIVE TOOLBAR SHELL */}
//             <div
//                 className="adstudio-toolbar-shell"
//                 style={{
//                     display: hideCanvasToolbar ? "none" : "flex",
//                     position: "absolute",
//                     top: 12,
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "max-content",
//                     maxWidth: "calc(100% - 24px)",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     zIndex: 30,
//                     boxSizing: "border-box",
//                 }}
//             >

//                 {/* MOBILE TOGGLE BUTTON */}
//                 <button
//                     type="button"
//                     className="adstudio-toolbar-toggle"
//                     data-tour="tools-toggle"
//                     onClick={() => setIsMobileToolbarOpen((previous) => !previous)}
//                     aria-label={isMobileToolbarOpen ? "Hide toolbar" : "Show toolbar"}
//                     aria-expanded={isMobileToolbarOpen}
//                     title={isMobileToolbarOpen ? "Hide tools" : "Show tools"}
//                 >
//                     <span className={isMobileToolbarOpen ? "toolbar-toggle-icon is-open" : "toolbar-toggle-icon"}>
//                         {isMobileToolbarOpen ? "✕" : "☰"}
//                     </span>
//                     <span className="toolbar-toggle-label">
//                         {isMobileToolbarOpen ? "Hide tools" : "Tools"}
//                     </span>
//                 </button>

//                 {/* EXISTING TOOLBAR */}
//                 <div
//                     className={`adstudio-canvas-toolbar ${isMobileToolbarOpen
//                         ? "adstudio-toolbar-menu-open"
//                         : "adstudio-toolbar-menu-closed"
//                         }`}
//                 >
//                     {/* KEEP YOUR EXISTING FIVE BUTTONS HERE:
//         AI Assistance, Backgrounds, Icons, Reset, Sale Tags.
//         Do not change their onClick handlers. */}

//                     {/* AI ASSISTANCE */}
//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-ai-button"
//                         onClick={() => {
//                             if (onOpenAIAssistance) {
//                                 onOpenAIAssistance();
//                             } else {
//                                 window.dispatchEvent(
//                                     new CustomEvent("adstudio-open-ai-assistance")
//                                 );
//                             }
//                         }}
//                         title="AI Assistance"
//                         data-tippy-content="AI Assistance"
//                         data-hint="Get help creating your design"
//                         aria-label="Open AI Assistance"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             ✦
//                         </span>
//                         <span className="adstudio-tool-label">
//                             AI Assistance
//                         </span>
//                         <span className="adstudio-beta-label">
//                             Beta
//                         </span>
//                     </button>

//                     {/* BACKGROUNDS */}
//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-background-button"
//                         data-tour="backgrounds"
//                         onClick={() => onOpenClipArt?.()}
//                         title="Backgrounds"
//                         data-tippy-content="Backgrounds"
//                         data-hint="Choose a background design"
//                         aria-label="Open Backgrounds Library"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             ▧
//                         </span>
//                         <span className="adstudio-tool-label">
//                             Backgrounds
//                         </span>
//                     </button>


//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-business-photo-button"
//                         onClick={() => setIsBusinessPhotoLibraryOpen(true)}
//                         title="Business Photo Backgrounds"
//                         data-tippy-content="Choose photo backgrounds for your business"
//                         data-hint="Photo backgrounds for your business"
//                         aria-label="Open Business Photo Backgrounds"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             🖼️
//                         </span>

//                         <span className="adstudio-tool-label">
//                             Business Photos
//                         </span>
//                     </button>



//                     {/* WORD ART */}
//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-sale-button"
//                         onClick={() => setShowWordArtLibrary(true)}
//                         title="Word Art"
//                         data-tippy-content="Word Art"
//                         data-hint="Add decorative text styles"
//                         aria-label="Open Word Art Library"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             Aa
//                         </span>
//                         <span className="adstudio-tool-label">
//                             Word Art
//                         </span>
//                     </button>


//                     {/* ICONS */}
//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-icons-button"
//                         data-tour="icons"
//                         onClick={() => {
//                             setSelectedId(null);
//                             selectedNodeRef.current = null;
//                             setEditingBackground(false);

//                             if (trRef.current) {
//                                 trRef.current.nodes([]);
//                                 trRef.current.getLayer()?.batchDraw();
//                             }

//                             window.dispatchEvent(
//                                 new CustomEvent("adstudio-open-icon-picker")
//                             );
//                         }}
//                         title="Icons"
//                         data-tippy-content="Icons"
//                         data-hint="Add icons and graphics"
//                         aria-label="Open Icon Library"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             ✥
//                         </span>
//                         <span className="adstudio-tool-label">
//                             Icons
//                         </span>
//                     </button>

//                     {/* DISCOUNT / SALE TAGS */}
//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-sale-button"
//                         onClick={() => {
//                             setSelectedId(null);
//                             selectedNodeRef.current = null;
//                             setEditingBackground(false);

//                             if (trRef.current) {
//                                 trRef.current.nodes([]);
//                                 trRef.current.getLayer()?.batchDraw();
//                             }

//                             onOpenDiscountTags?.();
//                         }}
//                         title="Sale Tags — Discounts and Special Offers"
//                         data-tippy-content="Sale Tags"
//                         data-hint="Add discount and offer badges"
//                         aria-label="Open Sale Tags Library"
//                         data-tour="discount-tags"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             🏷
//                         </span>
//                         <span className="adstudio-tool-label">
//                             Sale Tags
//                         </span>
//                     </button>


//                     {/* RESET */}
//                     <button
//                         type="button"
//                         className="adstudio-tool-button adstudio-reset-button"
//                         onClick={onReset}
//                         title="Reset Canvas"
//                         data-tippy-content="Reset Canvas"
//                         data-hint="Reset your canvas"
//                         aria-label="Reset Canvas"
//                     >
//                         <span className="adstudio-tool-icon" aria-hidden="true">
//                             ↻
//                         </span>
//                         <span className="adstudio-tool-label">
//                             Reset
//                         </span>
//                     </button>


//                 </div>


//             </div>




//             {/* ================= END RESPONSIVE CANVAS TOOLBAR ================= */}



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


//             {/* =========================================================
//     ICON COLOR CONTROL
// ========================================================= */}

//             {selectedElement?.type === "icon" && (
//                 <div
//                     style={{
//                         position: "fixed",

//                         left:
//                             toolbarPos.x,

//                         top:
//                             toolbarPos.y + 38,

//                         transform:
//                             "translateX(-50%)",

//                         zIndex: 100,

//                         display: "flex",

//                         alignItems: "center",

//                         gap: 8,

//                         padding:
//                             "7px 10px",

//                         borderRadius: 10,

//                         background:
//                             "#ffffff",

//                         border:
//                             "1px solid #e2e8f0",

//                         boxShadow:
//                             "0 10px 30px rgba(0,0,0,0.16)"
//                     }}
//                 >

//                     <span
//                         style={{
//                             fontSize: 11,
//                             fontWeight: 600,
//                             color: "#475569"
//                         }}
//                     >
//                         Color
//                     </span>

//                     <input
//                         type="color"
//                         value={
//                             selectedElement.color ||
//                             "#0b1f33"
//                         }
//                         onChange={e => {

//                             if (
//                                 onIconColorChange
//                             ) {
//                                 onIconColorChange(
//                                     selectedElement.id,
//                                     e.target.value
//                                 );
//                             }
//                         }}
//                         style={{
//                             width: 30,
//                             height: 30,

//                             padding: 0,

//                             border: 0,

//                             background:
//                                 "transparent",

//                             cursor: "pointer"
//                         }}
//                     />

//                 </div>
//             )}


//             {/* ================= DISCOUNT TAG EDITOR ================= */}

//             {selectedElement?.type === "discountTag" && (
//                 <div
//                     style={{
//                         position: "fixed",
//                         left: toolbarPos.x,
//                         top: toolbarPos.y + 38,
//                         transform: "translateX(-50%)",
//                         zIndex: 110,
//                         display: "flex",
//                         alignItems: "center",
//                         flexWrap: "wrap",
//                         gap: 8,
//                         padding: 10,
//                         borderRadius: 12,
//                         background: "#ffffff",
//                         border: "1px solid #e2e8f0",
//                         boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
//                         maxWidth: "calc(100vw - 24px)",
//                     }}
//                 >
//                     <input
//                         aria-label="Discount tag text"
//                         value={selectedElement.text}
//                         maxLength={40}
//                         onChange={e => {
//                             const text = e.target.value;

//                             setDiscountTags(prev =>
//                                 prev.map(tag =>
//                                     tag.id === selectedId
//                                         ? { ...tag, text }
//                                         : tag
//                                 )
//                             );
//                         }}
//                         onBlur={() => pushHistory()}
//                         style={{
//                             width: 140,
//                             minWidth: 0,
//                             padding: "7px 9px",
//                             border: "1px solid #cbd5e1",
//                             borderRadius: 7,
//                             fontSize: 13,
//                         }}
//                     />

//                     <label title="Tag background color">
//                         <input
//                             aria-label="Tag background color"
//                             type="color"
//                             value={selectedElement.fill || "#dc2626"}
//                             onChange={e => {
//                                 const fill = e.target.value;

//                                 setDiscountTags(prev =>
//                                     prev.map(tag =>
//                                         tag.id === selectedId
//                                             ? { ...tag, fill }
//                                             : tag
//                                     )
//                                 );
//                             }}
//                             style={{ width: 30, height: 30, cursor: "pointer" }}
//                         />
//                     </label>

//                     <label title="Tag text color">
//                         <input
//                             aria-label="Tag text color"
//                             type="color"
//                             value={selectedElement.textColor || "#ffffff"}
//                             onChange={e => {
//                                 const textColor = e.target.value;

//                                 setDiscountTags(prev =>
//                                     prev.map(tag =>
//                                         tag.id === selectedId
//                                             ? { ...tag, textColor }
//                                             : tag
//                                     )
//                                 );
//                             }}
//                             style={{ width: 30, height: 30, cursor: "pointer" }}
//                         />
//                     </label>

//                     <label title="Tag border color">
//                         <input
//                             aria-label="Tag border color"
//                             type="color"
//                             value={selectedElement.borderColor || "#991b1b"}
//                             onChange={e => {
//                                 const borderColor = e.target.value;

//                                 setDiscountTags(prev =>
//                                     prev.map(tag =>
//                                         tag.id === selectedId
//                                             ? { ...tag, borderColor }
//                                             : tag
//                                     )
//                                 );
//                             }}
//                             style={{ width: 30, height: 30, cursor: "pointer" }}
//                         />
//                     </label>
//                 </div>
//             )}


//             <FloatingToolbar
//                 element={selectedElement}
//                 onDelete={deleteElement}
//                 onEdit={() => {

//                     if (!selectedElement) return;

//                     if (selectedElement.text) {
//                         setActiveSection("text");
//                         return;
//                     }

//                     if (selectedElement.type === "icon") {
//                         return;
//                     }

//                     if (selectedElement.image) {
//                         setActiveSection("image");
//                         return;
//                     }

//                     setActiveSection("shapes");
//                 }}

//                 onDuplicate={() => {
//                     if (!selectedElement) return;

//                     if (selectedElement.type === "icon") {

//                         const duplicated = {
//                             ...selectedElement,

//                             id: createId(),

//                             x:
//                                 selectedElement.x + 30,

//                             y:
//                                 selectedElement.y + 30
//                         };

//                         setIcons(prev => [
//                             ...prev,
//                             duplicated
//                         ]);

//                         setSelectedId(
//                             duplicated.id
//                         );

//                         setTimeout(() => {
//                             pushHistory();
//                         }, 0);

//                         return;
//                     }

//                     // TEXT DUPLICATION
//                     if (selectedElement.text) {

//                         const duplicated = {
//                             ...selectedElement,
//                             id: Date.now(),
//                             x: selectedElement.x + 30,
//                             y: selectedElement.y + 30
//                         };

//                         setTexts(prev => [...prev, duplicated]);

//                         setSelectedId(duplicated.id);

//                         setTimeout(() => {
//                             pushHistory();
//                         }, 0);
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
//                         ref={canvasWrapperRef}
//                         style={{
//                             position: "relative",

//                             background:
//                                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #12385d 70%, #1e4f7a 100%)",

//                             borderRadius: 26,

//                             padding: 18,

//                             boxShadow:
//                                 "0 25px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",

//                             overflow: "hidden",

//                             border: "1px solid rgba(255,255,255,0.08)",

//                             backdropFilter: "blur(10px)"
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
//                             onMouseLeave={onMouseUp}

//                             onTouchStart={onMouseDown}
//                             onTouchMove={onMouseMove}
//                             onTouchEnd={onMouseUp}
//                             onTouchCancel={onMouseUp}
//                             onClick={e => {
//                                 if (e.target === e.target.getStage()) {
//                                     setSelectedId(null);
//                                     selectedNodeRef.current = null;

//                                     if (!isDrawing) {
//                                         setEditingBackground(false);
//                                     }
//                                 }
//                             }}
//                             onTap={e => {
//                                 if (e.target === e.target.getStage()) {
//                                     setSelectedId(null);
//                                     selectedNodeRef.current = null;

//                                     if (!isDrawing) {
//                                         setEditingBackground(false);
//                                     }
//                                 }
//                             }}

//                         // onMouseDown={(e) => {
//                         //     const clickedOnEmpty =
//                         //         e.target === e.target.getStage();

//                         //     if (clickedOnEmpty) {
//                         //         setSelectedId(null);
//                         //         setEditingBackground(false);
//                         //     }
//                         // }}

//                         // onTouchStart={(e) => {
//                         //     const clickedOnEmpty =
//                         //         e.target === e.target.getStage();

//                         //     if (clickedOnEmpty) {
//                         //         setSelectedId(null);
//                         //         setEditingBackground(false);
//                         //     }
//                         // }}
//                         //////////////////////////////////////////////////////////
//                         // onMouseDown={e => {
//                         //     if (e.target === e.target.getStage()) {
//                         //         setSelectedId(null);
//                         //         setEditingBackground(false);
//                         //     }
//                         // }}

//                         // onTouchStart={e => {
//                         //     if (e.target === e.target.getStage()) {
//                         //         setSelectedId(null);
//                         //         setEditingBackground(false);
//                         //     }
//                         // }}


//                         >

//                             {/* BACKGROUND */}

//                             <Layer listening={true}>

//                                 {/* default background */}
//                                 <Rect
//                                     width={W}
//                                     height={H}
//                                     fill={background?.value || "#f8fafc"}
//                                     listening={false}
//                                 />

//                                 {/* BACKGROUND IMAGE */}
//                                 {background?.type === "image" && background.image && (
//                                     <KonvaImage
//                                         image={background.image}

//                                         x={background.x ?? 0}
//                                         y={background.y ?? 0}

//                                         width={background.width ?? W}
//                                         height={background.height ?? H}

//                                         crop={background.crop}

//                                         rotation={background.rotation || 0}

//                                         listening={!DRAW_TOOLS.includes(tool)}

//                                         draggable={editingBackground}

//                                         onDblClick={(e) => {

//                                             if (DRAW_TOOLS.includes(tool)) return;

//                                             e.cancelBubble = true;

//                                             const node = e.target;

//                                             setEditingBackground(true);

//                                             setSelectedId("background");

//                                             selectedNodeRef.current = node;

//                                             requestAnimationFrame(() => {
//                                                 node.draggable(true);
//                                             });
//                                         }}

//                                         onDblTap={(e) => {

//                                             if (DRAW_TOOLS.includes(tool)) return;

//                                             e.cancelBubble = true;

//                                             const node = e.target;

//                                             setEditingBackground(true);

//                                             setSelectedId("background");

//                                             selectedNodeRef.current = node;

//                                             requestAnimationFrame(() => {
//                                                 node.draggable(true);
//                                             });
//                                         }}

//                                         onDragEnd={(e) => {

//                                             if (!editingBackground) {
//                                                 e.target.stopDrag();
//                                                 return;
//                                             }

//                                             const node = e.target;

//                                             const { x, y } =
//                                                 node.position();

//                                             setBackground(prev => ({
//                                                 ...prev,
//                                                 x,
//                                                 y
//                                             }));

//                                             node.stopDrag();
//                                             node.draggable(false);

//                                             setEditingBackground(false);

//                                             setSelectedId(null);

//                                             selectedNodeRef.current = null;

//                                             pushHistory();
//                                         }}
//                                     />
//                                 )}


//                                 {background?.type === "business-photo" && (
//                                     <BusinessPhotoCanvasBackground
//                                         background={background}
//                                         width={W}
//                                         height={H}
//                                     />
//                                 )}
//                             </Layer>


//                             {/* BLOCKS */}

//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
//                                 {blocks.map(b => {
//                                     const shape = getBlockShape(b);
//                                     if (!shape) return null;

//                                     return (
//                                         <shape.type
//                                             {...shape.props}
//                                             key={b.id}
//                                             draggable

//                                             onClick={(e) => {
//                                                 setEditingBackground(false);
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(b.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}
//                                             onTap={(e) => {
//                                                 setEditingBackground(false);
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

//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

//                                 {images.map(img => (
//                                     <KonvaImage
//                                         key={img.id}

//                                         x={img.x}
//                                         y={img.y}

//                                         width={img.width}
//                                         height={img.height}

//                                         rotation={img.rotation || 0}

//                                         image={img.image}

//                                         onDblClick={e => {

//                                             if (DRAW_TOOLS.includes(tool)) return;

//                                             // Only template logo and template decorative photos
//                                             if (
//                                                 img.assetType !== "logo" &&
//                                                 img.assetType !== "photo"
//                                             ) {
//                                                 return;
//                                             }

//                                             e.cancelBubble = true;

//                                             setEditingBackground(false);

//                                             setSelectedId(img.id);

//                                             selectedNodeRef.current = e.target;

//                                             openImageReplacement(img.id);
//                                         }}

//                                         onDblTap={e => {

//                                             if (DRAW_TOOLS.includes(tool)) return;

//                                             // Only template logo and template decorative photos
//                                             if (
//                                                 img.assetType !== "logo" &&
//                                                 img.assetType !== "photo"
//                                             ) {
//                                                 return;
//                                             }

//                                             e.cancelBubble = true;

//                                             setEditingBackground(false);

//                                             setSelectedId(img.id);

//                                             selectedNodeRef.current = e.target;

//                                             openImageReplacement(img.id);
//                                         }}

//                                         draggable={!DRAW_TOOLS.includes(tool)}

//                                         listening={!DRAW_TOOLS.includes(tool)}

//                                         onClick={e => {

//                                             setEditingBackground(false);

//                                             e.cancelBubble = true;

//                                             setSelectedId(img.id);

//                                             selectedNodeRef.current =
//                                                 e.target;
//                                         }}

//                                         onTap={e => {

//                                             setEditingBackground(false);

//                                             e.cancelBubble = true;

//                                             setSelectedId(img.id);

//                                             selectedNodeRef.current =
//                                                 e.target;
//                                         }}

//                                         onDragEnd={e => {

//                                             const { x, y } =
//                                                 e.target.position();

//                                             setImages(prev =>
//                                                 prev.map(item =>
//                                                     item.id === img.id
//                                                         ? {
//                                                             ...item,
//                                                             x,
//                                                             y
//                                                         }
//                                                         : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}

//                                         onTransformEnd={e => {

//                                             const node = e.target;

//                                             const scaleX =
//                                                 node.scaleX();

//                                             const scaleY =
//                                                 node.scaleY();

//                                             const newWidth =
//                                                 Math.max(
//                                                     20,
//                                                     node.width() *
//                                                     scaleX
//                                                 );

//                                             const newHeight =
//                                                 Math.max(
//                                                     20,
//                                                     node.height() *
//                                                     scaleY
//                                                 );

//                                             node.scaleX(1);
//                                             node.scaleY(1);

//                                             setImages(prev =>
//                                                 prev.map(item =>
//                                                     item.id === img.id
//                                                         ? {
//                                                             ...item,

//                                                             x: node.x(),
//                                                             y: node.y(),

//                                                             width: newWidth,
//                                                             height: newHeight,

//                                                             rotation:
//                                                                 node.rotation()
//                                                         }
//                                                         : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}

//                                     />
//                                 ))}

//                             </Layer>


//                             {/* =========================================================
//     ICONS
// ========================================================= */}

//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>

//                                 {icons.map(icon => {

//                                     if (!icon.image) {
//                                         return null;
//                                     }

//                                     return (

//                                         <KonvaImage
//                                             key={icon.id}
//                                             ref={node => registerNode(icon.id, node)}
//                                             image={icon.image}


//                                             x={icon.x}
//                                             y={icon.y}

//                                             width={icon.width}
//                                             height={icon.height}

//                                             rotation={
//                                                 icon.rotation || 0
//                                             }

//                                             draggable={
//                                                 !DRAW_TOOLS.includes(tool)
//                                             }

//                                             listening={
//                                                 !DRAW_TOOLS.includes(tool)
//                                             }

//                                             onClick={e => {

//                                                 if (
//                                                     DRAW_TOOLS.includes(
//                                                         tool
//                                                     )
//                                                 ) {
//                                                     return;
//                                                 }

//                                                 setEditingBackground(
//                                                     false
//                                                 );

//                                                 e.cancelBubble = true;

//                                                 setSelectedId(
//                                                     icon.id
//                                                 );

//                                                 selectedNodeRef.current =
//                                                     e.target;
//                                             }}

//                                             onTap={e => {

//                                                 if (
//                                                     DRAW_TOOLS.includes(
//                                                         tool
//                                                     )
//                                                 ) {
//                                                     return;
//                                                 }

//                                                 setEditingBackground(
//                                                     false
//                                                 );

//                                                 e.cancelBubble = true;

//                                                 setSelectedId(
//                                                     icon.id
//                                                 );

//                                                 selectedNodeRef.current =
//                                                     e.target;
//                                             }}

//                                             onDragEnd={e => {

//                                                 const {
//                                                     x,
//                                                     y
//                                                 } =
//                                                     e.target.position();

//                                                 setIcons(prev =>
//                                                     prev.map(item =>
//                                                         item.id === icon.id
//                                                             ? {
//                                                                 ...item,
//                                                                 x,
//                                                                 y
//                                                             }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}

//                                             onTransformEnd={e => {

//                                                 const node =
//                                                     e.target;

//                                                 const scaleX =
//                                                     node.scaleX();

//                                                 const scaleY =
//                                                     node.scaleY();

//                                                 const newWidth =
//                                                     Math.max(
//                                                         20,
//                                                         node.width() *
//                                                         scaleX
//                                                     );

//                                                 const newHeight =
//                                                     Math.max(
//                                                         20,
//                                                         node.height() *
//                                                         scaleY
//                                                     );

//                                                 node.scaleX(1);
//                                                 node.scaleY(1);

//                                                 setIcons(prev =>
//                                                     prev.map(item =>
//                                                         item.id === icon.id
//                                                             ? {
//                                                                 ...item,

//                                                                 x: node.x(),
//                                                                 y: node.y(),

//                                                                 width:
//                                                                     newWidth,

//                                                                 height:
//                                                                     newHeight,

//                                                                 rotation:
//                                                                     node.rotation()
//                                                             }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}
//                                         />
//                                     );
//                                 })}

//                             </Layer>


//                             {/* ================= DISCOUNT / SALE TAGS ================= */}

//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
//                                 {discountTags.map(tag => (

//                                     <Group
//                                         key={tag.id}
//                                         ref={node => registerNode(tag.id, node)}
//                                         x={tag.x}
//                                         y={tag.y}

//                                         scaleX={tag.width / 150}
//                                         scaleY={tag.height / 100}
//                                         rotation={tag.rotation || 0}
//                                         draggable={!DRAW_TOOLS.includes(tool)}
//                                         onClick={e => {
//                                             if (DRAW_TOOLS.includes(tool)) return;

//                                             e.cancelBubble = true;
//                                             setEditingBackground(false);
//                                             setSelectedId(tag.id);
//                                             selectedNodeRef.current = e.currentTarget;
//                                         }}
//                                         onTap={e => {
//                                             if (DRAW_TOOLS.includes(tool)) return;

//                                             e.cancelBubble = true;
//                                             setEditingBackground(false);
//                                             setSelectedId(tag.id);
//                                             selectedNodeRef.current = e.currentTarget;
//                                         }}
//                                         onDragEnd={e => {
//                                             const node = e.currentTarget;
//                                             const { x, y } = node.position();

//                                             setDiscountTags(prev =>
//                                                 prev.map(item =>
//                                                     item.id === tag.id ? { ...item, x, y } : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}
//                                         onTransformEnd={e => {
//                                             const node = e.currentTarget;

//                                             const newWidth = Math.max(35, 150 * node.scaleX());
//                                             const newHeight = Math.max(25, 100 * node.scaleY());

//                                             const updated = {
//                                                 x: node.x(),
//                                                 y: node.y(),
//                                                 width: newWidth,
//                                                 height: newHeight,
//                                                 rotation: node.rotation(),
//                                             };

//                                             node.scaleX(newWidth / 150);
//                                             node.scaleY(newHeight / 100);

//                                             setDiscountTags(prev =>
//                                                 prev.map(item =>
//                                                     item.id === tag.id
//                                                         ? { ...item, ...updated }
//                                                         : item
//                                                 )
//                                             );

//                                             pushHistory();
//                                         }}
//                                     >
//                                         {/* TAG SHAPE */}
//                                         {tag.shape === "burst" && (
//                                             <Star
//                                                 x={75}
//                                                 y={50}
//                                                 numPoints={12}
//                                                 innerRadius={35}
//                                                 outerRadius={45}
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                                 shadowColor="#000000"
//                                                 shadowBlur={3}
//                                                 shadowOpacity={0.12}
//                                             />
//                                         )}

//                                         {tag.shape === "circle" && (
//                                             <Circle
//                                                 x={75}
//                                                 y={50}
//                                                 radius={42}
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                             />
//                                         )}

//                                         {tag.shape === "rounded" && (
//                                             <Rect
//                                                 x={18}
//                                                 y={22}
//                                                 width={114}
//                                                 height={56}
//                                                 cornerRadius={15}
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                             />
//                                         )}

//                                         {tag.shape === "rectangle" && (
//                                             <Rect
//                                                 x={10}
//                                                 y={27}
//                                                 width={130}
//                                                 height={46}
//                                                 cornerRadius={3}
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                             />
//                                         )}

//                                         {tag.shape === "ribbon" && (
//                                             <Line
//                                                 points={[
//                                                     15, 18, 135, 18, 135, 80,
//                                                     115, 68, 95, 80, 75, 68,
//                                                     55, 80, 35, 68, 15, 80
//                                                 ]}
//                                                 closed
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                                 lineJoin="round"
//                                             />
//                                         )}

//                                         {tag.shape === "bookmark" && (
//                                             <Line
//                                                 points={[42, 8, 108, 8, 108, 92, 75, 73, 42, 92]}
//                                                 closed
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                                 lineJoin="round"
//                                             />
//                                         )}

//                                         {tag.shape === "hexagon" && (
//                                             <RegularPolygon
//                                                 x={75}
//                                                 y={50}
//                                                 sides={6}
//                                                 radius={43}
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                             />
//                                         )}

//                                         {tag.shape === "ticket" && (
//                                             <Line
//                                                 points={[
//                                                     12, 22, 138, 22, 138, 39,
//                                                     127, 50, 138, 61, 138, 78,
//                                                     12, 78, 12, 61, 23, 50, 12, 39
//                                                 ]}
//                                                 closed
//                                                 fill={tag.fill}
//                                                 stroke={tag.borderColor}
//                                                 strokeWidth={2}
//                                                 lineJoin="round"
//                                             />
//                                         )}

//                                         {/* EDITABLE TEXT */}
//                                         <Text
//                                             x={15}
//                                             y={30}
//                                             width={120}
//                                             height={40}
//                                             text={tag.text}
//                                             fill={tag.textColor}
//                                             fontSize={
//                                                 tag.text.length > 12
//                                                     ? 11
//                                                     : tag.text.length > 8
//                                                         ? 14
//                                                         : 18
//                                             }
//                                             fontFamily="Arial"
//                                             fontStyle="bold"
//                                             align="center"
//                                             verticalAlign="middle"
//                                             wrap="word"
//                                             listening={false}
//                                         />
//                                     </Group>
//                                 ))}
//                             </Layer>

//                             {/* ================= BORDERS ================= */}

//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
//                                 {borders.map(border => {

//                                     const isSelected = selectedId === border.id;

//                                     const dash =
//                                         border.style === "dashed"
//                                             ? [18, 10]
//                                             : border.style === "dotted"
//                                                 ? [3, 8]
//                                                 : undefined;

//                                     if (border.style === "double") {
//                                         return (
//                                             <Fragment key={border.id}>

//                                                 {/* OUTER BORDER */}
//                                                 <Rect
//                                                     x={border.x}
//                                                     y={border.y}
//                                                     width={border.width}
//                                                     height={border.height}
//                                                     stroke={border.stroke}
//                                                     strokeWidth={border.strokeWidth}
//                                                     cornerRadius={border.cornerRadius || 0}
//                                                     dash={undefined}
//                                                     fillEnabled={false}
//                                                     draggable

//                                                     onClick={e => {
//                                                         if (DRAW_TOOLS.includes(tool)) return;

//                                                         setEditingBackground(false);

//                                                         e.cancelBubble = true;

//                                                         setSelectedId(border.id);
//                                                         selectedNodeRef.current = e.target;
//                                                     }}

//                                                     onTap={e => {
//                                                         if (DRAW_TOOLS.includes(tool)) return;

//                                                         setEditingBackground(false);

//                                                         e.cancelBubble = true;

//                                                         setSelectedId(border.id);
//                                                         selectedNodeRef.current = e.target;
//                                                     }}

//                                                     onDragEnd={e => {
//                                                         const { x, y } = e.target.position();

//                                                         setBorders(prev =>
//                                                             prev.map(item =>
//                                                                 item.id === border.id
//                                                                     ? { ...item, x, y }
//                                                                     : item
//                                                             )
//                                                         );

//                                                         pushHistory();
//                                                     }}

//                                                     onTransformEnd={e => {
//                                                         const node = e.target;

//                                                         const scaleX = node.scaleX();
//                                                         const scaleY = node.scaleY();

//                                                         node.scaleX(1);
//                                                         node.scaleY(1);

//                                                         const updated = {
//                                                             x: node.x(),
//                                                             y: node.y(),
//                                                             width: Math.max(
//                                                                 20,
//                                                                 node.width() * scaleX
//                                                             ),
//                                                             height: Math.max(
//                                                                 20,
//                                                                 node.height() * scaleY
//                                                             )
//                                                         };

//                                                         setBorders(prev =>
//                                                             prev.map(item =>
//                                                                 item.id === border.id
//                                                                     ? { ...item, ...updated }
//                                                                     : item
//                                                             )
//                                                         );

//                                                         pushHistory();
//                                                     }}
//                                                 />

//                                                 {/* INNER BORDER */}
//                                                 <Rect
//                                                     x={
//                                                         border.x +
//                                                         border.strokeWidth * 3
//                                                     }
//                                                     y={
//                                                         border.y +
//                                                         border.strokeWidth * 3
//                                                     }
//                                                     width={Math.max(
//                                                         1,
//                                                         border.width -
//                                                         border.strokeWidth * 6
//                                                     )}
//                                                     height={Math.max(
//                                                         1,
//                                                         border.height -
//                                                         border.strokeWidth * 6
//                                                     )}
//                                                     stroke={border.stroke}
//                                                     strokeWidth={Math.max(
//                                                         1,
//                                                         border.strokeWidth / 2
//                                                     )}
//                                                     cornerRadius={Math.max(
//                                                         0,
//                                                         (border.cornerRadius || 0) -
//                                                         border.strokeWidth * 2
//                                                     )}
//                                                     listening={false}
//                                                 />

//                                             </Fragment>
//                                         );
//                                     }

//                                     return (
//                                         <Rect
//                                             key={border.id}

//                                             x={border.x}
//                                             y={border.y}

//                                             width={border.width}
//                                             height={border.height}

//                                             stroke={border.stroke}
//                                             strokeWidth={border.strokeWidth}

//                                             dash={dash}

//                                             cornerRadius={border.cornerRadius || 0}

//                                             fillEnabled={false}

//                                             draggable

//                                             onClick={e => {
//                                                 if (DRAW_TOOLS.includes(tool)) return;

//                                                 setEditingBackground(false);

//                                                 e.cancelBubble = true;

//                                                 setSelectedId(border.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onTap={e => {
//                                                 if (DRAW_TOOLS.includes(tool)) return;

//                                                 setEditingBackground(false);

//                                                 e.cancelBubble = true;

//                                                 setSelectedId(border.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onDragEnd={e => {
//                                                 const { x, y } = e.target.position();

//                                                 setBorders(prev =>
//                                                     prev.map(item =>
//                                                         item.id === border.id
//                                                             ? { ...item, x, y }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}

//                                             onTransformEnd={e => {
//                                                 const node = e.target;

//                                                 const scaleX = node.scaleX();
//                                                 const scaleY = node.scaleY();

//                                                 node.scaleX(1);
//                                                 node.scaleY(1);

//                                                 const updated = {
//                                                     x: node.x(),
//                                                     y: node.y(),

//                                                     width: Math.max(
//                                                         20,
//                                                         node.width() * scaleX
//                                                     ),

//                                                     height: Math.max(
//                                                         20,
//                                                         node.height() * scaleY
//                                                     )
//                                                 };

//                                                 setBorders(prev =>
//                                                     prev.map(item =>
//                                                         item.id === border.id
//                                                             ? { ...item, ...updated }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}
//                                         />
//                                     );
//                                 })}
//                             </Layer>

//                             {/* SHAPES */}

//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
//                                 {shapes.map(s => {

//                                     if (s.type === "free") {
//                                         return (
//                                             <Line
//                                                 key={s.id}
//                                                 points={s.points}
//                                                 stroke={s.stroke}
//                                                 strokeWidth={s.strokeWidth}
//                                                 tension={0.5}
//                                                 lineCap="round"
//                                                 lineJoin="round"
//                                                 globalCompositeOperation={
//                                                     s.tool === "eraser"
//                                                         ? "destination-out"
//                                                         : "source-over"
//                                                 }
//                                             />
//                                         );
//                                     }

//                                     if (s.type === "line") {
//                                         return renderLine(s);
//                                     }

//                                     if (s.type === "rectangle") {
//                                         return (
//                                             <Rect
//                                                 key={s.id}
//                                                 {...s}
//                                                 draggable

//                                                 onClick={(e) => {
//                                                     setEditingBackground(false);
//                                                     e.cancelBubble = true;
//                                                     setSelectedId(s.id);
//                                                     selectedNodeRef.current = e.target;
//                                                 }}

//                                                 onTap={(e) => {
//                                                     setEditingBackground(false);
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
//                                                     setEditingBackground(false);
//                                                     e.cancelBubble = true;
//                                                     setSelectedId(s.id);
//                                                     selectedNodeRef.current = e.target;
//                                                 }}

//                                                 onTap={(e) => {
//                                                     setEditingBackground(false);
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



//                             {/* TEXT */}
//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>
//                                 {texts.map(t => (
//                                     <Fragment key={t.id}>
//                                         <Text
//                                             {...t}

//                                             // Do not give text an arbitrary 250px width.
//                                             // Ignore old widths that span almost the entire canvas.
//                                             width={
//                                                 Number.isFinite(Number(t.width)) &&
//                                                     Number(t.width) > 0 &&
//                                                     Number(t.width) < W * 0.85
//                                                     ? Number(t.width)
//                                                     : undefined
//                                             }

//                                             draggable
//                                             textDecoration={t.underline ? "underline" : ""}

//                                             align={
//                                                 ["ar"].includes(language)
//                                                     ? "right"
//                                                     : t.align || "left"
//                                             }

//                                             onClick={e => {
//                                                 setEditingBackground(false);
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(t.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onTap={e => {
//                                                 setEditingBackground(false);
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(t.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onDragEnd={e => {
//                                                 const { x, y } = e.target.position();

//                                                 setTexts(prev =>
//                                                     prev.map(item =>
//                                                         item.id === t.id
//                                                             ? { ...item, x, y }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}

//                                             onTransformEnd={e => {
//                                                 const node = e.target;

//                                                 const scaleX = node.scaleX();
//                                                 const scaleY = node.scaleY();

//                                                 // Use the node's actual rendered width, not a stale
//                                                 // saved width that may equal the whole canvas width.
//                                                 const newWidth = Math.max(
//                                                     50,
//                                                     node.width() * scaleX
//                                                 );

//                                                 const newFontSize = Math.max(
//                                                     8,
//                                                     (Number(t.fontSize) || 24) * scaleY
//                                                 );

//                                                 node.scaleX(1);
//                                                 node.scaleY(1);

//                                                 const updated = {
//                                                     x: node.x(),
//                                                     y: node.y(),
//                                                     width: newWidth,
//                                                     fontSize: newFontSize,
//                                                     rotation: node.rotation()
//                                                 };

//                                                 setTexts(prev =>
//                                                     prev.map(item =>
//                                                         item.id === t.id
//                                                             ? { ...item, ...updated }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}
//                                         />
//                                     </Fragment>
//                                 ))}
//                             </Layer>



//                             {/* 
//                             <Layer listening={!DRAW_TOOLS.includes(tool)}>


//                                 {texts.map(t => (
//                                     <Fragment key={t.id}>

//                                         <Text
//                                             {...t}
//                                             width={t.width || 250}
//                                             draggable
//                                             textDecoration={
//                                                 t.underline
//                                                     ? "underline"
//                                                     : ""
//                                             }
//                                             align={
//                                                 ["ar"].includes(language)
//                                                     ? "right"
//                                                     : t.align || "left"
//                                             }

//                                             onClick={e => {
//                                                 setEditingBackground(false);
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(t.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onDragEnd={(e) => {
//                                                 const { x, y } = e.target.position();

//                                                 setTexts(prev =>
//                                                     prev.map(item =>
//                                                         item.id === t.id ? { ...item, x, y } : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}

//                                             onTap={e => {
//                                                 setEditingBackground(false);
//                                                 e.cancelBubble = true;
//                                                 setSelectedId(t.id);
//                                                 selectedNodeRef.current = e.target;
//                                             }}

//                                             onTransformEnd={(e) => {

//                                                 const node = e.target;

//                                                 const scaleX = node.scaleX();
//                                                 const scaleY = node.scaleY();

//                                                 const newWidth = Math.max(
//                                                     50,
//                                                     (t.width || node.width()) * scaleX
//                                                 );

//                                                 const newFontSize = Math.max(
//                                                     8,
//                                                     t.fontSize * scaleY
//                                                 );

//                                                 node.scaleX(1);
//                                                 node.scaleY(1);

//                                                 const updated = {
//                                                     x: node.x(),
//                                                     y: node.y(),
//                                                     width: newWidth,
//                                                     fontSize: newFontSize,
//                                                     rotation: node.rotation()
//                                                 };

//                                                 setTexts(prev =>
//                                                     prev.map(item =>
//                                                         item.id === t.id
//                                                             ? { ...item, ...updated }
//                                                             : item
//                                                     )
//                                                 );

//                                                 pushHistory();
//                                             }}
//                                         />


//                                     </Fragment>
//                                 ))}
//                             </Layer> */}


//                             {draftShape && (
//                                 <Layer listening={false}>
//                                     {draftShape.type === "rectangle" && (
//                                         <Rect
//                                             {...draftShape}
//                                         />
//                                     )}

//                                     {draftShape.type === "circle" && (
//                                         <Circle
//                                             x={draftShape.x}
//                                             y={draftShape.y}
//                                             radius={draftShape.radius}
//                                             stroke={draftShape.stroke}
//                                             strokeWidth={draftShape.strokeWidth}
//                                         />
//                                     )}
//                                 </Layer>
//                             )}

//                             {/* TRANSFORMER: keep this layer mounted at all times */}
//                             <Layer>
//                                 <Transformer
//                                     ref={trRef}
//                                     rotateEnabled={true}
//                                     keepRatio={
//                                         selectedElement?.type === "icon" ||
//                                         selectedElement?.type === "discountTag"
//                                     }
//                                     centeredScaling={false}
//                                     enabledAnchors={[
//                                         "top-left",
//                                         "top-center",
//                                         "top-right",
//                                         "middle-left",
//                                         "middle-right",
//                                         "bottom-left",
//                                         "bottom-center",
//                                         "bottom-right"
//                                     ]}
//                                     borderStroke="#0ea5e9"
//                                     borderStrokeWidth={2}
//                                     anchorSize={12}
//                                     anchorStroke="#0ea5e9"
//                                     anchorFill="#ffffff"
//                                     anchorStrokeWidth={2}
//                                     padding={0}
//                                 />
//                             </Layer>

//                         </Stage>

//                     </div>
//                 </div>
//                 {showWordArtLibrary && (
//                     <WordArtPicker
//                         onClose={() => setShowWordArtLibrary(false)}
//                         onApply={handleApplyWordArt}
//                     />
//                 )}


//                 <BusinessPhotoBackgroundPicker
//                     isOpen={isBusinessPhotoLibraryOpen}
//                     onClose={() => setIsBusinessPhotoLibraryOpen(false)}
//                     onApply={(photo) => {
//                         // Record the current state if your existing history system supports it.
//                         if (typeof pushHistory === "function") {
//                             pushHistory();
//                         }

//                         setBackground({
//                             ...photo,
//                             type: "business-photo",
//                         });

//                         setSelectedId(null);
//                     }}
//                 />
//             </div>
//         </div>

//     );
// });

// export default Canvas;
//////////////////////////////////////////////

import {
    Stage,
    Layer,
    Rect,
    Text,
    Image as KonvaImage,
    Line,
    Circle,
    Transformer,
    RegularPolygon,
    Group,
    Star
} from "react-konva";
import { useRef, useState, useEffect, forwardRef, Fragment } from "react";
import FloatingToolbar from "./FloatinngToolbar";
import WordArtPicker from "../components/WordArtPicker";
import BusinessPhotoBackgroundPicker from "../components/BusinessPhotoBackgroundPicker";
import BusinessPhotoCanvasBackground from "../components/BusinessPhotoCanvasBackground";
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

const createId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

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
        onReset,
        texts,
        setTexts,
        images,
        setImages,
        icons = [],
        setIcons,
        onIconColorChange,
        onOpenClipArt,
        onReplaceImage,
        onReplaceIcon,
        onReplaceDiscountTag,
        onOpenDiscountTags,
        onOpenAIAssistance,
        hideCanvasToolbar = false,
        discountTags = [],
        setDiscountTags,
        shapes,
        setShapes,
        blocks,
        setBlocks,
        borders = [],
        setBorders,

        background,
        setBackground,
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
        editingBackground,
        setEditingBackground,
    },
    ref
) {
    const sizes = {
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

    const [W, H] = sizes[adSize] || [420, 420];
    const stageRef = useRef(null);
    const trRef = useRef(null);
    const selectedNodeRef = useRef(null);
    const nodeRegistryRef = useRef(new Map());


    const registerNode = (id, node) => {
        if (id == null) return;

        const key = String(id);

        if (node) {
            nodeRegistryRef.current.set(key, node);
        } else {
            nodeRegistryRef.current.delete(key);
        }
    };

    const containerRef = useRef(null);
    const canvasWrapperRef = useRef(null);

    const imageInputRef = useRef(null);
    const replaceImageIdRef = useRef(null);

    // Background drag tracking
    const backgroundDraggingRef = useRef(false);

    // Drawing state refs
    const isDrawingRef = useRef(false);

    const [isDrawing, setIsDrawing] = useState(false);
    const [draftShape, setDraftShape] = useState(null);

    const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 });
    const [isMobileToolbarOpen, setIsMobileToolbarOpen] = useState(false);
    useEffect(() => {
        if (hideCanvasToolbar) {
            setIsMobileToolbarOpen(false);
        }
    }, [hideCanvasToolbar]);
    const [showWordArtLibrary, setShowWordArtLibrary] = useState(false);
    const [isBusinessPhotoLibraryOpen, setIsBusinessPhotoLibraryOpen] =
        useState(false);

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
    /* ================= ZOOM CONTROLLER ================= */

    const zoomLevels = [25, 50, 75, 100, 125, 150, 200, 300];

    const getIsMobile = () =>
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 768px)").matches;

    const [zoomPercent, setZoomPercent] = useState(
        getIsMobile() ? 75 : 100
    );

    /* Keep zoom synced with mobile/desktop breakpoint */
    useEffect(() => {
        const handleViewportChange = () => {
            const mobile = getIsMobile();

            setZoomPercent(prev => {
                // Only change the automatic starting zoom
                // when crossing between desktop and mobile.
                if (mobile && prev === 100) return 75;
                if (!mobile && prev === 75) return 100;

                return prev;
            });
        };

        window.addEventListener("resize", handleViewportChange);

        return () => {
            window.removeEventListener("resize", handleViewportChange);
        };
    }, []);

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

        if (editingBackground) {
            container.style.cursor = "grabbing";
            return;
        }

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
    }, [tool, isDrawing, editingBackground]);

    /* ================= BACKGROUND DRAG END ================= */

    const finishBackgroundEditing = () => {
        const node = selectedNodeRef.current;
        const wasDragging = backgroundDraggingRef.current;

        // Stop Konva dragging immediately
        if (node) {
            const { x, y } = node.position();

            if (wasDragging) {
                setBackground(prev => ({
                    ...prev,
                    x,
                    y
                }));
            }

            node.stopDrag();
            node.draggable(false);
        }

        backgroundDraggingRef.current = false;

        // Completely exit background editing
        setEditingBackground(false);
        setSelectedId(null);
        selectedNodeRef.current = null;

        // Remove transformer if anything is attached
        if (trRef.current) {
            trRef.current.nodes([]);
            trRef.current.getLayer()?.batchDraw();
        }

        if (wasDragging) {
            pushHistory();
        }
    };

    /* ================= TEMPLATE IMAGE REPLACEMENT ================= */

    const openImageReplacement = imageId => {

        if (!imageId) return;

        replaceImageIdRef.current = imageId;

        if (imageInputRef.current) {
            imageInputRef.current.value = "";
            imageInputRef.current.click();
        }
    };

    const handleReplacementFile = e => {

        const file = e.target.files?.[0];

        const imageId = replaceImageIdRef.current;

        if (!file || !imageId) {
            replaceImageIdRef.current = null;
            return;
        }

        if (onReplaceImage) {
            onReplaceImage(imageId, file);
        }

        replaceImageIdRef.current = null;

        e.target.value = "";
    };

    useEffect(() => {
        const handleGlobalPointerUp = () => {
            if (backgroundDraggingRef.current) {
                finishBackgroundEditing();
            }
        };

        window.addEventListener("pointerup", handleGlobalPointerUp);
        window.addEventListener("mouseup", handleGlobalPointerUp);
        window.addEventListener("touchend", handleGlobalPointerUp);
        window.addEventListener("touchcancel", handleGlobalPointerUp);

        return () => {
            window.removeEventListener("pointerup", handleGlobalPointerUp);
            window.removeEventListener("mouseup", handleGlobalPointerUp);
            window.removeEventListener("touchend", handleGlobalPointerUp);
            window.removeEventListener("touchcancel", handleGlobalPointerUp);
        };
    }, []);
    /* ================= TRANSFORMER ================= */
    // Keep the Transformer mounted in its own permanent layer. Re-mounting the
    // whole layer every time selectedId changes can cause the canvas to flash
    // or clear in some React-Konva render cycles.
    useEffect(() => {
        const transformer = trRef.current;
        if (!transformer) return;

        const clearTransformer = () => {
            transformer.nodes([]);
            transformer.getLayer()?.batchDraw();
        };

        if (
            selectedId == null ||
            String(selectedId) === "background" ||
            DRAW_TOOLS.includes(tool)
        ) {
            clearTransformer();
            return;
        }

        const selectedKey = String(selectedId);
        const isIconOrTag =
            icons.some(item => String(item.id) === selectedKey) ||
            discountTags.some(item => String(item.id) === selectedKey);

        // Icons and discount tags must use their own registered Konva node.
        // Never attach the previous selection's node if their ref isn't ready.
        const node =
            nodeRegistryRef.current.get(selectedKey) ||
            (isIconOrTag ? null : selectedNodeRef.current);

        if (!node || !node.getStage() || node.getStage() !== stageRef.current) {
            clearTransformer();
            return;
        }

        selectedNodeRef.current = node;
        transformer.nodes([node]);
        transformer.forceUpdate();
        transformer.getLayer()?.batchDraw();
    }, [
        selectedId,
        activeSection,
        tool,
        texts,
        images,
        icons,
        shapes,
        blocks,
        borders,
        discountTags
    ]);

    // /* ================= toolbar ================= */
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

    useEffect(() => {
        const handleOutsidePointer = (e) => {
            if (!editingBackground) return;

            const stage = stageRef.current;

            if (!stage) return;

            const rect = stage.container().getBoundingClientRect();

            const insideStage =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            // Click/pointer outside the actual canvas
            if (!insideStage) {
                finishBackgroundEditing();
            }
        };

        document.addEventListener("pointerdown", handleOutsidePointer);

        return () => {
            document.removeEventListener(
                "pointerdown",
                handleOutsidePointer
            );
        };
    }, [editingBackground]);

    /*/////////////////////////////*/
    const handleApplyWordArt = (wordArt) => {
        const selectedText = texts?.find(
            (item) => String(item.id) === String(selectedId) &&
                (item.type === "text" || item.text !== undefined)
        );

        if (!selectedText) {
            alert("Please select a text object on the canvas first.");
            return;
        }

        setTexts((previousTexts) =>
            previousTexts.map((item) => {
                if (String(item.id) !== String(selectedId)) {
                    return item;
                }

                return {
                    ...item,
                    ...wordArt.style,

                    // Preserve the user's existing wording and placement.
                    text: item.text,
                    x: item.x,
                    y: item.y,
                    width: item.width,
                    rotation: item.rotation ?? 0,
                    id: item.id,
                    type: item.type,
                };
            })
        );

        setShowWordArtLibrary(false);
    };

    /* ================= DRAWING ================= */
    const onMouseDown = e => {
        if (!DRAW_TOOLS.includes(tool)) return;

        // Never allow background editing while drawing
        if (editingBackground) {
            finishBackgroundEditing();
            return;
        }

        const stage = stageRef.current;
        if (!stage) return;

        // Drawing starts only from empty canvas
        if (e.target !== stage) return;

        const pos = stage.getPointerPosition();
        if (!pos) return;

        setIsDrawing(true);
        isDrawingRef.current = true;

        const id = createId();

        if (tool === "brush" || tool === "eraser") {
            setShapes(s => [
                ...s,
                {
                    id,
                    type: "free",
                    tool,
                    points: [pos.x, pos.y],
                    stroke: strokeColor,
                    strokeWidth
                }
            ]);
            return;
        }

        if (tool === "line") {
            setShapes(s => [
                ...s,
                {
                    id,
                    type: "line",
                    lineType: lineType || "thin",
                    points: [pos.x, pos.y, pos.x, pos.y],
                    stroke: strokeColor,
                    strokeWidth
                }
            ]);
            return;
        }

        if (tool === "rectangle") {
            setDraftShape({
                id,
                type: "rectangle",
                x: pos.x,
                y: pos.y,
                width: 0,
                height: 0,
                stroke: strokeColor,
                strokeWidth
            });
            return;
        }

        if (tool === "circle") {
            setDraftShape({
                id,
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

        const stage = stageRef.current;
        if (!stage) return;

        const pos = stage.getPointerPosition();
        if (!pos) return;

        if (tool === "brush" || tool === "eraser") {
            setShapes(s => {
                if (!s.length) return s;

                const last = { ...s[s.length - 1] };

                last.points = [
                    ...last.points,
                    pos.x,
                    pos.y
                ];

                return [
                    ...s.slice(0, -1),
                    last
                ];
            });

            return;
        }

        if (tool === "line") {
            setShapes(s => {
                if (!s.length) return s;

                const last = { ...s[s.length - 1] };

                last.points = [
                    last.points[0],
                    last.points[1],
                    pos.x,
                    pos.y
                ];

                return [
                    ...s.slice(0, -1),
                    last
                ];
            });

            return;
        }

        if (tool === "rectangle") {
            setDraftShape(d => {
                if (!d) return d;

                return {
                    ...d,
                    width: pos.x - d.x,
                    height: pos.y - d.y
                };
            });

            return;
        }

        if (tool === "circle") {
            setDraftShape(d => {
                if (!d) return d;

                const dx = pos.x - d.x;
                const dy = pos.y - d.y;

                return {
                    ...d,
                    radius: Math.sqrt(
                        dx * dx + dy * dy
                    )
                };
            });
        }
    };

    const onMouseUp = () => {
        if (!isDrawingRef.current) return;

        isDrawingRef.current = false;
        setIsDrawing(false);

        setDraftShape(currentDraft => {
            if (currentDraft) {
                setShapes(prev => [
                    ...prev,
                    currentDraft
                ]);
            }

            return null;
        });

        // ONE DRAW = ONE ACTION
        setTool("select");

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
        icons.find(i => i.id === selectedId) ||
        shapes.find(s => s.id === selectedId) ||
        blocks.find(b => b.id === selectedId) ||
        discountTags.find(t => t.id === selectedId) ||
        borders.find(b => b.id === selectedId);


    /* ================= DELETE FUNCTION ================= */

    const deleteElement = () => {
        if (!selectedId) return;

        setTexts(prev => prev.filter(t => t.id !== selectedId));
        setImages(prev => prev.filter(i => i.id !== selectedId));
        if (setIcons) {
            setIcons(prev =>
                prev.filter(i => i.id !== selectedId)
            );
        }
        setShapes(prev => prev.filter(s => s.id !== selectedId));
        setBlocks(prev => prev.filter(b => b.id !== selectedId));
        setDiscountTags(prev => prev.filter(t => t.id !== selectedId));
        setBorders(prev => prev.filter(b => b.id !== selectedId));

        setSelectedId(null);
        selectedNodeRef.current = null;

        pushHistory();
    };


    // return (
    //     <div
    //         ref={containerRef}
    //         style={{
    //             flex: 1,
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             position: "relative",
    //             overflow: "hidden",
    //             background:
    //                 "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
    //         }}
    //     >
    return (
        <div
            ref={containerRef}
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                background:
                    "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
            }}
        >

            <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleReplacementFile}
            />


            {/* RESPONSIVE TOOLBAR SHELL */}
            <div
                className="adstudio-toolbar-shell"
                style={{
                    display: hideCanvasToolbar ? "none" : "flex",
                    position: "absolute",
                    top: 12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "max-content",
                    maxWidth: "calc(100% - 24px)",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 30,
                    boxSizing: "border-box",
                }}
            >

                {/* MOBILE TOGGLE BUTTON */}
                <button
                    type="button"
                    className="adstudio-toolbar-toggle"
                    data-tour="tools-toggle"
                    onClick={() => setIsMobileToolbarOpen((previous) => !previous)}
                    aria-label={isMobileToolbarOpen ? "Hide toolbar" : "Show toolbar"}
                    aria-expanded={isMobileToolbarOpen}
                    title={isMobileToolbarOpen ? "Hide tools" : "Show tools"}
                >
                    <span className={isMobileToolbarOpen ? "toolbar-toggle-icon is-open" : "toolbar-toggle-icon"}>
                        {isMobileToolbarOpen ? "✕" : "☰"}
                    </span>
                    <span className="toolbar-toggle-label">
                        {isMobileToolbarOpen ? "Hide tools" : "Tools"}
                    </span>
                </button>

                {/* EXISTING TOOLBAR */}
                <div
                    className={`adstudio-canvas-toolbar ${isMobileToolbarOpen
                        ? "adstudio-toolbar-menu-open"
                        : "adstudio-toolbar-menu-closed"
                        }`}
                >
                    {/* KEEP YOUR EXISTING FIVE BUTTONS HERE:
        AI Assistance, Backgrounds, Icons, Reset, Sale Tags.
        Do not change their onClick handlers. */}

                    {/* AI ASSISTANCE */}
                    <button
                        type="button"
                        className="adstudio-tool-button adstudio-ai-button"
                        onClick={() => {
                            if (onOpenAIAssistance) {
                                onOpenAIAssistance();
                            } else {
                                window.dispatchEvent(
                                    new CustomEvent("adstudio-open-ai-assistance")
                                );
                            }
                        }}
                        title="AI Assistance"
                        data-tippy-content="AI Assistance"
                        aria-label="Open AI Assistance"
                    >
                        <span className="adstudio-tool-icon" aria-hidden="true">
                            ✦
                        </span>
                        <span className="adstudio-tool-label">
                            AI Assistance
                        </span>
                        <span className="adstudio-beta-label">
                            Beta
                        </span>
                    </button>

                    {/* BACKGROUNDS */}
                    <button
                        type="button"
                        className="adstudio-tool-button adstudio-background-button"
                        data-tour="backgrounds"
                        onClick={() => onOpenClipArt?.()}
                        title="Backgrounds"
                        data-tippy-content="Backgrounds"
                        aria-label="Open Backgrounds Library"
                    >
                        <span className="adstudio-tool-icon" aria-hidden="true">
                            ▧
                        </span>
                        <span className="adstudio-tool-label">
                            Backgrounds
                        </span>
                    </button>

                    <button
                        type="button"
                        className="adstudio-tool-button"
                        onClick={() => setIsBusinessPhotoLibraryOpen(true)}
                        title="Business Photo Backgrounds"
                    >
                        <span>Business Photos</span>
                    </button>


                    {/* WORD ART */}
                    <button
                        type="button"
                        className="adstudio-tool-button adstudio-sale-button"
                        onClick={() => setShowWordArtLibrary(true)}
                        title="Word Art"
                        data-tippy-content="Word Art"
                        aria-label="Open Word Art Library"
                    >
                        <span className="adstudio-tool-icon" aria-hidden="true">
                            Aa
                        </span>
                        <span className="adstudio-tool-label">
                            Word Art
                        </span>
                    </button>


                    {/* ICONS */}
                    <button
                        type="button"
                        className="adstudio-tool-button adstudio-icons-button"
                        data-tour="icons"
                        onClick={() => {
                            setSelectedId(null);
                            selectedNodeRef.current = null;
                            setEditingBackground(false);

                            if (trRef.current) {
                                trRef.current.nodes([]);
                                trRef.current.getLayer()?.batchDraw();
                            }

                            window.dispatchEvent(
                                new CustomEvent("adstudio-open-icon-picker")
                            );
                        }}
                        title="Icons"
                        data-tippy-content="Icons"
                        aria-label="Open Icon Library"
                    >
                        <span className="adstudio-tool-icon" aria-hidden="true">
                            ✥
                        </span>
                        <span className="adstudio-tool-label">
                            Icons
                        </span>
                    </button>

                    {/* DISCOUNT / SALE TAGS */}
                    <button
                        type="button"
                        className="adstudio-tool-button adstudio-sale-button"
                        onClick={() => {
                            setSelectedId(null);
                            selectedNodeRef.current = null;
                            setEditingBackground(false);

                            if (trRef.current) {
                                trRef.current.nodes([]);
                                trRef.current.getLayer()?.batchDraw();
                            }

                            onOpenDiscountTags?.();
                        }}
                        title="Sale Tags — Discounts and Special Offers"
                        data-tippy-content="Sale Tags"
                        aria-label="Open Sale Tags Library"
                        data-tour="discount-tags"
                    >
                        <span className="adstudio-tool-icon" aria-hidden="true">
                            🏷
                        </span>
                        <span className="adstudio-tool-label">
                            Sale Tags
                        </span>
                    </button>


                    {/* RESET */}
                    <button
                        type="button"
                        className="adstudio-tool-button adstudio-reset-button"
                        onClick={onReset}
                        title="Reset Canvas"
                        data-tippy-content="Reset Canvas"
                        aria-label="Reset Canvas"
                    >
                        <span className="adstudio-tool-icon" aria-hidden="true">
                            ↻
                        </span>
                        <span className="adstudio-tool-label">
                            Reset
                        </span>
                    </button>


                </div>


            </div>




            {/* ================= END RESPONSIVE CANVAS TOOLBAR ================= */}



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


            {/* =========================================================
    ICON COLOR CONTROL
========================================================= */}

            {selectedElement?.type === "icon" && (
                <div
                    style={{
                        position: "fixed",

                        left:
                            toolbarPos.x,

                        top:
                            toolbarPos.y + 38,

                        transform:
                            "translateX(-50%)",

                        zIndex: 100,

                        display: "flex",

                        alignItems: "center",

                        gap: 8,

                        padding:
                            "7px 10px",

                        borderRadius: 10,

                        background:
                            "#ffffff",

                        border:
                            "1px solid #e2e8f0",

                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.16)"
                    }}
                >

                    <span
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#475569"
                        }}
                    >
                        Color
                    </span>

                    <input
                        type="color"
                        value={
                            selectedElement.color ||
                            "#0b1f33"
                        }
                        onChange={e => {

                            if (
                                onIconColorChange
                            ) {
                                onIconColorChange(
                                    selectedElement.id,
                                    e.target.value
                                );
                            }
                        }}
                        style={{
                            width: 30,
                            height: 30,

                            padding: 0,

                            border: 0,

                            background:
                                "transparent",

                            cursor: "pointer"
                        }}
                    />

                </div>
            )}


            {/* ================= DISCOUNT TAG EDITOR ================= */}

            {selectedElement?.type === "discountTag" && (
                <div
                    style={{
                        position: "fixed",
                        left: toolbarPos.x,
                        top: toolbarPos.y + 38,
                        transform: "translateX(-50%)",
                        zIndex: 110,
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 8,
                        padding: 10,
                        borderRadius: 12,
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                        maxWidth: "calc(100vw - 24px)",
                    }}
                >
                    <input
                        aria-label="Discount tag text"
                        value={selectedElement.text}
                        maxLength={40}
                        onChange={e => {
                            const text = e.target.value;

                            setDiscountTags(prev =>
                                prev.map(tag =>
                                    tag.id === selectedId
                                        ? { ...tag, text }
                                        : tag
                                )
                            );
                        }}
                        onBlur={() => pushHistory()}
                        style={{
                            width: 140,
                            minWidth: 0,
                            padding: "7px 9px",
                            border: "1px solid #cbd5e1",
                            borderRadius: 7,
                            fontSize: 13,
                        }}
                    />

                    <label title="Tag background color">
                        <input
                            aria-label="Tag background color"
                            type="color"
                            value={selectedElement.fill || "#dc2626"}
                            onChange={e => {
                                const fill = e.target.value;

                                setDiscountTags(prev =>
                                    prev.map(tag =>
                                        tag.id === selectedId
                                            ? { ...tag, fill }
                                            : tag
                                    )
                                );
                            }}
                            style={{ width: 30, height: 30, cursor: "pointer" }}
                        />
                    </label>

                    <label title="Tag text color">
                        <input
                            aria-label="Tag text color"
                            type="color"
                            value={selectedElement.textColor || "#ffffff"}
                            onChange={e => {
                                const textColor = e.target.value;

                                setDiscountTags(prev =>
                                    prev.map(tag =>
                                        tag.id === selectedId
                                            ? { ...tag, textColor }
                                            : tag
                                    )
                                );
                            }}
                            style={{ width: 30, height: 30, cursor: "pointer" }}
                        />
                    </label>

                    <label title="Tag border color">
                        <input
                            aria-label="Tag border color"
                            type="color"
                            value={selectedElement.borderColor || "#991b1b"}
                            onChange={e => {
                                const borderColor = e.target.value;

                                setDiscountTags(prev =>
                                    prev.map(tag =>
                                        tag.id === selectedId
                                            ? { ...tag, borderColor }
                                            : tag
                                    )
                                );
                            }}
                            style={{ width: 30, height: 30, cursor: "pointer" }}
                        />
                    </label>
                </div>
            )}


            <FloatingToolbar
                element={selectedElement}
                onDelete={deleteElement}
                onEdit={() => {

                    if (!selectedElement) return;

                    if (selectedElement.text) {
                        setActiveSection("text");
                        return;
                    }

                    if (selectedElement.type === "icon") {
                        return;
                    }

                    if (selectedElement.image) {
                        setActiveSection("image");
                        return;
                    }

                    setActiveSection("shapes");
                }}

                onDuplicate={() => {
                    if (!selectedElement) return;

                    if (selectedElement.type === "icon") {

                        const duplicated = {
                            ...selectedElement,

                            id: createId(),

                            x:
                                selectedElement.x + 30,

                            y:
                                selectedElement.y + 30
                        };

                        setIcons(prev => [
                            ...prev,
                            duplicated
                        ]);

                        setSelectedId(
                            duplicated.id
                        );

                        setTimeout(() => {
                            pushHistory();
                        }, 0);

                        return;
                    }

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
                        ref={canvasWrapperRef}
                        style={{
                            position: "relative",

                            background:
                                "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #12385d 70%, #1e4f7a 100%)",

                            borderRadius: 26,

                            padding: 18,

                            boxShadow:
                                "0 25px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",

                            overflow: "hidden",

                            border: "1px solid rgba(255,255,255,0.08)",

                            backdropFilter: "blur(10px)"
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
                            onMouseLeave={onMouseUp}

                            onTouchStart={onMouseDown}
                            onTouchMove={onMouseMove}
                            onTouchEnd={onMouseUp}
                            onTouchCancel={onMouseUp}
                            onClick={e => {
                                if (e.target === e.target.getStage()) {
                                    setSelectedId(null);
                                    selectedNodeRef.current = null;

                                    if (!isDrawing) {
                                        setEditingBackground(false);
                                    }
                                }
                            }}
                            onTap={e => {
                                if (e.target === e.target.getStage()) {
                                    setSelectedId(null);
                                    selectedNodeRef.current = null;

                                    if (!isDrawing) {
                                        setEditingBackground(false);
                                    }
                                }
                            }}

                        // onMouseDown={(e) => {
                        //     const clickedOnEmpty =
                        //         e.target === e.target.getStage();

                        //     if (clickedOnEmpty) {
                        //         setSelectedId(null);
                        //         setEditingBackground(false);
                        //     }
                        // }}

                        // onTouchStart={(e) => {
                        //     const clickedOnEmpty =
                        //         e.target === e.target.getStage();

                        //     if (clickedOnEmpty) {
                        //         setSelectedId(null);
                        //         setEditingBackground(false);
                        //     }
                        // }}
                        //////////////////////////////////////////////////////////
                        // onMouseDown={e => {
                        //     if (e.target === e.target.getStage()) {
                        //         setSelectedId(null);
                        //         setEditingBackground(false);
                        //     }
                        // }}

                        // onTouchStart={e => {
                        //     if (e.target === e.target.getStage()) {
                        //         setSelectedId(null);
                        //         setEditingBackground(false);
                        //     }
                        // }}


                        >

                            {/* BACKGROUND */}

                            <Layer listening={true}>

                                {/* default background */}
                                <Rect
                                    width={W}
                                    height={H}
                                    fill={background?.value || "#f8fafc"}
                                    listening={false}
                                />

                                {/* BACKGROUND IMAGE */}
                                {background?.type === "image" && background.image && (
                                    <KonvaImage
                                        image={background.image}

                                        x={background.x ?? 0}
                                        y={background.y ?? 0}

                                        width={background.width ?? W}
                                        height={background.height ?? H}

                                        crop={background.crop}

                                        rotation={background.rotation || 0}

                                        listening={!DRAW_TOOLS.includes(tool)}

                                        draggable={editingBackground}

                                        onDblClick={(e) => {

                                            if (DRAW_TOOLS.includes(tool)) return;

                                            e.cancelBubble = true;

                                            const node = e.target;

                                            setEditingBackground(true);

                                            setSelectedId("background");

                                            selectedNodeRef.current = node;

                                            requestAnimationFrame(() => {
                                                node.draggable(true);
                                            });
                                        }}

                                        onDblTap={(e) => {

                                            if (DRAW_TOOLS.includes(tool)) return;

                                            e.cancelBubble = true;

                                            const node = e.target;

                                            setEditingBackground(true);

                                            setSelectedId("background");

                                            selectedNodeRef.current = node;

                                            requestAnimationFrame(() => {
                                                node.draggable(true);
                                            });
                                        }}

                                        onDragEnd={(e) => {

                                            if (!editingBackground) {
                                                e.target.stopDrag();
                                                return;
                                            }

                                            const node = e.target;

                                            const { x, y } =
                                                node.position();

                                            setBackground(prev => ({
                                                ...prev,
                                                x,
                                                y
                                            }));

                                            node.stopDrag();
                                            node.draggable(false);

                                            setEditingBackground(false);

                                            setSelectedId(null);

                                            selectedNodeRef.current = null;

                                            pushHistory();
                                        }}
                                    />
                                )}


                                {background?.type === "business-photo" && (
                                    <BusinessPhotoCanvasBackground
                                        background={background}
                                        width={W}
                                        height={H}
                                    />
                                )}
                            </Layer>


                            {/* BLOCKS */}

                            <Layer listening={!DRAW_TOOLS.includes(tool)}>
                                {blocks.map(b => {
                                    const shape = getBlockShape(b);
                                    if (!shape) return null;

                                    return (
                                        <shape.type
                                            {...shape.props}
                                            key={b.id}
                                            draggable

                                            onClick={(e) => {
                                                setEditingBackground(false);
                                                e.cancelBubble = true;
                                                setSelectedId(b.id);
                                                selectedNodeRef.current = e.target;
                                            }}
                                            onTap={(e) => {
                                                setEditingBackground(false);
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

                            <Layer listening={!DRAW_TOOLS.includes(tool)}>

                                {images.map(img => (
                                    <KonvaImage
                                        key={img.id}

                                        x={img.x}
                                        y={img.y}

                                        width={img.width}
                                        height={img.height}

                                        rotation={img.rotation || 0}

                                        image={img.image}

                                        onDblClick={e => {

                                            if (DRAW_TOOLS.includes(tool)) return;

                                            if (img.assetType === "social" || img.type === "social") {
                                                e.cancelBubble = true;
                                                setEditingBackground(false);
                                                setSelectedId(img.id);
                                                selectedNodeRef.current = e.target;
                                                onReplaceIcon?.(img.id, "images");
                                                return;
                                            }

                                            // Template logos and decorative photos use image replacement.
                                            if (
                                                img.assetType !== "logo" &&
                                                img.assetType !== "photo"
                                            ) {
                                                return;
                                            }

                                            e.cancelBubble = true;

                                            setEditingBackground(false);

                                            setSelectedId(img.id);

                                            selectedNodeRef.current = e.target;

                                            openImageReplacement(img.id);
                                        }}

                                        onDblTap={e => {

                                            if (DRAW_TOOLS.includes(tool)) return;

                                            if (img.assetType === "social" || img.type === "social") {
                                                e.cancelBubble = true;
                                                setEditingBackground(false);
                                                setSelectedId(img.id);
                                                selectedNodeRef.current = e.target;
                                                onReplaceIcon?.(img.id, "images");
                                                return;
                                            }

                                            // Template logos and decorative photos use image replacement.
                                            if (
                                                img.assetType !== "logo" &&
                                                img.assetType !== "photo"
                                            ) {
                                                return;
                                            }

                                            e.cancelBubble = true;

                                            setEditingBackground(false);

                                            setSelectedId(img.id);

                                            selectedNodeRef.current = e.target;

                                            openImageReplacement(img.id);
                                        }}

                                        draggable={!DRAW_TOOLS.includes(tool)}

                                        listening={!DRAW_TOOLS.includes(tool)}

                                        onClick={e => {

                                            setEditingBackground(false);

                                            e.cancelBubble = true;

                                            setSelectedId(img.id);

                                            selectedNodeRef.current =
                                                e.target;
                                        }}

                                        onTap={e => {

                                            setEditingBackground(false);

                                            e.cancelBubble = true;

                                            setSelectedId(img.id);

                                            selectedNodeRef.current =
                                                e.target;
                                        }}

                                        onDragEnd={e => {

                                            const { x, y } =
                                                e.target.position();

                                            setImages(prev =>
                                                prev.map(item =>
                                                    item.id === img.id
                                                        ? {
                                                            ...item,
                                                            x,
                                                            y
                                                        }
                                                        : item
                                                )
                                            );

                                            pushHistory();
                                        }}

                                        onTransformEnd={e => {

                                            const node = e.target;

                                            const scaleX =
                                                node.scaleX();

                                            const scaleY =
                                                node.scaleY();

                                            const newWidth =
                                                Math.max(
                                                    20,
                                                    node.width() *
                                                    scaleX
                                                );

                                            const newHeight =
                                                Math.max(
                                                    20,
                                                    node.height() *
                                                    scaleY
                                                );

                                            node.scaleX(1);
                                            node.scaleY(1);

                                            setImages(prev =>
                                                prev.map(item =>
                                                    item.id === img.id
                                                        ? {
                                                            ...item,

                                                            x: node.x(),
                                                            y: node.y(),

                                                            width: newWidth,
                                                            height: newHeight,

                                                            rotation:
                                                                node.rotation()
                                                        }
                                                        : item
                                                )
                                            );

                                            pushHistory();
                                        }}

                                    />
                                ))}

                            </Layer>


                            {/* =========================================================
    ICONS
========================================================= */}

                            <Layer listening={!DRAW_TOOLS.includes(tool)}>

                                {icons.map(icon => {

                                    if (!icon.image) {
                                        return null;
                                    }

                                    return (

                                        <KonvaImage
                                            key={icon.id}
                                            ref={node => registerNode(icon.id, node)}
                                            image={icon.image}


                                            x={icon.x}
                                            y={icon.y}

                                            width={icon.width}
                                            height={icon.height}

                                            rotation={
                                                icon.rotation || 0
                                            }

                                            draggable={
                                                !DRAW_TOOLS.includes(tool)
                                            }

                                            listening={
                                                !DRAW_TOOLS.includes(tool)
                                            }

                                            onDblClick={e => {
                                                if (DRAW_TOOLS.includes(tool)) return;
                                                e.cancelBubble = true;
                                                setEditingBackground(false);
                                                setSelectedId(icon.id);
                                                onReplaceIcon?.(icon.id, "icons");
                                            }}

                                            onDblTap={e => {
                                                if (DRAW_TOOLS.includes(tool)) return;
                                                e.cancelBubble = true;
                                                setEditingBackground(false);
                                                setSelectedId(icon.id);
                                                onReplaceIcon?.(icon.id, "icons");
                                            }}

                                            onClick={e => {

                                                if (
                                                    DRAW_TOOLS.includes(
                                                        tool
                                                    )
                                                ) {
                                                    return;
                                                }

                                                setEditingBackground(
                                                    false
                                                );

                                                e.cancelBubble = true;

                                                setSelectedId(
                                                    icon.id
                                                );

                                                selectedNodeRef.current =
                                                    e.target;
                                            }}

                                            onTap={e => {

                                                if (
                                                    DRAW_TOOLS.includes(
                                                        tool
                                                    )
                                                ) {
                                                    return;
                                                }

                                                setEditingBackground(
                                                    false
                                                );

                                                e.cancelBubble = true;

                                                setSelectedId(
                                                    icon.id
                                                );

                                                selectedNodeRef.current =
                                                    e.target;
                                            }}

                                            onDragEnd={e => {

                                                const {
                                                    x,
                                                    y
                                                } =
                                                    e.target.position();

                                                setIcons(prev =>
                                                    prev.map(item =>
                                                        item.id === icon.id
                                                            ? {
                                                                ...item,
                                                                x,
                                                                y
                                                            }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}

                                            onTransformEnd={e => {

                                                const node =
                                                    e.target;

                                                const scaleX =
                                                    node.scaleX();

                                                const scaleY =
                                                    node.scaleY();

                                                const newWidth =
                                                    Math.max(
                                                        20,
                                                        node.width() *
                                                        scaleX
                                                    );

                                                const newHeight =
                                                    Math.max(
                                                        20,
                                                        node.height() *
                                                        scaleY
                                                    );

                                                node.scaleX(1);
                                                node.scaleY(1);

                                                setIcons(prev =>
                                                    prev.map(item =>
                                                        item.id === icon.id
                                                            ? {
                                                                ...item,

                                                                x: node.x(),
                                                                y: node.y(),

                                                                width:
                                                                    newWidth,

                                                                height:
                                                                    newHeight,

                                                                rotation:
                                                                    node.rotation()
                                                            }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}
                                        />
                                    );
                                })}

                            </Layer>


                            {/* ================= DISCOUNT / SALE TAGS ================= */}

                            <Layer listening={!DRAW_TOOLS.includes(tool)}>
                                {discountTags.map(tag => (

                                    <Group
                                        key={tag.id}
                                        ref={node => registerNode(tag.id, node)}
                                        x={tag.x}
                                        y={tag.y}

                                        scaleX={tag.width / 150}
                                        scaleY={tag.height / 100}
                                        rotation={tag.rotation || 0}
                                        draggable={!DRAW_TOOLS.includes(tool)}
                                        onDblClick={e => {
                                            if (DRAW_TOOLS.includes(tool)) return;
                                            e.cancelBubble = true;
                                            setSelectedId(tag.id);
                                            setEditingBackground(false);
                                            onReplaceDiscountTag?.(tag.id);
                                        }}
                                        onDblTap={e => {
                                            if (DRAW_TOOLS.includes(tool)) return;
                                            e.cancelBubble = true;
                                            setSelectedId(tag.id);
                                            setEditingBackground(false);
                                            onReplaceDiscountTag?.(tag.id);
                                        }}
                                        onClick={e => {
                                            if (DRAW_TOOLS.includes(tool)) return;

                                            e.cancelBubble = true;
                                            setEditingBackground(false);
                                            setSelectedId(tag.id);
                                            selectedNodeRef.current = e.currentTarget;
                                        }}
                                        onTap={e => {
                                            if (DRAW_TOOLS.includes(tool)) return;

                                            e.cancelBubble = true;
                                            setEditingBackground(false);
                                            setSelectedId(tag.id);
                                            selectedNodeRef.current = e.currentTarget;
                                        }}
                                        onDragEnd={e => {
                                            const node = e.currentTarget;
                                            const { x, y } = node.position();

                                            setDiscountTags(prev =>
                                                prev.map(item =>
                                                    item.id === tag.id ? { ...item, x, y } : item
                                                )
                                            );

                                            pushHistory();
                                        }}
                                        onTransformEnd={e => {
                                            const node = e.currentTarget;

                                            const newWidth = Math.max(35, 150 * node.scaleX());
                                            const newHeight = Math.max(25, 100 * node.scaleY());

                                            const updated = {
                                                x: node.x(),
                                                y: node.y(),
                                                width: newWidth,
                                                height: newHeight,
                                                rotation: node.rotation(),
                                            };

                                            node.scaleX(newWidth / 150);
                                            node.scaleY(newHeight / 100);

                                            setDiscountTags(prev =>
                                                prev.map(item =>
                                                    item.id === tag.id
                                                        ? { ...item, ...updated }
                                                        : item
                                                )
                                            );

                                            pushHistory();
                                        }}
                                    >
                                        {/* TAG SHAPE */}
                                        {tag.shape === "burst" && (
                                            <Star
                                                x={75}
                                                y={50}
                                                numPoints={12}
                                                innerRadius={35}
                                                outerRadius={45}
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                                shadowColor="#000000"
                                                shadowBlur={3}
                                                shadowOpacity={0.12}
                                            />
                                        )}

                                        {tag.shape === "circle" && (
                                            <Circle
                                                x={75}
                                                y={50}
                                                radius={42}
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                            />
                                        )}

                                        {tag.shape === "rounded" && (
                                            <Rect
                                                x={18}
                                                y={22}
                                                width={114}
                                                height={56}
                                                cornerRadius={15}
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                            />
                                        )}

                                        {tag.shape === "rectangle" && (
                                            <Rect
                                                x={10}
                                                y={27}
                                                width={130}
                                                height={46}
                                                cornerRadius={3}
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                            />
                                        )}

                                        {tag.shape === "ribbon" && (
                                            <Line
                                                points={[
                                                    15, 18, 135, 18, 135, 80,
                                                    115, 68, 95, 80, 75, 68,
                                                    55, 80, 35, 68, 15, 80
                                                ]}
                                                closed
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                                lineJoin="round"
                                            />
                                        )}

                                        {tag.shape === "bookmark" && (
                                            <Line
                                                points={[42, 8, 108, 8, 108, 92, 75, 73, 42, 92]}
                                                closed
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                                lineJoin="round"
                                            />
                                        )}

                                        {tag.shape === "hexagon" && (
                                            <RegularPolygon
                                                x={75}
                                                y={50}
                                                sides={6}
                                                radius={43}
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                            />
                                        )}

                                        {tag.shape === "ticket" && (
                                            <Line
                                                points={[
                                                    12, 22, 138, 22, 138, 39,
                                                    127, 50, 138, 61, 138, 78,
                                                    12, 78, 12, 61, 23, 50, 12, 39
                                                ]}
                                                closed
                                                fill={tag.fill}
                                                stroke={tag.borderColor}
                                                strokeWidth={2}
                                                lineJoin="round"
                                            />
                                        )}

                                        {/* EDITABLE TEXT */}
                                        <Text
                                            x={15}
                                            y={30}
                                            width={120}
                                            height={40}
                                            text={tag.text}
                                            fill={tag.textColor}
                                            fontSize={
                                                tag.text.length > 12
                                                    ? 11
                                                    : tag.text.length > 8
                                                        ? 14
                                                        : 18
                                            }
                                            fontFamily="Arial"
                                            fontStyle="bold"
                                            align="center"
                                            verticalAlign="middle"
                                            wrap="word"
                                            listening={false}
                                        />
                                    </Group>
                                ))}
                            </Layer>

                            {/* ================= BORDERS ================= */}

                            <Layer listening={!DRAW_TOOLS.includes(tool)}>
                                {borders.map(border => {

                                    const isSelected = selectedId === border.id;

                                    const dash =
                                        border.style === "dashed"
                                            ? [18, 10]
                                            : border.style === "dotted"
                                                ? [3, 8]
                                                : undefined;

                                    if (border.style === "double") {
                                        return (
                                            <Fragment key={border.id}>

                                                {/* OUTER BORDER */}
                                                <Rect
                                                    x={border.x}
                                                    y={border.y}
                                                    width={border.width}
                                                    height={border.height}
                                                    stroke={border.stroke}
                                                    strokeWidth={border.strokeWidth}
                                                    cornerRadius={border.cornerRadius || 0}
                                                    dash={undefined}
                                                    fillEnabled={false}
                                                    draggable

                                                    onClick={e => {
                                                        if (DRAW_TOOLS.includes(tool)) return;

                                                        setEditingBackground(false);

                                                        e.cancelBubble = true;

                                                        setSelectedId(border.id);
                                                        selectedNodeRef.current = e.target;
                                                    }}

                                                    onTap={e => {
                                                        if (DRAW_TOOLS.includes(tool)) return;

                                                        setEditingBackground(false);

                                                        e.cancelBubble = true;

                                                        setSelectedId(border.id);
                                                        selectedNodeRef.current = e.target;
                                                    }}

                                                    onDragEnd={e => {
                                                        const { x, y } = e.target.position();

                                                        setBorders(prev =>
                                                            prev.map(item =>
                                                                item.id === border.id
                                                                    ? { ...item, x, y }
                                                                    : item
                                                            )
                                                        );

                                                        pushHistory();
                                                    }}

                                                    onTransformEnd={e => {
                                                        const node = e.target;

                                                        const scaleX = node.scaleX();
                                                        const scaleY = node.scaleY();

                                                        node.scaleX(1);
                                                        node.scaleY(1);

                                                        const updated = {
                                                            x: node.x(),
                                                            y: node.y(),
                                                            width: Math.max(
                                                                20,
                                                                node.width() * scaleX
                                                            ),
                                                            height: Math.max(
                                                                20,
                                                                node.height() * scaleY
                                                            )
                                                        };

                                                        setBorders(prev =>
                                                            prev.map(item =>
                                                                item.id === border.id
                                                                    ? { ...item, ...updated }
                                                                    : item
                                                            )
                                                        );

                                                        pushHistory();
                                                    }}
                                                />

                                                {/* INNER BORDER */}
                                                <Rect
                                                    x={
                                                        border.x +
                                                        border.strokeWidth * 3
                                                    }
                                                    y={
                                                        border.y +
                                                        border.strokeWidth * 3
                                                    }
                                                    width={Math.max(
                                                        1,
                                                        border.width -
                                                        border.strokeWidth * 6
                                                    )}
                                                    height={Math.max(
                                                        1,
                                                        border.height -
                                                        border.strokeWidth * 6
                                                    )}
                                                    stroke={border.stroke}
                                                    strokeWidth={Math.max(
                                                        1,
                                                        border.strokeWidth / 2
                                                    )}
                                                    cornerRadius={Math.max(
                                                        0,
                                                        (border.cornerRadius || 0) -
                                                        border.strokeWidth * 2
                                                    )}
                                                    listening={false}
                                                />

                                            </Fragment>
                                        );
                                    }

                                    return (
                                        <Rect
                                            key={border.id}

                                            x={border.x}
                                            y={border.y}

                                            width={border.width}
                                            height={border.height}

                                            stroke={border.stroke}
                                            strokeWidth={border.strokeWidth}

                                            dash={dash}

                                            cornerRadius={border.cornerRadius || 0}

                                            fillEnabled={false}

                                            draggable

                                            onClick={e => {
                                                if (DRAW_TOOLS.includes(tool)) return;

                                                setEditingBackground(false);

                                                e.cancelBubble = true;

                                                setSelectedId(border.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onTap={e => {
                                                if (DRAW_TOOLS.includes(tool)) return;

                                                setEditingBackground(false);

                                                e.cancelBubble = true;

                                                setSelectedId(border.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onDragEnd={e => {
                                                const { x, y } = e.target.position();

                                                setBorders(prev =>
                                                    prev.map(item =>
                                                        item.id === border.id
                                                            ? { ...item, x, y }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}

                                            onTransformEnd={e => {
                                                const node = e.target;

                                                const scaleX = node.scaleX();
                                                const scaleY = node.scaleY();

                                                node.scaleX(1);
                                                node.scaleY(1);

                                                const updated = {
                                                    x: node.x(),
                                                    y: node.y(),

                                                    width: Math.max(
                                                        20,
                                                        node.width() * scaleX
                                                    ),

                                                    height: Math.max(
                                                        20,
                                                        node.height() * scaleY
                                                    )
                                                };

                                                setBorders(prev =>
                                                    prev.map(item =>
                                                        item.id === border.id
                                                            ? { ...item, ...updated }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}
                                        />
                                    );
                                })}
                            </Layer>

                            {/* SHAPES */}

                            <Layer listening={!DRAW_TOOLS.includes(tool)}>
                                {shapes.map(s => {

                                    if (s.type === "free") {
                                        return (
                                            <Line
                                                key={s.id}
                                                points={s.points}
                                                stroke={s.stroke}
                                                strokeWidth={s.strokeWidth}
                                                tension={0.5}
                                                lineCap="round"
                                                lineJoin="round"
                                                globalCompositeOperation={
                                                    s.tool === "eraser"
                                                        ? "destination-out"
                                                        : "source-over"
                                                }
                                            />
                                        );
                                    }

                                    if (s.type === "line") {
                                        return renderLine(s);
                                    }

                                    if (s.type === "rectangle") {
                                        return (
                                            <Rect
                                                key={s.id}
                                                {...s}
                                                draggable

                                                onClick={(e) => {
                                                    setEditingBackground(false);
                                                    e.cancelBubble = true;
                                                    setSelectedId(s.id);
                                                    selectedNodeRef.current = e.target;
                                                }}

                                                onTap={(e) => {
                                                    setEditingBackground(false);
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
                                                    setEditingBackground(false);
                                                    e.cancelBubble = true;
                                                    setSelectedId(s.id);
                                                    selectedNodeRef.current = e.target;
                                                }}

                                                onTap={(e) => {
                                                    setEditingBackground(false);
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



                            {/* TEXT */}
                            <Layer listening={!DRAW_TOOLS.includes(tool)}>
                                {texts.map(t => (
                                    <Fragment key={t.id}>
                                        <Text
                                            {...t}

                                            // Do not give text an arbitrary 250px width.
                                            // Ignore old widths that span almost the entire canvas.
                                            width={
                                                Number.isFinite(Number(t.width)) &&
                                                    Number(t.width) > 0 &&
                                                    Number(t.width) < W * 0.85
                                                    ? Number(t.width)
                                                    : undefined
                                            }

                                            draggable
                                            textDecoration={t.underline ? "underline" : ""}

                                            align={
                                                ["ar"].includes(language)
                                                    ? "right"
                                                    : t.align || "left"
                                            }

                                            onClick={e => {
                                                setEditingBackground(false);
                                                e.cancelBubble = true;
                                                setSelectedId(t.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onTap={e => {
                                                setEditingBackground(false);
                                                e.cancelBubble = true;
                                                setSelectedId(t.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onDragEnd={e => {
                                                const { x, y } = e.target.position();

                                                setTexts(prev =>
                                                    prev.map(item =>
                                                        item.id === t.id
                                                            ? { ...item, x, y }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}

                                            onTransformEnd={e => {
                                                const node = e.target;

                                                const scaleX = node.scaleX();
                                                const scaleY = node.scaleY();

                                                // Use the node's actual rendered width, not a stale
                                                // saved width that may equal the whole canvas width.
                                                const newWidth = Math.max(
                                                    50,
                                                    node.width() * scaleX
                                                );

                                                const newFontSize = Math.max(
                                                    8,
                                                    (Number(t.fontSize) || 24) * scaleY
                                                );

                                                node.scaleX(1);
                                                node.scaleY(1);

                                                const updated = {
                                                    x: node.x(),
                                                    y: node.y(),
                                                    width: newWidth,
                                                    fontSize: newFontSize,
                                                    rotation: node.rotation()
                                                };

                                                setTexts(prev =>
                                                    prev.map(item =>
                                                        item.id === t.id
                                                            ? { ...item, ...updated }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}
                                        />
                                    </Fragment>
                                ))}
                            </Layer>



                            {/* 
                            <Layer listening={!DRAW_TOOLS.includes(tool)}>


                                {texts.map(t => (
                                    <Fragment key={t.id}>

                                        <Text
                                            {...t}
                                            width={t.width || 250}
                                            draggable
                                            textDecoration={
                                                t.underline
                                                    ? "underline"
                                                    : ""
                                            }
                                            align={
                                                ["ar"].includes(language)
                                                    ? "right"
                                                    : t.align || "left"
                                            }

                                            onClick={e => {
                                                setEditingBackground(false);
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
                                                setEditingBackground(false);
                                                e.cancelBubble = true;
                                                setSelectedId(t.id);
                                                selectedNodeRef.current = e.target;
                                            }}

                                            onTransformEnd={(e) => {

                                                const node = e.target;

                                                const scaleX = node.scaleX();
                                                const scaleY = node.scaleY();

                                                const newWidth = Math.max(
                                                    50,
                                                    (t.width || node.width()) * scaleX
                                                );

                                                const newFontSize = Math.max(
                                                    8,
                                                    t.fontSize * scaleY
                                                );

                                                node.scaleX(1);
                                                node.scaleY(1);

                                                const updated = {
                                                    x: node.x(),
                                                    y: node.y(),
                                                    width: newWidth,
                                                    fontSize: newFontSize,
                                                    rotation: node.rotation()
                                                };

                                                setTexts(prev =>
                                                    prev.map(item =>
                                                        item.id === t.id
                                                            ? { ...item, ...updated }
                                                            : item
                                                    )
                                                );

                                                pushHistory();
                                            }}
                                        />


                                    </Fragment>
                                ))}
                            </Layer> */}


                            {draftShape && (
                                <Layer listening={false}>
                                    {draftShape.type === "rectangle" && (
                                        <Rect
                                            {...draftShape}
                                        />
                                    )}

                                    {draftShape.type === "circle" && (
                                        <Circle
                                            x={draftShape.x}
                                            y={draftShape.y}
                                            radius={draftShape.radius}
                                            stroke={draftShape.stroke}
                                            strokeWidth={draftShape.strokeWidth}
                                        />
                                    )}
                                </Layer>
                            )}

                            {/* TRANSFORMER: keep this layer mounted at all times */}
                            <Layer>
                                <Transformer
                                    ref={trRef}
                                    rotateEnabled={true}
                                    keepRatio={
                                        selectedElement?.type === "icon" ||
                                        selectedElement?.type === "discountTag"
                                    }
                                    centeredScaling={false}
                                    enabledAnchors={[
                                        "top-left",
                                        "top-center",
                                        "top-right",
                                        "middle-left",
                                        "middle-right",
                                        "bottom-left",
                                        "bottom-center",
                                        "bottom-right"
                                    ]}
                                    borderStroke="#0ea5e9"
                                    borderStrokeWidth={2}
                                    anchorSize={12}
                                    anchorStroke="#0ea5e9"
                                    anchorFill="#ffffff"
                                    anchorStrokeWidth={2}
                                    padding={0}
                                />
                            </Layer>

                        </Stage>

                    </div>
                </div>
                {showWordArtLibrary && (
                    <WordArtPicker
                        onClose={() => setShowWordArtLibrary(false)}
                        onApply={handleApplyWordArt}
                    />
                )}


                <BusinessPhotoBackgroundPicker
                    isOpen={isBusinessPhotoLibraryOpen}
                    onClose={() => setIsBusinessPhotoLibraryOpen(false)}
                    onApply={(photo) => {
                        // Record the current state if your existing history system supports it.
                        if (typeof pushHistory === "function") {
                            pushHistory();
                        }

                        setBackground({
                            ...photo,
                            type: "business-photo",
                        });

                        setSelectedId(null);
                    }}
                />
            </div>
        </div>

    );
});

export default Canvas;