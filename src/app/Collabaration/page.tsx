import CollabarationSection from "../../../components/Collabartion/CollabarationSection";
import { FarmingSection } from "../../../components/common/FarmingSection";

import ShilpaReddySection from "../../../components/Collabartion/ShilpaReddySection";
import YoutubeSection from "../../../components/Collabartion/YoutubeSection";
import GallerySection from "../../../components/Collabartion/GallerySection";
import SmarterSection from "../../../components/common/SmarterSection";
import FooterSection from "../../../components/common/FooterSection";



export default function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <CollabarationSection />
      <FarmingSection />
      <ShilpaReddySection />
      <YoutubeSection />
      <GallerySection />
      <SmarterSection />
      <FooterSection />
    

      
    </main>
  );
}