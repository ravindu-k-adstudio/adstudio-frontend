
const BUSINESS_TYPES = [
    {
        name: "Restaurant",
        icon: "🍔",
        keywords: "restaurant,food,burger,meal"
    },
    {
        name: "Cafe",
        icon: "☕",
        keywords: "coffee,cafe,latte"
    },
    {
        name: "Fashion",
        icon: "👗",
        keywords: "fashion,clothing,style"
    },
    {
        name: "Photography",
        icon: "📷",
        keywords: "photography,camera,studio"
    },
    {
        name: "Resort",
        icon: "🏝️",
        keywords: "resort,hotel,pool,tropical"
    },
    {
        name: "Fitness",
        icon: "💪",
        keywords: "gym,fitness,workout"
    },
    {
        name: "Beauty",
        icon: "💄",
        keywords: "beauty,skincare,cosmetics"
    },
    {
        name: "Auto",
        icon: "🚗",
        keywords: "car,automotive,luxury"
    },
    {
        name: "Grocery",
        icon: "🥬",
        keywords: "fresh,vegetables,fruit,market"
    },
    {
        name: "Real Estate",
        icon: "🏠",
        keywords: "modern,house,interior,architecture"
    },
    {
        name: "Travel",
        icon: "✈️",
        keywords: "travel,tropical,landscape"
    },
    {
        name: "Education",
        icon: "🎓",
        keywords: "education,books,university"
    }
];

const PHOTO_LAYOUTS = [
    { side: "right", overlay: "light" },
    { side: "right", overlay: "dark" },
    { side: "left", overlay: "light" },
    { side: "left", overlay: "dark" },
    { side: "right", overlay: "warm" },
    { side: "left", overlay: "cool" },
    { side: "right", overlay: "light" },
    { side: "left", overlay: "dark" },
    { side: "right", overlay: "cool" },
    { side: "left", overlay: "warm" },
    { side: "right", overlay: "dark" },
    { side: "left", overlay: "light" }
];

export const BUSINESS_PHOTO_BACKGROUNDS = BUSINESS_TYPES.flatMap(
    (business, categoryIndex) =>
        Array.from({ length: 12 }, (_, index) => {
            const number = index + 1;
            const layout = PHOTO_LAYOUTS[index];

            return {
                id: `business-photo-${categoryIndex + 1}-${String(number).padStart(2, "0")}`,
                name: `${business.name} Photo ${String(number).padStart(2, "0")}`,
                category: business.name,
                icon: business.icon,
                src: `https://loremflickr.com/1200/1200/${encodeURIComponent(business.keywords)}?lock=${categoryIndex * 12 + number}`,
                tags: [
                    business.name.toLowerCase(),
                    "photo",
                    "advertising",
                    "promotion",
                    "business background"
                ],
                layout: layout.side,
                overlay: layout.overlay
            };
        })
);

export const BUSINESS_PHOTO_CATEGORIES = [
    "All",
    ...BUSINESS_TYPES.map(business => business.name)
];

if (BUSINESS_PHOTO_BACKGROUNDS.length !== 144) {
    throw new Error("Business photo library must contain exactly 144 backgrounds.");
}
