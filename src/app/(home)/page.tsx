import { Home } from '@/components/implementations/home/home.component';
import { getTopCoinsServer } from '@/services/server-api';

export default async function HomePage() {
  const initialData = await getTopCoinsServer();

  return <Home initialData={initialData} />;
}
