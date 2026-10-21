
const PHOTO_SETS = [
    {
        category: "Beauty & Salon",
        icon: "✂️",
        photos: [
            "photo-1560066984-138dadb4c035",
            "photo-1521590832167-7bcbfaa6381f",
            "photo-1633681926022-84c23e8cb2d8",
            "photo-1600948836101-f9ffda59d250",
        ],
    },
    {
        category: "Restaurant & Cafe",
        icon: "🍽️",
        photos: [
            "photo-1517248135467-4c7edcad34c4",
            "photo-1414235077428-338989a2e8c0",
            "photo-1559339352-11d035aa65de",
            "photo-1552566626-52f8b828add9",
        ],
    },
    {
        category: "Fitness & Gym",
        icon: "💪",
        photos: [
            "photo-1534438327276-14e5300c3a48",
            "photo-1534258936925-c58bed479fcb",
            "photo-1517836357463-d25dfeac3438",
            "photo-1571902943202-507ec2618e8f",
        ],
    },
    {
        category: "Real Estate",
        icon: "🏠",
        photos: [
            "photo-1600210492486-724fe5c67fb0",
            "photo-1600607687939-ce8a6c25118c",
            "photo-1600566753086-00f18fb6b3ea",
            "photo-1600585154340-be6161a56a0c",
        ],
    },
    {
        category: "Fashion & Clothing",
        icon: "👗",
        photos: [
            "photo-1483985988355-763728e1935b",
            "photo-1490481651871-ab68de25d43d",
            "photo-1485230895905-ec40ba36b9bc",
            "photo-1441986300917-64674bd600d8",
        ],
    },
    {
        category: "Technology",
        icon: "💻",
        photos: [
            "photo-1498050108023-c5249f4df085",
            "photo-1519389950473-47ba0277781c",
            "photo-1518770660439-4636190af475",
            "photo-1521737711867-e3b97375f902",
        ],
    },
    {
        category: "Travel & Tourism",
        icon: "✈️",
        photos: [
            "photo-1464822759023-fed622ff2c3b",
            "photo-1500530855697-b586d89ba3ee",
            "photo-1476514525535-07fb3b4ae5f1",
            "photo-1501785888041-af3ef285b470",
        ],
    },
    {
        category: "Education",
        icon: "📚",
        photos: [
            "photo-1523050854058-8df90110c9f1",
            "photo-1503676260728-1c00da094a0b",
            "photo-1509062522246-3755977927d7",
            "photo-1427504494785-3a9ca7044f45",
        ],
    },
    {
        category: "Healthcare",
        icon: "🩺",
        photos: [
            "photo-1576091160399-112ba8d25d1d",
            "photo-1559757175-0eb30cd8c063",
            "photo-1584982751601-97dcc096659c",
            "photo-1579684385127-1ef15d508118",
        ],
    },
    {
        category: "Automotive",
        icon: "🚗",
        photos: [
            "photo-1492144534655-ae79c964c9d7",
            "photo-1503376780353-7e6692767b70",
            "photo-1489824904134-891ab64532f1",
            "photo-1511919884226-fd3cad34687c",
        ],
    },
    {
        category: "Construction",
        icon: "🏗️",
        photos: [
            "photo-1504307651254-35680f356dfd",
            "photo-1503387762-592deb58ef4e",
            "photo-1541888946425-d81bb19240f5",
            "photo-1486406146926-c627a92ad1ab",
        ],
    },
    {
        category: "Photography & Events",
        icon: "📸",
        photos: [
            "photo-1492684223066-81342ee5ff30",
            "photo-1519741497674-611481863552",
            "photo-1507504031003-b417219a0fde",
            "photo-1511578314322-379afb476865",
        ],
    },
];

const SHAPES = [
    { id: "left", name: "Left Panel" },
    { id: "right", name: "Right Panel" },
    { id: "diagonal", name: "Diagonal" },
    { id: "curve", name: "Curved" },
    { id: "circle", name: "Circle" },
    { id: "bottom", name: "Bottom Fade" },
    { id: "top", name: "Top Panel" },
    { id: "split", name: "Split Panels" },
    { id: "corner", name: "Corner Accent" },
    { id: "wave", name: "Wave" },
    { id: "full", name: "Full Tint" },
    { id: "minimal", name: "Minimal Accent" },
];

const COLORS = [
    "#FFFFFF",
    "#111827",
    "#F5C542",
    "#EF4444",
    "#2563EB",
    "#16A34A",
    "#9333EA",
    "#F97316",
    "#0F766E",
    "#EC4899",
    "#7C3AED",
    "#000000",
];

const DEFAULT_COLORS = [
    "#FFFFFF",
    "#111827",
    "#F5C542",
    "#FFFFFF",
    "#111827",
    "#FFFFFF",
    "#0F766E",
    "#FFFFFF",
    "#111827",
    "#F5C542",
    "#FFFFFF",
    "#111827",
];

const escapeUrl = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

export const BUSINESS_PHOTO_CATEGORIES = PHOTO_SETS.map(
    ({ category, icon }) => ({ category, icon })
);

export const BUSINESS_PHOTO_SHAPES = SHAPES;

export const BUSINESS_PHOTO_COLORS = COLORS;

export const BUSINESS_PHOTO_BACKGROUNDS = PHOTO_SETS.flatMap(
    (group, categoryIndex) =>
        Array.from({ length: 12 }, (_, designIndex) => {
            const shape = SHAPES[designIndex];
            const photoId = group.photos[designIndex % group.photos.length];

            return {
                id: `business-photo-${categoryIndex + 1}-${designIndex + 1}`,
                name: `${group.category} — ${shape.name}`,
                category: group.category,
                icon: group.icon,
                src: escapeUrl(photoId),
                shape: shape.id,
                color: DEFAULT_COLORS[categoryIndex],
                opacity: 88,
                layout: ["right", "left"].includes(shape.id) ? shape.id : "left",
                overlay: "custom",
                keywords: [
                    group.category.toLowerCase(),
                    shape.name.toLowerCase(),
                    "business",
                    "photo background",
                ],
                tags: [group.category, shape.name],
            };
        })
);

export default BUSINESS_PHOTO_BACKGROUNDS;
