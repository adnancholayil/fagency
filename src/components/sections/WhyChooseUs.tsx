import { CheckCircle2, Zap, Target, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-10 leading-none">
              WHY CHOOSE <br /> <span className="text-[#FFC107]">OUR SOLUTIONS?</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Bespoke Approach", desc: "Every project is unique. We don't use templates; we build custom solutions from the ground up." },
                { title: "Cutting-Edge Tech", desc: "We use the latest frameworks like Next.js, Flutter, and AI models to ensure your product is future-proof." },
                { title: "Transparent Process", desc: "You're involved in every step. From initial wireframes to final deployment, we maintain full transparency." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-black transition-all duration-500">
                    <CheckCircle2 size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
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
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center text-center group hover:border-[#FFC107]/30 transition-all duration-500">
                <stat.icon size={32} className="text-[#FFC107] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest font-semibold text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
