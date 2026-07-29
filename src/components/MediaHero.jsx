import { Link } from "react-router-dom";

export function MediaHero() {
  return (
    <section className="relative h-[80px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/resturant.jpg"
          alt="Emahlen Hotel"
          className="w-full object-cover"
        />
      </div>

      {/* Gradient + Blur Overlay */}
      <div className="absolute " />

      {/* Content */}
     
    </section>
  );
}