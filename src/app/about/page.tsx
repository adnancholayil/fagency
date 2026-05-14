import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20">
      <Navbar />
      <div className="py-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
