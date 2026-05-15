"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, Cpu, Globe, Shield, Zap } from "lucide-react";
import Hyperspeed from "../backgrounds/Hyperspeed";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-glow",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 1.2, ease: "power2.out" }
    )
      .fromTo(".hero-line",
        { y: 100 },
        { y: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" },
        "-=1.0"
      )
      .fromTo(".hero-subtext",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
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

    // Marquee animation
    gsap.to(".marquee-text", {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen pt-28 pb-0 overflow-hidden flex flex-col items-center justify-center bg-[#050505]">
      {/* Hyperspeed Background Component */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xFFC107, 0xFFB300, 0xFFA000],
              rightCars: [0xFFD54F, 0xFFC107, 0xFFB300],
              sticks: 0xFFC107
            }
          }}
        />
        {/* Overlay to ensure readability and add depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80" />
      </div>

      {/* Massive Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full pointer-events-none -z-25 opacity-[0.03] select-none overflow-hidden">
        <div className="marquee-text text-[25vw] font-bold text-white uppercase leading-none whitespace-nowrap flex">
          <span>INNOVATION • TECHNOLOGY • SOLUTIONS • DESIGN •&nbsp;</span>
          <span>INNOVATION • TECHNOLOGY • SOLUTIONS • DESIGN •&nbsp;</span>
        </div>
      </div>

      {/* Mouse Spotlight - Optimized with will-change and transform-gpu */}
      <div
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-[#FFC107] opacity-[0.05] blur-[150px] pointer-events-none rounded-full z-0 will-change-transform transform-gpu transition-transform duration-300 ease-out hidden md:block"
        style={{
          transform: `translate(calc(var(--mouse-x, 50vw) - 50%), calc(var(--mouse-y, 50vh) - 50%))`
        }}
      />

      {/* Background Floating Elements - Simplified for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="bg-node absolute top-[15%] left-[10%] text-[#FFC107]/30 will-change-transform hidden md:block"><Cpu size={40} /></div>
        <div className="bg-node absolute top-[55%] left-[20%] text-[#FFC107]/20 will-change-transform hidden md:block"><Globe size={32} /></div>
        <div className="bg-node absolute top-[35%] right-[15%] text-[#FFC107]/30 will-change-transform hidden md:block"><Shield size={48} /></div>
        <div className="bg-node absolute bottom-[25%] right-[25%] text-[#FFC107]/20 will-change-transform hidden md:block"><Zap size={36} /></div>

        <div className="bg-node absolute top-[25%] left-[18%] w-4 h-4 bg-[#FFC107] rounded-full blur-[6px] will-change-transform opacity-20" />
        <div className="bg-node absolute top-[65%] left-[28%] w-3 h-3 bg-[#FFC107] rounded-full blur-[4px] will-change-transform opacity-20" />
        <div className="bg-node absolute top-[45%] right-[22%] w-5 h-5 bg-[#FFC107] rounded-full blur-[8px] will-change-transform opacity-20" />
        <div className="bg-node absolute bottom-[35%] right-[32%] w-3 h-3 bg-[#FFC107] rounded-full blur-[4px] will-change-transform opacity-20" />
      </div>

      {/* Technical HUD Elements - Desktop Only */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 border border-[#FFC107]/10 rounded-full hidden lg:flex items-center justify-center z-10 animate-[spin_20s_linear_infinite]">
        <div className="w-48 h-48 border border-[#FFC107]/10 rounded-full border-dashed" />
        <div className="absolute w-full h-[1px] bg-[#FFC107]/10" />
        <div className="absolute w-[1px] h-full bg-[#FFC107]/10" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-[#FFC107]/10 rounded-full hidden lg:flex items-center justify-center z-10 animate-[spin_15s_linear_infinite_reverse]">
        <div className="w-32 h-32 border border-[#FFC107]/5 rounded-full border-dashed" />
        <div className="absolute w-full h-[1px] bg-[#FFC107]/10" />
        <div className="absolute w-[1px] h-full bg-[#FFC107]/10" />
      </div>

      {/* Massive Glowing Background */}
      <div className="hero-glow absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] aspect-[2/1] rounded-[100%] bg-[#FFC107] opacity-40 pointer-events-none -z-10" style={{ filter: 'blur(120px)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none -z-10 rounded-full" style={{ filter: 'blur(80px)' }} />

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-20 hero-text flex flex-col items-center w-full mt-2">
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-semibold leading-[1.1] tracking-tight text-white mb-8">
          <div className="overflow-hidden">
            <span className="hero-line block">Innovating Tomorrow.</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-line block text-[#FFC107]">Building Today.</span>
          </div>
        </h1>

        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-12 opacity-0 hero-subtext">
          We are a team of professional freelancers with 1+ years of experience, dedicated to engineering your digital success. <span className="text-white">Fagency, your digital agency.</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-20 opacity-0 hero-cta">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#FFC107] hover:bg-[#FFB300] text-black rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(255,193,7,0.4)] text-sm"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg font-semibold transition-all text-sm"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
