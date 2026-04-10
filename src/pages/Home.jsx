import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import adCollection from "../assets/ad-collection.png";

export default function Home() {
    const whoUses = [
        {
            title: "Hotels & Resorts",
            img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Restaurants & Cafés",
            img: "https://images.unsplash.com/photo-1555992336-03a23c1700b6?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Retail Stores",
            img: "https://images.unsplash.com/photo-1565372912239-fb1ab13c5ec1?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Photo Studios",
            img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Local Markets",
            img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80"
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
            <Navbar />

            {/* DARK BACKGROUND WRAPPER */}
            <div className="w-full bg-[#0b1f33] text-white pt-24">

                {/* HERO SECTION */}
                <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-20 items-center">

                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight">
                            Design <br /> High-Converting Promotional Ads for Any Business
                        </h1>

                        <p className="text-lg text-blue-100 mt-6 leading-relaxed">
                            Ad Studio is an all-in-one advertisement design platform that helps
                            businesses create professional, eye-catching ads in minutes.
                            No designers. No agencies. Just results.
                        </p>

                        <p className="text-lg text-blue-100 mt-4">
                            Perfect for restaurants, hotels, retail stores, photographers,
                            startups,social media platformers and local businesses worldwide.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <Link
                                to="/adstudio"
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
                            >
                                Start Creating Ads
                            </Link>

                            <Link
                                to="/pricing"
                                className="border border-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>

                    {/* HERO IMAGE WITH EFFECTS */}
                    <div className="relative flex justify-center items-center">

                        {/* 🌈 Gradient Glow Background */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-cyan-500/30 blur-3xl rounded-full" />

                        {/* 🧩 Layered Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Back layer */}
                            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-blue-900/20 rotate-[-4deg]" />

                            {/* Middle layer */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-cyan-800/20 rotate-[3deg]" />

                            {/* Main Image */}
                            <motion.img
                                src={adCollection}
                                alt="Sample ad designs"
                                className="relative z-10 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.4)] 
                       w-full max-w-3xl lg:max-w-4xl cursor-pointer"
                                whileHover={{
                                    scale: 1.08,
                                }}
                                whileTap={{
                                    scale: 1.05,
                                }}
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
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
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Built for Every Business Type
                    </h2>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 px-6">
                        {whoUses.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
                            >
                                <img src={b.img} className="w-24 h-24 rounded-full object-cover mb-3" />
                                <p className="font-semibold text-gray-600">{b.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FEATURES SECTION */}
                <section className="max-w-7xl mx-auto px-6 pb-28">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Everything You Need to Create Powerful Ads
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform"
                            >
                                <img src={f.icon} className="w-16 h-16 mb-4" />
                                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>



            {/* TESTIMONIALS */}
            <section className="bg-gray-50 py-24">
                <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
                    Trusted by Growing Businesses
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
                        >
                            <img src={t.img} className="w-20 h-20 rounded-full object-cover mb-4" />
                            <p className="text-yellow-500 text-lg mb-3">★★★★★</p>
                            <p className="text-gray-700 mb-4 leading-relaxed">“{t.text}”</p>
                            <p className="text-sm font-semibold text-gray-500">— {t.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FOOTER (unchanged) */}
            <footer className="bg-gray-900 text-gray-300 py-14">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Ad Studio</h3>
                        <p className="text-sm leading-relaxed">
                            Create professional advertisements for any business with ease.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/adstudio">Ad Studio</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Account</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <p className="text-sm">support@adstudio.app</p>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-500 mt-10">
                    © {new Date().getFullYear()} Ad Studio. All rights reserved.
                </p>
            </footer>
        </>
    );
}
