import { Link } from "react-router-dom";

const lounges = [
    {
        title: "Bar",
        description:
            "Explore our perfectly mixed drinks, crafted by expert bartenders and served fresh at our bar",
        image: "/bas1.jpg",
        link: "/bar",
    },
    {
        title: "Pool Bar",
        description:
            "From icy refreshers to smooth cocktails, our pool bar has the perfect sip for every swim break",
        image: "/barpool.jpg",
        link: "/pool-bar",
    },
    {
        title: "Vip Lounge",
        description:
            "Enjoy a quieter, more refined experience with premium drinks in our VIP lounge",
        image: "/vip.jpg",
        link: "/vip-lounge",
    },
];

export default function BarLoungeSection() {
    return (
        <section className="bg-[#fcfaf4] py-13">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-10">

                    <h2 className="courgette italic text-[#C8A44D] text-3xl md:text-4xl">
                        Explore our Bar & Lounges
                    </h2>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {lounges.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="group relative overflow-hidden rounded-2xl h-[560px]"
                        >
                            {/* Background Image */}

                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}

                            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition"></div>

                            {/* Content */}

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">

                                <h3 className="text-white text-3xl font-semibold mb-8">
                                    {item.title}
                                </h3>

                                <p className="text-white text-lg leading-6 manrope max-w-sm">
                                    {item.description}
                                </p>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>

        </section>
    );
}