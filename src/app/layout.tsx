import type { Metadata } from 'next';
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// All three are variable fonts: omitting `weight` ships one file per family
// covering every weight, instead of one file per weight (15 -> 3 requests).
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
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
        {/*
          Runs synchronously before the rest of the body is parsed, so the
          scroll-reveal styles only apply when JS is actually alive. Without it
          the page would render blank if the script never executed.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        {/*
          The hero/header entrance animations are rendered by Motion, which
          writes their hidden state as inline styles during the static export.
          With scripting off nothing would ever clear them, so force them open.
        */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `[style*="opacity:0"]{opacity:1!important;filter:none!important;transform:none!important}`,
            }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
