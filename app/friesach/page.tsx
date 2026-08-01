'use client';

import React, { useState } from 'react';

// --- DATA STRUCTURES ---
interface Preset {
  id: string;
  num?: number;
  name: string;
  dynamic: string;
  type: "level" | "special";
  use: string;
  notes?: string;
  stops: {
    pedal: string[];
    hauptwerk: string[];
    schwellwerk: string[];
    solowerk: string[];
  };
  couplers: string[];
  swellBox: string;
  soloBox: string;
  trem: string[];
}
const STOPS: Record<string, Array<{ label: string; pitch: string }>> = {
  pedal: [
    { label: "Untersatz", pitch: "32" },
    { label: "Contrabaß", pitch: "16" },
    { label: "Subbaß", pitch: "16" },
    { label: "Octavbaß", pitch: "8" },
    { label: "Gedackt", pitch: "8" },
    { label: "Choralbaß", pitch: "4" },
    { label: "Posaune (ext.)", pitch: "32" },
    { label: "Posaune", pitch: "16" },
    { label: "Trompete", pitch: "8" }
  ],
  hauptwerk: [
    { label: "Praestant", pitch: "16" },
    { label: "Principal", pitch: "8" },
    { label: "Holzflöte", pitch: "8" },
    { label: "Röhrflöte", pitch: "8" },
    { label: "Gambe", pitch: "8" },
    { label: "Octave", pitch: "4" },
    { label: "Spitzflöte", pitch: "4" },
    { label: "Quinte", pitch: "2 2/3" },
    { label: "Octave", pitch: "2" },
    { label: "Mixtur major", pitch: "4-5f. 2 2/3" },
    { label: "Mixtur minor", pitch: "4f. 1 1/3" },
    { label: "Trompete", pitch: "16" },
    { label: "Trompete", pitch: "8" }
  ],
  schwellwerk: [
    { label: "Bourdon", pitch: "16" },
    { label: "Principal", pitch: "8" },
    { label: "Nachthorn Gedackt", pitch: "8" },
    { label: "Corno dolce", pitch: "8" },
    { label: "Viola", pitch: "8" },
    { label: "Vox celeste", pitch: "8" },
    { label: "Geigenprincipal", pitch: "4" },
    { label: "Querflöte", pitch: "4" },
    { label: "Nazard", pitch: "2 2/3" },
    { label: "Flageolett", pitch: "2" },
    { label: "Tierce", pitch: "1 3/5" },
    { label: "Larigot", pitch: "1 1/3" },
    { label: "Plein Jeu", pitch: "4-5f. 2" },
    { label: "Scharff", pitch: "4f. 1" },
    { label: "Trompete harmonique", pitch: "8" },
    { label: "Hautbois", pitch: "8" },
    { label: "Clairon", pitch: "4" }
  ],
  solowerk: [
    { label: "Jubalflöte", pitch: "8" },
    { label: "Trichterflöte", pitch: "4" },
    { label: "Cornet a pavillon", pitch: "1-8f. 8" },
    { label: "Trompete en chamade", pitch: "8" },
    { label: "Englischhorn", pitch: "8" }
  ]
};

const PRESETS:Preset[] = [
  { id: "level_1", num: 1, name: "Mystic Strings", dynamic: "ppp", type: "level",
    use: "Ethereal prelude or silent background meditation",
    stops: { pedal: ["Subbaß 16"], hauptwerk: [], schwellwerk: ["Viola 8", "Vox celeste 8"], solowerk: [] },
    couplers: ["II / P"], swellBox: "closed", soloBox: "closed", trem: [] },

  { id: "level_2", num: 2, name: "Soft Flutes", dynamic: "pp", type: "level",
    use: "Gentle pastoral accompaniment",
    stops: { pedal: ["Subbaß 16", "Gedackt 8"], hauptwerk: ["Röhrflöte 8"], schwellwerk: ["Nachthorn Gedackt 8"], solowerk: [] },
    couplers: ["II / I", "I / P"], swellBox: "25%", soloBox: "closed", trem: [] },

  { id: "level_3", num: 3, name: "Gentle Foundation", dynamic: "p", type: "level",
    use: "Warm 8ft flue foundation across divisions",
    stops: { pedal: ["Subbaß 16", "Gedackt 8"], hauptwerk: ["Principal 8", "Holzflöte 8"], schwellwerk: ["Principal 8", "Nachthorn Gedackt 8"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "35%", soloBox: "closed", trem: [] },

  { id: "level_4", num: 4, name: "Light Chorus 8' & 4'", dynamic: "p+", type: "level",
    use: "Polyphonic vocal companion",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Octavbaß 8"], hauptwerk: ["Principal 8", "Spitzflöte 4"], schwellwerk: ["Principal 8", "Geigenprincipal 4", "Querflöte 4"], solowerk: [] },
    couplers: ["II / I", "I / P"], swellBox: "40%", soloBox: "closed", trem: [] },

  { id: "level_5", num: 5, name: "German Warmth", dynamic: "mp-", type: "level",
    use: "Classic Romantic German flue foundation",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Gedackt 8"], hauptwerk: ["Praestant 16", "Principal 8", "Gambe 8", "Octave 4"], schwellwerk: ["Bourdon 16", "Principal 8", "Viola 8", "Geigenprincipal 4"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "50%", soloBox: "closed", trem: [] },

  { id: "level_6", num: 6, name: "Principal Pleno Lite", dynamic: "mp", type: "level",
    use: "Clear Baroque counterpoint core",
    stops: { pedal: ["Contrabaß 16", "Octavbaß 8", "Choralbaß 4"], hauptwerk: ["Principal 8", "Octave 4", "Octave 2"], schwellwerk: ["Principal 8", "Geigenprincipal 4", "Flageolett 2"], solowerk: [] },
    couplers: ["II / I", "I / P"], swellBox: "60%", soloBox: "closed", trem: [] },

  { id: "level_7", num: 7, name: "Full Flue Chorus to Mixture", dynamic: "mp+", type: "level",
    use: "Bright, un-reeded plenum chorus",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Choralbaß 4"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3"], schwellwerk: ["Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "70%", soloBox: "closed", trem: [] },

  { id: "level_8", num: 8, name: "Swell Chorus Reed", dynamic: "mf-", type: "level",
    use: "Warm buildup with Swell Trompete harmonique in box",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Posaune 16"], hauptwerk: ["Principal 8", "Octave 4", "Quinte 2 2/3", "Octave 2"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Trompete harmonique 8", "Hautbois 8"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "40%", soloBox: "closed", trem: [] },

  { id: "level_9", num: 9, name: "Double Mixture Plenum", dynamic: "mf", type: "level",
    use: "Glorious congregational hymn accompaniment",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Choralbaß 4", "Posaune 16"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3", "Mixtur minor 4f. 1 1/3"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2", "Scharff 4f. 1"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "80%", soloBox: "closed", trem: [] },

  { id: "level_10", num: 10, name: "Grand Reed Chorus", dynamic: "mf+", type: "level",
    use: "Symphonic reed chorus with brilliant Swell Clairon",
    stops: { pedal: ["Untersatz 32", "Contrabaß 16", "Octavbaß 8", "Posaune 16", "Trompete 8"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2", "Trompete harmonique 8", "Clairon 4"], solowerk: [] },
    couplers: ["II / I", "III / I", "I / P", "II / P"], swellBox: "85%", soloBox: "closed", trem: [] },

  { id: "level_11", num: 11, name: "Forte Cathedral Standard", dynamic: "f", type: "level",
    use: "Main cathedral climax with Hauptwerk Trompete 16'",
    stops: { pedal: ["Untersatz 32", "Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Posaune 16", "Trompete 8"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3", "Trompete 16", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2", "Trompete harmonique 8", "Hautbois 8", "Clairon 4"], solowerk: [] },
    couplers: ["II / I", "III / I", "I / P", "II / P"], swellBox: "100%", soloBox: "closed", trem: [] },

  { id: "level_12", num: 12, name: "Solowerk Cornet Layer", dynamic: "f+", type: "level",
    use: "Cornet a pavillon crowned plenum",
    stops: { pedal: ["Untersatz 32", "Contrabaß 16", "Octavbaß 8", "Posaune (ext.) 32", "Posaune 16", "Trompete 8"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3", "Mixtur minor 4f. 1 1/3", "Trompete 16", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2", "Trompete harmonique 8", "Clairon 4"], solowerk: ["Cornet a pavillon 1-8f. 8"] },
    couplers: ["II / I", "III / I", "I / P", "II / P"], swellBox: "100%", soloBox: "100%", trem: [] },

  { id: "level_13", num: 13, name: "Chamade Entrance", dynamic: "ff", type: "level",
    use: "Full organ with Chamade drawn on Solo",
    stops: { pedal: ["Untersatz 32", "Contrabaß 16", "Octavbaß 8", "Posaune (ext.) 32", "Posaune 16", "Trompete 8"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Mixtur major 4-5f. 2 2/3", "Trompete 16", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2", "Trompete harmonique 8", "Clairon 4"], solowerk: ["Cornet a pavillon 1-8f. 8", "Trompete en chamade 8"] },
    couplers: ["II / I", "III / I", "I / P", "II / P"], swellBox: "100%", soloBox: "Unenclosed", trem: [] },

  { id: "level_14", num: 14, name: "Fortissimo Grandeur", dynamic: "fff", type: "level",
    use: "Heavy Tutti across all manuals",
    stops: { pedal: ["Untersatz 32", "Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Choralbaß 4", "Posaune (ext.) 32", "Posaune 16", "Trompete 8"], hauptwerk: ["Praestant 16", "Principal 8", "Holzflöte 8", "Gambe 8", "Octave 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3", "Mixtur minor 4f. 1 1/3", "Trompete 16", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Viola 8", "Geigenprincipal 4", "Querflöte 4", "Flageolett 2", "Plein Jeu 4-5f. 2", "Scharff 4f. 1", "Trompete harmonique 8", "Hautbois 8", "Clairon 4"], solowerk: ["Jubalflöte 8", "Trichterflöte 4", "Cornet a pavillon 1-8f. 8", "Trompete en chamade 8", "Englischhorn 8"] },
    couplers: ["II / I", "III / I", "III / II", "I / P", "II / P"], swellBox: "100%", soloBox: "100%", trem: [] },

  { id: "level_15", num: 15, name: "TUTTI (Full Friesach)", dynamic: "TUTTI", type: "level",
    use: "All 45 stops drawn & fully open",
    notes: "The maximum power of the Friesach sample set across all 4 divisions.",
    stops: {
      pedal: ["Untersatz 32", "Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Gedackt 8", "Choralbaß 4", "Posaune (ext.) 32", "Posaune 16", "Trompete 8"],
      hauptwerk: ["Praestant 16", "Principal 8", "Holzflöte 8", "Röhrflöte 8", "Gambe 8", "Octave 4", "Spitzflöte 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3", "Mixtur minor 4f. 1 1/3", "Trompete 16", "Trompete 8"],
      schwellwerk: ["Bourdon 16", "Principal 8", "Nachthorn Gedackt 8", "Corno dolce 8", "Viola 8", "Vox celeste 8", "Geigenprincipal 4", "Querflöte 4", "Nazard 2 2/3", "Flageolett 2", "Tierce 1 3/5", "Larigot 1 1/3", "Plein Jeu 4-5f. 2", "Scharff 4f. 1", "Trompete harmonique 8", "Hautbois 8", "Clairon 4"],
      solowerk: ["Jubalflöte 8", "Trichterflöte 4", "Cornet a pavillon 1-8f. 8", "Trompete en chamade 8", "Englischhorn 8"]
    },
    couplers: ["II / I", "III / I", "III / II", "I / P", "II / P"],
    swellBox: "100%", soloBox: "100%", trem: [] },

  { id: "spec_franck", name: "Franck: Grand Choeur / Prière", dynamic: "FRANCK", type: "special",
    use: "César Franck (Choral No. 3 / Piece Héroïque)",
    notes: "Anches du Récit (Trompete harm, Hautbois, Clairon) combined with Fond 8' & 16'.",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Posaune 16"], hauptwerk: ["Praestant 16", "Principal 8", "Gambe 8", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Viola 8", "Trompete harmonique 8", "Hautbois 8", "Clairon 4"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "50%", soloBox: "closed", trem: [] },

  { id: "spec_widor", name: "Widor: Toccata (Symphony V)", dynamic: "WIDOR", type: "special",
    use: "Charles-Marie Widor (Toccata in F / Bach's Memento)",
    notes: "Full Swell chorus with Trompete harmonique & Clairon open wide over HW principal core.",
    stops: { pedal: ["Untersatz 32", "Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Posaune 16", "Trompete 8"], hauptwerk: ["Praestant 16", "Principal 8", "Octave 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Flageolett 2", "Plein Jeu 4-5f. 2", "Trompete harmonique 8", "Clairon 4"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "100%", soloBox: "closed", trem: [] },

  { id: "spec_dupre", name: "Dupré: Virtuoso Neo-Classical", dynamic: "DUPRÉ", type: "special",
    use: "Marcel Dupré (Prelude & Fugue in B Major / Cortège)",
    notes: "Crisp French Symphonic clarity featuring high Scharff 4f, Mixtur minor, and Chamade accent.",
    stops: { pedal: ["Contrabaß 16", "Octavbaß 8", "Choralbaß 4", "Posaune 16"], hauptwerk: ["Principal 8", "Octave 4", "Octave 2", "Mixtur minor 4f. 1 1/3", "Trompete 8"], schwellwerk: ["Principal 8", "Geigenprincipal 4", "Flageolett 2", "Scharff 4f. 1", "Trompete harmonique 8"], solowerk: ["Trompete en chamade 8"] },
    couplers: ["II / I", "III / I", "I / P", "II / P"], swellBox: "80%", soloBox: "Unenclosed", trem: [] },

  { id: "spec_messiaen", name: "Messiaen: Mystic Color", dynamic: "MESSIAEN", type: "special",
    use: "Olivier Messiaen (Transports de joie / Les Corps Glorieux)",
    notes: "Exotic Tierce + Nazard + Larigot mutation color with Solo Cornet a pavillon.",
    stops: { pedal: ["Subbaß 16"], hauptwerk: ["Röhrflöte 8"], schwellwerk: ["Bourdon 16", "Nachthorn Gedackt 8", "Nazard 2 2/3", "Flageolett 2", "Tierce 1 3/5", "Larigot 1 1/3"], solowerk: ["Cornet a pavillon 1-8f. 8"] },
    couplers: ["III / II"], swellBox: "60%", soloBox: "100%", trem: [] },

  { id: "spec_mendelssohn", name: "Mendelssohn: German Pleno", dynamic: "MENDELSSOHN", type: "special",
    use: "Felix Mendelssohn (Sonata No. 1 Allegro / Grave)",
    notes: "Noble 19th-century German Romantic Organ Pleno core without high mixture aggression.",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Octavbaß 8", "Posaune 16"], hauptwerk: ["Praestant 16", "Principal 8", "Holzflöte 8", "Octave 4", "Spitzflöte 4", "Quinte 2 2/3", "Octave 2", "Mixtur major 4-5f. 2 2/3"], schwellwerk: ["Bourdon 16", "Principal 8", "Geigenprincipal 4", "Plein Jeu 4-5f. 2"], solowerk: [] },
    couplers: ["II / I", "I / P", "II / P"], swellBox: "75%", soloBox: "closed", trem: [] },

  { id: "spec_ritter", name: "Ritter: Romantic Gravity", dynamic: "RITTER", type: "special",
    use: "August Gottfried Ritter (Sonata No. 3 in A minor)",
    notes: "Warm 16' and 8' flue gravity with Viola and Gambe singing through soft mixtures.",
    stops: { pedal: ["Contrabaß 16", "Subbaß 16", "Gedackt 8"], hauptwerk: ["Praestant 16", "Principal 8", "Holzflöte 8", "Gambe 8", "Octave 4", "Trompete 8"], schwellwerk: ["Bourdon 16", "Principal 8", "Viola 8", "Geigenprincipal 4", "Hautbois 8"], solowerk: [] },
    couplers: ["II / I", "I / P"], swellBox: "50%", soloBox: "closed", trem: [] },

  { id: "spec_reubke", name: "Reubke: 94th Psalm (Doom)", dynamic: "REUBKE", type: "special",
    use: "Julius Reubke (Sonata on the 94th Psalm - Storm)",
    notes: "Dark 32' Untersatz and 32' Posaune extension with Vox celeste and dark 16' reeds.",
    stops: {
      pedal: ["Untersatz 32", "Contrabaß 16", "Subbaß 16", "Posaune (ext.) 32", "Posaune 16"],
      hauptwerk: ["Praestant 16", "Principal 8", "Gambe 8", "Trompete 16"],
      schwellwerk: ["Bourdon 16", "Viola 8", "Vox celeste 8", "Plein Jeu 4-5f. 2", "Trompete harmonique 8"],
      solowerk: ["Englischhorn 8", "Trompete en chamade 8"]
    },
    couplers: ["II / I", "III / I", "I / P", "II / P"], swellBox: "Snap open", soloBox: "100%", trem: ["schwellwerk"] }
];

// Helper to convert meter value string to percentage width
function getMeterWidth(value: string) {
  switch (value) {
    case "closed": return "0%";
    case "25%": return "25%";
    case "35%": return "35%";
    case "40%": return "40%";
    case "50%": return "50%";
    case "60%": return "60%";
    case "70%": return "70%";
    case "75%": return "75%";
    case "80%": return "80%";
    case "85%": return "85%";
    case "100%":
    case "Unenclosed":
    case "Snap open": return "100%";
    default: return "0%";
  }
}

// --- COMPONENT ---

export default function FriesachConsole() {
  const [selectedId, setSelectedId] = useState("level_1");

  const currentPreset = PRESETS.find(p => p.id === selectedId) || PRESETS[0];

  // Theme modifier classes
  const isReubke = selectedId === "spec_reubke";
  const isTutti = selectedId === "level_15";

  return (
    <div className={`console-wrapper ${isReubke ? 'theme-reubke' : ''} ${isTutti ? 'theme-tutti' : ''}`}>
      <div className="console">
        
        {/* Header */}
        <header className="header">
          <span className="badge">Friesach Sample Set · Hauptwerk Console</span>
          <h1>Friesach Organ Registration Console</h1>
          <p>Featuring dedicated Master Organist presets & dynamic 15-stage crescendo ladder</p>
        </header>

        {/* Crescendo Ribbon Bar */}
        <section className="ribbon-section">
          <p className="section-label">15-Stage Dynamic Crescendo Ladder</p>
          <div className="crescendo-grid">
            {PRESETS.filter(p => p.type === "level").map(p => (
              <button
                key={p.id}
                className={`piston ${selectedId === p.id ? 'active' : ''}`}
                onClick={() => setSelectedId(p.id)}
              >
                <span className="num">{p.num}</span>
                <span className="dyn">{p.dynamic}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Special Presets Bar */}
        <section className="ribbon-section">
          <p className="section-label">Master Organist & Historical Presets</p>
          <div className="specials-grid">
            {PRESETS.filter(p => p.type === "special").map(p => (
              <button
                key={p.id}
                className={`pill-btn ${p.id === 'spec_reubke' ? 'pill-reubke' : ''} ${selectedId === p.id ? 'active' : ''}`}
                onClick={() => setSelectedId(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </section>

        {/* Preset Description Card */}
        <section className="preset-info">
          <div>
            <h2>{currentPreset.name}</h2>
            <div className="use-tag">{currentPreset.use}</div>
            {currentPreset.notes && <div className="notes">{currentPreset.notes}</div>}
          </div>
          <div className="dynamic-pill">{currentPreset.dynamic}</div>
        </section>

        {/* Organ Jambs Grid (4 Columns) */}
        <section className="jambs-container">
          {(Object.keys(STOPS) as Array<keyof typeof STOPS>).map(div => {
            const activeStops = currentPreset.stops[div as keyof typeof currentPreset.stops] || [];
            const divisionStops = STOPS[div];
            const activeCount = divisionStops.filter(s => activeStops.includes(`${s.label} ${s.pitch}`)).length;

            return (
              <div key={div} className="jamb-card">
                <div className="jamb-header">
                  <span className="jamb-title">{div.charAt(0).toUpperCase() + div.slice(1)}</span>
                  <span className="jamb-count">{activeCount}/{divisionStops.length}</span>
                </div>
                <div className="stops-list">
                  {divisionStops.map(stop => {
                    const stopKey = `${stop.label} ${stop.pitch}`;
                    const isActive = activeStops.includes(stopKey);
                    return (
                      <div key={stopKey} className={`stop-item ${isActive ? 'active' : ''}`}>
                        <span className="stop-name">{stop.label}</span>
                        <span className="stop-pitch">{stop.pitch}′</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Lower Controls Panel */}
        <section className="bottom-panel">
          <div className="control-box">
            <div className="section-label">Active Couplers</div>
            <div className="couplers-tags">
              {currentPreset.couplers && currentPreset.couplers.length > 0 ? (
                currentPreset.couplers.map(c => (
                  <span key={c} className="coupler-tag">{c}</span>
                ))
              ) : (
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  No couplers drawn
                </span>
              )}
            </div>
          </div>

          <div className="control-box">
            <div className="section-label">Expression & Controls</div>
            <div className="shoes-row">
              <div className="shoe-meter">
                <div className="shoe-header">
                  <span>Schwellwerk Box (II)</span>
                  <span>{currentPreset.swellBox}</span>
                </div>
                <div className="meter-bar">
                  <div className="meter-fill" style={{ width: getMeterWidth(currentPreset.swellBox) }} />
                </div>
              </div>

              <div className="shoe-meter">
                <div className="shoe-header">
                  <span>Solowerk Box (III)</span>
                  <span>{currentPreset.soloBox}</span>
                </div>
                <div className="meter-bar">
                  <div className="meter-fill" style={{ width: getMeterWidth(currentPreset.soloBox) }} />
                </div>
              </div>
            </div>

            <div className="trems-row">
              <div className={`trem-indicator ${currentPreset.trem && currentPreset.trem.includes("schwellwerk") ? 'active' : ''}`}>
                <span className="dot" /> Tremolo II
              </div>
              <div className={`trem-indicator ${currentPreset.trem && currentPreset.trem.includes("solowerk") ? 'active' : ''}`}>
                <span className="dot" /> Tremolo III
              </div>
            </div>
          </div>
        </section>

      </div>
   
      <style jsx>{`
        .console-wrapper {
          --bg-main: #070a12;
          --panel-bg: rgba(18, 24, 38, 0.78);
          --panel-border: rgba(255, 255, 255, 0.08);
          --text-primary: #f8fafc;
          --text-muted: #94a3b8;
          --accent-cyan: #38bdf8;
          --accent-gold: #f59e0b;
          --accent-ruby: #f43f5e;
          --accent-emerald: #10b981;
          --glow-color: rgba(56, 189, 248, 0.35);
          --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', monospace;

          margin: 0;
          padding: 24px 16px 48px;
          background-color: var(--bg-main);
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.6) 0%, transparent 75%),
            radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.9) 0%, transparent 50%);
          color: var(--text-primary);
          font-family: var(--font-sans);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
        }

        .console-wrapper.theme-reubke {
          --glow-color: rgba(244, 63, 94, 0.55);
          --accent-cyan: #f43f5e;
        }

        .console-wrapper.theme-tutti {
          --glow-color: rgba(245, 158, 11, 0.6);
          --accent-cyan: #f59e0b;
        }

        *, *:before, *:after { box-sizing: border-box; }

        .console {
          max-width: 1380px;
          margin: 0 auto;
          background: var(--panel-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--panel-border);
          border-radius: 20px;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.6),
            0 0 45px var(--glow-color);
          overflow: hidden;
          transition: box-shadow 0.4s ease;
        }

        /* Header */
        .header {
          padding: 32px 24px 20px;
          text-align: center;
          border-bottom: 1px solid var(--panel-border);
          background: linear-gradient(180deg, rgba(255,255,255,0.03), transparent);
        }

        .header .badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 12px;
        }

        .header h1 {
          margin: 0;
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .header p {
          margin: 8px 0 0;
          color: var(--text-muted);
          font-size: 14px;
        }

        /* Crescendo Ribbon Bar */
        .ribbon-section {
          padding: 20px 24px;
          border-bottom: 1px solid var(--panel-border);
          background: rgba(0, 0, 0, 0.25);
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 12px;
        }

        .crescendo-grid {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: thin;
        }

        .piston {
          flex: 0 0 auto;
          width: 62px;
          height: 62px;
          border-radius: 14px;
          border: 1px solid var(--panel-border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .piston .num {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
        }

        .piston .dyn {
          font-size: 9px;
          font-family: var(--font-mono);
          color: var(--text-muted);
          margin-top: 2px;
        }

        .piston:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .piston.active {
          background: var(--accent-cyan);
          border-color: var(--accent-cyan);
          color: #000;
          box-shadow: 0 0 20px var(--accent-cyan);
        }

        .piston.active .dyn { color: rgba(0, 0, 0, 0.8); }

        /* Special Presets Bar */
        .specials-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill-btn {
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid var(--panel-border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pill-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .pill-btn.active {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
          color: #000;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
        }

        .pill-btn.pill-reubke.active {
          background: var(--accent-ruby);
          border-color: var(--accent-ruby);
          color: #fff;
          box-shadow: 0 0 18px rgba(244, 63, 94, 0.6);
        }

        /* Preset Description Card */
        .preset-info {
          padding: 24px;
          border-bottom: 1px solid var(--panel-border);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 16px;
          align-items: center;
          background: rgba(255, 255, 255, 0.015);
        }

        .preset-info h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
        }

        .preset-info .use-tag {
          color: var(--text-muted);
          font-size: 14px;
          margin-top: 4px;
        }

        .preset-info .notes {
          font-size: 13px;
          color: var(--accent-gold);
          margin-top: 8px;
          font-style: italic;
        }

        .dynamic-pill {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--panel-border);
          color: var(--accent-cyan);
          text-align: center;
        }

        /* Organ Jambs Grid (4 Columns) */
        .jambs-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 24px;
        }

        .jamb-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--panel-border);
          border-radius: 14px;
          padding: 14px;
          display: flex;
          flex-direction: column;
        }

        .jamb-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--panel-border);
        }

        .jamb-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-cyan);
        }

        .jamb-count {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
        }

        .stops-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .stop-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .stop-item .stop-name {
          font-size: 11.5px;
          font-weight: 500;
          color: var(--text-muted);
        }

        .stop-item .stop-pitch {
          font-family: var(--font-mono);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.3);
          margin-left: 6px;
        }

        .stop-item.active {
          background: rgba(56, 189, 248, 0.09);
          border-color: rgba(56, 189, 248, 0.35);
        }

        .stop-item.active .stop-name {
          color: var(--text-primary);
          font-weight: 600;
        }

        .stop-item.active .stop-pitch {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        /* Lower Controls Panel */
        .bottom-panel {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 16px;
          padding: 0 24px 24px;
        }

        .control-box {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--panel-border);
          border-radius: 14px;
          padding: 16px;
        }

        .couplers-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }

        .coupler-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--panel-border);
          color: var(--text-primary);
        }

        .shoes-row {
          display: flex;
          gap: 24px;
          margin-top: 12px;
        }

        .shoe-meter {
          flex: 1;
        }

        .shoe-header {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-family: var(--font-mono);
          margin-bottom: 6px;
          color: var(--text-muted);
        }

        .meter-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .meter-fill {
          height: 100%;
          width: 0%;
          background: var(--accent-cyan);
          transition: width 0.3s ease;
        }

        .trems-row {
          display: flex;
          gap: 16px;
          margin-top: 14px;
        }

        .trem-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .trem-indicator.active { color: var(--accent-emerald); }
        .trem-indicator.active .dot {
          background: var(--accent-emerald);
          box-shadow: 0 0 10px var(--accent-emerald);
        }

        /* Responsive Design */
        @media (max-width: 1100px) {
          .jambs-container { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .jambs-container { grid-template-columns: repeat(1, 1fr); }
          .bottom-panel { grid-template-columns: 1fr; }
          .preset-info { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}