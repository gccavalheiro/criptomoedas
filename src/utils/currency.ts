import currency from 'currency.js';

export function formatCurrency(amount: number): string {
  if (amount >= 1) {
    return currency(amount, { symbol: '$', precision: 2 }).format();
  }

  return currency(amount, { symbol: '$', precision: 6 }).format();
}

//  Formata o valor abreviando (B = Bilhões, T = Trilhões, M = Milhões)
export function formatMarketCap(marketCap: number | undefined): string {
  if (marketCap == null) return '--';

  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)}T`;
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)}B`;
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)}M`;
  } else {
    return `$${marketCap.toLocaleString()}`;
  }
}

export function formatVolume(volume: number | undefined): string {
  if (volume == null) return '--';

  if (volume >= 1e12) {
    return `$${(volume / 1e12).toFixed(2)}T`;
  } else if (volume >= 1e9) {
    return `$${(volume / 1e9).toFixed(2)}B`;
  } else if (volume >= 1e6) {
    return `$${(volume / 1e6).toFixed(2)}M`;
  } else {
    return `$${volume.toLocaleString()}`;
  }
}

/**
 * Formata percentual de variação
 */
export function formatPercentage(
  percentage: number | null | undefined
): string {
  if (percentage == null) return '--';
  return `${percentage.toFixed(2)}%`;
}
