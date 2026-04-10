import { useState } from "react";
import {
    FaHome,
    FaChartBar,
    FaDollarSign,
    FaSignOutAlt,
    FaDownload,
    FaFileExport,
    FaShareAlt,
    FaSave
} from "react-icons/fa";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import translations from "../data/translations";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function TopBar({
    adSize,
    setAdSize,
    language,
    setLanguage,
    canvasRef,
    onNavigate,
    onSave,
    adId,
    setAdId
}) {
    const { user, token } = useAuth();
    const navigate = useNavigate();
    const label = key => translations[language]?.[key] || key;
    const { logout } = useAuth();
    const TEST_MODE = true; // ✅ turn OFF before production

    const [showDownloadPopup, setShowDownloadPopup] = useState(false);
    const [downloadImage, setDownloadImage] = useState(null);

    const languageCodes = Object.keys(translations);
    const languageNames = languageCodes.reduce((acc, code) => {
        acc[code] = translations[code]?.languageName || code;
        return acc;
    }, {});

    const getStage = () => {
        if (!canvasRef?.current) return null;
        if (canvasRef.current.toDataURL) return canvasRef.current;
        if (canvasRef.current.getStage) return canvasRef.current.getStage();
        return null;
    };

    const EXPORT_SIZES = {
        square: [1080, 1080],
        portrait: [1080, 1350],
        landscape: [1200, 900],

        visitingCard: [1050, 600],   // 3.5x2 inch @300dpi
        businessCard: [1050, 600],

        bookmark: [600, 1800],

        instagramPost: [1080, 1080],
        instagramStory: [1080, 1920],

        facebookCover: [820, 312]
    };

    const consumeCredit = async () => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/user/consume`,
                { method: "POST", headers: { Authorization: `Bearer ${token}` } }
            );
            if (res.status === 403) { onNavigate("pricing"); return false; }
            return res.ok;
        } catch { return false; }
    };


    // download mobile didnt work
    const download = async (type) => {
        if (!canvasRef?.current) return;

        try {
            if (!TEST_MODE) {
                if (!user?.hasPaid) {
                    navigate("/pricing");
                    return;
                }

                const allowed = await consumeCredit();
                if (!allowed) {
                    navigate("/pricing");
                    return;
                }
            }

            const stage =
                typeof canvasRef.current.getStage === "function"
                    ? canvasRef.current.getStage()
                    : canvasRef.current;

            await new Promise(r => setTimeout(r, 100));

            const mime = type === "jpeg" ? "image/jpeg" : "image/png";

            // ✅ UI WIDTH
            const uiWidth = stage.width();

            // ✅ EXPORT WIDTH
            const [exportWidth] = EXPORT_SIZES[adSize] || [uiWidth];

            // 🔥 SCALE CALCULATION (MAIN FIX)
            const pixelRatio = exportWidth / uiWidth;

            const dataUrl = stage.toDataURL({
                pixelRatio: pixelRatio,
                mimeType: mime
            });

            // ✅ POPUP PREVIEW
            setDownloadImage(dataUrl);
            setShowDownloadPopup(true);

            const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

            if (isMobile) {
                // 🔥 FINAL MOBILE FIX (NO BLOB)
                const newTab = window.open();

                if (!newTab) {
                    alert("Please allow popups");
                    return;
                }

                newTab.document.write(`
                <html>
                <head>
                    <title>Download</title>
                    <style>
                        body {
                            margin:0;
                            background:#000;
                            display:flex;
                            flex-direction:column;
                            justify-content:center;
                            align-items:center;
                        }
                        img {
                            width:100%;
                        }
                        p {
                            color:#fff;
                            font-family:sans-serif;
                            padding:10px;
                        }
                    </style>
                </head>
                <body>
                    <img src="${dataUrl}" />
                    <p>Long press → Save Image</p>
                </body>
                </html>
            `);

                return;
            }

            // ✅ DESKTOP DOWNLOAD
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `ad.${type}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (err) {
            console.error("DOWNLOAD ERROR:", err);
            alert("Download failed");
        }

        setTimeout(() => {
            setShowDownloadPopup(false);
        }, 2000);
    };

    // const download = async (type) => {
    //     if (!canvasRef?.current) return;

    //     try {
    //         if (!TEST_MODE) {
    //             if (!user?.hasPaid) {
    //                 navigate("/pricing");
    //                 return;
    //             }

    //             const allowed = await consumeCredit();
    //             if (!allowed) {
    //                 navigate("/pricing");
    //                 return;
    //             }
    //         }

    //         const stage =
    //             typeof canvasRef.current.getStage === "function"
    //                 ? canvasRef.current.getStage()
    //                 : canvasRef.current;

    //         await new Promise(r => setTimeout(r, 100));

    //         const mime = type === "jpeg" ? "image/jpeg" : "image/png";

    //         const dataUrl = stage.toDataURL({
    //             pixelRatio: 2,
    //             mimeType: mime
    //         });

    //         // ✅ SHOW PREVIEW POPUP
    //         setDownloadImage(dataUrl);
    //         setShowDownloadPopup(true);

    //         const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    //         // 🔥 CONVERT TO BLOB (CRITICAL FIX)
    //         const blob = await fetch(dataUrl).then(res => res.blob());
    //         const blobUrl = URL.createObjectURL(blob);

    //         if (isMobile) {
    //             // ✅ REAL MOBILE DOWNLOAD FIX
    //             const a = document.createElement("a");
    //             a.href = blobUrl;
    //             a.download = `ad.${type}`;
    //             document.body.appendChild(a);
    //             a.click();
    //             document.body.removeChild(a);

    //             // 🔥 IMPORTANT fallback (some phones)
    //             setTimeout(() => {
    //                 window.location.href = blobUrl;
    //             }, 500);

    //         } else {
    //             // ✅ DESKTOP
    //             const link = document.createElement("a");
    //             link.href = blobUrl;
    //             link.download = `ad.${type}`;
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //         }

    //         // cleanup
    //         setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);

    //     } catch (err) {
    //         console.error("DOWNLOAD ERROR:", err);
    //         alert("Download failed");
    //     }

    //     // ✅ CLOSE POPUP
    //     setTimeout(() => {
    //         setShowDownloadPopup(false);
    //     }, 2000);
    // };


    // share mobile didnt work
    const shareAd = async () => {
        if (!canvasRef?.current) return;

        try {
            if (!TEST_MODE) {
                if (!user?.hasPaid) {
                    navigate("/pricing");
                    return;
                }

                const allowed = await consumeCredit();
                if (!allowed) {
                    navigate("/pricing");
                    return;
                }
            }

            const stage =
                typeof canvasRef.current.getStage === "function"
                    ? canvasRef.current.getStage()
                    : canvasRef.current;

            await new Promise(r => setTimeout(r, 100));

            // ✅ UI WIDTH
            const uiWidth = stage.width();

            // ✅ EXPORT WIDTH
            const [exportWidth] = EXPORT_SIZES[adSize] || [uiWidth];

            const pixelRatio = exportWidth / uiWidth;

            const dataUrl = stage.toDataURL({
                pixelRatio: pixelRatio,
                mimeType: "image/png"
            });

            const blob = await fetch(dataUrl).then(res => res.blob());
            const file = new File([blob], "ad.png", { type: "image/png" });

            // ✅ BEST CASE
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: "My Ad"
                });
                return;
            }

            // ✅ FALLBACK SHARE
            if (navigator.share) {
                await navigator.share({
                    title: "My Ad",
                    url: dataUrl
                });
                return;
            }

            // 🔥 FINAL FALLBACK (WORKS EVERYWHERE)
            const newTab = window.open();
            if (newTab) {
                newTab.document.write(`
                <html>
                <body style="margin:0;background:#000;text-align:center">
                    <img src="${dataUrl}" style="width:100%" />
                    <p style="color:white">Long press to share</p>
                </body>
                </html>
            `);
            }

        } catch (err) {
            console.error("SHARE ERROR:", err);
            alert("Share failed");
        }
    };

    // const shareAd = async () => {
    //     if (!canvasRef?.current) return;

    //     try {
    //         if (!TEST_MODE) {
    //             if (!user?.hasPaid) {
    //                 navigate("/pricing");
    //                 return;
    //             }

    //             const allowed = await consumeCredit();
    //             if (!allowed) {
    //                 navigate("/pricing");
    //                 return;
    //             }
    //         }

    //         const stage =
    //             typeof canvasRef.current.getStage === "function"
    //                 ? canvasRef.current.getStage()
    //                 : canvasRef.current;

    //         await new Promise(r => setTimeout(r, 100));

    //         const dataUrl = stage.toDataURL({
    //             pixelRatio: 1
    //         });

    //         const blob = await fetch(dataUrl).then(res => res.blob());
    //         const file = new File([blob], "ad.png", { type: "image/png" });

    //         // ✅ BEST MOBILE SUPPORT
    //         if (navigator.canShare && navigator.canShare({ files: [file] })) {
    //             await navigator.share({
    //                 files: [file],
    //                 title: "My Ad",
    //                 text: "Check this ad"
    //             });
    //             return;
    //         }

    //         // ✅ BASIC SHARE
    //         if (navigator.share) {
    //             await navigator.share({
    //                 title: "My Ad",
    //                 text: "Check this ad",
    //                 url: dataUrl
    //             });
    //             return;
    //         }

    //         // 🔥 FINAL FALLBACK
    //         window.open(dataUrl, "_blank");

    //     } catch (err) {
    //         console.error("SHARE ERROR:", err);
    //         alert("Sharing not supported on this device");
    //     }
    // };


    return (
        <div className="topbar-container">
            {/* Full Desktop / Mobile Stack */}
            <div className="topbar-full flex flex-wrap items-center justify-between gap-2">

                {/* Left: Logo + Title */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
                    <div className="w-10 h-10 bg-white text-[#0b1f33] font-bold flex items-center justify-center rounded">
                        AD
                    </div>
                    <span className="text-xl font-bold">Ad Studio</span>
                </div>

                {/* Middle: Navigation Buttons (Home / Dashboard / Pricing / Logout) */}
                <div className="flex gap-2 flex-wrap">
                    <Tippy content={label("home")}>
                        <button onClick={() => onNavigate("home")} className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
                            <FaHome /> {label("home")}
                        </button>
                    </Tippy>
                    <Tippy content={label("dashboard")}>
                        <button onClick={() => onNavigate("dashboard")} className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
                            <FaChartBar /> {label("dashboard")}
                        </button>
                    </Tippy>
                    <Tippy content={label("pricing")}>
                        <button onClick={() => onNavigate("pricing")} className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
                            <FaDollarSign /> {label("pricing")}
                        </button>
                    </Tippy>
                    <Tippy content={label("logout")}>
                        <button
                            onClick={() => {
                                logout();
                                navigate("/", { replace: true });
                            }}
                            className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-red-600"
                        >
                            <FaSignOutAlt /> {label("logout")}
                        </button>
                    </Tippy>
                </div>

                {/* Right: Ad Size / Language / Download / Save / Share */}
                <div className="flex gap-2 flex-wrap items-center">

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">{label("adSize") || "Ad Size"}</label>
                        <select className="bg-white text-[#0b1f33] px-2 py-1 rounded min-w-[120px]" value={adSize} onChange={e => setAdSize(e.target.value)}>
                            <option value="square">Square</option>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                            <option value="visitingCard">Visiting Card</option>
                            <option value="businessCard">Business Card</option>
                            <option value="bookmark">Bookmark</option>
                            <option value="instagramPost">Instagram Post</option>
                            <option value="instagramStory">Instagram Story</option>
                            <option value="facebookCover">Facebook Cover</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">{label("language") || "Language"}</label>
                        <select className="bg-white text-[#0b1f33] px-2 py-1 rounded min-w-[140px]" value={language} onChange={e => setLanguage(e.target.value)}>
                            {languageCodes.map(code => <option key={code} value={code}>{languageNames[code]}</option>)}
                        </select>
                    </div>

                    <button onClick={() => download("png")} className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-blue-600 text-white">
                        <FaDownload /> PNG
                    </button>

                    <button onClick={() => download("jpeg")} className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-blue-600 text-white">
                        <FaFileExport /> JPEG
                    </button>

                    <button onClick={onSave} className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-yellow-500 text-white">
                        <FaSave /> {label("save")}
                    </button>

                    <button onClick={shareAd} className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-green-600 text-white">
                        <FaShareAlt /> Share
                    </button>
                </div>

            </div>

            {/* mobile icon bar */}
            <div className="topbar-mobile-header">
                <div className="logo">AD</div>
                <span>Ad Studio</span>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => onNavigate("home")}>
                        <FaHome />
                    </button>
                    <span className="icon-label">Home</span>
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => onNavigate("dashboard")}>
                        <FaChartBar />
                    </button>
                    <span className="icon-label">Dashboard</span>
                </div>

                <div className="icon-item">
                    <button className="icon-btn" onClick={() => onNavigate("pricing")}>
                        <FaDollarSign />
                    </button>
                    <span className="icon-label">Pricing</span>
                </div>
            </div>

            <div className="topbar-icons">
                <div className="topbar-icons">



                    {/* Ad Size */}
                    <div className="icon-item">
                        <select
                            className="icon-btn bg-white text-[#0b1f33] text-xs px-1"
                            value={adSize}
                            onChange={e => setAdSize(e.target.value)}
                        >
                            <option value="square">Square</option>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                            <option value="visitingCard">Visiting Card</option>
                            <option value="businessCard">Business Card</option>
                            <option value="bookmark">Bookmark</option>
                            <option value="instagramPost">Instagram Post</option>
                            <option value="instagramStory">Instagram Story</option>
                            <option value="facebookCover">Facebook Cover</option>
                        </select>
                        <span className="icon-label">Size</span>
                    </div>

                    {/* Language */}
                    <div className="icon-item">
                        <select
                            className="icon-btn bg-white text-[#0b1f33] text-xs px-1"
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        >
                            {Object.keys(translations).map(code => (
                                <option key={code} value={code}>
                                    {translations[code].languageName}
                                </option>
                            ))}
                        </select>
                        <span className="icon-label">Lang</span>
                    </div>

                    <div className="icon-item">
                        <button className="icon-btn" onClick={() => download("png")}>
                            <FaDownload />
                        </button>
                        <span className="icon-label">PNG</span>
                    </div>

                    <div className="icon-item">
                        <button className="icon-btn" onClick={() => download("jpeg")}>
                            <FaFileExport />
                        </button>
                        <span className="icon-label">JPEG</span>
                    </div>

                    <div className="icon-item">
                        <button className="icon-btn" onClick={onSave}>
                            <FaSave />
                        </button>
                        <span className="icon-label">Save</span>
                    </div>

                    <div className="icon-item">
                        <button className="icon-btn" onClick={shareAd}>
                            <FaShareAlt />
                        </button>
                        <span className="icon-label">Share</span>
                    </div>

                </div>

            </div>

            {showDownloadPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-5 w-[90%] max-w-sm text-center shadow-lg">

                        <h2 className="text-lg font-semibold mb-3">
                            Preparing Download...
                        </h2>

                        {downloadImage && (
                            <img
                                src={downloadImage}
                                alt="Preview"
                                className="w-full rounded-lg mb-4"
                            />
                        )}

                        {/* 🔥 Animated Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            {/* <div className="h-full bg-blue-600 animate-pulse w-full"></div> */}
                            <div className="h-full bg-blue-600 animate-[loading_2s_linear_infinite] w-full"></div>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            Downloading...
                        </p>


                        <p className="text-xs text-gray-400 mt-1">
                            Please wait...
                        </p>

                    </div>
                </div>
            )}

        </div>
    );
}