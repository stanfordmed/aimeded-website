import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <main className="bg-muted/30">
      <HeroSection />
      <div className="container py-12 space-y-10">
        <div className="rounded-lg shadow-sm overflow-hidden" style={{ backgroundColor: '#175E54' }}>
          <MissionSection />
        </div>
        <div className="rounded-lg shadow-sm overflow-hidden" style={{ backgroundColor: '#4298B5' }}>
          <FeaturedCarousel />
        </div>
        <div className="rounded-lg shadow-sm overflow-hidden" style={{ backgroundColor: '#8F993E' }}>
          <NewsSection />
        </div>
      </div>
    </main>
  );
};

export default Index;
