// import { useState } from "react";
// import {
//     FaHome,
//     FaChartBar,
//     FaDollarSign,
//     FaSignOutAlt,
//     FaDownload,
//     FaFileExport,
//     FaShareAlt,
//     FaSave,
//     FaLayerGroup
// } from "react-icons/fa";

// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";
// import translations from "../data/translations";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function TopBar({
//     adSize,
//     setAdSize,
//     language,
//     setLanguage,
//     canvasRef,
//     onNavigate,
//     onSave,
//     adId,
//     setAdId,
//     onOpenTemplates
// }) {
//     const { user, token } = useAuth();
//     const navigate = useNavigate();
//     const label = key => translations[language]?.[key] || key;
//     const { logout } = useAuth();

//     const [showDownloadPopup, setShowDownloadPopup] = useState(false);
//     const [downloadImage, setDownloadImage] = useState(null);

//     const languageCodes = Object.keys(translations);
//     const languageNames = languageCodes.reduce((acc, code) => {
//         acc[code] = translations[code]?.languageName || code;
//         return acc;
//     }, {});

//     const getStage = () => {
//         if (!canvasRef?.current) return null;
//         if (canvasRef.current.toDataURL) return canvasRef.current;
//         if (canvasRef.current.getStage) return canvasRef.current.getStage();
//         return null;
//     };

//     const EXPORT_SIZES = {
//         square: [1080, 1080],
//         portrait: [1080, 1350],
//         landscape: [1200, 900],

//         visitingCard: [1050, 600],
//         businessCard: [1050, 600],

//         bookmark: [600, 1800],

//         instagramPost: [1080, 1080],
//         instagramStory: [1080, 1920],

//         facebookCover: [820, 312]
//     };

//     /*
//      * ============================================================
//      * DOWNLOAD / SHARE PAYMENT AUTHORIZATION
//      * ============================================================
//      *
//      * IMPORTANT:
//      * - Creating/saving ads is NOT checked here.
//      * - Only Download and Share call /user/consume.
//      * - The backend decides whether the action is allowed.
//      * - One successful request consumes exactly one credit.
//      */

//     const consumeDownloadCredit = async () => {
//         try {
//             if (!token) {
//                 navigate("/login");
//                 return false;
//             }

//             const API_URL =
//                 import.meta.env.VITE_API_URL ||
//                 "http://192.168.1.28:5000/api";

//             const res = await fetch(
//                 `${API_URL}/user/consume`,
//                 {
//                     method: "POST",
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );

//             let data = {};

//             try {
//                 data = await res.json();
//             } catch {
//                 data = {};
//             }

//             /*
//              * User has not purchased a plan.
//              */
//             if (
//                 res.status === 403 &&
//                 data.code === "PAYMENT_REQUIRED"
//             ) {
//                 alert(
//                     "Please purchase a plan before downloading or sharing."
//                 );

//                 navigate("/pricing");

//                 return false;
//             }

//             /*
//              * User has already used all Download/Share credits.
//              */
//             if (
//                 res.status === 403 &&
//                 data.code === "CREDITS_EMPTY"
//             ) {
//                 alert(
//                     "Your Download/Share credits are finished. Please purchase or upgrade your plan."
//                 );

//                 navigate("/pricing");

//                 return false;
//             }

//             /*
//              * Any other backend error.
//              */
//             if (!res.ok) {
//                 alert(
//                     data.message ||
//                     "Unable to authorize this action."
//                 );

//                 return false;
//             }

//             /*
//              * Backend authorized the action.
//              *
//              * For normal plans:
//              *   one credit has already been consumed.
//              *
//              * For Lifetime:
//              *   backend allows unlimited usage.
//              */
//             return true;

//         } catch (error) {
//             console.error(
//                 "CONSUME CREDIT ERROR:",
//                 error
//             );

//             alert(
//                 "Unable to verify your Download/Share access. Please try again."
//             );

//             return false;
//         }
//     };

//     // ============================================================
//     // DOWNLOAD
//     // ============================================================

//     const download = async (format = "png") => {
//         /*
//          * IMPORTANT:
//          * This MUST happen before generating/exporting the image.
//          *
//          * If payment/credits are not valid, nothing is exported
//          * and no download happens.
//          */
//         const allowed = await consumeDownloadCredit();

//         if (!allowed) {
//             return;
//         }

//         if (!canvasRef?.current) {
//             alert("Canvas is not ready.");
//             return;
//         }

//         try {
//             const stage =
//                 typeof canvasRef.current.getStage === "function"
//                     ? canvasRef.current.getStage()
//                     : canvasRef.current;

//             if (!stage || typeof stage.toDataURL !== "function") {
//                 alert("Unable to export the canvas.");
//                 return;
//             }

//             await new Promise(r => setTimeout(r, 100));

//             const mime =
//                 format === "jpeg"
//                     ? "image/jpeg"
//                     : "image/png";

//             // UI WIDTH
//             const uiWidth = stage.width();

//             // EXPORT WIDTH
//             const [exportWidth] =
//                 EXPORT_SIZES[adSize] || [uiWidth];

//             // SCALE CALCULATION
//             const pixelRatio =
//                 exportWidth / uiWidth;

//             const dataUrl = stage.toDataURL({
//                 pixelRatio: pixelRatio,
//                 mimeType: mime
//             });

//             // SHOW PREVIEW POPUP
//             setDownloadImage(dataUrl);
//             setShowDownloadPopup(true);

//             const isMobile =
//                 /Mobi|Android|iPhone/i.test(
//                     navigator.userAgent
//                 );

//             if (isMobile) {
//                 /*
//                  * MOBILE:
//                  *
//                  * Opening the generated image in a new tab is
//                  * more reliable than forcing an <a download>
//                  * on many mobile browsers.
//                  */
//                 const newTab = window.open();

//                 if (!newTab) {
//                     alert("Please allow popups to download the image.");
//                     return;
//                 }

//                 newTab.document.write(`
//                     <html>
//                     <head>
//                         <title>AdStudio Download</title>
//                         <meta
//                             name="viewport"
//                             content="width=device-width, initial-scale=1.0"
//                         />
//                         <style>
//                             body {
//                                 margin: 0;
//                                 background: #000;
//                                 display: flex;
//                                 flex-direction: column;
//                                 justify-content: center;
//                                 align-items: center;
//                                 min-height: 100vh;
//                             }

//                             img {
//                                 width: 100%;
//                                 height: auto;
//                                 display: block;
//                             }

//                             p {
//                                 color: #fff;
//                                 font-family: sans-serif;
//                                 padding: 10px;
//                                 text-align: center;
//                             }
//                         </style>
//                     </head>

//                     <body>
//                         <img src="${dataUrl}" alt="Ad" />
//                         <p>Long press the image → Save Image</p>
//                     </body>
//                     </html>
//                 `);

//                 newTab.document.close();

//                 return;
//             }

//             // DESKTOP DOWNLOAD
//             const link =
//                 document.createElement("a");

//             link.href = dataUrl;
//             link.download = `ad.${format}`;

//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);

//         } catch (err) {
//             console.error(
//                 "DOWNLOAD ERROR:",
//                 err
//             );

//             alert("Download failed");
//         }

//         setTimeout(() => {
//             setShowDownloadPopup(false);
//         }, 2000);
//     };

//     // ============================================================
//     // SHARE
//     // ============================================================

//     const shareAd = async () => {
//         /*
//          * Payment/credit authorization MUST happen before
//          * generating the image.
//          */
//         const allowed = await consumeDownloadCredit();

//         if (!allowed) {
//             return;
//         }

//         if (!canvasRef?.current) {
//             alert("Canvas is not ready.");
//             return;
//         }

//         try {
//             const stage =
//                 typeof canvasRef.current.getStage === "function"
//                     ? canvasRef.current.getStage()
//                     : canvasRef.current;

//             if (!stage || typeof stage.toDataURL !== "function") {
//                 alert("Unable to export the canvas.");
//                 return;
//             }

//             await new Promise(r => setTimeout(r, 100));

//             // UI WIDTH
//             const uiWidth = stage.width();

//             // EXPORT WIDTH
//             const [exportWidth] =
//                 EXPORT_SIZES[adSize] || [uiWidth];

//             const pixelRatio =
//                 exportWidth / uiWidth;

//             const dataUrl = stage.toDataURL({
//                 pixelRatio: pixelRatio,
//                 mimeType: "image/png"
//             });

//             /*
//              * Convert exported image to Blob/File.
//              * This is required for native mobile file sharing.
//              */
//             const blob =
//                 await fetch(dataUrl)
//                     .then(res => res.blob());

//             const file = new File(
//                 [blob],
//                 "ad.png",
//                 {
//                     type: "image/png"
//                 }
//             );

//             /*
//              * BEST CASE:
//              * Native share sheet with the actual image file.
//              */
//             if (
//                 navigator.canShare &&
//                 navigator.canShare({
//                     files: [file]
//                 })
//             ) {
//                 await navigator.share({
//                     files: [file],
//                     title: "My Ad"
//                 });

//                 return;
//             }

//             /*
//              * BASIC SHARE:
//              * Some browsers support navigator.share but
//              * do not support file sharing.
//              */
//             if (navigator.share) {
//                 await navigator.share({
//                     title: "My Ad",
//                     text: "Check this ad",
//                     url: dataUrl
//                 });

//                 return;
//             }

//             /*
//              * FINAL FALLBACK:
//              * Open the image so the user can manually
//              * save/share it.
//              */
//             const newTab = window.open();

//             if (newTab) {
//                 newTab.document.write(`
//                     <html>
//                     <head>
//                         <title>AdStudio Share</title>
//                         <meta
//                             name="viewport"
//                             content="width=device-width, initial-scale=1.0"
//                         />
//                     </head>

//                     <body
//                         style="
//                             margin:0;
//                             background:#000;
//                             text-align:center;
//                             min-height:100vh;
//                         "
//                     >
//                         <img
//                             src="${dataUrl}"
//                             alt="Ad"
//                             style="
//                                 width:100%;
//                                 height:auto;
//                                 display:block;
//                             "
//                         />

//                         <p
//                             style="
//                                 color:white;
//                                 font-family:sans-serif;
//                                 padding:10px;
//                             "
//                         >
//                             Long press the image to save or share.
//                         </p>
//                     </body>
//                     </html>
//                 `);

//                 newTab.document.close();
//             } else {
//                 alert(
//                     "Sharing is not supported. Please allow popups and try again."
//                 );
//             }

//         } catch (err) {
//             /*
//              * User closing/canceling the native share sheet is
//              * not treated as a system failure.
//              */
//             if (
//                 err?.name === "AbortError"
//             ) {
//                 return;
//             }

//             console.error(
//                 "SHARE ERROR:",
//                 err
//             );

//             alert("Share failed");
//         }
//     };

//     return (
//         <div className="topbar-container ">

//             {/* Full Desktop / Mobile Stack */}
//             <div className="topbar-full flex flex-wrap items-center justify-between gap-2 mb-[5px]">

//                 {/* Left: Logo + Title */}
//                 <div
//                     className="flex items-center gap-2 cursor-pointer"
//                     onClick={() => onNavigate("home")}
//                 >
//                     <div className="w-10 h-10 bg-white text-[#0b1f33] font-bold flex items-center justify-center rounded">
//                         AD
//                     </div>

//                     <span className="text-xl font-bold">
//                         Ad Studio
//                     </span>
//                 </div>

//                 {/* Middle: Navigation Buttons */}
//                 <div className="flex gap-2 flex-wrap">

//                     <Tippy content={label("home")}>
//                         <button
//                             onClick={() => onNavigate("home")}
//                             className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
//                         >
//                             <FaHome />
//                             {label("home")}
//                         </button>
//                     </Tippy>

//                     <Tippy content={label("dashboard")}>
//                         <button
//                             onClick={() => onNavigate("dashboard")}
//                             className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
//                         >
//                             <FaChartBar />
//                             {label("dashboard")}
//                         </button>
//                     </Tippy>

//                     <Tippy content={label("pricing")}>
//                         <button
//                             onClick={() => onNavigate("pricing")}
//                             className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
//                         >
//                             <FaDollarSign />
//                             {label("pricing")}
//                         </button>
//                     </Tippy>

//                     <Tippy content={label("logout")}>
//                         <button
//                             onClick={() => {
//                                 logout();
//                                 navigate("/", { replace: true });
//                             }}
//                             className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-red-600"
//                         >
//                             <FaSignOutAlt />
//                             {label("logout")}
//                         </button>
//                     </Tippy>

//                 </div>

//                 {/* Right: Ad Size / Language / Download / Save / Share */}
//                 <div className="flex gap-2 flex-wrap items-center">

//                     <div className="flex flex-col">
//                         <label className="text-[14px] text-[white] mt-2 text-center">
//                             {label("Ad Size") || "Ad Size"}
//                         </label>

//                         <select
//                             className="bg-white text-[#0b1f33] px-2 py-1 rounded min-w-[120px]"
//                             value={adSize}
//                             onChange={e => setAdSize(e.target.value)}
//                         >
//                             <option value="square">Square</option>
//                             <option value="portrait">Portrait</option>
//                             <option value="landscape">Landscape</option>
//                             <option value="visitingCard">Visiting Card</option>
//                             <option value="businessCard">Business Card</option>
//                             <option value="bookmark">Bookmark</option>
//                             <option value="instagramPost">Instagram Post</option>
//                             <option value="instagramStory">Instagram Story</option>
//                             <option value="facebookCover">Facebook Cover</option>
//                         </select>
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-[14px] text-[white] mt-2 text-center">
//                             {label("Language") || "Language"}
//                         </label>

//                         <select
//                             className="bg-white text-[#0b1f33] px-2 py-1 rounded min-w-[140px]"
//                             value={language}
//                             onChange={e => setLanguage(e.target.value)}
//                         >
//                             {languageCodes.map(code => (
//                                 <option
//                                     key={code}
//                                     value={code}
//                                 >
//                                     {languageNames[code]}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <button
//                         onClick={() => download("png")}
//                         className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-blue-600 text-white"
//                     >
//                         <FaDownload />
//                         PNG
//                     </button>

//                     <button
//                         onClick={() => download("jpeg")}
//                         className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-blue-600 text-white"
//                     >
//                         <FaFileExport />
//                         JPEG
//                     </button>

//                     <button
//                         onClick={onSave}
//                         className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-yellow-500 text-white"
//                     >
//                         <FaSave />
//                         {label("save")}
//                     </button>

//                     <button
//                         onClick={shareAd}
//                         className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-green-600 text-white"
//                     >
//                         <FaShareAlt />
//                         Share
//                     </button>

//                 </div>

//             </div>

//             {/* mobile icon bar */}
//             <div className="topbar-mobile-header">

//                 <div className="logo">
//                     AD
//                 </div>

//                 <span>
//                     Ad Studio
//                 </span>

//                 <div className="icon-item">
//                     <button
//                         className="icon-btn"
//                         onClick={() => onNavigate("home")}
//                     >
//                         <FaHome />
//                     </button>

//                     <span className="icon-label">
//                         Home
//                     </span>
//                 </div>

//                 <div className="icon-item">
//                     <button
//                         className="icon-btn"
//                         onClick={() => onNavigate("dashboard")}
//                     >
//                         <FaChartBar />
//                     </button>

//                     <span className="icon-label">
//                         Dashboard
//                     </span>
//                 </div>

//                 <div className="icon-item">
//                     <button
//                         className="icon-btn"
//                         onClick={() => onNavigate("pricing")}
//                     >
//                         <FaDollarSign />
//                     </button>

//                     <span className="icon-label">
//                         Pricing
//                     </span>
//                 </div>

//             </div>

//             <div className="topbar-icons">

//                 <div className="topbar-icons">

//                     {/* Ad Size */}
//                     <div className="icon-item">

//                         <select
//                             className="icon-btn bg-white text-[#0b1f33] text-xs px-1"
//                             value={adSize}
//                             onChange={e => setAdSize(e.target.value)}
//                         >
//                             <option value="square">Square</option>
//                             <option value="portrait">Portrait</option>
//                             <option value="landscape">Landscape</option>
//                             <option value="visitingCard">Visiting Card</option>
//                             <option value="businessCard">Business Card</option>
//                             <option value="bookmark">Bookmark</option>
//                             <option value="instagramPost">Instagram Post</option>
//                             <option value="instagramStory">Instagram Story</option>
//                             <option value="facebookCover">Facebook Cover</option>
//                         </select>

//                         <span className="icon-label">
//                             Size
//                         </span>

//                     </div>

//                     {/* Language */}
//                     <div className="icon-item">

//                         <select
//                             className="icon-btn bg-white text-[#0b1f33] text-xs px-1"
//                             value={language}
//                             onChange={e => setLanguage(e.target.value)}
//                         >
//                             {Object.keys(translations).map(code => (
//                                 <option
//                                     key={code}
//                                     value={code}
//                                 >
//                                     {translations[code].languageName}
//                                 </option>
//                             ))}
//                         </select>

//                         <span className="icon-label">
//                             Lang
//                         </span>

//                     </div>

//                     <div className="icon-item">

//                         <button
//                             className="icon-btn"
//                             onClick={() => download("png")}
//                         >
//                             <FaDownload />
//                         </button>

//                         <span className="icon-label">
//                             PNG
//                         </span>

//                     </div>

//                     <div className="icon-item">

//                         <button
//                             className="icon-btn"
//                             onClick={() => download("jpeg")}
//                         >
//                             <FaFileExport />
//                         </button>

//                         <span className="icon-label">
//                             JPEG
//                         </span>

//                     </div>

//                     <div className="icon-item">

//                         <button
//                             className="icon-btn"
//                             onClick={onSave}
//                         >
//                             <FaSave />
//                         </button>

//                         <span className="icon-label">
//                             Save
//                         </span>

//                     </div>

//                     <div className="icon-item">

//                         <button
//                             className="icon-btn"
//                             onClick={shareAd}
//                         >
//                             <FaShareAlt />
//                         </button>

//                         <span className="icon-label">
//                             Share
//                         </span>

//                     </div>

//                 </div>

//             </div>

//             {showDownloadPopup && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

//                     <div className="bg-white rounded-2xl p-5 w-[90%] max-w-sm text-center shadow-lg">

//                         <h2 className="text-lg font-semibold mb-3">
//                             Preparing Download...
//                         </h2>

//                         {downloadImage && (
//                             <img
//                                 src={downloadImage}
//                                 alt="Preview"
//                                 className="w-full rounded-lg mb-4"
//                             />
//                         )}

//                         {/* Animated Progress Bar */}
//                         <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">

//                             <div className="h-full bg-blue-600 animate-[loading_2s_linear_infinite] w-full">
//                             </div>

//                         </div>

//                         <p className="text-sm text-gray-500 mt-2">
//                             Downloading...
//                         </p>

//                         <p className="text-xs text-gray-400 mt-1">
//                             Please wait...
//                         </p>

//                     </div>

//                 </div>
//             )}

//         </div>
//     );
// }
//////////////////////////////////////////////////

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
    setAdId,
    onOpenTemplates
}) {
    const {
        user,
        token,
        logout
    } = useAuth();

    const navigate = useNavigate();

    const label = key =>
        translations[language]?.[key] || key;

    const [
        showDownloadPopup,
        setShowDownloadPopup
    ] = useState(false);

    const [
        downloadImage,
        setDownloadImage
    ] = useState(null);

    const languageCodes =
        Object.keys(translations);

    const languageNames =
        languageCodes.reduce(
            (acc, code) => {
                acc[code] =
                    translations[code]
                        ?.languageName ||
                    code;

                return acc;
            },
            {}
        );

    const EXPORT_SIZES = {
        square: [1080, 1080],
        portrait: [1080, 1350],
        landscape: [1200, 900],
        visitingCard: [1050, 600],
        businessCard: [1050, 600],
        bookmark: [600, 1800],
        instagramPost: [1080, 1080],
        instagramStory: [1080, 1920],
        facebookCover: [820, 312]
    };

    const consumeDownloadCredit =
        async () => {
            try {
                if (!token) {
                    navigate("/login");
                    return false;
                }

                const API_URL =
                    import.meta.env
                        .VITE_API_URL ||
                    "http://192.168.1.28:5000/api";

                const res = await fetch(
                    `${API_URL}/user/consume`,
                    {
                        method: "POST",
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                let data = {};

                try {
                    data = await res.json();
                } catch {
                    data = {};
                }

                if (
                    res.status === 403 &&
                    data.code ===
                    "PAYMENT_REQUIRED"
                ) {
                    alert(
                        "Please save your ad before purchasing a plan."
                    );

                    /*
                     * VERY IMPORTANT:
                     * Do NOT navigate directly.
                     *
                     * AdStudio receives this and
                     * opens the save/leave dialog.
                     */
                    onNavigate("pricing");

                    return false;
                }

                if (
                    res.status === 403 &&
                    data.code ===
                    "CREDITS_EMPTY"
                ) {
                    alert(
                        "Your Download/Share credits are finished. Please save your ad before purchasing or upgrading your plan."
                    );

                    onNavigate("pricing");

                    return false;
                }

                if (!res.ok) {
                    alert(
                        data.message ||
                        "Unable to authorize this action."
                    );

                    return false;
                }

                return true;
            } catch (error) {
                console.error(
                    "CONSUME CREDIT ERROR:",
                    error
                );

                alert(
                    "Unable to verify your Download/Share access. Please try again."
                );

                return false;
            }
        };

    const download = async (
        format = "png"
    ) => {
        const allowed =
            await consumeDownloadCredit();

        if (!allowed) return;

        if (!canvasRef?.current) {
            alert(
                "Canvas is not ready."
            );
            return;
        }

        try {
            const stage =
                typeof canvasRef.current
                    .getStage === "function"
                    ? canvasRef.current.getStage()
                    : canvasRef.current;

            if (
                !stage ||
                typeof stage.toDataURL !==
                "function"
            ) {
                alert(
                    "Unable to export the canvas."
                );
                return;
            }

            await new Promise(resolve =>
                setTimeout(resolve, 100)
            );

            const mime =
                format === "jpeg"
                    ? "image/jpeg"
                    : "image/png";

            const uiWidth = stage.width();

            const [
                exportWidth
            ] =
                EXPORT_SIZES[adSize] ||
                [uiWidth];

            const pixelRatio =
                exportWidth / uiWidth;

            const dataUrl =
                stage.toDataURL({
                    pixelRatio,
                    mimeType: mime
                });

            setDownloadImage(dataUrl);
            setShowDownloadPopup(true);

            const isMobile =
                /Mobi|Android|iPhone/i.test(
                    navigator.userAgent
                );

            if (isMobile) {
                const newTab =
                    window.open();

                if (!newTab) {
                    alert(
                        "Please allow popups to download the image."
                    );
                    return;
                }

                newTab.document.write(`
                    <html>
                    <head>
                        <title>AdStudio Download</title>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                    </head>
                    <body style="
                        margin:0;
                        background:#000;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        min-height:100vh;
                    ">
                        <img
                            src="${dataUrl}"
                            alt="Ad"
                            style="
                                width:100%;
                                height:auto;
                                display:block;
                            "
                        />

                        <p style="
                            color:#fff;
                            font-family:sans-serif;
                            padding:10px;
                            text-align:center;
                        ">
                            Long press the image → Save Image
                        </p>
                    </body>
                    </html>
                `);

                newTab.document.close();

                return;
            }

            const link =
                document.createElement("a");

            link.href = dataUrl;
            link.download =
                `ad.${format}`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (err) {
            console.error(
                "DOWNLOAD ERROR:",
                err
            );

            alert(
                "Download failed"
            );
        }

        setTimeout(() => {
            setShowDownloadPopup(false);
        }, 2000);
    };

    const shareAd = async () => {
        const allowed =
            await consumeDownloadCredit();

        if (!allowed) return;

        if (!canvasRef?.current) {
            alert(
                "Canvas is not ready."
            );
            return;
        }

        try {
            const stage =
                typeof canvasRef.current
                    .getStage === "function"
                    ? canvasRef.current.getStage()
                    : canvasRef.current;

            if (
                !stage ||
                typeof stage.toDataURL !==
                "function"
            ) {
                alert(
                    "Unable to export the canvas."
                );
                return;
            }

            await new Promise(resolve =>
                setTimeout(resolve, 100)
            );

            const uiWidth = stage.width();

            const [
                exportWidth
            ] =
                EXPORT_SIZES[adSize] ||
                [uiWidth];

            const pixelRatio =
                exportWidth / uiWidth;

            const dataUrl =
                stage.toDataURL({
                    pixelRatio,
                    mimeType: "image/png"
                });

            const blob =
                await fetch(dataUrl)
                    .then(res =>
                        res.blob()
                    );

            const file = new File(
                [blob],
                "ad.png",
                {
                    type: "image/png"
                }
            );

            if (
                navigator.canShare &&
                navigator.canShare({
                    files: [file]
                })
            ) {
                await navigator.share({
                    files: [file],
                    title: "My Ad"
                });

                return;
            }

            if (navigator.share) {
                await navigator.share({
                    title: "My Ad",
                    text: "Check this ad",
                    url: dataUrl
                });

                return;
            }

            const newTab =
                window.open();

            if (newTab) {
                newTab.document.write(`
                    <html>
                    <head>
                        <title>AdStudio Share</title>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                    </head>

                    <body style="
                        margin:0;
                        background:#000;
                        text-align:center;
                        min-height:100vh;
                    ">
                        <img
                            src="${dataUrl}"
                            alt="Ad"
                            style="
                                width:100%;
                                height:auto;
                                display:block;
                            "
                        />

                        <p style="
                            color:white;
                            font-family:sans-serif;
                            padding:10px;
                        ">
                            Long press the image to save or share.
                        </p>
                    </body>
                    </html>
                `);

                newTab.document.close();
            } else {
                alert(
                    "Sharing is not supported. Please allow popups and try again."
                );
            }
        } catch (err) {
            if (
                err?.name ===
                "AbortError"
            ) {
                return;
            }

            console.error(
                "SHARE ERROR:",
                err
            );

            alert(
                "Share failed"
            );
        }
    };

    return (
        <div className="topbar-container">

            <div className="topbar-full flex flex-wrap items-center justify-between gap-2 mb-[5px]">

                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                        onNavigate("home")
                    }
                >
                    <div className="w-10 h-10 bg-white text-[#0b1f33] font-bold flex items-center justify-center rounded">
                        AD
                    </div>

                    <span className="text-xl font-bold">
                        Ad Studio
                    </span>
                </div>

                <div className="flex gap-2 flex-wrap">

                    <Tippy
                        content={label("home")}
                    >
                        <button
                            onClick={() =>
                                onNavigate(
                                    "home"
                                )
                            }
                            className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                        >
                            <FaHome />
                            {label("home")}
                        </button>
                    </Tippy>

                    <Tippy
                        content={label(
                            "dashboard"
                        )}
                    >
                        <button
                            onClick={() =>
                                onNavigate(
                                    "dashboard"
                                )
                            }
                            className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                        >
                            <FaChartBar />
                            {label(
                                "dashboard"
                            )}
                        </button>
                    </Tippy>

                    <Tippy
                        content={label(
                            "pricing"
                        )}
                    >
                        <button
                            onClick={() =>
                                onNavigate(
                                    "pricing"
                                )
                            }
                            className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                        >
                            <FaDollarSign />
                            {label(
                                "pricing"
                            )}
                        </button>
                    </Tippy>

                    <Tippy
                        content={label(
                            "logout"
                        )}
                    >
                        <button
                            onClick={() => {
                                logout();

                                navigate(
                                    "/",
                                    {
                                        replace: true
                                    }
                                );
                            }}
                            className="flex gap-1 items-center text-sm px-2 py-1 rounded bg-red-100 hover:bg-red-200 text-red-600"
                        >
                            <FaSignOutAlt />
                            {label(
                                "logout"
                            )}
                        </button>
                    </Tippy>

                </div>

                <div className="flex gap-2 flex-wrap items-center">

                    <div className="flex flex-col">
                        <label className="text-[14px] text-white mt-2 text-center">
                            {label("Ad Size") ||
                                "Ad Size"}
                        </label>

                        <select
                            className="bg-white text-[#0b1f33] px-2 py-1 rounded min-w-[120px]"
                            value={adSize}
                            onChange={e =>
                                setAdSize(
                                    e.target.value
                                )
                            }
                        >
                            <option value="square">
                                Square
                            </option>
                            <option value="portrait">
                                Portrait
                            </option>
                            <option value="landscape">
                                Landscape
                            </option>
                            <option value="visitingCard">
                                Visiting Card
                            </option>
                            <option value="businessCard">
                                Business Card
                            </option>
                            <option value="bookmark">
                                Bookmark
                            </option>
                            <option value="instagramPost">
                                Instagram Post
                            </option>
                            <option value="instagramStory">
                                Instagram Story
                            </option>
                            <option value="facebookCover">
                                Facebook Cover
                            </option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[14px] text-white mt-2 text-center">
                            {label("Language") ||
                                "Language"}
                        </label>

                        <select
                            className="bg-white text-[#0b1f33] px-2 py-1 rounded min-w-[140px]"
                            value={language}
                            onChange={e =>
                                setLanguage(
                                    e.target.value
                                )
                            }
                        >
                            {languageCodes.map(
                                code => (
                                    <option
                                        key={code}
                                        value={code}
                                    >
                                        {
                                            languageNames[
                                            code
                                            ]
                                        }
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    <button
                        onClick={() =>
                            download("png")
                        }
                        className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-blue-600 text-white"
                    >
                        <FaDownload />
                        PNG
                    </button>

                    <button
                        onClick={() =>
                            download("jpeg")
                        }
                        className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-blue-600 text-white"
                    >
                        <FaFileExport />
                        JPEG
                    </button>

                    <button
                        onClick={onSave}
                        className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-yellow-500 text-white"
                    >
                        <FaSave />
                        {label("save")}
                    </button>

                    <button
                        onClick={shareAd}
                        className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-green-600 text-white"
                    >
                        <FaShareAlt />
                        Share
                    </button>
                </div>
            </div>

            <div className="topbar-mobile-header">

                <div className="logo">
                    AD
                </div>

                <span>
                    Ad Studio
                </span>

                <div className="icon-item">
                    <button
                        className="icon-btn"
                        onClick={() =>
                            onNavigate(
                                "home"
                            )
                        }
                    >
                        <FaHome />
                    </button>

                    <span className="icon-label">
                        Home
                    </span>
                </div>

                <div className="icon-item">
                    <button
                        className="icon-btn"
                        onClick={() =>
                            onNavigate(
                                "dashboard"
                            )
                        }
                    >
                        <FaChartBar />
                    </button>

                    <span className="icon-label">
                        Dashboard
                    </span>
                </div>

                <div className="icon-item">
                    <button
                        className="icon-btn"
                        onClick={() =>
                            onNavigate(
                                "pricing"
                            )
                        }
                    >
                        <FaDollarSign />
                    </button>

                    <span className="icon-label">
                        Pricing
                    </span>
                </div>
            </div>

            <div className="topbar-icons">

                <div className="topbar-icons">

                    <div className="icon-item">
                        <select
                            className="icon-btn bg-white text-[#0b1f33] text-xs px-1"
                            value={adSize}
                            onChange={e =>
                                setAdSize(
                                    e.target.value
                                )
                            }
                        >
                            <option value="square">
                                Square
                            </option>
                            <option value="portrait">
                                Portrait
                            </option>
                            <option value="landscape">
                                Landscape
                            </option>
                            <option value="visitingCard">
                                Visiting Card
                            </option>
                            <option value="businessCard">
                                Business Card
                            </option>
                            <option value="bookmark">
                                Bookmark
                            </option>
                            <option value="instagramPost">
                                Instagram Post
                            </option>
                            <option value="instagramStory">
                                Instagram Story
                            </option>
                            <option value="facebookCover">
                                Facebook Cover
                            </option>
                        </select>

                        <span className="icon-label">
                            Size
                        </span>
                    </div>

                    <div className="icon-item">
                        <select
                            className="icon-btn bg-white text-[#0b1f33] text-xs px-1"
                            value={language}
                            onChange={e =>
                                setLanguage(
                                    e.target.value
                                )
                            }
                        >
                            {languageCodes.map(
                                code => (
                                    <option
                                        key={code}
                                        value={code}
                                    >
                                        {
                                            languageNames[
                                            code
                                            ]
                                        }
                                    </option>
                                )
                            )}
                        </select>

                        <span className="icon-label">
                            Lang
                        </span>
                    </div>

                    <div className="icon-item">
                        <button
                            className="icon-btn"
                            onClick={() =>
                                download(
                                    "png"
                                )
                            }
                        >
                            <FaDownload />
                        </button>

                        <span className="icon-label">
                            PNG
                        </span>
                    </div>

                    <div className="icon-item">
                        <button
                            className="icon-btn"
                            onClick={() =>
                                download(
                                    "jpeg"
                                )
                            }
                        >
                            <FaFileExport />
                        </button>

                        <span className="icon-label">
                            JPEG
                        </span>
                    </div>

                    <div className="icon-item">
                        <button
                            className="icon-btn"
                            onClick={onSave}
                        >
                            <FaSave />
                        </button>

                        <span className="icon-label">
                            Save
                        </span>
                    </div>

                    <div className="icon-item">
                        <button
                            className="icon-btn"
                            onClick={shareAd}
                        >
                            <FaShareAlt />
                        </button>

                        <span className="icon-label">
                            Share
                        </span>
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
                                src={
                                    downloadImage
                                }
                                alt="Preview"
                                className="w-full rounded-lg mb-4"
                            />
                        )}

                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-blue-600 animate-[loading_2s_linear_infinite] w-full" />
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