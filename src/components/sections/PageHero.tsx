"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageHeroProps {
  title1: string;
  title2: string;
  description: string;
}

export default function PageHero({ title1, title2, description }: PageHeroProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(".page-hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".page-hero-desc",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <section ref={container} className="pt-32 pb-16 px-6 bg-[#050505] flex flex-col items-center justify-center min-h-[50vh]">
      <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center w-full">
        <h1 className="page-hero-title text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-8">
          {title1} <span className="text-[#FFC107]">{title2}</span>
        </h1>
        <p className="page-hero-desc text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
