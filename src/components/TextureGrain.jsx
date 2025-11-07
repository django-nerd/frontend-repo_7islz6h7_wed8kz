import React from 'react';

// Subtle paper-grain and vignette overlays. They never capture pointer events.
export default function TextureGrain({ darkMode }) {
  const grainStyle = {
    // Layered gradients create a soft paper grain + light vignette
    backgroundImage: [
      // Fine grain using radial dots
      "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
      // Cross-hatch hint
      "linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.03) 25%, transparent 25%)",
      // Subtle vignette
      darkMode
        ? "radial-gradient(ellipse at center, rgba(12,12,12,0) 50%, rgba(0,0,0,0.25) 100%)"
        : "radial-gradient(ellipse at center, rgba(245,242,232,0) 50%, rgba(0,0,0,0.12) 100%)",
    ].join(", "),
    backgroundSize: "3px 3px, 12px 12px, 100% 100%",
    opacity: darkMode ? 0.18 : 0.22,
  };

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-40 mix-blend-multiply"
        style={grainStyle}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: darkMode
            ? "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(255,255,255,0.03))"
            : "linear-gradient(to bottom, rgba(0,0,0,0.04), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.04))",
        }}
        aria-hidden
      />
    </>
  );
}
