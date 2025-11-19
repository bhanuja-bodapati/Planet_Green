import React from "react";

export default function HarmonySection() {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 pt-2 pb-10">


      {/* Heading Section */}
      <div className="text-center max-w-3xl">
        <h1 className="font-lufga text-4xl md:text-5xl font-extrabold text-[#07260E] leading-tight">
          Harmonizing Life, <br />Home,
          and Nature
        </h1>

        {/* Full descriptive text */}
        <div className="mt-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Planet Green is pioneering a new dimension in natural farming and sustainable real estate in India. Through our commitment to Vedic farming practices and the creation of green eco-habitats, we enable urban Indian families to rekindle a deeper, more meaningful connection with nature.
          </p>
          <p>
            Our projects and products are meticulously designed to enrich lives and promote health, offering urban dwellers a chance to reconnect with the earth. Our flagship project, Farm Natura – a farm land living community, stands as one of Hyderabad's most revered developments, embodying our vision of sustainable, nature-integrated living. It is also India’s first natural farming estate located in Hyderabad.
          </p>
        </div>
      </div>

      {/* Decorative Arrow */}
      <div className="absolute hidden md:block right-[35%] top-[55%]">
        <img src="/AboutUs/arrow.png" alt="arrow" className="w-26 h-auto" />
      </div>

      {/* Images Row */}
      <div className="flex flex-wrap justify-center items-end gap-4 mt-20">

        {/* Left Image with overlay */}
        <div className="relative" style={{ marginBottom: "60px" }}>
          <img
            src="/AboutUs/Harmony4.png"
            alt="Involve"
            className="w-32 md:w-36 h-32 md:h-36 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/AboutUs/Icon.png"
              alt="Icon"
              className="w-6 h-6 mb-1"
            />
            <span className="text-white font-semibold text-xs md:text-sm">
              Involve
            </span>
          </div>
        </div>

        {/* Image 1 */}
        <div className="relative" style={{ marginBottom: "60px" }}>
          <img
            src="/AboutUs/Harmony1.png"
            alt="Nature"
            className="w-48 md:w-56 h-40 md:h-48 object-cover rounded-2xl"
          />
        </div>

        {/* Center Tall Image */}
        <img
          src="/AboutUs/Harmony2.png"
          alt="Nature"
          className="w-40 md:w-48 h-56 md:h-72 object-cover rounded-2xl"
        />

        {/* Image 3 */}
        <div className="relative" style={{ marginBottom: "60px" }}>
          <img
            src="/AboutUs/Harmony3.png"
            alt="Nature"
            className="w-48 md:w-56 h-28 md:h-32 object-cover rounded-2xl"
          />
        </div>

        {/* Right Image with overlay */}
        <div className="relative" style={{ marginBottom: "60px" }}>
          <img
            src="/AboutUs/Harmony4.png"
            alt="Impact"
            className="w-32 md:w-36 h-32 md:h-36 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/AboutUs/Icon.png"
              alt="Icon"
              className="w-6 h-6 mb-1"
            />
            <span className="text-white font-semibold text-xs md:text-sm">
              Impact
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
