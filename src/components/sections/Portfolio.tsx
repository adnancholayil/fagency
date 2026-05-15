"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "Fintech",
    title: "Fintech Dashboard",
    desc: "Streamlined user analytics & real-time transactions.",
    color: "text-[#FFC107]",
  },
  {
    category: "E-Commerce",
    title: "E-commerce Platform",
    desc: "300% increase in conversion through custom storefront.",
    color: "text-[#FFC107]",
  },
  {
    category: "AI",
    title: "AI-Powered Tool",
    desc: "Reduced support tickets by 40% using predictive models.",
    color: "text-[#FFC107]",
  }
];

const testimonials = [
  {
    name: "Sophia Nguyen",
    role: "Founder of ClarityPay",
    text: "From wireframes to launch, the process was seamless. Their team brought our fintech app to life and users love the clean, intuitive interface.",
  },
  {
    name: "Emily R.",
    role: "Product Manager at FinBase",
    text: "The dashboard they delivered exceeded our expectations fast, responsive, and beautifully designed. It's become our team's go-to for daily financial insights.",
  },
  {
    name: "Raj Malhotra",
    role: "CTO at LedgerXpress",
    text: "We needed a partner who understood both design and data. They nailed it. The analytics integration and UI clarity have improved how we make decisions.",
  }
];

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".impact-header > *", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-header",
          start: "top 90%",
        }
      }
    );

    gsap.fromTo(".impact-card", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".impact-grid",
          start: "top 90%",
        }
      }
    );

    gsap.fromTo(".testimonial-card", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="portfolio" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        
        {/* Real Impact Section */}
        <div className="mb-32">
          <div className="impact-header text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Real Impact. <span className="text-[#FFC107]">Proven Results.</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
              Explore how we've helped startups and enterprises alike scale and innovate.
            </p>
          </div>

          <div className="impact-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {projects.map((p, i) => (
              <div
                key={i}
                className="impact-card p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-[#FFC107]/50 transition-all duration-300 flex flex-col justify-center min-h-[200px]"
              >
                <div className={`text-xs font-bold mb-4 ${p.color}`}>{p.category}</div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link 
              href="#portfolio" 
              className="px-8 py-3 bg-[#FFC107] text-black rounded-lg text-sm font-semibold hover:bg-[#FFB300] transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>

        {/* Trusted by Innovators Section */}
        <div>
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Trusted by Innovators
            </h2>
          </div>

          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card relative bg-[#FFC107] rounded-2xl p-8 pt-12 text-center"
              >
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-[#050505] overflow-hidden bg-slate-800">
                  <Image 
                    src="/portfolio/ecommerce.png" 
                    alt={t.name} 
                    fill 
                    className="object-cover grayscale"
                  />
                </div>
                
                <div className="flex justify-center text-[#facc15] mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-sm text-white leading-relaxed mb-8">
                  "{t.text}"
                </p>
                
                <div>
                  <h4 className="text-white font-bold text-sm underline decoration-white/30 underline-offset-4">{t.name}</h4>
                  <p className="text-[10px] text-white/70 mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
