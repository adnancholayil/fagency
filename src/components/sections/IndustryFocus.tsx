import { ExternalLink, Layout, Code, BarChart3 } from "lucide-react";

export default function IndustryFocus() {
  return (
    <section className="py-20 px-6 bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              INDUSTRY <span className="text-[#FFC107]">FOCUS.</span>
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
              <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#FFC107]/20 transition-all duration-500">
                <div className="text-[#FFC107] mt-1"><item.icon size={24} /></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
