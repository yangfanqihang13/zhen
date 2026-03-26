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


const Index = () => {
  return (
    <div className="bg-ink min-h-screen relative">
      {/* Film grain overlay for premium texture */}
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
        quote="四百余年，风霜不改其骨；三千构件，榫卯自成乾坤"
        subtitle="Timeless Heritage"
        verticalText="匠心独运"
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
