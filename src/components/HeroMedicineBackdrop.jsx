/**
 * Decoración de fondo: pastillas, cápsulas y comprimidos (solo SVG, sin animación).
 */
export function HeroMedicineBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
      <svg
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.42] dark:opacity-[0.14]"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="capBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="capRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="capMint" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="capAmber" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Cápsulas (elipses rotadas) */}
        <ellipse cx="120" cy="140" rx="52" ry="16" fill="url(#capBlue)" transform="rotate(-18 120 140)" />
        <ellipse cx="420" cy="720" rx="48" ry="15" fill="url(#capRed)" transform="rotate(32 420 720)" />
        <ellipse cx="980" cy="120" rx="44" ry="14" fill="url(#capMint)" transform="rotate(12 980 120)" />
        <ellipse cx="1380" cy="380" rx="56" ry="17" fill="url(#capBlue)" transform="rotate(-25 1380 380)" />
        <ellipse cx="200" cy="620" rx="40" ry="13" fill="url(#capAmber)" transform="rotate(48 200 620)" />
        <ellipse cx="750" cy="800" rx="50" ry="15" fill="url(#capRed)" transform="rotate(-8 750 800)" />
        <ellipse cx="1100" cy="520" rx="42" ry="14" fill="url(#capMint)" transform="rotate(55 1100 520)" />
        <ellipse cx="1450" cy="180" rx="38" ry="12" fill="url(#capAmber)" transform="rotate(-42 1450 180)" />
        <ellipse cx="320" cy="260" rx="46" ry="14" fill="url(#capBlue)" transform="rotate(22 320 260)" />
        <ellipse cx="620" cy="90" rx="36" ry="11" fill="url(#capRed)" transform="rotate(-55 620 90)" />

        {/* Comprimidos redondos */}
        <circle cx="260" cy="480" r="18" fill="#93c5fd" fillOpacity="0.4" />
        <circle cx="540" cy="340" r="14" fill="#f87171" fillOpacity="0.38" />
        <circle cx="880" cy="680" r="16" fill="#fde047" fillOpacity="0.42" />
        <circle cx="1240" cy="560" r="12" fill="#a78bfa" fillOpacity="0.35" />
        <circle cx="1520" cy="640" r="20" fill="#67e8f9" fillOpacity="0.32" />
        <circle cx="90" cy="780" r="15" fill="#fda4af" fillOpacity="0.38" />
        <circle cx="700" cy="200" r="13" fill="#86efac" fillOpacity="0.36" />
        <circle cx="1320" cy="780" r="17" fill="#93c5fd" fillOpacity="0.34" />

        {/* Blisters simplificados (rectángulos con puntos) */}
        <g opacity="0.5">
          <rect x="1040" y="380" width="100" height="64" rx="10" fill="#fef9c3" fillOpacity="0.35" stroke="#eab308" strokeOpacity="0.35" strokeWidth="2" />
          <circle cx="1062" cy="402" r="8" fill="#22c55e" fillOpacity="0.45" />
          <circle cx="1088" cy="402" r="8" fill="#22c55e" fillOpacity="0.45" />
          <circle cx="1114" cy="402" r="8" fill="#22c55e" fillOpacity="0.45" />
          <circle cx="1062" cy="426" r="8" fill="#22c55e" fillOpacity="0.45" />
          <circle cx="1088" cy="426" r="8" fill="#22c55e" fillOpacity="0.45" />
          <circle cx="1114" cy="426" r="8" fill="#22c55e" fillOpacity="0.45" />
        </g>

        <g opacity="0.45">
          <rect x="180" y="80" width="88" height="56" rx="8" fill="#e0f2fe" fillOpacity="0.5" stroke="#38bdf8" strokeOpacity="0.35" strokeWidth="2" />
          <circle cx="202" cy="100" r="7" fill="#3b82f6" fillOpacity="0.5" />
          <circle cx="224" cy="100" r="7" fill="#3b82f6" fillOpacity="0.5" />
          <circle cx="246" cy="100" r="7" fill="#3b82f6" fillOpacity="0.5" />
          <circle cx="202" cy="118" r="7" fill="#3b82f6" fillOpacity="0.5" />
          <circle cx="224" cy="118" r="7" fill="#3b82f6" fillOpacity="0.5" />
          <circle cx="246" cy="118" r="7" fill="#3b82f6" fillOpacity="0.5" />
        </g>

        {/* Cápsulas extra esquinas */}
        <ellipse cx="1520" cy="820" rx="70" ry="20" fill="url(#capBlue)" transform="rotate(15 1520 820)" opacity="0.85" />
        <ellipse cx="80" cy="360" rx="55" ry="17" fill="url(#capRed)" transform="rotate(-35 80 360)" opacity="0.8" />
      </svg>
    </div>
  )
}
