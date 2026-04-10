import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLink = (path) =>
        `px-4 py-2 rounded-lg transition-all duration-200
        ${isActive(path)
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        }`;

    return (
        <header
            className={`w-full sticky top-0 z-50 transition-all duration-300
            backdrop-blur-xl bg-white/0 border-b border-white/20
            ${scrolled ? "shadow-md" : ""}
            `}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-xl font-extrabold text-blue-600 tracking-tight"
                >
                    🧩 AdStudio
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-3 font-medium">

                    <Link to="/pricing" className={navLink("/pricing")}>
                        Pricing
                    </Link>

                    {!user && (
                        <>
                            <Link to="/login" className={navLink("/login")}>
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}

                    {user && (
                        <>
                            <Link to="/adstudio" className={navLink("/adstudio")}>
                                Ad Studio
                            </Link>

                            <Link to="/dashboard" className={navLink("/dashboard")}>
                                Dashboard
                            </Link>

                            <Link to="/contact" className={navLink("/contact")}>
                                Contact
                            </Link>

                            <button
                                onClick={logout}
                                className="ml-2 px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                            >
                                Logout
                            </button>

                        </>
                    )}
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        // className="md:hidden px-6 pb-6 backdrop-blur-xl bg-white/80 border-t border-white/20"
                        className="md:hidden px-6 pb-6 backdrop-blur-xl bg-white/30 border-t border-white/20 shadow-xl"
                    >
                        <div className="flex flex-col gap-3 font-medium">

                            <Link
                                onClick={() => setIsOpen(false)}
                                to="/pricing"
                                className={navLink("/pricing")}
                            >
                                Pricing
                            </Link>

                            {!user && (
                                <>
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        to="/login"
                                        className={navLink("/login")}
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        to="/signup"
                                        className="bg-blue-600 text-white text-center py-2 rounded-lg shadow"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}

                            {user && (
                                <>
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        to="/adstudio"
                                        className={navLink("/adstudio")}
                                    >
                                        Ad Studio
                                    </Link>

                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        to="/dashboard"
                                        className={navLink("/dashboard")}
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        to="/contact"
                                        className={navLink("/contact")}
                                    >
                                        Contact
                                    </Link>

                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsOpen(false);
                                        }}
                                        className="text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}