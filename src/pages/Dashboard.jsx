
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaArrowRight,
    FaChartLine,
    FaCheckCircle,
    FaClock,
    FaCloudDownloadAlt,
    FaEdit,
    FaEnvelope,
    FaEye,
    FaFileAlt,
    FaGlobe,
    FaMapMarkerAlt,
    FaPlus,
    FaRocket,
    FaShieldAlt,
    FaTrash,
    FaUser,
    FaWallet,
    FaPhone,
} from "react-icons/fa";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { PLANS } from "../data/plans";
import logo from "../assets/adstudio-logo.png";

const API_URL =
    import.meta.env.VITE_API_URL || "http://192.168.1.28:5000/api";

/* AdStudio theme */
const THEME = {
    navy: "#0B1F33",
    blue: "#2563EB",
    cyan: "#06B6D4",
    purple: "#818CF8",
    green: "#10B981",
    orange: "#F59E0B",
    red: "#EF4444",
    text: "#15283D",
    muted: "#718096",
    border: "#E4EAF2",
    background: "#F3F7FC",
};

const DEMO_ENGAGEMENT = [
    { name: "Views", value: 48, color: THEME.blue },
    { name: "Likes", value: 30, color: THEME.cyan },
    { name: "Shares", value: 22, color: THEME.purple },
];

const DEMO_ADS_PER_DAY = [
    { day: "Mon", ads: 3 },
    { day: "Tue", ads: 5 },
    { day: "Wed", ads: 4 },
    { day: "Thu", ads: 7 },
    { day: "Fri", ads: 6 },
    { day: "Sat", ads: 9 },
    { day: "Sun", ads: 8 },
];

const DEMO_VIEWS_GROWTH = [
    { week: "Week 1", views: 120 },
    { week: "Week 2", views: 185 },
    { week: "Week 3", views: 260 },
    { week: "Week 4", views: 390 },
    { week: "Week 5", views: 520 },
    { week: "Week 6", views: 680 },
];

const numberValue = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
};

const getAdDate = (ad) => {
    const value = ad?.createdAt || ad?.created_at || ad?.updatedAt;
    if (!value) return null;

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
};

const formatDate = (value) => {
    if (!value) return "Recently saved";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Recently saved";

    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getAdTitle = (ad, index) =>
    ad?.title || ad?.name || `My Ad ${index + 1}`;

const getPlanName = (planKey, planObject) => {
    if (planObject?.name) return planObject.name;

    return String(planKey || "starter")
        .replace(/[_-]/g, " ")
        .replace(/\b\w/g, (character) => character.toUpperCase());
};

const getPlanCredits = (planKey) => {
    const credits = {
        starter: 5,
        basic: 7,
        growth: 15,
        scale: 40,
        lifetime: Infinity,
    };

    return credits[String(planKey || "starter").toLowerCase()] ?? 0;
};

function Dashboard() {
    const { user, token } = useAuth();
    const navigate = useNavigate();

    const [ads, setAds] = useState([]);
    const [loadingAds, setLoadingAds] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const [error, setError] = useState("");

    const planKey = String(user?.plan || "starter").toLowerCase();
    const currentPlanObj = PLANS.find(
        (plan) => String(plan.key).toLowerCase() === planKey
    );

    const planName = getPlanName(planKey, currentPlanObj);
    const hasPaid = Boolean(user?.hasPaid);
    const isLifetime = planKey === "lifetime" && hasPaid;

    const creditBalance = numberValue(user?.downloadCredits);
    const downloadCredits = isLifetime ? "Unlimited" : creditBalance;

    const savedAdsCount = ads.length;
    const planCreditLimit = getPlanCredits(planKey);

    const creditProgress = isLifetime
        ? 100
        : planCreditLimit > 0
            ? Math.min((creditBalance / planCreditLimit) * 100, 100)
            : 0;

    const loadAds = useCallback(
        async (signal) => {
            if (!token) {
                setAds([]);
                setLoadingAds(false);
                return;
            }

            setLoadingAds(true);
            setError("");

            try {
                const response = await fetch(`${API_URL}/ads/my`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    signal,
                });

                if (!response.ok) {
                    throw new Error("Unable to load your saved ads.");
                }

                const result = await response.json();

                const userAds = Array.isArray(result)
                    ? result
                    : Array.isArray(result?.ads)
                        ? result.ads
                        : Array.isArray(result?.data)
                            ? result.data
                            : [];

                setAds(userAds);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Dashboard ads error:", err);
                    setError("We couldn't load your saved ads. Please try again.");
                }
            } finally {
                if (!signal?.aborted) {
                    setLoadingAds(false);
                }
            }
        },
        [token]
    );

    useEffect(() => {
        const controller = new AbortController();
        loadAds(controller.signal);

        return () => controller.abort();
    }, [loadAds]);

    const handleDeleteAd = async (adId) => {
        if (!adId) {
            alert("This ad does not have a valid ID.");
            return;
        }

        const confirmed = window.confirm(
            "Are you sure you want to delete this saved ad?"
        );

        if (!confirmed) return;

        setDeletingId(adId);
        setError("");

        try {
            const response = await fetch(`${API_URL}/ads/${adId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const result = await response.json().catch(() => ({}));
                throw new Error(result?.message || "Failed to delete this ad.");
            }

            setAds((currentAds) =>
                currentAds.filter((ad) => String(ad._id || ad.id) !== String(adId))
            );
        } catch (err) {
            console.error("Delete ad error:", err);
            alert(err.message || "Unable to delete this ad. Please try again.");
        } finally {
            setDeletingId(null);
        }
    };

    /*
     * Real engagement metrics are used when the API actually supplies them.
     * Demo values are used until real tracking data becomes available.
     */
    const engagementData = useMemo(() => {
        const totals = { views: 0, likes: 0, shares: 0 };
        let hasRealMetrics = false;

        ads.forEach((ad) => {
            const metrics = ad?.analytics || ad?.stats || ad;

            const metricFields = [
                ["views", ["views", "viewCount", "view_count"]],
                ["likes", ["likes", "likeCount", "like_count"]],
                ["shares", ["shares", "shareCount", "share_count"]],
            ];

            metricFields.forEach(([key, fields]) => {
                const field = fields.find((name) => metrics?.[name] != null);

                if (field) {
                    totals[key] += numberValue(metrics[field]);
                    hasRealMetrics = true;
                }
            });
        });

        if (!hasRealMetrics) {
            return {
                data: DEMO_ENGAGEMENT,
                isDemo: true,
            };
        }

        return {
            data: [
                { name: "Views", value: totals.views, color: THEME.blue },
                { name: "Likes", value: totals.likes, color: THEME.cyan },
                { name: "Shares", value: totals.shares, color: THEME.purple },
            ],
            isDemo: false,
        };
    }, [ads]);

    /*
     * Use real saved-ad creation dates when present.
     * Fall back to example activity if no dated ads are available.
     */
    const adsPerDayData = useMemo(() => {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const counts = Array(7).fill(0);
        let datedAdsCount = 0;

        ads.forEach((ad) => {
            const date = getAdDate(ad);
            if (!date) return;

            counts[date.getDay()] += 1;
            datedAdsCount += 1;
        });

        if (datedAdsCount === 0) {
            return {
                data: DEMO_ADS_PER_DAY,
                isDemo: true,
            };
        }

        const today = new Date().getDay();

        const orderedDays = Array.from({ length: 7 }, (_, index) => {
            const dayIndex = (today + index + 1) % 7;
            return {
                day: dayNames[dayIndex],
                ads: counts[dayIndex],
            };
        });

        return {
            data: orderedDays,
            isDemo: false,
        };
    }, [ads]);

    /*
     * Real views over time are used only when dated view metrics exist.
     * Otherwise, the chart shows illustrative demo data.
     */
    const viewsGrowthData = useMemo(() => {
        const weeklyViews = new Map();
        let realViewRecords = 0;

        ads.forEach((ad) => {
            const metrics = ad?.analytics || ad?.stats || ad;
            const viewField = ["views", "viewCount", "view_count"].find(
                (field) => metrics?.[field] != null
            );

            const date = getAdDate(ad);

            if (!viewField || !date) return;

            const weekStart = new Date(date);
            weekStart.setHours(0, 0, 0, 0);
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());

            const key = weekStart.toISOString().slice(0, 10);

            weeklyViews.set(
                key,
                (weeklyViews.get(key) || 0) + numberValue(metrics[viewField])
            );

            realViewRecords += 1;
        });

        if (realViewRecords === 0) {
            return {
                data: DEMO_VIEWS_GROWTH,
                isDemo: true,
            };
        }

        const data = Array.from(weeklyViews.entries())
            .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
            .slice(-6)
            .map(([date, views]) => ({
                week: new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                }),
                views,
            }));

        return {
            data,
            isDemo: false,
        };
    }, [ads]);

    const profileFields = [
        {
            icon: <FaEnvelope />,
            label: "Email address",
            value: user?.email || "Not provided",
        },
        {
            icon: <FaPhone />,
            label: "Phone number",
            value: user?.phone || "Not provided",
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "City",
            value: user?.city || "Not provided",
        },
        {
            icon: <FaGlobe />,
            label: "Address",
            value: user?.address || "Not provided",
        },
    ];

    const downloadDescription = isLifetime
        ? "Unlimited downloads and shares"
        : `${creditBalance} download/share credit${creditBalance === 1 ? "" : "s"} remaining`;

    return (
        <div className="ad-dashboard min-h-screen">
            <style>{`
        .ad-dashboard {
          --ad-navy: ${THEME.navy};
          --ad-blue: ${THEME.blue};
          --ad-cyan: ${THEME.cyan};
          background:
            radial-gradient(ellipse at 8% 0%, rgba(37, 99, 235, 0.08), transparent 36%),
            radial-gradient(ellipse at 95% 12%, rgba(6, 182, 212, 0.07), transparent 30%),
            ${THEME.background};
          color: ${THEME.text};
        }

        .ad-dashboard * {
          box-sizing: border-box;
        }

        .ad-dashboard .dashboard-content {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 32px 28px 54px;
        }

        .ad-dashboard .dashboard-card {
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid ${THEME.border};
          border-radius: 22px;
          box-shadow: 0 8px 28px rgba(11, 31, 51, 0.045);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
          min-width: 0;
        }

        .ad-dashboard .dashboard-card:hover {
          transform: translateY(-3px);
          border-color: rgba(37, 99, 235, 0.22);
          box-shadow: 0 16px 36px rgba(11, 31, 51, 0.085);
        }

        .ad-dashboard .dashboard-enter {
          animation: adDashboardEnter 500ms ease both;
        }

        .ad-dashboard .dashboard-delay-1 {
          animation-delay: 70ms;
        }

        .ad-dashboard .dashboard-delay-2 {
          animation-delay: 140ms;
        }

        .ad-dashboard .dashboard-delay-3 {
          animation-delay: 210ms;
        }

        .ad-dashboard .dashboard-delay-4 {
          animation-delay: 280ms;
        }

        @keyframes adDashboardEnter {
          from {
            opacity: 0;
            transform: translateY(13px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ad-dashboard .dashboard-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid transparent;
          border-radius: 12px;
          padding: 12px 17px;
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: linear-gradient(120deg, ${THEME.navy}, ${THEME.blue});
          box-shadow: 0 7px 18px rgba(37, 99, 235, 0.18);
          transition: transform 180ms ease, box-shadow 180ms ease;
          cursor: pointer;
          text-decoration: none;
        }

        .ad-dashboard .dashboard-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 11px 24px rgba(37, 99, 235, 0.25);
        }

        .ad-dashboard .dashboard-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid ${THEME.border};
          border-radius: 12px;
          padding: 11px 15px;
          font-size: 14px;
          font-weight: 700;
          color: ${THEME.navy};
          background: white;
          transition: all 180ms ease;
          cursor: pointer;
          text-decoration: none;
        }

        .ad-dashboard .dashboard-secondary:hover {
          background: #F1F6FF;
          border-color: #BBD0FF;
          transform: translateY(-1px);
        }

        .ad-dashboard .dashboard-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          border-radius: 14px;
          background: #EAF1FF;
          color: ${THEME.blue};
          font-size: 17px;
        }

        .ad-dashboard .dashboard-chart {
          width: 100%;
          min-width: 0;
          height: 250px;
        }

        .ad-dashboard .dashboard-label {
          color: ${THEME.muted};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.045em;
          text-transform: uppercase;
        }

        .ad-dashboard .dashboard-footer {
          background:
            radial-gradient(ellipse at 12% 0%, rgba(6, 182, 212, 0.15), transparent 40%),
            linear-gradient(125deg, #071827, ${THEME.navy} 55%, #102E4D);
          color: #EAF2FC;
        }

        .ad-dashboard .dashboard-footer a {
          color: #CBD9EB;
          transition: color 180ms ease;
        }

        .ad-dashboard .dashboard-footer a:hover {
          color: white;
        }

        .ad-dashboard .dashboard-ad-image {
          background: linear-gradient(135deg, #EAF1FF, #E6FAFD);
        }

        .ad-dashboard .dashboard-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .ad-dashboard .dashboard-content {
            padding: 22px 15px 36px;
          }

          .ad-dashboard .dashboard-card {
            border-radius: 17px;
          }

          .ad-dashboard .dashboard-chart {
            height: 225px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ad-dashboard *,
          .ad-dashboard *::before,
          .ad-dashboard *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

            <Navbar />

            <main className="dashboard-content">
                {/* Page heading */}
                <section className="dashboard-enter mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            YOUR ADSTUDIO WORKSPACE
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F33] sm:text-4xl">
                            Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}!
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            Your creative workspace is ready. Manage your designs, track your
                            activity, and create something great today.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link to="/pricing" className="dashboard-secondary">
                            <FaRocket />
                            Explore plans
                        </Link>

                        <Link to="/adstudio" className="dashboard-primary">
                            <FaPlus />
                            Create new ad
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </section>

                {/* Summary cards */}
                <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="dashboard-card dashboard-enter dashboard-delay-1 p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="dashboard-label">Saved designs</p>
                                <p className="mt-3 text-3xl font-extrabold text-[#0B1F33]">
                                    {savedAdsCount}
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    Your saved creative projects
                                </p>
                            </div>
                            <div className="dashboard-icon">
                                <FaFileAlt />
                            </div>
                        </div>
                        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-700 to-cyan-400 transition-all duration-700"
                                style={{
                                    width: `${Math.min(savedAdsCount * 10, 100)}%`,
                                }}
                            />
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-enter dashboard-delay-2 p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="dashboard-label">Download credits</p>
                                <p className="mt-3 text-3xl font-extrabold text-[#0B1F33]">
                                    {downloadCredits}
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    {downloadDescription}
                                </p>
                            </div>
                            <div
                                className="dashboard-icon"
                                style={{ background: "#E6FAF5", color: THEME.green }}
                            >
                                <FaCloudDownloadAlt />
                            </div>
                        </div>
                        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-700"
                                style={{ width: `${creditProgress}%` }}
                            />
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-enter dashboard-delay-3 p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="dashboard-label">Current plan</p>
                                <p className="mt-3 text-2xl font-extrabold text-[#0B1F33]">
                                    {planName}
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    {isLifetime
                                        ? "Lifetime access"
                                        : hasPaid
                                            ? "Paid plan active"
                                            : "Free account"}
                                </p>
                            </div>
                            <div
                                className="dashboard-icon"
                                style={{ background: "#F0EDFF", color: "#7561D8" }}
                            >
                                <FaWallet />
                            </div>
                        </div>

                        <div className="mt-4">
                            <span
                                className="dashboard-tag"
                                style={
                                    hasPaid
                                        ? { background: "#E6FAF1", color: "#087B55" }
                                        : { background: "#FFF4E5", color: "#A45A00" }
                                }
                            >
                                {hasPaid ? <FaCheckCircle /> : <FaClock />}
                                {hasPaid ? "Payment confirmed" : "Upgrade to unlock downloads"}
                            </span>
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-enter dashboard-delay-4 p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="dashboard-label">Creative activity</p>
                                <p className="mt-3 text-3xl font-extrabold text-[#0B1F33]">
                                    {adsPerDayData.isDemo
                                        ? "Growing"
                                        : ads.reduce((count, ad) => count + (getAdDate(ad) ? 1 : 0), 0)}
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    {adsPerDayData.isDemo
                                        ? "Example activity until more designs are saved"
                                        : "Saved designs with recorded dates"}
                                </p>
                            </div>
                            <div
                                className="dashboard-icon"
                                style={{ background: "#FFF3E5", color: THEME.orange }}
                            >
                                <FaChartLine />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Profile and plan */}
                <section className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-5">
                    <div className="dashboard-card dashboard-enter p-6 xl:col-span-3">
                        <div className="mb-6 flex items-center gap-4">
                            <div
                                className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl text-white shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${THEME.navy}, ${THEME.blue}, ${THEME.cyan})`,
                                }}
                            >
                                <FaUser />
                            </div>

                            <div className="min-w-0">
                                <h2 className="text-lg font-extrabold text-[#0B1F33]">
                                    Account overview
                                </h2>
                                <p className="mt-1 break-all text-sm text-slate-500">
                                    {user?.email || "Your AdStudio account"}
                                </p>
                            </div>

                            <span className="ml-auto hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 sm:inline-flex">
                                <FaShieldAlt />
                                Account
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {profileFields.map((field) => (
                                <div
                                    key={field.label}
                                    className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5"
                                >
                                    <span className="mt-0.5 text-sm text-blue-600">
                                        {field.icon}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold text-slate-400">
                                            {field.label}
                                        </p>
                                        <p className="mt-1 break-words text-sm font-semibold text-slate-700">
                                            {field.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="dashboard-card dashboard-enter dashboard-delay-2 relative overflow-hidden p-6 xl:col-span-2"
                        style={{
                            background: `linear-gradient(145deg, ${THEME.navy}, #12395D 75%, #15516C)`,
                            borderColor: "transparent",
                            color: "white",
                        }}
                    >
                        <div
                            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
                            style={{ background: "rgba(6,182,212,0.13)" }}
                        />
                        <div
                            className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full"
                            style={{ background: "rgba(37,99,235,0.20)" }}
                        />

                        <div className="relative">
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <span className="text-sm font-semibold text-blue-100">
                                    Your membership
                                </span>
                                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                                    {isLifetime ? "LIFETIME" : hasPaid ? "ACTIVE" : "STARTER"}
                                </span>
                            </div>

                            <h2 className="text-3xl font-extrabold">{planName}</h2>
                            <p className="mt-2 text-sm leading-6 text-blue-100/80">
                                {isLifetime
                                    ? "Enjoy unlimited download and sharing access."
                                    : hasPaid
                                        ? "Your plan is active. Keep creating professional designs."
                                        : "Choose a plan to unlock downloading and sharing your designs."}
                            </p>

                            <div className="my-6 h-px bg-white/15" />

                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs text-blue-100/70">
                                        Available download credits
                                    </p>
                                    <p className="mt-1 text-2xl font-extrabold">
                                        {downloadCredits}
                                    </p>
                                </div>

                                <Link
                                    to="/pricing"
                                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-[#0B1F33] transition hover:-translate-y-0.5 hover:bg-cyan-50"
                                >
                                    {hasPaid ? "View plans" : "Upgrade"}
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Charts */}
                <section className="mb-6">
                    <div className="dashboard-enter mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                        <div>
                            <h2 className="text-xl font-extrabold text-[#0B1F33]">
                                Analytics overview
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                A snapshot of creative activity and engagement.
                            </p>
                        </div>

                        <span className="text-xs text-slate-400">
                            Demo values are illustrative until real analytics are available.
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        {/* Engagement chart */}
                        <div className="dashboard-card dashboard-enter p-5 sm:p-6">
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-extrabold text-[#0B1F33]">
                                        Engagement breakdown
                                    </h3>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Views, likes and shares
                                    </p>
                                </div>
                                <div className="dashboard-icon">
                                    <FaEye />
                                </div>
                            </div>

                            <div className="dashboard-chart">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={engagementData.data}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="48%"
                                            innerRadius={58}
                                            outerRadius={88}
                                            paddingAngle={4}
                                            cornerRadius={5}
                                        >
                                            {engagementData.data.map((entry) => (
                                                <Cell key={entry.name} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => [value, "Interactions"]}
                                            contentStyle={{
                                                borderRadius: 12,
                                                border: `1px solid ${THEME.border}`,
                                                boxShadow: "0 8px 24px rgba(11,31,51,.10)",
                                            }}
                                        />
                                        <Legend
                                            verticalAlign="bottom"
                                            iconType="circle"
                                            iconSize={8}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="mt-2 text-center text-xs text-slate-400">
                                {engagementData.isDemo
                                    ? "Example engagement data"
                                    : "Based on metrics returned by your API"}
                            </p>
                        </div>

                        {/* Ads per day chart */}
                        <div className="dashboard-card dashboard-enter dashboard-delay-1 p-5 sm:p-6">
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-extrabold text-[#0B1F33]">
                                        Design activity
                                    </h3>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Saved ads by day of the week
                                    </p>
                                </div>
                                <div
                                    className="dashboard-icon"
                                    style={{ background: "#E6FAFD", color: THEME.cyan }}
                                >
                                    <FaChartLine />
                                </div>
                            </div>

                            <div className="dashboard-chart">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={adsPerDayData.data}
                                        margin={{ top: 10, right: 4, left: -20, bottom: 0 }}
                                    >
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                            stroke="#EAF0F7"
                                        />
                                        <XAxis
                                            dataKey="day"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: THEME.muted, fontSize: 12 }}
                                        />
                                        <YAxis
                                            allowDecimals={false}
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: THEME.muted, fontSize: 12 }}
                                        />
                                        <Tooltip
                                            cursor={{ fill: "#EEF5FF" }}
                                            contentStyle={{
                                                borderRadius: 12,
                                                border: `1px solid ${THEME.border}`,
                                            }}
                                        />
                                        <Bar
                                            dataKey="ads"
                                            name="Saved ads"
                                            fill={THEME.blue}
                                            radius={[7, 7, 0, 0]}
                                            maxBarSize={38}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="mt-2 text-center text-xs text-slate-400">
                                {adsPerDayData.isDemo
                                    ? "Example activity data"
                                    : "Based on your saved-ad timestamps"}
                            </p>
                        </div>

                        {/* Views growth chart */}
                        <div className="dashboard-card dashboard-enter dashboard-delay-2 p-5 sm:p-6 xl:col-span-2">
                            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                                <div>
                                    <h3 className="font-extrabold text-[#0B1F33]">
                                        Views growth
                                    </h3>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Weekly views across your saved designs
                                    </p>
                                </div>

                                <span
                                    className="dashboard-tag w-fit"
                                    style={
                                        viewsGrowthData.isDemo
                                            ? { background: "#EEF3FF", color: THEME.blue }
                                            : { background: "#E6FAF1", color: "#087B55" }
                                    }
                                >
                                    <FaChartLine />
                                    {viewsGrowthData.isDemo ? "Example trend" : "API analytics"}
                                </span>
                            </div>

                            <div className="dashboard-chart" style={{ height: 280 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={viewsGrowthData.data}
                                        margin={{ top: 12, right: 8, left: -15, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient
                                                id="adStudioViewsGradient"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor={THEME.cyan}
                                                    stopOpacity={0.30}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor={THEME.cyan}
                                                    stopOpacity={0.015}
                                                />
                                            </linearGradient>
                                        </defs>

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            vertical={false}
                                            stroke="#EAF0F7"
                                        />
                                        <XAxis
                                            dataKey="week"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: THEME.muted, fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: THEME.muted, fontSize: 12 }}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: 12,
                                                border: `1px solid ${THEME.border}`,
                                                boxShadow: "0 8px 24px rgba(11,31,51,.10)",
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="views"
                                            name="Views"
                                            stroke={THEME.blue}
                                            strokeWidth={3}
                                            fill="url(#adStudioViewsGradient)"
                                            activeDot={{
                                                r: 6,
                                                fill: THEME.cyan,
                                                stroke: "#FFFFFF",
                                                strokeWidth: 2,
                                            }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="mt-2 text-center text-xs text-slate-400">
                                {viewsGrowthData.isDemo
                                    ? "Illustrative values — real view tracking must be recorded by the backend."
                                    : "Based on view metrics and creation dates returned by your API."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Saved ads */}
                <section className="dashboard-card dashboard-enter p-5 sm:p-6">
                    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="text-xl font-extrabold text-[#0B1F33]">
                                Your saved designs
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Continue editing or manage your existing creations.
                            </p>
                        </div>

                        <Link to="/adstudio" className="dashboard-primary w-fit">
                            <FaPlus />
                            Create a design
                        </Link>
                    </div>

                    {error && (
                        <div className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                            <button
                                type="button"
                                onClick={() => loadAds()}
                                className="ml-2 font-bold underline"
                            >
                                Try again
                            </button>
                        </div>
                    )}

                    {loadingAds ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="animate-pulse overflow-hidden rounded-2xl border border-slate-100"
                                >
                                    <div className="h-40 bg-slate-100" />
                                    <div className="space-y-3 p-4">
                                        <div className="h-4 w-2/3 rounded bg-slate-100" />
                                        <div className="h-3 w-1/3 rounded bg-slate-100" />
                                        <div className="h-9 rounded-lg bg-slate-100" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : ads.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50/70 to-cyan-50/50 px-5 py-12 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl text-blue-600 shadow-sm">
                                <FaFileAlt />
                            </div>

                            <h3 className="text-lg font-extrabold text-[#0B1F33]">
                                Your creative journey starts here
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                Create your first design and save it here. You can return
                                whenever you want to continue editing.
                            </p>

                            <Link to="/adstudio" className="dashboard-primary mt-6">
                                <FaPlus />
                                Create your first ad
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {ads.map((ad, index) => {
                                const adId = ad._id || ad.id;
                                const preview =
                                    ad.previewImage ||
                                    ad.thumbnail ||
                                    ad.image ||
                                    ad.exportedImage ||
                                    ad.imageUrl;

                                return (
                                    <article
                                        key={adId || index}
                                        className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
                                    >
                                        <div className="dashboard-ad-image relative flex h-44 items-center justify-center overflow-hidden">
                                            {preview ? (
                                                <img
                                                    src={preview}
                                                    alt={getAdTitle(ad, index)}
                                                    className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center gap-3 text-blue-700/60">
                                                    <FaFileAlt className="text-4xl" />
                                                    <span className="text-xs font-semibold">
                                                        AdStudio design
                                                    </span>
                                                </div>
                                            )}

                                            <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0B1F33] shadow-sm">
                                                Saved design
                                            </span>
                                        </div>

                                        <div className="p-4">
                                            <h3
                                                className="truncate text-base font-extrabold text-[#0B1F33]"
                                                title={getAdTitle(ad, index)}
                                            >
                                                {getAdTitle(ad, index)}
                                            </h3>

                                            <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                                                <FaClock />
                                                {formatDate(ad.createdAt || ad.created_at)}
                                            </p>

                                            <div className="mt-4 grid grid-cols-2 gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        navigate("/adstudio", {
                                                            state: { ad },
                                                        })
                                                    }
                                                    className="dashboard-primary !gap-2 !rounded-lg !px-3 !py-2.5 !text-xs"
                                                >
                                                    <FaEdit />
                                                    Edit design
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteAd(adId)}
                                                    disabled={deletingId === adId}
                                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 transition hover:border-red-200 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                                                >
                                                    <FaTrash />
                                                    {deletingId === adId ? "Deleting..." : "Delete"}
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* Bottom call to action */}
                <section
                    className="dashboard-enter mt-6 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8"
                    style={{
                        background: `linear-gradient(115deg, ${THEME.navy}, #12395D 65%, #15516C)`,
                    }}
                >
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-cyan-200">
                            <FaRocket />
                        </div>
                        <div>
                            <h2 className="text-lg font-extrabold text-white">
                                Ready to create something amazing?
                            </h2>
                            <p className="mt-1 max-w-xl text-sm leading-6 text-blue-100/80">
                                Design professional advertisements for your business with
                                AdStudio's creative tools.
                            </p>
                        </div>
                    </div>

                    <Link to="/adstudio" className="dashboard-primary shrink-0 !bg-white !text-[#0B1F33] hover:!bg-cyan-50">
                        Start creating
                        <FaArrowRight className="text-xs" />
                    </Link>
                </section>
            </main>

            {/* Theme-matched dashboard footer */}
            <footer className="dashboard-footer mt-6">
                <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-9 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-3">
                            <img
                                src={logo}
                                alt="AdStudio"
                                className="h-10 w-auto rounded-md object-contain"
                            />
                            <span className="text-lg font-extrabold text-white">
                                AdStudio
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100/75">
                            Create professional advertisements for your business with a
                            powerful, easy-to-use design workspace.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-extrabold text-white">
                            Quick links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/adstudio">Create an ad</Link></li>
                            <li><Link to="/pricing">Pricing plans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-extrabold text-white">
                            Support
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/privacy-policy">Privacy policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-extrabold text-white">
                            Contact
                        </h3>
                        <ul className="space-y-3 break-words text-sm leading-6 text-blue-100/75">
                            <li>Eco Softwares</li>
                            <li>Galle Road, Aluthgama, Sri Lanka</li>
                            <li>+94 78 670 8128</li>
                            <li>
                                <a href="mailto:support@adstudio.com">
                                    support@adstudio.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-blue-100/60">
                    © {new Date().getFullYear()} AdStudio. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Dashboard;