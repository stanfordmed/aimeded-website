import { useScrollReveal } from "@/hooks/useScrollReveal";

const MissionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className={`text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Our Mission
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold font-serif mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Bridging Artificial Intelligence and Clinical Medicine Through Education
          </h2>
          <p className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We are building a world-class ecosystem at Stanford where educators, learners, 
            clinicians, and industry leaders converge to advance the responsible integration 
            of AI into healthcare — improving outcomes for patients everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
