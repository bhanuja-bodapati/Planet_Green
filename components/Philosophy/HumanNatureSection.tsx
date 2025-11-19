import React from "react";

export default function HumanNatureSection() {
  return (
    <section
      className="w-full bg-white flex flex-col md:flex-row items-start justify-center 
      px-4 sm:px-8 md:px-10 lg:px-16 pt-4 md:pt-6 lg:pt-8 pb-10 md:pb-14 lg:pb-16 gap-4 md:gap-6 lg:gap-8"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/Philosophy/Human1.png"
          alt="Nature Field"
          className="w-full max-w-[600px] h-auto object-cover rounded-[40px] rounded-tl-[120px]"
        />
      </div>

      {/* Right Text */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-start items-start text-left space-y-5 mt-0 pt-0 ml-0 pl-0 left-0">
  <h2 className="text-[#07260E] font-lufga text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
    Restoring the <br /> Human-Nature Balance
  </h2>

  <p className="text-[#07260E] font-['Work_Sans'] text-sm sm:text-base md:text-lg leading-relaxed">
    In recent decades, there's been a growing focus on the relationship between
    nature and humankind. This renewed interest stems from increasing health concerns
    and the alarming deterioration of our natural environment. Our obsession with
    progress and development over the last century has taken a toll on both human and
    environmental well-being.
  </p>

  <p className="text-[#07260E] font-['Work_Sans'] text-sm sm:text-base md:text-lg leading-relaxed">
    Farming, once a manual and inherently organic process, has been transformed by
    mechanisation and chemical interventions, distancing us from our natural roots.
    Planet Green steps in to bridge this gap, aiming to reconnect humanity with the
    nurturing power of the land.
  </p>

  <p className="text-[#07260E] font-['Work_Sans'] text-sm sm:text-base md:text-lg leading-relaxed">
    Our mission is to restore the true value of land in our lives. We're committed to
    enlightening people about sustainable land management, ensuring the delicate
    balance between life and nature is maintained. Most importantly, we educate the
    world about the profound impact on human life when our land faces turmoil.
  </p>
</div>


    </section>
  );
}
