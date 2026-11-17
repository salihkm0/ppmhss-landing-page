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
} from "lucide-react";

type TabType =
  | "overview"
  | "settings"
  | "notices"
  | "teachers"
  | "gallery"
  | "resources"
  | "scholarships"
  | "clubs"
  | "achievements"
  | "enquiries"
  | "contacts"
  | "alumni";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
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

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [modalMode, setModalMode] = useState<"add" | "edit" | null>(null);
  const [modalTarget, setModalTarget] = useState<TabType | null>(null);
  const [editingItem, setEditingItem] = useState<any>(null);
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
        setDbStatus(statsRes.database);
      }
      if (noticesRes.success) setNotices(noticesRes.data || []);
      if (teachersRes.success) setTeachers(teachersRes.data || []);
      if (galleryRes.success) setGallery(galleryRes.data || []);
      if (resourcesRes.success) setResources(resourcesRes.data || []);
      if (scholarshipsRes.success) setScholarships(scholarshipsRes.data || []);
      if (clubsRes.success) setClubs(clubsRes.data || []);
      if (achievementsRes.success) setAchievements(achievementsRes.data || []);
      if (enquiriesRes.success) setEnquiries(enquiriesRes.data || []);
      if (contactsRes.success) setContacts(contactsRes.data || []);
      if (alumniRes.success) setAlumni(alumniRes.data || []);
      if (settingsRes.success) setSiteSettings(settingsRes.data);
    } catch (err: any) {
      showToast("Error loading portal data: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  }, []);

  // 3. Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  // 4. Delete Handler
  const handleDelete = async (tab: TabType, id: string) => {
    if (!confirm("Are you sure you want to delete this record? This action cannot be undone.")) return;

    try {
      const res = await fetch(`/api/admin/${tab}?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Failed to delete");

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

  const openAddModal = (tab: TabType) => {
    setModalTarget(tab);
    setEditingItem(null);
    setModalMode("add");
  };

  const openEditModal = (tab: TabType, item: any) => {
    setModalTarget(tab);
    setEditingItem(item);
    setModalMode("edit");
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "settings", label: "School Info & Contacts", icon: Settings },
    { id: "notices", label: "Notices & Circulars", icon: Bell, count: stats.notices },
    { id: "teachers", label: "Faculty Directory", icon: Users, count: stats.teachers },
    { id: "gallery", label: "Photo Gallery", icon: ImageIcon, count: stats.gallery },
    { id: "resources", label: "Downloads & Syllabi", icon: FileText, count: stats.resources },
    { id: "scholarships", label: "Scholarships", icon: GraduationCap, count: stats.scholarships },
    { id: "clubs", label: "Clubs & Activities", icon: Compass, count: stats.clubs },
    { id: "achievements", label: "Achievements", icon: Trophy, count: stats.achievements },
    { id: "enquiries", label: "Admissions Inquiries", icon: Inbox, count: stats.enquiries, highlight: true },
    { id: "contacts", label: "Contact Messages", icon: Mail, count: stats.contacts },
    { id: "alumni", label: "Alumni Registrations", icon: Award, count: stats.alumni },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-3 transition-all animate-bounce ${
            toast.type === "success"
              ? "bg-[#008744] text-white"
              : "bg-red-600 text-white"
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
        className={`fixed lg:sticky top-0 h-screen w-72 bg-white border-r border-slate-200 z-40 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Logo & Brand Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
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
                <p className="text-[11px] text-slate-500 font-medium">Kottukkara • Admin</p>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Database indicator */}
          <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {dbStatus}
            </span>
            <button
              onClick={loadAllData}
              title="Refresh All Data"
              className="text-slate-400 hover:text-[#008744] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-230px)]">
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#008744] text-white shadow-sm shadow-emerald-700/20"
                      : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : item.highlight
                          ? "bg-emerald-100 text-[#008744]"
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
        </div>

        {/* Footer info & Logout */}
        <div className="p-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between px-2 text-xs">
            <span className="text-slate-500 font-medium">Logged in as:</span>
            <span className="font-bold text-slate-800">{adminUser?.username || "admin"}</span>
          </div>

          <div className="flex gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-black text-slate-900 capitalize tracking-tight">
                {activeTab === "overview"
                  ? "Dashboard Overview"
                  : activeTab === "settings"
                  ? "School Information & Contacts"
                  : activeTab}
              </h2>
              <p className="text-xs text-slate-500">
                Manage, publish and edit school website content in real-time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadAllData}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>

            {/* Quick Action Button for current tab */}
            {["notices", "teachers", "gallery", "resources", "scholarships", "clubs", "achievements"].includes(
              activeTab
            ) && (
              <button
                onClick={() => openAddModal(activeTab)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs shadow-emerald-700/20 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add New
              </button>
            )}
          </div>
        </header>

        {/* Tab Body */}
        <div className="p-6 max-w-7xl w-full mx-auto space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Metric Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Admissions Enquiries</p>
                    <h3 className="text-2xl font-black text-[#008744] mt-1">{stats.enquiries || 0}</h3>
                    <p className="text-[11px] text-slate-400 mt-1">Pending review & actions</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#008744]">
                    <Inbox className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Active Notices</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.notices || 0}</h3>
                    <p className="text-[11px] text-slate-400 mt-1">Published circulars</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Bell className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Teachers Listed</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.teachers || 0}</h3>
                    <p className="text-[11px] text-slate-400 mt-1">HS & HSS Staff</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Gallery Photos</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.gallery || 0}</h3>
                    <p className="text-[11px] text-slate-400 mt-1">Across 6 albums</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Enquiries */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Inquiries */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Inbox className="w-4 h-4 text-[#008744]" /> Recent Admissions Enquiries
                    </h3>
                    <button
                      onClick={() => setActiveTab("enquiries")}
                      className="text-xs text-[#008744] hover:underline font-semibold"
                    >
                      View all ({enquiries.length})
                    </button>
                  </div>

                  <div className="space-y-3">
                    {enquiries.slice(0, 3).map((enq: any) => (
                      <div
                        key={enq.id || enq._id}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-slate-900">{enq.studentName}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#008744] font-semibold">
                              {enq.seekingGrade}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Parent: {enq.parentName} • {enq.phone}
                          </p>
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700">
                          {enq.status}
                        </span>
                      </div>
                    ))}
                    {enquiries.length === 0 && (
                      <p className="text-xs text-slate-400 py-4 text-center">No inquiries yet.</p>
                    )}
                  </div>
                </div>

                {/* Recent Notices */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Bell className="w-4 h-4 text-[#008744]" /> Active Notices
                    </h3>
                    <button
                      onClick={() => setActiveTab("notices")}
                      className="text-xs text-[#008744] hover:underline font-semibold"
                    >
                      Manage all ({notices.length})
                    </button>
                  </div>

                  <div className="space-y-3">
                    {notices.slice(0, 3).map((n: any) => (
                      <div
                        key={n.id || n._id}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                      >
                        <div className="max-w-[80%]">
                          <p className="font-bold text-xs text-slate-900 truncate">{n.title}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {n.date} • {n.category}
                          </p>
                        </div>
                        {n.isUrgent ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold">
                            Urgent
                          </span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                            Normal
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SITE SETTINGS & SCHOOL INFO */}
          {activeTab === "settings" && siteSettings && (
            <form onSubmit={handleSettingsSubmit} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Website Configuration & Contacts</h3>
                  <p className="text-xs text-slate-500">Edit school contact numbers, emails, motto and stats.</p>
                </div>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">School Full Name</label>
                  <input
                    type="text"
                    value={siteSettings.schoolInfo?.name || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, name: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">School Motto</label>
                  <input
                    type="text"
                    value={siteSettings.schoolInfo?.motto || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, motto: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">High School Contact Phone</label>
                  <input
                    type="text"
                    value={siteSettings.schoolInfo?.phone || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, phone: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Higher Secondary Contact Phone</label>
                  <input
                    type="text"
                    value={siteSettings.schoolInfo?.altPhone || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, altPhone: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Email Address</label>
                  <input
                    type="email"
                    value={siteSettings.schoolInfo?.email || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, email: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Principal Email Address</label>
                  <input
                    type="email"
                    value={siteSettings.schoolInfo?.principalEmail || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, principalEmail: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">School Campus Address</label>
                  <input
                    type="text"
                    value={siteSettings.schoolInfo?.address || ""}
                    onChange={(e) =>
                      setSiteSettings({
                        ...siteSettings,
                        schoolInfo: { ...siteSettings.schoolInfo, address: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008744]"
                  />
                </div>
              </div>

              {/* Banner Announcement */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Top Announcement Ticker
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-600 mb-1">Ticker Message Text</label>
                    <input
                      type="text"
                      value={siteSettings.bannerAnnouncement?.text || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          bannerAnnouncement: { ...siteSettings.bannerAnnouncement, text: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Link Destination</label>
                    <input
                      type="text"
                      value={siteSettings.bannerAnnouncement?.link || ""}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          bannerAnnouncement: { ...siteSettings.bannerAnnouncement, link: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* TAB 3: NOTICES & CIRCULARS */}
          {activeTab === "notices" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search notices by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium">{notices.length} Total Notices</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-y border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Urgent</th>
                      <th className="py-3 px-4">Author</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {notices
                      .filter((n) =>
                        searchQuery
                          ? n.title.toLowerCase().includes(searchQuery.toLowerCase())
                          : true
                      )
                      .map((n: any) => (
                        <tr key={n.id || n._id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 font-semibold text-slate-900 max-w-xs truncate">
                            {n.title}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                              {n.category}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-500">{n.date}</td>
                          <td className="py-3 px-4">
                            {n.isUrgent ? (
                              <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold">
                                Urgent
                              </span>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-slate-600">{n.author || "Principal"}</td>
                          <td className="py-3 px-4 text-right space-x-2">
                            <button
                              onClick={() => openEditModal("notices", n)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete("notices", n.id || n._id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: TEACHERS DIRECTORY */}
          {activeTab === "teachers" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by teacher name or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium">{teachers.length} Faculty Members</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teachers
                  .filter((t) =>
                    searchQuery
                      ? t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        t.department.toLowerCase().includes(searchQuery.toLowerCase())
                      : true
                  )
                  .map((t: any) => (
                    <div
                      key={t.id || t._id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3 relative group"
                    >
                      <Image
                        src={t.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-slate-900 truncate">{t.name}</h4>
                        <p className="text-[11px] text-[#008744] font-medium truncate">{t.designation}</p>
                        <p className="text-[10px] text-slate-500 mt-1">
                          {t.department} • {t.wing}
                        </p>
                        <p className="text-[10px] text-slate-400">{t.qualification}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => openEditModal("teachers", t)}
                          className="p-1 rounded-md text-slate-400 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("teachers", t.id || t._id)}
                          className="p-1 rounded-md text-slate-400 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 5: GALLERY */}
          {activeTab === "gallery" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search photos by title or album..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium">{gallery.length} Photos</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {gallery
                  .filter((g) =>
                    searchQuery
                      ? g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        g.category.toLowerCase().includes(searchQuery.toLowerCase())
                      : true
                  )
                  .map((g: any) => (
                    <div
                      key={g.id || g._id}
                      className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50"
                    >
                      <div className="aspect-4/3 relative">
                        <Image
                          src={g.imageUrl}
                          alt={g.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2.5">
                        <p className="font-bold text-xs text-slate-900 truncate">{g.title}</p>
                        <div className="flex items-center justify-between mt-1 text-[10px] text-slate-500">
                          <span className="px-1.5 py-0.5 rounded-sm bg-emerald-50 text-[#008744] font-semibold">
                            {g.category}
                          </span>
                          <span>{g.year}</span>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 flex gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openEditModal("gallery", g)}
                          className="p-1 rounded text-slate-600 hover:text-emerald-700"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete("gallery", g.id || g._id)}
                          className="p-1 rounded text-slate-600 hover:text-red-700"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 6: RESOURCES & DOWNLOADS */}
          {activeTab === "resources" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search resources by title or subject..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium">{resources.length} Files</span>
              </div>

              <div className="divide-y divide-slate-100">
                {resources
                  .filter((r) =>
                    searchQuery
                      ? r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (r.subject && r.subject.toLowerCase().includes(searchQuery.toLowerCase()))
                      : true
                  )
                  .map((r: any) => (
                    <div
                      key={r.id || r._id}
                      className="py-3 px-2 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#008744] flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900">{r.title}</p>
                          <p className="text-[11px] text-slate-500">
                            {r.category} • {r.grade} • {r.fileSize}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={r.downloadUrl}
                          target="_blank"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => openEditModal("resources", r)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("resources", r.id || r._id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 7: SCHOLARSHIPS */}
          {activeTab === "scholarships" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Public Financial Aid Cards
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Available Scholarships ({scholarships.length})
                  </h3>
                </div>
                <button
                  onClick={() => openAddModal("scholarships")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add Scholarship
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarships.map((s: any) => (
                  <div
                    key={s.id || s._id}
                    className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                      <button
                        onClick={() => openEditModal("scholarships", s)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete("scholarships", s.id || s._id)}
                        className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                        title="Delete Scholarship"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={s.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"}
                        alt={s.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                          {s.target}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h4 className="text-base font-black text-slate-900 leading-snug">
                          {s.name}
                        </h4>
                        <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                          <div className="text-[10px] font-bold text-[#008744] uppercase tracking-wider">
                            Scholarship Value
                          </div>
                          <div className="text-sm font-black text-emerald-950">
                            {s.amount}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong className="text-slate-800">Eligibility:</strong> {s.eligibility}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>Provider: {s.provider || "Government / Alumni"}</span>
                        <span className="font-semibold text-emerald-700">{s.deadline || "Annual"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: CLUBS */}
          {activeTab === "clubs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Public Student Clubs
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Active Student Organizations ({clubs.length})
                  </h3>
                </div>
                <button
                  onClick={() => openAddModal("clubs")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add Club
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((c: any) => (
                  <div
                    key={c.id || c._id}
                    className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                      <button
                        onClick={() => openEditModal("clubs", c)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete("clubs", c.id || c._id)}
                        className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                        title="Delete Club"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src={c.imageUrl || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"}
                        alt={c.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                          {c.category || "Club"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                      <div className="space-y-3">
                        <h4 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                          {c.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {c.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="text-slate-500">
                          Lead: <strong className="text-slate-800 font-semibold">{c.coordinator}</strong>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: ACHIEVEMENTS */}
          {activeTab === "achievements" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Public Hall of Achievements
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Recognized Records & Honors ({achievements.length})
                  </h3>
                </div>
                <button
                  onClick={() => openAddModal("achievements")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add Achievement
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((a: any) => (
                  <div
                    key={a.id || a._id}
                    className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                      <button
                        onClick={() => openEditModal("achievements", a)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete("achievements", a.id || a._id)}
                        className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                        title="Delete Achievement"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src={a.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                          {a.category || "Honors"}
                        </span>
                      </div>
                      <div className="absolute top-4 right-20">
                        <span className="inline-block text-[11px] font-mono font-bold text-slate-900 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm">
                          {a.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                          {a.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {a.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 rounded-xl px-3 py-1 text-xs font-bold text-emerald-900">
                          <Award className="w-3.5 h-3.5 text-[#008744]" />
                          <span>{a.badge || "Honour"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: ADMISSIONS ENQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                  Student Application Inquiries ({enquiries.length})
                </h3>
              </div>

              <div className="divide-y divide-slate-100">
                {enquiries.map((enq: any) => (
                  <div key={enq.id || enq._id} className="py-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-black text-sm text-slate-900">{enq.studentName}</h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#008744] font-bold">
                            {enq.seekingGrade}
                          </span>
                          {enq.stream && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">
                              {enq.stream}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Parent: <span className="font-semibold">{enq.parentName}</span> • Phone:{" "}
                          <a href={`tel:${enq.phone}`} className="text-[#008744] font-semibold">
                            {enq.phone}
                          </a>{" "}
                          {enq.email && `• Email: ${enq.email}`}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={enq.status || "Received"}
                          onChange={(e) =>
                            handleStatusChange("enquiries", enq.id || enq._id, e.target.value)
                          }
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg border border-slate-200 bg-white"
                        >
                          <option value="Received">Received</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Approved">Approved</option>
                        </select>
                        <button
                          onClick={() => handleDelete("enquiries", enq.id || enq._id)}
                          className="p-1.5 text-slate-400 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {(enq.marksPercentage || enq.notes) && (
                      <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                        {enq.marksPercentage && (
                          <p>
                            <span className="font-bold text-slate-700">Marks / Grade:</span>{" "}
                            {enq.marksPercentage}
                          </p>
                        )}
                        {enq.notes && (
                          <p>
                            <span className="font-bold text-slate-700">Notes:</span> {enq.notes}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: CONTACT MESSAGES */}
          {activeTab === "contacts" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="divide-y divide-slate-100">
                {contacts.map((c: any) => (
                  <div key={c.id || c._id} className="py-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-xs text-slate-900">{c.subject}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          From: {c.name} ({c.email}) • Dept: {c.department}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={c.status || "Unread"}
                          onChange={(e) =>
                            handleStatusChange("contacts", c.id || c._id, e.target.value)
                          }
                          className="px-2 py-1 text-xs rounded-lg border border-slate-200 bg-white"
                        >
                          <option value="Unread">Unread</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <button
                          onClick={() => handleDelete("contacts", c.id || c._id)}
                          className="p-1 text-slate-400 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700">{c.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: ALUMNI */}
          {activeTab === "alumni" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="divide-y divide-slate-100">
                {alumni.map((a: any) => (
                  <div key={a.id || a._id} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-xs text-slate-900">{a.fullName}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                          Class of {a.batchYear} • {a.stream}
                        </span>
                        {a.isVerified && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#008744] font-bold">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {a.currentProfession} at {a.companyOrOrganization || a.location}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {a.email} • {a.phone}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleStatusChange("alumni", a.id || a._id, !a.isVerified)
                        }
                        className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                          a.isVerified
                            ? "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                            : "bg-emerald-50 text-[#008744] border-emerald-200 hover:bg-emerald-100"
                        }`}
                      >
                        {a.isVerified ? "Unverify" : "Verify Profile"}
                      </button>
                      <button
                        onClick={() => handleDelete("alumni", a.id || a._id)}
                        className="p-1 text-slate-400 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* CRUD MODAL */}
      {modalMode && modalTarget && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="font-bold text-sm text-slate-900 capitalize">
                {modalMode} {modalTarget.slice(0, -1)}
              </h3>
              <button
                onClick={() => {
                  setModalMode(null);
                  setEditingItem(null);
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="p-5 space-y-4">
              {/* NOTICE FORM */}
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
                        <option value="Events">Events</option>
                        <option value="Sports">Sports</option>
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
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Author</label>
                    <input
                      name="author"
                      defaultValue={editingItem?.author || "Office of the Principal"}
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

              {/* TEACHER FORM */}
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
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* GALLERY FORM */}
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
                      className="w-full px-3 py-2 text-xs border rounded-xl"
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

              {/* RESOURCES FORM */}
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

              {/* SCHOLARSHIP FORM */}
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

              {/* CLUBS FORM */}
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
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-slate-600"
                    />
                  </div>
                </>
              )}

              {/* ACHIEVEMENTS FORM */}
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
                        defaultValue={editingItem?.year || "2024–25"}
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
                      className="w-full px-3 py-2 text-xs border rounded-xl font-mono text-slate-600"
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
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-5 py-2 text-xs font-bold bg-[#008744] hover:bg-[#007038] text-white rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {formSubmitting ? "Saving..." : "Save Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

