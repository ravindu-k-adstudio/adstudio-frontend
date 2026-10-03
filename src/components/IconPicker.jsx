import React, {
    useMemo,
    useState
} from "react";

import {
    FaSearch,
    FaTimes,
    FaCheck,
    FaIcons
} from "react-icons/fa";

import {
    ICON_LIBRARY,
    getIconSearchText
} from "../data/iconLibrary";


export default function IconPicker({
    onClose,
    onSelect
}) {

    const [
        search,
        setSearch
    ] = useState("");

    const [
        selectedColor,
        setSelectedColor
    ] = useState("#0b1f33");


    const filteredIcons = useMemo(() => {

        const query = search
            .trim()
            .toLowerCase();

        if (!query) {
            return ICON_LIBRARY.slice(
                0,
                160
            );
        }

        return ICON_LIBRARY
            .filter(icon =>
                getIconSearchText(icon)
                    .includes(query)
            )
            .slice(0, 240);

    }, [search]);


    const handleSelect = icon => {

        onSelect({
            name: icon.name,
            color: selectedColor
        });
    };


    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                padding: 20,

                background:
                    "rgba(3,10,20,0.68)",

                backdropFilter:
                    "blur(8px)"
            }}
            onMouseDown={e => {
                if (
                    e.target === e.currentTarget
                ) {
                    onClose();
                }
            }}
        >

            <div
                style={{
                    width: "min(940px, 96vw)",
                    height: "min(700px, 90vh)",

                    display: "flex",
                    flexDirection: "column",

                    overflow: "hidden",

                    borderRadius: 22,

                    background:
                        "linear-gradient(145deg,#ffffff,#f8fafc)",

                    border:
                        "1px solid rgba(255,255,255,0.7)",

                    boxShadow:
                        "0 30px 100px rgba(0,0,0,0.35)"
                }}
            >

                {/* HEADER */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                            "space-between",

                        gap: 16,

                        padding:
                            "18px 22px",

                        borderBottom:
                            "1px solid #e2e8f0"
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

                                display: "flex",
                                alignItems: "center",
                                justifyContent:
                                    "center",

                                borderRadius: 12,

                                background:
                                    "#0b1f33",

                                color: "#ffffff",

                                fontSize: 19
                            }}
                        >
                            <FaIcons />
                        </div>

                        <div>
                            <div
                                style={{
                                    fontSize: 17,
                                    fontWeight: 700,
                                    color: "#0f172a"
                                }}
                            >
                                Add Icon
                            </div>

                            <div
                                style={{
                                    fontSize: 12,
                                    color: "#64748b",
                                    marginTop: 2
                                }}
                            >
                                Search and add an icon
                                to your design
                            </div>
                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            width: 36,
                            height: 36,

                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                                "center",

                            borderRadius: 10,

                            border:
                                "1px solid #e2e8f0",

                            background: "#ffffff",

                            color: "#64748b",

                            cursor: "pointer",

                            fontSize: 16
                        }}
                    >
                        <FaTimes />
                    </button>

                </div>


                {/* SEARCH + COLOR */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",

                        gap: 12,

                        padding:
                            "15px 20px",

                        borderBottom:
                            "1px solid #e2e8f0"
                    }}
                >

                    <div
                        style={{
                            position: "relative",
                            flex: 1
                        }}
                    >

                        <FaSearch
                            style={{
                                position:
                                    "absolute",

                                left: 14,
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
                                setSearch(
                                    e.target.value
                                )
                            }
                            autoFocus
                            placeholder="Search icons — fork, knife, spoon, food, phone, camera..."
                            style={{
                                width: "100%",
                                height: 44,

                                boxSizing:
                                    "border-box",

                                padding:
                                    "0 14px 0 40px",

                                borderRadius: 12,

                                border:
                                    "1px solid #cbd5e1",

                                outline: "none",

                                background:
                                    "#ffffff",

                                color: "#0f172a",

                                fontSize: 13
                            }}
                        />

                    </div>


                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,

                            padding:
                                "6px 10px",

                            borderRadius: 10,

                            border:
                                "1px solid #cbd5e1",

                            background:
                                "#ffffff"
                        }}
                    >

                        <span
                            style={{
                                fontSize: 11,
                                color: "#64748b",
                                whiteSpace:
                                    "nowrap"
                            }}
                        >
                            Color
                        </span>

                        <input
                            type="color"
                            value={selectedColor}
                            onChange={e =>
                                setSelectedColor(
                                    e.target.value
                                )
                            }
                            title="Icon color"
                            style={{
                                width: 32,
                                height: 32,

                                padding: 0,

                                border: 0,

                                background:
                                    "transparent",

                                cursor: "pointer"
                            }}
                        />

                    </div>

                </div>


                {/* RESULT COUNT */}

                <div
                    style={{
                        padding:
                            "11px 20px 7px",

                        fontSize: 11,
                        fontWeight: 600,

                        color: "#64748b"
                    }}
                >
                    {search
                        ? `${filteredIcons.length} matching icons`
                        : `Showing ${filteredIcons.length} icons — use search to find more`
                    }
                </div>


                {/* ICON GRID */}

                <div
                    style={{
                        flex: 1,

                        overflowY: "auto",

                        padding:
                            "8px 20px 22px",

                        display: "grid",

                        gridTemplateColumns:
                            "repeat(auto-fill,minmax(92px,1fr))",

                        gap: 10,

                        alignContent:
                            "start"
                    }}
                >

                    {filteredIcons.map(icon => {

                        const IconComponent =
                            icon.Component;

                        return (
                            <button
                                type="button"
                                key={icon.name}
                                onClick={() =>
                                    handleSelect(
                                        icon
                                    )
                                }
                                title={
                                    icon.label
                                }
                                style={{
                                    minHeight: 86,

                                    display: "flex",
                                    flexDirection:
                                        "column",
                                    alignItems:
                                        "center",
                                    justifyContent:
                                        "center",

                                    gap: 8,

                                    borderRadius: 13,

                                    border:
                                        "1px solid #e2e8f0",

                                    background:
                                        "#ffffff",

                                    color:
                                        selectedColor,

                                    cursor:
                                        "pointer",

                                    transition:
                                        "all 0.15s ease"
                                }}

                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor =
                                        "#0ea5e9";

                                    e.currentTarget.style.background =
                                        "#f0f9ff";

                                    e.currentTarget.style.transform =
                                        "translateY(-2px)";
                                }}

                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor =
                                        "#e2e8f0";

                                    e.currentTarget.style.background =
                                        "#ffffff";

                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                }}
                            >

                                <IconComponent
                                    size={30}
                                />

                                <span
                                    style={{
                                        width:
                                            "100%",

                                        padding:
                                            "0 5px",

                                        overflow:
                                            "hidden",

                                        textOverflow:
                                            "ellipsis",

                                        whiteSpace:
                                            "nowrap",

                                        textAlign:
                                            "center",

                                        fontSize: 10,

                                        color:
                                            "#475569"
                                    }}
                                >
                                    {
                                        icon.label
                                    }
                                </span>

                            </button>
                        );
                    })}


                    {filteredIcons.length === 0 && (
                        <div
                            style={{
                                gridColumn:
                                    "1 / -1",

                                display: "flex",
                                flexDirection:
                                    "column",

                                alignItems:
                                    "center",
                                justifyContent:
                                    "center",

                                minHeight: 260,

                                color: "#64748b"
                            }}
                        >

                            <FaSearch
                                size={34}
                                style={{
                                    marginBottom: 12,
                                    opacity: 0.35
                                }}
                            />

                            <div
                                style={{
                                    fontWeight: 600,
                                    color:
                                        "#334155"
                                }}
                            >
                                No icons found
                            </div>

                            <div
                                style={{
                                    fontSize: 12,
                                    marginTop: 4
                                }}
                            >
                                Try another search
                            </div>

                        </div>
                    )}

                </div>


                {/* FOOTER */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                            "space-between",

                        padding:
                            "12px 20px",

                        borderTop:
                            "1px solid #e2e8f0",

                        background:
                            "#f8fafc"
                    }}
                >

                    <div
                        style={{
                            fontSize: 11,
                            color: "#64748b"
                        }}
                    >
                        Select an icon to place it
                        on the canvas.
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            display: "flex",
                            alignItems:
                                "center",
                            gap: 7,

                            padding:
                                "8px 14px",

                            borderRadius: 9,

                            border:
                                "1px solid #cbd5e1",

                            background:
                                "#ffffff",

                            color: "#334155",

                            cursor: "pointer",

                            fontSize: 12,
                            fontWeight: 600
                        }}
                    >
                        <FaCheck />
                        Done
                    </button>

                </div>

            </div>

        </div>
    );
}