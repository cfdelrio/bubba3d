interface Props {
  className?: string;
}

export default function TorreSvg({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 180 210"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Palo central */}
      <rect x="80" y="22" width="20" height="152" rx="10" fill="#D4B896" />
      {/* Tope */}
      <circle cx="90" cy="28" r="26" fill="#F5E6A3" />
      <circle cx="83" cy="20" r="8" fill="white" opacity="0.45" />
      {/* Anillo 5 - rosa (más grande, abajo) */}
      <rect x="8" y="160" width="164" height="26" rx="13" fill="#F5C5C8" />
      {/* Anillo 4 - manteca */}
      <rect x="22" y="128" width="136" height="24" rx="12" fill="#F5E6A3" />
      {/* Anillo 3 - menta */}
      <rect x="36" y="98" width="108" height="22" rx="11" fill="#B5E5D8" />
      {/* Anillo 2 - lila */}
      <rect x="50" y="70" width="80" height="20" rx="10" fill="#C5B4E3" />
      {/* Anillo 1 - celeste (más pequeño, arriba) */}
      <rect x="62" y="46" width="56" height="18" rx="9" fill="#B8DCF0" />
      {/* Base */}
      <rect x="4" y="184" width="172" height="20" rx="10" fill="#D4B896" />
    </svg>
  );
}
