import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-nunito',
});

const SITE_URL = 'https://www.bubba3d.com.ar';

export const metadata: Metadata = {
  title: 'Juguetes impresos en 3D personalizados | Bubba3D Argentina',
  description:
    'Juguetes y objetos impresos en 3D, diseñados y fabricados en Argentina. Piezas personalizadas, regalos y productos hechos a pedido con los colores y detalles que querés.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Juguetes impresos en 3D personalizados | Bubba3D',
    description:
      'Diseñamos y fabricamos juguetes y objetos personalizados, hechos a pedido en Argentina. Colores a elección, diseños propios.',
    url: SITE_URL,
    siteName: 'Bubba3D',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-cover.png`,
        width: 1200,
        height: 630,
        alt: 'Bubba3D — juguetes impresos en 3D personalizados, hechos a pedido en Argentina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juguetes impresos en 3D personalizados | Bubba3D Argentina',
    description:
      'Diseñamos y fabricamos juguetes y objetos personalizados, hechos a pedido en Argentina.',
    images: [`${SITE_URL}/og-cover.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Bubba3D',
      alternateName: 'Hello Bubba 3D',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
      areaServed: { '@type': 'Country', name: 'Argentina' },
      sameAs: ['https://www.instagram.com/hello.bubba3d'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Bubba3D',
      description: 'Juguetes impresos en 3D personalizados, hechos a pedido en Argentina.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'es-AR',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={nunito.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-lila-dark text-white px-4 py-2 rounded-full z-[100] font-bold"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
