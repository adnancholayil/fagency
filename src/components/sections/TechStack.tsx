"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "MongoDB", "Firebase", "Flutter", "Figma", "Framer Motion",
  "PostgreSQL", "AWS"
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Technology <span className="text-gradient">Stack</span></h2>
          <p className="text-slate-400">We use the latest and most powerful technologies to build your products.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-8 py-4 glass rounded-2xl border border-white/5 hover:border-primary/30 transition-all cursor-default group"
            >
              <span className="text-xl font-bold text-slate-400 group-hover:text-white transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
