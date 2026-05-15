import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import IndustryFocus from "@/components/sections/IndustryFocus";
import CallToAction from "@/components/sections/CallToAction";

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
      <section className="pt-32 pb-16 px-6 bg-[#050505] flex flex-col items-center justify-center min-h-[50vh]">
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.1] tracking-tight text-white mb-8">
            SELECTED <span className="text-[#FFC107]">WORKS.</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            A collection of our most challenging and rewarding projects. Each piece demonstrates our commitment to performance, design, and technical excellence.
          </p>
        </div>
      </section>

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
