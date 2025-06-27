import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { CryptoCurrency, MarketChartData, SearchResult } from '@/types/crypto';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const cryptoApi = {
  getTopCoins: async (): Promise<CryptoCurrency[]> => {
    try {
      const { data: topCoins } = await api.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 20,
          page: 1,
          sparkline: false,
          locale: 'pt',
        },
      });

      console.log('Top coins:', topCoins);

      return topCoins;
    } catch (error) {
      console.error('Erro ao buscar top coins:', error);
      throw error;
    }
  },

  getCoinById: async (id: string): Promise<CryptoCurrency> => {
    try {
      const { data: coinData } = await api.get(`/coins/${id}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      });

      console.log('coinData:', coinData);

      const mappedCrypto: CryptoCurrency = {
        id: coinData.id,
        symbol: coinData.symbol,
        name: coinData.name,
        image: coinData.image?.large || coinData.image?.thumb || '',
        current_price: coinData.market_data?.current_price?.usd || 0,
        market_cap: coinData.market_data?.market_cap?.usd || 0,
        market_cap_rank: coinData.market_cap_rank || 0,
        fully_diluted_valuation:
          coinData.market_data?.fully_diluted_valuation?.usd || null,
        total_volume: coinData.market_data?.total_volume?.usd || 0,
        high_24h: coinData.market_data?.high_24h?.usd || 0,
        low_24h: coinData.market_data?.low_24h?.usd || 0,
        price_change_24h: coinData.market_data?.price_change_24h || 0,
        price_change_percentage_24h:
          coinData.market_data?.price_change_percentage_24h || 0,
        market_cap_change_24h: coinData.market_data?.market_cap_change_24h || 0,
        market_cap_change_percentage_24h:
          coinData.market_data?.market_cap_change_percentage_24h || 0,
        circulating_supply: coinData.market_data?.circulating_supply || 0,
        total_supply: coinData.market_data?.total_supply || null,
        max_supply: coinData.market_data?.max_supply || null,
        ath: coinData.market_data?.ath?.usd || 0,
        ath_change_percentage:
          coinData.market_data?.ath_change_percentage?.usd || 0,
        ath_date: coinData.market_data?.ath_date?.usd || '',
        atl: coinData.market_data?.atl?.usd || 0,
        atl_change_percentage:
          coinData.market_data?.atl_change_percentage?.usd || 0,
        atl_date: coinData.market_data?.atl_date?.usd || '',
        roi: coinData.roi || null,
        last_updated: coinData.last_updated || '',
      };

      return mappedCrypto;
    } catch (error) {
      console.error('Erro ao buscar moeda:', error);
      throw error;
    }
  },

  getMarketChart: async (
    id: string,
    days: number = 7
  ): Promise<MarketChartData> => {
    try {
      const { data: marketChartData } = await api.get(
        `/coins/${id}/market_chart`,
        {
          params: {
            vs_currency: 'usd',
            days,
          },
        }
      );

      console.log('marketChartData:', marketChartData);

      return marketChartData;
    } catch (error) {
      console.error('Erro ao buscar dados do gráfico:', error);
      throw error;
    }
  },

  searchCoins: async (query: string): Promise<SearchResult> => {
    try {
      const { data: searchResult } = await api.get('/search', {
        params: {
          query,
        },
      });

      console.log('searchResult:', searchResult);

      return searchResult;
    } catch (error) {
      console.error('Erro ao buscar moedas:', error);
      throw error;
    }
  },
};

export const useTopCoins = (initialData?: CryptoCurrency[]) => {
  return useQuery({
    queryKey: ['topCoins'],
    queryFn: cryptoApi.getTopCoins,
    initialData,
    staleTime: 1000 * 60 * 2, // 2 minutos
    gcTime: 1000 * 60 * 5, // 5 minutos
  });
};

export const useCoinById = (id: string, initialData?: CryptoCurrency) => {
  return useQuery({
    queryKey: ['coin', id],
    queryFn: () => cryptoApi.getCoinById(id),
    initialData,
    enabled: !!id,
    staleTime: 1000 * 60 * 1, // 1 minuto
    gcTime: 1000 * 60 * 3, // 3 minutos
  });
};

export const useMarketChart = (id: string, days: number = 7) => {
  return useQuery({
    queryKey: ['marketChart', id, days],
    queryFn: () => cryptoApi.getMarketChart(id, days),
    enabled: !!id,
    staleTime: 1000 * 60 * 1, // 1 minuto
    gcTime: 1000 * 60 * 3, // 3 minutos
  });
};

export const useSearchCoins = (query: string) => {
  return useQuery({
    queryKey: ['searchCoins', query],
    queryFn: () => cryptoApi.searchCoins(query),
    enabled: query.length >= 2,
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 10, // 10 minutos
  });
};
