import { getWaUrl } from '@/lib/whatsapp';
import DinoSvg from '@/components/illustrations/DinoSvg';
import TorreSvg from '@/components/illustrations/TorreSvg';
import PulpoSvg from '@/components/illustrations/PulpoSvg';
import CarSvg from '@/components/illustrations/CarSvg';
import RocketSvg from '@/components/illustrations/RocketSvg';

type Product = {
  id: string;
  name: string;
  desc: string;
  colors: string[];
  bg: string;
  Illustration: React.ComponentType<{ className?: string }>;
};

const PRODUCTS: Product[] = [
  {
    id: 'dino',
    name: 'Dino amigable',
    desc: 'Tierno compañero para jugar sin parar.',
    colors: ['#B5E5D8', '#C5B4E3', '#F5E6A3', '#F5C5C8'],
    bg: '#E8F8F3',
    Illustration: DinoSvg,
  },
  {
    id: 'torre',
    name: 'Torre arcoíris',
    desc: 'Clásico, divertido y educativo.',
    colors: ['#F5E6A3', '#C5B4E3', '#F5C5C8', '#B5E5D8'],
    bg: '#FDF6E3',
    Illustration: TorreSvg,
  },
  {
    id: 'pulpo',
    name: 'Pulpo reversible',
    desc: 'Dos colores, el doble de diversión.',
    colors: ['#C5B4E3', '#F5C5C8', '#B8DCF0'],
    bg: '#F0EDF8',
    Illustration: PulpoSvg,
  },
  {
    id: 'camion',
    name: 'Camioncito',
    desc: 'Listo para grandes aventuras.',
    colors: ['#B8DCF0', '#F5E6A3', '#C5B4E3'],
    bg: '#EBF5FF',
    Illustration: CarSvg,
  },
  {
    id: 'cohete',
    name: 'Cohete espacial',
    desc: 'A viajar a la imaginación.',
    colors: ['#F5E6A3', '#F5C5C8', '#B8DCF0'],
    bg: '#FFF8E7',
    Illustration: RocketSvg,
  },
];

function WaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const waUrl = getWaUrl(`Hola! Me interesa el ${product.name} de Hello Bubba 3D 😊`);
  const { Illustration } = product;

  return (
    <article
      className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 group animate-fade-up flex flex-col"
      style={{ animationDelay: `${index * 90}ms`, animationFillMode: 'both' }}
    >
      {/* Área de imagen */}
      <div
        className="h-48 sm:h-52 flex items-center justify-center p-5 overflow-hidden"
        style={{ backgroundColor: product.bg }}
      >
        <Illustration className="w-36 h-36 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-extrabold text-sm lg:text-base text-ink leading-tight">{product.name}</h3>
        <p className="text-xs lg:text-sm text-muted leading-relaxed">{product.desc}</p>

        {/* Swatches de color */}
        <div className="flex gap-1.5 mt-1">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-5 h-5 rounded-full border-2 border-white shadow-sm hover:scale-125 transition-transform duration-150"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Botón consultar */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-1.5 bg-lila-dark text-white font-bold rounded-full py-2.5 px-4 text-xs hover:bg-[#6D28D9] hover:scale-105 transition-all duration-200 active:scale-95"
        >
          <WaIcon />
          Consultar
        </a>
      </div>
    </article>
  );
}

export default function FeaturedCatalog() {
  const waAll = getWaUrl('Hola! Quiero ver todo el catálogo de Hello Bubba 3D 😊');

  return (
    <section id="catalogo" className="bg-white py-20 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl lg:text-4xl font-black text-ink">
            Catálogo destacado
            <span className="ml-2" aria-hidden="true">✏️</span>
          </h2>
          <a
            href={waAll}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-lila-dark hover:text-[#6D28D9] transition-colors duration-150 whitespace-nowrap border border-border rounded-full px-4 py-2 hover:border-lila-dark"
          >
            Ver todos los productos →
          </a>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
