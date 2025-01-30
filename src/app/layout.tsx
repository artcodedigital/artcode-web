import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ArtCode',
  description: 'Seu sistema com as melhores tecnologias do mercado, tudo integrado com Inteligencia Artificial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          'light min-h-screen antialiased overflow-x-hidden',
          poppins.className,
        )}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
