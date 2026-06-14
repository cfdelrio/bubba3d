interface Props {
  className?: string;
}

export default function CarSvg({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 220 160"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Sombra */}
      <ellipse cx="110" cy="154" rx="94" ry="8" fill="#D4C5E2" opacity="0.35" />
      {/* Carrocería delantera (cabina) */}
      <rect x="14" y="82" width="98" height="52" rx="14" fill="#B8DCF0" />
      {/* Techo de la cabina */}
      <path d="M28 82 Q36 52 70 48 Q100 46 108 62 L112 82 Z" fill="#B8DCF0" />
      {/* Parabrisas */}
      <path d="M34 80 Q40 58 70 54 Q98 52 106 64 L108 80 Z" fill="#D8EEFA" opacity="0.85" />
      {/* Ventana lateral */}
      <rect x="22" y="62" width="28" height="18" rx="5" fill="#D8EEFA" opacity="0.75" />
      {/* Caja de carga */}
      <rect x="100" y="70" width="108" height="64" rx="10" fill="#90BCE0" />
      {/* Línea decorativa en la caja */}
      <rect x="100" y="82" width="108" height="3" rx="1.5" fill="#7AAECE" opacity="0.4" />
      {/* Rueda izq */}
      <circle cx="58" cy="136" r="24" fill="#4A5568" />
      <circle cx="58" cy="136" r="14" fill="#718096" />
      <circle cx="58" cy="136" r="5" fill="#CBD5E0" />
      {/* Rueda der */}
      <circle cx="163" cy="136" r="24" fill="#4A5568" />
      <circle cx="163" cy="136" r="14" fill="#718096" />
      <circle cx="163" cy="136" r="5" fill="#CBD5E0" />
      {/* Faro delantero */}
      <circle cx="16" cy="108" r="11" fill="#F5E6A3" />
      <circle cx="16" cy="108" r="7" fill="white" opacity="0.65" />
      {/* Estrella decorativa en la caja */}
      <text x="128" y="116" fontSize="28" fill="#F5E6A3" fontFamily="sans-serif">★</text>
    </svg>
  );
}
