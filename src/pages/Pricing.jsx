import React from "react";
import { PLANS } from "../services/plans";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import adCollection from "../assets/ad-collection.png";

export default function PricingPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    // 🔥 2CHECKOUT PAYMENT HANDLER
    const handlePayment = (plan) => {
        // 🔴 REQUIRE LOGIN
        if (!user) {
            navigate("/login");
            return;
        }

        // ⚠️ Convert "$5" → 5
        const amount = plan.price.replace(/[^\d]/g, "");

        // 🔥 BUILD 2CHECKOUT URL
        const sellerId = "255979618218"; // ← replace this

        const orderId = "ORDER_" + new Date().getTime();

        const checkoutUrl = `https://secure.2checkout.com/order/checkout.php?` +
            `seller_id=${sellerId}` +
            `&mode=TEST` + // change to LIVE later
            `&li_0_type=product` +
            `&li_0_name=AdStudio ${plan.name}` +
            `&li_0_price=${amount}` +
            `&li_0_quantity=1` +
            `&currency_code=USD` +
            `&merchant_order_id=${orderId}` +
            `&custom_1=${user.id}` +       // 🔥 USER ID
            `&custom_2=${plan.key}` +      // 🔥 PLAN KEY
            `&return_url=https://adstudioproject.netlify.app/adstudio`;

        // 🔁 REDIRECT USER
        window.location.href = checkoutUrl;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">

            {/* Top Nav */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 gap-4 md:gap-0">
                <h1 className="text-2xl font-bold">AdStudio</h1>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <button onClick={() => navigate("/")} className="hover:text-red-400">Home</button>
                    <button onClick={() => navigate("/pricing")} className="text-red-400">Pricing</button>
                    <button onClick={() => navigate("/login")} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
                        Login
                    </button>
                </div>
            </div>

            {/* Header */}
            <div className="text-center mt-12 md:mt-16 mb-10 md:mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Simple, Honest Pricing
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                    Pay only for what you need. Upgrade anytime as your business grows.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
                {PLANS.map((plan) => (
                    <div
                        key={plan.key}
                        className="bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-red-500 transition"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                            {plan.name}
                        </h3>

                        <p className="text-2xl font-bold text-red-400 mb-4 text-center md:text-left">
                            {plan.price}
                        </p>

                        <p className="text-gray-300 mb-4 text-center md:text-left">
                            {plan.ads}
                        </p>

                        <ul className="text-sm text-gray-400 space-y-2 mb-6">
                            <li>✔ High-quality exports</li>
                            <li>✔ Mobile & desktop support</li>
                            <li>✔ Easy editing tools</li>
                            <li>✔ Fast rendering</li>
                            <li>✔ Cloud save access</li>
                        </ul>

                        <button
                            onClick={() => handlePayment(plan)}
                            className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-medium transition"
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Bottom Image Section */}
            <div className="mt-16 md:mt-20 px-4 md:px-8 pb-16">
                <h3 className="text-center text-xl md:text-2xl font-bold mb-6">
                    Ads You Can Create
                </h3>

                <div className="w-full max-w-5xl mx-auto">
                    <img
                        src={adCollection}
                        alt="Sample ad designs"
                        className="w-full h-[30vh] sm:h-[40vh] md:h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 py-6 border-t border-white/10 text-sm">
                © {new Date().getFullYear()} AdStudio. All rights reserved.
            </div>
        </div>
    );
}


// ppl-- 57-39 Scout de Guia St, Diliman, Quezon City, Metro Manila, Philippines