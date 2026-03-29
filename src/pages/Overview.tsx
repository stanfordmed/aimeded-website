import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leadership = [
  { name: "Reena Thomas, MD PhD", role: "Senior Associate Dean for Medical Education" },
  { name: "Jonathan H. Chen, MD, PhD", role: "AI Faculty Champion" },
  { name: "Joe Gayk", role: "Executive Director, Medical Education Innovation" },
];

const steeringCommittee = [
  { name: "Jonathan Chen, MD, PhD", role: "AI Faculty Champion" },
  { name: "Rebecca Miller Kuhlmann, MD", role: "Assistant Dean for Preclerkship Education" },
  { name: "Tracy Rydel, MD", role: "Assistant Dean for Clerkship Education" },
  { name: "Courtney Nelson, PA", role: "Director of Preclerkship Education (MSPA)" },
  { name: "Teggin Summers, PhD, MA", role: "Assistant Dean and Director of EdTech (TDS)" },
  { name: "Bahij Austin", role: "Assistant Dean for Curricular Affairs" },
  { name: "Mo Sow, MD", role: "Associate Director for Curricular Analytics and Management" },
  { name: "Connie Wong", role: "Medical Librarian and Information Literacy Expert" },
  { name: "Joe Gayk, MS", role: "Executive Director, Med Ed Innovation" },
];

const curriculumTeam = [
  { name: "Jonathan Chen, MD, PhD" },
  { name: "Aydin Zahedivash, MD, MBA" },
  { name: "Alaa Youssef, PhD" },
  { name: "Vishnu Ravi, MD" },
  { name: "Gabriel Tse, MD, MS" },
];

const getInitials = (name: string) => {
  const parts = name.split(",")[0].trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const PersonCard = ({ name, role }: { name: string; role?: string }) => (
  <div className="flex flex-col items-center text-center space-y-3">
    <Avatar className="h-24 w-24">
      <AvatarImage src="" alt={name} />
      <AvatarFallback className="text-lg bg-muted text-muted-foreground">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
    <div>
      <span className="text-sm font-medium text-foreground block">{name}</span>
      {role && <span className="text-xs text-muted-foreground block mt-1">{role}</span>}
    </div>
  </div>
);

const Overview = () => (
  <main className="container py-24">
    <h1 className="text-4xl font-bold font-serif mb-6">Overview</h1>
    
    <div className="max-w-3xl space-y-6 text-base font-sans text-muted-foreground">
      <p>
        Stanford's AI in Medical Education initiative seeks to integrate foundational AI knowledge, clinical applications, and ethical reasoning into medical education. Through curriculum innovations, partnerships, and faculty development, we aim to prepare learners not just to use AI tools but to shape their evolution in service of patient care, research, and lifelong learning.
      </p>
      
      <p>
        In collaboration with educators, clinicians, learners, and technologists, we seek to equip current and future health professionals with foundational AI knowledge, ethical reasoning skills, and fluency in AI-supported clinical decision making, with content designed to:
      </p>
      
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>Build core AI literacy and vocabulary</li>
        <li>Enhance clinical reasoning with AI tools</li>
        <li>Explore AI applications in research and innovation</li>
        <li>Address the ethical, legal, and social implications of AI in healthcare</li>
      </ul>
      
      <p>
        We believe that AI can be a powerful partner in delivering compassionate and evidence-based patient care. This initiative is grounded in Stanford's broader commitment to innovation and excellence in medical education.
      </p>
    </div>

    <h2 className="text-3xl font-bold font-serif mt-16 mb-8">Our Leadership Team</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-16">
      {leadership.map((m) => (
        <PersonCard key={m.name} name={m.name} role={m.role} />
      ))}
    </div>

    <h2 className="text-2xl font-bold font-serif mb-8">AI in Medical Education Steering Committee</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
      {steeringCommittee.map((m) => (
        <PersonCard key={m.name} name={m.name} role={m.role} />
      ))}
    </div>

    <h2 className="text-2xl font-bold font-serif mb-8">AI Curriculum Development Team</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {curriculumTeam.map((m) => (
        <PersonCard key={m.name} name={m.name} />
      ))}
    </div>
  </main>
);

export default Overview;