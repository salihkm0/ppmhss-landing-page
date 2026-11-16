import React, { useState, useEffect, useCallback } from "react";
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

  // Search query & modal states
  const [searchQuery, setSearchQuery] = useState("");
  const [modalMode, setModalMode] = useState(null);
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
      showToast("Error loading data: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) loadData();
  }, [token, loadData]);

  // Login action
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await api.login({ username: loginUsername, password: loginPassword });
      setToken(res.token);
      setAuthToken(res.token);
      setAdminUser(res.user);
      showToast("Welcome to PPM HSS Admin Portal");
    } catch (err) {
      setLoginError(err.message || "Invalid credentials");
    } finally {
      setLoginLoading(false);
    }
  };

  // Logout action
  const handleLogout = () => {
    removeToken();
    setAuthToken(null);
    setAdminUser(null);
  };

  // Delete action
  const handleDelete = async (tab, id) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
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

      showToast("Deleted successfully");
      loadData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  // Status toggle
  const handleStatusChange = async (tab, id, value) => {
    try {
      if (tab === "enquiries") await api.updateEnquiry(id, { status: value });
      else if (tab === "contacts") await api.updateContact(id, { status: value });
      else if (tab === "alumni") await api.updateAlumni(id, { isVerified: value });

      showToast("Status updated");
      loadData();
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  // Modal Save
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData.entries());

    if ("isUrgent" in formProps) formProps.isUrgent = formProps.isUrgent === "on";

    try {
      const isEdit = modalMode === "edit";
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

      showToast("Item saved successfully");
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
      showToast("Website settings saved");
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
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="text-center">
            <div className="inline-flex w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 items-center justify-center p-2 mb-3">
              <span className="text-2xl font-black text-[#008744]">PPM</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">PPM HSS Admin Portal</h2>
            <p className="mt-1 text-sm text-slate-500">Standalone Content Management System</p>
          </div>

          <div className="mt-8 bg-white py-8 px-6 shadow-xl shadow-slate-200/50 sm:rounded-2xl border border-slate-100 sm:px-10">
            {loginError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {loginError}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Username
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder="admin"
                    className="block w-full pl-11 pr-3.5 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-[#008744] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-11 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-[#008744] focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#008744]" /> Default: admin / admin123
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setLoginUsername("admin");
                    setLoginPassword("admin123");
                  }}
                  className="text-[#008744] hover:underline font-bold"
                >
                  Auto-fill
                </button>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-[#008744] hover:bg-[#007038] cursor-pointer"
              >
                {loginLoading ? "Signing in..." : <>Sign in to Portal <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

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
      {/* Toast Alert */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-3 text-white ${
            toast.type === "success" ? "bg-[#008744]" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {toast.text}
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-72 bg-white border-r border-slate-200 z-40 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h1 className="text-sm font-black text-slate-900 tracking-tight">PPM HSS CMS</h1>
              <p className="text-[11px] text-slate-500 font-medium">Standalone Admin App</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive ? "bg-[#008744] text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"
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

        <div className="p-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between px-2 text-xs">
            <span className="text-slate-500">Admin:</span>
            <span className="font-bold text-slate-800">{adminUser?.username || "admin"}</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-500">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-black text-slate-900 capitalize tracking-tight">{activeTab}</h2>
              <p className="text-xs text-slate-500">Manage and publish content instantly.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            {["notices", "teachers", "gallery", "resources", "scholarships", "clubs", "achievements"].includes(
              activeTab
            ) && (
              <button
                onClick={() => {
                  setModalTarget(activeTab);
                  setEditingItem(null);
                  setModalMode("add");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add New
              </button>
            )}
          </div>
        </header>

        {/* View Tabs */}
        <div className="p-6 max-w-7xl w-full mx-auto space-y-6">
          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Admissions Enquiries</p>
                  <h3 className="text-2xl font-black text-[#008744] mt-1">{stats.enquiries || 0}</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Published Notices</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.notices || 0}</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Teachers Listed</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.teachers || 0}</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold">Gallery Photos</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{stats.gallery || 0}</h3>
                </div>
              </div>
            </div>
          )}

          {/* NOTICES */}
          {activeTab === "notices" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="divide-y divide-slate-100">
                {notices.map((n) => (
                  <div key={n._id || n.id} className="py-3 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{n.title}</h4>
                      <p className="text-[11px] text-slate-500">{n.date} • {n.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setModalTarget("notices");
                          setEditingItem(n);
                          setModalMode("edit");
                        }}
                        className="p-1.5 text-slate-400 hover:text-emerald-700"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete("notices", n._id || n.id)}
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

          {/* TEACHERS */}
          {activeTab === "teachers" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teachers.map((t) => (
                  <div key={t._id || t.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                    <img src={t.photoUrl} alt={t.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-slate-900">{t.name}</h4>
                      <p className="text-[11px] text-[#008744]">{t.designation}</p>
                      <p className="text-[10px] text-slate-500">{t.department} • {t.wing}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setModalTarget("teachers");
                          setEditingItem(t);
                          setModalMode("edit");
                        }}
                        className="p-1 text-slate-400 hover:text-emerald-700"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete("teachers", t._id || t.id)}
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

          {/* INQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="divide-y divide-slate-100">
                {enquiries.map((enq) => (
                  <div key={enq._id || enq.id} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-xs text-slate-900">{enq.studentName}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-[#008744] font-bold">
                          {enq.seekingGrade}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">Parent: {enq.parentName} • {enq.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={enq.status || "Received"}
                        onChange={(e) => handleStatusChange("enquiries", enq._id || enq.id, e.target.value)}
                        className="px-2 py-1 text-xs rounded-lg border border-slate-200"
                      >
                        <option value="Received">Received</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Approved">Approved</option>
                      </select>
                      <button
                        onClick={() => handleDelete("enquiries", enq._id || enq.id)}
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

      {/* MODAL */}
      {modalMode && modalTarget && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-sm text-slate-900 capitalize">{modalMode} {modalTarget}</h3>
              <button onClick={() => setModalMode(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Title / Name</label>
                <input
                  name={modalTarget === "teachers" ? "name" : "title"}
                  required
                  defaultValue={editingItem?.name || editingItem?.title || ""}
                  className="w-full px-3 py-2 text-xs border rounded-xl"
                />
              </div>

              {modalTarget === "notices" && (
                <>
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
                      <select name="category" defaultValue={editingItem?.category || "Notices"} className="w-full px-3 py-2 text-xs border rounded-xl">
                        <option value="Notices">Notices</option>
                        <option value="Academic">Academic</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Summary</label>
                    <textarea name="summary" rows={2} defaultValue={editingItem?.summary || ""} className="w-full px-3 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {modalTarget === "teachers" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
                    <input name="designation" required defaultValue={editingItem?.designation || "HST"} className="w-full px-3 py-2 text-xs border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                    <input name="department" required defaultValue={editingItem?.department || "General"} className="w-full px-3 py-2 text-xs border rounded-xl" />
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setModalMode(null)} className="px-4 py-2 text-xs font-semibold text-slate-600">
                  Cancel
                </button>
                <button type="submit" disabled={formSubmitting} className="px-5 py-2 text-xs font-bold bg-[#008744] text-white rounded-xl">
                  {formSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
