
import { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { PLANS } from "../data/plans";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import Footer from "../components/Footer";

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://192.168.1.28:5000/api";

export default function Dashboard() {
    const { user, token, logout } = useAuth();
    const navigate = useNavigate();

    const [ads, setAds] = useState([]);
    const [loadingAds, setLoadingAds] = useState(true);

    // Load saved advertisements
    useEffect(() => {
        if (!token) {
            setAds([]);
            setLoadingAds(false);
            return;
        }

        let cancelled = false;

        const loadAds = async () => {
            setLoadingAds(true);

            try {
                const res = await fetch(
                    `${API_URL}/ads/my`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to load saved ads.");
                }

                const data = await res.json();

                if (!cancelled) {
                    setAds(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                console.error("Failed to load ads:", err);

                if (!cancelled) {
                    setAds([]);
                }
            } finally {
                if (!cancelled) {
                    setLoadingAds(false);
                }
            }
        };

        loadAds();

        return () => {
            cancelled = true;
        };
    }, [token]);

    // Delete a saved advertisement
    const deleteAd = async (adId) => {
        if (
            !window.confirm(
                "Are you sure you want to delete this ad?"
            )
        ) {
            return;
        }

        try {
            const res = await fetch(
                `${API_URL}/ads/${adId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (!res.ok) {
                throw new Error("Unable to delete this ad.");
            }

            setAds(previous =>
                previous.filter(ad => ad._id !== adId)
            );
        } catch (err) {
            console.error("Error deleting ad:", err);
            alert("Unable to delete this ad. Please try again.");
        }
    };

    // =========================================================
    // ACCOUNT AND PLAN DETAILS
    // =========================================================

    const planKey = String(
        user?.plan || "starter"
    ).toLowerCase();

    const currentPlanObj = PLANS.find(
        plan =>
            String(plan.key).toLowerCase() === planKey
    );

    const planName =
        currentPlanObj?.name ||
        planKey.charAt(0).toUpperCase() + planKey.slice(1);

    const hasPaid = Boolean(user?.hasPaid);

    const isLifetime = planKey === "lifetime";

    // This is the real credit balance from the backend.
    // Do not calculate credits from adsCreated or downloadsUsed.
    const creditBalance = Math.max(
        0,
        Number(user?.downloadCredits ?? 0)
    );

    const downloadCredits = isLifetime
        ? "Unlimited"
        : creditBalance;

    const savedAdsCount = ads.length;

    const downloadDescription = isLifetime
        ? "Unlimited Download / Share actions"
        : `${creditBalance} Download / Share credit${creditBalance === 1 ? "" : "s"
        } remaining`;

    const planPrice =
        currentPlanObj?.price != null
            ? currentPlanObj.price
            : null;

    // =========================================================
    // CHARTS
    // Preserve the existing chart UI.
    //
    // Real engagement/view analytics are not available in the
    // user/ad data shown here, so do not present random numbers
    // as real statistics. The ads-per-day chart uses actual
    // saved-ad creation dates when available.
    // =========================================================

    const pieData = useMemo(() => [
        { name: "Views", value: 0 },
        { name: "Likes", value: 0 },
        { name: "Shares", value: 0 }
    ], []);

    const barData = useMemo(() => {
        const days = [
            { name: "Mon", day: 1, ads: 0 },
            { name: "Tue", day: 2, ads: 0 },
            { name: "Wed", day: 3, ads: 0 },
            { name: "Thu", day: 4, ads: 0 },
            { name: "Fri", day: 5, ads: 0 }
        ];

        const now = new Date();

        const monday = new Date(now);
        const weekday = now.getDay();
        const daysSinceMonday = (weekday + 6) % 7;

        monday.setDate(now.getDate() - daysSinceMonday);
        monday.setHours(0, 0, 0, 0);

        ads.forEach(ad => {
            const createdAt = ad.createdAt
                ? new Date(ad.createdAt)
                : null;

            if (
                !createdAt ||
                Number.isNaN(createdAt.getTime()) ||
                createdAt < monday
            ) {
                return;
            }

            const dayIndex = (createdAt.getDay() + 6) % 7;

            if (dayIndex < 5) {
                days[dayIndex].ads += 1;
            }
        });

        return days.map(({ name, ads: count }) => ({
            name,
            ads: count
        }));
    }, [ads]);

    const lineData = useMemo(() => {
        const now = new Date();

        const weeks = [
            { day: "Week 1", views: 0 },
            { day: "Week 2", views: 0 },
            { day: "Week 3", views: 0 }
        ];

        // Real view tracking is not currently available.
        // Keep the chart but do not invent view statistics.
        return weeks;
    }, []);

    const COLORS = ["#64748b", "#94a3b8", "#cbd5e1"];
    const barColor = "#2563eb";
    const lineColor = "#0891b2";

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#f4f6fb] p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-8 flex flex-col gap-6">

                        {/* HEADER */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-[#0b1f33]">
                                    Dashboard
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Welcome back, {user?.name || "User"}
                                </p>
                            </div>

                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-[#0b1f33] text-white rounded-xl shadow w-full sm:w-auto"
                            >
                                Logout
                            </button>
                        </div>

                        {/* PROFILE */}
                        <div className="bg-white rounded-2xl p-6 shadow border">
                            <h2 className="text-lg font-semibold text-[#0b1f33] mb-4">
                                Your Profile
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Name
                                    </p>
                                    <p className="font-medium break-words">
                                        {user?.name || "Not provided"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>
                                    <p className="font-medium break-all">
                                        {user?.email || "Not provided"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Phone
                                    </p>
                                    <p className="font-medium break-words">
                                        {user?.phone || "Not provided"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        City
                                    </p>
                                    <p className="font-medium break-words">
                                        {user?.city || "Not provided"}
                                    </p>
                                </div>

                                <div className="sm:col-span-2">
                                    <p className="text-sm text-gray-500">
                                        Address
                                    </p>
                                    <p className="font-medium break-words">
                                        {user?.address || "Not provided"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* PLAN AND CREDITS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="bg-white rounded-2xl p-6 shadow border">
                                <p className="text-sm text-gray-500">
                                    Current Plan
                                </p>

                                <p className="text-2xl font-bold text-[#0b1f33] mt-2">
                                    {planName}
                                </p>

                                <p className={`text-sm mt-2 font-medium ${hasPaid
                                    ? "text-green-600"
                                    : "text-amber-600"
                                    }`}>
                                    {hasPaid
                                        ? "Payment Active"
                                        : "No paid plan"}
                                </p>

                                {planPrice !== null && (
                                    <p className="text-sm text-gray-500 mt-2">
                                        Plan price: {planPrice}
                                    </p>
                                )}

                                <button
                                    onClick={() => navigate("/pricing")}
                                    className="mt-4 px-4 py-2 bg-[#0b1f33] text-white rounded-xl"
                                >
                                    {hasPaid
                                        ? "Upgrade Plan"
                                        : "Choose a Plan"}
                                </button>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow border">
                                <p className="text-sm text-gray-500">
                                    Download / Share Credits
                                </p>

                                <p className="text-3xl font-bold text-[#0b1f33] mt-2">
                                    {downloadCredits}
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    {downloadDescription}
                                </p>

                                {!isLifetime && (
                                    <div className="mt-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-3 rounded-full bg-blue-600 transition-all"
                                            style={{
                                                width: hasPaid
                                                    ? `${Math.min(
                                                        (creditBalance /
                                                            Math.max(
                                                                Number(currentPlanObj?.downloadCredits) ||
                                                                Number(currentPlanObj?.credits) ||
                                                                creditBalance ||
                                                                1,
                                                                1
                                                            )) *
                                                        100,
                                                        100
                                                    )}%`
                                                    : "0%"
                                            }}
                                        />
                                    </div>
                                )}

                                <p className="text-xs text-gray-400 mt-2">
                                    Each successful Download or Share uses one credit.
                                </p>
                            </div>
                        </div>

                        {/* SUMMARY CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="bg-white rounded-2xl p-6 shadow border">
                                <p className="text-sm text-gray-500">
                                    Saved Ads
                                </p>

                                <p className="text-3xl font-bold text-[#0b1f33] mt-2">
                                    {loadingAds ? "…" : savedAdsCount}
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    Advertisements saved to your account
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow border">
                                <p className="text-sm text-gray-500">
                                    Available Downloads
                                </p>

                                <p className="text-3xl font-bold text-[#0b1f33] mt-2">
                                    {hasPaid
                                        ? downloadCredits
                                        : 0}
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    {hasPaid
                                        ? downloadDescription
                                        : "Purchase a plan to download or share ads."}
                                </p>
                            </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => navigate("/adstudio")}
                                className="w-full sm:w-auto px-6 py-3 bg-[#0b1f33] text-white rounded-xl"
                            >
                                Create New Ad
                            </button>

                            <button
                                onClick={() => navigate("/pricing")}
                                className="w-full sm:w-auto px-6 py-3 bg-[#0b1f33] text-white rounded-xl"
                            >
                                {hasPaid
                                    ? "Upgrade Plan"
                                    : "View Plans"}
                            </button>
                        </div>

                        {/* SAVED ADS */}
                        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow border">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4">
                                Saved Ads ({loadingAds ? "…" : savedAdsCount})
                            </h2>

                            {loadingAds && (
                                <p className="text-gray-500">
                                    Loading ads…
                                </p>
                            )}

                            {!loadingAds && ads.length === 0 && (
                                <p className="text-gray-500">
                                    No ads created yet.
                                </p>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                                {ads.map(ad => (
                                    <div
                                        key={ad._id}
                                        className="relative min-w-0 bg-white p-2 rounded-xl border shadow flex flex-col items-center"
                                    >
                                        {ad.image ? (
                                            <img
                                                src={ad.image}
                                                className="w-full aspect-square object-contain rounded mb-3"
                                                alt={ad.title || "Saved advertisement"}
                                            />
                                        ) : (
                                            <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400">
                                                No preview
                                            </div>
                                        )}

                                        <p className="font-semibold text-center break-words w-full">
                                            {ad.title || "Untitled Ad"}
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        "/adstudio",
                                                        { state: { ad } }
                                                    )
                                                }
                                                className="px-3 py-1 bg-[#0b1f33] text-white rounded"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => deleteAd(ad._id)}
                                                className="px-3 py-1 bg-red-600 text-white rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: KEEP ALL THREE CHARTS */}
                    <aside className="lg:col-span-4 flex flex-col gap-6">

                        <div className="bg-white rounded-2xl p-4 shadow border">
                            <h3 className="font-semibold mb-2">
                                Engagement
                            </h3>

                            <ResponsiveContainer width="100%" height={180}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        dataKey="value"
                                        nameKey="name"
                                        outerRadius={70}
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell
                                                key={entry.name}
                                                fill={COLORS[index]}
                                            />
                                        ))}
                                    </Pie>

                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>

                            <p className="text-xs text-gray-400">
                                Engagement tracking is not connected yet.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow border">
                            <h3 className="font-semibold mb-2">
                                Ads per day
                            </h3>

                            <ResponsiveContainer width="100%" height={180}>
                                <BarChart data={barData}>
                                    <XAxis dataKey="name" />
                                    <Bar
                                        dataKey="ads"
                                        fill={barColor}
                                    />
                                    <Tooltip />
                                </BarChart>
                            </ResponsiveContainer>

                            <p className="text-xs text-gray-400">
                                Based on saved ads created this week.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow border">
                            <h3 className="font-semibold mb-2">
                                Views Growth
                            </h3>

                            <ResponsiveContainer width="100%" height={180}>
                                <LineChart data={lineData}>
                                    <XAxis dataKey="day" />

                                    <Line
                                        type="monotone"
                                        dataKey="views"
                                        stroke={lineColor}
                                        strokeWidth={3}
                                    />

                                    <Tooltip />
                                </LineChart>
                            </ResponsiveContainer>

                            <p className="text-xs text-gray-400">
                                View tracking is not connected yet.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </>
    );
}