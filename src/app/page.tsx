
import HeroSection from "../../components/Home/HeroSection";
import { ScrollingBanner } from "../../components/common/ScrollingBanner";

import EcoSection from "../../components/Home/EcoSection";
import ClientSection from "../../components/Home/ClientSection";
import OrganicSection from "../../components/Home/OrganicSection";
import { AgricultureSection } from "../../components/Home/AgricultureSection";
import NatureSection from "../../components/Home/NatureSection";
import SustainableSection from "../../components/Home/SustainableSection";
import VisualSection from "../../components/Home/VisualSection";
import SmarterSection from "../../components/common/SmarterSection";
import FooterSection from "../../components/common/FooterSection";

export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroSection />
      <ScrollingBanner />
      <EcoSection />
      <ClientSection />
      <OrganicSection />
      <AgricultureSection />
      <NatureSection />
      <SustainableSection />
      <VisualSection />
      <SmarterSection />
      <FooterSection />
    </main>
  );
}