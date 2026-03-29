import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <main className="bg-muted/30">
      <HeroSection />
      <div className="container py-12 space-y-10">
        <div className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden">
          <MissionSection />
        </div>
        <div className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden">
          <FeaturedCarousel />
        </div>
        <div className="rounded-2xl border border-border/60 bg-card shadow-sm overflow-hidden">
          <NewsSection />
        </div>
      </div>
    </main>
  );
};

export default Index;
