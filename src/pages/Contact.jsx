import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1a3a] to-[#020617] text-white">

            <Navbar />

            <div className="px-6 md:px-20 py-16">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 text-blue-500">
                        Contact AdStudio
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Need help, have questions, or want to work with us? Our team is ready
                        to support you anytime.
                    </p>
                </div>

                {/* CONTACT CARDS */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition">
                        <MapPin className="mx-auto mb-4 text-blue-500" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                        <p className="text-gray-400">
                            Your Address Here <br /> City, Country
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition">
                        <Phone className="mx-auto mb-4 text-blue-500" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-gray-400">+94 77 XXX XXXX</p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition">
                        <Mail className="mx-auto mb-4 text-blue-500" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-gray-400">support@adstudio.com</p>
                    </div>

                </div>

                {/* CONTACT FORM */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-6 text-blue-400">
                            Send us a Message
                        </h2>

                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                            />

                            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* GOOGLE MAP */}
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full min-h-[350px]"
                        ></iframe>
                    </div>

                </div>

                {/* POLICIES */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">
                        Policies & Agreements
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">User Policy</h3>
                            <p className="text-gray-400 text-sm">
                                Users must not create misleading, illegal, or harmful ads.
                                AdStudio reserves the right to suspend accounts violating policies.
                                Respect platform integrity and fair usage limits.
                            </p>
                        </div>

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">Terms & Agreements</h3>
                            <p className="text-gray-400 text-sm">
                                By using AdStudio, you agree to our pricing, feature access,
                                and fair usage policies. Services may evolve and improve over time.
                            </p>
                        </div>

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">Refund Policy</h3>
                            <p className="text-gray-400 text-sm">
                                Refunds are available within 7 days if the service fails to meet
                                expectations. Requests must include proof and valid reasoning.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* WHATSAPP BUTTON */}
            <a
                href="https://wa.me/9477XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
            >
                Chat
            </a>

            <Footer />
        </div>
    );
}