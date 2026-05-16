"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  Star, 
  Settings, 
  LogOut, 
  User,
  TrendingUp,
  Eye,
  Plus,
  Search,
  Bell,
  Trash2,
  CheckCircle,
  Clock,
  Loader2,
  ExternalLink,
  X,
  Upload
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5002/api";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState<any>(null);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  // Form States
  const [newProject, setNewProject] = useState({
    title: "", category: "Web Development", desc: "", details: "", 
    features: "", link: "", image: ""
  });
  const [newReview, setNewReview] = useState({
    name: "", role: "", text: "", rating: 5
  });

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("fagency_admin_token");
    const userData = localStorage.getItem("fagency_admin_user");
    
    if (!token || !userData) {
      router.push("/admin/login");
    } else {
      setUser(JSON.parse(userData));
      fetchAllData(token);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("fagency_admin_token");
    localStorage.removeItem("fagency_admin_user");
    router.push("/admin/login");
  };

  const fetchAllData = async (token: string) => {
    setIsLoading(true);
    try {
      const headers = { "Authorization": `Bearer ${token}` };

      const [statsRes, enquiriesRes, projectsRes, reviewsRes] = await Promise.all([
        fetch(`${API_BASE}/admin/stats`, { headers }),
        fetch(`${API_BASE}/enquiries`, { headers }),
        fetch(`${API_BASE}/projects`),
        fetch(`${API_BASE}/reviews`)
      ]);

      if (statsRes.status === 401 || enquiriesRes.status === 401) {
        handleLogout();
        return;
      }

      const statsData = await statsRes.json();
      const enquiriesData = await enquiriesRes.json();
      const projectsData = await projectsRes.json();
      const reviewsData = await reviewsRes.json();

      setStats(statsData);
      setEnquiries(Array.isArray(enquiriesData) ? enquiriesData : []);
      setProjects(Array.isArray(projectsData) ? projectsData : []);
      setReviews(Array.isArray(reviewsData) ? reviewsData : []);

    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("fagency_admin_token");
    try {
      const res = await fetch(`${API_BASE}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          ...newProject,
          features: newProject.features.split(",").map(f => f.trim())
        })
      });
      if (res.ok) {
        setIsProjectModalOpen(false);
        setNewProject({ title: "", category: "Web Development", desc: "", details: "", features: "", link: "", image: "" });
        fetchAllData(token!);
      }
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("fagency_admin_token");
    try {
      const res = await fetch(`${API_BASE}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newReview)
      });
      if (res.ok) {
        setIsReviewModalOpen(false);
        setNewReview({ name: "", role: "", text: "", rating: 5 });
        fetchAllData(token!);
      }
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  const updateEnquiryStatus = async (id: string, status: string) => {
    const token = localStorage.getItem("fagency_admin_token");
    try {
      const res = await fetch(`${API_BASE}/enquiries/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setEnquiries(prev => prev.map(e => e._id === id ? { ...e, status } : e));
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const deleteProject = async (id: string) => {
    const token = localStorage.getItem("fagency_admin_token");
    if (!confirm("Are you sure you want to delete this project?")) return;
    
    try {
      const res = await fetch(`${API_BASE}/projects/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p._id !== id));
        fetchAllData(token!);
      }
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  const deleteReview = async (id: string) => {
    const token = localStorage.getItem("fagency_admin_token");
    if (!confirm("Are you sure you want to delete this review?")) return;
    
    try {
      const res = await fetch(`${API_BASE}/reviews/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        setReviews(prev => prev.filter(r => r._id !== id));
        fetchAllData(token!);
      }
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  if (!user || isLoading) return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-12 h-12 text-[#FFC107] animate-spin" />
      <p className="text-white/40 font-medium tracking-widest text-xs uppercase">Connecting to Fagency Data...</p>
    </div>
  );

  const sidebarItems = [
    { id: "overview", icon: LayoutDashboard, label: "Overview" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "enquiries", icon: MessageSquare, label: "Enquiries" },
    { id: "reviews", icon: Star, label: "Reviews" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex text-white font-sans">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 hidden lg:flex flex-col p-8 space-y-10 sticky top-0 h-screen">
        <div className="relative w-32 h-10 px-2">
          <Image
            src="/logo.PNG"
            alt="Fagency Logo"
            fill
            className="object-contain object-left"
          />
        </div>

        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? "bg-[#FFC107] text-black font-bold shadow-[0_0_20px_rgba(255,193,7,0.2)]" 
                : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all mt-auto"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 md:px-12 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-4 lg:hidden">
             <div className="relative w-24 h-8">
              <Image src="/logo.PNG" alt="Logo" fill className="object-contain" />
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative text-white/40 text-xs font-bold uppercase tracking-widest">
              Fagency Admin Portal / <span className="text-white">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Bell size={18} className="text-white/60" />
              {stats?.pendingEnquiries > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FFC107] rounded-full border-2 border-[#050505]"></span>
              )}
            </button>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">{user.username}</p>
                <p className="text-[10px] text-[#FFC107] uppercase tracking-widest font-bold">{user.role}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center text-black font-bold text-xs">
                {user.username.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Real-time Performance</h2>
                  <p className="text-white/40 mt-1">Everything is looking great today. Live data from your MongoDB.</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setIsProjectModalOpen(true)} className="bg-white/5 text-white border border-white/10 font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <Plus size={20} /> Project
                  </button>
                  <button onClick={() => setIsReviewModalOpen(true)} className="bg-[#FFC107] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#FFD54F] transition-colors shadow-[0_0_20px_rgba(255,193,7,0.2)]">
                    <Plus size={20} /> Review
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
                {[
                  { label: "Total Projects", value: stats?.projects || 0, icon: Briefcase, color: "text-blue-500", bg: "bg-blue-500/10" },
                  { label: "Active Enquiries", value: stats?.enquiries || 0, icon: MessageSquare, color: "text-[#FFC107]", bg: "bg-[#FFC107]/10" },
                  { label: "Client Reviews", value: stats?.reviews || 0, icon: Star, color: "text-green-500", bg: "bg-green-500/10" },
                  { label: "Live Traffic", value: stats?.totalViews || "0", icon: Eye, color: "text-purple-500", bg: "bg-purple-500/10" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}>
                        <stat.icon size={24} />
                      </div>
                      <div className="text-green-500 flex items-center gap-1 text-[10px] font-bold bg-green-500/10 px-2 py-1 rounded-lg uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        Live
                      </div>
                    </div>
                    <h3 className="text-white/40 text-sm font-medium mb-1 relative z-10">{stat.label}</h3>
                    <p className="text-2xl font-bold relative z-10">{stat.value}</p>
                    <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 blur-2xl ${stat.bg}`}></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Recent Enquiries */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                  <div className="px-8 py-6 border-b border-white/10 flex justify-between items-center bg-white/[0.01]">
                    <h3 className="text-lg font-bold">Recent Enquiries</h3>
                    <button onClick={() => setActiveTab("enquiries")} className="text-[#FFC107] text-xs font-bold hover:underline tracking-widest uppercase">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="text-white/20 text-[10px] uppercase tracking-widest border-b border-white/10 bg-white/[0.02]">
                        <tr>
                          <th className="px-8 py-4 font-bold">Client</th>
                          <th className="px-8 py-4 font-bold">Service</th>
                          <th className="px-8 py-4 font-bold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {enquiries.slice(0, 5).map((enq) => (
                          <tr key={enq._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <td className="px-8 py-4">
                              <p className="font-bold">{enq.name}</p>
                              <p className="text-[10px] text-white/40 tracking-wider">{enq.email}</p>
                            </td>
                            <td className="px-8 py-4 text-white/60 font-medium">{enq.service}</td>
                            <td className="px-8 py-4">
                              <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border ${
                                enq.status === 'completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                                enq.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              }`}>
                                {enq.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Recent Projects */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                  <div className="px-8 py-6 border-b border-white/10 flex justify-between items-center bg-white/[0.01]">
                    <h3 className="text-lg font-bold">Active Projects</h3>
                    <button onClick={() => setActiveTab("projects")} className="text-[#FFC107] text-xs font-bold hover:underline tracking-widest uppercase">Manage</button>
                  </div>
                  <div className="p-6 grid gap-4">
                    {projects.slice(0, 4).map((proj) => (
                      <div key={proj._id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-black transition-all">
                            <Briefcase size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{proj.title}</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">{proj.category}</p>
                          </div>
                        </div>
                        <a href={proj.link} target="_blank" rel="noopener" className="text-white/20 hover:text-[#FFC107] transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold">Manage Projects</h2>
                  <p className="text-white/40 mt-1">Control your portfolio showcase from here.</p>
                </div>
                <button onClick={() => setIsProjectModalOpen(true)} className="bg-[#FFC107] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(255,193,7,0.2)]">
                  <Plus size={20} /> New Project
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((proj) => (
                  <div key={proj._id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col group relative">
                    <div className="relative h-48 bg-black/40 flex items-center justify-center border-b border-white/5">
                      {proj.image ? (
                        <Image src={proj.image} alt={proj.title} fill className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110" />
                      ) : (
                        <Briefcase size={48} className="text-white/10" />
                      )}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                        <button onClick={() => deleteProject(proj._id)} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all backdrop-blur-md border border-red-500/20">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#FFC107] bg-[#FFC107]/10 px-3 py-1 rounded-full border border-[#FFC107]/20">{proj.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                      <p className="text-sm text-white/50 line-clamp-2 mb-8 font-medium leading-relaxed">{proj.desc || proj.details}</p>
                      <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                        <a href={proj.link} target="_blank" rel="noopener" className="text-xs font-bold text-white/40 hover:text-[#FFC107] flex items-center gap-2 transition-colors">
                          Live Site <ExternalLink size={14} />
                        </a>
                        <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{new Date(proj.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ENQUIRIES TAB */}
          {activeTab === "enquiries" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="mb-10">
                <h2 className="text-3xl font-bold">Client Enquiries</h2>
                <p className="text-white/40 mt-1">Direct inquiries from your website contact form.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                  <thead className="text-white/20 text-[10px] uppercase tracking-widest border-b border-white/10 bg-white/[0.02]">
                    <tr>
                      <th className="px-8 py-6 font-bold">Client Identity</th>
                      <th className="px-8 py-6 font-bold">Requirement Details</th>
                      <th className="px-8 py-6 font-bold">Received On</th>
                      <th className="px-8 py-6 font-bold">Action Status</th>
                      <th className="px-8 py-6 font-bold text-right">Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enq) => (
                      <tr key={enq._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                        <td className="px-8 py-8">
                          <p className="font-bold text-lg text-white group-hover:text-[#FFC107] transition-colors">{enq.name}</p>
                          <p className="text-sm text-white/40 font-medium">{enq.email}</p>
                          <p className="text-xs text-[#FFC107]/60 font-bold mt-2 tracking-widest uppercase">{enq.phone}</p>
                        </td>
                        <td className="px-8 py-8 max-w-md">
                          <p className="text-[#FFC107] font-bold text-[10px] uppercase tracking-[0.2em] mb-3 bg-[#FFC107]/5 w-max px-2 py-1 rounded border border-[#FFC107]/10">{enq.service}</p>
                          <p className="text-sm text-white/60 line-clamp-3 leading-relaxed font-medium italic">&quot;{enq.message}&quot;</p>
                        </td>
                        <td className="px-8 py-8 text-sm text-white/30 font-bold">
                          {new Date(enq.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td className="px-8 py-8">
                          <div className="relative w-max">
                            <select 
                              value={enq.status} 
                              onChange={(e) => updateEnquiryStatus(enq._id, e.target.value)}
                              className={`appearance-none bg-[#050505] border border-white/10 rounded-xl px-4 py-2 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-[#FFC107] cursor-pointer transition-all ${
                                enq.status === 'completed' ? 'text-green-500 border-green-500/20' : 
                                enq.status === 'pending' ? 'text-yellow-500 border-yellow-500/20' : 'text-blue-500 border-blue-500/20'
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="processing">Processing</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                        </td>
                        <td className="px-8 py-8 text-right">
                          <button onClick={() => updateEnquiryStatus(enq._id, 'completed')} className="w-12 h-12 rounded-2xl bg-white/5 text-white/20 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all ml-auto">
                            <CheckCircle size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === "reviews" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-bold">Client Reviews</h2>
                  <p className="text-white/40 mt-1">Management of testimonials shown on the website.</p>
                </div>
                <button onClick={() => setIsReviewModalOpen(true)} className="bg-[#FFC107] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2">
                  <Plus size={20} /> New Review
                </button>
              </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {reviews.map((rev) => (
                   <div key={rev._id} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative group hover:border-[#FFC107]/30 transition-all duration-500">
                     <button onClick={() => deleteReview(rev._id)} className="absolute top-6 right-6 text-red-500/20 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                       <Trash2 size={20} />
                     </button>
                     <div className="flex gap-1.5 mb-8">
                       {[1,2,3,4,5].map(i => (
                         <Star key={i} size={14} fill={i <= (rev.rating || 5) ? "#FFC107" : "none"} stroke={i <= (rev.rating || 5) ? "#FFC107" : "#333"} />
                       ))}
                     </div>
                     <p className="text-white/80 text-base italic leading-relaxed mb-10 font-medium">&quot;{rev.text}&quot;</p>
                     <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                        <div className="w-12 h-12 rounded-full bg-[#FFC107]/10 flex items-center justify-center font-bold text-[#FFC107] text-lg border border-[#FFC107]/20">
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-white text-base">{rev.name}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mt-0.5">{rev.role || 'Client'}</p>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>
      </main>

      {/* MODALS */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsProjectModalOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-bold text-white">Add New Project</h3>
                <button onClick={() => setIsProjectModalOpen(false)} className="text-white/40 hover:text-white"><X /></button>
              </div>
              <form onSubmit={handleAddProject} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Title</label>
                    <input value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Category</label>
                    <select value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} className="w-full bg-[#050505] text-white border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none">
                      <option value="Web Development" className="bg-[#050505] text-white">Web Development</option>
                      <option value="App Development" className="bg-[#050505] text-white">App Development</option>
                      <option value="Software Development" className="bg-[#050505] text-white">Software Development</option>
                      <option value="Graphic Design" className="bg-[#050505] text-white">Graphic Design</option>
                      <option value="Video Editing" className="bg-[#050505] text-white">Video Editing</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Short Description</label>
                  <input value={newProject.desc} onChange={e => setNewProject({...newProject, desc: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Details</label>
                  <textarea value={newProject.details} onChange={e => setNewProject({...newProject, details: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none h-24" required />
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Image URL</label>
                    <input value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" placeholder="/portfolio/img.jpg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Project Link</label>
                    <input value={newProject.link} onChange={e => setNewProject({...newProject, link: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" placeholder="https://..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Features (Comma separated)</label>
                  <input value={newProject.features} onChange={e => setNewProject({...newProject, features: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" placeholder="React, GSAP, Node.js" />
                </div>
                <button type="submit" className="w-full bg-[#FFC107] text-black font-bold py-4 rounded-2xl mt-6 hover:bg-[#FFD54F] transition-all">Create Project</button>
              </form>
            </motion.div>
          </div>
        )}

        {isReviewModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsReviewModalOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-bold text-white">Add Review</h3>
                <button onClick={() => setIsReviewModalOpen(false)} className="text-white/40 hover:text-white"><X /></button>
              </div>
              <form onSubmit={handleAddReview} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Client Name</label>
                  <input value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Role / Company</label>
                  <input value={newReview.role} onChange={e => setNewReview({...newReview, role: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Review Text</label>
                  <textarea value={newReview.text} onChange={e => setNewReview({...newReview, text: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none h-32" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Rating (1-5)</label>
                  <input type="number" min="1" max="5" value={newReview.rating} onChange={e => setNewReview({...newReview, rating: parseInt(e.target.value)})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FFC107] outline-none" required />
                </div>
                <button type="submit" className="w-full bg-[#FFC107] text-black font-bold py-4 rounded-2xl mt-6">Publish Review</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
