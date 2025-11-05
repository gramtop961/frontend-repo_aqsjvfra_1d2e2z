import React from 'react';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <h2 id="about-heading" className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
      <p className="mt-4 text-zinc-300">
        I’m a front-end engineer focused on premium UX, accessibility, and motion. I architect systems that scale,
        design animations that respect user preferences, and ship sites that feel alive without sacrificing
        performance.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-400 sm:grid-cols-2">
        <li>• Motion-first systems: transforms & opacity only</li>
        <li>• Accessible by default: keyboard & screen reader tested</li>
        <li>• Performance-centric: code-split, lazy assets, low CLS</li>
        <li>• Maintainable: small components, clear responsibilities</li>
      </ul>
    </section>
  );
}
