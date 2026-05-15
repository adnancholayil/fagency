"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-header", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 90%",
        }
      }
    );

    gsap.fromTo(".contact-form", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background glow matching the theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-[#FFC107]/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="contact-header text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's work together.
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-form bg-[#0A0A0A] p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
          
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all duration-300 resize-none"
              />
            </div>

            <button className="w-full py-5 bg-[#FFC107] text-black rounded-xl font-bold transition-all hover:bg-[#FFB300] flex items-center justify-center gap-3 text-sm shadow-[0_0_20px_rgba(255, 193, 7,0.3)]">
              Get in touch
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
