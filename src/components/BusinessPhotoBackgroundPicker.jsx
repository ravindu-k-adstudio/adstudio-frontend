
// import React, { useMemo, useState } from "react";
// import {
//     FaSearch,
//     FaTimes,
//     FaCheck,
//     FaImages
// } from "react-icons/fa";

// import {
//     BUSINESS_PHOTO_BACKGROUNDS,
//     BUSINESS_PHOTO_CATEGORIES
// } from "../data/businessPhotoBackgrounds";

// export default function BusinessPhotoBackgroundPicker({
//     onSelect,
//     onClose
// }) {
//     const [search, setSearch] = useState("");
//     const [category, setCategory] = useState("All");
//     const [selectedId, setSelectedId] = useState(null);

//     const filtered = useMemo(() => {
//         const query = search.trim().toLowerCase();

//         return BUSINESS_PHOTO_BACKGROUNDS.filter(item => {
//             const categoryMatch =
//                 category === "All" || item.category === category;

//             const searchMatch =
//                 !query ||
//                 item.name.toLowerCase().includes(query) ||
//                 item.category.toLowerCase().includes(query) ||
//                 item.tags.some(tag => tag.includes(query));

//             return categoryMatch && searchMatch;
//         });
//     }, [search, category]);

//     const styles = {
//         overlay: {
//             position: "fixed",
//             inset: 0,
//             zIndex: 10001,
//             background: "rgba(8, 15, 30, .78)",
//             backdropFilter: "blur(8px)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 16
//         },
//         modal: {
//             width: "min(1180px, 96vw)",
//             height: "min(820px, 94vh)",
//             background: "#fff",
//             borderRadius: 18,
//             display: "flex",
//             flexDirection: "column",
//             overflow: "hidden",
//             color: "#172033",
//             boxShadow: "0 25px 90px rgba(0,0,0,.3)"
//         },
//         header: {
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "18px 22px",
//             borderBottom: "1px solid #e5e7eb",
//             gap: 12
//         },
//         categories: {
//             display: "flex",
//             gap: 8,
//             overflowX: "auto",
//             padding: "12px 18px",
//             borderBottom: "1px solid #e5e7eb"
//         },
//         grid: {
//             flex: 1,
//             overflowY: "auto",
//             padding: 18,
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
//             gap: 16,
//             alignContent: "start"
//         }
//     };

//     return (
//         <div style={styles.overlay} onMouseDown={e => {
//             if (e.target === e.currentTarget) onClose?.();
//         }}>
//             <section style={styles.modal}>
//                 <header style={styles.header}>
//                     <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//                         <FaImages size={25} color="#6755e8" />
//                         <div>
//                             <div style={{ fontSize: 20, fontWeight: 800 }}>
//                                 Business Photo Backgrounds
//                             </div>
//                             <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
//                                 144 photo templates · 12 business categories
//                             </div>
//                         </div>
//                     </div>

//                     <button
//                         type="button"
//                         onClick={onClose}
//                         aria-label="Close photo backgrounds"
//                         style={{
//                             width: 38,
//                             height: 38,
//                             border: "1px solid #e2e8f0",
//                             borderRadius: 10,
//                             background: "#f8fafc",
//                             cursor: "pointer"
//                         }}
//                     >
//                         <FaTimes />
//                     </button>
//                 </header>

//                 <div style={{ padding: 16, background: "#f8fafc" }}>
//                     <div style={{ position: "relative" }}>
//                         <FaSearch style={{
//                             position: "absolute",
//                             left: 14,
//                             top: 14,
//                             color: "#94a3b8"
//                         }} />

//                         <input
//                             value={search}
//                             onChange={e => setSearch(e.target.value)}
//                             placeholder="Search business photo backgrounds..."
//                             style={{
//                                 width: "100%",
//                                 boxSizing: "border-box",
//                                 height: 44,
//                                 padding: "0 14px 0 40px",
//                                 border: "1px solid #dbe2ea",
//                                 borderRadius: 10,
//                                 outlineColor: "#6755e8",
//                                 background: "#fff",
//                                 color: "#172033"
//                             }}
//                         />
//                     </div>
//                 </div>

//                 <nav style={styles.categories}>
//                     {BUSINESS_PHOTO_CATEGORIES.map(item => (
//                         <button
//                             key={item}
//                             type="button"
//                             onClick={() => setCategory(item)}
//                             style={{
//                                 flexShrink: 0,
//                                 padding: "9px 13px",
//                                 borderRadius: 9,
//                                 border: "1px solid",
//                                 borderColor: category === item ? "#6755e8" : "#e2e8f0",
//                                 background: category === item ? "#6755e8" : "#fff",
//                                 color: category === item ? "#fff" : "#475569",
//                                 fontWeight: 650,
//                                 cursor: "pointer",
//                                 fontSize: 12
//                             }}
//                         >
//                             {item}
//                             {item !== "All" && (
//                                 <span> · 12</span>
//                             )}
//                         </button>
//                     ))}
//                 </nav>

//                 <main style={styles.grid}>
//                     {filtered.map(item => (
//                         <button
//                             key={item.id}
//                             type="button"
//                             onClick={() => setSelectedId(item.id)}
//                             onDoubleClick={() => onSelect?.(item)}
//                             style={{
//                                 textAlign: "left",
//                                 padding: 0,
//                                 borderRadius: 12,
//                                 overflow: "hidden",
//                                 border: selectedId === item.id
//                                     ? "3px solid #6755e8"
//                                     : "1px solid #e2e8f0",
//                                 background: "#fff",
//                                 cursor: "pointer",
//                                 minWidth: 0
//                             }}
//                             title="Select, then click Use Background"
//                         >
//                             <div style={{
//                                 aspectRatio: "1 / 1",
//                                 position: "relative",
//                                 background: "#e2e8f0",
//                                 overflow: "hidden"
//                             }}>
//                                 <img
//                                     src={item.src}
//                                     alt={`${item.category} photo background ${item.name}`}
//                                     loading="lazy"
//                                     crossOrigin="anonymous"
//                                     onError={e => {
//                                         e.currentTarget.style.display = "none";
//                                         e.currentTarget.parentElement.style.background =
//                                             "linear-gradient(135deg,#dbeafe,#ede9fe)";
//                                     }}
//                                     style={{
//                                         width: "100%",
//                                         height: "100%",
//                                         objectFit: "cover",
//                                         display: "block"
//                                     }}
//                                 />

//                                 <div style={{
//                                     position: "absolute",
//                                     inset: 0,
//                                     background: item.layout === "left"
//                                         ? "linear-gradient(90deg,rgba(10,15,25,.10),transparent 75%)"
//                                         : "linear-gradient(270deg,rgba(10,15,25,.10),transparent 75%)",
//                                     pointerEvents: "none"
//                                 }} />

//                                 {selectedId === item.id && (
//                                     <span style={{
//                                         position: "absolute",
//                                         top: 8,
//                                         right: 8,
//                                         width: 27,
//                                         height: 27,
//                                         display: "grid",
//                                         placeItems: "center",
//                                         borderRadius: "50%",
//                                         background: "#6755e8",
//                                         color: "#fff"
//                                     }}>
//                                         <FaCheck />
//                                     </span>
//                                 )}
//                             </div>

//                             <div style={{ padding: "10px 11px" }}>
//                                 <div style={{
//                                     fontSize: 13,
//                                     fontWeight: 750,
//                                     color: "#172033"
//                                 }}>
//                                     {item.name}
//                                 </div>
//                                 <div style={{
//                                     fontSize: 11,
//                                     color: "#64748b",
//                                     marginTop: 4
//                                 }}>
//                                     {item.category}
//                                 </div>
//                             </div>
//                         </button>
//                     ))}

//                     {filtered.length === 0 && (
//                         <p style={{ color: "#64748b" }}>
//                             No backgrounds found. Try another search.
//                         </p>
//                     )}
//                 </main>

//                 <footer style={{
//                     padding: 16,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     gap: 12,
//                     borderTop: "1px solid #e5e7eb"
//                 }}>
//                     <span style={{ fontSize: 12, color: "#64748b" }}>
//                         {filtered.length} backgrounds
//                     </span>

//                     <div style={{ display: "flex", gap: 10 }}>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             style={{
//                                 padding: "11px 16px",
//                                 border: "1px solid #dbe2ea",
//                                 borderRadius: 9,
//                                 background: "#fff",
//                                 cursor: "pointer"
//                             }}
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type="button"
//                             disabled={!selectedId}
//                             onClick={() => {
//                                 const selected = BUSINESS_PHOTO_BACKGROUNDS.find(
//                                     item => item.id === selectedId
//                                 );
//                                 if (selected) onSelect?.(selected);
//                             }}
//                             style={{
//                                 padding: "11px 18px",
//                                 border: 0,
//                                 borderRadius: 9,
//                                 background: selectedId ? "#6755e8" : "#cbd5e1",
//                                 color: "#fff",
//                                 fontWeight: 700,
//                                 cursor: selectedId ? "pointer" : "not-allowed"
//                             }}
//                         >
//                             Use Background
//                         </button>
//                     </div>
//                 </footer>
//             </section>
//         </div>
//     );
// }
//////////////////////////////////////////////


import React, { useMemo, useState } from "react";
import {
    BUSINESS_PHOTO_BACKGROUNDS,
    BUSINESS_PHOTO_CATEGORIES,
} from "../data/businessPhotoBackgrounds";

const overlayColors = {
    light: "rgba(255,255,255,0.96)",
    dark: "rgba(10,12,18,0.90)",
    warm: "rgba(255,246,231,0.95)",
    cool: "rgba(235,245,255,0.95)",
    soft: "rgba(255,255,255,0.88)",
    minimal: "rgba(255,255,255,0.98)",
};

function getPreviewStyle(item) {
    const gradient =
        item.layout === "left"
            ? `linear-gradient(90deg, ${overlayColors[item.overlay]} 0%, ${overlayColors[item.overlay]} 35%, transparent 100%)`
            : `linear-gradient(270deg, ${overlayColors[item.overlay]} 0%, ${overlayColors[item.overlay]} 35%, transparent 100%)`;

    return {
        backgroundImage: `${gradient}, url("${item.src}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    };
}

export default function BusinessPhotoBackgroundPicker({
    isOpen,
    onClose,
    onApply,
}) {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const filteredBackgrounds = useMemo(() => {
        const query = search.trim().toLowerCase();

        return BUSINESS_PHOTO_BACKGROUNDS.filter((item) => {
            const matchesCategory =
                category === "All" || item.category === category;

            const searchableText = [
                item.name,
                item.category,
                ...item.tags,
            ]
                .join(" ")
                .toLowerCase();

            return matchesCategory && (!query || searchableText.includes(query));
        });
    }, [category, search]);

    if (!isOpen) return null;

    const selectedBackground =
        BUSINESS_PHOTO_BACKGROUNDS.find((item) => item.id === selectedId) ||
        null;

    const handleApply = () => {
        if (!selectedBackground) return;

        onApply?.({
            ...selectedBackground,
            type: "business-photo",
        });

        onClose?.();
    };

    return (
        <div style={styles.backdrop} onMouseDown={onClose}>
            <section
                style={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label="Business photo backgrounds"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <header style={styles.header}>
                    <div>
                        <h2 style={styles.heading}>Business Photo Backgrounds</h2>
                        <p style={styles.subtitle}>
                            Choose a photo layout with space for your text and promotions.
                        </p>
                    </div>

                    <button
                        type="button"
                        style={styles.closeButton}
                        onClick={onClose}
                        aria-label="Close background picker"
                    >
                        ×
                    </button>
                </header>

                <div style={styles.searchRow}>
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search backgrounds..."
                        style={styles.search}
                    />

                    <span style={styles.count}>
                        {filteredBackgrounds.length} backgrounds
                    </span>
                </div>

                <nav style={styles.categories} aria-label="Business categories">
                    {BUSINESS_PHOTO_CATEGORIES.map((name) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setCategory(name)}
                            style={{
                                ...styles.categoryButton,
                                ...(category === name ? styles.categoryActive : {}),
                            }}
                        >
                            {name === "All"
                                ? "All"
                                : BUSINESS_PHOTO_BACKGROUNDS.find(
                                    (item) => item.category === name,
                                )?.icon + " " + name}
                        </button>
                    ))}
                </nav>

                <div style={styles.grid}>
                    {filteredBackgrounds.map((item) => {
                        const isSelected = item.id === selectedId;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedId(item.id)}
                                aria-pressed={isSelected}
                                style={{
                                    ...styles.card,
                                    ...(isSelected ? styles.cardSelected : {}),
                                }}
                            >
                                <div style={styles.preview} className="business-photo-preview">
                                    <div style={getPreviewStyle(item)} className="business-photo-art" />

                                    <span style={styles.photoLabel}>
                                        {item.layout === "left" ? "PHOTO LEFT" : "PHOTO RIGHT"}
                                    </span>

                                    {isSelected && <span style={styles.check}>✓</span>}
                                </div>

                                <span style={styles.cardName}>{item.name}</span>
                                <span style={styles.cardCategory}>{item.category}</span>
                            </button>
                        );
                    })}

                    {filteredBackgrounds.length === 0 && (
                        <div style={styles.empty}>
                            No backgrounds match that search. Try another keyword or category.
                        </div>
                    )}
                </div>

                <footer style={styles.footer}>
                    <span style={styles.selectionText}>
                        {selectedBackground
                            ? `Selected: ${selectedBackground.name}`
                            : "Select a background to continue"}
                    </span>

                    <div style={styles.footerActions}>
                        <button
                            type="button"
                            style={styles.cancelButton}
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.applyButton,
                                opacity: selectedBackground ? 1 : 0.5,
                                cursor: selectedBackground ? "pointer" : "not-allowed",
                            }}
                            disabled={!selectedBackground}
                            onClick={handleApply}
                        >
                            Apply Background
                        </button>
                    </div>
                </footer>
            </section>

            <style>{`
        .business-photo-art {
          position: absolute;
          inset: 0;
          transition: transform 180ms ease;
        }

        .business-photo-preview {
          overflow: hidden;
        }

        .business-photo-preview:hover .business-photo-art {
          transform: scale(1.04);
        }

        @media (max-width: 700px) {
          .business-photo-preview {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
        </div>
    );
}

const styles = {
    backdrop: {
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(15, 23, 42, 0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    modal: {
        background: "#fff",
        color: "#172033",
        width: "min(1180px, 100%)",
        maxHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
    },
    header: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 24px 14px",
        borderBottom: "1px solid #e8ebf0",
    },
    heading: { margin: 0, fontSize: 21, fontWeight: 750 },
    subtitle: { margin: "6px 0 0", color: "#687386", fontSize: 13 },
    closeButton: {
        border: 0,
        background: "#f1f3f7",
        borderRadius: 9,
        width: 36,
        height: 36,
        fontSize: 26,
        cursor: "pointer",
        flexShrink: 0,
    },
    searchRow: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 24px",
    },
    search: {
        minWidth: 0,
        flex: 1,
        border: "1px solid #d9deea",
        borderRadius: 9,
        padding: "11px 13px",
        fontSize: 14,
        outlineColor: "#5965e8",
    },
    count: { color: "#687386", fontSize: 12, whiteSpace: "nowrap" },
    categories: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        padding: "0 24px 16px",
        borderBottom: "1px solid #e8ebf0",
    },
    categoryButton: {
        border: "1px solid #dfe3eb",
        background: "#fff",
        color: "#344054",
        borderRadius: 20,
        padding: "7px 12px",
        fontSize: 12,
        cursor: "pointer",
    },
    categoryActive: {
        background: "#e9ecff",
        color: "#3e49c9",
        borderColor: "#9ba4ff",
        fontWeight: 700,
    },
    grid: {
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
        gap: 14,
        overflowY: "auto",
        minHeight: 180,
    },
    card: {
        textAlign: "left",
        padding: 6,
        border: "2px solid transparent",
        borderRadius: 12,
        background: "#f8f9fc",
        color: "#172033",
        cursor: "pointer",
        minWidth: 0,
    },
    cardSelected: {
        borderColor: "#5965e8",
        background: "#f0f1ff",
        boxShadow: "0 0 0 2px rgba(89,101,232,0.12)",
    },
    preview: {
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: 8,
        background: "#e6eaf1",
    },
    photoLabel: {
        position: "absolute",
        left: 8,
        bottom: 8,
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: 0.5,
        background: "rgba(255,255,255,0.9)",
        color: "#344054",
        padding: "4px 6px",
        borderRadius: 4,
    },
    check: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        color: "#fff",
        background: "#5965e8",
        fontWeight: 800,
    },
    cardName: {
        display: "block",
        fontSize: 12,
        fontWeight: 750,
        margin: "9px 4px 3px",
    },
    cardCategory: {
        display: "block",
        fontSize: 11,
        color: "#758095",
        margin: "0 4px 5px",
    },
    empty: {
        gridColumn: "1 / -1",
        textAlign: "center",
        padding: 40,
        color: "#687386",
    },
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        padding: "14px 24px",
        borderTop: "1px solid #e8ebf0",
        background: "#fbfcfe",
    },
    selectionText: { fontSize: 12, color: "#687386" },
    footerActions: { display: "flex", gap: 8 },
    cancelButton: {
        border: "1px solid #d9deea",
        background: "#fff",
        color: "#344054",
        borderRadius: 8,
        padding: "10px 14px",
        fontWeight: 650,
        cursor: "pointer",
    },
    applyButton: {
        border: 0,
        background: "#5965e8",
        color: "#fff",
        borderRadius: 8,
        padding: "10px 16px",
        fontWeight: 700,
    },
};
