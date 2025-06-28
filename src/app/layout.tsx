import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { HeaderImplementation } from '@/components/implementations/header-implementation/header-implementation.component';
import { Providers } from '@/components/implementations/providers/providers.component';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Crypto Tracker - Acompanhe Criptomoedas',
  description: 'Acompanhe as principais criptomoedas do mercado em tempo real',
  keywords: ['criptomoedas', 'bitcoin', 'ethereum', 'crypto', 'finanças'],
  openGraph: {
    title: 'Crypto Tracker - Acompanhe Criptomoedas',
    description:
      'Acompanhe as principais criptomoedas do mercado em tempo real',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Providers>
          <HeaderImplementation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
