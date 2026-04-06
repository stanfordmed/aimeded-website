import { ArrowRight } from "lucide-react";

const photos: Record<string, string> = {
  "Reena Thomas": "https://profiles.stanford.edu/proxy/api/cap/profiles/59474/resources/profilephoto/350x350.1726600104106.jpg",
  "Jonathan H. Chen": "https://profiles.stanford.edu/proxy/api/cap/profiles/29899/resources/profilephoto/350x350.1509507449728.jpg",
  "Jonathan Chen": "https://profiles.stanford.edu/proxy/api/cap/profiles/29899/resources/profilephoto/350x350.1509507449728.jpg",
  "Joe Gayk": "https://profiles.stanford.edu/proxy/api/cap/profiles/224413/resources/profilephoto/350x350.1737142947840.jpg",
  "Rebecca Miller Kuhlmann": "https://profiles.stanford.edu/proxy/api/cap/profiles/137460/resources/profilephoto/350x350.1527270875381.jpg",
  "Tracy Rydel": "https://profiles.stanford.edu/proxy/api/cap/profiles/8258/resources/profilephoto/350x350.1620844036322.jpg",
  "Connie Wong": "https://profiles.stanford.edu/proxy/api/cap/profiles/194564/resources/profilephoto/350x350.1647372458039.jpg",
  "Aydin Zahedivash": "https://profiles.stanford.edu/proxy/api/cap/profiles/219053/resources/profilephoto/350x350.1640383651043.jpg",
  "Alaa Youssef": "https://profiles.stanford.edu/proxy/api/cap/profiles/252733/resources/profilephoto/350x350.1630962592044.jpg",
  "Vishnu Ravi": "https://profiles.stanford.edu/proxy/api/cap/profiles/310722/resources/profilephoto/350x350.1759335991946.jpg",
  "Gabriel Tse": "https://profiles.stanford.edu/proxy/api/cap/profiles/314648/resources/profilephoto/350x350.1730850791254.jpg",
  "Shivam Vedak": "https://med.stanford.edu/services/api/cap/profiles/photocache.316192.jpg",
  "Dong-han Yao": "https://med.stanford.edu/services/api/cap/profiles/photocache.34759.jpg",
};

const profileLinks: Record<string, string> = {
  "Reena Thomas": "https://profiles.stanford.edu/reena-thomas",
  "Jonathan H. Chen": "https://profiles.stanford.edu/jonc101",
  "Jonathan Chen": "https://profiles.stanford.edu/jonc101",
  "Joe Gayk": "https://profiles.stanford.edu/joe-gayk",
  "Rebecca Miller Kuhlmann": "https://profiles.stanford.edu/rebecca-miller",
  "Tracy Rydel": "https://profiles.stanford.edu/tracy-rydel",
  "Connie Wong": "https://profiles.stanford.edu/hong-nei-wong",
  "Aydin Zahedivash": "https://profiles.stanford.edu/aydin-zahedivash",
  "Alaa Youssef": "https://profiles.stanford.edu/alaa-youssef",
  "Vishnu Ravi": "https://profiles.stanford.edu/vishnu-ravi",
  "Gabriel Tse": "https://profiles.stanford.edu/gabe-tse",
  "Shivam Vedak": "https://profiles.stanford.edu/316192",
  "Dong-han Yao": "https://profiles.stanford.edu/34759",
};

const getKey = (name: string) => name.split(",")[0].trim();
const getPhotoUrl = (name: string) => photos[getKey(name)] || "";
const getProfileLink = (name: string) => profileLinks[getKey(name)] || "";
const getInitials = (name: string) => {
  const parts = getKey(name).split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const leadership = [
  { name: "Reena Thomas, MD, PhD", title: "Clinical Professor, Adult Neurology", role: "Senior Associate Dean for Medical Education" },
  { name: "Jonathan H. Chen, MD, PhD", title: "Associate Professor of Medicine (Biomedical Informatics) and of Biomedical Data Science", role: "AI Faculty Champion" },
  { name: "Joe Gayk, MS", title: "Executive Director, Medical Education Innovation", role: "Executive Director, Medical Education Innovation" },
];

const steeringCommittee = [
  { name: "Jonathan Chen, MD, PhD", title: "Associate Professor of Medicine (Biomedical Informatics) and of Biomedical Data Science", role: "AI Faculty Champion" },
  { name: "Rebecca Miller Kuhlmann, MD", title: "Clinical Associate Professor, Adult Neurology", role: "Assistant Dean for Preclerkship Education" },
  { name: "Tracy Rydel, MD", title: "Clinical Professor, Medicine — Primary Care and Population Health", role: "Assistant Dean for Clerkship Education" },
  { name: "Courtney Nelson, PA", title: "Clinical Assistant Professor, Medicine — Primary Care and Population Health", role: "Director of Preclerkship Education (MSPA)" },
  { name: "Teggin Summers, PhD, MA", title: "Assistant Dean and Director of Educational Technology", role: "Assistant Dean and Director of EdTech (TDS)" },
  { name: "Bahij Austin", title: "Assistant Dean for Curricular Affairs", role: "Assistant Dean for Curricular Affairs" },
  { name: "Mo Sow, MD", title: "Associate Director for Curricular Analytics and Management", role: "Associate Director for Curricular Analytics and Management" },
  { name: "Connie Wong", title: "Medical Education Librarian, Lane Medical Library", role: "Medical Librarian and Information Literacy Expert" },
  { name: "Joe Gayk, MS", title: "Executive Director, Medical Education Innovation", role: "Executive Director, Med Ed Innovation" },
  { name: "Shivam Vedak, MD", title: "Clinical Assistant Professor, Medicine", role: "Associate Director for Artificial Intelligence in Medical Education" },
  { name: "Dong-han Yao, MD", title: "Clinical Assistant Professor, Emergency Medicine", role: "Associate Director for Artificial Intelligence in Medical Education" },
];

const curriculumTeam = [
  { name: "Jonathan Chen, MD, PhD", title: "Associate Professor of Medicine (Biomedical Informatics) and of Biomedical Data Science" },
  { name: "Aydin Zahedivash, MD, MBA", title: "Fellow in Pediatrics / Clinical Informatics; AI Curriculum Development Team Lead" },
  { name: "Alaa Youssef, PhD", title: "Affiliate, Integrative Biomedical Imaging Informatics at Stanford (IBIIS)" },
  { name: "Vishnu Ravi, MD", title: "Clinical Assistant Professor, Medicine — Primary Care and Population Health; Technology Architect, Stanford Medicine Catalyst" },
  { name: "Gabriel Tse, MD, MS", title: "Clinical Assistant Professor, Pediatrics" },
];

type Person = { name: string; title?: string; role?: string };

const PersonCard = ({ person }: { person: Person }) => {
  const photo = getPhotoUrl(person.name);
  const link = getProfileLink(person.name);
  const displayRole = person.role || person.title;

  return (
    <div className="flex items-stretch rounded-lg overflow-hidden" style={{ backgroundColor: '#f0ede8' }}>
      <div className="flex-1 p-5 flex flex-col justify-center min-w-0">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 mb-1.5">
            <span className="text-base font-semibold font-serif text-foreground group-hover:text-primary transition-colors">{person.name}</span>
            <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          </a>
        ) : (
          <span className="text-base font-semibold font-serif text-foreground mb-1.5">{person.name}</span>
        )}
        {displayRole && (
          <p className="text-xs text-muted-foreground leading-relaxed">{displayRole}</p>
        )}
      </div>
      {photo ? (
        <img
          src={photo}
          alt={person.name}
          className="w-24 h-24 object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-muted text-muted-foreground text-lg font-semibold">
          {getInitials(person.name)}
        </div>
      )}
    </div>
  );
};

const Overview = () => (
  <main className="container py-24">
    <h1 className="text-4xl font-bold font-serif mb-6">Overview</h1>

    <div className="max-w-3xl space-y-6 text-base font-sans text-muted-foreground mb-20">
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

    <section className="mb-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">Leadership</p>
      <div className="grid md:grid-cols-2 gap-4">
        {leadership.map((m) => (
          <PersonCard key={m.name} person={m} />
        ))}
      </div>
    </section>

    <section className="mb-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">AI in Medical Education Steering Committee</p>
      <div className="grid md:grid-cols-2 gap-4">
        {steeringCommittee.map((m) => (
          <PersonCard key={m.name} person={m} />
        ))}
      </div>
    </section>

    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">AI Curriculum Development Team</p>
      <div className="grid md:grid-cols-2 gap-4">
        {curriculumTeam.map((m) => (
          <PersonCard key={m.name} person={m} />
        ))}
      </div>
    </section>
  </main>
);

export default Overview;
