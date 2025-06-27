'use client';
import { ErrorMessage } from '@/components/error-message';
import { CryptoCardItem } from '@/components/implementations/crypto-card-item';
import { LoadingSpinner } from '@/components/loading-spinner';
import { useTopCoins } from '@/services/api';
import { CryptoCurrency } from '@/types/crypto';

interface CryptoCardListProps {
  initialData: CryptoCurrency[];
}

export function CryptoCardList({ initialData }: CryptoCardListProps) {
  const { data: cryptos, isLoading, error, refetch } = useTopCoins(initialData);

  if (isLoading && initialData.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <LoadingSpinner size={48} />
          </div>
        </main>
      </div>
    );
  }

  if (error && initialData.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ErrorMessage.Root>
            <ErrorMessage.Icon />
            <ErrorMessage.Title>
              Erro ao carregar as criptomoedas. Tente novamente.
            </ErrorMessage.Title>
            <ErrorMessage.Description>
              Tente novamente em alguns minutos.
            </ErrorMessage.Description>
            <ErrorMessage.Button onClick={() => refetch()} />
          </ErrorMessage.Root>
        </main>
      </div>
    );
  }

  const displayData = cryptos || initialData;

  return displayData.map(crypto => (
    <CryptoCardItem key={crypto.id} crypto={crypto} />
  ));
}
