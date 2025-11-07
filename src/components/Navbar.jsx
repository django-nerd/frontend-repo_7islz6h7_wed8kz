import React from 'react';
import { Moon, Sun, Image as ImageIcon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, sketchMode, setSketchMode }) {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? 'bg-black/50 border-neutral-800' : 'bg-white/60 border-neutral-200'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-widest text-sm sm:text-base">
          <span className={`uppercase ${darkMode ? 'text-white' : 'text-black'}`}>THE ARTIST</span>
          <span className={`ml-3 hidden sm:inline text-xs tracking-normal ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>Handcrafted Visual Design</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#about" className={`text-sm ${darkMode ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'}`}>About</a>
          <a href="#gallery" className={`text-sm ${darkMode ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'}`}>Portfolio</a>
          <a href="#contact" className={`text-sm ${darkMode ? 'text-neutral-200 hover:text-white' : 'text-neutral-800 hover:text-black'}`}>Contact</a>
          <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />
          <button
            aria-label="Toggle sketch mode"
            onClick={() => setSketchMode(!sketchMode)}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm transition ${sketchMode ? (darkMode ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-black') : (darkMode ? 'bg-neutral-900 text-neutral-200' : 'bg-neutral-100 text-neutral-800')}`}
          >
            <ImageIcon size={16} />
            <span className="hidden sm:inline">Sketch</span>
          </button>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm transition ${darkMode ? 'bg-neutral-900 text-neutral-200' : 'bg-neutral-100 text-neutral-800'}`}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
