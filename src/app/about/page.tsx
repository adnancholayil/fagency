import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import { Rocket, Shield, Heart, Lightbulb } from "lucide-react";

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
      <section className="pt-40 pb-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
            WHO <span className="text-[#6200ea]">WE ARE.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Fagency is a collective of specialized freelancers with over 1 year of experience in delivering high-impact digital solutions. We bridge the gap between complex technology and human-centered design.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Values Section */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              OUR CORE <span className="text-[#6200ea]">VALUES.</span>
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
                <value.icon size={40} className="text-[#6200ea] mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline / Stats */}
      <section className="py-32 px-6 bg-[#080808] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">
              A YEAR OF <br /> <span className="text-[#6200ea]">RAPID GROWTH.</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 text-lg">
              Starting as a small group of ambitious freelancers in Malappuram, we have quickly evolved into a go-to digital agency for local and international clients.
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-5xl font-black text-white mb-2">12+</div>
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#6200ea]">Projects Done</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">1+</div>
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#6200ea]">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">100%</div>
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#6200ea]">Commitment</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-[#6200ea]/10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer customFaqs={aboutFaqs} />
    </main>
  );
}
