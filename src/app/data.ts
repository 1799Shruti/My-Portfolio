// Central place to edit portfolio content.

export interface Skill {
  name: string;
  category: string;
  description: string;
}

export interface Job {
  company: string;
  period: string;
  role: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  category: ProjectCategory;
  summary: string;
  focusAreas?: string[];
}

export type ProjectCategory =
  | "Healthcare"
  | "SaaS & Enterprise"
  | "AI & Automation"
  | "HR & Workforce"
  | "Education";

export interface Education {
  period: string;
  qualification: string;
  institution: string;
  cgpa: string;
}

export const CONTACT = {
  name: "Shruti Bhandari",
  email: "bhandarishruti1791999@gmail.com",
  phone: "+91-9175710950",
  phoneHref: "tel:+919175710950",
  linkedin: "https://www.linkedin.com/in/shruti-bhandari-093375202/",
} as const;

export const PROFILE = {
  introduction:
    "I'm a software professional specializing in building scalable web applications, reusable frontend components, and API-driven business workflows. I enjoy solving engineering challenges, improving application quality, and delivering reliable user experiences.",
  technologies: ["Angular", "TypeScript", "JavaScript", "Node.js"],
} as const;

export const SKILLS: Skill[] = [
  {
    name: "Angular",
    category: "Frontend",
    description:
      "Component architecture, RxJS, NgRx state management, and reactive forms for enterprise-grade SPAs.",
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "Scalable server-side applications, REST APIs, authentication, and asynchronous event-driven design.",
  },
  {
    name: "Express",
    category: "Backend",
    description:
      "Robust API layers with middleware pipelines, routing, error handling, and security best practices.",
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "Schema design, aggregation pipelines, indexing strategies, and performance tuning with Mongoose.",
  },
  {
    name: "JavaScript",
    category: "Language",
    description:
      "Deep fluency in ES6+, closures, async patterns, and the modern browser and Node runtimes.",
  },
  {
    name: "TypeScript",
    category: "Language",
    description:
      "Type-safe codebases end to end — strict typing, generics, and shared contracts between client and server.",
  },
  {
    name: "Core Java",
    category: "Language",
    description:
      "OOP fundamentals, collections, multithreading, and JVM internals for robust backend systems.",
  },
];

export const EXPERIENCE: Job[] = [
  {
    company: "Centralogic",
    period: "January 2024 – July 2026",
    role: "Technical Lead",
    responsibilities: [
      "Led technical planning, task allocation, code reviews, and delivery coordination across multiple projects.",
      "Contributed to frontend development using Angular, TypeScript, JavaScript, HTML, and SCSS.",
      "Collaborated on Node.js API integrations, backend workflows, and application performance improvements.",
      "Coordinated with QA, project stakeholders, and development teams to ensure quality and timely delivery.",
      "Supported technical decision-making, troubleshooting, and maintainable coding practices.",
      "Contributed to application modernization and explored AI/ML proof-of-concept solutions.",
    ],
  },
  {
    company: "Centralogic",
    period: "August 2021 – January 2024",
    role: "Software Engineer",
    responsibilities: [
      "Developed and maintained web application features using Angular, TypeScript, JavaScript, HTML, and CSS.",
      "Integrated REST APIs and implemented reusable components, form validation, routing, and error handling.",
      "Collaborated with backend developers to integrate services and resolve application issues.",
      "Participated in debugging, code reviews, testing, and performance optimization.",
      "Worked with cross-functional teams to deliver features based on business requirements.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Digital Certification & Document Processing Platform",
    category: "SaaS & Enterprise",
    summary:
      "A digital certification platform supporting document submission, AI-assisted data extraction, certificate workflows, invoicing, and wallet management.",
    focusAreas: [
      "PAN, Aadhaar, banking, GST, and incorporation document workflows",
      "Digital Signature Certificate and onboarding workflows",
      "Invoice generation, GST calculations, CRM, and wallet management",
    ],
  },
  {
    name: "Healthcare Prior Authorization & Insurance Integration",
    category: "Healthcare",
    summary:
      "A healthcare integration solution connecting application services with external insurance and authorization systems.",
    focusAreas: [
      "UnitedHealthcare and Optum integrations",
      "Authorization status, case details, provider summaries, and service references",
      "Benefit checks, third-party response handling, and integration validation",
    ],
  },
  {
    name: "Medical Transcription & Document Processing System",
    category: "Healthcare",
    summary:
      "A medical transcription solution supporting established workflows, document processing, structured data retrieval, search, and reporting.",
    focusAreas: [
      "Transcription workflow integration and document handling",
      "Structured data storage, retrieval, search, and reporting",
      "Legacy workflow investigation and modernization",
    ],
  },
  {
    name: "Audio Compliance Monitoring & Reporting POC",
    category: "AI & Automation",
    summary:
      "An AI-oriented proof of concept exploring audio analysis and compliance monitoring workflows.",
    focusAreas: [
      "Technical feasibility evaluation and proof-of-concept activities",
      "Audio analysis workflow exploration and results evaluation",
      "Stakeholder feedback and demonstrations",
    ],
  },
  {
    name: "Employee Assessment & Performance Evaluation System",
    category: "HR & Workforce",
    summary:
      "An enterprise system for structured employee assessments and evaluation workflows.",
  },
  {
    name: "Student Career Counselling & Guidance Platform",
    category: "Education",
    summary:
      "A web-based platform connecting students with professional counsellors for career guidance and informed education decisions.",
  },
  {
    name: "Tenant Assistance & Service Management Platform",
    category: "SaaS & Enterprise",
    summary:
      "A service-oriented application supporting tenant assistance, service requests, and operational information management.",
  },
];

export const EDUCATION: Education[] = [
  {
    period: "2020–2022",
    qualification: "Master of Computer Applications (MCA)",
    institution: "Savitribai Phule Pune University (SPPU)",
    cgpa: "8.9/10",
  },
  {
    period: "2018–2020",
    qualification: "Bachelor of Science in Computer Science (BSc)",
    institution: "Savitribai Phule Pune University (SPPU)",
    cgpa: "9.0/10",
  },
];

