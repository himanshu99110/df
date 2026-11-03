import type { Metadata } from "next";
import Sitemap from "./SitemapClient";

export const metadata: Metadata = {
  title: "Best SEO Company in Delhi | Digital Fueled",
  description: "Boost your online presence with the best SEO company in Delhi. Expert strategies, higher rankings, and more traffic for your business. Get started today!",
  keywords: "Search Engine Optimization (SEO) Company in Delhi"
};

export default function AboutPage() {
  return <Sitemap />;
}