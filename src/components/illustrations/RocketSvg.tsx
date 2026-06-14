interface Props {
  className?: string;
}

export default function RocketSvg({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 160 220"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Llama exterior */}
      <ellipse cx="80" cy="212" rx="26" ry="14" fill="#F5E6A3" opacity="0.7" />
      {/* Llama media */}
      <ellipse cx="80" cy="208" rx="18" ry="20" fill="#FDB97D" />
      {/* Llama interior */}
      <ellipse cx="80" cy="202" rx="11" ry="14" fill="#F5E6A3" />
      {/* Aleta izquierda */}
      <path d="M56 158 L36 192 Q38 198 45 196 L62 170 Z" fill="#F5C5C8" />
      {/* Aleta derecha */}
      <path d="M104 158 L124 192 Q122 198 115 196 L98 170 Z" fill="#F5C5C8" />
      {/* Cuerpo */}
      <rect x="56" y="82" width="48" height="88" rx="16" fill="#C5B4E3" />
      {/* Cono / punta */}
      <path d="M56 82 Q80 20 104 82 Z" fill="#7C3AED" />
      {/* Ventana anillo exterior */}
      <circle cx="80" cy="114" r="24" fill="#B8DCF0" opacity="0.85" />
      {/* Ventana vidrio */}
      <circle cx="80" cy="114" r="17" fill="#EAF6FF" />
      {/* Brillo ventana */}
      <circle cx="73" cy="107" r="5.5" fill="white" opacity="0.65" />
      {/* Líneas decorativas */}
      <rect x="56" y="152" width="48" height="5" rx="2.5" fill="#B0A0D4" opacity="0.55" />
      <rect x="56" y="162" width="48" height="5" rx="2.5" fill="#B0A0D4" opacity="0.55" />
      {/* Ojos de buey laterales */}
      <circle cx="64" cy="96" r="6" fill="#EAF6FF" />
      <circle cx="96" cy="96" r="6" fill="#EAF6FF" />
      {/* Estrellitas en el cuerpo */}
      <circle cx="68" cy="174" r="3" fill="#F5E6A3" />
      <circle cx="92" cy="182" r="2.5" fill="#F5E6A3" />
    </svg>
  );
}
