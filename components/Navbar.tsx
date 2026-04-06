'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

type Theme = 'dark' | 'light';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('theme', theme);
  }, [mounted, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="section-shell sticky top-4 z-50 pt-4">
      <motion.nav
        className="glass-panel accent-ring flex items-center justify-between rounded-full px-4 py-3 sm:px-6"
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-wide">
          Jyoti<span className="text-accent-secondary">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark and light mode"
            onClick={toggleTheme}
            aria-pressed={theme === 'light'}
            className="accent-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-100 transition hover:bg-white/10 md:h-10 md:w-10"
          >
            {!mounted ? null : theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
          </button>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="accent-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-100 transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
            className="glass-panel mt-3 rounded-3xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
