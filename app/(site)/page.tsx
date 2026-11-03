import AboutSection from "./components/about-section"
import ContactForm from "./components/contact-from"
import ContactSection from "./components/contact-section"
import DeliverySection from "./components/delivery-section"
import EnquiryButton from "./components/enquiry-button"
import FAQSection from "./components/faq-section"
import HomeBanner from "./components/hero-banner"
import HeroBannerTwo from "./components/hero-banner-2"
import IndustrySection from "./components/industry-section"
import PortfolioSection from "./components/portfolio-section"
import StackCards from "./components/stack-card"
import TechStackSection from "./components/teach-stack-section"
import TestimonialCarousel from "./components/testimonial"
import WhatsAppButton from "./components/whatsapp-button"

const HomePage = () => {
  return (
    <main>
      {/* <EnquiryButton /> */}
      {/* <HomeBanner /> */}
      <HeroBannerTwo />
      <StackCards />
      <AboutSection />
      <PortfolioSection />
      <DeliverySection />
      <TechStackSection />
      <IndustrySection />
      <TestimonialCarousel />
      <FAQSection />
      <ContactForm />
    </main>
  )
}

export default HomePage
