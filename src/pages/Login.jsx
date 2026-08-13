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
        <div
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #071426 0%, #0b1f33 35%, #12385d 70%, #1e4f7a 100%)"
            }}
        >
            {/* back button update karanna 20260701 */}
            <button
                onClick={() => navigate("/")}
                className="
        absolute
        top-6
        left-6
        z-50
        flex
        items-center
        gap-2
        px-5
        py-3
        rounded-2xl
        border
        border-white/15
        bg-white/10
        backdrop-blur-xl
        text-white
        hover:bg-white/15
        hover:border-cyan-400/50
        hover:scale-105
        transition-all
        duration-300
    "
            >
                ← Back to Home
            </button>

            {/* PREMIUM GLOW EFFECTS */}

            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
                style={{
                    background: "rgba(59,130,246,0.22)",
                    top: "-120px",
                    left: "-120px",
                    animation: "floatGlow1 10s ease-in-out infinite"
                }}
            />

            <div
                className="absolute w-[450px] h-[450px] rounded-full blur-[100px]"
                style={{
                    background: "rgba(14,165,233,0.18)",
                    bottom: "-120px",
                    right: "-100px",
                    animation: "floatGlow2 12s ease-in-out infinite"
                }}
            />

            <div
                className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
                style={{
                    background: "rgba(96,165,250,0.14)",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    animation: "pulseGlow 8s ease-in-out infinite"
                }}
            />

            {/* CARD */}

            <div
                className="
                    relative
                    flex
                    flex-col
                    md:flex-row
                    overflow-hidden
                    w-full
                    max-w-5xl
                    rounded-[32px]
                    border
                    border-white/10
                "
                style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(22px)",
                    WebkitBackdropFilter: "blur(22px)",
                    boxShadow:
                        "0 25px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
                }}
            >

                {/* IMAGE SIDE */}

                <div className="w-full md:w-1/2 relative overflow-hidden">

                    <img
                        src={sampleAd}
                        alt="Sample Ad"
                        className="
                            w-full
                            h-[45vh]
                            md:h-full
                            object-cover
                            scale-105
                            hover:scale-110
                            transition-transform
                            duration-700
                        "
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(7,20,38,0.75), rgba(7,20,38,0.1))"
                        }}
                    />

                    <div className="absolute bottom-8 left-8 right-8 z-10">

                        <h2 className="text-white text-3xl font-bold leading-tight">
                            Create Stunning
                            <br />
                            Promotional Ads
                        </h2>

                        <p className="text-blue-100 mt-3 text-sm md:text-base">
                            Design beautiful ads for your business in minutes.
                        </p>

                    </div>
                </div>

                {/* FORM SIDE */}

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

                    <div className="mb-8">

                        <p className="text-blue-200 text-sm uppercase tracking-[3px] mb-3">
                            Welcome Back
                        </p>

                        <h1 className="text-4xl font-bold text-white">
                            Login
                        </h1>

                        <p className="text-slate-300 mt-3">
                            Continue creating amazing advertisements.
                        </p>

                    </div>

                    {error && (
                        <div
                            className="
                                mb-5
                                bg-red-500/10
                                border
                                border-red-400/20
                                text-red-200
                                px-4
                                py-3
                                rounded-xl
                            "
                        >
                            {error}
                        </div>
                    )}

                    <form onSubmit={submit} className="flex flex-col gap-5">

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="
                                w-full
                                p-4
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                text-white
                                placeholder:text-slate-300
                                outline-none
                                focus:border-blue-400
                                focus:bg-white/15
                                transition-all
                            "
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="
                                w-full
                                p-4
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                text-white
                                placeholder:text-slate-300
                                outline-none
                                focus:border-blue-400
                                focus:bg-white/15
                                transition-all
                            "
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="
                                w-full
                                py-4
                                rounded-2xl
                                text-white
                                font-semibold
                                text-lg
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                active:scale-[0.98]
                            "
                            style={{
                                background:
                                    "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                                boxShadow:
                                    "0 15px 35px rgba(37,99,235,0.35)"
                            }}
                        >
                            Login
                        </button>

                    </form>
                </div>
            </div>

            {/* ANIMATIONS */}

            <style>
                {`
                    @keyframes floatGlow1 {
                        0% { transform: translate(0px, 0px); }
                        50% { transform: translate(40px, 30px); }
                        100% { transform: translate(0px, 0px); }
                    }

                    @keyframes floatGlow2 {
                        0% { transform: translate(0px, 0px); }
                        50% { transform: translate(-40px, -25px); }
                        100% { transform: translate(0px, 0px); }
                    }

                    @keyframes pulseGlow {
                        0% {
                            transform: translate(-50%, -50%) scale(1);
                        }

                        50% {
                            transform: translate(-50%, -50%) scale(1.12);
                        }

                        100% {
                            transform: translate(-50%, -50%) scale(1);
                        }
                    }
                `}
            </style>
        </div>
    );
}