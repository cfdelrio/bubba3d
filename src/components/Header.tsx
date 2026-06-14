'use client';
import { useState } from 'react';
import LogoIcon from '@/components/illustrations/LogoIcon';
import { getWaUrl } from '@/lib/whatsapp';

const NAV = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#nosotros', label: 'Sobre África' },
  { href: '#personalizados', label: 'Personalizados' },
];

const WA_URL = getWaUrl('Hola Hello Bubba 3D! 👋 Quiero consultar sobre sus juguetes.');

function WaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group shrink-0">
          <LogoIcon className="w-9 h-9 group-hover:scale-105 transition-transform duration-200" />
          <div className="leading-none">
            <div className="font-black text-sm text-lila-dark tracking-tight">Hello Bubba</div>
            <div className="font-black text-sm text-ink -mt-0.5 tracking-tight">3D</div>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted hover:text-lila-dark transition-colors duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-5 py-2.5 text-sm hover:bg-[#1DAA53] hover:scale-105 transition-all duration-200 active:scale-95"
          >
            <WaIcon />
            Pedir por WhatsApp
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-xl hover:bg-lila-soft transition-colors duration-150"
          >
            <span className={`block w-5 h-0.5 bg-ink mx-auto transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink mx-auto transition-all duration-150 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink mx-auto transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-border ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="px-5 py-5 flex flex-col gap-5">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-bold text-ink hover:text-lila-dark transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-6 py-3 text-sm hover:bg-[#1DAA53] transition-all duration-200 w-fit"
          >
            <WaIcon />
            Pedir por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
