import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import { CheckCircle2, Zap, Target, Users } from "lucide-react";

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
      <section className="pt-40 pb-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
            OUR <span className="text-[#6200ea]">EXPERTISE.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From digital strategy to technical execution, we provide comprehensive solutions that drive growth and innovation. Explore our specialized services designed for the modern era.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <Services />

      {/* Detailed Service breakdown / Workflow */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-none">
                WHY CHOOSE <br /> <span className="text-[#6200ea]">OUR SOLUTIONS?</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Bespoke Approach", desc: "Every project is unique. We don't use templates; we build custom solutions from the ground up." },
                  { title: "Cutting-Edge Tech", desc: "We use the latest frameworks like Next.js, Flutter, and AI models to ensure your product is future-proof." },
                  { title: "Transparent Process", desc: "You're involved in every step. From initial wireframes to final deployment, we maintain full transparency." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#6200ea] group-hover:bg-[#6200ea] group-hover:text-white transition-all duration-500">
                      <CheckCircle2 size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Zap, label: "Fast Performance", val: "99.9%" },
                { icon: Target, label: "SEO Optimized", val: "100%" },
                { icon: Users, label: "User Satisfaction", val: "10/10" },
                { icon: CheckCircle2, label: "Code Quality", val: "A+" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center text-center group hover:border-[#6200ea]/30 transition-all duration-500">
                  <stat.icon size={32} className="text-[#6200ea] mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer customFaqs={serviceFaqs} />
    </main>
  );
}
