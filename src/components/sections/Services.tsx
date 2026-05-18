"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Smartphone, Monitor, Palette, Camera, Share2, ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development & Designing",
    desc: "Modern, responsive, and high-performance websites built with the latest technologies.",
    icon: Code2,
    highlight: false,
    details: "We create digital experiences that resonate with your audience. Our web solutions are built for speed, SEO, and scalability.",
    features: ["Custom React & Next.js Apps", "Responsive UI/UX Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"]
  },
  {
    title: "App Development & Designing",
    desc: "Bespoke mobile applications for iOS and Android with seamless user experiences.",
    icon: Smartphone,
    highlight: true,
    details: "From idea to App Store, we handle the full mobile lifecycle. We focus on native performance and intuitive gesture-based designs.",
    features: ["Cross-platform Flutter Apps", "Native iOS & Android", "App Store Optimization", "Real-time Features", "Cloud Backend Integration"]
  },
  {
    title: "Software Development & Designing",
    desc: "Scalable enterprise software solutions tailored to your specific business needs.",
    icon: Monitor,
    highlight: false,
    details: "Automate your business processes with custom software. We build robust tools that help you manage data and workflows efficiently.",
    features: ["ERP & CRM Systems", "Cloud-based SaaS", "Legacy System Migration", "API Development", "Data Analytics Tools"]
  },
  {
    title: "Graphics Designing",
    desc: "Stunning visual identities, branding, and marketing materials that stand out.",
    icon: Palette,
    highlight: false,
    details: "Visual storytelling is at the heart of what we do. We craft brand identities that leave a lasting impression and build trust.",
    features: ["Logo & Brand Identity", "Marketing Collaterals", "UI/UX Prototyping", "Social Media Graphics", "Print Design"]
  },
  {
    title: "Media Production",
    desc: "Professional photography, videography, and expert video/photo editing services.",
    icon: Camera,
    highlight: false,
    details: "Capture the essence of your brand with professional media. High-quality production that communicates your message effectively.",
    features: ["Corporate Videography", "Product Photography", "High-end Video Editing", "Drone Cinematography", "Motion Graphics"]
  },
  {
    title: "Digital Marketing",
    desc: "Comprehensive SEO, SMM, and targeted ad campaigns to grow your digital presence.",
    icon: Share2,
    highlight: false,
    details: "Drive traffic and convert leads with data-driven marketing. We help you reach the right audience at the right time.",
    features: ["Search Engine Optimization", "Social Media Management", "Google & Meta Ads", "Content Strategy", "Email Marketing"]
  }
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useGSAP(() => {
    gsap.fromTo(".service-line",
      { y: 60 },
      {
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-header",
          start: "top 90%",
        }
      }
    );

    gsap.fromTo(".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="services" className="py-20 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="service-header text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
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
              onClick={() => setSelectedService(s)}
              className={`service-card group cursor-pointer relative p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04] hover:border-[#FFC107]/40 flex flex-col justify-between min-h-[200px] md:min-h-[300px]  ${s.highlight ? "shadow-[0_0_40px_rgba(255, 193, 7,0.1)] border-[#FFC107]/20" : ""
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

      {/* Modal Backdrop */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
              style={{ minHeight: '80vh', maxHeight: '95vh' }}
            >
              {/* Fixed Header */}
              <div className="relative h-28 bg-[#FFC107] flex items-center justify-center flex-shrink-0">
                <div className="absolute top-5 right-5 z-10">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-black flex items-center justify-center transition-colors backdrop-blur-md"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-[#FFC107] shadow-xl border border-white/10">
                  <selectedService.icon size={32} />
                </div>
              </div>

              {/* Flexible Content */}
              <div className="flex-1 flex flex-col p-7 md:p-10 overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {selectedService.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
                  {selectedService.details}
                </p>

                <div className="flex-1">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FFC107] mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 size={16} className="text-[#FFC107] shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-8 py-3 bg-[#FFC107] hover:bg-[#FFB300] text-black rounded-xl font-semibold transition-all text-sm"
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
