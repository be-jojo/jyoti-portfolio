import {
  BrainCircuit,
  DatabaseZap,
  FileCode2,
  Globe,
  MonitorSmartphone,
  PanelsTopLeft,
  ServerCog,
  SquareCode,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SkillGroup = {
  title: string;
  items: {
    name: string;
    icon: LucideIcon;
    description: string;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        icon: MonitorSmartphone,
        description: 'Building component-driven interfaces with modern patterns.',
      },
      {
        name: 'Next.js',
        icon: PanelsTopLeft,
        description: 'Shipping performant apps with App Router and server-first thinking.',
      },
      {
        name: 'JavaScript',
        icon: FileCode2,
        description: 'Writing clean, interactive client-side logic.',
      },
      {
        name: 'TypeScript',
        icon: SquareCode,
        description: 'Adding confidence with type-safe frontend architecture.',
      },
      {
        name: 'Tailwind CSS',
        icon: Globe,
        description: 'Designing modern, scalable UI systems quickly.',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: ServerCog,
        description: 'Creating lightweight services and full stack integrations.',
      },
      {
        name: 'REST APIs',
        icon: DatabaseZap,
        description: 'Designing API-driven applications with structured data flow.',
      },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      {
        name: 'Python',
        icon: FileCode2,
        description: 'Using Python for problem solving, scripting, and experimentation.',
      },
      {
        name: 'Machine Learning Basics',
        icon: BrainCircuit,
        description: 'Learning model fundamentals, workflows, and applied AI concepts.',
      },
    ],
  },
];
