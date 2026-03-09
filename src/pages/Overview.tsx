import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  "Reena Thomas, MD PhD",
  "Jonathan H. Chen, MD, PhD",
  "Joe Gayk",
  "Rebecca Miller Kuhlmann, MD",
  "Tracy Rydel, MD",
  "Courtney Nelson, PA",
  "Teggin Summers, PhD, MA",
  "Bahij Austin",
  "Mo Sow, MD",
  "Connie Wong",
  "Aydin Zahedivash, MD, MBA",
  "Alaa Youssef, PhD",
  "Vishnu Ravi, MD",
  "Gabriel Tse, MD, MS",
];

const getInitials = (name: string) => {
  const parts = name.split(",")[0].trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

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

    <h2 className="text-3xl font-bold font-serif mt-16 mb-8">Team</h2>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {teamMembers.map((member) => (
        <div key={member} className="flex flex-col items-center text-center space-y-3">
          <Avatar className="h-24 w-24">
            <AvatarImage src="" alt={member} />
            <AvatarFallback className="text-lg bg-muted text-muted-foreground">
              {getInitials(member)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">{member}</span>
        </div>
      ))}
    </div>
  </main>
);

export default Overview;