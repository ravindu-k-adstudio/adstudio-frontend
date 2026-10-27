import { useMemo, useState } from "react";
import templates, { BUSINESS_TYPES, TEMPLATE_SIZE_NAMES, TEMPLATE_SIZES } from "../data/templates";
import { BUSINESS_PHOTO_COLORS } from "../data/businessPhotoBackgrounds";
import "../styles/template-browser.css";

const CATEGORIES = BUSINESS_TYPES.filter((item) => item !== "All");
const SIZE_OPTIONS = Object.keys(TEMPLATE_SIZES);
const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0));
const pxPct = (value, fallback = 0) => `${clamp(value ?? fallback, 0, 1) * 100}%`;

// Twenty distinct overlay shapes, used by both the preview and the canvas background renderer.
export const TEMPLATE_OVERLAY_SHAPES = [
    { id: "left", name: "Left cut", clip: "polygon(0 0,67% 0,47% 100%,0 100%)" },
    { id: "right", name: "Right cut", clip: "polygon(33% 0,100% 0,100% 100%,53% 100%)" },
    { id: "diagonal", name: "Diagonal", clip: "polygon(0 0,100% 0,68% 100%,0 100%)" },
    { id: "curve", name: "Curve", clip: "ellipse(78% 100% at 0% 50%)" },
    { id: "circle", name: "Circle", clip: "circle(64% at 0% 50%)" },
    { id: "bottom", name: "Bottom", clip: "polygon(0 48%,100% 22%,100% 100%,0 100%)" },
    { id: "top", name: "Top", clip: "polygon(0 0,100% 0,100% 52%,0 72%)" },
    { id: "split", name: "Split", clip: "polygon(0 0,40% 0,32% 100%,0 100%,68% 0,100% 0,100% 100%,60% 100%)" },
    { id: "corner", name: "Corner", clip: "polygon(0 0,62% 0,0 74%)" },
    { id: "wave", name: "Wave", clip: "polygon(0 0,66% 0,60% 18%,49% 36%,45% 56%,35% 77%,25% 100%,0 100%)" },
    { id: "full", name: "Full", clip: "none" },
    { id: "minimal", name: "Minimal", clip: "polygon(0 0,42% 0,30% 100%,0 100%)" },
    { id: "triangle", name: "Triangle", clip: "polygon(0 0,100% 0,0 100%)" },
    { id: "diamond", name: "Diamond", clip: "polygon(50% 0,100% 50%,50% 100%,0 50%)" },
    { id: "hexagon", name: "Hexagon", clip: "polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)" },
    { id: "arch", name: "Arch", clip: "ellipse(75% 95% at 50% 100%)" },
    { id: "topWave", name: "Top wave", clip: "polygon(0 0,100% 0,100% 65%,82% 58%,64% 68%,45% 57%,24% 66%,0 55%)" },
    { id: "bottomWave", name: "Bottom wave", clip: "polygon(0 42%,20% 51%,40% 40%,60% 50%,80% 39%,100% 48%,100% 100%,0 100%)" },
    { id: "zigzag", name: "Zigzag", clip: "polygon(0 0,100% 0,100% 25%,85% 38%,100% 50%,85% 63%,100% 75%,100% 100%,0 100%,0 75%,15% 63%,0 50%,15% 38%,0 25%)" },
    { id: "ribbon", name: "Ribbon", clip: "polygon(0 0,100% 0,82% 50%,100% 100%,0 100%,18% 50%)" },
];

const DEFAULT_SHAPE = TEMPLATE_OVERLAY_SHAPES[0].id;
const clipForShape = (shape) => TEMPLATE_OVERLAY_SHAPES.find((item) => item.id === shape)?.clip || TEMPLATE_OVERLAY_SHAPES[0].clip;

function TemplateArtwork({ template, adSize, overlayDraft }) {
    const bg = template.background || {};
    const previewTexts = template.texts || [];
    const previewImages = template.images || [];
    const previewBlocks = template.blocks || [];
    const previewBorders = template.borders || [];
    const previewDiscountTags = template.discountTags || [];
    const backgroundColor = (bg.type === "gradient" || (bg.type === "business-photo" && !bg.src && String(bg.value || "").includes("gradient"))) ? (bg.value || "linear-gradient(145deg,#14243a,#283e59)") : "#17263a";
    const overlay = overlayDraft || {
        color: bg.color || "#FFFFFF",
        opacity: bg.opacity ?? 72,
        shape: bg.shape || DEFAULT_SHAPE,
    };
    const hasImage = (bg.type === "image" || bg.type === "business-photo") && bg.src;

    return <div className={`tb-artwork tb-size-${adSize}`}>
        <div className="tb-art-bg" style={{ background: backgroundColor }} />
        {hasImage && <img className="tb-art-background-image" src={bg.src} alt="" loading="lazy" />}
        <div className="tb-business-photo-overlay" style={{ background: overlay.color, opacity: clamp(overlay.opacity, 0, 100) / 100, clipPath: clipForShape(overlay.shape) }} />
        {previewBlocks.map((block, index) => <div key={block.id || `block-${index}`} className={`tb-art-block tb-shape-${block.shape || "rectangle"}`} style={{
            left: pxPct(block.nx), top: pxPct(block.ny), width: pxPct(block.nw, .2), height: pxPct(block.nh, .2),
            background: block.fill || block.color || "rgba(8,15,28,.45)",
            borderRadius: block.shape === "circle" ? "50%" : `${Math.max(0, Number(block.cornerRadius || 0) / 5)}px`,
            transform: `rotate(${Number(block.rotation || 0)}deg)`,
        }} />)}
        {previewImages.map((item, index) => item.src ? <img key={item.id || `${item.type}-${index}`} className={`tb-art-image tb-image-${item.type || "image"}`} src={item.src} alt="" loading="lazy" style={{
            left: pxPct(item.nx), top: pxPct(item.ny), width: pxPct(item.nw, .15), height: pxPct(item.nh, .15),
            transform: `rotate(${Number(item.rotation || 0)}deg)`, objectFit: ["logo", "social", "promotion", "contactIcon"].includes(item.type) ? "contain" : "cover",
        }} /> : null)}
        {previewTexts.map((item, index) => {
            const color = item.fill || "#fff";
            const fontSize = Math.max(1.5, Math.min(18, Number(item.fontScale || .035) * 100));
            return <div key={item.id || `text-${index}`} className={`tb-art-text tb-role-${item.role || item.type || "text"}`} style={{
                left: pxPct(item.nx), top: pxPct(item.ny), width: pxPct(item.nw, .5),
                color, fontFamily: item.fontFamily || "Arial, sans-serif", fontSize: `${fontSize}cqh`,
                fontWeight: item.fontStyle === "bold" ? 800 : 500, textAlign: item.align || "left", lineHeight: 1.12,
                letterSpacing: `${Math.min(2, Number(item.letterSpacing || 0) / 10)}px`,
                textShadow: color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white" ? "0 1px 5px rgba(0,0,0,.38)" : "none",
            }}>{item.text || ""}</div>;
        })}
        {previewDiscountTags.map((tag, index) => <div key={tag.id || `discount-${index}`} className={`tb-art-discount tb-discount-${tag.shape || "burst"}`} style={{
            left: pxPct(tag.nx), top: pxPct(tag.ny), width: pxPct(tag.nw, .17), height: pxPct(tag.nh, .17),
            background: tag.fill || "#ef4444", color: tag.textColor || "#fff",
            border: `1px solid ${tag.borderColor || "rgba(255,255,255,.8)"}`,
            borderRadius: tag.shape === "circle" ? "50%" : tag.shape === "rounded" ? "12px" : "3px",
            transform: `rotate(${Number(tag.rotation || 0)}deg)`,
            clipPath: tag.shape === "burst" ? "polygon(50% 0%,61% 13%,78% 5%,81% 24%,100% 30%,88% 46%,100% 62%,80% 69%,79% 90%,60% 84%,50% 100%,39% 84%,20% 90%,19% 69%,0 62%,12% 46%,0 30%,19% 24%,22% 5%,39% 13%)" : "none",
        }}><span>{tag.text || "OFFER"}</span></div>)}
        {previewBorders.map((border, index) => <div key={border.id || index} className="tb-art-border" style={{
            left: pxPct(border.nx, .012), top: pxPct(border.ny, .012), width: pxPct(border.nw, .976), height: pxPct(border.nh, .976),
            border: `${Math.max(1, Number(border.strokeWidth || 2) / 2)}px ${border.style || "solid"} ${border.stroke || border.color || "#fff"}`,
            borderRadius: `${Math.max(0, Number(border.cornerRadius || 4) / 5)}px`,
        }} />)}
        <div className="tb-art-vignette" />
    </div>;
}

export default function TemplateBrowser({ adSize = "square", onUseTemplate, onClose }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedSize, setSelectedSize] = useState(adSize);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [busyId, setBusyId] = useState(null);
    const [overlayDraft, setOverlayDraft] = useState({ color: "#FFFFFF", opacity: 72, shape: DEFAULT_SHAPE });

    const visible = useMemo(() => {
        const q = search.trim().toLowerCase();
        return templates.filter((t) => {
            const business = t.businessType || t.category || "Other";
            return (category === "All" || business === category) && (!q || `${t.name} ${t.description} ${business} ${t.style}`.toLowerCase().includes(q));
        });
    }, [search, category]);
    const previewDimensions = TEMPLATE_SIZES[selectedSize] || TEMPLATE_SIZES.square;

    const chooseTemplate = (template) => {
        const bg = template.background || {};
        setOverlayDraft({ color: bg.color || "#FFFFFF", opacity: bg.opacity ?? 72, shape: bg.shape || DEFAULT_SHAPE });
        setSelectedTemplate(template);
    };

    const useDesign = async () => {
        if (!selectedTemplate) return;
        setBusyId(selectedTemplate.id);
        try {
            const bg = selectedTemplate.background || {};
            const updatedBackground = {
                ...bg,
                // Route gradient-only templates through the same canvas overlay renderer
                // so color, opacity and all 20 shapes apply there too.
                ...(bg.type === "gradient" ? { type: "business-photo", src: null, name: "Gradient template background" } : {}),
                color: overlayDraft.color,
                opacity: overlayDraft.opacity,
                shape: overlayDraft.shape,
                overlay: "custom",
            };
            const updatedTemplate = { ...selectedTemplate, selectedSize, background: updatedBackground };
            await onUseTemplate?.(updatedTemplate);
            setSelectedTemplate(null);
            onClose?.();
        } finally {
            setBusyId(null);
        }
    };

    const setOverlay = (key, value) => setOverlayDraft((previous) => ({ ...previous, [key]: value }));
    const resetFilters = () => { setSearch(""); setCategory("All"); };

    return <div className="tb-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose?.(); }}>
        <section className="tb-dialog" role="dialog" aria-modal="true" aria-label="Choose an advertisement template">
            <header className="tb-header">
                <div className="tb-heading "><span className="tb-eyebrow">ADSTUDIO CREATIVE STUDIO</span><h2>Designs made to stand out.</h2><p>Choose a layout, tune the color treatment, then open it in your editable canvas.</p></div>
                <button className="tb-close" onClick={onClose} aria-label="Close template browser">×</button>
            </header>

            <div className="tb-toolbar">
                <label className="tb-search"><span aria-hidden="true">⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates or business types…" /></label>
                <div className="tb-size-bar" role="group" aria-label="Ad size " >
                    <span className="tb-bar-label">AD SIZE</span>
                    <div className="tb-size-options">{SIZE_OPTIONS.map((size) => <button type="button" key={size} className={selectedSize === size ? "active" : ""} onClick={() => setSelectedSize(size)}>{TEMPLATE_SIZE_NAMES[size] || size}</button>)}</div>
                </div>
                {/* <div className="tb-count"><strong>{visible.length}</strong> templates</div> */}
            </div>

            <nav className="tb-categories" aria-label="Business type">
                <span className="tb-bar-label">BUSINESS TYPE</span>
                <div className="tb-category-options">
                    <button className={category === "All" ? "active" : ""} onClick={() => setCategory("All")}>✦ All businesses <small>{templates.length}</small></button>
                    {CATEGORIES.map((name) => <button key={name} className={category === name ? "active" : ""} onClick={() => setCategory(name)}>{name}<small>{templates.filter((t) => (t.businessType || t.category) === name).length}</small></button>)}
                </div>
            </nav>

            <main className="tb-results">
                {visible.length === 0 ? <div className="tb-empty"><span>⌕</span><h3>No matching designs</h3><p>Try another keyword or business type.</p><button onClick={resetFilters}>Reset filters</button></div> : <div className="tb-grid">
                    {visible.map((template, index) => <article className="tb-card" key={template.id || `${template.name}-${index}`}>
                        <button className="tb-preview-button" onClick={() => chooseTemplate(template)} aria-label={`Preview ${template.name}`}>
                            <TemplateArtwork template={template} adSize={selectedSize} />
                            <span className="tb-preview-size">{TEMPLATE_SIZE_NAMES[selectedSize] || selectedSize}</span>
                            <span className="tb-preview-hover">Preview and customize <b>↗</b></span>
                        </button>
                        <div className="tb-card-info"><div className="tb-card-title-row"><h3 title={template.name}>{template.name}</h3><span className="tb-number">{String((template.variant ?? index) + 1).padStart(2, "0")}</span></div>
                            <p>{template.businessType || template.category} <span>·</span> {template.style || "Campaign"}</p>
                            <button className="tb-use-button" onClick={() => chooseTemplate(template)}>Preview template <span>→</span></button>
                        </div>
                    </article>)}
                </div>}
            </main>
            <footer className="tb-footer"><span><i /> Every template opens in your existing editable canvas</span><span>300 designs · Color · Transparency · 20 overlay shapes</span></footer>
        </section>

        {selectedTemplate && <div className="tb-detail-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedTemplate(null); }}>
            <section className="tb-detail-dialog" role="dialog" aria-modal="true" aria-label={`Preview ${selectedTemplate.name}`}>
                <header className="tb-detail-header"><div><span className="tb-eyebrow">TEMPLATE PREVIEW & CUSTOMIZATION</span><h2>{selectedTemplate.name}</h2><p>{selectedTemplate.businessType || selectedTemplate.category} · {selectedTemplate.style || "Campaign"}</p></div><button className="tb-close" onClick={() => setSelectedTemplate(null)} aria-label="Close preview">×</button></header>
                <div className="tb-detail-content">
                    <div className="tb-detail-art-wrap"><div className="tb-detail-canvas" style={{ aspectRatio: `${previewDimensions[0]} / ${previewDimensions[1]}`, "--tb-preview-ratio": `${previewDimensions[0]} / ${previewDimensions[1]}` }}><TemplateArtwork template={selectedTemplate} adSize={selectedSize} overlayDraft={overlayDraft} /></div></div>
                    <div className="tb-detail-controls">
                        <span className="tb-detail-kicker">LIVE DESIGN PREVIEW</span><h3>Customize your ad background</h3>
                        <p>{selectedTemplate.description || "Choose this design and customize every element in the editor."}</p>
                        <label className="tb-detail-size"><span>Ad size / format</span><select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>{SIZE_OPTIONS.map((size) => <option key={size} value={size}>{TEMPLATE_SIZE_NAMES[size] || size} — {TEMPLATE_SIZES[size][0]} × {TEMPLATE_SIZES[size][1]} px</option>)}</select></label>
                        <div className="tb-detail-dimensions"><span>Canvas dimensions</span><strong>{previewDimensions[0]} × {previewDimensions[1]} px</strong></div>

                        <div className="tb-control-section tb-control-color"><div className="tb-control-heading"><strong>Overlay block shade</strong><span>{overlayDraft.color.toUpperCase()}</span></div>
                            <div className="tb-color-swatches">{BUSINESS_PHOTO_COLORS.map((color) => <button type="button" key={color} title={color} aria-label={`Use overlay color ${color}`} className={overlayDraft.color.toLowerCase() === color.toLowerCase() ? "active" : ""} style={{ background: color }} onClick={() => setOverlay("color", color)} />)}</div>
                            <label className="tb-custom-color"><span>Custom color</span><input type="color" value={overlayDraft.color} onChange={(e) => setOverlay("color", e.target.value)} /></label>
                        </div>

                        <div className="tb-control-section tb-control-opacity"><label className="tb-range-label"><span>Transparency</span><strong>{overlayDraft.opacity}% opacity</strong></label><input aria-label="Overlay transparency" className="tb-opacity-range" type="range" min="0" max="100" step="1" value={overlayDraft.opacity} onChange={(e) => setOverlay("opacity", Number(e.target.value))} /><div className="tb-range-ends"><span>100% transparent</span><span>100% solid</span></div><div className="tb-opacity-track-preview" aria-hidden="true"><span style={{ background: overlayDraft.color, opacity: clamp(overlayDraft.opacity, 0, 100) / 100 }} /></div></div>

                        <div className="tb-control-section tb-control-shapes"><div className="tb-control-heading"><strong>Overlay block shape</strong><span>{TEMPLATE_OVERLAY_SHAPES.find((shape) => shape.id === overlayDraft.shape)?.name || "Left cut"}</span></div><p className="tb-shape-help">Choose a shape. The ad preview updates immediately.</p>
                            <div className="tb-shape-grid">{TEMPLATE_OVERLAY_SHAPES.map((shape) => <button type="button" key={shape.id} className={overlayDraft.shape === shape.id ? "active" : ""} onClick={() => setOverlay("shape", shape.id)}><span className="tb-shape-swatch" style={{ clipPath: shape.clip, background: overlayDraft.color }} /><span>{shape.name}</span></button>)}</div>
                        </div>

                        <div className="tb-detail-actions"><button className="tb-detail-back" onClick={() => setSelectedTemplate(null)}>Cancel / Back</button><button className="tb-detail-apply" onClick={useDesign} disabled={busyId === selectedTemplate.id}>{busyId === selectedTemplate.id ? "Applying template…" : "Apply template →"}</button></div>
                    </div>
                </div>
            </section>
        </div>}
    </div>;
}
