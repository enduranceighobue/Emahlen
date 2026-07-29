import media from "../data/media";

export default function MediaGallery() {
  return (
    <section className="bg-white py-24">
        {/* <div className="max-w-7xl mx-auto px-6 lg:px-8"> */}
        {/* Small Heading */}

        <div className="flex justify-center items-center gap-4 mb-5">
          <span className="text-[#C8A44D] courgette text-3xl italic">
            Media
          </span>

          <div className="w-20 h-[2px] bg-[#C8A44D] mt-9" />
        </div>

        {/* Main Heading */}

        <h2 className="text-center text-black playfair text-3xl md:text-6xl font-bold">
          A Visual Story of Comfort
        </h2>

        <p className="max-w-4xl mx-auto mt-6 text-center text-black text-lg leading-6">
          Explore a curated collection of images and videos capturing the
          comfort, elegance, and experiences that define a stay at Emahlen Hotels
          and Suites.
        </p>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {media.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}