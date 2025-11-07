import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import PortfolioFilters from './components/PortfolioFilters';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import TextureGrain from './components/TextureGrain';
import Watermark from './components/Watermark';
import SectionDivider from './components/Dividers';
import MediaSection from './components/MediaSection';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sketchMode, setSketchMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark bg-[#0C0C0C]' : 'bg-[#F5F2E8]'}>
      {/* Global overlays */}
      <TextureGrain darkMode={darkMode} />
      <Watermark darkMode={darkMode} />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sketchMode={sketchMode}
        setSketchMode={setSketchMode}
      />

      <main>
        <Hero darkMode={darkMode} />
        <SectionDivider darkMode={darkMode} label="Introduction" />
        <Intro darkMode={darkMode} />
        <SectionDivider darkMode={darkMode} label="About" />
        <About darkMode={darkMode} />
        <SectionDivider darkMode={darkMode} label="Portfolio" />
        <PortfolioFilters darkMode={darkMode} sketchMode={sketchMode} />
        <SectionDivider darkMode={darkMode} label="Case Study" />
        <CaseStudy darkMode={darkMode} />
        <SectionDivider darkMode={darkMode} label="Studio" />
        <MediaSection darkMode={darkMode} />
        <SectionDivider darkMode={darkMode} label="Contact" />
        <Contact darkMode={darkMode} />
      </main>

      <footer className={`py-10 text-center text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-700'}`}>
        Handcrafted by The Artist · A Digital Atelier
      </footer>
    </div>
  );
}
