'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="glass-panel group overflow-hidden rounded-[2rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
            {project.category}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((stack) => (
            <span
              key={stack}
              className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-accent-secondary/40 hover:bg-white/5"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-glow"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
