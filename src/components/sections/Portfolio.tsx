"use client";

import { useRef, useState } from "react";
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
    title: "SaaS Analytics Platform",
    desc: "Real-time data visualization dashboard for enterprise scaling.",
    color: "text-[#FFC107]",
    details: "A comprehensive SaaS platform built with Next.js and Tailwind CSS, featuring complex data visualizations and multi-tenant architecture.",
    features: ["Real-time Sync", "Custom Dashboards", "Role-based Access", "API Integration", "Dark Mode Support"],
    link: "https://example.com"
  },
  {
    category: "App Development",
    title: "Fitness Tracking Pro",
    desc: "Cross-platform mobile app with health metrics integration.",
    color: "text-[#FFC107]",
    details: "A high-performance mobile application developed with React Native, connecting to wearable devices for seamless health monitoring.",
    features: ["HealthKit Sync", "Custom Workouts", "Social Sharing", "Progress Tracking", "Offline Mode"],
    link: "https://example.com"
  },
  {
    category: "Software Development",
    title: "Inventory Master",
    desc: "Custom warehouse management system for logistics.",
    color: "text-[#FFC107]",
    details: "A robust desktop and cloud-integrated software solution designed to optimize inventory flow and reduce operational overhead.",
    features: ["Barcode Scanning", "Real-time Updates", "Reporting Engine", "Automated Ordering", "ERP Sync"],
    link: "https://example.com"
  },
  {
    category: "Video Editing",
    title: "Brand Narrative Film",
    desc: "Cinematic brand storytelling for a leading fashion house.",
    color: "text-[#FFC107]",
    details: "Professional color grading, sound design, and cinematic editing that captured the essence of the brand's identity.",
    features: ["Color Grading", "Sound Design", "Motion Graphics", "4K Mastering", "Storytelling"],
    link: "https://example.com"
  },
  {
    category: "Poster Design",
    title: "Tech Summit 2024",
    desc: "Minimalist visual identity for a global tech conference.",
    color: "text-[#FFC107]",
    details: "Creating a cohesive visual language through bold typography and geometric patterns for physical and digital promotion.",
    features: ["Visual Identity", "Typography Focus", "Print Ready", "Social Media Kits", "Branding"],
    link: "https://example.com"
  },
  {
    category: "Web Development",
    title: "Elekyo Storefront",
    desc: "A high-performance e-commerce platform with seamless shopping experience.",
    color: "text-[#FFC107]",
    details: "Elekyo is a sophisticated e-commerce solution featuring a modern storefront, optimized product discovery, and a fluid checkout process built for high conversions.",
    features: ["Custom UI/UX", "Lightning Fast Load", "Responsive Storefront", "Secure Checkout", "Product Management"],
    link: "https://elekyo.vercel.app"
  },
  {
    category: "App Development",
    title: "Social Connect App",
    desc: "Niche community platform for digital creators.",
    color: "text-[#FFC107]",
    details: "A feature-rich social application with real-time messaging, content feeds, and monetization tools for creators.",
    features: ["Real-time Chat", "Media Feeds", "Subscription System", "Push Notifications", "Creator Tools"],
    link: "https://example.com"
  },
  {
    category: "Software Development",
    title: "Smart CRM",
    desc: "AI-powered customer relationship management software.",
    color: "text-[#FFC107]",
    details: "Custom CRM software with predictive sales analytics and automated follow-up scheduling using machine learning.",
    features: ["AI Sales Forecast", "Auto-Followups", "Contact Management", "Email Sync", "Pipeline Tracking"],
    link: "https://example.com"
  },
  {
    category: "Video Editing",
    title: "Social Media Campaign",
    desc: "High-energy short-form content for Instagram and TikTok.",
    color: "text-[#FFC107]",
    details: "Dynamic transitions and trending aesthetics that drove a 200% increase in social media engagement for the client.",
    features: ["Fast Paced Edits", "VFX Integration", "Music Syncing", "Vertical Format", "Viral Hook Focus"],
    link: "https://example.com"
  },
  {
    category: "Poster Design",
    title: "Art Gallery Opening",
    desc: "Sophisticated event posters for a modern art exhibition.",
    color: "text-[#FFC107]",
    details: "Elegant design utilizing negative space and premium typography to reflect the curator's artistic vision.",
    features: ["Minimalist Style", "Elegant Layout", "Limited Palette", "Texture Overlays", "High-end Print"],
    link: "https://example.com"
  },
  {
    category: "Web Development",
    title: "Real Estate Portal",
    desc: "Interactive map-based property search for high-end listings.",
    color: "text-[#FFC107]",
    details: "A complex web portal with custom map integrations, virtual tour features, and advanced lead generation forms.",
    features: ["Map Integration", "Virtual Tours", "Advanced Filters", "Lead Scoring", "MLS Integration"],
    link: "https://example.com"
  },
  {
    category: "App Development",
    title: "Foodie Delivery",
    desc: "Uber-style delivery app with real-time driver tracking.",
    color: "text-[#FFC107]",
    details: "A dual-app ecosystem for users and drivers, featuring real-time geolocation tracking and instant payment processing.",
    features: ["Live Tracking", "Dual Interface", "Stripe Connect", "Geo-fencing", "Rating System"],
    link: "https://example.com"
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

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
        <div className="mb-32">
          <div className="impact-header text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Real Impact. <span className="text-[#FFC107]">Proven Results.</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-medium">
              Explore how we&apos;ve helped startups and enterprises alike scale and innovate across multiple industries.
            </p>
          </div>

          <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 min-h-[600px]">
            {currentProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={p.title}
                onClick={() => setSelectedProject(p)}
                className="impact-card group cursor-pointer p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-[#FFC107]/50 transition-all duration-300 flex flex-col justify-center min-h-[200px]"
              >
                <div className={`text-[10px] uppercase tracking-widest font-semibold mb-4 ${p.color}`}>{p.category}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-2 font-medium">{p.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-[#FFC107] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowRight size={14} />
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
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Trusted by Innovators
            </h2>
          </div>

          <div className="relative overflow-hidden w-screen -ml-[50vw] left-1/2">
            <div
              ref={marqueeRef}
              className="flex gap-6 px-6 w-max"
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="testimonial-card relative bg-[#FFC107] rounded-2xl p-8 pt-12 text-center w-[350px] shrink-0"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-[#050505] overflow-hidden bg-slate-800">
                    <Image
                      src="/portfolio/ecommerce.png"
                      alt={t.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>

                  <div className="flex justify-center text-white/40 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <p className="text-sm text-black leading-relaxed mb-8 font-medium italic h-[80px] flex items-center justify-center">
                    &quot;{t.text}&quot;
                  </p>

                  <div>
                    <h4 className="text-black font-bold text-sm underline decoration-black/10 underline-offset-4">{t.name}</h4>
                    <p className="text-[10px] text-black/60 mt-1 uppercase tracking-widest font-bold">{t.role}</p>
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
              className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[#FFC107] text-[10px] font-medium uppercase tracking-[0.3em] mb-2">
                      {selectedProject.category}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium">
                  {selectedProject.details}
                </p>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#FFC107]">Key Outcomes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 size={18} className="text-[#FFC107] shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#FFC107] hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
                    >
                      {selectedProject.category === "Video Editing" ? (
                        <>Watch Video <ArrowRight size={14} /></>
                      ) : selectedProject.category === "Poster Design" || selectedProject.category === "Graphic Design" ? (
                        <>View High-Res Design <ExternalLink size={14} /></>
                      ) : (
                        <>Visit Live Project <ExternalLink size={14} /></>
                      )}
                    </a>
                  )}

                  <div className="flex gap-4 ml-auto">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 text-white/50 hover:text-white transition-colors text-xs font-semibold uppercase"
                    >
                      Close
                    </button>
                    <Link
                      href="/contact"
                      className="px-8 py-3 bg-[#FFC107] text-black rounded-xl font-semibold transition-all text-xs uppercase tracking-wider hover:scale-105"
                    >
                      Build Something Similar
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
