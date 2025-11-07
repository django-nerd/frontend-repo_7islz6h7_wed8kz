import React, { useMemo } from 'react';

const sampleProjects = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: ['Branding', 'Illustration', 'Digital Art', 'Traditional Art', 'Apparel', 'UI/Web'][i % 6],
  // Using picsum placeholders; grayscale vs color simulated with CSS filters
  img: `https://picsum.photos/seed/artist-${i + 1}/800/600`,
}));

export default function Gallery({ darkMode, sketchMode }) {
  const projects = useMemo(() => sampleProjects, []);

  return (
    <section id="gallery" className={`${darkMode ? 'bg-black' : 'bg-[#F5F2E8]'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className={`text-2xl sm:text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Featured Works</h2>
          <div className="text-sm text-neutral-500">Hover to reveal color</div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.id} href="#" className={`group relative overflow-hidden rounded-xl border ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'} shadow-sm`}>\n              <div className="aspect-[4/3] overflow-hidden">\n                <img\n                  loading="lazy"\n                  src={p.img}\n                  alt={p.title}\n                  className={`h-full w-full object-cover transition duration-500 ${sketchMode ? 'grayscale' : 'grayscale group-hover:grayscale-0'} ${darkMode ? '' : ''}`}\n                />\n              </div>\n              <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60`} />\n              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">\n                <div>\n                  <div className="text-white text-sm/none uppercase tracking-wide">{p.category}</div>\n                  <div className="text-white text-lg font-medium">{p.title}</div>\n                </div>\n                <span className="text-white/80 text-xs">Case Study →</span>\n              </div>\n            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#contact" className={`inline-flex items-center gap-2 rounded-full px-5 py-2 border ${darkMode ? 'border-neutral-700 text-white hover:bg-neutral-900' : 'border-neutral-300 text-black hover:bg-white'} transition`}>
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
