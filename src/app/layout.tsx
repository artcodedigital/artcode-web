import type { Metadata } from 'next';
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ArtCode — Sites, apps e sistemas sob medida com IA',
  description:
    'A ArtCode desenvolve sites, aplicativos e sistemas sob medida, com integração de Inteligência Artificial. Do design ao deploy, produto digital de ponta a ponta.',
  keywords: [
    'desenvolvimento de software',
    'criação de sites',
    'aplicativos',
    'sistemas web',
    'inteligência artificial',
    'ArtCode',
    'Recife',
  ],
  openGraph: {
    title: 'ArtCode — Sites, apps e sistemas sob medida com IA',
    description:
      'Do design ao deploy: sites, apps e sistemas com IA integrada, construídos por um time que entrega.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ArtCode',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn(display.variable, sans.variable, mono.variable)}
      suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
