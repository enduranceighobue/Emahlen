import { Link } from "react-router-dom";

export function RoomHero() {
    return (
        <section className="relative min-h-[300px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/room2.jpg"
                    alt="Emahlen Hotel"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Gradient + Blur Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 mt-35 flex items-center justify-center h-full px-6">
                
            </div>
        </section>
    );
}