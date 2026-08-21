/*
|--------------------------------------------------------------------------
| AdStudio Template Library
|--------------------------------------------------------------------------
| 60 templates
| 12 business categories x 5 visual styles
|
| IMPORTANT:
| Template coordinates are NORMALIZED (0 -> 1).
| They are converted to the selected canvas size when loaded.
|--------------------------------------------------------------------------
*/

export const TEMPLATE_SIZES = {
    square: [420, 420],
    portrait: [420, 520],
    landscape: [620, 420],

    visitingCard: [320, 180],
    businessCard: [350, 200],

    bookmark: [220, 520],

    instagramPost: [420, 420],
    instagramStory: [320, 570],

    facebookCover: [620, 240]
};

export const TEMPLATE_SIZE_NAMES = {
    square: "Square",
    portrait: "Portrait",
    landscape: "Landscape",
    visitingCard: "Visiting Card",
    businessCard: "Business Card",
    bookmark: "Bookmark",
    instagramPost: "Instagram Post",
    instagramStory: "Instagram Story",
    facebookCover: "Facebook Cover"
};

export const BUSINESS_TYPES = [
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
    "Education"
];

/*
|--------------------------------------------------------------------------
| Reliable photo sources
|--------------------------------------------------------------------------
| These are direct image files.
|--------------------------------------------------------------------------
*/

const PHOTOS = {
    Restaurant: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85"
    ],

    Cafe: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
    ],

    Fashion: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
    ],

    Photography: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=85"
    ],

    Resort: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    ],

    Fitness: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
    ],

    Beauty: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
    ],

    Auto: [
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
    ],

    Grocery: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1200&q=85"
    ],

    "Real Estate": [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
    ],

    Travel: [
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
    ],

    Education: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
    ]
};

/*
|--------------------------------------------------------------------------
| Sample business information
|--------------------------------------------------------------------------
*/

const BUSINESS_DATA = {
    Restaurant: {
        name: "Tasty Bites",
        tagline: "Delicious Food • Great Ambience",
        offer: "20% OFF",
        description: "Fresh flavours prepared with passion.",
        phone: "222-333-4444",
        email: "info@tastybites.com",
        website: "www.tastybites.com",
        address: "rd,tessan,jr-colorabo"
    },

    Cafe: {
        name: "Cafe Mocha",
        tagline: "Brewed To Perfection",
        offer: "BEST COFFEE IN TOWN",
        description: "Premium coffee, fresh pastries and good moments.",
        phone: "123-456-7890",
        email: "info@cafemocha.com",
        website: "www.cafemocha.com"
    },

    Fashion: {
        name: "Urban Vogue",
        tagline: "Trendy Styles • New Season",
        offer: "UP TO 40% OFF",
        description: "Discover your next signature look.",
        phone: "111-222-3333",
        email: "hello@urbanvogue.com",
        website: "www.urbanvogue.com"
    },

    Photography: {
        name: "Elite Pics",
        tagline: "Professional • Creative • Timeless",
        offer: "BOOK YOUR SESSION",
        description: "Portraits, weddings, events and commercial photography.",
        phone: "123-456-7890",
        email: "hello@elitepics.com",
        website: "www.elitepics.com"
    },

    Resort: {
        name: "Paradise Resort",
        tagline: "Luxury • Escape • Relax",
        offer: "SUMMER SPECIAL",
        description: "Unforgettable stays surrounded by nature.",
        phone: "888-999-7777",
        email: "stay@paradiseresort.com",
        website: "www.paradiseresort.com"
    },

    Fitness: {
        name: "PowerFit Gym",
        tagline: "GET FIT • STAY STRONG",
        offer: "JOIN TODAY",
        description: "Modern equipment. Expert trainers. Real results.",
        phone: "987-654-3210",
        email: "info@powerfitgym.com",
        website: "www.powerfitgym.com"
    },

    Beauty: {
        name: "Glamour Salon",
        tagline: "Pamper Yourself • Look Your Best",
        offer: "BEAUTY SPECIAL",
        description: "Hair, beauty and styling services for every occasion.",
        phone: "222-666-9998",
        email: "hello@glamoursalon.com",
        website: "www.glamoursalon.com"
    },

    Auto: {
        name: "AutoCare",
        tagline: "Expert Repairs • Honest Service",
        offer: "FREE CHECKUP",
        description: "Reliable service for every journey.",
        phone: "888-777-6666",
        email: "service@autocare.com",
        website: "www.autocare.com"
    },

    Grocery: {
        name: "Fresh Mart",
        tagline: "Fresh • Organic • Local",
        offer: "FRESH EVERY DAY",
        description: "Farm-fresh fruits, vegetables and everyday essentials.",
        phone: "883-355-1111",
        email: "hello@freshmart.com",
        website: "www.freshmart.com"
    },

    "Real Estate": {
        name: "Prime Properties",
        tagline: "Find A Place To Call Home",
        offer: "NEW LISTINGS",
        description: "Premium homes, apartments and investment properties.",
        phone: "555-222-8888",
        email: "sales@primeproperties.com",
        website: "www.primeproperties.com"
    },

    Travel: {
        name: "WanderMore",
        tagline: "Explore • Discover • Experience",
        offer: "TRAVEL DEALS",
        description: "Curated journeys for unforgettable memories.",
        phone: "555-444-7777",
        email: "hello@wandermore.com",
        website: "www.wandermore.com"
    },

    Education: {
        name: "Bright Future Academy",
        tagline: "Learn • Grow • Succeed",
        offer: "NEW INTAKE",
        description: "Quality education designed for tomorrow.",
        phone: "555-333-8888",
        email: "info@brightfuture.com",
        website: "www.brightfuture.com"
    }
};

/*
|--------------------------------------------------------------------------
| Small SVG assets
|--------------------------------------------------------------------------
| These never depend on an external server, so logos/social icons
| cannot cause the template loader to fail.
|--------------------------------------------------------------------------
*/

const svgData = svg =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

export const SOCIAL_ICONS = {
    facebook: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="20" fill="#1877F2"/>
            <path fill="white" d="M58 85V55h10l2-12H58v-7c0-4 2-6 7-6h6V19c-3-1-7-1-11-1-11 0-18 7-18 18v7H30v12h12v30z"/>
        </svg>
    `),

    instagram: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stop-color="#feda75"/>
                    <stop offset=".5" stop-color="#d62976"/>
                    <stop offset="1" stop-color="#4f5bd5"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" rx="24" fill="url(#g)"/>
            <rect x="25" y="25" width="50" height="50" rx="14" fill="none" stroke="white" stroke-width="7"/>
            <circle cx="50" cy="50" r="12" fill="none" stroke="white" stroke-width="7"/>
            <circle cx="68" cy="32" r="4" fill="white"/>
        </svg>
    `),

    youtube: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="8" y="20" width="84" height="60" rx="16" fill="#FF0000"/>
            <path fill="white" d="M43 36l25 14-25 14z"/>
        </svg>
    `),

    whatsapp: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="#25D366"/>
            <path fill="white" d="M30 72l4-14a26 26 0 1 1 10 9zm18-17c8 4 11 5 13 2l3-4-7-4-3 3c-2 1-5-1-8-3s-5-5-4-7l2-3-4-6-4 2c-4 2-5 8-1 14 3 5 8 9 13 11z"/>
        </svg>
    `),

    linkedin: svgData(`
        <svg xmlns="https://www.iconpacks.net/icons/5/free-whatsapp-green-square-logo-icon-15994-thumb.png" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="15" fill="#0A66C2"/>
            <path fill="white" d="M25 38h13v38H25zm6-19a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm15 19h12v5h.2c2-4 7-7 13-7 14 0 17 9 17 21v19H75V60c0-7 0-15-9-15s-10 7-10 15v16H46z"/>
        </svg>
    `)
    // http://www.w3.org/2000/svg
};

const logoSVG = (name, color) =>
    svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
            <rect width="300" height="300" rx="70" fill="${color}"/>
            <circle cx="150" cy="105" r="55" fill="white" opacity=".95"/>
            <path d="M80 230 Q150 155 220 230" fill="none" stroke="white" stroke-width="20" stroke-linecap="round"/>
            <text x="150" y="275" text-anchor="middle" fill="white" font-size="25" font-family="Arial" font-weight="700">${name.slice(0, 8)}</text>
        </svg>
    `);

/*
|--------------------------------------------------------------------------
| Palette by business
|--------------------------------------------------------------------------
*/

const PALETTES = {
    Restaurant: ["#8b2f1f", "#f59e0b"],
    Cafe: ["#5b341d", "#d6a15d"],
    Fashion: ["#9d174d", "#f9a8d4"],
    Photography: ["#172033", "#60a5fa"],
    Resort: ["#0f766e", "#facc15"],
    Fitness: ["#111827", "#ef4444"],
    Beauty: ["#7c2d5a", "#f0abfc"],
    Auto: ["#1f2937", "#f97316"],
    Grocery: ["#166534", "#84cc16"],
    "Real Estate": ["#1e3a8a", "#d4af37"],
    Travel: ["#075985", "#38bdf8"],
    Education: ["#3730a3", "#fbbf24"]
};

const STYLES = ["hero", "split", "badge", "minimal", "dark"];

const STYLE_NAMES = {
    hero: "Hero",
    split: "Split",
    badge: "Promo",
    minimal: "Minimal",
    dark: "Dark"
};

/*
|--------------------------------------------------------------------------
| Build one template
|--------------------------------------------------------------------------
*/

const createTemplate = (business, style, number, photoIndex) => {

    const data = BUSINESS_DATA[business];
    const palette = PALETTES[business];

    const backgroundSrc =
        PHOTOS[business][photoIndex % PHOTOS[business].length];

    const extraSrc =
        PHOTOS[business][(photoIndex + 1) % PHOTOS[business].length];

    const id =
        `${business.toLowerCase().replace(/\s+/g, "-")}-${style}-${number}`;

    /*
    |--------------------------------------------------------------------------
    | All coordinates below are percentages of the canvas.
    |--------------------------------------------------------------------------
    */

    let texts = [];
    let shapes = [];
    let images = [];

    /*
    |--------------------------------------------------------------------------
    | Background
    |--------------------------------------------------------------------------
    */

    const background = {
        type: "image",
        src: backgroundSrc,
        value: "#111827",
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        rotation: 0
    };

    /*
    |--------------------------------------------------------------------------
    | Common logo
    |--------------------------------------------------------------------------
    */

    images.push({
        type: "logo",
        src: logoSVG(data.name, palette[0]),
        nx: 0.055,
        ny: 0.055,
        nw: 0.14,
        nh: 0.14,
        rotation: 0
    });

    /*
    |--------------------------------------------------------------------------
    | Social icons
    |--------------------------------------------------------------------------
    */

    const socialKeys = ["facebook", "instagram", "whatsapp"];

    socialKeys.forEach((key, index) => {
        images.push({
            type: "social",
            social: key,
            src: SOCIAL_ICONS[key],
            nx: 0.70 + index * 0.085,
            ny: 0.88,
            nw: 0.055,
            nh: 0.055,
            rotation: 0
        });
    });

    /*
    |--------------------------------------------------------------------------
    | Decorative image
    |--------------------------------------------------------------------------
    */

    images.push({
        type: "photo",
        src: extraSrc,
        nx: style === "split" ? 0.57 : 0.72,
        ny: 0.10,
        nw: style === "split" ? 0.35 : 0.22,
        nh: style === "split" ? 0.62 : 0.24,
        rotation: style === "badge" ? 4 : 0
    });

    /*
    |--------------------------------------------------------------------------
    | Decorative blocks
    |--------------------------------------------------------------------------
    */

    shapes.push({
        shape: "rectangle",
        nx: 0.0,
        ny: 0.76,
        nw: 1,
        nh: 0.24,
        fill:
            style === "minimal"
                ? "rgba(255,255,255,0.90)"
                : "rgba(0,0,0,0.68)",
        rotation: 0
    });

    shapes.push({
        shape: "rectangle",
        nx: 0.0,
        ny: 0.0,
        nw: 0.012,
        nh: 1,
        fill: palette[1],
        rotation: 0
    });

    /*
    |--------------------------------------------------------------------------
    | Main text
    |--------------------------------------------------------------------------
    */

    texts.push({
        role: "businessName",
        text: data.name,
        nx: 0.055,
        ny: 0.25,
        nw: style === "split" ? 0.48 : 0.62,
        fontScale: style === "minimal" ? 0.09 : 0.10,
        fill: "#ffffff",
        fontFamily: "Poppins",
        fontStyle: "bold",
        align: "left",
        underline: false,
        letterSpacing: 0
    });

    texts.push({
        role: "tagline",
        text: data.tagline,
        nx: 0.06,
        ny: 0.40,
        nw: style === "split" ? 0.45 : 0.58,
        fontScale: 0.045,
        fill: "#ffffff",
        fontFamily: "Montserrat",
        fontStyle: "bold",
        align: "left",
        underline: false,
        letterSpacing: 0
    });

    texts.push({
        role: "description",
        text: data.description,
        nx: 0.06,
        ny: 0.50,
        nw: style === "split" ? 0.45 : 0.55,
        fontScale: 0.027,
        fill: "#ffffff",
        fontFamily: "Poppins",
        fontStyle: "normal",
        align: "left",
        underline: false,
        letterSpacing: 0
    });

    texts.push({
        role: "offer",
        text: data.offer,
        nx: 0.06,
        ny: 0.62,
        nw: 0.50,
        fontScale: 0.055,
        fill: palette[1],
        fontFamily: "Poppins",
        fontStyle: "bold",
        align: "left",
        underline: false,
        letterSpacing: 1
    });

    texts.push({
        role: "contact",
        text: `Call: ${data.phone}  •  ${data.website}`,
        nx: 0.055,
        ny: 0.81,
        nw: 0.60,
        fontScale: 0.028,
        fill: style === "minimal" ? "#111827" : "#ffffff",
        fontFamily: "Poppins",
        fontStyle: "normal",
        align: "left",
        underline: false,
        letterSpacing: 0
    });

    /*
    |--------------------------------------------------------------------------
    | Style-specific changes
    |--------------------------------------------------------------------------
    */

    if (style === "split") {
        shapes.push({
            shape: "rectangle",
            nx: 0.51,
            ny: 0,
            nw: 0.49,
            nh: 1,
            fill: "rgba(0,0,0,0.20)",
            rotation: 0
        });
    }

    if (style === "badge") {
        shapes.push({
            shape: "circle",
            nx: 0.68,
            ny: 0.50,
            nw: 0.20,
            nh: 0.20,
            fill: palette[1],
            rotation: 0
        });

        texts.push({
            role: "badge",
            text: "SPECIAL",
            nx: 0.70,
            ny: 0.56,
            nw: 0.16,
            fontScale: 0.035,
            fill: "#111827",
            fontFamily: "Poppins",
            fontStyle: "bold",
            align: "center",
            underline: false,
            letterSpacing: 0
        });
    }

    if (style === "minimal") {
        background.value = "#f8fafc";

        /*
        | Use a dark translucent overlay to keep the photo elegant.
        */
        shapes[0].fill = "rgba(255,255,255,0.88)";

        texts.forEach(t => {
            if (
                t.role !== "contact" &&
                t.role !== "offer"
            ) {
                t.fill = "#111827";
            }
        });
    }

    if (style === "dark") {
        shapes.push({
            shape: "rectangle",
            nx: 0.03,
            ny: 0.18,
            nw: 0.58,
            nh: 0.52,
            fill: "rgba(0,0,0,0.62)",
            rotation: 0
        });
    }

    return {
        id,
        name: `${data.name} — ${STYLE_NAMES[style]}`,
        businessType: business,
        style,
        description: data.description,

        /*
        | All sizes are supported.
        | The loader converts normalized positions to actual dimensions.
        */
        sizes: Object.keys(TEMPLATE_SIZES),

        background,
        texts,
        images,
        blocks: shapes
    };
};

/*
|--------------------------------------------------------------------------
| 60 templates
|--------------------------------------------------------------------------
*/

export const templates = [];

let templateNumber = 1;

Object.keys(BUSINESS_DATA).forEach((business, businessIndex) => {

    STYLES.forEach((style, styleIndex) => {

        templates.push(
            createTemplate(
                business,
                style,
                templateNumber++,
                (businessIndex + styleIndex) % 3
            )
        );

    });

});

/*
|--------------------------------------------------------------------------
| Safety check
|--------------------------------------------------------------------------
*/

if (templates.length !== 60) {
    console.error(
        `AdStudio template library expected 60 templates but found ${templates.length}`
    );
}

export default templates;