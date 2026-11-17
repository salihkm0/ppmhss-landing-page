import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  Search,
  RefreshCw,
  X,
  Save,
  AlertCircle,
  Menu,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Filter,
  Check,
  Clock,
  Building2,
  Phone,
  Globe,
  Upload,
} from "lucide-react";
import { api, getToken, setToken, removeToken } from "./services/api";

export default function App() {
  const [token, setAuthToken] = useState(getToken());
  const [adminUser, setAdminUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Login form state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  // Portal data
  const [stats, setStats] = useState({});
  const [notices, setNotices] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [resources, setResources] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [siteSettings, setSiteSettings] = useState(null);

  // Search & filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Modal states
  const [modalMode, setModalMode] = useState(null); // 'add' | 'edit'
  const [modalTarget, setModalTarget] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (text, type = "success") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Check auth
  useEffect(() => {
    if (token) {
      api
        .getMe()
        .then((res) => setAdminUser(res.user))
        .catch(() => handleLogout());
    }
  }, [token]);

  // Load all data
  const loadData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [
        statsData,
        noticesData,
        teachersData,
        galleryData,
        resourcesData,
        scholarshipsData,
        clubsData,
        achievementsData,
        enquiriesData,
        contactsData,
        alumniData,
        settingsData,
      ] = await Promise.all([
        api.getStats().catch(() => ({ stats: {} })),
        api.getNotices().catch(() => ({ data: [] })),
        api.getTeachers().catch(() => ({ data: [] })),
        api.getGallery().catch(() => ({ data: [] })),
        api.getResources().catch(() => ({ data: [] })),
        api.getScholarships().catch(() => ({ data: [] })),
        api.getClubs().catch(() => ({ data: [] })),
        api.getAchievements().catch(() => ({ data: [] })),
        api.getEnquiries().catch(() => ({ data: [] })),
        api.getContacts().catch(() => ({ data: [] })),
        api.getAlumni().catch(() => ({ data: [] })),
        api.getSettings().catch(() => ({ data: null })),
      ]);

      setStats(statsData.stats || {});
      setNotices(noticesData.data || []);
      setTeachers(teachersData.data || []);
      setGallery(galleryData.data || []);
      setResources(resourcesData.data || []);
      setScholarships(scholarshipsData.data || []);
      setClubs(clubsData.data || []);
      setAchievements(achievementsData.data || []);
      setEnquiries(enquiriesData.data || []);
      setContacts(contactsData.data || []);
      setAlumni(alumniData.data || []);
      setSiteSettings(settingsData.data);
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) loadData();
  }, [token, loadData]);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await api.login({ username: loginUsername, password: loginPassword });
      setToken(res.token);
      setAuthToken(res.token);
      setAdminUser(res.user);
      showToast("Signed in successfully to Admin Console");
    } catch (err) {
      setLoginError(err.message || "Invalid administrative credentials");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    removeToken();
    setAuthToken(null);
    setAdminUser(null);
    showToast("Logged out successfully");
  };

  // Delete entity
  const handleDelete = async (tab, id) => {
    if (!window.confirm("Are you sure you want to permanently remove this record?")) return;
    try {
      if (tab === "notices") await api.deleteNotice(id);
      else if (tab === "teachers") await api.deleteTeacher(id);
      else if (tab === "gallery") await api.deleteGallery(id);
      else if (tab === "resources") await api.deleteResource(id);
      else if (tab === "scholarships") await api.deleteScholarship(id);
      else if (tab === "clubs") await api.deleteClub(id);
      else if (tab === "achievements") await api.deleteAchievement(id);
      else if (tab === "enquiries") await api.deleteEnquiry(id);
      else if (tab === "contacts") await api.deleteContact(id);
      else if (tab === "alumni") await api.deleteAlumni(id);

      showToast("Record deleted successfully");
      loadData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  // Status updates
  const handleStatusChange = async (tab, id, newStatus) => {
    try {
      if (tab === "enquiries") await api.updateEnquiry(id, { status: newStatus });
      else if (tab === "contacts") await api.updateContact(id, { status: newStatus });
      else if (tab === "alumni") await api.updateAlumni(id, { verified: newStatus });
      showToast("Status updated");
      loadData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  // Modal Submit
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData.entries());

    // Boolean or array field normalizations
    if (formProps.urgent) formProps.urgent = formProps.urgent === "on" || formProps.urgent === "true";
    if (formProps.activities && typeof formProps.activities === "string") {
      formProps.activities = formProps.activities.split(",").map((s) => s.trim()).filter(Boolean);
    }

    try {
      const isEdit = modalMode === "edit" && editingItem;
      const id = editingItem?._id || editingItem?.id;

      if (modalTarget === "notices") {
        isEdit ? await api.updateNotice(id, formProps) : await api.createNotice(formProps);
      } else if (modalTarget === "teachers") {
        isEdit ? await api.updateTeacher(id, formProps) : await api.createTeacher(formProps);
      } else if (modalTarget === "gallery") {
        isEdit ? await api.updateGallery(id, formProps) : await api.createGallery(formProps);
      } else if (modalTarget === "resources") {
        isEdit ? await api.updateResource(id, formProps) : await api.createResource(formProps);
      } else if (modalTarget === "scholarships") {
        isEdit ? await api.updateScholarship(id, formProps) : await api.createScholarship(formProps);
      } else if (modalTarget === "clubs") {
        isEdit ? await api.updateClub(id, formProps) : await api.createClub(formProps);
      } else if (modalTarget === "achievements") {
        isEdit ? await api.updateAchievement(id, formProps) : await api.createAchievement(formProps);
      }

      showToast(`${modalTarget.slice(0, -1)} saved successfully`);
      setModalMode(null);
      setEditingItem(null);
      loadData();
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Site settings save
  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      await api.updateSettings(siteSettings);
      showToast("Website configuration saved");
      loadData();
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setFormSubmitting(false);
    }
  };

  // LOGIN SCREEN
  if (!token) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
          <div className="text-center space-y-2">
            <div className="inline-flex w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl shadow-xl items-center justify-center p-2 backdrop-blur-md mb-2">
              <span className="text-xl font-black text-emerald-400">PPM</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Admin Console</h1>
            <p className="text-xs text-slate-400">PPM HSS Content Management & Control System</p>
          </div>

          <div className="mt-8 bg-slate-900/90 backdrop-blur-xl py-8 px-6 shadow-2xl rounded-3xl border border-slate-800 sm:px-9">
            {loginError && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Administrative Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder="admin"
                    className="block w-full pl-10 pr-3.5 py-2.5 border border-slate-800 rounded-xl bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-2.5 border border-slate-800 rounded-xl bg-slate-950/70 text-white text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-500 flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Default: admin / admin123
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setLoginUsername("admin");
                    setLoginPassword("admin123");
                  }}
                  className="text-emerald-400 hover:underline font-bold text-[11px]"
                >
                  Quick Fill
                </button>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-lg shadow-emerald-950/30 transition-all cursor-pointer mt-2"
              >
                {loginLoading ? "Authenticating..." : <>Sign In to Dashboard <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const navGroups = [
    {
      group: "MAIN",
      items: [
        { id: "overview", label: "Overview", icon: LayoutDashboard },
        { id: "settings", label: "School Info & Contacts", icon: Settings },
      ],
    },
    {
      group: "WEBSITE CONTENT",
      items: [
        { id: "notices", label: "Notices & Circulars", icon: Bell, count: stats.notices },
        { id: "teachers", label: "Faculty Directory", icon: Users, count: stats.teachers },
        { id: "gallery", label: "Photo Gallery", icon: ImageIcon, count: stats.gallery },
        { id: "resources", label: "Downloads & Syllabi", icon: FileText, count: stats.resources },
        { id: "scholarships", label: "Scholarships", icon: GraduationCap, count: stats.scholarships },
        { id: "clubs", label: "Clubs & Activities", icon: Compass, count: stats.clubs },
        { id: "achievements", label: "Achievements", icon: Trophy, count: stats.achievements },
      ],
    },
    {
      group: "COMMUNICATIONS",
      items: [
        { id: "enquiries", label: "Admissions Inquiries", icon: Inbox, count: stats.enquiries, highlight: true },
        { id: "contacts", label: "Contact Messages", icon: Mail, count: stats.contacts },
        { id: "alumni", label: "Alumni Registrations", icon: Award, count: stats.alumni },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans antialiased">
      {/* Toast Alert */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2.5 text-white animate-in slide-in-from-bottom duration-200 ${
            toast.type === "success" ? "bg-[#008744]" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {toast.text}
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 z-40 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Logo / Brand Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-black text-emerald-400 text-xs">
                PPM
              </div>
              <div>
                <h1 className="text-xs font-black text-white tracking-tight">PPM HSS CMS</h1>
                <p className="text-[10px] text-slate-400">School Admin Portal</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Items Grouped */}
          <nav className="p-3 space-y-4 overflow-y-auto max-h-[calc(100vh-160px)]">
            {navGroups.map((grp, gIdx) => (
              <div key={gIdx} className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 px-3 block">
                  {grp.group}
                </span>
                {grp.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                        setSearchQuery("");
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#008744] text-white shadow-sm"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.count !== undefined && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold shrink-0 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : item.highlight
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* User & Logout Footer */}
        <div className="p-3 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between px-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">
                A
              </div>
              <span className="font-semibold text-slate-200 text-xs truncate max-w-[100px]">
                {adminUser?.username || "admin"}
              </span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-mono">
              Live
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full py-1.5 px-3 bg-slate-800 hover:bg-red-950/40 text-slate-300 hover:text-red-400 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Sticky Topbar */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200/80 z-20 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 text-slate-600">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744]">
                  Console
                </span>
                <span className="text-slate-300">/</span>
                <h2 className="text-sm font-black text-slate-900 capitalize tracking-tight">
                  {activeTab.replace("-", " ")}
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Refresh */}
            <button
              onClick={loadData}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {/* Add New Button for Entity Tabs */}
            {["notices", "teachers", "gallery", "resources", "scholarships", "clubs", "achievements"].includes(
              activeTab
            ) && (
              <button
                onClick={() => {
                  setModalTarget(activeTab);
                  setEditingItem(null);
                  setModalMode("add");
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Record</span>
              </button>
            )}
          </div>
        </header>

        {/* Tab Views Body */}
        <div className="p-6 max-w-7xl w-full mx-auto space-y-6">
          {/* 1. OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Metric KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Admissions</p>
                    <h3 className="text-2xl font-black text-[#008744] mt-1">{stats.enquiries || 0}</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">Awaiting review</p>
                  </div>
                  <div className="w-11 h-11 bg-emerald-50 text-[#008744] rounded-xl flex items-center justify-center">
                    <Inbox className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Notices</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.notices || 0}</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">Active circulars</p>
                  </div>
                  <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Faculty</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.teachers || 0}</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">Listed educators</p>
                  </div>
                  <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Gallery</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.gallery || 0}</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">Campus photos</p>
                  </div>
                  <div className="w-11 h-11 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Quick Actions & Recent Items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Admissions Enquiries */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Inbox className="w-4 h-4 text-[#008744]" /> Recent Admissions Enquiries
                    </h3>
                    <button
                      onClick={() => setActiveTab("enquiries")}
                      className="text-xs font-bold text-[#008744] hover:underline"
                    >
                      View all ({enquiries.length})
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {enquiries.slice(0, 4).map((enq) => (
                      <div
                        key={enq._id || enq.id}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-slate-900">{enq.studentName}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#008744] font-bold">
                              {enq.seekingGrade}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Parent: {enq.parentName} • {enq.phone}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {enq.status || "Received"}
                        </span>
                      </div>
                    ))}
                    {enquiries.length === 0 && (
                      <p className="text-xs text-slate-400 py-6 text-center">No admissions enquiries recorded yet.</p>
                    )}
                  </div>
                </div>

                {/* System & School Summary */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <div className="border-b pb-3 flex items-center justify-between">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#008744]" /> School Quick Directory
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">
                      Code: 11024
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Institution:</span>
                      <strong className="text-slate-900 font-semibold">{siteSettings?.schoolName || "PPM HSS Kottukkara"}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Board Affiliation:</span>
                      <span className="text-slate-900 font-medium">DHSE & KBPE Kerala</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Helpdesk Phone:</span>
                      <span className="text-slate-900 font-mono font-medium">{siteSettings?.phone || "+91 483 2711374"}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-500">Official Email:</span>
                      <span className="text-slate-900 font-medium">{siteSettings?.email || "ppmhss@gmail.com"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. SETTINGS */}
          {activeTab === "settings" && siteSettings && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-base font-bold text-slate-900">School Profile & Contact Configuration</h3>
                <p className="text-xs text-slate-500">Update public portal contact info, school address, and social links.</p>
              </div>

              <form onSubmit={handleSettingsSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">School Name</label>
                    <input
                      type="text"
                      value={siteSettings.schoolName || ""}
                      onChange={(e) => setSiteSettings({ ...siteSettings, schoolName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">DHSE School Code</label>
                    <input
                      type="text"
                      value={siteSettings.schoolCode || ""}
                      onChange={(e) => setSiteSettings({ ...siteSettings, schoolCode: e.target.value })}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary Phone</label>
                    <input
                      type="text"
                      value={siteSettings.phone || ""}
                      onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official Email</label>
                    <input
                      type="email"
                      value={siteSettings.email || ""}
                      onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Physical Address</label>
                  <textarea
                    rows={2}
                    value={siteSettings.address || ""}
                    onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border rounded-xl"
                  />
                </div>

                <div className="pt-4 border-t flex justify-end">
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="px-5 py-2.5 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    <span>{formSubmitting ? "Saving..." : "Save Settings"}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 3. NOTICES */}
          {activeTab === "notices" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="divide-y divide-slate-100">
                {notices.map((n) => (
                  <div key={n._id || n.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-xs text-slate-900">{n.title}</h4>
                        {n.urgent && (
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-bold uppercase tracking-wider">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500">
                        {n.date} • <span className="font-semibold text-emerald-700">{n.category}</span>
                      </p>
                      {n.summary && <p className="text-xs text-slate-600 line-clamp-1">{n.summary}</p>}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => {
                          setModalTarget("notices");
                          setEditingItem(n);
                          setModalMode("edit");
                        }}
                        className="p-1.5 text-slate-400 hover:text-emerald-700 rounded-lg hover:bg-slate-100"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete("notices", n._id || n.id)}
                        className="p-1.5 text-slate-400 hover:text-red-700 rounded-lg hover:bg-slate-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. TEACHERS */}
          {activeTab === "teachers" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teachers.map((t) => (
                  <div key={t._id || t.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50 flex items-start gap-3">
                    <img src={t.photoUrl} alt={t.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-slate-900 truncate">{t.name}</h4>
                      <p className="text-[11px] text-[#008744] font-medium truncate">{t.designation}</p>
                      <p className="text-[10px] text-slate-500 truncate">{t.department} • {t.wing}</p>
                    </div>
                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={() => {
                          setModalTarget("teachers");
                          setEditingItem(t);
                          setModalMode("edit");
                        }}
                        className="p-1 text-slate-400 hover:text-emerald-700 rounded-md"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete("teachers", t._id || t.id)}
                        className="p-1 text-slate-400 hover:text-red-700 rounded-md"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. GALLERY */}
          {activeTab === "gallery" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((g) => (
                  <div key={g._id || g.id} className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 h-44">
                    <img src={g.url} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300 block">{g.album}</span>
                      <p className="text-xs font-bold truncate">{g.title}</p>
                    </div>
                    <button
                      onClick={() => handleDelete("gallery", g._id || g.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. RESOURCES */}
          {activeTab === "resources" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="divide-y divide-slate-100">
                {resources.map((r) => (
                  <div key={r._id || r.id} className="py-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{r.title}</h4>
                      <p className="text-[11px] text-slate-500">
                        {r.grade} • <span className="font-semibold text-emerald-700">{r.category}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setModalTarget("resources");
                          setEditingItem(r);
                          setModalMode("edit");
                        }}
                        className="p-1.5 text-slate-400 hover:text-emerald-700"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete("resources", r._id || r.id)}
                        className="p-1.5 text-slate-400 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. SCHOLARSHIPS */}
          {activeTab === "scholarships" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarships.map((s) => (
                  <div key={s._id || s.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50 space-y-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {s.target}
                        </span>
                        <span className="text-[11px] text-slate-400">{s.deadline}</span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-900">{s.name}</h4>
                      <p className="text-xs font-black text-slate-800">{s.amount}</p>
                    </div>
                    <div className="pt-2 border-t flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setModalTarget("scholarships");
                          setEditingItem(s);
                          setModalMode("edit");
                        }}
                        className="p-1 text-slate-400 hover:text-emerald-700"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete("scholarships", s._id || s.id)}
                        className="p-1 text-slate-400 hover:text-red-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. CLUBS */}
          {activeTab === "clubs" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clubs.map((c) => (
                  <div key={c._id || c.id} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50 flex flex-col justify-between">
                    {c.imageUrl && (
                      <div className="h-36 w-full overflow-hidden bg-slate-900 relative">
                        <img src={c.imageUrl} alt={c.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/80 px-2 py-0.5 rounded-full">
                          {c.category}
                        </span>
                      </div>
                    )}
                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-xs text-slate-900">{c.name}</h4>
                        <p className="text-[11px] text-slate-600 line-clamp-2">{c.description}</p>
                      </div>
                      <div className="pt-2 border-t flex items-center justify-between text-xs text-slate-500">
                        <span>Lead: <strong className="text-slate-700">{c.coordinator}</strong></span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => {
                              setModalTarget("clubs");
                              setEditingItem(c);
                              setModalMode("edit");
                            }}
                            className="p-1 text-slate-400 hover:text-emerald-700"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete("clubs", c._id || c.id)}
                            className="p-1 text-slate-400 hover:text-red-700"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. ACHIEVEMENTS */}
          {activeTab === "achievements" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((a) => (
                  <div key={a._id || a.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50 space-y-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {a.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 font-bold">{a.year}</span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-900">{a.title}</h4>
                      <p className="text-[11px] text-slate-600 line-clamp-2">{a.description}</p>
                      <div className="text-[10px] font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-lg w-fit mt-1">
                        {a.badge}
                      </div>
                    </div>
                    <div className="pt-2 border-t flex justify-end gap-1">
                      <button
                        onClick={() => {
                          setModalTarget("achievements");
                          setEditingItem(a);
                          setModalMode("edit");
                        }}
                        className="p-1 text-slate-400 hover:text-emerald-700"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete("achievements", a._id || a.id)}
                        className="p-1 text-slate-400 hover:text-red-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 10. ENQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="divide-y divide-slate-100">
                {enquiries.map((enq) => (
                  <div key={enq._id || enq.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-xs text-slate-900">{enq.studentName}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#008744] font-bold">
                          {enq.seekingGrade}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Parent: <strong className="text-slate-800">{enq.parentName}</strong> • Phone: <span className="font-mono">{enq.phone}</span>
                      </p>
                      {enq.previousSchool && (
                        <p className="text-[11px] text-slate-500">Prev School: {enq.previousSchool} ({enq.marksPercentage || "N/A"})</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={enq.status || "Received"}
                        onChange={(e) => handleStatusChange("enquiries", enq._id || enq.id, e.target.value)}
                        className="px-2.5 py-1 text-xs rounded-xl border border-slate-200 font-semibold text-slate-700 bg-white"
                      >
                        <option value="Received">Received</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Approved">Approved</option>
                      </select>
                      <button
                        onClick={() => handleDelete("enquiries", enq._id || enq.id)}
                        className="p-1.5 text-slate-400 hover:text-red-700 rounded-lg hover:bg-slate-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 11. CONTACTS */}
          {activeTab === "contacts" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="divide-y divide-slate-100">
                {contacts.map((msg) => (
                  <div key={msg._id || msg.id} className="py-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{msg.name}</span>
                        <span className="text-[11px] text-slate-400">({msg.email} • {msg.phone})</span>
                      </div>
                      <button
                        onClick={() => handleDelete("contacts", msg._id || msg.id)}
                        className="p-1.5 text-slate-400 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 12. ALUMNI */}
          {activeTab === "alumni" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="divide-y divide-slate-100">
                {alumni.map((alum) => (
                  <div key={alum._id || alum.id} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{alum.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                          Class of {alum.batchYear}
                        </span>
                        {alum.verified && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {alum.profession || "Alumnus"} • {alum.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleStatusChange("alumni", alum._id || alum.id, !alum.verified)}
                        className={`px-3 py-1 text-xs rounded-xl font-bold cursor-pointer transition-colors ${
                          alum.verified ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-emerald-600 text-white hover:bg-emerald-700"
                        }`}
                      >
                        {alum.verified ? "Unverify" : "Verify Alum"}
                      </button>
                      <button
                        onClick={() => handleDelete("alumni", alum._id || alum.id)}
                        className="p-1.5 text-slate-400 hover:text-red-700"
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

      {/* COMPREHENSIVE MODAL FOR ALL ENTITIES */}
      {modalMode && modalTarget && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-4 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-sm text-slate-900 capitalize">
                {modalMode} {modalTarget.replace("-", " ")}
              </h3>
              <button onClick={() => setModalMode(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Title / Name</label>
                <input
                  name={modalTarget === "teachers" || modalTarget === "alumni" ? "name" : "title"}
                  required
                  defaultValue={editingItem?.name || editingItem?.title || ""}
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008744] focus:outline-hidden"
                />
              </div>

              {/* NOTICES FIELDS */}
              {modalTarget === "notices" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                      <input
                        name="date"
                        required
                        defaultValue={editingItem?.date || new Date().toISOString().split("T")[0]}
                        className="w-full px-3.5 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <select name="category" defaultValue={editingItem?.category || "Notices"} className="w-full px-3.5 py-2 text-xs border rounded-xl">
                        <option value="Notices">Notices</option>
                        <option value="Academic">Academic</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Summary</label>
                    <textarea name="summary" rows={2} defaultValue={editingItem?.summary || ""} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* TEACHERS FIELDS */}
              {modalTarget === "teachers" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
                      <input name="designation" required defaultValue={editingItem?.designation || "HST"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                      <input name="department" required defaultValue={editingItem?.department || "General"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Photo Image URL</label>
                    <input name="photoUrl" defaultValue={editingItem?.photoUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* GALLERY FIELDS */}
              {modalTarget === "gallery" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Album Category</label>
                      <input name="album" required defaultValue={editingItem?.album || "Campus Life"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Event Year</label>
                      <input name="year" required defaultValue={editingItem?.year || "2024"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
                    <input name="url" required defaultValue={editingItem?.url || ""} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* RESOURCES FIELDS */}
              {modalTarget === "resources" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Grade Level</label>
                    <select name="grade" defaultValue={editingItem?.grade || "SSLC (Class 10)"} className="w-full px-3.5 py-2 text-xs border rounded-xl">
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="SSLC (Class 10)">SSLC (Class 10)</option>
                      <option value="Plus One (+1)">Plus One (+1)</option>
                      <option value="Plus Two (+2)">Plus Two (+2)</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                    <select name="category" defaultValue={editingItem?.category || "Question Paper"} className="w-full px-3.5 py-2 text-xs border rounded-xl">
                      <option value="Question Paper">Question Paper</option>
                      <option value="Question Bank">Question Bank</option>
                      <option value="Holiday Worksheet">Holiday Worksheet</option>
                      <option value="Time Table">Time Table</option>
                      <option value="Form">Form</option>
                    </select>
                  </div>
                </div>
              )}

              {/* SCHOLARSHIPS FIELDS */}
              {modalTarget === "scholarships" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Target</label>
                      <input name="target" required defaultValue={editingItem?.target || "Class 8 Students"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Amount</label>
                      <input name="amount" required defaultValue={editingItem?.amount || "₹12,000 per annum"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
                    <input name="imageUrl" defaultValue={editingItem?.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* CLUBS FIELDS */}
              {modalTarget === "clubs" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <input name="category" required defaultValue={editingItem?.category || "Community Service"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Coordinator</label>
                      <input name="coordinator" required defaultValue={editingItem?.coordinator || "Staff Lead"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                    <textarea name="description" rows={2} defaultValue={editingItem?.description || ""} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Banner Image URL</label>
                    <input name="imageUrl" defaultValue={editingItem?.imageUrl || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* ACHIEVEMENTS FIELDS */}
              {modalTarget === "achievements" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <select name="category" defaultValue={editingItem?.category || "Academic"} className="w-full px-3.5 py-2 text-xs border rounded-xl">
                        <option value="Academic">Academic</option>
                        <option value="Sports">Sports</option>
                        <option value="Arts & Kalolsavam">Arts & Kalolsavam</option>
                        <option value="Institutional">Institutional</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Year</label>
                      <input name="year" required defaultValue={editingItem?.year || "2024"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Ribbon</label>
                    <input name="badge" required defaultValue={editingItem?.badge || "Full A+ / Honors"} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                    <textarea name="description" rows={2} defaultValue={editingItem?.description || ""} className="w-full px-3.5 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setModalMode(null)} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer">
                  Cancel
                </button>
                <button type="submit" disabled={formSubmitting} className="px-5 py-2 text-xs font-bold bg-[#008744] hover:bg-[#007038] text-white rounded-xl shadow-xs cursor-pointer">
                  {formSubmitting ? "Saving..." : "Save Record"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
