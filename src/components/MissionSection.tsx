import { GraduationCap, Stethoscope, Compass, BookOpen, Building2 } from "lucide-react";

const audiences = [
  { icon: BookOpen, label: "Teachers", desc: "Resources to teach AI-enhanced clinical education" },
  { icon: GraduationCap, label: "Students", desc: "Learn to leverage AI in medical practice" },
  { icon: Compass, label: "Explorers", desc: "Discover the state of the art in medical AI" },
  { icon: Stethoscope, label: "Clinicians", desc: "Tools for day-to-day clinical practice" },
  { icon: Building2, label: "Sponsors", desc: "Partner with us to shape the future" },
];

const MissionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Bridging Artificial Intelligence and Clinical Medicine Through Education
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are building a world-class ecosystem at Stanford where educators, learners, 
            clinicians, and industry leaders converge to advance the responsible integration 
            of AI into healthcare — improving outcomes for patients everywhere.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{a.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
