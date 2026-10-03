/* ============================================================
   AdStudio — PRODUCTION BACKGROUND CLIP ART LIBRARY
   ------------------------------------------------------------
   100 professional advertisement backgrounds.

   IMPORTANT:
   These are BACKGROUND ARTWORKS only.

   They are:
   - SVG based
   - resolution independent
   - designed for advertisements
   - text-friendly
   - gradient / neutral / premium focused
   - suitable for all AdStudio canvas sizes
   - self contained
   - no external image URLs
============================================================ */


/* ============================================================
   SVG UTILITIES
============================================================ */

const svgData = svg =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;


const esc = value =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");


/* ============================================================
   PROFESSIONAL PALETTES

   These deliberately avoid childish saturated colors.
============================================================ */

const PALETTES = {

    /* White / neutral advertisement palettes */

    pearl: [
        "#ffffff",
        "#f8fafc",
        "#eef2f7",
        "#dbe4ee"
    ],

    cloud: [
        "#ffffff",
        "#f1f5f9",
        "#e2e8f0",
        "#cbd5e1"
    ],

    sand: [
        "#fffdf8",
        "#f7f0e4",
        "#e8dcc8",
        "#c9b79c"
    ],

    stone: [
        "#fafaf9",
        "#e7e5e4",
        "#d6d3d1",
        "#78716c"
    ],

    navy: [
        "#f8fafc",
        "#dbeafe",
        "#2563eb",
        "#0f172a"
    ],

    midnight: [
        "#f8fafc",
        "#cbd5e1",
        "#334155",
        "#020617"
    ],

    blue: [
        "#ffffff",
        "#dbeafe",
        "#60a5fa",
        "#1d4ed8"
    ],

    cyan: [
        "#ffffff",
        "#cffafe",
        "#67e8f9",
        "#0891b2"
    ],

    violet: [
        "#ffffff",
        "#ede9fe",
        "#a78bfa",
        "#6d28d9"
    ],

    rose: [
        "#ffffff",
        "#fce7f3",
        "#f9a8d4",
        "#be185d"
    ],

    coral: [
        "#fffaf7",
        "#ffedd5",
        "#fb923c",
        "#c2410c"
    ],

    sage: [
        "#ffffff",
        "#ecfdf5",
        "#86efac",
        "#15803d"
    ],

    emerald: [
        "#f8fffc",
        "#d1fae5",
        "#34d399",
        "#047857"
    ],

    gold: [
        "#fffdf5",
        "#fef3c7",
        "#fbbf24",
        "#92400e"
    ],

    champagne: [
        "#fffefa",
        "#fef3c7",
        "#d6b36a",
        "#78552b"
    ],

    plum: [
        "#fffaff",
        "#f3e8ff",
        "#c084fc",
        "#701a75"
    ],

    charcoal: [
        "#ffffff",
        "#e5e7eb",
        "#4b5563",
        "#111827"
    ],

    terracotta: [
        "#fffaf7",
        "#fed7aa",
        "#fb923c",
        "#9a3412"
    ],

    olive: [
        "#fffffb",
        "#ecfccb",
        "#a3a635",
        "#365314"
    ],

    winter: [
        "#ffffff",
        "#e0f2fe",
        "#93c5fd",
        "#1e3a8a"
    ],

    spring: [
        "#ffffff",
        "#dcfce7",
        "#86efac",
        "#0f766e"
    ],

    autumn: [
        "#fffaf5",
        "#ffedd5",
        "#f59e0b",
        "#9a3412"
    ],

    festive: [
        "#ffffff",
        "#fee2e2",
        "#dc2626",
        "#166534"
    ]
};


/* ============================================================
   RANDOM DETERMINISTIC HELPERS
============================================================ */

const pick = (arr, index) =>
    arr[index % arr.length];

const num = (index, min, max) =>
    min + ((index * 37) % (max - min + 1));


/* ============================================================
   SVG WRAPPER
============================================================ */

const wrap = (content, defs = "") => `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1200"
    height="1200"
    viewBox="0 0 1200 1200">

    <defs>
        ${defs}
    </defs>

    ${content}

</svg>
`;


/* ============================================================
   GRADIENT DEFINITIONS
============================================================ */

const linearGradient = (
    id,
    colors,
    angle = "135"
) => {

    const stops = colors
        .map((color, i) => {

            const offset =
                Math.round(
                    (i / (colors.length - 1)) * 100
                );

            return `
                <stop
                    offset="${offset}%"
                    stop-color="${color}"/>
            `;

        })
        .join("");

    const radians =
        (Number(angle) * Math.PI) / 180;

    const x2 =
        50 + Math.cos(radians) * 50;

    const y2 =
        50 + Math.sin(radians) * 50;

    return `
        <linearGradient
            id="${id}"
            x1="50%"
            y1="50%"
            x2="${x2}%"
            y2="${y2}%">

            ${stops}

        </linearGradient>
    `;
};


const radialGradient = (
    id,
    colors
) => {

    const stops = colors
        .map((color, i) => {

            const offset =
                Math.round(
                    (i / (colors.length - 1)) * 100
                );

            return `
                <stop
                    offset="${offset}%"
                    stop-color="${color}"/>
            `;

        })
        .join("");

    return `
        <radialGradient
            id="${id}"
            cx="50%"
            cy="50%"
            r="70%">

            ${stops}

        </radialGradient>
    `;
};


/* ============================================================
   BACKGROUND GENERATORS
============================================================ */


/* ------------------------------------------------------------
   ABSTRACT
------------------------------------------------------------ */

const abstractBackground = (palette, variant) => {

    const g = linearGradient(
        `a${variant}`,
        palette,
        110 + variant * 17
    );

    const r1 = 170 + (variant * 37) % 230;
    const r2 = 220 + (variant * 43) % 240;

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#a${variant})"/>

            <circle
                cx="${130 + variant * 31}"
                cy="${170 + variant * 23}"
                r="${r1}"
                fill="#ffffff"
                opacity=".20"/>

            <circle
                cx="${1030 - variant * 19}"
                cy="${900 - variant * 17}"
                r="${r2}"
                fill="#ffffff"
                opacity=".12"/>

            <path
                d="
                    M-100 780
                    C180 ${500 + variant * 8}
                    350 ${980 - variant * 7}
                    600 ${650 + variant * 5}
                    C820 ${390 + variant * 9}
                    1000 ${760 - variant * 5}
                    1300 ${480 + variant * 4}
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="${80 + variant * 4}"
                opacity=".10"/>

            <path
                d="
                    M-100 830
                    C180 ${550 + variant * 7}
                    350 ${1030 - variant * 6}
                    600 ${700 + variant * 5}
                    C820 ${440 + variant * 8}
                    1000 ${810 - variant * 4}
                    1300 ${530 + variant * 4}
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="5"
                opacity=".25"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   GEOMETRIC
------------------------------------------------------------ */

const geometricBackground = (palette, variant) => {

    const g = linearGradient(
        `geo${variant}`,
        palette,
        45 + variant * 11
    );

    const dark =
        palette[3];

    const accent =
        palette[2];

    const light =
        palette[0];

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#geo${variant})"/>

            <polygon
                points="
                    0,0
                    ${420 + variant * 15},0
                    ${180 + variant * 11},1200
                    0,1200
                "
                fill="${dark}"
                opacity=".12"/>

            <polygon
                points="
                    1200,0
                    1200,${480 + variant * 20}
                    ${760 - variant * 8},1200
                    ${510 - variant * 6},1200
                "
                fill="${accent}"
                opacity=".18"/>

            <circle
                cx="${820 - variant * 18}"
                cy="${220 + variant * 20}"
                r="${130 + variant * 7}"
                fill="${light}"
                opacity=".20"/>

            <rect
                x="${100 + variant * 18}"
                y="${720 - variant * 15}"
                width="${340 + variant * 12}"
                height="${120 + variant * 8}"
                rx="60"
                transform="
                    rotate(${-15 + variant * 3}
                    ${100 + variant * 18}
                    ${720 - variant * 15})"
                fill="${light}"
                opacity=".15"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   GRADIENT
------------------------------------------------------------ */

const gradientBackground = (palette, variant) => {

    const g1 = linearGradient(
        `gr${variant}`,
        palette,
        variant * 27
    );

    const g2 = radialGradient(
        `grr${variant}`,
        [
            "#ffffff",
            palette[1],
            palette[3]
        ]
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#gr${variant})"/>

            <circle
                cx="${250 + variant * 60}"
                cy="${250 + variant * 35}"
                r="${250 + variant * 15}"
                fill="url(#grr${variant})"
                opacity=".38"/>

            <circle
                cx="${920 - variant * 35}"
                cy="${870 - variant * 28}"
                r="${310 + variant * 11}"
                fill="#ffffff"
                opacity=".11"/>

            <path
                d="
                    M0 860
                    C220 ${620 - variant * 12}
                    390 ${940 + variant * 4}
                    620 ${710 - variant * 5}
                    C820 ${500 + variant * 9}
                    980 ${760 - variant * 7}
                    1200 ${540 + variant * 5}
                    L1200 1200
                    L0 1200 Z
                "
                fill="#ffffff"
                opacity=".10"/>
            `,
            `${g1}${g2}`
        )
    );
};


/* ------------------------------------------------------------
   ORGANIC
------------------------------------------------------------ */

const organicBackground = (palette, variant) => {

    const g = linearGradient(
        `org${variant}`,
        palette,
        135
    );

    const offset = variant * 31;

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="${palette[0]}"/>

            <path
                d="
                    M-${80 + offset}
                    ${300 + variant * 14}

                    C
                    ${40 + offset}
                    ${40 + variant * 10}
                    ${350 + variant * 22}
                    ${100 + variant * 13}
                    ${470 + variant * 30}
                    ${270 + variant * 17}

                    C
                    ${620 + variant * 19}
                    ${440 + variant * 14}
                    ${780 + variant * 25}
                    ${180 + variant * 12}
                    ${960 + variant * 33}
                    ${300 + variant * 16}

                    C
                    ${1120 + variant * 10}
                    ${420 + variant * 13}
                    ${1080 + variant * 9}
                    ${700 + variant * 17}
                    ${940 + variant * 11}
                    ${820 + variant * 13}

                    C
                    ${760 + variant * 10}
                    ${980 + variant * 15}
                    ${490 + variant * 16}
                    ${930 + variant * 14}
                    ${300 + variant * 9}
                    ${780 + variant * 11}

                    C
                    ${110 + variant * 8}
                    ${650 + variant * 9}
                    ${-100}
                    ${580 + variant * 12}
                    ${-80 + offset}
                    ${300 + variant * 14}

                    Z
                "
                fill="url(#org${variant})"
                opacity=".92"/>

            <circle
                cx="${180 + variant * 48}"
                cy="${190 + variant * 31}"
                r="${90 + variant * 8}"
                fill="#ffffff"
                opacity=".24"/>

            <circle
                cx="${950 - variant * 29}"
                cy="${930 - variant * 21}"
                r="${150 + variant * 8}"
                fill="#ffffff"
                opacity=".16"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   BUSINESS
------------------------------------------------------------ */

const businessBackground = (palette, variant) => {

    const g = linearGradient(
        `biz${variant}`,
        palette,
        135
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#biz${variant})"/>

            <rect
                x="0"
                y="${760 - variant * 20}"
                width="1200"
                height="440"
                fill="#ffffff"
                opacity=".07"/>

            <path
                d="
                    M0 940
                    L300 ${620 + variant * 12}
                    L560 820
                    L900 ${470 + variant * 8}
                    L1200 650
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="4"
                opacity=".28"/>

            <path
                d="
                    M0 1000
                    L300 ${680 + variant * 12}
                    L560 880
                    L900 ${530 + variant * 8}
                    L1200 710
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="85"
                opacity=".07"/>

            <circle
                cx="${920 - variant * 20}"
                cy="${220 + variant * 30}"
                r="${170 + variant * 7}"
                fill="#ffffff"
                opacity=".10"/>

            <g
                stroke="#ffffff"
                stroke-width="2"
                opacity=".12">

                <line
                    x1="90"
                    y1="${180 + variant * 20}"
                    x2="430"
                    y2="${180 + variant * 20}"/>

                <line
                    x1="90"
                    y1="${220 + variant * 20}"
                    x2="350"
                    y2="${220 + variant * 20}"/>

            </g>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   FOOD
------------------------------------------------------------ */

const foodBackground = (palette, variant) => {

    const g = linearGradient(
        `food${variant}`,
        palette,
        120
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#food${variant})"/>

            <circle
                cx="${180 + variant * 38}"
                cy="${160 + variant * 20}"
                r="${170 + variant * 10}"
                fill="#ffffff"
                opacity=".30"/>

            <circle
                cx="${1000 - variant * 25}"
                cy="${900 - variant * 18}"
                r="${260 + variant * 9}"
                fill="#ffffff"
                opacity=".13"/>

            <path
                d="
                    M-100 720
                    C150 ${480 + variant * 10}
                    320 ${850 - variant * 8}
                    520 ${640 + variant * 5}
                    C730 ${420 + variant * 12}
                    930 ${700 - variant * 5}
                    1300 ${430 + variant * 7}
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="${100 + variant * 4}"
                opacity=".10"/>

            <path
                d="
                    M-100 720
                    C150 ${480 + variant * 10}
                    320 ${850 - variant * 8}
                    520 ${640 + variant * 5}
                    C730 ${420 + variant * 12}
                    930 ${700 - variant * 5}
                    1300 ${430 + variant * 7}
                "
                fill="none"
                stroke="${palette[3]}"
                stroke-width="5"
                opacity=".12"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   LUXURY
------------------------------------------------------------ */

const luxuryBackground = (palette, variant) => {

    const g = linearGradient(
        `lux${variant}`,
        palette,
        135
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#lux${variant})"/>

            <circle
                cx="${930 - variant * 20}"
                cy="${200 + variant * 25}"
                r="${290 + variant * 8}"
                fill="#ffffff"
                opacity=".10"/>

            <circle
                cx="${190 + variant * 23}"
                cy="${980 - variant * 30}"
                r="${260 + variant * 7}"
                fill="${palette[2]}"
                opacity=".13"/>

            <path
                d="
                    M-100 850
                    C180 500
                    390 1000
                    650 670
                    C850 420
                    980 620
                    1300 400
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="110"
                opacity=".06"/>

            <path
                d="
                    M-100 850
                    C180 500
                    390 1000
                    650 670
                    C850 420
                    980 620
                    1300 400
                "
                fill="none"
                stroke="${palette[1]}"
                stroke-width="2"
                opacity=".35"/>

            <circle
                cx="600"
                cy="600"
                r="360"
                fill="none"
                stroke="#ffffff"
                stroke-width="1"
                opacity=".15"/>

            <circle
                cx="600"
                cy="600"
                r="410"
                fill="none"
                stroke="#ffffff"
                stroke-width="1"
                opacity=".10"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   PROMOTION
------------------------------------------------------------ */

const promotionBackground = (palette, variant) => {

    const g = linearGradient(
        `pro${variant}`,
        palette,
        35 + variant * 9
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#pro${variant})"/>

            <circle
                cx="${150 + variant * 28}"
                cy="${180 + variant * 18}"
                r="${170 + variant * 8}"
                fill="#ffffff"
                opacity=".25"/>

            <circle
                cx="${980 - variant * 24}"
                cy="${950 - variant * 18}"
                r="${280 + variant * 9}"
                fill="#ffffff"
                opacity=".12"/>

            <path
                d="
                    M0 0
                    L${360 + variant * 20} 0
                    L0 ${360 + variant * 20}
                    Z
                "
                fill="#ffffff"
                opacity=".12"/>

            <path
                d="
                    M1200 1200
                    L${850 - variant * 15} 1200
                    L1200 ${850 - variant * 15}
                    Z
                "
                fill="#ffffff"
                opacity=".10"/>

            <g
                fill="#ffffff"
                opacity=".42">

                <circle
                    cx="${400 + variant * 31}"
                    cy="${250 + variant * 17}"
                    r="5"/>

                <circle
                    cx="${500 + variant * 23}"
                    cy="${320 + variant * 21}"
                    r="8"/>

                <circle
                    cx="${650 + variant * 13}"
                    cy="${270 + variant * 25}"
                    r="4"/>

                <circle
                    cx="${780 + variant * 11}"
                    cy="${360 + variant * 19}"
                    r="6"/>

            </g>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   TECHNOLOGY
------------------------------------------------------------ */

const technologyBackground = (palette, variant) => {

    const g = linearGradient(
        `tech${variant}`,
        palette,
        135
    );

    const spacing =
        90 + variant * 8;

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#tech${variant})"/>

            <g
                stroke="#ffffff"
                stroke-width="2"
                opacity=".12">

                ${Array.from(
                { length: 14 },
                (_, i) => `
                        <line
                            x1="${i * spacing}"
                            y1="0"
                            x2="${i * spacing}"
                            y2="1200"/>
                    `
            ).join("")}

                ${Array.from(
                { length: 14 },
                (_, i) => `
                        <line
                            x1="0"
                            y1="${i * spacing}"
                            x2="1200"
                            y2="${i * spacing}"/>
                    `
            ).join("")}

            </g>

            <circle
                cx="${600 + variant * 15}"
                cy="${560 - variant * 12}"
                r="${270 + variant * 14}"
                fill="none"
                stroke="#ffffff"
                stroke-width="3"
                opacity=".18"/>

            <circle
                cx="${600 + variant * 15}"
                cy="${560 - variant * 12}"
                r="${180 + variant * 9}"
                fill="none"
                stroke="#ffffff"
                stroke-width="22"
                opacity=".08"/>

            <circle
                cx="${600 + variant * 15}"
                cy="${560 - variant * 12}"
                r="70"
                fill="#ffffff"
                opacity=".10"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   NATURE
------------------------------------------------------------ */

const natureBackground = (palette, variant) => {

    const g = linearGradient(
        `nat${variant}`,
        palette,
        150
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#nat${variant})"/>

            <path
                d="
                    M0 850
                    C160 690
                    280 900
                    430 720
                    C600 520
                    730 800
                    900 610
                    C1030 470
                    1130 600
                    1200 500
                    L1200 1200
                    L0 1200 Z
                "
                fill="#ffffff"
                opacity=".12"/>

            <circle
                cx="${180 + variant * 32}"
                cy="${170 + variant * 20}"
                r="${190 + variant * 10}"
                fill="#ffffff"
                opacity=".20"/>

            <path
                d="
                    M200 850
                    C250 620
                    430 600
                    470 850
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="4"
                opacity=".22"/>

            <path
                d="
                    M800 900
                    C850 650
                    1020 640
                    1060 880
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="4"
                opacity=".18"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   SOCIAL MEDIA
------------------------------------------------------------ */

const socialBackground = (palette, variant) => {

    const g = linearGradient(
        `soc${variant}`,
        palette,
        110 + variant * 21
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#soc${variant})"/>

            <circle
                cx="${190 + variant * 45}"
                cy="${190 + variant * 25}"
                r="${180 + variant * 10}"
                fill="#ffffff"
                opacity=".20"/>

            <circle
                cx="${980 - variant * 35}"
                cy="${930 - variant * 22}"
                r="${270 + variant * 9}"
                fill="#ffffff"
                opacity=".12"/>

            <rect
                x="${310 + variant * 20}"
                y="${240 + variant * 18}"
                width="${580 - variant * 15}"
                height="${580 - variant * 15}"
                rx="${100 + variant * 4}"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                opacity=".20"/>

            <path
                d="
                    M0 620
                    C220 380
                    360 750
                    570 500
                    C760 270
                    940 520
                    1200 300
                "
                fill="none"
                stroke="#ffffff"
                stroke-width="60"
                opacity=".08"/>
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   SEASONAL
------------------------------------------------------------ */

const seasonalBackground = (palette, variant) => {

    const g = linearGradient(
        `sea${variant}`,
        palette,
        125
    );

    const winter =
        variant % 3 === 0;

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="url(#sea${variant})"/>

            <circle
                cx="${190 + variant * 27}"
                cy="${180 + variant * 23}"
                r="${190 + variant * 9}"
                fill="#ffffff"
                opacity=".20"/>

            <circle
                cx="${970 - variant * 21}"
                cy="${900 - variant * 19}"
                r="${250 + variant * 10}"
                fill="#ffffff"
                opacity=".12"/>

            ${winter
                ? `
                    <g
                        stroke="#ffffff"
                        stroke-width="3"
                        opacity=".30">

                        <path d="M260 280 l30 60 m-30 0 l30 -60"/>
                        <path d="M460 170 l30 60 m-30 0 l30 -60"/>
                        <path d="M760 330 l30 60 m-30 0 l30 -60"/>
                        <path d="M930 190 l30 60 m-30 0 l30 -60"/>

                    </g>
                    `
                : `
                    <g
                        fill="#ffffff"
                        opacity=".24">

                        <circle cx="270" cy="280" r="8"/>
                        <circle cx="430" cy="190" r="6"/>
                        <circle cx="710" cy="300" r="10"/>
                        <circle cx="920" cy="220" r="7"/>
                        <circle cx="820" cy="430" r="5"/>

                    </g>
                    `
            }
            `,
            g
        )
    );
};


/* ------------------------------------------------------------
   MINIMAL / EDITORIAL
------------------------------------------------------------ */

const minimalBackground = (palette, variant) => {

    const g = linearGradient(
        `min${variant}`,
        palette,
        135
    );

    return svgData(
        wrap(
            `
            <rect
                width="1200"
                height="1200"
                fill="${palette[0]}"/>

            <path
                d="
                    M0 0
                    L${400 + variant * 25} 0
                    L0 ${400 + variant * 25}
                    Z
                "
                fill="${palette[2]}"
                opacity=".18"/>

            <path
                d="
                    M1200 1200
                    L${800 - variant * 18} 1200
                    L1200 ${800 - variant * 18}
                    Z
                "
                fill="${palette[3]}"
                opacity=".12"/>

            <rect
                x="${180 + variant * 18}"
                y="${180 + variant * 15}"
                width="${840 - variant * 25}"
                height="${840 - variant * 25}"
                rx="${40 + variant * 4}"
                fill="none"
                stroke="${palette[2]}"
                stroke-width="2"
                opacity=".25"/>

            <line
                x1="${160 + variant * 20}"
                y1="${880 - variant * 15}"
                x2="${900 - variant * 15}"
                y2="${880 - variant * 15}"
                stroke="${palette[3]}"
                stroke-width="3"
                opacity=".18"/>

            <circle
                cx="${930 - variant * 25}"
                cy="${220 + variant * 22}"
                r="${80 + variant * 7}"
                fill="url(#min${variant})"
                opacity=".18"/>
            `,
            g
        )
    );
};


/* ============================================================
   LIBRARY ENTRY HELPER
============================================================ */

const makeItem = (
    id,
    name,
    category,
    src,
    tags
) => ({
    id,
    name,
    category,
    tags,
    src
});


/* ============================================================
   100 BACKGROUNDS
============================================================ */

export const CLIP_ART_BACKGROUNDS = [

    /* ========================================================
       ABSTRACT — 10
    ======================================================== */

    ...Array.from({ length: 10 }, (_, i) => {

        const palettes = [
            PALETTES.pearl,
            PALETTES.cloud,
            PALETTES.violet,
            PALETTES.cyan,
            PALETTES.rose,
            PALETTES.blue,
            PALETTES.sand,
            PALETTES.sage,
            PALETTES.plum,
            PALETTES.midnight
        ];

        return makeItem(
            `abstract-${i + 1}`,
            `Abstract Flow ${String(i + 1).padStart(2, "0")}`,
            "Abstract",
            abstractBackground(
                palettes[i],
                i
            ),
            [
                "abstract",
                "modern",
                "professional",
                "gradient",
                "advertising"
            ]
        );
    }),


    /* ========================================================
       GEOMETRIC — 10
    ======================================================== */

    ...Array.from({ length: 10 }, (_, i) => {

        const palettes = [
            PALETTES.pearl,
            PALETTES.navy,
            PALETTES.cloud,
            PALETTES.blue,
            PALETTES.midnight,
            PALETTES.violet,
            PALETTES.sand,
            PALETTES.cyan,
            PALETTES.charcoal,
            PALETTES.gold
        ];

        return makeItem(
            `geometric-${i + 1}`,
            `Modern Geometry ${String(i + 1).padStart(2, "0")}`,
            "Geometric",
            geometricBackground(
                palettes[i],
                i
            ),
            [
                "geometric",
                "modern",
                "shapes",
                "professional",
                "corporate"
            ]
        );
    }),


    /* ========================================================
       GRADIENT — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.violet,
            PALETTES.cyan,
            PALETTES.blue,
            PALETTES.rose,
            PALETTES.sage,
            PALETTES.plum,
            PALETTES.midnight,
            PALETTES.gold
        ];

        return makeItem(
            `gradient-${i + 1}`,
            `Premium Gradient ${String(i + 1).padStart(2, "0")}`,
            "Gradient",
            gradientBackground(
                palettes[i],
                i
            ),
            [
                "gradient",
                "premium",
                "modern",
                "social",
                "advertising"
            ]
        );
    }),


    /* ========================================================
       ORGANIC — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.sage,
            PALETTES.sand,
            PALETTES.rose,
            PALETTES.cyan,
            PALETTES.olive,
            PALETTES.coral,
            PALETTES.spring,
            PALETTES.cloud
        ];

        return makeItem(
            `organic-${i + 1}`,
            `Organic Form ${String(i + 1).padStart(2, "0")}`,
            "Organic",
            organicBackground(
                palettes[i],
                i
            ),
            [
                "organic",
                "soft",
                "minimal",
                "modern",
                "abstract"
            ]
        );
    }),


    /* ========================================================
       BUSINESS — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.navy,
            PALETTES.midnight,
            PALETTES.blue,
            PALETTES.charcoal,
            PALETTES.cyan,
            PALETTES.violet,
            PALETTES.cloud,
            PALETTES.stone
        ];

        return makeItem(
            `business-${i + 1}`,
            `Corporate ${String(i + 1).padStart(2, "0")}`,
            "Business",
            businessBackground(
                palettes[i],
                i
            ),
            [
                "business",
                "corporate",
                "professional",
                "company",
                "technology"
            ]
        );
    }),


    /* ========================================================
       FOOD — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.coral,
            PALETTES.sand,
            PALETTES.terracotta,
            PALETTES.gold,
            PALETTES.olive,
            PALETTES.rose,
            PALETTES.autumn,
            PALETTES.pearl
        ];

        return makeItem(
            `food-${i + 1}`,
            `Culinary ${String(i + 1).padStart(2, "0")}`,
            "Food",
            foodBackground(
                palettes[i],
                i
            ),
            [
                "restaurant",
                "food",
                "cafe",
                "menu",
                "culinary",
                "advertising"
            ]
        );
    }),


    /* ========================================================
       LUXURY — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.midnight,
            PALETTES.champagne,
            PALETTES.plum,
            PALETTES.charcoal,
            PALETTES.gold,
            PALETTES.sand,
            PALETTES.navy,
            PALETTES.stone
        ];

        return makeItem(
            `luxury-${i + 1}`,
            `Luxury ${String(i + 1).padStart(2, "0")}`,
            "Luxury",
            luxuryBackground(
                palettes[i],
                i
            ),
            [
                "luxury",
                "premium",
                "elegant",
                "fashion",
                "hotel",
                "beauty"
            ]
        );
    }),


    /* ========================================================
       PROMOTION — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.coral,
            PALETTES.rose,
            PALETTES.blue,
            PALETTES.violet,
            PALETTES.gold,
            PALETTES.cyan,
            PALETTES.sage,
            PALETTES.terracotta
        ];

        return makeItem(
            `promotion-${i + 1}`,
            `Promotion ${String(i + 1).padStart(2, "0")}`,
            "Promotion",
            promotionBackground(
                palettes[i],
                i
            ),
            [
                "sale",
                "promotion",
                "offer",
                "discount",
                "campaign",
                "marketing"
            ]
        );
    }),


    /* ========================================================
       TECHNOLOGY — 6
    ======================================================== */

    ...Array.from({ length: 6 }, (_, i) => {

        const palettes = [
            PALETTES.midnight,
            PALETTES.navy,
            PALETTES.cyan,
            PALETTES.violet,
            PALETTES.blue,
            PALETTES.charcoal
        ];

        return makeItem(
            `technology-${i + 1}`,
            `Technology ${String(i + 1).padStart(2, "0")}`,
            "Technology",
            technologyBackground(
                palettes[i],
                i
            ),
            [
                "technology",
                "software",
                "digital",
                "startup",
                "tech",
                "modern"
            ]
        );
    }),


    /* ========================================================
       NATURE — 6
    ======================================================== */

    ...Array.from({ length: 6 }, (_, i) => {

        const palettes = [
            PALETTES.sage,
            PALETTES.emerald,
            PALETTES.olive,
            PALETTES.cyan,
            PALETTES.spring,
            PALETTES.sand
        ];

        return makeItem(
            `nature-${i + 1}`,
            `Natural ${String(i + 1).padStart(2, "0")}`,
            "Nature",
            natureBackground(
                palettes[i],
                i
            ),
            [
                "nature",
                "organic",
                "eco",
                "fresh",
                "wellness",
                "green"
            ]
        );
    }),


    /* ========================================================
       SOCIAL MEDIA — 6
    ======================================================== */

    ...Array.from({ length: 6 }, (_, i) => {

        const palettes = [
            PALETTES.violet,
            PALETTES.rose,
            PALETTES.cyan,
            PALETTES.blue,
            PALETTES.plum,
            PALETTES.coral
        ];

        return makeItem(
            `social-${i + 1}`,
            `Social ${String(i + 1).padStart(2, "0")}`,
            "Social Media",
            socialBackground(
                palettes[i],
                i
            ),
            [
                "social",
                "instagram",
                "facebook",
                "content",
                "marketing",
                "modern"
            ]
        );
    }),


    /* ========================================================
       SEASONAL — 6
    ======================================================== */

    ...Array.from({ length: 6 }, (_, i) => {

        const palettes = [
            PALETTES.winter,
            PALETTES.spring,
            PALETTES.autumn,
            PALETTES.festive,
            PALETTES.gold,
            PALETTES.sage
        ];

        return makeItem(
            `seasonal-${i + 1}`,
            `Seasonal ${String(i + 1).padStart(2, "0")}`,
            "Seasonal",
            seasonalBackground(
                palettes[i],
                i
            ),
            [
                "seasonal",
                "event",
                "celebration",
                "campaign",
                "special"
            ]
        );
    }),


    /* ========================================================
       MINIMAL / EDITORIAL — 8
    ======================================================== */

    ...Array.from({ length: 8 }, (_, i) => {

        const palettes = [
            PALETTES.pearl,
            PALETTES.cloud,
            PALETTES.sand,
            PALETTES.stone,
            PALETTES.navy,
            PALETTES.sage,
            PALETTES.champagne,
            PALETTES.charcoal
        ];

        return makeItem(
            `minimal-${i + 1}`,
            `Editorial Minimal ${String(i + 1).padStart(2, "0")}`,
            "Minimal / Editorial",
            minimalBackground(
                palettes[i],
                i
            ),
            [
                "minimal",
                "editorial",
                "clean",
                "white",
                "professional",
                "modern"
            ]
        );
    })

];


/* ============================================================
   CATEGORIES
============================================================ */

export const CLIP_ART_CATEGORIES = [

    "All",

    "Abstract",

    "Geometric",

    "Gradient",

    "Organic",

    "Business",

    "Food",

    "Luxury",

    "Promotion",

    "Technology",

    "Nature",

    "Social Media",

    "Seasonal",

    "Minimal / Editorial"

];


/* ============================================================
   SAFETY CHECK

   Development-time verification that the library actually
   contains the intended number of backgrounds.
============================================================ */

if (
    typeof console !== "undefined" &&
    CLIP_ART_BACKGROUNDS.length !== 100
) {
    console.warn(
        `AdStudio Clip Art Library expected 100 backgrounds, found ${CLIP_ART_BACKGROUNDS.length}.`
    );
}