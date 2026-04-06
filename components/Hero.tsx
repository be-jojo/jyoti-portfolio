'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-shell section-spacing relative flex min-h-screen items-center">
      <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="max-w-3xl"
        >
          <div className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-200">
            <Sparkles size={16} className="text-accent" />
            Building polished digital experiences with code and curiosity.
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent-secondary">
            Software Engineer Portfolio
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Jyoti Suthar
          </h1>
          <h2 className="mt-4 text-lg text-slate-300 sm:text-xl lg:text-2xl">
            Software Engineer | React Developer | AI/ML Enthusiast
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I craft clean, responsive web experiences with React and Next.js, explore full
            stack systems with curiosity, and keep pushing into AI and machine learning while
            preparing for GATE with the same disciplined mindset.
          </p>

          <div className="mt-10 flex flex-col gap-4 xs:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-glow"
            >
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Jyoti-Suthar-Resume.pdf"
              download
              className="glass-panel inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-accent-secondary/20 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent-secondary/20 blur-3xl" />
            <div className="relative grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm text-slate-400">Primary Focus</p>
                  <p className="mt-3 font-display text-2xl text-white">React + Next.js</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm text-slate-400">Current Momentum</p>
                  <p className="mt-3 font-display text-2xl text-white">AI / ML Learning</p>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Developer Snapshot</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
                    Open to Opportunities
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-semibold text-white">3+</p>
                    <p className="mt-1 text-sm text-slate-400">Core domains</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">10+</p>
                    <p className="mt-1 text-sm text-slate-400">UI patterns practiced</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">∞</p>
                    <p className="mt-1 text-sm text-slate-400">Learning mindset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
