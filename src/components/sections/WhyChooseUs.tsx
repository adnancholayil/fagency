"use client";

import { motion } from "framer-motion";
import { Zap, Monitor, Search, Users, DollarSign, Cpu, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "We value your time and deliver high-quality solutions within the agreed timelines.",
    icon: Zap,
  },
  {
    title: "Responsive Design",
    description: "Your digital product will look and work perfectly on all devices and screen sizes.",
    icon: Monitor,
  },
  {
    title: "SEO Friendly",
    description: "We build with search engines in mind to ensure your brand gets the visibility it deserves.",
    icon: Search,
  },
  {
    title: "Professional Team",
    description: "A team of experts with years of experience in their respective creative fields.",
    icon: Users,
  },
  {
    title: "Affordable Pricing",
    description: "Premium quality digital solutions at competitive prices that fit your budget.",
    icon: DollarSign,
  },
  {
    title: "Modern Tech",
    description: "We use the latest tools and frameworks to build future-proof digital products.",
    icon: Cpu,
  },
  {
    title: "Ongoing Support",
    description: "We're here for you even after launch with dedicated maintenance and support.",
    icon: LifeBuoy,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
