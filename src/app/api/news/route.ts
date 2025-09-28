import { NextResponse } from "next/server";

let cachedNews: any[] = [];
let lastFetchTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function GET() {
  const now = Date.now();

  if (cachedNews.length && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json({ success: true, data: cachedNews });
  }

  try {
    // Replace with your NewsData.io API key
    const API_KEY = process.env.NEWSDATA_API_KEY;
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=agriculture&language=en`
    );

    const json = await res.json();

    // NewsData.io returns `results` array
    const newsArray = Array.isArray(json.results) ? json.results : [];

    cachedNews = newsArray;
    lastFetchTime = now;

    return NextResponse.json({ success: true, data: cachedNews });
  } catch (err) {
    if (cachedNews.length) return NextResponse.json({ success: true, data: cachedNews });
    return NextResponse.json({ success: false, data: [], message: "Failed to fetch news" });
  }
}
