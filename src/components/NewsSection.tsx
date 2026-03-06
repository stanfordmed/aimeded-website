import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const news = [
  { date: "Feb 28, 2026", category: "Research", title: "Stanford Team Develops Novel AI Framework for Early Cancer Detection", summary: "A new deep learning architecture achieves state-of-the-art performance in identifying early-stage tumors across multiple imaging modalities." },
  { date: "Feb 15, 2026", category: "Education", title: "New AI Curriculum Launches for Medical Residents", summary: "The initiative's latest program equips residents with hands-on skills in deploying and evaluating AI tools in clinical settings." },
  { date: "Jan 30, 2026", category: "Publication", title: "Nature Medicine: LLMs Show Promise in Clinical Decision Support", summary: "Our collaborative study demonstrates how large language models can augment physician decision-making while maintaining safety guardrails." },
  { date: "Jan 12, 2026", category: "Event", title: "Annual Medical AI Symposium Draws Record Attendance", summary: "Over 500 clinicians, researchers, and industry leaders gathered to discuss the latest advances in responsible medical AI." },
  { date: "Dec 20, 2025", category: "Partnership", title: "New Industry Partnership Expands Clinical AI Pilot Programs", summary: "A major collaboration brings cutting-edge AI diagnostic tools into community health centers across Northern California." },
  { date: "Dec 5, 2025", category: "Award", title: "Initiative Receives NIH Grant for AI Education Research", summary: "A $2.5M NIH grant will fund research into best practices for teaching AI competencies to medical students and faculty." },
];

const NewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-3">Stay Informed</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif">News & Publications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <Card
              key={i}
              className={`group border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 cursor-pointer hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-semibold mb-2 leading-snug font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
