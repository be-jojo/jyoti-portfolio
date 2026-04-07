'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Jan 2023 - Jun 2023',
    title: 'Software Engineer Trainee',
    company: 'Cognam Technologies',
    description:
      'Built React projects with a focus on responsive UI, reusable components, and maintainable frontend architecture.',
  },
  {
    period: 'July 2023 - Jan 2026',
    title: 'Software Engineer',
    company: 'Cognam Technologies',
    description:
      'Collaborated on React projects delivering responsive interfaces, reusable component libraries, and performance-optimised frontend architecture.',
  },
  {
    period: '2025 - Present',
    title: 'System Design Exploration',
    company: 'Self-Driven Practice',
    description:
      'Strengthening computer science fundamentals and system design intuition. Building enough backend and data-flow literacy to reason about how frontend fits into the broader product.',
  },
  {
    period: '2026 - Present',
    title: 'AI / ML Learning Track',
    company: 'Self-Driven Practice',
    description:
      'Exploring machine learning fundamentals and practical Python workflows to understand how AI concepts connect to product experiences.',
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-shell section-spacing"
    >
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Experience</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
          A timeline of learning, building, and sharpening engineering depth.
        </h2>
      </div>

      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-accent before:to-transparent sm:before:left-1/2">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.title}-${index}`}
            className="relative grid gap-4 sm:grid-cols-2"
          >
            <div className={`${index % 2 === 0 ? 'sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}>
              <div className="glass-panel rounded-[1.75rem] p-6">
                <span className="text-sm font-medium uppercase tracking-[0.25em] text-accent-secondary">
                  {experience.period}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{experience.company}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>
              </div>
            </div>

            <span className="absolute left-4 top-8 h-3.5 w-3.5 rounded-full border-4 border-slate-950 bg-accent sm:left-1/2 sm:-translate-x-1/2" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
