import { Link } from "react-router-dom";
import { rooms } from "../data/room";

export default function RelatedRooms({ currentRoom }) {
  const related = rooms.filter(room => room.id !== currentRoom).slice(0, 3);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {related.map(room => (

        <Link
          key={room.id}
          to={`/rooms/${room.id}`}
          className="border border-[#C8A44D] rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300"
        >

          <img
            src={room.image}
            alt=""
            className="w-full h-72 p-4 rounded-lg object-cover"
          />

          <div className="p-6">

            <h3 className="text-3xl font-serif">

              {room.name}

            </h3>

            <p className="text-black mt-3">

              {room.description.substring(0,80)}...

            </p>

            <p className="text-[#C8A44D] mt-5">

              View Room →

            </p>

          </div>

        </Link>

      ))}

    </div>
  );
}