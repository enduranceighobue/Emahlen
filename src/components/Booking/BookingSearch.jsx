import { CalendarDays, BedDouble } from "lucide-react";
import { useState, useRef } from "react";

export default function BookingSearch() {



    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const checkInRef = useRef(null);
    const checkOutRef = useRef(null);

    const [room, setRoom] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Optional validation
        if (!checkIn || !checkOut || !room) {
            alert("Please select check-in, check-out and room.");
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
        setRoom("");
    };

    return (
        <div
            className="
      bg-black
      rounded-2xl
      border border-[#C8A44D]
      shadow-[0_0_30px_rgba(200,164,77,0.18)]
      p-5
      w-full
      max-w-2xl mb-5
      "
        >
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end"
            >
                {/* Check In */}
                <div className="border border-[#C8A44D] px-2 py-1 rounded-md">
                    <p className="text-gray-400 text-sm mb-2">
                        Check - In
                    </p>

                    <div
                        onClick={() => checkInRef.current?.showPicker()}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <CalendarDays
                            size={18}
                            className="text-[#C8A44D]"
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

                <div className="border border-[#C8A44D] px-2 py-1 rounded-md">
                    <p className="text-gray-400 text-sm mb-2">
                        Check - Out
                    </p>

                    <div
                        onClick={() => checkOutRef.current?.showPicker()}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <CalendarDays
                            size={18}
                            className="text-[#C8A44D]"
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

                {/* Rooms */}

                <div className="border border-[#C8A44D] px-2 py-1">
                    <p className="text-gray-400 text-sm mb-2">Rooms</p>

                    <div className="flex items-center gap-2">
                        <BedDouble
                            size={18}
                            className="text-[#C8A44D]"
                        />

                        <select
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            className="bg-transparent text-white outline-none text-sm w-full appearance-none"
                        >
                            <option value="" disabled className="text-black">
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
                    </div>
                </div>

                {/* Button */}

                <button
                    type="submit"
                    className=" mb-2
                    h-[37px]
                    rounded-xl
                    bg-[#C8A44D]
                    hover:bg-[#b18d3a]
                    transition
                    text-white
                    font-medium
                    py-2
                    px-2
                    text-[15px]
                "
                >
                    Check Availability
                </button>

            </form>
        </div>
    );
}