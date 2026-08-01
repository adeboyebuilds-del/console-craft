export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-walnut-dark text-parchment overflow-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-1 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true"></div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#18120d]/90 backdrop-blur-md border-b border-walnut-line">
        <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3 font-mono text-sm font-semibold tracking-wide text-parchment no-underline">
            <img src="/images/applogo.png" alt="Console Craft Logo" className="w-7 h-7 object-contain" />
            Console&nbsp;Craft
          </a>
          <nav className="hidden sm:flex items-center gap-7 font-mono text-xs tracking-wider">
            <a href="/registrations" className="text-parchment-dim hover:text-brass-bright transition-colors">Registrations</a>
            <a href="#features" className="text-parchment-dim hover:text-brass-bright transition-colors">Features</a>
            <a href="#validate" className="text-parchment-dim hover:text-brass-bright transition-colors">Validation</a>
            <a href="#about" className="text-parchment-dim hover:text-brass-bright transition-colors">About</a>
            <a className="px-4 py-2 border border-brass rounded text-brass-bright hover:bg-brass hover:text-walnut-dark transition-all" href="#get-it">Get it</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-block mb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-brass m-0">Desktop Application · Installer &amp; Portable Versions</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-normal leading-[1.12] tracking-tight text-parchment">
              Architect Hauptwerk organs<br /> without hand-coding XML.
            </h1>
            <p className="font-sans text-base sm:text-lg text-parchment-dim max-w-[46ch] my-6">
              Console Craft is an advanced WYSIWYG visual editor engineered for Hauptwerk's Custom Organ Design Module (CODM) architecture. 
              Map divisions, stops, and couplers effortlessly on an interactive canvas matching true console pixel geometry, 
              utilize pre-verified reference ranges, and export production-ready ODF files instantly.
            </p>
            <div className="flex flex-wrap gap-4 mb-5">
              <a href="#get-it" className="font-mono text-sm font-medium px-6 py-3.5 rounded bg-brass text-walnut-dark hover:bg-brass-bright transition-transform hover:-translate-y-0.5">Download Console Craft</a>
              <a href="#features" className="font-mono text-sm font-medium px-6 py-3.5 rounded border border-walnut-line text-parchment hover:border-brass hover:text-brass-bright transition-colors">Explore capabilities</a>
            </div>
            <p className="font-mono text-xs text-walnut-line max-w-[42ch] leading-relaxed">StopCode ranges strictly adhere to standard Hauptwerk specifications — Great, Swell, Pedal, Choir, Solo, Echo, and Antiphonal fully integrated.</p>
          </div>

          <div className="relative">
            <div className="relative rounded-lg p-2.5 bg-gradient-to-br from-walnut-panel-2 to-walnut-panel border border-walnut-line shadow-2xl">
              <div className="absolute -top-8 left-1/5 w-3/5 h-20 bg-brass/20 blur-xl pointer-events-none"></div>
              <img src="/images/hauptwerk-console.webp" alt="Console Craft canvas editor" className="w-full h-auto max-h-[420px] object-cover rounded shadow-inner block" loading="eager" />
            </div>
            <div className="font-mono text-xs text-walnut-line text-center mt-3 tracking-wide">Console Craft — WYSIWYG canvas mapped to exact pixel geometry</div>
          </div>
        </div>
      </section>

      {/* STOP RAIL DIVIDER */}
      <div className="relative py-8 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full stroke-walnut-line stroke-[1]" viewBox="0 0 1400 90" preserveAspectRatio="xMidYMid meet">
          <line x1="0" y1="18" x2="1400" y2="18" />
          <line x1="0" y1="72" x2="1400" y2="72" />
        </svg>
        <div className="relative max-w-[1180px] mx-auto px-8 flex justify-between flex-wrap gap-4">
          {['Open Diapason', 'Great to Pedal', 'Swell to Great', 'Choir to Great', 'Solo to Swell', 'Echo Unison Off', 'Antiphonal Sub', 'Tremulant'].map((name, i) => (
            <div key={name} className="flex flex-col items-center gap-2 flex-1 min-w-[90px]">
              <div className={`w-7 h-7 rounded-full border border-walnut-line shadow-md ${i === 7 ? 'bg-[radial-gradient(circle_at_35%_30%,#d7e6d8,var(--color-sage)_70%,#4c6b50_100%)]' : 'bg-[radial-gradient(circle_at_35%_30%,var(--color-parchment),var(--color-brass)_70%,#7d5f38_100%)]'}`}></div>
              <span className="font-mono text-[10px] text-center text-parchment-dim tracking-wide max-w-[90px]">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* THE CHALLENGE */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3.5">The Engineering Challenge</p>
          <h2 className="text-2xl sm:text-3xl font-normal max-w-[780px] mb-10 text-parchment">Traditional ODF authoring demands exhaustive manual precision.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-walnut-panel border border-walnut-line rounded-lg p-7">
              <span className="inline-block font-mono text-xs text-brass-bright border border-walnut-line rounded px-2.5 py-1 mb-4">2201</span>
              <p className="text-sm sm:text-base text-parchment-dim m-0">StopCode parameters are division-critical. Minor errors in pitch or octave designation cause severe transposition issues upon loading.</p>
            </div>
            <div className="bg-walnut-panel border border-walnut-line rounded-lg p-7">
              <span className="inline-block font-mono text-xs text-brass-bright border border-walnut-line rounded px-2.5 py-1 mb-4">1611</span>
              <p className="text-sm sm:text-base text-parchment-dim m-0">Complex coupler configurations require managing intricate numeric codes, resulting in constant reference manual lookups.</p>
            </div>
            <div className="bg-walnut-panel border border-walnut-line rounded-lg p-7">
              <span className="inline-block font-mono text-xs text-brass-bright border border-walnut-line rounded px-2.5 py-1 mb-4">x, y</span>
              <p className="text-sm sm:text-base text-parchment-dim m-0">Pixel-exact console positioning requires tedious manual coordinate computation and layout adjustments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-12 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3.5">Core Functionality</p>
          <h2 className="text-2xl sm:text-3xl font-normal max-w-[780px] mb-12 text-parchment">Streamlined ODF development designed for organ builders.</h2>

          {/* Feature Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-12 border-t border-walnut-line">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-3.5">Divisions &amp; Stops</span>
              <h3 className="text-xl sm:text-2xl font-medium mb-3.5 text-parchment">Automated StopCode logic for Great, Swell, Pedal, Choir, Solo, Echo, and Antiphonal.</h3>
              <p className="text-sm sm:text-base text-parchment-dim">Select your division and let Console Craft auto-assign accurate base ranges. Configure ranks using standard harmonic lists or custom inputs, ensuring flawless transposition mathematics across every pipe rank.</p>
            </div>
            <div>
              <img src="/images/stop-properties.webp" alt="Stop properties configuration panel" className="w-full h-auto max-h-[360px] object-cover rounded-md border border-walnut-line shadow-xl block" loading="lazy" />
            </div>
          </div>

          {/* Feature Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-12 border-t border-walnut-line">
            <div className="order-2 lg:order-1 flex flex-col gap-3.5">
              <img src="/images/coupler-picker.webp" alt="Coupler selection interface" className="w-full h-auto max-h-[220px] object-cover rounded-md border border-walnut-line shadow-xl block" loading="lazy" />
              <div className="grid grid-cols-2 gap-3.5">
                <img src="/images/coupler-grouped-great.webp" alt="Grouped Great couplers" className="w-full h-auto max-h-[160px] object-cover rounded-md border border-walnut-line shadow-md block" loading="lazy" />
                <img src="/images/coupler-grouped-echo.webp" alt="Grouped Echo couplers" className="w-full h-auto max-h-[160px] object-cover rounded-md border border-walnut-line shadow-md block" loading="lazy" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-3.5">Advanced Couplers</span>
              <h3 className="text-xl sm:text-2xl font-medium mb-3.5 text-parchment">Structured coupler management via intuitive categorized selections.</h3>
              <p className="text-sm sm:text-base text-parchment-dim">Browse couplers grouped logically by division—such as Great, Swell, Unison Off, and Octave variants—eliminating numerical guesswork and streamlining console architecture.</p>
            </div>
          </div>

          {/* Feature Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-12 border-t border-walnut-line">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-3.5">WYSIWYG Canvas</span>
              <h3 className="text-xl sm:text-2xl font-medium mb-3.5 text-parchment">Precise visual positioning mirroring native Hauptwerk constraints.</h3>
              <p className="text-sm sm:text-base text-parchment-dim">Position drawknobs, pistons, and rows intuitively with direct drag-and-drop mechanics. Handle multi-page elements effortlessly with clear indicator markers.</p>
            </div>
            <div>
              <img src="/images/canvas-swell.webp" alt="Canvas swell division layout view" className="w-full h-auto max-h-[360px] object-cover rounded-md border border-walnut-line shadow-xl block" loading="lazy" />
            </div>
          </div>

          {/* Feature Row 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-12 border-t border-walnut-line">
            <div className="order-2 lg:order-1">
              <img src="/images/enclosure-samples.webp" alt="Enclosure and sample mapping panel" className="w-full h-auto max-h-[360px] object-cover rounded-md border border-walnut-line shadow-xl block" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-3.5">Enclosures &amp; Samples</span>
              <h3 className="text-xl sm:text-2xl font-medium mb-3.5 text-parchment">Integrated management of acoustic environments and sample mappings.</h3>
              <p className="text-sm sm:text-base text-parchment-dim">Configure swell box filter models, tremulant behaviors, and link main, short-release, and medium-release sample paths directly to their respective pipe ranks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section id="validate" className="py-12 lg:py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center bg-walnut-panel border border-walnut-line rounded-2xl p-8 sm:p-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3.5">Preflight Diagnostics</p>
              <h2 className="text-2xl sm:text-3xl font-normal mb-5 text-parchment">Proactive project verification before compilation.</h2>
              <p className="text-sm sm:text-base text-parchment-dim mb-6">Console Craft's built-in validation engine intercepts common structural errors—including duplicate identifiers, unassigned sample directories, and invalid MIDI mappings—preventing silent load failures inside Hauptwerk.</p>
              <ul className="flex flex-col gap-3 p-0 m-0 list-none text-sm text-parchment-dim">
                <li className="flex items-baseline gap-2.5"><span className="font-mono text-[10.5px] uppercase tracking-wider px-2 py-0.5 rounded bg-brick/15 text-brick shrink-0">Blocker</span> Duplicate rank designations detected.</li>
                <li className="flex items-baseline gap-2.5"><span className="font-mono text-[10.5px] uppercase tracking-wider px-2 py-0.5 rounded bg-brass/15 text-brass-bright shrink-0">Warning</span> Unassigned sample directory pointers.</li>
                <li className="flex items-baseline gap-2.5"><span className="font-mono text-[10.5px] uppercase tracking-wider px-2 py-0.5 rounded bg-sage/15 text-sage shrink-0">Pass</span> All MIDI ranges and parameters verified successfully.</li>
              </ul>
            </div>
            <div>
              <img src="/images/validate-project.webp" alt="Project validation diagnostics screen" className="w-full h-auto max-h-[340px] object-cover rounded-md border border-walnut-line shadow-xl block" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CATHEDRAL BREAK */}
      <section className="relative h-[50vh] min-h-[380px] max-h-[600px] bg-[url('/images/cathedral-organ.webp')] bg-cover bg-[center_30%] bg-fixed flex items-end overflow-hidden border-t border-b border-walnut-line">
        <div className="absolute inset-0 bg-gradient-to-b from-walnut-dark/15 via-walnut-dark/55 to-walnut-dark/95"></div>
        <div className="relative z-10 max-w-[1180px] mx-auto px-8 pb-14 w-full">
          <p className="font-mono text-xs uppercase tracking-widest text-brass-bright mb-2">The Ultimate Objective</p>
          <p className="font-serif italic font-light text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-[30ch] text-parchment m-0">Precision engineering dedicated to authentic acoustic realization.</p>
        </div>
      </section>

      {/* ABOUT THE DEVELOPER */}
      <section id="about" className="py-16 lg:py-24 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3.5">About the Creator</p>
          <h2 className="text-2xl sm:text-3xl font-normal max-w-[780px] mx-auto mb-10 text-parchment">Engineered with passion for music and technical precision.</h2>
          
          <div className="max-w-[900px] mx-auto mb-10 p-6 bg-walnut-panel border border-walnut-line rounded-lg flex flex-col sm:flex-row items-center gap-5 text-left">
            <img src="/images/applogo.png" alt="Console Craft Logo" className="w-12 h-12 object-contain shrink-0" />
            <span className="text-sm text-parchment-dim"><strong>Console Craft Application Identity:</strong> Built on a precise proportional coordinate engine that maps high-accuracy pixel geometries directly to Hauptwerk CODM specifications.</span>
          </div>

          <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center bg-walnut-panel border border-walnut-line rounded-xl p-8 text-left">
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-lg overflow-hidden border border-walnut-line shrink-0">
              <img src="/images/profile.png" alt="Adeboye Thompson" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-parchment-dim m-0">
                Console Craft is developed by <strong className="text-parchment">Adeboye Thompson</strong>, a software developer, organist, and organ enthusiast based in Lagos, Nigeria. 
                With an academic background in Cellular and Molecular Biology from the University of Texas at Austin (2005), his technical journey is driven by a deep fascination with electronics, advanced programming, precision woodwork, sound processing, and structural design. Console Craft bridges his professional software expertise with his lifelong dedication to pipe organ artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GET IT */}
      <section id="get-it" className="py-16 lg:py-24 text-center">
        <div className="max-w-[640px] mx-auto px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3.5">Deployment &amp; Distribution</p>
          <h2 className="text-2xl sm:text-3xl font-normal mb-6 text-parchment">Download Console Craft for your workflow.</h2>
          <p className="text-sm sm:text-base text-parchment-dim mb-8">
            Choose between the standard installation package or the standalone portable build depending on your setup preferences. Both versions include full application capabilities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-4">
            <a href="https://consolecraftapp.gumroad.com/l/ilamlo" target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-medium px-7 py-4 rounded bg-brass text-walnut-dark hover:bg-brass-bright transition-transform hover:-translate-y-0.5">Download Installer (.exe)</a>
            <a href="https://consolecraftapp.gumroad.com/l/ilamlo" target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-medium px-7 py-4 rounded border border-walnut-line text-parchment hover:border-brass hover:text-brass-bright transition-colors">Download Portable Version</a>
          </div>
          <p className="font-mono text-xs text-walnut-line">Available for Windows</p>

          <div className="mt-12 pt-8 border-t border-walnut-line/40">
            <h3 className="text-lg font-medium mb-3 text-parchment">Free Starter Assets</h3>
            <p className="text-sm text-parchment-dim mb-6">
              Need custom graphics for your console layout? We have provided a free starter directory containing various background images, custom Willis-style nameplates, and drawknobs you can use to get started creating your own sample sets.
            </p>
            <a href="https://adeboyebuilds-del.github.io/website/assets" target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-medium px-5 py-2.5 rounded border border-walnut-line text-parchment hover:border-brass hover:text-brass-bright transition-colors inline-block">Browse &amp; Download Assets</a>
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