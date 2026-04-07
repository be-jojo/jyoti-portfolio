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
            I am a frontend developer with 3 years of experience building React applications — focused on responsive interfaces, reusable components, and clean, maintainable architecture. I care about translating ideas into polished user experiences that are both performant and easy to work with.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Beyond the UI layer, I have been building enough understanding of backend systems, APIs, and data flow to reason about how frontend fits into the full product — not to build backends, but to collaborate better and make stronger frontend decisions.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">  
            I am also exploring machine learning fundamentals and Python workflows, driven by genuine curiosity about how AI concepts connect to real product experiences. My longer-term interests lean toward computer vision and applied ML — fields I find intellectually compelling and want to grow into over time.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
