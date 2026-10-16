/**
 * AdStudio — Local AI-style design assistant
 *
 * This version uses your existing template library.
 * It does not call an external AI API or require an API key.
 */

const BUSINESS_KEYWORDS = {
    Restaurant: ["restaurant", "food", "meal", "dining", "menu", "burger", "pizza", "chef"],
    Cafe: ["cafe", "coffee", "tea", "bakery", "dessert", "cake", "brunch"],
    Fashion: ["fashion", "clothing", "clothes", "boutique", "dress", "outfit", "apparel"],
    Photography: ["photography", "photographer", "photo", "portrait", "wedding shoot"],
    Resort: ["resort", "hotel", "holiday", "vacation", "accommodation", "stay"],
    Fitness: ["fitness", "gym", "workout", "training", "yoga", "health club"],
    Beauty: ["beauty", "salon", "hair", "spa", "skincare", "makeup", "nails"],
    Auto: ["auto", "car", "vehicle", "garage", "automotive", "tyre", "repair"],
    Grocery: ["grocery", "supermarket", "groceries", "vegetables", "fresh produce"],
    "Real Estate": ["real estate", "property", "house", "apartment", "land", "rent"],
    Travel: ["travel", "tour", "tourism", "trip", "adventure", "destination"],
    Education: ["education", "school", "course", "class", "academy", "learning", "tuition"],
    Other: ["business", "promotion", "product", "service", "sale", "launch"]
};

const STYLE_KEYWORDS = {
    minimal: ["minimal", "minimalist", "simple", "clean", "spacious"],
    elegant: ["elegant", "luxury", "luxurious", "premium", "sophisticated", "upscale"],
    bold: ["bold", "strong", "powerful", "striking", "attention-grabbing"],
    modern: ["modern", "contemporary", "professional", "corporate"],
    playful: ["playful", "fun", "friendly", "colorful", "cheerful"],
    editorial: ["editorial", "magazine", "fashionable", "artistic"]
};

const normalize = (value = "") =>
    String(value).toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();

function inferBusinessType(prompt = "") {
    const normalizedPrompt = normalize(prompt);
    let bestType = "Other";
    let bestScore = 0;

    for (const [type, keywords] of Object.entries(BUSINESS_KEYWORDS)) {
        const score = keywords.reduce(
            (total, keyword) =>
                total + (normalizedPrompt.includes(normalize(keyword)) ? 1 : 0),
            0
        );

        if (score > bestScore) {
            bestScore = score;
            bestType = type;
        }
    }

    return bestType;
}

function scoreTemplate(template, prompt, preferredBusinessType) {
    const normalizedPrompt = normalize(prompt);
    const templateDescription = normalize(
        `${template.name || ""} ${template.style || ""} ${template.description || ""} ${template.businessType || ""}`
    );

    let score = 0;

    if (template.businessType === preferredBusinessType) score += 100;

    for (const keywords of Object.values(STYLE_KEYWORDS)) {
        const matched = keywords.some((word) => normalizedPrompt.includes(word));

        if (matched) {
            for (const word of keywords) {
                if (normalizedPrompt.includes(word) && templateDescription.includes(word)) {
                    score += 8;
                }
            }
        }
    }

    const promptWords = normalizedPrompt.split(" ").filter((word) => word.length > 3);

    for (const word of promptWords) {
        if (templateDescription.includes(word)) score += 2;
    }

    return score;
}

/**
 * Returns a matching existing template.
 *
 * @param {Object} options
 * @param {Array} options.templates Existing AdStudio templates
 * @param {string} options.prompt User's design description
 * @param {string} options.businessType Selected category or "Auto-detect"
 * @param {string} options.size Requested canvas size
 */
export function recommendTemplate({
    templates = [],
    prompt = "",
    businessType = "Auto-detect",
    size = "square"
}) {
    if (!Array.isArray(templates) || templates.length === 0) {
        throw new Error("AdStudio's template library is empty.");
    }

    const requestedType =
        businessType && businessType !== "Auto-detect" && businessType !== "All"
            ? businessType
            : inferBusinessType(prompt);

    const matchingTemplates = templates.filter(
        (template) => template.businessType === requestedType
    );

    const candidates =
        matchingTemplates.length > 0 ? matchingTemplates : templates;

    const ranked = candidates
        .map((template) => ({
            template,
            score: scoreTemplate(template, prompt, requestedType)
        }))
        .sort((a, b) => b.score - a.score);

    // Prefer a variety of existing design variants rather than always
    // returning the first template when multiple templates score equally.
    const highestScore = ranked[0].score;
    const tied = ranked.filter((item) => item.score === highestScore);
    const selected = tied[Math.floor(Math.random() * tied.length)].template;

    return {
        ...selected,
        selectedSize: size || "square"
    };
}

export { inferBusinessType };
