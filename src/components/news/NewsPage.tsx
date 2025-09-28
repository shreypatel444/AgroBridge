


"use client";

import { useEffect, useState } from "react";
import Err from "./Error";
import Loading from "./Loading";

type NewsItem = {
  title: string;
  description: string;
  link: string;
  image_url: string;
  pubDate: string;
  source_id: string;
};

const NewsPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");

      const data = await res.json();
      if (!data.success || !Array.isArray(data.data))
        throw new Error("Invalid data format");

      setNews(data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!news.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [news]);

  if (loading) return <Loading />;
  if (error) return <Err message={error} />;
  if (!news.length) return <Err message="No news available." />;

  const currentNews = news[currentIndex];
  const formattedDate = new Date(currentNews.pubDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-green-900">
          🌿 Latest Agriculture News
        </h1>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-transform transform hover:-translate-y-1">
          {currentNews.image_url && (
            <img
              src={currentNews.image_url}
              alt={currentNews.title}
              className="w-full md:w-1/3 object-cover h-64 md:h-auto"
            />
          )}
          <div className="p-4 md:p-6 md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-green-900">
                {currentNews.title}
              </h2>
              <p className="text-gray-700 mb-3 line-clamp-3">
                {currentNews.description}
              </p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
              <span>📰 {currentNews.source_id}</span>
              <span>📅 {formattedDate}</span>
            </div>
            <a
              href={currentNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-xl transition-colors text-center"
            >
              Read Full Article 📝
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
