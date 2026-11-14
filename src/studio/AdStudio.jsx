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
import IconPicker from "../components/IconPicker";
import ClipArtBackgroundPicker from "../components/ClipArtBackgroundPicker";
import {
    createIconElement,
    restoreIconElement,
    loadIconImage
} from "../data/iconLibrary";

import DiscountTagPicker from "../components/DiscountTagPicker";
import { FaTextWidth } from "react-icons/fa";
import AIAssistanceModal from "../components/AIAssistanceModal";
import { recommendTemplate } from "../utils/aiDesignAssistant";
import BusinessPhotoBackgroundPicker
    from "../components/BusinessPhotoBackgroundPicker";
import "../styles/adstudio-responsive.css";

const API_URL = "http://192.168.1.28:5000/api"; // your IP
// const API_URL = import.meta.env.VITE_API_URL;

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
    const [icons, setIcons] = useState([]);
    const [shapes, setShapes] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [borders, setBorders] = useState([]);
    // const [background, setBackground] = useState(null);
    const [background, setBackground] = useState({
        type: "color",
        value: "#f8fafc",
    });
    const [selectedId, setSelectedId] = useState(null);
    const [showTemplates, setShowTemplates] = useState(false);
    // Welcome tutorial video
    const [showEditTutorial, setShowEditTutorial] = useState(true);

    // AI assistance appears after tutorial closes
    const [showAIAssistance, setShowAIAssistance] = useState(false);

    // Close tutorial and open AI assistance
    const handleCloseTutorial = () => {
        setShowEditTutorial(false);
        setShowAIAssistance(true);
    };
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [showClipArtPicker, setShowClipArtPicker] = useState(false);
    const [isBusinessPhotoLibraryOpen, setIsBusinessPhotoLibraryOpen] =
        useState(false);

    const [tool, setTool] = useState("select");
    const [lineType, setLineType] = useState("default");
    const [strokeColor, setStrokeColor] = useState("#0b1f33");
    const [strokeWidth, setStrokeWidth] = useState(2);

    const canvasRef = useRef(null);
    // Stores a separate editable design layout for each ad size.
    const sizeLayoutsRef = useRef({});

    const [history, setHistory] = useState([]);
    const [step, setStep] = useState(-1);

    const [adId, setAdId] = useState(editingAd?._id || null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const [activeSection, setActiveSection] = useState(null);
    const [editingBackground, setEditingBackground] = useState(false);

    // Protect an in-progress design from accidental navigation or browser exit.
    const [isDirty, setIsDirty] = useState(!editingAd);
    const [designReady, setDesignReady] = useState(false);
    const [showLeaveModal, setShowLeaveModal] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(null);
    const [savingBeforeLeave, setSavingBeforeLeave] = useState(false);
    const isDirtyRef = useRef(!editingAd);
    const allowNextBackRef = useRef(false);
    const historyGuardMountedRef = useRef(false);
    const suppressDirtyRef = useRef(false);

    const [showDiscountTagPicker, setShowDiscountTagPicker] = useState(false);
    const [discountTags, setDiscountTags] = useState([]);
    const [discountTagReplaceId, setDiscountTagReplaceId] = useState(null);
    const [iconReplaceTarget, setIconReplaceTarget] = useState(null);

    useEffect(() => {
        isDirtyRef.current = isDirty;
    }, [isDirty]);

    // Any actual canvas/design change marks the current design as unsaved.
    // The initial template/ad load is deliberately suppressed below.
    useEffect(() => {
        if (!designReady) return;
        if (suppressDirtyRef.current) return;
        setIsDirty(true);
    }, [
        designReady, adSize, language, texts, images, icons, shapes,
        blocks, borders, discountTags, background
    ]);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (!isDirtyRef.current) return;
            event.preventDefault();
            event.returnValue = "";
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, []);

    // Keep a guard history entry so the browser Back button can show our own
    // save/leave confirmation instead of silently losing the design.
    useEffect(() => {
        if (historyGuardMountedRef.current) return;
        historyGuardMountedRef.current = true;
        window.history.pushState({ adstudioGuard: true }, "", window.location.href);

        const handlePopState = () => {
            if (allowNextBackRef.current) {
                allowNextBackRef.current = false;
                return;
            }
            if (!isDirtyRef.current) return;
            window.history.pushState({ adstudioGuard: true }, "", window.location.href);
            setPendingNavigation({ type: "back" });
            setShowLeaveModal(true);
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Allow the Canvas toolbar (and any existing integrations using its
    // fallback event) to open the same AI assistance modal.
    useEffect(() => {
        const openAIAssistance = () => setShowAIAssistance(true);

        window.addEventListener("adstudio-open-ai-assistance", openAIAssistance);
        return () => {
            window.removeEventListener("adstudio-open-ai-assistance", openAIAssistance);
        };
    }, []);

    useEffect(() => {

        const openPicker = () => {
            setShowIconPicker(true);
        };

        window.addEventListener(
            "adstudio-open-icon-picker",
            openPicker
        );

        return () => {
            window.removeEventListener(
                "adstudio-open-icon-picker",
                openPicker
            );
        };

    }, []);




    /* ============================================================
       ADSTUDIO STARTER DESIGN
       Used for both a new blank canvas and Reset Canvas.
    ============================================================ */

    const createStarterCanvas = (width, height) => {
        const s = Math.min(width, height);

        const blocks = [];
        const texts = [];

        // ---------- SAMPLE LOGO ----------
        const logoSize = s * 0.15;
        const logoX = width * 0.12;
        const logoY = height * 0.12;

        blocks.push({
            id: "starter-logo-circle",
            shape: "circle",
            x: logoX,
            y: logoY,
            width: logoSize,
            height: logoSize,
            fill: "#2563eb",
            draggable: true
        });

        texts.push({
            id: "starter-logo-symbol",
            text: "✦",
            x: logoX - logoSize / 2,
            y: logoY - logoSize * 0.40,
            width: logoSize,
            fontSize: logoSize * 0.65,
            fill: "#ffffff",
            fontFamily: "Arial",
            align: "center",
            fontStyle: "bold"
        });

        texts.push({
            id: "starter-logo-name",
            text: "YOUR BRAND",
            x: width * 0.23,
            y: height * 0.085,
            width: width * 0.38,
            fontSize: s * 0.045,
            fill: "#172554",
            fontFamily: "Poppins",
            fontStyle: "bold"
        });

        texts.push({
            id: "starter-logo-subtitle",
            text: "CREATIVE BUSINESS",
            x: width * 0.23,
            y: height * 0.15,
            width: width * 0.38,
            fontSize: s * 0.019,
            fill: "#64748b",
            fontFamily: "Arial"
        });

        // ---------- PROMOTION BADGE ----------
        const promoWidth = Math.min(width * 0.31, s * 0.40);
        const promoHeight = s * 0.15;
        const promoX = width - promoWidth - width * 0.045;
        const promoY = height * 0.055;

        blocks.push({
            id: "starter-promotion-background",
            shape: "rectangle",
            x: promoX,
            y: promoY,
            width: promoWidth,
            height: promoHeight,
            fill: "#f43f5e",
            cornerRadius: 12,
            draggable: true
        });

        texts.push({
            id: "starter-promotion-title",
            text: "SPECIAL OFFER",
            x: promoX + 4,
            y: promoY + promoHeight * 0.13,
            width: promoWidth - 8,
            fontSize: s * 0.024,
            fill: "#ffffff",
            fontFamily: "Arial",
            fontStyle: "bold",
            align: "center"
        });

        texts.push({
            id: "starter-promotion-value",
            text: "20% OFF",
            x: promoX + 4,
            y: promoY + promoHeight * 0.48,
            width: promoWidth - 8,
            fontSize: s * 0.043,
            fill: "#ffffff",
            fontFamily: "Arial",
            fontStyle: "bold",
            align: "center"
        });

        // ---------- BUSINESS TEXT ----------
        texts.push({
            id: 1,
            type: "business",
            text: "Business Name",
            x: width * 0.06,
            y: height * 0.29,
            width: width * 0.88,
            fontSize: s * 0.075,
            fill: "#111827",
            fontFamily: "Poppins",
            fontStyle: "bold",
            align: "center"
        });

        texts.push({
            id: 2,
            type: "business",
            text: "Your Creative Tagline Goes Here",
            x: width * 0.06,
            y: height * 0.39,
            width: width * 0.88,
            fontSize: s * 0.038,
            fill: "#2563eb",
            fontFamily: "Poppins",
            align: "center"
        });

        texts.push({
            id: 3,
            type: "business",
            text: "Add your business description and tell customers what makes you special.",
            x: width * 0.10,
            y: height * 0.49,
            width: width * 0.80,
            fontSize: s * 0.027,
            fill: "#64748b",
            fontFamily: "Poppins",
            align: "center"
        });

        // ---------- COLOURFUL DECORATIVE ICONS ----------
        const decorativeIcons = [
            { symbol: "✨", x: 0.12, color: "#f59e0b" },
            { symbol: "🎁", x: 0.27, color: "#ec4899" },
            { symbol: "🛍️", x: 0.42, color: "#8b5cf6" }
        ];

        decorativeIcons.forEach((item, index) => {
            texts.push({
                id: `starter-decor-icon-${index}`,
                text: item.symbol,
                x: width * item.x,
                y: height * 0.64,
                width: s * 0.10,
                fontSize: s * 0.065,
                fill: item.color,
                fontFamily: "Arial"
            });
        });

        // ---------- SCATTERED SOCIAL MEDIA BLOCK ----------
        texts.push({
            id: "starter-social-heading",
            text: "FOLLOW US",
            x: width * 0.66,
            y: height * 0.625,
            width: width * 0.29,
            fontSize: s * 0.022,
            fill: "#475569",
            fontFamily: "Arial",
            fontStyle: "bold",
            align: "center"
        });

        const socialSize = s * 0.075;

        const socialItems = [
            {
                id: "facebook",
                symbol: "f",
                color: "#1877F2",
                x: 0.72,
                y: 0.70
            },
            {
                id: "instagram",
                symbol: "◎",
                color: "#D9468F",
                x: 0.85,
                y: 0.67
            },
            {
                id: "youtube",
                symbol: "▶",
                color: "#EF4444",
                x: 0.78,
                y: 0.77
            },
            {
                id: "tiktok",
                symbol: "♪",
                color: "#111827",
                x: 0.91,
                y: 0.75
            }
        ];

        socialItems.forEach(item => {
            const cx = width * item.x;
            const cy = height * item.y;

            blocks.push({
                id: `starter-social-bg-${item.id}`,
                shape: "circle",
                x: cx,
                y: cy,
                width: socialSize,
                height: socialSize,
                fill: item.color,
                draggable: true
            });

            texts.push({
                id: `starter-social-icon-${item.id}`,
                text: item.symbol,
                x: cx - socialSize / 2,
                y: cy - socialSize * 0.40,
                width: socialSize,
                fontSize: socialSize * 0.65,
                fill: "#ffffff",
                fontFamily: "Arial",
                fontStyle: "bold",
                align: "center"
            });
        });

        // ---------- CONTACT DETAILS ----------
        const contactDetails = [
            { id: 4, text: "📞 123 456 789" },
            { id: 5, text: "✉ info@email.com" },
            { id: 6, text: "📍 Your Address" },
            { id: 7, text: "🌐 www.yourwebsite.com" }
        ];

        contactDetails.forEach((item, index) => {
            texts.push({
                id: item.id,
                type: "contact",
                text: item.text,
                x: width * 0.07,
                y: height * (0.78 + index * 0.047),
                width: width * 0.86,
                fontSize: s * 0.026,
                fill: "#334155",
                fontFamily: "Poppins"
            });
        });

        // A real editable discount-tag object (not just a decorative rectangle).
        // It uses the same data structure consumed by DiscountTagPicker and Canvas.
        const discountTags = [{
            id: "starter-discount-tag",
            shape: "burst",
            text: "20% OFF",
            fill: "#f59e0b",
            textColor: "#ffffff",
            borderColor: "#ffffff",
            x: width * 0.055,
            y: height * 0.675,
            width: Math.min(s * 0.34, 150),
            height: Math.min(s * 0.27, 100),
            rotation: -7
        }];

        return { texts, blocks, discountTags };
    };


    /* ---------------- INITIAL LOAD ONLY ---------------- */
    useEffect(() => {
        setDesignReady(false);
        const { width, height } = getCanvasDimensions(adSize);

        if (!editingAd) {

            const starter = createStarterCanvas(width, height);

            setTexts(starter.texts);

            setImages([]);
            setIcons([]);
            setShapes([]);
            setBlocks(starter.blocks);
            setBorders([]);
            setDiscountTags(starter.discountTags || []);

            setBackground(null);

            sizeLayoutsRef.current = {};

            suppressDirtyRef.current = true;
            setDesignReady(true);

            window.setTimeout(() => {
                suppressDirtyRef.current = false;
            }, 0);

            return;
        }


        const loadAd = async () => {
            try {
                const parsed = JSON.parse(editingAd.data);

                setTexts(parsed.texts || []);
                setShapes(parsed.shapes || []);
                setBlocks(parsed.blocks || []);
                setBorders(parsed.borders || []);
                setDiscountTags(parsed.discountTags || []);

                let loadedBackground = parsed.background || null;
                if (parsed.background?.type === "image" && parsed.background.src) {
                    const img = new window.Image();
                    img.crossOrigin = "anonymous";
                    loadedBackground = await new Promise(resolve => {
                        img.onload = () => resolve({
                            ...parsed.background,
                            x: parsed.background.x ?? 0,
                            y: parsed.background.y ?? 0,
                            width: parsed.background.width ?? width,
                            height: parsed.background.height ?? height,
                            rotation: parsed.background.rotation ?? 0,
                            image: img
                        });
                        img.onerror = () => resolve({ ...parsed.background, image: null });
                        img.src = parsed.background.src;
                    });
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
                setBackground(loadedBackground);
                suppressDirtyRef.current = true;
                setDesignReady(true);
                window.setTimeout(() => { suppressDirtyRef.current = false; }, 0);
            } catch (err) {
                console.error("LOAD FAILED:", err);
                suppressDirtyRef.current = true;
                setDesignReady(true);
                window.setTimeout(() => { suppressDirtyRef.current = false; }, 0);
            }
        };

        loadAd();
    }, [editingAd]);

    /* ============================================================
AD SIZE LAYOUT MANAGER
- Keeps a separate layout for every ad size.
- Never stretches objects independently in X and Y.
- Restores the exact saved layout when returning to a size.
============================================================ */

    const handleAdSizeChange = (requestedSize) => {

        const nextSize =
            typeof requestedSize === "function"
                ? requestedSize(adSize)
                : requestedSize;

        if (!nextSize || nextSize === adSize) return;

        const oldDimensions = getCanvasDimensions(adSize);
        const nextDimensions = getCanvasDimensions(nextSize);

        if (
            !oldDimensions?.width ||
            !oldDimensions?.height ||
            !nextDimensions?.width ||
            !nextDimensions?.height
        ) {
            return;
        }

        // Save the current layout before leaving this size.
        const currentLayout = {
            texts: texts.map(item => ({ ...item })),
            images: images.map(item => ({ ...item })),
            icons: icons.map(item => ({ ...item })),
            shapes: shapes.map(item => ({
                ...item,
                points: Array.isArray(item.points)
                    ? [...item.points]
                    : item.points
            })),
            blocks: blocks.map(item => ({ ...item })),
            borders: borders.map(item => ({ ...item })),
            discountTags: discountTags.map(item => ({ ...item })),
            background: background ? { ...background } : null
        };

        sizeLayoutsRef.current[adSize] = currentLayout;

        // If this size was visited before, restore its exact layout.
        const savedLayout = sizeLayoutsRef.current[nextSize];

        if (savedLayout) {

            setTexts(savedLayout.texts);
            setImages(savedLayout.images);
            setIcons(savedLayout.icons);
            setShapes(savedLayout.shapes);
            setBlocks(savedLayout.blocks);
            setBorders(savedLayout.borders);
            setDiscountTags(savedLayout.discountTags);
            setBackground(savedLayout.background);

            setAdSize(nextSize);
            setSelectedId(null);

            window.setTimeout(() => {
                pushHistory(savedLayout);
            }, 0);

            return;
        }

        /*
           First time opening this size:
    
           Fit the existing composition proportionally.
           This keeps images, icons, shapes and other objects
           from being stretched differently in X and Y.
    
           The user can then manually arrange this size.
        */

        const scale = Math.min(
            nextDimensions.width / oldDimensions.width,
            nextDimensions.height / oldDimensions.height
        );

        const offsetX =
            (nextDimensions.width - oldDimensions.width * scale) / 2;

        const offsetY =
            (nextDimensions.height - oldDimensions.height * scale) / 2;

        const scaleItem = (item) => {

            if (!item || typeof item !== "object") return item;

            const next = { ...item };

            if (Number.isFinite(Number(item.x))) {
                next.x = Number(item.x) * scale + offsetX;
            }

            if (Number.isFinite(Number(item.y))) {
                next.y = Number(item.y) * scale + offsetY;
            }

            if (Number.isFinite(Number(item.width))) {
                next.width = Number(item.width) * scale;
            }

            if (Number.isFinite(Number(item.height))) {
                next.height = Number(item.height) * scale;
            }

            if (Number.isFinite(Number(item.fontSize))) {
                next.fontSize = Number(item.fontSize) * scale;
            }

            if (Number.isFinite(Number(item.strokeWidth))) {
                next.strokeWidth = Math.max(
                    1,
                    Number(item.strokeWidth) * scale
                );
            }

            if (Number.isFinite(Number(item.cornerRadius))) {
                next.cornerRadius = Number(item.cornerRadius) * scale;
            }

            // Preserve the proportions of freehand drawings.
            if (Array.isArray(item.points)) {
                next.points = item.points.map((point, index) => {

                    if (typeof point === "number") {
                        return point * scale +
                            (index % 2 === 0 ? offsetX : offsetY);
                    }

                    if (point && typeof point === "object") {
                        return {
                            ...point,
                            ...(Number.isFinite(Number(point.x))
                                ? { x: Number(point.x) * scale + offsetX }
                                : {}),
                            ...(Number.isFinite(Number(point.y))
                                ? { y: Number(point.y) * scale + offsetY }
                                : {})
                        };
                    }

                    return point;
                });
            }

            return next;
        };

        const nextTexts = texts.map(scaleItem);
        const nextImages = images.map(scaleItem);
        const nextIcons = icons.map(scaleItem);
        const nextShapes = shapes.map(scaleItem);
        const nextBlocks = blocks.map(scaleItem);
        const nextBorders = borders.map(scaleItem);
        const nextDiscountTags = discountTags.map(scaleItem);

        // Backgrounds should cover the new canvas.
        let nextBackground = background;

        if (
            background &&
            ["image", "business-photo"].includes(background.type)
        ) {
            nextBackground = {
                ...background,
                x: 0,
                y: 0,
                width: nextDimensions.width,
                height: nextDimensions.height
            };
        }

        // Remember this new size so future switches restore it exactly.
        const newLayout = {
            texts: nextTexts,
            images: nextImages,
            icons: nextIcons,
            shapes: nextShapes,
            blocks: nextBlocks,
            borders: nextBorders,
            discountTags: nextDiscountTags,
            background: nextBackground
        };

        sizeLayoutsRef.current[nextSize] = newLayout;

        setTexts(nextTexts);
        setImages(nextImages);
        setIcons(nextIcons);
        setShapes(nextShapes);
        setBlocks(nextBlocks);
        setBorders(nextBorders);
        setDiscountTags(nextDiscountTags);
        setBackground(nextBackground);

        setAdSize(nextSize);
        setSelectedId(null);

        window.setTimeout(() => {
            pushHistory(newLayout);
        }, 0);
    };


    /* ---------------- HISTORY ---------------- */

    const pushHistory = snap => {
        const serialized = {
            ...snap,

            images: (snap.images || []).map(i => ({
                ...i,
                image: undefined
            })),

            icons: (snap.icons || icons || []).map(i => ({
                ...i,
                image: undefined
            })),

            discountTags: snap.discountTags || discountTags || [],

            borders: snap.borders || [],

            background:
                snap.background?.type === "image"
                    ? {
                        ...snap.background,
                        image: undefined
                    }
                    : snap.background
        };


        const h = history.slice(0, step + 1);

        h.push(serialized);

        setHistory(h);
        setStep(h.length - 1);
    };


    const { width, height } =
        getCanvasDimensions(adSize);


    const restoreImages = async state => {

        const restoredImages =
            await Promise.all(
                (state.images || []).map(
                    i =>
                        new Promise(resolve => {

                            if (!i.src) {
                                return resolve(i);
                            }

                            const img =
                                new window.Image();

                            img.crossOrigin =
                                "anonymous";

                            img.src = i.src;

                            img.onload = () =>
                                resolve({
                                    ...i,
                                    image: img
                                });

                            img.onerror = () =>
                                resolve({
                                    ...i,
                                    image: null
                                });

                        })
                )
            );


        /* ---------------- RESTORE ICONS ---------------- */

        const restoredIcons =
            await Promise.all(
                (state.icons || []).map(
                    restoreIconElement
                )
            );

        setIcons(
            restoredIcons.filter(Boolean)
        );


        /* ---------------- RESTORE BACKGROUND ---------------- */

        if (
            state.background?.type === "image" &&
            state.background.src
        ) {

            const bgImg =
                new window.Image();

            bgImg.crossOrigin =
                "anonymous";

            bgImg.src =
                state.background.src;

            bgImg.onload = () =>
                setBackground({
                    ...state.background,

                    x:
                        state.background.x ??
                        0,

                    y:
                        state.background.y ??
                        0,

                    width:
                        state.background.width ??
                        getCanvasDimensions(adSize)
                            .width,

                    height:
                        state.background.height ??
                        getCanvasDimensions(adSize)
                            .height,

                    rotation:
                        state.background.rotation ??
                        0,

                    image: bgImg
                });

        } else {

            setBackground(
                state.background
            );
        }


        /* ---------------- RESTORE OTHER ELEMENTS ---------------- */

        setTexts(
            state.texts || []
        );

        setShapes(
            state.shapes || []
        );

        setBlocks(
            state.blocks || []
        );

        setBorders(
            state.borders || []
        );

        setImages(
            restoredImages
        );

        setDiscountTags(state.discountTags || []);
    };


    const undo = () => {

        if (step <= 0) return;

        restoreImages(
            history[step - 1]
        );

        setStep(
            step - 1
        );
    };


    const redo = () => {

        if (
            step >=
            history.length - 1
        ) {
            return;
        }

        restoreImages(
            history[step + 1]
        );

        setStep(
            step + 1
        );
    };


    const deleteSelected = () => {

        setTexts(t =>
            t.filter(
                x => x.id !== selectedId
            )
        );

        setImages(i =>
            i.filter(
                x => x.id !== selectedId
            )
        );

        /* ---------------- DELETE ICON ---------------- */

        setIcons(i =>
            i.filter(
                x => x.id !== selectedId
            )
        );

        setShapes(s =>
            s.filter(
                x => x.id !== selectedId
            )
        );

        setBlocks(b =>
            b.filter(
                x => x.id !== selectedId
            )
        );

        setBorders(b =>
            b.filter(
                x => x.id !== selectedId
            )
        );

        setSelectedId(null);

        pushHistory({
            texts,
            images,
            icons,
            shapes,
            blocks,
            borders,
            background
        });
    };

    // /////////////////////////////////////template////////////////////////////////////////////////
    const makeId = prefix =>
        `${prefix}-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 9)}`;

    const createIconId = () =>
        makeId("icon");


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

    ////////////////////////


    /* ============================================================
       ADSTUDIO — ROBUST TEMPLATE LOADER
       Supports nx/ny/nw/nh AND normalized x/y/width/height.
       ============================================================ */

    const loadTemplate = async (template) => {
        if (!template) {
            throw new Error("Invalid template");
        }

        const selectedSize = template.selectedSize || adSize || "square";
        const dimensions = TEMPLATE_SIZES[selectedSize];

        if (!dimensions) {
            throw new Error(`Unsupported template size: ${selectedSize}`);
        }

        const [canvasWidth, canvasHeight] = dimensions;

        // Support both normalized coordinate conventions.
        const coordinate = (item, primary, alternate, fallback) => {
            const value = item?.[primary] ?? item?.[alternate] ?? fallback;
            const number = Number(value);
            return Number.isFinite(number) ? number : fallback;
        };

        const scaleX = (item, fallback = 0) =>
            coordinate(item, "nx", "x", fallback) * canvasWidth;

        const scaleY = (item, fallback = 0) =>
            coordinate(item, "ny", "y", fallback) * canvasHeight;

        const scaleW = (item, fallback = 0.2) =>
            coordinate(item, "nw", "width", fallback) * canvasWidth;

        const scaleH = (item, fallback = 0.2) =>
            coordinate(item, "nh", "height", fallback) * canvasHeight;

        // Convert a template image into the normal editable Canvas image format.
        const templateImages = await Promise.all(
            (template.images || []).map(async (item, index) => {
                const src = item.src || item.image?.src;
                const image = await loadTemplateImage(src);

                if (!image) {
                    console.warn(
                        `Template image ${index + 1} could not load:`,
                        src
                    );
                    return null;
                }

                return {
                    ...item,
                    id: item.id || makeId(item.type || "image"),
                    type: "image",
                    image,
                    src,
                    x: scaleX(item),
                    y: scaleY(item),
                    width: Math.max(1, scaleW(item)),
                    height: Math.max(1, scaleH(item)),
                    rotation: Number(item.rotation) || 0,
                    assetType: item.assetType || item.type || "image",
                    social: item.social || null
                };
            })
        );

        // Use stable IDs for the fields the existing editor recognizes.
        const roleIds = {
            businessName: 1,
            tagline: 2,
            description: 3,
            phone: 4,
            email: 5,
            address: 6,
            website: 7
        };

        const templateTexts = (template.texts || []).map((item, index) => {
            const role = item.role || "";
            const id = item.id ?? roleIds[role] ?? makeId("text");

            const fontScale = Number(item.fontScale);
            const legacyFontSize = Number(item.fontSize);

            let fontSize = fontScale > 0
                ? fontScale * Math.min(canvasWidth, canvasHeight)
                : legacyFontSize > 0
                    ? legacyFontSize
                    : canvasWidth * 0.04;

            // Prevent accidentally microscopic text in generated templates.
            fontSize = Math.max(8, fontSize);

            return {
                ...item,
                id,
                role,
                type: item.type || (
                    ["phone", "email", "address", "website"].includes(role)
                        ? "contact"
                        : "business"
                ),
                text: item.text ?? "Your text",
                x: scaleX(item, 0.05),
                y: scaleY(item, 0.05),
                width: Math.max(30, scaleW(item, 0.8)),
                fontSize,
                fill: item.fill || "#FFFFFF",
                fontFamily: item.fontFamily || "Poppins",
                fontStyle: item.fontStyle || "normal",
                align: item.align || "left",
                rotation: Number(item.rotation) || 0,
                underline: Boolean(item.underline),
                letterSpacing: Number(item.letterSpacing) || 0
            };
        });

        const templateBlocks = (template.blocks || []).map((item, index) => ({
            ...item,
            id: item.id || makeId("block"),
            shape: item.shape || "rectangle",
            x: scaleX(item),
            y: scaleY(item),
            width: Math.max(1, scaleW(item)),
            height: Math.max(1, scaleH(item)),
            rotation: Number(item.rotation) || 0,
            fill: item.fill || "#000000",
            editable: item.editable !== false,
            draggable: item.draggable !== false,
            resizable: item.resizable !== false
        }));

        const templateBorders = (template.borders || []).map((item, index) => ({
            ...item,
            id: item.id || makeId("border"),
            type: "border",
            role: "border",
            x: scaleX(item, 0.015),
            y: scaleY(item, 0.015),
            width: Math.max(20, scaleW(item, 0.97)),
            height: Math.max(20, scaleH(item, 0.97)),
            stroke: item.stroke || item.color || "#FFFFFF",
            color: item.color || item.stroke || "#FFFFFF",
            strokeWidth: Number(item.strokeWidth) || 2,
            style: item.style || "solid",
            cornerRadius: Number(item.cornerRadius) || 0,
            editable: true,
            draggable: true,
            resizable: true,
            locked: false
        }));

        const templateDiscountTags = (template.discountTags || []).map((item, index) => ({
            ...item,
            id: item.id || makeId("discount"),
            x: scaleX(item),
            y: scaleY(item),
            width: Math.max(35, scaleW(item, 0.17)),
            height: Math.max(25, scaleH(item, 0.17)),
            rotation: Number(item.rotation) || 0,
            text: item.text || "SPECIAL OFFER",
            shape: item.shape || "burst",
            fill: item.fill || "#EF4444",
            textColor: item.textColor || "#FFFFFF",
            borderColor: item.borderColor || "#FFFFFF",
            editable: true,
            draggable: true,
            resizable: true,
            locked: false
        }));

        // Load an actual image background when one is supplied.
        let newBackground = null;
        const backgroundSrc =
            template.background?.src ||
            (typeof template.background === "string"
                ? template.background
                : null);

        if (template.background?.type === "business-photo") {
            // Preserve the BusinessPhotoBackgroundPicker data contract and renderer.
            newBackground = {
                ...template.background,
                x: 0,
                y: 0,
                width: canvasWidth,
                height: canvasHeight,
                rotation: 0
            };
        } else if (backgroundSrc && template.background?.type !== "gradient") {
            const backgroundImage = await loadTemplateImage(backgroundSrc);

            if (backgroundImage) {
                newBackground = {
                    type: "image",
                    src: backgroundSrc,
                    image: backgroundImage,
                    x: 0,
                    y: 0,
                    width: canvasWidth,
                    height: canvasHeight,
                    rotation: 0
                };
            }
        } else if (template.background?.type === "image") {
            const backgroundImage = await loadTemplateImage(
                template.background.src
            );

            if (backgroundImage) {
                newBackground = {
                    ...template.background,
                    image: backgroundImage,
                    x: 0,
                    y: 0,
                    width: canvasWidth,
                    height: canvasHeight,
                    rotation: 0
                };
            }
        } else if (template.background) {
            newBackground = { ...template.background };
        }

        // A new template must start with fresh size layouts.
        sizeLayoutsRef.current = {};

        // Apply everything to the existing editor. Do not replace Canvas.
        setTemplateData(template);
        setAdSize(selectedSize);
        setTexts(templateTexts);
        setImages(templateImages.filter(Boolean));
        setIcons([]);
        setShapes(template.shapes || []);
        setBlocks(templateBlocks);
        setBorders(templateBorders);
        setDiscountTags(templateDiscountTags);
        setBackground(newBackground);

        setSelectedId(null);
        setEditingBackground(false);
        setTool("select");
        setShowTemplates(false);

        // Save a complete snapshot so Undo restores the selected design.
        const snapshot = {
            texts: templateTexts,
            images: templateImages.filter(Boolean),
            icons: [],
            shapes: template.shapes || [],
            blocks: templateBlocks,
            borders: templateBorders,
            discountTags: templateDiscountTags,
            background: newBackground
        };

        pushHistory(snapshot);
    };



    /* ============================================================
   AI ASSISTANCE — GENERATE FROM EXISTING TEMPLATES
   ============================================================ */

    const generateAIDesign = async (formData) => {
        const selectedTemplate = recommendTemplate({
            templates,
            prompt: formData.prompt,
            businessType: formData.businessType,
            size: formData.size
        });

        if (!selectedTemplate) {
            throw new Error("No suitable template was found.");
        }

        /*
         * Customize the template's editable text before loading it.
         * This lets the existing loadTemplate function prepare the
         * normal Canvas objects, images, blocks and background.
         */
        const textOverrides = {
            businessName: formData.businessName,
            tagline: formData.tagline,
            description: formData.description,
            offer: formData.offer,
            phone: formData.phone,
            email: formData.email,
            address: formData.address
        };

        const customizedTemplate = {
            ...selectedTemplate,

            selectedSize: formData.size,

            texts: (selectedTemplate.texts || []).map((item) => {
                const replacement = textOverrides[item.role];

                if (
                    typeof replacement === "string" &&
                    replacement.trim()
                ) {
                    return {
                        ...item,
                        text: replacement.trim()
                    };
                }

                return item;
            })
        };

        /*
         * Use the real template loader. Do not create a separate
         * canvas or replace the existing editor.
         */
        await loadTemplate(customizedTemplate);

        setShowAIAssistance(false);
        setShowTemplates(false);
        setIsDirty(true);
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


    const addIconToCanvas = async ({ name, color }) => {
        try {
            const target = iconReplaceTarget;
            const collection = target?.collection || "icons";

            const existing =
                collection === "images"
                    ? images.find(item => item.id === target?.id)
                    : collection === "texts"
                        ? texts.find(item => item.id === target?.id)
                        : icons.find(item => item.id === target?.id);

            const canvasWidth =
                CANVAS_SIZES[adSize]?.editor?.[0] ||
                CANVAS_SIZES[adSize]?.editor?.width || 420;

            const canvasHeight =
                CANVAS_SIZES[adSize]?.editor?.[1] ||
                CANVAS_SIZES[adSize]?.editor?.height || 420;

            const width = existing?.width || 65;
            const height = existing?.height || 65;

            const icon = await createIconElement({
                id: existing?.id || createIconId(),
                iconName: name,
                color: color || "#0b1f33",
                x: existing?.x ?? canvasWidth / 2 - width / 2,
                y: existing?.y ?? canvasHeight / 2 - height / 2,
                width,
                height
            });

            const replacementIcon = {
                ...icon,
                id: existing?.id || icon.id,
                x: existing?.x ?? icon.x,
                y: existing?.y ?? icon.y,
                width: existing?.width ?? icon.width,
                height: existing?.height ?? icon.height,
                rotation: existing?.rotation || 0
            };

            const nextImages =
                collection === "images"
                    ? images.filter(item => item.id !== target.id)
                    : images;

            const nextIcons =
                collection === "icons"
                    ? icons.map(item =>
                        item.id === target.id ? replacementIcon : item
                    )
                    : [...icons, replacementIcon];

            const nextTexts =
                collection === "texts"
                    ? texts.filter(item => item.id !== target.id)
                    : texts;

            setImages(nextImages);
            setIcons(nextIcons);
            setTexts(nextTexts);
            setSelectedId(replacementIcon.id);

            setShowIconPicker(false);
            setIconReplaceTarget(null);

            setTimeout(() => {
                pushHistory({
                    texts: nextTexts,
                    images: nextImages,
                    icons: nextIcons,
                    shapes,
                    blocks,
                    borders,
                    discountTags,
                    background
                });
            }, 0);

        } catch (error) {
            console.error("Failed to replace icon:", error);
        }
    };

    const changeIconColor = async (
        iconId,
        color
    ) => {

        const currentIcon =
            icons.find(
                icon => icon.id === iconId
            );

        if (!currentIcon) return;

        try {

            const {
                image,
                src
            } = await loadIconImage(
                currentIcon.icon ||
                currentIcon.name,
                color
            );

            const nextIcons =
                icons.map(icon =>
                    icon.id === iconId
                        ? {
                            ...icon,
                            color,
                            src,
                            image
                        }
                        : icon
                );

            setIcons(nextIcons);

            pushHistory({
                texts,
                images,
                icons: nextIcons,
                shapes,
                blocks,
                borders,
                background
            });

        } catch (error) {

            console.error(
                "Failed to change icon color:",
                error
            );

        }
    };


    /* ================= DISCOUNT TAG LIBRARY ================= */

    const openDiscountTagReplacement = id => {
        setDiscountTagReplaceId(id);
        setShowDiscountTagPicker(true);
    };

    const openIconReplacement = (id, collection = "icons") => {
        setIconReplaceTarget({ id, collection });
        setShowIconPicker(true);
    };

    const addDiscountTagToCanvas = tag => {
        if (!tag) return;

        if (discountTagReplaceId) {
            const target = discountTags.find(item => item.id === discountTagReplaceId);
            if (!target) {
                setDiscountTagReplaceId(null);
                setShowDiscountTagPicker(false);
                return;
            }
            const nextTags = discountTags.map(item => item.id === discountTagReplaceId
                ? {
                    ...item, ...tag,
                    id: target.id,
                    x: target.x, y: target.y,
                    width: target.width, height: target.height,
                    rotation: target.rotation || 0
                }
                : item
            );
            setDiscountTags(nextTags);
            setSelectedId(target.id);
            setDiscountTagReplaceId(null);
            setShowDiscountTagPicker(false);
            setTimeout(() => pushHistory({
                texts, images, icons, shapes, blocks, borders,
                discountTags: nextTags, background
            }), 0);
            return;
        }

        const { width, height } = getCanvasDimensions(adSize);

        const newTag = {
            ...tag,
            id: `discount-${Date.now()}-${Math.random()
                .toString(36)
                .slice(2, 8)}`,
            x: Math.max(0, (width - 150) / 2),
            y: Math.max(0, (height - 100) / 2),
            width: Math.min(150, width),
            height: Math.min(100, height),
            rotation: 0,
        };

        const nextTags = [...discountTags, newTag];

        setDiscountTags(nextTags);
        setSelectedId(newTag.id);
        setShowDiscountTagPicker(false);
        setEditingBackground(false);

        setTimeout(() => {
            pushHistory({
                texts,
                images,
                icons,
                shapes,
                blocks,
                borders,
                discountTags: nextTags,
                background,
            });
        }, 0);
    };

    /* ============================================================
    CLIP ART BACKGROUND
    ============================================================ */

    const applyClipArtBackground = clipArt => {

        if (!clipArt?.src) return;

        const { width, height } =
            getCanvasDimensions(adSize);

        const img = new window.Image();

        img.onload = () => {

            const newBackground = {
                type: "image",

                src: clipArt.src,

                image: img,

                value: "",

                x: 0,
                y: 0,

                width,
                height,

                rotation: 0,

                clipArtId: clipArt.id,

                clipArtName: clipArt.name
            };

            setBackground(newBackground);

            setSelectedId(null);

            setEditingBackground(false);

            setTimeout(() => {

                pushHistory({
                    texts,
                    images,
                    icons,
                    shapes,
                    blocks,
                    borders,
                    background: newBackground
                });

            }, 0);

        };

        img.onerror = () => {

            console.error(
                "Failed to load clip art background:",
                clipArt.name
            );

        };

        img.src = clipArt.src;
    };

    /* ---------------- SAVE ---------------- */
    const saveAd = async ({ silent = false } = {}) => {
        if (!canvasRef.current) {
            if (!silent) alert("Canvas is not ready.");
            return false;
        }
        if (!token) {
            if (!silent) alert("Your session has expired. Please log in again.");
            return false;
        }

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
                    icons: icons.map(icon => ({
                        ...icon,
                        image: undefined
                    })),
                    shapes,
                    blocks,
                    borders,
                    discountTags,
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
            if (!adId && result.ad?._id) setAdId(result.ad._id);
            setIsDirty(false);
            isDirtyRef.current = false;
            if (!silent) alert("Ad saved successfully");
            return true;
        } catch (err) {
            console.error("SAVE FAILED:", err);
            if (!silent) alert(err.message || "Failed to save ad");
            return false;
        }
    };

    // Route changes from the editor are intercepted while a design is unsaved.
    const requestNavigation = (destination) => {
        const pathMap = { home: "/", dashboard: "/dashboard", pricing: "/pricing" };
        const path = pathMap[destination] || destination;
        if (!isDirtyRef.current) {
            navigate(path);
            return;
        }
        setPendingNavigation({ type: "route", path, requireSave: path === "/pricing" });
        setShowLeaveModal(true);
    };

    const handleStay = () => {
        setShowLeaveModal(false);
        setPendingNavigation(null);
    };

    const handleLeaveWithoutSaving = () => {
        const pending = pendingNavigation;
        setShowLeaveModal(false);
        setPendingNavigation(null);
        setIsDirty(false);
        isDirtyRef.current = false;
        if (!pending) return;
        if (pending.type === "back") {
            allowNextBackRef.current = true;
            window.history.go(-2);
            return;
        }
        navigate(pending.path);
    };

    const handleSaveAndLeave = async () => {
        if (savingBeforeLeave || !pendingNavigation) return;
        const pending = pendingNavigation;
        setSavingBeforeLeave(true);
        const saved = await saveAd({ silent: true });
        setSavingBeforeLeave(false);
        if (!saved) {
            alert("The ad could not be saved. You will remain on this page.");
            return;
        }
        setShowLeaveModal(false);
        setPendingNavigation(null);
        setIsDirty(false);
        isDirtyRef.current = false;
        if (pending.type === "back") {
            allowNextBackRef.current = true;
            window.history.go(-2);
            return;
        }
        navigate(pending.path);
    };

    /* ================= COMPLETE CANVAS RESET ================= */

    const resetCanvas = () => {
        const confirmed = window.confirm(
            "Are you sure you want to reset the canvas?\n\n" +
            "This will remove all images, shapes, blocks, borders and text changes " +
            "and restore the canvas to its starting point."
        );

        if (!confirmed) return;

        const { width, height } = getCanvasDimensions(adSize);


        const starter = createStarterCanvas(width, height);

        setTexts(starter.texts);
        setBlocks(starter.blocks);
        setDiscountTags(starter.discountTags || []);

        // Remove previous design elements.
        setImages([]);
        setIcons([]);
        setShapes([]);
        setBorders([]);

        // Restore default background.
        setBackground(null);

        // Clear the saved layouts from the previous design.
        sizeLayoutsRef.current = {};


        sizeLayoutsRef.current[adSize] = {
            texts: starter.texts,
            images: [],
            icons: [],
            shapes: [],
            blocks: starter.blocks,
            borders: [],
            discountTags: starter.discountTags || [],
            background: null
        };



        // Remove everything added by the user/template
        // setImages([]);
        // setIcons([]);
        // setShapes([]);
        // setBlocks([]);
        // setBorders([]);
        // setDiscountTags([]);

        // // Restore default background
        // setBackground(null);

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
                // setAdSize={setAdSize}
                setAdSize={handleAdSizeChange}
                language={language}
                setLanguage={setLanguage}
                canvasRef={canvasRef}
                onSave={saveAd}
                onNavigate={requestNavigation}
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
                    onOpenTemplates={() => setShowTemplates(true)}
                />
                <Canvas
                    ref={canvasRef}
                    adSize={adSize}
                    onReset={resetCanvas}
                    texts={texts}
                    setTexts={setTexts}
                    images={images}
                    setImages={setImages}
                    icons={icons}
                    setIcons={setIcons}
                    onIconColorChange={changeIconColor}
                    onOpenClipArt={() =>
                        setShowClipArtPicker(true)
                    }
                    onOpenAIAssistance={() => setShowAIAssistance(true)}
                    onReplaceImage={replaceTemplateImage}
                    onReplaceIcon={openIconReplacement}
                    onReplaceDiscountTag={openDiscountTagReplacement}
                    shapes={shapes}
                    setShapes={setShapes}
                    blocks={blocks}
                    setBlocks={setBlocks}
                    borders={borders}
                    setBorders={setBorders}
                    background={background}
                    setBackground={setBackground}
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
                    pushHistory={() =>
                        pushHistory({
                            texts,
                            images,
                            icons,
                            shapes,
                            blocks,
                            borders,
                            discountTags,
                            background,
                        })
                    }
                    discountTags={discountTags}
                    setDiscountTags={setDiscountTags}
                    onOpenDiscountTags={() => setShowDiscountTagPicker(true)}
                    language={language}
                    setActiveSection={setActiveSection}
                    activeSection={activeSection}
                    editingBackground={editingBackground}
                    setEditingBackground={setEditingBackground}
                    hideCanvasToolbar={
                        showTemplates ||
                        showAIAssistance ||
                        showIconPicker ||
                        showClipArtPicker ||
                        showDiscountTagPicker
                    }

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
            {showAIAssistance && (
                <AIAssistanceModal
                    onClose={() => setShowAIAssistance(false)}
                    onGenerate={generateAIDesign}
                    onOpenTemplates={() => setShowTemplates(true)}
                />
            )}

            {isBusinessPhotoLibraryOpen && (
                <BusinessPhotoBackgroundPicker
                    onClose={() => setIsBusinessPhotoLibraryOpen(false)}
                    onSelect={(item) => {
                        // Connect this to your existing canvas background handler.
                        // The selected item is available as item.src.
                        handleBackgroundSelect(item);
                        setIsBusinessPhotoLibraryOpen(false);
                    }}
                />
            )}

            {showTemplates && (
                <TemplateBrowser
                    adSize={adSize}
                    onUseTemplate={loadTemplate}
                    onClose={() => setShowTemplates(false)}
                />
            )}

            {showClipArtPicker && (
                <ClipArtBackgroundPicker
                    onClose={() =>
                        setShowClipArtPicker(false)
                    }
                    onSelect={clipArt => {

                        applyClipArtBackground(clipArt);

                        setShowClipArtPicker(false);

                    }}
                />
            )}

            {showIconPicker && (
                <IconPicker
                    onClose={() => {
                        setShowIconPicker(false);
                        setIconReplaceTarget(null);
                    }}
                    onSelect={addIconToCanvas}
                />
            )}

            {showDiscountTagPicker && (
                <DiscountTagPicker
                    onClose={() => {
                        setShowDiscountTagPicker(false);
                        setDiscountTagReplaceId(null);
                    }}
                    onSelect={addDiscountTagToCanvas}
                />
            )}

            {showLeaveModal && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4" role="presentation">
                    <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6" role="dialog" aria-modal="true" aria-labelledby="adstudio-leave-title">
                        <div className="flex items-start gap-4 mb-5">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl font-bold">!</div>
                            <div>
                                <h2 id="adstudio-leave-title" className="text-xl font-bold text-gray-900">
                                    {pendingNavigation?.requireSave ? "Save your ad first" : "Are you sure you want to leave?"}
                                </h2>
                                <p className="text-sm text-gray-600 mt-2">
                                    {pendingNavigation?.requireSave
                                        ? "Your ad has unsaved changes. Save it before continuing to purchase a plan."
                                        : "You have unsaved changes. If you leave now, those changes will be lost."}
                                </p>
                            </div>
                        </div>
                        {pendingNavigation?.requireSave ? (
                            <div className="flex flex-col gap-3">
                                <button onClick={handleSaveAndLeave} disabled={savingBeforeLeave} className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3">
                                    {savingBeforeLeave ? "Saving..." : "Save & Continue"}
                                </button>
                                <button onClick={handleStay} disabled={savingBeforeLeave} className="w-full rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3">Cancel</button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <button onClick={handleSaveAndLeave} disabled={savingBeforeLeave} className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3">
                                    {savingBeforeLeave ? "Saving..." : "Save & Leave"}
                                </button>
                                <button onClick={handleLeaveWithoutSaving} disabled={savingBeforeLeave} className="w-full rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3">Leave Without Saving</button>
                                <button onClick={handleStay} disabled={savingBeforeLeave} className="w-full rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3">Stay</button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ================= WELCOME EDITING TUTORIAL ================= */}

            {showEditTutorial && (
                <div className="tutorial-video-overlay">
                    <div className="tutorial-video-modal">

                        <div className="tutorial-video-header">
                            <div>
                                <h2>Welcome to AdStudio!</h2>
                                <p>Watch this quick tutorial to learn how to create amazing advertisements.</p>
                            </div>

                            <button
                                className="tutorial-close-btn"
                                onClick={handleCloseTutorial}
                                aria-label="Close tutorial"
                                title="Skip tutorial"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="tutorial-video-container">
                            <iframe
                                src="https://www.youtube.com/embed/f1DPM2qkjhY?autoplay=1&mute=1&controls=1&rel=0&playsinline=1"
                                title="How to edit advertisements in AdStudio"
                                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                                allowFullScreen
                            />
                        </div>

                        <div className="tutorial-video-footer">
                            <span>Learn how to create your first advertisement with AdStudio.</span>

                            <button
                                className="tutorial-skip-btn"
                                onClick={handleCloseTutorial}
                            >
                                Skip & Continue →
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* ================= END WELCOME TUTORIAL ================= */}
        </div>
    );
}

