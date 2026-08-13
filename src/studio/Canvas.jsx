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
import { useRef, useState, useEffect, forwardRef, Fragment } from "react";
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
    const containerRef = useRef(null);
    const canvasWrapperRef = useRef(null);

    // Background drag tracking
    const backgroundDraggingRef = useRef(false);

    // Drawing state refs
    const isDrawingRef = useRef(false);

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
    useEffect(() => {
        if (!trRef.current) return;

        const transformer = trRef.current;

        if (
            selectedId === null ||
            selectedId === "background" ||
            !selectedNodeRef.current
        ) {
            transformer.nodes([]);
            transformer.getLayer()?.batchDraw();
            return;
        }

        transformer.nodes([selectedNodeRef.current]);
        transformer.getLayer()?.batchDraw();
    }, [selectedId, activeSection, , tool]);

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
                overflow: "hidden",
                background:
                    "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #102b46 70%, #16385c 100%)"
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

                    if (!selectedElement) return;

                    if (selectedElement.text) {
                        setActiveSection("text");
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

                                        listening={!DRAW_TOOLS.includes(tool)}

                                        x={background.x ?? 0}
                                        y={background.y ?? 0}
                                        width={background.width ?? W}
                                        height={background.height ?? H}

                                        rotation={background.rotation || 0}

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

                                        onDragStart={(e) => {
                                            if (!editingBackground) {
                                                e.target.stopDrag();
                                                return;
                                            }

                                            e.cancelBubble = true;

                                            backgroundDraggingRef.current = true;

                                            setSelectedId("background");
                                            selectedNodeRef.current = e.target;
                                        }}

                                        onDragMove={(e) => {
                                            if (!backgroundDraggingRef.current) return;

                                            e.cancelBubble = true;
                                        }}

                                        onDragEnd={(e) => {
                                            if (!backgroundDraggingRef.current) {
                                                e.target.stopDrag();
                                                return;
                                            }

                                            e.cancelBubble = true;

                                            const node = e.target;

                                            const { x, y } = node.position();

                                            setBackground(prev => ({
                                                ...prev,
                                                x,
                                                y
                                            }));

                                            // STOP KONVA DRAGGING IMMEDIATELY
                                            node.stopDrag();
                                            node.draggable(false);

                                            backgroundDraggingRef.current = false;

                                            // EXIT EDITING MODE
                                            setEditingBackground(false);
                                            setSelectedId(null);
                                            selectedNodeRef.current = null;

                                            if (trRef.current) {
                                                trRef.current.nodes([]);
                                                trRef.current.getLayer()?.batchDraw();
                                            }

                                            pushHistory();
                                        }}


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
                                        {...img}
                                        draggable
                                        image={img.image}
                                        onClick={e => {
                                            setEditingBackground(false);
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
                                            setEditingBackground(false);
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
                            </Layer>


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

                            {/* TRANSFORMER */}

                            {selectedId !== null &&
                                selectedId !== "background" &&
                                selectedNodeRef.current && (
                                    <Layer>
                                        <Transformer
                                            ref={trRef}

                                            rotateEnabled={false}
                                            keepRatio={false}
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
                                )}

                        </Stage>

                    </div>
                </div>
            </div>
        </div>

    );
});

export default Canvas;

