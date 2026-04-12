const API = import.meta.env.VITE_API_URL;

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
