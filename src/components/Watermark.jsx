import React from 'react';

export default function Watermark({ darkMode }) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 select-none">
      <div
        className={`uppercase tracking-[0.35em] text-xs font-medium ${
          darkMode ? 'text-white/8' : 'text-black/10'
        }`}
        style={{
          textShadow: darkMode
            ? '0 0 1px rgba(255,255,255,0.06)'
            : '0 0 1px rgba(0,0,0,0.06)',
          letterSpacing: '0.35em',
        }}
      >
        THE ARTIST — DIGITAL ATELIER
      </div>
    </div>
  );
}
