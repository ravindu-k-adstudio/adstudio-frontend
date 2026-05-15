
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
import Contact from "../src/pages/Contact";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;