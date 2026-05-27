import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import ContactInfo from "@/components/sections/ContactInfo";
import OfficeHours from "@/components/sections/OfficeHours";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description: "Contact Fagency — a digital agency in Malappuram, Kerala. Get a free consultation for web development, app development, graphic design, or any digital solution. We respond within 24 hours.",
  keywords: [
    "contact Fagency", "hire digital agency Kerala",
    "web development quote Malappuram", "app development quote Kerala",
    "digital agency contact Malappuram", "free consultation Kerala",
    "hire web developer Kerala", "hire designer Malappuram",
    "get quote digital marketing Kerala", "IT services contact Malappuram"
  ],
  alternates: { canonical: "https://fagency.vercel.app/contact" },
  openGraph: {
    title: "Contact Fagency | Free Quote & Consultation - Malappuram",
    description: "Get in touch with Fagency for a free consultation. Web, app, design & digital marketing services in Malappuram, Kerala. Fast 24-hour response.",
    url: "https://fagency.vercel.app/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Fagency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fagency | Free Consultation - Kerala",
    description: "Get a free consultation from Fagency, digital agency in Malappuram, Kerala.",
    images: ["/og-image.jpg"],
  },
};

const contactFaqs = [
  {
    q: "How fast will I get a response?",
    a: "We typically respond to new inquiries within 12-24 hours. For urgent project needs, we recommend reaching out via WhatsApp for immediate connection."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes, every potential project starts with a free discovery call where we discuss your goals, budget, and how we can help you achieve success."
  },
  {
    q: "Can we meet in person?",
    a: "If you're based in Malappuram or nearby areas in Kerala, we can certainly arrange an in-person meeting. Otherwise, we are happy to connect via Google Meet or Zoom."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section for Contact */}
      <PageHero
        title1="GET IN"
        title2="TOUCH."
        description="Ready to start your next digital chapter? We are here to answer any questions and kickstart your project. Reach out via the form below or through our direct channels."
      />

      {/* Main Contact Section (Form + Map/Info) */}
      <div className="py-0">
        <Contact />
      </div>

      {/* Detailed Contact Info Grid */}
      <ContactInfo />

      {/* Office Hours & Quick Info */}
      <OfficeHours />

      <Footer customFaqs={contactFaqs} />
    </main>
  );
}
