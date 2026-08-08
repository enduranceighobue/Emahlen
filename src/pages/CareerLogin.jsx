import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function CareerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // LOGIN
  // --------------------------------------------------

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      navigate("/career-management");
    } catch (error) {
      console.error("Career login error:", error);

      switch (error.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError("Invalid email or password.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/too-many-requests":
          setError(
            "Too many failed attempts. Please try again later."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError("Unable to sign in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // FORGOT PASSWORD
  // --------------------------------------------------

  const handleForgotPassword = () => {
    navigate("/career-forgot-password");
  };

  return (
    <main className="relative min-h-screen mt-7 flex items-center justify-center px-4 py-6 overflow-hidden">

      <button
      type="button"
      onClick={() => navigate("/")}
      className="absolute top-6 left-6 z-30 mt-15 mx-6 flex items-center gap-2 text-white/70 hover:text-white transition group"
    >
      <ChevronLeft
        size={18}
        className="group-hover:-translate-x-1 transition"
      />

      <span className="text-sm">
        Back to website
      </span>
        </button>


      {/* ================================================
          FULL PAGE BACKGROUND IMAGE
      ================================================= */}

      <img
        src="/vip.jpg"
        alt="Emahlen Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle gold overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-[#C8A44D]/20" />


      {/* ================================================
          LOGIN CARD
      ================================================= */}

      <div className="relative z-10 w-full max-w-sm">

        {/* HEADER */}
        <div className="relative h-24 rounded-t-2xl overflow-hidden">

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">

              <p className="text-[#C8A44D] text-[10px] uppercase tracking-[4px] font-medium">
                Emahlen Hotel
              </p>

              <h1 className="text-white text-xl font-serif mt-1">
                Career Portal
              </h1>

            </div>
          </div>

        </div>


        {/* ================================================
            FORM
        ================================================= */}

        <div className="bg-[#111]/95 backdrop-blur-md border border-white/10 border-t-0 rounded-b-2xl shadow-2xl px-5 py-5">

          {/* TITLE */}

          <div className="text-center">

            <h2 className="text-xl sm:text-2xl text-white font-serif">
              Career Management
            </h2>

            <p className="text-xs text-white/40 mt-1">
              Sign in to manage available positions
            </p>

          </div>


          {/* ERROR */}

          {error && (
            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2">

              <p className="text-xs text-red-400">
                {error}
              </p>

            </div>
          )}


          {/* FORM */}

          <form
            onSubmit={handleLogin}
            className="mt-5 space-y-3.5"
          >

            {/* EMAIL */}

            <div>

              <label className="block text-[11px] font-medium text-white/60 mb-1.5">
                Email address
              </label>

              <div className="relative">

                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full h-10 rounded-lg bg-[#1c1c1c] border border-white/10 text-xs text-white placeholder:text-white/20 pl-9 pr-3 outline-none transition focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D]/20"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div>

              <label className="block text-[11px] font-medium text-white/60 mb-1.5">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full h-10 rounded-lg bg-[#1c1c1c] border border-white/10 text-xs text-white placeholder:text-white/20 pl-9 pr-10 outline-none transition focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D]/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white transition"
                >
                  {showPassword ? (
                    <EyeOff size={15} />
                  ) : (
                    <Eye size={15} />
                  )}
                </button>

              </div>

            </div>


            {/* REMEMBER / FORGOT */}

            <div className="flex items-center justify-between pt-0.5">

              <label className="flex items-center gap-1.5 cursor-pointer">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                  className="w-3 h-3 accent-[#C8A44D]"
                />

                <span className="text-[10px] text-white/40">
                  Remember me
                </span>

              </label>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[10px] text-[#C8A44D] hover:text-[#e0bd62] transition"
              >
                Forgot password?
              </button>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 rounded-lg bg-[#C8A44D] hover:bg-[#b99538] disabled:opacity-60 disabled:cursor-not-allowed text-black text-xs font-semibold transition flex items-center justify-center gap-2 group"
            >

              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In

                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition"
                  />
                </>
              )}

            </button>

          </form>

        </div>

      </div>

    </main>
  );
}