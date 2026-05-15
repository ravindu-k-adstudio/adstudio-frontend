import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import sampleAd from "../assets/sample-ad.png";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await login(email, password);
            navigate("/adstudio");
        } catch (err) {
            setError(err.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">

            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl">

                {/* 🔥 IMAGE (NOW MOBILE FRIENDLY) */}
                {/* <div className="w-full md:w-1/2">
                    <img
                        src={sampleAd}
                        alt="Sample Ad"
                        className="w-full h-48 md:h-full object-cover"
                    />
                </div> */}
                {/* 🔥 RESPONSIVE IMAGE (FINAL FIX) */}
                <div className="w-full md:w-1/2">
                    <img
                        src={sampleAd}
                        alt="Sample Ad"
                        className="w-full h-[45vh] md:h-full object-cover"
                    />
                </div>

                {/* 🔥 RIGHT SIDE */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-6">

                    {/* 🔥 FIXED HEADING (NO ABSOLUTE) */}
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold text-gray-600">
                            Create Promotional Ads
                        </h2>
                        <h2 className="text-lg md:text-xl font-semibold text-gray-600">
                            For Any Business
                        </h2>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-[#0b1f33]">
                        Login
                    </h1>

                    {error && <p className="text-red-600">{error}</p>}

                    <form onSubmit={submit} className="flex flex-col gap-4">

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg border"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg border"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#0b1f33] text-white rounded-lg hover:opacity-90 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}