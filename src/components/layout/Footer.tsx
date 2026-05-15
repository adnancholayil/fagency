"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQ {
  q: string;
  a: string;
}

interface FooterProps {
  customFaqs?: FAQ[];
}

const defaultFaqs: FAQ[] = [
  {
    q: "What kind of businesses do you work with?",
    a: "We collaborate with startups, SMBs, and enterprises across finance, technology, e-commerce, and healthcare sectors. Whether you're building an MVP or scaling up, we're ready."
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity, but a typical MVP takes 4-8 weeks, while full enterprise solutions can take 3-6 months."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide 24/7 support and maintenance plans to ensure your software remains secure, updated, and perfectly functional."
  }
];

export default function Footer({ customFaqs }: FooterProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const container = useRef<HTMLElement>(null);
  const currentFaqs = customFaqs || defaultFaqs;

  useGSAP(() => {
    gsap.fromTo(".footer-line", 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".footer-content",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".faq-item", 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <footer ref={container} className="bg-[#050505] relative overflow-hidden flex flex-col items-center">
      {/* FAQ Section (Pre-Footer) */}
      <div className="max-w-4xl mx-auto py-32 px-6 w-full border-b border-white/[0.05]">
        <div className="faq-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            FREQUENTLY <span className="text-[#6200ea]">ASKED.</span>
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">
            Answers to common digital project queries
          </p>
        </div>

        <div className="faq-list space-y-4">
          {currentFaqs.map((faq, i) => (
            <div 
              key={i} 
              className="faq-item border-b border-white/[0.05] pb-4 cursor-pointer group"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="flex justify-between items-center py-6">
                <h4 className={`text-base md:text-lg font-bold tracking-tight transition-all duration-300 ${openFaq === i ? "text-[#6200ea] pl-4" : "text-white/60 group-hover:text-white"}`}>
                  {faq.q}
                </h4>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openFaq === i ? "bg-[#6200ea] border-[#6200ea] text-white rotate-180 shadow-[0_0_20px_rgba(98,0,234,0.5)]" : "border-white/10 text-white/40 group-hover:border-white/30"}`}>
                  <ChevronDown size={16} />
                </div>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-sm text-white/40 leading-relaxed pt-2 pb-8 pr-12 pl-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Massive Call To Action (Full Screen Footer) */}
      <div className="footer-content w-full min-h-[80vh] max-h-[90vh] flex flex-col justify-between py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap">
          FAGENCY
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter">
              <div className="overflow-hidden"><span className="footer-line block">LET&apos;S WORK</span></div>
              <div className="overflow-hidden"><span className="footer-line block text-[#6200ea]">TOGETHER.</span></div>
            </h2>
            <Link 
              href="#contact" 
              className="footer-line inline-flex items-center gap-4 text-xl md:text-2xl font-bold text-white group"
            >
              Start a project <span className="w-12 h-12 rounded-full bg-[#6200ea] flex items-center justify-center group-hover:translate-x-4 transition-transform duration-300"><ChevronDown size={24} className="-rotate-90" /></span>
            </Link>
          </div>

          <div className="flex flex-col justify-center space-y-16">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <h5 className="text-[#6200ea] text-xs font-black uppercase tracking-[0.3em]">Contact</h5>
                <div className="space-y-4 text-white/60 text-sm">
                  <a href="mailto:fagency.it@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors"><Mail size={16} /> fagency.it@gmail.com</a>
                  <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors"><Phone size={16} /> +91 9876 543 210</a>
                </div>
              </div>
              <div className="space-y-6">
                <h5 className="text-[#6200ea] text-xs font-black uppercase tracking-[0.3em]">Location</h5>
                <p className="text-white/60 text-sm leading-relaxed flex items-start gap-3">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  Malappuram, Kerala<br />India
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Instagram, href: "https://instagram.com/fagency_" },
                { icon: Facebook, href: "https://facebook.com/fagency" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#6200ea] hover:border-[#6200ea] hover:text-white transition-all duration-500 hover:-translate-y-2">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto w-full border-t border-white/[0.05] pt-12 mt-20 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <Link href="/" className="nav-logo group">
            <div className="text-xl font-black tracking-tighter text-white">
              FAGENCY<span className="text-[#6200ea]">.</span>
            </div>
          </Link>
          
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-black text-white/30">
            <Link href="#" className="hover:text-[#6200ea] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#6200ea] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#6200ea] transition-colors">© 2024 FAGENCY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
