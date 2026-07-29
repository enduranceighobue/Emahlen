import { useParams } from "react-router-dom";
import { CalendarDays, BedDouble, Wifi, Tv, Snowflake, Refrigerator } from "lucide-react";
import { MediaHero } from "../components/MediaHero";
import RelatedRooms from "../components/RelatedRooms";
import { rooms }  from "../data/room";
import RoomBookingCard from "../components/Booking/RoomBookingCard";

export default function SingleRoomPage() {
  const { id } = useParams();

  const room = rooms.find((item) => item.id === Number(id));

  if (!room) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Room not found
      </div>
    );
  }

  return (
    <>
    <MediaHero />
    <div className="bg-white text-white pt-28 pb-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Breadcrumb */}

        <div className="text-sm text-black mb-6">
          Home
          <span className="mx-2 text-[#C8A44D]">›</span>

          Rooms

          <span className="mx-2 text-[#C8A44D]">›</span>

          <span className="text-black">{room.name}</span>
        </div>


        {/* Gallery + Booking */}

        <div className="grid grid-cols-1 lg:grid-cols-[68%_32%] gap-8 items-start">
          {/* LEFT */}

          {/* LEFT */}
<div className="w-full">

  {/* Main Image */}
  <div className="overflow-hidden rounded-xl">
    <img
      src={room.image}
      alt={room.name}
      className="w-full h-[520px] object-cover"
    />
  </div>

  {/* Thumbnail Gallery */}
  <div className="grid grid-cols-4 gap-4 mt-5">

    {room.images.map((img, index) => (

      <div
        key={index}
        className="overflow-hidden rounded-lg"
      >

        <img
          src={img}
          alt=""
          className="w-full h-28 object-cover cursor-pointer hover:scale-105 transition duration-300"
        />

      </div>

    ))}

  </div>

</div>

          {/* RIGHT */}

         <div className="">
            <RoomBookingCard room={room} />
</div>
        </div>


        {/* Title */}

        <div className="mt-10">

<div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-3">
<h1 className="text-4xl lg:text-5xl font-serif">
              {room.name}

            </h1>

<h2 className="text-4xl lg:text-5xl font-serif text-[#C8A44D]">
              ₦{room.price.toLocaleString()}

              <span className="text-3xl">

                /night

              </span>

            </h2>

          </div>

          <p className="text-black mt-6 leading-8 max-w-5xl">

            {room.description}

          </p>

        </div>


        {/* Info */}

<div className="flex flex-wrap gap-10 mt-8 py-8 border-y border-[#C8A44D]/70">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-[#C8A44D]" />
            <span className="text-black">2 Guests</span>
          </div>

          <div className="flex items-center gap-3">
            <BedDouble className="text-[#C8A44D]" />
            <span className="text-black" >King Size Bed</span>
          </div>

          <div className="flex items-center gap-3">
            <Tv className="text-[#C8A44D]" />
            <span className="text-black" >600 Sq</span>
          </div>

        </div>


        {/* Amenities */}

        <div className="py-14 border-b  border-[#C8A44D] ">

          <h2 className="text-3xl font-serif mb-10 text-black">

            Room Amenities

          </h2>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 max-w-4xl">
            <div className="flex flex-col items-center">
              <Wifi size={34} className="text-[#C8A44D]" />
              <p className="mt-3 text-black">Free WIFI</p>
            </div>

            <div className="flex flex-col items-center">
              <Snowflake size={34} className="text-[#C8A44D]" />
              <p className="mt-3 text-black">Air Conditioning</p>
            </div>

            <div className="flex flex-col items-center">
              <Tv size={34} className="text-[#C8A44D]" />
              <p className="mt-3 text-black">Smart TV</p>
            </div>

            <div className="flex flex-col items-center">
              <Refrigerator size={34} className="text-[#C8A44D]" />
              <p className="mt-3 text-black">Mini Bar</p>
            </div>

          </div>

        </div>


        {/* Related */}

        <div className="mt-16">

          <h2 className="text-3xl mb-10 text-[#C8A44D]">

            You may also like

          </h2>

          <RelatedRooms currentRoom={room.id} />

        </div>

      </div>

    </div>
    </>
  );
}