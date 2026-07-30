import { useState, useRef } from "react";
import {
  CalendarDays,
  Users,
  BedDouble,
  ChevronDown,
} from "lucide-react";

import { toast } from "sonner";

export default function RoomBookingCard({ room }) {

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(room?.name || "");


  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !guests || !selectedRoom) {
      toast.error("Please complete all booking details.");
      return;
    }

    window.open(
      "https://staging-hms.atslng.com/booking-app",
      "_blank",
      "noopener,noreferrer"
    );

    // Reset form
    setCheckIn("");
    setCheckOut("");
    setGuests("");
    setSelectedRoom("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[420px] bg-black border border-[#C8A44D] rounded-[22px] p-8 shadow-xl"
    >
      {/* Heading */}
      <h2 className="text-white text-[30px] font-serif ">
        Book Your Stay
      </h2>

      {/* Check In */}
      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Check - In
        </label>

        <div
          onClick={() => checkInRef.current?.showPicker()}
          className="flex items-center border border-[#C8A44D] rounded-md h-10 px-4 cursor-pointer"
        >
          <CalendarDays
            size={18}
            className="text-[#C8A44D] mr-3 flex-shrink-0"
          />

          <span className="text-white text-sm">
            {checkIn || "Enter Date"}
          </span>

          <input
            ref={checkInRef}
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="absolute opacity-0 pointer-events-none"
          />
        </div>
      </div>

      {/* Check Out */}
      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Check - Out
        </label>

        <div
          onClick={() => checkOutRef.current?.showPicker()}
          className="flex items-center border border-[#C8A44D] rounded-md h-10 px-4 cursor-pointer"
        >
          <CalendarDays
            size={18}
            className="text-[#C8A44D] mr-3 flex-shrink-0"
          />

          <span className="text-white text-sm">
            {checkOut || "Enter Date"}
          </span>

          <input
            ref={checkOutRef}
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="absolute opacity-0 pointer-events-none"
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
            <option value="" className="text-black">
              Select Guests
            </option>

            <option value="1 Guest" className="text-black">
              1 Guest
            </option>

            <option value="2 Guests" className="text-black">
              2 Guests
            </option>

            <option value="3 Guests" className="text-black">
              3 Guests
            </option>

            <option value="4 Guests" className="text-black">
              4 Guests
            </option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C8A44D] pointer-events-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[#8A8A8A] text-sm mb-1">
          Room
        </label>

        <div className="relative h-10">
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
    text-white
    appearance-none
    outline-none
  "
          >
            <option value="" className="text-black">
              Select Room
            </option>

            <option value="Presidential Suite" className="text-black">
              Presidential Suite
            </option>

            <option value="Executive Room" className="text-black">
              Executive Room
            </option>

            <option value="Junior Room" className="text-black">
              Junior Room
            </option>

            <option value="Standard Room" className="text-black">
              Standard Room
            </option>

            <option value="Luxury Deluxe Room" className="text-black">
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
      <button type="submit"
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
    </form>
  );
}