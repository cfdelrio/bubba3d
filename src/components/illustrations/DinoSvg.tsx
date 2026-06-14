interface Props {
  className?: string;
}

export default function DinoSvg({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 200 210"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Cola */}
      <path
        d="M152 148 Q180 130 176 108 Q173 90 160 103"
        stroke="#B5E5D8"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cuerpo */}
      <ellipse cx="100" cy="148" rx="64" ry="54" fill="#B5E5D8" />
      {/* Cuello */}
      <ellipse cx="95" cy="92" rx="34" ry="30" fill="#B5E5D8" />
      {/* Cabeza */}
      <ellipse cx="98" cy="62" rx="44" ry="42" fill="#B5E5D8" />
      {/* Picos en la cabeza */}
      <polygon points="74,26 79,4 88,26" fill="#8FD5C6" />
      <polygon points="93,18 100,0 108,18" fill="#8FD5C6" />
      <polygon points="110,26 120,4 126,26" fill="#8FD5C6" />
      {/* Panza */}
      <ellipse cx="100" cy="156" rx="38" ry="32" fill="#CAEEE5" />
      {/* Ojo blanco izq */}
      <circle cx="80" cy="54" r="14" fill="white" />
      {/* Ojo blanco der */}
      <circle cx="116" cy="54" r="14" fill="white" />
      {/* Pupila izq */}
      <circle cx="83" cy="54" r="7.5" fill="#2D3748" />
      {/* Pupila der */}
      <circle cx="119" cy="54" r="7.5" fill="#2D3748" />
      {/* Brillito izq */}
      <circle cx="87" cy="50" r="3" fill="white" />
      {/* Brillito der */}
      <circle cx="123" cy="50" r="3" fill="white" />
      {/* Cachetes */}
      <circle cx="62" cy="68" r="10" fill="#F5C5C8" opacity="0.6" />
      <circle cx="130" cy="68" r="10" fill="#F5C5C8" opacity="0.6" />
      {/* Sonrisa */}
      <path
        d="M78 75 Q98 90 120 75"
        stroke="#2D3748"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Brazo izq */}
      <ellipse cx="44" cy="136" rx="15" ry="10" fill="#9ECFC4" transform="rotate(-25 44 136)" />
      {/* Brazo der */}
      <ellipse cx="156" cy="136" rx="15" ry="10" fill="#9ECFC4" transform="rotate(25 156 136)" />
      {/* Pata izq */}
      <ellipse cx="72" cy="194" rx="16" ry="10" fill="#9ECFC4" />
      {/* Pata der */}
      <ellipse cx="128" cy="194" rx="16" ry="10" fill="#9ECFC4" />
    </svg>
  );
}
