import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import ContactCTA from './components/ContactCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Subtle page background enhancement */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,92,255,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(124,92,255,0.08),_transparent_50%)]"
      />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-semibold tracking-widest text-white/90 uppercase">FLAMES.BLUE</a>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm text-zinc-300">
          <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] rounded" href="#projects">Work</a>
          <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] rounded" href="#about">About</a>
          <a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] rounded" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <ContactCTA />
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 text-sm text-zinc-500">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Flames.Blue — All rights reserved.</p>
          <p>
            Built with care: transforms & opacity animations, reduced-motion respected.
          </p>
        </div>
      </footer>
    </div>
  );
}
