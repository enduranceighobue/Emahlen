import { Link } from "react-router-dom";

export function ContactHero() {
  return (
    <section className="relative min-h-[250px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lobby.jpg"
          alt="Emahlen Hotel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient + Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mt-40 flex items-center justify-center h-full px-6">
        <div className="max-w-3xl text-center mb-24 text-white">
          <h2 className="text-4xl md:text-4xl lg:text-5xl playfair font-bold leading-tight ">
            Get in Touch with Us
          </h2>

          <p className="text-sm md:text-[16px] leading-8 text-gray-200 courgette">
            We’re here to assist you. Reach out for any questions, special requests or assistance with your booking.
          </p>
        </div>
      </div>
    </section>
  );
}