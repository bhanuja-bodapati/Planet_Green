"use client";

import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function HelpSection() {
return (
<section
className="w-full flex items-center"
style={{
backgroundColor: "#5B8C51",
backgroundImage: "url('/ContactUs/plants.png')",
backgroundSize: "cover",
backgroundPosition: "center",
}}
> <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-8 md:px-16 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">

    {/* Phone */}
    <div className="flex flex-col items-start sm:items-start">
      <div className="flex items-center gap-3">
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
        <p className="text-sm sm:text-base opacity-90">Have Question ?</p>
      </div>
      <p className="mt-2 font-medium text-base sm:text-lg">
        +91 9555 700 900
      </p>
    </div>

    {/* Email */}
    <div className="flex flex-col items-start sm:items-start">
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        <p className="text-sm sm:text-base opacity-90">Write Email</p>
      </div>
      <a
        href="mailto:marketing@planetgreen.co.in"
        className="mt-2 font-medium text-base sm:text-lg underline"
      >
        marketing@planetgreen.co.in
      </a>
    </div>

    {/* Location */}
    <div className="flex flex-col items-start sm:items-start">
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
        <p className="text-sm sm:text-base opacity-90">Visit Office</p>
      </div>
      <p className="mt-2 text-sm sm:text-base leading-5 sm:leading-6 opacity-90 max-w-[350px]">
        Planet Green, 2nd Floor, Regent Square Building, Q-City Road, Beside Heritage Fresh, Gowlidoddi, Hyderabad – 500075
      </p>
    </div>

  </div>
</section>
);
}
