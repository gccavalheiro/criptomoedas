import { CoinDetail } from '@/components/implementations/coin-detail/coin-detail.component';
import { getCoinByIdServer } from '@/services/server-api';

interface CoinDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoinDetailPage(props: CoinDetailPageProps) {
  const { id } = await props.params;

  const initialData = await getCoinByIdServer(id);

  return <CoinDetail initialData={initialData} coinId={id} />;
}
