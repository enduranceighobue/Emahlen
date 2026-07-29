import {
  BedDouble,
  Wifi,
  Dumbbell,
  ParkingSquare,
  UtensilsCrossed,
  GlassWater,
  Bell,
  Waves,
} from "lucide-react";

import { Link } from "react-router-dom";


const services = [
  {
    title: "24 Hours Room Services",
    description: "Comfort and service, available around the clock",
    icon: Bell,
    image: "/roomservice.jpg",
  },
  {
    title: "Restaurant",
    description: "Delicious dining in an elegant, welcoming atmosphere",
    icon: UtensilsCrossed,
    image: "/Restaurant.jpg",
  },
  {
    title: "Bar & Lounge",
    description:
      "Relax with signature drinks in a stylish, social setting",
    icon: GlassWater,
    image: "/bar.jpg",
  },
  {
    title: "Gym",
    description:
      "Stay active with our fully equipped fitness center.",
    icon: Dumbbell,
    image: "/gym.jpg",
  },
];

const amenities = [
  {
    title: "Luxury Accommodation",
    icon: BedDouble,
  },
  {
    title: "Complimentary Wi-Fi",
    icon: Wifi,
  },
  {
    title: "Swimming Pool",
    icon: Waves,
  },
  {
    title: "Fitness Centre",
    icon: Dumbbell,
  },
  {
    title: "Conference & Event Spaces",
    icon: UtensilsCrossed,
  },
  {
    title: "Secure Parking",
    icon: ParkingSquare,
  },
];

export default function AboutUs() {
  return (
    <section className="bg-white text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-30">

        <div className="flex items-center gap-3 mb-8 leading-6 ">
  <h3 className="text-[#C9A227] courgette text-4xl ">
    About Us
  </h3>

  <div className="w-24 h-[2px] mt-9 bg-[#C9A227]"></div>
</div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <h2 className="text-4xl md:text-5xl text-black playfair font-bold leading-tight font-serif">
            Where Comfort Meets
            <br />
            Class
          </h2>

          <div>
            <p className="text-black text-lg manrope leading-8">
              Nestled in the heart of the city, Emahlen Hotel offers
              thoughtfully designed rooms, premium facilities, and
              personalized service to make every stay memorable.
            </p>
            <Link  to="/contact" >
            <button className="mt-6 border manrope border-[#C9A227] text-[#C9A227] px-6 py-2 rounded-lg hover:bg-[#C9A227] hover:text-black transition duration-300">
              Learn More
            </button>
            </Link>
          </div>

        </div>

      </div>

      {/* Service Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative h-[500px] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 text-black w-full h-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute inset-0 bg-black/55"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

                <Icon
                  size={72}
                  strokeWidth={1.5}
                  className="text-white mb-4"
                />

                <h3 className="text-2xl  font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-lg leading-8">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}
      </div>

      {/* Amenities */}

      <div className="max-w-7xl mx-auto py-20 px-6">

        <div className="flex items-center justify-center gap-6 mb-16">

          <div className="h-[2px] bg-[#C9A227] flex-1 max-w-xs"></div>

          <h2 className="text-4xl font-semibold text-[#C9A227]">
            Other Amenities
          </h2>

          <div className="h-[2px] bg-[#C9A227] flex-1 max-w-xs"></div>

        </div>

        <div className="grid md:grid-cols-3 gap-y-20">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  size={42}
                  className="text-[#C9A227] mb-6"
                />

                <h3 className="text-2xl text-black font-semibold font-serif">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}