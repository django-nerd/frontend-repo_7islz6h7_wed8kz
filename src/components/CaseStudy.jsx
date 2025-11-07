import React from 'react';

export default function CaseStudy({ darkMode }) {
  return (
    <section id="case-study" className={`${darkMode ? 'bg-[#0C0C0C] text-neutral-200' : 'bg-[#F5F2E8] text-neutral-900'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <div className={`relative overflow-hidden rounded-2xl border ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="Hero visual"
            className="w-full h-[360px] object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Case Study Title</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">A concise overview describing the brief, role, and outcome.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Featured work"
              className={`w-full h-auto rounded-xl border object-cover ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <div className={`rounded-xl border p-4 ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
              <div className="text-sm text-neutral-500">Role</div>
              <div className="font-medium">Art Direction, Illustration</div>
            </div>
            <div className={`rounded-xl border p-4 ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
              <div className="text-sm text-neutral-500">Deliverables</div>
              <div className="font-medium">Identity, Poster Series, Social Toolkit</div>
            </div>
            <div className={`rounded-xl border p-4 ${darkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'}`}>
              <div className="text-sm text-neutral-500">Year</div>
              <div className="font-medium">2025</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">Process</h3>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">Sketch, iterate, refine. From pencil thumbnails to layered vector and texture blends, each step is deliberate.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/process-${i}/900/700`}
                alt={`Process ${i}`}
                className={`w-full h-auto rounded-xl border object-cover ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">Outcome</h3>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">The final system lands at the intersection of clarity and character, built to flex across mediums while retaining a crafted soul.</p>
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"
            alt="Final outcome"
            className={`mt-6 w-full h-auto rounded-xl border object-cover ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
