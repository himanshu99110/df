import type { Metadata } from "next";
import { ComingSoon } from "../_components/coming-soon";
import LmsClient from "./LmsClient";

export const metadata: Metadata = {
    title: "Lead Management Sotware - Digital Fueled IT Private Limited",
    description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
    keywords: "Website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
    return (
        <>
            <LmsClient />
        </>
    );
}