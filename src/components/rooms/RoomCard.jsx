import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-[#C8A44D] bg-[#fcfaf4] transition duration-300 hover:-translate-y-2">

            <div className="overflow-hidden rounded-t-2xl">
                <img
                    src={room.image}
                    alt={room.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6">

                <h3 className="cormorant text-4xl text-[#C8A44D]">
                    {room.name}
                </h3>

                <p className="mt-4 text-black manrope leading-8">
                    {room.description}
                </p>
                <Link
                    to={`/rooms/${room.id}`}
                    className="mt-8 inline-flex items-center gap-2 text-[#C8A44D] font-semibold hover:gap-4 transition-all"
                >
                    View Room
                    <ArrowRight size={18} />
                </Link>

            </div>
        </div>
    );
}