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
    const [icons, setIcons] = useState([]);
    const [shapes, setShapes] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [borders, setBorders] = useState([]);
    const [background, setBackground] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [showTemplates, setShowTemplates] = useState(false);
    const [showAIAssistance, setShowAIAssistance] = useState(false);
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [showClipArtPicker, setShowClipArtPicker] = useState(false);
    const [isBusinessPhotoLibraryOpen, setIsBusinessPhotoLibraryOpen] =
        useState(false);

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

    const [showDiscountTagPicker, setShowDiscountTagPicker] = useState(false);
    const [discountTags, setDiscountTags] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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
                        y: height * 0.08,

                        width: width * 0.9,

                        align: "left",

                        fontSize: width * 0.15,

                        fill: "#111",

                        fontFamily: "Pinyon script"
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

                        fontFamily: "Lobstar two"
                    },
                    {
                        id: 3,
                        type: "business",
                        text: `Description goes here 
                                add details about 
                                your Business with Icons`,

                        x: width * 0.05,
                        y: height * 0.38,

                        width: width * 0.9,

                        align: "center",

                        fontSize: width * 0.032,

                        fill: "#555",

                        fontFamily: "Josepin Sans"
                    },

                    {
                        id: 4,
                        type: "contact",
                        text: "📞 123 456 789",

                        x: width * 0.08,
                        y: height * 0.75,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Times new roman"
                    },

                    {
                        id: 5,
                        type: "contact",
                        text: "✉ info@email.com",

                        x: width * 0.08,
                        y: height * 0.80,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Times new roman"
                    },

                    {
                        id: 6,
                        type: "contact",
                        text: "📍 Your Address",

                        x: width * 0.08,
                        y: height * 0.85,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Times new roman"
                    }
                    ,
                    {
                        id: 7,
                        type: "contact",
                        text: "🌐 Web sites.com",

                        x: width * 0.08,
                        y: height * 0.90,

                        width: width * 0.9,

                        fontSize: width * 0.03,

                        fill: "#111",

                        fontFamily: "Times new roman"
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
                setDiscountTags(parsed.discountTags || []);

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

        // Load an actual image background when one is supplied.
        let newBackground = null;
        const backgroundSrc =
            template.background?.src ||
            (typeof template.background === "string"
                ? template.background
                : null);

        if (backgroundSrc) {
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

        // Apply everything to the existing editor. Do not replace Canvas.
        setTemplateData(template);
        setAdSize(selectedSize);
        setTexts(templateTexts);
        setImages(templateImages.filter(Boolean));
        setIcons([]);
        setShapes(template.shapes || []);
        setBlocks(templateBlocks);
        setBorders(templateBorders);
        setDiscountTags(template.discountTags || []);
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
            discountTags: template.discountTags || [],
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



    const addIconToCanvas = async ({
        name,
        color
    }) => {

        try {

            const width = 80;
            const height = 80;

            const canvasWidth =
                CANVAS_SIZES[adSize]?.editor?.[0] ||
                CANVAS_SIZES[adSize]?.editor?.width ||
                420;

            const canvasHeight =
                CANVAS_SIZES[adSize]?.editor?.[1] ||
                CANVAS_SIZES[adSize]?.editor?.height ||
                420;

            const icon = await createIconElement({
                id: createIconId(),
                iconName: name,
                color: color || "#0b1f33",

                x: Math.max(
                    10,
                    canvasWidth / 2 - width / 2
                ),

                y: Math.max(
                    10,
                    canvasHeight / 2 - height / 2
                ),

                width,
                height
            });

            setIcons(prev => {
                const next = [
                    ...prev,
                    icon
                ];

                setTimeout(() => {
                    pushHistory({
                        texts,
                        images,
                        icons: next,
                        shapes,
                        blocks,
                        borders,
                        background
                    });
                }, 0);

                return next;
            });

            setSelectedId(icon.id);

            setShowIconPicker(false);

        } catch (error) {

            console.error(
                "Failed to add icon:",
                error
            );

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

    const addDiscountTagToCanvas = tag => {
        if (!tag) return;

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
            if (!adId) setAdId(result.ad._id);

            alert("Ad saved successfully");
        } catch (err) {
            console.error("SAVE FAILED:", err);
            alert("Failed to save ad");
        }
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
        setIcons([]);
        setShapes([]);
        setBlocks([]);
        setBorders([]);
        setDiscountTags([]);

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
                    onClose={() =>
                        setShowIconPicker(false)
                    }
                    onSelect={addIconToCanvas}
                />
            )}

            {showDiscountTagPicker && (
                <DiscountTagPicker
                    onClose={() => setShowDiscountTagPicker(false)}
                    onSelect={addDiscountTagToCanvas}
                />
            )}
        </div>
    );
}