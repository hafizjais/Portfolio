import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-body text-slate-300 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />

      <Section
        id="hero"
        variant="dark"
        className="pt-24 pb-0"
        bgImage="/pexels-eberhardgross.jpg"
        bgOverlayOpacity={0.6}
      >
        <Hero />
      </Section>

      <Section id="about" variant="light">
        <About />
      </Section>

      <Section id="experience" variant="dark">
        <Experience />
      </Section>

      <Section id="leadership" variant="light">
        <Leadership />
      </Section>

      <Section id="projects" variant="dark">
        <Projects />
      </Section>

      <Section id="awards" variant="light">
        <Achievements />
      </Section>

      <Section id="certifications" variant="dark">
        <Certifications />
      </Section>

      <Section id="skills" variant="light">
        <Skills />
      </Section>

      <Section id="contact" variant="dark">
        <Contact />
      </Section>

    </div >
  );
}

export default App;