import React from 'react';

export default function Intro({ darkMode }) {
  return (
    <section id="intro" className={`relative py-16 sm:py-24 ${darkMode ? 'bg-[#0C0C0C] text-neutral-200' : 'bg-[#F5F2E8] text-neutral-800'}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-neutral-500/60 to-transparent" />
        <p className="text-lg leading-relaxed">
          THE ARTIST is a multi-medium designer crafting brands, illustrations, digital art, and apparel with an intentional, handcrafted approach. Blending traditional techniques with modern tools, each piece is shaped by discipline, precision, and a deep respect for craft.
        </p>
      </div>
    </section>
  );
}
