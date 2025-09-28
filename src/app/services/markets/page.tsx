'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Market {
  id: number;
  marketname: string;
  description?: string;
  latitude: number;
  longitude: number;
  state: string;
}

export default function MarketListPage() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/market')
      .then(res => res.json())
      .then(data => {
        if (data.success) setMarkets(data.data);
      });
  }, []);

  const goToMap = (market: Market) => {
    router.push(`/services/markets/${market.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50 py-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-8 text-center">
        Explore Markets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {markets.map(market => (
          <div
            key={market.id}
            className="bg-white/80 backdrop-blur-md border border-green-200 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between p-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-green-900 mb-2">
                {market.marketname}
              </h2>
              <p className="text-gray-700 mb-2 line-clamp-2">{market.description || 'No description available.'}</p>
              <p className="text-sm text-green-800 font-medium">{market.state}</p>
            </div>

            <button
              onClick={() => goToMap(market)}
              className="mt-6 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 font-semibold shadow hover:shadow-md transition"
            >
              View on Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
