"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  {
    num: "01",
    title: "4+ Years of Tech Expertise",
  },
  {
    num: "02",
    title: "Transparent Agile Process",
  },
  {
    num: "03",
    title: "Dedicated Full-Stack Teams",
  },
  {
    num: "04",
    title: "Support & Maintenance",
  }
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".trust-header > *", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-header",
          start: "top 90%",
        }
      }
    );

    gsap.fromTo(".trust-card", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-grid",
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="about" className="pt-12 pb-24 px-6 bg-gradient-to-b from-[#FFD700] to-[#FFB300] relative overflow-hidden">
      {/* Background Gradients Overlay - Reduced to let the main gradient shine */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="trust-header text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
            Built on Trust. Driven by Results.
          </h2>
          <p className="text-black/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            We don't just build software we build relationships. Our clients trust us to deliver tech that works.
          </p>
        </div>

        <div className="trust-grid flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="trust-card group snap-start shrink-0 w-[240px] md:w-auto cursor-pointer p-6 md:p-8 rounded-2xl border border-black/10 bg-black/5 hover:bg-black/10 transition-all duration-300 flex flex-col min-h-[180px] md:min-h-[220px]"
            >
              <div className="flex justify-end mb-2 md:mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-black/20 flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="text-3xl md:text-5xl font-bold text-black mb-2 md:mb-4">
                  {item.num}
                </div>
                <h3 className="text-base md:text-xl font-bold text-black leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
