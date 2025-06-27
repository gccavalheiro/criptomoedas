import { CryptoCurrency } from '@/types/crypto';
import Image from 'next/image';

interface CoinHeaderProps {
  crypto: CryptoCurrency;
}

export function CoinHeader({ crypto }: CoinHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Image
        src={crypto.image}
        alt={crypto.name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover ring-2 ring-border"
      />
      <div>
        <h1 className="text-3xl font-bold text-foreground">{crypto.name}</h1>
        <p className="text-lg text-muted-foreground font-mono">
          {crypto.symbol.toUpperCase()} • #{crypto.market_cap_rank}
        </p>
      </div>
    </div>
  );
}
