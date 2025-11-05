import React from 'react';

// Focused card component with subtle hover lift using transform/opacity only.
// Keeps layout stable and performant.
export default function ProjectCard({ title, description, image, href, tags = [] }) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]"
      aria-label={`Open case study: ${title}`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-800">
        {/* Image placeholder: replace with optimized AVIF/WebP when available */}
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-500">Preview</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{description}</p>
        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="text-2xs rounded-full bg-white/5 px-2 py-1 text-zinc-300">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
