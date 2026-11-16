"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Phone,
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Plus,
  ShieldCheck,
  Calendar,
  MapPin,
  FlaskConical,
  TrendingUp,
  Scale,
  Building2,
  Quote,
  MessageSquare,
  User,
} from "lucide-react";
import {
  SCHOOL_INFO,
  ADMINISTRATION,
  STAFF_LIST,
  ACADEMIC_STREAMS,
} from "@/data/schoolData";

export default function HomeHighlights() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [departmentIndex, setDepartmentIndex] = useState(0);
  const [eventsIndex, setEventsIndex] = useState(0);

  // Departments List (Reference Image 1: Browse Our Department)
  const departments = [
    {
      title: "Science & Technology",
      desc: "Physics, Chemistry, Biology, and Computer Science with hi-tech laboratories and entrance coaching orientation.",
      icon: FlaskConical,
      link: "/academics",
    },
    {
      title: "Commerce & Accountancy",
      desc: "Business Studies, Accountancy, Economics, and Computer Applications with practical accounting workshops.",
      icon: TrendingUp,
      link: "/academics",
    },
    {
      title: "Humanities & Social Sciences",
      desc: "Sociology, History, Political Science, and English literature fostering public leadership and civil service foundation.",
      icon: Scale,
      link: "/academics",
    },
    {
      title: "High School Foundation",
      desc: "Comprehensive secondary education for Classes 8, 9, and 10 affiliated with Kerala State Board with 100% pass track record.",
      icon: GraduationCap,
      link: "/academics",
    },
  ];

  // Upcoming Events List (Reference Image 3: Our Upcoming Events)
  const upcomingEvents = [
    {
      title: "Plus One HSCAP Single-Window Career Guidance & Orientation",
      location: "PPM HSS Main Auditorium",
      date: "16 June, 2025",
      time: "10.00AM - 01.00PM",
      desc: "Comprehensive orientation seminar for SSLC pass students and parents on higher secondary stream selections and career roadmaps.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Annual Merit Day & SSLC Full A+ Scholar Felicitations",
      location: "Diamond Jubilee Hall, Campus",
      date: "05 July, 2025",
      time: "09.30AM - 01.30PM",
      desc: "Felicitating 194 Full A+ SSLC rank holders and Higher Secondary district toppers with cash awards and gold medals.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Inter-School Science Fair & Innovation Expo 'Sasthra'",
      location: "Senior Science Wing Labs",
      date: "12 August, 2025",
      time: "09.00AM - 04.00PM",
      desc: "Exhibition of working robotics models, renewable energy prototypes, and applied physics experiments open to all schools.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Testimonials List (Reference Image 4: What Our Students Say's)
  const studentTestimonials = [
    {
      name: "Muhammed Fahis",
      role: "SSLC Full A+ Topper",
      quote: "PPM HSS gave me the discipline, standard labs, and teacher mentorship that helped me score Full A+ and secure a top seat in Science.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Fathima Hiba",
      role: "Plus Two Science Scholar",
      quote: "The teachers in the higher secondary wing don't just teach the syllabus — they build critical analytical thinking and confidence for competitive exams.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Dr. Mohammed Ansar K.",
      role: "Alumni / Interventional Cardiologist",
      quote: "The moral uprightness, empathy, and scientific curiosity instilled in me at PPM HSS continue to guide my medical career at Aster MIMS.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Aparna K. Menon",
      role: "Alumni / Civil Services Officer",
      quote: "The debate societies, literary forums, and library at PPM HSS were my training ground for civil services. The school shaped my public perspective.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    },
  ];

  // Latest News & Blog Articles (Reference Image 2: Latest News & Blog)
  const blogPosts = [
    {
      title: "Science, Commerce, Or Humanities — Which Stream Is Best For You?",
      category: "Admissions Guidance",
      date: "May 13, 2025",
      author: "PPM HSS",
      comments: "0 Comments",
      desc: "A comprehensive guide analyzing syllabus difficulty, university career options, and entrance coaching requirements for secondary school students.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      link: "/news-events",
    },
    {
      title: "Top Skills Students Should Master Alongside Academic Studies",
      category: "Student Development",
      date: "May 13, 2025",
      author: "PPM HSS",
      comments: "3 Comments",
      desc: "How balancing digital literacy, public speaking, science fair projects, and youth clubs prepares students for competitive modern careers.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      link: "/news-events",
    },
    {
      title: "A Complete Guide To Plus One HSCAP Single-Window Admissions",
      category: "Admissions 2025",
      date: "May 13, 2025",
      author: "PPM HSS",
      comments: "0 Comments",
      desc: "Step-by-step guidance on document verification, bonus marks calculation, community quota preferences, and single-window seat allotment.",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop",
      link: "/admissions",
    },
  ];

  const keyTeachers = [
    {
      name: ADMINISTRATION.manager.name,
      role: "Manager & President",
      qualification: "Nediyiruppu MEA",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: ADMINISTRATION.principal.name,
      role: "Principal (Higher Secondary)",
      qualification: "M.Sc., M.Phil., B.Ed.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: ADMINISTRATION.headmaster.name,
      role: "Headmaster (High School)",
      qualification: "M.A., B.Ed., DSM",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Sri. P. Venugopalan",
      role: "Senior Faculty & Superintendent",
      qualification: "M.Sc., B.Ed., NET",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const galleryImages = [
    {
      title: "Hi-Tech Science Laboratories",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Kerala State Kalolsavam Winners",
      category: "Arts & Culture",
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Central Reference Library",
      category: "Academic Facilities",
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Annual Sports Meet Track Events",
      category: "Athletics",
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "NSS & Scouts Community Service",
      category: "Youth Leadership",
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Campus Independence Day Ceremony",
      category: "National Celebrations",
      url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="space-y-24 py-16">
      {/* ========================================================
          1. ABOUT US WITH GEOMETRIC PHOTO COLLAGE
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Geometric Photo Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 items-end">
              {/* Arched / Pill Tall Photo */}
              <div className="h-80 sm:h-96 rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
                  alt="PPM HSS Student"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Side Stack: Circle Photo + Rectangle */}
              <div className="space-y-4">
                {/* Circular Photo with Dashed Emerald Accent Ring */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-2 border-2 border-dashed border-[#008744]">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
                      alt="Classroom Discussions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Rounded Rectangle Photo */}
                <div className="h-44 sm:h-52 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                    alt="Teacher Mentorship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge with Emerald Trim */}
            <div className="absolute -bottom-6 left-4 sm:left-10 bg-white text-slate-900 rounded-2xl p-4 shadow-xl border-2 border-emerald-500 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-black text-slate-900">48+ Years</div>
                <div className="text-xs font-semibold text-[#008744]">Of Academic Distinction</div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>About Our School</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Our Education System <span className="text-[#008744]">Inspires You More.</span>
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Founded in 1976 under the Nediyiruppu MEA, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary wings.
            </p>

            {/* Feature Bullet Points with Emerald Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Holistic Education</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Balanced development spanning sciences, arts, sports, and social clubs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">State Board Honors</h4>
                  <p className="text-xs text-slate-500 mt-0.5">99.4% SSLC pass record with 194 Full A+ and DHSE State Top Ranks.</p>
                </div>
              </div>
            </div>

            {/* Highlight Quote Box with "99" */}
            <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
              <span className="absolute bottom-2 right-4 text-4xl font-serif font-black text-slate-300 pointer-events-none">
                99
              </span>
              <p className="text-xs text-slate-700 italic leading-relaxed pr-8">
                &ldquo;We believe every child is born with unique genius. Our responsibility as educators is to kindle that curiosity and guide them to lead with humility and distinction.&rdquo;
              </p>
              <div className="text-[11px] font-bold text-slate-900 mt-2">
                — {ADMINISTRATION.principal.name}, Principal
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/institute"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-700/25 transition-all"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="inline-flex items-center gap-3 text-xs font-bold text-slate-900 hover:text-[#008744]"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 text-[#008744] flex items-center justify-center shadow-xs">
                  <Phone className="w-4 h-4 text-[#008744]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Call Helpdesk</div>
                  <div className="text-xs font-extrabold text-slate-900">{SCHOOL_INFO.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BROWSE OUR DEPARTMENT (Reference Image: Eduka Department)
      ======================================================== */}
      <section className="bg-slate-50/70 border-y border-slate-200/90 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Section Header with Left/Right Arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Department</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Browse Our <span className="text-[#008744]">Department</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Specialized academic faculties tailored to empower students across sciences, commerce, humanities, and general schooling.
              </p>
            </div>

            {/* Circular Carousel Control Arrows (Eduka Style) */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setDepartmentIndex((prev) => (prev > 0 ? prev - 1 : departments.length - 1))}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#008744] hover:text-white hover:border-[#008744] shadow-sm flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous departments"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDepartmentIndex((prev) => (prev + 1) % departments.length)}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#008744] hover:text-white hover:border-[#008744] shadow-sm flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next departments"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4 Asymmetric Department Cards with Outline Rings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => {
              const IconComp = dept.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-sm hover:shadow-2xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Decorative Circular Outline Ring in Top Right (Eduka Signature) */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-4 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-110 transition-all pointer-events-none" />

                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all flex items-center justify-center shadow-xs border border-emerald-100">
                      <IconComp className="w-8 h-8" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {dept.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      href={dept.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#008744] transition-colors uppercase tracking-wider"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 pt-2">
            <span className="w-6 h-2 rounded-full bg-[#008744]" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ACADEMIC STREAMS / COURSES CARDS
      ======================================================== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Programs</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Let&apos;s Check Our <span className="text-[#008744]">Academic Streams</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Government-approved Higher Secondary combinations designed for aspiring doctors, engineers, chartered accountants, and civil servants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMIC_STREAMS.map((stream, idx) => (
              <div
                key={stream.code}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image with Floating Category Pill */}
                  <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                    <img
                      src={[
                        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
                      ][idx % 4]}
                      alt={stream.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#008744] text-white font-bold text-[10px] uppercase tracking-wider shadow-md">
                      Stream {stream.code}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-semibold text-[#008744]">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{stream.seats} Total Seats</span>
                      </span>
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {stream.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {stream.description}
                    </p>

                    <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 space-y-1">
                      <div><strong className="text-slate-800">Subjects:</strong> {stream.coreSubjects.slice(0, 3).join(", ")} + {stream.coreSubjects[3]}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/academics"
                    className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#008744] hover:text-white text-slate-900 text-xs font-bold transition-colors"
                  >
                    <span>View Stream Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHY CHOOSE US (LIGHT & PROFESSIONAL)
      ======================================================== */}
      <section className="bg-slate-50 border-y border-slate-200/90 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008744]" />
                <span>Why Choose PPM HSS</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                We Are Dedicated & <span className="text-[#008744]">Do Our Best</span> For Every Student.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                At PPM HSS Kottukkara, academic rigor is seamlessly balanced with modern digital classrooms, individual mentorship, and holistic career orientation.
              </p>

              {/* 4 Feature Boxes (Clean White Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-2xl p-5 flex items-center gap-3.5 text-slate-900 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-emerald-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Expert Teachers</h4>
                    <p className="text-[11px] text-slate-500">165+ seasoned instructors offering tailored coaching.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 flex items-center gap-3.5 text-slate-900 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-emerald-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Question Banks</h4>
                    <p className="text-[11px] text-slate-500">Free model exam papers & solved question banks.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 flex items-center gap-3.5 text-slate-900 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-emerald-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Smart Classrooms</h4>
                    <p className="text-[11px] text-slate-500">High-speed broadband and interactive whiteboards.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 flex items-center gap-3.5 text-slate-900 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-emerald-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Government Aid</h4>
                    <p className="text-[11px] text-slate-500">100% free tuition & state scholarship entitlements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Large Arched Photo with Emerald Accent Border */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative p-3 rounded-t-[140px] rounded-b-3xl border-4 border-[#008744] shadow-2xl bg-white">
                <div className="w-full max-w-md h-[420px] sm:h-[460px] rounded-t-[130px] rounded-b-2xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                    alt="PPM HSS Students on Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. STATS COUNTER BAR (LIGHT & CLEAN THEME)
      ======================================================== */}
      <section className="relative py-16 bg-white border-y border-slate-200/80 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-[#008744] flex items-center justify-center shadow-xs transform -rotate-3 hover:rotate-0 hover:bg-[#008744] hover:text-white transition-all">
                <BookOpen className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight font-mono text-slate-900">
                {SCHOOL_INFO.stats[0]?.value || "1976"}
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Year Established
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-[#008744] flex items-center justify-center shadow-xs transform rotate-3 hover:rotate-0 hover:bg-[#008744] hover:text-white transition-all">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight font-mono text-slate-900">
                {SCHOOL_INFO.stats[1]?.value}+
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Enrolled Students
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-[#008744] flex items-center justify-center shadow-xs transform -rotate-3 hover:rotate-0 hover:bg-[#008744] hover:text-white transition-all">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight font-mono text-slate-900">
                {SCHOOL_INFO.stats[2]?.value}+
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Skilled Educators
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-[#008744] flex items-center justify-center shadow-xs transform rotate-3 hover:rotate-0 hover:bg-[#008744] hover:text-white transition-all">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight font-mono text-slate-900">
                {SCHOOL_INFO.stats[4]?.value}%
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Board Pass Benchmark
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. OUR UPCOMING EVENTS (Reference Image 3)
      ======================================================== */}
      <section className="bg-slate-50/70 border-b border-slate-200/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
              <Calendar className="w-3.5 h-3.5" />
              <span>Events</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Upcoming <span className="text-[#008744]">Events</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Stay connected with academic milestones, career orientation camps, and campus celebrations.
            </p>
          </div>

          {/* 3 Event Cards (Matching Reference Image 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Location Header */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                    <span>{evt.location}</span>
                  </div>

                  {/* Event Thumbnail */}
                  <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Date & Time Row */}
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-700 pt-1">
                    <span className="flex items-center gap-1 text-[#008744]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{evt.time}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 hover:text-[#008744] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/news-events"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline"
                  >
                    <span>Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CAMPUS VIDEO TOUR HIGHLIGHT
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                <Play className="w-3.5 h-3.5" />
                <span>Campus Documentary</span>
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Let&apos;s Check Our <span className="text-[#008744]">Campus Facilities</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Experience our 4.5-acre green campus, digital laboratories, 1,200-seat auditorium, and vibrant co-curricular activities.
              </p>
              <div className="pt-2">
                <Link
                  href="/campus-life"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Large Rounded Pill Video Image with Pulsing Play Button */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden cursor-pointer shadow-xl group border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="Video Tour Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#008744] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. TEACHERS / LEADERSHIP SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <Users className="w-3.5 h-3.5" />
            <span>Our Faculty</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Meet With Our <span className="text-[#008744]">Teachers & Leaders</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Guided by dedicated academicians, administrators, and mentors committed to student excellence.
          </p>
        </div>

        {/* 4 Teacher Cards with Curved Top and Floating Share Icon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyTeachers.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all group relative flex flex-col justify-between"
            >
              <div>
                {/* Photo with Curved Framing */}
                <div className="h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                    {teacher.name}
                  </h3>
                  <div className="text-xs font-bold text-[#008744] uppercase tracking-wider">
                    {teacher.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {teacher.qualification}
                  </div>
                </div>
              </div>

              {/* Floating Bottom Right Button */}
              <div className="p-5 pt-0 flex justify-end">
                <Link
                  href="/teachers"
                  className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#008744] group-hover:text-white text-slate-700 flex items-center justify-center shadow-xs transition-colors"
                  title="View Profile"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Teachers Button */}
        <div className="text-center pt-2">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-[#008744] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <span>View All 165+ Faculty & Teachers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          9. WHAT OUR STUDENTS SAY'S (Reference Image 4)
      ======================================================== */}
      <section className="bg-slate-50/70 border-y border-slate-200/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
              <Quote className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our Students <span className="text-[#008744]">Say&apos;s</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hear directly from our toppers, current scholars, and distinguished global alumni.
            </p>
          </div>

          {/* 4 Testimonial Cards (Matching Reference Image 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Top Quote Badge '99' */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-amber-500 text-white font-serif font-black text-sm flex items-center justify-center shadow-md">
                  99
                </div>

                <div className="space-y-4">
                  {/* 5 Yellow Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-600 leading-relaxed italic pr-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Student / Alumni Profile */}
                <div className="flex items-center gap-3 pt-5 mt-4 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full p-0.5 border-2 border-dashed border-[#008744]">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] font-semibold text-[#008744]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. LATEST NEWS & BLOG (Reference Image 2)
      ======================================================== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Our Blog</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Latest News & <span className="text-[#008744]">Blog</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Insights, admission guides, and student empowerment articles from our academic faculty.
            </p>
          </div>

          {/* 3 Blog Cards (Matching Reference Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Date Badge */}
                  <div className="h-52 w-full relative overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500 text-white font-bold text-[11px] shadow-md flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    {/* Meta Row */}
                    <div className="flex items-center gap-4 text-[11px] text-slate-500 font-semibold">
                      <span className="flex items-center gap-1 text-[#008744]">
                        <User className="w-3 h-3" />
                        <span>By {post.author}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MessageSquare className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="p-6 pt-0">
                  <Link
                    href={post.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          11. PHOTO GALLERY PREVIEW
      ======================================================== */}
      <section className="bg-slate-50 border-t border-slate-200/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus Moments</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Photo <span className="text-[#008744]">Gallery</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Capturing memorable academic triumphs, youth arts festivals, sports victories, and laboratory discoveries.
            </p>
          </div>

          {/* Gallery Grid with Emerald Hover Overlay & White "+" Icon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <Link
                key={i}
                href="/campus-life"
                className="group relative h-60 rounded-3xl overflow-hidden shadow-md block border-2 border-white"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Emerald Tint Hover Overlay with Plus Icon */}
                <div className="absolute inset-0 bg-[#008744]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-2 transform scale-75 group-hover:scale-100 transition-transform">
                    <Plus className="w-6 h-6 stroke-[3]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">
                    {img.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                    {img.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-800/20 transition-all"
            >
              <span>View Full Campus Gallery</span>
              <ArrowRight className="w-4 h-4" />
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
                PPM HSS Kottukkara — Institutional Documentary
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
                <p className="font-bold text-sm">PPM HSS Official Documentary & Annual Day Coverage</p>
                <p className="text-slate-400 text-xs">Available on our official YouTube channel @ppmhsskottukkara</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
