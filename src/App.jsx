import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} sketchMode={sketchMode} setSketchMode={setSketchMode} />
      <main>
        <Hero darkMode={darkMode} />
        <Intro darkMode={darkMode} />
        <Gallery darkMode={darkMode} sketchMode={sketchMode} />
        <Contact darkMode={darkMode} />
      </main>
      <footer className={`py-10 text-center text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-700'}`}>
        Handcrafted by The Artist · A Digital Atelier
      </footer>
    </div>
  );
}
