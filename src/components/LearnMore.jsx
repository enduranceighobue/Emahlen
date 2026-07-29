import { Link } from "react-router-dom";

export default function LearnMore() {
    return (
        <section id="about" className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">

                {/* Left Content */}
                <div className="px-6 lg:px-0 lg:pr-16 py-10 -mt-17 lg:py-0 order-2 lg:order-1">

                    <h2 className="text-white cormorant text-3xl md:text-5xl lg:text-5xl leading-tight">
                        Where Luxury Meets
                        <br />
                        Unforgotten Moments
                    </h2>

                    <p className="mt-8 max-w-[430px] text-lg leading-relaxed text-gray-300 manrope">
                        Nestled in the heart of the city, Emahlen Hotel offers
                        thoughtfully designed rooms, premium facilities, and
                        personalized service to make every stay memorable.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block manrope mt-12 border border-[#C8A44D] text-[#C8A44D] px-6 py-3 rounded-lg font-medium transition hover:bg-[#C8A44D] hover:text-black"
                    >
                        Learn More
                    </Link>

                </div>

                {/* Right Image */}
                <div className="order-1 lg:order-2">
                    <img
                        src="/learnmoreimg.jpg"
                        alt="Emahlen Hotel Lobby"
                        className="w-full h-[250px] sm:h-[2500px] md:h-[350px] lg:h-[450px] object-cover"
                    />
                </div>

            </div>
        </section>
    );
}