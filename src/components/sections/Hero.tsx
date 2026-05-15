"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, Cpu, Globe, Shield, Zap } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-glow", 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 2, ease: "power2.out" }
    )
    .fromTo(".hero-line", 
      { y: 100 },
      { y: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
      "-=1.5"
    )
    .fromTo(".hero-subtext", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(".hero-cta", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Floating background nodes and icons animation
    gsap.to(".bg-node", {
      y: "random(-150, 150)",
      x: "random(-150, 150)",
      opacity: "random(0.4, 0.9)",
      rotation: "random(-45, 45)",
      duration: "random(10, 25)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 1,
        from: "random"
      }
    });

    // Pulse the grid background
    gsap.fromTo(".hero-grid", 
      { opacity: 0.08 },
      { opacity: 0.2, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    // Rotating light beams animation
    gsap.to(".beam", {
      rotation: "+=360",
      duration: 50,
      repeat: -1,
      ease: "none"
    });

    // Marquee animation
    gsap.to(".marquee-text", {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen pt-32 pb-16 overflow-hidden flex flex-col items-center justify-center bg-[#050505]">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6200ea] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7c3aed] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Massive Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full pointer-events-none -z-25 opacity-[0.03] select-none overflow-hidden">
        <div className="marquee-text text-[25vw] font-black text-white uppercase leading-none whitespace-nowrap flex">
          <span>INNOVATION • TECHNOLOGY • SOLUTIONS • DESIGN •&nbsp;</span>
          <span>INNOVATION • TECHNOLOGY • SOLUTIONS • DESIGN •&nbsp;</span>
        </div>
      </div>

      {/* Mouse Spotlight */}
      <div 
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-[#6200ea] opacity-[0.1] blur-[150px] pointer-events-none rounded-full z-0 will-change-transform transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(calc(var(--mouse-x, 50vw) - 50%), calc(var(--mouse-y, 50vh) - 50%))` 
        }}
      />

      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="bg-node absolute top-[15%] left-[10%] text-[#6200ea]/30 will-change-transform"><Cpu size={40} /></div>
        <div className="bg-node absolute top-[55%] left-[20%] text-[#6200ea]/20 will-change-transform"><Globe size={32} /></div>
        <div className="bg-node absolute top-[35%] right-[15%] text-[#6200ea]/30 will-change-transform"><Shield size={48} /></div>
        <div className="bg-node absolute bottom-[25%] right-[25%] text-[#6200ea]/20 will-change-transform"><Zap size={36} /></div>
        
        <div className="bg-node absolute top-[25%] left-[18%] w-4 h-4 bg-[#6200ea] rounded-full blur-[6px] will-change-transform" />
        <div className="bg-node absolute top-[65%] left-[28%] w-3 h-3 bg-[#6200ea] rounded-full blur-[4px] will-change-transform" />
        <div className="bg-node absolute top-[45%] right-[22%] w-5 h-5 bg-[#6200ea] rounded-full blur-[8px] will-change-transform" />
        <div className="bg-node absolute bottom-[35%] right-[32%] w-3 h-3 bg-[#6200ea] rounded-full blur-[4px] will-change-transform" />
      </div>

      {/* Rotating Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-15 opacity-40">
        <div className="beam absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-6 bg-gradient-to-r from-transparent via-[#6200ea] to-transparent blur-[120px]" style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }} />
        <div className="beam absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-6 bg-gradient-to-r from-transparent via-[#6200ea]/50 to-transparent blur-[120px]" style={{ transform: 'translate(-50%, -50%) rotate(120deg)' }} />
      </div>

      {/* Technical HUD Elements */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 border border-[#6200ea]/10 rounded-full flex items-center justify-center -z-10 animate-[spin_20s_linear_infinite]">
        <div className="w-48 h-48 border border-[#6200ea]/10 rounded-full border-dashed" />
        <div className="absolute w-full h-[1px] bg-[#6200ea]/10" />
        <div className="absolute w-[1px] h-full bg-[#6200ea]/10" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-[#6200ea]/10 rounded-full flex items-center justify-center -z-10 animate-[spin_15s_linear_infinite_reverse]">
        <div className="w-32 h-32 border border-[#6200ea]/5 rounded-full border-dashed" />
        <div className="absolute w-full h-[1px] bg-[#6200ea]/10" />
        <div className="absolute w-[1px] h-full bg-[#6200ea]/10" />
      </div>

      {/* Technical Checkerboard Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10" style={{ 
        backgroundImage: 'radial-gradient(#ffffff20 0.5px, transparent 0.5px), radial-gradient(#ffffff20 0.5px, #050505 0.5px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px'
      }} />

      {/* 3D Perspective Floor Grid */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6200ea1a_1px,transparent_1px),linear-gradient(to_bottom,#6200ea1a_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(50px)] [mask-image:linear-gradient(to_top,black_20%,transparent_80%)]" />
      </div>

      {/* Animated Premium Grid Background */}
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />
      
      {/* Massive Glowing Background */}
      <div className="hero-glow absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] aspect-[2/1] rounded-[100%] bg-[#6200ea] opacity-40 pointer-events-none -z-10" style={{ filter: 'blur(120px)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none -z-10 rounded-full" style={{ filter: 'blur(80px)' }} />

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 hero-text flex flex-col items-center w-full mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.1] tracking-tight text-white mb-8">
          <div className="overflow-hidden">
            <span className="hero-line block">Innovating Tomorrow.</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-[#6200ea]">Building Today.</span>
          </div>
        </h1>
        
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-12 opacity-0 hero-subtext">
          We are a team of professional freelancers with 1+ year of experience, dedicated to engineering your digital success. <span className="text-white">Fagency, your digital agency.</span>
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-20 opacity-0 hero-cta">

          <Link 
            href="#contact" 
            className="px-8 py-3.5 bg-[#6200ea] hover:bg-[#7c3aed] text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(98,0,234,0.4)] text-sm"
          >
            Get a Free Consultation
          </Link>
          <Link 
            href="#portfolio" 
            className="px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg font-semibold transition-all text-sm"
          >
            See Our Work
          </Link>
      </div>
      </div>
    </section>
  );
}
