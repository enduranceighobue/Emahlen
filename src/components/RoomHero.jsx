import { Link } from "react-router-dom";

export function RoomHero() {
    return (
        <section className="relative min-h-[400px] overflow-hidden">
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
            <div className="relative z-10 mt-43 flex items-center justify-center h-full px-6">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl playfair font-bold leading-tight ">
                        Where Comfort Meets
                        Class
                    </h2>

                   
                </div>
            </div>
        </section>
    );
}