import { useState } from "react";

const BUSINESS_TYPES = [
    "Auto-detect",
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
    "HealthCare",
    "Construction",
    "Other"
];

const CANVAS_SIZES = [
    { value: "square", label: "Square Advertisement" },
    { value: "portrait", label: "Portrait Poster" },
    { value: "landscape", label: "Landscape Advertisement" },
    { value: "instagramPost", label: "Instagram Post" },
    { value: "instagramStory", label: "Instagram Story" },
    { value: "facebookCover", label: "Facebook Cover" },
    { value: "visitingCard", label: "Visiting Card" },
    { value: "businessCard", label: "Business Card" },
    { value: "bookmark", label: "Bookmark" }
];

const INITIAL_FORM = {
    prompt: "",
    businessType: "Auto-detect",
    size: "square",
    businessName: "",
    tagline: "",
    description: "",
    offer: "",
    phone: "",
    email: "",
    address: ""
};

export default function AIAssistanceModal({ onClose, onGenerate }) {
    const [form, setForm] = useState(INITIAL_FORM);
    const [generating, setGenerating] = useState(false);
    const [error, setError] = useState("");

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!form.prompt.trim()) {
            setError("Please describe the advertisement you want to create.");
            return;
        }

        if (!form.businessName.trim()) {
            setError("Please enter your business or brand name.");
            return;
        }

        setGenerating(true);

        try {
            await onGenerate({
                ...form,
                prompt: form.prompt.trim(),
                businessName: form.businessName.trim()
            });
        } catch (err) {
            setError(err?.message || "Could not generate the design. Please try again.");
        } finally {
            setGenerating(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

    const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

    return (
        <div
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/65 p-3 sm:p-5"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget && !generating) onClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="ai-assistance-title"
                className="flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
                <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-800 px-5 py-5 text-white sm:px-7 sm:py-6">
                    <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-violet-400/20 blur-3xl" />

                    <div className="relative flex items-start justify-between gap-4">
                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
                                <span aria-hidden="true">✦</span>
                                AdStudio Design Assistant
                            </div>

                            <h2 id="ai-assistance-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Create your next ad
                            </h2>

                            <p className="mt-2 max-w-lg text-sm leading-6 text-indigo-100">
                                Describe your idea. We'll match it with an existing AdStudio design
                                that you can customize in the editor.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={generating}
                            aria-label="Close AI Assistance"
                            className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-lg transition hover:bg-white/20 disabled:opacity-50"
                        >
                            ×
                        </button>
                    </div>
                </header>

                <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
                    <div className="overflow-y-auto px-5 py-5 sm:px-7">
                        <div className="mb-5">
                            <label htmlFor="ai-prompt" className={labelClass}>
                                What advertisement do you want? *
                            </label>

                            <textarea
                                id="ai-prompt"
                                name="prompt"
                                value={form.prompt}
                                onChange={updateField}
                                required
                                rows={4}
                                maxLength={1200}
                                placeholder="Example: Create a premium restaurant ad for our weekend special. Highlight our new dishes and a 20% discount. Make it eye-catching and suitable for Instagram."
                                className={inputClass + " resize-y"}
                            />

                            <p className="mt-1.5 text-xs text-slate-500">
                                Include the purpose, promotion, mood, colors, or audience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="ai-business-type" className={labelClass}>
                                    Business category
                                </label>

                                <select
                                    id="ai-business-type"
                                    name="businessType"
                                    value={form.businessType}
                                    onChange={updateField}
                                    className={inputClass}
                                >
                                    {BUSINESS_TYPES.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="ai-size" className={labelClass}>
                                    Advertisement format
                                </label>

                                <select
                                    id="ai-size"
                                    name="size"
                                    value={form.size}
                                    onChange={updateField}
                                    className={inputClass}
                                >
                                    {CANVAS_SIZES.map((size) => (
                                        <option key={size.value} value={size.value}>
                                            {size.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="ai-business-name" className={labelClass}>
                                    Business or brand name *
                                </label>

                                <input
                                    id="ai-business-name"
                                    name="businessName"
                                    value={form.businessName}
                                    onChange={updateField}
                                    required
                                    maxLength={100}
                                    placeholder="e.g. Urban Table"
                                    className={inputClass}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="ai-tagline" className={labelClass}>
                                    Tagline <span className="font-normal text-slate-400">(optional)</span>
                                </label>

                                <input
                                    id="ai-tagline"
                                    name="tagline"
                                    value={form.tagline}
                                    onChange={updateField}
                                    maxLength={160}
                                    placeholder="e.g. Great food, unforgettable moments"
                                    className={inputClass}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="ai-description" className={labelClass}>
                                    Main message or description
                                </label>

                                <textarea
                                    id="ai-description"
                                    name="description"
                                    value={form.description}
                                    onChange={updateField}
                                    rows={2}
                                    maxLength={400}
                                    placeholder="What should customers know about your business?"
                                    className={inputClass + " resize-y"}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="ai-offer" className={labelClass}>
                                    Offer or promotion
                                </label>

                                <input
                                    id="ai-offer"
                                    name="offer"
                                    value={form.offer}
                                    onChange={updateField}
                                    maxLength={100}
                                    placeholder="e.g. 20% OFF · This Weekend Only"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label htmlFor="ai-phone" className={labelClass}>
                                    Phone
                                </label>

                                <input
                                    id="ai-phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={updateField}
                                    maxLength={40}
                                    placeholder="Contact number"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label htmlFor="ai-email" className={labelClass}>
                                    Email
                                </label>

                                <input
                                    id="ai-email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={updateField}
                                    maxLength={120}
                                    placeholder="Business email"
                                    className={inputClass}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="ai-address" className={labelClass}>
                                    Address or location
                                </label>

                                <input
                                    id="ai-address"
                                    name="address"
                                    value={form.address}
                                    onChange={updateField}
                                    maxLength={180}
                                    placeholder="Business address"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {error && (
                            <div
                                role="alert"
                                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            >
                                {error}
                            </div>
                        )}

                        <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm leading-6 text-violet-950">
                            <strong>How it works:</strong> AdStudio matches your request to an
                            existing template. You can fine-tune the result in the editor.
                            This initial version works locally and does not send your prompt
                            to an external AI service.
                        </div>
                    </div>

                    <footer className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={generating}
                            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={generating}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
                        >
                            {generating ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                    Preparing your design...
                                </>
                            ) : (
                                <>
                                    <span aria-hidden="true">✦</span>
                                    Generate My Design
                                </>
                            )}
                        </button>
                    </footer>
                </form>
            </section>
        </div>
    );
}
