import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import adCollection from "../assets/ad-collection.png";
import logo from "../assets/adstudio-logo.png";

export default function Home() {

    const whoUses = [
        {
            title: "Hotels & Resorts",
            img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww"
        },
        {
            title: "Restaurants & Cafés",
            img: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmVudHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: "Saloons",
            img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Fsb29ufGVufDB8fDB8fHww"
        },
        {
            title: "Retail & Whole Sale",
            img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV0YWlsJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
        },
        {
            title: "Photo Studios",
            img: "https://plus.unsplash.com/premium_photo-1664475041816-1efbb77b12ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG8lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D"
        },
        {
            title: "E-commerce",
            img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Real Estate",
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: "Repair Services",
            img: "https://plus.unsplash.com/premium_photo-1682146865378-788d61feb4fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FyYWdlfGVufDB8fDB8fHww"
        },
        {
            title: "Education",
            img: "https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHR1dGlvbiUyMGNsYXNzfGVufDB8fDB8fHww"
        },
        {
            title: "Clothing Boutique",
            img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
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
                {/* HERO SECTION */}
                <section className="relative max-w-7xl mx-auto px-6 pt-36 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center text-white overflow-hidden">

                    {/* PREMIUM THIN FLOATING PROMO BANNER */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="
    absolute 
    top-[4px] 
    right-0
    left-0
    z-30 
    flex 
    justify-center
    pointer-events-none
"
                    >
                        <div
                            className="
                relative
                w-[92%]
                max-w-5xl
                overflow-hidden
                rounded-2xl
                border border-cyan-400/20
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
                            <div className="absolute inset-0 opacity-40">
                                <div className="absolute -left-20 top-0 w-52 h-52 bg-cyan-400/20 blur-3xl animate-pulse" />
                                <div className="absolute right-0 bottom-0 w-52 h-52 bg-blue-500/20 blur-3xl animate-pulse" />
                            </div>

                            {/* Moving Shine */}
                            <motion.div
                                animate={{
                                    x: ["-100%", "220%"]
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
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">

                                {/* LEFT */}
                                <div className="flex items-center gap-4">

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
                            hidden md:flex
                            w-14 h-14
                            rounded-2xl
                            bg-gradient-to-br from-cyan-400 to-blue-500
                            items-center justify-center
                            shadow-xl
                        "
                                    >
                                        <span className="text-2xl">🚀</span>
                                    </motion.div>

                                    {/* TEXT */}
                                    <div>

                                        {/* HEADING */}
                                        <h2 className="
                            text-white
                            font-black
                            leading-tight
                            text-lg
                            md:text-2xl
                        ">
                                            Just Sign In.
                                            <span className="text-cyan-400"> Design Your Ad.</span>
                                            Download & Grow Faster.
                                        </h2>

                                        {/* SUBTEXT */}
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
                                            <span className="text-cyan-400 font-bold">
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
                    pointer-events-auto
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
                            hidden md:flex
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
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
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

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* LEFT CONTENT */}
                    <div className="z-10">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-0">
                            Design High-Converting Promotional Ads
                            For Any Business
                        </h1>

                        <p className="text-base sm:text-lg text-blue-100 mt-6 leading-relaxed">
                            Ad Studio helps businesses create stunning,
                            professional advertisements in minutes without
                            hiring expensive designers or agencies.
                        </p>

                        <p className="text-base sm:text-lg text-blue-100 mt-4">
                            Perfect for restaurants, hotels, retail stores,
                            photographers, startups, and social media marketers.
                        </p>

                        <div className="mt-5 flex flex-col sm:flex-row gap-4 ">
                            {/* margin top haduwa button set eke update karanna 20260701 */}
                            <Link
                                to="/adstudio"
                                className="bg-blue-600 text-center text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:bg-blue-700  transition-all duration-300"
                            >
                                Start Creating Ads
                            </Link>

                            <Link
                                to="/pricing"
                                className="border border-blue-300 text-center px-8 py-4 rounded-2xl font-semibold hover:bg-blue-800/40 transition-all duration-300"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center items-center">

                        {/* GLOW */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-purple-600/30 blur-3xl rounded-full pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full flex justify-center"
                        >

                            {/* BACK CARD */}
                            <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-blue-800/20 rotate-[-4deg]" />

                            {/* FRONT IMAGE */}
                            <motion.img
                                src={adCollection}
                                alt="AdStudio Sample Ads"
                                className="
                    relative
                    z-10
                    rounded-3xl
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                    w-full
                    max-w-2xl
                    object-cover
                    will-change-transform
                    touch-pan-y
                "
                                whileHover={{ scale: 1.03 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 14
                                }}
                            />
                        </motion.div>
                    </div>

                </section>

                {/* WHO USES */}
                <section className="bg-gray-50 py-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
                        Built For Every Business
                    </h2>

                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-6">

                        {whoUses.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-5 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
                            >
                                <img
                                    src={b.img}
                                    alt={b.title}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />

                                <p className="font-semibold text-gray-700 text-sm sm:text-base">
                                    {b.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FEATURES */}
                <section className="max-w-7xl mx-auto px-6 py-24 text-white">

                    <h2 className="text-3xl font-bold text-center mb-16">
                        Everything You Need To Create Powerful Ads
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-white/10 backdrop-blur-lg border border-white/10 p-7 rounded-3xl shadow-2xl hover:scale-[1.03] transition-all"
                            >
                                <img
                                    src={f.icon}
                                    alt={f.title}
                                    className="w-16 h-16 mb-5"
                                />

                                <h3 className="text-xl font-bold mb-3">
                                    {f.title}
                                </h3>

                                <p className="text-blue-100 leading-relaxed">
                                    {f.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="bg-gray-50 py-24">

                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
                        Trusted By Growing Businesses
                    </h2>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-7 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition"
                            >
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4"
                                />

                                <p className="text-yellow-500 text-lg mb-3">
                                    ★★★★★
                                </p>

                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    “{t.text}”
                                </p>

                                <p className="text-sm font-semibold text-gray-500">
                                    — {t.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-[#07111d] text-gray-300 py-16">

                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={logo}
                                    alt="AdStudio"
                                    className="w-12 h-12"
                                />

                                <h3 className="text-white text-2xl font-bold">
                                    AdStudio
                                </h3>
                            </div>

                            <p className="text-sm leading-relaxed">
                                Create professional advertisements for any business with ease.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-white">
                                Product
                            </h4>

                            <ul className="space-y-2 text-sm">
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/adstudio">Ad Studio</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-white">
                                Account
                            </h4>

                            <ul className="space-y-2 text-sm">
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-white">
                                Contact
                            </h4>

                            <p className="text-sm">
                                support@adstudio.app
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-12">
                        © {new Date().getFullYear()} Eco software  | AdStudio | All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}

