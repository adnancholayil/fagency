import { Mail, MapPin, MessageSquare, Globe } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-32 px-6 bg-[#080808] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { icon: MessageSquare, title: "Chat with Us", desc: "Speak directly with our team for quick inquiries.", link: "https://wa.me/919876543210", label: "Open WhatsApp" },
            { icon: Mail, title: "Email Support", desc: "For detailed project proposals and official requests.", link: "mailto:fagency.it@gmail.com", label: "fagency.it@gmail.com" },
            { icon: MapPin, title: "Visit Our Base", desc: "Located in the heart of Malappuram, Kerala.", link: "#", label: "View on Map" }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#FFC107]/20 transition-all duration-500 group">
              <item.icon size={32} className="text-[#FFC107] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{item.desc}</p>
              <a href={item.link} className="text-xs uppercase tracking-[0.2em] font-black text-white hover:text-[#FFC107] transition-colors flex items-center gap-2">
                {item.label} <Globe size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
