import type { Metadata } from "next";
import BrandStrategyPositioning from "./BrandStrategyClient";

export const metadata: Metadata = {
  title: "Brand Strategy and Positioning - Digital Fueled IT Private Limited",
  description: "Providing expert Brand Strategy and Positioning services in Delhi to define your brand's vision and stand out in the market.",
  keywords: "Website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
  return <BrandStrategyPositioning />;
}