import CommunitiesSection from "../../../components/Communities/CommunitiesSection";
import { ScrollingBanner } from "../../../components/common/ScrollingBanner";

import CultivatingSection from "../../../components/Communities/CultivatingSection";
import SmarterSection from "../../../components/common/SmarterSection";
import FooterSection from "../../../components/common/FooterSection";


export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <CommunitiesSection />
      <ScrollingBanner />
      <CultivatingSection />
      <SmarterSection />
      <FooterSection />

      
    </main>
  );
}