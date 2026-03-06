import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fundamentalTheorem from "@/assets/fundamental-theorem.png";
import AntigravityCanvas from "@/components/AntigravityCanvas";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center bg-stanford-dark">
      <AntigravityCanvas />
      
      <div className="absolute inset-0 bg-gradient-to-r from-stanford-dark/95 via-stanford-dark/80 to-stanford-dark/60" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>STANFORD UNIVERSITY SCHOOL OF MEDICINE</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-serif opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            AI & Medical Education
          </h1>

          <div className="opacity-0 animate-slide-up -my-4" style={{ animationDelay: "0.7s" }}>
            <img src={fundamentalTheorem} alt="The Fundamental Theorem of Informatics: (Human + Computer) > Human" className="max-w-md w-full" style={{ filter: "invert(1)" }} />
          </div>

          <p className="text-lg text-white/80 max-w-lg leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.9s" }}>
            Empowering the next generation of clinicians, educators, and researchers 
            to harness AI for better patient outcomes.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "1.1s" }}>
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link to="/learn">Start Learning</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
