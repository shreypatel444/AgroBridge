import Hero from "@/components/Hero";
import NewsPage from "@/components/news/NewsPage";
import Solutions from "@/components/Solutions";
import { SignedIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="space-y-4">
      <Hero />
      <Solutions />

      {/* ✅ Only visible if user is logged in */}
      <SignedIn>
        <NewsPage />
      </SignedIn>
    </div>
  );
}
