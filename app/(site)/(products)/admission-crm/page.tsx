import type { Metadata } from "next";
import { ComingSoon } from "../_components/coming-soon";

export const metadata: Metadata = {
    title: "Admission CRM - Digital Fueled IT Private Limited",
    description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
    keywords: "Website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
    return (
        <>
            <div className="min-h-screen bg-background">
                <ComingSoon
                    title="Admission CRM"
                    subtitle="Streamline student enrollments and tracking."
                />
            </div>
        </>
    );
}