import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Experience from "@/components/sections/Experience";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Fagency — a team of 5 specialized freelancers based in Malappuram, Kerala. We deliver expert web, app, graphic design, and digital marketing solutions.",
  alternates: { canonical: "https://fagency.vercel.app/about" },
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
