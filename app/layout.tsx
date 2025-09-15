
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Good Motors GmbH - Motorenbegutachtung',
  description: 'Ihr unabhängiger Partner für Kfz-Gutachten und Fahrzeugbewertungen. Wir bieten Schadengutachten, Fahrzeugbewertungen und weitere Services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
