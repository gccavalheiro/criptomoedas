import { cryptoApi } from './api';
import { CryptoCurrency } from '@/types/crypto';

export async function getTopCoinsServer(): Promise<CryptoCurrency[]> {
  try {
    return await cryptoApi.getTopCoins();
  } catch (error) {
    console.error('Erro ao buscar top coins:', error);
    throw error;
  }
}

export async function getCoinByIdServer(id: string): Promise<CryptoCurrency> {
  try {
    return await cryptoApi.getCoinById(id);
  } catch (error) {
    console.error('Erro ao buscar moeda:', error);
    throw error;
  }
}
