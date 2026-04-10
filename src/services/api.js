// const API_URL = "http://localhost:5000/api";

// export const upgradePlan = async (plan, token) => {
//     const res = await fetch(`${API_URL}/user/upgrade`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ plan })
//     });

//     return res.json();
// };

// 

// const API = "http://localhost:5000/api";

const API = "http://192.168.1.28:5000/api";

export async function signup(data) {
    const res = await fetch(`${API}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function login(data) {
    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function saveAd(ad, token) {
    const res = await fetch(`${API}/ads/save`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(ad)
    });
    return res.json();
}

export async function upgradePlan(planKey, token) {
    const res = await fetch(`${API}/user/upgrade`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ planKey })
    });
    return res.json();
}
