import { CryptoCurrency } from '@/types/crypto';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CoinChart } from './coin-chart/coin-chart.component';
import { CoinInfo } from './coin-info/coin-info.component';

interface CoinDetailProps {
  initialData?: CryptoCurrency;
  coinId: string;
}

export function CoinDetail({ initialData, coinId }: CoinDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </Link>

        <CoinInfo initialData={initialData} coinId={coinId} />

        <CoinChart coinId={coinId} />
      </main>
    </div>
  );
}
