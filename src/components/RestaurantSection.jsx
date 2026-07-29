import { Link } from "react-router-dom";

export default function RestaurantSection() {
  return (
    <section className="bg-[#fcfaf4] py-13">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="flex justify-center items-center gap-4 mb-5">

          <h3 className="text-[#C8A44D] text-4xl italic courgette">
            Restaurant
          </h3>

          <div className="w-20 h-[2px] bg-[#C8A44D] mt-9"></div>

        </div>

        <h2 className="text-black text-5xl md:text-6xl playfair font-semibold">
          Exquisite Dining
        </h2>

        <p className="mt-8 max-w-5xl mx-auto text-black text-lg leading-7 manrope">
          Our all-day dining restaurant offers a thoughtfully curated fusion
          menu, bringing together international flavors and traditional
          Nigerian delicacies. Guests can enjoy a diverse wine collection
          alongside an extensive drink list, featuring expertly prepared
          cocktails, fine wines, and premium spirits.
        </p>

      </div>

      {/* Restaurant Image */}

      <div className="mt-20 relative">

        <img
          src="/resturant.jpg"
          alt="Restaurant"
          className="w-full h-[620px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Button */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 px-4 w-full flex justify-center">
  <Link
    to="/contact"
    className="inline-flex items-center justify-center
               border border-[#C8A44D]
               bg-[#8d6b2d]/40 backdrop-blur-sm
               text-white
               px-6 sm:px-8 md:px-12 lg:px-20
               py-3 md:py-4
               rounded-xl
               text-sm sm:text-base md:text-lg
               font-semibold
               whitespace-nowrap
               transition duration-300
               hover:bg-[#C8A44D]
               hover:text-black"
  >
    Visit Our Restaurant
  </Link>
</div>

      </div>

    </section>
  );
}