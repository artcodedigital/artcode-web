import type { Metadata } from 'next';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { SmoothScroll } from '@/components/motion/SmoothScroll';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ArtCode — Sites, apps e sistemas sob medida',
  description:
    'Estúdio de software em Recife. Sites, aplicativos, sistemas e integrações com IA, desenhados e desenvolvidos sob medida — do primeiro rascunho ao deploy.',
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
    title: 'ArtCode — Sites, apps e sistemas sob medida',
    description:
      'Software sob medida para negócios que não cabem na prateleira. Sites, apps, sistemas e IA.',
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
      className={cn(display.variable, mono.variable)}
      suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
