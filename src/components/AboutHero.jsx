import { Link } from "react-router-dom";

export function AboutHero() {
  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/abouthero.png"
          alt="Emahlen Hotel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient + Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-4xl md:text-4xl lg:text-5xl playfair font-bold leading-tight ">
            Our Story Begins with Comfort
          </h2>

          <p className="text-sm md:text-[17px] leading-8 text-gray-200 courgette">
            From the moment you walk through our doors, you're more than a
            guest—you're home.
          </p>
        </div>
      </div>
    </section>
  );
}