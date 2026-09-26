import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://192.168.1.28:5000/api";

export default function PaymentSuccess() {
    const navigate = useNavigate();

    const [searchParams] =
        useSearchParams();

    const { token } = useAuth();

    const [status, setStatus] =
        useState("checking");

    const [user, setUser] =
        useState(null);

    useEffect(() => {
        let attempts = 0;

        const checkPayment = async () => {
            try {
                if (!token) {
                    navigate("/login");
                    return;
                }

                const res = await fetch(
                    `${API_URL}/auth/me`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                const data =
                    await res.json();

                if (!res.ok) {
                    throw new Error(
                        data.message ||
                        "Unable to check account."
                    );
                }

                setUser(data.user);

                /*
                 * PayHere notify and browser return can
                 * happen very close together.
                 *
                 * Give the backend a few attempts to receive
                 * and process the notification.
                 */
                if (data.user.hasPaid) {
                    setStatus("success");
                    return;
                }

                attempts++;

                if (attempts < 10) {
                    setTimeout(
                        checkPayment,
                        1500
                    );
                } else {
                    setStatus("pending");
                }

            } catch (error) {

                console.error(
                    "PAYMENT STATUS ERROR:",
                    error
                );

                setStatus("error");
            }
        };

        checkPayment();

    }, [token, navigate]);

    return (
        <div className="min-h-screen bg-[#08182d] text-white flex items-center justify-center px-4">

            <div className="w-full max-w-lg text-center">

                {status === "checking" && (
                    <>
                        <h1 className="text-3xl font-bold mb-4">
                            Confirming Payment
                        </h1>

                        <p className="text-white/70">
                            Please wait while we confirm
                            your payment.
                        </p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <h1 className="text-3xl font-bold mb-4">
                            Payment Successful
                        </h1>

                        <p className="text-white/70 mb-3">
                            Your {user?.plan} plan is now active.
                        </p>

                        {user?.plan === "lifetime" ? (
                            <p className="text-cyan-300 mb-8">
                                You now have unlimited
                                Download and Share access.
                            </p>
                        ) : (
                            <p className="text-cyan-300 mb-8">
                                {user?.downloadCredits}{" "}
                                Download/Share credits
                                are available.
                            </p>
                        )}

                        <button
                            onClick={() =>
                                navigate("/adstudio")
                            }
                            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
                        >
                            Go to AdStudio
                        </button>
                    </>
                )}

                {status === "pending" && (
                    <>
                        <h1 className="text-3xl font-bold mb-4">
                            Payment Processing
                        </h1>

                        <p className="text-white/70 mb-8">
                            Your payment was returned by
                            PayHere, but our server is still
                            waiting for the payment confirmation.
                            Please refresh in a moment.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/adstudio")
                            }
                            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
                        >
                            Continue to AdStudio
                        </button>
                    </>
                )}

                {status === "error" && (
                    <>
                        <h1 className="text-3xl font-bold mb-4">
                            Unable to Verify Payment
                        </h1>

                        <p className="text-white/70 mb-8">
                            Please try again or contact
                            AdStudio support.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/pricing")
                            }
                            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
                        >
                            Return to Pricing
                        </button>
                    </>
                )}

            </div>
        </div>
    );
}