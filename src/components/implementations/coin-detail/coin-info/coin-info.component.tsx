'use client';
import { CoinHeader } from '../coin-header/coin-header.component';
import { CoinStats } from '../coin-stats/coin-stats.component';
import { CoinHighLow } from '../coin-high-low/coin-high-low.component';
import { CryptoCurrency } from '@/types/crypto';
import { ErrorMessage } from '@/components/error-message';
import { LoadingSpinner } from '@/components/loading-spinner';
import { useCoinById } from '@/services/api';

interface CoinInfoProps {
  initialData?: CryptoCurrency;
  coinId: string;
}

export function CoinInfo(props: CoinInfoProps) {
  const { initialData, coinId } = props;

  const {
    data: crypto,
    isLoading: isLoadingCrypto,
    error: cryptoError,
    refetch: refetchCrypto,
  } = useCoinById(coinId, initialData);

  const isLoading = isLoadingCrypto;
  const error = cryptoError;

  const refetchData = () => {
    refetchCrypto();
  };

  if (isLoading) {
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

  if (error || !crypto) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ErrorMessage.Root>
            <ErrorMessage.Icon />
            <ErrorMessage.Title>
              Erro ao carregar as informações da criptomoeda. Tente novamente.
            </ErrorMessage.Title>
            <ErrorMessage.Description>
              Tente novamente em alguns minutos.
            </ErrorMessage.Description>
            <ErrorMessage.Button onClick={() => refetchData()} />
          </ErrorMessage.Root>
        </main>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mb-8">
      <CoinHeader crypto={crypto} />
      <CoinStats crypto={crypto} />
      <CoinHighLow crypto={crypto} />
    </div>
  );
}
