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
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "PPM HSS KOTTUKKARA • ESTD 1976",
      titlePart1: "Start Your",
      titleHighlight: "Inspiring & Bright",
      titlePart2: "Academic Future",
      desc: "Panakkad Pookkoya Thangal Memorial Higher Secondary School (School Code: 11024). Nurturing academic distinction, moral integrity, and community leadership in Malappuram district for nearly 50 years.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      caption: "Interactive Learning & Holistic Student Mentorship",
      tag: "Academic Excellence",
    },
    {
      badge: "STATE-OF-THE-ART INFRASTRUCTURE",
      titlePart1: "Modern High-Tech",
      titleHighlight: "Laboratories & Smart",
      titlePart2: "Classrooms",
      desc: "Fully equipped Physics, Chemistry, Biology, and Computer Science laboratories with interactive smart boards and high-speed broadband network supporting experiential learning.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      caption: "Advanced Science Laboratory & Computing Center",
      tag: "Research & Science",
    },
    {
      badge: "COMPREHENSIVE HIGHER SECONDARY",
      titlePart1: "Empowering",
      titleHighlight: "Science, Commerce &",
      titlePart2: "Humanities Streams",
      desc: "Government-approved Higher Secondary curriculum with expert faculty, career guidance clinics, entrance exam training, and stellar SSLC & Plus Two board exam pass records.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
      caption: "Classroom Mentorship & Student Guidance Sessions",
      tag: "Higher Secondary",
    },
    {
      badge: "KNOWLEDGE & CHARACTER",
      titlePart1: "Central Reference",
      titleHighlight: "Library & Digital",
      titlePart2: "Resource Wing",
      desc: "Home to over 15,000 academic titles, science journals, periodicals, and a 120-seat silent reading room fostering deep inquiry, critical thought, and lifelong reading habits.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
      caption: "15,000+ Volume Central Library & Study Wing",
      tag: "Resource Hub",
    },
  ];

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto advance slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-gradient-to-b from-white via-slate-50/80 to-emerald-50/20 pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-200/80 overflow-hidden">
      {/* Main 2-Column Hero Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Clean Copy (Light Theme) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#008744] text-xs font-bold tracking-wider uppercase shadow-xs">
              <GraduationCap className="w-4 h-4 text-[#008744]" />
              <span>{slide.badge}</span>
            </div>

            {/* Headline with Dual-Color Styling */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {slide.titlePart1}{" "}
              <span className="text-[#008744] underline decoration-emerald-500/30 decoration-4 underline-offset-8">
                {slide.titleHighlight}
              </span>{" "}
              {slide.titlePart2}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {slide.desc}
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-800/20 hover:shadow-emerald-800/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-[#008744] hover:text-[#008744] font-bold text-xs uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>Academic Streams</span>
                <ArrowRight className="w-4 h-4 text-[#008744]" />
              </Link>
            </div>

            {/* Trust Indicators / Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008744]" />
                <span>Government-Aided Institution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008744]" />
                <span>194 Full A+ in SSLC 2024</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008744]" />
                <span>4.5 Acre Green Campus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent High-Resolution Campus Image Slider */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              {/* Active Image (100% Bright, Crisp, Vivid) */}
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Subtle Bottom Vignette for Caption Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

              {/* Floating Tag Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#008744] font-bold text-xs shadow-md border border-slate-100 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#008744]" />
                  <span>{slide.tag}</span>
                </span>
              </div>

              {/* Prev/Next Buttons Overlaid on the Photo */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#008744] text-slate-800 hover:text-white shadow-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#008744] text-slate-800 hover:text-white shadow-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Caption and Pagination Dots */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-300">
                    Campus Feature {currentSlide + 1} of {slides.length}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white drop-shadow-sm">
                    {slide.caption}
                  </h4>
                </div>

                {/* Slide Indicator Dots */}
                <div className="flex items-center gap-1.5 self-start sm:self-auto">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx
                          ? "w-7 bg-[#008744]"
                          : "w-2 bg-white/70 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Floating Service Badge */}
            <div className="absolute -bottom-5 left-2 sm:left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">Recognized Aided School</div>
                <div className="text-[11px] font-semibold text-emerald-700">Kerala General Education Dept.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Floating Asymmetric Cards (Eduka Style: Clean White / Light Slate Theme) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 01: Scholarship Facility */}
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
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
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
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
              href="/academics"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Meet Faculty</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 03: Book Library Facility */}
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
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
          <div className="bg-white rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
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
