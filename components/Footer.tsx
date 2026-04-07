'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/be-jojo',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jyoti-suthar-359125203/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:sutharjojo203@gmail.com',
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="section-shell pb-8 pt-4"
    >
      <div className="glass-panel flex flex-col gap-5 rounded-[2rem] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">Jyoti Suthar</p>
          <p className="text-sm text-slate-400">
            © 2026 All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-accent-secondary/40 hover:text-white"
              >
                <Icon size={18} />
              </a>
            );
          })}

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-secondary text-slate-950 transition hover:shadow-glow"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
