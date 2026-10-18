// import { FaPen, FaTrash, FaCopy } from "react-icons/fa";

// export default function FloatingToolbar({
//     element,
//     onDelete,
//     onEdit,
//     onDuplicate,
//     position,
//     activeSection
// }) {
//     if (!element || activeSection) return null;

//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 top: position.y,
//                 left: position.x,
//                 transform: "translate(-50%, -130%)",
//                 background: "#ffffff",
//                 borderRadius: 8,
//                 padding: "4px 6px",
//                 display: "flex",
//                 gap: 4,
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//                 zIndex: 9999
//             }}
//         >
//             <button onClick={onDuplicate} style={btnStyle}>
//                 <FaCopy size={10} />
//             </button>
//             <button onClick={onEdit} style={btnStyle}>
//                 <FaPen size={10} />
//             </button>

//             <button onClick={onDelete} style={btnStyle}>
//                 <FaTrash size={10} />
//             </button>
//         </div>
//     );
// }

// const btnStyle = {
//     background: "#1e3a8a", // dark blue
//     color: "#ffffff",
//     border: "none",
//     width: 26,
//     height: 26,
//     borderRadius: 6,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer"
// };

//////////////////////////////////


import { useEffect, useState } from "react";
import {
    FaPen,
    FaTrash,
    FaCopy,
    FaTimes
} from "react-icons/fa";

export default function FloatingToolbar({
    element,
    onDelete,
    onEdit,
    onDuplicate,
    position,
    activeSection,
    onClose
}) {
    const [isVisible, setIsVisible] = useState(true);

    // Show the toolbar again whenever a different element is selected.
    const elementKey = element?.id ?? element?._id ?? element;

    useEffect(() => {
        setIsVisible(true);
    }, [elementKey]);

    if (!element || !position || !isVisible) {
        return null;
    }

    const handleAction = (callback) => (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (typeof callback === "function") {
            callback();
        }
    };

    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setIsVisible(false);

        if (typeof onClose === "function") {
            onClose();
        }
    };

    return (
        <div
            className="adstudio-floating-toolbar"
            role="toolbar"
            aria-label="Selected element actions"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -130%)",
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: 6,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 11,
                boxShadow: "0 8px 26px rgba(15, 23, 42, 0.18)",
                zIndex: 9999,
                whiteSpace: "nowrap"
            }}
        >
            <button
                type="button"
                onClick={handleAction(onDuplicate)}
                style={btnStyle}
                title="Duplicate element"
                aria-label="Duplicate element"
            >
                <FaCopy size={13} />
            </button>

            {/* <button
                type="button"
                onClick={handleAction(onEdit)}
                style={{
                    ...btnStyle,
                    background: "#2563eb"
                }}
                title="Edit text / Open Word Art Library"
                aria-label="Edit text and open Word Art Library"
            >
                <FaPen size={13} />
            </button> */}

            <button
                type="button"
                onClick={handleAction(onDelete)}
                style={{
                    ...btnStyle,
                    background: "#dc2626"
                }}
                title="Delete element"
                aria-label="Delete element"
            >
                <FaTrash size={13} />
            </button>

            <span
                aria-hidden="true"
                style={{
                    width: 1,
                    height: 22,
                    background: "#e2e8f0",
                    margin: "0 2px"
                }}
            />

            <button
                type="button"
                onClick={handleClose}
                style={{
                    ...btnStyle,
                    background: "#f1f5f9",
                    color: "#475569"
                }}
                title="Close toolbar"
                aria-label="Close floating toolbar"
            >
                <FaTimes size={13} />
            </button>
        </div>
    );
}

const btnStyle = {
    width: 30,
    height: 30,
    padding: 0,
    border: "none",
    borderRadius: 7,
    background: "#1e3a8a",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    transition: "background 0.18s ease, transform 0.18s ease"
};
