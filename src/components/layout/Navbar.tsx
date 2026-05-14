"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".nav-logo", 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    .fromTo(".nav-item", 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(".nav-button", 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-500"
    >
      <div 
        className={`flex items-center justify-between transition-all duration-500 px-8 rounded-full border ${
          isScrolled 
            ? "w-[90%] md:w-[70%] max-w-[1200px] bg-black/60 backdrop-blur-xl border-white/10 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
            : "w-[95%] max-w-[1400px] bg-transparent border-transparent py-4"
        }`}
      >
        <nav className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="nav-logo flex items-center z-50 group">
            <div className="text-xl font-black tracking-tighter text-white flex items-center">
              FAGENCY<span className="text-[#6200ea] group-hover:animate-pulse">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-item relative text-[11px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6200ea] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="nav-button px-6 py-2.5 bg-white text-black rounded-full text-[11px] uppercase tracking-wider font-black transition-all hover:bg-[#6200ea] hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex items-center justify-center transition-all duration-700 ease-in-out ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-4xl font-black text-white hover:text-[#6200ea] transition-all duration-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-10 px-10 py-4 bg-[#6200ea] text-white rounded-full text-lg font-bold shadow-[0_0_30px_rgba(98,0,234,0.5)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}
