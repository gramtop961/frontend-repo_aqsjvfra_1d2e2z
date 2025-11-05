import React from 'react';
import Spline from '@splinetool/react-spline';

// Hero section with a cinematic 3D Spline scene background
// Notes:
// - The Spline canvas is full-bleed within the hero container.
// - We avoid negative z-index to ensure the scene remains interactive.
// - Overlays are pointer-events-none so they don't block Spline interactions.
// - Animations rely on opacity/transform only for performance.
export default function Hero() {
  return (
    <section aria-label="Intro" className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (does not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-end gap-6 px-6 py-20 sm:py-24 md:py-28 lg:py-32">
        <p className="text-sm tracking-widest text-zinc-300/90 uppercase">Portfolio</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Building cinematic, performant web experiences
        </h1>
        <p className="max-w-2xl text-zinc-300/90">
          I craft premium interfaces that balance motion and accessibility. Smooth when possible, calm when preferred.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-[#7C5CFF] px-5 py-2 text-sm font-medium text-white shadow-lg shadow-[#7C5CFF]/30 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
