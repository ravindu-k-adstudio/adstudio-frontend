// import React from "react";
// import { PLANS } from "../services/plans";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import adCollection from "../assets/ad-collection.png";

// export default function PricingPage() {
//     const navigate = useNavigate();
//     const { user } = useAuth();

//     // 🔥 2CHECKOUT PAYMENT HANDLER
//     const handlePayment = (plan) => {
//         // 🔴 REQUIRE LOGIN
//         if (!user) {
//             navigate("/login");
//             return;
//         }

//         // ⚠️ Convert "$5" → 5
//         const amount = plan.price.replace(/[^\d]/g, "");

//         // 🔥 BUILD 2CHECKOUT URL
//         const sellerId = "255979618218"; // ← replace this

//         const orderId = "ORDER_" + new Date().getTime();

//         const checkoutUrl = `https://secure.2checkout.com/order/checkout.php?` +
//             `seller_id=${sellerId}` +
//             `&mode=TEST` + // change to LIVE later
//             `&li_0_type=product` +
//             `&li_0_name=AdStudio ${plan.name}` +
//             `&li_0_price=${amount}` +
//             `&li_0_quantity=1` +
//             `&currency_code=USD` +
//             `&merchant_order_id=${orderId}` +
//             `&custom_1=${user.id}` +       // 🔥 USER ID
//             `&custom_2=${plan.key}` +      // 🔥 PLAN KEY
//             `&return_url=https://adstudioproject.netlify.app/adstudio`;

//         // 🔁 REDIRECT USER
//         window.location.href = checkoutUrl;
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">

//             {/* Top Nav */}
//             <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 gap-4 md:gap-0">
//                 <h1 className="text-2xl font-bold">AdStudio</h1>

//                 <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//                     <button onClick={() => navigate("/")} className="hover:text-red-400">Home</button>
//                     <button onClick={() => navigate("/pricing")} className="text-red-400">Pricing</button>
//                     <button onClick={() => navigate("/login")} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
//                         Login
//                     </button>
//                 </div>
//             </div>

//             {/* Header */}
//             <div className="text-center mt-12 md:mt-16 mb-10 md:mb-12 px-4">
//                 <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//                     Simple, Honest Pricing
//                 </h2>
//                 <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
//                     Pay only for what you need. Upgrade anytime as your business grows.
//                 </p>
//             </div>

//             {/* Pricing Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
//                 {PLANS.map((plan) => (
//                     <div
//                         key={plan.key}
//                         className="bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-red-500 transition"
//                     >
//                         <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
//                             {plan.name}
//                         </h3>

//                         <p className="text-2xl font-bold text-red-400 mb-4 text-center md:text-left">
//                             {plan.price}
//                         </p>

//                         <p className="text-gray-300 mb-4 text-center md:text-left">
//                             {plan.ads}
//                         </p>

//                         <ul className="text-sm text-gray-400 space-y-2 mb-6">
//                             <li>✔ High-quality exports</li>
//                             <li>✔ Mobile & desktop support</li>
//                             <li>✔ Easy editing tools</li>
//                             <li>✔ Fast rendering</li>
//                             <li>✔ Cloud save access</li>
//                         </ul>

//                         <button
//                             onClick={() => handlePayment(plan)}
//                             className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-medium transition"
//                         >
//                             Buy Now
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Image Section */}
//             <div className="mt-16 md:mt-20 px-4 md:px-8 pb-16">
//                 <h3 className="text-center text-xl md:text-2xl font-bold mb-6">
//                     Ads You Can Create
//                 </h3>

//                 <div className="w-full max-w-5xl mx-auto">
//                     <img
//                         src={adCollection}
//                         alt="Sample ad designs"
//                         className="w-full h-[30vh] sm:h-[40vh] md:h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
//                     />
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="text-center text-gray-500 py-6 border-t border-white/10 text-sm">
//                 © {new Date().getFullYear()} AdStudio. All rights reserved.
//             </div>
//         </div>
//     );
// }


// // ppl-- 57-39 Scout de Guia St, Diliman, Quezon City, Metro Manila, Philippines

// new update

// // // import React from "react";
// // // import { PLANS } from "../services/plans";
// // // import { useNavigate } from "react-router-dom";
// // // import adCollection from "../assets/ad-collection.png";


// // // export default function PricingPage() {
// // //     const navigate = useNavigate();

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">

// // //             {/* Top Nav */}
// // //             <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 gap-4 md:gap-0">
// // //                 <h1 className="text-2xl font-bold">AdStudio</h1>

// // //                 <div className="flex flex-wrap justify-center gap-4 md:gap-6">
// // //                     <button onClick={() => navigate("/")} className="hover:text-red-400">Home</button>
// // //                     <button onClick={() => navigate("/pricing")} className="text-red-400">Pricing</button>
// // //                     <button onClick={() => navigate("/login")} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
// // //                         Login
// // //                     </button>
// // //                 </div>
// // //             </div>

// // //             {/* Header */}
// // //             <div className="text-center mt-12 md:mt-16 mb-10 md:mb-12 px-4">
// // //                 <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
// // //                     Simple, Honest Pricing
// // //                 </h2>
// // //                 <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
// // //                     Pay only for what you need. Upgrade anytime as your business grows.
// // //                 </p>
// // //             </div>

// // //             {/* Pricing Cards */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
// // //                 {PLANS.map((plan) => (
// // //                     <div
// // //                         key={plan.key}
// // //                         className="bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-red-500 transition"
// // //                     >
// // //                         <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
// // //                             {plan.name}
// // //                         </h3>

// // //                         <p className="text-2xl font-bold text-red-400 mb-4 text-center md:text-left">
// // //                             {plan.price}
// // //                         </p>

// // //                         <p className="text-gray-300 mb-4 text-center md:text-left">
// // //                             {plan.ads}
// // //                         </p>

// // //                         {/* 🔥 NEW FEATURES LIST */}
// // //                         <ul className="text-sm text-gray-400 space-y-2 mb-6">
// // //                             <li>✔ High-quality exports</li>
// // //                             <li>✔ Mobile & desktop support</li>
// // //                             <li>✔ Easy editing tools</li>
// // //                             <li>✔ Fast rendering</li>
// // //                             <li>✔ Cloud save access</li>
// // //                         </ul>

// // //                         <button
// // //                             // onClick={() => navigate("/signup")}

// // //                             className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-medium transition"
// // //                         >
// // //                             Get Started
// // //                         </button>
// // //                     </div>
// // //                 ))}
// // //             </div>

// // //             {/* Bottom Image Section */}
// // //             <div className="mt-16 md:mt-20 px-4 md:px-8 pb-16">
// // //                 <h3 className="text-center text-xl md:text-2xl font-bold mb-6">
// // //                     Ads You Can Create
// // //                 </h3>

// // //                 <div className="w-full max-w-5xl mx-auto">
// // //                     <img
// // //                         src={adCollection}
// // //                         alt="Sample ad designs"
// // //                         className="w-full h-[30vh] sm:h-[40vh] md:h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
// // //                     />
// // //                 </div>
// // //             </div>

// // //             {/* Footer */}
// // //             <div className="text-center text-gray-500 py-6 border-t border-white/10 text-sm">
// // //                 © {new Date().getFullYear()} AdStudio. All rights reserved.
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // import React from "react";
// // import { PLANS } from "../services/plans";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// // import adCollection from "../assets/ad-collection.png";

// // export default function PricingPage() {
// //     const navigate = useNavigate();
// //     const { user } = useAuth();

// //     // 🔥 PAYHERE PAYMENT HANDLER
// //     const handlePayment = (plan) => {
// //         // 🔴 REQUIRE LOGIN
// //         if (!user) {
// //             navigate("/login");
// //             return;
// //         }

// //         // ⚠️ Convert "LKR 500" → 500
// //         const amount = plan.price.replace(/[^\d]/g, "");

// //         const payment = {
// //             sandbox: true, // ⚠️ change to false in production
// //             merchant_id: "YOUR_MERCHANT_ID",

// //             return_url: "http://localhost:3000/adstudio",
// //             cancel_url: "http://localhost:3000/pricing",
// //             notify_url: "http://localhost:5000/api/payment/notify",

// //             order_id: "ORDER_" + new Date().getTime(),
// //             items: `AdStudio ${plan.name}`,

// //             amount: amount,
// //             currency: "LKR",

// //             first_name: user.name || "User",
// //             last_name: "",
// //             email: user.email,

// //             custom_1: user.id,   // 🔥 USER ID
// //             custom_2: plan.key   // 🔥 PLAN KEY (VERY IMPORTANT FOR NEXT STEP)
// //         };

// //         if (window.payhere) {
// //             window.payhere.startPayment(payment);
// //         } else {
// //             alert("Payment system not loaded");
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">

// //             {/* Top Nav */}
// //             <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 gap-4 md:gap-0">
// //                 <h1 className="text-2xl font-bold">AdStudio</h1>

// //                 <div className="flex flex-wrap justify-center gap-4 md:gap-6">
// //                     <button onClick={() => navigate("/")} className="hover:text-red-400">Home</button>
// //                     <button onClick={() => navigate("/pricing")} className="text-red-400">Pricing</button>
// //                     <button onClick={() => navigate("/login")} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
// //                         Login
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Header */}
// //             <div className="text-center mt-12 md:mt-16 mb-10 md:mb-12 px-4">
// //                 <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
// //                     Simple, Honest Pricing
// //                 </h2>
// //                 <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
// //                     Pay only for what you need. Upgrade anytime as your business grows.
// //                 </p>
// //             </div>

// //             {/* Pricing Cards */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
// //                 {PLANS.map((plan) => (
// //                     <div
// //                         key={plan.key}
// //                         className="bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-red-500 transition"
// //                     >
// //                         <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
// //                             {plan.name}
// //                         </h3>

// //                         <p className="text-2xl font-bold text-red-400 mb-4 text-center md:text-left">
// //                             {plan.price}
// //                         </p>

// //                         <p className="text-gray-300 mb-4 text-center md:text-left">
// //                             {plan.ads}
// //                         </p>

// //                         <ul className="text-sm text-gray-400 space-y-2 mb-6">
// //                             <li>✔ High-quality exports</li>
// //                             <li>✔ Mobile & desktop support</li>
// //                             <li>✔ Easy editing tools</li>
// //                             <li>✔ Fast rendering</li>
// //                             <li>✔ Cloud save access</li>
// //                         </ul>

// //                         <button
// //                             onClick={() => handlePayment(plan)}
// //                             className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-medium transition"
// //                         >
// //                             Buy Now
// //                         </button>
// //                     </div>
// //                 ))}
// //             </div>

// //             {/* Bottom Image Section */}
// //             <div className="mt-16 md:mt-20 px-4 md:px-8 pb-16">
// //                 <h3 className="text-center text-xl md:text-2xl font-bold mb-6">
// //                     Ads You Can Create
// //                 </h3>

// //                 <div className="w-full max-w-5xl mx-auto">
// //                     <img
// //                         src={adCollection}
// //                         alt="Sample ad designs"
// //                         className="w-full h-[30vh] sm:h-[40vh] md:h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
// //                     />
// //                 </div>
// //             </div>

// //             {/* Footer */}
// //             <div className="text-center text-gray-500 py-6 border-t border-white/10 text-sm">
// //                 © {new Date().getFullYear()} AdStudio. All rights reserved.
// //             </div>
// //         </div>
// //     );
// // }

// import React from "react";
// import { PLANS } from "../services/plans";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import adCollection from "../assets/ad-collection.png";

// export default function PricingPage() {
//     const navigate = useNavigate();
//     const { user } = useAuth();

//     // 🔥 2CHECKOUT PAYMENT HANDLER
//     const handlePayment = (plan) => {
//         // 🔴 REQUIRE LOGIN
//         if (!user) {
//             navigate("/login");
//             return;
//         }

//         // ⚠️ Convert "$5" → 5
//         const amount = plan.price.replace(/[^\d]/g, "");

//         // 🔥 BUILD 2CHECKOUT URL
//         const sellerId = "255979618218"; // ← replace this

//         const orderId = "ORDER_" + new Date().getTime();

//         const checkoutUrl = `https://secure.2checkout.com/order/checkout.php?` +
//             `seller_id=${sellerId}` +
//             `&mode=TEST` + // change to LIVE later
//             `&li_0_type=product` +
//             `&li_0_name=AdStudio ${plan.name}` +
//             `&li_0_price=${amount}` +
//             `&li_0_quantity=1` +
//             `&currency_code=USD` +
//             `&merchant_order_id=${orderId}` +
//             `&custom_1=${user.id}` +       // 🔥 USER ID
//             `&custom_2=${plan.key}` +      // 🔥 PLAN KEY
//             `&return_url=http://localhost:3000/adstudio`;

//         // 🔁 REDIRECT USER
//         window.location.href = checkoutUrl;
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">

//             {/* Top Nav */}
//             <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/10 gap-4 md:gap-0">
//                 <h1 className="text-2xl font-bold">AdStudio</h1>

//                 <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//                     <button onClick={() => navigate("/")} className="hover:text-red-400">Home</button>
//                     <button onClick={() => navigate("/pricing")} className="text-red-400">Pricing</button>
//                     <button onClick={() => navigate("/login")} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
//                         Login
//                     </button>
//                 </div>
//             </div>

//             {/* Header */}
//             <div className="text-center mt-12 md:mt-16 mb-10 md:mb-12 px-4">
//                 <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//                     Simple, Honest Pricing
//                 </h2>
//                 <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
//                     Pay only for what you need. Upgrade anytime as your business grows.
//                 </p>
//             </div>

//             {/* Pricing Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
//                 {PLANS.map((plan) => (
//                     <div
//                         key={plan.key}
//                         className="bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-red-500 transition"
//                     >
//                         <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
//                             {plan.name}
//                         </h3>

//                         <p className="text-2xl font-bold text-red-400 mb-4 text-center md:text-left">
//                             {plan.price}
//                         </p>

//                         <p className="text-gray-300 mb-4 text-center md:text-left">
//                             {plan.ads}
//                         </p>

//                         <ul className="text-sm text-gray-400 space-y-2 mb-6">
//                             <li>✔ High-quality exports</li>
//                             <li>✔ Mobile & desktop support</li>
//                             <li>✔ Easy editing tools</li>
//                             <li>✔ Fast rendering</li>
//                             <li>✔ Cloud save access</li>
//                         </ul>

//                         <button
//                             onClick={() => handlePayment(plan)}
//                             className="mt-auto w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-medium transition"
//                         >
//                             Buy Now
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Image Section */}
//             <div className="mt-16 md:mt-20 px-4 md:px-8 pb-16">
//                 <h3 className="text-center text-xl md:text-2xl font-bold mb-6">
//                     Ads You Can Create
//                 </h3>

//                 <div className="w-full max-w-5xl mx-auto">
//                     <img
//                         src={adCollection}
//                         alt="Sample ad designs"
//                         className="w-full h-[30vh] sm:h-[40vh] md:h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
//                     />
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="text-center text-gray-500 py-6 border-t border-white/10 text-sm">
//                 © {new Date().getFullYear()} AdStudio. All rights reserved.
//             </div>
//         </div>
//     );
// }


// // ppl-- 57-39 Scout de Guia St, Diliman, Quezon City, Metro Manila, Philippines

// new look

import React from "react";
import { PLANS } from "../services/plans";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import adCollection from "../assets/ad-collection.png";

export default function PricingPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handlePayment = (plan) => {
        if (!user) {
            navigate("/login");
            return;
        }

        const amount = plan.price.replace(/[^\d]/g, "");

        const sellerId = "255979618218";

        const orderId = "ORDER_" + new Date().getTime();

        const checkoutUrl =
            `https://secure.2checkout.com/order/checkout.php?` +
            `seller_id=${sellerId}` +
            `&mode=TEST` +
            `&li_0_type=product` +
            `&li_0_name=AdStudio ${plan.name}` +
            `&li_0_price=${amount}` +
            `&li_0_quantity=1` +
            `&currency_code=USD` +
            `&merchant_order_id=${orderId}` +
            `&custom_1=${user.id}` +
            `&custom_2=${plan.key}` +
            `&return_url=http://localhost:3000/adstudio`;

        window.location.href = checkoutUrl;
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
            <div className="relative z-10 text-center mt-16 mb-14 px-4">

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

                        <p className="text-4xl font-extrabold text-cyan-400 mb-4 text-center">
                            {plan.price}
                        </p>

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

        </div>
    );
}