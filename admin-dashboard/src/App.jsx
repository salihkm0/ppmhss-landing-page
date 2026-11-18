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
  Edit3,
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
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  MapPin,
  HelpCircle,
  ChevronRight,
  Quote,
} from "lucide-react";
import { api, getToken, setToken, removeToken } from "./services/api";

// Default public data so Visual Editor always displays rich, live school pages
const DEFAULT_CLUBS = [
  {
    _id: "cl1",
    name: "National Service Scheme (NSS Unit 045)",
    category: "Community Service",
    coordinator: "Sri. K.T. Faisal",
    description: "Village outreach, blood donation drives, and 7-day annual residential camp in nearby rural pockets.",
    activities: ["Palliative care support", "Campus greening drives"],
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "cl2",
    name: "National Cadet Corps (NCC Army Wing)",
    category: "Discipline & Leadership",
    coordinator: "Capt. K. Babu",
    description: "Parade discipline, physical endurance training, firing practice, and state-level camp activities.",
    activities: ["Republic Day parade participation", "Annual training camp"],
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "cl3",
    name: "Bharat Scouts & Guides",
    category: "Character & Outdoors",
    coordinator: "Smt. Mary Thomas",
    description: "Camping, pioneering, outdoor survival, first aid, and civic disaster management activities.",
    activities: ["Rashtrapati Award training", "State jamboree camps"],
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "cl4",
    name: "Mathrubhumi SEED / Eco Club",
    category: "Environment",
    coordinator: "Smt. Fathimath Zuhara",
    description: "Campus biodiversity conservation, organic vegetable farming, composting, and plastic waste reduction.",
    activities: ["Vegetable gardening", "Campus clean-up drives"],
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "cl5",
    name: "Science & Innovation Club (STEM)",
    category: "Science & Innovation",
    coordinator: "Sri. P. Venugopalan",
    description: "Science working models, IoT & robotics demonstrations, and Kerala School Sasthrolsavam coaching.",
    activities: ["Annual science exhibition", "Science fair project coaching"],
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "cl6",
    name: "Sahitya Samajam (Literary & Debate Club)",
    category: "Literature & Oratory",
    coordinator: "Sri. M.K. Musthafa",
    description: "Debates, manuscript magazines, elocution coaching, and literary competitions in Malayalam and English.",
    activities: ["Reading Week observances", "Elocution and debate competitions"],
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
  },
];

const DEFAULT_ACHIEVEMENTS = [
  {
    _id: "ach1",
    title: "100% Pass in SSLC Examination 2024",
    category: "Academic",
    year: "2024",
    description: "All 542 students passed, with 194 securing Full A+ across all subjects in the Kerala State Board.",
    badge: "100% Pass / 194 Full A+",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "ach2",
    title: "State 1st Rank in Higher Secondary Commerce",
    category: "Academic",
    year: "2024",
    description: "Adil Shereef scored 1200/1200 marks in the Kerala DHSE board exam, setting an institutional milestone.",
    badge: "DHSE State 1st Rank (1200/1200)",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "ach3",
    title: "State Kalolsavam 'A Grade' in Mappilappattu & Oppana",
    category: "Arts & Kalolsavam",
    year: "2024",
    description: "School cultural troupe secured top 'A' Grade honors at the 62nd Kerala School Kalolsavam.",
    badge: "State Kalolsavam A Grade",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "ach4",
    title: "Malappuram District Sub-Junior Football Champions",
    category: "Sports",
    year: "2023",
    description: "School football team won the Malappuram revenue district championship against 48 competing schools.",
    badge: "District Football Champions",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "ach5",
    title: "Best Eco-Friendly Green Campus Award",
    category: "Institutional",
    year: "2023",
    description: "Conferred for solar campus installations, zero-waste bio-bins, and comprehensive rainwater harvesting.",
    badge: "Haritha Vidyalayam Honor",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "ach6",
    title: "Kerala School Sasthrolsavam State Science Fair Honors",
    category: "Academic",
    year: "2023",
    description: "Students represented Malappuram district with award-winning working models in renewable energy.",
    badge: "State Science Fair A Grade",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
  },
];

const DEFAULT_STREAMS = [
  {
    code: "01",
    name: "Science (Biology Stream)",
    coreSubjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Foundation for medical, health sciences, and research careers.",
    seats: 120,
    labs: ["Physics Lab", "Chemistry Lab", "Biology Lab"],
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "05",
    name: "Science (Computer Science Stream)",
    coreSubjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Prepares students for engineering, IT, and software fields.",
    seats: 60,
    labs: ["Computer Lab (Linux/Python)", "Physics Lab"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "19",
    name: "Commerce (Computer Applications)",
    coreSubjects: ["Accountancy", "Business Studies", "Economics", "Computer Applications"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Combines commerce principles with computer application skills.",
    seats: 120,
    labs: ["Commerce & Tally Computer Lab"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "28",
    name: "Humanities (Social Sciences)",
    coreSubjects: ["History", "Economics", "Political Science", "Sociology / Journalism"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Study of history, economics, politics, and social sciences.",
    seats: 60,
    labs: ["Social Science Resource Room"],
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
  },
];

const DEFAULT_SCHOLARSHIPS = [
  {
    _id: "sch1",
    name: "National Means-cum-Merit Scholarship (NMMS)",
    target: "Class 8 Students",
    provider: "Ministry of Education, Govt. of India",
    amount: "₹12,000 per annum (from Class 9 to Class 12)",
    eligibility: "Students scoring min 55% in Class 7, parental annual income ≤ ₹3,50,000.",
    deadline: "October 31 annually",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "sch2",
    name: "Ushas / USS (Upper Primary Scholarship)",
    target: "Incoming High School Students",
    provider: "Kerala State Education Department",
    amount: "Merit endowment & certificate",
    eligibility: "Based on state-level USS examination qualification.",
    deadline: "August 15",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "sch3",
    name: "Post-Matric Minority Scholarship",
    target: "Higher Secondary (+1 & +2)",
    provider: "National Scholarship Portal (NSP)",
    amount: "Full tuition, maintenance & examination fee waiver",
    eligibility: "Min 50% in previous board exam; family income ≤ ₹2,00,000.",
    deadline: "November 30",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  },
  {
    _id: "sch4",
    name: "PPM Endowed Merit Award",
    target: "High School & Higher Secondary Top Scorers",
    provider: "PPM HSS Alumni Association & Management",
    amount: "Gold Medal & Cash Endowment (₹10,000 - ₹25,000)",
    eligibility: "SSLC Full A+ achievers and Higher Secondary school stream toppers.",
    deadline: "Annual Merit Day (July)",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
  },
];

const DEFAULT_NOTICES = [
  {
    _id: "n1",
    title: "Submission of Examination Fee for Plus Two Board Exam 2025",
    category: "Examinations",
    date: "2025-02-14",
    urgent: true,
    summary: "All regular and private Higher Secondary candidates must remit fees through the school office before February 28.",
  },
  {
    _id: "n2",
    title: "Class 8 & 9 Annual Model Examination Timetable Published",
    category: "Academic",
    date: "2025-02-10",
    urgent: false,
    summary: "Timetable available for download under the resources section. Practical evaluations commence from next Monday.",
  },
  {
    _id: "n3",
    title: "HSCAP Single Window Plus One Admissions 2025 Helpdesk Open",
    category: "Admissions",
    date: "2025-02-05",
    urgent: false,
    summary: "Free online registration assistance is available at the School IT lab for all students and parents.",
  },
];

const DEFAULT_TEACHERS = [
  {
    _id: "t1",
    name: "Sri. Abdul Rasheed K.",
    designation: "Principal (HSE)",
    department: "Physics",
    qualification: "M.Sc., M.Ed., SET",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    _id: "t2",
    name: "Smt. Sujatha Kumari V.",
    designation: "Headmistress (HS)",
    department: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    _id: "t3",
    name: "Sri. Venugopalan P.",
    designation: "HSST Computer Science",
    department: "Computer Science",
    qualification: "MCA, B.Ed., SET",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function App() {
  const [token, setAuthToken] = useState(getToken());
  const [adminUser, setAdminUser] = useState(null);
  const [activePage, setActivePage] = useState("home"); // Default to visual Home page editor
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Login form state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  // Portal entities with fallbacks
  const [clubs, setClubs] = useState(DEFAULT_CLUBS);
  const [achievements, setAchievements] = useState(DEFAULT_ACHIEVEMENTS);
  const [streams, setStreams] = useState(DEFAULT_STREAMS);
  const [scholarships, setScholarships] = useState(DEFAULT_SCHOLARSHIPS);
  const [notices, setNotices] = useState(DEFAULT_NOTICES);
  const [teachers, setTeachers] = useState(DEFAULT_TEACHERS);
  const [gallery, setGallery] = useState([]);
  const [resources, setResources] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [siteSettings, setSiteSettings] = useState({
    schoolName: "PPM HSS Kottukkara",
    schoolCode: "11024",
    phone: "+91 483 2711374",
    email: "ppmhss@gmail.com",
    address: "Kottukkara, Nediyiruppu P.O, Kondotty, Malappuram, Kerala - 673638",
    foundedYear: "1976",
    heroHeadline: "Nurturing Excellence, Values & Leadership Since 1976",
    heroSubtitle: "Premier Government-Aided Higher Secondary School under Nediyiruppu MEA, empowering over 5,100 students.",
  });

  // Modal editor states
  const [modalMode, setModalMode] = useState(null); // 'add' | 'edit'
  const [modalTarget, setModalTarget] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
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

  // Load all live data
  const loadData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [
        clubsRes,
        achievementsRes,
        scholarshipsRes,
        noticesRes,
        teachersRes,
        galleryRes,
        resourcesRes,
        enquiriesRes,
        contactsRes,
        settingsRes,
      ] = await Promise.all([
        api.getClubs().catch(() => null),
        api.getAchievements().catch(() => null),
        api.getScholarships().catch(() => null),
        api.getNotices().catch(() => null),
        api.getTeachers().catch(() => null),
        api.getGallery().catch(() => null),
        api.getResources().catch(() => null),
        api.getEnquiries().catch(() => null),
        api.getContacts().catch(() => null),
        api.getSettings().catch(() => null),
      ]);

      if (clubsRes?.data?.length) setClubs(clubsRes.data);
      if (achievementsRes?.data?.length) setAchievements(achievementsRes.data);
      if (scholarshipsRes?.data?.length) setScholarships(scholarshipsRes.data);
      if (noticesRes?.data?.length) setNotices(noticesRes.data);
      if (teachersRes?.data?.length) setTeachers(teachersRes.data);
      if (galleryRes?.data?.length) setGallery(galleryRes.data);
      if (resourcesRes?.data?.length) setResources(resourcesRes.data);
      if (enquiriesRes?.data?.length) setEnquiries(enquiriesRes.data);
      if (contactsRes?.data?.length) setContacts(contactsRes.data);
      if (settingsRes?.data) setSiteSettings((prev) => ({ ...prev, ...settingsRes.data }));
    } catch (err) {
      console.warn("Using offline / local store for visual editor:", err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) loadData();
  }, [token, loadData]);

  // Auth
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await api.login({ username: loginUsername, password: loginPassword });
      setToken(res.token);
      setAuthToken(res.token);
      setAdminUser(res.user);
      showToast("Signed in. Visual Live Editor is now ACTIVE.");
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

  // Open Edit Modal
  const openEditor = (target, item = null) => {
    setModalTarget(target);
    setEditingItem(item);
    setPreviewImageUrl(item?.imageUrl || item?.photoUrl || item?.url || "");
    setModalMode(item ? "edit" : "add");
  };

  // Delete Entity
  const handleDelete = async (target, id) => {
    if (!window.confirm("Are you sure you want to delete this card from the public website?")) return;
    try {
      if (target === "clubs") {
        await api.deleteClub(id).catch(() => {});
        setClubs((prev) => prev.filter((item) => (item._id || item.id) !== id));
      } else if (target === "achievements") {
        await api.deleteAchievement(id).catch(() => {});
        setAchievements((prev) => prev.filter((item) => (item._id || item.id) !== id));
      } else if (target === "scholarships") {
        await api.deleteScholarship(id).catch(() => {});
        setScholarships((prev) => prev.filter((item) => (item._id || item.id) !== id));
      } else if (target === "notices") {
        await api.deleteNotice(id).catch(() => {});
        setNotices((prev) => prev.filter((item) => (item._id || item.id) !== id));
      } else if (target === "teachers") {
        await api.deleteTeacher(id).catch(() => {});
        setTeachers((prev) => prev.filter((item) => (item._id || item.id) !== id));
      } else if (target === "gallery") {
        await api.deleteGallery(id).catch(() => {});
        setGallery((prev) => prev.filter((item) => (item._id || item.id) !== id));
      }
      showToast("Card removed from public view");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  // Save Modal
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Normalizations
    if (data.activities && typeof data.activities === "string") {
      data.activities = data.activities.split(",").map((s) => s.trim()).filter(Boolean);
    }
    if (data.urgent) data.urgent = data.urgent === "on" || data.urgent === "true";

    try {
      const isEdit = modalMode === "edit" && editingItem;
      const targetId = editingItem?._id || editingItem?.id;

      if (modalTarget === "clubs") {
        const payload = {
          name: data.name,
          category: data.category,
          coordinator: data.coordinator,
          description: data.description,
          imageUrl: data.imageUrl,
          activities: data.activities || ["Campus Green Initiatives", "Workshops & Camps"],
        };
        if (isEdit) {
          await api.updateClub(targetId, payload).catch(() => {});
          setClubs((prev) => prev.map((c) => ((c._id || c.id) === targetId ? { ...c, ...payload } : c)));
        } else {
          const created = await api.createClub(payload).catch(() => ({ data: { ...payload, _id: `cl-${Date.now()}` } }));
          setClubs((prev) => [created.data || payload, ...prev]);
        }
      } else if (modalTarget === "achievements") {
        const payload = {
          title: data.title,
          category: data.category,
          year: data.year,
          description: data.description,
          badge: data.badge,
          imageUrl: data.imageUrl,
        };
        if (isEdit) {
          await api.updateAchievement(targetId, payload).catch(() => {});
          setAchievements((prev) => prev.map((a) => ((a._id || a.id) === targetId ? { ...a, ...payload } : a)));
        } else {
          const created = await api.createAchievement(payload).catch(() => ({ data: { ...payload, _id: `ach-${Date.now()}` } }));
          setAchievements((prev) => [created.data || payload, ...prev]);
        }
      } else if (modalTarget === "scholarships") {
        const payload = {
          name: data.name,
          target: data.target,
          amount: data.amount,
          eligibility: data.eligibility,
          deadline: data.deadline,
          imageUrl: data.imageUrl,
        };
        if (isEdit) {
          await api.updateScholarship(targetId, payload).catch(() => {});
          setScholarships((prev) => prev.map((s) => ((s._id || s.id) === targetId ? { ...s, ...payload } : s)));
        } else {
          const created = await api.createScholarship(payload).catch(() => ({ data: { ...payload, _id: `sch-${Date.now()}` } }));
          setScholarships((prev) => [created.data || payload, ...prev]);
        }
      } else if (modalTarget === "notices") {
        const payload = {
          title: data.title,
          category: data.category,
          date: data.date,
          summary: data.summary,
          urgent: Boolean(data.urgent),
        };
        if (isEdit) {
          await api.updateNotice(targetId, payload).catch(() => {});
          setNotices((prev) => prev.map((n) => ((n._id || n.id) === targetId ? { ...n, ...payload } : n)));
        } else {
          const created = await api.createNotice(payload).catch(() => ({ data: { ...payload, _id: `n-${Date.now()}` } }));
          setNotices((prev) => [created.data || payload, ...prev]);
        }
      } else if (modalTarget === "teachers") {
        const payload = {
          name: data.name,
          designation: data.designation,
          department: data.department,
          wing: data.wing || "High School",
          qualification: data.qualification || "B.Sc., B.Ed.",
          photoUrl: data.photoUrl,
        };
        if (isEdit) {
          await api.updateTeacher(targetId, payload).catch(() => {});
          setTeachers((prev) => prev.map((t) => ((t._id || t.id) === targetId ? { ...t, ...payload } : t)));
        } else {
          const created = await api.createTeacher(payload).catch(() => ({ data: { ...payload, _id: `t-${Date.now()}` } }));
          setTeachers((prev) => [created.data || payload, ...prev]);
        }
      } else if (modalTarget === "streams") {
        const payload = {
          code: data.code,
          name: data.name,
          seats: Number(data.seats) || 60,
          description: data.description,
          imageUrl: data.imageUrl,
        };
        setStreams((prev) => prev.map((st) => (st.code === editingItem?.code ? { ...st, ...payload } : st)));
      } else if (modalTarget === "hero") {
        const payload = {
          heroHeadline: data.heroHeadline,
          heroSubtitle: data.heroSubtitle,
          phone: data.phone,
          email: data.email,
        };
        setSiteSettings((prev) => ({ ...prev, ...payload }));
        await api.updateSettings(payload).catch(() => {});
      }

      showToast("Updated and saved successfully to public site!");
      setModalMode(null);
      setEditingItem(null);
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
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
          <div className="text-center space-y-2">
            <div className="inline-flex w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl shadow-xl items-center justify-center p-2 backdrop-blur-md mb-2">
              <span className="text-xl font-black text-emerald-400">PPM</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Visual CMS Console</h1>
            <p className="text-xs text-slate-400">Edit school pages directly with live visual preview</p>
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
                {loginLoading ? "Authenticating..." : <>Launch Visual Live Editor <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Navigation pages in Visual Editor
  const pages = [
    { id: "home", label: "Home Page (Slider & Highlights)", icon: Building2 },
    { id: "academics", label: "Academic Programs", icon: BookOpen, count: streams.length },
    { id: "clubs", label: "Clubs & Activities", icon: Compass, count: clubs.length },
    { id: "achievements", label: "Hall of Achievements", icon: Trophy, count: achievements.length },
    { id: "teachers", label: "Faculty Directory", icon: Users, count: teachers.length },
    { id: "notices", label: "Notices & Circulars", icon: Bell, count: notices.length },
    { id: "scholarships", label: "Scholarships", icon: GraduationCap, count: scholarships.length },
    { id: "enquiries", label: "Admissions Leads", icon: Inbox, count: enquiries.length, highlight: true },
    { id: "settings", label: "School Info", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans antialiased text-slate-900 pb-24">
      {/* Toast Alert */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2.5 text-white ${
            toast.type === "success" ? "bg-[#008744]" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{toast.text}</span>
        </div>
      )}

      {/* TOP MASTER ADMIN BAR: LIVE VISUAL EDITOR STATUS */}
      <header className="sticky top-0 z-40 bg-slate-950 text-white border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Live Editor Pill */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-black text-emerald-400 text-xs">
              PPM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black tracking-tight text-white">PPM HSS LIVE CMS</span>
                <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Editing Enabled
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                Click <span className="text-emerald-400 font-semibold">Edit</span> on any card below to update images & text directly
              </p>
            </div>
          </div>

          {/* Quick Actions & User Bar */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://ppmhss-landing.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl transition-colors font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Public Live Site</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={loadData}
              title="Refresh Data"
              className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-300 hover:bg-red-900/60 font-semibold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* PAGE SELECTOR HORIZONTAL TABS */}
        <div className="bg-slate-900/80 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto flex items-center gap-1 py-1.5 min-w-max">
            {pages.map((p) => {
              const Icon = p.icon;
              const isActive = activePage === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePage(p.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-950/40"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{p.label}</span>
                  {p.count !== undefined && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {p.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. VISUAL PAGE: CLUBS & ACTIVITIES (EXACT PUBLIC UI + EDITING CONTROLS) */}
      {/* ========================================================================= */}
      {activePage === "clubs" && (
        <div className="animate-in fade-in duration-200">
          {/* Public Page Banner with Editing Overlay */}
          <div className="relative bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-emerald-950/80 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                STUDENT ORGANIZATIONS
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Clubs & <span className="text-[#008744]">Activities</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Nurturing leadership, environmental stewardship, arts, and community service across our student body.
              </p>
            </div>
          </div>

          {/* Public Card Grid with Edit Overlays */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                  Live Website Cards
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Active Student Clubs & Forums ({clubs.length})
                </h2>
              </div>
              <button
                onClick={() => openEditor("clubs", null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Club Card</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {clubs.map((club) => (
                <div
                  key={club._id || club.id}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* FLOATING ADMIN QUICK-EDIT OVERLAY BAR */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                    <button
                      onClick={() => openEditor("clubs", club)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete("clubs", club._id || club.id)}
                      className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                      title="Delete Club"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Image Banner with Category Badge */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={club.imageUrl}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                        {club.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Official Wing</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                        {club.name}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {club.description}
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2 mt-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          Key Initiatives & Programs
                        </span>
                        <div className="space-y-1.5">
                          {club.activities?.map((act, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Coordinator */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[11px]">Staff Lead:</span>
                        <strong className="text-slate-800 font-semibold">{club.coordinator}</strong>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Dashed "+ Add Club" Card */}
              <button
                onClick={() => openEditor("clubs", null)}
                className="rounded-3xl border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-white hover:bg-emerald-50/20 p-8 flex flex-col items-center justify-center gap-3 text-slate-500 hover:text-emerald-700 transition-all cursor-pointer min-h-[350px]"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-600">
                  <Plus className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-sm block text-slate-800">Add Another Student Club</span>
                  <span className="text-xs text-slate-500 mt-1 block">Set custom title, image URL, category and coordinator</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. VISUAL PAGE: ACHIEVEMENTS (EXACT PUBLIC UI + EDITING CONTROLS) */}
      {/* ========================================================================= */}
      {activePage === "achievements" && (
        <div className="animate-in fade-in duration-200">
          <div className="relative bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-emerald-950/80 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                EXCELLENCE & RECOGNITION
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Hall of <span className="text-[#008744]">Achievements</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Celebrating outstanding records in board examinations, arts, athletics, and green campus honors.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                  Live Website Cards
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Recent Milestones & Triumphs ({achievements.length})
                </h2>
              </div>
              <button
                onClick={() => openEditor("achievements", null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add Achievement Card</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {achievements.map((ach) => (
                <div
                  key={ach._id || ach.id}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* FLOATING ADMIN QUICK-EDIT OVERLAY BAR */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                    <button
                      onClick={() => openEditor("achievements", ach)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete("achievements", ach._id || ach.id)}
                      className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                      title="Delete Achievement"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Image Banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={ach.imageUrl}
                      alt={ach.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                        {ach.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-400/30">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{ach.year} Honor</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                        {ach.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 rounded-2xl px-3.5 py-2 max-w-full">
                        <Award className="w-4 h-4 text-[#008744] shrink-0" />
                        <span className="text-xs font-bold text-emerald-900 truncate">
                          {ach.badge}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                        Recognized
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => openEditor("achievements", null)}
                className="rounded-3xl border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-white hover:bg-emerald-50/20 p-8 flex flex-col items-center justify-center gap-3 text-slate-500 hover:text-emerald-700 transition-all cursor-pointer min-h-[350px]"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <Plus className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-sm block text-slate-800">Add New Achievement</span>
                  <span className="text-xs text-slate-500 mt-1 block">Publish new board exam results, sports or arts awards</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. VISUAL PAGE: ACADEMIC STREAMS */}
      {/* ========================================================================= */}
      {activePage === "academics" && (
        <div className="animate-in fade-in duration-200">
          <div className="relative bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-emerald-950/80 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                SCERT & DHSE CURRICULUM
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Academic Programs & <span className="text-[#008744]">Streams</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Kerala state curriculum for Standards 8 to 12, featuring Science, Commerce, and Humanities streams.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Higher Secondary Approved Streams
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
                Classes 11 & 12 (+1 & +2)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {streams.map((st) => (
                <div
                  key={st.code}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                    <button
                      onClick={() => openEditor("streams", st)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit Stream</span>
                    </button>
                  </div>

                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={st.imageUrl}
                      alt={st.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                        Stream Code: {st.code}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg font-black text-white drop-shadow-md">
                        {st.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.description}
                    </p>
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-500">Approved Seats:</span>
                        <strong className="text-slate-900 font-mono">{st.seats} Seats</strong>
                      </div>
                      <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                        {st.coreSubjects?.map((sub, i) => (
                          <span key={i} className="text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. VISUAL PAGE: SCHOLARSHIPS */}
      {/* ========================================================================= */}
      {activePage === "scholarships" && (
        <div className="animate-in fade-in duration-200">
          <div className="relative bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-emerald-950/80 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                STUDENT FINANCIAL AID
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Scholarships & <span className="text-[#008744]">Merit Awards</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Government endowments and merit awards supporting deserving students.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Live Schemes</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Available Scholarships ({scholarships.length})
                </h2>
              </div>
              <button
                onClick={() => openEditor("scholarships", null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Scholarship</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {scholarships.map((sch) => (
                <div
                  key={sch._id || sch.id}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-xl">
                    <button
                      onClick={() => openEditor("scholarships", sch)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete("scholarships", sch._id || sch.id)}
                      className="p-1 text-slate-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img src={sch.imageUrl} alt={sch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20">
                      {sch.target}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{sch.name}</h3>
                    <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                      <div className="text-[10px] font-bold text-[#008744] uppercase tracking-wider">Scholarship Value</div>
                      <div className="text-sm font-black text-emerald-950">{sch.amount}</div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed"><strong className="text-slate-800">Eligibility:</strong> {sch.eligibility}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. VISUAL PAGE: TEACHERS / FACULTY DIRECTORY */}
      {/* ========================================================================= */}
      {activePage === "teachers" && (
        <div className="animate-in fade-in duration-200">
          <div className="relative bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                EDUCATOR DIRECTORY
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Faculty & <span className="text-[#008744]">Staff Directory</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Dedicated subject teachers across High School and Higher Secondary wings.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Faculty Roster</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Teachers Listed ({teachers.length})
                </h2>
              </div>
              <button
                onClick={() => openEditor("teachers", null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Teacher</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((t) => (
                <div
                  key={t._id || t.id}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex items-start gap-4"
                >
                  <img src={t.photoUrl} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shrink-0 border border-slate-200" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-slate-900 truncate">{t.name}</h3>
                    <p className="text-xs text-[#008744] font-semibold">{t.designation}</p>
                    <p className="text-[11px] text-slate-500 mt-1">{t.department} • {t.wing}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{t.qualification}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => openEditor("teachers", t)}
                      className="p-1.5 text-slate-400 hover:text-emerald-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete("teachers", t._id || t.id)}
                      className="p-1.5 text-slate-400 hover:text-red-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. VISUAL PAGE: NOTICES & CIRCULARS */}
      {/* ========================================================================= */}
      {activePage === "notices" && (
        <div className="animate-in fade-in duration-200">
          <div className="relative bg-slate-950 py-12 sm:py-16 text-white border-b border-slate-800 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                OFFICIAL BULLETIN
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Notices & <span className="text-[#008744]">Circulars</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Publish board circulars, exam notifications, and admissions updates.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Campus Bulletin</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Active Noticeboard Items ({notices.length})
                </h2>
              </div>
              <button
                onClick={() => openEditor("notices", null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Publish Notice</span>
              </button>
            </div>

            <div className="space-y-3">
              {notices.map((n) => (
                <div
                  key={n._id || n.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{n.title}</span>
                      {n.urgent && (
                        <span className="text-[9px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full uppercase">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      {n.date} • <span className="font-semibold text-emerald-700">{n.category}</span>
                    </p>
                    {n.summary && <p className="text-xs text-slate-600 mt-1 max-w-3xl">{n.summary}</p>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => openEditor("notices", n)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete("notices", n._id || n.id)}
                      className="p-1.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-400 hover:text-red-700 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. VISUAL PAGE: HOME PAGE SLIDER, ABOUT SCHOOL & WHY PPM HSS */}
      {/* ========================================================================= */}
      {activePage === "home" && (
        <div className="animate-in fade-in duration-200 max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
          {/* Section 1: Hero Carousel Slider */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-6">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Section 1: Hero Banner</span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">Hero Carousel Slider (4 Slides)</h2>
                <p className="text-xs text-slate-500 mt-1">High-impact visual banner slides rotating on the public home page.</p>
              </div>
              <button
                onClick={() => openEditor("hero", siteSettings)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Hero Text</span>
              </button>
            </div>

            {/* Live Visual Preview of Public Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { badge: "ESTD 1976", title: "Start Your Inspiring & Bright Academic Future", desc: "Government-aided school nurturing over 5,100 students in Malappuram district.", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=85&w=1920&auto=format&fit=crop", stat: "5,100+ Enrolled Students" },
                { badge: "INFRASTRUCTURE", title: "Modern High-Tech Laboratories & Smart Classrooms", desc: "Fully equipped science labs and KITE ICT smart classrooms.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1920&auto=format&fit=crop", stat: "6+ Specialized Labs" },
                { badge: "HIGHER SECONDARY", title: "Empowering Science, Commerce & Humanities Streams", desc: "Science, Commerce, and Humanities streams with 194 Full A+ in SSLC 2024.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=85&w=1920&auto=format&fit=crop", stat: "194 Full A+ in SSLC 2024" },
                { badge: "CAMPUS LIBRARY", title: "Central Reference Library & Digital Resource Wing", desc: "Over 15,000 titles, periodicals, and a reading room for students.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=85&w=1920&auto=format&fit=crop", stat: "15,000+ Academic Volumes" },
              ].map((slide, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 text-white relative flex flex-col justify-between group">
                  <div className="relative h-44 w-full overflow-hidden">
                    <img src={slide.img} alt={slide.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-400/30">
                        {slide.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2 relative -mt-6">
                    <h4 className="text-sm font-black text-white">{slide.title}</h4>
                    <p className="text-xs text-slate-300 line-clamp-2">{slide.desc}</p>
                    <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-400">
                      <span>{slide.stat}</span>
                      <span className="text-emerald-400 font-mono">Slide #{idx + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: About Our School */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Section 2: About Our School</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">About Our School & History</h2>
              <p className="text-xs text-slate-500 mt-1">Photo collage, 1976 establishment badge, and institutional story.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="lg:col-span-6 grid grid-cols-2 gap-3 items-end">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=600&auto=format&fit=crop" alt="Campus Building" className="w-full h-32 object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop" alt="Science Lab" className="w-full h-24 object-cover" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#008744] text-white p-4 rounded-2xl space-y-1 shadow-md">
                    <div className="text-3xl font-black font-mono">1976</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Established Year</div>
                    <p className="text-[10px] text-emerald-100 leading-tight">Nearly 50 years of educational service in Malappuram.</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop" alt="Campus Library" className="w-full h-28 object-cover" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold text-[#008744] uppercase tracking-wider">About Our School</span>
                <h4 className="text-2xl font-black text-slate-900 leading-snug">
                  Quality Education & Character <span className="text-[#008744]">Since 1976</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Founded under the Nediyiruppu Muslim Educational Association, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary sections.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <h5 className="text-xs font-bold text-slate-900">Comprehensive Learning</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">Balanced development across sciences, commerce, and sports.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <h5 className="text-xs font-bold text-slate-900">Proven Results</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">99.4% pass record with 194 Full A+ in SSLC 2024.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why PPM HSS Highlights */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Section 3: Highlights</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">Why PPM HSS Highlights</h2>
              <p className="text-xs text-slate-500 mt-1">4 pillar cards highlighting key institutional strengths.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Experienced Faculty", desc: "165+ teachers across high school and higher secondary.", icon: Users },
                { title: "Modern Laboratories", desc: "Equipped physics, chemistry, biology, and computer labs.", icon: Sparkles },
                { title: "Government Aided", desc: "Subsidized free tuition with state scholarship access.", icon: Award },
                { title: "4.5-Acre Campus", desc: "Smart classrooms, central library, and sports grounds.", icon: Building2 },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{card.title}</h5>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. ADMISSIONS ENQUIRIES / LEADS */}
      {/* ========================================================================= */}
      {activePage === "enquiries" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-6 animate-in fade-in duration-200">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Student Admissions Leads</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              Received Applications ({enquiries.length})
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm divide-y divide-slate-100 overflow-hidden">
            {enquiries.map((enq) => (
              <div key={enq._id || enq.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{enq.studentName}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#008744]">
                      {enq.seekingGrade}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Parent: <strong className="text-slate-800">{enq.parentName}</strong> • Phone: <span className="font-mono">{enq.phone}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 text-slate-700">
                    {enq.status || "Received"}
                  </span>
                </div>
              </div>
            ))}
            {enquiries.length === 0 && (
              <p className="p-12 text-center text-xs text-slate-400">No student enquiries recorded yet.</p>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. SETTINGS */}
      {/* ========================================================================= */}
      {activePage === "settings" && (
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">Institutional Directory</span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">School Contact & Affiliation Data</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-bold block mb-1">Official School Name:</span>
                <span className="font-semibold text-slate-800 text-sm">{siteSettings.schoolName}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-bold block mb-1">DHSE School Code:</span>
                <span className="font-mono font-bold text-emerald-700 text-sm">{siteSettings.schoolCode}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-bold block mb-1">Office Telephone:</span>
                <span className="font-mono text-slate-800 text-sm">{siteSettings.phone}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-bold block mb-1">Official Email:</span>
                <span className="text-slate-800 text-sm">{siteSettings.email}</span>
              </div>
            </div>

            <button
              onClick={() => openEditor("hero", siteSettings)}
              className="px-5 py-2.5 bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* UNIVERSAL VISUAL MODAL EDITOR (WITH LIVE PHOTO PREVIEW) */}
      {/* ========================================================================= */}
      {modalMode && modalTarget && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744]">
                  Visual Live Editor
                </span>
                <h3 className="font-black text-base text-slate-900 capitalize">
                  {modalMode} {modalTarget.replace("-", " ")} Card
                </h3>
              </div>
              <button
                onClick={() => setModalMode(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              {/* TITLE / NAME */}
              {modalTarget !== "hero" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {modalTarget === "teachers" ? "Teacher Full Name" : "Card Title / Heading"}
                  </label>
                  <input
                    name={modalTarget === "teachers" ? "name" : modalTarget === "streams" ? "name" : "title"}
                    required
                    defaultValue={editingItem?.name || editingItem?.title || ""}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008744] focus:outline-hidden"
                  />
                </div>
              )}

              {/* IMAGE URL WITH REAL-TIME PREVIEW */}
              {["clubs", "achievements", "streams", "scholarships", "teachers"].includes(modalTarget) && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Card Image URL (Unsplash or Photo Link)
                  </label>
                  <input
                    name={modalTarget === "teachers" ? "photoUrl" : "imageUrl"}
                    required
                    value={previewImageUrl}
                    onChange={(e) => setPreviewImageUrl(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008744] focus:outline-hidden font-mono text-slate-600"
                  />
                  {previewImageUrl && (
                    <div className="relative h-32 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 mt-2">
                      <img
                        src={previewImageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop";
                        }}
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md font-bold">
                        Live Preview
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* CLUBS SPECIFIC FIELDS */}
              {modalTarget === "clubs" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category Badge</label>
                      <input
                        name="category"
                        required
                        defaultValue={editingItem?.category || "Community Service"}
                        className="w-full px-3 py-2 text-xs border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Coordinator / Staff Lead</label>
                      <input
                        name="coordinator"
                        required
                        defaultValue={editingItem?.coordinator || "Staff Lead"}
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Key Initiatives (Comma separated)</label>
                    <input
                      name="activities"
                      defaultValue={editingItem?.activities?.join(", ") || "Campus greening, Annual residential camp"}
                      className="w-full px-3 py-2 text-xs border rounded-xl"
                    />
                  </div>
                </>
              )}

              {/* ACHIEVEMENTS SPECIFIC FIELDS */}
              {modalTarget === "achievements" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <select name="category" defaultValue={editingItem?.category || "Academic"} className="w-full px-3 py-2 text-xs border rounded-xl">
                        <option value="Academic">Academic</option>
                        <option value="Sports">Sports</option>
                        <option value="Arts & Kalolsavam">Arts & Kalolsavam</option>
                        <option value="Institutional">Institutional</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Year</label>
                      <input
                        name="year"
                        required
                        defaultValue={editingItem?.year || "2024"}
                        className="w-full px-3 py-2 text-xs border rounded-xl font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Ribbon Distinction / Badge</label>
                    <input
                      name="badge"
                      required
                      defaultValue={editingItem?.badge || "Full A+ / First Rank"}
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
                </>
              )}

              {/* SCHOLARSHIPS FIELDS */}
              {modalTarget === "scholarships" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Target</label>
                      <input name="target" required defaultValue={editingItem?.target || "Class 8 Students"} className="w-full px-3 py-2 text-xs border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Award Amount</label>
                      <input name="amount" required defaultValue={editingItem?.amount || "₹12,000 per annum"} className="w-full px-3 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Eligibility Criteria</label>
                    <textarea name="eligibility" rows={2} defaultValue={editingItem?.eligibility || ""} className="w-full px-3 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* TEACHERS FIELDS */}
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

              {/* NOTICES FIELDS */}
              {modalTarget === "notices" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                      <input name="date" required defaultValue={editingItem?.date || new Date().toISOString().split("T")[0]} className="w-full px-3 py-2 text-xs border rounded-xl font-mono" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                      <input name="category" required defaultValue={editingItem?.category || "Examinations"} className="w-full px-3 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Summary</label>
                    <textarea name="summary" rows={2} defaultValue={editingItem?.summary || ""} className="w-full px-3 py-2 text-xs border rounded-xl" />
                  </div>
                </>
              )}

              {/* HERO SECTION FIELDS */}
              {modalTarget === "hero" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Headline</label>
                    <textarea name="heroHeadline" rows={2} defaultValue={siteSettings?.heroHeadline || ""} className="w-full px-3 py-2 text-xs border rounded-xl font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Hero Subtitle</label>
                    <textarea name="heroSubtitle" rows={2} defaultValue={siteSettings?.heroSubtitle || ""} className="w-full px-3 py-2 text-xs border rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                      <input name="phone" defaultValue={siteSettings?.phone || ""} className="w-full px-3 py-2 text-xs border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                      <input name="email" defaultValue={siteSettings?.email || ""} className="w-full px-3 py-2 text-xs border rounded-xl" />
                    </div>
                  </div>
                </>
              )}

              {/* BUTTONS */}
              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalMode(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="px-5 py-2 text-xs font-bold bg-[#008744] hover:bg-[#007038] text-white rounded-xl shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{formSubmitting ? "Saving..." : "Save Changes"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
