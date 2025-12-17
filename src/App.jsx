import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-body text-slate-900 selection:bg-teal-500/30 selection:text-teal-900">
      <Navbar />

      {/* Hero - Impact Section (Dark) */}
      <Section id="hero" variant="dark" className="pt-0 pb-0">
        <Hero />
      </Section>

      {/* Experience - Clean (Light) */}
      <Section id="experience" variant="light">
        <Experience />
      </Section>

      {/* Skills - Impact Section (Dark) */}
      <Section id="skills" variant="dark">
        <Skills />
      </Section>

      {/* Projects - Clean (Light) */}
      <Section id="projects" variant="light">
        <Projects />
      </Section>

      {/* Leadership & Certifications - Clean (Light) */}
      <Section id="leadership" variant="light" className="bg-slate-100">
        <Leadership />
      </Section>

      <Section id="certifications" variant="light">
        <Certifications />
      </Section>

      {/* Contact - Clean (Light) */}
      <Section id="contact" variant="light">
        <Contact />
      </Section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center font-body text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Mohamad Hafiz. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;