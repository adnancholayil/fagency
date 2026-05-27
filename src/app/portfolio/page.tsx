import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import IndustryFocus from "@/components/sections/IndustryFocus";
import CallToAction from "@/components/sections/CallToAction";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Portfolio | Our Work & Projects",
  description: "Explore Fagency's portfolio of web apps, mobile apps, graphic design, and media production projects from Malappuram, Kerala. See how we deliver premium digital experiences.",
  keywords: [
    "Fagency portfolio", "web design portfolio Kerala",
    "app development projects Malappuram", "graphic design portfolio Kerala",
    "digital agency projects Kerala", "video production portfolio",
    "branding portfolio Malappuram", "UI UX projects Kerala",
    "website showcase Kerala", "software portfolio India"
  ],
  alternates: { canonical: "https://fagency.vercel.app/portfolio" },
  openGraph: {
    title: "Portfolio | Web, App & Design Work - Fagency",
    description: "See our best web, app, graphic design & media projects. Premium digital experiences crafted in Malappuram, Kerala.",
    url: "https://fagency.vercel.app/portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Fagency Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Our Best Work - Fagency Kerala",
    description: "Explore our best web, app & design projects from Malappuram, Kerala.",
    images: ["/og-image.jpg"],
  },
};

const portfolioFaqs = [
  {
    q: "Can I see live examples of your work?",
    a: "Absolutely. Many of our projects are public, and we can provide live links to the websites and applications we've deployed upon request."
  },
  {
    q: "Do you handle the branding for these projects?",
    a: "Yes, for many of the featured works, we handled the entire lifecycle including logo design, color palette selection, and full brand identity."
  },
  {
    q: "What industries have you worked in?",
    a: "We have experience across E-commerce, personal branding for creators, real estate, and professional service portfolios."
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Hero Section for Portfolio */}
      <PageHero 
        title1="SELECTED"
        title2="WORKS."
        description="A collection of our most challenging and rewarding projects. Each piece demonstrates our commitment to performance, design, and technical excellence."
      />

      {/* Main Portfolio Grid */}
      <Portfolio />

      {/* Industry Focus Section */}
      <IndustryFocus />

      {/* Call to Action for Projects */}
      <CallToAction />

      <Footer customFaqs={portfolioFaqs} />
    </main>
  );
}
