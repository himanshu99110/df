import type { Metadata } from "next";
import ContentDevelopment from "./ContentDevClient";

export const metadata: Metadata = {
  title: "Content Development - Digital Fueled IT Private Limited",
  description: "Providing expert Content Development services in Delhi to create engaging, high-quality content that resonates with your audience and drives results.",
  keywords: "website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
  return <ContentDevelopment />;
}