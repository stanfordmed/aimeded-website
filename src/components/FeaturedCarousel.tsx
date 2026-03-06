import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Cpu, HeartPulse, Microscope, Lightbulb, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Clinical AI Foundations",
    desc: "A comprehensive course covering machine learning fundamentals tailored for medical professionals.",
    link: "/learn",
    tag: "Course",
  },
  {
    icon: HeartPulse,
    title: "AI-Assisted Diagnostics",
    desc: "Explore how deep learning models are transforming radiology, pathology, and cardiology diagnostics.",
    link: "/learn",
    tag: "Program",
  },
  {
    icon: Cpu,
    title: "LLMs in Clinical Practice",
    desc: "Hands-on workshops for integrating large language models into clinical workflows responsibly.",
    link: "/learn",
    tag: "Workshop",
  },
  {
    icon: Microscope,
    title: "Research Symposium 2026",
    desc: "Annual gathering of leading researchers presenting breakthroughs in medical AI applications.",
    link: "/overview",
    tag: "Event",
  },
  {
    icon: Lightbulb,
    title: "Teaching with AI Toolkit",
    desc: "Curated resources and frameworks for educators to bring AI literacy into medical curricula.",
    link: "/learn",
    tag: "Toolkit",
  },
  {
    icon: Layers,
    title: "Industry Partnership Program",
    desc: "Collaborate with Stanford to pilot AI tools in real clinical environments and shape the future.",
    link: "/get-involved",
    tag: "Partnership",
  },
];

const FeaturedCarousel = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-3">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Programs & Resources
            </h2>
          </div>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {features.map((f, i) => (
              <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="group h-full border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/15 text-accent-foreground">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 font-serif">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
                    <Link
                      to={f.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-4 group-hover:gap-3 transition-all"
                    >
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
    </section>
  );
};

export default FeaturedCarousel;
