import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20">
      <Navbar />
      <div className="py-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
