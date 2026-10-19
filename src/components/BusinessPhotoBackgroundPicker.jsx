
import React, { useMemo, useState } from "react";
import {
    FaSearch,
    FaTimes,
    FaCheck,
    FaImages
} from "react-icons/fa";

import {
    BUSINESS_PHOTO_BACKGROUNDS,
    BUSINESS_PHOTO_CATEGORIES
} from "../data/businessPhotoBackgrounds";

export default function BusinessPhotoBackgroundPicker({
    onSelect,
    onClose
}) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedId, setSelectedId] = useState(null);

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();

        return BUSINESS_PHOTO_BACKGROUNDS.filter(item => {
            const categoryMatch =
                category === "All" || item.category === category;

            const searchMatch =
                !query ||
                item.name.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.tags.some(tag => tag.includes(query));

            return categoryMatch && searchMatch;
        });
    }, [search, category]);

    const styles = {
        overlay: {
            position: "fixed",
            inset: 0,
            zIndex: 10001,
            background: "rgba(8, 15, 30, .78)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16
        },
        modal: {
            width: "min(1180px, 96vw)",
            height: "min(820px, 94vh)",
            background: "#fff",
            borderRadius: 18,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            color: "#172033",
            boxShadow: "0 25px 90px rgba(0,0,0,.3)"
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 22px",
            borderBottom: "1px solid #e5e7eb",
            gap: 12
        },
        categories: {
            display: "flex",
            gap: 8,
            overflowX: "auto",
            padding: "12px 18px",
            borderBottom: "1px solid #e5e7eb"
        },
        grid: {
            flex: 1,
            overflowY: "auto",
            padding: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            gap: 16,
            alignContent: "start"
        }
    };

    return (
        <div style={styles.overlay} onMouseDown={e => {
            if (e.target === e.currentTarget) onClose?.();
        }}>
            <section style={styles.modal}>
                <header style={styles.header}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <FaImages size={25} color="#6755e8" />
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 800 }}>
                                Business Photo Backgrounds
                            </div>
                            <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
                                144 photo templates · 12 business categories
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close photo backgrounds"
                        style={{
                            width: 38,
                            height: 38,
                            border: "1px solid #e2e8f0",
                            borderRadius: 10,
                            background: "#f8fafc",
                            cursor: "pointer"
                        }}
                    >
                        <FaTimes />
                    </button>
                </header>

                <div style={{ padding: 16, background: "#f8fafc" }}>
                    <div style={{ position: "relative" }}>
                        <FaSearch style={{
                            position: "absolute",
                            left: 14,
                            top: 14,
                            color: "#94a3b8"
                        }} />

                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search business photo backgrounds..."
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                                height: 44,
                                padding: "0 14px 0 40px",
                                border: "1px solid #dbe2ea",
                                borderRadius: 10,
                                outlineColor: "#6755e8",
                                background: "#fff",
                                color: "#172033"
                            }}
                        />
                    </div>
                </div>

                <nav style={styles.categories}>
                    {BUSINESS_PHOTO_CATEGORIES.map(item => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setCategory(item)}
                            style={{
                                flexShrink: 0,
                                padding: "9px 13px",
                                borderRadius: 9,
                                border: "1px solid",
                                borderColor: category === item ? "#6755e8" : "#e2e8f0",
                                background: category === item ? "#6755e8" : "#fff",
                                color: category === item ? "#fff" : "#475569",
                                fontWeight: 650,
                                cursor: "pointer",
                                fontSize: 12
                            }}
                        >
                            {item}
                            {item !== "All" && (
                                <span> · 12</span>
                            )}
                        </button>
                    ))}
                </nav>

                <main style={styles.grid}>
                    {filtered.map(item => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedId(item.id)}
                            onDoubleClick={() => onSelect?.(item)}
                            style={{
                                textAlign: "left",
                                padding: 0,
                                borderRadius: 12,
                                overflow: "hidden",
                                border: selectedId === item.id
                                    ? "3px solid #6755e8"
                                    : "1px solid #e2e8f0",
                                background: "#fff",
                                cursor: "pointer",
                                minWidth: 0
                            }}
                            title="Select, then click Use Background"
                        >
                            <div style={{
                                aspectRatio: "1 / 1",
                                position: "relative",
                                background: "#e2e8f0",
                                overflow: "hidden"
                            }}>
                                <img
                                    src={item.src}
                                    alt={`${item.category} photo background ${item.name}`}
                                    loading="lazy"
                                    crossOrigin="anonymous"
                                    onError={e => {
                                        e.currentTarget.style.display = "none";
                                        e.currentTarget.parentElement.style.background =
                                            "linear-gradient(135deg,#dbeafe,#ede9fe)";
                                    }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                />

                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: item.layout === "left"
                                        ? "linear-gradient(90deg,rgba(10,15,25,.10),transparent 75%)"
                                        : "linear-gradient(270deg,rgba(10,15,25,.10),transparent 75%)",
                                    pointerEvents: "none"
                                }} />

                                {selectedId === item.id && (
                                    <span style={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        width: 27,
                                        height: 27,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: "50%",
                                        background: "#6755e8",
                                        color: "#fff"
                                    }}>
                                        <FaCheck />
                                    </span>
                                )}
                            </div>

                            <div style={{ padding: "10px 11px" }}>
                                <div style={{
                                    fontSize: 13,
                                    fontWeight: 750,
                                    color: "#172033"
                                }}>
                                    {item.name}
                                </div>
                                <div style={{
                                    fontSize: 11,
                                    color: "#64748b",
                                    marginTop: 4
                                }}>
                                    {item.category}
                                </div>
                            </div>
                        </button>
                    ))}

                    {filtered.length === 0 && (
                        <p style={{ color: "#64748b" }}>
                            No backgrounds found. Try another search.
                        </p>
                    )}
                </main>

                <footer style={{
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    borderTop: "1px solid #e5e7eb"
                }}>
                    <span style={{ fontSize: 12, color: "#64748b" }}>
                        {filtered.length} backgrounds
                    </span>

                    <div style={{ display: "flex", gap: 10 }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: "11px 16px",
                                border: "1px solid #dbe2ea",
                                borderRadius: 9,
                                background: "#fff",
                                cursor: "pointer"
                            }}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            disabled={!selectedId}
                            onClick={() => {
                                const selected = BUSINESS_PHOTO_BACKGROUNDS.find(
                                    item => item.id === selectedId
                                );
                                if (selected) onSelect?.(selected);
                            }}
                            style={{
                                padding: "11px 18px",
                                border: 0,
                                borderRadius: 9,
                                background: selectedId ? "#6755e8" : "#cbd5e1",
                                color: "#fff",
                                fontWeight: 700,
                                cursor: selectedId ? "pointer" : "not-allowed"
                            }}
                        >
                            Use Background
                        </button>
                    </div>
                </footer>
            </section>
        </div>
    );
}
