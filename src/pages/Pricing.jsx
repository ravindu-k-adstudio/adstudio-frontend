import React, { useEffect, useState } from "react";
import { PLANS } from "../services/plans";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import adCollection from "../assets/ad-collection.png";

const COUNTRIES = [
    "Sri Lanka",
    "India",
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "United Arab Emirates",
    "Singapore",
    "Malaysia",
    "Maldives",
    "New Zealand",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Japan",
    "South Korea",
    "China",
    "Pakistan",
    "Bangladesh",
    "Nepal",
    "Other"
];

export default function PricingPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    const [processingPayment, setProcessingPayment] = useState(false);

    const [customerDetails, setCustomerDetails] = useState({
        phone: "",
        address: "",
        city: "",
        country: "Sri Lanka"
    });

    useEffect(() => {
        if (!user) return;

        setCustomerDetails((current) => ({
            ...current,
            phone: user.phone || "",
            address: user.address || "",
            city: user.city || "",
            country: current.country || "Sri Lanka"
        }));
    }, [user]);

    const handlePayment = (plan) => {
        if (!user) {
            navigate("/login");
            return;
        }

        setSelectedPlan(plan);

        setCustomerDetails((current) => ({
            phone: user.phone || current.phone || "",
            address: user.address || current.address || "",
            city: user.city || current.city || "",
            country: current.country || "Sri Lanka"
        }));

        setShowPaymentDetails(true);
    };

    const closePaymentDetails = () => {
        if (processingPayment) return;

        setShowPaymentDetails(false);
        setSelectedPlan(null);
    };

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;

        setCustomerDetails((current) => ({
            ...current,
            [name]: value
        }));
    };

    const submitPayment = async (e) => {
        e.preventDefault();

        if (!selectedPlan || processingPayment) {
            return;
        }

        const phone = customerDetails.phone.trim();
        const address = customerDetails.address.trim();
        const city = customerDetails.city.trim();
        const country = customerDetails.country.trim();

        if (!phone) {
            alert("Please enter your phone number.");
            return;
        }

        if (!address) {
            alert("Please enter your address.");
            return;
        }

        if (!city) {
            alert("Please enter your city.");
            return;
        }

        if (!country) {
            alert("Please select your country.");
            return;
        }

        if (phone.length < 7) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (address.length < 3) {
            alert("Please enter your full address.");
            return;
        }

        if (city.length < 2) {
            alert("Please enter a valid city.");
            return;
        }

        try {
            setProcessingPayment(true);

            const API_URL =
                import.meta.env.VITE_API_URL ||
                "http://192.168.1.28:5000/api";

            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const res = await fetch(
                `${API_URL}/payment/create`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        plan: selectedPlan.key,

                        customer: {
                            phone,
                            address,
                            city,
                            country
                        }
                    })
                }
            );

            let data = {};

            try {
                data = await res.json();
            } catch {
                data = {};
            }

            if (!res.ok) {
                throw new Error(
                    data.message ||
                    "Unable to start payment."
                );
            }

            if (
                !data.checkoutUrl ||
                !data.payment
            ) {
                throw new Error(
                    "Invalid payment response from server."
                );
            }

            /*
             * PayHere uses a normal HTML POST form.
             *
             * The backend generates the hash.
             * Merchant Secret never reaches React.
             */

            const form =
                document.createElement("form");

            form.method = "POST";
            form.action = data.checkoutUrl;

            Object.entries(data.payment).forEach(
                ([key, value]) => {
                    const input =
                        document.createElement("input");

                    input.type = "hidden";
                    input.name = key;
                    input.value = value ?? "";

                    form.appendChild(input);
                }
            );

            document.body.appendChild(form);

            form.submit();

        } catch (error) {
            console.error(
                "PAYHERE PAYMENT ERROR:",
                error
            );

            alert(
                error.message ||
                "Unable to start payment."
            );

            setProcessingPayment(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#08182d] text-white flex flex-col">

            {/* ANIMATED BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

                <div
                    className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-600/20 blur-3xl rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                />

                <div
                    className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse"
                    style={{ animationDelay: "2s" }}
                />

            </div>

            {/* TOP NAV */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 backdrop-blur-md bg-white/5">

                <h1 className="text-2xl font-bold">
                    AdStudio
                </h1>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">

                    <button
                        onClick={() => navigate("/")}
                        className="text-white hover:text-cyan-400 transition"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => navigate("/pricing")}
                        className="text-cyan-400 font-semibold"
                    >
                        Pricing
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="
                            px-5
                            py-2
                            rounded-xl
                            bg-gradient-to-r
                            from-cyan-400
                            to-blue-500
                            hover:scale-105
                            transition-all
                            duration-300
                            shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                        "
                    >
                        Login
                    </button>

                </div>
            </div>

            {/* HEADER */}
            <div className="relative z-10 text-center mt-3 mb-6 px-4">

                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Simple, Honest Pricing
                </h2>

                <p className="text-blue-100 max-w-2xl mx-auto text-base leading-relaxed">
                    Pay only for what you need. Upgrade anytime as your business grows.
                    Create professional advertisements in minutes without hiring expensive designers.
                </p>

            </div>

            {/* PRICING CARDS */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 md:px-8">

                {PLANS.map((plan) => (

                    <div
                        key={plan.key}
                        className="
                            bg-white/5
                            backdrop-blur-xl
                            border
                            border-white/10
                            rounded-3xl
                            p-6
                            flex
                            flex-col
                            hover:border-cyan-400/50
                            hover:bg-white/10
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                        "
                    >

                        <h3 className="text-xl font-bold mb-3 text-center">
                            {plan.name}
                        </h3>

                        <div className="text-center mb-4">

                            <p className="text-4xl font-extrabold text-cyan-400">
                                LKR{" "}
                                {(
                                    Number(
                                        plan.price.replace(
                                            /[^\d.]/g,
                                            ""
                                        )
                                    ) * 327
                                ).toLocaleString("en-LK")}
                            </p>

                            <p className="text-lg font-semibold text-blue-100 mt-1">
                                {plan.price} USD
                            </p>

                        </div>

                        <p className="text-blue-100 mb-5 text-center">
                            {plan.ads}
                        </p>

                        <ul className="space-y-3 text-sm text-blue-100 mb-8">

                            <li>✔ High-quality exports</li>
                            <li>✔ Mobile & desktop support</li>
                            <li>✔ Easy editing tools</li>
                            <li>✔ Fast rendering</li>
                            <li>✔ Cloud save access</li>

                        </ul>

                        <button
                            onClick={() => handlePayment(plan)}
                            className="
                                mt-auto
                                w-full
                                py-3
                                rounded-xl
                                font-semibold
                                bg-gradient-to-r
                                from-cyan-400
                                to-blue-500
                                hover:scale-105
                                transition-all
                                duration-300
                                shadow-[0_10px_30px_rgba(59,130,246,0.45)]
                            "
                        >
                            Buy Now
                        </button>

                    </div>

                ))}

            </div>

            {/* ADS SHOWCASE */}
            <div className="relative z-10 mt-24 px-4 md:px-8 pb-20">

                <h3 className="text-center text-3xl font-bold mb-8">
                    Ads You Can Create
                </h3>

                <div className="max-w-6xl mx-auto">

                    <img
                        src={adCollection}
                        alt="Sample ad designs"
                        className="
                            w-full
                            rounded-3xl
                            border
                            border-white/10
                            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                        "
                    />

                </div>

            </div>

            {/* FOOTER */}
            <div className="relative z-10 text-center text-blue-200/70 py-6 border-t border-white/10 text-sm">

                © {new Date().getFullYear()} AdStudio. All rights reserved.

            </div>

            {/* PAYMENT DETAILS MODAL */}
            {showPaymentDetails && selectedPlan && (

                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        p-4
                        bg-black/70
                        backdrop-blur-sm
                    "
                    onMouseDown={(e) => {
                        if (
                            e.target === e.currentTarget &&
                            !processingPayment
                        ) {
                            closePaymentDetails();
                        }
                    }}
                >

                    <div
                        className="
                            w-full
                            max-w-lg
                            max-h-[92vh]
                            overflow-y-auto
                            rounded-3xl
                            border
                            border-white/10
                            bg-[#0b1d35]
                            shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                            p-6
                            md:p-8
                        "
                    >

                        <div className="flex items-start justify-between mb-6">

                            <div>

                                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                                    Secure Checkout
                                </p>

                                <h3 className="text-2xl font-bold mt-1">
                                    Complete Your Payment
                                </h3>

                                <p className="text-blue-200/80 text-sm mt-2">
                                    {selectedPlan.name} Plan
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={closePaymentDetails}
                                disabled={processingPayment}
                                className="
                                    text-white/60
                                    hover:text-white
                                    text-2xl
                                    disabled:opacity-30
                                "
                            >
                                ×
                            </button>

                        </div>

                        <form onSubmit={submitPayment}>

                            {/* NAME */}
                            <div className="mb-4">

                                <label className="block text-sm font-medium text-blue-100 mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={user?.name || ""}
                                    readOnly
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-3
                                        text-white
                                        outline-none
                                        cursor-not-allowed
                                        opacity-80
                                    "
                                />

                            </div>

                            {/* EMAIL */}
                            <div className="mb-4">

                                <label className="block text-sm font-medium text-blue-100 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-3
                                        text-white
                                        outline-none
                                        cursor-not-allowed
                                        opacity-80
                                    "
                                />

                            </div>

                            {/* PHONE */}
                            <div className="mb-4">

                                <label className="block text-sm font-medium text-blue-100 mb-2">
                                    Phone Number
                                    <span className="text-cyan-400 ml-1">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={customerDetails.phone}
                                    onChange={handleCustomerChange}
                                    placeholder="0771234567"
                                    autoComplete="tel"
                                    required
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-3
                                        text-white
                                        placeholder:text-white/30
                                        outline-none
                                        focus:border-cyan-400/70
                                        focus:ring-2
                                        focus:ring-cyan-400/20
                                    "
                                />

                            </div>

                            {/* ADDRESS */}
                            <div className="mb-4">

                                <label className="block text-sm font-medium text-blue-100 mb-2">
                                    Address
                                    <span className="text-cyan-400 ml-1">
                                        *
                                    </span>
                                </label>

                                <textarea
                                    name="address"
                                    value={customerDetails.address}
                                    onChange={handleCustomerChange}
                                    placeholder="No. 123, Main Street"
                                    autoComplete="street-address"
                                    required
                                    rows={3}
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-3
                                        text-white
                                        placeholder:text-white/30
                                        outline-none
                                        resize-none
                                        focus:border-cyan-400/70
                                        focus:ring-2
                                        focus:ring-cyan-400/20
                                    "
                                />

                            </div>

                            {/* CITY */}
                            <div className="mb-4">

                                <label className="block text-sm font-medium text-blue-100 mb-2">
                                    City
                                    <span className="text-cyan-400 ml-1">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="city"
                                    value={customerDetails.city}
                                    onChange={handleCustomerChange}
                                    placeholder="Colombo"
                                    autoComplete="address-level2"
                                    required
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-3
                                        text-white
                                        placeholder:text-white/30
                                        outline-none
                                        focus:border-cyan-400/70
                                        focus:ring-2
                                        focus:ring-cyan-400/20
                                    "
                                />

                            </div>

                            {/* COUNTRY */}
                            <div className="mb-4">

                                <label className="block text-sm font-medium text-blue-100 mb-2">
                                    Country
                                    <span className="text-cyan-400 ml-1">
                                        *
                                    </span>
                                </label>

                                <select
                                    name="country"
                                    value={customerDetails.country}
                                    onChange={handleCustomerChange}
                                    required
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#0b1d35]
                                        px-4
                                        py-3
                                        text-white
                                        outline-none
                                        transition
                                        focus:border-cyan-400
                                        focus:ring-2
                                        focus:ring-cyan-400/20
                                        cursor-pointer
                                    "
                                >
                                    {COUNTRIES.map((country) => (
                                        <option
                                            key={country}
                                            value={country}
                                            className="bg-[#0b1d35] text-white"
                                        >
                                            {country}
                                        </option>
                                    ))}
                                </select>

                            </div>

                            {/* SUMMARY */}
                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-cyan-400/20
                                    bg-cyan-400/5
                                    p-4
                                    mb-5
                                "
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-blue-100">
                                        {selectedPlan.name}
                                    </span>

                                    <span className="font-bold text-cyan-400">
                                        {selectedPlan.price} USD
                                    </span>

                                </div>

                                <p className="text-xs text-blue-200/60 mt-2">
                                    You will be securely redirected to PayHere
                                    to complete your payment.
                                </p>

                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3">

                                <button
                                    type="button"
                                    onClick={closePaymentDetails}
                                    disabled={processingPayment}
                                    className="
                                        flex-1
                                        py-3
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        hover:bg-white/10
                                        transition
                                        disabled:opacity-40
                                    "
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={processingPayment}
                                    className="
                                        flex-[2]
                                        py-3
                                        rounded-xl
                                        font-semibold
                                        bg-gradient-to-r
                                        from-cyan-400
                                        to-blue-500
                                        hover:scale-[1.02]
                                        transition-all
                                        shadow-[0_10px_30px_rgba(59,130,246,0.35)]
                                        disabled:opacity-60
                                        disabled:hover:scale-100
                                    "
                                >
                                    {processingPayment
                                        ? "Preparing Payment..."
                                        : "Continue to PayHere"}
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
}