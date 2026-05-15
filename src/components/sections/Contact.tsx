"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Building2, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ContactType = 'personal' | 'company';

const SERVICES = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "E-Commerce",
  "SEO Optimization",
  "Digital Marketing",
  "Consulting",
  "Other"
];

const PLATFORMS = [
  "Google Search",
  "LinkedIn",
  "Instagram",
  "Facebook",
  "Word of Mouth",
  "Other"
];

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const [contactType, setContactType] = useState<ContactType>('personal');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [source, setSource] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  useGSAP(() => {
    gsap.fromTo(".contact-header",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 90%",
        }
      }
    );

    gsap.fromTo(".contact-form",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 90%",
        }
      }
    );
  }, { scope: container });

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp Message
    let text = `*New Inquiry from Fagency*\n\n`;
    text += `*Type:* ${contactType === 'company' ? '🏢 Company' : '👤 Personal'}\n`;

    if (contactType === 'company') {
      text += `*Company Name:* ${formData.companyName}\n`;
      text += `*Contact Person:* ${formData.name}\n`;
      if (formData.website) text += `*Website:* ${formData.website}\n`;
    } else {
      text += `*Name:* ${formData.name}\n`;
    }

    text += `*Email:* ${formData.email}\n`;
    if (formData.phone) text += `*Phone:* ${formData.phone}\n`;

    if (selectedServices.length > 0) {
      text += `\n*Interested Services:*\n- ${selectedServices.join('\n- ')}\n`;
    }

    if (source) {
      text += `\n*Found us via:* ${source}\n`;
    }

    text += `\n*Message:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/917034887478?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={container} id="contact" className="py-14 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-[#FFC107]/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="contact-header text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's work together.
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium">
            Tell us about your project and we'll craft the perfect solution.
          </p>
        </div>

        <div className="contact-form bg-[#0A0A0A] p-6 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">

            {/* Type Selector */}
            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 max-w-sm mx-auto">
              <button
                type="button"
                onClick={() => setContactType('personal')}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${contactType === 'personal'
                    ? 'bg-[#FFC107] text-black shadow-lg'
                    : 'text-white/50 hover:text-white'
                  }`}
              >
                <User size={16} /> Personal
              </button>
              <button
                type="button"
                onClick={() => setContactType('company')}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${contactType === 'company'
                    ? 'bg-[#FFC107] text-black shadow-lg'
                    : 'text-white/50 hover:text-white'
                  }`}
              >
                <Building2 size={16} /> Company
              </button>
            </div>

            {/* Core Info Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactType === 'company' && (
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFC107] transition-all duration-300"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">
                  {contactType === 'company' ? 'Contact Person' : 'Full Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFC107] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">
                  {contactType === 'company' ? 'Business Email' : 'Email Address'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFC107] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Phone Number <span className="text-white/20 lowercase tracking-normal">(Optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFC107] transition-all duration-300"
                />
              </div>

              {contactType === 'company' && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Website <span className="text-white/20 lowercase tracking-normal">(Optional)</span></label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFC107] transition-all duration-300"
                  />
                </div>
              )}
            </div>

            {/* Services Selector */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">What services do you need?</label>
              <div className="flex flex-wrap gap-3">
                {SERVICES.map(service => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${selectedServices.includes(service)
                        ? 'bg-[#FFC107] border-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.3)]'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform / Source Selector */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Where did you hear about us?</label>
              <div className="flex flex-wrap gap-3">
                {PLATFORMS.map(platform => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => setSource(platform)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${source === platform
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/50 ml-1 uppercase tracking-widest">Project Details</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your goals, timeline, and any specific requirements..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFC107] transition-all duration-300 resize-none"
              />
            </div>

            <button type="submit" className="w-full py-5 bg-[#FFC107] text-black rounded-xl font-bold transition-all hover:bg-[#FFB300] hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 text-sm shadow-[0_0_30px_rgba(255,193,7,0.2)] mt-8">
              Send Inquiry
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
