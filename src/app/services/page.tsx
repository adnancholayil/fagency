import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20">
      <Navbar />
      <div className="py-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
