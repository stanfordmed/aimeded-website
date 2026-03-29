import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const news = [
  { date: "Jun 1, 2026", category: "Event", title: "Stanford's AI in Medical Education Symposium", summary: "A premier event as part of AI Week at Stanford, bringing together educators, clinicians, and researchers to explore the future of AI in medical education.", link: "" },
  { date: "May–Jun 2026", category: "Program", title: "Stanford AI in Healthcare Leadership and Strategy Program (HAILS)", summary: "Launch of the HAILS program, equipping healthcare leaders with the strategic knowledge and skills to drive AI adoption in their organizations.", link: "https://med.stanford.edu/cme/featured-programs/aiinhealthcare.html" },
  { date: "Mar 11, 2026", category: "Publication", title: "From iPatient to Ai-Patient: A Responsibility to Medical Education", summary: "An editorial published in BMJ Digital Health exploring how AI is reshaping the patient–physician relationship and the implications for medical training.", link: "https://bmjdigitalhealth.bmj.com/content/2/1/f000082" },
  { date: "Feb 20, 2026", category: "Workshop", title: "Prompt Engineering Workshop for Clerkship Students", summary: "Stanford's AI in Med Ed team delivers a hands-on prompt engineering workshop helping clerkship students effectively leverage AI tools in clinical rotations." },
  { date: "Dec 5, 2025", category: "Education", title: "Foundational AI Lecture for Stanford Clerkship Students", summary: "Stanford's AI in Med Ed team delivers a foundational lecture introducing clerkship students to the role of AI in clinical practice." },
  { date: "Sep 25, 2025", category: "Workshop", title: "AI Workshop for Preclinical Learning with Stanford Librarians", summary: "Stanford's AI in Med Ed team partnered with Stanford Librarians to deliver a workshop on how to use AI to enhance the preclinical learning process." },
];

const NewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-3">Stay Informed</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif">News & Publications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => {
            const inner = (
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-semibold mb-2 leading-snug font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.summary}</p>
                {item.link && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </CardContent>
            );
            const cardClass = `group border-border/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
            return item.link ? (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                <Card className={cardClass} style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}>
                  {inner}
                </Card>
              </a>
            ) : (
              <Card key={i} className={cardClass} style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}>
                {inner}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
