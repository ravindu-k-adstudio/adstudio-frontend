// /*
// |--------------------------------------------------------------------------
// | AdStudio Template Library
// |--------------------------------------------------------------------------
// | 60 templates
// | 12 business categories x 5 visual styles
// |
// | IMPORTANT:
// | Template coordinates are NORMALIZED (0 -> 1).
// | They are converted to the selected canvas size when loaded.
// |--------------------------------------------------------------------------
// */

// export const TEMPLATE_SIZES = {
//     square: [420, 420],
//     portrait: [420, 520],
//     landscape: [620, 420],

//     visitingCard: [320, 180],
//     businessCard: [350, 200],

//     bookmark: [220, 520],

//     instagramPost: [420, 420],
//     instagramStory: [320, 570],

//     facebookCover: [620, 240]
// };

// export const TEMPLATE_SIZE_NAMES = {
//     square: "Square",
//     portrait: "Portrait",
//     landscape: "Landscape",
//     visitingCard: "Visiting Card",
//     businessCard: "Business Card",
//     bookmark: "Bookmark",
//     instagramPost: "Instagram Post",
//     instagramStory: "Instagram Story",
//     facebookCover: "Facebook Cover"
// };

// export const BUSINESS_TYPES = [
//     "All",
//     "Restaurant",
//     "Cafe",
//     "Fashion",
//     "Photography",
//     "Resort",
//     "Fitness",
//     "Beauty",
//     "Auto",
//     "Grocery",
//     "Real Estate",
//     "Travel",
//     "Education"
// ];

// /*
// |--------------------------------------------------------------------------
// | Reliable photo sources
// |--------------------------------------------------------------------------
// | These are direct image files.
// |--------------------------------------------------------------------------
// */

// const PHOTOS = {
//     Restaurant: [
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Cafe: [
//         "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Fashion: [
//         "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Photography: [
//         "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Resort: [
//         "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Fitness: [
//         "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Beauty: [
//         "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Auto: [
//         "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Grocery: [
//         "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1200&q=85"
//     ],

//     "Real Estate": [
//         "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Travel: [
//         "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
//     ],

//     Education: [
//         "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
//         "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
//     ]
// };

// /*
// |--------------------------------------------------------------------------
// | Sample business information
// |--------------------------------------------------------------------------
// */

// const BUSINESS_DATA = {
//     Restaurant: {
//         name: "Tasty Bites",
//         tagline: "Delicious Food • Great Ambience",
//         offer: "20% OFF",
//         description: "Fresh flavours prepared with passion.",
//         phone: "222-333-4444",
//         email: "info@tastybites.com",
//         website: "www.tastybites.com",
//         address: "rd,tessan,jr-colorabo"
//     },

//     Cafe: {
//         name: "Cafe Mocha",
//         tagline: "Brewed To Perfection",
//         offer: "BEST COFFEE IN TOWN",
//         description: "Premium coffee, fresh pastries and good moments.",
//         phone: "123-456-7890",
//         email: "info@cafemocha.com",
//         website: "www.cafemocha.com"
//     },

//     Fashion: {
//         name: "Urban Vogue",
//         tagline: "Trendy Styles • New Season",
//         offer: "UP TO 40% OFF",
//         description: "Discover your next signature look.",
//         phone: "111-222-3333",
//         email: "hello@urbanvogue.com",
//         website: "www.urbanvogue.com"
//     },

//     Photography: {
//         name: "Elite Pics",
//         tagline: "Professional • Creative • Timeless",
//         offer: "BOOK YOUR SESSION",
//         description: "Portraits, weddings, events and commercial photography.",
//         phone: "123-456-7890",
//         email: "hello@elitepics.com",
//         website: "www.elitepics.com"
//     },

//     Resort: {
//         name: "Paradise Resort",
//         tagline: "Luxury • Escape • Relax",
//         offer: "SUMMER SPECIAL",
//         description: "Unforgettable stays surrounded by nature.",
//         phone: "888-999-7777",
//         email: "stay@paradiseresort.com",
//         website: "www.paradiseresort.com"
//     },

//     Fitness: {
//         name: "PowerFit Gym",
//         tagline: "GET FIT • STAY STRONG",
//         offer: "JOIN TODAY",
//         description: "Modern equipment. Expert trainers. Real results.",
//         phone: "987-654-3210",
//         email: "info@powerfitgym.com",
//         website: "www.powerfitgym.com"
//     },

//     Beauty: {
//         name: "Glamour Salon",
//         tagline: "Pamper Yourself • Look Your Best",
//         offer: "BEAUTY SPECIAL",
//         description: "Hair, beauty and styling services for every occasion.",
//         phone: "222-666-9998",
//         email: "hello@glamoursalon.com",
//         website: "www.glamoursalon.com"
//     },

//     Auto: {
//         name: "AutoCare",
//         tagline: "Expert Repairs • Honest Service",
//         offer: "FREE CHECKUP",
//         description: "Reliable service for every journey.",
//         phone: "888-777-6666",
//         email: "service@autocare.com",
//         website: "www.autocare.com"
//     },

//     Grocery: {
//         name: "Fresh Mart",
//         tagline: "Fresh • Organic • Local",
//         offer: "FRESH EVERY DAY",
//         description: "Farm-fresh fruits, vegetables and everyday essentials.",
//         phone: "883-355-1111",
//         email: "hello@freshmart.com",
//         website: "www.freshmart.com"
//     },

//     "Real Estate": {
//         name: "Prime Properties",
//         tagline: "Find A Place To Call Home",
//         offer: "NEW LISTINGS",
//         description: "Premium homes, apartments and investment properties.",
//         phone: "555-222-8888",
//         email: "sales@primeproperties.com",
//         website: "www.primeproperties.com"
//     },

//     Travel: {
//         name: "WanderMore",
//         tagline: "Explore • Discover • Experience",
//         offer: "TRAVEL DEALS",
//         description: "Curated journeys for unforgettable memories.",
//         phone: "555-444-7777",
//         email: "hello@wandermore.com",
//         website: "www.wandermore.com"
//     },

//     Education: {
//         name: "Bright Future Academy",
//         tagline: "Learn • Grow • Succeed",
//         offer: "NEW INTAKE",
//         description: "Quality education designed for tomorrow.",
//         phone: "555-333-8888",
//         email: "info@brightfuture.com",
//         website: "www.brightfuture.com"
//     }
// };

// /*
// |--------------------------------------------------------------------------
// | Small SVG assets
// |--------------------------------------------------------------------------
// | These never depend on an external server, so logos/social icons
// | cannot cause the template loader to fail.
// |--------------------------------------------------------------------------
// */

// const svgData = svg =>
//     `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

// export const SOCIAL_ICONS = {
//     facebook: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <rect width="100" height="100" rx="20" fill="#1877F2"/>
//             <path fill="white" d="M58 85V55h10l2-12H58v-7c0-4 2-6 7-6h6V19c-3-1-7-1-11-1-11 0-18 7-18 18v7H30v12h12v30z"/>
//         </svg>
//     `),

//     instagram: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <defs>
//                 <linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
//                     <stop offset="0" stop-color="#feda75"/>
//                     <stop offset=".5" stop-color="#d62976"/>
//                     <stop offset="1" stop-color="#4f5bd5"/>
//                 </linearGradient>
//             </defs>
//             <rect width="100" height="100" rx="24" fill="url(#g)"/>
//             <rect x="25" y="25" width="50" height="50" rx="14" fill="none" stroke="white" stroke-width="7"/>
//             <circle cx="50" cy="50" r="12" fill="none" stroke="white" stroke-width="7"/>
//             <circle cx="68" cy="32" r="4" fill="white"/>
//         </svg>
//     `),

//     youtube: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <rect x="8" y="20" width="84" height="60" rx="16" fill="#FF0000"/>
//             <path fill="white" d="M43 36l25 14-25 14z"/>
//         </svg>
//     `),

//     whatsapp: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="42" fill="#25D366"/>
//             <path fill="white" d="M30 72l4-14a26 26 0 1 1 10 9zm18-17c8 4 11 5 13 2l3-4-7-4-3 3c-2 1-5-1-8-3s-5-5-4-7l2-3-4-6-4 2c-4 2-5 8-1 14 3 5 8 9 13 11z"/>
//         </svg>
//     `),

//     linkedin: svgData(`
//         <svg xmlns="https://www.iconpacks.net/icons/5/free-whatsapp-green-square-logo-icon-15994-thumb.png" viewBox="0 0 100 100">
//             <rect width="100" height="100" rx="15" fill="#0A66C2"/>
//             <path fill="white" d="M25 38h13v38H25zm6-19a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm15 19h12v5h.2c2-4 7-7 13-7 14 0 17 9 17 21v19H75V60c0-7 0-15-9-15s-10 7-10 15v16H46z"/>
//         </svg>
//     `)
//     // http://www.w3.org/2000/svg
// };

// const logoSVG = (name, color) =>
//     svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
//             <rect width="300" height="300" rx="70" fill="${color}"/>
//             <circle cx="150" cy="105" r="55" fill="white" opacity=".95"/>
//             <path d="M80 230 Q150 155 220 230" fill="none" stroke="white" stroke-width="20" stroke-linecap="round"/>
//             <text x="150" y="275" text-anchor="middle" fill="white" font-size="25" font-family="Arial" font-weight="700">${name.slice(0, 8)}</text>
//         </svg>
//     `);

// /*
// |--------------------------------------------------------------------------
// | Palette by business
// |--------------------------------------------------------------------------
// */

// const PALETTES = {
//     Restaurant: ["#8b2f1f", "#f59e0b"],
//     Cafe: ["#5b341d", "#d6a15d"],
//     Fashion: ["#9d174d", "#f9a8d4"],
//     Photography: ["#172033", "#60a5fa"],
//     Resort: ["#0f766e", "#facc15"],
//     Fitness: ["#111827", "#ef4444"],
//     Beauty: ["#7c2d5a", "#f0abfc"],
//     Auto: ["#1f2937", "#f97316"],
//     Grocery: ["#166534", "#84cc16"],
//     "Real Estate": ["#1e3a8a", "#d4af37"],
//     Travel: ["#075985", "#38bdf8"],
//     Education: ["#3730a3", "#fbbf24"]
// };

// const STYLES = ["hero", "split", "badge", "minimal", "dark"];

// const STYLE_NAMES = {
//     hero: "Hero",
//     split: "Split",
//     badge: "Promo",
//     minimal: "Minimal",
//     dark: "Dark"
// };

// /*
// |--------------------------------------------------------------------------
// | Build one template
// |--------------------------------------------------------------------------
// */

// const createTemplate = (business, style, number, photoIndex) => {

//     const data = BUSINESS_DATA[business];
//     const palette = PALETTES[business];

//     const backgroundSrc =
//         PHOTOS[business][photoIndex % PHOTOS[business].length];

//     const extraSrc =
//         PHOTOS[business][(photoIndex + 1) % PHOTOS[business].length];

//     const id =
//         `${business.toLowerCase().replace(/\s+/g, "-")}-${style}-${number}`;

//     /*
//     |--------------------------------------------------------------------------
//     | All coordinates below are percentages of the canvas.
//     |--------------------------------------------------------------------------
//     */

//     let texts = [];
//     let shapes = [];
//     let images = [];

//     /*
//     |--------------------------------------------------------------------------
//     | Background
//     |--------------------------------------------------------------------------
//     */

//     const background = {
//         type: "image",
//         src: backgroundSrc,
//         value: "#111827",
//         x: 0,
//         y: 0,
//         width: 1,
//         height: 1,
//         rotation: 0
//     };

//     /*
//     |--------------------------------------------------------------------------
//     | Common logo
//     |--------------------------------------------------------------------------
//     */

//     images.push({
//         type: "logo",
//         src: logoSVG(data.name, palette[0]),
//         nx: 0.055,
//         ny: 0.055,
//         nw: 0.14,
//         nh: 0.14,
//         rotation: 0
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Social icons
//     |--------------------------------------------------------------------------
//     */

//     const socialKeys = ["facebook", "instagram", "whatsapp"];

//     socialKeys.forEach((key, index) => {
//         images.push({
//             type: "social",
//             social: key,
//             src: SOCIAL_ICONS[key],
//             nx: 0.70 + index * 0.085,
//             ny: 0.88,
//             nw: 0.055,
//             nh: 0.055,
//             rotation: 0
//         });
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Decorative image
//     |--------------------------------------------------------------------------
//     */

//     images.push({
//         type: "photo",
//         src: extraSrc,
//         nx: style === "split" ? 0.57 : 0.72,
//         ny: 0.10,
//         nw: style === "split" ? 0.35 : 0.22,
//         nh: style === "split" ? 0.62 : 0.24,
//         rotation: style === "badge" ? 4 : 0
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Decorative blocks
//     |--------------------------------------------------------------------------
//     */

//     shapes.push({
//         shape: "rectangle",
//         nx: 0.0,
//         ny: 0.76,
//         nw: 1,
//         nh: 0.24,
//         fill:
//             style === "minimal"
//                 ? "rgba(255,255,255,0.90)"
//                 : "rgba(0,0,0,0.68)",
//         rotation: 0
//     });

//     shapes.push({
//         shape: "rectangle",
//         nx: 0.0,
//         ny: 0.0,
//         nw: 0.012,
//         nh: 1,
//         fill: palette[1],
//         rotation: 0
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Main text
//     |--------------------------------------------------------------------------
//     */

//     texts.push({
//         role: "businessName",
//         text: data.name,
//         nx: 0.055,
//         ny: 0.25,
//         nw: style === "split" ? 0.48 : 0.62,
//         fontScale: style === "minimal" ? 0.09 : 0.10,
//         fill: "#ffffff",
//         fontFamily: "Poppins",
//         fontStyle: "bold",
//         align: "left",
//         underline: false,
//         letterSpacing: 0
//     });

//     texts.push({
//         role: "tagline",
//         text: data.tagline,
//         nx: 0.06,
//         ny: 0.40,
//         nw: style === "split" ? 0.45 : 0.58,
//         fontScale: 0.045,
//         fill: "#ffffff",
//         fontFamily: "Montserrat",
//         fontStyle: "bold",
//         align: "left",
//         underline: false,
//         letterSpacing: 0
//     });

//     texts.push({
//         role: "description",
//         text: data.description,
//         nx: 0.06,
//         ny: 0.50,
//         nw: style === "split" ? 0.45 : 0.55,
//         fontScale: 0.027,
//         fill: "#ffffff",
//         fontFamily: "Poppins",
//         fontStyle: "normal",
//         align: "left",
//         underline: false,
//         letterSpacing: 0
//     });

//     texts.push({
//         role: "offer",
//         text: data.offer,
//         nx: 0.06,
//         ny: 0.62,
//         nw: 0.50,
//         fontScale: 0.055,
//         fill: palette[1],
//         fontFamily: "Poppins",
//         fontStyle: "bold",
//         align: "left",
//         underline: false,
//         letterSpacing: 1
//     });

//     texts.push({
//         role: "contact",
//         text: `Call: ${data.phone}  •  ${data.website}`,
//         nx: 0.055,
//         ny: 0.81,
//         nw: 0.60,
//         fontScale: 0.028,
//         fill: style === "minimal" ? "#111827" : "#ffffff",
//         fontFamily: "Poppins",
//         fontStyle: "normal",
//         align: "left",
//         underline: false,
//         letterSpacing: 0
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Style-specific changes
//     |--------------------------------------------------------------------------
//     */

//     if (style === "split") {
//         shapes.push({
//             shape: "rectangle",
//             nx: 0.51,
//             ny: 0,
//             nw: 0.49,
//             nh: 1,
//             fill: "rgba(0,0,0,0.20)",
//             rotation: 0
//         });
//     }

//     if (style === "badge") {
//         shapes.push({
//             shape: "circle",
//             nx: 0.68,
//             ny: 0.50,
//             nw: 0.20,
//             nh: 0.20,
//             fill: palette[1],
//             rotation: 0
//         });

//         texts.push({
//             role: "badge",
//             text: "SPECIAL",
//             nx: 0.70,
//             ny: 0.56,
//             nw: 0.16,
//             fontScale: 0.035,
//             fill: "#111827",
//             fontFamily: "Poppins",
//             fontStyle: "bold",
//             align: "center",
//             underline: false,
//             letterSpacing: 0
//         });
//     }

//     if (style === "minimal") {
//         background.value = "#f8fafc";

//         /*
//         | Use a dark translucent overlay to keep the photo elegant.
//         */
//         shapes[0].fill = "rgba(255,255,255,0.88)";

//         texts.forEach(t => {
//             if (
//                 t.role !== "contact" &&
//                 t.role !== "offer"
//             ) {
//                 t.fill = "#111827";
//             }
//         });
//     }

//     if (style === "dark") {
//         shapes.push({
//             shape: "rectangle",
//             nx: 0.03,
//             ny: 0.18,
//             nw: 0.58,
//             nh: 0.52,
//             fill: "rgba(0,0,0,0.62)",
//             rotation: 0
//         });
//     }

//     return {
//         id,
//         name: `${data.name} — ${STYLE_NAMES[style]}`,
//         businessType: business,
//         style,
//         description: data.description,

//         /*
//         | All sizes are supported.
//         | The loader converts normalized positions to actual dimensions.
//         */
//         sizes: Object.keys(TEMPLATE_SIZES),

//         background,
//         texts,
//         images,
//         blocks: shapes
//     };
// };

// /*
// |--------------------------------------------------------------------------
// | 60 templates
// |--------------------------------------------------------------------------
// */

// export const templates = [];

// let templateNumber = 1;

// Object.keys(BUSINESS_DATA).forEach((business, businessIndex) => {

//     STYLES.forEach((style, styleIndex) => {

//         templates.push(
//             createTemplate(
//                 business,
//                 style,
//                 templateNumber++,
//                 (businessIndex + styleIndex) % 3
//             )
//         );

//     });

// });

// /*
// |--------------------------------------------------------------------------
// | Safety check
// |--------------------------------------------------------------------------
// */

// if (templates.length !== 60) {
//     console.error(
//         `AdStudio template library expected 60 templates but found ${templates.length}`
//     );
// }

// export default templates;


////////////////////////////////////////////////////////////////////////////
/*
|--------------------------------------------------------------------------
| AdStudio Template Library
|--------------------------------------------------------------------------
| 96 templates
| 12 business categories x 8 different visual layouts
|
| Coordinates:
| nx / ny / nw / nh = normalized 0 -> 1
|
| IMPORTANT:
| - Bottom contact area is reserved.
| - Bottom block is ONLY white or dark.
| - Contact includes phone, email, address and website.
| - Every template contains Facebook, WhatsApp, YouTube,
|   LinkedIn, Instagram and TikTok.
| - All social icons are square and equal size.
| - Four-edge border stays close to the canvas edge.
| - Every category uses different photos.
| - Each of the 8 layouts has different positioning/decorations.
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
| PHOTO LIBRARY
|--------------------------------------------------------------------------
*/

const PHOTOS = {
    Restaurant: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=1400&q=85"
    ],

    Cafe: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=85"
    ],

    Fashion: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=85"
    ],

    Photography: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
    ],

    Resort: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85"
    ],

    Fitness: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1400&q=85"
    ],

    Beauty: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1519415387722-a1c3bb7c9cfb?auto=format&fit=crop&w=1400&q=85"
    ],

    Auto: [
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1400&q=85"
    ],

    Grocery: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1601598851547-4302969d6f4b?auto=format&fit=crop&w=1400&q=85"
    ],

    "Real Estate": [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
    ],

    Travel: [
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=85"
    ],

    Education: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
    ]
};

/*
|--------------------------------------------------------------------------
| BUSINESS DATA
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
        address: "123 Main Street",
        website: "www.tastybites.com"
    },

    Cafe: {
        name: "Cafe Mocha",
        tagline: "Brewed To Perfection",
        offer: "BUY 1 GET 1",
        description: "Premium coffee, fresh pastries and good moments.",
        phone: "123-456-7890",
        email: "info@cafemocha.com",
        address: "123 Main Street",
        website: "www.cafemocha.com"
    },

    Fashion: {
        name: "Urban Vogue",
        tagline: "Trendy Styles • New Season",
        offer: "UP TO 40% OFF",
        description: "Discover your next signature look.",
        phone: "111-222-3333",
        email: "hello@urbanvogue.com",
        address: "123 Main Street",
        website: "www.urbanvogue.com"
    },

    Photography: {
        name: "Elite Pics",
        tagline: "Professional • Creative • Timeless",
        offer: "BOOK YOUR SESSION",
        description: "Portraits, weddings, events and commercial photography.",
        phone: "123-456-7890",
        email: "hello@elitepics.com",
        address: "123 Main Street",
        website: "www.elitepics.com"
    },

    Resort: {
        name: "Paradise Resort",
        tagline: "Luxury • Escape • Relax",
        offer: "20% OFF STAYS",
        description: "Unforgettable stays surrounded by nature.",
        phone: "888-999-7777",
        email: "stay@paradiseresort.com",
        address: "123 Main Street",
        website: "www.paradiseresort.com"
    },

    Fitness: {
        name: "PowerFit Gym",
        tagline: "GET FIT • STAY STRONG",
        offer: "JOIN TODAY",
        description: "Modern equipment. Expert trainers. Real results.",
        phone: "987-654-3210",
        email: "info@powerfitgym.com",
        address: "123 Main Street",
        website: "www.powerfitgym.com"
    },

    Beauty: {
        name: "Glamour Salon",
        tagline: "Pamper Yourself • Look Your Best",
        offer: "BEAUTY SPECIAL",
        description: "Hair, beauty and styling services for every occasion.",
        phone: "222-666-9998",
        email: "hello@glamoursalon.com",
        address: "123 Main Street",
        website: "www.glamoursalon.com"
    },

    Auto: {
        name: "AutoCare",
        tagline: "Expert Repairs • Honest Service",
        offer: "FREE CHECKUP",
        description: "Reliable service for every journey.",
        phone: "888-777-6666",
        email: "service@autocare.com",
        address: "123 Main Street",
        website: "www.autocare.com"
    },

    Grocery: {
        name: "Fresh Mart",
        tagline: "Fresh • Organic • Local",
        offer: "FRESH EVERY DAY",
        description: "Farm-fresh fruits, vegetables and everyday essentials.",
        phone: "883-355-1111",
        email: "hello@freshmart.com",
        address: "123 Main Street",
        website: "www.freshmart.com"
    },

    "Real Estate": {
        name: "Prime Properties",
        tagline: "Find A Place To Call Home",
        offer: "NEW LISTINGS",
        description: "Premium homes, apartments and investment properties.",
        phone: "555-222-8888",
        email: "sales@primeproperties.com",
        address: "123 Main Street",
        website: "www.primeproperties.com"
    },

    Travel: {
        name: "WanderMore",
        tagline: "Explore • Discover • Experience",
        offer: "TRAVEL DEALS",
        description: "Curated journeys for unforgettable memories.",
        phone: "555-444-7777",
        email: "hello@wandermore.com",
        address: "123 Main Street",
        website: "www.wandermore.com"
    },

    Education: {
        name: "Bright Future Academy",
        tagline: "Learn • Grow • Succeed",
        offer: "NEW INTAKE",
        description: "Quality education designed for tomorrow.",
        phone: "555-333-8888",
        email: "info@brightfuture.com",
        address: "123 Main Street",
        website: "www.brightfuture.com"
    }
};

/*
|--------------------------------------------------------------------------
| PALETTES
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

/*
|--------------------------------------------------------------------------
| FONT FAMILIES
|--------------------------------------------------------------------------
|
| Different categories use different visual identities.
| Google/system fallback fonts are used so the templates remain safe
| even when a particular web font has not been loaded.
|--------------------------------------------------------------------------
*/

const FONT_FAMILIES = {
    Restaurant: [
        "Playfair Display",
        "Cormorant Garamond",
        "Libre Baskerville",
        "DM Serif Display",
        "Bree Serif",
        "Montserrat",
        "Poppins",
        "Lora"
    ],

    Cafe: [
        "Lobster Two",
        "Bree Serif",
        "Josefin Sans",
        "Lora",
        "Poppins",
        "Montserrat",
        "Libre Baskerville",
        "Playfair Display"
    ],

    Fashion: [
        "Josefin Sans",
        "Pinyon Script",
        "Montserrat",
        "Playfair Display",
        "DM Sans",
        "Bodoni 72",
        "Cormorant Garamond",
        "Lora"
    ],

    Photography: [
        "Libre Baskerville",
        "Pinyon Script",
        "Cormorant Garamond",
        "Montserrat",
        "Josefin Sans",
        "Playfair Display",
        "Lora",
        "DM Sans"
    ],

    Resort: [
        "Playfair Display",
        "Cormorant Garamond",
        "Josefin Sans",
        "Lora",
        "Libre Baskerville",
        "Pinyon Script",
        "Montserrat",
        "DM Sans"
    ],

    Fitness: [
        "Montserrat",
        "Oswald",
        "Bebas Neue",
        "Poppins",
        "Josefin Sans",
        "DM Sans",
        "Bree Serif",
        "Roboto"
    ],

    Beauty: [
        "Pinyon Script",
        "Playfair Display",
        "Lora",
        "Cormorant Garamond",
        "Josefin Sans",
        "Libre Baskerville",
        "Montserrat",
        "Poppins"
    ],

    Auto: [
        "Oswald",
        "Montserrat",
        "Bebas Neue",
        "Roboto",
        "DM Sans",
        "Poppins",
        "Josefin Sans",
        "Bree Serif"
    ],

    Grocery: [
        "Poppins",
        "Josefin Sans",
        "Lora",
        "Montserrat",
        "Bree Serif",
        "DM Sans",
        "Libre Baskerville",
        "Playfair Display"
    ],

    "Real Estate": [
        "Playfair Display",
        "Libre Baskerville",
        "Cormorant Garamond",
        "Montserrat",
        "Lora",
        "Josefin Sans",
        "DM Sans",
        "Poppins"
    ],

    Travel: [
        "Poppins",
        "Josefin Sans",
        "Lora",
        "Montserrat",
        "Playfair Display",
        "DM Sans",
        "Cormorant Garamond",
        "Bree Serif"
    ],

    Education: [
        "Poppins",
        "Montserrat",
        "Josefin Sans",
        "Bree Serif",
        "DM Sans",
        "Libre Baskerville",
        "Lora",
        "Playfair Display"
    ]
};

/*
|--------------------------------------------------------------------------
| STYLE ACCENT VARIATIONS
|--------------------------------------------------------------------------
|
| The original category palette is retained, but each of the eight
| layouts gets a slightly different visual treatment.
|--------------------------------------------------------------------------
*/

const STYLE_ACCENT_VARIATIONS = [
    { hue: -8, saturation: 1.00, lightness: 1.00 },
    { hue: 12, saturation: 0.92, lightness: 1.04 },
    { hue: -18, saturation: 1.08, lightness: 0.96 },
    { hue: 22, saturation: 0.88, lightness: 1.08 },
    { hue: -28, saturation: 1.12, lightness: 0.92 },
    { hue: 30, saturation: 0.96, lightness: 1.06 },
    { hue: 8, saturation: 1.12, lightness: 0.98 },
    { hue: -38, saturation: 0.90, lightness: 1.10 }
];

/*
|--------------------------------------------------------------------------
| COLOR HELPERS
|--------------------------------------------------------------------------
*/

const clamp = (
    value,
    min,
    max
) =>
    Math.min(
        max,
        Math.max(
            min,
            value
        )
    );

const hexToHsl = hex => {

    const clean =
        hex.replace(
            "#",
            ""
        );

    const bigint =
        parseInt(
            clean,
            16
        );

    let r =
        ((bigint >> 16) & 255) / 255;

    let g =
        ((bigint >> 8) & 255) / 255;

    let b =
        (bigint & 255) / 255;

    const max =
        Math.max(r, g, b);

    const min =
        Math.min(r, g, b);

    let h = 0;
    let s = 0;

    const l =
        (max + min) / 2;

    if (max !== min) {

        const d =
            max - min;

        s =
            l > 0.5
                ? d / (2 - max - min)
                : d / (max + min);

        switch (max) {

            case r:
                h =
                    (g - b) /
                    d +
                    (g < b ? 6 : 0);
                break;

            case g:
                h =
                    (b - r) /
                    d +
                    2;
                break;

            default:
                h =
                    (r - g) /
                    d +
                    4;
                break;
        }

        h /= 6;
    }

    return [
        h * 360,
        s * 100,
        l * 100
    ];
};

const hslToHex = (
    h,
    s,
    l
) => {

    h =
        ((h % 360) + 360) % 360;

    s =
        clamp(
            s,
            0,
            100
        ) / 100;

    l =
        clamp(
            l,
            0,
            100
        ) / 100;

    const c =
        (1 -
            Math.abs(
                2 * l - 1
            )) *
        s;

    const x =
        c *
        (1 -
            Math.abs(
                ((h / 60) % 2) -
                1
            ));

    const m =
        l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else {
        r = c;
        b = x;
    }

    return (
        "#" +
        [r, g, b]
            .map(
                value =>
                    Math.round(
                        (value + m) *
                        255
                    )
                        .toString(16)
                        .padStart(2, "0")
            )
            .join("")
    );
};

const shiftColor = (
    color,
    variation
) => {

    const [
        h,
        s,
        l
    ] =
        hexToHsl(
            color
        );

    return hslToHex(
        h + variation.hue,
        s * variation.saturation,
        l * variation.lightness
    );
};

const getTemplatePalette = (
    business,
    variant
) => {

    const base =
        PALETTES[business];

    const variation =
        STYLE_ACCENT_VARIATIONS[
        variant % STYLE_ACCENT_VARIATIONS.length
        ];

    return [
        shiftColor(
            base[0],
            variation
        ),
        shiftColor(
            base[1],
            {
                ...variation,
                hue:
                    variation.hue +
                    18
            }
        )
    ];
};

/*
|--------------------------------------------------------------------------
| SVG HELPERS
|--------------------------------------------------------------------------
*/

const svgData = svg =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

/*
|--------------------------------------------------------------------------
| SOCIAL ICONS
|--------------------------------------------------------------------------
*/

export const SOCIAL_ICONS = {

    facebook: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="18" fill="#1877F2"/>
            <path fill="white"
                d="M58 85V55h10l2-12H58v-7c0-4 2-6 7-6h6V19c-3-1-7-1-11-1-11 0-18 7-18 18v7H30v12h12v30z"/>
        </svg>
    `),

    instagram: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stop-color="#feda75"/>
                    <stop offset=".5" stop-color="#d62976"/>
                    <stop offset="1" stop-color="#4f5bd5"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" rx="22" fill="url(#ig)"/>
            <rect x="24" y="24" width="52" height="52" rx="14"
                fill="none" stroke="white" stroke-width="7"/>
            <circle cx="50" cy="50" r="12"
                fill="none" stroke="white" stroke-width="7"/>
            <circle cx="68" cy="32" r="4" fill="white"/>
        </svg>
    `),

    whatsapp: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="18" fill="#25D366"/>
            <path fill="white"
                d="M29 73l4-14a27 27 0 1 1 10 9zm20-18c7 4 10 5 13 2l3-4-7-4-3 3c-2 1-5-1-8-3s-5-5-4-7l2-3-4-6-4 2c-4 2-5 8-1 14 3 5 8 9 13 11z"/>
        </svg>
    `),

    youtube: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="18" fill="#FF0000"/>
            <path fill="white" d="M39 32l31 18-31 18z"/>
        </svg>
    `),

    linkedin: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="15" fill="#0A66C2"/>
            <path fill="white"
                d="M24 39h13v38H24zm6-20a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm15 20h12v5h.2c2-4 7-7 13-7 14 0 17 9 17 21v19H75V60c0-7 0-15-9-15s-10 7-10 15v17H45z"/>
        </svg>
    `),

    tiktok: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="18" fill="#111111"/>
            <path fill="#25F4EE"
                d="M58 24c2 11 8 17 18 19v11c-7 0-13-2-18-6v20c0 11-8 18-19 18-11 0-19-7-19-18 0-11 8-19 20-19v11c-5 0-9 3-9 8 0 4 3 7 8 7 5 0 8-3 8-9V24z"/>
            <path fill="#FE2C55"
                d="M61 24c3 9 8 14 17 16v7c-7-1-13-4-17-8z"/>
            <path fill="white"
                d="M55 24v45c0 7-4 12-11 12-4 0-8-3-8-7 0-5 4-8 9-8v-11c-12 0-20 8-20 19 0 11 8 18 19 18 11 0 19-7 19-18V45c5 5 11 7 18 7V43c-10-2-16-8-18-19z"/>
        </svg>
    `)
};

/*
|--------------------------------------------------------------------------
| CONTACT ICONS
|--------------------------------------------------------------------------
|
| These are separate SVG images instead of emoji characters so the
| icons remain sharp, consistent and visually aligned in Konva.
|--------------------------------------------------------------------------
*/

const CONTACT_ICONS = {

    phone: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill="COLOR"/>
            <path
                fill="white"
                d="M31 20c-4 1-8 5-9 10-2 15 7 31 17 40 10 10 26 19 40 17 5-1 9-5 10-9l2-10c0-2-1-4-3-5l-13-6c-2-1-5 0-6 2l-4 6c-7-3-16-12-19-19l6-4c2-1 3-4 2-6l-6-13c-1-2-3-3-5-3z"
            />
        </svg>
    `),

    email: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill="COLOR"/>
            <rect x="18" y="29" width="64" height="44" rx="6"
                fill="none" stroke="white" stroke-width="7"/>
            <path
                d="M20 34l30 25 30-25"
                fill="none"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `),

    location: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill="COLOR"/>
            <path
                fill="white"
                d="M50 16c-17 0-30 13-30 30 0 22 30 39 30 39s30-17 30-39c0-17-13-30-30-30zm0 43a13 13 0 1 1 0-26 13 13 0 0 1 0 26z"
            />
        </svg>
    `),

    website: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill="COLOR"/>
            <circle
                cx="50"
                cy="50"
                r="29"
                fill="none"
                stroke="white"
                stroke-width="6"
            />
            <path
                d="M21 50h58M50 21c9 9 13 19 13 29s-4 20-13 29c-9-9-13-19-13-29s4-20 13-29z"
                fill="none"
                stroke="white"
                stroke-width="5"
            />
        </svg>
    `)
};

const makeContactIcon = (
    type,
    color
) =>
    svgData(
        CONTACT_ICONS[type]
            .replace(
                "COLOR",
                color
            )
    );

/*
|--------------------------------------------------------------------------
| LOGO
|--------------------------------------------------------------------------
*/

const logoSVG = (
    name,
    color,
    variant = 0
) => {

    const shapes = [

        `<circle cx="150" cy="105" r="58" fill="white"/>`,

        `<rect x="88" y="43" width="124" height="124" rx="32" fill="white"/>`,

        `<polygon points="150,32 218,152 82,152" fill="white"/>`,

        `<circle cx="150" cy="105" r="51" fill="white"/>`,

        `<path d="M150 35 L205 90 L150 160 L95 90 Z" fill="white"/>`,

        `<path d="M105 58 Q150 25 195 58 L195 145 Q150 180 105 145 Z" fill="white"/>`,

        `<path d="M150 35 A70 70 0 1 0 150 175 A70 70 0 1 0 150 35Z" fill="white"/>`,

        `<rect x="82" y="52" width="136" height="106" rx="52" fill="white"/>`
    ];

    const innerShape =
        shapes[
        variant %
        shapes.length
        ];

    return svgData(`
        <svg xmlns="http://www.w3.org/2000/svg"
             width="300"
             height="300"
             viewBox="0 0 300 300">

            <rect
                width="300"
                height="300"
                rx="72"
                fill="${color}"
            />

            ${innerShape}

            <path
                d="M78 230 Q150 150 222 230"
                fill="none"
                stroke="${color}"
                stroke-width="20"
                stroke-linecap="round"
            />

            <circle
                cx="150"
                cy="105"
                r="10"
                fill="${color}"
            />

            <text
                x="150"
                y="278"
                text-anchor="middle"
                fill="white"
                font-size="25"
                font-family="Arial, sans-serif"
                font-weight="700"
                letter-spacing="1"
            >
                ${name
            .slice(0, 8)
            .toUpperCase()}
            </text>
        </svg>
    `);
};

/*
|--------------------------------------------------------------------------
| TEMPLATE HELPERS
|--------------------------------------------------------------------------
*/

const rect = (
    nx,
    ny,
    nw,
    nh,
    fill,
    rotation = 0
) => ({
    shape: "rectangle",
    nx,
    ny,
    nw,
    nh,
    fill,
    rotation
});

const circle = (
    nx,
    ny,
    nw,
    nh,
    fill
) => ({
    shape: "circle",
    nx,
    ny,
    nw,
    nh,
    fill,
    rotation: 0
});

const imageItem = ({
    type = "photo",
    src,
    x,
    y,
    width,
    height,
    rotation = 0,
    social = null
}) => ({
    type,
    social,
    src,
    nx: x,
    ny: y,
    nw: width,
    nh: height,
    rotation
});

const textItem = ({
    id,
    role,
    type = "business",
    text,
    x,
    y,
    width,
    fontScale,
    fill = "#ffffff",
    fontFamily = "Poppins",
    fontStyle = "normal",
    align = "left",
    underline = false,
    letterSpacing = 0
}) => ({
    ...(id !== undefined
        ? { id }
        : {}),
    role,
    type,
    text,
    nx: x,
    ny: y,
    nw: width,
    fontScale,
    fill,
    fontFamily,
    fontStyle,
    align,
    underline,
    letterSpacing
});

/*
|--------------------------------------------------------------------------
| EDGE BORDER
|--------------------------------------------------------------------------
*/

const addBorder = (
    blocks,
    color,
    thickness = 0.012
) => {

    blocks.push(
        rect(
            0,
            0,
            1,
            thickness,
            color
        )
    );

    blocks.push(
        rect(
            0,
            1 - thickness,
            1,
            thickness,
            color
        )
    );

    blocks.push(
        rect(
            0,
            0,
            thickness,
            1,
            color
        )
    );

    blocks.push(
        rect(
            1 - thickness,
            0,
            thickness,
            1,
            color
        )
    );
};

/*
|--------------------------------------------------------------------------
| SOCIAL ROW
|--------------------------------------------------------------------------
*/

const addSocialRow = (
    images,
    startX,
    y,
    size = 0.038
) => {

    const socials = [
        "facebook",
        "whatsapp",
        "youtube",
        "linkedin",
        "instagram",
        "tiktok"
    ];

    const gap = 0.012;

    /*
    | Keep the row safely away from the right edge.
    | This is intentionally farther left than the old version.
    */

    const adjustedStartX =
        startX - 0.050;

    socials.forEach(
        (
            social,
            index
        ) => {

            images.push(
                imageItem({
                    type: "social",
                    social,
                    src:
                        SOCIAL_ICONS[
                        social
                        ],

                    x:
                        adjustedStartX +
                        index *
                        (size +
                            gap),

                    y,

                    width: size,
                    height: size
                })
            );

        }
    );
};

/*
|--------------------------------------------------------------------------
| OFFER / PROMOTION DECORATIONS
|--------------------------------------------------------------------------
*/

const addOfferBadge = ({
    blocks,
    texts,
    text,
    variant,
    palette,
    x,
    y,
    width = 0.27,
    height = 0.065,
    fontFamily = "Montserrat"
}) => {

    /*
    | 0 = pill
    | 1 = outlined card
    | 2 = circle
    | 3 = double-layer badge
    | 4 = ribbon style
    | 5 = rounded card
    | 6 = angled badge
    | 7 = clean premium badge
    */

    if (variant === 0) {

        blocks.push(
            rect(
                x,
                y,
                width,
                height,
                palette[1]
            )
        );

        blocks.push(
            rect(
                x + 0.012,
                y + 0.010,
                width - 0.024,
                height - 0.020,
                palette[0]
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.018,
                y:
                    y + 0.017,
                width:
                    width - 0.036,
                fontScale: 0.023,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    if (variant === 1) {

        blocks.push(
            rect(
                x,
                y,
                width,
                height,
                "#ffffff"
            )
        );

        blocks.push(
            rect(
                x + 0.009,
                y + 0.009,
                width - 0.018,
                height - 0.018,
                palette[0]
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.018,
                y:
                    y + 0.017,
                width:
                    width - 0.036,
                fontScale: 0.022,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    if (variant === 2) {

        blocks.push(
            circle(
                x,
                y,
                width,
                height,
                palette[1]
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.015,
                y:
                    y + 0.018,
                width:
                    width - 0.030,
                fontScale: 0.020,
                fill: "#111827",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    if (variant === 3) {

        blocks.push(
            circle(
                x,
                y,
                width,
                height,
                palette[0]
            )
        );

        blocks.push(
            circle(
                x + 0.014,
                y + 0.014,
                width - 0.028,
                height - 0.028,
                palette[1]
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.020,
                y:
                    y + 0.020,
                width:
                    width - 0.040,
                fontScale: 0.019,
                fill: "#111827",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    if (variant === 4) {

        blocks.push(
            rect(
                x,
                y,
                width,
                height,
                palette[1]
            )
        );

        blocks.push(
            rect(
                x + width - 0.035,
                y,
                0.035,
                height,
                palette[0]
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.018,
                y:
                    y + 0.018,
                width:
                    width - 0.055,
                fontScale: 0.021,
                fill: "#111827",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    if (variant === 5) {

        blocks.push(
            rect(
                x,
                y,
                width,
                height,
                palette[0]
            )
        );

        blocks.push(
            rect(
                x + 0.012,
                y + 0.012,
                width - 0.024,
                height - 0.024,
                palette[1]
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.025,
                y:
                    y + 0.020,
                width:
                    width - 0.050,
                fontScale: 0.020,
                fill: "#111827",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    if (variant === 6) {

        blocks.push(
            rect(
                x,
                y,
                width,
                height,
                palette[1],
                -4
            )
        );

        texts.push(
            textItem({
                role: "offer",
                text,
                x:
                    x + 0.015,
                y:
                    y + 0.017,
                width:
                    width - 0.030,
                fontScale: 0.021,
                fill: "#111827",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        return;
    }

    blocks.push(
        rect(
            x,
            y,
            width,
            height,
            "#ffffff"
        )
    );

    texts.push(
        textItem({
            role: "offer",
            text,
            x:
                x + 0.018,
            y:
                y + 0.018,
            width:
                width - 0.036,
            fontScale: 0.021,
            fill: palette[0],
            fontStyle: "bold",
            fontFamily,
            align: "center"
        })
    );
};

/*
|--------------------------------------------------------------------------
| STYLE CONTENT VARIATIONS
|--------------------------------------------------------------------------
*/

const STYLE_COPY = {
    Restaurant: [
        ["Fresh Taste • Every Day", "TODAY'S SPECIAL"],
        ["Fine Dining • Great Moments", "CHEF'S CHOICE"],
        ["Made Fresh For You", "20% OFF"],
        ["Taste The Difference", "NEW MENU"],
        ["Good Food • Good Mood", "LIMITED OFFER"],
        ["Authentic Flavours", "WEEKEND SPECIAL"],
        ["Your Table Awaits", "BOOK NOW"],
        ["Fresh • Local • Delicious", "ORDER TODAY"]
    ],

    Cafe: [
        ["Freshly Brewed Moments", "BUY 1 GET 1"],
        ["Coffee • Pastries • Smiles", "MORNING DEAL"],
        ["Your Daily Coffee Stop", "SPECIAL LATTE"],
        ["Slow Down • Sip • Enjoy", "COFFEE TIME"],
        ["Good Coffee. Great Company.", "10% OFF"],
        ["Made With Love", "NEW FLAVOUR"],
        ["Meet Me For Coffee", "HAPPY HOUR"],
        ["A Better Way To Start", "BREAKFAST DEAL"]
    ],

    Fashion: [
        ["New Season • New Style", "UP TO 40% OFF"],
        ["Wear Your Confidence", "NEW ARRIVALS"],
        ["Style That Speaks", "SHOP NOW"],
        ["Everyday Looks • Elevated", "LIMITED DROP"],
        ["Your Style. Your Story.", "SALE NOW"],
        ["Modern Looks For You", "30% OFF"],
        ["Fresh Fits • Fresh Energy", "NEW COLLECTION"],
        ["Dress Bold. Feel Great.", "SHOP TODAY"]
    ],

    Photography: [
        ["Moments Worth Remembering", "BOOK YOUR SESSION"],
        ["Stories Through Images", "NOW BOOKING"],
        ["Your Moments • Our Lens", "WEDDING SPECIAL"],
        ["Beautifully Captured", "BOOK TODAY"],
        ["Frames That Tell Stories", "PORTRAIT DEAL"],
        ["Timeless Visual Memories", "LIMITED SLOTS"],
        ["Light • Emotion • Story", "CONTACT US"],
        ["Your Story In Focus", "SESSION AVAILABLE"]
    ],

    Resort: [
        ["Luxury • Escape • Relax", "20% OFF STAYS"],
        ["Your Perfect Escape", "SUMMER SPECIAL"],
        ["Relax Beside Paradise", "WEEKEND DEAL"],
        ["Stay. Relax. Remember.", "BOOK NOW"],
        ["A Little More Paradise", "EARLY BIRD"],
        ["Escape The Ordinary", "15% OFF"],
        ["Where Every Stay Matters", "SPECIAL PACKAGE"],
        ["Your Holiday Starts Here", "RESERVE TODAY"]
    ],

    Fitness: [
        ["GET FIT • STAY STRONG", "JOIN TODAY"],
        ["Stronger Every Day", "FREE TRIAL"],
        ["Train Hard • Live Better", "NEW MEMBERS"],
        ["Your Fitness Journey", "JOIN NOW"],
        ["Build Strength • Build Confidence", "20% OFF"],
        ["Move Better. Feel Better.", "START TODAY"],
        ["Power Your Potential", "FREE SESSION"],
        ["Results Start Here", "LIMITED OFFER"]
    ],

    Beauty: [
        ["Pamper Yourself • Shine Bright", "BEAUTY SPECIAL"],
        ["Feel Beautiful Every Day", "20% OFF"],
        ["Your Beauty. Your Moment.", "BOOK TODAY"],
        ["Glow With Confidence", "NEW CLIENT OFFER"],
        ["Beauty Made Personal", "SPECIAL PACKAGE"],
        ["Relax • Refresh • Renew", "15% OFF"],
        ["Look Your Best", "APPOINTMENTS OPEN"],
        ["A Little Luxury For You", "BOOK NOW"]
    ],

    Auto: [
        ["Expert Repairs • Honest Service", "FREE CHECKUP"],
        ["Drive With Confidence", "SERVICE SPECIAL"],
        ["Care For Every Journey", "10% OFF"],
        ["Reliable Service • Every Time", "BOOK SERVICE"],
        ["Keep Your Car Ready", "BRAKE CHECK"],
        ["Professional Auto Care", "NEW CUSTOMER"],
        ["Performance Starts Here", "FREE INSPECTION"],
        ["Your Car Deserves The Best", "SERVICE TODAY"]
    ],

    Grocery: [
        ["Fresh • Organic • Local", "FRESH EVERY DAY"],
        ["Better Food. Better Living.", "10% OFF"],
        ["Freshness You Can Trust", "WEEKLY DEAL"],
        ["Good Food For Every Home", "SHOP TODAY"],
        ["Healthy Choices Made Easy", "SPECIAL OFFER"],
        ["Fresh From Farm To Table", "SAVE TODAY"],
        ["Everything Fresh. Everything Close.", "NEW DEALS"],
        ["Your Everyday Fresh Market", "SHOP NOW"]
    ],

    "Real Estate": [
        ["Find A Place To Call Home", "NEW LISTINGS"],
        ["Better Homes • Better Living", "VIEW PROPERTY"],
        ["Your Next Address Starts Here", "BOOK A VIEWING"],
        ["Spaces Made For Life", "JUST LISTED"],
        ["Invest In Your Future", "NEW PROPERTY"],
        ["Premium Homes • Prime Locations", "VIEW NOW"],
        ["A Better Place To Belong", "CONTACT AGENT"],
        ["Property Made Simple", "BOOK TODAY"]
    ],

    Travel: [
        ["Explore • Discover • Experience", "TRAVEL DEALS"],
        ["Your Next Adventure Awaits", "BOOK NOW"],
        ["See More. Live More.", "EARLY BIRD"],
        ["Go Somewhere Beautiful", "20% OFF"],
        ["Journeys Worth Remembering", "LIMITED DEAL"],
        ["Discover Your Next Escape", "PLAN TODAY"],
        ["Travel Far • Dream Big", "SPECIAL PACKAGE"],
        ["Make Your Next Trip Count", "BOOK TODAY"]
    ],

    Education: [
        ["Learn • Grow • Succeed", "NEW INTAKE"],
        ["Build Your Future Today", "ENROLL NOW"],
        ["Knowledge Opens Doors", "ADMISSIONS OPEN"],
        ["Learn Today. Lead Tomorrow.", "JOIN NOW"],
        ["Your Future Starts Here", "NEW BATCH"],
        ["Education For Tomorrow", "APPLY TODAY"],
        ["Grow Your Skills • Grow Your Future", "LIMITED SEATS"],
        ["Learn More. Become More.", "REGISTER NOW"]
    ]
};

/*
|--------------------------------------------------------------------------
| CREATE TEMPLATE
|--------------------------------------------------------------------------
*/

const createTemplate = (
    business,
    style,
    number
) => {

    const data =
        BUSINESS_DATA[business];

    const variant =
        STYLES.indexOf(style);

    /*
    | Generate a visually different palette for each layout while
    | retaining the business category's original identity.
    */

    const palette =
        getTemplatePalette(
            business,
            variant
        );

    const photos =
        PHOTOS[business];

    const backgroundSrc =
        photos[variant];

    /*
    | Use a different but relevant photograph for the secondary image.
    */

    const extraSrc =
        photos[
        (variant + 3) %
        photos.length
        ];

    const copy =
        STYLE_COPY[business][variant];

    const fontFamily =
        FONT_FAMILIES[business][
        variant
        ];

    const id =
        `${business
            .toLowerCase()
            .replace(/\s+/g, "-")}-${style}-${number}`;

    const texts = [];
    const images = [];
    const blocks = [];

    /*
    |--------------------------------------------------------------------------
    | BACKGROUND
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
    | BOTTOM CONTACT AREA
    |--------------------------------------------------------------------------
    |
    | Strictly black or white.
    |--------------------------------------------------------------------------
    */

    const darkBottom =
        variant % 2 === 0;

    const bottomFill =
        darkBottom
            ? "#111111"
            : "#ffffff";

    const bottomText =
        darkBottom
            ? "#ffffff"
            : "#111111";

    const bottomSecondary =
        darkBottom
            ? "#e5e7eb"
            : "#374151";

    blocks.push(
        rect(
            0,
            0.775,
            1,
            0.225,
            bottomFill
        )
    );

    /*
    |--------------------------------------------------------------------------
    | CONTACT ACCENT
    |--------------------------------------------------------------------------
    |
    | The contact icons use the template's accent color while the
    | surrounding contact rectangle itself remains strictly black/white.
    |--------------------------------------------------------------------------
    */

    const contactAccent =
        palette[0];

    /*
    |--------------------------------------------------------------------------
    | BORDER
    |--------------------------------------------------------------------------
    */

    addBorder(
        blocks,
        palette[1],
        0.010
    );

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 1 - SPLIT
    |--------------------------------------------------------------------------
    */

    if (style === "split") {

        blocks.push(
            rect(
                0.045,
                0.075,
                0.48,
                0.625,
                "rgba(0,0,0,0.58)"
            )
        );

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.58,
                y: 0.10,
                width: 0.34,
                height: 0.53
            })
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[0],
                    variant
                ),
                x: 0.065,
                y: 0.085,
                width: 0.125,
                height: 0.125
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.075,
                y: 0.235,
                width: 0.44,
                fontScale: 0.071,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.08,
                y: 0.365,
                width: 0.42,
                fontScale: 0.034,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 1) %
                    8
                    ]
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.08,
                y: 0.445,
                width: 0.40,
                fontScale: 0.025,
                fill: "#ffffff",
                fontFamily:
                    "Poppins"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 0,
            palette,
            x: 0.08,
            y: 0.555,
            width: 0.31,
            height: 0.070,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 2 - EDITORIAL
    |--------------------------------------------------------------------------
    */

    if (style === "editorial") {

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.055,
                y: 0.09,
                width: 0.39,
                height: 0.57
            })
        );

        blocks.push(
            rect(
                0.48,
                0.09,
                0.44,
                0.57,
                "rgba(0,0,0,0.56)"
            )
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[1],
                    variant
                ),
                x: 0.525,
                y: 0.105,
                width: 0.125,
                height: 0.125
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.535,
                y: 0.265,
                width: 0.35,
                fontScale: 0.068,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.54,
                y: 0.385,
                width: 0.33,
                fontScale: 0.032,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 2) %
                    8
                    ]
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.54,
                y: 0.455,
                width: 0.32,
                fontScale: 0.024,
                fill: "#ffffff",
                fontFamily: "Poppins"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 1,
            palette,
            x: 0.54,
            y: 0.555,
            width: 0.27,
            height: 0.065,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 3 - CENTERED
    |--------------------------------------------------------------------------
    */

    if (style === "centered") {

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[0],
                    variant
                ),
                x: 0.425,
                y: 0.045,
                width: 0.15,
                height: 0.15
            })
        );

        blocks.push(
            rect(
                0.06,
                0.21,
                0.88,
                0.43,
                "rgba(0,0,0,0.52)"
            )
        );

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.70,
                y: 0.25,
                width: 0.21,
                height: 0.29
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.10,
                y: 0.255,
                width: 0.52,
                fontScale: 0.070,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.10,
                y: 0.365,
                width: 0.52,
                fontScale: 0.033,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 3) %
                    8
                    ],
                align: "center"
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.10,
                y: 0.445,
                width: 0.52,
                fontScale: 0.024,
                fill: "#ffffff",
                fontFamily: "Poppins",
                align: "center"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 2,
            palette,
            x: 0.13,
            y: 0.535,
            width: 0.22,
            height: 0.065,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 4 - PHOTO CARD
    |--------------------------------------------------------------------------
    */

    if (style === "photoCard") {

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.055,
                y: 0.09,
                width: 0.42,
                height: 0.58
            })
        );

        blocks.push(
            rect(
                0.505,
                0.075,
                0.43,
                0.61,
                "#ffffff"
            )
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[0],
                    variant
                ),
                x: 0.535,
                y: 0.095,
                width: 0.125,
                height: 0.125
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.55,
                y: 0.245,
                width: 0.32,
                fontScale: 0.062,
                fill: "#111827",
                fontStyle: "bold",
                fontFamily
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.55,
                y: 0.345,
                width: 0.32,
                fontScale: 0.031,
                fill: palette[0],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 4) %
                    8
                    ]
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.55,
                y: 0.425,
                width: 0.31,
                fontScale: 0.023,
                fill: "#334155",
                fontFamily: "Poppins"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 3,
            palette,
            x: 0.55,
            y: 0.535,
            width: 0.27,
            height: 0.075,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 5 - PROMO
    |--------------------------------------------------------------------------
    */

    if (style === "promo") {

        blocks.push(
            rect(
                0.045,
                0.075,
                0.91,
                0.60,
                "rgba(0,0,0,0.56)"
            )
        );

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.57,
                y: 0.115,
                width: 0.33,
                height: 0.38
            })
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[0],
                    variant
                ),
                x: 0.06,
                y: 0.095,
                width: 0.125,
                height: 0.125
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.075,
                y: 0.245,
                width: 0.43,
                fontScale: 0.069,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.08,
                y: 0.355,
                width: 0.43,
                fontScale: 0.032,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 5) %
                    8
                    ]
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.08,
                y: 0.435,
                width: 0.42,
                fontScale: 0.023,
                fill: "#ffffff",
                fontFamily: "Poppins"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 4,
            palette,
            x: 0.64,
            y: 0.525,
            width: 0.23,
            height: 0.105,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 6 - CLEAN FRAME
    |--------------------------------------------------------------------------
    */

    if (style === "cleanFrame") {

        blocks.push(
            rect(
                0.045,
                0.075,
                0.91,
                0.60,
                "rgba(255,255,255,0.18)"
            )
        );

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.30,
                y: 0.105,
                width: 0.40,
                height: 0.29
            })
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[1],
                    variant
                ),
                x: 0.06,
                y: 0.09,
                width: 0.12,
                height: 0.12
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.10,
                y: 0.435,
                width: 0.80,
                fontScale: 0.068,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily,
                align: "center"
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.12,
                y: 0.535,
                width: 0.76,
                fontScale: 0.032,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 6) %
                    8
                    ],
                align: "center"
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.15,
                y: 0.605,
                width: 0.70,
                fontScale: 0.023,
                fill: "#ffffff",
                fontFamily: "Poppins",
                align: "center"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 5,
            palette,
            x: 0.37,
            y: 0.665,
            width: 0.26,
            height: 0.055,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 7 - CORNER
    |--------------------------------------------------------------------------
    */

    if (style === "corner") {

        blocks.push(
            rect(
                0.05,
                0.075,
                0.52,
                0.60,
                "rgba(0,0,0,0.58)"
            )
        );

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.62,
                y: 0.10,
                width: 0.28,
                height: 0.30
            })
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[0],
                    variant
                ),
                x: 0.06,
                y: 0.095,
                width: 0.12,
                height: 0.12
            })
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.075,
                y: 0.245,
                width: 0.44,
                fontScale: 0.069,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.08,
                y: 0.355,
                width: 0.43,
                fontScale: 0.032,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 7) %
                    8
                    ]
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.08,
                y: 0.435,
                width: 0.43,
                fontScale: 0.023,
                fill: "#ffffff",
                fontFamily: "Poppins"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 6,
            palette,
            x: 0.08,
            y: 0.555,
            width: 0.30,
            height: 0.065,
            fontFamily
        });

        blocks.push(
            circle(
                0.74,
                0.48,
                0.15,
                0.15,
                palette[0]
            )
        );

        texts.push(
            textItem({
                role: "badge",
                text: "SPECIAL",
                x: 0.755,
                y: 0.535,
                width: 0.12,
                fontScale: 0.020,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily:
                    "Montserrat",
                align: "center"
            })
        );
    }

    /*
    |--------------------------------------------------------------------------
    | LAYOUT 8 - GRID
    |--------------------------------------------------------------------------
    */

    if (style === "grid") {

        images.push(
            imageItem({
                type: "photo",
                src: extraSrc,
                x: 0.60,
                y: 0.09,
                width: 0.32,
                height: 0.27
            })
        );

        images.push(
            imageItem({
                type: "logo",
                src: logoSVG(
                    data.name,
                    palette[0],
                    variant
                ),
                x: 0.045,
                y: 0.055,
                width: 0.125,
                height: 0.125
            })
        );

        blocks.push(
            rect(
                0.055,
                0.205,
                0.46,
                0.43,
                "rgba(0,0,0,0.56)"
            )
        );

        blocks.push(
            rect(
                0.55,
                0.40,
                0.37,
                0.24,
                "rgba(255,255,255,0.16)"
            )
        );

        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.08,
                y: 0.255,
                width: 0.40,
                fontScale: 0.064,
                fill: "#ffffff",
                fontStyle: "bold",
                fontFamily
            })
        );

        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: copy[0],
                x: 0.08,
                y: 0.36,
                width: 0.40,
                fontScale: 0.032,
                fill: palette[1],
                fontStyle: "bold",
                fontFamily:
                    FONT_FAMILIES[
                    business
                    ][
                    (variant + 1) %
                    8
                    ]
            })
        );

        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.08,
                y: 0.435,
                width: 0.40,
                fontScale: 0.023,
                fill: "#ffffff",
                fontFamily: "Poppins"
            })
        );

        addOfferBadge({
            blocks,
            texts,
            text: copy[1],
            variant: 7,
            palette,
            x: 0.59,
            y: 0.47,
            width: 0.29,
            height: 0.070,
            fontFamily
        });
    }

    /*
    |--------------------------------------------------------------------------
    | CONTACT DETAILS
    |--------------------------------------------------------------------------
    |
    | Four separate lines.
    | The icons are independent image objects.
    | Text is vertically aligned with the icon centers.
    |--------------------------------------------------------------------------
    */

    const contactRows = [
        {
            id: 4,
            role: "phone",
            icon: "phone",
            text: data.phone,
            y: 0.795
        },
        {
            id: 5,
            role: "email",
            icon: "email",
            text: data.email,
            y: 0.830
        },
        {
            id: 6,
            role: "address",
            icon: "location",
            text: data.address,
            y: 0.865
        },
        {
            id: 7,
            role: "website",
            icon: "website",
            text: data.website,
            y: 0.900
        }
    ];

    contactRows.forEach(
        row => {

            /*
            | Icon is slightly larger and positioned so its center
            | aligns with the contact text.
            */

            images.push(
                imageItem({
                    type: "contactIcon",
                    src: makeContactIcon(
                        row.icon,
                        contactAccent
                    ),
                    x: 0.035,
                    y:
                        row.y -
                        0.009,
                    width: 0.028,
                    height: 0.028
                })
            );

            texts.push(
                textItem({
                    id: row.id,
                    role: row.role,
                    type: "contact",
                    text: row.text,
                    x: 0.072,
                    y:
                        row.y -
                        0.005,
                    width: 0.56,
                    fontScale: 0.0205,
                    fill:
                        row.role ===
                            "website"
                            ? bottomSecondary
                            : bottomText,
                    fontFamily:
                        "Poppins",
                    fontStyle:
                        row.role ===
                            "website"
                            ? "normal"
                            : "bold"
                })
            );
        }
    );

    /*
    |--------------------------------------------------------------------------
    | SOCIAL ICONS
    |--------------------------------------------------------------------------
    |
    | Moved left so the row has comfortable spacing from the right edge.
    |--------------------------------------------------------------------------
    */

    addSocialRow(
        images,
        0.705,
        0.838,
        0.040
    );

    /*
    |--------------------------------------------------------------------------
    | RETURN TEMPLATE
    |--------------------------------------------------------------------------
    */

    return {
        id,

        name:
            `${data.name} — ${STYLE_NAMES[style]}`,

        businessType:
            business,

        style,

        variant,

        description:
            data.description,

        sizes:
            Object.keys(
                TEMPLATE_SIZES
            ),

        background,

        texts,

        images,

        blocks
    };
};

/*
|--------------------------------------------------------------------------
| STYLES
|--------------------------------------------------------------------------
*/

const STYLES = [
    "split",
    "editorial",
    "centered",
    "photoCard",
    "promo",
    "cleanFrame",
    "corner",
    "grid"
];

const STYLE_NAMES = {
    split: "Split Studio",
    editorial: "Editorial",
    centered: "Centered Focus",
    photoCard: "Photo Card",
    promo: "Promo",
    cleanFrame: "Clean Frame",
    corner: "Corner Highlight",
    grid: "Modern Grid"
};

/*
|--------------------------------------------------------------------------
| GENERATE 96 TEMPLATES
|--------------------------------------------------------------------------
*/

export const templates = [];

let templateNumber = 1;

Object.keys(
    BUSINESS_DATA
).forEach(
    business => {

        STYLES.forEach(
            style => {

                templates.push(
                    createTemplate(
                        business,
                        style,
                        templateNumber++
                    )
                );

            }
        );

    }
);

/*
|--------------------------------------------------------------------------
| SAFETY CHECK
|--------------------------------------------------------------------------
*/

if (
    templates.length !== 96
) {

    console.error(
        `AdStudio template library expected 96 templates but found ${templates.length}`
    );

}

export default templates;