import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import ArchitectureSection from "@/components/ArchitectureSection";
import CultureSection from "@/components/CultureSection";
import CinematicInterlude from "@/components/CinematicInterlude";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import interludeLandscape from "@/assets/interlude-landscape.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-ink min-h-screen relative">
      <div className="grain-overlay" />
      <MusicPlayer />
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>

      <SectionDivider symbol="史" />

      <div id="history">
        <HistorySection />
      </div>

      <CinematicInterlude
        image={interludeLandscape}
        quote={t.interlude.quote}
        subtitle={t.interlude.subtitle}
        verticalText={t.interlude.verticalText}
      />

      <SectionDivider symbol="构" />

      <div id="architecture">
        <ArchitectureSection />
      </div>

      <SectionDivider symbol="道" />

      <div id="culture">
        <CultureSection />
      </div>

      <SectionDivider symbol="◇" />

      <Footer />
    </div>
  );
};

export default Index;
