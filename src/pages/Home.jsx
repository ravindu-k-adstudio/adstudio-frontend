import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";
import logo from "../assets/adstudio-logo.png";

export default function Home() {

    // ============================================================
    // HERO AD CAROUSEL DATA
    // These are promotional advertisements, NOT template previews.
    // ============================================================

    const heroAds = [
        {
            category: "Restaurant",
            brand: "Urban Bites",
            miniBrand: "RESTAURANT & CAFÉ",
            tagline: "Premium Burgers",
            description: "Fresh ingredients. Great taste. Made for food lovers.",
            offer: "20%",
            offerText: "OFF",
            cta: "Order Now",
            phone: "+94 77 123 4567",
            location: "123 Food Street, Colombo",
            image:
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
            accent: "yellow",
            icon: "🍔",
            social: "f i ◎",
            shape: "circle"
        },

        {
            category: "Hotels & Resorts",
            brand: "Ocean View",
            miniBrand: "HOTELS & RESORTS",
            tagline: "Your Perfect Getaway",
            description: "Luxury stays. Unforgettable experiences. Escape the ordinary.",
            offer: "40%",
            offerText: "OFF",
            cta: "Book Now",
            phone: "+94 77 987 6543",
            location: "Colombo 07",
            image:
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=85",
            accent: "cyan",
            icon: "✦",
            social: "f i ◎",
            shape: "wave"
        },

        {
            category: "Fashion",
            brand: "StyleAura",
            miniBrand: "FASHION BOUTIQUE",
            tagline: "Trendy Styles For Every You",
            description: "Discover the latest looks designed to make you stand out.",
            offer: "45%",
            offerText: "OFF",
            cta: "Shop Now",
            phone: "+94 76 111 2222",
            location: "Colombo 03",
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85",
            accent: "pink",
            icon: "✦",
            social: "f i ◎",
            shape: "flower"
        },

        {
            category: "Real Estate",
            brand: "Dream Homes",
            miniBrand: "REAL ESTATE",
            tagline: "Find Your Dream Home",
            description: "Beautiful homes in exceptional locations. Your future starts here.",
            offer: "$250K",
            offerText: "STARTING",
            cta: "View Properties",
            phone: "+94 76 888 9995",
            location: "Colombo",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
            accent: "blue",
            icon: "⌂",
            social: "f i ◎",
            shape: "square"
        },

        {
            category: "Fitness",
            brand: "FitLife",
            miniBrand: "FITNESS CENTER",
            tagline: "Stronger. Healthier. Happier.",
            description: "Modern equipment and expert trainers to transform your lifestyle.",
            offer: "30%",
            offerText: "OFF",
            cta: "Join Now",
            phone: "+94 77 222 3333",
            location: "Colombo 05",
            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85",
            accent: "green",
            icon: "⚡",
            social: "f i ◎",
            shape: "circle"
        },

        {
            category: "Beauty",
            brand: "Glow Studio",
            miniBrand: "BEAUTY & SALON",
            tagline: "Reveal Your Natural Glow",
            description: "Premium beauty treatments created to make you feel incredible.",
            offer: "35%",
            offerText: "OFF",
            cta: "Book Now",
            phone: "+94 75 444 5555",
            location: "Colombo 04",
            image:
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=85",
            accent: "purple",
            icon: "✧",
            social: "f i ◎",
            shape: "flower"
        },

        {
            category: "Photography",
            brand: "FrameStory",
            miniBrand: "PHOTOGRAPHY STUDIO",
            tagline: "Your Moments. Our Story.",
            description: "Capture beautiful memories that deserve to last forever.",
            offer: "25%",
            offerText: "OFF",
            cta: "Book Session",
            phone: "+94 77 555 6666",
            location: "Colombo 06",
            image:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
            accent: "orange",
            icon: "✦",
            social: "f i ◎",
            shape: "circle"
        },

        {
            category: "Travel",
            brand: "TravelMore",
            miniBrand: "TRAVEL & TOUR",
            tagline: "Explore The World",
            description: "New places. New stories. Incredible adventures waiting for you.",
            offer: "35%",
            offerText: "OFF",
            cta: "Explore Now",
            phone: "+94 77 666 7777",
            location: "Colombo",
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
            accent: "cyan",
            icon: "✈",
            social: "f i ◎",
            shape: "wave"
        },

        {
            category: "Grocery",
            brand: "FreshMart",
            miniBrand: "GROCERY & SUPERMARKET",
            tagline: "Freshness Every Day",
            description: "Fresh groceries, everyday essentials and amazing prices.",
            offer: "25%",
            offerText: "OFF",
            cta: "Shop Today",
            phone: "+94 71 888 1111",
            location: "Colombo 08",
            image:
                "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=85",
            accent: "green",
            icon: "✚",
            social: "f i ◎",
            shape: "circle"
        },

        {
            category: "Auto Services",
            brand: "DrivePro",
            miniBrand: "AUTO SERVICE CENTER",
            tagline: "Drive With Confidence",
            description: "Professional vehicle care, repairs and maintenance you can trust.",
            offer: "30%",
            offerText: "OFF",
            cta: "Book Service",
            phone: "+94 76 333 4444",
            location: "Colombo 10",
            image:
                "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&q=85",
            accent: "red",
            icon: "⚙",
            social: "f i ◎",
            shape: "square"
        },

        {
            category: "Education",
            brand: "Bright Academy",
            miniBrand: "EDUCATION CENTER",
            tagline: "Learn Today. Lead Tomorrow.",
            description: "Expert teachers, modern learning and better opportunities.",
            offer: "20%",
            offerText: "OFF",
            cta: "Enroll Now",
            phone: "+94 75 777 8888",
            location: "Colombo 05",
            image:
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=85",
            accent: "blue",
            icon: "✦",
            social: "f i ◎",
            shape: "circle"
        },

        {
            category: "Cafe",
            brand: "Brew & Bean",
            miniBrand: "SPECIALTY COFFEE",
            tagline: "Good Coffee. Great Moments.",
            description: "Freshly brewed coffee, delicious bites and relaxing vibes.",
            offer: "15%",
            offerText: "OFF",
            cta: "Visit Us",
            phone: "+94 77 999 0000",
            location: "Colombo 02",
            image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85",
            accent: "orange",
            icon: "☕",
            social: "f i ◎",
            shape: "wave"
        }
    ];

    const [heroSlide, setHeroSlide] = useState(0);
    const [heroPaused, setHeroPaused] = useState(false);

    // ============================================================
    // AUTOMATIC CAROUSEL
    // ============================================================

    useEffect(() => {
        if (heroPaused) return;

        const timer = setInterval(() => {
            setHeroSlide(prev => (prev + 1) % heroAds.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [heroPaused, heroAds.length]);

    const nextHeroSlide = () => {
        setHeroSlide(prev => (prev + 1) % heroAds.length);
    };

    const previousHeroSlide = () => {
        setHeroSlide(
            prev => (prev - 1 + heroAds.length) % heroAds.length
        );
    };

    // ============================================================
    // COLOR SYSTEM
    // ============================================================

    const getAccent = accent => {
        const colors = {
            yellow: {
                main: "#facc15",
                dark: "#f59e0b",
                soft: "rgba(250,204,21,0.25)"
            },
            cyan: {
                main: "#22d3ee",
                dark: "#0891b2",
                soft: "rgba(34,211,238,0.25)"
            },
            pink: {
                main: "#f472b6",
                dark: "#db2777",
                soft: "rgba(244,114,182,0.25)"
            },
            blue: {
                main: "#60a5fa",
                dark: "#2563eb",
                soft: "rgba(96,165,250,0.25)"
            },
            green: {
                main: "#4ade80",
                dark: "#16a34a",
                soft: "rgba(74,222,128,0.25)"
            },
            purple: {
                main: "#c084fc",
                dark: "#9333ea",
                soft: "rgba(192,132,252,0.25)"
            },
            orange: {
                main: "#fb923c",
                dark: "#ea580c",
                soft: "rgba(251,146,60,0.25)"
            },
            red: {
                main: "#fb7185",
                dark: "#dc2626",
                soft: "rgba(251,113,133,0.25)"
            }
        };

        return colors[accent] || colors.blue;
    };

    const whoUses = [
        {
            title: "Hotels & Resorts",
            img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Restaurants & Cafés",
            img: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Saloons",
            img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Retail & Whole Sale",
            img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Photo Studios",
            img: "https://plus.unsplash.com/premium_photo-1664475041816-1efbb77b12ec?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "E-commerce",
            img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Real Estate",
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Repair Services",
            img: "https://plus.unsplash.com/premium_photo-1682146865378-788d61feb4fd?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Education",
            img: "https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?w=600&auto=format&fit=crop&q=60"
        },
        {
            title: "Clothing Boutique",
            img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop&q=60"
        }
    ];

    const features = [
        {
            title: "Visual Ad Editor",
            desc: "Drag, resize, and customize text, images, colors, and layouts easily.",
            icon: "https://cdn-icons-png.flaticon.com/512/1006/1006551.png"
        },
        {
            title: "Multi-Language Support",
            desc: "Create ads in multiple languages to reach global audiences.",
            icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png"
        },
        {
            title: "Business-Ready Templates",
            desc: "Designed specifically for real businesses and real conversions.",
            icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
        },
        {
            title: "Social Media Ready",
            desc: "Create ads optimized for Instagram, Facebook, and more.",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png"
        },
        {
            title: "No Design Skills Needed",
            desc: "Anyone can create stunning ads in minutes.",
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
            title: "Affordable Pricing",
            desc: "Pay only for what you need. No hidden fees.",
            icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
        }
    ];

    const testimonials = [
        {
            text: "Ad Studio completely changed how we advertise. Our sales increased within weeks.",
            name: "Restaurant Owner",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "Simple, powerful, and affordable. Exactly what small businesses need.",
            name: "Retail Shop Manager",
            img: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            text: "We no longer need designers. Ad Studio does everything we need.",
            name: "Photography Studio",
            img: "https://randomuser.me/api/portraits/men/65.jpg"
        }
    ];

    return (
        <>
            <div className="overflow-x-hidden bg-[#0b1f33]">

                <Navbar />

                {/* ============================================================
                    MAIN HERO SECTION
                ============================================================ */}

                <section
                    className="relative w-full max-w-[1600px] mx-auto min-h-0 lg:h-[calc(100vh-88px)] lg:min-h-[620px] lg:max-h-[860px] px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 lg:py-0 text-white overflow-hidden"
                >
                    <div className="grid min-h-0 grid-cols-1 lg:h-full lg:grid-cols-[0.82fr_1.18fr] xl:grid-cols-[0.8fr_1.2fr] gap-7 sm:gap-9 lg:gap-8 xl:gap-10 items-center">

                        {/* LEFT HERO CONTENT */}
                        <div className="relative z-20 flex items-center h-auto lg:h-full py-0 lg:py-10">
                            <motion.div
                                initial={{ opacity: 0, x: -35 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full max-w-[575px] lg:pb-2"
                            >
                                <div className="inline-flex max-w-full items-center gap-2 px-4 py-2 rounded-full bg-[#08264b]/80 border border-cyan-400/70 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.22)] text-white text-xs sm:text-sm font-semibold mb-5">
                                    <span className="text-base">🚀</span>
                                    <span>Just Sign In. Design Your Ad. Download &amp; Grow Faster.</span>
                                    <span className="ml-1 shrink-0 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-black text-[10px] sm:text-xs shadow-[0_0_18px_rgba(236,72,153,0.55)]">
                                        +50% SALES
                                    </span>
                                </div>

                                <h1 className="text-[2.55rem] sm:text-[3.25rem] lg:text-[3.55rem] xl:text-[3.8rem] font-extrabold leading-[0.99] tracking-tight">
                                    Design High-Converting Promotional Ads
                                    <span className="text-cyan-400"> For Any Business</span>
                                </h1>

                                <div className="mt-4 w-[230px] sm:w-[290px] h-1 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

                                <p className="text-base sm:text-lg text-blue-100 mt-6 leading-relaxed max-w-[545px]">
                                    Ad Studio helps businesses create stunning, professional advertisements in minutes without hiring expensive designers or agencies.
                                </p>

                                <p className="text-sm sm:text-base text-cyan-200 mt-4 leading-relaxed max-w-[525px]">
                                    Perfect for restaurants, hotels, retail stores, photographers, startups, and social media marketers.
                                </p>

                                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Link
                                        to="/adstudio"
                                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-center text-white px-7 py-3.5 rounded-2xl font-semibold shadow-[0_15px_40px_rgba(37,99,235,0.45)] hover:from-blue-400 hover:to-blue-600 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Start Creating Ads →
                                    </Link>

                                    <Link
                                        to="/pricing"
                                        className="border border-cyan-400/80 text-center px-7 py-3.5 rounded-2xl font-semibold hover:bg-cyan-400/10 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        View Pricing
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT HERO CAROUSEL
                            One large, fixed-proportion portrait advertisement.
                            No side cards. No filled carousel background. */}
                        <div
                            className="relative w-full h-[min(620px,78vw)] min-h-[500px] sm:h-[min(680px,76vw)] sm:min-h-[540px] lg:h-full lg:min-h-0 flex items-center justify-center"
                            onMouseEnter={() => setHeroPaused(true)}
                            onMouseLeave={() => setHeroPaused(false)}
                        >
                            {/* Thin luminous carousel border */}
                            <div
                                className="absolute inset-x-[2%] sm:inset-x-[3%] lg:inset-x-[1.5%] top-[4.5%] bottom-[4.5%] rounded-[2.5rem] border border-white/65 pointer-events-none"
                                style={{
                                    boxShadow: "0 0 10px rgba(255,255,255,0.75), 0 0 30px rgba(255,255,255,0.22), inset 0 0 20px rgba(255,255,255,0.035)"
                                }}
                            />

                            {/* Very light outer glow, still transparent */}
                            <div
                                className="absolute inset-x-[2%] sm:inset-x-[3%] lg:inset-x-[1.5%] top-[4.5%] bottom-[4.5%] rounded-[2.5rem] border border-white/10 blur-[2px] pointer-events-none"
                            />

                            {/* Everything inside this viewport is centered */}
                            <div className="absolute inset-x-[3%] sm:inset-x-[6%] lg:inset-x-[9%] top-[5%] bottom-[5%] flex items-center justify-center overflow-hidden rounded-[2rem]">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={`hero-ad-${heroSlide}`}
                                        initial={{ opacity: 0, scale: 0.94, x: 42, rotate: 0.8 }}
                                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.94, x: -42, rotate: -0.8 }}
                                        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                                        className="relative shrink-0 w-[82vw] max-w-[350px] aspect-[0.76] h-auto max-h-[520px] sm:w-auto sm:h-[min(68vh,570px)] sm:max-h-none sm:max-w-none lg:h-[min(76vh,600px)] lg:max-h-none rounded-[1.45rem] overflow-hidden border border-white/90 bg-[#091522] shadow-[0_28px_75px_rgba(0,0,0,0.65),0_0_32px_rgba(255,255,255,0.26)]"
                                    >
                                        {(() => {
                                            const ad = heroAds[heroSlide];
                                            const accent = getAccent(ad.accent);

                                            return (
                                                <div className="relative w-full h-full overflow-hidden">
                                                    <img
                                                        src={ad.image}
                                                        alt={`${ad.brand} ${ad.category} advertisement`}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/10 to-black/92" />
                                                    <div
                                                        className="absolute inset-0"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${accent.soft}, transparent 44%, rgba(0,0,0,0.38))`
                                                        }}
                                                    />

                                                    {/* BRAND HEADER */}
                                                    <div className="absolute top-[4.5%] left-[5.5%] right-[5.5%] flex items-start justify-between gap-2">
                                                        <div className="flex items-center gap-2 min-w-0">
                                                            <div
                                                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl font-black text-black shadow-xl shrink-0"
                                                                style={{ background: accent.main }}
                                                            >
                                                                {ad.icon}
                                                            </div>

                                                            <div className="min-w-0">
                                                                <div className="text-[1.05rem] sm:text-[1.2rem] font-black text-white leading-none truncate">
                                                                    {ad.brand}
                                                                </div>
                                                                <div className="mt-1 text-[7px] sm:text-[9px] tracking-[0.16em] font-bold text-white/80 uppercase truncate">
                                                                    {ad.miniBrand}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="shrink-0 px-2.5 py-1.5 rounded-full bg-black/35 border border-white/30 backdrop-blur-md text-[7px] sm:text-[9px] font-black text-white uppercase">
                                                            {ad.category}
                                                        </div>
                                                    </div>

                                                    {/* LARGE AD COPY */}
                                                    <div className="absolute left-[5.5%] right-[5.5%] bottom-[20%]">
                                                        <h2 className="text-[1.85rem] sm:text-[2.15rem] lg:text-[2.35rem] font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]">
                                                            {ad.tagline}
                                                        </h2>

                                                        <p className="mt-2.5 text-[9px] sm:text-[11px] leading-relaxed text-white/92 max-w-[90%] drop-shadow-lg">
                                                            {ad.description}
                                                        </p>

                                                        <div className="mt-3.5 flex items-center gap-2.5">
                                                            <div
                                                                className="min-w-[82px] sm:min-w-[94px] px-2.5 py-2 rounded-xl text-center text-black shadow-xl"
                                                                style={{ background: accent.main }}
                                                            >
                                                                <div className="text-xl sm:text-2xl font-black leading-none">{ad.offer}</div>
                                                                <div className="text-[6px] sm:text-[8px] font-black tracking-widest mt-0.5">{ad.offerText}</div>
                                                            </div>

                                                            <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl bg-white text-black text-[8px] sm:text-[10px] font-black shadow-xl">
                                                                {ad.cta} <span className="text-sm">→</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* CONTACT FOOTER */}
                                                    <div className="absolute bottom-0 left-0 right-0 px-[5.5%] py-3.5 sm:py-4 bg-black/80 backdrop-blur-md border-t border-white/25">
                                                        <div className="flex items-end justify-between gap-2">
                                                            <div className="min-w-0 space-y-1">
                                                                <div className="flex items-center gap-1.5 text-[7px] sm:text-[9px] text-white">
                                                                    <FaPhoneAlt style={{ color: accent.main }} />
                                                                    <span className="truncate">{ad.phone}</span>
                                                                </div>

                                                                <div className="flex items-center gap-1.5 text-[7px] sm:text-[9px] text-white/80">
                                                                    <FaMapMarkerAlt style={{ color: accent.main }} />
                                                                    <span className="truncate">{ad.location}</span>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center gap-1 shrink-0">
                                                                {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/45 bg-white/10 flex items-center justify-center text-[8px] sm:text-[9px] text-white"
                                                                    >
                                                                        <Icon />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* MOVING LIGHT */}
                                                    <motion.div
                                                        animate={{ x: ["-160%", "160%"] }}
                                                        transition={{
                                                            duration: 3.8,
                                                            repeat: Infinity,
                                                            repeatDelay: 2.4,
                                                            ease: "easeInOut"
                                                        }}
                                                        className="absolute top-[-15%] left-0 w-[20%] h-[140%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[16deg] blur-[7px] pointer-events-none"
                                                    />
                                                </div>
                                            );
                                        })()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* CAROUSEL ARROWS — inside the border */}
                            <button
                                type="button"
                                onClick={previousHeroSlide}
                                aria-label="Previous advertisement"
                                className="absolute left-[3.5%] sm:left-[4.5%] lg:left-[4%] top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.35)] border border-white hover:scale-110 transition-transform duration-200"
                            >
                                <span className="text-3xl leading-none -mt-1">‹</span>
                            </button>

                            <button
                                type="button"
                                onClick={nextHeroSlide}
                                aria-label="Next advertisement"
                                className="absolute right-[3.5%] sm:right-[4.5%] lg:right-[4%] top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.35)] border border-white hover:scale-110 transition-transform duration-200"
                            >
                                <span className="text-3xl leading-none -mt-1">›</span>
                            </button>

                            {/* CATEGORY / COUNT */}
                            <div className="absolute top-[7%] sm:top-[7%] left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 border border-white/25 backdrop-blur-md whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                                <span className="text-[8px] sm:text-[10px] font-bold text-white/90">
                                    {heroAds[heroSlide].category}
                                </span>
                                <span className="text-[8px] sm:text-[10px] font-black text-cyan-200">
                                    {String(heroSlide + 1).padStart(2, "0")} / 12
                                </span>
                            </div>

                            {/* DOTS */}
                            <div className="absolute bottom-[6.8%] left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5">
                                {heroAds.map((ad, index) => (
                                    <button
                                        key={`${ad.category}-${index}`}
                                        type="button"
                                        onClick={() => setHeroSlide(index)}
                                        aria-label={`Show ${ad.category} advertisement`}
                                        className={`rounded-full transition-all duration-300 ${index === heroSlide
                                            ? "w-6 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                                            : "w-2 h-2 bg-white/45 hover:bg-white/80"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Subtle desktop-only information accents around the carousel. */}
                            <div className="hidden xl:flex absolute left-[1.2%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex-col gap-2 pointer-events-none">
                                <div className="px-3 py-2 rounded-xl border border-white/20 bg-white/[0.035] backdrop-blur-md text-[9px] font-semibold text-white/75 shadow-[0_0_20px_rgba(255,255,255,0.06)] rotate-[-90deg] origin-center whitespace-nowrap">
                                    PROFESSIONAL TEMPLATES
                                </div>
                            </div>

                            <div className="hidden xl:flex absolute right-[1.2%] top-1/2 -translate-y-1/2 translate-x-1/2 z-20 flex-col gap-2 pointer-events-none">
                                <div className="px-3 py-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.035] backdrop-blur-md text-[9px] font-semibold text-cyan-100/75 shadow-[0_0_20px_rgba(34,211,238,0.08)] rotate-90 origin-center whitespace-nowrap">
                                    READY FOR SOCIAL MEDIA
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-3 sm:h-5 lg:h-6" />


                {/* ============================================================
                    PREMIUM PROMO BANNER
                    IMPORTANT: THIS IS OUTSIDE THE HERO
                ============================================================ */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        margin: "-100px"
                    }}
                    transition={{
                        duration: 0.7
                    }}
                    className="
                        relative
                        z-20
                        w-full
                        flex
                        justify-center
                        px-4
                        pb-8
                    "
                >

                    <div
                        className="
                            relative
                            w-full
                            max-w-6xl
                            overflow-hidden
                            rounded-2xl
                            border
                            border-cyan-400/20
                            bg-gradient-to-r
                            from-[#071427]/95
                            via-[#0d2340]/95
                            to-[#12365f]/95
                            backdrop-blur-xl
                            shadow-[0_15px_60px_rgba(0,0,0,0.45)]
                            px-5
                            py-4
                        "
                    >

                        {/* Animated Glow */}

                        <div className="
                            absolute
                            inset-0
                            opacity-40
                        ">

                            <div className="
                                absolute
                                -left-20
                                top-0
                                w-52
                                h-52
                                bg-cyan-400/20
                                blur-3xl
                                animate-pulse
                            />

                            <div className="
                                absolute
                                right-0
                                bottom-0
                                w-52
                                h-52
                                bg-blue-500
                                blur-3xl
                                animate-pulse
                            />

                        </div>


                        {/* Moving Shine */}

                        <motion.div
                            animate={{
                                x: [
                                    "-100%",
                                    "220%"
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "linear"
                            }}
                            className="
                                absolute
                                top-0
                                left-0
                                w-32
                                h-full
                                rotate-12
                                bg-white/10
                                blur-xl
                            "
                        />


                        {/* CONTENT */}

                        <div className="
                            relative
                            z-10
                            flex
                            flex-col
                            lg:flex-row
                            items-center
                            justify-between
                            gap-4
                        ">

                            {/* LEFT */}

                            <div className="
                                flex
                                items-center
                                gap-4
                            ">

                                {/* ICON */}

                                <motion.div
                                    animate={{
                                        y: [0, -4, 0]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2
                                    }}
                                    className="
                                        hidden
                                        md:flex
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-gradient-to-br
                                        from-cyan-400
                                        to-blue-500
                                        items-center
                                        justify-center
                                        shadow-xl
                                    "
                                >
                                    <span className="text-2xl">
                                        🚀
                                    </span>
                                </motion.div>


                                {/* TEXT */}

                                <div>

                                    <h2 className="
                                        text-white
                                        font-black
                                        leading-tight
                                        text-lg
                                        md:text-2xl
                                    ">
                                        Just Sign In.
                                        <span className="text-cyan-400">
                                            {" "}Design Your Ad.
                                        </span>
                                        {" "}Download & Grow Faster.
                                    </h2>

                                    <p className="
                                        text-slate-300
                                        text-xs
                                        md:text-sm
                                        mt-1
                                        max-w-2xl
                                        leading-relaxed
                                    ">
                                        Create premium advertisements in minutes —
                                        boost engagement and increase your sales up to
                                        <span className="
                                            text-cyan-400
                                            font-bold
                                        ">
                                            {" "}50% faster
                                        </span>
                                        {" "}without hiring designers.
                                    </p>

                                </div>

                            </div>


                            {/* RIGHT ACTIONS */}

                            <div className="
                                flex
                                items-center
                                gap-3
                                shrink-0
                            ">

                                {/* SALES TAG */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.06, 1]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2
                                    }}
                                    className="
                                        hidden
                                        md:flex
                                        px-4
                                        py-2
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-pink-500
                                        to-red-500
                                        text-white
                                        text-sm
                                        font-bold
                                        shadow-lg
                                    "
                                >
                                    +50% SALES
                                </motion.div>


                                {/* BUTTON */}

                                <Link to="/adstudio">

                                    <motion.button
                                        type="button"
                                        whileHover={{
                                            scale: 1.05
                                        }}
                                        whileTap={{
                                            scale: 0.97
                                        }}
                                        className="
                                            px-5
                                            py-3
                                            rounded-xl
                                            bg-gradient-to-r
                                            from-cyan-400
                                            to-blue-500
                                            text-white
                                            font-semibold
                                            shadow-[0_10px_30px_rgba(59,130,246,0.5)]
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        Start Designing
                                    </motion.button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* ============================================================
                    WHO USES
                ============================================================ */}

                <section className="bg-gray-50 py-20">

                    <h2 className="
                        text-3xl
                        font-bold
                        text-center
                        text-gray-900
                        mb-14
                    ">
                        Built For Every Business
                    </h2>

                    <div className="
                        max-w-6xl
                        mx-auto
                        grid
                        grid-cols-2
                        md:grid-cols-5
                        gap-6
                        px-6
                    ">

                        {whoUses.map((b, i) => (

                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1
                                }}
                                className="
                                    bg-white
                                    p-5
                                    rounded-2xl
                                    shadow-lg
                                    flex
                                    flex-col
                                    items-center
                                    text-center
                                    hover:scale-105
                                    transition
                                "
                            >

                                <img
                                    src={b.img}
                                    alt={b.title}
                                    className="
                                        w-24
                                        h-24
                                        rounded-full
                                        object-cover
                                        mb-4
                                    "
                                />

                                <p className="
                                    font-semibold
                                    text-gray-700
                                    text-sm
                                    sm:text-base
                                ">
                                    {b.title}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </section>


                {/* ============================================================
                    FEATURES
                ============================================================ */}

                <section className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-24
                    text-white
                ">

                    <h2 className="
                        text-3xl
                        font-bold
                        text-center
                        mb-16
                    ">
                        Everything You Need To Create Powerful Ads
                    </h2>

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-10
                    ">

                        {features.map((f, i) => (

                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.08
                                }}
                                className="
                                    bg-white/10
                                    backdrop-blur-lg
                                    border
                                    border-white/10
                                    p-7
                                    rounded-3xl
                                    shadow-2xl
                                    hover:scale-[1.03]
                                    transition-all
                                "
                            >

                                <img
                                    src={f.icon}
                                    alt={f.title}
                                    className="
                                        w-16
                                        h-16
                                        mb-5
                                    "
                                />

                                <h3 className="
                                    text-xl
                                    font-bold
                                    mb-3
                                ">
                                    {f.title}
                                </h3>

                                <p className="
                                    text-blue-100
                                    leading-relaxed
                                ">
                                    {f.desc}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </section>


                {/* ============================================================
                    TESTIMONIALS
                ============================================================ */}

                <section className="bg-gray-50 py-24">

                    <h2 className="
                        text-3xl
                        font-bold
                        text-center
                        mb-16
                        text-gray-900
                    ">
                        Trusted By Growing Businesses
                    </h2>

                    <div className="
                        max-w-6xl
                        mx-auto
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-8
                        px-6
                    ">

                        {testimonials.map((t, i) => (

                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1
                                }}
                                className="
                                    bg-white
                                    p-7
                                    rounded-3xl
                                    shadow-xl
                                    flex
                                    flex-col
                                    items-center
                                    text-center
                                    hover:scale-105
                                    transition
                                "
                            >

                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="
                                        w-20
                                        h-20
                                        rounded-full
                                        object-cover
                                        mb-4
                                    "
                                />

                                <p className="
                                    text-yellow-500
                                    text-lg
                                    mb-3
                                ">
                                    ★★★★★
                                </p>

                                <p className="
                                    text-gray-700
                                    mb-4
                                    leading-relaxed
                                ">
                                    “{t.text}”
                                </p>

                                <p className="
                                    text-sm
                                    font-semibold
                                    text-gray-500
                                ">
                                    — {t.name}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </section>


                {/* ============================================================
                    FOOTER
                ============================================================ */}

                <footer className="
                    bg-[#07111d]
                    text-gray-300
                    py-16
                ">

                    <div className="
                        max-w-7xl
                        mx-auto
                        px-6
                        grid
                        grid-cols-1
                        md:grid-cols-4
                        gap-10
                    ">

                        <div>

                            <div className="
                                flex
                                items-center
                                gap-3
                                mb-4
                            ">

                                <img
                                    src={logo}
                                    alt="AdStudio"
                                    className="
                                        w-12
                                        h-12
                                    "
                                />

                                <h3 className="
                                    text-white
                                    text-2xl
                                    font-bold
                                ">
                                    AdStudio
                                </h3>

                            </div>

                            <p className="
                                text-sm
                                leading-relaxed
                            ">
                                Create professional advertisements for any business with ease.
                            </p>

                        </div>


                        <div>

                            <h4 className="
                                font-semibold
                                mb-4
                                text-white
                            ">
                                Product
                            </h4>

                            <ul className="
                                space-y-2
                                text-sm
                            ">
                                <li>
                                    <Link to="/pricing">
                                        Pricing
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/adstudio">
                                        Ad Studio
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>

                        </div>


                        <div>

                            <h4 className="
                                font-semibold
                                mb-4
                                text-white
                            ">
                                Account
                            </h4>

                            <ul className="
                                space-y-2
                                text-sm
                            ">

                                <li>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/signup">
                                        Sign Up
                                    </Link>
                                </li>

                            </ul>

                        </div>


                        <div>

                            <h4 className="
                                font-semibold
                                mb-4
                                text-white
                            ">
                                Contact
                            </h4>

                            <p className="text-sm">
                                support@adstudio.app
                            </p>

                        </div>

                    </div>


                    <p className="
                        text-center
                        text-sm
                        text-gray-500
                        mt-12
                    ">
                        © {new Date().getFullYear()} Eco software | AdStudio | All rights reserved.
                    </p>

                </footer>

            </div>
        </>
    );
}
