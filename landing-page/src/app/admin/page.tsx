"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Bell,
  Users,
  Image as ImageIcon,
  FileText,
  Award,
  Compass,
  Trophy,
  Inbox,
  Mail,
  GraduationCap,
  Settings,
  LogOut,
  ExternalLink,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock,
  Search,
  RefreshCw,
  X,
  Save,
  AlertCircle,
  Menu,
  Home,
  BookOpen,
  ShieldCheck,
  Sparkles,
  Building2,
  Calendar,
  MapPin,
  Eye,
  ArrowRight,
  ChevronRight,
  Filter,
} from "lucide-react";

type TabType =
  | "home"
  | "academics"
  | "clubs"
  | "achievements"
  | "teachers"
  | "notices"
  | "gallery"
  | "scholarships"
  | "resources"
  | "settings"
  | "enquiries"
  | "contacts"
  | "alumni"
  | "overview";

const DEFAULT_HERO_SLIDES = [
  {
    id: "slide-1",
    badge: "ESTD 1976",
    titlePart1: "Start Your",
    titleHighlight: "Inspiring & Bright",
    titlePart2: "Academic Future",
    desc: "Government-aided school nurturing over 5,100 students in Malappuram district.",
    image:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=85&w=1920&auto=format&fit=crop",
    caption: "4.5-Acre Campus & Modern Infrastructure",
    tag: "Academic Excellence",
    statValue: "5,100+",
    statLabel: "Enrolled Students",
  },
  {
    id: "slide-2",
    badge: "INFRASTRUCTURE",
    titlePart1: "Modern High-Tech",
    titleHighlight: "Laboratories & Smart",
    titlePart2: "Classrooms",
    desc: "Fully equipped science labs and KITE ICT smart classrooms.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1920&auto=format&fit=crop",
    caption: "Science Labs & ICT Smart Classrooms",
    tag: "Research & Science",
    statValue: "6+",
    statLabel: "Specialized Labs",
  },
  {
    id: "slide-3",
    badge: "HIGHER SECONDARY",
    titlePart1: "Empowering",
    titleHighlight: "Science, Commerce &",
    titlePart2: "Humanities Streams",
    desc: "Science, Commerce, and Humanities streams with 194 Full A+ in SSLC 2024.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=85&w=1920&auto=format&fit=crop",
    caption: "165+ Dedicated Educators & Mentors",
    tag: "DHSE Code: 11024",
    statValue: "194",
    statLabel: "Full A+ in SSLC 2024",
  },
  {
    id: "slide-4",
    badge: "CAMPUS LIBRARY",
    titlePart1: "Central Reference",
    titleHighlight: "Library & Digital",
    titlePart2: "Resource Wing",
    desc: "Over 15,000 titles, periodicals, and a reading room for students.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=85&w=1920&auto=format&fit=crop",
    caption: "15,000+ Volume Central Library",
    tag: "Resource Hub",
    statValue: "15,000+",
    statLabel: "Academic Volumes",
  },
];

const DEFAULT_ABOUT_SCHOOL = {
  badge: "About Our School",
  headingPart1: "Quality Education & Character",
  headingHighlight: "Since 1976",
  estdYear: "1976",
  estdText: "Nearly 50 years of educational service in Malappuram district.",
  description:
    "Founded under the Nediyiruppu Muslim Educational Association, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary sections.",
  img1: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=600&auto=format&fit=crop",
  img2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
  img3: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
  feature1Title: "Comprehensive Learning",
  feature1Desc: "Balanced development across sciences, commerce, arts, and sports.",
  feature2Title: "Proven Results",
  feature2Desc: "99.4% pass record with 194 Full A+ in SSLC 2024.",
};

const DEFAULT_WHY_SCHOOL = {
  badge: "Why PPM HSS",
  headingPart1: "Dedicated Mentorship &",
  headingHighlight: "Modern Campus",
  description:
    "We combine academic discipline with individual guidance, modern laboratories, and government-aided affordability.",
  cards: [
    {
      title: "Experienced Faculty",
      desc: "165+ teachers across high school and higher secondary.",
    },
    {
      title: "Modern Laboratories",
      desc: "Equipped physics, chemistry, biology, and computer labs.",
    },
    {
      title: "Government Aided",
      desc: "Subsidized free tuition with state scholarship access.",
    },
    {
      title: "4.5-Acre Campus",
      desc: "Smart classrooms, central library, and sports grounds.",
    },
  ],
};

const DEFAULT_ACADEMIC_STREAMS = [
  {
    code: "01",
    name: "Science (Biology Stream)",
    seats: 120,
    core: "Physics, Chemistry, Biology, Mathematics",
    secondLang: "English, Malayalam / Arabic / Hindi",
    career: "MBBS, BDS, Allied Medical Sciences, Engineering, Pure Sciences, Biotechnology",
    desc: "Premier science stream equipped with state-of-the-art physics, chemistry, and biology laboratories for entrance coaching aspirants.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "05",
    name: "Science (Computer Science Stream)",
    seats: 60,
    core: "Physics, Chemistry, Mathematics, Computer Science",
    secondLang: "English, Malayalam / Arabic / Hindi",
    career: "B.Tech/BE in CS, Data Science, AI/ML, BCA, Software Architecture, Cybersecurity",
    desc: "Rigorous technical foundation in programming, algorithms, electronics, and discrete mathematics supported by KITE ICT smart computer labs.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "11",
    name: "Commerce (Computer Application Stream)",
    seats: 120,
    core: "Accountancy, Business Studies, Economics, Computer Application",
    secondLang: "English, Malayalam / Arabic / Hindi",
    career: "CA, CMA, CS, B.Com, BBA, Financial Analysis, Corporate Banking, FinTech",
    desc: "Combines financial accounting and business dynamics with computerized accounting and database software practice for high commerce placement.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "19",
    name: "Humanities & Social Sciences",
    seats: 60,
    core: "History, Economics, Political Science, Sociology",
    secondLang: "English, Malayalam / Arabic / Hindi",
    career: "Civil Services (UPSC), Law (CLAT), Journalism, Public Policy, Social Work, Academia",
    desc: "Broad social science foundation cultivating critical reasoning, public leadership, constitutional analysis, and national civil service foundation.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<{ username: string } | null>(null);

  // Stats
  const [stats, setStats] = useState<any>({});
  const [dbStatus, setDbStatus] = useState<string>("Connecting...");

  // Entity lists
  const [notices, setNotices] = useState<any[]>([]);
  const [teachers, setTeachers] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [clubs, setClubs] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [alumni, setAlumni] = useState<any[]>([]);
  const [siteSettings, setSiteSettings] = useState<any>(null);

  // Home Page Editor Specific Data
  const [heroSlides, setHeroSlides] = useState<any[]>(DEFAULT_HERO_SLIDES);
  const [aboutSchool, setAboutSchool] = useState<any>(DEFAULT_ABOUT_SCHOOL);
  const [whySchool, setWhySchool] = useState<any>(DEFAULT_WHY_SCHOOL);
  const [academicStreams, setAcademicStreams] = useState<any[]>(DEFAULT_ACADEMIC_STREAMS);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [modalMode, setModalMode] = useState<"add" | "edit" | null>(null);
  const [modalTarget, setModalTarget] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Notification Toast
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 3500);
  };

  // 1. Check Authentication
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth/me");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        if (!data.authenticated) {
          router.push("/admin/login");
          return;
        }
        setAdminUser(data.user);
        loadAllData();
      } catch {
        router.push("/admin/login");
      }
    }
    checkAuth();
  }, [router]);

  // 2. Load All Data
  const loadAllData = useCallback(async () => {
    setLoading(true);
    try {
      const [
        statsRes,
        noticesRes,
        teachersRes,
        galleryRes,
        resourcesRes,
        scholarshipsRes,
        clubsRes,
        achievementsRes,
        enquiriesRes,
        contactsRes,
        alumniRes,
        settingsRes,
      ] = await Promise.all([
        fetch("/api/admin/stats").then((r) => r.json()),
        fetch("/api/admin/notices").then((r) => r.json()),
        fetch("/api/admin/teachers").then((r) => r.json()),
        fetch("/api/admin/gallery").then((r) => r.json()),
        fetch("/api/admin/resources").then((r) => r.json()),
        fetch("/api/admin/scholarships").then((r) => r.json()),
        fetch("/api/admin/clubs").then((r) => r.json()),
        fetch("/api/admin/achievements").then((r) => r.json()),
        fetch("/api/admin/enquiries").then((r) => r.json()),
        fetch("/api/admin/contacts").then((r) => r.json()),
        fetch("/api/admin/alumni").then((r) => r.json()),
        fetch("/api/admin/settings").then((r) => r.json()),
      ]);

      if (statsRes.success) {
        setStats(statsRes.stats);
        setDbStatus(statsRes.dbStatus === "connected" ? "MongoDB Live" : "In-Memory Fallback");
      }
      if (noticesRes.success) setNotices(noticesRes.data);
      if (teachersRes.success) setTeachers(teachersRes.data);
      if (galleryRes.success) setGallery(galleryRes.data);
      if (resourcesRes.success) setResources(resourcesRes.data);
      if (scholarshipsRes.success) setScholarships(scholarshipsRes.data);
      if (clubsRes.success) setClubs(clubsRes.data);
      if (achievementsRes.success) setAchievements(achievementsRes.data);
      if (enquiriesRes.success) setEnquiries(enquiriesRes.data);
      if (contactsRes.success) setContacts(contactsRes.data);
      if (alumniRes.success) setAlumni(alumniRes.data);

      if (settingsRes.success && settingsRes.data) {
        setSiteSettings(settingsRes.data);
        if (settingsRes.data.homePageData) {
          if (settingsRes.data.homePageData.heroSlides?.length > 0) {
            setHeroSlides(settingsRes.data.homePageData.heroSlides);
          }
          if (settingsRes.data.homePageData.aboutSchool) {
            setAboutSchool(settingsRes.data.homePageData.aboutSchool);
          }
          if (settingsRes.data.homePageData.whySchool) {
            setWhySchool(settingsRes.data.homePageData.whySchool);
          }
          if (settingsRes.data.homePageData.academicStreams?.length > 0) {
            setAcademicStreams(settingsRes.data.homePageData.academicStreams);
          }
        }
      }
    } catch (err: any) {
      showToast(err.message || "Failed to load dashboard data", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  // 3. Logout Handler
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  // 4. Delete Handler
  const handleDelete = async (tab: string, id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    try {
      const res = await fetch(`/api/admin/${tab}?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Delete failed");

      showToast("Item deleted successfully");
      loadAllData();
    } catch (err: any) {
      showToast(err.message, "error");
    }
  };

  // 5. Update Status Handlers
  const handleStatusChange = async (tab: "enquiries" | "contacts" | "alumni", id: string, newStatus: any) => {
    try {
      const body = tab === "alumni" ? { id, isVerified: newStatus } : { id, status: newStatus };
      const res = await fetch(`/api/admin/${tab}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Update failed");

      showToast("Status updated");
      loadAllData();
    } catch (err: any) {
      showToast(err.message, "error");
    }
  };

  // 6. Generic Modal Save
  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!modalTarget) return;

    setFormSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const formProps: any = Object.fromEntries(formData.entries());

    // Boolean conversions
    if ("isUrgent" in formProps) formProps.isUrgent = formProps.isUrgent === "on";
    if ("archived" in formProps) formProps.archived = formProps.archived === "on";

    // Handle Home Page specific sections
    if (modalTarget === "heroSlide") {
      let updatedSlides = [...heroSlides];
      if (modalMode === "edit" && editingItem) {
        updatedSlides = updatedSlides.map((s) => (s.id === editingItem.id ? { ...s, ...formProps } : s));
      } else {
        updatedSlides.push({ id: `slide-${Date.now()}`, ...formProps });
      }
      setHeroSlides(updatedSlides);
      await saveHomePageChanges({ heroSlides: updatedSlides });
      return;
    }

    if (modalTarget === "aboutSchool") {
      const updated = { ...aboutSchool, ...formProps };
      setAboutSchool(updated);
      await saveHomePageChanges({ aboutSchool: updated });
      return;
    }

    if (modalTarget === "whySchool") {
      const updated = {
        ...whySchool,
        badge: formProps.badge,
        headingPart1: formProps.headingPart1,
        headingHighlight: formProps.headingHighlight,
        description: formProps.description,
        cards: [
          { title: formProps.card1Title, desc: formProps.card1Desc },
          { title: formProps.card2Title, desc: formProps.card2Desc },
          { title: formProps.card3Title, desc: formProps.card3Desc },
          { title: formProps.card4Title, desc: formProps.card4Desc },
        ],
      };
      setWhySchool(updated);
      await saveHomePageChanges({ whySchool: updated });
      return;
    }

    if (modalTarget === "academicStream") {
      let updatedStreams = [...academicStreams];
      if (editingItem) {
        updatedStreams = updatedStreams.map((s) => (s.code === editingItem.code ? { ...s, ...formProps } : s));
      }
      setAcademicStreams(updatedStreams);
      await saveHomePageChanges({ academicStreams: updatedStreams });
      return;
    }

    try {
      const method = modalMode === "add" ? "POST" : "PUT";
      const payload = modalMode === "edit" ? { ...editingItem, ...formProps } : formProps;

      const res = await fetch(`/api/admin/${modalTarget}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Action failed");

      showToast(data.message || "Saved successfully");
      setModalMode(null);
      setEditingItem(null);
      loadAllData();
    } catch (err: any) {
      showToast(err.message, "error");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Helper to persist home page updates to DB
  const saveHomePageChanges = async (partialHomeData: any) => {
    try {
      const newHomeData = {
        heroSlides,
        aboutSchool,
        whySchool,
        academicStreams,
        ...partialHomeData,
      };

      const updatedSettings = {
        ...siteSettings,
        homePageData: newHomeData,
      };

      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSettings),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to update home page");

      setSiteSettings(updatedSettings);
      showToast("Page section updated successfully!");
      setModalMode(null);
      setEditingItem(null);
    } catch (err: any) {
      showToast(err.message, "error");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Delete Hero Slide
  const handleDeleteHeroSlide = async (slideId: string) => {
    if (!confirm("Are you sure you want to delete this hero slide?")) return;
    const filtered = heroSlides.filter((s) => s.id !== slideId);
    setHeroSlides(filtered);
    await saveHomePageChanges({ heroSlides: filtered });
  };

  // 7. Site Settings Save
  const handleSettingsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(siteSettings),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to update settings");

      showToast("Website settings updated successfully");
      loadAllData();
    } catch (err: any) {
      showToast(err.message, "error");
    } finally {
      setFormSubmitting(false);
    }
  };

  const openAddModal = (target: string) => {
    setModalTarget(target);
    setEditingItem(null);
    setPreviewImageUrl("");
    setModalMode("add");
  };

  const openEditModal = (target: string, item: any) => {
    setModalTarget(target);
    setEditingItem(item);
    setPreviewImageUrl(item.imageUrl || item.image || item.photoUrl || "");
    setModalMode("edit");
  };

  const navItems = [
    { id: "home", label: "Home Page", icon: Home, badge: "Slider & Sections" },
    { id: "academics", label: "Academics", icon: GraduationCap, badge: "Curriculum" },
    { id: "clubs", label: "Clubs & Activities", icon: Compass, count: clubs.length },
    { id: "achievements", label: "Achievements", icon: Trophy, count: achievements.length },
    { id: "teachers", label: "Faculty Directory", icon: Users, count: teachers.length },
    { id: "notices", label: "Notices & Circulars", icon: Bell, count: notices.length },
    { id: "gallery", label: "Photo Gallery", icon: ImageIcon, count: gallery.length },
    { id: "scholarships", label: "Scholarships", icon: Award, count: scholarships.length },
    { id: "resources", label: "Downloads & Syllabi", icon: FileText, count: resources.length },
    { id: "settings", label: "School Info & Contacts", icon: Settings },
    { id: "enquiries", label: "Admissions Inquiries", icon: Inbox, count: enquiries.length, highlight: true },
    { id: "contacts", label: "Contact Messages", icon: Mail, count: contacts.length },
    { id: "alumni", label: "Alumni Registrations", icon: CheckCircle2, count: alumni.length },
    { id: "overview", label: "Overview & Analytics", icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-3 transition-all animate-bounce ${
            toast.type === "success" ? "bg-[#008744] text-white" : "bg-red-600 text-white"
          }`}
        >
          {toast.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {toast.text}
        </div>
      )}

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 h-screen w-72 bg-white border-r border-slate-200 z-40 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo & Brand Header */}
        <div className="shrink-0 p-5 border-b border-slate-100 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-1.5">
              <Image
                src="/images/logo.png"
                alt="PPM HSS"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-sm font-black text-slate-900 tracking-tight">PPM HSS CMS</h1>
              <p className="text-[11px] text-slate-500 font-medium">Page Visual Editor</p>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Database Mode Pill */}
        <div className="shrink-0 px-5 py-3 border-b border-slate-100/80 bg-slate-50/50 flex items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-2 text-slate-600">
            <span className={`w-2 h-2 rounded-full ${dbStatus.includes("Live") ? "bg-emerald-500" : "bg-emerald-400"}`} />
            {dbStatus}
          </span>
          <button
            onClick={loadAllData}
            title="Refresh live data"
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#008744]" : ""}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 min-h-0 overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            PUBLIC PAGES & CONTENT
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as TabType);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#008744] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive ? "bg-white/20 text-white" : "bg-emerald-50 text-[#008744] border border-emerald-200"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {item.count !== undefined && !item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : item.highlight
                        ? "bg-emerald-50 text-[#008744]"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Card & Logout */}
        <div className="shrink-0 p-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Logged in as:</span>
            <span className="font-bold text-slate-900">{adminUser?.username || "Admin"}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Public Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen lg:pl-72">
        {/* Top Header Bar */}
        <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-20 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-600"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900 capitalize tracking-tight">
                  {activeTab === "home" ? "Home Page Visual Editor" : activeTab === "academics" ? "Academics & Streams Editor" : `${activeTab} Page`}
                </h2>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#008744] border border-emerald-200">
                  Exact Public Replica Mode
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Edit cards, images, and content directly on live school page layouts.
              </p>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* ========================================================
              TAB: HOME PAGE VISUAL EDITOR
          ======================================================== */}
          {activeTab === "home" && (
            <div className="space-y-12">
              {/* 1. HERO SLIDER SECTION */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Section 1: Hero Carousel Slider</span>
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Hero Banner Slides ({heroSlides.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Top animated showcase visible when visitors first land on PPM HSS.
                    </p>
                  </div>
                  <button
                    onClick={() => openAddModal("heroSlide")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] shadow-xs cursor-pointer transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Hero Slide</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={slide.id || idx}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 text-white shadow-md flex flex-col justify-between"
                    >
                      {/* Image background with overlay */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={slide.image}
                          alt={slide.caption || "Hero Slide"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                            Slide #{idx + 1}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#008744] text-white">
                            {slide.badge}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 flex items-center gap-1">
                          <button
                            onClick={() => openEditModal("heroSlide", slide)}
                            className="p-2 rounded-lg bg-white/90 hover:bg-white text-slate-900 shadow-md transition-colors cursor-pointer"
                            title="Edit this slide"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteHeroSlide(slide.id)}
                            className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors cursor-pointer"
                            title="Delete this slide"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-5 space-y-3 bg-slate-900">
                        <h4 className="text-base font-black text-white leading-snug">
                          {slide.titlePart1} <span className="text-emerald-400">{slide.titleHighlight}</span> {slide.titlePart2}
                        </h4>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {slide.desc}
                        </p>
                        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Stat: <b className="text-white">{slide.statValue}</b> {slide.statLabel}</span>
                          <span className="font-mono text-emerald-400">{slide.tag}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. ABOUT OUR SCHOOL SECTION */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Section 2: About Our School</span>
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Institutional History, Photos & Mission
                    </h3>
                    <p className="text-xs text-slate-500">
                      Visual 3-photo collage and foundational story on the public homepage.
                    </p>
                  </div>
                  <button
                    onClick={() => openEditModal("aboutSchool", aboutSchool)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] shadow-xs cursor-pointer transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit About Our School</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/60 p-6 rounded-2xl border border-slate-200/70">
                  {/* Photo Collage Preview */}
                  <div className="lg:col-span-6 grid grid-cols-2 gap-3 items-end">
                    <div className="space-y-3">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                        <img src={aboutSchool.img1} alt="Campus Building" className="w-full h-36 object-cover" />
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                        <img src={aboutSchool.img2} alt="Science Lab" className="w-full h-28 object-cover" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#008744] text-white p-4 rounded-2xl space-y-1 shadow-md">
                        <div className="text-3xl font-black font-mono">{aboutSchool.estdYear}</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Established Year</div>
                        <p className="text-[10px] text-emerald-100 leading-tight">{aboutSchool.estdText}</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                        <img src={aboutSchool.img3} alt="Campus Library" className="w-full h-32 object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Story preview */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-bold text-[#008744] uppercase tracking-wider">{aboutSchool.badge}</span>
                    <h4 className="text-2xl font-black text-slate-900 leading-snug">
                      {aboutSchool.headingPart1} <span className="text-[#008744]">{aboutSchool.headingHighlight}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{aboutSchool.description}</p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                        <h5 className="text-xs font-bold text-slate-900">{aboutSchool.feature1Title}</h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">{aboutSchool.feature1Desc}</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                        <h5 className="text-xs font-bold text-slate-900">{aboutSchool.feature2Title}</h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">{aboutSchool.feature2Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. WHY PPM HSS SECTION */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Section 3: Why PPM HSS Highlights</span>
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Key Highlights & Value Proposition Cards
                    </h3>
                    <p className="text-xs text-slate-500">
                      4 key pillar cards showcasing faculty, science labs, aided tuition, and campus size.
                    </p>
                  </div>
                  <button
                    onClick={() => openEditModal("whySchool", whySchool)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] shadow-xs cursor-pointer transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit Why PPM HSS</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {(whySchool.cards || []).map((card: any, idx: number) => {
                    const icons = [Users, Sparkles, Award, Building2];
                    const IconComp = icons[idx % icons.length];
                    return (
                      <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">#0{idx + 1}</span>
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{card.title}</h5>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{card.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 4. KEY LEADERSHIP SECTION */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <Users className="w-3.5 h-3.5" />
                      <span>Section 4: Key Institutional Leadership</span>
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Manager, Secretary, Principal & Headmaster
                    </h3>
                    <p className="text-xs text-slate-500">
                      Names and photos rendered on the homepage (editable via School Info & Settings tab).
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Manage Leadership in Settings</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { role: "Manager", name: siteSettings?.administration?.manager?.name || "Sayed Sadikali Shihab Thangal", title: "Nediyiruppu MEA", photo: siteSettings?.administration?.manager?.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" },
                    { role: "Secretary & Treasurer", name: siteSettings?.administration?.secretary?.name || "K.P. Bappu Haji", title: "Nediyiruppu MEA", photo: siteSettings?.administration?.secretary?.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
                    { role: "Principal", name: siteSettings?.administration?.principal?.name || "Sri. Abdul Rasheed K.", title: "Higher Secondary Wing", photo: siteSettings?.administration?.principal?.photo || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
                    { role: "Headmaster", name: siteSettings?.administration?.headmaster?.name || "Smt. Sujatha Kumari V.", title: "High School Wing", photo: siteSettings?.administration?.headmaster?.photo || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
                  ].map((leader, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-3">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-emerald-500 shadow-md">
                        <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-100/60 px-2 py-0.5 rounded-full">
                          {leader.role}
                        </span>
                        <h5 className="text-xs font-black text-slate-900 mt-1">{leader.name}</h5>
                        <p className="text-[10px] text-slate-500">{leader.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* ========================================================
              TAB: ACADEMICS & STREAMS EDITOR
          ======================================================== */}
          {activeTab === "academics" && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Curriculum & Approved Wings</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Higher Secondary Approved Streams ({academicStreams.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct copy of public `/academics` stream cards with inline seat and curriculum editors.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {academicStreams.map((stream, idx) => (
                  <div
                    key={stream.code || idx}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <img src={stream.image} alt={stream.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#008744] text-white">
                          STREAM CODE: {stream.code}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-900">
                          {stream.seats} Approved Seats
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button
                          onClick={() => openEditModal("academicStream", stream)}
                          className="p-2 rounded-lg bg-white/90 hover:bg-white text-slate-900 shadow-md transition-colors cursor-pointer"
                          title="Edit stream"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h4 className="text-base font-black">{stream.name}</h4>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <p className="text-xs text-slate-600 leading-relaxed">{stream.desc}</p>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] space-y-1">
                          <div><b className="text-slate-900">Core Subjects:</b> <span className="text-slate-600">{stream.core}</span></div>
                          <div><b className="text-slate-900">Second Languages:</b> <span className="text-slate-600">{stream.secondLang}</span></div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>Career Pathways: <b className="text-slate-800">{stream.career.split(",")[0]}</b></span>
                        <button
                          onClick={() => openEditModal("academicStream", stream)}
                          className="text-[#008744] font-bold text-xs hover:underline flex items-center gap-1"
                        >
                          <span>Edit Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: CLUBS & ACTIVITIES
          ======================================================== */}
          {activeTab === "clubs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Campus Life • Clubs</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Student Clubs & Co-curricular Units ({clubs.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact copy of public `/campus-life/clubs` with image previews and floating edit buttons.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("clubs")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Club</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((c: any) => (
                  <div
                    key={c.id || c._id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={c.imageUrl || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"}
                        alt={c.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#008744] shadow-xs">
                          {c.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1">
                        <button
                          onClick={() => openEditModal("clubs", c)}
                          className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-800 shadow-md transition-colors cursor-pointer"
                          title="Edit Club"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("clubs", c.id || c._id)}
                          className="p-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors cursor-pointer"
                          title="Delete Club"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="text-base font-black text-slate-900 group-hover:text-[#008744] transition-colors">
                          {c.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {c.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Coordinator: <b className="text-slate-800">{c.coordinator}</b></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: ACHIEVEMENTS
          ======================================================== */}
          {activeTab === "achievements" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Campus Life • Hall of Fame</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Student & Institutional Achievements ({achievements.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact copy of public `/campus-life/achievements` with images, badges, and inline edit controls.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("achievements")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Achievement</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((ach: any) => (
                  <div
                    key={ach.id || ach._id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={ach.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"}
                        alt={ach.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#008744] shadow-xs">
                          {ach.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#008744] text-white">
                          Year: {ach.year}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1">
                        <button
                          onClick={() => openEditModal("achievements", ach)}
                          className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-800 shadow-md transition-colors cursor-pointer"
                          title="Edit Achievement"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("achievements", ach.id || ach._id)}
                          className="p-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors cursor-pointer"
                          title="Delete Achievement"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="text-base font-black text-slate-900 group-hover:text-[#008744] transition-colors">
                          {ach.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {ach.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#008744]">
                          <Award className="w-3.5 h-3.5" />
                          <span>{ach.badge}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: NOTICES & CIRCULARS
          ======================================================== */}
          {activeTab === "notices" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Bell className="w-3.5 h-3.5" />
                    <span>Campus Notices & Events</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Published Notices & Circulars ({notices.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact copy of public `/news-events` notices cards with urgent badges and inline edit controls.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("notices")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Notice</span>
                </button>
              </div>

              {/* Search bar */}
              <div className="relative max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search notices by title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {notices
                  .filter((n) =>
                    searchQuery ? n.title.toLowerCase().includes(searchQuery.toLowerCase()) : true
                  )
                  .map((n: any) => (
                    <div
                      key={n.id || n._id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                            {n.category}
                          </span>
                          {n.isUrgent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 animate-pulse">
                              Urgent Flash
                            </span>
                          )}
                          <span className="text-[11px] font-mono text-slate-400 ml-auto">{n.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{n.title}</h4>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {n.summary || "Official notice issued for student and parental notification."}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-400">By: {n.author || "Principal"}</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openEditModal("notices", n)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete("notices", n.id || n._id)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: FACULTY DIRECTORY
          ======================================================== */}
          {activeTab === "teachers" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Users className="w-3.5 h-3.5" />
                    <span>Faculty & Staff Directory</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Teaching & Administrative Faculty ({teachers.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact copy of public `/teachers` faculty cards with photos, designations, and wings.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("teachers")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Faculty Member</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teachers.map((t: any) => (
                  <div
                    key={t.id || t._id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between text-center group"
                  >
                    <div className="relative pt-6 px-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500 shadow-md">
                        <img
                          src={t.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"}
                          alt={t.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1">
                        <button
                          onClick={() => openEditModal("teachers", t)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-2xs"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("teachers", t.id || t._id)}
                          className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 shadow-2xs"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {t.wing || "Faculty"}
                        </span>
                        <h4 className="text-sm font-black text-slate-900 mt-2">{t.name}</h4>
                        <p className="text-xs font-semibold text-slate-600">{t.designation}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-0.5">
                        <div>Dept: <b className="text-slate-800">{t.department}</b></div>
                        <div>Qual: <span className="font-mono">{t.qualification}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: PHOTO GALLERY
          ======================================================== */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Media Center</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Photo & Event Gallery ({gallery.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact copy of public `/gallery` photo album grid with instant upload and edit controls.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("gallery")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Upload Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((g: any) => (
                  <div
                    key={g.id || g._id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between group"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={g.imageUrl || "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop"}
                        alt={g.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#008744] shadow-xs">
                          {g.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1">
                        <button
                          onClick={() => openEditModal("gallery", g)}
                          className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-800 shadow-md transition-colors cursor-pointer"
                          title="Edit Photo"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("gallery", g.id || g._id)}
                          className="p-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors cursor-pointer"
                          title="Delete Photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="text-sm font-bold text-slate-900">{g.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2">{g.caption || "Campus event photo."}</p>
                      <div className="pt-2 text-[10px] text-slate-400 font-mono">Album Year: {g.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: SCHOLARSHIPS
          ======================================================== */}
          {activeTab === "scholarships" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Award className="w-3.5 h-3.5" />
                    <span>Financial Aid & Endowments</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Scholarships & Grants ({scholarships.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact copy of public `/academics/scholarships` cards with criteria and amount editors.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("scholarships")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Scholarship</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarships.map((s: any) => (
                  <div
                    key={s.id || s._id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#008744] border border-emerald-200">
                          {s.target}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openEditModal("scholarships", s)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete("scholarships", s.id || s._id)}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <h4 className="text-base font-black text-slate-900">{s.name}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.eligibility}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-[#008744]">{s.amount}</span>
                      <span className="text-[11px] text-slate-400">By: {s.provider}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: DOWNLOADS & SYLLABI (RESOURCES)
          ======================================================== */}
          {activeTab === "resources" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Academic Downloads</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Downloads & Syllabi ({resources.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Question papers, model exam series, and time tables available for download.
                  </p>
                </div>
                <button
                  onClick={() => openAddModal("resources")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Resource File</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {resources.map((r: any) => (
                  <div
                    key={r.id || r._id}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        <span>{r.category}</span>
                        <span className="text-[#008744]">{r.grade}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{r.title}</h4>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <a
                        href={r.downloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#008744] font-bold text-xs hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEditModal("resources", r)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("resources", r.id || r._id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-red-700"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: SITE SETTINGS & SCHOOL INFO
          ======================================================== */}
          {activeTab === "settings" && siteSettings && (
            <form onSubmit={handleSettingsSubmit} className="space-y-8 max-w-4xl">
              <div className="border-b border-slate-200 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Settings className="w-3.5 h-3.5" />
                  <span>System Configuration</span>
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  School Information, Contacts & Leadership
                </h3>
              </div>

              {/* School Identity */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="text-sm font-bold text-slate-900">Institution Identity</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">School Name</label>
                    <input
                      type="text"
                      value={siteSettings.schoolInfo?.name || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          schoolInfo: { ...siteSettings.schoolInfo, name: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">School Code (DHSE)</label>
                    <input
                      type="text"
                      value={siteSettings.schoolInfo?.code || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          schoolInfo: { ...siteSettings.schoolInfo, code: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                    <input
                      type="text"
                      value={siteSettings.schoolInfo?.phone || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          schoolInfo: { ...siteSettings.schoolInfo, phone: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                    <input
                      type="text"
                      value={siteSettings.schoolInfo?.email || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          schoolInfo: { ...siteSettings.schoolInfo, email: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Established Year</label>
                    <input
                      type="text"
                      value={siteSettings.schoolInfo?.establishedYear || "1976"}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          schoolInfo: { ...siteSettings.schoolInfo, establishedYear: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Campus Address</label>
                  <input
                    type="text"
                    value={siteSettings.schoolInfo?.address || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, address: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 text-xs border rounded-xl"
                  />
                </div>
              </div>

              {/* Leadership Contacts */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="text-sm font-bold text-slate-900">Leadership Photos & Contacts</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-[#008744]">Manager</span>
                    <input
                      type="text"
                      placeholder="Name"
                      value={siteSettings.administration?.manager?.name || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          administration: {
                            ...siteSettings.administration,
                            manager: { ...siteSettings.administration?.manager, name: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Photo URL"
                      value={siteSettings.administration?.manager?.photo || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          administration: {
                            ...siteSettings.administration,
                            manager: { ...siteSettings.administration?.manager, photo: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border rounded-lg bg-white font-mono text-[11px]"
                    />
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-[#008744]">Principal (HSE)</span>
                    <input
                      type="text"
                      placeholder="Name"
                      value={siteSettings.administration?.principal?.name || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          administration: {
                            ...siteSettings.administration,
                            principal: { ...siteSettings.administration?.principal, name: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Photo URL"
                      value={siteSettings.administration?.principal?.photo || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          administration: {
                            ...siteSettings.administration,
                            principal: { ...siteSettings.administration?.principal, photo: e.target.value },
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border rounded-lg bg-white font-mono text-[11px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>{formSubmitting ? "Saving..." : "Save Settings"}</span>
                </button>
              </div>
            </form>
          )}

          {/* ========================================================
              TAB: ADMISSIONS LEADS & INQUIRIES
          ======================================================== */}
          {activeTab === "enquiries" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Inbox className="w-3.5 h-3.5" />
                    <span>Admissions Portal</span>
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Student Admissions Applications & Leads ({enquiries.length})
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {enquiries.map((enq: any) => (
                  <div key={enq.id || enq._id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-[#008744] border border-emerald-200">
                        {enq.seekingGrade || "Admissions"}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Score: {enq.marksPercentage || "A+"}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-black text-slate-900">{enq.studentName}</h4>
                      <p className="text-xs text-slate-500">Parent: {enq.parentName}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                      <div>Phone: <b className="text-slate-900">{enq.phone}</b></div>
                      <div>Stream: <span className="text-[#008744] font-bold">{enq.stream || "General"}</span></div>
                      {enq.notes && <div className="text-slate-600 italic mt-1">"{enq.notes}"</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: CONTACT MESSAGES
          ======================================================== */}
          {activeTab === "contacts" && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Public Inbox</span>
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Inbound Contact Messages ({contacts.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {contacts.map((msg: any) => (
                  <div key={msg.id || msg._id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-bold text-slate-900">{msg.name}</span>
                      <span>{msg.phone || msg.email}</span>
                    </div>
                    <h5 className="text-xs font-bold text-[#008744]">{msg.subject || "General Query"}</h5>
                    <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl leading-relaxed">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================
              TAB: ALUMNI REGISTRATIONS
          ======================================================== */}
          {activeTab === "alumni" && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Alumni Association</span>
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Registered Alumni Members ({alumni.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {alumni.map((alum: any) => (
                  <div key={alum.id || alum._id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{alum.name}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-[#008744]">
                        Class of {alum.batch || "Alumni"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{alum.profession || "Professional"}</p>
                    <div className="text-[11px] text-slate-400">Contact: {alum.phone || alum.email}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ========================================================
          UNIFIED CRUD & PAGE SECTION MODALS
      ======================================================== */}
      {modalMode && modalTarget && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="font-bold text-sm text-slate-900 capitalize">
                {modalMode === "add" ? "Add New" : "Edit"} {modalTarget}
              </h3>
              <button
                onClick={() => {
                  setModalMode(null);
                  setEditingItem(null);
                }}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="p-5 space-y-4">
              {/* 1. HERO SLIDE MODAL */}
              {modalTarget === "heroSlide" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge (e.g. ESTD 1976)</label>
                    <input
                      name="badge"
                      required
                      defaultValue={editingItem?.badge || "ESTD 1976"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Title Part 1</label>
                      <input
                        name="titlePart1"
                        required
                        defaultValue={editingItem?.titlePart1 || "Start Your"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Title Highlight (Green)</label>
                      <input
                        name="titleHighlight"
                        required
                        defaultValue={editingItem?.titleHighlight || "Inspiring & Bright"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Title Part 2</label>
                    <input
                      name="titlePart2"
                      required
                      defaultValue={editingItem?.titlePart2 || "Academic Future"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description Paragraph</label>
                    <textarea
                      name="desc"
                      rows={2}
                      required
                      defaultValue={editingItem?.desc || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Background Image URL</label>
                    <input
                      name="image"
                      required
                      defaultValue={editingItem?.image || ""}
                      onChange={(e) => setPreviewImageUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-[11px]"
                    />
                    {(previewImageUrl || editingItem?.image) && (
                      <div className="mt-2 h-32 w-full rounded-xl overflow-hidden border border-slate-200">
                        <img
                          src={previewImageUrl || editingItem?.image}
                          alt="Slide preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Stat Value</label>
                      <input
                        name="statValue"
                        defaultValue={editingItem?.statValue || "5,100+"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Stat Label</label>
                      <input
                        name="statLabel"
                        defaultValue={editingItem?.statLabel || "Enrolled Students"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* 2. ABOUT OUR SCHOOL MODAL */}
              {modalTarget === "aboutSchool" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Section Badge</label>
                      <input
                        name="badge"
                        defaultValue={editingItem?.badge || "About Our School"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estd Year</label>
                      <input
                        name="estdYear"
                        defaultValue={editingItem?.estdYear || "1976"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Heading Part 1</label>
                      <input
                        name="headingPart1"
                        defaultValue={editingItem?.headingPart1 || "Quality Education & Character"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Heading Highlight</label>
                      <input
                        name="headingHighlight"
                        defaultValue={editingItem?.headingHighlight || "Since 1976"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Story Description</label>
                    <textarea
                      name="description"
                      rows={3}
                      defaultValue={editingItem?.description || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">3 Showcase Photos</label>
                    <input
                      name="img1"
                      placeholder="Image 1 (Main Campus)"
                      defaultValue={editingItem?.img1 || ""}
                      className="w-full px-3 py-1.5 text-xs border rounded-lg font-mono text-[11px]"
                    />
                    <input
                      name="img2"
                      placeholder="Image 2 (Science Lab)"
                      defaultValue={editingItem?.img2 || ""}
                      className="w-full px-3 py-1.5 text-xs border rounded-lg font-mono text-[11px]"
                    />
                    <input
                      name="img3"
                      placeholder="Image 3 (Campus Library)"
                      defaultValue={editingItem?.img3 || ""}
                      className="w-full px-3 py-1.5 text-xs border rounded-lg font-mono text-[11px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Feature 1 Title</label>
                      <input
                        name="feature1Title"
                        defaultValue={editingItem?.feature1Title || "Comprehensive Learning"}
                        className="w-full px-3 py-1.5 text-xs border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Feature 2 Title</label>
                      <input
                        name="feature2Title"
                        defaultValue={editingItem?.feature2Title || "Proven Results"}
                        className="w-full px-3 py-1.5 text-xs border rounded-lg"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* 3. WHY PPM HSS MODAL */}
              {modalTarget === "whySchool" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Badge</label>
                      <input
                        name="badge"
                        defaultValue={editingItem?.badge || "Why PPM HSS"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Heading Highlight</label>
                      <input
                        name="headingHighlight"
                        defaultValue={editingItem?.headingHighlight || "Modern Campus"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Heading Part 1</label>
                    <input
                      name="headingPart1"
                      defaultValue={editingItem?.headingPart1 || "Dedicated Mentorship &"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      rows={2}
                      defaultValue={editingItem?.description || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-slate-900">4 Feature Pillar Cards</span>
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 gap-2">
                        <input
                          name={`card${i + 1}Title`}
                          placeholder={`Card ${i + 1} Title`}
                          defaultValue={editingItem?.cards?.[i]?.title || ""}
                          className="px-2.5 py-1.5 text-xs border rounded-lg bg-white"
                        />
                        <input
                          name={`card${i + 1}Desc`}
                          placeholder={`Card ${i + 1} Description`}
                          defaultValue={editingItem?.cards?.[i]?.desc || ""}
                          className="px-2.5 py-1.5 text-xs border rounded-lg bg-white"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 4. ACADEMIC STREAM MODAL */}
              {modalTarget === "academicStream" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Stream Name</label>
                      <input
                        name="name"
                        required
                        defaultValue={editingItem?.name || ""}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Approved Seats</label>
                      <input
                        name="seats"
                        type="number"
                        required
                        defaultValue={editingItem?.seats || 60}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Core Subjects</label>
                    <input
                      name="core"
                      required
                      defaultValue={editingItem?.core || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Second Languages</label>
                    <input
                      name="secondLang"
                      defaultValue={editingItem?.secondLang || "English, Malayalam / Arabic / Hindi"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Career Opportunities</label>
                    <input
                      name="career"
                      defaultValue={editingItem?.career || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Stream Image URL</label>
                    <input
                      name="image"
                      defaultValue={editingItem?.image || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-[11px]"
                    />
                  </div>
                </>
              )}

              {/* 5. NOTICE FORM */}
              {modalTarget === "notices" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Notice Title</label>
                    <input
                      name="title"
                      required
                      defaultValue={editingItem?.title || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                      <input
                        name="date"
                        required
                        defaultValue={editingItem?.date || new Date().toISOString().split("T")[0]}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <select
                        name="category"
                        defaultValue={editingItem?.category || "Notices"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      >
                        <option value="Notices">Notices</option>
                        <option value="Academic">Academic</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Examinations">Examinations</option>
                        <option value="General Orders">General Orders</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Summary</label>
                    <textarea
                      name="summary"
                      rows={2}
                      defaultValue={editingItem?.summary || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="isUrgent"
                      name="isUrgent"
                      defaultChecked={editingItem?.isUrgent || false}
                    />
                    <label htmlFor="isUrgent" className="text-xs font-bold text-red-600">
                      Mark as Urgent Flash Notice
                    </label>
                  </div>
                </>
              )}

              {/* 6. TEACHER FORM */}
              {modalTarget === "teachers" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      name="name"
                      required
                      defaultValue={editingItem?.name || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
                      <input
                        name="designation"
                        required
                        defaultValue={editingItem?.designation || "HST"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Wing</label>
                      <select
                        name="wing"
                        defaultValue={editingItem?.wing || "High School"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      >
                        <option value="High School">High School</option>
                        <option value="Higher Secondary">Higher Secondary</option>
                        <option value="Administration">Administration</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                      <input
                        name="department"
                        required
                        defaultValue={editingItem?.department || "Mathematics"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Qualification</label>
                      <input
                        name="qualification"
                        defaultValue={editingItem?.qualification || "B.Sc., B.Ed."}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Photo Image URL</label>
                    <input
                      name="photoUrl"
                      defaultValue={
                        editingItem?.photoUrl ||
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                      }
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-[11px]"
                    />
                  </div>
                </>
              )}

              {/* 7. GALLERY FORM */}
              {modalTarget === "gallery" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Photo Title</label>
                    <input
                      name="title"
                      required
                      defaultValue={editingItem?.title || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category / Album</label>
                      <select
                        name="category"
                        defaultValue={editingItem?.category || "Campus"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      >
                        <option value="Campus">Campus</option>
                        <option value="Labs">Labs & Science</option>
                        <option value="Arts">Arts & Kalolsavam</option>
                        <option value="Sports">Sports</option>
                        <option value="Events">Events</option>
                        <option value="Clubs">Clubs</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Year</label>
                      <input
                        name="year"
                        defaultValue={editingItem?.year || "2024–25"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
                    <input
                      name="imageUrl"
                      required
                      defaultValue={editingItem?.imageUrl || ""}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-[11px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Caption</label>
                    <input
                      name="caption"
                      defaultValue={editingItem?.caption || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* 8. CLUBS FORM */}
              {modalTarget === "clubs" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Club Name</label>
                    <input
                      name="name"
                      required
                      defaultValue={editingItem?.name || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <input
                        name="category"
                        required
                        defaultValue={editingItem?.category || "Co-curricular"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Teacher Coordinator</label>
                      <input
                        name="coordinator"
                        required
                        defaultValue={editingItem?.coordinator || ""}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      rows={2}
                      defaultValue={editingItem?.description || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Card Image URL</label>
                    <input
                      name="imageUrl"
                      defaultValue={editingItem?.imageUrl || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"}
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-[11px]"
                    />
                  </div>
                </>
              )}

              {/* 9. ACHIEVEMENTS FORM */}
              {modalTarget === "achievements" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Achievement Title</label>
                    <input
                      name="title"
                      required
                      defaultValue={editingItem?.title || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Badge</label>
                      <input
                        name="badge"
                        defaultValue={editingItem?.badge || "Honour"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Year</label>
                      <input
                        name="year"
                        defaultValue={editingItem?.year || "2024"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      rows={2}
                      defaultValue={editingItem?.description || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Card Image URL</label>
                    <input
                      name="imageUrl"
                      defaultValue={editingItem?.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"}
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-[11px]"
                    />
                  </div>
                </>
              )}

              {/* 10. SCHOLARSHIP FORM */}
              {modalTarget === "scholarships" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Scholarship Name</label>
                    <input
                      name="name"
                      required
                      defaultValue={editingItem?.name || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Amount</label>
                      <input
                        name="amount"
                        required
                        defaultValue={editingItem?.amount || "₹5,000 / annum"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Target Group</label>
                      <input
                        name="target"
                        required
                        defaultValue={editingItem?.target || "SSLC & Plus Two"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Provider / Endowment</label>
                    <input
                      name="provider"
                      required
                      defaultValue={editingItem?.provider || "PTA Endowment"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Eligibility Criteria</label>
                    <textarea
                      name="eligibility"
                      rows={2}
                      defaultValue={editingItem?.eligibility || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* 11. RESOURCES FORM */}
              {modalTarget === "resources" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Resource Title</label>
                    <input
                      name="title"
                      required
                      defaultValue={editingItem?.title || ""}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <select
                        name="category"
                        defaultValue={editingItem?.category || "Question Paper"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      >
                        <option value="Question Paper">Question Paper</option>
                        <option value="Question Bank">Question Bank</option>
                        <option value="Circular & GO">Circular & GO</option>
                        <option value="Time Table">Time Table</option>
                        <option value="Form">Application Form</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Class / Grade</label>
                      <select
                        name="grade"
                        defaultValue={editingItem?.grade || "SSLC (Class 10)"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      >
                        <option value="SSLC (Class 10)">SSLC (Class 10)</option>
                        <option value="Plus One (+1)">Plus One (+1)</option>
                        <option value="Plus Two (+2)">Plus Two (+2)</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 8">Class 8</option>
                        <option value="General">General</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Download / File URL</label>
                    <input
                      name="downloadUrl"
                      required
                      defaultValue={editingItem?.downloadUrl || "https://example.com/file.pdf"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setModalMode(null);
                    setEditingItem(null);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-5 py-2 text-xs font-bold bg-[#008744] hover:bg-[#007038] text-white rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {formSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
