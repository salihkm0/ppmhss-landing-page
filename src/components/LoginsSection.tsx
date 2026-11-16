"use client";

import React, { useState } from "react";
import {
  LogIn,
  KeyRound,
  ShieldCheck,
  UserCheck,
  ExternalLink,
  GraduationCap,
  Users,
  CheckCircle2,
  AlertCircle,
  Building,
  HelpCircle,
  Phone,
  Mail,
  Lock,
} from "lucide-react";

export default function LoginsSection() {
  const [activePortal, setActivePortal] = useState<"teacher" | "student" | "parent" | "office">("teacher");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginStatus("error");
      return;
    }
    setLoginStatus("success");
    setTimeout(() => {
      alert(`Authenticated successfully to the ${activePortal.toUpperCase()} portal! Redirecting to internal dashboard.`);
      setLoginStatus(null);
    }, 800);
  };

  const portalDetails = {
    teacher: {
      title: "Faculty & Staff ERP Portal",
      desc: "Attendance marking, internal assessment score upload, lesson plan repository, and staff circulars.",
      usernameLabel: "PEN / Employee ID",
      placeholder: "e.g. PEN894210",
      externalUrl: "https://samagra.kite.kerala.gov.in/",
      externalName: "Launch Samagra KITE Portal",
    },
    student: {
      title: "Student Academic Dashboard",
      desc: "Terminal exam report cards, digital study materials, attendance percentage, and library circulation card.",
      usernameLabel: "Admission Number / Student ID",
      placeholder: "e.g. ADM2024-8841",
      externalUrl: "https://hscap.kerala.gov.in/",
      externalName: "Launch HSCAP Student Portal",
    },
    parent: {
      title: "Parent Progress Monitor",
      desc: "Student daily attendance log, terminal progress reports, teacher communication, and fee receipts.",
      usernameLabel: "Registered Mobile Number",
      placeholder: "e.g. 98471XXXXX",
      externalUrl: "#",
      externalName: "Launch Parent Portal",
    },
    office: {
      title: "Administrative Office & Accounts ERP",
      desc: "Student admissions registry, certificate generation, scholarship disbarment, and government reports.",
      usernameLabel: "Staff Administrative ID",
      placeholder: "e.g. ADM-OFFICE-01",
      externalUrl: "https://sampoorna.kite.kerala.gov.in/",
      externalName: "Launch Sampoorna KITE Portal",
    },
  };

  const current = portalDetails[activePortal];

  return (
    <section id="logins" className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Gateways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Institutional ERP & <span className="text-[#008744]">Login Portals</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Direct authenticated access for teachers, students, parents, and administrative staff to internal
            learning management systems and Kerala Department of General Education digital portals.
          </p>

          {/* Sub Navigation Pill Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "teacher", label: "Faculty & Staff Portal" },
              { id: "student", label: "Student Dashboard" },
              { id: "parent", label: "Parent Progress Monitor" },
              { id: "office", label: "Office & Sampoorna" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActivePortal(tab.id as typeof activePortal);
                  setLoginStatus(null);
                }}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activePortal === tab.id
                    ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50/60 hover:text-[#008744]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Login Container Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Form: Clean Eduka Rounded Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold text-[#008744] uppercase tracking-wider">
                Direct Sign-In
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                {current.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {current.desc}
              </p>
            </div>

            {loginStatus === "error" && (
              <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Please enter both credentials to authenticate.</span>
              </div>
            )}

            {loginStatus === "success" && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authentication successful! Launching workspace...</span>
              </div>
            )}

            <form onSubmit={handleDemoLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {current.usernameLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <UserCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={current.placeholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Please contact the school IT Helpdesk at support@ppmhsskottukkara.edu.in or call 0483 2712240 to reset your portal password.");
                    }}
                    className="text-[11px] font-bold text-[#008744] hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter confidential password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input type="checkbox" className="rounded-sm text-[#008744] focus:ring-[#008744]" />
                  <span>Remember my login on this device</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Log In to Dashboard</span>
              </button>
            </form>
          </div>

          {/* Right Column: External System Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008744]/20 text-emerald-300 text-xs font-bold uppercase">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>External Kerala Govt Portals</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Official Department Services
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                As an aided institution under DHSE Kerala, students and teachers frequently interface with official government web portals.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    name: "PPM HSS Management Portal (HS Login)",
                    sub: "Official School Administration, Attendance & Student Records",
                    url: "https://manage.ppmhsskottukkara.com/login",
                    highlight: true,
                  },
                  {
                    name: "Samagra KITE Kerala",
                    sub: "Digital Textbook Repository & Teacher Lesson Plans",
                    url: "https://samagra.kite.kerala.gov.in/",
                  },
                  {
                    name: "HSCAP Kerala",
                    sub: "Higher Secondary Centralised Allotment Process",
                    url: "https://hscap.kerala.gov.in/",
                  },
                  {
                    name: "Sampoorna KITE Portal",
                    sub: "School Management System & Student Records",
                    url: "https://sampoorna.kite.kerala.gov.in/",
                  },
                  {
                    name: "DHSE iExaMS Portal",
                    sub: "Higher Secondary Board Examination Administration",
                    url: "http://dhsekerala.gov.in/",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-3.5 rounded-2xl transition-all border group ${
                      item.highlight
                        ? "bg-[#008744]/30 border-emerald-400/50 hover:bg-[#008744]/40"
                        : "bg-white/10 hover:bg-white/20 border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-emerald-400">
                      <span>{item.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      {item.sub}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* IT Helpdesk */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900">Need Portal Credentials?</h4>
              <p className="text-slate-600">
                New admissions, parents needing registered SMS updates, or staff joining the faculty can visit the IT coordinator in the Computer Lab (First Floor).
              </p>
              <div className="pt-2 font-bold text-[#008744]">
                Helpline: +91 483 2712240 (Ext: 104)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
