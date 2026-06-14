const STEPS = [
  {
    number: 1,
    emoji: '🛍️',
    title: 'Elegís el modelo',
    desc: 'Explorá el catálogo y elegí tu juguete favorito o pedí uno personalizado.',
    color: '#C5B4E3',
    bg: '#F0EDF8',
  },
  {
    number: 2,
    emoji: '🎨',
    title: 'Elegís color o personalización',
    desc: 'Podés elegir colores, tamaño o agregar un detalle especial.',
    color: '#B5E5D8',
    bg: '#E8F8F3',
  },
  {
    number: 3,
    emoji: '🖨️',
    title: 'Lo imprimimos en 3D',
    desc: 'Cada pieza se imprime a pedido con mucho cuidado y materiales seguros.',
    color: '#B8DCF0',
    bg: '#EBF5FF',
  },
  {
    number: 4,
    emoji: '📦',
    title: 'Coordinamos entrega',
    desc: 'Te avisamos cuando esté listo para que lo recibas.',
    color: '#F5E6A3',
    bg: '#FDF6E3',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream py-20 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-ink">
            ¿Cómo funciona?
            <span className="ml-2" aria-hidden="true">✏️</span>
          </h2>
          <p className="text-muted mt-3 text-lg max-w-lg mx-auto">
            De tu idea al juguete perfecto en 4 pasos simples.
          </p>
        </div>

        {/* Pasos */}
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">

          {STEPS.map((step, i) => (
            <div key={step.number} className="flex-1 flex flex-col md:items-center relative">

              {/* Conector entre pasos (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-1/2 w-full border-t-2 border-dashed z-0"
                  style={{ borderColor: step.color + '80' }}
                  aria-hidden="true"
                />
              )}

              {/* Conector entre pasos (mobile) */}
              {i < STEPS.length - 1 && (
                <div
                  className="md:hidden absolute top-20 left-10 h-full border-l-2 border-dashed z-0"
                  style={{ borderColor: step.color + '80' }}
                  aria-hidden="true"
                />
              )}

              {/* Contenido del paso */}
              <div className="flex flex-row md:flex-col md:items-center gap-5 md:gap-4 relative z-10">

                {/* Ícono circular */}
                <div className="relative shrink-0">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-card"
                    style={{ backgroundColor: step.bg }}
                  >
                    {step.emoji}
                  </div>
                  {/* Número badge */}
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shadow-sm"
                    style={{ backgroundColor: step.color === '#F5E6A3' ? '#D4A800' : step.color }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Texto */}
                <div className="md:text-center">
                  <h3 className="font-extrabold text-base text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed max-w-[180px] md:max-w-none">
                    {step.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
