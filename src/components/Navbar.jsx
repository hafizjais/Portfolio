import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Awards', id: 'awards' },
  { name: 'Leadership', id: 'leadership' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in the middle band of the viewport.
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? 'bg-paper/95 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-bold tracking-[-0.02em] text-ink">
          Hafiz Jais
        </a>

        <div className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative py-2 text-[0.9375rem] transition-colors ${
                      isActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {link.name}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-clay transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/Resume_Hafiz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
          >
            My Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-mist cursor-pointer"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-line bg-paper">
          <ul className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={active === link.id ? 'location' : undefined}
                  className={`flex min-h-11 items-center text-lg ${
                    active === link.id ? 'font-semibold text-ink' : 'text-muted'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a
                href="/Resume_Hafiz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center rounded-lg bg-ink px-4 font-semibold text-paper"
              >
                My Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
