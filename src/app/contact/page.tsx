import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import ContactInfo from "@/components/sections/ContactInfo";
import OfficeHours from "@/components/sections/OfficeHours";

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
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
            GET IN <span className="text-[#FFC107]">TOUCH.</span>
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
      <ContactInfo />

      {/* Office Hours & Quick Info */}
      <OfficeHours />

      <Footer customFaqs={contactFaqs} />
    </main>
  );
}
