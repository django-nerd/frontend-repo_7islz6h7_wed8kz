import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero({ darkMode }) {
  return (
    <section id="home" className={`relative h-[80vh] min-h-[560px] w-full overflow-hidden ${darkMode ? 'bg-[#0C0C0C]' : 'bg-[#F5F2E8]'}`}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 mix-blend-multiply" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          THE ARTIST
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-200">
          Handcrafted Visual Design
        </p>
        <div className="mt-8 h-px w-56 bg-white/40" />
        <p className="mt-6 max-w-2xl text-neutral-200/90">
          A digital atelier where traditional texture meets modern design. Light, intentional, and crafted with precision.
        </p>
        <a href="#intro" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-white backdrop-blur-md hover:bg-white/20 transition">
          Enter the Atelier
          <ChevronDown size={18} />
        </a>
      </div>
    </section>
  );
}
