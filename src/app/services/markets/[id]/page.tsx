'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

interface Market {
  id: number;
  marketname: string;
  latitude: number;
  longitude: number;
  state: string;
}

const containerStyle = {
  width: '100%',
  height: '100vh',
};

export default function MarketMapPage() {
  const params = useParams();
  const marketId = params.id;
  const [market, setMarket] = useState<Market | null>(null);
  const [showInfo, setShowInfo] = useState(true);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  useEffect(() => {
    fetch('/api/market')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const m = data.data.find((mk: Market) => mk.id.toString() === marketId);
          setMarket(m);
        }
      });
  }, [marketId]);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded || !market) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: market.latitude, lng: market.longitude }}
      zoom={15}
    >
      <Marker
        position={{ lat: market.latitude, lng: market.longitude }}
        onClick={() => setShowInfo(true)}
      />

      {showInfo && (
        <InfoWindow
          position={{ lat: market.latitude, lng: market.longitude }}
          onCloseClick={() => setShowInfo(false)}
        >
          <div className="text-sm font-semibold">
            <h2 className="text-green-800">{market.marketname}</h2>
            <p className="text-gray-700">{market.state}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
