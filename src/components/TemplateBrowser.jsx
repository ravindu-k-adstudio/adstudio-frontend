// import React, { useMemo, useState } from "react";
// import {
//     FaSearch,
//     FaTimes,
//     FaCheck,
//     FaImage,
//     FaFilter
// } from "react-icons/fa";

// import templates, {
//     BUSINESS_TYPES,
//     TEMPLATE_SIZES,
//     TEMPLATE_SIZE_NAMES
// } from "../data/templates";

// export default function TemplateBrowser({
//     adSize,
//     onUseTemplate,
//     onClose
// }) {

//     const [selectedSize, setSelectedSize] = useState(adSize || "square");
//     const [business, setBusiness] = useState("All");
//     const [search, setSearch] = useState("");
//     const [loadingId, setLoadingId] = useState(null);

//     const filteredTemplates = useMemo(() => {

//         const query = search.trim().toLowerCase();

//         return templates.filter(template => {

//             const sizeMatch =
//                 !selectedSize ||
//                 template.sizes.includes(selectedSize);

//             const businessMatch =
//                 business === "All" ||
//                 template.businessType === business;

//             const searchMatch =
//                 !query ||
//                 template.name.toLowerCase().includes(query) ||
//                 template.businessType.toLowerCase().includes(query) ||
//                 template.description.toLowerCase().includes(query);

//             return sizeMatch && businessMatch && searchMatch;

//         });

//     }, [selectedSize, business, search]);

//     const getPreviewRatio = () => {

//         const [w, h] =
//             TEMPLATE_SIZES[selectedSize] ||
//             TEMPLATE_SIZES.square;

//         return w / h;
//     };

//     const useTemplate = async template => {

//         if (loadingId) return;

//         setLoadingId(template.id);

//         // CLOSE TEMPLATE WINDOW IMMEDIATELY
//         onClose?.();

//         try {

//             // Load template in background
//             await onUseTemplate({
//                 ...template,
//                 selectedSize
//             });

//         } catch (error) {

//             // Do NOT show an alert.
//             // The template may already have been applied successfully.
//             console.error("Template loading failed:", error);

//         } finally {

//             setLoadingId(null);

//         }

//     };



//     return (

//         <div
//             className="
//                 fixed
//                 inset-0
//                 z-[100]
//                 flex
//                 items-center
//                 justify-center
//                 p-3
//                 md:p-6
//             "
//             style={{
//                 background: "rgba(15,23,42,0.28)",
//                 backdropFilter: "blur(8px)",
//                 WebkitBackdropFilter: "blur(8px)"
//             }}
//             onMouseDown={e => {

//                 if (e.target === e.currentTarget) {
//                     onClose?.();
//                 }

//             }}
//         >

//             <div
//                 className="
//                     relative
//                     w-full
//                     max-w-[1450px]
//                     h-[94vh]
//                     overflow-hidden
//                     rounded-[28px]
//                     border
//                     border-white/70
//                     bg-white/80
//                     shadow-[0_30px_100px_rgba(15,23,42,0.25)]
//                 "
//                 style={{
//                     backdropFilter: "blur(25px)",
//                     WebkitBackdropFilter: "blur(25px)"
//                 }}
//                 onMouseDown={e => e.stopPropagation()}
//             >

//                 {/* HEADER */}

//                 <div
//                     className="
//                         sticky
//                         top-0
//                         z-20
//                         border-b
//                         border-slate-200/70
//                         bg-white/75
//                         backdrop-blur-xl
//                         px-4
//                         md:px-7
//                         py-4
//                     "
//                 >

//                     <div className="flex items-center justify-between gap-4">

//                         <div>

//                             <h2 className="text-xl md:text-2xl font-bold text-[#0b1f33]">
//                                 Choose a Template
//                             </h2>

//                             <p className="text-sm text-slate-500 mt-1">
//                                 Start with a professionally arranged design and edit every element.
//                             </p>

//                         </div>

//                         <button
//                             onClick={onClose}
//                             className="
//                                 flex
//                                 items-center
//                                 justify-center
//                                 w-10
//                                 h-10
//                                 rounded-full
//                                 bg-white
//                                 border
//                                 border-slate-200
//                                 text-slate-600
//                                 hover:bg-slate-100
//                                 hover:text-slate-900
//                                 transition
//                                 shadow-sm
//                             "
//                         >
//                             <FaTimes />
//                         </button>

//                     </div>


//                     {/* SIZE FILTER */}

//                     <div className="mt-4">

//                         <div className="flex items-center gap-2 mb-2">

//                             <FaFilter className="text-cyan-600" />

//                             <span className="font-semibold text-sm text-slate-700">
//                                 Ad Size
//                             </span>

//                         </div>

//                         <div className="
//                             flex
//                             gap-2
//                             overflow-x-auto
//                             pb-1
//                         ">

//                             {Object.keys(TEMPLATE_SIZES).map(size => (

//                                 <button
//                                     key={size}
//                                     onClick={() => setSelectedSize(size)}
//                                     className={`
//                                         flex-shrink-0
//                                         px-3
//                                         py-2
//                                         rounded-xl
//                                         text-xs
//                                         md:text-sm
//                                         font-medium
//                                         border
//                                         transition-all
//                                         ${selectedSize === size
//                                             ? "bg-[#0b1f33] text-white border-[#0b1f33] shadow"
//                                             : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-700"
//                                         }
//                                     `}
//                                 >
//                                     {TEMPLATE_SIZE_NAMES[size]}
//                                 </button>

//                             ))}

//                         </div>

//                     </div>


//                     {/* BUSINESS TABS */}

//                     <div className="mt-4">

//                         <div className="
//                             flex
//                             gap-2
//                             overflow-x-auto
//                             pb-2
//                         ">

//                             {BUSINESS_TYPES.map(type => (

//                                 <button
//                                     key={type}
//                                     onClick={() => setBusiness(type)}
//                                     className={`
//                                         flex-shrink-0
//                                         px-4
//                                         py-2
//                                         rounded-full
//                                         text-sm
//                                         font-medium
//                                         border
//                                         transition-all
//                                         ${business === type
//                                             ? "bg-cyan-600 text-white border-cyan-600 shadow-md"
//                                             : "bg-white/80 text-slate-600 border-slate-200 hover:border-cyan-300"
//                                         }
//                                     `}
//                                 >
//                                     {type}
//                                 </button>

//                             ))}

//                         </div>

//                     </div>


//                     {/* SEARCH */}

//                     <div className="relative mt-3">

//                         <FaSearch
//                             className="
//                                 absolute
//                                 left-4
//                                 top-1/2
//                                 -translate-y-1/2
//                                 text-slate-400
//                             "
//                         />

//                         <input
//                             value={search}
//                             onChange={e => setSearch(e.target.value)}
//                             placeholder="Search templates..."
//                             className="
//                                 w-full
//                                 pl-11
//                                 pr-4
//                                 py-3
//                                 rounded-2xl
//                                 border
//                                 border-slate-200
//                                 bg-white/90
//                                 outline-none
//                                 focus:ring-2
//                                 focus:ring-cyan-400/40
//                                 focus:border-cyan-400
//                             "
//                         />

//                     </div>

//                 </div>


//                 {/* TEMPLATE GRID */}

//                 <div
//                     className="
//                         h-[calc(94vh-260px)]
//                         overflow-y-auto
//                         p-4
//                         md:p-7
//                     "
//                 >

//                     <div className="
//                         flex
//                         items-center
//                         justify-between
//                         mb-4
//                     ">

//                         <div className="text-sm text-slate-500">

//                             Showing

//                             <span className="font-bold text-slate-800 mx-1">
//                                 {filteredTemplates.length}
//                             </span>

//                             templates

//                         </div>

//                         <div className="text-xs text-slate-400">

//                             {TEMPLATE_SIZE_NAMES[selectedSize]}

//                         </div>

//                     </div>


//                     {filteredTemplates.length === 0 ? (

//                         <div
//                             className="
//                                 h-64
//                                 flex
//                                 flex-col
//                                 items-center
//                                 justify-center
//                                 text-center
//                                 text-slate-500
//                             "
//                         >

//                             <FaImage className="text-4xl mb-3 text-slate-300" />

//                             <p className="font-semibold">
//                                 No templates found
//                             </p>

//                             <p className="text-sm mt-1">
//                                 Try another business category or search.
//                             </p>

//                         </div>

//                     ) : (

//                         <div
//                             className="
//                                 grid
//                                 grid-cols-1
//                                 sm:grid-cols-2
//                                 lg:grid-cols-3
//                                 xl:grid-cols-4
//                                 gap-5
//                             "
//                         >

//                             {filteredTemplates.map(template => (

//                                 <TemplateCard
//                                     key={template.id}
//                                     template={template}
//                                     selectedSize={selectedSize}
//                                     ratio={getPreviewRatio()}
//                                     loading={loadingId === template.id}
//                                     onUse={() => useTemplate(template)}
//                                 />

//                             ))}

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </div>

//     );
// }


// /*
// |--------------------------------------------------------------------------
// | Template card
// |--------------------------------------------------------------------------
// */

// function TemplateCard({
//     template,
//     selectedSize,
//     ratio,
//     loading,
//     onUse
// }) {

//     const data = template;

//     const bg =
//         data.background?.src ||
//         "";

//     return (

//         <div
//             className="
//                 group
//                 rounded-2xl
//                 overflow-hidden
//                 bg-white
//                 border
//                 border-slate-200
//                 shadow-sm
//                 hover:shadow-xl
//                 hover:-translate-y-1
//                 transition-all
//                 duration-200
//             "
//         >

//             {/* PREVIEW */}

//             <div
//                 className="
//                     relative
//                     w-full
//                     overflow-hidden
//                     bg-slate-100
//                 "
//                 style={{
//                     aspectRatio: ratio
//                 }}
//             >

//                 <img
//                     src={bg}
//                     alt=""
//                     className="
//                         absolute
//                         inset-0
//                         w-full
//                         h-full
//                         object-cover
//                     "
//                     loading="lazy"
//                     onError={e => {

//                         e.currentTarget.style.display = "none";

//                     }}
//                 />

//                 <div
//                     className="
//                         absolute
//                         inset-0
//                     "
//                     style={{
//                         background:
//                             "linear-gradient(135deg,rgba(0,0,0,.08),rgba(0,0,0,.48))"
//                     }}
//                 />


//                 {/* Decorative card */}

//                 <div
//                     className="
//                         absolute
//                         left-[6%]
//                         top-[7%]
//                         w-[12%]
//                         aspect-square
//                         rounded-[20%]
//                         bg-white
//                         shadow-lg
//                         flex
//                         items-center
//                         justify-center
//                         text-[8px]
//                         font-bold
//                         text-[#0b1f33]
//                         overflow-hidden
//                     "
//                 >

//                     AD

//                 </div>


//                 {/* Business name */}

//                 <div
//                     className="
//                         absolute
//                         left-[6%]
//                         top-[28%]
//                         right-[38%]
//                         text-white
//                         font-bold
//                         text-[clamp(14px,2vw,25px)]
//                         leading-tight
//                         drop-shadow-lg
//                     "
//                 >
//                     {data.name.split(" — ")[0]}
//                 </div>


//                 {/* Tagline */}

//                 <div
//                     className="
//                         absolute
//                         left-[6%]
//                         top-[43%]
//                         right-[40%]
//                         text-white
//                         font-semibold
//                         text-[clamp(7px,1vw,13px)]
//                         leading-tight
//                     "
//                 >
//                     {BUSINESS_DATA_SAFE(template.businessType)}
//                 </div>


//                 {/* Offer */}

//                 <div
//                     className="
//                         absolute
//                         left-[6%]
//                         bottom-[23%]
//                         text-yellow-300
//                         font-black
//                         text-[clamp(9px,1.4vw,17px)]
//                     "
//                 >
//                     SPECIAL OFFER
//                 </div>


//                 {/* Photo placeholder */}

//                 <div
//                     className="
//                         absolute
//                         right-[6%]
//                         top-[12%]
//                         w-[27%]
//                         h-[34%]
//                         rounded-xl
//                         overflow-hidden
//                         border
//                         border-white/50
//                         shadow-lg
//                     "
//                 >

//                     <img
//                         src={template.images?.find(i => i.type === "photo")?.src}
//                         alt=""
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                     />

//                 </div>


//                 {/* Social icons */}

//                 <div
//                     className="
//                         absolute
//                         bottom-[7%]
//                         right-[6%]
//                         flex
//                         gap-1
//                     "
//                 >

//                     <div className="w-4 h-4 rounded bg-[#1877F2]" />
//                     <div className="w-4 h-4 rounded bg-[#d62976]" />
//                     <div className="w-4 h-4 rounded bg-[#25D366]" />

//                 </div>


//                 {/* Hover */}

//                 <div
//                     className="
//                         absolute
//                         inset-0
//                         flex
//                         items-center
//                         justify-center
//                         bg-black/30
//                         opacity-0
//                         group-hover:opacity-100
//                         transition
//                     "
//                 >

//                     <button
//                         onClick={onUse}
//                         disabled={loading}
//                         className="
//                             px-5
//                             py-2.5
//                             rounded-xl
//                             bg-white
//                             text-[#0b1f33]
//                             font-bold
//                             shadow-xl
//                             hover:scale-105
//                             transition
//                             disabled:opacity-60
//                         "
//                     >

//                         {loading ? (
//                             "Loading..."
//                         ) : (
//                             <>
//                                 <FaCheck className="inline mr-2" />
//                                 Use Template
//                             </>
//                         )}

//                     </button>

//                 </div>

//             </div>


//             {/* CARD INFO */}

//             <div className="p-3">

//                 <div className="flex items-center justify-between gap-2">

//                     <div>

//                         <h3 className="font-bold text-sm text-[#0b1f33] truncate">
//                             {template.name}
//                         </h3>

//                         <p className="text-xs text-slate-500 mt-1">
//                             {template.businessType}
//                         </p>

//                     </div>

//                     <button
//                         onClick={onUse}
//                         disabled={loading}
//                         className="
//                             flex-shrink-0
//                             px-3
//                             py-1.5
//                             rounded-lg
//                             bg-[#0b1f33]
//                             text-white
//                             text-xs
//                             font-semibold
//                             hover:bg-cyan-700
//                             disabled:opacity-50
//                         "
//                     >
//                         {loading ? "..." : "Use"}
//                     </button>

//                 </div>

//             </div>

//         </div>

//     );
// }


// /*
// |--------------------------------------------------------------------------
// | Small helper
// |--------------------------------------------------------------------------
// */

// function BUSINESS_DATA_SAFE(type) {

//     const taglines = {
//         Restaurant: "Delicious Food • Great Ambience",
//         Cafe: "Brewed To Perfection",
//         Fashion: "Trendy Styles • New Season",
//         Photography: "Professional • Creative • Timeless",
//         Resort: "Luxury • Escape • Relax",
//         Fitness: "GET FIT • STAY STRONG",
//         Beauty: "Pamper Yourself • Look Your Best",
//         Auto: "Expert Repairs • Honest Service",
//         Grocery: "Fresh • Organic • Local",
//         "Real Estate": "Find A Place To Call Home",
//         Travel: "Explore • Discover • Experience",
//         Education: "Learn • Grow • Succeed"
//     };

//     return taglines[type] || "Professional Business";
// }

///////////////////////////////
import { useMemo, useState } from "react";
import templates, { BUSINESS_TYPES, TEMPLATE_SIZE_NAMES, TEMPLATE_SIZES } from "../data/templates";
import "../styles/template-browser.css";

const CATEGORIES = BUSINESS_TYPES.filter((item) => item !== "All");
const pct = (value, fallback = 0) => `${Math.max(-100, Math.min(200, Number(value ?? fallback) * 100))}%`;
const pxPct = (value, fallback = 0) => `${Math.max(0, Number(value ?? fallback) * 100)}%`;

function businessOverlayClip(shape) {
    const paths = {
        left: "polygon(0 0, 68% 0, 48% 100%, 0 100%)",
        right: "polygon(32% 0, 100% 0, 100% 100%, 52% 100%)",
        top: "polygon(0 0, 100% 0, 100% 52%, 0 70%)",
        bottom: "polygon(0 48%, 100% 30%, 100% 100%, 0 100%)",
        diagonal: "polygon(0 0, 100% 0, 68% 100%, 0 100%)",
        curve: "ellipse(78% 100% at 0% 50%)",
        split: "polygon(0 0,40% 0,32% 100%,0 100%,68% 0,100% 0,100% 100%,60% 100%)",
        circle: "circle(64% at 0% 50%)",
        wave: "polygon(0 0,100% 0,100% 72%,80% 66%,60% 78%,40% 70%,20% 82%,0 74%)",
        corner: "polygon(0 0, 100% 0, 100% 42%, 58% 42%, 58% 100%, 0 100%)",
        full: "none",
        minimal: "polygon(0 0,42% 0,30% 100%,0 100%)"
    };
    return paths[shape] || paths.left;
}

function getTemplateSize(template, adSize) {
    const sizes = template.sizes || [];
    return sizes.includes(adSize) ? adSize : adSize;
}

function TemplateArtwork({ template, adSize }) {
    const bg = template.background || {};
    const previewImages = template.images || [];
    const previewTexts = template.texts || [];
    const previewBlocks = template.blocks || [];
    const previewBorders = template.borders || [];
    const previewDiscountTags = template.discountTags || [];
    const gradient = typeof bg.value === "string" && bg.value.includes("gradient") ? bg.value : "linear-gradient(145deg,#14243a,#283e59)";

    return (
        <div className={`tb-artwork tb-size-${adSize}`}>
            <div className="tb-art-bg" style={{ background: bg.type === "gradient" ? gradient : "#17263a" }} />
            {(bg.type === "image" || bg.type === "business-photo") && bg.src && (
                <img className="tb-art-background-image" src={bg.src} alt="" loading="lazy" />
            )}
            {bg.type === "business-photo" && (
                <div
                    className="tb-business-photo-overlay"
                    style={{
                        background: bg.color || "#17263a",
                        opacity: Math.max(0, Math.min(100, Number(bg.opacity ?? 70))) / 100,
                        clipPath: businessOverlayClip(bg.shape),
                    }}
                />
            )}
            {previewBlocks.map((block, index) => {
                const shape = block.shape || "rectangle";
                return <div key={block.id || `block-${index}`} className={`tb-art-block tb-shape-${shape}`} style={{
                    left: pxPct(block.nx), top: pxPct(block.ny), width: pxPct(block.nw, .2), height: pxPct(block.nh, .2),
                    background: block.fill || block.color || "rgba(8,15,28,.45)",
                    borderRadius: shape === "circle" ? "50%" : `${Math.max(0, Number(block.cornerRadius || 0) / 5)}px`,
                    transform: `rotate(${Number(block.rotation || 0)}deg)`,
                }} />;
            })}
            {previewImages.map((item, index) => {
                if (!item.src) return null;
                return <img key={item.id || `${item.type}-${index}`} className={`tb-art-image tb-image-${item.type || "image"}`} src={item.src} alt="" loading="lazy" style={{
                    left: pxPct(item.nx), top: pxPct(item.ny), width: pxPct(item.nw, .15), height: pxPct(item.nh, .15),
                    transform: `rotate(${Number(item.rotation || 0)}deg)`, objectFit: item.type === "logo" || item.type === "social" || item.type === "promotion" ? "contain" : "cover",
                }} />;
            })}
            {previewTexts.map((item, index) => {
                const color = item.fill || "#fff";
                const fontSize = Math.max(5, Math.min(34, Number(item.fontScale || .035) * 100));
                return <div key={item.id || `text-${index}`} className={`tb-art-text tb-role-${item.role || item.type || "text"}`} style={{
                    left: pxPct(item.nx), top: pxPct(item.ny), width: pxPct(item.nw, .5),
                    color, fontFamily: item.fontFamily || "Arial, sans-serif", fontSize: `${fontSize}%`,
                    fontWeight: item.fontStyle === "bold" ? 800 : 500,
                    textAlign: item.align || "left", lineHeight: 1.08,
                    letterSpacing: `${Math.min(2, Number(item.letterSpacing || 0) / 10)}px`,
                    textShadow: color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white" ? "0 1px 5px rgba(0,0,0,.3)" : "none",
                }}>{item.text}</div>;
            })}
            {previewDiscountTags.map((tag, index) => (
                <div
                    key={tag.id || `discount-${index}`}
                    className={`tb-art-discount tb-discount-${tag.shape || "burst"}`}
                    style={{
                        left: pxPct(tag.nx), top: pxPct(tag.ny),
                        width: pxPct(tag.nw, .17), height: pxPct(tag.nh, .17),
                        background: tag.fill || "#ef4444",
                        color: tag.textColor || "#fff",
                        border: `1px solid ${tag.borderColor || "rgba(255,255,255,.8)"}`,
                        borderRadius: tag.shape === "circle" ? "50%" : tag.shape === "rounded" ? "12px" : "3px",
                        transform: `rotate(${Number(tag.rotation || 0)}deg)`,
                        clipPath: tag.shape === "burst" ? "polygon(50% 0%,61% 13%,78% 5%,81% 24%,100% 30%,88% 46%,100% 62%,80% 69%,79% 90%,60% 84%,50% 100%,39% 84%,20% 90%,19% 69%,0 62%,12% 46%,0 30%,19% 24%,22% 5%,39% 13%)" : "none",
                    }}
                >
                    <span>{tag.text || "OFFER"}</span>
                </div>
            ))}
            {previewBorders.map((border, index) => <div key={border.id || index} className="tb-art-border" style={{
                left: pxPct(border.nx, .012), top: pxPct(border.ny, .012), width: pxPct(border.nw, .976), height: pxPct(border.nh, .976),
                border: `${Math.max(1, Number(border.strokeWidth || 2) / 2)}px ${border.style || "solid"} ${border.stroke || border.color || "#fff"}`,
                borderRadius: `${Math.max(0, Number(border.cornerRadius || 4) / 5)}px`,
            }} />)}
            <div className="tb-art-vignette" />
        </div>
    );
}

export default function TemplateBrowser({ adSize = "square", onUseTemplate, onClose }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [styleFilter, setStyleFilter] = useState("All styles");
    const [selectedSize, setSelectedSize] = useState(adSize);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [busyId, setBusyId] = useState(null);
    const styles = useMemo(() => ["All styles", ...new Set(templates.map((t) => t.style).filter(Boolean))], []);
    const visible = useMemo(() => {
        const q = search.trim().toLowerCase();
        return templates.filter((t) => {
            const business = t.businessType || t.category || "Other";
            const matchesCategory = category === "All" || business === category;
            const matchesStyle = styleFilter === "All styles" || t.style === styleFilter;
            const matchesSearch = !q || `${t.name} ${t.description} ${business} ${t.style}`.toLowerCase().includes(q);
            return matchesCategory && matchesStyle && matchesSearch;
        });
    }, [search, category, styleFilter]);

    const useDesign = async (template) => {
        setBusyId(template.id);
        try {
            await onUseTemplate?.({ ...template, selectedSize: getTemplateSize(template, selectedSize) });
            setSelectedTemplate(null);
            onClose?.();
        } finally {
            setBusyId(null);
        }
    };

    const sizeOptions = Object.keys(TEMPLATE_SIZES);
    const previewDimensions = TEMPLATE_SIZES[selectedSize] || TEMPLATE_SIZES.square;

    return <div className="tb-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose?.(); }}>
        <section className="tb-dialog" role="dialog" aria-modal="true" aria-label="Choose an advertisement template">
            <header className="tb-header">
                <div className="tb-heading">
                    <span className="tb-eyebrow">ADSTUDIO CREATIVE STUDIO</span>
                    <h2>Designs made to stand out.</h2>
                    <p>Professionally composed starting points, ready to customize in your editor.</p>
                </div>
                <button className="tb-close" onClick={onClose} aria-label="Close template browser">×</button>
            </header>
            <div className="tb-toolbar">
                <label className="tb-search"><span aria-hidden="true">⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search designs, industries, styles…" /></label>
                <label className="tb-style-select"><span>Style</span><select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>{styles.map((style) => <option key={style}>{style}</option>)}</select></label>
                <label className="tb-size-select"><span>Ad size</span><select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>{sizeOptions.map((size) => <option key={size} value={size}>{TEMPLATE_SIZE_NAMES[size] || size}</option>)}</select></label>
                <span className="tb-count"><strong>{visible.length}</strong> designs</span>
            </div>
            <div className="tb-body">
                <nav className="tb-categories" aria-label="Template categories">
                    <button className={category === "All" ? "active" : ""} onClick={() => setCategory("All")}><span>✦</span> All designs <small>{templates.length}</small></button>
                    {CATEGORIES.map((name) => <button key={name} className={category === name ? "active" : ""} onClick={() => setCategory(name)}>{name}<small>{templates.filter((t) => (t.businessType || t.category) === name).length}</small></button>)}
                </nav>
                <main className="tb-results">
                    {visible.length === 0 ? <div className="tb-empty"><span>⌕</span><h3>No matching designs</h3><p>Try a different keyword or reset your filters.</p><button onClick={() => { setSearch(""); setCategory("All"); setStyleFilter("All styles"); }}>Reset filters</button></div> : <div className="tb-grid">
                        {visible.map((template, index) => <article className="tb-card" key={template.id || `${template.name}-${index}`}>
                            <button className="tb-preview-button" onClick={() => setSelectedTemplate(template)} aria-label={`Preview ${template.name}`}>
                                <TemplateArtwork template={template} adSize={selectedSize} />
                                <span className="tb-preview-size">{TEMPLATE_SIZE_NAMES[selectedSize] || selectedSize}</span>
                                <span className="tb-preview-hover">Use this design <b>↗</b></span>
                            </button>
                            <div className="tb-card-info"><div className="tb-card-title-row"><h3 title={template.name}>{template.name}</h3><span className="tb-number">{String((template.variant ?? index) + 1).padStart(2, "0")}</span></div>
                                <p>{template.businessType || template.category} <span>·</span> {template.style || "Campaign"}</p>
                                <button className="tb-use-button" onClick={() => setSelectedTemplate(template)}>Preview & customize  →</button>
                            </div>
                        </article>)}
                    </div>}
                </main>
            </div>
            <footer className="tb-footer"><span><i /> Every design opens in your existing editable canvas</span><span>Backgrounds · Images · Type · Offers · Borders</span></footer>
        </section>
        {selectedTemplate && <div className="tb-detail-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedTemplate(null); }}>
            <section className="tb-detail-dialog" role="dialog" aria-modal="true" aria-label={`Preview ${selectedTemplate.name}`}>
                <header className="tb-detail-header"><div><span className="tb-eyebrow">TEMPLATE PREVIEW</span><h2>{selectedTemplate.name}</h2><p>{selectedTemplate.businessType || selectedTemplate.category} · {selectedTemplate.style || "Campaign"}</p></div><button className="tb-close" onClick={() => setSelectedTemplate(null)} aria-label="Close preview">×</button></header>
                <div className="tb-detail-content">
                    <div className="tb-detail-art-wrap"><div className="tb-detail-canvas" style={{ aspectRatio: `${previewDimensions[0]} / ${previewDimensions[1]}` }}><TemplateArtwork template={selectedTemplate} adSize={selectedSize} /></div></div>
                    <div className="tb-detail-controls"><span className="tb-detail-kicker">MAKE IT YOUR SIZE</span><h3>Preview your ad</h3><p>{selectedTemplate.description || "Choose this design and customize every element in the editor."}</p>
                        <label className="tb-detail-size"><span>Ad size / format</span><select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>{sizeOptions.map((size) => <option key={size} value={size}>{TEMPLATE_SIZE_NAMES[size] || size} — {TEMPLATE_SIZES[size][0]} × {TEMPLATE_SIZES[size][1]}</option>)}</select></label>
                        <div className="tb-detail-dimensions">Canvas dimensions <strong>{previewDimensions[0]} × {previewDimensions[1]} px</strong></div>
                        <div className="tb-detail-actions"><button className="tb-detail-back" onClick={() => setSelectedTemplate(null)}>Back to templates</button><button className="tb-detail-apply" onClick={() => useDesign(selectedTemplate)} disabled={busyId === selectedTemplate.id}>{busyId === selectedTemplate.id ? "Opening editor…" : "Use this template →"}</button></div>
                    </div>
                </div>
            </section>
        </div>}
    </div>;
}
