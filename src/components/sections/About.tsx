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
    title: "10+ Years of Tech Expertise",
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
    title: "24/7 Support & Maintenance",
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
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-header",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".trust-card", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".trust-grid",
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="about" className="py-24 px-6 bg-[#2e098d] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1c0559] to-[#2e098d] opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="trust-header text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built on Trust. Driven by Results.
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
            We don't just build software we build relationships. Our clients trust us to deliver tech that works.
          </p>
        </div>

        <div className="trust-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="trust-card group cursor-pointer p-8 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col min-h-[220px]"
            >
              <div className="flex justify-end mb-4">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="text-5xl font-bold text-white mb-4">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">
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
