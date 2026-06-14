interface Props {
  className?: string;
  variant?: 'color' | 'white';
}

export default function LogoIcon({ className = 'w-10 h-10', variant = 'color' }: Props) {
  const bg = variant === 'white' ? '#ffffff' : '#7C3AED';
  const face = variant === 'white' ? '#7C3AED' : '#ffffff';
  const ear = variant === 'white' ? '#ffffffcc' : '#9F67F0';

  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill={bg} />
      {/* Antenas */}
      <circle cx="10" cy="10" r="6" fill={ear} />
      <circle cx="38" cy="10" r="6" fill={ear} />
      {/* Ojos blancos */}
      <circle cx="17" cy="21" r="5" fill={face} opacity="0.9" />
      <circle cx="31" cy="21" r="5" fill={face} opacity="0.9" />
      {/* Pupilas */}
      <circle cx="18" cy="21" r="2.5" fill={bg === '#ffffff' ? '#7C3AED' : '#1A1A2E'} />
      <circle cx="32" cy="21" r="2.5" fill={bg === '#ffffff' ? '#7C3AED' : '#1A1A2E'} />
      {/* Brillito */}
      <circle cx="19.5" cy="19.5" r="1.2" fill={face} />
      <circle cx="33.5" cy="19.5" r="1.2" fill={face} />
      {/* Sonrisa */}
      <path
        d="M15 30 Q24 38 33 30"
        stroke={face}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
