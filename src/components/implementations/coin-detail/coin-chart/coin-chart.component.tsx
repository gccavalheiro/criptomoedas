'use client';

import { ErrorMessage } from '@/components/error-message';
import { LoadingSpinner } from '@/components/loading-spinner';
import { PriceChartRoot } from '@/components/price-chart';
import { useMarketChart } from '@/services/api';

interface CoinChartProps {
  coinId: string;
}

export function CoinChart(props: CoinChartProps) {
  const { coinId } = props;

  const {
    data: chartData,
    isLoading: isLoadingChart,
    error: chartError,
    refetch: refetchChart,
  } = useMarketChart(coinId, 7);

  const isLoading = isLoadingChart;
  const error = chartError;

  const refetchData = () => {
    refetchChart();
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

  if (error || !chartData) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ErrorMessage.Root>
            <ErrorMessage.Icon />
            <ErrorMessage.Title>
              Erro ao carregar o gráfico. Tente novamente.
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

  return <PriceChartRoot data={chartData} />;
}
