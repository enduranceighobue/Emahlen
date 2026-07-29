import { Check } from "lucide-react";
import { Link } from "react-router-dom";


const offers = [
    "Thoughtfully Designed Rooms",
    "Friendly, Attentive Staff",
    "Convenient Location",
    "Peaceful Ambience",
    "Well Sanitized and Healthy Pool",
    "Positive Guest Experience",
];

export default function AboutSection() {
    return (
        <section className="bg-[#fff6e3] py-20 rounded-tl-[300px] rounded-br-[380px] ">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <div className="flex justify-center mb-14">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold courgette text-[#C8A44D]">
                            What We Offer
                        </h2>
                        <div className="w-20 h-[3px] bg-[#C8A44D] mt-9" />
                    </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div>
                        <img
                            src="/offerimg.png"
                            alt="Hotel Room"
                            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Offer List */}
                    <div className="space-y-4 mb-43 opensans">
                        {offers.map((offer, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-5"
                            >
                                {/* Square Checkbox */}
                                <div className="w-7 h-7 border-2 border-[#C8A44D] rounded-sm flex items-center justify-center flex-shrink-0">
                                    <Check
                                        size={16}
                                        className="text-[#C8A44D]"
                                        strokeWidth={3}
                                    />
                                </div>

                                <p className="text-lg md:text-xl text-black font-semibold">
                                    {offer}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-30 text-center max-w-3xl mx-auto ">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] playfair mb-5">
                        Come Experience It for Yourself
                    </h2>

                    <p className="text-lg text-gray-600 leading-8 mb-8 playfair">
                        Whether you're staying a night or a week, we're ready to welcome you.
                    </p>

                    <a
                        href="https://staging-hms.atslng.com/booking-app"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="inline-block bg-[#C8A44D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b79236] transition duration-300"
                    >
                        Book Your Stay
                    </a>
                </div>


            </div>
        </section>
    );
}