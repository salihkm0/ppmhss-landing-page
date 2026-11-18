"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Calendar,
  MapPin,
  Building2,
  Quote,
} from "lucide-react";
import { SCHOOL_INFO, ADMINISTRATION } from "@/data/schoolData";

export default function HomeHighlights() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [aboutData, setAboutData] = useState({
    badge: "About Our School",
    headingPart1: "Quality Education & Character",
    headingHighlight: "Since 1976",
    estdYear: "1976",
    estdText: "Nearly 50 years of educational service in Malappuram district.",
    description: "Founded under the Nediyiruppu Muslim Educational Association, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary sections.",
    img1: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=600&auto=format&fit=crop",
    img2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    img3: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
    feature1Title: "Comprehensive Learning",
    feature1Desc: "Balanced development across sciences, commerce, arts, and sports.",
    feature2Title: "Proven Results",
    feature2Desc: "99.4% pass record with 194 Full A+ in SSLC 2024.",
  });

  const [whyData, setWhyData] = useState({
    badge: "Why PPM HSS",
    headingPart1: "Dedicated Mentorship &",
    headingHighlight: "Modern Campus",
    description: "We combine academic discipline with individual guidance, modern laboratories, and government-aided affordability.",
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
  });

  React.useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.homePageData?.aboutSchool) {
          setAboutData(data.data.homePageData.aboutSchool);
        }
        if (data?.data?.homePageData?.whySchool) {
          setWhyData(data.data.homePageData.whySchool);
        }
      })
      .catch(() => {});
  }, []);

  // Key Institutional Leadership
  const keyLeaders = [
    {
      name: ADMINISTRATION.manager.name,
      role: "Manager",
      title: "Nediyiruppu MEA",
      photo: ADMINISTRATION.manager.photo,
    },
    {
      name: ADMINISTRATION.secretary.name,
      role: "Secretary & Treasurer",
      title: "Nediyiruppu MEA",
      photo: ADMINISTRATION.secretary.photo,
    },
    {
      name: ADMINISTRATION.principal.name,
      role: "Principal",
      title: "Higher Secondary Wing",
      photo: ADMINISTRATION.principal.photo,
    },
    {
      name: ADMINISTRATION.headmaster.name,
      role: "Headmaster",
      title: "High School Wing",
      photo: ADMINISTRATION.headmaster.photo,
    },
  ];

  // Upcoming Events & Key Notices
  const upcomingEvents = [
    {
      title: "Plus One Admissions (HSCAP) Helpdesk",
      location: "Computer Lab Helpdesk",
      date: "16 June, 2025",
      time: "10:00 AM - 01:00 PM",
      desc: "Guidance on stream choices, option entry, and certificate verification for Class 10 graduates.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Annual Merit Day & Toppers Felicitations",
      location: "Main Campus Auditorium",
      date: "05 July, 2025",
      time: "09:30 AM - 01:30 PM",
      desc: "Honoring 194 Full A+ SSLC students and Higher Secondary stream toppers.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Science & Innovation Fair 'Invento'",
      location: "Science Wing Labs",
      date: "12 August, 2025",
      time: "09:00 AM - 04:00 PM",
      desc: "Exhibition of student working models in renewable energy, robotics, and applied sciences.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Testimonials / Alumni & Scholar Voices
  const testimonials = [
    {
      name: "Dr. Mohammed Ansar K.",
      role: "Alumni • Consultant Cardiologist, Aster MIMS",
      quote:
        "The strong scientific foundation and ethics of service instilled in me at PPM HSS continue to guide my medical practice.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Aparna K. Menon",
      role: "Alumni • Sub-Collector & IAS Officer",
      quote:
        "The debate clubs, literary forums, and library at PPM HSS were my training ground for civil services.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Jamsheer Puthenpeedika",
      role: "Alumni • Chartered Accountant, Dubai",
      quote:
        "Practical commerce education and dedicated teachers helped me build a global career in auditing.",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* ========================================================
          1. ABOUT US SUMMARY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Geometric Photo Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 items-end">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={aboutData.img1 || "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=600&auto=format&fit=crop"}
                    alt="PPM HSS Main Campus Building"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={aboutData.img2 || "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop"}
                    alt="Science Laboratory"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#008744] text-white p-6 rounded-3xl space-y-2 shadow-xl">
                  <div className="text-4xl font-black font-mono">{aboutData.estdYear || "1976"}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Established Year
                  </div>
                  <p className="text-[11px] text-emerald-100 leading-relaxed">
                    {aboutData.estdText || "Nearly 50 years of educational service in Malappuram district."}
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={aboutData.img3 || "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop"}
                    alt="Campus Library"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Concise Story & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{aboutData.badge || "About Our School"}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {aboutData.headingPart1 || "Quality Education & Character"}{" "}
                <span className="text-[#008744]">{aboutData.headingHighlight || "Since 1976"}</span>
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {aboutData.description || "Founded under the Nediyiruppu Muslim Educational Association, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary sections."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{aboutData.feature1Title || "Comprehensive Learning"}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{aboutData.feature1Desc || "Balanced development across sciences, commerce, arts, and sports."}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{aboutData.feature2Title || "Proven Results"}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{aboutData.feature2Desc || "99.4% pass record with 194 Full A+ in SSLC 2024."}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/institute"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Read Full History</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Campus Location</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. KEY HIGHLIGHTS & STATS BAR
      ======================================================== */}
      <section className="bg-slate-50 border-y border-slate-200/90 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008744]" />
                <span>{whyData.badge || "Why PPM HSS"}</span>
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {whyData.headingPart1 || "Dedicated Mentorship &"}{" "}
                <span className="text-[#008744]">{whyData.headingHighlight || "Modern Campus"}</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {whyData.description || "We combine academic discipline with individual guidance, modern laboratories, and government-aided affordability."}
              </p>
            </div>

            {/* Right: 4 Highlights Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(whyData.cards || []).map((card: any, idx: number) => {
                const icons = [Users, Sparkles, Award, Building2];
                const IconComponent = icons[idx % icons.length];
                return (
                  <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm border border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{card.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {SCHOOL_INFO.stats.slice(0, 4).map((st, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                  {st.value}
                  <span className="text-[#008744]">{st.suffix}</span>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. UPCOMING EVENTS & NOTICES
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              <Calendar className="w-3.5 h-3.5" />
              <span>Campus Calendar</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Events & <span className="text-[#008744]">Announcements</span>
            </h2>
          </div>
          <Link
            href="/news-events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline"
          >
            <span>View All Notices & Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((evt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg border border-slate-200 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="h-40 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1 text-[#008744] font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.date}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {evt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {evt.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/news-events"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. CAMPUS TOUR & DOCUMENTARY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Campus Life</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Explore Our Campus & Student Activities
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Take a look at life on campus — from state-of-the-art laboratories and sports meets to cultural arts festivals and social service camps.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/campus-life"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Campus Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
                >
                  <span>Photo Gallery</span>
                </Link>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden cursor-pointer shadow-xl group border-2 border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="Video Tour Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#008744] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ADMINISTRATIVE LEADERSHIP
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Administrative <span className="text-[#008744]">Leadership</span>
            </h2>
          </div>
          <Link
            href="/teachers"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline"
          >
            <span>Meet All Faculty</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyLeaders.map((ldr, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={ldr.photo}
                    alt={ldr.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">{ldr.name}</h3>
                  <div className="text-xs font-semibold text-[#008744]">{ldr.role}</div>
                  <div className="text-[11px] text-slate-500">{ldr.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. ALUMNI & STUDENT VOICES
      ======================================================== */}
      <section className="bg-slate-50 border-t border-slate-200/90 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Quote className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Voices of <span className="text-[#008744]">PPM HSS</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Reflections from our students and distinguished alumni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between space-y-4"
              >
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[10px] text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/alumni"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#008744] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Explore Alumni Network</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                PPM HSS Kottukkara — Campus Documentary
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Close ✕
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xs">
              <div className="text-center space-y-2 p-6">
                <Play className="w-12 h-12 text-[#008744] mx-auto fill-[#008744]" />
                <p className="font-bold text-sm">PPM HSS Official Documentary</p>
                <p className="text-slate-400 text-xs">Available on our official YouTube channel @ppmhsskottukkara</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
