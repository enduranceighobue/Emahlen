import { BedDouble } from "lucide-react";

export default function RoomSelect({
  rooms,
  value,
  onChange,
}) {
  return (
    <div
      className="
        border border-[#C8A44D]
        rounded-md
        px-4
        py-3
        h-[74px]
        flex
        flex-col
        justify-center
      "
    >
      <p className="text-sm text-gray-400 mb-2">
        Rooms
      </p>

      <div className="flex items-center gap-2">
        <BedDouble
          size={18}
          className="text-[#C8A44D]"
        />

        <select
          name="room"
          value={value}
          onChange={onChange}
          className="
            bg-transparent
            text-white
            outline-none
            w-full
          "
        >
          <option
            value=""
            className="text-black"
          >
            Select Room
          </option>

          {rooms.map((room) => (
            <option
              key={room.id}
              value={room.id}
              className="text-black"
            >
              {room.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}