import React from 'react';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`${darkMode ? 'bg-[#0C0C0C] text-neutral-200' : 'bg-[#F5F2E8] text-neutral-900'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <div className={`relative overflow-hidden rounded-xl border ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
              alt="The Artist portrait at work"
              className="h-80 w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">A quiet obsession with texture, line, and balance.</p>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">About the Atelier</h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
              I blend traditional techniques with contemporary tools to craft identities, illustrations, and digital experiences. Each project begins with pencil and paper, evolves through iterative exploration, and finishes with meticulous polish.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Capabilities</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                'Brand Identity',
                'Illustration',
                'Editorial Artwork',
                'Merch & Apparel',
                'Poster Design',
                'Iconography',
                'UI/UX Visuals',
                'Packaging',
                'Lettering'
              ].map((skill) => (
                <li key={skill} className={`rounded-lg border px-3 py-2 ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {['Pencil & Paper', 'Procreate', 'Photoshop', 'Illustrator', 'Figma', 'Blender', 'Spline'].map((tool) => (
                <span key={tool} className={`rounded-full px-3 py-1 border ${darkMode ? 'border-neutral-800 bg-neutral-950 text-neutral-300' : 'border-neutral-200 bg-white text-neutral-700'}`}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
