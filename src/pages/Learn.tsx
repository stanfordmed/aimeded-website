import { Fragment, type ReactNode } from "react";
import { FileText, Video, ExternalLink, Handshake, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const learningModules: { title: string; url: string; authors: string; description: ReactNode }[] = [
  {
    title: "What is AI?",
    url: "https://docs.google.com/presentation/d/16s0MdSmhnXFyrTyETx7PLuTzLc87_Lqn10gSwrsMbH8/edit?usp=sharing",
    authors: "Gabriel Tse, MBChB, MS · Aydin Zahedivash, MD, MBA",
    description: (
      <>
        A slide deck introducing foundational AI concepts, free for anyone to use at their own institutions. Includes a{" "}
        <a
          href="https://docs.google.com/document/d/1dXUm-egnLK2KqnScwX1ty6j4dwww7nW3Qu6A6RTGIHY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary hover:underline"
        >
          matching activity handout
        </a>{" "}
        designed to teach machine learning and AI model subtypes to medical trainees.
      </>
    ),
  },
  {
    title: "Explore AI Diagnostic Performance",
    url: "https://stanfordmed.github.io/aimeded/ai-evaluation/",
    authors: "Vishnu Ravi, MD · Alaa Youssef, PhD · Aydin Zahedivash, MD, MBA · Gabriel Tse, MD · Jonathan Chen, MD, PhD",
    description:
      "An interactive tutorial on interpreting AI diagnostic performance metrics. Using a chest X-ray pneumonia detection example, learn how threshold adjustments affect sensitivity, specificity, and predictive values across different clinical scenarios.",
  },
  {
    title: "Data Security, Privacy & AI",
    url: "https://stanfordmed.github.io/aimeded/data-security/",
    authors: "Aydin Zahedivash, MD, MBA · Vishnu Ravi, MD · Jonathan Chen, MD, PhD",
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

type SymposiumVideo = {
  title: string;
  speakers?: string;
  url: string;
  related?: { title: string; url: string; authors: string; description: ReactNode };
};

const harrisonPresentation: SymposiumVideo["related"] = {
  title: "From Chatbot to Workflow: AI in Preclinical Medical Education",
  url: "https://docs.google.com/presentation/d/1uaOcQlXT8j_cbQI2sPRvklEHLUx5VkFeFH59H7eLosY/edit?usp=sharing",
  authors: "Harrison Konsker, Medical Student — Stanford University",
  description: (
    <>
      A presentation on how to use AI to enhance preclinical education. Medical students can also explore a{" "}
      <a
        href="https://harrisonkonsker.github.io/#toolkit"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-flex items-center gap-1.5"
      >
        guide with all the resources they can use to enhance their learning
        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
      </a>
      .
    </>
  ),
};

const SYMPOSIUM_2026_PLAYLIST = "PLB1ySg2JCa5A";
const playlistVideo = (id: string, index: number) =>
  `https://www.youtube.com/watch?v=${id}&list=${SYMPOSIUM_2026_PLAYLIST}&index=${index}`;

const symposiums: { name: string; date: string; playlistId?: string; videos: SymposiumVideo[] }[] = [
  {
    name: "AI in Medical Education Symposium 2026",
    date: "June 1, 2026",
    playlistId: SYMPOSIUM_2026_PLAYLIST,
    videos: [
      {
        title: "Welcome & Opening Remarks",
        speakers: "Reena Thomas, MD, PhD — Senior Associate Dean, Medical Education, Stanford University",
        url: playlistVideo("I78ERBrF22U", 1),
      },
      {
        title: "Keynote: Applied Intelligence",
        speakers: "Laurah Turner, PhD — University of Cincinnati",
        url: playlistVideo("SyH5oayZ7F0", 2),
      },
      {
        title: "Deskill? Reskill? NeverSkill? A Conversation on Medical Training in the Age of Autonomous AI",
        speakers:
          "Moderators: Poonam Hosamani, MD · Selin Everett · Panelists: Madeleine Smith, MS3 · Arman Koul · Travis Zack (OpenEvidence) · Laurah Turner, PhD",
        url: playlistVideo("ocwBaFULBuo", 3),
      },
      {
        title: "Stanford's AI Curriculum: Structure, Touchpoints & Open-Access Tools",
        speakers: "Aydin Zahedivash, MD, MBA · Vishnu Ravi, MD · Shivam Vedak, MD, MBA — Stanford University",
        url: playlistVideo("JbToGfa68DQ", 4),
      },
      {
        title: "Lightning Talks",
        speakers:
          "Nikhil Patel (Using AI to Build Custom Clinical Learning Tools) · Holly Caretta-Weyer, PhD, MHPE (AI for Admissions & Assessments) · Anuj Agarwal, MD (Producing Exam Questions with AI Tools)",
        url: playlistVideo("yA8nqKh1U5I", 5),
      },
      {
        title: "Debate: Should GME Trainees Be Using Ambient Scribes?",
        speakers: "Moderator: Bethel Mieso, MD · Pro: Tracy Rydel, MD · Con: Leonardo Aliaga, MD",
        url: playlistVideo("83w5dfRJ5To", 6),
      },
      {
        title: "Lightning Demos Part 2",
        speakers:
          "Harrison Konsker, MS1 (Preclinical Med Ed AI Use) · Valentin von Seggern, AMBOSS (AI & Knowledge Retrieval) · Vishnu Ravi, MD & Aydin Zahedivash, MD, MBA (Vibe-Coding: Rapid App Example for Learners & Educators)",
        url: playlistVideo("YgyYsdtjKDY", 7),
        related: harrisonPresentation,
      },
      {
        title: "Fireside Chat: What Do We Keep, Start, and Stop?",
        speakers: "Moderator: Roxana Daneshjou, MD, PhD · Paul Jhun, MD (Google) · Rusty Hofmann, MD (Stanford)",
        url: playlistVideo("NiT_BIpiyjg", 8),
      },
      {
        title: "Closing Remarks",
        speakers: "Jonathan Chen, MD, PhD · Laurah Turner, PhD · Reena Thomas, MD, PhD",
        url: playlistVideo("awRe8upELDo", 9),
      },
    ],
  },
  {
    name: "AI in Medical Education Symposium 2025",
    date: "June 4, 2025",
    videos: [
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
          "Carl Preiksaitis, MD · Mitra Alikhani, BSN, RN · Andrew Berg, MD · Ben Muller, MD · Sharon Chen, MD · Aydin Zahedivash, MD, MBA · Marcos Santiago-Rojas · Tom Caruso, MD",
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
    ],
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
      Courses, workshops, and resources for students, educators, and clinicians looking to build AI competencies. Don&apos;t see what you&apos;re looking for? Submit an idea for an educational module{" "}
      <a
        href="https://forms.gle/ydT26iSGrnvz61Uh7"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-primary hover:underline"
      >
        here
      </a>
      .
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
              <p className="text-sm text-muted-foreground mt-1">{mod.authors}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{mod.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Symposium Videos */}
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <Video className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-bold font-serif">Lectures and Talks</h2>
      </div>
      <div className="space-y-12">
        {symposiums.map((sym) => (
          <div key={sym.name}>
            <h3 className="text-xl font-semibold font-serif">{sym.name}</h3>
            <p className="text-muted-foreground mb-6 text-sm">{sym.date}</p>

            {sym.playlistId && (
              <div className="mb-6">
                <div className="relative w-full overflow-hidden rounded-lg border border-border/50 bg-muted aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${sym.playlistId}`}
                    title={`${sym.name} video playlist`}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <a
                  href={`https://www.youtube.com/playlist?list=${sym.playlistId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-primary hover:underline inline-flex items-center gap-1.5"
                >
                  View the full playlist on YouTube
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            )}

            <div className="space-y-4">
              {sym.videos.map((video) => (
                <Fragment key={video.title}>
                  <Card className="border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-5">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                      >
                        {video.title}
                        <ExternalLink className="h-4 w-4 shrink-0" />
                      </a>
                      {video.speakers && <p className="text-sm text-muted-foreground mt-1">{video.speakers}</p>}
                    </CardContent>
                  </Card>

                  {video.related && (
                    <Card className="border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="p-5">
                        <a
                          href={video.related.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                        >
                          {video.related.title}
                          <ExternalLink className="h-4 w-4 shrink-0" />
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">{video.related.authors}</p>
                        <p className="text-sm text-muted-foreground mt-2">{video.related.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
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
