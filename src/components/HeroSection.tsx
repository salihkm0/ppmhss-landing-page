"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Compass,
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      badge: "PPM HSS KOTTUKKARA • ESTD 1976",
      titlePart1: "Start Your",
      titleHighlight: "Inspiring & Bright",
      titlePart2: "Academic Future",
      desc: "Panakkad Pookkoya Thangal Memorial Higher Secondary School (School Code: 11024). Nurturing academic distinction, moral integrity, and community leadership in Malappuram district for nearly 50 years.",
      image:
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=85&w=1920&auto=format&fit=crop",
      caption: "4.5-Acre Lush Green Campus & Modern Academic Infrastructure",
      tag: "Academic Excellence",
      statValue: "4,600+",
      statLabel: "Enrolled Students",
    },
    {
      badge: "STATE-OF-THE-ART INFRASTRUCTURE",
      titlePart1: "Modern High-Tech",
      titleHighlight: "Laboratories & Smart",
      titlePart2: "Classrooms",
      desc: "Fully equipped Physics, Chemistry, Biology, and Computer Science laboratories with interactive smart boards and high-speed broadband network supporting experiential learning.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1920&auto=format&fit=crop",
      caption: "Advanced Science Laboratories & KITE ICT Smart Classrooms",
      tag: "Research & Science",
      statValue: "6+",
      statLabel: "Specialized Labs",
    },
    {
      badge: "COMPREHENSIVE HIGHER SECONDARY",
      titlePart1: "Empowering",
      titleHighlight: "Science, Commerce &",
      titlePart2: "Humanities Streams",
      desc: "Government-approved Higher Secondary curriculum with expert faculty, career guidance clinics, entrance exam coaching, and stellar SSLC & Plus Two board exam pass records.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=85&w=1920&auto=format&fit=crop",
      caption: "165+ Accredited Educators & Personalized Student Mentorship",
      tag: "DHSE Code: 11024",
      statValue: "194",
      statLabel: "Full A+ in SSLC 2024",
    },
    {
      badge: "KNOWLEDGE & CHARACTER",
      titlePart1: "Central Reference",
      titleHighlight: "Library & Digital",
      titlePart2: "Resource Wing",
      desc: "Home to over 15,000 academic titles, science journals, periodicals, and a 120-seat silent reading room fostering deep inquiry, critical thought, and lifelong reading habits.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=85&w=1920&auto=format&fit=crop",
      caption: "15,000+ Volume Central Scholastic Library & Digital Reading Room",
      tag: "Resource Hub",
      statValue: "15,000+",
      statLabel: "Academic Volumes",
    },
  ];

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto advance slide every 6 seconds when not paused by hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  return (
    <div className="relative bg-slate-950 overflow-hidden">
      {/* ========================================================
          1. FULL-WIDTH CINEMATIC BACKGROUND IMAGE SLIDER HERO
      ======================================================== */}
      <section
        className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center pt-8 pb-24 sm:pb-28 lg:pb-36"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image Carousel with Smooth Cross-Fade */}
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentSlide === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${s.image})`,
            }}
          />
        ))}

        {/* Multi-Layer Cinematic Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/40 pointer-events-none" />

        {/* Subtle Emerald Dot Grid Accent Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#008744_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

        {/* Main Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Hero Typography & CTAs */}
            <div className="lg:col-span-8 space-y-6 text-white">
              {/* Category Eyebrow Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008744]/35 text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-400/40 backdrop-blur-md shadow-sm">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>{slide.badge}</span>
                </div>
              </div>

              {/* Headline with Dual-Color Highlighting */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md max-w-3xl">
                {slide.titlePart1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 underline decoration-emerald-400/40 decoration-4 underline-offset-8">
                  {slide.titleHighlight}
                </span>{" "}
                {slide.titlePart2}
              </h1>

              {/* Narrative Subtitle Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
                {slide.desc}
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 hover:shadow-emerald-700/40 transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
                >
                  <span>Explore Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-emerald-400 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all transform hover:-translate-y-0.5 shadow-sm"
                >
                  <span>Academic Streams</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>

              {/* Trust Indicators in Frosted Glass Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Government-Aided Institution</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>194 Full A+ in SSLC 2024</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>4.5 Acre Green Campus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Glassmorphic Feature Showcase Card */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white shadow-2xl space-y-5 relative overflow-hidden group">
                {/* Decorative Ambient Radial Glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top Pill */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{slide.tag}</span>
                  </span>
                  <span className="font-mono text-xs text-slate-300 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                    Slide 0{currentSlide + 1} / 0{slides.length}
                  </span>
                </div>

                {/* Stat Metric */}
                <div className="space-y-1">
                  <div className="text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                      {slide.statValue}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {slide.statLabel}
                  </div>
                </div>

                {/* Slide Caption Narrative */}
                <p className="text-xs text-slate-200 leading-relaxed border-t border-white/15 pt-4">
                  {slide.caption}
                </p>

                {/* Quick Slide Jump Tabs */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Campus Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {slides.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`px-3 py-2 rounded-xl text-left text-xs transition-all cursor-pointer border ${
                          currentSlide === idx
                            ? "bg-[#008744] text-white border-emerald-400 font-bold shadow-md"
                            : "bg-white/5 hover:bg-white/15 text-slate-300 border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="truncate font-semibold">{s.tag}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Arrow Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950/60 hover:bg-[#008744] text-white border border-white/20 hover:border-emerald-400 shadow-xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950/60 hover:bg-[#008744] text-white border border-white/20 hover:border-emerald-400 shadow-xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Pagination Progress Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx
                  ? "w-8 sm:w-10 bg-gradient-to-r from-[#008744] to-emerald-400 shadow-sm"
                  : "w-2.5 sm:w-3 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Emerald Gradient Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008744] via-emerald-400 to-teal-300 z-20" />
      </section>

      {/* ========================================================
          2. 4 FLOATING ASYMMETRIC CARDS (EDUKA STYLE OVERLAP)
      ======================================================== */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 -mt-14 sm:-mt-16 lg:-mt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 01: Scholarship Facility */}
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            {/* Outline ring watermark */}
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-110 transition-all pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              01
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Scholarship Facility
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Extensive financial aid including NMMS, USS, Post-Matric Minority, and PPM Endowed Merit Awards.
                </p>
              </div>
            </div>
            <Link
              href="/academics"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 02: Skilled Lecturers */}
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-110 transition-all pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              02
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Skilled Lecturers
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  165+ accredited post-graduate educators with extensive state curriculum evaluation experience.
                </p>
              </div>
            </div>
            <Link
              href="/teachers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Meet Faculty</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 03: Book Library Facility */}
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-110 transition-all pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              03
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Reference Library
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Over 15,000 academic titles, science journals, periodicals, and a digital study repository.
                </p>
              </div>
            </div>
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Explore Library</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 04: Aided Education */}
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-110 transition-all pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              04
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Government-Aided
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Completely government-subsidized tuition fee structure ensuring top-tier education accessible to all.
                </p>
              </div>
            </div>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Admission Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
