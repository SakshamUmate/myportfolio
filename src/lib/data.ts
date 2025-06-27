import { BarChart3, Bot, BrainCircuit, Calculator, Code, Database, GitBranch, Github, Layers, Linkedin, Shell, Terminal } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  image_hint: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Sentiment Analysis of Movie Reviews",
    description: "Built a model to classify movie reviews as positive or negative using NLP techniques and machine learning.",
    image: "https://placehold.co/600x400.png",
    image_hint: "sentiment chart",
    tags: ["Python", "Scikit-learn", "NLTK", "Pandas"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance.",
    image: "https://placehold.co/600x400.png",
    image_hint: "modern ecommerce",
    tags: ["Next.js", "Stripe", "GraphQL", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Sales Forecasting for Retail",
    description: "Developed a time-series model to predict future sales for a retail company, aiding in inventory management.",
    image: "https://placehold.co/600x400.png",
    image_hint: "sales graph",
    tags: ["Python", "Prophet", "StatsModels", "Matplotlib"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Customer Segmentation using Clustering",
    description: "Applied unsupervised learning to segment customers based on purchasing behavior, enabling targeted marketing.",
    image: "https://placehold.co/600x400.png",
    image_hint: "customer cluster",
    tags: ["Python", "Scikit-learn", "K-Means", "Seaborn"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const SKILLS = [
  { name: "Python", icon: Shell },
  { name: "SQL", icon: Database },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "Pandas/Numpy", icon: Calculator },
  { name: "Scikit-learn", icon: Bot },
  // { name: "Deep Learning", icon: Layers },
  { name: "Git", icon: GitBranch },
  { name: "Linux", icon: Terminal },
  { name: "Django & Flask", icon: Code },
  // { name: "DSA", icon: Code },
];

export type Education = {
    school: string;
    degree: string;
    period: string;
    description: string;
}

export const EDUCATION: Education[] = [
    {
        school: "Jawaharlal Nehru University (JNU)",
        degree: "B.Tech in Computer Science",
        period: "2020 - 2026",
        description: "Focused on core computer science fundamentals, with a special emphasis on algorithms, data structures, and software engineering. Undertook various projects involving web development and machine learning."
 },
    {
        school: "IIT Madras (IITM)",
        degree: "Online BS in Data Science",
        period: "2022 - Present",
        description: "Pursuing a comprehensive curriculum in data science, covering statistical methods, machine learning algorithms, and big data technologies. Gaining hands-on experience with real-world datasets."
    }
]

