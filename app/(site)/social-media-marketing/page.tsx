import type { Metadata } from "next";
import SocialMediaMarketing from "./SocialMediaClient";

export const metadata: Metadata = {
  title: "Social Media Marketing - Digital Fueled IT Private Limited",
  description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
  keywords: "Social Media Marketing Service in Delhi NCR, Social Media Marketing Service Noida."
};

export default function AboutPage() {
  return <SocialMediaMarketing />;
}