import ContactUsSection from "../../../components/ContactUs/ContactUsSection";
import { ScrollingBanner } from "../../../components/common/ScrollingBanner";

import MapSection from "../../../components/ContactUs/MapSection";
import HelpSection from "../../../components/ContactUs/HelpSection";
import GetInTouchSection from "../../../components/ContactUs/GetInTouchSection";
import SmarterSection from "../../../components/common/SmarterSection";
import FooterSection from "../../../components/common/FooterSection";




export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <ContactUsSection />
      <ScrollingBanner />
      <MapSection />
      <HelpSection />
      <GetInTouchSection />
      <SmarterSection />
      <FooterSection />
      
      
    </main>
  );
}