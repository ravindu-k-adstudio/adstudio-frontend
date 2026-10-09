import { createContext, useContext, useEffect, useState, useCallback } from "react";

const AuthContext = createContext();

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://192.168.1.28:5000/api";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const refreshUser = useCallback(async (tokenOverride = null) => {
        const activeToken =
            tokenOverride ||
            token ||
            localStorage.getItem("token");

        if (!activeToken) {
            return null;
        }

        const res = await fetch(`${API_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${activeToken}`
            }
        });

        if (!res.ok) {
            throw new Error("Unable to refresh account.");
        }

        const data = await res.json();

        setUser(data.user);
        setToken(activeToken);

        return data.user;
    }, [token]);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const urlParams =
                    new URLSearchParams(window.location.search);

                const tokenFromUrl =
                    urlParams.get("token");

                if (tokenFromUrl) {
                    localStorage.setItem(
                        "token",
                        tokenFromUrl
                    );
                }

                const savedToken =
                    localStorage.getItem("token");

                if (!savedToken) {
                    setLoading(false);
                    return;
                }

                setToken(savedToken);

                const res = await fetch(
                    `${API_URL}/auth/me`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${savedToken}`
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error("Auth failed");
                }

                const data = await res.json();

                setUser(data.user);
            } catch (err) {
                console.log("Auth error:", err);

                setUser(null);
                setToken(null);
                localStorage.removeItem("token");
            }

            setLoading(false);
        };

        initAuth();
    }, []);

    const signup = async (
        name,
        email,
        password,
        plan
    ) => {
        const res = await fetch(
            `${API_URL}/auth/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    plan
                })
            }
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data.message || "Signup failed"
            );
        }

        setUser(data.user);
        setToken(data.token);

        localStorage.setItem(
            "token",
            data.token
        );
    };

    const login = async (
        email,
        password
    ) => {
        const res = await fetch(
            `${API_URL}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                data.message || "Login failed"
            );
        }

        setUser(data.user);
        setToken(data.token);

        localStorage.setItem(
            "token",
            data.token
        );
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    const saveAd = (ad) => {
        setUser(prev => ({
            ...prev,
            ads: prev?.ads
                ? [ad, ...prev.ads]
                : [ad]
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
                saveAd,
                refreshUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>
    useContext(AuthContext);