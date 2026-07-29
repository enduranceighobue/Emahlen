import { useState } from "react";
import {
  CalendarDays,
  Users,
  BedDouble,
  ChevronDown,
} from "lucide-react";

export default function RoomBookingCard({ room }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(room?.name || "");

  return (
    <div className="w-full max-w-[420px] bg-black border border-[#C8A44D] rounded-[22px] p-8 shadow-xl">
      {/* Heading */}
      <h2 className="text-white text-[30px] font-serif ">
        Book Your Stay
      </h2>

      {/* Check In */}
      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Check - In
        </label>

        <div className="flex items-center border border-[#C8A44D] rounded-md h-10 px-4">
          <CalendarDays
            size={18}
            className="text-[#C8A44D] mr-3 flex-shrink-0"
          />
 
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-transparent w-full outline-none text-white
            [color-scheme:dark]"
          />
        </div>
      </div>

      {/* Check Out */}
      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Check - Out
        </label>

        <div className="flex items-center border border-[#C8A44D] rounded-md h-10 px-4">
          <CalendarDays
            size={18}
            className="text-[#C8A44D] mr-3 flex-shrink-0"
          />

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-transparent w-full outline-none text-white
            [color-scheme:dark]"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Guests
        </label>

        <div className="relative h-10">
          <Users
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A44D]"
          />

          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="
              w-full
              h-10
              bg-transparent
              border
              border-[#C8A44D]
              rounded-md
              pl-12
              pr-12
              text-white
              appearance-none
              outline-none
            "
          >
            <option value="" className="text-black h-10">
              Select number of guests
            </option>

            <option className="text-black">1 Guest</option>
            <option className="text-black">2 Guests</option>
            <option className="text-black">3 Guests</option>
            <option className="text-black">4 Guests</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C8A44D] pointer-events-none"
          />
        </div>
      </div>

      {/* Room */}
      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Rooms
        </label>

        <div className="relative">
          <BedDouble
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A44D]"
          />

          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="
              w-full
              h-10
              bg-transparent
              border
              border-[#C8A44D]
              rounded-md
              pl-12
              pr-12
              text-black
              appearance-none
              outline-none
            "
          >
            <option className="text-black">
              Presidential Suite
            </option>

            <option className="text-black">
              Executive Room
            </option>

            <option className="text-black">
              Junior Room
            </option>

            <option className="text-black">
              Standard Room
            </option>

            <option className="text-black">
              Luxury Deluxe Room
            </option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C8A44D] pointer-events-none"
          />
        </div>
      </div>

      {/* Button */}
      <button
        className="
          w-full
          h-10
          rounded-xl
          bg-[#C8A44D]
          text-white
          font-semibold
          text-lg
          hover:bg-[#b99538]
          transition
        "
      >
        Book Now
      </button>
    </div>
  );
}