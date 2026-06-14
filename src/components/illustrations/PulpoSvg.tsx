interface Props {
  className?: string;
}

export default function PulpoSvg({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 200 210"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Tentáculos (6) */}
      <path
        d="M54 132 Q32 155 38 180 Q42 194 52 188 Q62 182 56 162 Q50 142 66 134"
        fill="#C5B4E3"
      />
      <path
        d="M73 142 Q60 168 64 192 Q67 204 76 200 Q85 196 80 176 Q75 156 86 144"
        fill="#C5B4E3"
      />
      <path
        d="M92 146 Q90 174 92 200 Q93 208 100 208 Q107 208 108 200 Q110 174 108 146"
        fill="#C5B4E3"
      />
      <path
        d="M114 142 Q125 168 120 192 Q117 204 108 200 Q99 196 104 176 Q109 156 100 144"
        fill="#C5B4E3"
      />
      <path
        d="M133 132 Q155 155 148 180 Q144 194 134 188 Q124 182 130 162 Q136 142 118 134"
        fill="#C5B4E3"
      />
      {/* Cuerpo / cabeza */}
      <ellipse cx="100" cy="88" rx="64" ry="68" fill="#C5B4E3" />
      {/* Reflejo en la cabeza */}
      <ellipse cx="86" cy="60" rx="28" ry="18" fill="#D5C6EC" opacity="0.55" />
      {/* Ojo blanco izq */}
      <circle cx="74" cy="74" r="19" fill="white" />
      {/* Ojo blanco der */}
      <circle cx="126" cy="74" r="19" fill="white" />
      {/* Pupila izq */}
      <circle cx="78" cy="74" r="10" fill="#2D3748" />
      {/* Pupila der */}
      <circle cx="130" cy="74" r="10" fill="#2D3748" />
      {/* Brillito izq */}
      <circle cx="83" cy="69" r="4" fill="white" />
      {/* Brillito der */}
      <circle cx="135" cy="69" r="4" fill="white" />
      {/* Cachetes */}
      <circle cx="52" cy="94" r="13" fill="#F5C5C8" opacity="0.6" />
      <circle cx="148" cy="94" r="13" fill="#F5C5C8" opacity="0.6" />
      {/* Sonrisa */}
      <path
        d="M78 106 Q100 120 122 106"
        stroke="#2D3748"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
