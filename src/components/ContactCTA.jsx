import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto w-full max-w-4xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-black p-8 text-center shadow-lg">
        <h2 id="contact-heading" className="text-2xl font-semibold text-white sm:text-3xl">
          Let’s build something extraordinary
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-300">
          Have a project in mind? I can help you ship an elegant, accessible experience—with motion that enhances,
          not distracts.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="rounded-full bg-[#7C5CFF] px-5 py-2 text-sm font-medium text-white shadow-lg shadow-[#7C5CFF]/30 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
          >
            Email Me
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
