import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";
import { ExternalLink, Layout, Code, BarChart3 } from "lucide-react";

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
      <section className="pt-40 pb-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
            SELECTED <span className="text-[#6200ea]">WORKS.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of our most challenging and rewarding projects. Each piece demonstrates our commitment to performance, design, and technical excellence.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <Portfolio />

      {/* Industry Focus Section */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                INDUSTRY <span className="text-[#6200ea]">FOCUS.</span>
              </h2>
              <p className="text-white/40 leading-relaxed">
                While we are versatile, we specialize in creating digital impact for these core sectors.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Layout, title: "Fintech & E-commerce", desc: "Building secure, high-conversion platforms for the modern economy." },
                { icon: Code, title: "SaaS & Tech Startups", desc: "Scalable software architectures for rapidly growing businesses." },
                { icon: BarChart3, title: "Corporate & Branding", desc: "Digital presence that reflects authority and professional excellence." },
                { icon: ExternalLink, title: "Personal Branding", desc: "Unique portfolios and websites for creators and individuals." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#6200ea]/20 transition-all duration-500">
                  <div className="text-[#6200ea] mt-1"><item.icon size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Projects */}
      <section className="py-32 px-6 bg-[#080808] border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] pointer-events-none select-none">
          PROJECTS
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10">
            HAVE AN IDEA <span className="text-[#6200ea]">IN MIND?</span>
          </h2>
          <p className="text-white/40 text-lg mb-12">
            Let&apos;s turn your vision into a high-performance digital reality.
          </p>
          <a href="/contact" className="px-12 py-5 bg-[#6200ea] text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(98,0,234,0.3)]">
            Start a project
          </a>
        </div>
      </section>

      <Footer customFaqs={portfolioFaqs} />
    </main>
  );
}
