import { CryptoCardList } from '@/components/implementations/crypto-card-list/crypto-card-list.component';
import { CryptoCurrency } from '@/types/crypto';

interface HomeProps {
  initialData: CryptoCurrency[];
}

export function Home({ initialData }: HomeProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Top 20 Criptomoedas
          </h1>
          <p className="text-muted-foreground text-lg">
            As principais criptomoedas por capitalização de mercado
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CryptoCardList initialData={initialData} />
        </div>
      </main>
    </div>
  );
}
