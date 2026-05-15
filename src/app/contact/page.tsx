import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react";

const contactFaqs = [
  {
    q: "How fast will I get a response?",
    a: "We typically respond to new inquiries within 12-24 hours. For urgent project needs, we recommend reaching out via WhatsApp for immediate connection."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes, every potential project starts with a free discovery call where we discuss your goals, budget, and how we can help you achieve success."
  },
  {
    q: "Can we meet in person?",
    a: "If you're based in Malappuram or nearby areas in Kerala, we can certainly arrange an in-person meeting. Otherwise, we are happy to connect via Google Meet or Zoom."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Hero Section for Contact */}
      <section className="pt-40 pb-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
            GET IN <span className="text-[#6200ea]">TOUCH.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your next digital chapter? We are here to answer any questions and kickstart your project. Reach out via the form below or through our direct channels.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Form + Map/Info) */}
      <div className="py-20">
        <Contact />
      </div>

      {/* Detailed Contact Info Grid */}
      <section className="py-32 px-6 bg-[#080808] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: MessageSquare, title: "Chat with Us", desc: "Speak directly with our team for quick inquiries.", link: "https://wa.me/919876543210", label: "Open WhatsApp" },
              { icon: Mail, title: "Email Support", desc: "For detailed project proposals and official requests.", link: "mailto:fagency.it@gmail.com", label: "fagency.it@gmail.com" },
              { icon: MapPin, title: "Visit Our Base", desc: "Located in the heart of Malappuram, Kerala.", link: "#", label: "View on Map" }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#6200ea]/20 transition-all duration-500 group">
                <item.icon size={32} className="text-[#6200ea] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{item.desc}</p>
                <a href={item.link} className="text-xs uppercase tracking-[0.2em] font-black text-white hover:text-[#6200ea] transition-colors flex items-center gap-2">
                  {item.label} <Globe size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Quick Info */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <Clock className="text-[#6200ea] mt-1" size={24} />
                <div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Availability</h5>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Monday — Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="text-[#6200ea] mt-1" size={24} />
                <div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Direct Call</h5>
                  <p className="text-white/40 text-sm">+91 9876 543 210</p>
                </div>
              </div>
            </div>
            <div className="bg-[#6200ea]/5 p-10 rounded-3xl border border-[#6200ea]/10">
              <h4 className="text-xl font-bold text-white mb-4">PROJECT INQUIRIES</h4>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Average response time for new project inquiries is **under 24 hours**. We look forward to hearing about your vision!
              </p>
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Team member" className="w-full h-full object-cover grayscale" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer customFaqs={contactFaqs} />
    </main>
  );
}
