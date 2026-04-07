// export type ProjectCategory = 'All' | 'Frontend' | 'AI' | 'Full Stack';
export type ProjectCategory = 'All' | 'Frontend';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, 'All'>;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projectCategories: ProjectCategory[] = [
  'All',
  'Frontend',
  // 'AI',
  // 'Full Stack',
];

export const projects: Project[] = [
  {
    id: 1,
    title: "SwiftNotes Reader",
    description:
      "A speed-reading web application that allows users to paste text, upload PDFs, or enter webpage URLs to read content rapidly. Includes a clean reader interface and extensible architecture for annotations and AI-powered summaries.",
    image: "/images/react-dashboard.svg",
    category: "Frontend",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/be-jojo/swiftnotes-reader",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    description:
      "An interactive visualization tool that demonstrates how popular sorting algorithms work step-by-step. Users can visualize sorting processes such as Bubble Sort, Selection Sort, and Merge Sort with animated bars.",
    image: "/images/react-dashboard.svg",
    category: "Frontend",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/be-jojo/sorting_visualizer",
    liveUrl: "https://cs391-12d57.web.app",
  },
  {
    id: 3,
    title: "Knowledge Base UI",
    description:
      "A responsive Knowledge Base interface built from a Figma design. The project focuses on component-based architecture, reusable UI elements, and pixel-accurate implementation using modern frontend tools.",
    image: "/images/react-dashboard.svg",
    category: "Frontend",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/be-jojo/knowledge-base-app",
    liveUrl: "https://knowledge-base-app-khaki.vercel.app/",
  },
];
