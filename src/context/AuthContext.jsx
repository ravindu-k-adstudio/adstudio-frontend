import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
// const API_URL = "http://localhost:5000/api";
const API_URL = "http://192.168.1.28:5000/api";

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    /* -------- LOAD USER -------- */
    useEffect(() => {

        const initAuth = async () => {
            try {

                // token from mobile webview
                const urlParams = new URLSearchParams(window.location.search);
                const tokenFromUrl = urlParams.get("token");

                if (tokenFromUrl) {
                    localStorage.setItem("token", tokenFromUrl);
                    setToken(tokenFromUrl);
                }

                const savedToken = localStorage.getItem("token");

                if (!savedToken) {
                    setLoading(false);
                    return;
                }

                setToken(savedToken);

                const res = await fetch(`${API_URL}/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${savedToken}`
                    }
                });

                if (!res.ok) throw new Error("Auth failed");

                const data = await res.json();
                setUser(data.user);

            } catch (err) {
                console.log("Auth error:", err);
                logout();
            }

            setLoading(false);
        };

        initAuth();

    }, []);

    /* -------- SIGNUP -------- */
    const signup = async (name, email, password, plan) => {

        const res = await fetch(`${API_URL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, plan })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Signup failed");
        }

        setUser(data.user);
        setToken(data.token);

        localStorage.setItem("token", data.token);
    };

    /* -------- LOGIN -------- */
    const login = async (email, password) => {

        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Login failed");
        }

        setUser(data.user);
        setToken(data.token);

        localStorage.setItem("token", data.token);
    };

    /* -------- LOGOUT -------- */
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        window.location.href = "/";
    };


    /* -------- SAVE AD LOCAL -------- */
    const saveAd = (ad) => {
        setUser(prev => ({
            ...prev,
            ads: prev?.ads ? [ad, ...prev.ads] : [ad]
        }));
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                signup,
                login,
                logout,
                saveAd
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);