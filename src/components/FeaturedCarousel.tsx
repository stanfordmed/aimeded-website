import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Video, FileText, Cpu, Zap, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Zap, title: "Lightning Demos: AI Tools for Medical Education", desc: "Carl Preiksaitis, MD · Mitra Alikhani, BSN, RN · Andrew Berg, MD · Sharon Chen, MD · Aydin Zahedivash, MD and more.", link: "/learn", tag: "Video", external: "https://youtu.be/R8B8k9NLtTc" },
  { icon: Video, title: "Framing the Landscape: What AI Means for Medicine", desc: "Jonathan Chen, MD, PhD explores what AI means for the future of medicine at the 2025 Symposium.", link: "/learn", tag: "Video", external: "https://youtu.be/JRc03UJR4TY" },
  { icon: FileText, title: "Using AI to Learn Medicine", desc: "A session for first-year Stanford medical students on using AI to enhance learning and clinical reasoning responsibly.", link: "/learn", tag: "Document", external: "https://med.stanford.edu/content/dam/sm/ai-in-meded/documents/Using%20AI%20to%20Learn%20Medicine_September%202025.pdf" },
  { icon: Wrench, title: "AI in Clinical Practice: A Curriculum", desc: "An evidence-informed, modular curriculum outline providing foundational knowledge, clinical integration skills, and ethical-legal frameworks.", link: "/learn", tag: "Document", external: "https://med.stanford.edu/content/dam/sm/ai-in-meded/documents/AI%20Curriculum--Module%20List.pdf" },
  { icon: Cpu, title: "Workshop: Basics of LLMs & Prompt Engineering", desc: "Shivam Vedak, MD, MBA and Dong-han Yao, MD lead a hands-on workshop on large language models and prompt engineering.", link: "/learn", tag: "Workshop", external: "https://youtu.be/xlMon7sXGig" },
];

const FeaturedCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-secondary/50" ref={ref}>
      <div className="container">
        <div className={`flex items-end justify-between mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-3">Featured</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Programs & Resources</h2>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {features.map((f, i) => (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="group h-full border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                          <f.icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/15 text-accent-foreground">{f.tag}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 font-serif">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
                      <Link to={f.link} className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-4 group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12" />
            <CarouselNext className="-right-4 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
