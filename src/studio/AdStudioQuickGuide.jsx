import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "adstudio_quick_guide_seen_v1";

const DESKTOP_STEPS = [
    {
        id: "background",
        title: "Choose a background",
        body: "Start with a ready-made background. Click Backgrounds to browse the library, or choose Business Photos for a business-specific photo background.",
        selector: '[data-tour="backgrounds"]',
        action: "Open Backgrounds"
    },
    {
        id: "text",
        title: "Add and edit text",
        body: "Click Add Text, then select the new text on the canvas. Use the Text Tools panel to edit its wording, font, size, colour and style.",
        selector: "right-add-text",
        action: "Add Text"
    },
    {
        id: "blocks",
        title: "Add background blocks",
        body: "Use Shape Blocks to add a rectangle or another shape behind your message. You can change its colour and transparency.",
        selector: "left-rectangle",
        action: "Add a rectangle"
    },
    {
        id: "discount-tags",
        title: "Add a discount tag",
        body: "Open Sale Tags to add a discount badge or special-offer label to your design.",
        selector: '[data-tour="discount-tags"]',
        action: "Open Sale Tags"
    },
    {
        id: "icons",
        title: "Add icons",
        body: "Open Icons to choose a graphic for your design. You can position it on the canvas after adding it.",
        selector: '[data-tour="icons"]',
        action: "Open Icons"
    },
    {
        id: "save",
        title: "Save your design",
        body: "Save your work so you can return to it later. Use the Save button in the top bar.",
        selector: "top-save",
        action: "Save"
    },
    {
        id: "download",
        title: "Download your ad",
        body: "Choose PNG for a crisp image or JPEG when you prefer a smaller image file.",
        selector: "top-png",
        action: "Download PNG"
    },
    {
        id: "share",
        title: "Share your ad",
        body: "Use Share to send your design through a supported sharing option on your device.",
        selector: "top-share",
        action: "Share"
    }
];

function visible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
}

function buttonByText(regex, root = document) {
    return [...root.querySelectorAll("button")].find(button => visible(button) && regex.test((button.innerText || button.textContent || "").replace(/\s+/g, " ").trim()));
}

function resolveTarget(selector) {
    if (selector === "right-add-text") {
        const panel = document.querySelector(".rightpanel-full");
        return panel ? buttonByText(/^\+?\s*Add Text$/i, panel) : buttonByText(/^\+?\s*Add Text$/i);
    }
    if (selector === "left-rectangle") {
        const panel = document.querySelector(".leftpanel-full");
        return panel ? buttonByText(/^Rectangle$/i, panel) : buttonByText(/^Rectangle$/i);
    }
    if (selector === "top-save") {
        const desktop = buttonByText(/^Save$/i);
        if (desktop) return desktop;
        return [...document.querySelectorAll(".topbar-icons .icon-item")].find(item => visible(item) && /^Save$/i.test(item.querySelector(".icon-label")?.textContent?.trim() || ""))?.querySelector("button");
    }
    if (selector === "top-png") {
        const desktop = buttonByText(/^PNG$/i);
        if (desktop) return desktop;
        return [...document.querySelectorAll(".topbar-icons .icon-item")].find(item => visible(item) && /^PNG$/i.test(item.querySelector(".icon-label")?.textContent?.trim() || ""))?.querySelector("button");
    }
    if (selector === "top-share") {
        const desktop = buttonByText(/^Share$/i);
        if (desktop) return desktop;
        return [...document.querySelectorAll(".topbar-icons .icon-item")].find(item => visible(item) && /^Share$/i.test(item.querySelector(".icon-label")?.textContent?.trim() || ""))?.querySelector("button");
    }
    return document.querySelector(selector);
}

export default function AdStudioQuickGuide({ isMobile = false, onStepChange }) {
    const [open, setOpen] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [targetRect, setTargetRect] = useState(null);
    const steps = isMobile
        ? [
            {
                id: "tools",
                title: "Your canvas tools",
                body: "On mobile, tap Tools to reveal the canvas toolbar. You’ll find Backgrounds, Icons and Sale Tags there.",
                selector: '[data-tour="tools-toggle"]',
                action: "Show Tools"
            },
            ...DESKTOP_STEPS
        ]
        : DESKTOP_STEPS;
    const step = steps[Math.min(stepIndex, steps.length - 1)];

    const finish = useCallback(() => {
        setOpen(false);
        setTargetRect(null);
        try { window.localStorage.setItem(STORAGE_KEY, "1"); } catch { /* storage may be blocked */ }
    }, []);

    const start = useCallback(() => {
        setStepIndex(0);
        setOpen(true);
        try { window.localStorage.setItem(STORAGE_KEY, "1"); } catch { /* storage may be blocked */ }
    }, []);

    useEffect(() => {
        let timer;
        try {
            if (!window.localStorage.getItem(STORAGE_KEY)) {
                timer = window.setTimeout(start, 650);
            }
        } catch {
            timer = window.setTimeout(start, 650);
        }
        const replay = () => start();
        window.addEventListener("adstudio-replay-guide", replay);
        return () => {
            if (timer) window.clearTimeout(timer);
            window.removeEventListener("adstudio-replay-guide", replay);
        };
    }, [start]);

    useEffect(() => {
        if (!open || !step) return undefined;
        onStepChange?.(step.id);

        // On mobile, reveal the canvas toolbar for the toolbar-related steps.
        if (isMobile && ["background", "discount-tags", "icons"].includes(step.id)) {
            const toggle = document.querySelector('[data-tour="tools-toggle"]');
            if (toggle && toggle.getAttribute("aria-expanded") !== "true") toggle.click();
        }
        if (isMobile && step.id === "blocks") {
            const blockButton = document.querySelector(".leftpanel-icons .icon-item:nth-child(4) button");
            const panel = document.querySelector(".leftpanel-full");
            const rectangle = panel ? buttonByText(/^Rectangle$/i, panel) : null;
            if (blockButton && (!rectangle || !visible(rectangle))) blockButton.click();
        }

        let raf = 0;
        let timer = 0;
        const update = () => {
            const target = resolveTarget(step.selector);
            if (target && visible(target)) {
                const r = target.getBoundingClientRect();
                setTargetRect({ x: r.left, y: r.top, width: r.width, height: r.height });
            } else {
                setTargetRect(null);
            }
        };
        raf = window.requestAnimationFrame(update);
        timer = window.setTimeout(update, 120);
        window.addEventListener("resize", update);
        window.addEventListener("scroll", update, true);
        return () => {
            window.cancelAnimationFrame(raf);
            window.clearTimeout(timer);
            window.removeEventListener("resize", update);
            window.removeEventListener("scroll", update, true);
        };
    }, [open, step, isMobile, onStepChange]);

    if (!open || !step) return null;

    const next = () => {
        if (step.id === "tools" && isMobile) {
            const toggle = document.querySelector('[data-tour="tools-toggle"]');
            if (toggle && toggle.getAttribute("aria-expanded") !== "true") toggle.click();
        }
        if (stepIndex >= steps.length - 1) finish();
        else setStepIndex(index => index + 1);
    };

    const cardStyle = {
        position: "fixed",
        zIndex: 100002,
        left: "50%",
        bottom: "max(16px, env(safe-area-inset-bottom))",
        transform: "translateX(-50%)",
        width: "min(430px, calc(100vw - 28px))",
        boxSizing: "border-box",
        borderRadius: 20,
        padding: 20,
        background: "#ffffff",
        color: "#102338",
        boxShadow: "0 24px 80px rgba(0,0,0,.35)",
        fontFamily: "inherit"
    };

    return (
        <>
            {targetRect && (
                <div
                    aria-hidden="true"
                    style={{
                        position: "fixed",
                        zIndex: 100001,
                        left: targetRect.x - 5,
                        top: targetRect.y - 5,
                        width: targetRect.width + 10,
                        height: targetRect.height + 10,
                        border: "2px solid #65d6ff",
                        borderRadius: 12,
                        boxShadow: "0 0 0 9999px rgba(3, 12, 25, .70), 0 0 26px rgba(101,214,255,.7)",
                        pointerEvents: "none",
                        transition: "all 180ms ease"
                    }}
                />
            )}
            {!targetRect && <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(3,12,25,.58)", pointerEvents: "none" }} />}
            <section role="dialog" aria-modal="false" aria-label="AdStudio quick guide" style={cardStyle}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", color: "#1686ad", textTransform: "uppercase" }}>ADSTUDIO QUICK GUIDE</span>
                    <button type="button" aria-label="Close guide" onClick={finish} style={{ border: 0, background: "#eef3f7", color: "#243b50", borderRadius: 999, width: 32, height: 32, fontSize: 21, lineHeight: "30px", cursor: "pointer" }}>×</button>
                </div>
                <div style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>{step.title}</div>
                <p style={{ margin: "0 0 16px", color: "#526579", fontSize: 14, lineHeight: 1.55 }}>{step.body}</p>
                <div style={{ height: 4, background: "#e7edf2", borderRadius: 20, overflow: "hidden", marginBottom: 15 }}>
                    <div style={{ height: "100%", width: `${((stepIndex + 1) / steps.length) * 100}%`, background: "linear-gradient(90deg,#0ea5e9,#2563eb)", transition: "width 180ms ease" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    <span style={{ color: "#718096", fontSize: 12, whiteSpace: "nowrap" }}>{stepIndex + 1} of {steps.length}</span>
                    <div style={{ display: "flex", gap: 8 }}>
                        <button type="button" onClick={finish} style={{ border: "1px solid #d9e2ea", background: "white", color: "#526579", padding: "10px 13px", borderRadius: 10, fontWeight: 650, cursor: "pointer" }}>Skip</button>
                        <button type="button" onClick={next} style={{ border: 0, background: "#0b1f33", color: "white", padding: "10px 16px", borderRadius: 10, fontWeight: 750, cursor: "pointer" }}>{stepIndex === steps.length - 1 ? "Finish" : "Next →"}</button>
                    </div>
                </div>
            </section>
        </>
    );
}
