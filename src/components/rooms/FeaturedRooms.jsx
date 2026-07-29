import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";
import { rooms } from "../../data/room";

export default function FeaturedRooms() {
    return (
        <section className="bg-[#fcfaf4] py-20 py-20 rounded-tl-[380px]">

            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    {/* Gold line */}
                    <div className="flex justify-center mb-6">
                        <div className="w-200 h-[2px] bg-[#C8A44D]"></div>
                    </div>

                    <span className="manrope text-[#C8A44D] text-lg uppercase tracking-widest">
                        Featured Rooms
                    </span>

                    <h2 className="mt-3 cormorant text-4xl md:text-6xl text-black">
                        Discover our Finest Rooms
                    </h2>
                </div>

                <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            room={room}
                        />
                    ))}

                </div>

                <div className="mt-16 flex justify-center">

                    <Link
                        to="/rooms"
                        className="rounded-xl border border-[#C8A44D] px-8 py-4 text-[#C8A44D] transition hover:bg-[#C8A44D] hover:text-black"
                    >
                        View All Rooms
                    </Link>

                </div>

            </div>

        </section>
    );
}