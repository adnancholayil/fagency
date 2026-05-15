import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Fagency's services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
    },
    {
      title: "2. Scope of Services",
      content: "Fagency provides digital services including Web Development, App Development, Software Development, Graphic Design, and Media Production. The specific scope of work for each project will be outlined in individual project proposals or agreements."
    },
    {
      title: "3. Intellectual Property",
      content: "Unless otherwise agreed in writing, all final deliverables created for the client will belong to the client upon full payment of all fees. Fagency retains the right to display the work in its portfolio for promotional purposes."
    },
    {
      title: "4. Payments & Fees",
      content: "Payment terms, including deposit amounts and milestone payments, will be specified in the project proposal. Failure to make payments on time may result in a halt of services."
    },
    {
      title: "5. Limitation of Liability",
      content: "Fagency shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or any delay in project delivery due to factors outside our control."
    },
    {
      title: "6. Governing Law",
      content: "These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Kerala, India."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <PageHero 
        title1="TERMS OF"
        title2="SERVICE."
        description="Please read these terms carefully before using our services. They outline your rights and our obligations to you."
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-16 space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-medium text-[#FFC107] tracking-tight">
                  {section.title}
                </h2>
                <p className="text-white/60 leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            ))}
            
            <div className="pt-12 border-t border-white/5 mt-12">
              <p className="text-white/40 text-sm font-medium italic">
                Last Updated: May 2024. For any questions regarding these terms, please contact our team at fagency.it@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
