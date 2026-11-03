import type { Metadata } from "next";
import Works from "./WorkClient";

export const metadata: Metadata = {
  title: "Portfolio - Digital Fueled IT Private Limited",
  description: "Explore our portfolio showcasing successful projects in Delhi, highlighting our expertise in brand design, strategy, and innovative solutions.",
  keywords: "Website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
  return <Works />;
}