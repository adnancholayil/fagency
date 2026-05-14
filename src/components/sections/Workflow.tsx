"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your requirements, target audience, and business goals through detailed discussions.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Creating wireframes, user flows, and a comprehensive project roadmap to ensure alignment.",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting visually stunning and intuitive user interfaces that reflect your brand identity.",
  },
  {
    number: "04",
    title: "Development",
    description: "Turning designs into functional, high-performance digital products using modern tech stacks.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Thorough testing and quality assurance followed by a smooth deployment and handover.",
  },
];

export default function Workflow() {
  return (
    <section className="py-24 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A streamlined process designed to deliver excellence from initial concept to final launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 glass-card rounded-[2rem] group"
            >
              <div className="text-5xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-white/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
