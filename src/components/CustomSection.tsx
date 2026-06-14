import { getWaUrl } from '@/lib/whatsapp';

const WA_URL = getWaUrl('Hola! Quiero consultar sobre un juguete personalizado 🎨');

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CustomSection() {
  return (
    <section id="personalizados" className="bg-cream py-20 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Card principal */}
        <div className="relative overflow-hidden rounded-[2rem] bg-lila-dark p-10 md:p-14 lg:p-16">

          {/* Decorativos de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-16 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* Texto */}
            <div className="flex flex-col gap-4 max-w-lg">
              <span className="text-lila/90 text-sm font-bold uppercase tracking-widest">
                Personalización
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight text-balance">
                ¿Querés algo único?
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Podemos adaptar colores, tamaños o detalles según el modelo.
                Cada juguete puede ser tan especial como quien lo recibe.
              </p>
            </div>

            {/* CTA + swatches decorativos */}
            <div className="flex flex-col gap-5 shrink-0">
              {/* Paleta de colores decorativa */}
              <div className="flex gap-3">
                {['#B5E5D8', '#F5E6A3', '#F5C5C8', '#B8DCF0', '#C5B4E3'].map((c) => (
                  <div
                    key={c}
                    className="w-9 h-9 rounded-full border-2 border-white/30 shadow-lg hover:scale-125 transition-transform duration-200"
                    style={{ backgroundColor: c }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Botón */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-7 py-4 text-base hover:bg-[#1DAA53] hover:scale-105 transition-all duration-200 shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:scale-95 whitespace-nowrap"
              >
                <WaIcon />
                Consultar personalizado
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
