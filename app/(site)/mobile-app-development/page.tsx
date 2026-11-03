import type { Metadata } from "next";
import MobileAppDevelopment from "./MobileAppDevClient";

export const metadata: Metadata = {
  title: "Mobile App Development - Digital Fueled IT Private Limited",
  description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
  keywords: "website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
  return <MobileAppDevelopment />;
}