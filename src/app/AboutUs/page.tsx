import SustainableSection from "../../../components/AboutUs/SustainableSection";
import { ScrollingBanner } from "../../../components/common/ScrollingBanner";

import HarmonySection from "../../../components/AboutUs/HarmonySection";
import VisionariesSection from "../../../components/AboutUs/VisionariesSection";
import AwardsSection from "../../../components/AboutUs/AwardsSection";
import VisionMissionSection from "../../../components/AboutUs/VisionMissionSection";
import SmarterSection from "../../../components/common/SmarterSection";
import FooterSection from "../../../components/common/FooterSection";


export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <SustainableSection />
      <ScrollingBanner />
      <HarmonySection />
      <VisionariesSection />
      <AwardsSection />
      <VisionMissionSection />
      <SmarterSection />
      <FooterSection />

    </main>
  );
}