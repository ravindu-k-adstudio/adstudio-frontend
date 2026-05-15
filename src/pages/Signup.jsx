import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import sampleAd from "../assets/sample-ad.png";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signup } = useAuth();
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signup(name, email, password, "starter");
            navigate("/adstudio");
        } catch (err) {
            setError(err.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl">

                {/* 🔥 IMAGE (VISIBLE ON MOBILE ALSO) */}
                <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-auto relative">
                    <img
                        src={sampleAd}
                        alt="Sample Ad"
                        className="w-full h-full object-cover"
                    />

                    {/* 🔥 Overlay Text (fixed responsiveness) */}
                    <div className="absolute inset-0 flex items-center justify-center text-center bg-black/30 px-4">
                        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                            Create High-Converting Ads <br /> For Any Business
                        </h1>
                    </div>
                </div>

                {/* FORM */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-6">

                    <h1 className="text-2xl md:text-3xl font-bold text-[#0b1f33] text-center md:text-left">
                        Create Account
                    </h1>

                    {error && <p className="text-red-600 text-center md:text-left">{error}</p>}

                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded-lg border border-gray-300"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg border border-gray-300"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg border border-gray-300"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#0b1f33] text-white font-semibold rounded-lg hover:opacity-90 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}