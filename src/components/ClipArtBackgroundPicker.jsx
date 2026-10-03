import React, { useMemo, useState } from "react";
import {
    FaSearch,
    FaTimes,
    FaCheck,
    FaLayerGroup
} from "react-icons/fa";

import {
    CLIP_ART_BACKGROUNDS,
    CLIP_ART_CATEGORIES
} from "../data/clipArtBackgrounds";


export default function ClipArtBackgroundPicker({
    onSelect,
    onClose
}) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedId, setSelectedId] = useState(null);


    const filteredBackgrounds = useMemo(() => {

        const query = search.trim().toLowerCase();

        return CLIP_ART_BACKGROUNDS.filter(item => {

            const categoryMatch =
                category === "All" ||
                item.category === category;

            if (!categoryMatch) return false;

            if (!query) return true;

            return (
                item.name.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.tags.some(tag =>
                    tag.toLowerCase().includes(query)
                )
            );
        });

    }, [search, category]);


    const handleSelect = item => {

        setSelectedId(item.id);

        onSelect(item);

    };


    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                padding: 20,

                background:
                    "rgba(2,8,23,0.72)",

                backdropFilter: "blur(8px)"
            }}
        >

            <div
                style={{
                    width: "min(1100px, 96vw)",
                    height: "min(760px, 92vh)",

                    background: "#ffffff",

                    borderRadius: 20,

                    overflow: "hidden",

                    display: "flex",
                    flexDirection: "column",

                    boxShadow:
                        "0 30px 100px rgba(0,0,0,0.35)"
                }}
            >

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div
                    style={{
                        padding: "18px 22px",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",

                        borderBottom:
                            "1px solid #e5e7eb"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        }}
                    >

                        <div
                            style={{
                                width: 42,
                                height: 42,

                                borderRadius: 12,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                background:
                                    "linear-gradient(135deg,#2563eb,#7c3aed)",

                                color: "#ffffff"
                            }}
                        >
                            <FaLayerGroup size={19} />
                        </div>

                        <div>

                            <div
                                style={{
                                    fontSize: 19,
                                    fontWeight: 800,
                                    color: "#0b1f33"
                                }}
                            >
                                Background Clip Art
                            </div>

                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#64748b",
                                    marginTop: 2
                                }}
                            >
                                Choose a background for your advertisement
                            </div>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            width: 38,
                            height: 38,

                            borderRadius: 10,

                            border: "1px solid #e2e8f0",

                            background: "#f8fafc",

                            color: "#475569",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            cursor: "pointer"
                        }}
                    >
                        <FaTimes />
                    </button>

                </div>


                {/* =====================================================
                    SEARCH + CATEGORIES
                ===================================================== */}

                <div
                    style={{
                        padding: "14px 20px",

                        borderBottom:
                            "1px solid #e5e7eb",

                        background: "#f8fafc"
                    }}
                >

                    <div
                        style={{
                            position: "relative",
                            marginBottom: 12
                        }}
                    >

                        <FaSearch
                            style={{
                                position: "absolute",
                                left: 13,
                                top: "50%",
                                transform:
                                    "translateY(-50%)",
                                color: "#94a3b8"
                            }}
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={e =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search backgrounds..."
                            style={{
                                width: "100%",
                                height: 42,

                                padding:
                                    "0 14px 0 38px",

                                border:
                                    "1px solid #cbd5e1",

                                borderRadius: 10,

                                outline: "none",

                                background: "#ffffff",

                                color: "#0f172a",

                                fontSize: 13
                            }}
                        />

                    </div>


                    <div
                        style={{
                            display: "flex",
                            gap: 8,

                            overflowX: "auto",

                            paddingBottom: 2
                        }}
                    >

                        {CLIP_ART_CATEGORIES.map(item => {

                            const active =
                                category === item;

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() =>
                                        setCategory(item)
                                    }
                                    style={{
                                        flexShrink: 0,

                                        padding:
                                            "7px 13px",

                                        borderRadius: 999,

                                        border: active
                                            ? "1px solid #2563eb"
                                            : "1px solid #cbd5e1",

                                        background: active
                                            ? "#2563eb"
                                            : "#ffffff",

                                        color: active
                                            ? "#ffffff"
                                            : "#475569",

                                        fontSize: 12,
                                        fontWeight: 600,

                                        cursor: "pointer"
                                    }}
                                >
                                    {item}
                                </button>
                            );

                        })}

                    </div>

                </div>


                {/* =====================================================
                    GRID
                ===================================================== */}

                <div
                    style={{
                        flex: 1,

                        overflowY: "auto",

                        padding: 20
                    }}
                >

                    {filteredBackgrounds.length === 0 ? (

                        <div
                            style={{
                                minHeight: 300,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                color: "#64748b",

                                fontSize: 14
                            }}
                        >
                            No backgrounds found.
                        </div>

                    ) : (

                        <div
                            style={{
                                display: "grid",

                                gridTemplateColumns:
                                    "repeat(auto-fill,minmax(170px,1fr))",

                                gap: 16
                            }}
                        >

                            {filteredBackgrounds.map(item => {

                                const selected =
                                    selectedId === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() =>
                                            handleSelect(item)
                                        }
                                        style={{
                                            position: "relative",

                                            padding: 0,

                                            border:
                                                selected
                                                    ? "3px solid #2563eb"
                                                    : "1px solid #e2e8f0",

                                            borderRadius: 14,

                                            overflow: "hidden",

                                            background: "#ffffff",

                                            cursor: "pointer",

                                            boxShadow:
                                                selected
                                                    ? "0 0 0 3px rgba(37,99,235,.15)"
                                                    : "0 5px 18px rgba(15,23,42,.08)",

                                            transition:
                                                "transform .18s ease, box-shadow .18s ease"
                                        }}
                                    >

                                        <img
                                            src={item.src}
                                            alt={item.name}
                                            draggable={false}
                                            style={{
                                                display: "block",

                                                width: "100%",
                                                aspectRatio: "1 / 1",

                                                objectFit: "cover"
                                            }}
                                        />


                                        <div
                                            style={{
                                                padding:
                                                    "9px 10px",

                                                background:
                                                    "#ffffff",

                                                textAlign: "left"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: "#0f172a"
                                                }}
                                            >
                                                {item.name}
                                            </div>

                                            <div
                                                style={{
                                                    marginTop: 3,

                                                    fontSize: 10,

                                                    color: "#64748b"
                                                }}
                                            >
                                                {item.category}
                                            </div>

                                        </div>


                                        {selected && (
                                            <div
                                                style={{
                                                    position: "absolute",

                                                    top: 9,
                                                    right: 9,

                                                    width: 28,
                                                    height: 28,

                                                    borderRadius: "50%",

                                                    background:
                                                        "#2563eb",

                                                    color:
                                                        "#ffffff",

                                                    display: "flex",
                                                    alignItems:
                                                        "center",
                                                    justifyContent:
                                                        "center"
                                                }}
                                            >
                                                <FaCheck size={12} />
                                            </div>
                                        )}

                                    </button>
                                );

                            })}

                        </div>

                    )}

                </div>


                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <div
                    style={{
                        padding:
                            "12px 20px",

                        borderTop:
                            "1px solid #e5e7eb",

                        background: "#f8fafc",

                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <span
                        style={{
                            fontSize: 11,
                            color: "#64748b"
                        }}
                    >
                        {filteredBackgrounds.length} backgrounds
                    </span>


                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            padding:
                                "8px 15px",

                            borderRadius: 9,

                            border:
                                "1px solid #cbd5e1",

                            background:
                                "#ffffff",

                            color: "#475569",

                            fontSize: 12,

                            fontWeight: 600,

                            cursor: "pointer"
                        }}
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>
    );
}