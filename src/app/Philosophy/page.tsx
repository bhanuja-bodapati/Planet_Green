import PhilosophySection from "../../../components/Philosophy/PhilosophySection";
import { FarmingSection } from "../../../components/common/FarmingSection";

import HumanNatureSection from "../../../components/Philosophy/HumanNatureSection";
import SmarterSection from "../../../components/common/SmarterSection";
import FooterSection from "../../../components/common/FooterSection";



export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <PhilosophySection />
      <FarmingSection />
      <HumanNatureSection />
      <SmarterSection />
      <FooterSection />
      
    </main>
  );
}