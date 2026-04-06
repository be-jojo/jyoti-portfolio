export type ProjectCategory = 'All' | 'Frontend' | 'AI' | 'Full Stack';

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
  'AI',
  'Full Stack',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Full Stack Web App',
    description:
      'A production-style web platform with authenticated dashboards, clean API integrations, and a scalable frontend architecture.',
    image: '/images/full-stack-web-app.svg',
    category: 'Full Stack',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jyotisuthar/full-stack-web-app',
    liveUrl: 'https://full-stack-web-app.vercel.app',
  },
  {
    id: 2,
    title: 'React Dashboard',
    description:
      'An analytics dashboard focused on reusable UI, responsive data visualizations, and fast developer workflows.',
    image: '/images/react-dashboard.svg',
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jyotisuthar/react-dashboard',
    liveUrl: 'https://react-dashboard-demo.vercel.app',
  },
  {
    id: 3,
    title: 'AI/ML Project',
    description:
      'An experimentation project exploring machine learning fundamentals, Python pipelines, and model-backed user experiences.',
    image: '/images/ai-ml-project.svg',
    category: 'AI',
    techStack: ['Python', 'Machine Learning', 'Data Analysis', 'Visualization'],
    githubUrl: 'https://github.com/jyotisuthar/ai-ml-project',
    liveUrl: 'https://ai-ml-project-demo.vercel.app',
  },
];
