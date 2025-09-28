"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Broker {
  id: string;
  name: string;
  email: string;
  category: string;
  state: string;
  market: {
    id: number;
    marketname: string;
    latitude: number;
    longitude: number;
  };
  createdAt: string;
  updatedAt: string;
}

export default function BrokerProfilePage() {
  const params = useParams();
  const brokerId = params.id;
  const [broker, setBroker] = useState<Broker | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/broker")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const b = data.data.find((br: Broker) => br.id === brokerId);
          setBroker(b);
        }
      });
  }, [brokerId]);

  if (!broker)
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-green-50">
        {/* Spinner */}
        <div className="w-24 h-24 border-8 border-green-200 border-t-green-600 rounded-full animate-spin mb-6"></div>
        <p className="text-green-800 text-xl font-semibold">
          Loading Broker Profile...
        </p>
      </div>
    );

  const goToMarketMap = () => {
    router.push(`/services/markets/${broker.market.id}`); // redirect to market map page
  };

  const goToBrokersService = () => {
    router.push("/services/brokers");
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center">
          <div className="text-8xl mb-6">🧑‍🌾</div>
          <h1 className="text-4xl font-extrabold text-green-900">
            {broker.name}
          </h1>
          <p className="text-gray-600 mt-1 text-lg">{broker.email}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          <span className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full shadow">
            🏷 {broker.category}
          </span>
          <span className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full shadow">
            📍 {broker.state}
          </span>
          <span className="bg-yellow-100 text-yellow-800 font-semibold px-4 py-2 rounded-full shadow">
            🌾 {broker.market.marketname}
          </span>
        </div>

        {/* Details */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Contact Info 📧
            </h2>
            <p className="text-gray-700">
              <strong>Email:</strong> {broker.email}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Market Location 📌
            </h2>
            <p className="text-gray-700">
              <strong>Market:</strong> {broker.market.marketname}
            </p>
            <p className="text-gray-700">
              <strong>Latitude:</strong> {broker.market.latitude}
            </p>
            <p className="text-gray-700">
              <strong>Longitude:</strong> {broker.market.longitude}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-md col-span-full">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Timestamps 🗓
            </h2>
            <p className="text-gray-700">
              <strong>Created At:</strong>{" "}
              {new Date(broker.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-700">
              <strong>Updated At:</strong>{" "}
              {new Date(broker.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition font-semibold"
            onClick={goToBrokersService}
          >
            Brokers List 🌿
          </button>
          <button
            onClick={goToMarketMap}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition font-semibold"
          >
            View Market Map 🗺
          </button>
        </div>
      </div>
    </div>
  );
}
