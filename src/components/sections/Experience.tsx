export default function Experience() {
  return (
    <section className="py-24 px-6 bg-[#080808] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-8 leading-none">
            YEARS OF <br /> <span className="text-[#FFC107]">RAPID GROWTH.</span>
          </h2>
          <p className="text-white/40 leading-relaxed mb-10 text-lg">
            Starting as a small group of ambitious freelancers in Malappuram, we have quickly evolved into a go-to digital agency for local and international clients over the past 1 years.
          </p>
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-5xl font-bold text-white mb-2">12+</div>
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFC107]">Projects Done</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">1+</div>
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFC107]">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FFC107]">Commitment</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-[#FFC107]/10 group-hover:bg-transparent transition-colors duration-500" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
