import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/sections/Portfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20">
      <Navbar />
      <div className="py-20">
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
