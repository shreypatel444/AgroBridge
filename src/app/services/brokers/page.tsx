"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Broker {
  id: string;
  name: string;
  email: string;
  category: string;
  state: string;
  market: {
    marketname: string;
  };
}

export default function BrokersListPage() {
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // applied query
  const router = useRouter();

  useEffect(() => {
    fetch("/api/broker")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBrokers(data.data);
      });
  }, []);

  const goToProfile = (id: string) => {
    router.push(`/services/brokers/${id}`);
  };

  // Filter brokers only when searchQuery is set
  const filteredBrokers = searchQuery
    ? brokers.filter((broker) =>
        broker.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : brokers; // show all initially

  const handleSearch = () => {
    setSearchQuery(searchInput); // apply search when button is clicked
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-4xl font-extrabold text-green-900 mb-6 text-center">
        🌿 Brokers List
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8 flex gap-2">
        <input
          type="text"
          placeholder="Enter broker name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(); // trigger search on Enter
          }}
          className="flex-1 px-4 py-2 rounded-full border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 font-semibold shadow transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBrokers.length > 0 ? (
          filteredBrokers.map((broker) => (
            <div
              key={broker.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border-t-4 border-green-500 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4">🧑‍🌾</div>
                <h2 className="text-2xl font-bold text-green-900">
                  {broker.name}
                </h2>
                <p className="text-gray-600 mt-1">{broker.email}</p>
                <p className="text-green-700 font-medium mt-1">
                  {broker.category}
                </p>
                <p className="text-gray-500 mt-1">{broker.market.marketname}</p>
                <p className="text-gray-500 mt-1">{broker.state}</p>
              </div>
              <button
                onClick={() => goToProfile(broker.id)}
                className="mt-6 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 font-semibold shadow hover:shadow-md transition"
              >
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 col-span-full">
            No brokers found.
          </p>
        )}
      </div>
    </div>
  );
}
