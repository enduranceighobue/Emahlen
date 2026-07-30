import { Link } from "react-router-dom";

export function FacilitiesHero() {
  return (
    <section className="relative  min-h-[300px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/facilitiesheroimg.png"
          alt="Emahlen Hotel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient + Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center mt-50 justify-center h-full px-6">
        <div className="max-w-3xl text-center text-white mb-25 ">
          <h2 className="text-3xl md:text-3xl lg:text-4xl playfair font-bold leading-tight ">
            Thoughtfully Designed for Your Comfort
          </h2>

          <p className="text-sm md:text-[17px] leading-8 text-gray-200 courgette">
           Every space is created to help you relax, recharge, and enjoy your stay—whether you’re here to unwind, work, or celebrate..
          </p>
        </div>
      </div>
    </section>
  );
}