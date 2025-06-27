import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  formatCurrency,
  formatMarketCap,
  formatVolume,
  formatPercentage,
} from '@/utils/currency';
import { CryptoCurrency } from '@/types/crypto';

interface CoinStatsProps {
  crypto: CryptoCurrency;
}

export function CoinStats({ crypto }: CoinStatsProps) {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border bg-muted/50 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Preço Atual
        </h3>
        <p className="text-2xl font-bold text-foreground">
          {formatCurrency(crypto.current_price)}
        </p>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Variação 24h
        </h3>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-green-500" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-500" />
          )}
          <p
            className={`text-xl font-bold ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {formatPercentage(crypto.price_change_percentage_24h)}
          </p>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Market Cap
        </h3>
        <p className="text-xl font-bold text-foreground">
          {formatMarketCap(crypto.market_cap)}
        </p>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Volume 24h
        </h3>
        <p className="text-xl font-bold text-foreground">
          {formatVolume(crypto.total_volume)}
        </p>
      </div>
    </div>
  );
} 