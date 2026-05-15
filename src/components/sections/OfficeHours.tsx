import { Clock, Phone } from "lucide-react";

export default function OfficeHours() {
  return (
    <section className="py-32 px-6 bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <Clock className="text-[#FFC107] mt-1" size={24} />
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
              <Phone className="text-[#FFC107] mt-1" size={24} />
              <div>
                <h5 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Direct Call</h5>
                <p className="text-white/40 text-sm">+91 9876 543 210</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFC107]/5 p-10 rounded-3xl border border-[#FFC107]/10">
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
  );
}
