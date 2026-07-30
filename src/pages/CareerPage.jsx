import {
  Briefcase,
  Users,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Clock3,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export default function CareerPage() {
  const jobs = [
    {
      title: "Front Desk Officer",
      department: "Guest Services",
      type: "Full Time",
      location: "Awka, Anambra State",
    },
    {
      title: "Restaurant Supervisor",
      department: "Food & Beverage",
      type: "Full Time",
      location: "Awka, Anambra State",
    },
    {
      title: "Housekeeping Attendant",
      department: "Housekeeping",
      type: "Full Time",
      location: "Awka, Anambra State",
    },
    {
      title: "Digital Marketing Executive",
      department: "Marketing",
      type: "Full Time",
      location: "Awka, Anambra State",
    },
  ];

  const benefits = [
    {
      icon: <Users size={34} />,
      title: "Great Team Culture",
      text: "Work alongside passionate professionals committed to exceptional hospitality.",
    },
    {
      icon: <GraduationCap size={34} />,
      title: "Career Growth",
      text: "Continuous training, mentorship and opportunities for advancement.",
    },
    {
      icon: <HeartHandshake size={34} />,
      title: "Employee Benefits",
      text: "Competitive compensation, staff meals and rewarding incentives.",
    },
    {
      icon: <Briefcase size={34} />,
      title: "Professional Environment",
      text: "A luxury workplace designed to help you thrive and succeed.",
    },
  ];

  return (
    <main className="bg-[#FCFAF4] text-black">

      {/* HERO */}

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

        <img
          src="/learnmoreimg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl">

        

          <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight">
            Build Your Future
            <br />
            With Emahlen Hotel
          </h1>

          <p className="mt-8 text-white/90 text-lg leading-8">
            Join a passionate team dedicated to delivering unforgettable
            hospitality experiences while building a rewarding career.
          </p>

          <a
            href="#jobs"
            className="inline-flex items-center gap-3 mt-10 bg-[#C8A44D] hover:bg-[#b99538] transition px-6 py-3 rounded-xl text-white"
          >
            View Open Positions
            <ChevronRight />
          </a>

        </div>

      </section>

      {/* WHY JOIN */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#C8A44D]">
            Why Join Us
          </p>

          <h2 className="text-5xl font-serif mt-4">
            More Than Just A Job
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#C8A44D] mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* JOBS */}

      <section
        id="jobs"
        className="bg-black py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#C8A44D]">
              Open Positions
            </p>

            <h2 className="text-white text-5xl font-serif mt-4">
              Current Opportunities
            </h2>

          </div>

          <div className="space-y-6 mt-20">

            {jobs.map((job, index) => (

              <div
                key={index}
                className="bg-[#161616] border border-[#C8A44D]/30 rounded-2xl p-8 flex flex-col lg:flex-row justify-between lg:items-center gap-8 hover:border-[#C8A44D] transition"
              >

                <div>

                  <h3 className="text-3xl text-white font-serif">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-6 mt-5 text-gray-300">

                    <span className="flex items-center gap-2">
                      <Briefcase size={17} />
                      {job.department}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={17} />
                      {job.type}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={17} />
                      {job.location}
                    </span>

                  </div>

                </div>

                <button className="bg-[#C8A44D] hover:bg-[#b99538] transition px-8 py-4 rounded-xl text-white">
                  Apply Now
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-24 max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#C8A44D]">
            Hiring Process
          </p>

          <h2 className="text-5xl font-serif mt-4">
            Your Journey Starts Here
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {[
            "Submit Application",
            "HR Review",
            "Interview",
            "Welcome To Emahlen",
          ].map((step, index) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-[#C8A44D] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="font-serif text-2xl mt-8">
                {step}
              </h3>

              <CheckCircle2
                className="mx-auto mt-6 text-[#C8A44D]"
                size={28}
              />

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#C8A44D] py-24 text-center">

        <h2 className="text-5xl font-serif text-white">
          Don't See Your Role?
        </h2>

        <p className="text-white/90 mt-6 max-w-2xl mx-auto text-lg leading-8">
          We're always looking for exceptional talent. Send us your CV and
          we'll contact you when a suitable opportunity becomes available.
        </p>

        <button className="mt-10 bg-white text-[#C8A44D] px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Send Your CV
        </button>

      </section>

    </main>
  );
}