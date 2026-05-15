"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "A standard website typically takes 2-4 weeks, while more complex platforms can take 6-12 weeks depending on features and complexity.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we provide ongoing maintenance and support packages to ensure your digital product stays up-to-date and performs optimally.",
  },
  {
    question: "Can you help with rebranding an existing business?",
    answer: "Absolutely! We specialize in brand refreshes and complete rebranding, including logo design, visual identity, and brand strategy.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Yes, we love working with startups! We offer flexible solutions tailored to the needs and budgets of growing businesses.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-400">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="text-lg font-medium text-white group-hover:text-[#FFC107] transition-colors">
                  {faq.question}
                </span>
                <div className="shrink-0 ml-4">
                  {activeIndex === i ? (
                    <Minus className="text-primary" />
                  ) : (
                    <Plus className="text-slate-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
