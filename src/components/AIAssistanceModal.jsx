// import { useState } from "react";

// const BUSINESS_TYPES = [
//     "Auto-detect",
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
//     "HealthCare",
//     "Construction",
//     "Other"
// ];

// const CANVAS_SIZES = [
//     { value: "square", label: "Square Advertisement" },
//     { value: "portrait", label: "Portrait Poster" },
//     { value: "landscape", label: "Landscape Advertisement" },
//     { value: "instagramPost", label: "Instagram Post" },
//     { value: "instagramStory", label: "Instagram Story" },
//     { value: "facebookCover", label: "Facebook Cover" },
//     { value: "visitingCard", label: "Visiting Card" },
//     { value: "businessCard", label: "Business Card" },
//     { value: "bookmark", label: "Bookmark" }
// ];

// const INITIAL_FORM = {
//     prompt: "",
//     businessType: "Auto-detect",
//     size: "square",
//     businessName: "",
//     tagline: "",
//     description: "",
//     offer: "",
//     phone: "",
//     email: "",
//     address: ""
// };

// export default function AIAssistanceModal({ onClose, onGenerate }) {
//     const [form, setForm] = useState(INITIAL_FORM);
//     const [generating, setGenerating] = useState(false);
//     const [error, setError] = useState("");

//     const updateField = (event) => {
//         const { name, value } = event.target;

//         setForm((previous) => ({
//             ...previous,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError("");

//         if (!form.prompt.trim()) {
//             setError("Please describe the advertisement you want to create.");
//             return;
//         }

//         if (!form.businessName.trim()) {
//             setError("Please enter your business or brand name.");
//             return;
//         }

//         setGenerating(true);

//         try {
//             await onGenerate({
//                 ...form,
//                 prompt: form.prompt.trim(),
//                 businessName: form.businessName.trim()
//             });
//         } catch (err) {
//             setError(err?.message || "Could not generate the design. Please try again.");
//         } finally {
//             setGenerating(false);
//         }
//     };

//     const inputClass =
//         "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

//     const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

//     return (
//         <div
//             className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/65 p-3 sm:p-5"
//             onMouseDown={(event) => {
//                 if (event.target === event.currentTarget && !generating) onClose();
//             }}
//         >
//             <section
//                 role="dialog"
//                 aria-modal="true"
//                 aria-labelledby="ai-assistance-title"
//                 className="flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
//             >
//                 <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-800 px-5 py-5 text-white sm:px-7 sm:py-6">
//                     <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-violet-400/20 blur-3xl" />

//                     <div className="relative flex items-start justify-between gap-4">
//                         <div>
//                             <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-violet-100">
//                                 <span aria-hidden="true">✦</span>
//                                 AdStudio Design Assistant
//                             </div>

//                             <h2 id="ai-assistance-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
//                                 Create your next ad
//                             </h2>

//                             <p className="mt-2 max-w-lg text-sm leading-6 text-indigo-100">
//                                 Describe your idea. We'll match it with an existing AdStudio design
//                                 that you can customize in the editor.
//                             </p>
//                         </div>

//                         <button
//                             type="button"
//                             onClick={onClose}
//                             disabled={generating}
//                             aria-label="Close AI Assistance"
//                             className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-lg transition hover:bg-white/20 disabled:opacity-50"
//                         >
//                             ×
//                         </button>
//                     </div>
//                 </header>

//                 <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
//                     <div className="overflow-y-auto px-5 py-5 sm:px-7">
//                         <div className="mb-5">
//                             <label htmlFor="ai-prompt" className={labelClass}>
//                                 What advertisement do you want? *
//                             </label>

//                             <textarea
//                                 id="ai-prompt"
//                                 name="prompt"
//                                 value={form.prompt}
//                                 onChange={updateField}
//                                 required
//                                 rows={4}
//                                 maxLength={1200}
//                                 placeholder="Example: Create a premium restaurant ad for our weekend special. Highlight our new dishes and a 20% discount. Make it eye-catching and suitable for Instagram."
//                                 className={inputClass + " resize-y"}
//                             />

//                             <p className="mt-1.5 text-xs text-slate-500">
//                                 Include the purpose, promotion, mood, colors, or audience.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                             <div>
//                                 <label htmlFor="ai-business-type" className={labelClass}>
//                                     Business category
//                                 </label>

//                                 <select
//                                     id="ai-business-type"
//                                     name="businessType"
//                                     value={form.businessType}
//                                     onChange={updateField}
//                                     className={inputClass}
//                                 >
//                                     {BUSINESS_TYPES.map((type) => (
//                                         <option key={type} value={type}>
//                                             {type}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div>
//                                 <label htmlFor="ai-size" className={labelClass}>
//                                     Advertisement format
//                                 </label>

//                                 <select
//                                     id="ai-size"
//                                     name="size"
//                                     value={form.size}
//                                     onChange={updateField}
//                                     className={inputClass}
//                                 >
//                                     {CANVAS_SIZES.map((size) => (
//                                         <option key={size.value} value={size.value}>
//                                             {size.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="ai-business-name" className={labelClass}>
//                                     Business or brand name *
//                                 </label>

//                                 <input
//                                     id="ai-business-name"
//                                     name="businessName"
//                                     value={form.businessName}
//                                     onChange={updateField}
//                                     required
//                                     maxLength={100}
//                                     placeholder="e.g. Urban Table"
//                                     className={inputClass}
//                                 />
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="ai-tagline" className={labelClass}>
//                                     Tagline <span className="font-normal text-slate-400">(optional)</span>
//                                 </label>

//                                 <input
//                                     id="ai-tagline"
//                                     name="tagline"
//                                     value={form.tagline}
//                                     onChange={updateField}
//                                     maxLength={160}
//                                     placeholder="e.g. Great food, unforgettable moments"
//                                     className={inputClass}
//                                 />
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="ai-description" className={labelClass}>
//                                     Main message or description
//                                 </label>

//                                 <textarea
//                                     id="ai-description"
//                                     name="description"
//                                     value={form.description}
//                                     onChange={updateField}
//                                     rows={2}
//                                     maxLength={400}
//                                     placeholder="What should customers know about your business?"
//                                     className={inputClass + " resize-y"}
//                                 />
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="ai-offer" className={labelClass}>
//                                     Offer or promotion
//                                 </label>

//                                 <input
//                                     id="ai-offer"
//                                     name="offer"
//                                     value={form.offer}
//                                     onChange={updateField}
//                                     maxLength={100}
//                                     placeholder="e.g. 20% OFF · This Weekend Only"
//                                     className={inputClass}
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="ai-phone" className={labelClass}>
//                                     Phone
//                                 </label>

//                                 <input
//                                     id="ai-phone"
//                                     name="phone"
//                                     value={form.phone}
//                                     onChange={updateField}
//                                     maxLength={40}
//                                     placeholder="Contact number"
//                                     className={inputClass}
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="ai-email" className={labelClass}>
//                                     Email
//                                 </label>

//                                 <input
//                                     id="ai-email"
//                                     name="email"
//                                     type="email"
//                                     value={form.email}
//                                     onChange={updateField}
//                                     maxLength={120}
//                                     placeholder="Business email"
//                                     className={inputClass}
//                                 />
//                             </div>

//                             <div className="sm:col-span-2">
//                                 <label htmlFor="ai-address" className={labelClass}>
//                                     Address or location
//                                 </label>

//                                 <input
//                                     id="ai-address"
//                                     name="address"
//                                     value={form.address}
//                                     onChange={updateField}
//                                     maxLength={180}
//                                     placeholder="Business address"
//                                     className={inputClass}
//                                 />
//                             </div>
//                         </div>

//                         {error && (
//                             <div
//                                 role="alert"
//                                 className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
//                             >
//                                 {error}
//                             </div>
//                         )}

//                         <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm leading-6 text-violet-950">
//                             <strong>How it works:</strong> AdStudio matches your request to an
//                             existing template. You can fine-tune the result in the editor.
//                             This initial version works locally and does not send your prompt
//                             to an external AI service.
//                         </div>
//                     </div>

//                     <footer className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             disabled={generating}
//                             className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
//                         >
//                             Cancel
//                         </button>

//                         <button
//                             type="submit"
//                             disabled={generating}
//                             className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
//                         >
//                             {generating ? (
//                                 <>
//                                     <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
//                                     Preparing your design...
//                                 </>
//                             ) : (
//                                 <>
//                                     <span aria-hidden="true">✦</span>
//                                     Generate My Design
//                                 </>
//                             )}
//                         </button>
//                     </footer>
//                 </form>
//             </section>
//         </div>
//     );
// }

///////////////////////////////

import { useCallback, useEffect, useRef, useState } from "react";

// Keep these values aligned with the businessType values used by templates.
const BUSINESS_TYPES = [
    { value: "Restaurant", label: "Restaurant" },
    { value: "Cafe", label: "Cafe / Coffee Shop" },
    { value: "Fashion", label: "Fashion" },
    { value: "Photography", label: "Photography" },
    { value: "Resort", label: "Resort / Hotel" },
    { value: "Fitness", label: "Fitness / Gym" },
    { value: "Beauty", label: "Beauty / Salon" },
    { value: "Auto", label: "Automotive" },
    { value: "Grocery", label: "Grocery / Supermarket" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Travel", label: "Travel / Tourism" },
    { value: "Education", label: "Education" },
    { value: "HealthCare", label: "Healthcare" },
    { value: "Construction", label: "Construction" },
    { value: "Other", label: "Other business" }
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
    businessType: "Restaurant",
    size: "square",
    businessName: "",
    tagline: "",
    description: "",
    offer: "",
    phone: "",
    email: "",
    address: ""
};

const VOICE_LINE = "Generate your ad, or browse our templates and select your design.";

export default function AIAssistanceModal({ onClose, onGenerate, onOpenTemplates }) {
    const [step, setStep] = useState("home");
    const [form, setForm] = useState(INITIAL_FORM);
    const [generating, setGenerating] = useState(false);
    const [error, setError] = useState("");
    const [voiceAvailable, setVoiceAvailable] = useState(false);
    const speechRef = useRef(null);

    const stopVoice = useCallback(() => {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }, []);

    const speakWelcome = useCallback(() => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(VOICE_LINE);
        utterance.rate = 0.94;
        utterance.pitch = 1.02;
        utterance.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find((voice) => /^en(-|_)/i.test(voice.lang));
        if (englishVoice) utterance.voice = englishVoice;
        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    }, []);

    useEffect(() => {
        const supported = typeof window !== "undefined" && "speechSynthesis" in window;
        setVoiceAvailable(Boolean(supported));
        if (!supported) return undefined;

        // Attempt the welcome narration. Browsers that block autoplay can use the
        // visible speaker button instead.
        const timer = window.setTimeout(() => speakWelcome(), 250);
        return () => {
            window.clearTimeout(timer);
            stopVoice();
        };
    }, [speakWelcome, stopVoice]);

    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((previous) => ({ ...previous, [name]: value }));
    };

    const handleClose = () => {
        stopVoice();
        onClose?.();
    };

    const handleChooseTemplates = () => {
        stopVoice();
        onClose?.();
        onOpenTemplates?.();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!form.businessName.trim()) {
            setError("Please enter your business or brand name.");
            return;
        }

        const selectedType = BUSINESS_TYPES.find((item) => item.value === form.businessType);
        const generatedPrompt = [
            `Create an advertisement for a ${selectedType?.label || form.businessType} business.`,
            form.description.trim(),
            form.tagline.trim() ? `Tagline: ${form.tagline.trim()}.` : "",
            form.offer.trim() ? `Promotion: ${form.offer.trim()}.` : "",
            form.prompt.trim()
        ].filter(Boolean).join(" ");

        setGenerating(true);
        try {
            await onGenerate({
                ...form,
                prompt: generatedPrompt,
                businessName: form.businessName.trim()
            });
        } catch (err) {
            setError(err?.message || "Could not prepare the design. Please try again.");
        } finally {
            setGenerating(false);
        }
    };

    const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100";
    const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600";

    return (
        <div
            className="adstudio-ai-overlay fixed inset-0 z-[100000] flex items-end justify-center bg-slate-950/55 backdrop-blur-[3px] p-0 sm:items-center sm:p-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) handleClose();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="ai-assistance-title"
                className={`adstudio-ai-panel flex w-full flex-col overflow-hidden border border-white/70 bg-white shadow-2xl sm:rounded-3xl ${step === "home" ? "max-h-[52dvh] sm:max-h-[min(520px,72vh)] sm:max-w-md" : "max-h-[54dvh] sm:max-h-[min(680px,78vh)] sm:max-w-xl"
                    } rounded-t-3xl sm:rounded-3xl`}
            >
                <header className="relative shrink-0 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-800 px-4 py-3.5 text-white sm:px-6 sm:py-4">
                    <div className="adstudio-ai-orb pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-violet-400/25 blur-3xl" />
                    <div className="relative flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <div className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-100">
                                <span aria-hidden="true">✦</span> AdStudio Assistant
                            </div>
                            <h2 id="ai-assistance-title" className="text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
                                {step === "home" ? "Let’s create your next ad" : "Tell us a little about your ad"}
                            </h2>
                            <p className="mt-1 text-xs leading-5 text-indigo-100 sm:text-sm">
                                {step === "home" ? "Choose the easiest way to get started." : "No prompt-writing needed — fill in what you know."}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={handleClose}
                            aria-label="Close assistant"
                            className="flex h-10 min-h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-2xl leading-none text-white transition hover:rotate-90 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            ×
                        </button>
                    </div>
                </header>

                {step === "home" ? (
                    <div className="adstudio-ai-home-body flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4 sm:p-5">
                        <div className="rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-indigo-50 p-3.5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm" aria-hidden="true">✦</div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-bold text-slate-900">Need a quick guide?</p>
                                    <p className="mt-0.5 text-xs leading-5 text-slate-600">{VOICE_LINE}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={speakWelcome}
                                    disabled={!voiceAvailable}
                                    aria-label="Play assistant voice guide"
                                    title={voiceAvailable ? "Play voice guide" : "Voice playback is not supported in this browser"}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-700 text-white shadow-md transition hover:scale-105 hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <span aria-hidden="true" className="text-lg">{voiceAvailable ? "🔊" : "🔇"}</span>
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => { stopVoice(); setError(""); setStep("questionnaire"); }}
                            className="group flex w-full items-center gap-3 rounded-2xl border border-violet-200 bg-white p-3.5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-50 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-violet-100"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 text-xl text-white shadow-md transition group-hover:scale-105" aria-hidden="true">✦</span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-sm font-extrabold text-slate-900">AI Generate</span>
                                <span className="mt-0.5 block text-xs leading-5 text-slate-500">Answer a few simple questions and get a ready-to-edit design.</span>
                            </span>
                            <span className="text-xl text-violet-600 transition group-hover:translate-x-1" aria-hidden="true">›</span>
                        </button>

                        <button
                            type="button"
                            onClick={handleChooseTemplates}
                            className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-100"
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-xl text-white shadow-md transition group-hover:scale-105" aria-hidden="true">▦</span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-sm font-extrabold text-slate-900">Select Template Design</span>
                                <span className="mt-0.5 block text-xs leading-5 text-slate-500">Browse the template library and choose a design yourself.</span>
                            </span>
                            <span className="text-xl text-indigo-600 transition group-hover:translate-x-1" aria-hidden="true">›</span>
                        </button>
                        <button type="button" onClick={handleClose} className="mt-auto w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50">
                            Close assistant
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
                        <div className="min-h-0 flex-1 space-y-3.5 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="ai-business-type" className={labelClass}>Business type</label>
                                    <select id="ai-business-type" name="businessType" value={form.businessType} onChange={updateField} className={inputClass}>
                                        {BUSINESS_TYPES.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="ai-size" className={labelClass}>Ad format</label>
                                    <select id="ai-size" name="size" value={form.size} onChange={updateField} className={inputClass}>
                                        {CANVAS_SIZES.map((size) => <option key={size.value} value={size.value}>{size.label}</option>)}
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="ai-business-name" className={labelClass}>Business or brand name <span className="normal-case font-medium text-slate-400">(required)</span></label>
                                    <input id="ai-business-name" name="businessName" value={form.businessName} onChange={updateField} required maxLength={100} placeholder="e.g. Urban Table" className={inputClass} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="ai-tagline" className={labelClass}>Tagline <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <input id="ai-tagline" name="tagline" value={form.tagline} onChange={updateField} maxLength={160} placeholder="e.g. Great food, unforgettable moments" className={inputClass} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="ai-description" className={labelClass}>What are you promoting? <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <textarea id="ai-description" name="description" value={form.description} onChange={updateField} rows={2} maxLength={400} placeholder="e.g. New arrivals, weekend brunch, a service, or a special event" className={inputClass + " resize-y"} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="ai-offer" className={labelClass}>Offer or promotion <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <input id="ai-offer" name="offer" value={form.offer} onChange={updateField} maxLength={100} placeholder="e.g. 20% off this weekend" className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="ai-phone" className={labelClass}>Phone <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <input id="ai-phone" name="phone" value={form.phone} onChange={updateField} maxLength={40} placeholder="Contact number" className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="ai-email" className={labelClass}>Email <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <input id="ai-email" name="email" type="email" value={form.email} onChange={updateField} maxLength={120} placeholder="Business email" className={inputClass} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="ai-address" className={labelClass}>Address or location <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <input id="ai-address" name="address" value={form.address} onChange={updateField} maxLength={180} placeholder="Business address" className={inputClass} />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="ai-extra-prompt" className={labelClass}>Extra design notes <span className="normal-case font-medium text-slate-400">(optional)</span></label>
                                    <textarea id="ai-extra-prompt" name="prompt" value={form.prompt} onChange={updateField} rows={2} maxLength={1200} placeholder="Optional: colors, mood, audience, or anything else. You can leave this blank." className={inputClass + " resize-y"} />
                                </div>
                            </div>
                            {error && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">{error}</div>}
                            <p className="rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs leading-5 text-slate-500">We’ll match your details to an existing AdStudio template. The result stays editable in the normal editor; no external AI service is used.</p>
                        </div>
                        <footer className="flex shrink-0 gap-2 border-t border-slate-100 bg-white px-4 py-3 sm:px-6">
                            <button type="button" onClick={() => { setError(""); setStep("home"); }} className="rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Back</button>
                            <button type="button" onClick={handleClose} className="rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Close</button>
                            <button type="submit" disabled={generating} className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-3 py-2.5 text-sm font-extrabold text-white shadow-md transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70">
                                {generating ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />Preparing…</> : <>✦ Generate my ad</>}
                            </button>
                        </footer>
                    </form>
                )}
            </section>
            <style>{`
                .adstudio-ai-overlay { animation: adstudio-ai-fade-in 180ms ease-out both; }
                .adstudio-ai-panel { animation: adstudio-ai-panel-in 260ms cubic-bezier(.2,.8,.2,1) both; }
                .adstudio-ai-orb { animation: adstudio-ai-orb-float 6s ease-in-out infinite alternate; }
                @keyframes adstudio-ai-fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes adstudio-ai-panel-in { from { opacity: 0; transform: translateY(18px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
                @keyframes adstudio-ai-orb-float { from { transform: translate(0,0) scale(1); } to { transform: translate(-10px,10px) scale(1.12); } }
                @media (prefers-reduced-motion: reduce) { .adstudio-ai-overlay, .adstudio-ai-panel, .adstudio-ai-orb { animation: none !important; } }
            `}</style>
        </div>
    );
}
