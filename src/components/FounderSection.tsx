import Image from 'next/image';
import { getWaUrl } from '@/lib/whatsapp';

const WA_URL = getWaUrl('Hola! Quiero conocer más sobre Hello Bubba 3D y sus juguetes 💜');

export default function FounderSection() {
  return (
    <section id="nosotros" className="bg-white py-20 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Foto circular */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Círculo de foto (placeholder premium) */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden relative">
                <Image
                  src="/africa.jpg"
                  alt="África, fundadora de Hello Bubba 3D"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 256px, 320px"
                  priority
                />
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-3 -right-3 lg:bottom-2 lg:-right-5 bg-lila-dark text-white rounded-full px-4 py-2.5 font-bold text-sm shadow-cta whitespace-nowrap">
                💜 Con amor desde 2021
              </div>

              {/* Decorativo */}
              <div className="absolute -top-4 -left-2 text-4xl animate-float pointer-events-none select-none" style={{ animationDelay: '0.5s' }}>
                🌟
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5">
            {/* Eyebrow */}
            <span className="text-sm font-bold text-lila-dark uppercase tracking-widest">
              Nuestra historia
            </span>

            {/* Título */}
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight text-balance">
              Hola, somos{' '}
              <span className="text-lila-dark">Hello Bubba 3D</span>
            </h2>

            {/* Texto */}
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed">
              <p>
                África está detrás de este proyecto creativo de juguetes impresos en 3D.
                Cada pieza se hace a pedido, con cuidado, color y ganas de crear algo especial.
              </p>
              <p>
                Diseñamos cada juguete pensando en los niños que lo van a usar: materiales
                seguros, colores vibrantes, formas tiernas. Porque creemos que jugar es imaginar.
              </p>
              <p>
                Somos un emprendimiento familiar argentino que combina tecnología y artesanía
                para crear juguetes únicos, hechos con mucho amor.
              </p>
            </div>

            {/* CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-menta-dark text-white font-bold rounded-full px-7 py-3.5 text-base hover:bg-[#24836A] hover:scale-105 transition-all duration-200 shadow-card w-fit active:scale-95 mt-2"
            >
              Conocé más sobre el proyecto 💚
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
