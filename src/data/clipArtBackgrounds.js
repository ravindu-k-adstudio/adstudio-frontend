/* ============================================================
   AdStudio — Professional Clip Art Background Library
   100 Background Designs
   Background-only SVG artwork
============================================================ */

const svgData = (svg) =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;


/* ============================================================
   PALETTES
============================================================ */

const PALETTES = {
    pearl: ["#ffffff", "#f5f7fa", "#e7ebf0", "#cbd3dc", "#8d99a8"],
    cloud: ["#ffffff", "#eef2f7", "#d9e1ea", "#b7c3d0", "#718096"],
    sand: ["#fffdf8", "#f5ead7", "#e8d1ae", "#c59d68", "#80613d"],
    stone: ["#f9fafb", "#e5e7eb", "#cbd0d6", "#8d949d", "#4b5563"],

    navy: ["#f2f6fb", "#dce8f5", "#9fb9d5", "#294b6f", "#0b1f33"],
    midnight: ["#0a1020", "#111b32", "#18294a", "#284b7a", "#4c83bd"],
    blue: ["#eef7ff", "#cce7ff", "#83c8ff", "#358fe0", "#1555a0"],
    cyan: ["#effdff", "#c7f5f7", "#71dfe4", "#25aeb8", "#126b75"],

    violet: ["#fbf8ff", "#e9dcff", "#c5a7ff", "#7f55d9", "#48238e"],
    rose: ["#fff7fa", "#ffdce8", "#f5a7bf", "#d85882", "#8e274d"],
    coral: ["#fff8f4", "#ffd8ca", "#ff9d83", "#ed5f45", "#9e3022"],

    sage: ["#f7fcf8", "#dcefe2", "#a8d0b2", "#5e9970", "#2f6543"],
    emerald: ["#f2fbf6", "#c9ead8", "#80c5a0", "#2f8b61", "#12563c"],
    olive: ["#fbfcf1", "#e6e8c5", "#c2c687", "#858a42", "#4d501f"],
    spring: ["#f8fff8", "#dff7dd", "#a9e7aa", "#58bd68", "#28753b"],

    plum: ["#fbf7fc", "#e6d3ec", "#bd91c9", "#75407e", "#421c4c"],
    charcoal: ["#f7f7f7", "#d8d8d8", "#9d9d9d", "#555555", "#171717"],

    gold: ["#fffdf5", "#f7e7a9", "#e4bd45", "#b27b13", "#5c3b08"],
    champagne: ["#fffdf7", "#f4e8c7", "#d8bd82", "#9e7939", "#5c431e"],

    terracotta: ["#fff8f5", "#f3d5c9", "#d9957e", "#a95039", "#67291f"],
    autumn: ["#fffaf3", "#f3d1a5", "#db9550", "#a95b25", "#633016"],

    winter: ["#f7fcff", "#dceffb", "#9fd2ed", "#478bb5", "#1f4d6e"],
    festive: ["#fff9f3", "#f4d8d0", "#d77b72", "#8f2933", "#3e1720"]
};


/* ============================================================
   HELPERS
============================================================ */

const esc = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");


const makeSvg = (content, defs = "") =>
    svgData(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="1200"
            viewBox="0 0 1200 1200"
        >
            ${defs ? `<defs>${defs}</defs>` : ""}
            ${content}
        </svg>
    `);


const linearGradient = (
    id,
    colors,
    x1 = "0%",
    y1 = "0%",
    x2 = "100%",
    y2 = "100%"
) => `
    <linearGradient
        id="${id}"
        x1="${x1}"
        y1="${y1}"
        x2="${x2}"
        y2="${y2}"
    >
        <stop offset="0%" stop-color="${colors[0]}"/>
        <stop offset="55%" stop-color="${colors[2] || colors[1]}"/>
        <stop offset="100%" stop-color="${colors[4] || colors[3]}"/>
    </linearGradient>
`;


const radialGradient = (
    id,
    colors,
    cx = "50%",
    cy = "50%"
) => `
    <radialGradient
        id="${id}"
        cx="${cx}"
        cy="${cy}"
        r="75%"
    >
        <stop offset="0%" stop-color="${colors[0]}"/>
        <stop offset="48%" stop-color="${colors[2] || colors[1]}"/>
        <stop offset="100%" stop-color="${colors[4] || colors[3]}"/>
    </radialGradient>
`;


/* ============================================================
   01 — ABSTRACT
   Completely different compositions
============================================================ */

const abstractBackground = (p, variant) => {

    const designs = [

        // Flowing ribbons
        () => {
            const defs = linearGradient("a1", p, "0%", "0%", "100%", "100%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="${p[0]}"/>

                <path
                    d="M-100 850
                       C180 560 270 980 520 690
                       C760 410 900 760 1300 360
                       L1300 1200
                       L-100 1200 Z"
                    fill="url(#a1)"
                    opacity=".88"/>

                <path
                    d="M-100 970
                       C160 690 330 1090 570 790
                       C810 500 970 820 1300 470"
                    fill="none"
                    stroke="${p[3]}"
                    stroke-width="80"
                    opacity=".20"/>

                <path
                    d="M-100 1030
                       C160 760 350 1110 600 820
                       C850 530 1000 850 1300 540"
                    fill="none"
                    stroke="${p[4]}"
                    stroke-width="4"
                    opacity=".55"/>
            `, defs);
        },

        // Orbital rings
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(620 590) rotate(-25)">
                <ellipse
                    rx="420"
                    ry="145"
                    fill="none"
                    stroke="${p[2]}"
                    stroke-width="70"
                    opacity=".32"/>

                <ellipse
                    rx="320"
                    ry="105"
                    fill="none"
                    stroke="${p[3]}"
                    stroke-width="24"
                    opacity=".65"/>

                <ellipse
                    rx="220"
                    ry="70"
                    fill="none"
                    stroke="${p[4]}"
                    stroke-width="8"
                    opacity=".8"/>
            </g>

            <circle
                cx="620"
                cy="590"
                r="145"
                fill="${p[1]}"
                opacity=".45"/>

            <circle
                cx="620"
                cy="590"
                r="70"
                fill="${p[3]}"
                opacity=".32"/>
        `),

        // Diagonal energy
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="0,870 700,0 900,0 200,1200 0,1200"
                fill="${p[2]}"
                opacity=".45"/>

            <polygon
                points="300,1200 1050,0 1200,0 470,1200"
                fill="${p[3]}"
                opacity=".48"/>

            <polygon
                points="620,1200 1150,350 1200,430 700,1200"
                fill="${p[4]}"
                opacity=".38"/>

            <line
                x1="0"
                y1="940"
                x2="700"
                y2="0"
                stroke="${p[4]}"
                stroke-width="6"
                opacity=".8"/>
        `),

        // Liquid circles
        () => {
            const defs = radialGradient("a4", p, "40%", "35%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="${p[0]}"/>

                <circle
                    cx="360"
                    cy="360"
                    r="310"
                    fill="url(#a4)"
                    opacity=".72"/>

                <circle
                    cx="790"
                    cy="420"
                    r="230"
                    fill="${p[3]}"
                    opacity=".28"/>

                <circle
                    cx="760"
                    cy="760"
                    r="330"
                    fill="${p[2]}"
                    opacity=".38"/>

                <circle
                    cx="340"
                    cy="840"
                    r="190"
                    fill="${p[4]}"
                    opacity=".20"/>
            `, defs);
        },

        // Paper cut layers
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 0 H760
                   C640 190 610 310 720 430
                   C830 550 760 690 590 760
                   C400 840 340 1010 420 1200
                   H0 Z"
                fill="${p[1]}"/>

            <path
                d="M0 0 H900
                   C770 190 730 340 840 480
                   C940 610 870 760 680 840
                   C510 910 470 1050 520 1200
                   H0 Z"
                fill="${p[2]}"
                opacity=".72"/>

            <path
                d="M0 0 H1030
                   C910 220 880 390 970 540
                   C1040 660 960 830 800 920
                   C670 990 650 1090 690 1200
                   H0 Z"
                fill="${p[3]}"
                opacity=".58"/>
        `),

        // Radial burst
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)">
                ${Array.from({ length: 18 }, (_, i) => {
            const angle = i * 20;
            const length = 480 + (i % 3) * 80;

            return `
                        <rect
                            x="-9"
                            y="-${length}"
                            width="18"
                            height="${length}"
                            rx="9"
                            fill="${p[(i % 3) + 2]}"
                            opacity="${0.16 + (i % 4) * 0.06}"
                            transform="rotate(${angle})"
                        />
                    `;
        }).join("")}

                <circle
                    r="145"
                    fill="${p[1]}"
                    opacity=".9"/>

                <circle
                    r="72"
                    fill="${p[3]}"
                    opacity=".65"/>
            </g>
        `),

        // Mesh-like wave
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 400
                   Q150 250 300 400
                   T600 400
                   T900 400
                   T1200 400"
                fill="none"
                stroke="${p[2]}"
                stroke-width="130"
                opacity=".25"/>

            <path
                d="M0 610
                   Q150 460 300 610
                   T600 610
                   T900 610
                   T1200 610"
                fill="none"
                stroke="${p[3]}"
                stroke-width="100"
                opacity=".22"/>

            <path
                d="M0 820
                   Q150 670 300 820
                   T600 820
                   T900 820
                   T1200 820"
                fill="none"
                stroke="${p[4]}"
                stroke-width="65"
                opacity=".20"/>
        `),

        // Fragmented polygons
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="0,0 440,0 270,350 0,470"
                fill="${p[2]}"
                opacity=".55"/>

            <polygon
                points="440,0 800,0 640,270 270,350"
                fill="${p[3]}"
                opacity=".34"/>

            <polygon
                points="800,0 1200,0 1200,310 640,270"
                fill="${p[4]}"
                opacity=".26"/>

            <polygon
                points="0,470 270,350 510,690 0,920"
                fill="${p[3]}"
                opacity=".22"/>

            <polygon
                points="640,270 1200,310 1200,740 510,690"
                fill="${p[2]}"
                opacity=".20"/>

            <polygon
                points="510,690 1200,740 1200,1200 0,1200"
                fill="${p[4]}"
                opacity=".15"/>
        `),

        // Glass panels
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <rect
                x="110"
                y="150"
                width="520"
                height="760"
                rx="42"
                fill="${p[2]}"
                opacity=".20"
                transform="rotate(-8 370 530)"/>

            <rect
                x="570"
                y="250"
                width="500"
                height="720"
                rx="42"
                fill="${p[3]}"
                opacity=".18"
                transform="rotate(9 820 610)"/>

            <rect
                x="300"
                y="310"
                width="600"
                height="560"
                rx="38"
                fill="none"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".4"/>
        `),

        // Fine abstract lines
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".30">
                ${Array.from({ length: 13 }, (_, i) => `
                    <path
                        d="
                            M-${100 + i * 35} 1200
                            C${250 + i * 30} 980
                             ${350 + i * 25} 760
                             ${520 + i * 30} 580
                            S${850 + i * 25} 240
                             ${1050 + i * 30} -100
                        "
                        stroke-width="${2 + (i % 3)}"
                    />
                `).join("")}
            </g>

            <circle
                cx="850"
                cy="310"
                r="130"
                fill="${p[2]}"
                opacity=".14"/>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   02 — GEOMETRIC
============================================================ */

const geometricBackground = (p, variant) => {

    const designs = [

        // Isometric grid
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g
                fill="none"
                stroke="${p[3]}"
                stroke-width="3"
                opacity=".25"
            >
                ${Array.from({ length: 11 }, (_, i) => `
                    <path d="M${i * 120} 0 L${i * 120 + 600} 1200"/>
                    <path d="M${1200 - i * 120} 0 L${600 - i * 120} 1200"/>
                `).join("")}
            </g>

            <g fill="${p[2]}" opacity=".22">
                <polygon points="300,300 600,150 900,300 600,450"/>
                <polygon points="300,300 600,450 600,800 300,650"/>
                <polygon points="600,450 900,300 900,650 600,800"/>
            </g>
        `),

        // Hexagonal pattern
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g
                fill="none"
                stroke="${p[3]}"
                stroke-width="7"
                opacity=".25"
            >
                ${Array.from({ length: 7 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => {

                const x = col * 180 + (row % 2 ? 90 : 0) - 80;
                const y = row * 210 - 80;

                return `
                            <polygon
                                points="
                                    ${x},${y + 80}
                                    ${x + 70},${y}
                                    ${x + 140},${y + 80}
                                    ${x + 140},${y + 160}
                                    ${x + 70},${y + 210}
                                    ${x},${y + 160}
                                "
                            />
                        `;
            }).join("")
        ).join("")}
            </g>

            <polygon
                points="600,330 820,455 820,705 600,830 380,705 380,455"
                fill="${p[2]}"
                opacity=".18"/>
        `),

        // Architectural lines
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g
                fill="none"
                stroke="${p[3]}"
                stroke-width="4"
                opacity=".30"
            >
                <rect x="120" y="120" width="960" height="960"/>
                <rect x="210" y="210" width="780" height="780"/>
                <rect x="300" y="300" width="600" height="600"/>
                <rect x="390" y="390" width="420" height="420"/>
            </g>

            <line
                x1="120"
                y1="1080"
                x2="1080"
                y2="120"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".45"/>

            <circle
                cx="600"
                cy="600"
                r="180"
                fill="${p[2]}"
                opacity=".15"/>
        `),

        // Modular blocks
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            ${[
                [80, 100, 300, 220],
                [410, 100, 230, 350],
                [670, 100, 450, 180],
                [80, 350, 190, 470],
                [300, 480, 390, 270],
                [730, 320, 390, 470],
                [80, 860, 500, 220],
                [630, 830, 490, 250]
            ].map((r, i) => `
                <rect
                    x="${r[0]}"
                    y="${r[1]}"
                    width="${r[2]}"
                    height="${r[3]}"
                    rx="${i % 3 === 0 ? 24 : 4}"
                    fill="${p[(i % 3) + 2]}"
                    opacity="${0.13 + (i % 4) * 0.06}"
                />
            `).join("")}
        `),

        // Concentric geometry
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)" fill="none">
                <circle r="460" stroke="${p[2]}" stroke-width="25" opacity=".18"/>
                <circle r="370" stroke="${p[3]}" stroke-width="18" opacity=".25"/>
                <circle r="280" stroke="${p[4]}" stroke-width="12" opacity=".34"/>

                <polygon
                    points="0,-250 216,-125 216,125 0,250 -216,125 -216,-125"
                    stroke="${p[3]}"
                    stroke-width="8"
                    opacity=".35"/>

                <polygon
                    points="0,-140 121,-70 121,70 0,140 -121,70 -121,-70"
                    fill="${p[2]}"
                    opacity=".22"/>
            </g>
        `),

        // Perspective grid
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g
                stroke="${p[3]}"
                stroke-width="4"
                opacity=".24"
            >
                ${Array.from({ length: 11 }, (_, i) => `
                    <line
                        x1="${600 - i * 60}"
                        y1="600"
                        x2="${i * 120}"
                        y2="1200"
                    />

                    <line
                        x1="${600 + i * 60}"
                        y1="600"
                        x2="${1200 - i * 120}"
                        y2="1200"
                    />
                `).join("")}

                ${Array.from({ length: 7 }, (_, i) => `
                    <path
                        d="
                            M${180 + i * 70} ${650 + i * 70}
                            H${1020 - i * 70}
                        "
                        fill="none"
                    />
                `).join("")}
            </g>

            <circle
                cx="600"
                cy="580"
                r="80"
                fill="${p[3]}"
                opacity=".22"/>
        `),

        // Polygon mosaic
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g opacity=".45">
                <polygon points="0,0 350,0 180,300 0,390" fill="${p[2]}"/>
                <polygon points="350,0 700,0 510,280 180,300" fill="${p[3]}"/>
                <polygon points="700,0 1200,0 1200,250 510,280" fill="${p[4]}"/>

                <polygon points="0,390 180,300 430,610 0,760" fill="${p[3]}"/>
                <polygon points="180,300 510,280 700,580 430,610" fill="${p[2]}"/>
                <polygon points="510,280 1200,250 1200,610 700,580" fill="${p[3]}"/>

                <polygon points="0,760 430,610 650,1200 0,1200" fill="${p[2]}"/>
                <polygon points="430,610 700,580 950,1200 650,1200" fill="${p[4]}"/>
                <polygon points="700,580 1200,610 1200,1200 950,1200" fill="${p[2]}"/>
            </g>
        `),

        // Circles and lines
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".3">
                <circle cx="260" cy="260" r="180" stroke-width="12"/>
                <circle cx="260" cy="260" r="110" stroke-width="5"/>

                <circle cx="900" cy="360" r="240" stroke-width="16"/>
                <circle cx="900" cy="360" r="150" stroke-width="6"/>

                <circle cx="560" cy="850" r="280" stroke-width="18"/>
                <circle cx="560" cy="850" r="180" stroke-width="7"/>
            </g>

            <g stroke="${p[4]}" stroke-width="5" opacity=".38">
                <line x1="0" y1="600" x2="1200" y2="180"/>
                <line x1="0" y1="780" x2="1200" y2="360"/>
                <line x1="0" y1="960" x2="1200" y2="540"/>
            </g>
        `),

        // Cubes
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g opacity=".38">
                ${[
                [250, 280, 180],
                [620, 180, 250],
                [760, 620, 190],
                [300, 760, 260]
            ].map(([x, y, s]) => `
                    <g transform="translate(${x} ${y})">
                        <polygon
                            points="0,${s * .28} ${s / 2},0 ${s},${s * .28} ${s / 2},${s * .56}"
                            fill="${p[2]}"/>

                        <polygon
                            points="0,${s * .28} ${s / 2},${s * .56} ${s / 2},${s * 1.05} 0,${s * .77}"
                            fill="${p[3]}"/>

                        <polygon
                            points="${s},${s * .28} ${s / 2},${s * .56} ${s / 2},${s * 1.05} ${s},${s * .77}"
                            fill="${p[4]}"/>
                    </g>
                `).join("")}
            </g>
        `),

        // Triangle composition
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="600,60 1120,1080 80,1080"
                fill="none"
                stroke="${p[3]}"
                stroke-width="12"
                opacity=".3"/>

            <polygon
                points="600,210 950,900 250,900"
                fill="${p[2]}"
                opacity=".18"/>

            <polygon
                points="600,350 810,760 390,760"
                fill="none"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".4"/>

            <circle
                cx="600"
                cy="610"
                r="55"
                fill="${p[3]}"
                opacity=".4"/>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   03 — GRADIENT
   Each design has a different structure
============================================================ */

const gradientBackground = (p, variant) => {

    const designs = [

        () => {
            const defs = linearGradient("g1", p);

            return makeSvg(`
                <rect width="1200" height="1200" fill="url(#g1)"/>

                <circle
                    cx="180"
                    cy="160"
                    r="230"
                    fill="${p[0]}"
                    opacity=".12"/>

                <circle
                    cx="980"
                    cy="900"
                    r="360"
                    fill="${p[0]}"
                    opacity=".10"/>
            `, defs);
        },

        () => {
            const defs = radialGradient("g2", p, "30%", "25%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="${p[4]}"/>
                <rect
                    width="1200"
                    height="1200"
                    fill="url(#g2)"
                    opacity=".95"/>

                <circle
                    cx="850"
                    cy="300"
                    r="280"
                    fill="none"
                    stroke="${p[0]}"
                    stroke-width="90"
                    opacity=".10"/>
            `, defs);
        },

        () => {
            const defs = `
                ${linearGradient("g3a", p, "0%", "0%", "100%", "0%")}
                ${linearGradient("g3b", p, "0%", "100%", "100%", "0%")}
            `;

            return makeSvg(`
                <rect width="1200" height="1200" fill="url(#g3a)"/>

                <path
                    d="M0 780
                       C240 580 390 920 600 720
                       C820 510 980 790 1200 600
                       V1200 H0 Z"
                    fill="url(#g3b)"
                    opacity=".55"/>

                <path
                    d="M0 900
                       C250 700 420 1040 650 820
                       C870 610 1030 870 1200 720"
                    fill="none"
                    stroke="${p[0]}"
                    stroke-width="8"
                    opacity=".22"/>
            `, defs);
        },

        () => {
            const defs = `
                ${radialGradient("g4a", p, "25%", "30%")}
                ${radialGradient("g4b", [...p].reverse(), "75%", "70%")}
            `;

            return makeSvg(`
                <rect width="1200" height="1200" fill="${p[1]}"/>
                <rect width="1200" height="1200" fill="url(#g4a)" opacity=".75"/>
                <rect width="1200" height="1200" fill="url(#g4b)" opacity=".35"/>

                <rect
                    x="90"
                    y="90"
                    width="1020"
                    height="1020"
                    rx="70"
                    fill="none"
                    stroke="${p[0]}"
                    stroke-width="4"
                    opacity=".25"/>
            `, defs);
        },

        () => {
            const defs = linearGradient("g5", p, "0%", "100%", "100%", "0%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="url(#g5)"/>

                ${Array.from({ length: 9 }, (_, i) => `
                    <circle
                        cx="${100 + i * 140}"
                        cy="${180 + (i % 3) * 390}"
                        r="${55 + (i % 4) * 25}"
                        fill="${p[0]}"
                        opacity="${.06 + (i % 3) * .025}"
                    />
                `).join("")}
            `, defs);
        },

        () => {
            const defs = linearGradient("g6", p, "0%", "0%", "0%", "100%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="url(#g6)"/>

                <g opacity=".12" fill="${p[0]}">
                    ${Array.from({ length: 12 }, (_, i) => `
                        <rect
                            x="${i * 110 - 80}"
                            y="${i * 75}"
                            width="220"
                            height="120"
                            rx="60"
                            transform="rotate(-28 ${i * 110} ${i * 75})"
                        />
                    `).join("")}
                </g>
            `, defs);
        },

        () => {
            const defs = radialGradient("g7", p, "50%", "50%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="${p[4]}"/>
                <rect width="1200" height="1200" fill="url(#g7)"/>

                <g fill="none" stroke="${p[0]}" opacity=".15">
                    <circle cx="600" cy="600" r="180" stroke-width="40"/>
                    <circle cx="600" cy="600" r="320" stroke-width="22"/>
                    <circle cx="600" cy="600" r="470" stroke-width="10"/>
                </g>
            `, defs);
        },

        () => {
            const defs = linearGradient("g8", p, "0%", "0%", "100%", "100%");

            return makeSvg(`
                <rect width="1200" height="1200" fill="url(#g8)"/>

                <polygon
                    points="0,0 1200,0 850,1200 0,1200"
                    fill="${p[0]}"
                    opacity=".09"/>

                <polygon
                    points="400,0 1200,0 1200,1200 800,1200"
                    fill="${p[4]}"
                    opacity=".08"/>

                <line
                    x1="0"
                    y1="1050"
                    x2="1200"
                    y2="150"
                    stroke="${p[0]}"
                    stroke-width="5"
                    opacity=".18"/>
            `, defs);
        }
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   04 — ORGANIC
============================================================ */

const organicBackground = (p, variant) => {

    const designs = [

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M-100 400
                   C80 100 380 180 500 400
                   C620 620 870 610 1300 350
                   V1200 H-100 Z"
                fill="${p[2]}"
                opacity=".32"/>

            <path
                d="M-100 650
                   C180 430 350 720 570 680
                   C820 630 930 400 1300 500
                   V1200 H-100 Z"
                fill="${p[3]}"
                opacity=".28"/>

            <path
                d="M0 930
                   C280 720 470 1030 700 900
                   C900 780 1050 650 1200 760"
                fill="none"
                stroke="${p[4]}"
                stroke-width="16"
                opacity=".38"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[2]}" opacity=".22">
                <ellipse cx="260" cy="280" rx="210" ry="120" transform="rotate(-30 260 280)"/>
                <ellipse cx="650" cy="450" rx="280" ry="140" transform="rotate(20 650 450)"/>
                <ellipse cx="950" cy="800" rx="250" ry="150" transform="rotate(-25 950 800)"/>
            </g>

            <g fill="none" stroke="${p[3]}" stroke-width="7" opacity=".35">
                <ellipse cx="300" cy="300" rx="220" ry="120" transform="rotate(-30 300 300)"/>
                <ellipse cx="700" cy="650" rx="310" ry="170" transform="rotate(18 700 650)"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 0
                   C280 150 210 380 430 520
                   C610 640 710 490 860 560
                   C1010 630 1040 850 1200 900
                   V0 Z"
                fill="${p[2]}"
                opacity=".34"/>

            <path
                d="M0 0
                   C310 190 250 410 470 550
                   C650 665 740 530 890 600
                   C1040 670 1070 900 1200 950"
                fill="none"
                stroke="${p[4]}"
                stroke-width="12"
                opacity=".35"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <circle cx="250" cy="250" r="180" fill="${p[2]}" opacity=".20"/>
            <circle cx="520" cy="420" r="240" fill="${p[3]}" opacity=".18"/>
            <circle cx="820" cy="690" r="300" fill="${p[2]}" opacity=".16"/>
            <circle cx="1050" cy="980" r="180" fill="${p[4]}" opacity=".14"/>

            <path
                d="M150 1000
                   C350 820 430 1040 600 900
                   C780 750 850 900 1080 720"
                fill="none"
                stroke="${p[4]}"
                stroke-width="6"
                opacity=".42"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 800
                   C180 520 380 520 530 700
                   C690 890 880 830 1200 540
                   L1200 1200 H0 Z"
                fill="${p[2]}"
                opacity=".28"/>

            <path
                d="M0 920
                   C220 680 390 700 560 850
                   C750 1010 950 920 1200 700"
                fill="none"
                stroke="${p[3]}"
                stroke-width="80"
                opacity=".12"/>

            <path
                d="M0 920
                   C220 680 390 700 560 850
                   C750 1010 950 920 1200 700"
                fill="none"
                stroke="${p[4]}"
                stroke-width="7"
                opacity=".4"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g opacity=".30">
                ${Array.from({ length: 16 }, (_, i) => `
                    <path
                        d="
                            M${-100 + i * 85} 1200
                            C${50 + i * 80} 1000
                             ${30 + i * 100} 850
                             ${180 + i * 90} 650
                            S${400 + i * 90} 280
                             ${500 + i * 90} 0
                        "
                        fill="none"
                        stroke="${p[(i % 3) + 2]}"
                        stroke-width="${8 + (i % 4) * 3}"
                    />
                `).join("")}
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M180 150
                   C410 40 650 180 610 390
                   C570 600 300 570 250 790
                   C210 980 460 1090 680 990"
                fill="none"
                stroke="${p[2]}"
                stroke-width="170"
                opacity=".20"
                stroke-linecap="round"/>

            <path
                d="M520 80
                   C760 0 1030 190 920 420
                   C820 620 630 650 720 850
                   C800 1020 1040 1040 1130 900"
                fill="none"
                stroke="${p[3]}"
                stroke-width="100"
                opacity=".18"
                stroke-linecap="round"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[2]}" opacity=".20">
                <path d="M0 240 C170 120 280 180 350 300 C220 370 120 400 0 370 Z"/>
                <path d="M1200 420 C1030 300 900 350 830 470 C970 540 1080 570 1200 540 Z"/>
                <path d="M0 850 C180 720 330 780 390 920 C240 990 120 1000 0 980 Z"/>
            </g>

            <g fill="none" stroke="${p[4]}" stroke-width="5" opacity=".35">
                <path d="M50 250 C180 160 290 220 330 300"/>
                <path d="M1150 430 C1010 350 920 390 870 470"/>
                <path d="M50 860 C180 780 300 820 360 910"/>
            </g>
        `)

    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   05 — BUSINESS
============================================================ */

const businessBackground = (p, variant) => {

    const designs = [

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <path
                d="M0 0 H720 L420 1200 H0 Z"
                fill="${p[3]}"
                opacity=".35"/>

            <path
                d="M500 0 H1200 V1200 H720 Z"
                fill="${p[2]}"
                opacity=".12"/>

            <line
                x1="720"
                y1="0"
                x2="420"
                y2="1200"
                stroke="${p[0]}"
                stroke-width="5"
                opacity=".3"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".25">
                ${Array.from({ length: 8 }, (_, i) => `
                    <rect
                        x="${100 + i * 45}"
                        y="${100 + i * 45}"
                        width="${1000 - i * 90}"
                        height="${1000 - i * 90}"
                        stroke-width="${2 + i % 3}"
                    />
                `).join("")}
            </g>

            <rect
                x="260"
                y="260"
                width="680"
                height="680"
                rx="20"
                fill="${p[2]}"
                opacity=".10"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g opacity=".24" stroke="${p[3]}" stroke-width="4">
                ${Array.from({ length: 13 }, (_, i) => `
                    <line x1="${100 + i * 85}" y1="100" x2="${100 + i * 85}" y2="1100"/>
                    <line x1="100" y1="${100 + i * 85}" x2="1100" y2="${100 + i * 85}"/>
                `).join("")}
            </g>

            <circle
                cx="600"
                cy="600"
                r="230"
                fill="${p[2]}"
                opacity=".16"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="0,0 900,0 600,1200 0,1200"
                fill="${p[2]}"
                opacity=".14"/>

            <polygon
                points="500,0 1200,0 1200,1200 800,1200"
                fill="${p[3]}"
                opacity=".11"/>

            <g fill="none" stroke="${p[4]}" stroke-width="5" opacity=".25">
                <path d="M0 900 L900 0"/>
                <path d="M150 1200 L1200 150"/>
                <path d="M450 1200 L1200 450"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <circle
                cx="980"
                cy="180"
                r="400"
                fill="${p[3]}"
                opacity=".18"/>

            <circle
                cx="980"
                cy="180"
                r="290"
                fill="none"
                stroke="${p[0]}"
                stroke-width="40"
                opacity=".08"/>

            <rect
                x="100"
                y="780"
                width="620"
                height="250"
                rx="30"
                fill="${p[2]}"
                opacity=".18"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[3]}" opacity=".20">
                <rect x="120" y="150" width="280" height="280"/>
                <rect x="460" y="150" width="280" height="280"/>
                <rect x="800" y="150" width="280" height="280"/>
                <rect x="120" y="490" width="280" height="280"/>
                <rect x="460" y="490" width="280" height="280"/>
                <rect x="800" y="490" width="280" height="280"/>
                <rect x="120" y="830" width="280" height="220"/>
                <rect x="460" y="830" width="280" height="220"/>
                <rect x="800" y="830" width="280" height="220"/>
            </g>

            <g fill="${p[4]}" opacity=".35">
                <circle cx="260" cy="290" r="45"/>
                <circle cx="600" cy="630" r="45"/>
                <circle cx="940" cy="970" r="45"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 1000
                   C250 820 370 950 560 760
                   C750 570 880 680 1200 400"
                fill="none"
                stroke="${p[2]}"
                stroke-width="160"
                opacity=".13"/>

            <path
                d="M0 1000
                   C250 820 370 950 560 760
                   C750 570 880 680 1200 400"
                fill="none"
                stroke="${p[3]}"
                stroke-width="5"
                opacity=".40"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".25">
                <circle cx="180" cy="180" r="80" stroke-width="12"/>
                <circle cx="180" cy="180" r="130" stroke-width="4"/>

                <circle cx="1020" cy="300" r="110" stroke-width="15"/>
                <circle cx="1020" cy="300" r="180" stroke-width="5"/>

                <circle cx="850" cy="980" r="150" stroke-width="15"/>
                <circle cx="850" cy="980" r="230" stroke-width="5"/>
            </g>

            <line
                x1="0"
                y1="600"
                x2="1200"
                y2="600"
                stroke="${p[4]}"
                stroke-width="3"
                opacity=".2"/>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   06 — FOOD
============================================================ */

const foodBackground = (p, variant) => {

    const designs = [

        // Menu-style circles
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <circle cx="170" cy="180" r="210" fill="${p[2]}" opacity=".22"/>
            <circle cx="1020" cy="260" r="180" fill="${p[3]}" opacity=".20"/>
            <circle cx="850" cy="920" r="300" fill="${p[2]}" opacity=".18"/>

            <g fill="none" stroke="${p[4]}" opacity=".30">
                <circle cx="170" cy="180" r="130" stroke-width="6"/>
                <circle cx="1020" cy="260" r="105" stroke-width="5"/>
                <circle cx="850" cy="920" r="210" stroke-width="7"/>
            </g>
        `),

        // Organic food waves
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 700
                   C180 520 330 590 480 720
                   C650 870 820 820 1200 520
                   V1200 H0 Z"
                fill="${p[2]}"
                opacity=".30"/>

            <path
                d="M0 850
                   C210 680 360 760 520 870
                   C730 1010 930 890 1200 700"
                fill="none"
                stroke="${p[3]}"
                stroke-width="80"
                opacity=".15"/>

            <path
                d="M0 850
                   C210 680 360 760 520 870
                   C730 1010 930 890 1200 700"
                fill="none"
                stroke="${p[4]}"
                stroke-width="7"
                opacity=".35"/>
        `),

        // Ingredient-style pattern
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" stroke-width="7" opacity=".25">
                ${Array.from({ length: 20 }, (_, i) => `
                    <circle
                        cx="${80 + (i % 5) * 270}"
                        cy="${80 + Math.floor(i / 5) * 270}"
                        r="${35 + (i % 4) * 15}"
                    />
                `).join("")}
            </g>

            <g fill="${p[2]}" opacity=".14">
                <circle cx="260" cy="260" r="90"/>
                <circle cx="800" cy="530" r="130"/>
                <circle cx="430" cy="950" r="110"/>
                <circle cx="1040" cy="940" r="80"/>
            </g>
        `),

        // Café stripes
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            ${Array.from({ length: 9 }, (_, i) => `
                <rect
                    x="${i * 150 - 250}"
                    y="-200"
                    width="90"
                    height="1600"
                    transform="rotate(18 600 600)"
                    fill="${p[(i % 3) + 2]}"
                    opacity="${.07 + (i % 3) * .03}"
                />
            `).join("")}

            <circle
                cx="900"
                cy="300"
                r="210"
                fill="${p[4]}"
                opacity=".16"/>
        `),

        // Plate-inspired rings
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)">
                <circle r="430" fill="none" stroke="${p[2]}" stroke-width="45" opacity=".13"/>
                <circle r="330" fill="none" stroke="${p[3]}" stroke-width="18" opacity=".22"/>
                <circle r="220" fill="none" stroke="${p[4]}" stroke-width="8" opacity=".30"/>
                <circle r="90" fill="${p[2]}" opacity=".18"/>
            </g>
        `),

        // Recipe card composition
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <rect
                x="100"
                y="120"
                width="1000"
                height="960"
                rx="42"
                fill="${p[2]}"
                opacity=".12"/>

            <rect
                x="170"
                y="190"
                width="860"
                height="260"
                rx="28"
                fill="${p[3]}"
                opacity=".17"/>

            <g fill="none" stroke="${p[4]}" opacity=".3">
                <line x1="180" y1="550" x2="1020" y2="550" stroke-width="5"/>
                <line x1="180" y1="650" x2="880" y2="650" stroke-width="4"/>
                <line x1="180" y1="750" x2="950" y2="750" stroke-width="4"/>
                <line x1="180" y1="850" x2="760" y2="850" stroke-width="4"/>
            </g>
        `),

        // Bold culinary diagonals
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="0,0 500,0 0,900"
                fill="${p[2]}"
                opacity=".32"/>

            <polygon
                points="1200,1200 700,1200 1200,300"
                fill="${p[3]}"
                opacity=".30"/>

            <circle
                cx="600"
                cy="600"
                r="260"
                fill="none"
                stroke="${p[4]}"
                stroke-width="14"
                opacity=".30"/>
        `),

        // Minimal premium food
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <circle
                cx="600"
                cy="600"
                r="360"
                fill="none"
                stroke="${p[2]}"
                stroke-width="100"
                opacity=".13"/>

            <circle
                cx="600"
                cy="600"
                r="250"
                fill="${p[3]}"
                opacity=".10"/>

            <path
                d="M360 600 H840"
                stroke="${p[4]}"
                stroke-width="6"
                opacity=".4"/>

            <path
                d="M600 360 V840"
                stroke="${p[4]}"
                stroke-width="6"
                opacity=".4"/>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   07 — LUXURY
============================================================ */

const luxuryBackground = (p, variant) => {

    const designs = [

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <path
                d="M0 0 H1200 L920 1200 H0 Z"
                fill="${p[2]}"
                opacity=".18"/>

            <path
                d="M0 0 H900 L650 1200 H0 Z"
                fill="${p[3]}"
                opacity=".14"/>

            <line
                x1="900"
                y1="0"
                x2="650"
                y2="1200"
                stroke="${p[1]}"
                stroke-width="5"
                opacity=".7"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g fill="none" stroke="${p[2]}" opacity=".5">
                <rect x="90" y="90" width="1020" height="1020" stroke-width="3"/>
                <rect x="125" y="125" width="950" height="950" stroke-width="2"/>
                <rect x="160" y="160" width="880" height="880" stroke-width="1"/>
            </g>

            <path
                d="M260 1040 V450
                   C260 220 940 220 940 450
                   V1040"
                fill="none"
                stroke="${p[1]}"
                stroke-width="8"
                opacity=".45"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g fill="none" stroke="${p[2]}" opacity=".30">
                ${Array.from({ length: 15 }, (_, i) => `
                    <path
                        d="
                            M${100 + i * 70} 0
                            C${260 + i * 65} 250
                             ${250 + i * 65} 900
                             ${100 + i * 70} 1200
                        "
                        stroke-width="${1 + (i % 3)}"
                    />
                `).join("")}
            </g>

            <circle
                cx="600"
                cy="600"
                r="230"
                fill="none"
                stroke="${p[1]}"
                stroke-width="10"
                opacity=".45"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g transform="translate(600 600)" fill="none">
                <circle r="400" stroke="${p[2]}" stroke-width="50" opacity=".13"/>
                <circle r="300" stroke="${p[1]}" stroke-width="6" opacity=".65"/>
                <circle r="210" stroke="${p[2]}" stroke-width="20" opacity=".20"/>
                <circle r="120" stroke="${p[1]}" stroke-width="4" opacity=".55"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <polygon
                points="600,80 1120,1120 80,1120"
                fill="none"
                stroke="${p[1]}"
                stroke-width="5"
                opacity=".55"/>

            <polygon
                points="600,220 980,980 220,980"
                fill="${p[2]}"
                opacity=".08"/>

            <polygon
                points="600,350 850,850 350,850"
                fill="none"
                stroke="${p[1]}"
                stroke-width="3"
                opacity=".4"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g fill="none" stroke="${p[1]}" opacity=".48">
                <path d="M0 250 Q300 50 600 250 T1200 250" stroke-width="4"/>
                <path d="M0 400 Q300 200 600 400 T1200 400" stroke-width="2"/>
                <path d="M0 800 Q300 600 600 800 T1200 800" stroke-width="4"/>
                <path d="M0 950 Q300 750 600 950 T1200 950" stroke-width="2"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <rect
                x="180"
                y="180"
                width="840"
                height="840"
                rx="420"
                fill="none"
                stroke="${p[1]}"
                stroke-width="4"
                opacity=".55"/>

            <rect
                x="280"
                y="280"
                width="640"
                height="640"
                rx="320"
                fill="${p[2]}"
                opacity=".08"/>

            <circle
                cx="600"
                cy="600"
                r="120"
                fill="none"
                stroke="${p[1]}"
                stroke-width="8"
                opacity=".6"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <path
                d="M0 1000
                   C280 760 400 940 590 720
                   C780 500 930 700 1200 420"
                fill="none"
                stroke="${p[2]}"
                stroke-width="180"
                opacity=".10"/>

            <path
                d="M0 1000
                   C280 760 400 940 590 720
                   C780 500 930 700 1200 420"
                fill="none"
                stroke="${p[1]}"
                stroke-width="4"
                opacity=".65"/>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   08 — PROMOTION
============================================================ */

const promotionBackground = (p, variant) => {

    const designs = [

        // Burst
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)">
                ${Array.from({ length: 24 }, (_, i) => `
                    <polygon
                        points="0,-70 ${18 + (i % 3) * 10},-${480 + (i % 4) * 40} -${18 + (i % 3) * 10},-${480 + (i % 4) * 40}"
                        fill="${p[(i % 3) + 2]}"
                        opacity="${.12 + (i % 4) * .025}"
                        transform="rotate(${i * 15})"
                    />
                `).join("")}

                <circle r="190" fill="${p[2]}" opacity=".20"/>
                <circle r="110" fill="${p[3]}" opacity=".24"/>
            </g>
        `),

        // Diagonal offer
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="0,0 850,0 300,1200 0,1200"
                fill="${p[2]}"
                opacity=".28"/>

            <polygon
                points="420,0 1200,0 1200,500 700,1200 300,1200"
                fill="${p[3]}"
                opacity=".20"/>

            <g stroke="${p[4]}" stroke-width="7" opacity=".35">
                <line x1="0" y1="900" x2="900" y2="0"/>
                <line x1="160" y1="1200" x2="1200" y2="160"/>
            </g>
        `),

        // Concentric sale rings
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)">
                <circle r="500" fill="${p[2]}" opacity=".08"/>
                <circle r="390" fill="none" stroke="${p[3]}" stroke-width="70" opacity=".15"/>
                <circle r="280" fill="none" stroke="${p[2]}" stroke-width="45" opacity=".20"/>
                <circle r="170" fill="none" stroke="${p[4]}" stroke-width="25" opacity=".30"/>
            </g>
        `),

        // Dynamic arrows
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M-100 950
                   L400 450
                   L400 650
                   L850 200
                   L850 430
                   L1300 -20"
                fill="none"
                stroke="${p[2]}"
                stroke-width="110"
                opacity=".16"/>

            <path
                d="M-100 950
                   L400 450
                   L400 650
                   L850 200
                   L850 430
                   L1300 -20"
                fill="none"
                stroke="${p[4]}"
                stroke-width="9"
                opacity=".48"/>
        `),

        // Ticket-inspired
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <rect
                x="130"
                y="270"
                width="940"
                height="660"
                rx="45"
                fill="${p[2]}"
                opacity=".17"/>

            <line
                x1="600"
                y1="270"
                x2="600"
                y2="930"
                stroke="${p[4]}"
                stroke-width="6"
                stroke-dasharray="18 20"
                opacity=".35"/>

            <circle cx="130" cy="600" r="55" fill="${p[0]}"/>
            <circle cx="1070" cy="600" r="55" fill="${p[0]}"/>
        `),

        // Floating circles
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            ${Array.from({ length: 15 }, (_, i) => `
                <circle
                    cx="${100 + ((i * 211) % 1050)}"
                    cy="${120 + ((i * 317) % 960)}"
                    r="${35 + (i % 5) * 18}"
                    fill="${p[(i % 3) + 2]}"
                    opacity="${.10 + (i % 4) * .035}"
                />
            `).join("")}
        `),

        // Bold stripes
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            ${Array.from({ length: 8 }, (_, i) => `
                <rect
                    x="${i * 180 - 300}"
                    y="-250"
                    width="100"
                    height="1700"
                    transform="rotate(25 600 600)"
                    fill="${p[(i % 3) + 2]}"
                    opacity="${.10 + (i % 3) * .04}"
                />
            `).join("")}
        `),

        // Sale geometry
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="600,80 1120,600 600,1120 80,600"
                fill="${p[2]}"
                opacity=".18"/>

            <polygon
                points="600,220 980,600 600,980 220,600"
                fill="${p[3]}"
                opacity=".20"/>

            <polygon
                points="600,360 840,600 600,840 360,600"
                fill="${p[4]}"
                opacity=".18"/>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   09 — TECHNOLOGY
============================================================ */

const technologyBackground = (p, variant) => {

    const designs = [

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g stroke="${p[2]}" stroke-width="4" opacity=".28">
                ${Array.from({ length: 12 }, (_, i) => `
                    <line x1="0" y1="${i * 110}" x2="1200" y2="${i * 110}"/>
                    <line x1="${i * 110}" y1="0" x2="${i * 110}" y2="1200"/>
                `).join("")}
            </g>

            <circle
                cx="600"
                cy="600"
                r="250"
                fill="none"
                stroke="${p[3]}"
                stroke-width="18"
                opacity=".35"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g fill="none" stroke="${p[2]}" stroke-width="5" opacity=".35">
                <path d="M100 600 H350 L450 450 H750 L850 600 H1100"/>
                <path d="M100 800 H300 L400 700 H800 L900 800 H1100"/>
                <path d="M200 400 H400 L500 300 H700 L800 400 H1000"/>
            </g>

            <g fill="${p[3]}" opacity=".55">
                <circle cx="100" cy="600" r="12"/>
                <circle cx="350" cy="600" r="12"/>
                <circle cx="450" cy="450" r="12"/>
                <circle cx="750" cy="450" r="12"/>
                <circle cx="1100" cy="600" r="12"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".28">
                ${Array.from({ length: 8 }, (_, i) => `
                    <circle
                        cx="600"
                        cy="600"
                        r="${100 + i * 75}"
                        stroke-width="${2 + i % 3}"
                    />
                `).join("")}
            </g>

            <g stroke="${p[2]}" stroke-width="5" opacity=".25">
                ${Array.from({ length: 12 }, (_, i) => `
                    <line
                        x1="600"
                        y1="600"
                        x2="${600 + Math.cos(i * Math.PI / 6) * 540}"
                        y2="${600 + Math.sin(i * Math.PI / 6) * 540}"
                    />
                `).join("")}
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g fill="${p[3]}" opacity=".18">
                ${Array.from({ length: 36 }, (_, i) => `
                    <rect
                        x="${80 + (i % 6) * 210}"
                        y="${80 + Math.floor(i / 6) * 180}"
                        width="90"
                        height="90"
                        rx="18"
                    />
                `).join("")}
            </g>

            <g stroke="${p[2]}" stroke-width="4" opacity=".25">
                <line x1="80" y1="80" x2="1120" y2="980"/>
                <line x1="1120" y1="80" x2="80" y2="980"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <path
                d="M0 800
                   C180 500 400 1050 600 700
                   C800 350 1000 900 1200 500"
                fill="none"
                stroke="${p[3]}"
                stroke-width="120"
                opacity=".12"/>

            <path
                d="M0 800
                   C180 500 400 1050 600 700
                   C800 350 1000 900 1200 500"
                fill="none"
                stroke="${p[2]}"
                stroke-width="5"
                opacity=".5"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[4]}"/>

            <g transform="translate(600 600)">
                <polygon
                    points="0,-420 364,-210 364,210 0,420 -364,210 -364,-210"
                    fill="none"
                    stroke="${p[2]}"
                    stroke-width="8"
                    opacity=".3"/>

                <polygon
                    points="0,-300 260,-150 260,150 0,300 -260,150 -260,-150"
                    fill="none"
                    stroke="${p[3]}"
                    stroke-width="6"
                    opacity=".4"/>

                <polygon
                    points="0,-170 147,-85 147,85 0,170 -147,85 -147,-85"
                    fill="${p[3]}"
                    opacity=".18"/>
            </g>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   10 — NATURE
============================================================ */

const natureBackground = (p, variant) => {

    const designs = [

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 850
                   C180 620 330 760 500 860
                   C720 990 880 800 1200 570
                   V1200 H0 Z"
                fill="${p[2]}"
                opacity=".30"/>

            <path
                d="M0 980
                   C250 760 420 900 620 980
                   C820 1060 1010 850 1200 730"
                fill="none"
                stroke="${p[4]}"
                stroke-width="90"
                opacity=".15"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".25">
                ${Array.from({ length: 12 }, (_, i) => `
                    <path
                        d="
                            M${100 + i * 90} 1100
                            C${20 + i * 100} 850
                             ${200 + i * 80} 650
                             ${120 + i * 100} 350
                            C${80 + i * 90} 200
                             ${150 + i * 80} 100
                             ${220 + i * 90} 0
                        "
                        stroke-width="${3 + i % 4}"
                    />
                `).join("")}
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[2]}" opacity=".18">
                ${Array.from({ length: 18 }, (_, i) => `
                    <ellipse
                        cx="${100 + (i % 6) * 210}"
                        cy="${150 + Math.floor(i / 6) * 330}"
                        rx="${45 + (i % 3) * 20}"
                        ry="${100 + (i % 4) * 20}"
                        transform="rotate(${20 + i * 11} ${100 + (i % 6) * 210} ${150 + Math.floor(i / 6) * 330})"
                    />
                `).join("")}
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <circle cx="260" cy="300" r="220" fill="${p[2]}" opacity=".20"/>
            <circle cx="800" cy="760" r="360" fill="${p[3]}" opacity=".16"/>

            <g fill="none" stroke="${p[4]}" opacity=".3">
                <circle cx="260" cy="300" r="150" stroke-width="5"/>
                <circle cx="800" cy="760" r="260" stroke-width="7"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 0
                   C250 180 240 450 460 560
                   C680 670 820 420 1200 620
                   V0 Z"
                fill="${p[2]}"
                opacity=".20"/>

            <path
                d="M0 0
                   C250 180 240 450 460 560
                   C680 670 820 420 1200 620"
                fill="none"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".35"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g stroke="${p[3]}" fill="none" opacity=".25">
                <path d="M100 1050 Q250 650 500 900 T1100 250" stroke-width="7"/>
                <path d="M180 1100 Q300 700 550 940 T1150 320" stroke-width="4"/>
                <path d="M0 850 Q220 500 450 760 T1000 120" stroke-width="3"/>
            </g>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   11 — SOCIAL MEDIA
============================================================ */

const socialBackground = (p, variant) => {

    const designs = [

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)">
                <circle r="420" fill="${p[2]}" opacity=".16"/>
                <circle r="320" fill="none" stroke="${p[3]}" stroke-width="65" opacity=".18"/>
                <circle r="210" fill="none" stroke="${p[4]}" stroke-width="35" opacity=".25"/>
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g>
                ${Array.from({ length: 25 }, (_, i) => `
                    <rect
                        x="${100 + (i % 5) * 240}"
                        y="${100 + Math.floor(i / 5) * 240}"
                        width="150"
                        height="150"
                        rx="${i % 2 ? 75 : 28}"
                        fill="${p[(i % 3) + 2]}"
                        opacity="${.08 + (i % 4) * .025}"
                    />
                `).join("")}
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="none" stroke="${p[3]}" opacity=".25">
                ${Array.from({ length: 10 }, (_, i) => `
                    <circle
                        cx="${120 + i * 110}"
                        cy="${600 + Math.sin(i) * 250}"
                        r="${50 + i * 10}"
                        stroke-width="${3 + i % 4}"
                    />
                `).join("")}
            </g>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            ${Array.from({ length: 9 }, (_, i) => `
                <polygon
                    points="
                        ${100 + i * 130},120
                        ${230 + i * 130},340
                        ${100 + i * 130},560
                        ${-30 + i * 130},340
                    "
                    fill="${p[(i % 3) + 2]}"
                    opacity="${.08 + (i % 3) * .035}"
                />
            `).join("")}
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M-100 900
                   C150 550 350 1050 600 650
                   C850 250 1050 800 1300 350"
                fill="none"
                stroke="${p[2]}"
                stroke-width="170"
                opacity=".12"/>

            <path
                d="M-100 900
                   C150 550 350 1050 600 650
                   C850 250 1050 800 1300 350"
                fill="none"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".35"/>
        `),

        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[3]}" opacity=".16">
                <circle cx="200" cy="200" r="160"/>
                <circle cx="600" cy="200" r="120"/>
                <circle cx="1000" cy="200" r="190"/>
                <circle cx="300" cy="650" r="220"/>
                <circle cx="800" cy="650" r="150"/>
                <circle cx="500" cy="1050" r="190"/>
                <circle cx="1050" cy="1000" r="130"/>
            </g>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   12 — SEASONAL
============================================================ */

const seasonalBackground = (p, variant) => {

    const designs = [

        // Winter crystal
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g stroke="${p[3]}" stroke-width="5" opacity=".22">
                ${[180, 600, 1000].map((x, i) => `
                    <g transform="translate(${x} ${180 + i * 280})">
                        <line x1="-80" y1="0" x2="80" y2="0"/>
                        <line x1="0" y1="-80" x2="0" y2="80"/>
                        <line x1="-55" y1="-55" x2="55" y2="55"/>
                        <line x1="-55" y1="55" x2="55" y2="-55"/>
                    </g>
                `).join("")}
            </g>
        `),

        // Spring
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[2]}" opacity=".22">
                <circle cx="180" cy="180" r="90"/>
                <circle cx="320" cy="300" r="55"/>
                <circle cx="950" cy="220" r="110"/>
                <circle cx="820" cy="900" r="130"/>
                <circle cx="260" cy="980" r="100"/>
            </g>

            <path
                d="M0 800
                   C200 600 360 850 560 700
                   C780 530 920 780 1200 520"
                fill="none"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".35"/>
        `),

        // Autumn
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[2]}" opacity=".22">
                ${Array.from({ length: 16 }, (_, i) => `
                    <ellipse
                        cx="${100 + (i * 137) % 1050}"
                        cy="${100 + (i * 211) % 1000}"
                        rx="35"
                        ry="70"
                        transform="rotate(${i * 27} ${100 + (i * 137) % 1050} ${100 + (i * 211) % 1000})"
                    />
                `).join("")}
            </g>

            <path
                d="M0 950 C300 700 550 980 800 760 C950 630 1080 700 1200 560"
                fill="none"
                stroke="${p[4]}"
                stroke-width="12"
                opacity=".32"/>
        `),

        // Festive
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g fill="${p[3]}" opacity=".25">
                ${Array.from({ length: 20 }, (_, i) => `
                    <circle
                        cx="${80 + (i * 173) % 1100}"
                        cy="${80 + (i * 251) % 1050}"
                        r="${18 + (i % 4) * 10}"
                    />
                `).join("")}
            </g>

            <path
                d="M0 300 Q300 500 600 300 T1200 300"
                fill="none"
                stroke="${p[4]}"
                stroke-width="8"
                opacity=".30"/>
        `),

        // Gold celebration
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g transform="translate(600 600)">
                ${Array.from({ length: 16 }, (_, i) => `
                    <line
                        x1="0"
                        y1="-100"
                        x2="0"
                        y2="-500"
                        stroke="${p[3]}"
                        stroke-width="${4 + i % 3}"
                        opacity=".25"
                        transform="rotate(${i * 22.5})"
                    />
                `).join("")}

                <circle r="180" fill="none" stroke="${p[3]}" stroke-width="35" opacity=".16"/>
            </g>
        `),

        // Seasonal leaves
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 1000
                   C240 800 390 1020 600 850
                   C800 690 980 820 1200 600"
                fill="none"
                stroke="${p[3]}"
                stroke-width="100"
                opacity=".10"/>

            <g fill="${p[2]}" opacity=".20">
                <ellipse cx="180" cy="300" rx="55" ry="110" transform="rotate(-35 180 300)"/>
                <ellipse cx="410" cy="180" rx="45" ry="100" transform="rotate(25 410 180)"/>
                <ellipse cx="850" cy="330" rx="55" ry="120" transform="rotate(-20 850 330)"/>
                <ellipse cx="1020" cy="780" rx="60" ry="130" transform="rotate(35 1020 780)"/>
            </g>
        `)
    ];

    return designs[variant % designs.length]();
};


/* ============================================================
   13 — MINIMAL / EDITORIAL
============================================================ */

const minimalBackground = (p, variant) => {

    const designs = [

        // Fine border
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <rect
                x="70"
                y="70"
                width="1060"
                height="1060"
                fill="none"
                stroke="${p[3]}"
                stroke-width="2"
                opacity=".35"/>

            <rect
                x="105"
                y="105"
                width="990"
                height="990"
                fill="none"
                stroke="${p[4]}"
                stroke-width="1"
                opacity=".22"/>

            <circle
                cx="950"
                cy="250"
                r="150"
                fill="${p[2]}"
                opacity=".12"/>
        `),

        // Editorial diagonal
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <polygon
                points="820,0 1200,0 1200,1200 620,1200"
                fill="${p[2]}"
                opacity=".16"/>

            <line
                x1="780"
                y1="0"
                x2="580"
                y2="1200"
                stroke="${p[4]}"
                stroke-width="5"
                opacity=".38"/>
        `),

        // Typography-inspired rules
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g stroke="${p[4]}" opacity=".28">
                <line x1="120" y1="180" x2="1080" y2="180" stroke-width="4"/>
                <line x1="120" y1="220" x2="780" y2="220" stroke-width="2"/>
                <line x1="120" y1="850" x2="1080" y2="850" stroke-width="4"/>
                <line x1="120" y1="890" x2="920" y2="890" stroke-width="2"/>
            </g>

            <circle
                cx="930"
                cy="560"
                r="180"
                fill="none"
                stroke="${p[3]}"
                stroke-width="4"
                opacity=".25"/>
        `),

        // Offset circles
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <circle
                cx="380"
                cy="480"
                r="310"
                fill="none"
                stroke="${p[2]}"
                stroke-width="90"
                opacity=".10"/>

            <circle
                cx="430"
                cy="530"
                r="230"
                fill="none"
                stroke="${p[3]}"
                stroke-width="4"
                opacity=".35"/>

            <circle
                cx="480"
                cy="580"
                r="120"
                fill="${p[4]}"
                opacity=".08"/>
        `),

        // Editorial grid
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <g stroke="${p[3]}" opacity=".20">
                <line x1="160" y1="100" x2="160" y2="1100" stroke-width="2"/>
                <line x1="420" y1="100" x2="420" y2="1100" stroke-width="2"/>
                <line x1="680" y1="100" x2="680" y2="1100" stroke-width="2"/>
                <line x1="940" y1="100" x2="940" y2="1100" stroke-width="2"/>

                <line x1="100" y1="240" x2="1100" y2="240" stroke-width="2"/>
                <line x1="100" y1="500" x2="1100" y2="500" stroke-width="2"/>
                <line x1="100" y1="760" x2="1100" y2="760" stroke-width="2"/>
                <line x1="100" y1="1020" x2="1100" y2="1020" stroke-width="2"/>
            </g>

            <rect
                x="680"
                y="500"
                width="260"
                height="260"
                fill="${p[2]}"
                opacity=".14"/>
        `),

        // Minimal wave
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M0 820
                   C200 700 340 900 540 800
                   C760 690 920 840 1200 680"
                fill="none"
                stroke="${p[2]}"
                stroke-width="100"
                opacity=".10"/>

            <path
                d="M0 820
                   C200 700 340 900 540 800
                   C760 690 920 840 1200 680"
                fill="none"
                stroke="${p[4]}"
                stroke-width="4"
                opacity=".38"/>
        `),

        // Minimal architecture
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M160 1000 V300 H1040 V1000"
                fill="none"
                stroke="${p[3]}"
                stroke-width="4"
                opacity=".30"/>

            <path
                d="M260 1000 V400 H940 V1000"
                fill="none"
                stroke="${p[4]}"
                stroke-width="2"
                opacity=".25"/>

            <line
                x1="160"
                y1="300"
                x2="600"
                y2="100"
                stroke="${p[2]}"
                stroke-width="5"
                opacity=".30"/>

            <line
                x1="1040"
                y1="300"
                x2="600"
                y2="100"
                stroke="${p[2]}"
                stroke-width="5"
                opacity=".30"/>
        `),

        // Clean organic accent
        () => makeSvg(`
            <rect width="1200" height="1200" fill="${p[0]}"/>

            <path
                d="M-50 0
                   C300 80 500 250 470 500
                   C440 750 220 850 0 800"
                fill="${p[2]}"
                opacity=".12"/>

            <path
                d="M-50 0
                   C300 80 500 250 470 500
                   C440 750 220 850 0 800"
                fill="none"
                stroke="${p[4]}"
                stroke-width="5"
                opacity=".30"/>
        `)
    ];

    return designs[variant % designs.length]();
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
   PALETTE SELECTIONS
============================================================ */

const ABSTRACT_PALETTES = [
    PALETTES.pearl,
    PALETTES.violet,
    PALETTES.cyan,
    PALETTES.rose,
    PALETTES.blue,
    PALETTES.sage,
    PALETTES.plum,
    PALETTES.midnight,
    PALETTES.coral,
    PALETTES.gold
];

const GEOMETRIC_PALETTES = [
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

const GRADIENT_PALETTES = [
    PALETTES.violet,
    PALETTES.cyan,
    PALETTES.blue,
    PALETTES.rose,
    PALETTES.sage,
    PALETTES.plum,
    PALETTES.midnight,
    PALETTES.gold
];

const ORGANIC_PALETTES = [
    PALETTES.sage,
    PALETTES.sand,
    PALETTES.rose,
    PALETTES.cyan,
    PALETTES.olive,
    PALETTES.coral,
    PALETTES.spring,
    PALETTES.cloud
];

const BUSINESS_PALETTES = [
    PALETTES.navy,
    PALETTES.midnight,
    PALETTES.blue,
    PALETTES.charcoal,
    PALETTES.cyan,
    PALETTES.violet,
    PALETTES.cloud,
    PALETTES.stone
];

const FOOD_PALETTES = [
    PALETTES.coral,
    PALETTES.sand,
    PALETTES.terracotta,
    PALETTES.gold,
    PALETTES.olive,
    PALETTES.rose,
    PALETTES.autumn,
    PALETTES.pearl
];

const LUXURY_PALETTES = [
    PALETTES.midnight,
    PALETTES.champagne,
    PALETTES.plum,
    PALETTES.charcoal,
    PALETTES.gold,
    PALETTES.sand,
    PALETTES.navy,
    PALETTES.stone
];

const PROMOTION_PALETTES = [
    PALETTES.coral,
    PALETTES.rose,
    PALETTES.blue,
    PALETTES.violet,
    PALETTES.gold,
    PALETTES.cyan,
    PALETTES.sage,
    PALETTES.terracotta
];

const TECHNOLOGY_PALETTES = [
    PALETTES.midnight,
    PALETTES.navy,
    PALETTES.cyan,
    PALETTES.violet,
    PALETTES.blue,
    PALETTES.charcoal
];

const NATURE_PALETTES = [
    PALETTES.sage,
    PALETTES.emerald,
    PALETTES.olive,
    PALETTES.cyan,
    PALETTES.spring,
    PALETTES.sand
];

const SOCIAL_PALETTES = [
    PALETTES.violet,
    PALETTES.rose,
    PALETTES.cyan,
    PALETTES.blue,
    PALETTES.plum,
    PALETTES.coral
];

const SEASONAL_PALETTES = [
    PALETTES.winter,
    PALETTES.spring,
    PALETTES.autumn,
    PALETTES.festive,
    PALETTES.gold,
    PALETTES.sage
];

const MINIMAL_PALETTES = [
    PALETTES.pearl,
    PALETTES.cloud,
    PALETTES.sand,
    PALETTES.stone,
    PALETTES.navy,
    PALETTES.sage,
    PALETTES.champagne,
    PALETTES.charcoal
];





/* ============================================================
   ADSTUDIO — BUSINESS IMAGE BACKGROUNDS
   12 business-specific designs with open space for user content
============================================================ */

const BUSINESS_IMAGE_DESIGNS = [
    {
        id: "restaurant",
        name: "Restaurant",
        color: "#F97316",
        pale: "#FFF0E5",
        icon: "🍔",
        placement: "bottom-left",
        shape: "circle",
    },
    {
        id: "cafe",
        name: "Cafe",
        color: "#8B5E3C",
        pale: "#F8EEE3",
        icon: "☕",
        placement: "top-right",
        shape: "blob",
    },
    {
        id: "fashion",
        name: "Fashion",
        color: "#D94675",
        pale: "#FCE8EF",
        icon: "👗",
        placement: "right",
        shape: "arch",
    },
    {
        id: "photography",
        name: "Photography",
        color: "#7963D9",
        pale: "#EFECFF",
        icon: "📷",
        placement: "bottom-right",
        shape: "circle",
    },
    {
        id: "resort",
        name: "Resort",
        color: "#0D9488",
        pale: "#DDF7F0",
        icon: "🌴",
        placement: "top-left",
        shape: "blob",
    },
    {
        id: "fitness",
        name: "Fitness",
        color: "#E33D4F",
        pale: "#FFE9EB",
        icon: "🏋️",
        placement: "bottom-right",
        shape: "diagonal",
    },
    {
        id: "beauty",
        name: "Beauty",
        color: "#D66BA0",
        pale: "#FCEAF3",
        icon: "✨",
        placement: "right",
        shape: "arch",
    },
    {
        id: "auto",
        name: "Auto",
        color: "#2876D2",
        pale: "#E7F1FF",
        icon: "🚘",
        placement: "bottom-left",
        shape: "diagonal",
    },
    {
        id: "grocery",
        name: "Grocery",
        color: "#31965C",
        pale: "#E4F7E9",
        icon: "🥑",
        placement: "top-right",
        shape: "circle",
    },
    {
        id: "real-estate",
        name: "Real Estate",
        color: "#3276B8",
        pale: "#E6F1FC",
        icon: "🏡",
        placement: "right",
        shape: "arch",
    },
    {
        id: "travel",
        name: "Travel",
        color: "#0891B2",
        pale: "#DFF7FC",
        icon: "🧳",
        placement: "bottom-left",
        shape: "blob",
    },
    {
        id: "education",
        name: "Education",
        color: "#3457B2",
        pale: "#E9EEFF",
        icon: "🎓",
        placement: "top-right",
        shape: "circle",
    },
];

function createBusinessImageBackground(design, index) {
    const W = 1200;
    const H = 1200;

    const rightSide = ["right", "top-right", "bottom-right"].includes(
        design.placement
    );

    const topSide = design.placement.startsWith("top");
    const bottomSide = design.placement.startsWith("bottom");

    const cx = design.placement.includes("left")
        ? 220
        : rightSide
            ? 980
            : 980;

    const cy = topSide
        ? 220
        : bottomSide
            ? 980
            : 600;

    const imageSize = 330;
    const imageX = cx - imageSize / 2;
    const imageY = cy - imageSize / 2;

    let shapeMarkup = "";

    if (design.shape === "circle") {
        shapeMarkup = `
            <circle cx="${cx}" cy="${cy}" r="230"
                fill="${design.pale}"/>
            <circle cx="${cx}" cy="${cy}" r="190"
                fill="${design.color}" opacity=".12"/>
            <circle cx="${cx + 125}" cy="${cy - 150}" r="36"
                fill="${design.color}" opacity=".22"/>
        `;
    } else if (design.shape === "blob") {
        shapeMarkup = `
            <path
                d="M ${cx - 205} ${cy - 125}
                   C ${cx - 125} ${cy - 270},
                     ${cx + 100} ${cy - 230},
                     ${cx + 200} ${cy - 80}
                   C ${cx + 285} ${cy + 65},
                     ${cx + 145} ${cy + 225},
                     ${cx - 25} ${cy + 210}
                   C ${cx - 215} ${cy + 200},
                     ${cx - 280} ${cy + 15},
                     ${cx - 205} ${cy - 125} Z"
                fill="${design.pale}"/>
            <circle cx="${cx + 160}" cy="${cy + 155}" r="45"
                fill="${design.color}" opacity=".20"/>
        `;
    } else if (design.shape === "arch") {
        shapeMarkup = `
            <path
                d="M ${cx - 205} ${cy + 210}
                   V ${cy - 35}
                   A 205 205 0 0 1 ${cx + 205} ${cy - 35}
                   V ${cy + 210} Z"
                fill="${design.pale}"/>
            <path
                d="M ${cx - 155} ${cy + 210}
                   V ${cy - 15}
                   A 155 155 0 0 1 ${cx + 155} ${cy - 15}
                   V ${cy + 210} Z"
                fill="${design.color}" opacity=".13"/>
        `;
    } else {
        shapeMarkup = `
            <path
                d="M ${cx - 260} ${cy - 130}
                   L ${cx + 100} ${cy - 260}
                   L ${cx + 270} ${cy + 100}
                   L ${cx - 90} ${cy + 260} Z"
                fill="${design.pale}"/>
            <path
                d="M ${cx + 100} ${cy - 260}
                   L ${cx + 270} ${cy + 100}
                   L ${cx + 160} ${cy + 150}
                   L ${cx - 10} ${cy - 210} Z"
                fill="${design.color}" opacity=".16"/>
        `;
    }

    const dots = `
        <circle cx="${cx - 210}" cy="${cy - 200}" r="9"
            fill="${design.color}" opacity=".4"/>
        <circle cx="${cx - 175}" cy="${cy - 220}" r="6"
            fill="${design.color}" opacity=".25"/>
        <circle cx="${cx - 205}" cy="${cy - 165}" r="5"
            fill="${design.color}" opacity=".3"/>
    `;

    /*
      Keep the opposite side clean so users can add their own
      headings, prices, contact details and other design elements.
    */
    const emptySpace = design.placement.includes("left")
        ? `<path d="M 460 0 H 1200 V 1200 H 460 Z" fill="#FFFFFF"/>`
        : `<path d="M 0 0 H 740 V 1200 H 0 Z" fill="#FFFFFF"/>`;

    /*
      Small emoji illustration in a white circle.
      The pale shape and accent geometry provide the main artwork.
    */
    const illustration = `
        <circle cx="${cx}" cy="${cy}" r="150"
            fill="#FFFFFF" stroke="${design.color}"
            stroke-opacity=".20" stroke-width="5"/>
        <text x="${cx}" y="${cy + 44}"
            font-size="178" text-anchor="middle"
            font-family="Arial, sans-serif">${design.icon}</text>
    `;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
            <defs>
                <linearGradient id="accent-${index}"
                    x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${design.pale}"/>
                    <stop offset="100%" stop-color="${design.color}"
                        stop-opacity=".24"/>
                </linearGradient>
            </defs>

            <rect width="${W}" height="${H}" fill="#FFFFFF"/>

            <path d="M 0 0 H 1200 V 1200 H 0 Z"
                fill="url(#accent-${index})" opacity=".10"/>

            ${shapeMarkup}
            ${dots}

            <path
                d="${design.placement.includes("left")
            ? "M 0 0 H 105 Q 65 160 0 200 Z"
            : "M 1200 1200 H 1090 Q 1140 1040 1200 1000 Z"}"
                fill="${design.color}" opacity=".18"/>

            ${illustration}
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const BUSINESS_IMAGE_BACKGROUNDS = BUSINESS_IMAGE_DESIGNS.map(
    (design, index) => ({
        id: `business-image-${design.id}`,
        name: `${design.name} — Image Accent`,
        category: design.name,
        src: createBusinessImageBackground(design, index),
        tags: [
            design.name.toLowerCase(),
            "business image",
            "business background",
            "white space",
            "minimal",
            "gradient",
            "advertising",
        ],
    })
);





/* ============================================================
   100 BACKGROUNDS
============================================================ */

const BASE_CLIP_ART_BACKGROUNDS = [

    /* ABSTRACT — 10 */

    ...Array.from({ length: 10 }, (_, i) =>
        makeItem(
            `abstract-${i + 1}`,
            `Abstract ${String(i + 1).padStart(2, "0")}`,
            "Abstract",
            abstractBackground(
                ABSTRACT_PALETTES[i],
                i
            ),
            [
                "abstract",
                "modern",
                "creative",
                "professional",
                "advertising"
            ]
        )
    ),


    /* GEOMETRIC — 10 */

    ...Array.from({ length: 10 }, (_, i) =>
        makeItem(
            `geometric-${i + 1}`,
            `Geometric ${String(i + 1).padStart(2, "0")}`,
            "Geometric",
            geometricBackground(
                GEOMETRIC_PALETTES[i],
                i
            ),
            [
                "geometric",
                "modern",
                "pattern",
                "corporate",
                "professional"
            ]
        )
    ),


    /* GRADIENT — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `gradient-${i + 1}`,
            `Gradient ${String(i + 1).padStart(2, "0")}`,
            "Gradient",
            gradientBackground(
                GRADIENT_PALETTES[i],
                i
            ),
            [
                "gradient",
                "premium",
                "modern",
                "social",
                "advertising"
            ]
        )
    ),


    /* ORGANIC — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `organic-${i + 1}`,
            `Organic ${String(i + 1).padStart(2, "0")}`,
            "Organic",
            organicBackground(
                ORGANIC_PALETTES[i],
                i
            ),
            [
                "organic",
                "natural",
                "soft",
                "modern",
                "creative"
            ]
        )
    ),


    /* BUSINESS — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `business-${i + 1}`,
            `Corporate ${String(i + 1).padStart(2, "0")}`,
            "Business",
            businessBackground(
                BUSINESS_PALETTES[i],
                i
            ),
            [
                "business",
                "corporate",
                "professional",
                "company",
                "technology"
            ]
        )
    ),


    /* FOOD — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `food-${i + 1}`,
            `Culinary ${String(i + 1).padStart(2, "0")}`,
            "Food",
            foodBackground(
                FOOD_PALETTES[i],
                i
            ),
            [
                "food",
                "restaurant",
                "cafe",
                "menu",
                "culinary",
                "advertising"
            ]
        )
    ),


    /* LUXURY — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `luxury-${i + 1}`,
            `Luxury ${String(i + 1).padStart(2, "0")}`,
            "Luxury",
            luxuryBackground(
                LUXURY_PALETTES[i],
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
        )
    ),


    /* PROMOTION — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `promotion-${i + 1}`,
            `Promotion ${String(i + 1).padStart(2, "0")}`,
            "Promotion",
            promotionBackground(
                PROMOTION_PALETTES[i],
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
        )
    ),


    /* TECHNOLOGY — 6 */

    ...Array.from({ length: 6 }, (_, i) =>
        makeItem(
            `technology-${i + 1}`,
            `Technology ${String(i + 1).padStart(2, "0")}`,
            "Technology",
            technologyBackground(
                TECHNOLOGY_PALETTES[i],
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
        )
    ),


    /* NATURE — 6 */

    ...Array.from({ length: 6 }, (_, i) =>
        makeItem(
            `nature-${i + 1}`,
            `Natural ${String(i + 1).padStart(2, "0")}`,
            "Nature",
            natureBackground(
                NATURE_PALETTES[i],
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
        )
    ),


    /* SOCIAL MEDIA — 6 */

    ...Array.from({ length: 6 }, (_, i) =>
        makeItem(
            `social-${i + 1}`,
            `Social ${String(i + 1).padStart(2, "0")}`,
            "Social Media",
            socialBackground(
                SOCIAL_PALETTES[i],
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
        )
    ),


    /* SEASONAL — 6 */

    ...Array.from({ length: 6 }, (_, i) =>
        makeItem(
            `seasonal-${i + 1}`,
            `Seasonal ${String(i + 1).padStart(2, "0")}`,
            "Seasonal",
            seasonalBackground(
                SEASONAL_PALETTES[i],
                i
            ),
            [
                "seasonal",
                "event",
                "celebration",
                "campaign",
                "special"
            ]
        )
    ),


    /* MINIMAL / EDITORIAL — 8 */

    ...Array.from({ length: 8 }, (_, i) =>
        makeItem(
            `minimal-${i + 1}`,
            `Editorial ${String(i + 1).padStart(2, "0")}`,
            "Minimal / Editorial",
            minimalBackground(
                MINIMAL_PALETTES[i],
                i
            ),
            [
                "minimal",
                "editorial",
                "clean",
                "professional",
                "modern"
            ]
        )
    )

];


/* ============================================================
   ADSTUDIO — MODERN COLOR POP COLLECTION
   120 additional backgrounds: 12 categories × 10 designs.
============================================================ */

const MODERN_COLORWAYS = [
    { bg: "#FFF1F2", c1: "#FB7185", c2: "#F97316", c3: "#FDE047", ink: "#4A1022" },
    { bg: "#F5F3FF", c1: "#8B5CF6", c2: "#EC4899", c3: "#22D3EE", ink: "#251044" },
    { bg: "#ECFEFF", c1: "#06B6D4", c2: "#3B82F6", c3: "#A3E635", ink: "#083344" },
    { bg: "#F0FDF4", c1: "#22C55E", c2: "#14B8A6", c3: "#FACC15", ink: "#052E24" },
    { bg: "#FFF7ED", c1: "#F97316", c2: "#F43F5E", c3: "#A855F7", ink: "#431407" },
    { bg: "#EFF6FF", c1: "#2563EB", c2: "#7C3AED", c3: "#38BDF8", ink: "#172554" },
    { bg: "#FDF4FF", c1: "#D946EF", c2: "#8B5CF6", c3: "#FB7185", ink: "#4A044E" },
    { bg: "#FFFBEB", c1: "#EAB308", c2: "#F97316", c3: "#F43F5E", ink: "#422006" },
    { bg: "#111827", c1: "#A78BFA", c2: "#22D3EE", c3: "#F472B6", ink: "#F9FAFB" },
    { bg: "#0F172A", c1: "#38BDF8", c2: "#818CF8", c3: "#34D399", ink: "#F8FAFC" },
    { bg: "#18181B", c1: "#FBBF24", c2: "#FB7185", c3: "#C084FC", ink: "#FAFAFA" },
    { bg: "#F8FAFC", c1: "#0EA5E9", c2: "#8B5CF6", c3: "#F472B6", ink: "#0F172A" },
];

const MODERN_COLLECTION_CATEGORIES = [
    "Abstract", "Geometric", "Gradient", "Organic", "Business",
    "Food", "Luxury", "Promotion", "Technology", "Nature",
    "Social Media", "Seasonal"
];

const MODERN_COLLECTION_NAMES = [
    "Aurora Flow", "Prism Pop", "Liquid Layers", "Neon Bloom",
    "Glass Studio", "Color Burst", "Soft Geometry",
    "Wave Motion", "Glow Orbit", "Editorial Pop"
];

function modernSvgBackground(category, variant, palette, itemIndex) {
    const { bg, c1, c2, c3, ink } = palette;
    const id = `modern${itemIndex}`;
    const grad = `gradient${id}`;
    const grad2 = `gradient2${id}`;
    const glow = `glow${id}`;

    const flip = variant % 2 === 1;
    const x = flip ? 280 : 920;
    const dark = ["#111827", "#0F172A", "#18181B"].includes(bg);
    const panel = dark ? "#111827" : "#FFFFFF";
    const panelOpacity = dark ? ".82" : ".87";

    let art = "";

    switch (variant) {
        case 0:
            art = `
        <path d="M-80 770 C130 470 300 990 520 670
          S910 430 1280 170 L1280 1280 L-80 1280Z"
          fill="url(#${grad})"/>
        <path d="M-100 900 C160 610 340 1060 600 760
          S1000 560 1280 340" fill="none" stroke="${c3}"
          stroke-width="64" stroke-linecap="round" opacity=".78"/>
        <path d="M-100 990 C160 700 340 1150 600 850
          S1000 650 1280 430" fill="none" stroke="${c2}"
          stroke-width="14" stroke-linecap="round"/>`;
            break;

        case 1:
            art = `
        <circle cx="${x}" cy="350" r="250" fill="url(#${grad})"/>
        <circle cx="${x}" cy="350" r="185" fill="none"
          stroke="${c3}" stroke-width="38"/>
        <circle cx="${x}" cy="350" r="118" fill="url(#${grad2})"/>
        <circle cx="${x - 45}" cy="305" r="34" fill="#FFFFFF" opacity=".45"/>`;
            break;

        case 2:
            art = `
        <path d="M${flip ? 0 : 1200} 0 H${flip ? 510 : 690}
          C${flip ? 760 : 440} 220 ${flip ? 250 : 950} 420
          ${flip ? 520 : 680} 640 C${flip ? 760 : 440} 870
          ${flip ? 320 : 880} 1040 ${flip ? 0 : 1200} 1200Z"
          fill="url(#${grad})"/>
        <path d="M${flip ? 0 : 1200} 80 H${flip ? 440 : 760}
          C${flip ? 650 : 550} 300 ${flip ? 310 : 890} 490
          ${flip ? 470 : 730} 690 C${flip ? 650 : 550} 880
          ${flip ? 300 : 900} 1050 ${flip ? 0 : 1200} 1120Z"
          fill="${c3}" opacity=".48"/>`;
            break;

        case 3:
            art = `
        <g transform="translate(${x} 600) rotate(-18)">
          <rect x="-210" y="-260" width="420" height="520"
            rx="72" fill="url(#${grad})"/>
          <rect x="-155" y="-205" width="310" height="410"
            rx="54" fill="none" stroke="#FFFFFF"
            stroke-width="4" opacity=".65"/>
          <circle cx="60" cy="-90" r="94" fill="${c3}"/>
          <path d="M-135 95 Q0 -25 135 95 L135 175 L-135 175Z"
            fill="${c2}"/>
        </g>`;
            break;

        case 4:
            art = `
        <circle cx="${x}" cy="600" r="275" fill="url(#${glow})"/>
        <circle cx="${x}" cy="600" r="220" fill="url(#${grad})"/>
        <circle cx="${x - 45}" cy="550" r="125" fill="#FFFFFF" opacity=".22"/>
        <circle cx="${x + 65}" cy="650" r="90" fill="${c3}" opacity=".9"/>
        <circle cx="${x + 65}" cy="650" r="48" fill="${c2}"/>`;
            break;

        case 5:
            art = `
        <g transform="translate(${x} 600) rotate(20)">
          <rect x="-230" y="-230" width="460" height="460"
            rx="52" fill="url(#${grad})"/>
          <rect x="-170" y="-170" width="340" height="340"
            rx="40" fill="${c3}" opacity=".8"/>
          <rect x="-105" y="-105" width="210" height="210"
            rx="32" fill="${c2}" opacity=".9"/>
          <circle r="55" fill="#FFFFFF" opacity=".85"/>
        </g>`;
            break;

        case 6:
            art = `
        <g fill="${c1}" opacity=".8">
          ${Array.from({ length: 7 }, (_, i) =>
                `<circle cx="${x - 150 + i * 48}" cy="${340 + (i % 2) * 28}"
              r="${12 + (i % 3) * 4}"/>`).join("")}
        </g>
        <path d="M${x - 240} 720 Q${x - 80} 430 ${x + 60} 690
          T${x + 245} 620" fill="none" stroke="url(#${grad})"
          stroke-width="78" stroke-linecap="round"/>
        <path d="M${x - 225} 820 Q${x - 60} 530 ${x + 75} 790
          T${x + 245} 720" fill="none" stroke="${c3}"
          stroke-width="22" stroke-linecap="round"/>`;
            break;

        case 7:
            art = `
        <g transform="translate(${x} 600)">
          <ellipse rx="260" ry="110" transform="rotate(-35)"
            fill="none" stroke="${c1}" stroke-width="55" opacity=".8"/>
          <ellipse rx="220" ry="88" transform="rotate(35)"
            fill="none" stroke="${c2}" stroke-width="35"/>
          <circle r="105" fill="url(#${grad})"/>
          <circle cx="-32" cy="-30" r="31" fill="#FFFFFF" opacity=".6"/>
          <circle cx="205" cy="-95" r="28" fill="${c3}"/>
        </g>`;
            break;

        case 8:
            art = `
        <path d="M${flip ? 0 : 1200} 0 L${flip ? 430 : 770} 0
          L${flip ? 740 : 460} 1200 L${flip ? 0 : 1200} 1200Z"
          fill="${c1}" opacity=".28"/>
        <path d="M${flip ? 0 : 1200} 0 L${flip ? 260 : 940} 0
          L${flip ? 570 : 630} 1200 L${flip ? 0 : 1200} 1200Z"
          fill="url(#${grad})"/>
        <path d="M${flip ? 0 : 1200} 0 L${flip ? 110 : 1090} 0
          L${flip ? 420 : 780} 1200 L${flip ? 0 : 1200} 1200Z"
          fill="${c3}" opacity=".58"/>`;
            break;

        default:
            art = `
        <g transform="translate(${x} 600)">
          <circle r="235" fill="url(#${grad})"/>
          <circle r="170" fill="${c3}" opacity=".7"/>
          <circle r="105" fill="${c2}" opacity=".9"/>
          <path d="M-200 90 Q-50 -100 80 55 T220 -10"
            fill="none" stroke="#FFFFFF" stroke-width="18"
            stroke-linecap="round" opacity=".8"/>
        </g>`;
    }

    const dots = Array.from({ length: 16 }, (_, i) => {
        const dx = (i % 4) * 24;
        const dy = Math.floor(i / 4) * 24;
        return `<circle cx="${flip ? 80 + dx : 1040 + dx}"
      cy="${flip ? 1000 + dy : 100 + dy}" r="5"
      fill="${c3}" opacity=".65"/>`;
    }).join("");

    return svgData(`
    <svg xmlns="http://www.w3.org/2000/svg"
      width="1200" height="1200" viewBox="0 0 1200 1200">
      <defs>
        <linearGradient id="${grad}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="52%" stop-color="${c2}"/>
          <stop offset="100%" stop-color="${c3}"/>
        </linearGradient>
        <linearGradient id="${grad2}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c3}"/>
          <stop offset="100%" stop-color="${c1}"/>
        </linearGradient>
        <radialGradient id="${glow}">
          <stop offset="0%" stop-color="${c2}" stop-opacity=".65"/>
          <stop offset="100%" stop-color="${c2}" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow${id}" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="26"/>
        </filter>
      </defs>

      <rect width="1200" height="1200" fill="${bg}"/>
      <rect width="1200" height="1200" fill="url(#${grad})" opacity=".14"/>
      <circle cx="${flip ? 170 : 1030}" cy="${variant % 3 === 0 ? 180 : 1020}"
        r="320" fill="url(#${glow})"/>

      ${art}
      ${dots}

      <!-- Clear text area with soft shadow -->
      <rect x="${flip ? 515 : 55}" y="145" width="630" height="910"
        rx="44" fill="${ink}" opacity=".15"
        filter="url(#shadow${id})"/>
      <rect x="${flip ? 500 : 45}" y="135" width="655" height="930"
        rx="40" fill="${panel}" opacity="${panelOpacity}"/>

      <rect x="${flip ? 545 : 90}" y="180" width="96" height="10"
        rx="5" fill="${c1}"/>
      <rect x="${flip ? 652 : 197}" y="180" width="38" height="10"
        rx="5" fill="${c2}"/>

      <rect x="${flip ? 545 : 90}" y="220" width="565" height="785"
        rx="26" fill="${panel}" opacity=".18"/>

      <path d="M0 1135 Q260 1070 470 1150 T900 1130
        T1200 1110 L1200 1200 L0 1200Z"
        fill="${c1}" opacity=".20"/>

      <rect x="18" y="18" width="1164" height="1164" rx="42"
        fill="none" stroke="${ink}" stroke-opacity=".12" stroke-width="2"/>
    </svg>
  `);
}

const MODERN_COLOR_POP_BACKGROUNDS =
    MODERN_COLLECTION_CATEGORIES.flatMap((category, categoryIndex) =>
        Array.from({ length: 10 }, (_, variant) => {
            const palette = MODERN_COLORWAYS[
                (categoryIndex * 5 + variant) % MODERN_COLORWAYS.length
            ];

            const name = MODERN_COLLECTION_NAMES[variant];

            const categoryTags = {
                Abstract: ["abstract", "colorful", "fluid", "modern", "gradient"],
                Geometric: ["geometric", "bold", "shapes", "modern", "colorful"],
                Gradient: ["gradient", "glow", "color", "vibrant", "modern"],
                Organic: ["organic", "flow", "soft", "colorful", "modern"],
                Business: ["business", "professional", "brand", "modern", "colorful"],
                Food: ["food", "restaurant", "cafe", "menu", "vibrant"],
                Luxury: ["luxury", "premium", "elegant", "modern", "gold"],
                Promotion: ["promotion", "sale", "offer", "campaign", "bold"],
                Technology: ["technology", "digital", "startup", "neon", "modern"],
                Nature: ["nature", "fresh", "eco", "organic", "colorful"],
                "Social Media": ["social", "instagram", "content", "marketing", "vibrant"],
                Seasonal: ["seasonal", "event", "celebration", "campaign", "colorful"]
            };

            return {
                id: `modern-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${String(variant + 1).padStart(2, "0")}`,
                name: `${category} — ${name}`,
                category,
                src: modernSvgBackground(category, variant, palette, categoryIndex * 10 + variant),
                tags: [
                    ...(categoryTags[category] || ["modern", "colorful"]),
                    name.toLowerCase(),
                    "color pop",
                    "modern background"
                ]
            };
        })
    );

/* ============================================================
   COMBINED LIBRARY
   100 original backgrounds + 120 modern backgrounds = 220
============================================================ */

export const CLIP_ART_BACKGROUNDS = [
    ...BUSINESS_IMAGE_BACKGROUNDS,
    ...MODERN_COLOR_POP_BACKGROUNDS,
    ...BASE_CLIP_ART_BACKGROUNDS
];

/* ============================================================
   CATEGORIES
============================================================ */

export const CLIP_ART_CATEGORIES = [

    "All",

    "Restaurant",
    "Cafe",
    "Fashion",
    "Photography",
    "Resort",
    "Fitness",
    "Beauty",
    "Auto",
    "Grocery",
    "Real Estate",
    "Travel",
    "Education",

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
============================================================ */

if (
    typeof console !== "undefined" &&
    CLIP_ART_BACKGROUNDS.length !== 220
) {
    console.warn(
        `AdStudio Clip Art Library expected 220 backgrounds, found ${CLIP_ART_BACKGROUNDS.length}.`
    );
}



