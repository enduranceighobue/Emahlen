import { rooms } from "../data/room";
import RoomCard from "../components/rooms/RoomCard";
import { RoomHero } from "../components/RoomHero";

export default function RoomsPage() {
  return (
    <>
    <RoomHero />
    <section className="bg-[#fcfaf4] min-h-screen py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="playfair text-center text-4xl font-semibold text-black mb-15 ">
          Where Comfort Meets Class: Explore Our Exquisite Rooms
        </h1>

       

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3  ">

          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>
        

      </div>

    </section>
    </>
  );
}