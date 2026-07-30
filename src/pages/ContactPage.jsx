import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { ContactHero } from "../components/ContactHero";



export default function ContactPage() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(
                "https://formspree.io/f/YOUR_FORM_ID",
                {
                    method: "POST",
                    body: data,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }


    return (
        <>
            <ContactHero />
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-6 lg:gap-8">
                        {/* LEFT CARD */}

                        <div className="bg-[#F8F0DE] rounded-[28px] p-8">

                            <h2 className="playfair text-[40px] font-bold text-[#1E1E1E]">
                                Emahlen Hotels
                            </h2>

                            <img
                                src="/locationimg.png"
                                alt=""
                                className="w-full h-[180px] object-cover rounded-lg mt-8"
                            />

                            <div className="mt-10 space-y-8">

                                <div className="flex items-center gap-4">
                                    <MapPin
                                        className="text-[#C8A44D]"
                                        size={26}
                                    />

                                    <p className="text-xl font-medium text-black">
                                        Before fun city junction, Kwata, Awka, Anambra state, Nigeria.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone
                                        className="text-[#C8A44D]"
                                        size={26}
                                    />

                                    <p className="text-xl font-medium text-black ">
                                        +234 707 444 1664
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail
                                        className="text-[#C8A44D]"
                                        size={26}
                                    />

                                    <p className=" text-sm md:text-[20px] font-medium text-black">
                                        info@emahlensuites.com
                                    </p>
                                </div>

                            </div>

                            <h3 className="playfair text-[30px] font-bold mt-14 text-black">
                                Follow Us
                            </h3>

                            <div className="flex gap-8 mt-8">

                                <a
                                    href="https://www.instagram.com/emahlensuitesawka/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram
                                        size={30}
                                        className="hover:text-[#C8A44D] transition text-[#c335af]"
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/people/Emahlensuitesawka/61560760221244/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF
                                        size={30}
                                        className="hover:text-[#C8A44D] text-white bg-blue-900 transition"
                                    />
                                </a>

                                <a
                                    href="https://x.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                >
                                    <FaXTwitter
                                        size={30}
                                        className="hover:text-[#C8A44D] text-black transition"
                                    />
                                </a>

                            </div>

                        </div>

                        {/* RIGHT CARD */}

                        <div className="bg-[#F8F0DE] rounded-[28px] p-8">

                            {/* <h2 className="font-serif text-[42px] font-bold">
              Emahlen Hotels
            </h2> */}

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full h-20 rounded-3xl border border-[#C8A44D] text-black bg-[#ECECEC] px-6"
                                />

                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="h-20 rounded-3xl border text-black border-[#C8A44D] bg-[#ECECEC] px-6"
                                    />

                                    <input
                                        name="phone"
                                        type="text"
                                        placeholder="Phone Number"
                                        className="h-20 rounded-3xl border text-black border-[#C8A44D] bg-[#ECECEC] px-6"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    required
                                    rows={6}
                                    className="w-full rounded-3xl border text-black border-[#C8A44D] bg-[#ECECEC] px-6 py-5 resize-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full md:w-[300px] h-12 bg-[#C8A44D] rounded-lg text-white font-semibold mx-auto block"
                                >
                                    Send Message
                                </button>

                                {status === "success" && (
                                    <p className="text-green-600 text-center">
                                        ✅ Message sent successfully.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="text-red-600 text-center">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}