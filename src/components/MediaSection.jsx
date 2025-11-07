import React from 'react';

export default function MediaSection({ darkMode }) {
  return (
    <section className="relative py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className={`text-2xl md:text-3xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
          Behind the Scenes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Video */}
          <div className={`rounded-xl overflow-hidden shadow-sm border ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
            <div className="aspect-video bg-black/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                title="Studio Process"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Spotify */}
          <div className={`rounded-xl overflow-hidden shadow-sm border ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
            <iframe
              className="w-full" style={{ height: 352 }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Studio Playlist"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
