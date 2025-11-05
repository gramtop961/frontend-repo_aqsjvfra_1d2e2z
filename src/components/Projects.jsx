import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Nebula Commerce',
    description: 'Headless storefront with cinematic product reveals and buttery scroll performance.',
    href: '#',
    image: '',
    tags: ['React', 'GSAP', 'Accessibility'],
  },
  {
    title: 'Aurora OS Website',
    description: 'OS landing experience with 3D scenes, reduced-motion fallbacks, and high CLS stability.',
    href: '#',
    image: '',
    tags: ['Three.js', 'Spline', 'Perf'],
  },
  {
    title: 'Pulse Analytics',
    description: 'Data stories with micro-interactions and focus-visible cues, shipped with >90 Lighthouse.',
    href: '#',
    image: '',
    tags: ['D3', 'Framer', 'Testing'],
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="projects-heading" className="text-2xl font-semibold text-white sm:text-3xl">
          Featured Projects
        </h2>
        <a
          href="#"
          className="text-sm text-[#7C5CFF] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
        >
          See all
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
