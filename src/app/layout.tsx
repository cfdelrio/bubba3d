import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Hello Bubba 3D — Juguetes impresos en 3D hechos para imaginar',
  description:
    'Juguetes premium impresos en 3D, diseñados en Argentina, hechos a pedido y personalizados con mucho amor.',
  keywords: ['juguetes 3D', 'impresión 3D', 'juguetes personalizados', 'Argentina', 'Hello Bubba 3D'],
  openGraph: {
    title: 'Hello Bubba 3D',
    description: 'Juguetes impresos en 3D, hechos para imaginar.',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={nunito.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
