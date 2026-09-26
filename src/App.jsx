import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdStudio from "./studio/AdStudio";

import ProtectedRoute from "./components/ProtectedRoute";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "../src/pages/Contact";
import Footer from "./components/Footer";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {

  // ✅ This allows mobile app to pass JWT to web editor
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromApp = params.get("token");

    if (tokenFromApp) {
      localStorage.setItem("token", tokenFromApp);
    }
  }, []);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/adstudio"
          element={
            <ProtectedRoute>
              <AdStudio />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;