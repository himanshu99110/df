import type { Metadata } from "next";
import WhatsAppBusinessAPI from "./WhatsappApiClient";

export const metadata: Metadata = {
  title: "WhatsApp Api Services - Digital Fueled IT Private Limited",
  description: "Offering WhatsApp API Services in Delhi to enhance customer communication, automate responses, and streamline business interactions with seamless integration.",
  keywords: "WhatsApp API Service in Delhi NCR, WhatsApp API Service Noida."
};

export default function AboutPage() {
  return <WhatsAppBusinessAPI />;
}