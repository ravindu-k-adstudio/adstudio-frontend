
import { useEffect, useState } from "react";
import {
    FaTimes,
    FaQuestionCircle,
    FaBookOpen,
    FaPlayCircle,
    FaVideo,
    FaLightbulb,
    FaChevronRight,
    FaSearch,
    FaCheckCircle,
} from "react-icons/fa";

// =====================================================
// DOCUMENTATION
// Add or edit documentation items in this array.
// =====================================================
const HELP_DOCUMENTATION = [
    {
        id: "ad-size",
        icon: "📐",
        title: "Ad Size",
        subtitle: "Choose the perfect size for your design",
        steps: [
            "Open the Ad Size control in the editor.",
            "Choose the advertisement or poster size you need.",
            "Check your design after changing the dimensions.",
        ],
    },
    {
        id: "language",
        icon: "🌐",
        title: "Change Language",
        subtitle: "Use your preferred language",
        steps: [
            "Open the language selection control.",
            "Choose your preferred language from the available options.",
        ],
    },
    {
        id: "save",
        icon: "💾",
        title: "Save Your Ads",
        subtitle: "Keep your designs for later",
        steps: [
            "Use Save to save your advertisement.",
            "Go to the Dashboard to find your saved ads.",
            "Open a saved ad from the Dashboard when you want to edit it.",
        ],
    },
    {
        id: "download",
        icon: "⬇️",
        title: "Download",
        subtitle: "Export your design as an image",
        steps: [
            "Click the Download control.",
            "Choose PNG or JPEG format.",
            "Complete the download and check the image on your device.",
        ],
    },
    {
        id: "share",
        icon: "📲",
        title: "Share Your Ads",
        subtitle: "Share your design with your audience",
        steps: [
            "Finish creating your advertisement.",
            "Use the Share option if it is available in your editor.",
            "Share through supported services such as Facebook, Instagram, WhatsApp, or other media.",
        ],
        tip: "Social-media sharing options depend on the sharing features supported by your application and device.",
    },
    {
        id: "text",
        icon: "✍️",
        title: "Text",
        subtitle: "Make your words stand out",
        steps: [
            "Click or tap a text element on the canvas to select it.",
            "Use the panel to change Text Size, Text Width, Color, and Font Family.",
            "Use Bold, Underline, Italic, and Letter Spacing to change the appearance.",
            "Click or tap the relevant control to apply your changes.",
            "For advanced styling, select the text first, click WordArt in the canvas toolbar, and choose a WordArt style.",
        ],
        tip: "Select the text before applying WordArt. WordArt will not apply to an unselected text element.",
    },
    {
        id: "background",
        icon: "🖼️",
        title: "Backgrounds",
        subtitle: "Give your advertisement the right look",
        steps: [
            "For built-in backgrounds, click Backgrounds in the canvas toolbar.",
            "For business photography, open Business Photo Backgrounds.",
            "Choose a background and customize it using the available controls.",
            "To use your own background, open Images and click Upload Backgrounds.",
            "Double-click the background image on the canvas to select it.",
            "Drag and drop the image to change its position.",
        ],
        tip: "Use a background that keeps your advertisement text easy to read.",
    },
    {
        id: "logo",
        icon: "🏷️",
        title: "Business Logo",
        subtitle: "Add your own brand identity",
        steps: [
            "Double-click the existing sample logo.",
            "Upload your own logo using the available image controls.",
            "Drag and place the logo wherever you want on the canvas.",
            "Click or tap the logo to select and resize it.",
        ],
    },
    {
        id: "images",
        icon: "🌄",
        title: "Small Images",
        subtitle: "Personalize your design with images",
        steps: [
            "Double-click an existing sample image to replace or edit it.",
            "Upload your own image using the available image controls.",
            "Drag and drop the image to position it.",
            "Click or tap the image to select it, then resize or rotate it using the available controls.",
        ],
    },
    {
        id: "discount-tags",
        icon: "🏷️",
        title: "Discount Tags",
        subtitle: "Highlight special offers and promotions",
        steps: [
            "Double-click a discount tag on the canvas to open the Discount Tag Library.",
            "Choose the tag design you like.",
            "Change its colors using the available controls.",
            "Click the tag you want to add to your advertisement.",
        ],
    },
    {
        id: "icons",
        icon: "✨",
        title: "Icons",
        subtitle: "Add visual details to your design",
        steps: [
            "Open the Icons Library in the canvas toolbar.",
            "Select the icon you want to use.",
            "Change its color using the available controls.",
            "Resize the icon and drag it to your preferred position.",
        ],
    },
    {
        id: "blocks",
        icon: "🟦",
        title: "Background Blocks",
        subtitle: "Make important text stand out",
        steps: [
            "Click the Background Blocks button.",
            "Choose a background block shape.",
            "Drag the block to the position you want.",
            "Click or tap the block to change its color or transparency using the available controls.",
        ],
    },
    {
        id: "social-icons",
        icon: "📱",
        title: "Social Media Icons",
        subtitle: "Add social icons to your advertisement",
        steps: [
            "Select a social media icon from the available library.",
            "Click or tap the icon to select and resize it.",
            "Drag and drop it to your preferred position.",
        ],
    },
    {
        id: "borders",
        icon: "▣",
        title: "Borders",
        subtitle: "Frame your advertisement",
        steps: [
            "Click or tap a border on the canvas to select it.",
            "Open the Borders controls.",
            "Change the border width, color, and style.",
            "Adjust the corner radius if the control is available.",
        ],
    },
    {
        id: "drawings",
        icon: "🖌️",
        title: "Drawings",
        subtitle: "Draw directly on the canvas",
        steps: [
            "Click or tap Drawings and select a tool.",
            "Choose your stroke color and width.",
            "Brush: draw freehand on the canvas.",
            "Line: choose Thin, Thick, Thin → Thick, Thick → Thin, or Thin → Thick → Thin.",
            "Rectangle: select the tool and draw. You can drag, resize, and change its color.",
            "Circle: select the tool and draw. You can drag, resize, and change its color.",
            "Eraser: select the eraser, adjust its available controls, and move over the area you want to erase.",
        ],
        tip: "If a drawing tool does not behave as expected, make sure the intended tool is selected before drawing.",
    },
];

// =====================================================
// VIDEO GUIDES
// Replace videoUrl with your own video URL later.
// YouTube: https://www.youtube.com/embed/VIDEO_ID
// MP4: https://yourwebsite.com/videos/tutorial.mp4
// =====================================================
const HELP_VIDEOS = [
    {
        id: "getting-started",
        title: "Getting Started with AdStudio",
        description: "Learn the basics of the editor and canvas.",
        category: "Beginner",
        videoUrl: "",
    },
    {
        id: "text-styling",
        title: "Add and Style Text",
        description: "Change text size, colors, spacing, and styles.",
        category: "Text Tools",
        videoUrl: "",
    },
    {
        id: "backgrounds",
        title: "Change Your Background",
        description: "Explore built-in backgrounds and custom images.",
        category: "Backgrounds",
        videoUrl: "",
    },
    {
        id: "images-logo",
        title: "Add Your Logo and Images",
        description: "Place and customize images on your design.",
        category: "Images",
        videoUrl: "",
    },
    {
        id: "drawings",
        title: "Use Drawing Tools",
        description: "Explore the brush, lines, shapes, and eraser.",
        category: "Drawing",
        videoUrl: "",
    },
    {
        id: "finish-share",
        title: "Save, Download and Share",
        description: "Get your finished advertisement ready to use.",
        category: "Export",
        videoUrl: "",
    },
];

export default function HelpCenterModal({ onClose }) {
    const [activeTab, setActiveTab] = useState("documentation");
    const [search, setSearch] = useState("");
    const [expandedGuide, setExpandedGuide] = useState("ad-size");

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const filteredGuides = HELP_DOCUMENTATION.filter((guide) => {
        const searchableText = [
            guide.title,
            guide.subtitle,
            ...guide.steps,
            guide.tip || "",
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(search.trim().toLowerCase());
    });

    return (
        <div
            className="fixed inset-0 z-[10000] flex items-end justify-center bg-slate-950/70 backdrop-blur-sm sm:items-center sm:p-5"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="AdStudio Help Center"
        >
            <div className="help-center-modal relative flex h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-slate-50 text-slate-800 shadow-2xl sm:h-[min(88vh,820px)] sm:max-w-5xl sm:rounded-3xl">
                {/* HEADER */}
                <header className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#0b1f33] via-[#12385d] to-[#176b87] px-4 py-4 text-white sm:px-8 sm:py-6">
                    <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl" />

                    <div className="relative flex items-start justify-between gap-3">
                        <div>
                            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
                                <FaQuestionCircle />
                                ADSTUDIO SUPPORT
                            </div>

                            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                                Help Center
                            </h2>

                            <p className="mt-1 text-sm text-slate-200">
                                Everything you need to create a standout ad.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close Help Center"
                            title="Close Help Center"
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition hover:bg-red-500 active:scale-95"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    {/* TWO SECTIONS */}
                    <div className="relative mt-5 grid grid-cols-2 gap-2 rounded-xl bg-black/20 p-1">
                        <button
                            type="button"
                            onClick={() => setActiveTab("documentation")}
                            className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-2 py-3 text-sm font-bold transition ${activeTab === "documentation"
                                    ? "bg-white text-[#0b1f33] shadow"
                                    : "text-white hover:bg-white/10"
                                }`}
                        >
                            <FaBookOpen />
                            Documentation
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("videos")}
                            className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-2 py-3 text-sm font-bold transition ${activeTab === "videos"
                                    ? "bg-white text-[#0b1f33] shadow"
                                    : "text-white hover:bg-white/10"
                                }`}
                        >
                            <FaPlayCircle />
                            Video Guides
                        </button>
                    </div>
                </header>

                {/* SCROLLABLE CONTENT */}
                <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-8 sm:py-7">
                    {activeTab === "documentation" ? (
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-5">
                                <h3 className="text-xl font-extrabold text-[#0b1f33]">
                                    Learn how to use AdStudio
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                    Select a topic to view step-by-step instructions.
                                </p>
                            </div>

                            {/* SEARCH */}
                            <div className="relative mb-5">
                                <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search guides, e.g. text, logo, background..."
                                    aria-label="Search documentation"
                                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-base outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                />
                            </div>

                            <div className="space-y-3">
                                {filteredGuides.map((guide) => {
                                    const isExpanded =
                                        Boolean(search.trim()) || expandedGuide === guide.id;

                                    return (
                                        <section
                                            key={guide.id}
                                            className={`overflow-hidden rounded-2xl border bg-white transition ${isExpanded
                                                    ? "border-cyan-200 shadow-md"
                                                    : "border-slate-200 hover:border-slate-300"
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setExpandedGuide(
                                                        expandedGuide === guide.id ? null : guide.id
                                                    )
                                                }
                                                aria-expanded={isExpanded}
                                                className="flex w-full items-center gap-3 p-4 text-left sm:p-5"
                                            >
                                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-100 text-xl">
                                                    {guide.icon}
                                                </span>

                                                <span className="min-w-0 flex-1">
                                                    <span className="block font-bold text-slate-800">
                                                        {guide.title}
                                                    </span>
                                                    <span className="mt-0.5 block text-sm text-slate-500">
                                                        {guide.subtitle}
                                                    </span>
                                                </span>

                                                <FaChevronRight
                                                    className={`shrink-0 text-slate-400 transition-transform ${isExpanded ? "rotate-90" : ""
                                                        }`}
                                                />
                                            </button>

                                            {isExpanded && (
                                                <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5">
                                                    <ol className="space-y-3">
                                                        {guide.steps.map((step, index) => (
                                                            <li
                                                                key={`${guide.id}-${index}`}
                                                                className="flex gap-3 text-sm leading-6 text-slate-600"
                                                            >
                                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b1f33] text-xs font-bold text-white">
                                                                    {index + 1}
                                                                </span>
                                                                <span>{step}</span>
                                                            </li>
                                                        ))}
                                                    </ol>

                                                    {guide.tip && (
                                                        <div className="mt-4 flex gap-2 rounded-xl bg-amber-50 p-3 text-sm leading-5 text-amber-900">
                                                            <FaLightbulb className="mt-0.5 shrink-0" />
                                                            <span>{guide.tip}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </section>
                                    );
                                })}

                                {filteredGuides.length === 0 && (
                                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
                                        <div className="text-3xl">🔎</div>
                                        <p className="mt-2 font-semibold">No guides found</p>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Try another search term.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-5">
                                <h3 className="text-xl font-extrabold text-[#0b1f33]">
                                    Learn by watching
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                    Sample video-guide cards are ready for your own tutorial
                                    videos.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {HELP_VIDEOS.map((video, index) => (
                                    <article
                                        key={video.id}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
                                    >
                                        <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1f33] via-[#16486a] to-cyan-700">
                                            <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-cyan-300/20 blur-2xl" />
                                            <div className="absolute -bottom-10 -right-5 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl" />

                                            {video.videoUrl ? (
                                                video.videoUrl.toLowerCase().includes(".mp4") ? (
                                                    <video
                                                        className="absolute inset-0 h-full w-full object-cover"
                                                        controls
                                                        playsInline
                                                        preload="metadata"
                                                    >
                                                        <source
                                                            src={video.videoUrl}
                                                            type="video/mp4"
                                                        />
                                                        Your browser does not support this video.
                                                    </video>
                                                ) : (
                                                    <iframe
                                                        className="absolute inset-0 h-full w-full"
                                                        src={video.videoUrl}
                                                        title={video.title}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen
                                                    />
                                                )
                                            ) : (
                                                <div className="relative px-6 text-center text-white">
                                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/15 text-2xl shadow-lg">
                                                        {index === 0 ? <FaPlayCircle /> : <FaVideo />}
                                                    </div>

                                                    <p className="mt-3 text-sm font-bold">
                                                        Sample guide {String(index + 1).padStart(2, "0")}
                                                    </p>
                                                    <p className="mt-1 text-xs text-white/75">
                                                        Your video will appear here
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4">
                                            <div className="mb-2 inline-flex rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-bold text-cyan-800">
                                                {video.category}
                                            </div>

                                            <h4 className="font-bold text-slate-800">
                                                {video.title}
                                            </h4>

                                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                                {video.description}
                                            </p>

                                            {!video.videoUrl && (
                                                <p className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                                                    <FaVideo />
                                                    Add your video URL in HELP_VIDEOS.
                                                </p>
                                            )}
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                                <strong>Adding your videos:</strong> Find the HELP_VIDEOS
                                array near the top of this file and replace a guide's empty
                                videoUrl with your YouTube embed URL or direct MP4 URL.
                            </div>
                        </div>
                    )}
                </main>

                {/* ALWAYS-VISIBLE CLOSE BUTTON */}
                <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:px-8">
                    <p className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
                        <FaCheckCircle className="text-emerald-600" />
                        AdStudio Help Center
                    </p>

                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0b1f33] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#12385d] active:scale-[0.98]"
                    >
                        <FaTimes />
                        Close Help
                    </button>
                </footer>
            </div>

            <style>{`
        .help-center-modal {
          animation: helpCenterEnter 220ms ease-out;
        }

        @keyframes helpCenterEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .help-center-modal {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
}
