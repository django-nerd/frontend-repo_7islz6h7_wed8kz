import React, { useMemo, useState } from 'react';

const sampleProjects = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: ['Branding', 'Illustration', 'Digital Art', 'Traditional Art', 'Apparel', 'UI/Web'][i % 6],
  img: `https://picsum.photos/seed/atelier-${i + 1}/800/600`,
}));

const categories = ['All', 'Branding', 'Illustration', 'Digital Art', 'Traditional Art', 'Apparel', 'UI/Web'];

export default function PortfolioFilters({ darkMode, sketchMode }) {
  const [active, setActive] = useState('All');
  const projects = useMemo(() => sampleProjects, []);
  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <section className={`${darkMode ? 'bg-black' : 'bg-[#F5F2E8]'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className={`text-2xl sm:text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Portfolio</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm border transition ${
                  active === c
                    ? darkMode
                      ? 'border-neutral-600 bg-neutral-900 text-white'
                      : 'border-neutral-300 bg-white text-black'
                    : darkMode
                    ? 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a
              key={p.id}
              href={`#case-${p.id}`}
              className={`group relative overflow-hidden rounded-xl border ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'} shadow-sm`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  loading="lazy"
                  src={p.img}
                  alt={p.title}
                  className={`h-full w-full object-cover transition duration-500 ${sketchMode ? 'grayscale' : 'grayscale group-hover:grayscale-0'}`}
                />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <div className="text-white text-sm leading-none uppercase tracking-wide">{p.category}</div>
                  <div className="text-white text-lg font-medium">{p.title}</div>
                </div>
                <span className="text-white/80 text-xs">Open →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
