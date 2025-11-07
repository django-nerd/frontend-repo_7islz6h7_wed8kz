import React from 'react';

export default function Contact({ darkMode }) {
  return (
    <section id="contact" className={`${darkMode ? 'bg-[#0C0C0C] text-neutral-200' : 'bg-[#F5F2E8] text-neutral-900'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold">Let’s Create Something Intentional</h2>
        <p className="mt-3 text-neutral-500 dark:text-neutral-400">Commissions and collaborations welcome. Share your vision and we’ll craft it with intention.</p>
        <form className="mt-8 grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-neutral-500">Name</label>
              <input type="text" className={`mt-2 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-neutral-950 border-neutral-800 focus:ring-neutral-600' : 'bg-white border-neutral-300 focus:ring-neutral-400'}`} placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-neutral-500">Email</label>
              <input type="email" className={`mt-2 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-neutral-950 border-neutral-800 focus:ring-neutral-600' : 'bg-white border-neutral-300 focus:ring-neutral-400'}`} placeholder="you@email.com" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-neutral-500">Project Type</label>
              <select className={`mt-2 w-full rounded-md border px-3 py-2 ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-300'}`}>
                <option>Branding</option>
                <option>Illustration</option>
                <option>Digital Art</option>
                <option>Traditional Art</option>
                <option>Apparel</option>
                <option>UI/Web</option>
                <option>Military Designs</option>
                <option>Sports Branding</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-neutral-500">Budget</label>
              <select className={`mt-2 w-full rounded-md border px-3 py-2 ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-300'}`}>
                <option>$1k - $3k</option>
                <option>$3k - $7k</option>
                <option>$7k - $15k</option>
                <option>$15k+</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm text-neutral-500">Message</label>
            <textarea className={`mt-2 w-full rounded-md border px-3 py-2 h-32 resize-y focus:outline-none focus:ring-2 ${darkMode ? 'bg-neutral-950 border-neutral-800 focus:ring-neutral-600' : 'bg-white border-neutral-300 focus:ring-neutral-400'}`} placeholder="Tell me about your project..." />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-neutral-500">All visuals handcrafted by The Artist.</div>
            <button type="button" className={`rounded-full px-5 py-2 border ${darkMode ? 'border-neutral-700 text-white hover:bg-neutral-900' : 'border-neutral-300 text-black hover:bg-white'} transition`}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
