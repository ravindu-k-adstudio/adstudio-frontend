import { FaPen, FaTrash } from "react-icons/fa";

export default function FloatingToolbar({ element, onDelete, onEdit, position, activeSection }) {
    if (!element || activeSection) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -130%)",
                background: "#ffffff",
                borderRadius: 8,
                padding: "4px 6px",
                display: "flex",
                gap: 4,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                zIndex: 9999
            }}
        >
            <button onClick={onEdit} style={btnStyle}>
                <FaPen size={10} />
            </button>

            <button onClick={onDelete} style={btnStyle}>
                <FaTrash size={10} />
            </button>
        </div>
    );
}

const btnStyle = {
    background: "#1e3a8a", // dark blue
    color: "#ffffff",
    border: "none",
    width: 26,
    height: 26,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
};