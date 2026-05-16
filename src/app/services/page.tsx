import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Fagency offers Web Development, App Development, Software Development, Graphic Design, Media Production & Digital Marketing in Malappuram, Kerala.",
  alternates: { canonical: "https://fagency.vercel.app/services" },
};

const serviceFaqs = [
  {
    q: "What technical stack do you specialize in?",
    a: "We specialize in modern, high-performance technologies including React, Next.js, Flutter, and Node.js. For design, we use industry standards like Figma and Adobe Creative Suite."
  },
  {
    q: "Do you offer unlimited revisions for designs?",
    a: "We provide up to 3 major revision cycles during the design phase to ensure the final product perfectly aligns with your vision while staying on schedule."
  },
  {
    q: "How do you handle project management?",
    a: "We use agile methodologies with weekly sprints and transparent communication through tools like Trello or Slack, ensuring you're always updated on the progress."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Hero Section for Services */}
      <PageHero 
        title1="OUR"
        title2="EXPERTISE."
        description="From digital strategy to technical execution, we provide comprehensive solutions that drive growth and innovation. Explore our specialized services designed for the modern era."
      />

      {/* Main Services Grid */}
      <Services />

      {/* Detailed Service breakdown / Workflow */}
      <WhyChooseUs />

      <Footer customFaqs={serviceFaqs} />
    </main>
  );
}
