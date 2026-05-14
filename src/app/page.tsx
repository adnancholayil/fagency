import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      
      {/* About Teaser */}
      <section className="py-20 border-t border-white/[0.05]">
        <About />
        <div className="flex justify-center -mt-10 mb-20">
          <Link href="/about" className="group flex items-center gap-3 text-white/50 hover:text-[#6200ea] transition-all font-bold tracking-widest text-xs uppercase">
            Learn more about us <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 border-t border-white/[0.05]">
        <Services />
        <div className="flex justify-center -mt-10 mb-20">
          <Link href="/services" className="group flex items-center gap-3 text-white/50 hover:text-[#6200ea] transition-all font-bold tracking-widest text-xs uppercase">
            Explore all services <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20 border-t border-white/[0.05]">
        <Portfolio />
        <div className="flex justify-center -mt-10 mb-20">
          <Link href="/portfolio" className="group flex items-center gap-3 text-white/50 hover:text-[#6200ea] transition-all font-bold tracking-widest text-xs uppercase">
            View full portfolio <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
