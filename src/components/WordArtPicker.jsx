
import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaTimes,
  FaCheck,
  FaMagic,
  FaLayerGroup,
  FaStar,
  FaPalette,
} from "react-icons/fa";

/*
 * AdStudio Word Art Studio
 * 60 presets | 8 style categories | Search | Responsive previews
 *
 * All presets use Konva-compatible text properties.
 * Gradient-inspired styles use attractive solid fills because
 * Konva Text.fill expects a color or supported canvas fill.
 */

const RAW_STYLES = [
  // MODERN — 8
  ["bold-impact", "Bold Impact", "Modern", "BIG SALE", "#ff3d57", "#ffffff", 2, "#8d1530", 4, 5, 0, 1, "Arial Black, Arial, sans-serif", 1],
  ["midnight", "Midnight Luxe", "Modern", "MIDNIGHT", "#e9e8ff", "#5148a8", 1, "#15152d", 3, 4, 2, .7, "Arial Black, Arial, sans-serif", 1],
  ["clean-outline", "Clean Outline", "Modern", "OUTLINE", "#ffffff", "#20243a", 3, "#000000", 2, 3, 2, .35, "Arial Black, Arial, sans-serif", 1],
  ["mint-fresh", "Fresh Mint", "Modern", "FRESH", "#7cf7c4", "#087f68", 1.5, "#064e43", 2, 3, 2, .55, "Arial Black, Arial, sans-serif", 2],
  ["soft-shadow", "Soft Shadow", "Modern", "YOUR BRAND", "#ffffff", "#ffffff", 0, "#111827", 2, 4, 8, .7, "Arial, sans-serif", 1],
  ["lime-energy", "Lime Energy", "Modern", "ENERGY", "#d9ff38", "#28532b", 2, "#18391e", 4, 4, 0, .9, "Arial Black, Arial, sans-serif", 1],
  ["coral-pop", "Coral Pop", "Modern", "HELLO!", "#ff7f8b", "#ffffff", 1.5, "#b92751", 2, 3, 2, .6, "Arial Black, Arial, sans-serif", 1],
  ["minimal-black", "Minimal Black", "Modern", "STUDIO", "#20212c", "#ffffff", 0, "#000000", 0, 0, 0, 0, "Arial, sans-serif", 4],

  // 3D — 8
  ["3d-red", "3D Fire Red", "3D", "3D POWER", "#ff4b2b", "#7d1010", 2, "#620d0d", 7, 8, 0, 1, "Arial Black, Arial, sans-serif", .5],
  ["3d-ocean", "3D Ocean", "3D", "OCEAN", "#48c6ef", "#123b85", 2.5, "#10285f", 6, 7, 0, 1, "Arial Black, Arial, sans-serif", 1],
  ["3d-gold", "3D Gold", "3D", "GOLD", "#ffdf70", "#8c4b08", 2, "#5e3005", 6, 7, 0, 1, "Arial Black, Arial, sans-serif", 2],
  ["3d-purple", "Royal 3D", "3D", "ROYAL", "#c7a1ff", "#5b21b6", 2, "#32105f", 6, 7, 0, 1, "Arial Black, Arial, sans-serif", 1],
  ["3d-emerald", "Emerald Depth", "3D", "PREMIUM", "#6ef3ac", "#08784c", 2, "#06452e", 5, 7, 0, 1, "Arial Black, Arial, sans-serif", .5],
  ["3d-ice", "Ice Crystal", "3D", "ICE COLD", "#e3fcff", "#2980b9", 2, "#145078", 5, 6, 0, 1, "Arial Black, Arial, sans-serif", 1],
  ["3d-orange", "Tangerine 3D", "3D", "WOW!", "#ffb347", "#b9360c", 2, "#75210b", 6, 6, 0, 1, "Arial Black, Arial, sans-serif", 1],
  ["3d-pink", "Candy 3D", "3D", "SWEET", "#ff9fdb", "#a51c76", 2, "#701052", 5, 7, 0, 1, "Arial Black, Arial, sans-serif", 1],

  // NEON — 8
  ["neon-pink", "Neon Pink", "Neon", "NEON", "#ff43c6", "#ffffff", .7, "#ff00aa", 0, 0, 18, 1, "Arial Black, Arial, sans-serif", 3],
  ["neon-cyan", "Electric Cyan", "Neon", "ELECTRIC", "#65f7ff", "#ffffff", .8, "#00aaff", 0, 0, 15, 1, "Arial Black, Arial, sans-serif", 1],
  ["neon-lime", "Neon Lime", "Neon", "OPEN", "#d4ff35", "#ffffff", .7, "#91ff00", 0, 0, 17, 1, "Arial Black, Arial, sans-serif", 3],
  ["neon-violet", "Violet Glow", "Neon", "VIOLET", "#d7a6ff", "#ffffff", .8, "#9b30ff", 0, 0, 17, 1, "Arial Black, Arial, sans-serif", 2],
  ["neon-blue", "Laser Blue", "Neon", "LASER", "#8ab8ff", "#ffffff", .7, "#1769ff", 0, 0, 17, 1, "Arial Black, Arial, sans-serif", 3],
  ["neon-orange", "Neon Flame", "Neon", "FLAME", "#ffb66e", "#fff5df", .8, "#ff5a00", 0, 0, 17, 1, "Arial Black, Arial, sans-serif", 2],
  ["neon-rose", "Rose Tube", "Neon", "LOVE", "#ff94b8", "#ffffff", .8, "#ff276d", 0, 0, 16, 1, "Georgia, serif", 3],
  ["neon-mint", "Mint Glow", "Neon", "FRESH", "#9bffdf", "#ffffff", .7, "#00dfad", 0, 0, 17, 1, "Arial Black, Arial, sans-serif", 2],

  // ELEGANT — 8
  ["gold-luxury", "Luxury Gold", "Elegant", "LUXURY", "#f6d365", "#8a5a12", 1.5, "#49300c", 2, 3, 3, .8, "Georgia, serif", 2],
  ["serif-elegant", "Editorial Serif", "Elegant", "EST. 2026", "#f5e6c8", "#493824", .6, "#000000", 1, 2, 2, .3, "Georgia, serif", 2],
  ["rose-gold", "Rose Gold", "Elegant", "BEAUTY", "#f4a6a0", "#9f4b59", 1, "#5e2534", 2, 3, 3, .7, "Georgia, serif", 2],
  ["champagne", "Champagne", "Elegant", "SIGNATURE", "#ead4a5", "#a58146", .7, "#5c482d", 1, 2, 2, .4, "Georgia, serif", 3],
  ["ivory-serif", "Ivory Classic", "Elegant", "TIMELESS", "#fff6e8", "#9a7c5a", .8, "#54402d", 1, 2, 2, .35, "Georgia, serif", 3],
  ["burgundy", "Burgundy Editorial", "Elegant", "MAISON", "#7e183c", "#f4d6df", .7, "#451025", 1, 2, 1, .5, "Georgia, serif", 3],
  ["silver-elegance", "Silver Elegance", "Elegant", "EXCLUSIVE", "#e4e9f2", "#66758e", 1, "#344054", 1, 2, 3, .45, "Georgia, serif", 2],
  ["copper-classic", "Copper Classic", "Elegant", "ARTISAN", "#e8a477", "#85482d", 1, "#49291e", 1, 2, 2, .5, "Georgia, serif", 2],

  // PROMOTIONAL — 8
  ["orange-promo", "Promo Orange", "Promotional", "SPECIAL", "#ff8a00", "#7c2d12", 2, "#7c2d12", 4, 4, 0, .9, "Arial Black, Arial, sans-serif", 1],
  ["sale-yellow", "Sale Yellow", "Promotional", "SALE 50%", "#ffe600", "#e11d48", 3, "#7f1d1d", 3, 4, 0, 1, "Arial Black, Arial, sans-serif", .5],
  ["flash-deal", "Flash Deal", "Promotional", "FLASH DEAL", "#ffffff", "#ff1744", 2.5, "#a00024", 4, 4, 0, 1, "Arial Black, Arial, sans-serif", .5],
  ["limited-edition", "Limited Edition", "Promotional", "LIMITED", "#ffefb0", "#b45309", 2, "#713f12", 3, 3, 0, .8, "Arial Black, Arial, sans-serif", 1],
  ["hot-offer", "Hot Offer", "Promotional", "HOT OFFER", "#fff4e5", "#e63b2e", 3, "#9f211b", 4, 4, 0, 1, "Arial Black, Arial, sans-serif", .5],
  ["new-arrival", "New Arrival", "Promotional", "NEW ARRIVAL", "#d6ffea", "#07865b", 2, "#075e43", 3, 3, 0, .75, "Arial Black, Arial, sans-serif", 1],
  ["mega-deal", "Mega Deal", "Promotional", "MEGA DEAL", "#ffffff", "#6d28d9", 3, "#40118b", 4, 5, 0, 1, "Arial Black, Arial, sans-serif", .5],
  ["limited-time", "Limited Time", "Promotional", "ACT NOW!", "#ffedc2", "#b91c1c", 2.5, "#7f1d1d", 3, 4, 0, .9, "Arial Black, Arial, sans-serif", 1],

  // GRADIENT-INSPIRED — 7
  ["purple-gradient", "Violet Dream", "Gradient", "DREAM", "#c084fc", "#6d28d9", 1.5, "#4c1d95", 3, 4, 4, .8, "Arial Black, Arial, sans-serif", 1.5],
  ["sunset", "Sunset Glow", "Gradient", "SUNSET", "#ff9068", "#a83279", 1.5, "#76245e", 3, 4, 3, .7, "Arial Black, Arial, sans-serif", 2],
  ["ocean-breeze", "Ocean Breeze", "Gradient", "BREATHE", "#67e8f9", "#0369a1", 1.5, "#164e63", 2, 3, 3, .6, "Arial Black, Arial, sans-serif", 1],
  ["berry-blast", "Berry Blast", "Gradient", "BERRY", "#f0abfc", "#a21caf", 1.5, "#701a75", 3, 4, 3, .7, "Arial Black, Arial, sans-serif", 1],
  ["peach-dream", "Peach Dream", "Gradient", "PEACHY", "#ffcfb8", "#e45e7c", 1.5, "#9d315b", 2, 3, 2, .65, "Georgia, serif", 2],
  ["arctic-glow", "Arctic Glow", "Gradient", "ARCTIC", "#b8f5ff", "#5279d8", 1.5, "#334c91", 2, 3, 3, .65, "Arial Black, Arial, sans-serif", 1],
  ["tropical", "Tropical Pop", "Gradient", "TROPICAL", "#8df7c7", "#0e9f89", 1.5, "#086c68", 3, 3, 2, .7, "Arial Black, Arial, sans-serif", 1],

  // RETRO — 6
  ["retro-diner", "Retro Diner", "Retro", "GOOD TIMES", "#fff0a6", "#e34d70", 2, "#8b2450", 3, 4, 0, .8, "Georgia, serif", 1],
  ["disco", "Disco Fever", "Retro", "DISCO", "#ff83dd", "#7827bf", 2, "#42106d", 5, 5, 0, .9, "Arial Black, Arial, sans-serif", 3],
  ["vintage-cream", "Vintage Cream", "Retro", "HANDCRAFTED", "#f3dfb8", "#725034", 1.3, "#4b3324", 2, 2, 1, .45, "Georgia, serif", 2],
  ["arcade", "Arcade Pop", "Retro", "PLAYER 1", "#8afff4", "#5425c6", 2.5, "#28116d", 4, 4, 0, 1, "Arial Black, Arial, sans-serif", 1],
  ["retro-cherry", "Cherry Pop", "Retro", "CHERRY", "#ff6b7a", "#8e1738", 2, "#571126", 3, 4, 0, .9, "Georgia, serif", 2],
  ["sunshine", "Sunshine Retro", "Retro", "SUNSHINE", "#ffdf6b", "#d75a16", 2, "#8c310c", 3, 4, 0, .85, "Arial Black, Arial, sans-serif", 1],

  // PLAYFUL — 7
  ["bubblegum", "Bubblegum", "Playful", "HAPPY!", "#ff9ed8", "#a21caf", 2, "#6b217b", 3, 4, 2, .75, "Arial Black, Arial, sans-serif", 1],
  ["cotton-candy", "Cotton Candy", "Playful", "SWEET DAY", "#b8c0ff", "#845ec2", 1.5, "#54417e", 2, 3, 2, .65, "Georgia, serif", 1],
  ["lemon-drop", "Lemon Drop", "Playful", "OH WOW!", "#fff16b", "#ed7b22", 2, "#9b4210", 3, 3, 0, .8, "Arial Black, Arial, sans-serif", .5],
  ["berry-splash", "Berry Splash", "Playful", "YUMMY", "#ff8e9e", "#9d174d", 2, "#651035", 3, 4, 1, .8, "Arial Black, Arial, sans-serif", 1],
  ["sky-pop", "Sky Pop", "Playful", "DREAM BIG", "#a5dcff", "#2362a6", 1.5, "#173e73", 2, 3, 2, .6, "Arial Black, Arial, sans-serif", 1],
  ["confetti", "Confetti", "Playful", "CELEBRATE", "#ffe29a", "#e34b9a", 2, "#9d2466", 3, 3, 2, .75, "Arial Black, Arial, sans-serif", 1],
  ["choco", "Chocolate Cream", "Playful", "DELICIOUS", "#f5d0a9", "#713f2a", 2, "#45251a", 2, 3, 1, .65, "Georgia, serif", 1],
];

const WORD_ART_STYLES = RAW_STYLES.map((item) => {
  const [
    id, name, category, preview, fill, stroke, strokeWidth,
    shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur,
    shadowOpacity, fontFamily, letterSpacing,
  ] = item;

  return {
    id,
    name,
    category,
    preview,
    description: {
      Modern: "Contemporary, polished typography",
      "3D": "Dimensional lettering with depth",
      Neon: "Bright glow-inspired lettering",
      Elegant: "Refined typography for premium brands",
      Promotional: "High-impact advertising headline",
      Gradient: "Vibrant color-inspired typography",
      Retro: "Vintage-inspired expressive lettering",
      Playful: "Colorful, lively display typography",
    }[category],
    style: {
      fontFamily,
      fontStyle: "bold",
      fill,
      stroke,
      strokeWidth,
      shadowColor,
      shadowBlur,
      shadowOffsetX,
      shadowOffsetY,
      shadowOpacity,
      letterSpacing,
    },
  };
});

const CATEGORIES = [

  "Modern",
  "3D",
  "Neon",
  "Elegant",
  "Promotional",
  "Gradient",
  "Retro",
  "Playful",
];

const PREVIEW_BACKGROUNDS = {
  Modern: "linear-gradient(135deg,#f5f6ff,#e7eaf8)",
  "3D": "linear-gradient(145deg,#242c4b,#101426)",
  Neon: "radial-gradient(circle at center,#382253,#151329 78%)",
  Elegant: "linear-gradient(135deg,#f7f0e6,#e6d7c4)",
  Promotional: "linear-gradient(135deg,#fff1d8,#ffd2b7)",
  Gradient: "linear-gradient(135deg,#e8dcff,#c5e8ff)",
  Retro: "linear-gradient(135deg,#fff1cf,#f7d3bf)",
  Playful: "linear-gradient(135deg,#fff0fa,#e8edff)",
};

function getPreviewTextStyle(item) {
  const s = item.style;

  const shadows = [];

  if (s.shadowOffsetX || s.shadowOffsetY) {
    shadows.push(
      `${s.shadowOffsetX || 0}px ${s.shadowOffsetY || 0}px 0 ${s.shadowColor}`
    );
  }

  if (s.shadowBlur) {
    shadows.push(`0 0 ${Math.min(s.shadowBlur, 18)}px ${s.shadowColor}`);
  }

  return {
    color: s.fill,
    fontFamily: s.fontFamily,
    fontWeight: 900,
    fontStyle: s.fontStyle === "italic" ? "italic" : "normal",
    fontSize: item.preview.length > 9 ? 18 : item.preview.length > 7 ? 21 : 26,
    lineHeight: 1.15,
    textAlign: "center",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    letterSpacing: `${Math.min(s.letterSpacing || 0, 3)}px`,
    WebkitTextStroke: s.strokeWidth
      ? `${Math.min(s.strokeWidth, 3)}px ${s.stroke}`
      : "0 transparent",
    paintOrder: "stroke fill",
    textShadow: shadows.join(", ") || "none",
  };
}

export default function WordArtPicker({ onApply, onClose }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeId, setActiveId] = useState("bold-impact");

  const styles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return WORD_ART_STYLES.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.preview.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const activeStyle =
    WORD_ART_STYLES.find((item) => item.id === activeId) ||
    WORD_ART_STYLES[0];

  const applyStyle = () => {
    if (activeStyle && onApply) {
      onApply({
        ...activeStyle,
        style: { ...activeStyle.style },
      });
    }
  };

  return (
    <div className="wa-overlay" onMouseDown={onClose}>
      <section
        className="wa-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Word Art library"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="wa-header">
          <div className="wa-heading">
            <div className="wa-heading-icon">
              <FaMagic />
            </div>
            <div>
              <h2>Word Art Studio</h2>
              <p>Make your words impossible to ignore.</p>
            </div>
          </div>

          <button
            className="wa-close"
            onClick={onClose}
            type="button"
            aria-label="Close Word Art library"
          >
            <FaTimes />
          </button>
        </header>

        <div className="wa-search">
          <FaSearch />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search styles, e.g. gold, neon, sale..."
            aria-label="Search Word Art styles"
          />
          {search && (
            <button
              type="button"
              className="wa-clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <FaTimes />
            </button>
          )}
        </div>

        <nav className="wa-categories" aria-label="Word Art categories">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              className={`wa-category ${category === item ? "is-active" : ""}`}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="wa-library-info">
          <span className="wa-count">
            <FaLayerGroup />
            {styles.length} styles
          </span>
          <span className="wa-hint">
            Choose a design, then apply it to selected canvas text
          </span>
        </div>

        <div className="wa-grid">
          {styles.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`wa-style-card ${activeId === item.id ? "is-selected" : ""}`}
              onClick={() => setActiveId(item.id)}
              aria-pressed={activeId === item.id}
            >
              <div
                className={`wa-preview wa-preview-${item.category.toLowerCase()}`}
                style={{ background: PREVIEW_BACKGROUNDS[item.category] }}
              >
                <span className="wa-preview-sparkle wa-sparkle-one">✦</span>
                <span className="wa-preview-sparkle wa-sparkle-two">✧</span>

                <span
                  className="wa-preview-text"
                  style={getPreviewTextStyle(item)}
                >
                  {item.preview}
                </span>
              </div>

              <div className="wa-card-details">
                <div className="wa-card-copy">
                  <strong>{item.name}</strong>
                  <small>{item.description}</small>
                </div>
                {activeId === item.id && (
                  <span className="wa-check">
                    <FaCheck />
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {styles.length === 0 && (
          <div className="wa-empty">
            <FaSearch />
            <strong>No matching styles</strong>
            <span>Try another search or choose a different category.</span>
            <button
              type="button"
              className="wa-reset-filter"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Show all Word Art
            </button>
          </div>
        )}

        <footer className="wa-footer">
          <div className="wa-selected-info">
            <span className="wa-selected-icon">
              <FaPalette />
            </span>
            <div>
              <strong>{activeStyle.name}</strong>
              <small>{activeStyle.category} style selected</small>
            </div>
          </div>

          <div className="wa-actions">
            <button
              type="button"
              className="wa-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="wa-apply"
              onClick={applyStyle}
              disabled={!activeStyle}
            >
              <FaMagic />
              Apply Word Art
            </button>
          </div>
        </footer>
      </section>

      <style>{`
        .wa-overlay {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          background: rgba(10, 14, 30, .68);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
        }

        .wa-modal {
          box-sizing: border-box;
          width: min(100%, 1000px);
          max-height: min(91vh, 940px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: #172033;
          background: #fff;
          border: 1px solid rgba(255,255,255,.7);
          border-radius: 22px;
          box-shadow: 0 30px 100px rgba(0,0,0,.32);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }

        .wa-modal *,
        .wa-modal *::before,
        .wa-modal *::after {
          box-sizing: border-box;
        }

        .wa-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 22px 24px;
          border-bottom: 1px solid #edf0f5;
          flex-shrink: 0;
        }

        .wa-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .wa-heading-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 15px;
          color: #fff;
          font-size: 20px;
          background: linear-gradient(135deg,#7657ff,#bc58e8);
          box-shadow: 0 8px 20px rgba(118,87,255,.25);
        }

        .wa-heading h2 {
          margin: 0;
          font-size: 22px;
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: -.6px;
        }

        .wa-heading p {
          margin: 5px 0 0;
          color: #778197;
          font-size: 13px;
        }

        .wa-close {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border: 1px solid #e8ebf3;
          border-radius: 12px;
          background: linear-gradient(135deg,#fff,#f3f4fa);
          color: #536078;
          cursor: pointer;
          transition: .2s ease;
        }

        .wa-close:hover {
          transform: rotate(90deg);
          color: #714cff;
          border-color: #cfc3ff;
          background: #f3efff;
        }

        .wa-search {
          display: flex;
          align-items: center;
          gap: 11px;
          margin: 18px 24px 12px;
          padding: 0 15px;
          min-height: 47px;
          flex-shrink: 0;
          color: #8992a5;
          border: 1px solid #e4e8f0;
          border-radius: 13px;
          background: #f9faff;
          transition: .2s ease;
        }

        .wa-search:focus-within {
          border-color: #8a70ff;
          box-shadow: 0 0 0 3px rgba(138,112,255,.12);
          background: #fff;
        }

        .wa-search input {
          width: 100%;
          min-width: 0;
          outline: none;
          border: 0;
          background: transparent;
          color: #172033;
          font: inherit;
          font-size: 14px;
        }

        .wa-clear-search {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 27px;
          height: 27px;
          border: 0;
          border-radius: 8px;
          background: #ece9fb;
          color: #7657ff;
          cursor: pointer;
        }

        .wa-categories {
          display: flex;
          gap: 8px;
          padding: 0 24px 15px;
          overflow-x: auto;
          flex-shrink: 0;
          scrollbar-width: thin;
          scrollbar-color: #c9bcff transparent;
        }

        .wa-category {
          flex: 0 0 auto;
          min-height: 36px;
          padding: 8px 14px;
          border: 1px solid #e7eaf2;
          border-radius: 999px;
          background: linear-gradient(180deg,#fff,#f8f8fd);
          color: #647087;
          font-size: 12px;
          font-weight: 750;
          white-space: nowrap;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(30,35,70,.03);
          transition: .18s ease;
        }

        .wa-category:hover {
          transform: translateY(-1px);
          border-color: #b9aaff;
          color: #6948e8;
          box-shadow: 0 5px 12px rgba(100,75,200,.09);
        }

        .wa-category.is-active {
          color: #fff;
          border-color: transparent;
          background: linear-gradient(115deg,#7255ff,#a94fe8);
          box-shadow: 0 5px 14px rgba(114,85,255,.27);
        }

        .wa-library-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 0 24px 12px;
          color: #8891a4;
          font-size: 11px;
          flex-shrink: 0;
        }

        .wa-count {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #59647b;
          font-weight: 800;
          white-space: nowrap;
        }

        .wa-count svg { color: #8968f8; }

        .wa-hint {
          text-align: right;
        }

        .wa-grid {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          align-content: start;
          gap: 14px;
          padding: 4px 24px 24px;
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: #c8baff #f6f5fb;
        }

        .wa-style-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 0;
          overflow: hidden;
          text-align: left;
          border: 1px solid #e6e9f2;
          border-radius: 16px;
          background: #fff;
          cursor: pointer;
          transition: transform .2s ease,border-color .2s ease,box-shadow .2s ease;
        }

        .wa-style-card:hover {
          transform: translateY(-3px);
          border-color: #c4b4ff;
          box-shadow: 0 10px 25px rgba(79,55,170,.12);
        }

        .wa-style-card.is-selected {
          border: 2px solid #8265ff;
          box-shadow: 0 0 0 3px rgba(130,101,255,.12),0 8px 22px rgba(79,55,170,.1);
        }

        .wa-preview {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 100%;
          min-height: 132px;
          padding: 22px 12px;
          overflow: hidden;
          isolation: isolate;
        }

        .wa-preview::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .27;
          background-image: radial-gradient(#a3a9c6 .7px,transparent .7px);
          background-size: 12px 12px;
          pointer-events: none;
        }

        .wa-preview-neon::before,
        .wa-preview-3d::before {
          opacity: .12;
          background-image: radial-gradient(#ffffff .7px,transparent .7px);
        }

        .wa-preview-sparkle {
          position: absolute;
          color: rgba(117,90,202,.38);
          font-size: 18px;
          pointer-events: none;
        }

        .wa-sparkle-one { top: 10px; left: 12px; }
        .wa-sparkle-two { bottom: 9px; right: 13px; font-size: 22px; }

        .wa-preview-neon .wa-preview-sparkle,
        .wa-preview-3d .wa-preview-sparkle {
          color: rgba(255,255,255,.35);
        }

        .wa-preview-text {
          position: relative;
          z-index: 1;
          display: block;
          flex: 0 1 auto;
          overflow-wrap: anywhere;
          white-space: normal;
          transform: none;
        }

        .wa-card-details {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 9px;
          flex: 1;
          min-height: 72px;
          padding: 12px 13px;
          background: linear-gradient(180deg,#fff,#fcfcff);
        }

        .wa-card-copy {
          min-width: 0;
        }

        .wa-card-details strong {
          display: block;
          color: #202942;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.35;
        }

        .wa-card-details small {
          display: block;
          margin-top: 5px;
          color: #818ba1;
          font-size: 10px;
          line-height: 1.4;
        }

        .wa-check {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          border-radius: 9px;
          color: #fff;
          background: linear-gradient(135deg,#7957ff,#b04de7);
          box-shadow: 0 4px 10px rgba(121,87,255,.25);
          font-size: 10px;
        }

        .wa-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 40px 20px;
          text-align: center;
          color: #788297;
          font-size: 13px;
        }

        .wa-empty > svg {
          font-size: 24px;
          color: #9275ff;
        }

        .wa-empty strong {
          color: #303953;
          font-size: 15px;
        }

        .wa-reset-filter {
          margin-top: 4px;
          padding: 10px 16px;
          border: 0;
          border-radius: 10px;
          color: #fff;
          background: linear-gradient(135deg,#7657ff,#a455e9);
          font-weight: 750;
          cursor: pointer;
        }

        .wa-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 24px;
          border-top: 1px solid #edf0f5;
          background: #fff;
          flex-shrink: 0;
        }

        .wa-selected-info {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
        }

        .wa-selected-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 37px;
          height: 37px;
          border-radius: 12px;
          color: #7957ff;
          background: linear-gradient(135deg,#f0ebff,#fbeaff);
        }

        .wa-selected-info strong {
          display: block;
          color: #263148;
          font-size: 12px;
          font-weight: 800;
        }

        .wa-selected-info small {
          display: block;
          margin-top: 3px;
          color: #8b94a6;
          font-size: 10px;
        }

        .wa-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .wa-cancel,
        .wa-apply {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 43px;
          padding: 0 17px;
          border-radius: 12px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
          cursor: pointer;
          transition: transform .18s ease,box-shadow .18s ease,background .18s ease;
        }

        .wa-cancel {
          border: 1px solid #e1e5ef;
          color: #657089;
          background: linear-gradient(180deg,#fff,#f7f8fc);
          box-shadow: 0 2px 5px rgba(30,35,70,.04);
        }

        .wa-cancel:hover {
          transform: translateY(-1px);
          border-color: #cdd3e3;
          background: #f0f2f9;
          box-shadow: 0 5px 12px rgba(30,35,70,.07);
        }

        .wa-apply {
          border: 1px solid rgba(255,255,255,.2);
          color: #fff;
          background: linear-gradient(115deg,#7051ff,#9354f4 55%,#bb4fdf);
          box-shadow: 0 6px 16px rgba(117,78,239,.28);
        }

        .wa-apply:hover:not(:disabled) {
          transform: translateY(-2px);
          background: linear-gradient(115deg,#6040f0,#8340e5 55%,#a93bd0);
          box-shadow: 0 10px 22px rgba(117,78,239,.36);
        }

        .wa-apply:disabled {
          opacity: .55;
          cursor: not-allowed;
          box-shadow: none;
        }

        .wa-apply:active,
        .wa-cancel:active,
        .wa-category:active {
          transform: translateY(0);
        }

        .wa-close:focus-visible,
        .wa-category:focus-visible,
        .wa-style-card:focus-visible,
        .wa-cancel:focus-visible,
        .wa-apply:focus-visible,
        .wa-clear-search:focus-visible {
          outline: 3px solid rgba(121,87,255,.4);
          outline-offset: 3px;
        }

        @media (max-width: 700px) {
          .wa-overlay {
            padding: 8px;
          }

          .wa-modal {
            max-height: 94dvh;
            border-radius: 17px;
          }

          .wa-header { padding: 15px; }
          .wa-heading-icon { width: 40px; height: 40px; border-radius: 12px; }
          .wa-heading h2 { font-size: 18px; }
          .wa-heading p { font-size: 11px; }

          .wa-search {
            margin: 13px 14px 10px;
            min-height: 43px;
          }

          .wa-categories { padding: 0 14px 12px; }
          .wa-library-info { padding: 0 14px 10px; }

          .wa-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 10px;
            padding: 3px 14px 16px;
          }

          .wa-preview {
            min-height: 108px;
            padding: 17px 8px;
          }

          .wa-card-details {
            min-height: 65px;
            padding: 10px;
          }

          .wa-card-details strong { font-size: 11px; }
          .wa-card-details small { font-size: 9px; }

          .wa-footer {
            padding: 12px 14px;
            align-items: stretch;
            flex-direction: column;
            gap: 12px;
          }

          .wa-actions { width: 100%; }

          .wa-cancel,
          .wa-apply {
            flex: 1;
            padding: 0 10px;
          }

          .wa-hint {
            max-width: 65%;
            font-size: 10px;
          }
        }

        @media (max-width: 360px) {
          .wa-preview { min-height: 92px; }
          .wa-card-details { padding: 8px; }
          .wa-card-details small { display: none; }
          .wa-apply,.wa-cancel { font-size: 11px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-style-card,
          .wa-category,
          .wa-cancel,
          .wa-apply,
          .wa-close {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}


