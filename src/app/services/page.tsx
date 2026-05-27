import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Our Services | Web, App, Design & Marketing",
  description: "Fagency offers professional Web Development, App Development, Software Development, Graphic Design, Media Production & Digital Marketing in Malappuram, Kerala. Get a free quote today.",
  keywords: [
    "web development services Kerala", "app development services Malappuram",
    "software development Malappuram", "graphic design services Kerala",
    "digital marketing services Malappuram", "media production Kerala",
    "UI UX design Kerala", "branding services Malappuram",
    "SEO services Kerala", "social media management Malappuram",
    "video editing Kerala", "Next.js development Kerala"
  ],
  alternates: { canonical: "https://fagency.vercel.app/services" },
  openGraph: {
    title: "Services | Web, App, Design & Digital Marketing - Fagency",
    description: "Professional web development, app development, graphic design, media production & digital marketing services in Malappuram, Kerala.",
    url: "https://fagency.vercel.app/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Fagency Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web, App & Design - Fagency Kerala",
    description: "Expert digital services in web, app, design & marketing from Malappuram, Kerala.",
    images: ["/og-image.jpg"],
  },
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
