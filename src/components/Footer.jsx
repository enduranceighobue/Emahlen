import { Link } from "react-router-dom";
import { Phone, MailOpen, MapPin } from "lucide-react";
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";



export default function Footer() {
    return (
        <footer className="bg-black text-white  ">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Logo */}

                    <div className="flex justify-center lg:justify-start mb-30">

                        <Link
                            to="/">
                            <img
                                src="/logo.png"
                                alt="Emahlen Hotel"
                                className="w-32 object-contain"
                            />
                        </Link>
                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-[#C8A44D] text-xl opensans font-semibold mb-3">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-2 opensans text-sm ">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-[#C8A44D] transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-[#C8A44D] transition"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-[#C8A44D] transition"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/facilities"
                                    className="hover:text-[#C8A44D] transition"
                                >
                                    Facilities
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://hr-payrol-software-frontend.onrender.com/auth/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#C8A44D] transition"
                                >
                                    Career
                                </a>
                            </li>
                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-[#C8A44D] opensans text-xl font-semibold mb-3">
                            Contact Information
                        </h3>

                        <div className="space-y-2 opensans">

                            <div className="flex items-start  gap-4">

                                <Phone
                                    size={18}
                                    className="text-[#C8A44D] mt-1"
                                />

                                <a
                                    href="tel:+2347074441664"
                                    className="hover:text-[#C8A44D] transition cursor-pointer"
                                >
                                    +234 707 444 1664
                                </a>

                            </div>

                            <div className="flex items-start gap-4">

                                <MailOpen
                                    size={18}
                                    className="text-[#C8A44D] mt-1"
                                />

                                <a
                                    href="mailto:emahlensuitesawka@gmail.com"
                                    className="text-sm hover:text-[#C8A44D] transition"
                                >
                                    info@emahlensuites.com
                                </a>

                            </div>



                            <div className="flex items-start gap-4">

                                <MapPin
                                    size={18}
                                    className="text-[#C8A44D] mt-1 cursor-pointer "
                                />

                                <p className=" text-sm cursor-pointer hover:text-[#C8A44D]">
                                    Before fun city junction, Kwata, Awka, Anambra state, Nigeria.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-[#C8A44D] text-xl font-semibold mb-3">
                            Follow Us
                        </h3>

                        <div className="flex gap-6">

                            <a
                                href="https://www.facebook.com/people/Emahlensuitesawka/61560760221244/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF
                                    size={22}
                                    className="hover:text-[#C8A44D] transition"
                                />
                            </a>

                           <a
                                href="https://x.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter
                                    size={22}
                                    className="hover:text-[#C8A44D] transition"
                                />
                            </a> 

                            <a
                                href="https://www.instagram.com/emahlensuitesawka/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram
                                    size={22}
                                    className="hover:text-[#C8A44D] transition"
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/@yourchannel"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <FaYoutube
                                    size={22}
                                    className="hover:text-[#C8A44D] transition"
                                />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-7 text-center">

                    <p className="text-[#C8A44D] ">
                        © Copyrights reserved by Emahlen Hotels
                    </p>

                </div>

            </div>

        </footer>
    );
}