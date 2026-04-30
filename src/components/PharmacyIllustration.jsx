/**
 * Ilustración tipo escena de farmacia: fachada, estantería, medicamentos y caduceo.
 * Pensada para verse bien sobre fondo claro u oscuro (tarjeta del Hero).
 */
export function PharmacyIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="pharmHeroSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="55%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#eff6ff" />
        </linearGradient>
        <linearGradient id="pharmHeroFacade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="pharmHeroShelf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="pharmHeroCross" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <filter id="pharmHeroSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect width="520" height="380" rx="20" fill="url(#pharmHeroSky)" />

      {/* Marca de agua: cruz médica suave */}
      <path
        d="M420 48h24v24h24v28h-24v24h-28V100h-24V72h24V48h28z"
        fill="#1e3a8a"
        opacity="0.06"
      />

      {/* Suelo */}
      <ellipse cx="260" cy="342" rx="210" ry="22" fill="#1e3a8a" opacity="0.09" />

      {/* Estantería lateral — frascos */}
      <g opacity="0.95">
        <rect x="48" y="118" width="72" height="168" rx="10" fill="url(#pharmHeroShelf)" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="58" y="128" width="22" height="38" rx="5" fill="#93c5fd" opacity="0.85" />
        <rect x="86" y="128" width="22" height="38" rx="5" fill="#fca5a5" opacity="0.85" />
        <rect x="58" y="174" width="22" height="42" rx="5" fill="#86efac" opacity="0.75" />
        <rect x="86" y="174" width="22" height="42" rx="5" fill="#fcd34d" opacity="0.85" />
        <rect x="58" y="224" width="22" height="36" rx="5" fill="#c4b5fd" opacity="0.8" />
        <rect x="86" y="224" width="22" height="36" rx="5" fill="#fda4af" opacity="0.85" />
        <text x="84" y="112" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
          MEDICINAS
        </text>
      </g>

      {/* Edificio principal */}
      <rect x="148" y="132" width="260" height="178" rx="18" fill="white" stroke="#1e3a8a" strokeWidth="3" />
      <rect x="162" y="146" width="232" height="52" rx="10" fill="url(#pharmHeroFacade)" />
      <text
        x="278"
        y="182"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontFamily="system-ui,sans-serif"
        fontWeight="800"
        letterSpacing="0.06em"
      >
        FARMACIA MAIRENI
      </text>

      {/* Ventana / mostrador */}
      <rect x="178" y="212" width="200" height="72" rx="12" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="192" y="224" width="52" height="48" rx="8" fill="#dbeafe" stroke="#93c5fd" />
      <rect x="252" y="224" width="52" height="48" rx="8" fill="#dbeafe" stroke="#93c5fd" />
      <rect x="312" y="224" width="52" height="48" rx="8" fill="#fee2e2" stroke="#fca5a5" />

      {/* Cápsulas decorativas en mostrador */}
      <ellipse cx="218" cy="248" rx="14" ry="7" fill="#ef4444" opacity="0.9" />
      <ellipse cx="286" cy="246" rx="14" ry="7" fill="#3b82f6" opacity="0.85" />
      <ellipse cx="338" cy="250" rx="12" ry="6" fill="#eab308" opacity="0.85" />

      {/* Símbolo RX */}
      <text x="278" y="268" textAnchor="middle" fill="#64748b" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="600">
        Rx
      </text>

      {/* Cruz médica destacada */}
      <g filter="url(#pharmHeroSoft)">
        <circle cx="278" cy="72" r="44" fill="white" stroke="url(#pharmHeroCross)" strokeWidth="4" />
        <path
          d="M278 46v52M254 72h48"
          stroke="#dc2626"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* Blister — pastillas */}
      <g opacity="0.92">
        <rect x="388" y="210" width="88" height="56" rx="10" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="408" cy="228" r="7" fill="#22c55e" opacity="0.85" />
        <circle cx="432" cy="228" r="7" fill="#22c55e" opacity="0.85" />
        <circle cx="456" cy="228" r="7" fill="#22c55e" opacity="0.85" />
        <circle cx="408" cy="250" r="7" fill="#22c55e" opacity="0.85" />
        <circle cx="432" cy="250" r="7" fill="#22c55e" opacity="0.85" />
        <circle cx="456" cy="250" r="7" fill="#22c55e" opacity="0.85" />
      </g>

      {/* Caduceo simplificado (confianza sanitaria) */}
      <g opacity="0.35" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round">
        <path d="M104 72c12 18 12 38 0 56M104 72c-12 18-12 38 0 56" />
        <circle cx="104" cy="72" r="5" fill="#1e3a8a" />
      </g>

      {/* Píldoras sueltas */}
      <ellipse cx="152" cy="312" rx="18" ry="9" fill="#3b82f6" opacity="0.35" />
      <ellipse cx="382" cy="318" rx="16" ry="8" fill="#dc2626" opacity="0.35" />
    </svg>
  )
}
