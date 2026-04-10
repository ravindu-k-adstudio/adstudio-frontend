import { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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

// const API_URL = "http://localhost:5000/api";
const API_URL = "http://192.168.1.28:5000/api"; // your IP

export default function Dashboard() {
    const { user, token, logout } = useAuth();
    const navigate = useNavigate();
    const [ads, setAds] = useState([]);
    const [loadingAds, setLoadingAds] = useState(true);

    useEffect(() => {
        if (!token) return;

        const loadAds = async () => {
            setLoadingAds(true);
            try {
                const res = await fetch(`${API_URL}/ads/my`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const data = await res.json();
                setAds(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Failed to load ads", err);
                setAds([]);
            } finally {
                setLoadingAds(false);
            }
        };

        loadAds();
    }, [token]);

    const deleteAd = async (adId) => {
        if (!window.confirm("Are you sure you want to delete this ad?")) return;

        try {
            const res = await fetch(`${API_URL}/ads/${adId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                setAds(prev => prev.filter(ad => ad._id !== adId));
            }
        } catch (err) {
            console.error("Error deleting ad:", err);
        }
    };

    const currentPlanObj = PLANS.find(
        p => p.key === (user?.plan || "starter").toLowerCase()
    );

    const adsLimit = currentPlanObj?.adsLimit ?? 3;
    const downloadsUsed = user?.downloadsUsed ?? 0;

    const remaining =
        adsLimit === Infinity
            ? "Unlimited"
            : Math.max(adsLimit - downloadsUsed, 0);

    const progressPercentage =
        adsLimit === Infinity
            ? 0
            : Math.min((downloadsUsed / adsLimit) * 100, 100);

    const randomNumber = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const pieData = useMemo(() => [
        { name: "Views", value: randomNumber(200, 1000) },
        { name: "Likes", value: randomNumber(100, 600) },
        { name: "Shares", value: randomNumber(50, 400) }
    ], []);

    const barData = useMemo(() => [
        { name: "Mon", ads: randomNumber(0, 5) },
        { name: "Tue", ads: randomNumber(0, 5) },
        { name: "Wed", ads: randomNumber(0, 5) },
        { name: "Thu", ads: randomNumber(0, 5) },
        { name: "Fri", ads: randomNumber(0, 5) }
    ], []);

    const lineData = useMemo(() => [
        { day: "Week 1", views: randomNumber(100, 400) },
        { day: "Week 2", views: randomNumber(400, 800) },
        { day: "Week 3", views: randomNumber(800, 1500) }
    ], []);

    const randomColor = () =>
        `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const COLORS = useMemo(() => [
        randomColor(),
        randomColor(),
        randomColor()
    ], []);

    const barColor = useMemo(() => randomColor(), []);
    const lineColor = useMemo(() => randomColor(), []);

    return (
        <>
            <Navbar />

            {/* 🔥 RESPONSIVE WRAPPER */}
            <div className="min-h-screen bg-[#f4f6fb] p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#0b1f33]">
                            Dashboard
                        </h1>
                        <button
                            onClick={logout}
                            className="px-4 py-2 bg-[#0b1f33] text-white rounded-xl shadow w-full sm:w-auto"
                        >
                            Logout
                        </button>
                    </div>

                    {/* USER INFO */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow border">
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Plan:</b> {user.plan}</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow border">
                            <p><b>Downloads Used:</b> {downloadsUsed}</p>
                            <p><b>Remaining:</b> {remaining}</p>

                            <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="h-3 rounded-full transition-all"
                                    style={{
                                        width: `${progressPercentage}%`,
                                        backgroundColor: barColor
                                    }}
                                />
                            </div>
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
                            Upgrade Plan
                        </button>
                    </div>

                    {/* SAVED ADS */}
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow border">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Saved Ads
                        </h2>

                        {loadingAds && <p className="text-gray-500">Loading ads…</p>}
                        {!loadingAds && ads.length === 0 && (
                            <p className="text-gray-500">No ads created yet</p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {ads.map(ad => (
                                <div
                                    key={ad._id}
                                    className="relative bg-white p-2 rounded-xl border shadow flex flex-col items-center"
                                >
                                    {ad.image ? (
                                        <img
                                            src={ad.image}
                                            className="w-full aspect-square object-contain rounded mb-3"
                                            alt="Ad"
                                        />
                                    ) : (
                                        <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400">
                                            No preview
                                        </div>
                                    )}

                                    <p className="font-semibold text-center">
                                        {ad.title || "Untitled Ad"}
                                    </p>

                                    <div className="flex gap-2 mt-2">
                                        <button
                                            onClick={() =>
                                                navigate("/adstudio", { state: { ad } })
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

                {/* RIGHT */}
                <aside className="lg:col-span-4 flex flex-col gap-6">

                    <div className="bg-white rounded-2xl p-4 shadow border">
                        <h3 className="font-semibold mb-2">Engagement</h3>
                        <ResponsiveContainer width="100%" height={180}>
                            <PieChart>
                                <Pie data={pieData} dataKey="value" outerRadius={70}>
                                    {pieData.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border">
                        <h3 className="font-semibold mb-2">Ads per day</h3>
                        <ResponsiveContainer width="100%" height={180}>
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <Bar dataKey="ads" fill={barColor} />
                                <Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow border">
                        <h3 className="font-semibold mb-2">Views Growth</h3>
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
                    </div>
                </aside>

                <Footer />
            </div>
        </>
    );
}