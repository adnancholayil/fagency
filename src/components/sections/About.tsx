"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  {
    num: "01",
    title: "1+ Years of Tech Expertise",
    details: "With over 1 years in the industry, we have mastered a wide range of technologies to deliver future-proof solutions.",
    features: ["Expert Next.js & React Devs", "Scalable Backend Systems", "Mobile App Excellence", "UI/UX Best Practices", "Cloud Infrastructure"]
  },
  {
    num: "02",
    title: "Transparent Agile Process",
    details: "We believe in complete transparency. Our agile workflow ensures you are involved and informed at every stage of development.",
    features: ["Weekly Progress Sprints", "Direct Developer Access", "Clear Project Roadmaps", "Flexible Scope Handling", "Real-time Feedback Loops"]
  },
  {
    num: "03",
    title: "Dedicated Full-Stack Teams",
    details: "Our teams are composed of specialists who handle everything from database architecture to front-end polishing.",
    features: ["Cross-functional Experts", "Seamless Team Integration", "End-to-End Development", "Rigorous Code Reviews", "Strategic Tech Consulting"]
  },
  {
    num: "04",
    title: "Support & Maintenance",
    details: "Our relationship doesn&apos;t end at launch. We provide reliable support to ensure your digital assets always perform at their peak.",
    features: ["24/7 Priority Support", "Regular Security Updates", "Performance Monitoring", "Incremental Feature Updates", "Hosting Management"]
  }
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<typeof trustItems[0] | null>(null);

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
    <section ref={container} id="about" className="pt-12 pb-20 px-6 bg-gradient-to-b from-[#FFD700] to-[#FFB300] relative overflow-hidden">
      {/* Background Gradients Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="trust-header text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
            Built on Trust. Driven by Results.
          </h2>
          <p className="text-black/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
            We don&apos;t just build software we build relationships. Our clients trust us to deliver tech that works.
          </p>
        </div>

        <div className="trust-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedItem(item)}
              className="trust-card group cursor-pointer p-8 rounded-2xl border border-black/10 bg-black/5 hover:bg-black/10 transition-all duration-300 flex flex-col min-h-[220px]"
            >
              <div className="flex justify-end mb-4">
                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div className="mt-auto">
                <div className="text-5xl font-bold text-black mb-4">
                  {item.num}
                </div>
                <h3 className="text-xl font-semibold text-black leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#FFD700] border border-black/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              style={{ minHeight: '80vh', maxHeight: '95vh' }}
            >
              <div className="flex-1 flex flex-col p-8 md:p-10 overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl font-black text-black/20 leading-none">
                    {selectedItem.num}
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-black flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {selectedItem.title}
                </h2>
                <p className="text-black/70 font-medium leading-relaxed mb-6 text-sm md:text-base">
                  {selectedItem.details}
                </p>

                <div className="flex-1 space-y-3">
                  {selectedItem.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-black/80">
                      <CheckCircle2 size={18} className="text-black shrink-0" />
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-4 bg-black text-[#FFD700] rounded-2xl font-bold transition-all text-sm hover:scale-[1.02] active:scale-95 shadow-xl"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
