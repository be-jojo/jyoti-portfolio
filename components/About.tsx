'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-shell section-spacing"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">About</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Building with curiosity, consistency, and strong frontend fundamentals.
          </h2>
        </div>

        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-base leading-8 text-slate-300">
            I am a software engineer focused on React frontend development, creating interfaces
            that are responsive, intuitive, and maintainable. I enjoy translating ideas into
            polished user experiences with clean architecture and reusable components.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Alongside frontend work, I have a growing interest in full stack development and
            enjoy understanding how the UI connects to APIs, data flows, and backend systems.
            I am also actively learning AI and machine learning concepts while preparing for
            GATE, which keeps my problem-solving skills sharp and my long-term goals grounded.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
