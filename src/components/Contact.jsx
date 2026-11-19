import React from 'react';
import { Mail, Linkedin, Github, Facebook, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const Contact = () => {
  const { contact } = portfolioData;

  const profiles = [
    { label: 'LinkedIn', href: contact.linkedin, icon: <Linkedin size={18} aria-hidden="true" /> },
    { label: 'GitHub', href: contact.github, icon: <Github size={18} aria-hidden="true" /> },
    { label: 'Facebook', href: contact.facebook, icon: <Facebook size={18} aria-hidden="true" /> },
  ].filter((p) => p.href);

  return (
    <>
      <Section id="contact" title="Contact">
        <p className="max-w-[20ch] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
          Open to Data Analyst and Business Analyst roles.
        </p>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
          Email is the quickest way to reach me. I'm based in {contact.location}.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-lg bg-clay px-6 text-lg font-semibold text-white transition-colors hover:bg-clay-dark"
        >
          <Mail size={20} aria-hidden="true" />
          {contact.email}
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {profiles.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-clay"
              >
                {icon}
                {label}
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Mohamad Hafiz Bin Mohd Jais</p>
          <a href="#top" className="inline-flex min-h-10 items-center hover:text-ink">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
