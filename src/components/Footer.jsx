
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin
} from "lucide-react";

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full mt-16 backdrop-blur-xl bg-white/5 border-t border-white/10 text-gray-300 overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

                    <div className="min-w-0">
                        <h2 className="text-2xl font-bold text-blue-600 mb-3">
                            🧩 AdStudio
                        </h2>

                        <p className="text-sm text-gray-400 leading-6 break-words">
                            Create stunning advertisements effortlessly.
                            AdStudio helps businesses design, manage,
                            and grow with powerful ad tools.
                        </p>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">

                            <Link
                                to="/"
                                className="hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/pricing"
                                className="hover:text-white transition"
                            >
                                Pricing
                            </Link>

                            <Link
                                to="/contact"
                                className="hover:text-white transition"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/privacy-policy"
                                className="hover:text-cyan-400 transition"
                            >
                                Privacy Policy
                            </Link>

                        </div>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Legal
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">

                            <p className="hover:text-white cursor-pointer transition">
                                User Policy
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Terms & Agreements
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Refund Policy
                            </p>

                        </div>
                    </div>

                    <div className="min-w-0">
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-4 text-sm">

                            <div className="flex items-start gap-3 min-w-0">
                                <MapPin
                                    size={18}
                                    className="shrink-0 mt-0.5"
                                />

                                <div className="leading-5 break-words">
                                    <div>
                                        Eco Softwares
                                    </div>

                                    <div>
                                        Galle rd, Aluthgama
                                    </div>

                                    <div>
                                        Sri Lanka
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 min-w-0">
                                <Phone
                                    size={18}
                                    className="shrink-0"
                                />

                                <span className="break-all">
                                    +94 78 670 8128
                                </span>
                            </div>

                            <div className="flex items-center gap-3 min-w-0">
                                <Mail
                                    size={18}
                                    className="shrink-0"
                                />

                                <span className="break-all">
                                    support@adstudio.com
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

                    <div className="flex gap-5 text-lg">

                        <a
                            href="#"
                            className="hover:text-blue-500 transition"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400 transition"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="#"
                            className="hover:text-pink-500 transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-600 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                    <p className="text-sm text-gray-400 text-center break-words">
                        © {new Date().getFullYear()} Eco Softwares | AdStudio | All rights reserved.
                    </p>

                </div>
            </div>

        </footer>
    );
}