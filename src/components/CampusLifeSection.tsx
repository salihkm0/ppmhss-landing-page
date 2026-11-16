"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Palette,
  Users,
  Trophy,
  Image as ImageIcon,
  Video,
  Award,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Plus,
  Play,
  X,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { CLUBS_DATA, ACHIEVEMENTS_LIST } from "@/data/schoolData";

export default function CampusLifeSection() {
  const [activeTab, setActiveTab] = useState<"facilities" | "cocurriculars" | "achievements" | "gallery">("facilities");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; category: string } | null>(null);

  const facilities = [
    {
      title: "Central Reference Library & Reading Room",
      desc: "Houses over 15,000 academic volumes, national journals, Malayalam periodicals, and automated digital catalogue with a 120-seat quiet study hall.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
      tag: "Academic Hub",
    },
    {
      title: "Hi-Tech Digital Classrooms",
      desc: "All high school and higher secondary classrooms are outfitted with ceiling interactive projectors, smart digital whiteboards, and high-speed broadband network.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      tag: "Learning Tech",
    },
    {
      title: "Senior Physics, Chemistry & Biology Labs",
      desc: "Dedicated senior secondary laboratories equipped with analytical balances, spectrophotometers, compound microscopes, and comprehensive safety ventilation.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      tag: "Science Wing",
    },
    {
      title: "Computer Science & IT Center",
      desc: "Dual air-conditioned computer labs with 120+ modern workstations running Ubuntu Linux, Python programming IDEs, accounting software, and high-speed fibre optic internet.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      tag: "Computing",
    },
    {
      title: "Main Campus Auditorium & Seminar Hall",
      desc: "Spacious 1,200-capacity auditorium hosting youth festivals, public assemblies, seminars, carrier exhibitions, and academic convocation ceremonies.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      tag: "Cultural Center",
    },
    {
      title: "Athletic Grounds & Sports Complex",
      desc: "Standard 200m track, football field, volleyball court, badminton arenas, and equipment locker room for regular physical education and training camps.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      tag: "Athletics",
    },
    {
      title: "School Transport Fleet",
      desc: "A fleet of 8 GPS-enabled institutional buses connecting Kondotty, Morayur, Mongam, Nediyiruppu, Calicut Airport road, and adjacent towns.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      tag: "Safe Transit",
    },
    {
      title: "Hygienic Canteen & Pure RO Water Plants",
      desc: "FSSAI-compliant cafeteria serving nutritious vegetarian refreshments and hot lunches, complemented by multistage RO drinking water dispensaries on every floor.",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800&auto=format&fit=crop",
      tag: "Student Wellness",
    },
  ];

  const galleryImages = [
    {
      title: "Annual Sports Meet Track & Field Finals 2024",
      category: "Sports",
      year: "2024",
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "School Troupe at Kerala State Kalolsavam",
      category: "Arts",
      year: "2024",
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Science & Robotics Project Exposition 'Invento'",
      category: "Academic",
      year: "2024",
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "NSS Special 7-Day Residential Village Outreach Camp",
      category: "Social Service",
      year: "2024",
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "78th Independence Day Ceremonial Parade & March Past",
      category: "National Celebrations",
      year: "2024",
      url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "New Senior Secondary Science Laboratory Wing",
      category: "Infrastructure",
      year: "2023",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const galleryCategories = ["All", "Sports", "Arts", "Academic", "Social Service", "Infrastructure"];

  const filteredGallery = galleryImages.filter((img) =>
    selectedGalleryCategory === "All" ? true : img.category === selectedGalleryCategory
  );

  return (
    <section id="campus-life" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Heading */}
        <div className="border-b border-slate-200 pb-6 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Student Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Campus Life & <span className="text-[#008744]">Holistic Activities</span>
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Co-curricular activities, athletics, arts, and student clubs on our 4.5-acre campus.
          </p>

          {/* Sub Navigation Pill Tabs */}
          <div className="flex flex-wrap gap-2 pt-3">
            {[
              { id: "facilities", label: "6.1 Campus Facilities" },
              { id: "cocurriculars", label: "6.2 Clubs, Arts & Sports" },
              { id: "achievements", label: "6.3 Hall of Achievements" },
              { id: "gallery", label: "6.4 Photo & Media Gallery" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Facilities */}
        {activeTab === "facilities" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
                >
                  {/* Photo with curved top framing */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#008744] text-white text-[11px] font-bold shadow-md">
                      {fac.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                        {fac.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0b5446]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Full Access for Enrolled Students</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Co-Curriculars, Clubs & Sports */}
        {activeTab === "cocurriculars" && (
          <div className="space-y-12">
            {/* Clubs Grid */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase text-[#008744]">Active Societies</span>
                <h3 className="text-2xl font-black text-slate-900">
                  Student Clubs & <span className="text-[#008744]">Empowerment Wings</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLUBS_DATA.map((club, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl border border-slate-200/90 p-6 hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-2xl bg-emerald-50/60 text-[#008744] flex items-center justify-center font-bold text-sm">
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          {club.category}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900">
                        {club.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {club.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-bold text-slate-700">Flagship Initiatives:</div>
                        <ul className="space-y-1">
                          {club.activities.map((act, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#008744] mt-1.5 shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Staff Coordinator:</span>
                      <span className="font-bold text-slate-900">{club.coordinator}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arts & Sports Two-Column Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Arts & Cultural Spectrum */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Cultural Wing</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Performing Arts & <span className="text-[#008744]">Kalolsavam</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  PPM HSS has nurtured award-winning talent across Kerala School Kalolsavam competitions in Oppana,
                  Mappilappattu, Duffmuttu, classical dance, Elocution (English, Malayalam, Arabic, Urdu), and dramatic arts.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Daily rehearsal coaching by certified masters prior to sub-district contests",
                    "Dedicated green rooms and costumes repository in the fine arts block",
                    "Annual 3-day Intra-School Cultural Extravaganza 'Sargotsav'",
                    "Continuous A-Grade winners in District & State Youth Festivals for 12 consecutive years",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sports & Physical Education */}
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#008744]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008744]/20 text-emerald-300 text-xs font-bold uppercase">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Athletic Excellence</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Sports, Games & <span className="text-emerald-400">Physical Training</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Under the supervision of our Physical Education Directors, our athletes excel in district and state
                    football, volleyball, shuttle badminton, and track and field championships.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-black text-emerald-400">03</div>
                      <div className="text-xs font-semibold text-white mt-1">Full-Time Coaches</div>
                      <div className="text-[11px] text-slate-300">Football, Volleyball, Athletics</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-black text-emerald-400">30+</div>
                      <div className="text-xs font-semibold text-white mt-1">State Level Players</div>
                      <div className="text-[11px] text-slate-300">Trained in the last 5 years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Achievements */}
        {activeTab === "achievements" && (
          <div className="space-y-10">
            {/* Top Stat Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "194", label: "Full A+ in SSLC 2024", sub: "School historic high record" },
                { number: "99.4%", label: "SSLC Overall Pass", sub: "District top performing aided school" },
                { number: "94.8%", label: "Plus Two Pass Rate", sub: "Combined Science, Commerce, Hum." },
                { number: "12+", label: "State Kalolsavam Prizes", sub: "A-Grade state laureates in 2024" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#008744] text-white rounded-3xl p-6 shadow-lg shadow-emerald-900/20 text-center space-y-1"
                >
                  <div className="text-4xl font-black">{stat.number}</div>
                  <div className="text-sm font-bold">{stat.label}</div>
                  <div className="text-xs text-emerald-100">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Hall of Fame List */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase text-[#008744]">Excellence Chronicle</span>
                <h3 className="text-2xl font-black text-slate-900">
                  Recent Triumphs & <span className="text-[#008744]">Distinctions</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACHIEVEMENTS_LIST.map((ach) => (
                  <div
                    key={ach.id}
                    className="bg-white rounded-3xl border border-slate-200/90 p-6 hover:shadow-xl hover:border-emerald-300 transition-all space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                          {ach.category}
                        </span>
                        <span className="text-xs font-bold text-slate-400">{ach.year}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0b5446]">
                      <Award className="w-4 h-4 text-[#008744] shrink-0" />
                      <span>{ach.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Photo & Media Gallery */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGalleryCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    selectedGalleryCategory === cat
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid (Eduka Reference Hover Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(item)}
                  className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#008744] text-white text-xs font-bold shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Floating Plus Button (Eduka Signature) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#008744] text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Plus className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-[11px] font-bold text-emerald-300">{item.year} Album</div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-200 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Dedicated Gallery Page */}
            <div className="text-center pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-800/20 transition-all"
              >
                <span>View Complete Campus Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
              <div
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4"
                onClick={() => setLightboxImage(null)}
              >
                <div
                  className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 p-6 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#008744] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="h-96 rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={lightboxImage.url}
                      alt={lightboxImage.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                      {lightboxImage.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">
                      {lightboxImage.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
