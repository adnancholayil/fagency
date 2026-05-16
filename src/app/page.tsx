import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fagency | Digital Agency in Malappuram, Kerala",
  description: "Fagency is a top digital agency in Malappuram, Kerala offering Web Development, App Development, Graphic Design, Media Production & Digital Marketing with 1+ years of experience.",
  alternates: { canonical: "https://fagency.vercel.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fagency",
  description: "Professional digital agency in Malappuram, Kerala",
  url: "https://fagency.vercel.app",
  logo: "https://fagency.vercel.app/logo.PNG",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN"
  },
  sameAs: ["https://instagram.com/fagency.it"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Production" } },
    ]
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#050505]">
        <Navbar />
        <Hero />
        
        {/* About Teaser */}
        <section>
          <About />
          <div className="flex justify-center -mt-20 mb-20">
            <Link href="/about" className="group flex items-center gap-3 text-black/50 hover:text-black transition-all font-bold tracking-widest text-xs uppercase">
              Learn more about us <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Services Teaser */}
        <section className="border-t border-white/[0.05]">
          <Services />
          <div className="flex justify-center -mt-10 mb-20">
            <Link href="/services" className="group flex items-center gap-3 text-white/50 hover:text-[#FFC107] transition-all font-bold tracking-widest text-xs uppercase">
              Explore all services <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Portfolio Teaser */}
        <section className="border-t border-white/[0.05]">
          <Portfolio />
          <div className="flex justify-center -mt-10 mb-20">
            <Link href="/portfolio" className="group flex items-center gap-3 text-white/50 hover:text-[#FFC107] transition-all font-bold tracking-widest text-xs uppercase">
              View full portfolio <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
