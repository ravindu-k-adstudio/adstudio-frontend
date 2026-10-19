import { useState } from "react";
import {
    FaCopy,
    FaTrash,
    FaTimes,
    FaLayerGroup,
    FaLock,
    FaLockOpen,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaArrowUp,
    FaArrowDown,
    FaAngleDoubleUp,
    FaAngleDoubleDown,
    FaGripHorizontal,
    FaGripVertical,
    FaAlignJustify
} from "react-icons/fa";

export default function FloatingToolbar({
    element,
    onDelete,
    onDuplicate,
    position,
    onClose,
    onArrange,
    onLockToggle,
    onAlign,
    isLocked = false,
    selectedCount = 1
}) {
    const [menu, setMenu] = useState(null);
    const [hidden, setHidden] = useState(false);

    if (!element || !position || hidden) return null;

    const buttonStyle = {
        width: 34,
        height: 34,
        padding: 0,
        border: "none",
        borderRadius: 8,
        background: "#eff6ff",
        color: "#1d4ed8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0
    };

    const menuItemStyle = {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "10px 12px",
        border: "none",
        borderRadius: 7,
        background: "transparent",
        color: "#1e293b",
        cursor: "pointer",
        textAlign: "left",
        fontSize: 12,
        whiteSpace: "nowrap"
    };

    const runAction = (callback, ...args) => {
        if (typeof callback === "function") {
            callback(...args);
        }
        setMenu(null);
    };

    const closeToolbar = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setHidden(true);
        setMenu(null);
        onClose?.();
    };

    const ActionButton = ({
        icon: Icon,
        label,
        onClick,
        color,
        disabled = false
    }) => (
        <button
            type="button"
            title={label}
            aria-label={label}
            disabled={disabled}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
                e.stopPropagation();
                onClick?.(e);
            }}
            style={{
                ...buttonStyle,
                background: color || "#eff6ff",
                color: color ? "#ffffff" : "#1d4ed8",
                opacity: disabled ? 0.4 : 1,
                cursor: disabled ? "not-allowed" : "pointer"
            }}
        >
            <Icon size={14} />
        </button>
    );

    const MenuButton = ({ icon: Icon, label, action, disabled = false }) => (
        <button
            type="button"
            disabled={disabled}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
                e.stopPropagation();
                runAction(action);
            }}
            style={{
                ...menuItemStyle,
                opacity: disabled ? 0.4 : 1,
                cursor: disabled ? "not-allowed" : "pointer"
            }}
            onMouseEnter={(e) => {
                if (!disabled) e.currentTarget.style.background = "#eff6ff";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
            }}
        >
            <Icon size={13} />
            {label}
        </button>
    );

    const Divider = () => (
        <span
            style={{
                width: 1,
                height: 25,
                background: "#e2e8f0",
                margin: "0 2px",
                flexShrink: 0
            }}
        />
    );

    return (
        <div
            role="toolbar"
            aria-label="Selected element actions"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
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
                fontFamily: "Arial, sans-serif"
            }}
        >
            <ActionButton
                icon={FaCopy}
                label="Duplicate"
                onClick={() => runAction(onDuplicate)}
            />

            <div style={{ position: "relative" }}>
                <ActionButton
                    icon={FaLayerGroup}
                    label="Arrange layers"
                    onClick={() =>
                        setMenu(menu === "arrange" ? null : "arrange")
                    }
                />

                {menu === "arrange" && (
                    <div style={menuStyle}>
                        <MenuButton
                            icon={FaAngleDoubleUp}
                            label="Bring to front"
                            action={() => onArrange?.("front")}
                        />
                        <MenuButton
                            icon={FaArrowUp}
                            label="Bring forward"
                            action={() => onArrange?.("forward")}
                        />
                        <MenuButton
                            icon={FaArrowDown}
                            label="Send backward"
                            action={() => onArrange?.("backward")}
                        />
                        <MenuButton
                            icon={FaAngleDoubleDown}
                            label="Send to back"
                            action={() => onArrange?.("back")}
                        />
                    </div>
                )}
            </div>

            <ActionButton
                icon={isLocked ? FaLockOpen : FaLock}
                label={isLocked ? "Unlock element" : "Lock element"}
                onClick={() => runAction(onLockToggle)}
            />

            <div style={{ position: "relative" }}>
                <ActionButton
                    icon={FaAlignCenter}
                    label="Align elements"
                    onClick={() =>
                        setMenu(menu === "align" ? null : "align")
                    }
                />

                {menu === "align" && (
                    <div style={menuStyle}>
                        <div style={menuHeading}>Align elements</div>

                        <MenuButton
                            icon={FaAlignLeft}
                            label="Align left edges"
                            disabled={selectedCount < 2}
                            action={() => onAlign?.("left")}
                        />
                        <MenuButton
                            icon={FaAlignCenter}
                            label="Align horizontal centers"
                            disabled={selectedCount < 2}
                            action={() => onAlign?.("centerX")}
                        />
                        <MenuButton
                            icon={FaAlignRight}
                            label="Align right edges"
                            disabled={selectedCount < 2}
                            action={() => onAlign?.("right")}
                        />

                        <div style={menuDividerStyle} />

                        <MenuButton
                            icon={FaGripHorizontal}
                            label="Align top edges"
                            disabled={selectedCount < 2}
                            action={() => onAlign?.("top")}
                        />
                        <MenuButton
                            icon={FaAlignJustify}
                            label="Align vertical centers"
                            disabled={selectedCount < 2}
                            action={() => onAlign?.("centerY")}
                        />
                        <MenuButton
                            icon={FaGripVertical}
                            label="Align bottom edges"
                            disabled={selectedCount < 2}
                            action={() => onAlign?.("bottom")}
                        />

                        <div style={menuDividerStyle} />

                        <MenuButton
                            icon={FaAlignCenter}
                            label="Center on canvas horizontally"
                            action={() => onAlign?.("canvasCenterX")}
                        />
                        <MenuButton
                            icon={FaAlignCenter}
                            label="Center on canvas vertically"
                            action={() => onAlign?.("canvasCenterY")}
                        />
                    </div>
                )}
            </div>

            <Divider />

            <ActionButton
                icon={FaTrash}
                label="Delete element"
                color="#dc2626"
                onClick={() => runAction(onDelete)}
            />

            <ActionButton
                icon={FaTimes}
                label="Close toolbar"
                color="#67b0f9"
                onClick={closeToolbar}
            />
        </div>
    );
}

const menuStyle = {
    position: "absolute",
    left: "50%",
    bottom: "calc(100% + 12px)",
    transform: "translateX(-50%)",
    minWidth: 215,
    padding: 6,
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 11,
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.18)",
    zIndex: 10001
};

const menuHeading = {
    padding: "9px 12px",
    fontSize: 11,
    fontWeight: 700,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.06em"
};

const menuDividerStyle = {
    height: 1,
    background: "#e2e8f0",
    margin: "5px 4px"
};
