import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import LinksAndServices from "@/components/LinksAndServices";
import Informations from "@/components/Informations";
import Members from "@/components/Members";
import PhotoGallery from "@/components/PhotoGallery";
import RecentNews from "@/components/RecentNews";
import VisitorStats from "@/components/VisitorStats";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Informations />
      <Members />
      <Contact />
      <VisitorStats />
      <LinksAndServices />
      <RecentNews />
      <PhotoGallery />
    </div>
  );
}
