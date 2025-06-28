import { CryptoCard } from '@/components/crypto-card.component';
import { CryptoCurrency } from '@/types/crypto';
import {
  formatCurrency,
  formatMarketCap,
  formatPercentage,
} from '@/utils/currency';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface CryptoCardItemProps {
  crypto: CryptoCurrency;
}

export function CryptoCardItem(props: CryptoCardItemProps) {
  const { crypto } = props;
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <CryptoCard.Link href={`/coin/${crypto.id}`}>
      <CryptoCard.Root>
        <CryptoCard.Content>
          <CryptoCard.Header>
            <CryptoCard.HeaderContent>
              <CryptoCard.Avatar>
                <CryptoCard.AvatarImage
                  src={crypto.image}
                  alt={crypto.name}
                  width={40}
                  height={40}
                />
                <CryptoCard.AvatarRank>
                  {crypto.market_cap_rank}
                </CryptoCard.AvatarRank>
              </CryptoCard.Avatar>
              <CryptoCard.Info>
                <CryptoCard.Name>{crypto.name}</CryptoCard.Name>
                <CryptoCard.Symbol>{crypto.symbol}</CryptoCard.Symbol>
              </CryptoCard.Info>
            </CryptoCard.HeaderContent>
          </CryptoCard.Header>

          <CryptoCard.Body>
            <CryptoCard.Price>
              {formatCurrency(crypto.current_price)}
            </CryptoCard.Price>
            <CryptoCard.Stats>
              <CryptoCard.TrendIndicator>
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {formatPercentage(crypto.price_change_percentage_24h)}
                </span>
              </CryptoCard.TrendIndicator>
              <CryptoCard.MarketCap>
                <CryptoCard.MarketCapTitle>
                  Market Cap
                </CryptoCard.MarketCapTitle>
                <CryptoCard.MarketCapValue>
                  {formatMarketCap(crypto.market_cap)}
                </CryptoCard.MarketCapValue>
              </CryptoCard.MarketCap>
            </CryptoCard.Stats>
          </CryptoCard.Body>
        </CryptoCard.Content>
        <CryptoCard.GradientOverlay />
      </CryptoCard.Root>
    </CryptoCard.Link>
  );
}
