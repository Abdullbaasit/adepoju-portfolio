export function ReactIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <g fill="none" stroke="#61DAFB" strokeWidth="2.4">
        <ellipse cx="20" cy="20" rx="16" ry="6.4" />
        <ellipse cx="20" cy="20" rx="16" ry="6.4" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6.4" transform="rotate(120 20 20)" />
      </g>
      <circle cx="20" cy="20" r="3.2" fill="#61DAFB" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <rect width="40" height="40" rx="7" fill="#3178C6" />
      <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#fff" textAnchor="middle">
        TS
      </text>
    </svg>
  );
}

export function NextIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <circle cx="20" cy="20" r="20" fill="#000" />
      <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#fff" textAnchor="middle">
        N
      </text>
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <rect width="40" height="40" rx="7" fill="#0B1120" />
      <path
        fill="#38BDF8"
        d="M9 16c1-3.6 3.1-5.4 6.7-5.4 4.5 0 5 3.4 7.3 3.9-1-3.6-3.1-5.4-6.7-5.4-4.5 0-5 3.4-7.3 3.9zM9 24c1-3.6 3.1-5.4 6.7-5.4 4.5 0 5 3.4 7.3 3.9-1-3.6-3.1-5.4-6.7-5.4-4.5 0-5 3.4-7.3 3.9z"
      />
    </svg>
  );
}

export function AxiosIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <rect width="40" height="40" rx="9" fill="#5A29E4" />
      <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#fff" textAnchor="middle">
        A
      </text>
    </svg>
  );
}

export function CSSIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <rect width="40" height="40" rx="7" fill="#1572B6" />
      <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11.5" fill="#fff" textAnchor="middle">
        CSS3
      </text>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <rect width="40" height="40" rx="7" fill="#F7DF1E" />
      <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" fill="#000" textAnchor="middle">
        JS
      </text>
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <rect width="40" height="40" rx="7" fill="#181717" />
      <text x="20" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#fff" textAnchor="middle">
        GIT
      </text>
    </svg>
  );
}

export function SunIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function MenuIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
