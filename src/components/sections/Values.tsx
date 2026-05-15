import { Rocket, Shield, Heart, Lightbulb } from "lucide-react";

export default function Values() {
  return (
    <section className="py-32 px-6 bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
            OUR CORE <span className="text-[#FFC107]">VALUES.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">The principles that guide our work and define our agency culture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Rocket, title: "Innovation", desc: "We constantly push the boundaries of what's possible in the digital realm." },
            { icon: Shield, title: "Integrity", desc: "Honest communication and reliable delivery are the foundation of our client relationships." },
            { icon: Heart, title: "Passion", desc: "We are deeply passionate about building products that users truly love." },
            { icon: Lightbulb, title: "Creativity", desc: "We find unique, creative solutions to complex technical challenges." }
          ].map((value, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 group">
              <value.icon size={40} className="text-[#FFC107] mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
