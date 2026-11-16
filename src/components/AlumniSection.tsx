"use client";

import React, { useState } from "react";
import {
  Users,
  Award,
  Globe,
  Quote,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Calendar,
  AlertCircle,
  MapPin,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { ALUMNI_TESTIMONIALS } from "@/data/schoolData";

export default function AlumniSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    batchYear: "",
    stream: "Science (Biology)",
    higherEducation: "",
    currentProfession: "",
    companyOrOrganization: "",
    location: "",
    email: "",
    phone: "",
    testimonial: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/alumni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage("Thank you! Your registration to the PPM HSS Global Alumni Network has been recorded successfully.");
        setFormData({
          fullName: "",
          batchYear: "",
          stream: "Science (Biology)",
          higherEducation: "",
          currentProfession: "",
          companyOrOrganization: "",
          location: "",
          email: "",
          phone: "",
          testimonial: "",
        });
      } else {
        setErrorMessage(data.message || "Failed to submit registration. Please verify your details.");
      }
    } catch {
      setErrorMessage("Network error during submission. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const chapters = [
    { name: "Kerala State Chapter", base: "Kondotty / Malappuram", members: "3,200+" },
    { name: "UAE Chapter", base: "Dubai & Abu Dhabi", members: "850+" },
    { name: "Saudi Arabia Chapter", base: "Riyadh & Jeddah", members: "620+" },
    { name: "Qatar Chapter", base: "Doha", members: "380+" },
    { name: "Bangalore Chapter", base: "Bengaluru, Karnataka", members: "450+" },
  ];

  return (
    <section id="alumni" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Lifelong Fellowship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            PPM HSS Global <span className="text-[#008744]">Alumni Association</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Uniting four decades of graduates across five continents. Dedicated to upholding the noble traditions of
            PPM HSS Kottukkara through student scholarships, career mentoring, and community welfare.
          </p>
        </div>

        {/* Association Overview & Chapter Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Overview & Mission of the Old Students Association (OSA)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Since the graduation of our inaugural secondary batch in the late 1970s, PPM HSS alumni have distinguished
                themselves across public governance, clinical medicine, technological research, corporate leadership,
                and creative arts. The Global Alumni Association coordinates international chapters, funds student merit endowments,
                sponsors smart classroom tech, and anchors professional coaching for current students.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="text-xs font-bold text-[#008744] uppercase">Annual Reunion</div>
                  <h4 className="text-sm font-bold text-slate-900">Grand Homecoming &apos;Ormakoottu&apos;</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Held annually during the Eid / April recess at the school auditorium, reuniting milestone batches,
                    honoring retired teachers, and announcing new academic welfare grants.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
                  <div className="text-xs font-bold text-emerald-600 uppercase">Giving Back</div>
                  <h4 className="text-sm font-bold text-slate-900">Alumni Merit Endowments</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Over ₹15 Lakhs awarded annually in scholarships, science equipment, medical aid funds, and higher
                    education entrance study kits for deserving students.
                  </p>
                </div>
              </div>

              {/* Alumni Meet Updates & Photos */}
              <div className="space-y-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#008744]">Moments of Nostalgia</span>
                    <h4 className="text-lg font-bold text-slate-900">Alumni Meet Updates & Photo Gallery</h4>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                    Recent Reunions
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Ormakoottu 2024 - Global Homecoming",
                      date: "April 14, 2024 • Main Auditorium",
                      desc: "Over 850 former students gathered for the grand annual reunion, honouring 14 retired teachers and announcing 50 new student merit scholarships.",
                      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
                    },
                    {
                      title: "Class of 1999 Silver Jubilee Reunion",
                      date: "December 28, 2024 • Campus Courtyard",
                      desc: "The 25th-year batch presented the school with an upgraded high-speed digital library workstation hub in memory of their silver jubilee.",
                      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop",
                    },
                    {
                      title: "Gulf Chapter Assembly - Dubai & Jeddah",
                      date: "November 10, 2024 • Dubai, UAE",
                      desc: "The UAE & Middle East chapters convened to establish an overseas student mentorship and career placement cell for graduating students.",
                      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
                    },
                    {
                      title: "Guruvandanam: Retired Teachers Tribute",
                      date: "September 05, 2024 (Teachers' Day)",
                      desc: "Former students from the 1980s and 1990s batches felicitated pioneering teachers whose tireless service laid the school's foundations.",
                      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
                    },
                  ].map((meet, idx) => (
                    <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all group">
                      <div className="relative h-36 w-full overflow-hidden">
                        <img
                          src={meet.img}
                          alt={meet.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-3 text-white text-[11px] font-bold drop-shadow-sm">
                          {meet.date}
                        </span>
                      </div>
                      <div className="p-3.5 space-y-1">
                        <h5 className="font-bold text-xs text-slate-900 group-hover:text-[#008744] transition-colors">
                          {meet.title}
                        </h5>
                        <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                          {meet.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-[#008744] uppercase">Voices of Pride</span>
                <h3 className="text-2xl font-black text-slate-900">Notable Alumni Profiles</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ALUMNI_TESTIMONIALS.map((t, idx) => {
                  const avatars = [
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
                  ];
                  const avatarUrl = avatars[idx % avatars.length];

                  return (
                    <div
                      key={t.id}
                      className="bg-white rounded-3xl border border-slate-200/90 p-6 hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                            {t.batch}
                          </span>
                          <Quote className="w-5 h-5 text-emerald-400" />
                        </div>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          &ldquo;{t.message}&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                        <img
                          src={avatarUrl}
                          alt={t.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#008744]"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                          <p className="text-[11px] text-slate-500">{t.designation} • {t.location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Active Chapters & Coordinator */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 rounded-3xl p-6 text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008744]/20 text-emerald-300 text-xs font-bold uppercase">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Chapters</span>
              </div>
              <h4 className="text-lg font-bold text-white">Active Regional Chapters</h4>

              <div className="space-y-2.5">
                {chapters.map((ch, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-2xl p-3 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{ch.name}</div>
                      <div className="text-[11px] text-slate-300">{ch.base}</div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#008744] text-white font-bold text-[10px]">
                      {ch.members}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinator Info */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 space-y-3">
              <h4 className="text-xs font-bold uppercase text-slate-500">Alumni Secretariat</h4>
              <div className="text-sm font-bold text-slate-900">PPM HSS OSA Office</div>
              <p className="text-xs text-slate-600">
                P.P.M. Higher Secondary School Campus, Kottukkara, Kondotty, Kerala - 673638
              </p>
              <div className="space-y-1 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#008744]" />
                  <span>+91 94471 22400 / 0483 2712240</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#008744]" />
                  <span>alumni@ppmhsskottukkara.edu.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Registration Form */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase text-[#008744]">Join the Registry</span>
            <h3 className="text-2xl font-black text-slate-900">
              Register into the <span className="text-[#008744]">PPM HSS Alumni Directory</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Connect with fellow alumni, receive invitations to annual reunions, and offer mentorship to current students.
            </p>
          </div>

          {successMessage && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="e.g. Dr. Muhammed Asif"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Year of Passing / Batch <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.batchYear}
                onChange={(e) => setFormData({ ...formData, batchYear: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="e.g. 2012 or 1998"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Stream Completed
              </label>
              <select
                value={formData.stream}
                onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
              >
                <option value="High School (SSLC)">High School (SSLC)</option>
                <option value="Science (Biology)">Plus Two Science (Biology)</option>
                <option value="Science (Computer Science)">Plus Two Science (Computer)</option>
                <option value="Commerce (Computer Application)">Plus Two Commerce</option>
                <option value="Humanities (Social Work)">Plus Two Humanities</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Higher Education Qualification
              </label>
              <input
                type="text"
                value={formData.higherEducation}
                onChange={(e) => setFormData({ ...formData, higherEducation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="e.g. MBBS / B.Tech / MBA / MA"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Current Profession / Designation
              </label>
              <input
                type="text"
                value={formData.currentProfession}
                onChange={(e) => setFormData({ ...formData, currentProfession: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="e.g. Senior Pediatrician / Software Lead"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Company / Institution / Organization
              </label>
              <input
                type="text"
                value={formData.companyOrOrganization}
                onChange={(e) => setFormData({ ...formData, companyOrOrganization: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="e.g. AIIMS New Delhi / TCS / Self Employed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Current City & Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="e.g. Dubai, UAE or Kozhikode, India"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                WhatsApp / Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="+91 98470 12345"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Fond Memory or Message to Your Alma Mater
              </label>
              <textarea
                rows={3}
                value={formData.testimonial}
                onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                placeholder="Share a short word of reflection or guidance for future generations..."
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-3 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Submitting Registration..." : "Submit Alumni Profile"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
