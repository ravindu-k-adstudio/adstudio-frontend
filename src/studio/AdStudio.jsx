import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Canvas from "./Canvas";
import translations from "../data/translations";
import { useAuth } from "../context/AuthContext";
import "../styles/adstudio-responsive.css";

const API_URL = import.meta.env.VITE_API_URL;

const getCanvasDimensions = size => {
    const sizes = {
        square: { width: 600, height: 600 },
        portrait: { width: 600, height: 650 },
        landscape: { width: 800, height: 600 },
        visitingCard: { width: 500, height: 300 },
        businessCard: { width: 600, height: 400 },
        bookmark: { width: 300, height: 650 },
        instagramPost: { width: 900, height: 650 },
        instagramStory: { width: 800, height: 650 },
        facebookCover: { width: 820, height: 312 }
    };

    return sizes[size] || sizes.square;
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
    const [images, setImages] = useState([]);
    const [shapes, setShapes] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [background, setBackground] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

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

            setTexts([
                { id: 1, type: "business", text: "Business Name", x: centerX, y: height * 0.2, align: "center", fontSize: 36, fill: "#111", fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 },
                { id: 2, type: "business", text: "Tagline Here", x: centerX, y: height * 0.3, align: "center", fontSize: 20, fill: "#444", fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 },
                { id: 3, type: "business", text: "Description goes here", x: centerX, y: height * 0.4, align: "center", fontSize: 16, fill: "#555", fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 },
                { id: 4, type: "contact", text: "📞 123 456 789", x: width * 0.05, y: height * 0.82, fontSize: 16, fill: "#111", fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 },
                { id: 5, type: "contact", text: "✉ info@email.com", x: width * 0.05, y: height * 0.88, fontSize: 16, fill: "#111", fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 },
                { id: 6, type: "contact", text: "📍 Your Address", x: width * 0.05, y: height * 0.94, fontSize: 16, fill: "#111", fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400 }
            ]);

            setImages([]);
            setShapes([]);
            setBlocks([]);
            setBackground(null);
            return;
        }

        const loadAd = async () => {
            try {
                const parsed = JSON.parse(editingAd.data);

                setTexts(parsed.texts || []);
                setShapes(parsed.shapes || []);
                setBlocks(parsed.blocks || []);

                if (parsed.background?.type === "image" && parsed.background.src) {
                    const img = new window.Image();
                    img.crossOrigin = "anonymous"; // 🔥 ADD THIS LINE
                    img.src = parsed.background.src;
                    img.onload = () => setBackground({ ...parsed.background, image: img });
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
        const centerX = width / 2;

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
            background: snap.background?.type === "image"
                ? { ...snap.background, image: undefined }
                : snap.background
        };

        const h = history.slice(0, step + 1);
        h.push(serialized);
        setHistory(h);
        setStep(h.length - 1);
    };

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
            bgImg.onload = () => setBackground({ ...state.background, image: bgImg });
        } else {
            setBackground(state.background);
        }

        setTexts(state.texts);
        setShapes(state.shapes);
        setBlocks(state.blocks);
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
        pushHistory({ texts, images, shapes, blocks, background });
    };

    /* ---------------- SAVE ---------------- */
    const saveAd = async () => {
        if (!canvasRef.current) return;

        try {
            const image = canvasRef.current.toDataURL({ pixelRatio: 1 });

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
            />

            <div className="studio-layout">
                <LeftPanel
                    t={t}
                    texts={texts}
                    setTexts={setTexts}
                    images={images}
                    setImages={setImages}
                    setBackground={setBackground}
                    blocks={blocks}
                    setBlocks={setBlocks}
                    isMobile={isMobile}
                />
                <Canvas
                    ref={canvasRef}
                    adSize={adSize}
                    texts={texts}
                    setTexts={setTexts}
                    images={images}
                    setImages={setImages}
                    shapes={shapes}
                    setShapes={setShapes}
                    blocks={blocks}
                    setBlocks={setBlocks}
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
                />
                <RightPanel
                    t={t}
                    texts={texts}
                    setTexts={setTexts}
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
                />
            </div>
        </div>
    );
}

