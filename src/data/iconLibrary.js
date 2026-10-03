import React from "react";
import * as FaIcons from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

/*
    ============================================================
    ADSTUDIO ICON LIBRARY
    ============================================================

    Uses the Font Awesome collection already provided by
    react-icons.

    The icon is converted into an SVG data URL before it is
    placed on the Konva canvas.

    This means:
    - no external image URL
    - export works
    - saved ads keep the icon
    - color can be changed
*/

const iconEntries = Object.entries(FaIcons)
    .filter(([name, Component]) => {
        return (
            name.startsWith("Fa") &&
            typeof Component === "function"
        );
    })
    .map(([name, Component]) => ({
        name,
        Component,
        label: name
            .replace(/^Fa/, "")
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

export const ICON_LIBRARY = iconEntries;


/*
    Useful search aliases.

    This makes searches such as:
    "fork"
    "knife"
    "food"
    "restaurant"
    "phone"
    "facebook"

    easier to find.
*/
const SEARCH_ALIASES = {
    FaUtensils: "fork knife spoon food restaurant cooking utensils kitchen",
    FaUtensilSpoon: "spoon food restaurant cooking kitchen",
    FaAppleWhole: "apple fruit food",
    FaBurger: "burger hamburger food restaurant",
    FaPizzaSlice: "pizza food restaurant",
    FaIceCream: "ice cream dessert food",
    FaCakeCandles: "cake birthday dessert food",
    FaMugHot: "coffee cafe drink restaurant",
    FaWineGlass: "wine drink restaurant",
    FaBottleWater: "water drink",
    FaGlassWater: "water drink",
    FaFish: "fish food restaurant",
    FaDrumstickBite: "chicken food restaurant",
    FaBreadSlice: "bread food bakery restaurant",
    FaCarrot: "vegetable food restaurant",
    FaLeaf: "leaf nature eco organic",
    FaSeedling: "plant nature eco organic",
    FaTree: "tree nature",
    FaHouse: "house home real estate",
    FaBuilding: "building office business real estate",
    FaHotel: "hotel resort travel",
    FaStore: "store shop retail business",
    FaCartShopping: "shopping cart ecommerce retail",
    FaBagShopping: "shopping bag retail fashion",
    FaCamera: "camera photography photo studio",
    FaImage: "image photo picture",
    FaVideo: "video film media",
    FaPhone: "phone telephone contact",
    FaEnvelope: "email mail contact",
    FaLocationDot: "location map address contact",
    FaGlobe: "website web internet",
    FaLink: "link website web",
    FaInstagram: "instagram social media",
    FaFacebook: "facebook social media",
    FaYoutube: "youtube social media video",
    FaWhatsapp: "whatsapp social media contact",
    FaLinkedin: "linkedin social media business",
    FaTiktok: "tiktok social media video",
    FaTwitter: "twitter x social media",
    FaUser: "user person profile",
    FaUsers: "users people team group",
    FaHeart: "heart love favorite",
    FaStar: "star rating favorite",
    FaCheck: "check done success",
    FaXmark: "close cancel remove",
    FaPlus: "plus add",
    FaMinus: "minus remove",
    FaArrowLeft: "arrow left direction",
    FaArrowRight: "arrow right direction",
    FaArrowUp: "arrow up direction",
    FaArrowDown: "arrow down direction",
    FaLocationArrow: "location direction navigation",
    FaTruck: "truck delivery shipping",
    FaCar: "car auto vehicle",
    FaMotorcycle: "motorcycle bike vehicle",
    FaPlane: "plane travel flight",
    FaTrain: "train travel transport",
    FaDumbbell: "fitness gym workout",
    FaPersonRunning: "running fitness exercise",
    FaSpa: "spa beauty wellness",
    FaScissors: "scissors salon beauty haircut",
    FaPaintbrush: "paint brush design art",
    FaGraduationCap: "education school university",
    FaBook: "book education school",
    FaBriefcase: "business work office",
    FaMoneyBill: "money finance payment",
    FaCreditCard: "card payment finance",
    FaCalendar: "calendar date event",
    FaClock: "clock time",
    FaGift: "gift present offer",
    FaTag: "tag price offer sale",
    FaPercent: "percent discount sale offer",
    FaBullhorn: "marketing announcement promotion",
    FaFire: "hot fire popular sale",
    FaBolt: "energy electricity fast",
    FaPhoneVolume: "phone call contact",
    FaComments: "comments chat message",
    FaMessage: "message chat contact",
    FaMagnifyingGlass: "search find",
    FaGear: "settings configuration",
    FaLock: "lock security",
    FaShield: "security protection",
    FaDownload: "download",
    FaUpload: "upload",
    FaShareNodes: "share social media",
    FaPaperPlane: "send message",
    FaCheckCircle: "success done approved",
    FaCircleInfo: "information info",
    FaCircleQuestion: "question help",
    FaTriangleExclamation: "warning alert",
    FaCircleExclamation: "warning alert"
};


/*
    Returns searchable text for an icon.
*/
export const getIconSearchText = icon => {
    if (!icon) return "";

    return [
        icon.name,
        icon.label,
        SEARCH_ALIASES[icon.name] || ""
    ]
        .join(" ")
        .toLowerCase();
};


/*
    Convert an icon component into an SVG data URL.
*/
export const iconToSvgDataUrl = (
    iconName,
    color = "#0b1f33"
) => {
    const entry = iconEntries.find(
        item => item.name === iconName
    );

    if (!entry) {
        return null;
    }

    const svg = renderToStaticMarkup(
        React.createElement(entry.Component, {
            color,
            width: 512,
            height: 512,
            style: {
                color
            },
            "aria-hidden": true
        })
    );

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};


/*
    Load the generated SVG into a normal Image object.

    Konva can then render it exactly like an uploaded image.
*/
export const loadIconImage = (
    iconName,
    color = "#0b1f33"
) => {
    return new Promise((resolve, reject) => {
        const src = iconToSvgDataUrl(
            iconName,
            color
        );

        if (!src) {
            reject(
                new Error(
                    `Icon "${iconName}" was not found.`
                )
            );

            return;
        }

        const image = new window.Image();

        image.onload = () => {
            resolve({
                image,
                src
            });
        };

        image.onerror = () => {
            reject(
                new Error(
                    `Could not load icon "${iconName}".`
                )
            );
        };

        image.src = src;
    });
};


/*
    Create a complete icon object for AdStudio state.
*/
export const createIconElement = async ({
    id,
    iconName,
    color = "#0b1f33",
    x = 0,
    y = 0,
    width = 80,
    height = 80,
    rotation = 0
}) => {
    const {
        image,
        src
    } = await loadIconImage(
        iconName,
        color
    );

    return {
        id,
        type: "icon",

        icon: iconName,
        name: iconName,

        x,
        y,

        width,
        height,

        rotation,

        color,

        src,
        image
    };
};


/*
    Rebuild a saved icon from its SVG source.

    Used when opening an existing saved ad.
*/
export const restoreIconElement = async icon => {
    if (!icon) return null;

    try {
        if (
            icon.icon &&
            icon.color
        ) {
            const {
                image,
                src
            } = await loadIconImage(
                icon.icon,
                icon.color
            );

            return {
                ...icon,
                type: "icon",
                src: src || icon.src,
                image
            };
        }

        if (icon.src) {
            const image = new window.Image();

            await new Promise((resolve, reject) => {
                image.onload = resolve;
                image.onerror = reject;
                image.src = icon.src;
            });

            return {
                ...icon,
                type: "icon",
                image
            };
        }

        return null;
    } catch (error) {
        console.error(
            "Failed to restore icon:",
            error
        );

        return null;
    }
};