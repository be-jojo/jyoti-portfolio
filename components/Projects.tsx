'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projectCategories, projects, type ProjectCategory } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.section
      id="projects"
      className="section-shell section-spacing"
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Projects</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            A mix of frontend polish, full stack thinking, and AI exploration.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-400">
          Each project is presented with scalable UI structure, clear tech choices, and
          interactions that feel intentionally crafted.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              activeCategory === category
                ? 'bg-gradient-to-r from-accent to-accent-secondary text-slate-950 shadow-glow'
                : 'glass-panel text-slate-300 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
