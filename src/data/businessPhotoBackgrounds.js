
// const BUSINESS_TYPES = [
//     {
//         name: "Restaurant",
//         icon: "🍔",
//         keywords: "restaurant,food,burger,meal"
//     },
//     {
//         name: "Cafe",
//         icon: "☕",
//         keywords: "coffee,cafe,latte"
//     },
//     {
//         name: "Fashion",
//         icon: "👗",
//         keywords: "fashion,clothing,style"
//     },
//     {
//         name: "Photography",
//         icon: "📷",
//         keywords: "photography,camera,studio"
//     },
//     {
//         name: "Resort",
//         icon: "🏝️",
//         keywords: "resort,hotel,pool,tropical"
//     },
//     {
//         name: "Fitness",
//         icon: "💪",
//         keywords: "gym,fitness,workout"
//     },
//     {
//         name: "Beauty",
//         icon: "💄",
//         keywords: "beauty,skincare,cosmetics"
//     },
//     {
//         name: "Auto",
//         icon: "🚗",
//         keywords: "car,automotive,luxury"
//     },
//     {
//         name: "Grocery",
//         icon: "🥬",
//         keywords: "fresh,vegetables,fruit,market"
//     },
//     {
//         name: "Real Estate",
//         icon: "🏠",
//         keywords: "modern,house,interior,architecture"
//     },
//     {
//         name: "Travel",
//         icon: "✈️",
//         keywords: "travel,tropical,landscape"
//     },
//     {
//         name: "Education",
//         icon: "🎓",
//         keywords: "education,books,university"
//     }
// ];

// const PHOTO_LAYOUTS = [
//     { side: "right", overlay: "light" },
//     { side: "right", overlay: "dark" },
//     { side: "left", overlay: "light" },
//     { side: "left", overlay: "dark" },
//     { side: "right", overlay: "warm" },
//     { side: "left", overlay: "cool" },
//     { side: "right", overlay: "light" },
//     { side: "left", overlay: "dark" },
//     { side: "right", overlay: "cool" },
//     { side: "left", overlay: "warm" },
//     { side: "right", overlay: "dark" },
//     { side: "left", overlay: "light" }
// ];

// export const BUSINESS_PHOTO_BACKGROUNDS = BUSINESS_TYPES.flatMap(
//     (business, categoryIndex) =>
//         Array.from({ length: 12 }, (_, index) => {
//             const number = index + 1;
//             const layout = PHOTO_LAYOUTS[index];

//             return {
//                 id: `business-photo-${categoryIndex + 1}-${String(number).padStart(2, "0")}`,
//                 name: `${business.name} Photo ${String(number).padStart(2, "0")}`,
//                 category: business.name,
//                 icon: business.icon,
//                 src: `https://loremflickr.com/1200/1200/${encodeURIComponent(business.keywords)}?lock=${categoryIndex * 12 + number}`,
//                 tags: [
//                     business.name.toLowerCase(),
//                     "photo",
//                     "advertising",
//                     "promotion",
//                     "business background"
//                 ],
//                 layout: layout.side,
//                 overlay: layout.overlay
//             };
//         })
// );

// export const BUSINESS_PHOTO_CATEGORIES = [
//     "All",
//     ...BUSINESS_TYPES.map(business => business.name)
// ];

// if (BUSINESS_PHOTO_BACKGROUNDS.length !== 144) {
//     throw new Error("Business photo library must contain exactly 144 backgrounds.");
// }
/////////////////////////////////////////


const PHOTO_BASE = "https://images.unsplash.com/";

const BUSINESS_TYPES = [
    {
        name: "Restaurant",
        icon: "🍽️",
        keywords: ["restaurant", "food", "dining", "menu"],
        photos: [
            "photo-1555939594-58d7cb561ad1",
            "photo-1414235077428-338989a2e8c0",
            "photo-1517248135467-4c7edcad34c4",
            "photo-1504674900247-0877df9cc836",
        ],
    },
    {
        name: "Cafe",
        icon: "☕",
        keywords: ["coffee", "cafe", "latte", "bakery"],
        photos: [
            "photo-1501339847302-ac426a4a7cbb",
            "photo-1445116572660-236099ec97a0",
            "photo-1495474472287-4d71bcdd2085",
            "photo-1509042239860-f550ce710b93",
        ],
    },
    {
        name: "Fashion",
        icon: "👗",
        keywords: ["fashion", "clothing", "style", "boutique"],
        photos: [
            "photo-1483985988355-763728e1935b",
            "photo-1490481651871-ab68de25d43d",
            "photo-1445205170230-053b83016050",
            "photo-1487222477894-8943e31ef7b2",
        ],
    },
    {
        name: "Photography",
        icon: "📷",
        keywords: ["photography", "camera", "portrait", "studio"],
        photos: [
            "photo-1516035069371-29a1b244cc32",
            "photo-1452587925148-ce544e77e70d",
            "photo-1502982720700-bfff97f2ecac",
            "photo-1542038784456-1ea8e935640e",
        ],
    },
    {
        name: "Resort",
        icon: "🏝️",
        keywords: ["resort", "hotel", "pool", "holiday"],
        photos: [
            "photo-1571896349842-33c89424de2d",
            "photo-1571003123894-1f0594d2b5d9",
            "photo-1566073771259-6a8506099945",
            "photo-1582719508461-905c673771fd",
        ],
    },
    {
        name: "Fitness",
        icon: "💪",
        keywords: ["fitness", "gym", "training", "workout"],
        photos: [
            "photo-1534438327276-14e5300c3a48",
            "photo-1534258936925-c58bed479fcb",
            "photo-1517836357463-d25dfeac3438",
            "photo-1518611012118-696072aa579a",
        ],
    },
    {
        name: "Beauty",
        icon: "💄",
        keywords: ["beauty", "skincare", "cosmetics", "salon"],
        photos: [
            "photo-1596462502278-27bfdc403348",
            "photo-1570172619644-dfd03ed5d881",
            "photo-1608248543803-ba4f8c70ae0b",
            "photo-1522335789203-aabd1fc54bc9",
        ],
    },
    {
        name: "Auto",
        icon: "🚗",
        keywords: ["automotive", "car", "vehicle", "garage"],
        photos: [
            "photo-1492144534655-ae79c964c9d7",
            "photo-1503376780353-7e6692767b70",
            "photo-1549317661-bd32c8ce0db2",
            "photo-1489824904134-891ab64532f1",
        ],
    },
    {
        name: "Grocery",
        icon: "🥬",
        keywords: ["grocery", "fresh food", "fruit", "vegetables"],
        photos: [
            "photo-1542838132-92c53300491e",
            "photo-1540420773420-3366772f4999",
            "photo-1518843875459-f738682238a6",
            "photo-1490645935967-10de6ba17061",
        ],
    },
    {
        name: "Real Estate",
        icon: "🏠",
        keywords: ["real estate", "house", "interior", "property"],
        photos: [
            "photo-1600596542815-ffad4c1539a9",
            "photo-1600607687939-ce8a6c25118c",
            "photo-1600566753086-00f18fb6b3ea",
            "photo-1600607687920-4e2a09cf159d",
        ],
    },
    {
        name: "Travel",
        icon: "✈️",
        keywords: ["travel", "adventure", "landscape", "destination"],
        photos: [
            "photo-1464822759023-fed622ff2c3b",
            "photo-1501785888041-af3ef285b470",
            "photo-1476514525535-07fb3b4ae5f1",
            "photo-1500530855697-b586d89ba3ee",
        ],
    },
    {
        name: "Education",
        icon: "🎓",
        keywords: ["education", "books", "learning", "school"],
        photos: [
            "photo-1503676260728-1c00da094a0b",
            "photo-1523050854058-8df90110c9f1",
            "photo-1509062522246-3755977927d7",
            "photo-1427504494785-3a9ca7044f45",
        ],
    },
];

const LAYOUTS = [
    { side: "right", overlay: "light" },
    { side: "left", overlay: "light" },
    { side: "right", overlay: "dark" },
    { side: "left", overlay: "dark" },
    { side: "right", overlay: "warm" },
    { side: "left", overlay: "warm" },
    { side: "right", overlay: "cool" },
    { side: "left", overlay: "cool" },
    { side: "right", overlay: "soft" },
    { side: "left", overlay: "soft" },
    { side: "right", overlay: "minimal" },
    { side: "left", overlay: "minimal" },
];

export const BUSINESS_PHOTO_CATEGORIES = [
    "All",
    ...BUSINESS_TYPES.map((business) => business.name),
];

export const BUSINESS_PHOTO_BACKGROUNDS = BUSINESS_TYPES.flatMap(
    (business, categoryIndex) =>
        LAYOUTS.map((layout, index) => ({
            id: `business-photo-${categoryIndex + 1}-${String(index + 1).padStart(2, "0")}`,
            name: `${business.name} Photo ${String(index + 1).padStart(2, "0")}`,
            category: business.name,
            icon: business.icon,
            keywords: business.keywords,
            src: `${PHOTO_BASE}${business.photos[index % business.photos.length]}?auto=format&fit=crop&w=1600&q=85`,
            layout: layout.side,
            overlay: layout.overlay,
            tags: [
                business.name.toLowerCase(),
                ...business.keywords,
                "photo",
                "advertising",
                "promotion",
            ],
        })),
);

if (BUSINESS_PHOTO_BACKGROUNDS.length !== 144) {
    throw new Error("Business photo library must contain exactly 144 backgrounds.");
}
