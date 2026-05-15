import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-32 px-6 bg-[#080808] border-t border-white/[0.05] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] pointer-events-none select-none">
        PROJECTS
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">
          HAVE AN IDEA <span className="text-[#FFC107]">IN MIND?</span>
        </h2>
        <p className="text-white/40 text-lg mb-12">
          Let&apos;s turn your vision into a high-performance digital reality.
        </p>
        <Link href="/contact" className="px-12 py-5 bg-[#FFC107] text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(255, 193, 7,0.3)]">
          Start a project
        </Link>
      </div>
    </section>
  );
}
