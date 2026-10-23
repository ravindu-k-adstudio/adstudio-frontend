
// /* ============================================================
//    ADSTUDIO — PREMIUM TEMPLATE LIBRARY
//    ============================================================

//    13 BUSINESS TYPES
//    ×
//    12 DISTINCT DESIGN MODELS
//    =
//    156 TEMPLATES

//    IMPORTANT:
//    - Normalized coordinates are used everywhere.
//    - Real editor borders are stored in `borders`.
//    - Border is NOT simulated using four blocks.
//    - Contact panel uses ~50% transparency.
//    - Social icons are real SVG artwork.
//    - Promotion badges are separate editable image + text.
//    - Other category uses gradient backgrounds only.
//    ============================================================ */


// /* ============================================================
//    TEMPLATE SIZES
//    ============================================================ */

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


// /* ============================================================
//    BUSINESS TYPES
//    ============================================================ */

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
//     "Education",
//     "Other"
// ];


// /* ============================================================
//    BUSINESS CONTENT
//    ============================================================ */

// const BUSINESS_DATA = {

//     Restaurant: {
//         name: "Urban Table",
//         tagline: "Bold Flavours. Beautifully Served.",
//         description: "Fresh ingredients, signature dishes and memorable dining experiences.",
//         offer: "30% OFF",

//         phone: "+94 77 123 4567",
//         email: "hello@urbantable.lk",
//         address: "24 Galle Road, Colombo",
//         website: "www.urbantable.lk",

//         contactAccent: "#FFB703"
//     },

//     Cafe: {
//         name: "Brew & Bloom",
//         tagline: "Small Moments. Great Coffee.",
//         description: "Fresh coffee, handcrafted drinks and delicious bites made every day.",
//         offer: "BUY 1 GET 1",

//         phone: "+94 77 234 5678",
//         email: "hello@brewandbloom.lk",
//         address: "18 Flower Road, Colombo",
//         website: "www.brewandbloom.lk",

//         contactAccent: "#D69E2E"
//     },

//     Fashion: {
//         name: "Mode District",
//         tagline: "Wear The Moment.",
//         description: "Contemporary collections designed for confident everyday style.",
//         offer: "40% OFF",

//         phone: "+94 77 345 6789",
//         email: "hello@modedistrict.lk",
//         address: "45 Ward Place, Colombo",
//         website: "www.modedistrict.lk",

//         contactAccent: "#FF4D8D"
//     },

//     Photography: {
//         name: "Frame House",
//         tagline: "Beautiful Light. Real Emotion.",
//         description: "Portraits, events and stories captured with timeless detail.",
//         offer: "20% OFF",

//         phone: "+94 77 456 7890",
//         email: "hello@framehouse.lk",
//         address: "12 Park Road, Colombo",
//         website: "www.framehouse.lk",

//         contactAccent: "#8B5CF6"
//     },

//     Resort: {
//         name: "Azure Escape",
//         tagline: "Wake Up Somewhere Wonderful.",
//         description: "Relax, explore and create unforgettable memories by the coast.",
//         offer: "STAY 3 • PAY 2",

//         phone: "+94 77 567 8901",
//         email: "reservations@azureescape.lk",
//         address: "25 Beach Road, Galle",
//         website: "www.azureescape.lk",

//         contactAccent: "#22D3EE"
//     },

//     Fitness: {
//         name: "Pulse Athletics",
//         tagline: "Energy Starts Today.",
//         description: "Train smarter with expert coaching, modern equipment and real results.",
//         offer: "FREE DAY PASS",

//         phone: "+94 77 678 9012",
//         email: "hello@pulseathletics.lk",
//         address: "31 Main Street, Colombo",
//         website: "www.pulseathletics.lk",

//         contactAccent: "#A3E635"
//     },

//     Beauty: {
//         name: "Lumière Beauty",
//         tagline: "Glow With Confidence.",
//         description: "Premium beauty, hair and wellness services created around you.",
//         offer: "20% OFF",

//         phone: "+94 77 789 0123",
//         email: "hello@lumierebeauty.lk",
//         address: "16 Flower Road, Colombo",
//         website: "www.lumierebeauty.lk",

//         contactAccent: "#F472B6"
//     },

//     Auto: {
//         name: "DriveLab",
//         tagline: "Precision For Every Drive.",
//         description: "Professional vehicle care, servicing and detailing you can trust.",
//         offer: "15% OFF",

//         phone: "+94 77 890 1234",
//         email: "service@drivelab.lk",
//         address: "72 High Level Road, Colombo",
//         website: "www.drivelab.lk",

//         contactAccent: "#38BDF8"
//     },

//     Grocery: {
//         name: "FreshMart",
//         tagline: "Fresh Finds For Every Day.",
//         description: "Fresh produce, everyday essentials and great value under one roof.",
//         offer: "SAVE TODAY",

//         phone: "+94 77 901 2345",
//         email: "hello@freshmart.lk",
//         address: "10 Market Street, Colombo",
//         website: "www.freshmart.lk",

//         contactAccent: "#4ADE80"
//     },

//     "Real Estate": {
//         name: "Prime Living",
//         tagline: "A Home That Fits Your Future.",
//         description: "Discover exceptional homes, apartments and investment opportunities.",
//         offer: "NEW LISTING",

//         phone: "+94 77 112 2334",
//         email: "hello@primeliving.lk",
//         address: "55 Union Place, Colombo",
//         website: "www.primeliving.lk",

//         contactAccent: "#F59E0B"
//     },

//     Travel: {
//         name: "Voyage Studio",
//         tagline: "Your Next Story Starts Here.",
//         description: "Curated journeys, unforgettable destinations and effortless travel planning.",
//         offer: "BOOK & SAVE",

//         phone: "+94 77 223 3445",
//         email: "hello@voyagestudio.lk",
//         address: "28 Duplication Road, Colombo",
//         website: "www.voyagestudio.lk",

//         contactAccent: "#2DD4BF"
//     },

//     Education: {
//         name: "NextStep Academy",
//         tagline: "Learn Today. Lead Tomorrow.",
//         description: "Practical learning, expert guidance and skills built for the future.",
//         offer: "ENROLL NOW",

//         phone: "+94 77 334 4556",
//         email: "info@nextstepacademy.lk",
//         address: "40 Education Road, Colombo",
//         website: "www.nextstepacademy.lk",

//         contactAccent: "#60A5FA"
//     },

//     Other: {
//         name: "Nova Studio",
//         tagline: "Make Your Brand Impossible To Ignore.",
//         description: "Flexible promotional layouts for modern businesses and creators.",
//         offer: "SPECIAL OFFER",

//         phone: "+94 77 445 5667",
//         email: "hello@novastudio.lk",
//         address: "22 Business Street, Colombo",
//         website: "www.novastudio.lk",

//         contactAccent: "#00D9FF"
//     }
// };

// /* ============================================================
//    COLOR SYSTEM
//    ============================================================ */

// const PALETTES = {

//     Restaurant: [
//         "#FF4D00",
//         "#FFB703",
//         "#FFF3D6",
//         "#7C2D12"
//     ],

//     Cafe: [
//         "#B45309",
//         "#F59E0B",
//         "#FDE68A",
//         "#3F2A1D"
//     ],

//     Fashion: [
//         "#EC4899",
//         "#8B5CF6",
//         "#FCE7F3",
//         "#111827"
//     ],

//     Photography: [
//         "#8B5CF6",
//         "#C084FC",
//         "#F5F3FF",
//         "#171717"
//     ],

//     Resort: [
//         "#06B6D4",
//         "#14B8A6",
//         "#CCFBF1",
//         "#0F172A"
//     ],

//     Fitness: [
//         "#84CC16",
//         "#22C55E",
//         "#ECFCCB",
//         "#111827"
//     ],

//     Beauty: [
//         "#EC4899",
//         "#F472B6",
//         "#FCE7F3",
//         "#831843"
//     ],

//     Auto: [
//         "#0EA5E9",
//         "#2563EB",
//         "#BAE6FD",
//         "#0F172A"
//     ],

//     Grocery: [
//         "#16A34A",
//         "#84CC16",
//         "#DCFCE7",
//         "#14532D"
//     ],

//     "Real Estate": [
//         "#D97706",
//         "#F59E0B",
//         "#FEF3C7",
//         "#292524"
//     ],

//     Travel: [
//         "#14B8A6",
//         "#06B6D4",
//         "#CCFBF1",
//         "#0F172A"
//     ],

//     Education: [
//         "#2563EB",
//         "#60A5FA",
//         "#DBEAFE",
//         "#172554"
//     ],

//     Other: [
//         "#00D9FF",
//         "#7C3AED",
//         "#EC4899",
//         "#0F172A"
//     ]
// };


// /* ============================================================
//    PHOTO LIBRARY
//    ============================================================ */

// const PHOTOS = {

//     Restaurant: [
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//         "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
//         "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
//         "https://images.unsplash.com/photo-1547592180-85f173990554",
//         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
//         "https://images.unsplash.com/photo-1552566626-52f8b828add9",
//         "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
//         "https://images.unsplash.com/photo-1521305916504-4a1121188589",
//         "https://images.unsplash.com/photo-1513104890138-7c749659a591",
//         "https://images.unsplash.com/photo-1559339352-11d035aa65de",
//         "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
//         "https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
//     ],

//     Cafe: [
//         "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
//         "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
//         "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
//         "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
//         "https://images.unsplash.com/photo-1511081692775-05d0f180a065",
//         "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
//         "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
//         "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
//         "https://images.unsplash.com/photo-1498804103079-a6351b050096",
//         "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
//         "https://images.unsplash.com/photo-1461988320302-91bde864fc4e",
//         "https://images.unsplash.com/photo-1495867033461-6f5b7d7e7a3a"
//     ],

//     Fashion: [
//         "https://images.unsplash.com/photo-1445205170230-053b83016050",
//         "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//         "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
//         "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
//         "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
//         "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
//         "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
//         "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
//         "https://images.unsplash.com/photo-1485230895905-ec40ba36b2bc",
//         "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
//         "https://images.unsplash.com/photo-1506629905607-31b5d4b8c1c8",
//         "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
//     ],

//     Photography: [
//         "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
//         "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac",
//         "https://images.unsplash.com/photo-1516724562728-afc824a36e84",
//         "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
//         "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
//         "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848",
//         "https://images.unsplash.com/photo-1517841905240-472988babdf9",
//         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//         "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe",
//         "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//         "https://images.unsplash.com/photo-1500534623283-312aade485b7",
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
//     ],

//     Resort: [
//         "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
//         "https://images.unsplash.com/photo-1540541338287-41700207dee6",
//         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//         "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//         "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d",
//         "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
//         "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
//         "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
//         "https://images.unsplash.com/photo-1498503182468-3b51cbb6e2c2",
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//         "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
//     ],

//     Fitness: [
//         "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
//         "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
//         "https://images.unsplash.com/photo-1538805060514-97d9cc17730c",
//         "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
//         "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
//         "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
//         "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
//         "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
//         "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
//         "https://images.unsplash.com/photo-1517964603305-11c0f6f66012",
//         "https://images.unsplash.com/photo-1517838277536-f5f99be5019f"
//     ],

//     Beauty: [
//         "https://images.unsplash.com/photo-1560066984-138dadb4c035",
//         "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
//         "https://images.unsplash.com/photo-1562322140-8baeececf3df",
//         "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
//         "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
//         "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
//         "https://images.unsplash.com/photo-1519415387722-a1c3bb7c9cfb",
//         "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
//         "https://images.unsplash.com/photo-1526045478516-99145907023c",
//         "https://images.unsplash.com/photo-1595476108010-2d1a3f5d4a8f",
//         "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908"
//     ],

//     Auto: [
//         "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
//         "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//         "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
//         "https://images.unsplash.com/photo-1486006920555-c77dcf18193c",
//         "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
//         "https://images.unsplash.com/photo-1504222490345-c075b6008014",
//         "https://images.unsplash.com/photo-1493238792000-8113da705763",
//         "https://images.unsplash.com/photo-1551830820-330a71b99659",
//         "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
//         "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
//         "https://images.unsplash.com/photo-1517142089942-ba376ce32a0e",
//         "https://images.unsplash.com/photo-1494905998402-395d579af36f"
//     ],

//     Grocery: [
//         "https://images.unsplash.com/photo-1542838132-92c53300491e",
//         "https://images.unsplash.com/photo-1579113800032-c38bd7635818",
//         "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
//         "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
//         "https://images.unsplash.com/photo-1610832958506-aa5636811d9b",
//         "https://images.unsplash.com/photo-1506617420156-8e4536971650",
//         "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
//         "https://images.unsplash.com/photo-1601598851547-4302969d6f4b",
//         "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
//         "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
//         "https://images.unsplash.com/photo-1543168256-9a9c8a0c9a57",
//         "https://images.unsplash.com/photo-1580915411954-282cb1e6f2a2"
//     ],

//     "Real Estate": [
//         "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//         "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
//         "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
//         "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
//         "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
//         "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
//         "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
//         "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
//         "https://images.unsplash.com/photo-1600566753191-17f0baa2a6c3",
//         "https://images.unsplash.com/photo-1600566753051-7e6f4c5b8c9f",
//         "https://images.unsplash.com/photo-1600566753376-12c8f3a2b9d8"
//     ],

//     Travel: [
//         "https://images.unsplash.com/photo-1500534623283-312aade485b7",
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//         "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
//         "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
//         "https://images.unsplash.com/photo-1521292270410-a8c4d716d518",
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//         "https://images.unsplash.com/photo-1488085061387-422e29b40080",
//         "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
//         "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
//         "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
//         "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
//         "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
//     ],

//     Education: [
//         "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//         "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//         "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
//         "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//         "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//         "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//         "https://images.unsplash.com/photo-1531482615713-2afd69097998",
//         "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
//         "https://images.unsplash.com/photo-1498243691581-b34c7d4b8a8b",
//         "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
//         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//     ]
// };


// /* ============================================================
//    SVG HELPERS
//    ============================================================ */

// const svgData = svg =>
//     `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;


// /* ============================================================
//    SOCIAL ICONS
//    ============================================================ */

// export const SOCIAL_ICONS = {

//     facebook: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <defs>
//                 <linearGradient id="fb" x1="0" y1="0" x2="1" y2="1">
//                     <stop stop-color="#4F8CFF"/>
//                     <stop offset="1" stop-color="#1877F2"/>
//                 </linearGradient>
//             </defs>
//             <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#fb)"/>
//             <rect x="5" y="5" width="90" height="90" rx="20"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="5"/>
//             <path fill="white"
//                   d="M57 86V56h10l2-12H57v-7c0-4 2-6 7-6h6V19c-3-1-7-1-11-1-11 0-18 7-18 18v8H30v12h11v30z"/>
//         </svg>
//     `),

//     instagram: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <defs>
//                 <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
//                     <stop stop-color="#FFD600"/>
//                     <stop offset=".35" stop-color="#FF7A00"/>
//                     <stop offset=".65" stop-color="#E1306C"/>
//                     <stop offset="1" stop-color="#833AB4"/>
//                 </linearGradient>
//             </defs>
//             <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#ig)"/>
//             <rect x="5" y="5" width="90" height="90" rx="20"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="5"/>
//             <rect x="25" y="25" width="50" height="50"
//                   rx="15"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="7"/>
//             <circle cx="50" cy="50" r="12"
//                     fill="none"
//                     stroke="white"
//                     stroke-width="7"/>
//             <circle cx="69" cy="31" r="4.5" fill="white"/>
//         </svg>
//     `),

//     whatsapp: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <defs>
//                 <linearGradient id="wa" x1="0" y1="0" x2="1" y2="1">
//                     <stop stop-color="#5CF38B"/>
//                     <stop offset="1" stop-color="#16A34A"/>
//                 </linearGradient>
//             </defs>
//             <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#wa)"/>
//             <rect x="5" y="5" width="90" height="90" rx="20"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="5"/>
//             <path fill="white"
//                   d="M30 74l4-14a27 27 0 1 1 10 10zm19-18c8 4 11 5 14 1l3-4-7-4-4 3c-2 1-5-1-8-3s-5-5-4-7l2-3-4-6-4 2c-4 2-5 8-1 14 3 5 8 10 13 12z"/>
//         </svg>
//     `),

//     youtube: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <defs>
//                 <linearGradient id="yt" x1="0" y1="0" x2="1" y2="1">
//                     <stop stop-color="#FF4B4B"/>
//                     <stop offset="1" stop-color="#CC0000"/>
//                 </linearGradient>
//             </defs>
//             <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#yt)"/>
//             <rect x="5" y="5" width="90" height="90" rx="20"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="5"/>
//             <path fill="white" d="M40 33l31 17-31 17z"/>
//         </svg>
//     `),

//     linkedin: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <defs>
//                 <linearGradient id="li" x1="0" y1="0" x2="1" y2="1">
//                     <stop stop-color="#38A9FF"/>
//                     <stop offset="1" stop-color="#0A66C2"/>
//                 </linearGradient>
//             </defs>
//             <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#li)"/>
//             <rect x="5" y="5" width="90" height="90" rx="20"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="5"/>
//             <path fill="white"
//                   d="M24 39h14v37H24zm7-20a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm15 20h13v5h.2c2-4 7-7 13-7 14 0 17 9 17 21v18H76V60c0-7 0-15-9-15s-10 7-10 15v16H46z"/>
//         </svg>
//     `),

//     tiktok: svgData(`
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//             <rect x="2" y="2" width="96" height="96" rx="22" fill="#111111"/>
//             <rect x="5" y="5" width="90" height="90" rx="20"
//                   fill="none"
//                   stroke="white"
//                   stroke-width="5"/>
//             <path fill="#25F4EE"
//                   d="M57 21v38a18 18 0 1 1-15-17v10a8 8 0 1 0 5 7V21z"/>
//             <path fill="#FE2C55"
//                   d="M62 18c3 8 8 12 16 13v11c-6 0-12-2-16-6v26a18 18 0 1 1-15-17v10a8 8 0 1 0 5 7V18z"/>
//             <path fill="white"
//                   d="M58 22v37a18 18 0 1 1-15-17v10a8 8 0 1 0 5 7V22z"/>
//         </svg>
//     `)
// };


// /* ============================================================
//    PROMOTION BADGE LIBRARY
//    ============================================================ */

// const promotionSVG = (
//     type,
//     colorA,
//     colorB
// ) => {

//     let body = "";

//     if (type === "circle") {

//         body = `
//             <circle
//                 cx="150"
//                 cy="150"
//                 r="118"
//                 fill="url(#g)"
//                 stroke="white"
//                 stroke-width="6"
//             />
//             <circle
//                 cx="150"
//                 cy="150"
//                 r="92"
//                 fill="none"
//                 stroke="rgba(255,255,255,.65)"
//                 stroke-width="3"
//                 stroke-dasharray="8 8"
//             />
//         `;

//     }

//     if (type === "burst") {

//         body = `
//             <path
//                 d="
//                 M150 8
//                 L174 37
//                 L208 21
//                 L214 57
//                 L251 53
//                 L244 89
//                 L278 104
//                 L253 131
//                 L281 154
//                 L249 175
//                 L264 208
//                 L228 215
//                 L229 251
//                 L194 240
//                 L176 273
//                 L150 246
//                 L124 273
//                 L106 240
//                 L71 251
//                 L72 215
//                 L36 208
//                 L51 175
//                 L19 154
//                 L47 131
//                 L22 104
//                 L56 89
//                 L49 53
//                 L86 57
//                 L92 21
//                 L126 37
//                 Z"
//                 fill="url(#g)"
//                 stroke="white"
//                 stroke-width="6"
//             />
//         `;

//     }

//     if (type === "capsule") {

//         body = `
//             <rect
//                 x="20"
//                 y="70"
//                 width="260"
//                 height="160"
//                 rx="80"
//                 fill="url(#g)"
//                 stroke="white"
//                 stroke-width="6"
//             />
//             <rect
//                 x="42"
//                 y="92"
//                 width="216"
//                 height="116"
//                 rx="58"
//                 fill="none"
//                 stroke="rgba(255,255,255,.6)"
//                 stroke-width="3"
//             />
//         `;

//     }

//     if (type === "ticket") {

//         body = `
//             <path
//                 d="
//                 M30 48
//                 H270
//                 V102
//                 C250 102 250 132 270 132
//                 V252
//                 H30
//                 V132
//                 C50 132 50 102 30 102
//                 Z"
//                 fill="url(#g)"
//                 stroke="white"
//                 stroke-width="6"
//             />
//         `;

//     }

//     if (type === "hex") {

//         body = `
//             <path
//                 d="
//                 M150 16
//                 L264 82
//                 L264 218
//                 L150 284
//                 L36 218
//                 L36 82
//                 Z"
//                 fill="url(#g)"
//                 stroke="white"
//                 stroke-width="6"
//             />
//             <path
//                 d="
//                 M150 39
//                 L242 92
//                 L242 208
//                 L150 261
//                 L58 208
//                 L58 92
//                 Z"
//                 fill="none"
//                 stroke="rgba(255,255,255,.55)"
//                 stroke-width="3"
//             />
//         `;

//     }

//     if (type === "arrow") {

//         body = `
//             <path
//                 d="
//                 M25 60
//                 H210
//                 L278 150
//                 L210 240
//                 H25
//                 L85 150
//                 Z"
//                 fill="url(#g)"
//                 stroke="white"
//                 stroke-width="6"
//             />
//         `;

//     }

//     return svgData(`
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="300"
//             height="300"
//             viewBox="0 0 300 300"
//         >
//             <defs>
//                 <linearGradient
//                     id="g"
//                     x1="0"
//                     y1="0"
//                     x2="1"
//                     y2="1"
//                 >
//                     <stop
//                         offset="0"
//                         stop-color="${colorA}"
//                     />
//                     <stop
//                         offset="1"
//                         stop-color="${colorB}"
//                     />
//                 </linearGradient>
//             </defs>

//             ${body}
//         </svg>
//     `);
// };


// export const DISCOUNT_TAG_LIBRARY = [

//     {
//         id: "circle-cyan",
//         name: "Electric Circle",
//         shape: "circle",
//         src: promotionSVG(
//             "circle",
//             "#00D9FF",
//             "#2563EB"
//         )
//     },

//     {
//         id: "circle-pink",
//         name: "Pink Circle",
//         shape: "circle",
//         src: promotionSVG(
//             "circle",
//             "#FF3CAC",
//             "#7C3AED"
//         )
//     },

//     {
//         id: "burst-orange",
//         name: "Orange Burst",
//         shape: "burst",
//         src: promotionSVG(
//             "burst",
//             "#FB923C",
//             "#EF4444"
//         )
//     },

//     {
//         id: "burst-green",
//         name: "Green Burst",
//         shape: "burst",
//         src: promotionSVG(
//             "burst",
//             "#A3E635",
//             "#16A34A"
//         )
//     },

//     {
//         id: "capsule-violet",
//         name: "Violet Capsule",
//         shape: "capsule",
//         src: promotionSVG(
//             "capsule",
//             "#8B5CF6",
//             "#EC4899"
//         )
//     },

//     {
//         id: "ticket-gold",
//         name: "Gold Ticket",
//         shape: "ticket",
//         src: promotionSVG(
//             "ticket",
//             "#F59E0B",
//             "#EF4444"
//         )
//     },

//     {
//         id: "hex-blue",
//         name: "Blue Hex",
//         shape: "hex",
//         src: promotionSVG(
//             "hex",
//             "#06B6D4",
//             "#2563EB"
//         )
//     },

//     {
//         id: "arrow-pink",
//         name: "Pink Arrow",
//         shape: "arrow",
//         src: promotionSVG(
//             "arrow",
//             "#F43F5E",
//             "#EC4899"
//         )
//     }
// ];


// /* ============================================================
//    LOGO
//    ============================================================ */

// const logoSVG = (
//     business,
//     name,
//     accent,
//     secondary
// ) => {

//     const initials = name
//         .split(/\s+/)
//         .map(word => word[0])
//         .join("")
//         .slice(0, 3)
//         .toUpperCase();

//     return svgData(`
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="360"
//             height="360"
//             viewBox="0 0 300 300"
//         >
//             <defs>

//                 <linearGradient
//                     id="logo"
//                     x1="0"
//                     y1="0"
//                     x2="1"
//                     y2="1"
//                 >
//                     <stop
//                         stop-color="${accent}"
//                     />
//                     <stop
//                         offset="1"
//                         stop-color="${secondary}"
//                     />
//                 </linearGradient>

//             </defs>

//             <rect
//                 x="12"
//                 y="12"
//                 width="276"
//                 height="276"
//                 rx="70"
//                 fill="#071426"
//                 stroke="url(#logo)"
//                 stroke-width="7"
//             />

//             <circle
//                 cx="150"
//                 cy="140"
//                 r="82"
//                 fill="rgba(255,255,255,.04)"
//                 stroke="rgba(255,255,255,.18)"
//                 stroke-width="3"
//             />

//             <circle
//                 cx="150"
//                 cy="140"
//                 r="47"
//                 fill="none"
//                 stroke="${accent}"
//                 stroke-width="8"
//             />

//             <path
//                 d="M116 140h68"
//                 stroke="${secondary}"
//                 stroke-width="8"
//                 stroke-linecap="round"
//             />

//             <path
//                 d="M150 106v68"
//                 stroke="${accent}"
//                 stroke-width="8"
//                 stroke-linecap="round"
//             />

//             <text
//                 x="150"
//                 y="264"
//                 text-anchor="middle"
//                 fill="white"
//                 font-family="Poppins,Arial,sans-serif"
//                 font-size="25"
//                 font-weight="900"
//                 letter-spacing="4"
//             >
//                 ${initials}
//             </text>
//         </svg>
//     `);
// };


// /* ============================================================
//    BASIC OBJECT HELPERS
//    ============================================================ */

// const textItem = ({
//     id,
//     role,
//     text,
//     x,
//     y,
//     width,
//     fontScale,
//     fill,
//     fontFamily = "Poppins",
//     fontStyle = "normal",
//     align = "left",
//     letterSpacing = 0,
//     underline = false,
//     rotation = 0
// }) => ({

//     id,
//     role,

//     type:
//         [
//             "phone",
//             "email",
//             "address",
//             "website"
//         ].includes(role)
//             ? "contact"
//             : role === "offer"
//                 ? "text"
//                 : "business",

//     text,

//     nx: x,
//     ny: y,
//     nw: width,

//     fontScale,

//     fill,

//     fontFamily,
//     fontStyle,
//     align,

//     underline,

//     letterSpacing,

//     rotation

// });


// const imageItem = ({
//     type = "image",
//     src,
//     x,
//     y,
//     width,
//     height,
//     rotation = 0,
//     social = null,
//     linkedTextId = null,
//     iconType = null
// }) => ({

//     type,

//     src,

//     nx: x,
//     ny: y,

//     nw: width,
//     nh: height,

//     rotation,

//     social,

//     linkedTextId,
//     iconType,

//     replaceable:
//         type === "photo" ||
//         type === "logo" ||
//         type === "promotion",

//     draggable: true,
//     resizable: true
// });


// /* ============================================================
//    REAL BORDER
//    ============================================================ */

// const createRealBorder = (
//     accent,
//     secondary,
//     variant = 0
// ) => {

//     const colors = [
//         accent,
//         secondary,
//         "#FFFFFF",
//         accent
//     ];

//     const styles = [
//         "solid",
//         "double",
//         "dashed",
//         "dotted"
//     ];

//     return {
//         id:
//             `real-border-${variant}`,

//         type:
//             "border",

//         role:
//             "border",

//         nx:
//             0.012,

//         ny:
//             0.012,

//         nw:
//             0.976,

//         nh:
//             0.976,

//         stroke:
//             colors[variant % colors.length],

//         color:
//             colors[variant % colors.length],

//         strokeWidth:
//             variant % 4 === 1
//                 ? 3
//                 : 5,

//         style:
//             styles[variant % styles.length],

//         cornerRadius:
//             12,

//         editable:
//             true,

//         draggable:
//             true,

//         resizable:
//             true,

//         locked:
//             false
//     };
// };


// /* ============================================================
//    CONTACT ICON SVG
//    ============================================================ */

// const contactIconSVG = (
//     type,
//     color
// ) => {

//     let path = "";

//     if (type === "phone") {

//         path = `
//             <path
//                 d="
//                 M42 22
//                 C31 27 26 39 31 51
//                 C39 70 55 82 74 86
//                 C86 89 97 81 99 70
//                 L79 61
//                 L68 72
//                                 C60 69 48 57 45 49
//                 L56 38
//                 Z"
//                 fill="white"
//             />
//         `;

//     }

//     if (type === "email") {

//         path = `
//             <rect
//                 x="20"
//                 y="29"
//                 width="60"
//                 height="42"
//                 rx="7"
//                 fill="none"
//                 stroke="white"
//                 stroke-width="8"
//             />
//             <path
//                 d="M22 35l28 22 28-22"
//                 fill="none"
//                 stroke="white"
//                 stroke-width="8"
//             />
//         `;

//     }

//     if (type === "address") {

//         path = `
//             <path
//                 d="
//                 M50 91
//                 C50 91 23 62 23 43
//                 A27 27 0 1 1 77 43
//                 C77 62 50 91 50 91
//                 Z"
//                 fill="white"
//             />
//             <circle
//                 cx="50"
//                 cy="43"
//                 r="9"
//                 fill="${color}"
//             />
//         `;

//     }

//     if (type === "website") {

//         path = `
//             <circle
//                 cx="50"
//                 cy="50"
//                 r="31"
//                 fill="none"
//                 stroke="white"
//                 stroke-width="7"
//             />
//             <path
//                 d="M19 50h62M50 19c12 12 12 50 0 62M50 19c-12 12-12 50 0 62"
//                 fill="none"
//                 stroke="white"
//                 stroke-width="6"
//             />
//         `;

//     }

//     return svgData(`
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="100"
//             height="100"
//             viewBox="0 0 100 100"
//         >
//             <rect
//                 width="100"
//                 height="100"
//                 rx="24"
//                 fill="${color}"
//             />
//             ${path}
//         </svg>
//     `);
// };


// /* ============================================================
//    CONTACT SYSTEM
//    ============================================================ */

// const addContacts = ({
//     images,
//     texts,
//     data,
//     accent,
//     textColor,
//     fontFamily,
//     x,
//     y,
//     width,
//     compact = false
// }) => {

//     const rows = [

//         {
//             id: 4,
//             role: "phone",
//             value: data.phone,
//             icon: "phone"
//         },

//         {
//             id: 5,
//             role: "email",
//             value: data.email,
//             icon: "email"
//         },

//         {
//             id: 6,
//             role: "address",
//             value: data.address,
//             icon: "address"
//         },

//         {
//             id: 7,
//             role: "website",
//             value: data.website,
//             icon: "website"
//         }

//     ];

//     const gap =
//         compact
//             ? 0.045
//             : 0.039;

//     rows.forEach((row, index) => {

//         const rowY =
//             y +
//             index * gap;

//         const iconSize =
//             compact
//                 ? 0.043
//                 : 0.035;

//         /*
//          * REAL CONTACT ICON
//          */

//         images.push({

//             ...imageItem({

//                 type:
//                     "contactIcon",

//                 src:
//                     contactIconSVG(
//                         row.icon,
//                         accent
//                     ),

//                 x,

//                 y:
//                     rowY -
//                     iconSize * 0.12,

//                 width:
//                     iconSize,

//                 height:
//                     iconSize,

//                 linkedTextId:
//                     row.id,

//                 iconType:
//                     row.icon

//             }),

//             id:
//                 `contact-icon-${row.role}-${index}`,

//             linkedTextRole:
//                 row.role,

//             editable:
//                 true,

//             draggable:
//                 true,

//             resizable:
//                 true
//         });

//         /*
//          * REAL CONTACT TEXT
//          */

//         texts.push(
//             textItem({

//                 id:
//                     row.id,

//                 role:
//                     row.role,

//                 type:
//                     "contact",

//                 text:
//                     row.value || "",

//                 x:
//                     x +
//                     iconSize +
//                     0.012,

//                 y:
//                     rowY,

//                 width:
//                     Math.max(
//                         0.05,
//                         width -
//                         iconSize -
//                         0.012
//                     ),

//                 fontScale:
//                     compact
//                         ? 0.032
//                         : 0.025,

//                 fill:
//                     textColor,

//                 fontFamily,

//                 fontStyle:
//                     row.role === "website"
//                         ? "normal"
//                         : "bold",

//                 align:
//                     "left"
//             })
//         );

//     });

// };


// /* ============================================================
//    SOCIAL ROW
//    ============================================================ */

// const addSocialRow = ({
//     images,
//     x,
//     y,
//     size = 0.035,
//     gap = 0.008
// }) => {

//     const keys = [
//         "facebook",
//         "whatsapp",
//         "youtube",
//         "linkedin",
//         "instagram",
//         "tiktok"
//     ];

//     keys.forEach(
//         (key, index) => {

//             images.push(

//                 imageItem({

//                     type: "social",

//                     social: key,

//                     src:
//                         SOCIAL_ICONS[key],

//                     x:
//                         x +
//                         index *
//                         (
//                             size +
//                             gap
//                         ),

//                     y,

//                     width: size,
//                     height: size

//                 })

//             );

//         }
//     );

// };


// /* ============================================================
//    LOGO
//    ============================================================ */

// const addLogo = ({
//     images,
//     business,
//     data,
//     palette,
//     x,
//     y,
//     size
// }) => {

//     images.push(

//         imageItem({

//             type: "logo",

//             src:
//                 logoSVG(
//                     business,
//                     data.name,
//                     palette[0],
//                     palette[1]
//                 ),

//             x,
//             y,

//             width: size,
//             height: size

//         })

//     );

// };


// /* ============================================================
//    PROMOTION
//    ============================================================ */

// const addPromotion = ({
//     images,
//     texts,
//     data,
//     palette,
//     variant,
//     x,
//     y,
//     size,
//     fontFamily = "Poppins"
// }) => {

//     const tag =
//         DISCOUNT_TAG_LIBRARY[
//         variant %
//         DISCOUNT_TAG_LIBRARY.length
//         ];


//     const offerId =
//         `offer-${variant}-${x}-${y}`;


//     images.push({

//         ...imageItem({

//             type: "promotion",

//             src:
//                 tag.src,

//             x,
//             y,

//             width: size,
//             height: size

//         }),

//         assetType: "promotion",

//         role: "promotion",

//         promotionId:
//             tag.id,

//         promotionShape:
//             tag.shape,

//         offerTextId:
//             offerId,

//         doubleClickAction:
//             "discountTagLibrary",

//         library:
//             "DISCOUNT_TAG_LIBRARY"

//     });


//     texts.push(

//         textItem({

//             id: offerId,

//             role: "offer",

//             text:
//                 data.offer,

//             x:
//                 x +
//                 size *
//                 0.13,

//             y:
//                 y +
//                 size *
//                 0.38,

//             width:
//                 size *
//                 0.74,

//             fontScale:
//                 0.040,

//             fill:
//                 "#FFFFFF",

//             fontFamily,

//             fontStyle:
//                 "bold",

//             align:
//                 "center"

//         })

//     );

// };


// /* ============================================================
//    PHOTO ACCENT
//    ============================================================ */

// const addPhoto = ({
//     images,
//     src,
//     x,
//     y,
//     width,
//     height,
//     rotation = 0
// }) => {

//     // Never create an image layer without a valid source.
//     // This is especially important for the gradient-only Other category.
//     if (!src) return;

//     images.push(

//         imageItem({

//             type: "photo",

//             src,

//             x,
//             y,

//             width,
//             height,

//             rotation

//         })

//     );

// };


// /* ============================================================
//    DESIGN MODELS
//    ============================================================

//    These are intentionally very different.

//    01 — Split Editorial
//    02 — Hero Right
//    03 — Hero Left
//    04 — Center Product
//    05 — Diagonal Magazine
//    06 — Bottom Hero
//    07 — Vertical Story
//    08 — Collage
//    09 — Luxury Frame
//    10 — Typographic Poster
//    11 — Dynamic Promo
//    12 — Asymmetric Card
//    ============================================================ */

// const DESIGN_NAMES = [

//     "Split Editorial",

//     "Hero Right",

//     "Hero Left",

//     "Center Product",

//     "Diagonal Magazine",

//     "Bottom Hero",

//     "Vertical Story",

//     "Creative Collage",

//     "Luxury Frame",

//     "Typographic Poster",

//     "Dynamic Promo",

//     "Asymmetric Card"

// ];


// /* ============================================================
//    FONT SYSTEM
//    ============================================================ */

// const FONT_FAMILIES = [

//     "Poppins",

//     "Montserrat",

//     "Playfair Display",

//     "DM Sans",

//     "Oswald",

//     "Raleway",

//     "Bebas Neue",

//     "Nunito",

//     "Lora",

//     "Inter",

//     "Roboto",

//     "Libre Baskerville"

// ];


// /* ============================================================
//    RESPONSIVE SIZE PREPARATION
//    ============================================================ */

// const clone = value =>
//     JSON.parse(
//         JSON.stringify(value)
//     );


// export const prepareTemplateForSize = (
//     template,
//     selectedSize
// ) => {

//     const output =
//         clone(template);


//     const isCard =
//         selectedSize ===
//         "visitingCard" ||
//         selectedSize ===
//         "businessCard";

//     const isBookmark =
//         selectedSize ===
//         "bookmark";

//     const isStory =
//         selectedSize ===
//         "instagramStory";


//     output.selectedSize =
//         selectedSize;


//     /*
//      * Small horizontal cards need slightly
//      * stronger typography and compact contacts.
//      */

//     if (isCard) {

//         output.texts =
//             output.texts.map(
//                 text => {

//                     if (
//                         text.role ===
//                         "businessName"
//                     ) {

//                         return {
//                             ...text,
//                             fontScale:
//                                 Math.max(
//                                     text.fontScale,
//                                     0.115
//                                 )
//                         };

//                     }

//                     if (
//                         text.type ===
//                         "contact"
//                     ) {

//                         return {
//                             ...text,
//                             fontScale:
//                                 Math.max(
//                                     text.fontScale,
//                                     0.040
//                                 )
//                         };

//                     }

//                     return text;

//                 }
//             );

//     }


//     if (isBookmark) {

//         output.texts =
//             output.texts.map(
//                 text => {

//                     if (
//                         text.role ===
//                         "businessName"
//                     ) {

//                         return {
//                             ...text,
//                             fontScale:
//                                 Math.max(
//                                     text.fontScale,
//                                     0.095
//                                 )
//                         };

//                     }

//                     return text;

//                 }
//             );

//     }


//     if (isStory) {

//         output.texts =
//             output.texts.map(
//                 text => {

//                     if (
//                         text.role ===
//                         "businessName"
//                     ) {

//                         return {
//                             ...text,
//                             fontScale:
//                                 Math.max(
//                                     text.fontScale,
//                                     0.105
//                                 )
//                         };

//                     }

//                     return text;

//                 }
//             );

//     }


//     return output;

// };


// /* ============================================================
//    BASE TEXT BUILDER
//    ============================================================ */

// const addMainText = ({
//     texts,
//     data,
//     variant,
//     palette,
//     titleX,
//     titleY,
//     titleWidth,
//     align = "left",
//     fontFamily
// }) => {

//     const titleColors = [
//         "#FFFFFF",
//         "#FFF7ED",
//         palette[2],
//         "#FFFFFF",
//         "#111827"
//     ];

//     const titleColor =
//         titleColors[
//         variant %
//         titleColors.length
//         ];


//     texts.push(

//         textItem({

//             id: 1,

//             role: "businessName",

//             text:
//                 data.name,

//             x:
//                 titleX,

//             y:
//                 titleY,

//             width:
//                 titleWidth,

//             fontScale:
//                 0.115,

//             fill:
//                 titleColor,

//             fontFamily,

//             fontStyle:
//                 variant % 3 === 0
//                     ? "bold"
//                     : "normal",

//             align,

//             letterSpacing:
//                 variant % 4 === 0
//                     ? 1.5
//                     : 0

//         })

//     );


//     texts.push(

//         textItem({

//             id: 2,

//             role: "tagline",

//             text:
//                 data.tagline,

//             x:
//                 titleX,

//             y:
//                 titleY +
//                 0.145,

//             width:
//                 titleWidth,

//             fontScale:
//                 0.047,

//             fill:
//                 variant % 2 === 0
//                     ? "#FFFFFF"
//                     : palette[2],

//             fontFamily,

//             fontStyle:
//                 "bold",

//             align

//         })

//     );


//     texts.push(

//         textItem({

//             id: 3,

//             role: "description",

//             text:
//                 data.description,

//             x:
//                 titleX,

//             y:
//                 titleY +
//                 0.205,

//             width:
//                 titleWidth,

//             fontScale:
//                 0.029,

//             fill:
//                 "rgba(255,255,255,.92)",

//             fontFamily:
//                 "DM Sans",

//             fontStyle:
//                 "normal",

//             align

//         })

//     );

// };


// /* ============================================================
//    TEMPLATE BUILDER
//    ============================================================ */

// const buildTemplate = (
//     business,
//     variant,
//     id
// ) => {

//     const data =
//         BUSINESS_DATA[business];

//     const palette =
//         PALETTES[business];

//     const photos =
//         PHOTOS[business] || [];

//     const fontFamily =
//         FONT_FAMILIES[
//         variant %
//         FONT_FAMILIES.length
//         ];


//     const accent =
//         palette[
//         variant %
//         palette.length
//         ];

//     const secondary =
//         palette[
//         (variant + 1) %
//         palette.length
//         ];


//     const background =
//         business === "Other"

//             ? {

//                 type: "gradient",

//                 src: "",

//                 value:
//                     [
//                         `linear-gradient(135deg, ${palette[0]} 0%, ${palette[1]} 52%, ${palette[2]} 100%)`,

//                         `linear-gradient(120deg, ${palette[3]} 0%, ${palette[0]} 42%, ${palette[2]} 100%)`,

//                         `linear-gradient(45deg, ${palette[1]} 0%, ${palette[3]} 48%, ${palette[0]} 100%)`

//                     ][
//                     variant %
//                     3
//                     ]

//             }

//             : {

//                 type: "image",

//                 src:
//                     photos[
//                     variant %
//                     photos.length
//                     ],

//                 value:
//                     accent,

//                 x: 0,
//                 y: 0,

//                 width: 1,
//                 height: 1,

//                 rotation: 0

//             };


//     const images = [];
//     const texts = [];
//     const blocks = [];


//     /* ========================================================
//        DESIGN 01 — SPLIT EDITORIAL
//        ======================================================== */

//     if (variant === 0) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.105
//         });


//         addMainText({
//             texts,
//             data,
//             variant,
//             palette,
//             titleX: 0.055,
//             titleY: 0.205,
//             titleWidth: 0.43,
//             fontFamily
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.535,
//             y: 0.105,
//             width: 0.40,
//             height: 0.43,
//             rotation: 2
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.57,
//             y: 0.545,
//             width: 0.19,
//             height: 0.18,
//             rotation: -3
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[3 % photos.length],
//             x: 0.785,
//             y: 0.575,
//             width: 0.14,
//             height: 0.14,
//             rotation: 4
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.06,
//             y: 0.575,
//             size: 0.18,
//             fontFamily
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.745,
//             nw: 0.93,
//             nh: 0.215,
//             fill: "rgba(5,15,30,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.055,
//             y: 0.775,
//             width: 0.61
//         });


//         addSocialRow({
//             images,
//             x: 0.705,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 02 — HERO RIGHT
//        ======================================================== */

//     if (variant === 1) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.78,
//             y: 0.055,
//             size: 0.12
//         });


//         addMainText({
//             texts,
//             data,
//             variant,
//             palette,
//             titleX: 0.07,
//             titleY: 0.12,
//             titleWidth: 0.53,
//             fontFamily
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.51,
//             y: 0.29,
//             width: 0.40,
//             height: 0.40,
//             rotation: 0
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.39,
//             y: 0.48,
//             width: 0.16,
//             height: 0.16,
//             rotation: -6
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.07,
//             y: 0.47,
//             size: 0.19,
//             fontFamily
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.735,
//             nw: 0.93,
//             nh: 0.225,
//             fill: "rgba(10,18,35,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Montserrat",
//             x: 0.055,
//             y: 0.765,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.87,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 03 — HERO LEFT
//        ======================================================== */

//     if (variant === 2) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.11
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.055,
//             y: 0.235,
//             width: 0.43,
//             height: 0.45,
//             rotation: -2
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.44,
//             y: 0.18,
//             width: 0.14,
//             height: 0.14,
//             rotation: 6
//         });


//         addMainText({
//             texts,
//             data,
//             variant,
//             palette,
//             titleX: 0.53,
//             titleY: 0.20,
//             titleWidth: 0.40,
//             align: "right",
//             fontFamily
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.68,
//             y: 0.505,
//             size: 0.17,
//             fontFamily
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.735,
//             nw: 0.93,
//             nh: 0.225,
//             fill: "rgba(9,17,31,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "DM Sans",
//             x: 0.055,
//             y: 0.765,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.87,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 04 — CENTER PRODUCT
//        ======================================================== */

//     if (variant === 3) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.10
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.14,
//                 y: 0.065,
//                 width: 0.72,
//                 fontScale: 0.105,
//                 fill: "#FFFFFF",
//                 fontFamily,
//                 fontStyle: "bold",
//                 align: "center"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.12,
//                 y: 0.20,
//                 width: 0.76,
//                 fontScale: 0.043,
//                 fill: palette[2],
//                 fontFamily,
//                 fontStyle: "bold",
//                 align: "center"
//             })
//         );


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.22,
//             y: 0.28,
//             width: 0.56,
//             height: 0.40,
//             rotation: 0
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.08,
//             y: 0.40,
//             width: 0.14,
//             height: 0.14,
//             rotation: -8
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[3 % photos.length],
//             x: 0.79,
//             y: 0.42,
//             width: 0.12,
//             height: 0.12,
//             rotation: 7
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.69,
//             y: 0.69,
//             size: 0.18,
//             fontFamily
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.745,
//             nw: 0.93,
//             nh: 0.215,
//             fill: "rgba(10,18,34,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.055,
//             y: 0.775,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 05 — DIAGONAL MAGAZINE
//        ======================================================== */

//     if (variant === 4) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.06,
//             y: 0.055,
//             size: 0.09
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.055,
//                 y: 0.17,
//                 width: 0.60,
//                 fontScale: 0.125,
//                 fill: "#FFFFFF",
//                 fontFamily: "Oswald",
//                 fontStyle: "bold",
//                 letterSpacing: 1
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.06,
//                 y: 0.335,
//                 width: 0.52,
//                 fontScale: 0.045,
//                 fill: palette[2],
//                 fontFamily: "Montserrat",
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 3,
//                 role: "description",
//                 text: data.description,
//                 x: 0.06,
//                 y: 0.41,
//                 width: 0.48,
//                 fontScale: 0.027,
//                 fill: "#FFFFFF",
//                 fontFamily: "DM Sans"
//             })
//         );


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.51,
//             y: 0.06,
//             width: 0.42,
//             height: 0.52,
//             rotation: 7
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.69,
//             y: 0.50,
//             width: 0.18,
//             height: 0.18,
//             rotation: -8
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.46,
//             y: 0.59,
//             size: 0.18,
//             fontFamily: "Montserrat"
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.75,
//             nw: 0.93,
//             nh: 0.21,
//             fill: "rgba(10,18,35,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "DM Sans",
//             x: 0.055,
//             y: 0.775,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 06 — BOTTOM HERO
//        ======================================================== */

//     if (variant === 5) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.095
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.055,
//                 y: 0.16,
//                 width: 0.85,
//                 fontScale: 0.13,
//                 fill: "#FFFFFF",
//                 fontFamily: "Bebas Neue",
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.06,
//                 y: 0.31,
//                 width: 0.76,
//                 fontScale: 0.048,
//                 fill: "#FFFFFF",
//                 fontFamily: "Montserrat",
//                 fontStyle: "bold"
//             })
//         );


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.75,
//             y: 0.14,
//             size: 0.16,
//             fontFamily: "Montserrat"
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.08,
//             y: 0.42,
//             width: 0.84,
//             height: 0.34,
//             rotation: 0
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.07,
//             y: 0.59,
//             width: 0.14,
//             height: 0.13,
//             rotation: -6
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.765,
//             nw: 0.93,
//             nh: 0.195,
//             fill: "rgba(5,16,32,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.055,
//             y: 0.795,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.885,
//             size: 0.032
//         });

//     }


//     /* ========================================================
//        DESIGN 07 — VERTICAL STORY
//        ======================================================== */

//     if (variant === 6) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.07,
//             y: 0.055,
//             size: 0.10
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.56,
//             y: 0.06,
//             width: 0.35,
//             height: 0.57,
//             rotation: 0
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.48,
//             y: 0.51,
//             width: 0.15,
//             height: 0.15,
//             rotation: -7
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.07,
//                 y: 0.21,
//                 width: 0.43,
//                 fontScale: 0.125,
//                 fill: "#FFFFFF",
//                 fontFamily: "Raleway",
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.07,
//                 y: 0.39,
//                 width: 0.41,
//                 fontScale: 0.044,
//                 fill: palette[2],
//                 fontFamily,
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 3,
//                 role: "description",
//                 text: data.description,
//                 x: 0.07,
//                 y: 0.48,
//                 width: 0.38,
//                 fontScale: 0.027,
//                 fill: "#FFFFFF",
//                 fontFamily: "DM Sans"
//             })
//         );


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.30,
//             y: 0.62,
//             size: 0.16,
//             fontFamily
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.745,
//             nw: 0.93,
//             nh: 0.215,
//             fill: "rgba(7,18,35,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.055,
//             y: 0.775,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 08 — CREATIVE COLLAGE
//        ======================================================== */

//     if (variant === 7) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.09
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.07,
//             y: 0.18,
//             width: 0.46,
//             height: 0.33,
//             rotation: -4
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.51,
//             y: 0.13,
//             width: 0.36,
//             height: 0.25,
//             rotation: 5
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[3 % photos.length],
//             x: 0.46,
//             y: 0.43,
//             width: 0.27,
//             height: 0.20,
//             rotation: -5
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.07,
//                 y: 0.535,
//                 width: 0.75,
//                 fontScale: 0.11,
//                 fill: "#FFFFFF",
//                 fontFamily: "Playfair Display",
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.075,
//                 y: 0.68,
//                 width: 0.60,
//                 fontScale: 0.043,
//                 fill: palette[2],
//                 fontFamily: "Montserrat",
//                 fontStyle: "bold"
//             })
//         );


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.74,
//             y: 0.53,
//             size: 0.17,
//             fontFamily: "Montserrat"
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.75,
//             nw: 0.93,
//             nh: 0.21,
//             fill: "rgba(5,15,30,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "DM Sans",
//             x: 0.055,
//             y: 0.78,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }
//     /* ========================================================
//    DESIGN 09 — LUXURY FRAME
//    ======================================================== */

//     if (variant === 8) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.075,
//             y: 0.075,
//             size: 0.09
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.15,
//                 y: 0.10,
//                 width: 0.70,
//                 fontScale: 0.105,
//                 fill: "#FFFFFF",
//                 fontFamily: "Libre Baskerville",
//                 fontStyle: "bold",
//                 align: "center"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.18,
//                 y: 0.235,
//                 width: 0.64,
//                 fontScale: 0.038,
//                 fill: palette[2],
//                 fontFamily: "Raleway",
//                 fontStyle: "bold",
//                 align: "center",
//                 letterSpacing: 1
//             })
//         );


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.18,
//             y: 0.32,
//             width: 0.64,
//             height: 0.35,
//             rotation: 0
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.70,
//             y: 0.53,
//             width: 0.15,
//             height: 0.13,
//             rotation: 4
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.075,
//             y: 0.53,
//             size: 0.15,
//             fontFamily: "Libre Baskerville"
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.04,
//             ny: 0.75,
//             nw: 0.92,
//             nh: 0.21,
//             fill: "rgba(4,12,24,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent: "#FFD166",
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.06,
//             y: 0.78,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.034
//         });

//     }


//     /* ========================================================
//        DESIGN 10 — TYPOGRAPHIC POSTER
//        ======================================================== */

//     if (variant === 9) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.09
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name.toUpperCase(),
//                 x: 0.055,
//                 y: 0.17,
//                 width: 0.88,
//                 fontScale: 0.14,
//                 fill: "#FFFFFF",
//                 fontFamily: "Bebas Neue",
//                 fontStyle: "bold",
//                 letterSpacing: 2
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline.toUpperCase(),
//                 x: 0.06,
//                 y: 0.33,
//                 width: 0.62,
//                 fontScale: 0.047,
//                 fill: palette[2],
//                 fontFamily: "Oswald",
//                 fontStyle: "bold",
//                 letterSpacing: 1
//             })
//         );


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.55,
//             y: 0.36,
//             width: 0.36,
//             height: 0.31,
//             rotation: 0
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.42,
//             y: 0.57,
//             width: 0.13,
//             height: 0.12,
//             rotation: -5
//         });


//         texts.push(
//             textItem({
//                 id: 3,
//                 role: "description",
//                 text: data.description,
//                 x: 0.06,
//                 y: 0.45,
//                 width: 0.40,
//                 fontScale: 0.029,
//                 fill: "#FFFFFF",
//                 fontFamily: "DM Sans"
//             })
//         );


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.10,
//             y: 0.60,
//             size: 0.17,
//             fontFamily: "Oswald"
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.75,
//             nw: 0.93,
//             nh: 0.21,
//             fill: "rgba(8,17,31,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "DM Sans",
//             x: 0.055,
//             y: 0.78,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 11 — DYNAMIC PROMO
//        ======================================================== */

//     if (variant === 10) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.055,
//             y: 0.055,
//             size: 0.085
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.055,
//                 y: 0.16,
//                 width: 0.50,
//                 fontScale: 0.115,
//                 fill: "#FFFFFF",
//                 fontFamily: "Montserrat",
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.06,
//                 y: 0.31,
//                 width: 0.48,
//                 fontScale: 0.045,
//                 fill: palette[2],
//                 fontFamily: "Poppins",
//                 fontStyle: "bold"
//             })
//         );


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.52,
//             y: 0.08,
//             width: 0.39,
//             height: 0.42,
//             rotation: 3
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.50,
//             y: 0.51,
//             width: 0.18,
//             height: 0.16,
//             rotation: -4
//         });


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.70,
//             y: 0.54,
//             size: 0.20,
//             fontFamily: "Montserrat"
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.745,
//             nw: 0.93,
//             nh: 0.215,
//             fill: "rgba(6,16,31,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.055,
//             y: 0.775,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        DESIGN 12 — ASYMMETRIC CARD
//        ======================================================== */

//     if (variant === 11) {

//         addLogo({
//             images,
//             business,
//             data,
//             palette,
//             x: 0.72,
//             y: 0.065,
//             size: 0.10
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[1 % photos.length],
//             x: 0.055,
//             y: 0.08,
//             width: 0.39,
//             height: 0.40,
//             rotation: -3
//         });


//         addPhoto({
//             images,
//             src:
//                 photos[2 % photos.length],
//             x: 0.47,
//             y: 0.11,
//             width: 0.18,
//             height: 0.16,
//             rotation: 5
//         });


//         texts.push(
//             textItem({
//                 id: 1,
//                 role: "businessName",
//                 text: data.name,
//                 x: 0.055,
//                 y: 0.525,
//                 width: 0.85,
//                 fontScale: 0.12,
//                 fill: "#FFFFFF",
//                 fontFamily: "Lora",
//                 fontStyle: "bold"
//             })
//         );


//         texts.push(
//             textItem({
//                 id: 2,
//                 role: "tagline",
//                 text: data.tagline,
//                 x: 0.06,
//                 y: 0.675,
//                 width: 0.63,
//                 fontScale: 0.044,
//                 fill: palette[2],
//                 fontFamily: "Raleway",
//                 fontStyle: "bold"
//             })
//         );


//         addPromotion({
//             images,
//             texts,
//             data,
//             palette,
//             variant,
//             x: 0.75,
//             y: 0.52,
//             size: 0.16,
//             fontFamily: "Lora"
//         });


//         blocks.push({
//             shape: "rectangle",
//             nx: 0.035,
//             ny: 0.75,
//             nw: 0.93,
//             nh: 0.21,
//             fill: "rgba(6,15,30,0.50)",
//             rotation: 0
//         });


//         addContacts({
//             images,
//             texts,
//             data,
//             accent,
//             textColor: "#FFFFFF",
//             fontFamily: "Poppins",
//             x: 0.055,
//             y: 0.78,
//             width: 0.60
//         });


//         addSocialRow({
//             images,
//             x: 0.70,
//             y: 0.875,
//             size: 0.035
//         });

//     }


//     /* ========================================================
//        REAL BORDER
//        ======================================================== */

//     const borders = [

//         createRealBorder(
//             accent,
//             secondary,
//             variant
//         )

//     ];


//     /* ========================================================
//        OTHER CATEGORY — GRADIENT DECORATION
//        ======================================================== */

//     if (business === "Other") {

//         blocks.push({

//             shape: "circle",

//             nx:
//                 variant % 2 === 0
//                     ? 0.72
//                     : 0.05,

//             ny:
//                 variant % 2 === 0
//                     ? 0.08
//                     : 0.58,

//             nw: 0.22,
//             nh: 0.22,

//             fill:
//                 "rgba(255,255,255,0.16)",

//             rotation: 0

//         });


//         blocks.push({

//             shape: "circle",

//             nx:
//                 variant % 3 === 0
//                     ? 0.08
//                     : 0.68,

//             ny:
//                 variant % 3 === 0
//                     ? 0.50
//                     : 0.62,

//             nw: 0.12,
//             nh: 0.12,

//             fill:
//                 "rgba(255,255,255,0.10)",

//             rotation: 0

//         });

//     }


//     /* ========================================================
//        NORMALIZE EDITABLE ELEMENTS
//        ======================================================== */

//     // Older design variants intentionally use simple block objects.
//     // Normalize them here so every generated template exposes the same
//     // editor controls without changing the individual layouts.
//     const parseBlockTransparency = (fill) => {
//         if (typeof fill !== "string") return 1;
//         const match = fill.match(/rgba\([^,]+,[^,]+,[^,]+,\s*([0-9.]+)\)/i);
//         return match ? Number(match[1]) : 1;
//     };

//     const normalizedBlocks = blocks.map((block, index) => ({
//         ...block,
//         id: block.id || `block-${id}-${index + 1}`,
//         type: block.type || "block",
//         role: block.role || "editableBlock",
//         editable: block.editable ?? true,
//         draggable: block.draggable ?? true,
//         resizable: block.resizable ?? true,
//         locked: block.locked ?? false,
//         color: block.color || block.fill,
//         transparency: block.transparency ?? parseBlockTransparency(block.fill)
//     }));

//     const normalizedBorders = borders.map((border, index) => ({
//         ...border,
//         id: border.id || `border-${id}-${index + 1}`,
//         type: "border",
//         role: border.role || "border",
//         editable: border.editable ?? true,
//         draggable: border.draggable ?? true,
//         resizable: border.resizable ?? true,
//         locked: border.locked ?? false
//     }));

//     /* ========================================================
//        SIZE SUPPORT
//        ======================================================== */

//     const template = {

//         id,

//         name:
//             `${data.name} — ${DESIGN_NAMES[variant]}`,

//         businessType:
//             business,

//         style:
//             DESIGN_NAMES[variant],

//         variant,

//         description:
//             data.description,

//         sizes:
//             Object.keys(
//                 TEMPLATE_SIZES
//             ),

//         background,

//         texts,

//         images,

//         blocks: normalizedBlocks,

//         borders: normalizedBorders,

//         editing: {

//             bordersEditable:
//                 true,

//             contactIconsLinked:
//                 true,

//             discountTagsEditable:
//                 true,

//             blocksEditable:
//                 true,

//             socialIconsReplaceable:
//                 true

//         }

//     };


//     return template;

// };


// /* ============================================================
//    GENERATE 156 TEMPLATES
//    ============================================================ */

// export const templates = [];

// let templateNumber = 1;


// Object.keys(
//     BUSINESS_DATA
// ).forEach(
//     business => {

//         for (
//             let variant = 0;
//             variant < 12;
//             variant++
//         ) {

//             templates.push(

//                 buildTemplate(
//                     business,
//                     variant,
//                     `template-${templateNumber++}`
//                 )

//             );

//         }

//     }
// );


// /* ============================================================
//    SAFETY CHECK
//    ============================================================ */

// if (
//     templates.length !== 156
// ) {

//     console.error(
//         `AdStudio expected 156 templates but generated ${templates.length}.`
//     );

// }


// /* ============================================================
//    DEFAULT EXPORT
//    ============================================================ */

// export default templates;

/////////////////////////////////////////

import { BUSINESS_PHOTO_BACKGROUNDS } from "./businessPhotoBackgrounds";

/* ============================================================
   ADSTUDIO — PREMIUM TEMPLATE LIBRARY
   ============================================================

   15 BUSINESS TYPES
   ×
   20 DISTINCT TEMPLATE VARIATIONS
   =
   300 TEMPLATES

   IMPORTANT:
   - Normalized coordinates are used everywhere.
   - Real editor borders are stored in `borders`.
   - Border is NOT simulated using four blocks.
   - Contact panel uses ~50% transparency.
   - Social icons are real SVG artwork.
   - Promotion badges are separate editable image + text.
   - Other category uses gradient backgrounds only.
   - Business categories prefer photos from the existing Business Photo Picker library.
   - Promotion artwork is converted to native, editable discount-tag elements.
   ============================================================ */


/* ============================================================
   TEMPLATE SIZES
   ============================================================ */

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


/* ============================================================
   BUSINESS TYPES
   ============================================================ */

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
    "Education",
    "Healthcare",
    "Construction",
    "Other"
];


/* ============================================================
   BUSINESS CONTENT
   ============================================================ */

const BUSINESS_DATA = {

    Restaurant: {
        name: "Urban Table",
        tagline: "Bold Flavours. Beautifully Served.",
        description: "Fresh ingredients, signature dishes and memorable dining experiences.",
        offer: "30% OFF",
        contactAccent: "#FFB703"
    },

    Cafe: {
        name: "Brew & Bloom",
        tagline: "Small Moments. Great Coffee.",
        description: "Fresh coffee, handcrafted drinks and delicious bites made every day.",
        offer: "BUY 1 GET 1",
        contactAccent: "#D69E2E"
    },

    Fashion: {
        name: "Mode District",
        tagline: "Wear The Moment.",
        description: "Contemporary collections designed for confident everyday style.",
        offer: "40% OFF",
        contactAccent: "#FF4D8D"
    },

    Photography: {
        name: "Frame House",
        tagline: "Beautiful Light. Real Emotion.",
        description: "Portraits, events and stories captured with timeless detail.",
        offer: "20% OFF",
        contactAccent: "#8B5CF6"
    },

    Resort: {
        name: "Azure Escape",
        tagline: "Wake Up Somewhere Wonderful.",
        description: "Relax, explore and create unforgettable memories by the coast.",
        offer: "STAY 3 • PAY 2",
        contactAccent: "#22D3EE"
    },

    Fitness: {
        name: "Pulse Athletics",
        tagline: "Energy Starts Today.",
        description: "Train smarter with expert coaching, modern equipment and real results.",
        offer: "FREE DAY PASS",
        contactAccent: "#A3E635"
    },

    Beauty: {
        name: "Lumière Beauty",
        tagline: "Glow With Confidence.",
        description: "Premium beauty, hair and wellness services created around you.",
        offer: "20% OFF",
        contactAccent: "#F472B6"
    },

    Auto: {
        name: "DriveLab",
        tagline: "Precision For Every Drive.",
        description: "Professional vehicle care, servicing and detailing you can trust.",
        offer: "15% OFF",
        contactAccent: "#38BDF8"
    },

    Grocery: {
        name: "FreshMart",
        tagline: "Fresh Finds For Every Day.",
        description: "Fresh produce, everyday essentials and great value under one roof.",
        offer: "SAVE TODAY",
        contactAccent: "#4ADE80"
    },

    "Real Estate": {
        name: "Prime Living",
        tagline: "A Home That Fits Your Future.",
        description: "Discover exceptional homes, apartments and investment opportunities.",
        offer: "NEW LISTING",
        contactAccent: "#F59E0B"
    },

    Travel: {
        name: "Voyage Studio",
        tagline: "Your Next Story Starts Here.",
        description: "Curated journeys, unforgettable destinations and effortless travel planning.",
        offer: "BOOK & SAVE",
        contactAccent: "#2DD4BF"
    },

    Education: {
        name: "NextStep Academy",
        tagline: "Learn Today. Lead Tomorrow.",
        description: "Practical learning, expert guidance and skills built for the future.",
        offer: "ENROLL NOW",
        contactAccent: "#60A5FA"
    },


    Healthcare: {
        name: "VitalCare Clinic",
        tagline: "Care That Puts You First.",
        description: "Trusted professionals, thoughtful treatment and modern healthcare for every stage of life.",
        offer: "BOOK A CHECKUP",
        contactAccent: "#38BDF8"
    },

    Construction: {
        name: "Apex Build Co.",
        tagline: "Built Strong. Built To Last.",
        description: "Quality construction, reliable project management and craftsmanship you can count on.",
        offer: "FREE ESTIMATE",
        contactAccent: "#F59E0B"
    },

    Other: {
        name: "Nova Studio",
        tagline: "Make Your Brand Impossible To Ignore.",
        description: "Flexible promotional layouts for modern businesses and creators.",
        offer: "SPECIAL OFFER",
        contactAccent: "#00D9FF"
    }
};


/* ============================================================
   COLOR SYSTEM
   ============================================================ */

const PALETTES = {

    Restaurant: [
        "#FF4D00",
        "#FFB703",
        "#FFF3D6",
        "#7C2D12"
    ],

    Cafe: [
        "#B45309",
        "#F59E0B",
        "#FDE68A",
        "#3F2A1D"
    ],

    Fashion: [
        "#EC4899",
        "#8B5CF6",
        "#FCE7F3",
        "#111827"
    ],

    Photography: [
        "#8B5CF6",
        "#C084FC",
        "#F5F3FF",
        "#171717"
    ],

    Resort: [
        "#06B6D4",
        "#14B8A6",
        "#CCFBF1",
        "#0F172A"
    ],

    Fitness: [
        "#84CC16",
        "#22C55E",
        "#ECFCCB",
        "#111827"
    ],

    Beauty: [
        "#EC4899",
        "#F472B6",
        "#FCE7F3",
        "#831843"
    ],

    Auto: [
        "#0EA5E9",
        "#2563EB",
        "#BAE6FD",
        "#0F172A"
    ],

    Grocery: [
        "#16A34A",
        "#84CC16",
        "#DCFCE7",
        "#14532D"
    ],

    "Real Estate": [
        "#D97706",
        "#F59E0B",
        "#FEF3C7",
        "#292524"
    ],

    Travel: [
        "#14B8A6",
        "#06B6D4",
        "#CCFBF1",
        "#0F172A"
    ],

    Education: [
        "#2563EB",
        "#60A5FA",
        "#DBEAFE",
        "#172554"
    ],


    Healthcare: [
        "#0F766E",
        "#38BDF8",
        "#E0F2FE",
        "#0F172A"
    ],

    Construction: [
        "#F59E0B",
        "#F97316",
        "#FEF3C7",
        "#1F2937"
    ],

    Other: [
        "#00D9FF",
        "#7C3AED",
        "#EC4899",
        "#0F172A"
    ]
};


/* ============================================================
   PHOTO LIBRARY
   ============================================================ */

const PHOTOS = {

    Restaurant: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        "https://images.unsplash.com/photo-1547592180-85f173990554",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
        "https://images.unsplash.com/photo-1521305916504-4a1121188589",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543"
    ],

    Cafe: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
        "https://images.unsplash.com/photo-1511081692775-05d0f180a065",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        "https://images.unsplash.com/photo-1498804103079-a6351b050096",
        "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
        "https://images.unsplash.com/photo-1461988320302-91bde864fc4e",
        "https://images.unsplash.com/photo-1495867033461-6f5b7d7e7a3a"
    ],

    Fashion: [
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b2bc",
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
        "https://images.unsplash.com/photo-1506629905607-31b5d4b8c1c8",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
    ],

    Photography: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac",
        "https://images.unsplash.com/photo-1516724562728-afc824a36e84",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
        "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ],

    Resort: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        "https://images.unsplash.com/photo-1498503182468-3b51cbb6e2c2",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
    ],

    Fitness: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
        "https://images.unsplash.com/photo-1517964603305-11c0f6f66012",
        "https://images.unsplash.com/photo-1517838277536-f5f99be5019f"
    ],

    Beauty: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035",
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df",
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
        "https://images.unsplash.com/photo-1519415387722-a1c3bb7c9cfb",
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
        "https://images.unsplash.com/photo-1526045478516-99145907023c",
        "https://images.unsplash.com/photo-1595476108010-2d1a3f5d4a8f",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908"
    ],

    Auto: [
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        "https://images.unsplash.com/photo-1486006920555-c77dcf18193c",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
        "https://images.unsplash.com/photo-1504222490345-c075b6008014",
        "https://images.unsplash.com/photo-1493238792000-8113da705763",
        "https://images.unsplash.com/photo-1551830820-330a71b99659",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a0e",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f"
    ],

    Grocery: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e",
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818",
        "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
        "https://images.unsplash.com/photo-1610832958506-aa5636811d9b",
        "https://images.unsplash.com/photo-1506617420156-8e4536971650",
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
        "https://images.unsplash.com/photo-1601598851547-4302969d6f4b",
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        "https://images.unsplash.com/photo-1543168256-9a9c8a0c9a57",
        "https://images.unsplash.com/photo-1580915411954-282cb1e6f2a2"
    ],

    "Real Estate": [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        "https://images.unsplash.com/photo-1600566753191-17f0baa2a6c3",
        "https://images.unsplash.com/photo-1600566753051-7e6f4c5b8c9f",
        "https://images.unsplash.com/photo-1600566753376-12c8f3a2b9d8"
    ],

    Travel: [
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1521292270410-a8c4d716d518",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1488085061387-422e29b40080",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    ],

    Education: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
        "https://images.unsplash.com/photo-1498243691581-b34c7d4b8a8b",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    ],

    Healthcare: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
        "https://images.unsplash.com/photo-1551076805-e1869033e561",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
    ],

    Construction: [
        "https://images.unsplash.com/photo-1503387762-592dead58ef4",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
        "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77",
        "https://images.unsplash.com/photo-1581094794329-cdee9a8f4d7a",
        "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea",
        "https://images.unsplash.com/photo-1590644365607-1c5a71d5c9f0",
        "https://images.unsplash.com/photo-1574359411659-15573a27fd0c",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    ],
};


/* ============================================================
   SVG HELPERS
   ============================================================ */

const svgData = svg =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;


/* ============================================================
   SOCIAL ICONS
   ============================================================ */

export const SOCIAL_ICONS = {

    facebook: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="fb" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="#4F8CFF"/>
                    <stop offset="1" stop-color="#1877F2"/>
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#fb)"/>
            <rect x="5" y="5" width="90" height="90" rx="20"
                  fill="none"
                  stroke="white"
                  stroke-width="5"/>
            <path fill="white"
                  d="M57 86V56h10l2-12H57v-7c0-4 2-6 7-6h6V19c-3-1-7-1-11-1-11 0-18 7-18 18v8H30v12h11v30z"/>
        </svg>
    `),

    instagram: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
                    <stop stop-color="#FFD600"/>
                    <stop offset=".35" stop-color="#FF7A00"/>
                    <stop offset=".65" stop-color="#E1306C"/>
                    <stop offset="1" stop-color="#833AB4"/>
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#ig)"/>
            <rect x="5" y="5" width="90" height="90" rx="20"
                  fill="none"
                  stroke="white"
                  stroke-width="5"/>
            <rect x="25" y="25" width="50" height="50"
                  rx="15"
                  fill="none"
                  stroke="white"
                  stroke-width="7"/>
            <circle cx="50" cy="50" r="12"
                    fill="none"
                    stroke="white"
                    stroke-width="7"/>
            <circle cx="69" cy="31" r="4.5" fill="white"/>
        </svg>
    `),

    whatsapp: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="wa" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="#5CF38B"/>
                    <stop offset="1" stop-color="#16A34A"/>
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#wa)"/>
            <rect x="5" y="5" width="90" height="90" rx="20"
                  fill="none"
                  stroke="white"
                  stroke-width="5"/>
            <path fill="white"
                  d="M30 74l4-14a27 27 0 1 1 10 10zm19-18c8 4 11 5 14 1l3-4-7-4-4 3c-2 1-5-1-8-3s-5-5-4-7l2-3-4-6-4 2c-4 2-5 8-1 14 3 5 8 10 13 12z"/>
        </svg>
    `),

    youtube: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="yt" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="#FF4B4B"/>
                    <stop offset="1" stop-color="#CC0000"/>
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#yt)"/>
            <rect x="5" y="5" width="90" height="90" rx="20"
                  fill="none"
                  stroke="white"
                  stroke-width="5"/>
            <path fill="white" d="M40 33l31 17-31 17z"/>
        </svg>
    `),

    linkedin: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="li" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="#38A9FF"/>
                    <stop offset="1" stop-color="#0A66C2"/>
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="96" height="96" rx="22" fill="url(#li)"/>
            <rect x="5" y="5" width="90" height="90" rx="20"
                  fill="none"
                  stroke="white"
                  stroke-width="5"/>
            <path fill="white"
                  d="M24 39h14v37H24zm7-20a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm15 20h13v5h.2c2-4 7-7 13-7 14 0 17 9 17 21v18H76V60c0-7 0-15-9-15s-10 7-10 15v16H46z"/>
        </svg>
    `),

    tiktok: svgData(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect x="2" y="2" width="96" height="96" rx="22" fill="#111111"/>
            <rect x="5" y="5" width="90" height="90" rx="20"
                  fill="none"
                  stroke="white"
                  stroke-width="5"/>
            <path fill="#25F4EE"
                  d="M57 21v38a18 18 0 1 1-15-17v10a8 8 0 1 0 5 7V21z"/>
            <path fill="#FE2C55"
                  d="M62 18c3 8 8 12 16 13v11c-6 0-12-2-16-6v26a18 18 0 1 1-15-17v10a8 8 0 1 0 5 7V18z"/>
            <path fill="white"
                  d="M58 22v37a18 18 0 1 1-15-17v10a8 8 0 1 0 5 7V22z"/>
        </svg>
    `)
};


/* ============================================================
   PROMOTION BADGE LIBRARY
   ============================================================ */

const promotionSVG = (
    type,
    colorA,
    colorB
) => {

    let body = "";

    if (type === "circle") {

        body = `
            <circle
                cx="150"
                cy="150"
                r="118"
                fill="url(#g)"
                stroke="white"
                stroke-width="6"
            />
            <circle
                cx="150"
                cy="150"
                r="92"
                fill="none"
                stroke="rgba(255,255,255,.65)"
                stroke-width="3"
                stroke-dasharray="8 8"
            />
        `;

    }

    if (type === "burst") {

        body = `
            <path
                d="
                M150 8
                L174 37
                L208 21
                L214 57
                L251 53
                L244 89
                L278 104
                L253 131
                L281 154
                L249 175
                L264 208
                L228 215
                L229 251
                L194 240
                L176 273
                L150 246
                L124 273
                L106 240
                L71 251
                L72 215
                L36 208
                L51 175
                L19 154
                L47 131
                L22 104
                L56 89
                L49 53
                L86 57
                L92 21
                L126 37
                Z"
                fill="url(#g)"
                stroke="white"
                stroke-width="6"
            />
        `;

    }

    if (type === "capsule") {

        body = `
            <rect
                x="20"
                y="70"
                width="260"
                height="160"
                rx="80"
                fill="url(#g)"
                stroke="white"
                stroke-width="6"
            />
            <rect
                x="42"
                y="92"
                width="216"
                height="116"
                rx="58"
                fill="none"
                stroke="rgba(255,255,255,.6)"
                stroke-width="3"
            />
        `;

    }

    if (type === "ticket") {

        body = `
            <path
                d="
                M30 48
                H270
                V102
                C250 102 250 132 270 132
                V252
                H30
                V132
                C50 132 50 102 30 102
                Z"
                fill="url(#g)"
                stroke="white"
                stroke-width="6"
            />
        `;

    }

    if (type === "hex") {

        body = `
            <path
                d="
                M150 16
                L264 82
                L264 218
                L150 284
                L36 218
                L36 82
                Z"
                fill="url(#g)"
                stroke="white"
                stroke-width="6"
            />
            <path
                d="
                M150 39
                L242 92
                L242 208
                L150 261
                L58 208
                L58 92
                Z"
                fill="none"
                stroke="rgba(255,255,255,.55)"
                stroke-width="3"
            />
        `;

    }

    if (type === "arrow") {

        body = `
            <path
                d="
                M25 60
                H210
                L278 150
                L210 240
                H25
                L85 150
                Z"
                fill="url(#g)"
                stroke="white"
                stroke-width="6"
            />
        `;

    }

    return svgData(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            viewBox="0 0 300 300"
        >
            <defs>
                <linearGradient
                    id="g"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0"
                        stop-color="${colorA}"
                    />
                    <stop
                        offset="1"
                        stop-color="${colorB}"
                    />
                </linearGradient>
            </defs>

            ${body}
        </svg>
    `);
};


export const DISCOUNT_TAG_LIBRARY = [

    {
        id: "circle-cyan",
        name: "Electric Circle",
        shape: "circle",
        src: promotionSVG(
            "circle",
            "#00D9FF",
            "#2563EB"
        )
    },

    {
        id: "circle-pink",
        name: "Pink Circle",
        shape: "circle",
        src: promotionSVG(
            "circle",
            "#FF3CAC",
            "#7C3AED"
        )
    },

    {
        id: "burst-orange",
        name: "Orange Burst",
        shape: "burst",
        src: promotionSVG(
            "burst",
            "#FB923C",
            "#EF4444"
        )
    },

    {
        id: "burst-green",
        name: "Green Burst",
        shape: "burst",
        src: promotionSVG(
            "burst",
            "#A3E635",
            "#16A34A"
        )
    },

    {
        id: "capsule-violet",
        name: "Violet Capsule",
        shape: "capsule",
        src: promotionSVG(
            "capsule",
            "#8B5CF6",
            "#EC4899"
        )
    },

    {
        id: "ticket-gold",
        name: "Gold Ticket",
        shape: "ticket",
        src: promotionSVG(
            "ticket",
            "#F59E0B",
            "#EF4444"
        )
    },

    {
        id: "hex-blue",
        name: "Blue Hex",
        shape: "hex",
        src: promotionSVG(
            "hex",
            "#06B6D4",
            "#2563EB"
        )
    },

    {
        id: "arrow-pink",
        name: "Pink Arrow",
        shape: "arrow",
        src: promotionSVG(
            "arrow",
            "#F43F5E",
            "#EC4899"
        )
    }
];


/* ============================================================
   LOGO
   ============================================================ */

const logoSVG = (
    business,
    name,
    accent,
    secondary
) => {

    const initials = name
        .split(/\s+/)
        .map(word => word[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();

    return svgData(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="360"
            height="360"
            viewBox="0 0 300 300"
        >
            <defs>

                <linearGradient
                    id="logo"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        stop-color="${accent}"
                    />
                    <stop
                        offset="1"
                        stop-color="${secondary}"
                    />
                </linearGradient>

            </defs>

            <rect
                x="12"
                y="12"
                width="276"
                height="276"
                rx="70"
                fill="#071426"
                stroke="url(#logo)"
                stroke-width="7"
            />

            <circle
                cx="150"
                cy="140"
                r="82"
                fill="rgba(255,255,255,.04)"
                stroke="rgba(255,255,255,.18)"
                stroke-width="3"
            />

            <circle
                cx="150"
                cy="140"
                r="47"
                fill="none"
                stroke="${accent}"
                stroke-width="8"
            />

            <path
                d="M116 140h68"
                stroke="${secondary}"
                stroke-width="8"
                stroke-linecap="round"
            />

            <path
                d="M150 106v68"
                stroke="${accent}"
                stroke-width="8"
                stroke-linecap="round"
            />

            <text
                x="150"
                y="264"
                text-anchor="middle"
                fill="white"
                font-family="Poppins,Arial,sans-serif"
                font-size="25"
                font-weight="900"
                letter-spacing="4"
            >
                ${initials}
            </text>
        </svg>
    `);
};


/* ============================================================
   BASIC OBJECT HELPERS
   ============================================================ */

const textItem = ({
    id,
    role,
    text,
    x,
    y,
    width,
    fontScale,
    fill,
    fontFamily = "Poppins",
    fontStyle = "normal",
    align = "left",
    letterSpacing = 0,
    underline = false,
    rotation = 0
}) => ({

    id,
    role,

    type:
        [
            "phone",
            "email",
            "address",
            "website"
        ].includes(role)
            ? "contact"
            : role === "offer"
                ? "text"
                : "business",

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

    letterSpacing,

    rotation

});


const imageItem = ({
    type = "image",
    src,
    x,
    y,
    width,
    height,
    rotation = 0,
    social = null,
    linkedTextId = null,
    iconType = null
}) => ({

    type,

    src,

    nx: x,
    ny: y,

    nw: width,
    nh: height,

    rotation,

    social,

    linkedTextId,
    iconType,

    replaceable:
        type === "photo" ||
        type === "logo" ||
        type === "promotion",

    draggable: true,
    resizable: true
});


/* ============================================================
   REAL BORDER
   ============================================================ */

const createRealBorder = (
    accent,
    secondary,
    variant
) => {

    const styles = [
        "solid",
        "double",
        "dashed",
        "dotted",
        "solid",
        "double"
    ];

    const style =
        styles[
        variant %
        styles.length
        ];

    const strokes = [
        accent,
        secondary,
        "#FFFFFF",
        accent,
        secondary,
        "#FFD166"
    ];

    const stroke =
        strokes[
        variant %
        strokes.length
        ];

    return {

        id: `template-border-${variant}`,

        x: 0.018,
        y: 0.018,

        nx: 0.018,
        ny: 0.018,

        nw: 0.964,
        nh: 0.964,

        width: 0.964,
        height: 0.964,

        stroke,

        fill: "transparent",

        strokeWidth:
            variant % 3 === 0
                ? 4
                : variant % 3 === 1
                    ? 3
                    : 2,

        style,

        cornerRadius:
            variant % 4 === 0
                ? 24
                : variant % 4 === 1
                    ? 16
                    : 8,

        editable: true,
        draggable: true,
        resizable: true
    };
};


/* ============================================================
   CONTACT ICON SVG
   ============================================================ */

const contactIconSVG = (
    type,
    color
) => {

    let path = "";

    if (type === "phone") {

        path = `
            <path
                d="
                M42 22
                C31 27 26 39 31 51
                C39 70 55 82 74 86
                C86 89 97 81 99 70
                L79 61
                L68 72
                C60 69 48 57 45 49
                L56 38
                Z"
                fill="white"
            />
        `;

    }

    if (type === "email") {

        path = `
            <rect
                x="20"
                y="29"
                width="60"
                height="42"
                rx="7"
                fill="none"
                stroke="white"
                stroke-width="8"
            />
            <path
                d="M22 35l28 22 28-22"
                fill="none"
                stroke="white"
                stroke-width="8"
            />
        `;

    }

    if (type === "address") {

        path = `
            <path
                d="
                M50 91
                C50 91 23 62 23 43
                A27 27 0 1 1 77 43
                C77 62 50 91 50 91
                Z"
                fill="white"
            />
            <circle
                cx="50"
                cy="43"
                r="9"
                fill="${color}"
            />
        `;

    }

    if (type === "website") {

        path = `
            <circle
                cx="50"
                cy="50"
                r="31"
                fill="none"
                stroke="white"
                stroke-width="7"
            />
            <path
                d="M19 50h62M50 19c12 12 12 50 0 62M50 19c-12 12-12 50 0 62"
                fill="none"
                stroke="white"
                stroke-width="6"
            />
        `;

    }

    return svgData(`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
        >
            <rect
                width="100"
                height="100"
                rx="24"
                fill="${color}"
            />
            ${path}
        </svg>
    `);
};


/* ============================================================
   CONTACT SYSTEM
   ============================================================ */

const addContacts = ({
    images,
    texts,
    data,
    accent,
    textColor,
    fontFamily,
    x,
    y,
    width,
    compact = false
}) => {

    const rows = [

        {
            id: 4,
            role: "phone",
            value: data.phone,
            icon: "phone"
        },

        {
            id: 5,
            role: "email",
            value: data.email,
            icon: "email"
        },

        {
            id: 6,
            role: "address",
            value: data.address,
            icon: "address"
        },

        {
            id: 7,
            role: "website",
            value: data.website,
            icon: "website"
        }

    ];


    const gap =
        compact
            ? 0.045
            : 0.039;


    rows.forEach(
        (row, index) => {

            const rowY =
                y +
                index * gap;


            const iconId =
                `contact-icon-${row.role}-${index}`;


            images.push({

                ...imageItem({

                    type: "contactIcon",

                    src:
                        contactIconSVG(
                            row.icon,
                            accent
                        ),

                    x,

                    y:
                        rowY -
                        0.006,

                    width:
                        compact
                            ? 0.043
                            : 0.035,

                    height:
                        compact
                            ? 0.043
                            : 0.035,

                    linkedTextId:
                        row.id,

                    iconType:
                        row.icon

                }),

                id: iconId,

                linkedTextRole:
                    row.role

            });


            texts.push(

                textItem({

                    id: row.id,

                    role: row.role,

                    text:
                        row.value,

                    x:
                        x +
                        (
                            compact
                                ? 0.055
                                : 0.047
                        ),

                    y:
                        rowY,

                    width:
                        width -
                        (
                            compact
                                ? 0.055
                                : 0.047
                        ),

                    fontScale:
                        compact
                            ? 0.039
                            : 0.030,

                    fill:
                        textColor,

                    fontFamily,

                    fontStyle:
                        row.role === "website"
                            ? "normal"
                            : "bold"

                })

            );

        }
    );

};


/* ============================================================
   SOCIAL ROW
   ============================================================ */

const addSocialRow = ({
    images,
    x,
    y,
    size = 0.035,
    gap = 0.008
}) => {

    const keys = [
        "facebook",
        "whatsapp",
        "youtube",
        "linkedin",
        "instagram",
        "tiktok"
    ];

    keys.forEach(
        (key, index) => {

            images.push(

                imageItem({

                    type: "social",

                    social: key,

                    src:
                        SOCIAL_ICONS[key],

                    x:
                        x +
                        index *
                        (
                            size +
                            gap
                        ),

                    y,

                    width: size,
                    height: size

                })

            );

        }
    );

};


/* ============================================================
   LOGO
   ============================================================ */

const addLogo = ({
    images,
    business,
    data,
    palette,
    x,
    y,
    size
}) => {

    images.push(

        imageItem({

            type: "logo",

            src:
                logoSVG(
                    business,
                    data.name,
                    palette[0],
                    palette[1]
                ),

            x,
            y,

            width: size,
            height: size

        })

    );

};


/* ============================================================
   PROMOTION
   ============================================================ */

const addPromotion = ({
    images,
    texts,
    data,
    palette,
    variant,
    x,
    y,
    size,
    fontFamily = "Poppins"
}) => {

    const tag =
        DISCOUNT_TAG_LIBRARY[
        variant %
        DISCOUNT_TAG_LIBRARY.length
        ];


    const offerId =
        `offer-${variant}-${x}-${y}`;


    images.push({

        ...imageItem({

            type: "promotion",

            src:
                tag.src,

            x,
            y,

            width: size,
            height: size

        }),

        assetType: "promotion",

        role: "promotion",

        promotionId:
            tag.id,

        promotionShape:
            tag.shape,

        offerTextId:
            offerId,

        doubleClickAction:
            "discountTagLibrary",

        library:
            "DISCOUNT_TAG_LIBRARY"

    });


    texts.push(

        textItem({

            id: offerId,

            role: "offer",

            text:
                data.offer,

            x:
                x +
                size *
                0.13,

            y:
                y +
                size *
                0.38,

            width:
                size *
                0.74,

            fontScale:
                0.040,

            fill:
                "#FFFFFF",

            fontFamily,

            fontStyle:
                "bold",

            align:
                "center"

        })

    );

};


/* ============================================================
   PHOTO ACCENT
   ============================================================ */

const addPhoto = ({
    images,
    src,
    x,
    y,
    width,
    height,
    rotation = 0
}) => {

    // Never create a broken image layer. This is especially important for
    // the Other category, which intentionally uses gradient backgrounds
    // instead of photographic backgrounds.
    if (!src) return;

    images.push(

        imageItem({

            type: "photo",

            src,

            x,
            y,

            width,
            height,

            rotation

        })

    );

};


/* ============================================================
   DESIGN MODELS
   ============================================================

   These are intentionally very different.

   01 — Split Editorial
   02 — Hero Right
   03 — Hero Left
   04 — Center Product
   05 — Diagonal Magazine
   06 — Bottom Hero
   07 — Vertical Story
   08 — Collage
   09 — Luxury Frame
   10 — Typographic Poster
   11 — Dynamic Promo
   12 — Asymmetric Card
   ============================================================ */

const DESIGN_NAMES = [

    "Split Editorial",

    "Hero Right",

    "Hero Left",

    "Center Product",

    "Diagonal Magazine",

    "Bottom Hero",

    "Vertical Story",

    "Creative Collage",

    "Luxury Frame",

    "Typographic Poster",

    "Dynamic Promo",

    "Asymmetric Card",

    "Editorial Split — Reverse",

    "Photo Mosaic",

    "Bold Type & Badge",

    "Minimal Luxury",

    "Diagonal Feature",

    "Stacked Showcase",

    "Color-Block Story",

    "Campaign Spotlight"

];


/* ============================================================
   FONT SYSTEM
   ============================================================ */

const FONT_FAMILIES = [

    "Poppins",

    "Montserrat",

    "Playfair Display",

    "DM Sans",

    "Oswald",

    "Raleway",

    "Bebas Neue",

    "Nunito",

    "Lora",

    "Inter",

    "Roboto",

    "Libre Baskerville"

];


/* ============================================================
   RESPONSIVE SIZE PREPARATION
   ============================================================ */

const clone = value =>
    JSON.parse(
        JSON.stringify(value)
    );


export const prepareTemplateForSize = (
    template,
    selectedSize
) => {

    const output =
        clone(template);


    const isCard =
        selectedSize ===
        "visitingCard" ||
        selectedSize ===
        "businessCard";

    const isBookmark =
        selectedSize ===
        "bookmark";

    const isStory =
        selectedSize ===
        "instagramStory";


    output.selectedSize =
        selectedSize;


    /*
     * Small horizontal cards need slightly
     * stronger typography and compact contacts.
     */

    if (isCard) {

        output.texts =
            output.texts.map(
                text => {

                    if (
                        text.role ===
                        "businessName"
                    ) {

                        return {
                            ...text,
                            fontScale:
                                Math.max(
                                    text.fontScale,
                                    0.115
                                )
                        };

                    }

                    if (
                        text.type ===
                        "contact"
                    ) {

                        return {
                            ...text,
                            fontScale:
                                Math.max(
                                    text.fontScale,
                                    0.040
                                )
                        };

                    }

                    return text;

                }
            );

    }


    if (isBookmark) {

        output.texts =
            output.texts.map(
                text => {

                    if (
                        text.role ===
                        "businessName"
                    ) {

                        return {
                            ...text,
                            fontScale:
                                Math.max(
                                    text.fontScale,
                                    0.095
                                )
                        };

                    }

                    return text;

                }
            );

    }


    if (isStory) {

        output.texts =
            output.texts.map(
                text => {

                    if (
                        text.role ===
                        "businessName"
                    ) {

                        return {
                            ...text,
                            fontScale:
                                Math.max(
                                    text.fontScale,
                                    0.105
                                )
                        };

                    }

                    return text;

                }
            );

    }


    return output;

};


/* ============================================================
   BASE TEXT BUILDER
   ============================================================ */

const addMainText = ({
    texts,
    data,
    variant,
    palette,
    titleX,
    titleY,
    titleWidth,
    align = "left",
    fontFamily
}) => {

    const titleColors = [
        "#FFFFFF",
        "#FFF7ED",
        palette[2],
        "#FFFFFF",
        "#111827"
    ];

    const titleColor =
        titleColors[
        variant %
        titleColors.length
        ];


    texts.push(

        textItem({

            id: 1,

            role: "businessName",

            text:
                data.name,

            x:
                titleX,

            y:
                titleY,

            width:
                titleWidth,

            fontScale:
                0.115,

            fill:
                titleColor,

            fontFamily,

            fontStyle:
                variant % 3 === 0
                    ? "bold"
                    : "normal",

            align,

            letterSpacing:
                variant % 4 === 0
                    ? 1.5
                    : 0

        })

    );


    texts.push(

        textItem({

            id: 2,

            role: "tagline",

            text:
                data.tagline,

            x:
                titleX,

            y:
                titleY +
                0.145,

            width:
                titleWidth,

            fontScale:
                0.047,

            fill:
                variant % 2 === 0
                    ? "#FFFFFF"
                    : palette[2],

            fontFamily,

            fontStyle:
                "bold",

            align

        })

    );


    texts.push(

        textItem({

            id: 3,

            role: "description",

            text:
                data.description,

            x:
                titleX,

            y:
                titleY +
                0.205,

            width:
                titleWidth,

            fontScale:
                0.029,

            fill:
                "rgba(255,255,255,.92)",

            fontFamily:
                "DM Sans",

            fontStyle:
                "normal",

            align

        })

    );

};


/* ============================================================
   TEMPLATE BUILDER
   ============================================================ */

const buildTemplate = (
    business,
    variantIndex,
    id
) => {

    // Twelve carefully composed base layouts plus eight transformed editorial
    // variants. The original index is retained for color/font/photo variation.
    const variant = variantIndex % 12;

    const data =
        BUSINESS_DATA[business];

    const palette =
        PALETTES[business];

    const photos =
        PHOTOS[business] || [];

    // Prefer the real Business Photo Picker library for template backgrounds.
    // Newer categories fall back to the category-specific curated photo pool.
    const matchingBusinessBackgrounds = BUSINESS_PHOTO_BACKGROUNDS.filter(
        item => item.category === business && item.src
    );
    const backgroundPhotos = matchingBusinessBackgrounds.length
        ? matchingBusinessBackgrounds.map(item => item.src)
        : photos;

    const fontFamily =
        FONT_FAMILIES[
        variantIndex %
        FONT_FAMILIES.length
        ];


    const accent =
        palette[
        variantIndex %
        palette.length
        ];

    const secondary =
        palette[
        (variantIndex + 1) %
        palette.length
        ];


    const background =
        business === "Other"
            ? {
                type: "gradient",
                src: "",
                value: [
                    `linear-gradient(135deg, ${palette[0]} 0%, ${palette[1]} 52%, ${palette[2]} 100%)`,
                    `linear-gradient(120deg, ${palette[3]} 0%, ${palette[0]} 42%, ${palette[2]} 100%)`,
                    `linear-gradient(45deg, ${palette[1]} 0%, ${palette[3]} 48%, ${palette[0]} 100%)`
                ][variant % 3]
            }
            : {
                // Keep the same data contract as BusinessPhotoBackgroundPicker.
                type: "business-photo",
                id: `template-business-photo-${business.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${variantIndex + 1}`,
                name: `${business} Template Photo`,
                category: business,
                src: backgroundPhotos[variantIndex % backgroundPhotos.length],
                color: accent,
                opacity: 72,
                shape: ["left", "right", "diagonal", "curve", "circle", "bottom", "top", "split", "corner", "wave", "full", "minimal"][variant % 12],
                overlay: "custom",
                value: accent,
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                rotation: 0
            };


    const images = [];
    const texts = [];
    const blocks = [];


    /* ========================================================
       DESIGN 01 — SPLIT EDITORIAL
       ======================================================== */

    if (variant === 0) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.105
        });


        addMainText({
            texts,
            data,
            variant,
            palette,
            titleX: 0.055,
            titleY: 0.205,
            titleWidth: 0.43,
            fontFamily
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.535,
            y: 0.105,
            width: 0.40,
            height: 0.43,
            rotation: 2
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.57,
            y: 0.545,
            width: 0.19,
            height: 0.18,
            rotation: -3
        });


        addPhoto({
            images,
            src:
                photos[3 % photos.length],
            x: 0.785,
            y: 0.575,
            width: 0.14,
            height: 0.14,
            rotation: 4
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.06,
            y: 0.575,
            size: 0.18,
            fontFamily
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.745,
            nw: 0.93,
            nh: 0.215,
            fill: "rgba(5,15,30,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.055,
            y: 0.775,
            width: 0.61
        });


        addSocialRow({
            images,
            x: 0.705,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 02 — HERO RIGHT
       ======================================================== */

    if (variant === 1) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.78,
            y: 0.055,
            size: 0.12
        });


        addMainText({
            texts,
            data,
            variant,
            palette,
            titleX: 0.07,
            titleY: 0.12,
            titleWidth: 0.53,
            fontFamily
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.51,
            y: 0.29,
            width: 0.40,
            height: 0.40,
            rotation: 0
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.39,
            y: 0.48,
            width: 0.16,
            height: 0.16,
            rotation: -6
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.07,
            y: 0.47,
            size: 0.19,
            fontFamily
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.735,
            nw: 0.93,
            nh: 0.225,
            fill: "rgba(10,18,35,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Montserrat",
            x: 0.055,
            y: 0.765,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.87,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 03 — HERO LEFT
       ======================================================== */

    if (variant === 2) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.11
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.055,
            y: 0.235,
            width: 0.43,
            height: 0.45,
            rotation: -2
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.44,
            y: 0.18,
            width: 0.14,
            height: 0.14,
            rotation: 6
        });


        addMainText({
            texts,
            data,
            variant,
            palette,
            titleX: 0.53,
            titleY: 0.20,
            titleWidth: 0.40,
            align: "right",
            fontFamily
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.68,
            y: 0.505,
            size: 0.17,
            fontFamily
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.735,
            nw: 0.93,
            nh: 0.225,
            fill: "rgba(9,17,31,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "DM Sans",
            x: 0.055,
            y: 0.765,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.87,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 04 — CENTER PRODUCT
       ======================================================== */

    if (variant === 3) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.10
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.14,
                y: 0.065,
                width: 0.72,
                fontScale: 0.105,
                fill: "#FFFFFF",
                fontFamily,
                fontStyle: "bold",
                align: "center"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.12,
                y: 0.20,
                width: 0.76,
                fontScale: 0.043,
                fill: palette[2],
                fontFamily,
                fontStyle: "bold",
                align: "center"
            })
        );


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.22,
            y: 0.28,
            width: 0.56,
            height: 0.40,
            rotation: 0
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.08,
            y: 0.40,
            width: 0.14,
            height: 0.14,
            rotation: -8
        });


        addPhoto({
            images,
            src:
                photos[3 % photos.length],
            x: 0.79,
            y: 0.42,
            width: 0.12,
            height: 0.12,
            rotation: 7
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.69,
            y: 0.69,
            size: 0.18,
            fontFamily
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.745,
            nw: 0.93,
            nh: 0.215,
            fill: "rgba(10,18,34,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.055,
            y: 0.775,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 05 — DIAGONAL MAGAZINE
       ======================================================== */

    if (variant === 4) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.06,
            y: 0.055,
            size: 0.09
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.055,
                y: 0.17,
                width: 0.60,
                fontScale: 0.125,
                fill: "#FFFFFF",
                fontFamily: "Oswald",
                fontStyle: "bold",
                letterSpacing: 1
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.06,
                y: 0.335,
                width: 0.52,
                fontScale: 0.045,
                fill: palette[2],
                fontFamily: "Montserrat",
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.06,
                y: 0.41,
                width: 0.48,
                fontScale: 0.027,
                fill: "#FFFFFF",
                fontFamily: "DM Sans"
            })
        );


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.51,
            y: 0.06,
            width: 0.42,
            height: 0.52,
            rotation: 7
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.69,
            y: 0.50,
            width: 0.18,
            height: 0.18,
            rotation: -8
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.46,
            y: 0.59,
            size: 0.18,
            fontFamily: "Montserrat"
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.75,
            nw: 0.93,
            nh: 0.21,
            fill: "rgba(10,18,35,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "DM Sans",
            x: 0.055,
            y: 0.775,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 06 — BOTTOM HERO
       ======================================================== */

    if (variant === 5) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.095
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.055,
                y: 0.16,
                width: 0.85,
                fontScale: 0.13,
                fill: "#FFFFFF",
                fontFamily: "Bebas Neue",
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.06,
                y: 0.31,
                width: 0.76,
                fontScale: 0.048,
                fill: "#FFFFFF",
                fontFamily: "Montserrat",
                fontStyle: "bold"
            })
        );


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.75,
            y: 0.14,
            size: 0.16,
            fontFamily: "Montserrat"
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.08,
            y: 0.42,
            width: 0.84,
            height: 0.34,
            rotation: 0
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.07,
            y: 0.59,
            width: 0.14,
            height: 0.13,
            rotation: -6
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.765,
            nw: 0.93,
            nh: 0.195,
            fill: "rgba(5,16,32,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.055,
            y: 0.795,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.885,
            size: 0.032
        });

    }


    /* ========================================================
       DESIGN 07 — VERTICAL STORY
       ======================================================== */

    if (variant === 6) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.07,
            y: 0.055,
            size: 0.10
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.56,
            y: 0.06,
            width: 0.35,
            height: 0.57,
            rotation: 0
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.48,
            y: 0.51,
            width: 0.15,
            height: 0.15,
            rotation: -7
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.07,
                y: 0.21,
                width: 0.43,
                fontScale: 0.125,
                fill: "#FFFFFF",
                fontFamily: "Raleway",
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.07,
                y: 0.39,
                width: 0.41,
                fontScale: 0.044,
                fill: palette[2],
                fontFamily,
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.07,
                y: 0.48,
                width: 0.38,
                fontScale: 0.027,
                fill: "#FFFFFF",
                fontFamily: "DM Sans"
            })
        );


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.30,
            y: 0.62,
            size: 0.16,
            fontFamily
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.745,
            nw: 0.93,
            nh: 0.215,
            fill: "rgba(7,18,35,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.055,
            y: 0.775,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 08 — CREATIVE COLLAGE
       ======================================================== */

    if (variant === 7) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.09
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.07,
            y: 0.18,
            width: 0.46,
            height: 0.33,
            rotation: -4
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.51,
            y: 0.13,
            width: 0.36,
            height: 0.25,
            rotation: 5
        });


        addPhoto({
            images,
            src:
                photos[3 % photos.length],
            x: 0.46,
            y: 0.43,
            width: 0.27,
            height: 0.20,
            rotation: -5
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.07,
                y: 0.535,
                width: 0.75,
                fontScale: 0.11,
                fill: "#FFFFFF",
                fontFamily: "Playfair Display",
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.075,
                y: 0.68,
                width: 0.60,
                fontScale: 0.043,
                fill: palette[2],
                fontFamily: "Montserrat",
                fontStyle: "bold"
            })
        );


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.74,
            y: 0.53,
            size: 0.17,
            fontFamily: "Montserrat"
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.75,
            nw: 0.93,
            nh: 0.21,
            fill: "rgba(5,15,30,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "DM Sans",
            x: 0.055,
            y: 0.78,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 09 — LUXURY FRAME
       ======================================================== */

    if (variant === 8) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.075,
            y: 0.075,
            size: 0.09
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.15,
                y: 0.10,
                width: 0.70,
                fontScale: 0.105,
                fill: "#FFFFFF",
                fontFamily: "Libre Baskerville",
                fontStyle: "bold",
                align: "center"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.18,
                y: 0.235,
                width: 0.64,
                fontScale: 0.038,
                fill: palette[2],
                fontFamily: "Raleway",
                fontStyle: "bold",
                align: "center",
                letterSpacing: 1
            })
        );


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.18,
            y: 0.32,
            width: 0.64,
            height: 0.35,
            rotation: 0
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.70,
            y: 0.53,
            width: 0.15,
            height: 0.13,
            rotation: 4
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.075,
            y: 0.53,
            size: 0.15,
            fontFamily: "Libre Baskerville"
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.04,
            ny: 0.75,
            nw: 0.92,
            nh: 0.21,
            fill: "rgba(4,12,24,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent: "#FFD166",
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.06,
            y: 0.78,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.034
        });

    }


    /* ========================================================
       DESIGN 10 — TYPOGRAPHIC POSTER
       ======================================================== */

    if (variant === 9) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.09
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name.toUpperCase(),
                x: 0.055,
                y: 0.17,
                width: 0.88,
                fontScale: 0.14,
                fill: "#FFFFFF",
                fontFamily: "Bebas Neue",
                fontStyle: "bold",
                letterSpacing: 2
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline.toUpperCase(),
                x: 0.06,
                y: 0.33,
                width: 0.62,
                fontScale: 0.047,
                fill: palette[2],
                fontFamily: "Oswald",
                fontStyle: "bold",
                letterSpacing: 1
            })
        );


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.55,
            y: 0.36,
            width: 0.36,
            height: 0.31,
            rotation: 0
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.42,
            y: 0.57,
            width: 0.13,
            height: 0.12,
            rotation: -5
        });


        texts.push(
            textItem({
                id: 3,
                role: "description",
                text: data.description,
                x: 0.06,
                y: 0.45,
                width: 0.40,
                fontScale: 0.029,
                fill: "#FFFFFF",
                fontFamily: "DM Sans"
            })
        );


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.10,
            y: 0.60,
            size: 0.17,
            fontFamily: "Oswald"
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.75,
            nw: 0.93,
            nh: 0.21,
            fill: "rgba(8,17,31,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "DM Sans",
            x: 0.055,
            y: 0.78,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 11 — DYNAMIC PROMO
       ======================================================== */

    if (variant === 10) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.055,
            y: 0.055,
            size: 0.085
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.055,
                y: 0.16,
                width: 0.50,
                fontScale: 0.115,
                fill: "#FFFFFF",
                fontFamily: "Montserrat",
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.06,
                y: 0.31,
                width: 0.48,
                fontScale: 0.045,
                fill: palette[2],
                fontFamily: "Poppins",
                fontStyle: "bold"
            })
        );


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.52,
            y: 0.08,
            width: 0.39,
            height: 0.42,
            rotation: 3
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.50,
            y: 0.51,
            width: 0.18,
            height: 0.16,
            rotation: -4
        });


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.70,
            y: 0.54,
            size: 0.20,
            fontFamily: "Montserrat"
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.745,
            nw: 0.93,
            nh: 0.215,
            fill: "rgba(6,16,31,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.055,
            y: 0.775,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       DESIGN 12 — ASYMMETRIC CARD
       ======================================================== */

    if (variant === 11) {

        addLogo({
            images,
            business,
            data,
            palette,
            x: 0.72,
            y: 0.065,
            size: 0.10
        });


        addPhoto({
            images,
            src:
                photos[1 % photos.length],
            x: 0.055,
            y: 0.08,
            width: 0.39,
            height: 0.40,
            rotation: -3
        });


        addPhoto({
            images,
            src:
                photos[2 % photos.length],
            x: 0.47,
            y: 0.11,
            width: 0.18,
            height: 0.16,
            rotation: 5
        });


        texts.push(
            textItem({
                id: 1,
                role: "businessName",
                text: data.name,
                x: 0.055,
                y: 0.525,
                width: 0.85,
                fontScale: 0.12,
                fill: "#FFFFFF",
                fontFamily: "Lora",
                fontStyle: "bold"
            })
        );


        texts.push(
            textItem({
                id: 2,
                role: "tagline",
                text: data.tagline,
                x: 0.06,
                y: 0.675,
                width: 0.63,
                fontScale: 0.044,
                fill: palette[2],
                fontFamily: "Raleway",
                fontStyle: "bold"
            })
        );


        addPromotion({
            images,
            texts,
            data,
            palette,
            variant,
            x: 0.75,
            y: 0.52,
            size: 0.16,
            fontFamily: "Lora"
        });


        blocks.push({
            shape: "rectangle",
            nx: 0.035,
            ny: 0.75,
            nw: 0.93,
            nh: 0.21,
            fill: "rgba(6,15,30,0.50)",
            rotation: 0
        });


        addContacts({
            images,
            texts,
            data,
            accent,
            textColor: "#FFFFFF",
            fontFamily: "Poppins",
            x: 0.055,
            y: 0.78,
            width: 0.60
        });


        addSocialRow({
            images,
            x: 0.70,
            y: 0.875,
            size: 0.035
        });

    }


    /* ========================================================
       REAL BORDER
       ======================================================== */

    const borders = [

        createRealBorder(
            accent,
            secondary,
            variant
        )

    ];


    /* ========================================================
       OTHER CATEGORY — GRADIENT DECORATION
       ======================================================== */

    if (business === "Other") {

        blocks.push({

            shape: "circle",

            nx:
                variant % 2 === 0
                    ? 0.72
                    : 0.05,

            ny:
                variant % 2 === 0
                    ? 0.08
                    : 0.58,

            nw: 0.22,
            nh: 0.22,

            fill:
                "rgba(255,255,255,0.16)",

            rotation: 0

        });


        blocks.push({

            shape: "circle",

            nx:
                variant % 3 === 0
                    ? 0.08
                    : 0.68,

            ny:
                variant % 3 === 0
                    ? 0.50
                    : 0.62,

            nw: 0.12,
            nh: 0.12,

            fill:
                "rgba(255,255,255,0.10)",

            rotation: 0

        });

    }


    /* ========================================================
       NORMALIZE EDITABLE LAYERS
       ======================================================== */

    // Keep the existing template structure, but guarantee that every block
    // and border carries the metadata the editor needs for selection,
    // dragging, resizing, color and transparency editing.
    const parseBlockTransparency = (fill) => {

        if (typeof fill !== "string") return 1;

        const rgba = fill.match(/rgba\(\s*[^,]+\s*,\s*[^,]+\s*,\s*[^,]+\s*,\s*([0-9.]+)\s*\)/i);

        if (rgba) return Number(rgba[1]);

        return 1;
    };

    const normalizedBlocks = blocks.map((block, index) => ({

        ...block,

        id: block.id || `template-${id}-block-${index + 1}`,

        type: block.type || "block",

        role: block.role || "editableBlock",

        editable: block.editable !== false,

        draggable: block.draggable !== false,

        resizable: block.resizable !== false,

        locked: block.locked === true,

        color: block.color || block.fill,

        transparency:
            typeof block.transparency === "number"
                ? block.transparency
                : parseBlockTransparency(block.fill)

    }));

    const normalizedBorders = borders.map((border, index) => ({

        ...border,

        id: border.id || `template-${id}-border-${index + 1}`,

        type: "border",

        role: "border",

        editable: true,
        draggable: true,
        resizable: true,
        locked: false,

        color: border.color || border.stroke,
        stroke: border.stroke || border.color

    }));

    /* ========================================================
       PROMOTIONS AS NATIVE EDITABLE DISCOUNT TAGS
       ======================================================== */

    const discountTags = [];
    const promotionImages = images.filter(item => item.type === "promotion");
    promotionImages.forEach((item, index) => {
        const promotionId = item.promotionId || `discount-${id}-${index + 1}`;
        const mappedShape = ({
            burst: "burst",
            circle: "circle",
            capsule: "rounded",
            ticket: "ticket",
            hex: "hexagon",
            arrow: "ribbon"
        })[item.promotionShape] || "burst";

        const paletteFill = palette[(variantIndex + index) % palette.length];
        const paletteBorder = palette[(variantIndex + index + 1) % palette.length];

        const offerText = texts.find(text => text.id === item.offerTextId);
        discountTags.push({
            id: `${id}-${promotionId}`,
            name: `${data.name} Offer Tag`,
            category: "Promotion",
            shape: mappedShape,
            fill: paletteFill,
            textColor: "#FFFFFF",
            borderColor: paletteBorder,
            text: offerText?.text || data.offer,
            nx: item.nx,
            ny: item.ny,
            nw: item.nw,
            nh: item.nh,
            rotation: item.rotation || 0,
            editable: true,
            draggable: true,
            resizable: true,
            locked: false
        });
    });

    const promotedImageIds = new Set(promotionImages);
    const normalizedImages = images.filter(item => !promotedImageIds.has(item));
    const normalizedTexts = texts.filter(item => item.role !== "offer");

    // Word-Art-compatible headline treatments use the same style property
    // names as the existing WordArtPicker, so the text remains editable.
    const wordArtProfiles = [
        { preset: "Modern Outline", strokeWidth: 0.8, shadowColor: "#020617", shadowBlur: 4, shadowOffsetX: 1, shadowOffsetY: 2, shadowOpacity: 0.28, letterSpacing: 0.2 },
        { preset: "3D Depth", strokeWidth: 1.8, shadowColor: accent, shadowBlur: 7, shadowOffsetX: 3, shadowOffsetY: 4, shadowOpacity: 0.55, letterSpacing: 0 },
        { preset: "Neon Accent", strokeWidth: 1.2, shadowColor: accent, shadowBlur: 15, shadowOffsetX: 0, shadowOffsetY: 0, shadowOpacity: 0.78, letterSpacing: 0.8 },
        { preset: "Elegant Editorial", strokeWidth: 0.4, shadowColor: "#000000", shadowBlur: 3, shadowOffsetX: 0, shadowOffsetY: 2, shadowOpacity: 0.22, letterSpacing: 1.1 },
        { preset: "Promotional Impact", strokeWidth: 1.6, shadowColor: "#111827", shadowBlur: 6, shadowOffsetX: 2, shadowOffsetY: 3, shadowOpacity: 0.5, letterSpacing: 0.1 },
        { preset: "Color Pop", strokeWidth: 1.1, shadowColor: secondary, shadowBlur: 8, shadowOffsetX: 1, shadowOffsetY: 2, shadowOpacity: 0.42, letterSpacing: 0.4 },
        { preset: "Retro Bold", strokeWidth: 2, shadowColor: "#111827", shadowBlur: 0, shadowOffsetX: 3, shadowOffsetY: 3, shadowOpacity: 0.8, letterSpacing: 0.6 },
        { preset: "Playful Lift", strokeWidth: 0.6, shadowColor: accent, shadowBlur: 9, shadowOffsetX: 0, shadowOffsetY: 3, shadowOpacity: 0.42, letterSpacing: 0.2 }
    ];
    const wordArt = wordArtProfiles[variantIndex % wordArtProfiles.length];
    const styledTexts = normalizedTexts.map(item => {
        if (item.role !== "businessName") return item;
        return {
            ...item,
            ...wordArt,
            wordArtPreset: wordArt.preset,
            stroke: item.stroke || secondary,
            strokeWidth: wordArt.strokeWidth
        };
    });

    /* ========================================================
       SIZE SUPPORT
       ======================================================== */

    const template = {

        id,

        name:
            `${data.name} — ${DESIGN_NAMES[variantIndex]}`,

        businessType:
            business,

        style:
            DESIGN_NAMES[variantIndex],

        variant: variantIndex,

        description:
            data.description,

        sizes:
            Object.keys(
                TEMPLATE_SIZES
            ),

        background,

        texts: styledTexts,

        images: normalizedImages,

        discountTags,

        blocks: normalizedBlocks,

        borders: normalizedBorders,

        editing: {

            bordersEditable:
                true,

            contactIconsLinked:
                true,

            discountTagsEditable:
                true,

            blocksEditable:
                true,

            socialIconsReplaceable:
                true

        }

    };


    if (variantIndex >= 12) {
        // Eight extra compositions apply different editorial transforms rather
        // than simply renaming an existing design.
        const mode = variantIndex - 12;

        const mirrorX = item => {
            if (typeof item.nx === "number" && typeof item.nw === "number") {
                item.nx = Math.max(0.015, Math.min(0.985 - item.nw, 1 - item.nx - item.nw));
            }
            if (item.align === "left") item.align = "right";
            else if (item.align === "right") item.align = "left";
            return item;
        };

        const mirrorY = item => {
            if (typeof item.ny === "number" && typeof item.nh === "number") {
                item.ny = Math.max(0.015, Math.min(0.985 - item.nh, 1 - item.ny - item.nh));
            }
            return item;
        };

        const scaleTowardCenter = (item, factor) => {
            if (typeof item.nx === "number" && typeof item.nw === "number") {
                const center = item.nx + item.nw / 2;
                item.nw *= factor;
                item.nx = center - item.nw / 2;
            }
            if (typeof item.ny === "number" && typeof item.nh === "number") {
                const center = item.ny + item.nh / 2;
                item.nh *= factor;
                item.ny = center - item.nh / 2;
            }
            return item;
        };

        const transformLayoutItem = (item, index, kind) => {
            const next = { ...item };

            if ([0, 3, 6].includes(mode)) mirrorX(next);
            else if ([1, 4, 7].includes(mode)) mirrorY(next);
            else { mirrorX(next); mirrorY(next); }

            if ([3, 6].includes(mode)) scaleTowardCenter(next, mode === 3 ? 0.90 : 0.84);
            if (mode === 4 && kind === "image") {
                next.rotation = (Number(next.rotation) || 0) + (index % 2 ? 7 : -7);
                next.ny = Math.min(0.76, Math.max(0.04, (next.ny ?? 0.1) + (index % 2 ? 0.035 : -0.025)));
            }
            if (mode === 5 && kind === "text" && ["businessName", "tagline", "description"].includes(next.role)) {
                next.nx = 0.08;
                next.nw = 0.84;
                next.align = "center";
                if (next.role === "businessName") {
                    next.fontScale = Math.min(0.125, (Number(next.fontScale) || 0.06) * 1.08);
                }
            }
            if (mode === 7 && kind === "image" && !["logo", "social"].includes(next.type)) {
                next.rotation = (Number(next.rotation) || 0) * -1 + (index % 2 ? 5 : -4);
                next.nw = Math.min(0.52, (Number(next.nw) || 0.2) * 1.08);
                next.nx = Math.max(0.02, Math.min(0.98 - next.nw, (Number(next.nx) || 0.1) - 0.02));
            }
            return next;
        };

        template.images = template.images.map((item, index) => {
            const next = transformLayoutItem(item, index, "image");
            if (next.type !== "logo" && next.type !== "social") {
                const alternate = photos[(index + variantIndex + 2) % Math.max(photos.length, 1)];
                if (alternate) next.src = alternate;
            }
            return next;
        });

        template.texts = template.texts.map((item, index) => transformLayoutItem(item, index, "text"));
        template.blocks = template.blocks.map((item, index) => transformLayoutItem(item, index, "block"));
        template.discountTags = (template.discountTags || []).map((item, index) => ({
            ...transformLayoutItem(item, index, "tag"),
            fill: palette[(variantIndex + index) % palette.length],
            borderColor: palette[(variantIndex + index + 1) % palette.length]
        }));

        template.background = {
            ...template.background,
            ...(template.background.type === "business-photo" ? {
                src: backgroundPhotos[(variantIndex + 3) % backgroundPhotos.length],
                color: palette[(variantIndex + 1) % palette.length],
                opacity: [58, 64, 70, 76][variantIndex % 4],
                shape: ["right", "diagonal", "bottom", "wave", "corner", "split", "circle", "left"][mode]
            } : {
                value: [
                    `linear-gradient(135deg, ${palette[2]} 0%, ${palette[0]} 45%, ${palette[3]} 100%)`,
                    `linear-gradient(35deg, ${palette[3]} 0%, ${palette[1]} 50%, ${palette[0]} 100%)`,
                    `linear-gradient(145deg, ${palette[1]} 0%, ${palette[2]} 48%, ${palette[3]} 100%)`
                ][variantIndex % 3]
            })
        };
        template.description = `${template.description} ${DESIGN_NAMES[variantIndex]} composition.`;
    }

    // Keep the three key business-copy elements visually distinct. Some legacy
    // layout families used very tight baselines, especially after mirroring.
    // Only move a line when its estimated text box collides with the previous
    // line, so each composition keeps its original visual direction.
    const primaryRoles = ["businessName", "tagline", "description"];
    const primaryItems = primaryRoles
        .map(role => template.texts.find(item => item.role === role))
        .filter(Boolean)
        .sort((a, b) => Number(a.ny || 0) - Number(b.ny || 0));
    let previousBottom = -1;
    primaryItems.forEach(item => {
        const fontScale = Math.max(0.018, Number(item.fontScale) || 0.035);
        const role = item.role;
        const estimatedHeight = fontScale * (role === "businessName" ? 1.55 : role === "tagline" ? 1.45 : 2.25);
        const originalY = Math.max(0.015, Number(item.ny) || 0.015);
        const nextY = previousBottom >= 0 && originalY < previousBottom + 0.012
            ? previousBottom + 0.012
            : originalY;
        item.ny = Math.min(0.91, nextY);
        previousBottom = item.ny + estimatedHeight;
    });

    return template;

};


/* ============================================================
   GENERATE 300 TEMPLATES
   ============================================================ */

export const templates = [];

let templateNumber = 1;


Object.keys(
    BUSINESS_DATA
).forEach(
    business => {

        for (
            let variant = 0;
            variant < 20;
            variant++
        ) {

            templates.push(

                buildTemplate(
                    business,
                    variant,
                    `template-${templateNumber++}`
                )

            );

        }

    }
);


/* ============================================================
   SAFETY CHECK
   ============================================================ */

if (
    templates.length !== 300
) {

    console.error(
        `AdStudio expected 300 templates but generated ${templates.length}.`
    );

}


/* ============================================================
   DEFAULT EXPORT
   ============================================================ */

export default templates;