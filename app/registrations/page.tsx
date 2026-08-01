export default function RegistrationsPage() {
  return (
    <main id="top" className="relative min-h-screen bg-walnut-dark text-parchment overflow-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-1 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#18120d]/90 backdrop-blur-md border-b border-walnut-line">
        <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 font-mono text-sm font-semibold tracking-wide text-parchment no-underline">
            <img src="/images/applogo.png" alt="Console Craft Logo" className="w-10 h-10 rounded-lg object-cover shadow-md" />
            Console&nbsp;Craft
          </a>
          <nav className="flex items-center gap-7 font-mono text-xs tracking-wider">
            <a href="/" className="text-parchment-dim hover:text-brass-bright transition-colors">Home</a>
            <a href="/registrations" className="text-brass-bright font-semibold">Registrations</a>
            <a href="#submit-preset" className="px-4 py-2 border border-brass rounded text-brass-bright hover:bg-brass hover:text-walnut-dark transition-all">Submit Registration</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION WITH ORGAN BACKGROUND */}
      <section className="relative py-[100px] pb-20 text-center bg-[url('/images/cathedral-organ.webp')] bg-cover bg-[center_30%] bg-fixed flex items-center overflow-hidden border-b border-walnut-line" role="img" aria-label="Grand pipe organ facade in a cathedral background">
        <div className="absolute inset-0 bg-gradient-to-b from-walnut-dark/15 via-walnut-dark/55 to-walnut-dark/94"></div>
        <div className="max-w-[1180px] mx-auto px-8 relative z-2 w-full">
          <p className="font-mono text-xs uppercase tracking-widest text-brass-bright mb-3.5">Community &amp; Preset Library</p>
          <h1 className="text-4xl sm:text-5xl font-normal text-parchment mb-4">Organ Registration Presets</h1>
          <p className="font-serif italic font-light text-lg sm:text-xl text-parchment max-w-[720px] mx-auto leading-relaxed m-0">
            Discover curated combinations, stop setups, and registration lists for virtual pipe organ sample sets—or share your own configurations with fellow organists.
          </p>
        </div>
      </section>

      {/* STOP RAIL DIVIDER */}
      <div className="relative py-8 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full stroke-walnut-line stroke-[1]" viewBox="0 0 1400 90" preserveAspectRatio="xMidYMid meet">
          <line x1="0" y1="18" x2="1400" y2="18" />
          <line x1="0" y1="72" x2="1400" y2="72" />
        </svg>
        <div className="relative max-w-[1180px] mx-auto px-8 flex justify-between flex-wrap gap-4">
          {['Contrabombarde', 'Fagotto', "Posaune", 'Ophicleide', 'Contra Trombone', 'User Presets'].map((name, i) => (
            <div key={name} className="flex flex-col items-center gap-2 flex-1 min-w-[90px]">
              <div className={`w-7 h-7 rounded-full border border-walnut-line shadow-md ${i === 5 ? 'bg-[radial-gradient(circle_at_35%_30%,#d7e6d8,var(--color-sage)_70%,#4c6b50_100%)]' : 'bg-[radial-gradient(circle_at_35%_30%,var(--color-parchment),var(--color-brass)_70%,#7d5f38_100%)]'}`}></div>
              <span className="font-mono text-[10px] text-center text-parchment-dim tracking-wide max-w-[90px]">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* REGISTRATION SETS GRID */}
      <section className="py-12 lg:py-20 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3.5">Available Sample Sets</p>
          <h2 className="text-2xl sm:text-3xl font-normal max-w-[780px] mx-auto mb-10 text-parchment">Sample Set Registrations</h2>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 text-left mt-9">
            {/* Friesach Card */}
            <article className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-7 flex flex-col justify-between transition-all duration-200 hover:border-white/[0.22] hover:bg-white/[0.05] hover:-translate-y-0.5">
              <div>
                <span className="inline-block font-mono text-[0.75rem] uppercase tracking-[0.06em] px-2.5 py-1 rounded bg-white/[0.08] text-parchment-dim mb-3">Available Set</span>
                <h3 className="text-xl sm:text-2xl font-medium text-parchment mb-3 mt-2">Friesach Organ</h3>
                <p className="text-sm sm:text-base text-parchment-dim leading-relaxed m-0">
                  Custom combinations, stop registrations, and division setups for the popular Friesach parish church sample set. Includes liturgical and concert configurations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between items-center">
                <span className="font-mono text-xs text-stone-400">Hauptwerk / CODM</span>
                <a href="/friesach" className="font-mono text-xs font-medium px-4 py-2 rounded border border-walnut-line text-parchment hover:border-brass hover:text-brass-bright transition-colors">View Registrations &rarr;</a>
              </div>
            </article>

            {/* Placeholder 1: Coming Soon */}
            <article className="bg-white/[0.03] border border-white/[0.08] border-dashed rounded-xl p-7 flex flex-col justify-between opacity-60">
              <div>
                <span className="inline-block font-mono text-[0.75rem] uppercase tracking-[0.06em] px-2.5 py-1 rounded bg-white/[0.08] text-parchment-dim mb-3">Upcoming</span>
                <h3 className="text-xl sm:text-2xl font-medium text-parchment mb-3 mt-2">More Sample Sets</h3>
                <p className="text-sm sm:text-base text-parchment-dim leading-relaxed m-0">
                  Additional registrations for Cavaillé-Coll, Schnitger, and Silbermann organs are currently being indexed and prepared for public download.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between items-center">
                <span className="font-mono text-xs text-stone-500">In Preparation</span>
                <span className="font-mono text-xs text-stone-600">Coming Soon</span>
              </div>
            </article>
          </div>

          {/* SUBMISSION BOX */}
          <div id="submit-preset" className="bg-white/[0.02] border border-dashed border-white/[0.15] rounded-xl p-8 sm:p-12 mt-16 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-brass mb-2">Organist Community</p>
            <h3 className="text-2xl sm:text-3xl font-normal text-parchment mb-3">Submit Your Registration Presets</h3>
            <p className="max-w-[640px] mx-auto text-sm sm:text-base text-parchment-dim leading-relaxed mb-8">
              Have you developed specific combination schemes, choir accompaniments, or solo registrations for Hauptwerk sample sets? Share them here to help other organists achieve authentic voicings for their performances.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 text-left my-8">
              <div className="bg-black/20 border border-white/[0.05] p-5 rounded-lg">
                <span className="font-mono text-[#e0a96d] text-xs block mb-1.5 font-semibold">01. Prepare Details</span>
                <p className="text-xs sm:text-sm text-stone-300 m-0">Sample set name, organist name, and intended musical style/period.</p>
              </div>
              <div className="bg-black/20 border border-white/[0.05] p-5 rounded-lg">
                <span className="font-mono text-[#e0a96d] text-xs block mb-1.5 font-semibold">02. Stop Listing / File</span>
                <p className="text-xs sm:text-sm text-stone-300 m-0">Provide your combination list (text, PDF) or Hauptwerk combination export file.</p>
              </div>
              <div className="bg-black/20 border border-white/[0.05] p-5 rounded-lg">
                <span className="font-mono text-[#e0a96d] text-xs block mb-1.5 font-semibold">03. Get Listed</span>
                <p className="text-xs sm:text-sm text-stone-300 m-0">Your registration set will be published with full credit and link to your profile.</p>
              </div>
            </div>

            <a href="mailto:consolecraftapp@gmail.com?subject=Console%20Craft%20Registration%20Submission" className="font-mono text-sm font-medium px-8 py-4 rounded bg-brass text-walnut-dark hover:bg-brass-bright transition-transform hover:-translate-y-0.5 inline-block">
              Submit Registrations via Email
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-walnut-line py-8">
        <div className="max-w-[1180px] mx-auto px-8 flex justify-between flex-wrap gap-2 font-mono text-xs text-walnut-line">
          <span>Console Craft — an ODF builder for Hauptwerk by Adeboye Thompson.</span>
          <span>Not affiliated with Milan Digital Audio.</span>
        </div>
      </footer>
    </main>
  );
}