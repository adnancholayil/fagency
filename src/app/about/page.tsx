import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Experience from "@/components/sections/Experience";

const aboutFaqs = [
  {
    q: "How many members are in your freelancer team?",
    a: "We are a tight-knit core team of 5 specialized freelancers, each focusing on different domains like development, design, and marketing to ensure expert execution."
  },
  {
    q: "Where is Fagency based?",
    a: "We are based in Malappuram, Kerala, but we operate as a fully digital agency, serving clients both locally and internationally."
  },
  {
    q: "Do you collaborate with other agencies?",
    a: "Yes, we often partner with other creative studios and agencies as a technical execution partner for high-end web and app development."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Hero Section for About */}
      <section className="pt-40 pb-20 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
            WHO <span className="text-[#FFC107]">WE ARE.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Fagency is a collective of specialized freelancers with over 1 year of experience in delivering high-impact digital solutions. We bridge the gap between complex technology and human-centered design.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Values Section */}
      <Values />

      {/* Experience Timeline / Stats */}
      <Experience />


      <Footer customFaqs={aboutFaqs} />
    </main>
  );
}
