import {
    Wifi,
    BellRing,
    ConciergeBell,
} from "lucide-react";

const facilities = [
    {
        title: "Restaurant",
        description:
            "Savor delicious, all-day dining in our elegant restaurant offering international and local cuisine.",
        image: "/resturimg.jpg",
    },
    {
        title: "Swimming Pool",
        description:
            "Relax in our sparkling outdoor pool perfect for a refreshing swim in a serene environment.",
        image: "/poolimg.jpg",
    },
    {
        title: "Bar & Lounges",
        description:
            "Unwind with signature cocktails and fine wines in our sophisticated bar and lounge areas.",
        image: "/loungeimg.jpg",
    },
    {
        title: "Gym",
        description:
            "Stay active in our fully equipped fitness center featuring the latest equipment for a productive workout.",
        image: "/gymimg.jpg",
    },
];

const comforts = [
    {
        icon: Wifi,
        title: "Free WIFI",
        description:
            "Stay connected effortlessly with fast, free WIFI available throughout the hotel.",
    },
    {
        icon: BellRing,
        title: "24-Hour Room Service",
        description:
            "Delight in dining anytime with our round-the-clock room service.",
    },
    {
        icon: ConciergeBell,
        title: "Concierge Service",
        description:
            "Enjoy personalized support with our dedicated concierge service.",
    },
];

export default function FacilitiesSection() {
    return (
        <section className="bg-white text-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}

                <div className="text-center mb-14">

                    <p className="max-w-3xl mx-auto text-black text-[18px] opensans">
                        Our facilities are designed with your comfort in mind—thoughtful
                        spaces, modern amenities, and a calming atmosphere that helps you
                        relax, recharge, and enjoy your stay.
                    </p>
                </div>

                {/* Cards */}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {facilities.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-xl overflow-hidden bg-[#F7F0E4] shadow-lg group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[360px] object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 text-black opensans">
                                <h3 className="text-3xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-700 leading-8 text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Comfort */}

                <div className="mt-28">

                    <h3 className="text-center text-[#C8A44D] text-5xl italic courgette mb-16">
                        Additional Comforts
                    </h3>

                    <div className="grid md:grid-cols-3 border-y border-[#C8A44D]/30">
                        {comforts.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`py-12 px-8 text-center ${index !== comforts.length - 1
                                            ? "md:border-r border-[#C8A44D]/40"
                                            : ""
                                        }`}
                                >
                                    <Icon
                                        className="mx-auto text-[#C8A44D]"
                                        size={46}
                                        strokeWidth={1.5}
                                    />

                                    <h4 className="mt-5 text-3xl font-bold text-[#C8A44D]">
                                        {item.title}
                                    </h4>

                                    <p className="text-black mt-4 leading-6">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}

                <div className="mt-28 text-center">
                    <h2 className="text-5xl text-black playfair font-semibold mb-5">
                        Visit and Experience
                    </h2>

                    <p className="max-w-3xl mx-auto text-black playfair leading-6">
                        Make the most of your stay with our thoughtfully designed
                        facilities, ensuring every moment with us is as comfortable and
                        enjoyable as possible.
                    </p>

                    <a
  href="https://staging-hms.atslng.com/booking-app"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 bg-[#C8A44D] manrope hover:bg-[#b89235] transition px-6 py-3 rounded-xl font-semibold"
>
  Book Your Stay
</a>

                </div>
            </div>
        </section>
    );
}