'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2025 - Present',
    title: 'Frontend Developer Journey',
    company: 'Independent Learning & Project Building',
    description:
      'Building React and Next.js projects with a strong focus on responsive UI, reusable components, and maintainable frontend architecture.',
  },
  {
    period: '2024 - Present',
    title: 'Full Stack Exploration',
    company: 'Self-Driven Practice',
    description:
      'Expanding from frontend into APIs, data flow, and application structure to better understand end-to-end product development.',
  },
  {
    period: '2024 - Present',
    title: 'AI / ML Learning Track',
    company: 'Python & Machine Learning Practice',
    description:
      'Exploring machine learning basics, practical Python workflows, and the foundations needed to connect AI concepts with product experiences.',
  },
  {
    period: 'Ongoing',
    title: 'GATE Preparation',
    company: 'Focused Academic Preparation',
    description:
      'Strengthening core computer science concepts and disciplined problem-solving through consistent preparation and structured study.',
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
