
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://192.168.1.28:5000/api";

export default function PaymentSuccess() {
    const navigate = useNavigate();

    const {
        token,
        loading,
        refreshUser
    } = useAuth();

    const [status, setStatus] =
        useState("checking");

    const [message, setMessage] =
        useState(
            "Confirming your payment..."
        );

    useEffect(() => {
        if (loading) return;

        if (!token) {
            navigate("/login", {
                replace: true
            });

            return;
        }

        let attempts = 0;
        let timer = null;
        let cancelled = false;

        const checkPayment = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/auth/me`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(
                        data.message ||
                        "Unable to check account."
                    );
                }

                if (cancelled) return;

                if (data.user?.hasPaid) {
                    setStatus("success");
                    setMessage(
                        "Payment successful. Your plan is now active."
                    );

                    try {
                        await refreshUser(token);
                    } catch (refreshError) {
                        console.error(
                            "USER REFRESH ERROR:",
                            refreshError
                        );
                    }

                    if (!cancelled) {
                        setTimeout(() => {
                            navigate(
                                "/dashboard",
                                {
                                    replace: true
                                }
                            );
                        }, 1200);
                    }

                    return;
                }

                attempts++;

                if (attempts < 10) {
                    setMessage(
                        "Payment received. Waiting for payment confirmation..."
                    );

                    timer = setTimeout(
                        checkPayment,
                        1500
                    );

                    return;
                }

                setStatus("pending");

                setMessage(
                    "Your payment is still being confirmed. Please check your dashboard shortly."
                );
            } catch (error) {
                console.error(
                    "PAYMENT STATUS ERROR:",
                    error
                );

                if (!cancelled) {
                    setStatus("error");

                    setMessage(
                        "We could not confirm the payment yet."
                    );
                }
            }
        };

        checkPayment();

        return () => {
            cancelled = true;

            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [
        loading,
        token,
        navigate,
        refreshUser
    ]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#071525] px-5">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">

                {status === "checking" && (
                    <>
                        <div className="w-14 h-14 mx-auto mb-5 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />

                        <h1 className="text-2xl font-bold text-gray-900 mb-3">
                            Confirming Payment
                        </h1>

                        <p className="text-gray-600">
                            {message}
                        </p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl font-bold">
                            ✓
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-3">
                            Payment Successful
                        </h1>

                        <p className="text-gray-600 mb-5">
                            {message}
                        </p>

                        <p className="text-sm text-gray-500">
                            Redirecting you to your Dashboard...
                        </p>
                    </>
                )}

                {status === "pending" && (
                    <>
                        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-3xl">
                            !
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-3">
                            Payment Processing
                        </h1>

                        <p className="text-gray-600 mb-6">
                            {message}
                        </p>

                        <button
                            onClick={() =>
                                navigate(
                                    "/dashboard"
                                )
                            }
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
                        >
                            Go to Dashboard
                        </button>
                    </>
                )}

                {status === "error" && (
                    <>
                        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-3xl">
                            !
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-3">
                            Payment Confirmation Delayed
                        </h1>

                        <p className="text-gray-600 mb-6">
                            {message}
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() =>
                                    navigate(
                                        "/dashboard"
                                    )
                                }
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
                            >
                                Go to Dashboard
                            </button>

                            <button
                                onClick={() =>
                                    navigate(
                                        "/pricing"
                                    )
                                }
                                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-xl"
                            >
                                Return to Pricing
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}