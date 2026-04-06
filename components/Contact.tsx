'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'jyoti.suthar.dev@gmail.com',
    href: 'mailto:jyoti.suthar.dev@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jyotisuthar',
    href: 'https://linkedin.com/in/jyotisuthar',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/jyotisuthar',
    href: 'https://github.com/jyotisuthar',
    icon: Github,
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-shell section-spacing"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something thoughtful together.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400">
            I am open to frontend roles, collaborative projects, and conversations around
            React, full stack product development, and AI-powered user experiences.
          </p>

          <div className="mt-8 grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-3xl border border-white/10 bg-slate-950/35 p-4 transition hover:-translate-y-1 hover:border-accent-secondary/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-accent">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Send size={20} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">Quick Message</h3>
              <p className="text-sm text-slate-400">Simple contact form UI for outreach.</p>
            </div>
          </div>

          <form
            className="mt-8 grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-secondary"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-secondary"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-slate-300">
              Subject
              <input
                type="text"
                placeholder="Project discussion"
                className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-secondary"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                rows={6}
                placeholder="Tell me a little about your idea..."
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-secondary"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-glow"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
