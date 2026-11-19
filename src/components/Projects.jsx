import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import Section from './Section';

const SPEED = 40; // auto-scroll speed in px per second
const RESUME_AFTER_TOUCH_MS = 3000;

const categoryLabel = {
  professional: 'Professional',
  academic: 'Academic',
};

const ProjectCard = ({ project, onPause, onResume }) => (
  <article
    onMouseEnter={onPause}
    onMouseLeave={onResume}
    className="h-full flex flex-col rounded-xl bg-ink p-7 md:p-8 text-foam shadow-[0_1px_0_rgba(0,49,53,0.08),0_12px_32px_-12px_rgba(0,49,53,0.45)] ring-1 ring-ink transition-[box-shadow,transform] duration-200 hover:ring-clay-light/60"
  >
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span className="rounded-md border border-foam-soft/25 px-2 py-0.5 text-foam-soft">
        {categoryLabel[project.category] ?? project.category}
      </span>
      {project.award && <span className="font-medium text-clay-light">{project.award}</span>}
    </div>

    <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.01em] text-foam">{project.title}</h3>
    <p className="mt-1.5 text-sm text-clay-light">{project.subtitle}</p>

    <p className="mt-4 mb-7 text-[0.9375rem] leading-relaxed text-foam-soft">{project.description}</p>

    <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Tools used">
      {project.tech.map((t) => (
        <li key={t} className="rounded-md bg-ink-soft px-2 py-1 text-xs text-foam-soft">
          {t}
        </li>
      ))}
    </ul>
  </article>
);

const Projects = () => {
  const { projects } = portfolioData;
  const trackRef = useRef(null);
  const resumeTimer = useRef(null);

  // Motion runs only when all three allow it:
  //  - interactionPausedRef: temporary pause while hovering a card, focusing, or touching
  //  - userPaused: the Pause/Play button (persistent; defaults to paused for reduced-motion users)
  //  - inViewRef: the carousel is on screen
  const interactionPausedRef = useRef(false);
  const inViewRef = useRef(true);
  const [userPaused, setUserPaused] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const userPausedRef = useRef(userPaused);
  useEffect(() => {
    userPausedRef.current = userPaused;
  }, [userPaused]);

  const pause = () => {
    clearTimeout(resumeTimer.current);
    interactionPausedRef.current = true;
  };
  const resume = () => {
    clearTimeout(resumeTimer.current);
    interactionPausedRef.current = false;
  };
  const resumeLater = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(resume, RESUME_AFTER_TOUCH_MS);
  };

  // Auto-scroll loop. The project list is rendered twice, so when we reach the
  // start of the second copy we jump back by exactly one copy's width (seamless).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      inViewRef.current = entry.isIntersecting;
    });
    observer.observe(el);

    let raf;
    let last = performance.now();
    let pos = el.scrollLeft;
    let lastSet = pos;

    const step = (now) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      const half = el.scrollWidth / 2;

      // Adopt any scroll we didn't cause (wheel, trackpad, swipe, keyboard, arrow buttons).
      if (Math.abs(el.scrollLeft - lastSet) > 1) pos = el.scrollLeft;

      const moving = !interactionPausedRef.current && !userPausedRef.current && inViewRef.current;
      if (moving) pos += SPEED * dt;
      if (pos >= half) pos -= half;
      if (Math.abs(el.scrollLeft - pos) >= 0.5) el.scrollLeft = pos;
      lastSet = el.scrollLeft;

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      clearTimeout(resumeTimer.current);
    };
  }, []);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const amount = card ? card.offsetWidth : 400;
    pause();
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
    resumeLater();
  };

  const items = [...projects, ...projects];

  const controlClass =
    'flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-surface text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:scale-95 cursor-pointer';

  const controls = (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => setUserPaused((p) => !p)}
        aria-label={userPaused ? 'Play auto-scroll' : 'Pause auto-scroll'}
        title={userPaused ? 'Play auto-scroll' : 'Pause auto-scroll'}
        className={controlClass}
      >
        {userPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
      </button>
      <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous project" title="Previous project" className={controlClass}>
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <button type="button" onClick={() => scrollByCard(1)} aria-label="Next project" title="Next project" className={controlClass}>
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <Section
      id="projects"
      title="Projects"
      intro="One internship project and three from my degree. Hover over a card or press pause to stop the scrolling."
      layout="stack"
      actions={controls}
    >
      <div aria-roledescription="carousel" aria-label="Projects" className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 md:w-12 bg-gradient-to-r from-paper to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 md:w-12 bg-gradient-to-l from-paper to-transparent"></div>

        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Project cards. Use the left and right arrow keys to scroll."
          onTouchStart={pause}
          onTouchEnd={resumeLater}
          onFocus={pause}
          onBlur={resume}
          className="flex overflow-x-auto py-3 rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((project, index) => {
            const isClone = index >= projects.length;
            return (
              // Spacing is padding (not flex gap) so both copies have identical widths.
              <div
                key={index}
                data-card
                aria-hidden={isClone || undefined}
                className="shrink-0 w-[85vw] sm:w-[400px] pr-5"
              >
                <ProjectCard project={project} onPause={pause} onResume={resume} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
