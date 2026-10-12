import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getWaUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Impresión 3D personalizada para juguetes y regalos | Bubba3D Argentina',
  description:
    'Impresión 3D de juguetes, figuras y objetos personalizados, hechos a pedido. Elegís colores, tamaños y detalles. Diseñados y fabricados en Argentina.',
  alternates: {
    canonical: 'https://www.bubba3d.com.ar/impresion-3d-personalizada',
  },
  openGraph: {
    title: 'Impresión 3D personalizada para juguetes y regalos | Bubba3D',
    description:
      'Juguetes y objetos impresos en 3D, hechos a pedido. Colores, tamaños y detalles a elección. Fabricados en Argentina.',
    url: 'https://www.bubba3d.com.ar/impresion-3d-personalizada',
    siteName: 'Bubba3D',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impresión 3D personalizada para juguetes y regalos | Bubba3D',
    description:
      'Juguetes y objetos impresos en 3D, hechos a pedido en Argentina. Colores y detalles a elección.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué objetos se pueden personalizar con impresión 3D?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diseñamos juguetes, figuras, llaveros, piezas decorativas y objetos únicos. Cada pieza se fabrica a pedido con los colores y detalles que elegís.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo elegir los colores del juguete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Cada pieza se puede fabricar en los colores que preferís. Tenemos una amplia gama de filamentos de colores para que el juguete sea exactamente como lo imaginás.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo pedir un diseño propio o solo tienen modelos fijos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tenemos modelos propios pero también podemos trabajar en pedidos especiales. Escribinos con tu idea y te decimos qué es posible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los materiales son seguros para niños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usamos filamentos PLA de calidad, que son materiales biodegradables y seguros. Cada pieza está pensada para que sea robusta y apta para el juego.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en estar listo un juguete personalizado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del modelo y la cantidad. En general entre 3 y 7 días hábiles desde que confirmamos el pedido. Te avisamos cuando esté listo.',
      },
    },
  ],
};

const WA_URL = getWaUrl('Hola! Quiero consultar sobre un objeto personalizado en 3D 🎨');

const WHAT_WE_MAKE = [
  { emoji: '🦕', title: 'Juguetes y figuras', desc: 'Dinosaurios, animales, personajes, vehículos. Modelos propios diseñados para jugar.' },
  { emoji: '🎁', title: 'Regalos originales', desc: 'Objetos únicos que no encontrás en ningún lado. Perfectos para regalar en cumpleaños o fechas especiales.' },
  { emoji: '🎨', title: 'Colores a elección', desc: 'Elegís el color o combinación de colores. Cada pieza se fabrica específicamente para tu pedido.' },
  { emoji: '📐', title: 'Tamaños personalizados', desc: 'Podemos ajustar el tamaño de la pieza según lo que necesitás.' },
  { emoji: '✨', title: 'Detalles especiales', desc: 'Podemos incorporar nombres, fechas u otros elementos en el diseño.' },
  { emoji: '🐙', title: 'Piezas reversibles', desc: 'Juguetes con mecanismos especiales, partes articuladas o elementos sorpresa.' },
];

const STEPS = [
  { num: 1, emoji: '💬', title: 'Nos contás tu idea', desc: 'Escribinos por WhatsApp con lo que tenés en mente: modelo, colores, tamaño, para quién es.' },
  { num: 2, emoji: '🎨', title: 'Definimos los detalles', desc: 'Acordamos colores, tamaño y cualquier personalización. Si hay cambios en el diseño, los resolvemos juntos.' },
  { num: 3, emoji: '🖨️', title: 'Fabricamos la pieza', desc: 'Imprimimos tu objeto a pedido, con materiales seguros y mucho cuidado en cada detalle.' },
  { num: 4, emoji: '📦', title: 'Te lo entregamos', desc: 'Coordinamos la entrega o el envío. Te avisamos cuando esté listo.' },
];

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ImpresionPersonalizadaPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="bg-cream py-20 px-5 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-lila/25 text-lila-dark rounded-full px-5 py-2 text-sm font-bold mb-6">
              <span aria-hidden="true">✦</span>
              Hecho a pedido en Argentina
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-[1.08] text-balance mb-6">
              Impresión 3D personalizada<br />
              <span className="text-lila-dark">para juguetes y regalos</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              Fabricamos objetos únicos a pedido: juguetes, figuras y regalos originales con los colores y detalles que vos elegís. Cada pieza sale del diseño y entra directo a las manos de quien la va a disfrutar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-7 py-4 text-base hover:bg-[#1DAA53] hover:scale-105 transition-all duration-200 active:scale-95"
              >
                <WaIcon />
                Consultar mi pedido
              </a>
              <a
                href="/#catalogo"
                className="inline-flex items-center gap-2 bg-lila-dark text-white font-bold rounded-full px-7 py-4 text-base hover:bg-[#6D28D9] hover:scale-105 transition-all duration-200 active:scale-95"
              >
                🎁 Ver catálogo
              </a>
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="bg-white py-20 px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-ink mb-3">
                ¿Qué podés personalizar?
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Cada pieza se fabrica específicamente para tu pedido. No hay stock genérico.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHAT_WE_MAKE.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-3 hover:shadow-card transition-shadow duration-200"
                >
                  <span className="text-3xl" aria-hidden="true">{item.emoji}</span>
                  <h3 className="font-extrabold text-base text-ink">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materiales */}
        <section className="bg-cream py-20 px-5 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-ink mb-6 text-center">
              Materiales seguros y duraderos
            </h2>
            <div className="flex flex-col gap-5 text-muted text-base leading-relaxed">
              <p>
                Trabajamos con filamentos PLA de calidad, un material biodegradable derivado de fuentes renovables. Es uno de los materiales más usados en impresión 3D para objetos de uso cotidiano porque es seguro, resistente y produce acabados con colores vibrantes.
              </p>
              <p>
                Cada juguete está diseñado pensando en quién lo va a usar. Los bordes son redondeados, las piezas son robustas y los acabados son cuidados. No son objetos frágiles ni de un solo uso.
              </p>
              <p>
                La impresión se hace en Argentina, pieza por pieza, con control de cada pedido. Cuando decimos hecho a pedido, es literal: empezamos a fabricarlo cuando vos nos confirmás los detalles.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-white py-20 px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-ink mb-3">
                ¿Cómo pedís un objeto personalizado?
              </h2>
              <p className="text-muted text-lg max-w-lg mx-auto">
                Cuatro pasos simples desde tu idea hasta tener el objeto en las manos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((step) => (
                <div key={step.num} className="flex flex-col gap-4">
                  <div className="relative w-16 h-16 rounded-full bg-lila-soft flex items-center justify-center text-3xl shadow-card">
                    {step.emoji}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-lila-dark text-white text-xs font-black flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-ink">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-8 py-4 text-base hover:bg-[#1DAA53] hover:scale-105 transition-all duration-200 active:scale-95"
              >
                <WaIcon />
                Empezar mi pedido personalizado
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 px-5 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-ink mb-10 text-center">
              Preguntas frecuentes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: '¿Qué objetos se pueden personalizar?',
                  a: 'Diseñamos juguetes, figuras, llaveros y objetos decorativos. Cada pieza se fabrica a pedido con los colores y detalles que elegís.',
                },
                {
                  q: '¿Puedo elegir los colores?',
                  a: 'Sí. Tenemos una amplia gama de filamentos de colores. Podés elegir un color o combinar varios en la misma pieza, según el modelo.',
                },
                {
                  q: '¿Los materiales son seguros para niños?',
                  a: 'Usamos filamentos PLA de calidad, materiales seguros y biodegradables. Las piezas son robustas y aptas para el juego.',
                },
                {
                  q: '¿Puedo pedir un diseño que no está en el catálogo?',
                  a: 'Tenemos modelos propios pero también trabajamos pedidos especiales. Escribinos con tu idea y vemos qué es posible.',
                },
                {
                  q: '¿Cuánto tarda un pedido personalizado?',
                  a: 'Entre 3 y 7 días hábiles desde que confirmamos los detalles. Te avisamos cuando esté listo para coordinar la entrega.',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group bg-white rounded-2xl border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-extrabold text-sm text-ink list-none select-none hover:text-lila-dark transition-colors duration-150">
                    {q}
                    <svg
                      className="w-5 h-5 shrink-0 text-muted group-open:rotate-180 transition-transform duration-200"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-muted leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-lila-dark py-20 px-5 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 text-balance">
              ¿Qué objeto tenés en mente?
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Contanos tu idea por WhatsApp. Te respondemos y te ayudamos a encontrar la mejor forma de hacerlo realidad.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold rounded-full px-8 py-4 text-base hover:bg-[#1DAA53] hover:scale-105 transition-all duration-200 shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:scale-95"
            >
              <WaIcon />
              Consultar por WhatsApp
            </a>
          </div>
        </section>

        {/* Cross-link ORK3D — bloque contextual */}
        <section className="bg-white py-12 px-5 lg:px-8 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted leading-relaxed mb-3">
              Bubba3D se enfoca en juguetes y objetos lúdicos personalizados. Para trofeos, reconocimientos y piezas para torneos o empresas, visitá{' '}
              <a
                href="https://ork3d.com"
                target="_blank"
                rel="noopener"
                className="font-semibold text-lila-dark hover:text-[#6D28D9] transition-colors duration-150"
              >
                ORK3D
              </a>
              .
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
