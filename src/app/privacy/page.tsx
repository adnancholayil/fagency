import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you fill out our contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and project details."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects, and to respond to your inquiries. We do not sell or share your personal data with third parties for their marketing purposes."
    },
    {
      title: "3. Data Security",
      content: "We implement reasonable security measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure."
    },
    {
      title: "4. Cookies & Tracking",
      content: "Our website may use cookies to enhance your experience and analyze our traffic. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent."
    },
    {
      title: "5. Third-Party Links",
      content: "Our website may contain links to other websites. We are not responsible for the privacy practices or content of these third-party sites."
    },
    {
      title: "6. Changes to This Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <PageHero 
        title1="PRIVACY"
        title2="POLICY."
        description="We value your trust and are committed to protecting your personal information. This policy explains how we handle your data."
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
                Last Updated: May 2024. If you have any questions regarding this policy, please contact us at fagency.it@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
