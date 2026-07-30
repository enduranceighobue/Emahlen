import { Link } from "react-router-dom";
import BookingSearch from "../components/Booking/BookingSearch";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative h-screen min-h-[500px] overflow-visible "
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/heroimg2.png"
                    alt="Emahlen Hotel"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full -translate-y-10">
                    <div className="flex flex-col gap-4 max-w-2xl ">
                        <span
                            className="
                inline-flex items-center
                 py-1 
                rounded-full
                text-[12px] sm:text-xs md:text-sm
                text-[#C8A44D]
                manrope px-2
                w-fit
              "
                        >
                            Welcome to Emahlen Hotel
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-5xl  leading-tight mb-6 text-white cormorant">
                            Experience Luxury,
                            <br />
                            <span className="text-white cormorant">
                                Comfort & <span className="text-[#C8A44D] cormorant">Exceptional</span>

                            </span>
                            <br />
                            <span className="inline-block cormorant text-[#C8A44D] border-b-2 border-[#C8A44D] pb-3">
                                Hospitality
                            </span>
                        </h1>

                        <p className="max-w-xl manrope mb-8 text-gray-300 md:text-lg  ">
                            where modern elegance meets exceptional service. Whether you're here for business or leisure, enjoy a stay designed around comfort and unforgettable experiences.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="https://staging-hms.atslng.com/booking-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-lg  manrope text-white transition bg-[#C8A44D] hover:bg-[#ff9311] "
                            >
                                Book a Room
                            </a>

                            <Link to="/rooms"

                                className="px-8 py-3 rounded-lg manrope  text-[#C8A44D] transition border border-[#C8A44D] hover:bg-white hover:text-black dm-sans"
                            >
                                Explore Our Rooms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
           <div
  className="
    absolute
    inset-x-0
    bottom-[-70px]
    left-[310px]
    z-30
    px-4
    sm:px-6
    lg:px-12
    flex
    justify-center
  "
>
  <div className="w-full max-w-7xl md:block hidden">
    <BookingSearch />
  </div>
</div>
        </section>
    );
}