import { getWaUrl } from '@/lib/whatsapp';
import DinoSvg from '@/components/illustrations/DinoSvg';
import TorreSvg from '@/components/illustrations/TorreSvg';
import PulpoSvg from '@/components/illustrations/PulpoSvg';
import CarSvg from '@/components/illustrations/CarSvg';

const WA_URL = getWaUrl('Hola! Quiero pedir un juguete de Hello Bubba 3D 😊');

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[92vh] bg-cream flex items-center pt-16 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ---- Contenido de texto ---- */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Eyebrow */}
            <span
              className="inline-flex items-center gap-2 bg-lila/25 text-lila-dark rounded-full px-5 py-2 text-sm font-bold w-fit animate-fade-up"
            >
              <span aria-hidden="true">✦</span>
              Diseñados en Argentina con amor
            </span>

            {/* Headline */}
            <h1
              className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-balance text-ink animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Juguetes<br />
              impresos en 3D<br />
              <span className="text-lila-dark">hechos para<br />imaginar</span>
            </h1>

            {/* Subtítulo */}
            <p
              className="text-lg text-muted leading-relaxed max-w-md animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Diseñados en Argentina, impresos a pedido y personalizados con mucho amor.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '230ms' }}
            >
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 bg-lila-dark text-white font-bold rounded-full px-7 py-4 text-base hover:bg-[#6D28D9] hover:scale-105 transition-all duration-200 shadow-cta active:scale-95"
              >
                🎁 Ver catálogo
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-7 py-4 text-base hover:bg-[#1DAA53] hover:scale-105 transition-all duration-200 active:scale-95"
              >
                <WaIcon />
                Pedir por WhatsApp
              </a>
            </div>

            {/* Badges de beneficios */}
            <div
              className="flex flex-wrap gap-3 pt-1 animate-fade-up"
              style={{ animationDelay: '310ms' }}
            >
              <span className="inline-flex items-center gap-1.5 bg-rosa/35 rounded-full px-4 py-2 text-sm font-semibold text-ink">
                ❤️ Hecho a pedido
              </span>
              <span className="inline-flex items-center gap-1.5 bg-menta/40 rounded-full px-4 py-2 text-sm font-semibold text-ink">
                🎨 Colores a elección
              </span>
              <span className="inline-flex items-center gap-1.5 bg-manteca/55 rounded-full px-4 py-2 text-sm font-semibold text-ink">
                ⭐ Diseños propios
              </span>
            </div>
          </div>

          {/* ---- Composición visual ---- */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] lg:max-w-[500px] aspect-square mx-auto">

              {/* Círculo de fondo con gradiente (rota muy lento) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lila/30 via-menta/15 to-manteca/35 animate-spin-very-slow" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-celeste/25 to-rosa/20" />

              {/* Dino (protagonista, centro) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-56 h-56 lg:w-64 lg:h-64 animate-float z-10">
                <DinoSvg className="w-full h-full drop-shadow-lg" />
              </div>

              {/* Torre (arriba derecha) */}
              <div className="absolute top-5 right-0 w-24 h-32 lg:w-28 lg:h-36 animate-float-2 z-10">
                <TorreSvg className="w-full h-full drop-shadow-md" />
              </div>

              {/* Pulpo (abajo izquierda) */}
              <div className="absolute bottom-10 left-2 w-20 h-20 lg:w-24 lg:h-24 animate-float-3 z-10">
                <PulpoSvg className="w-full h-full drop-shadow-md" />
              </div>

              {/* Auto (abajo derecha) */}
              <div className="absolute bottom-4 right-4 w-24 h-16 lg:w-28 lg:h-20 animate-float-2 z-10" style={{ animationDelay: '0.9s' }}>
                <CarSvg className="w-full h-full drop-shadow-md" />
              </div>

              {/* Decorativos flotantes */}
              <div className="absolute top-4 left-10 text-4xl animate-float pointer-events-none select-none z-20" style={{ animationDelay: '0.4s' }}>⭐</div>
              <div className="absolute top-12 -right-2 text-3xl animate-float-2 pointer-events-none select-none z-20">❤️</div>
              <div className="absolute bottom-1 right-20 text-3xl animate-float-3 pointer-events-none select-none z-20">✨</div>
              <div className="absolute bottom-8 -left-2 text-3xl animate-float pointer-events-none select-none z-20" style={{ animationDelay: '1.2s' }}>🌸</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
