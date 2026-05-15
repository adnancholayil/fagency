"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Smartphone, Monitor, Palette, Camera, Share2, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development & Designing",
    desc: "Modern, responsive, and high-performance websites built with the latest technologies.",
    icon: Code2,
    highlight: false,
  },
  {
    title: "App Development & Designing",
    desc: "Bespoke mobile applications for iOS and Android with seamless user experiences.",
    icon: Smartphone,
    highlight: true,
  },
  {
    title: "Software Development & Designing",
    desc: "Scalable enterprise software solutions tailored to your specific business needs.",
    icon: Monitor,
    highlight: false,
  },
  {
    title: "Graphics Designing",
    desc: "Stunning visual identities, branding, and marketing materials that stand out.",
    icon: Palette,
    highlight: false,
  },
  {
    title: "Media Production",
    desc: "Professional photography, videography, and expert video/photo editing services.",
    icon: Camera,
    highlight: false,
  },
  {
    title: "Digital Marketing",
    desc: "Comprehensive SEO, SMM, and targeted ad campaigns to grow your digital presence.",
    icon: Share2,
    highlight: false,
  }
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".service-line", 
      { y: 60 },
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".service-header",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".service-card", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="services" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="service-header text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            <div className="overflow-hidden">
              <span className="service-line block">Innovating Tomorrow.</span>
            </div>
            <div className="overflow-hidden">
              <span className="service-line block text-[#FFC107]">Building Today.</span>
            </div>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success.
          </p>
        </div>

        <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card group cursor-pointer relative p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04] hover:border-[#FFC107]/40 flex flex-col justify-between min-h-[300px] ${
                s.highlight ? "shadow-[0_0_40px_rgba(255, 193, 7,0.1)] border-[#FFC107]/20" : ""
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFC107]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#FFC107] group-hover:scale-110 transition-transform duration-500">
                  <s.icon size={22} />
                </div>
                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-[#FFC107] group-hover:border-[#FFC107] group-hover:text-black">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
