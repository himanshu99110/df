import type { Metadata } from "next";
import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { BentoFeatures } from "./_components/BentoFeatures";
import { AutomationsFeature } from "./_components/AutomationsFeature";
import { PipelineFeature } from "./_components/PipelineFeature";
import { OnboardingSteps } from "./_components/OnboardingSteps";
import { CTASection } from "./_components/CTASection";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";
import { DashboardFeature } from "./_components/DashboardFeature";
import { InboxCapabilities } from "./_components/InboxCapabilities";
import { ContactsFeature } from "./_components/ContactsFeature";
import { BroadcastsTemplates } from "./_components/BroadcastsTemplates";
import { IntegrationSecurity } from "./_components/IntegrationSecurity";
import { DeveloperApi } from "./_components/DeveloperApi";
import { AdminQuota } from "./_components/AdminQuota";
import { PlatformEssentials } from "./_components/PlatformEssentials";
import { PricingSection } from "./_components/PricingSection";
import { Connect } from "./_components/Connect";
import { Features } from "./_components/Features";
import { IndustriesSection } from "./_components/IndustriesSection";
import { BulkMessage } from "./_components/BulkMessage";
import { Stats } from "./_components/Stats";
import { QuickContact } from "./_components/QuickForm";

export const metadata: Metadata = {
    title: "WhatsApp CRM - Digital Fueled IT Private Limited",
    description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
    keywords: "Website development company in Delhi NCR, Website Development Company Noida."
};

export default function AboutPage() {
    return (
        <>
            <div className="min-h-screen h-full w-full bg-white text-slate-900 font-sans"
                style={{
                    backgroundImage: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.03), transparent 40%), radial-gradient(circle at 80% 60%, rgba(37,211,102,0.03), transparent 45%)"
                }}
            >
                {/* <Nav /> */}
                <main>
                    <Hero />
                    <Connect />
                    <Features />
                    <BulkMessage />
                    <IndustriesSection />
                    <Stats />
                    {/* <InboxCapabilities />
                    <ContactsFeature />
                    <AutomationsFeature />
                    <PipelineFeature />
                    <BroadcastsTemplates />
                    <IntegrationSecurity />
                    <DeveloperApi />
                    <PlatformEssentials />
                    <OnboardingSteps /> */}
                    <PricingSection />
                    <CTASection />
                    {/* <FAQ /> */}
                    <QuickContact />
                </main>
                {/* <Footer /> */}
            </div>
        </>
    );
}