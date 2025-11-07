import React from 'react';

// Pencil-stroke style section dividers
export function SectionDivider({ darkMode, label }) {
  return (
    <div className="relative my-16 md:my-24">
      <div
        className={`h-[1px] w-full ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
        style={{
          maskImage:
            'radial-gradient(10px 10px at 8px 50%, black 60%, transparent 65%), radial-gradient(12px 12px at 24px 50%, black 60%, transparent 65%), linear-gradient(90deg, black 60%, transparent 65%)',
          WebkitMaskImage:
            'radial-gradient(10px 10px at 8px 50%, black 60%, transparent 65%), radial-gradient(12px 12px at 24px 50%, black 60%, transparent 65%), linear-gradient(90deg, black 60%, transparent 65%)',
        }}
      />
      {label && (
        <div className="absolute -top-3 left-4">
          <span
            className={`bg-transparent px-2 text-xs tracking-widest uppercase ${
              darkMode ? 'text-white/40' : 'text-black/50'
            }`}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default SectionDivider;
