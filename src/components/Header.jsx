import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    const isHomePage = location.pathname === "/";


    const closeMenu = () => {
        setIsOpen(false);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isHomePage
                ? "bg-black"
                : scrolled
                    ? "bg-black shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
                {/* Left - Logo */}
                <div className="flex-1">
  <Link to="/">
    <div className="w-14 h-14 rounded-full overflow-hidden bg-black mx-5 flex items-center justify-center">
      <img
        src="/logo.png"
        alt="Emahlen Logo"
        className="w-full h-full object-cover"
      />
    </div>
  </Link>
</div>

                {/* Center - Navigation */}
                <div className="hidden lg:flex flex-1 justify-center items-center playfair space-x-10 font-medium text-sm">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8A44D]"
                                : "text-white hover:text-[#C8A44D] transition"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8A44D]"
                                : "text-white hover:text-[#C8A44D] transition"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/rooms"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8A44D]"
                                : "text-white hover:text-[#C8A44D] transition"
                        }
                    >
                        Rooms
                    </NavLink>

                    <NavLink
                        to="/facilities"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8A44D]"
                                : "text-white hover:text-[#C8A44D] transition"
                        }
                    >
                        Facilities
                    </NavLink>
                    <NavLink
                        to="/media"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#C8A44D]"
                                : "text-white hover:text-[#C8A44D] transition"
                        }
                    >
                        Media
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive
                                ? "text-[#C8A44D]"
                                : "text-white hover:text-[#C8A44D]"
                            } whitespace-nowrap transition`
                        }
                    >
                        Contact Us
                    </NavLink>
                </div>

                {/* Right - Button */}
                <div className="hidden lg:flex flex-1 justify-end">
                    <a
                        href="https://staging-hms.atslng.com/booking-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#C8A44D] text-[#C8A44D] playfair px-5 py-1 rounded-lg hover:bg-[#C8A44D] hover:text-white transition"

                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-20 left-0 w-full bg-[#000000] playfair transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col py-6 playfair text-sm font-medium">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="px-6 py-4 text-[#C8A44D] border-b border-white/10"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className="px-6 py-4 text-white border-b border-white/10"
                    >
                        About
                    </Link>

                    <Link
                        to="/rooms"
                        onClick={closeMenu}
                        className="px-6 py-4 text-white border-b border-white/10"
                    >
                        Rooms
                    </Link>

                    <Link
                        to="/facilities"
                        onClick={closeMenu}
                        className="px-6 py-4 text-white border-b border-white/10"
                    >
                        Facilities
                    </Link>

                    <Link
                        to="/media"
                        onClick={closeMenu}
                        className="px-6 py-4 text-white border-b border-white/10"
                    >
                        Media
                    </Link>

                    <Link
                        to="/contact"
                        onClick={closeMenu}
                        className="px-6 py-4 text-white border-b border-white/10"
                    >
                        Contact Us
                    </Link>

                    <div className="px-6 pt-6">
                        <Link
                            to="/booking"
                            onClick={closeMenu}
                            className="block text-center border playfair border-[#C8A44D] text-[#C8A44D] py-3 rounded-md hover:bg-[#C8A44D] hover:text-white transition"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}