import React from "react";

export default function ClientSection() {
  const communities = [
    {
      id: 1,
      title: "Dates County",
      description: "A 300+ acre vast landscape that runs on its own.",
      image: "/Home/DatesCounty.png",
      logo: "/Home/DatesCounty logo.png"
    },
    {
      id: 2,
      title: "Farm Natura",
      description: "Farm Natura offers a community of like-minded.",
      image: "/Home/Farm natura.png",
      logo: "/Home/farm natura logo.png"
    },
    {
      id: 3,
      title: "Green Land Capital",
      description: "We are Green Land Capital. A nature-focused entity.",
      image: "/Home/Green land capital.png",
      logo: "/Home/green land capital logo.png"
    },
    {
      id: 4,
      title: "Veda Bharath",
      description: "Our traditionally grown rice is a true labor of love.",
      image: "/Home/Veda Bharath.png",
      logo: "/Home/veda bharath logo.png"
    }
  ];

  return (
    <section className="relative w-full bg-[#5B8C51] py-20 overflow-hidden">

      {/* Bottom Plants Pattern */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-50">
        <img
          src="/Home/plants.png"
          className="w-full h-[260px] object-cover object-top"
          alt=""
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Creating Communities for <br /> Nature to Live On
        </h2>
      </div>

      {/* Responsive Card Grid */}
      <div className="relative z-10 max-w-[1450px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10">

        {communities.map((community) => (
          <div key={community.id} className="relative w-full">

            {/* Card Background Shape */}
            <img
              src="/Home/assest.png"
              className="w-full h-full object-cover absolute inset-0"
              alt=""
            />

            {/* Card Content */}
            <div className="relative flex flex-col h-full p-4">

              {/* Top Image */}
              <div className="w-full h-[200px] rounded-[18px] overflow-hidden mb-4">
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[16px] font-bold text-gray-900 mb-1">
                {community.title}
              </h3>

              <div className="w-full h-px bg-gray-300 my-2"></div>

              <p className="text-gray-700 text-[13px] leading-relaxed mb-6">
                {community.description}
              </p>

              {/* Arrow Circle - More Down */}
              <img
                src="/Home/circle.png"
                alt=""
                className="absolute bottom-[-20px] right-[-6px] w-[45px] cursor-pointer transition-transform hover:scale-110"
              />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
