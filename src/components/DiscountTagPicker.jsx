import React, { useMemo, useState } from "react";

const PALETTES = [
    { fill: "#dc2626", text: "#ffffff", border: "#991b1b" },
    { fill: "#f97316", text: "#ffffff", border: "#c2410c" },
    { fill: "#facc15", text: "#7f1d1d", border: "#eab308" },
    { fill: "#16a34a", text: "#ffffff", border: "#166534" },
    { fill: "#2563eb", text: "#ffffff", border: "#1e40af" },
    { fill: "#7c3aed", text: "#ffffff", border: "#5b21b6" },
    { fill: "#ec4899", text: "#ffffff", border: "#be185d" },
    { fill: "#111827", text: "#ffffff", border: "#030712" },
    { fill: "#ffffff", text: "#dc2626", border: "#dc2626" },
];

const VARIANTS = [
    { shape: "burst", category: "Discount", label: "Starburst" },
    { shape: "circle", category: "Discount", label: "Round badge" },
    { shape: "rounded", category: "Sale", label: "Rounded badge" },
    { shape: "rectangle", category: "Sale", label: "Classic label" },
    { shape: "ribbon", category: "Ribbon", label: "Ribbon" },
    { shape: "bookmark", category: "Ribbon", label: "Bookmark" },
    { shape: "hexagon", category: "Special", label: "Hexagon" },
    { shape: "ticket", category: "Special", label: "Ticket" },
];

const WORDINGS = [
    "50% OFF",
    "SALE",
    "NEW",
    "SPECIAL OFFER",
    "BUY 1 GET 1",
    "20% OFF",
    "30% OFF",
    "40% OFF",
    "60% OFF",
    "70% OFF",
    "80% OFF",
    "LIMITED TIME",
];

const DISCOUNT_TAGS = VARIANTS.flatMap((variant, shapeIndex) =>
    PALETTES.slice(0, 9).map((palette, colorIndex) => ({
        id: `tag-${shapeIndex}-${colorIndex}`,
        name: `${variant.label} ${colorIndex + 1}`,
        category: variant.category,
        shape: variant.shape,
        fill: palette.fill,
        textColor: palette.text,
        borderColor: palette.border,
        text: WORDINGS[(shapeIndex * 3 + colorIndex) % WORDINGS.length],
    }))
);

function TagPreview({ tag, fill, textColor }) {
    const common = {
        fill,
        stroke: tag.borderColor,
        strokeWidth: 2,
        strokeLinejoin: "round",
    };


    return (
        <svg viewBox="0 0 140 100" width="100%" height="100%">
            {tag.shape === "burst" && (
                <polygon
                    points={Array.from({ length: 24 }, (_, i) => {
                        const a = (i * Math.PI * 2) / 24 - Math.PI / 2;
                        const r = i % 2 === 0 ? 43 : 35;
                        return `${70 + Math.cos(a) * r},${50 + Math.sin(a) * r}`;
                    }).join(" ")}
                    {...common}
                />
            )}
            {tag.shape === "circle" && (
                <circle cx="70" cy="50" r="40" {...common} />
            )}
            {tag.shape === "rounded" && (
                <rect x="18" y="22" width="104" height="56" rx="16" {...common} />
            )}
            {tag.shape === "rectangle" && (
                <rect x="12" y="27" width="116" height="46" rx="3" {...common} />
            )}
            {tag.shape === "ribbon" && (
                <>
                    <path d="M20 20 H120 V76 L105 67 L90 76 L75 67 L60 76 L45 67 L30 76 L20 67 Z" {...common} />
                </>
            )}
            {tag.shape === "bookmark" && (
                <path d="M43 12 H97 V88 L70 72 L43 88 Z" {...common} />
            )}
            {tag.shape === "hexagon" && (
                <polygon points="35,14 105,14 128,50 105,86 35,86 12,50" {...common} />
            )}
            {tag.shape === "ticket" && (
                <path d="M16 25 H124 V40 Q111 50 124 60 V75 H16 V60 Q29 50 16 40 Z" {...common} />
            )}
            <text
                x="70"
                y="54"
                fill={textColor}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={tag.text.length > 12 ? 10 : tag.text.length > 8 ? 13 : 17}
                fontWeight="900"
                fontFamily="Arial, sans-serif"
            >
                {tag.text}
            </text>
        </svg>
    );


}

export default function DiscountTagPicker({ onClose, onSelect }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [fill, setFill] = useState("#dc2626");
    const [textColor, setTextColor] = useState("#ffffff");
    const [customText, setCustomText] = useState("50% OFF");


    const categories = ["All", "Discount", "Sale", "Ribbon", "Special"];

    const filteredTags = useMemo(() => {
        const query = search.trim().toLowerCase();

        return DISCOUNT_TAGS.filter(tag =>
            (category === "All" || tag.category === category) &&
            (!query ||
                tag.name.toLowerCase().includes(query) ||
                tag.text.toLowerCase().includes(query) ||
                tag.category.toLowerCase().includes(query))
        );
    }, [search, category]);

    const chooseTag = tag => {
        onSelect({
            ...tag,
            id: `discount-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            fill,
            textColor,
            text: customText.trim() || tag.text,
            x: 100,
            y: 100,
            width: 150,
            height: 100,
            rotation: 0,
        });
    };

    return (
        <div style={overlay}>
            <div style={modal}>
                <header style={header}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 21, color: "#0f172a" }}>
                            Sale & Promotion Tags
                        </h2>
                        <p style={{ margin: "5px 0 0", color: "#64748b", fontSize: 13 }}>
                            {DISCOUNT_TAGS.length} editable tag designs
                        </p>
                    </div>
                    <button onClick={onClose} style={closeButton} aria-label="Close tag library">
                        ✕
                    </button>
                </header>

                <div style={controls}>
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search sale, discount, ribbon..."
                        style={searchInput}
                    />

                    <div style={categoryRow}>
                        {categories.map(item => (
                            <button
                                key={item}
                                onClick={() => setCategory(item)}
                                style={{
                                    ...categoryButton,
                                    background: category === item ? "#0b1f33" : "#f1f5f9",
                                    color: category === item ? "#ffffff" : "#334155",
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div style={customization}>
                        <label style={field}>
                            Tag text
                            <input
                                value={customText}
                                onChange={e => setCustomText(e.target.value)}
                                maxLength={40}
                                style={textInput}
                                placeholder="e.g. 50% OFF"
                            />
                        </label>

                        <label style={colorField}>
                            Tag color
                            <input
                                type="color"
                                value={fill}
                                onChange={e => setFill(e.target.value)}
                            />
                        </label>

                        <label style={colorField}>
                            Text color
                            <input
                                type="color"
                                value={textColor}
                                onChange={e => setTextColor(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div style={grid}>
                    {filteredTags.map(tag => (
                        <button
                            key={tag.id}
                            onClick={() => chooseTag(tag)}
                            title={`Add ${tag.name}`}
                            style={tagCard}
                        >
                            <div style={{ height: 100, width: "100%" }}>
                                <TagPreview tag={tag} fill={fill} textColor={textColor} />
                            </div>
                            <span style={tagName}>{tag.name}</span>
                            <span style={tagCategory}>{tag.category}</span>
                        </button>
                    ))}
                    {filteredTags.length === 0 && (
                        <p style={{ color: "#64748b", gridColumn: "1 / -1" }}>
                            No matching tags. Try another search.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );


}

const overlay = {
    position: "fixed",
    inset: 0,
    zIndex: 10000,
    background: "rgba(2, 6, 23, 0.72)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
};

const modal = {
    width: "min(960px, 100%)",
    maxHeight: "94dvh",
    background: "#ffffff",
    borderRadius: 18,
    boxShadow: "0 25px 80px rgba(0,0,0,.3)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
};

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 20px",
    borderBottom: "1px solid #e2e8f0",
};

const closeButton = {
    border: 0,
    borderRadius: 9,
    width: 38,
    height: 38,
    cursor: "pointer",
    background: "#f1f5f9",
    fontSize: 18,
};

const controls = {
    padding: 16,
    display: "grid",
    gap: 12,
    borderBottom: "1px solid #e2e8f0",
};

const searchInput = {
    width: "100%",
    padding: "11px 13px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    boxSizing: "border-box",
    fontSize: 14,
};

const categoryRow = {
    display: "flex",
    gap: 7,
    flexWrap: "wrap",
};

const categoryButton = {
    border: 0,
    borderRadius: 20,
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 700,
};

const customization = {
    display: "flex",
    gap: 16,
    alignItems: "end",
    flexWrap: "wrap",
};

const field = {
    display: "grid",
    gap: 5,
    color: "#475569",
    fontSize: 12,
    fontWeight: 700,
    flex: "1 1 200px",
};

const textInput = {
    minWidth: 0,
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: 8,
    padding: "9px 10px",
    fontSize: 14,
};

const colorField = {
    display: "flex",
    gap: 8,
    alignItems: "center",
    color: "#475569",
    fontSize: 12,
    fontWeight: 700,
};

const grid = {
    padding: 16,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))",
    gap: 12,
    overflowY: "auto",
};

const tagCard = {
    minWidth: 0,
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: 8,
    background: "#ffffff",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
};

const tagName = {
    color: "#0f172a",
    fontSize: 12,
    fontWeight: 800,
    textAlign: "center",
};

const tagCategory = {
    color: "#64748b",
    fontSize: 11,
};
