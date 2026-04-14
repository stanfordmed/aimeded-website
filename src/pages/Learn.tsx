import { FileText, Video, ExternalLink, Handshake, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const learningModules = [
  {
    title: "Explore AI Diagnostic Performance",
    url: "https://stanfordmed.github.io/aimeded/ai-evaluation/",
    description:
      "An interactive tutorial on interpreting AI diagnostic performance metrics. Using a chest X-ray pneumonia detection example, learn how threshold adjustments affect sensitivity, specificity, and predictive values across different clinical scenarios.",
  },
  {
    title: "Data Security, Privacy & AI",
    url: "https://stanfordmed.github.io/aimeded/data-security/",
    description:
      "Learn how HIPAA and patient privacy apply in the age of AI. Covers encryption, access controls, audit logs, breach reporting, and practical guidance for using AI tools responsibly with protected health information.",
  },
];

const documents = [
  {
    title: "Using AI to Learn Medicine",
    url: "https://med.stanford.edu/content/dam/sm/ai-in-meded/documents/Using%20AI%20to%20Learn%20Medicine_September%202025.pdf",
    description:
      "This September 2025 session for first-year Stanford medical students explores how AI can enhance medical learning and clinical reasoning through responsible, ethical, and hands-on use of tools like SecureGPT, OpenEvidence, and NotebookLM.",
  },
  {
    title: "Artificial Intelligence in Clinical Practice: A Curriculum for Medical Students",
    url: "https://med.stanford.edu/content/dam/sm/ai-in-meded/documents/AI%20Curriculum--Module%20List.pdf",
    description:
      "An evidence-informed, modular curriculum outline designed for medical students, providing foundational knowledge, clinical integration skills, ethical-legal frameworks, and critical appraisal of AI in healthcare.",
  },
  {
    title: "Stanford MD/MSPA Generative AI Policy",
    url: "https://med.stanford.edu/md/mdhandbook/section-3-md-requirements-procedures/3-32--generative-artificial-intelligence--ai--policy.html",
    description:
      "Provides clear guidance for the thoughtful and responsible use of generative AI in medical education, supporting innovation in learning while ensuring professionalism, accuracy, and the protection of sensitive information.",
  },
];

const symposiumVideos = [
  {
    title: "Framing the Landscape: What AI Means for Medicine",
    speakers: "Jonathan Chen, MD, PhD — Stanford University",
    url: "https://youtu.be/JRc03UJR4TY",
  },
  {
    title: "Workshop: Basics of LLMs & Prompt Engineering",
    speakers: "Shivam Vedak, MD, MBA · Dong-han Yao, MD — Stanford University",
    url: "https://youtu.be/xlMon7sXGig",
  },
  {
    title: "Legal Liability in the Age of Medical AI",
    speakers: "Michelle Mello, JD, PhD — Stanford University",
    url: "https://youtu.be/p8YYIQgzscM",
  },
  {
    title: "Lightning Demos: AI Tools for Medical Education",
    speakers:
      "Carl Preiksaitis, MD · Mitra Alikhani, BSN, RN · Andrew Berg, MD · Ben Muller, MD · Sharon Chen, MD · Aydin Zahedivash, MD · Marcos Santiago-Rojas · Tom Caruso, MD",
    url: "https://youtu.be/R8B8k9NLtTc",
  },
  {
    title: "Panel: What Makes a Doctor a Doctor?",
    speakers:
      "Selin Everett · Carolyn Kaufman, MD · Bryant Lin, MD · Natalie Pageler, MD · Carla Pugh, MD, PhD · Malathi Srinivasan, MD · Ilana Yurkiewicz, MD",
    url: "https://youtu.be/20Q89ZAEVxU",
  },
  {
    title: "Closing Reflections",
    speakers: "Jonathan Chen, MD, PhD",
    url: "https://youtu.be/VlLvUf3qBuM",
  },
];

const partners = [
  {
    name: "Stanford University Human-Centered Artificial Intelligence (HAI)",
    url: "https://hai.stanford.edu/",
  },
  {
    name: "Stanford Center for Artificial Intelligence in Medicine and Imaging (AIMI)",
    url: "https://aimi.stanford.edu/",
  },
  {
    name: "Responsible AI for Safe and Equitable Health (RAISE)",
    url: "https://med.stanford.edu/raisehealth",
  },
];

const Learn = () => (
  <main className="container py-24 max-w-4xl">
    <h1 className="text-4xl font-bold font-serif mb-2">Resources</h1>
    <p className="text-lg text-muted-foreground mb-12">
      Courses, workshops, and resources for students, educators, and clinicians looking to build AI competencies.
    </p>

    {/* Documents */}
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold font-serif">Documents</h2>
      </div>
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.title} className="border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-5">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
              >
                {doc.title}
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{doc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Learning Modules */}
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold font-serif">Interactive Learning Modules</h2>
      </div>
      <div className="space-y-4">
        {learningModules.map((mod) => (
          <Card key={mod.title} className="border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-5">
              <a
                href={mod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
              >
                {mod.title}
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{mod.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Symposium Videos */}
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-2">
        <Video className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold font-serif">Videos and Recordings</h2>
      </div>
      <p className="text-muted-foreground mb-6 text-sm">AI in Medical Education Symposium — June 4, 2025</p>
      <div className="space-y-4">
        {symposiumVideos.map((video) => (
          <Card key={video.title} className="border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{video.speakers}</p>
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-0.5"
              >
                Watch <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Partner Organizations */}
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <Handshake className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold font-serif">Partner Organizations and Offices</h2>
      </div>
      <ul className="space-y-3">
        {partners.map((p) => (
          <li key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1.5"
            >
              {p.name}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default Learn;
