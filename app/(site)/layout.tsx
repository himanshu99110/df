import { Navbar } from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import WhatsAppButton from "./components/whatsapp-button"
import Chatbot from "./components/ChatbotWidget"
// import CustomCursor from "@/components/CustomCursor"
export const metadata = {
  title: "Best Digital Marketing and Web Development Company in Delhi | Digital Fueled",
  description: "Digital Fueled is the Delhi Ncr based website designing company and website development company in Noida, Delhi Ncr.",
  keywords: "Website Development company in Delhi NCR, Website Development Company Noida.",
  verification: {
    google: '5696IQ-_Ui5FP3-LCFukqKSWd-UjMg5v4wsnixyIjpA',
  },
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`bg-main-body overflow-x-clip antialiased`}>
      <Navbar />
      <Toaster />
      <WhatsAppButton />
      <Chatbot />
      {children}
      <Footer />
      {/* <CustomCursor /> */}
    </div>
  )
}
