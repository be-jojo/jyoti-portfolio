'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-shell section-spacing"
    >
      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Skills</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            A toolkit shaped by frontend depth and growing full stack range.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-400">
          I focus on modern frontend engineering with React and Next.js, while steadily
          expanding into Agentic systems and AI/ML foundations.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className="glass-panel rounded-[2rem] p-6"
          >
            <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="rounded-3xl border border-white/10 bg-slate-950/35 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent-secondary/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-accent">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="font-medium text-white">{skill.name}</p>
                        <p className="text-sm text-slate-400">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
