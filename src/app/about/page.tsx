import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Experience from "@/components/sections/Experience";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "About Us | Who We Are",
  description: "Fagency is a team of 5 specialized freelancers based in Malappuram, Kerala with 1+ years of experience. We deliver expert web development, app development, graphic design, media production & digital marketing solutions.",
  keywords: [
    "about Fagency", "Fagency team", "digital agency team Kerala",
    "freelancer team Malappuram", "web developers Kerala",
    "app developers Malappuram", "design team Kerala",
    "IT professionals Malappuram", "digital experts Kerala"
  ],
  alternates: { canonical: "https://fagency.vercel.app/about" },
  openGraph: {
    title: "About Fagency | Digital Agency Team in Malappuram, Kerala",
    description: "Meet the Fagency team — 5 specialized freelancers delivering expert web, app, graphic design & digital marketing solutions from Malappuram, Kerala.",
    url: "https://fagency.vercel.app/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Fagency Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fagency | Digital Agency Team in Malappuram",
    description: "Meet the Fagency team — 5 specialized freelancers delivering expert digital solutions.",
    images: ["/og-image.jpg"],
  },
};

const aboutFaqs = [
  {
    q: "How many members are in your freelancer team?",
    a: "We are a tight-knit core team of 5 specialized freelancers, each focusing on different domains like development, design, and marketing to ensure expert execution."
  },
  {
    q: "Where is Fagency based?",
    a: "We are based in Malappuram, Kerala, but we operate as a fully digital agency, serving clients both locally and internationally."
  },
  {
    q: "Do you collaborate with other agencies?",
    a: "Yes, we often partner with other creative studios and agencies as a technical execution partner for high-end web and app development."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section for About */}
      <PageHero
        title1="WHO"
        title2="WE ARE."
        description="Fagency is a collective of specialized freelancers with over 1 years of experience in delivering high-impact digital solutions. We bridge the gap between complex technology and human-centered design."
      />

      {/* Main About Section */}
      <About />

      {/* Values Section */}
      <Values />

      {/* Experience Timeline / Stats */}
      <Experience />


      <Footer customFaqs={aboutFaqs} />
    </main>
  );
}
