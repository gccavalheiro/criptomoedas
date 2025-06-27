import { formatCurrency } from '@/utils/currency';
import { CryptoCurrency } from '@/types/crypto';

interface CoinHighLowProps {
  crypto: CryptoCurrency;
}

export function CoinHighLow({ crypto }: CoinHighLowProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="rounded-lg border bg-muted/50 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Máximo 24h
        </h3>
        <p className="text-lg font-semibold text-foreground">
          {formatCurrency(crypto.high_24h)}
        </p>
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          Mínimo 24h
        </h3>
        <p className="text-lg font-semibold text-foreground">
          {formatCurrency(crypto.low_24h)}
        </p>
      </div>
    </div>
  );
} 