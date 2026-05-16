"use client";

import React, { useRef, useState, useEffect } from "react"; // Added React import
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, X, CheckCircle2, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "Web Development",
    title: "Elekyo Storefront",
    desc: "A high-performance e-commerce platform with seamless shopping experience.",
    color: "text-[#FFC107]",
    details: "Elekyo is a sophisticated e-commerce solution featuring a modern storefront, optimized product discovery, and a fluid checkout process built for high conversions.",
    features: ["Custom UI/UX", "Lightning Fast Load", "Responsive Storefront", "Secure Checkout", "Product Management"],
    link: "https://elekyo.vercel.app",
    image: "/elekyo/elekyo.jpg"
  },
  {
    category: "Web Development",
    title: "EMEA HSS Special School",
    desc: "A dedicated digital portal for a specialized education center for students with special needs.",
    color: "text-[#FFC107]",
    details: "EMEA HSS is a premier special school dedicated to providing inclusive education and specialized support. The portal serves as a bridge between the institution and the community, facilitating better communication and accessibility to educational resources.",
    features: ["Educational UI/UX", "Inclusive Design", "Responsive Portal", "Community Bridge", "Resource Management"],
    link: "https://emeaspecialcare.vercel.app/",
    image: "/emea/emea.jpg"
  },
  {
    category: "Graphic Design",
    title: "Computer World Monthly Branding",
    desc: "A comprehensive monthly design package for Computer World, featuring promotional posters and product showcases.",
    color: "text-[#FFC107]",
    details: "Ongoing creative support for Computer World, delivering high-impact visual content for their hardware lineup. This monthly project includes professional product retouching, promotional banners, and social media assets designed to drive sales and brand awareness.",
    features: ["Product Marketing", "Monthly Campaign", "Brand Consistency", "Hardware Visualization"],
    images: [
      "/portfolio/computerworld/Dell%20Latitude%203310%202-in-1%20shop%20last%202.jpg",
      "/portfolio/computerworld/Dell%20Latitude%203420%20-%201.jpg",
      "/portfolio/computerworld/delloptiplex2.jpg",
      "/portfolio/computerworld/HP%20840-G5-MAIN.jpg"
    ]
  }
];

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "Founder of EduVantage",
    text: "Fagency transformed our educational portal into a modern learning ecosystem. Their attention to UX detail is world-class.",
  },
  {
    name: "Priya Lakshmi",
    role: "Marketing Head at SilkRoute",
    text: "The social media campaign they edited for us went viral within 48 hours. They truly understand the pulse of digital storytelling.",
  },
  {
    name: "Rohan Mehra",
    role: "CTO at NexusLink",
    text: "Their custom CRM software has streamlined our entire sales operation. The integration was seamless and the support is exceptional.",
  },
  {
    name: "Ananya Iyer",
    role: "CEO of UrbanDecor",
    text: "The E-commerce storefront they built increased our sales by 150%. Their technical expertise in Next.js is simply unmatched.",
  },
  {
    name: "Vikram Malhotra",
    role: "Director at Innotech",
    text: "Working with them on our brand documentary was a pleasure. They captured our vision perfectly with cinematic precision.",
  },
  {
    name: "Sanya Gupta",
    role: "Creative Lead at DesignHub",
    text: "The event posters they designed were the talk of the town. Bold, minimalist, and perfectly aligned with our brand values.",
  }
];

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [dbProjects, setDbProjects] = useState<any[]>([]);
  const [dbReviews, setDbReviews] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const projectsPerPage = 6;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";
        const [projRes, revRes] = await Promise.all([
          fetch(`${API}/projects`),
          fetch(`${API}/reviews`)
        ]);
        const projData = await projRes.json();
        const revData = await revRes.json();
        
        // If DB is empty, fallback to local data or show empty
        setDbProjects(projData.length > 0 ? projData : projects);
        setDbReviews(revData.length > 0 ? revData : testimonials);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
        setDbProjects(projects);
        setDbReviews(testimonials);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(dbProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = dbProjects.slice(indexOfFirstProject, indexOfLastProject);

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

    // Testimonial Marquee Animation
    const marquee = marqueeRef.current;
    if (marquee) {
      const marqueeWidth = marquee.scrollWidth / 2;
      const animation = gsap.to(marquee, {
        x: -marqueeWidth,
        duration: 30,
        repeat: -1,
        ease: "linear",
        pauseOnBlur: true,
      });

      // Smooth stop/start on hover
      marquee.addEventListener("mouseenter", () => gsap.to(animation, { timeScale: 0, duration: 0.5, ease: "power2.out" }));
      marquee.addEventListener("mouseleave", () => gsap.to(animation, { timeScale: 1, duration: 0.5, ease: "power2.in" }));
    }
  }, { scope: container });

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: container.current?.offsetTop, behavior: 'smooth' });
  };

  return (
    <section ref={container} id="portfolio" className="py-20 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Real Impact Section */}
        <div className="mb-20 md:mb-32">
          <div className="impact-header text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Real Impact. <span className="text-[#FFC107]">Proven Results.</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
              Explore how we&apos;ve helped startups and enterprises alike scale and innovate across multiple industries.
            </p>
          </div>

          <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={p.title}
                onClick={() => {
                  setSelectedProject(p);
                  setCurrentImageIndex(0);
                }}
                className="impact-card group cursor-pointer rounded-3xl border border-white/10 bg-[#0A0A0A] hover:border-[#FFC107]/50 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Card Image Preview */}
                <div className="relative h-48 w-full overflow-hidden bg-black/40">
                  {p.images || p.image ? (
                    <Image
                      src={p.images ? p.images[0] : p.image!}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#FFC107]/20">
                      <Star size={40} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>

                <div className="p-8 pt-2 flex flex-col flex-grow">
                  <div className={`text-[10px] uppercase tracking-widest font-bold mb-4 ${p.color}`}>{p.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC107] transition-colors">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-2 font-medium">{p.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-[#FFC107] text-xs font-bold uppercase tracking-wider">
                    View Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mb-12">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#FFC107] hover:text-[#FFC107] disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${currentPage === i + 1
                      ? "bg-[#FFC107] text-black"
                      : "border border-white/10 text-white/50 hover:border-white/30"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#FFC107] hover:text-[#FFC107] disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#FFC107] text-black rounded-lg text-sm font-semibold hover:bg-[#FFB300] transition-all flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Trusted by Innovators Section */}
        <div className="relative">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Trusted by Innovators
            </h2>
          </div>

          <div className="relative overflow-hidden w-screen -ml-[50vw] left-1/2">
            <div
              ref={marqueeRef}
              className="flex gap-6 px-6 w-max"
            >
              {[...dbReviews, ...dbReviews].map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card relative bg-[#FFC107] rounded-2xl p-6 md:p-8 text-center w-[280px] md:w-[350px] shrink-0"
                >
                  <div className="flex justify-center text-white/40 mb-6 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <p className="text-sm text-black leading-relaxed mb-8 font-medium italic min-h-[100px] md:min-h-[80px] flex items-center justify-center">
                    &quot;{t.text || t.comment}&quot;
                  </p>

                  <div>
                    <h4 className="text-black font-bold text-sm underline decoration-black/10 underline-offset-4">{t.name}</h4>
                    <p className="text-[10px] text-black/60 mt-1 uppercase tracking-widest font-bold">{t.role || t.designation || 'Client'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button - Global */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Left Column: Image Area / Slideshow */}
              <div className="relative h-72 md:h-auto md:w-[45%] bg-black/40 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden flex items-center justify-center">
                <div className="relative h-full w-full">
                  <AnimatePresence mode="wait">
                    {selectedProject.images ? (
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-full w-full"
                      >
                        <Image
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                          fill
                          className="object-contain p-8"
                        />
                      </motion.div>
                    ) : selectedProject.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-contain p-8"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10">
                        <Star size={48} />
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Controls for Gallery */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <div className="absolute inset-x-4 bottom-6 flex items-center justify-between z-20">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1));
                          }}
                          className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FFC107] hover:text-black transition-all flex items-center justify-center backdrop-blur-md border border-white/10"
                        >
                          <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-1.5">
                          {selectedProject.images.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-6 bg-[#FFC107]" : "w-1.5 bg-white/20"}`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1));
                          }}
                          className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FFC107] hover:text-black transition-all flex items-center justify-center backdrop-blur-md border border-white/10"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
                {/* Visual Glow behind image */}
                <div className="absolute inset-0 bg-[#FFC107]/5 blur-3xl pointer-events-none" />
              </div>

              {/* Right Column: Information */}
              <div className="p-8 md:p-12 md:w-[55%] flex flex-col justify-center">
                <div className="mb-8">
                  <div className="text-[#FFC107] text-[10px] font-medium uppercase tracking-[0.4em] mb-3">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>

                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
                  {selectedProject.details}
                </p>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFC107]/80">Key Outcomes</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedProject.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 size={16} className="text-[#FFC107] shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-6">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#FFC107] hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
                    >
                      {selectedProject.category === "Video Editing" ? (
                        <>Watch Video <ArrowRight size={14} /></>
                      ) : (
                        <>Visit Project <ExternalLink size={14} /></>
                      )}
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-[#FFC107] text-black rounded-xl font-bold transition-all text-xs uppercase tracking-wider hover:scale-105 shadow-[0_0_20px_rgba(255,193,7,0.2)] ml-auto"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
