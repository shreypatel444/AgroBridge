import { NextResponse } from "next/server";

interface NewsArticle {
  title?: string;
  link?: string;
  description?: string;
  pubDate?: string;
  [key: string]: unknown; // allow extra fields
}

let cachedNews: NewsArticle[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function GET() {
  const now = Date.now();

  if (cachedNews.length && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json({ success: true, data: cachedNews });
  }

  try {
    const API_KEY = process.env.NEWSDATA_API_KEY;
    if (!API_KEY) {
      throw new Error("Missing NEWSDATA_API_KEY in environment variables");
    }

    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=agriculture&language=en`
    );

    const json: { results?: NewsArticle[] } = await res.json();

    const newsArray = Array.isArray(json.results) ? json.results : [];

    cachedNews = newsArray;
    lastFetchTime = now;

    return NextResponse.json({ success: true, data: cachedNews });
  } catch (error: unknown) {
    if (cachedNews.length) {
      return NextResponse.json({ success: true, data: cachedNews });
    }
    return NextResponse.json({
      success: false,
      data: [],
      message: "Failed to fetch news",
    });
  }
}

