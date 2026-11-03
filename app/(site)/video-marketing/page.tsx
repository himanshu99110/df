import type { Metadata } from "next";
import VideoMarketing from "./VideoMarketingClient";
export const metadata: Metadata = {
  title: "Video Marketing - Digital Fueled IT Private Limited",
  description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
  keywords: "Video Marketing Company in Delhi"
};

export default function AboutPage() {
  return <VideoMarketing />;
}