import React, { useMemo, useState } from "react";
import {
    FaSearch,
    FaTimes,
    FaCheck,
    FaImage,
    FaFilter
} from "react-icons/fa";

import templates, {
    BUSINESS_TYPES,
    TEMPLATE_SIZES,
    TEMPLATE_SIZE_NAMES
} from "../data/templates";

export default function TemplateBrowser({
    adSize,
    onUseTemplate,
    onClose
}) {

    const [selectedSize, setSelectedSize] = useState(adSize || "square");
    const [business, setBusiness] = useState("All");
    const [search, setSearch] = useState("");
    const [loadingId, setLoadingId] = useState(null);

    const filteredTemplates = useMemo(() => {

        const query = search.trim().toLowerCase();

        return templates.filter(template => {

            const sizeMatch =
                !selectedSize ||
                template.sizes.includes(selectedSize);

            const businessMatch =
                business === "All" ||
                template.businessType === business;

            const searchMatch =
                !query ||
                template.name.toLowerCase().includes(query) ||
                template.businessType.toLowerCase().includes(query) ||
                template.description.toLowerCase().includes(query);

            return sizeMatch && businessMatch && searchMatch;

        });

    }, [selectedSize, business, search]);

    const getPreviewRatio = () => {

        const [w, h] =
            TEMPLATE_SIZES[selectedSize] ||
            TEMPLATE_SIZES.square;

        return w / h;
    };

    const useTemplate = async template => {

        if (loadingId) return;

        setLoadingId(template.id);

        // CLOSE TEMPLATE WINDOW IMMEDIATELY
        onClose?.();

        try {

            // Load template in background
            await onUseTemplate({
                ...template,
                selectedSize
            });

        } catch (error) {

            // Do NOT show an alert.
            // The template may already have been applied successfully.
            console.error("Template loading failed:", error);

        } finally {

            setLoadingId(null);

        }

    };



    return (

        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                p-3
                md:p-6
            "
            style={{
                background: "rgba(15,23,42,0.28)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)"
            }}
            onMouseDown={e => {

                if (e.target === e.currentTarget) {
                    onClose?.();
                }

            }}
        >

            <div
                className="
                    relative
                    w-full
                    max-w-[1450px]
                    h-[94vh]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/70
                    bg-white/80
                    shadow-[0_30px_100px_rgba(15,23,42,0.25)]
                "
                style={{
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)"
                }}
                onMouseDown={e => e.stopPropagation()}
            >

                {/* HEADER */}

                <div
                    className="
                        sticky
                        top-0
                        z-20
                        border-b
                        border-slate-200/70
                        bg-white/75
                        backdrop-blur-xl
                        px-4
                        md:px-7
                        py-4
                    "
                >

                    <div className="flex items-center justify-between gap-4">

                        <div>

                            <h2 className="text-xl md:text-2xl font-bold text-[#0b1f33]">
                                Choose a Template
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Start with a professionally arranged design and edit every element.
                            </p>

                        </div>

                        <button
                            onClick={onClose}
                            className="
                                flex
                                items-center
                                justify-center
                                w-10
                                h-10
                                rounded-full
                                bg-white
                                border
                                border-slate-200
                                text-slate-600
                                hover:bg-slate-100
                                hover:text-slate-900
                                transition
                                shadow-sm
                            "
                        >
                            <FaTimes />
                        </button>

                    </div>


                    {/* SIZE FILTER */}

                    <div className="mt-4">

                        <div className="flex items-center gap-2 mb-2">

                            <FaFilter className="text-cyan-600" />

                            <span className="font-semibold text-sm text-slate-700">
                                Ad Size
                            </span>

                        </div>

                        <div className="
                            flex
                            gap-2
                            overflow-x-auto
                            pb-1
                        ">

                            {Object.keys(TEMPLATE_SIZES).map(size => (

                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`
                                        flex-shrink-0
                                        px-3
                                        py-2
                                        rounded-xl
                                        text-xs
                                        md:text-sm
                                        font-medium
                                        border
                                        transition-all
                                        ${selectedSize === size
                                            ? "bg-[#0b1f33] text-white border-[#0b1f33] shadow"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-700"
                                        }
                                    `}
                                >
                                    {TEMPLATE_SIZE_NAMES[size]}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* BUSINESS TABS */}

                    <div className="mt-4">

                        <div className="
                            flex
                            gap-2
                            overflow-x-auto
                            pb-2
                        ">

                            {BUSINESS_TYPES.map(type => (

                                <button
                                    key={type}
                                    onClick={() => setBusiness(type)}
                                    className={`
                                        flex-shrink-0
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        font-medium
                                        border
                                        transition-all
                                        ${business === type
                                            ? "bg-cyan-600 text-white border-cyan-600 shadow-md"
                                            : "bg-white/80 text-slate-600 border-slate-200 hover:border-cyan-300"
                                        }
                                    `}
                                >
                                    {type}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* SEARCH */}

                    <div className="relative mt-3">

                        <FaSearch
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search templates..."
                            className="
                                w-full
                                pl-11
                                pr-4
                                py-3
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white/90
                                outline-none
                                focus:ring-2
                                focus:ring-cyan-400/40
                                focus:border-cyan-400
                            "
                        />

                    </div>

                </div>


                {/* TEMPLATE GRID */}

                <div
                    className="
                        h-[calc(94vh-260px)]
                        overflow-y-auto
                        p-4
                        md:p-7
                    "
                >

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-4
                    ">

                        <div className="text-sm text-slate-500">

                            Showing

                            <span className="font-bold text-slate-800 mx-1">
                                {filteredTemplates.length}
                            </span>

                            templates

                        </div>

                        <div className="text-xs text-slate-400">

                            {TEMPLATE_SIZE_NAMES[selectedSize]}

                        </div>

                    </div>


                    {filteredTemplates.length === 0 ? (

                        <div
                            className="
                                h-64
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                text-slate-500
                            "
                        >

                            <FaImage className="text-4xl mb-3 text-slate-300" />

                            <p className="font-semibold">
                                No templates found
                            </p>

                            <p className="text-sm mt-1">
                                Try another business category or search.
                            </p>

                        </div>

                    ) : (

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                                gap-5
                            "
                        >

                            {filteredTemplates.map(template => (

                                <TemplateCard
                                    key={template.id}
                                    template={template}
                                    selectedSize={selectedSize}
                                    ratio={getPreviewRatio()}
                                    loading={loadingId === template.id}
                                    onUse={() => useTemplate(template)}
                                />

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}


/*
|--------------------------------------------------------------------------
| Template card
|--------------------------------------------------------------------------
*/

function TemplateCard({
    template,
    selectedSize,
    ratio,
    loading,
    onUse
}) {

    const data = template;

    const bg =
        data.background?.src ||
        "";

    return (

        <div
            className="
                group
                rounded-2xl
                overflow-hidden
                bg-white
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-200
            "
        >

            {/* PREVIEW */}

            <div
                className="
                    relative
                    w-full
                    overflow-hidden
                    bg-slate-100
                "
                style={{
                    aspectRatio: ratio
                }}
            >

                <img
                    src={bg}
                    alt=""
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                    "
                    loading="lazy"
                    onError={e => {

                        e.currentTarget.style.display = "none";

                    }}
                />

                <div
                    className="
                        absolute
                        inset-0
                    "
                    style={{
                        background:
                            "linear-gradient(135deg,rgba(0,0,0,.08),rgba(0,0,0,.48))"
                    }}
                />


                {/* Decorative card */}

                <div
                    className="
                        absolute
                        left-[6%]
                        top-[7%]
                        w-[12%]
                        aspect-square
                        rounded-[20%]
                        bg-white
                        shadow-lg
                        flex
                        items-center
                        justify-center
                        text-[8px]
                        font-bold
                        text-[#0b1f33]
                        overflow-hidden
                    "
                >

                    AD

                </div>


                {/* Business name */}

                <div
                    className="
                        absolute
                        left-[6%]
                        top-[28%]
                        right-[38%]
                        text-white
                        font-bold
                        text-[clamp(14px,2vw,25px)]
                        leading-tight
                        drop-shadow-lg
                    "
                >
                    {data.name.split(" — ")[0]}
                </div>


                {/* Tagline */}

                <div
                    className="
                        absolute
                        left-[6%]
                        top-[43%]
                        right-[40%]
                        text-white
                        font-semibold
                        text-[clamp(7px,1vw,13px)]
                        leading-tight
                    "
                >
                    {BUSINESS_DATA_SAFE(template.businessType)}
                </div>


                {/* Offer */}

                <div
                    className="
                        absolute
                        left-[6%]
                        bottom-[23%]
                        text-yellow-300
                        font-black
                        text-[clamp(9px,1.4vw,17px)]
                    "
                >
                    SPECIAL OFFER
                </div>


                {/* Photo placeholder */}

                <div
                    className="
                        absolute
                        right-[6%]
                        top-[12%]
                        w-[27%]
                        h-[34%]
                        rounded-xl
                        overflow-hidden
                        border
                        border-white/50
                        shadow-lg
                    "
                >

                    <img
                        src={template.images?.find(i => i.type === "photo")?.src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />

                </div>


                {/* Social icons */}

                <div
                    className="
                        absolute
                        bottom-[7%]
                        right-[6%]
                        flex
                        gap-1
                    "
                >

                    <div className="w-4 h-4 rounded bg-[#1877F2]" />
                    <div className="w-4 h-4 rounded bg-[#d62976]" />
                    <div className="w-4 h-4 rounded bg-[#25D366]" />

                </div>


                {/* Hover */}

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/30
                        opacity-0
                        group-hover:opacity-100
                        transition
                    "
                >

                    <button
                        onClick={onUse}
                        disabled={loading}
                        className="
                            px-5
                            py-2.5
                            rounded-xl
                            bg-white
                            text-[#0b1f33]
                            font-bold
                            shadow-xl
                            hover:scale-105
                            transition
                            disabled:opacity-60
                        "
                    >

                        {loading ? (
                            "Loading..."
                        ) : (
                            <>
                                <FaCheck className="inline mr-2" />
                                Use Template
                            </>
                        )}

                    </button>

                </div>

            </div>


            {/* CARD INFO */}

            <div className="p-3">

                <div className="flex items-center justify-between gap-2">

                    <div>

                        <h3 className="font-bold text-sm text-[#0b1f33] truncate">
                            {template.name}
                        </h3>

                        <p className="text-xs text-slate-500 mt-1">
                            {template.businessType}
                        </p>

                    </div>

                    <button
                        onClick={onUse}
                        disabled={loading}
                        className="
                            flex-shrink-0
                            px-3
                            py-1.5
                            rounded-lg
                            bg-[#0b1f33]
                            text-white
                            text-xs
                            font-semibold
                            hover:bg-cyan-700
                            disabled:opacity-50
                        "
                    >
                        {loading ? "..." : "Use"}
                    </button>

                </div>

            </div>

        </div>

    );
}


/*
|--------------------------------------------------------------------------
| Small helper
|--------------------------------------------------------------------------
*/

function BUSINESS_DATA_SAFE(type) {

    const taglines = {
        Restaurant: "Delicious Food • Great Ambience",
        Cafe: "Brewed To Perfection",
        Fashion: "Trendy Styles • New Season",
        Photography: "Professional • Creative • Timeless",
        Resort: "Luxury • Escape • Relax",
        Fitness: "GET FIT • STAY STRONG",
        Beauty: "Pamper Yourself • Look Your Best",
        Auto: "Expert Repairs • Honest Service",
        Grocery: "Fresh • Organic • Local",
        "Real Estate": "Find A Place To Call Home",
        Travel: "Explore • Discover • Experience",
        Education: "Learn • Grow • Succeed"
    };

    return taglines[type] || "Professional Business";
}