import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="mt-20 backdrop-blur-xl bg-white/5 border-t border-white/10 text-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                {/* LOGO + ABOUT */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-3">🧩 AdStudio</h2>
                    <p className="text-sm text-gray-400">
                        Create stunning advertisements effortlessly. AdStudio helps businesses
                        design, manage, and grow with powerful ad tools.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/" className="hover:text-white transition">Home</Link>
                        <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
                        <Link to="/contact" className="hover:text-white transition">Contact</Link>
                    </div>
                </div>

                {/* LEGAL */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        <p className="hover:text-white cursor-pointer">User Policy</p>
                        <p className="hover:text-white cursor-pointer">Terms & Agreements</p>
                        <p className="hover:text-white cursor-pointer">Refund Policy</p>
                    </div>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                    <div className="flex flex-col gap-3 text-sm">

                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Your Address Here</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>+94 77 XXX XXXX</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>support@adstudio.com</span>
                        </div>

                    </div>
                </div>

            </div>

            {/* SOCIAL + COPYRIGHT */}
            <div className="border-t border-white/10 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 text-lg">

                        <a href="#" className="hover:text-blue-500 transition">
                            <FaFacebook />
                        </a>

                        <a href="#" className="hover:text-blue-400 transition">
                            <FaTwitter />
                        </a>

                        <a href="#" className="hover:text-pink-500 transition">
                            <FaInstagram />
                        </a>

                        <a href="#" className="hover:text-blue-600 transition">
                            <FaLinkedin />
                        </a>

                    </div>

                    {/* COPYRIGHT */}
                    <p className="text-sm text-gray-400 text-center">
                        © {new Date().getFullYear()} AdStudio. All rights reserved.
                    </p>

                </div>
            </div>

        </footer>
    );
}