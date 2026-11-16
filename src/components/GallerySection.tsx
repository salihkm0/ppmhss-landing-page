"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Camera,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Layers,
  Calendar,
  Tag,
  ArrowRight,
  Play,
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Labs" | "Arts" | "Sports" | "Events" | "Clubs";
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  year: string;
}

const GALLERY_DATA: GalleryItem[] = [
  // Campus & Infrastructure
  {
    id: "g1",
    title: "Central Academic Block & Green Campus",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop",
    caption: "4.5-acre lush green campus in Kottukkara, Kondotty.",
    year: "2024",
  },
  {
    id: "g2",
    title: "Central Scholastic Library & Reading Hall",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    caption: "15,000+ academic volumes and dedicated reading room.",
    year: "2024",
  },
  {
    id: "g3",
    title: "School Auditorium & Assembly Hall",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    caption: "Venue for school assemblies, cultural events, and seminars.",
    year: "2024",
  },
  {
    id: "g4",
    title: "Modern KITE ICT Smart Classrooms",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    caption: "Interactive smart boards and high-speed broadband in classrooms.",
    year: "2024",
  },

  // Labs & Science
  {
    id: "g5",
    title: "Higher Secondary Physics & Chemistry Lab",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    caption: "Fully equipped experimental stations for higher secondary science.",
    year: "2024",
  },
  {
    id: "g6",
    title: "Computer Science & Linux Networking Lab",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    caption: "GNU/Linux workstations supporting Python programming and ICT.",
    year: "2024",
  },
  {
    id: "g7",
    title: "Biology & Botany Microscope Lab",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop",
    caption: "Specimen analysis and microscope practical training.",
    year: "2024",
  },
  {
    id: "g8",
    title: "Annual Science Fair (Invento Expo)",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
    caption: "Student working models presented at the annual school science expo.",
    year: "2024",
  },

  // Arts & Kalolsavam
  {
    id: "g9",
    title: "Kerala School Kalolsavam Troupe",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    caption: "A Grade winners in Mappilappattu and folk events at State Kalolsavam.",
    year: "2024",
  },
  {
    id: "g10",
    title: "Traditional Dance & Stage Performance",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    caption: "Student cultural performances during the Annual School Youth Festival.",
    year: "2024",
  },
  {
    id: "g11",
    title: "Fine Arts & Pencil Drawing Contest",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    caption: "Art club students participating in the district painting competition.",
    year: "2023",
  },
  {
    id: "g12",
    title: "Literary Club Debates & Elocution",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    caption: "Inter-school debates organized by Sahitya Samajam.",
    year: "2024",
  },

  // Sports & Athletics
  {
    id: "g13",
    title: "Annual Sports Meet Track & Sprint Events",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    caption: "Track and field competitions during the annual athletic meet.",
    year: "2025",
  },
  {
    id: "g14",
    title: "District Champions Football Squad",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    caption: "PPM HSS football team celebrating victory at Malappuram district cup.",
    year: "2024",
  },
  {
    id: "g15",
    title: "Badminton & Indoor Athletics Tournament",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
    caption: "Inter-house indoor sports competitions held on school grounds.",
    year: "2024",
  },
  {
    id: "g16",
    title: "Annual Sports Day March Past",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    caption: "House march past parade led by the school band and NCC contingent.",
    year: "2025",
  },

  // Festivals & Celebrations
  {
    id: "g17",
    title: "Independence Day Flag Hoisting Ceremony",
    category: "Events",
    categoryLabel: "Events",
    imageUrl:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1200&auto=format&fit=crop",
    caption: "National celebrations on campus with staff, students, and guests.",
    year: "2024",
  },
  {
    id: "g18",
    title: "Annual Merit Day & Toppers Felicitations",
    category: "Events",
    categoryLabel: "Events",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    caption: "Honoring 194 Full A+ SSLC students and DHSE board toppers.",
    year: "2024",
  },
  {
    id: "g19",
    title: "PPM HSS Global Alumni Homecoming",
    category: "Events",
    categoryLabel: "Events",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    caption: "Ormakoottu reunion welcoming former students and retired educators.",
    year: "2024",
  },

  // Clubs & Student Life
  {
    id: "g20",
    title: "NSS & Scouts Community Outreach Drive",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    caption: "NSS Unit 045 students conducting community service in Nediyiruppu.",
    year: "2024",
  },
  {
    id: "g21",
    title: "Bharat Scouts & Guides Camping Jamboree",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    caption: "Weekend adventure camp and outdoor pioneering skills workshop.",
    year: "2024",
  },
  {
    id: "g22",
    title: "Mathrubhumi SEED Eco-Club Herbal Garden",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    caption: "Students maintaining the campus organic vegetable and medicinal garden.",
    year: "2024",
  },
  {
    id: "g23",
    title: "Peer Study & Group Mentoring Session",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    caption: "High school remedial study circle and collaborative revision clinic.",
    year: "2024",
  },
  {
    id: "g24",
    title: "School Library Reading Week (Vayana Varam)",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    caption: "Annual reading week activities and book reviews in the library.",
    year: "2024",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Photos" },
  { key: "Campus", label: "Campus & Infrastructure" },
  { key: "Labs", label: "Labs & Science" },
  { key: "Arts", label: "Arts & Kalolsavam" },
  { key: "Sports", label: "Sports & Athletics" },
  { key: "Events", label: "Events & Celebrations" },
  { key: "Clubs", label: "Clubs & Activities" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (activeItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItemIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveItemIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  const activeItem =
    activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* ========================================================
            1. SECTION INTRO & FILTER CONTROLS
        ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
              <Camera className="w-3.5 h-3.5" />
              <span>Campus Album</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Life at <span className="text-[#008744]">PPM HSS</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Moments from academic sessions, laboratories, sports meets, youth festivals, and campus celebrations.
            </p>
          </div>

          {/* Photo Count Badge */}
          <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shrink-0">
            Showing <span className="text-slate-900 font-bold">{filteredItems.length}</span> of{" "}
            <span className="text-slate-900 font-bold">{GALLERY_DATA.length}</span> Photos
          </div>
        </div>

        {/* Filter Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ========================================================
            2. PHOTO GALLERY GRID
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom & Overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge: Category & Year */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#008744] px-3 py-1 rounded-full shadow-xs border border-white/40">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono font-semibold bg-slate-900/80 text-white px-2.5 py-1 rounded-full backdrop-blur-md">
                    {item.year}
                  </span>
                </div>

                {/* Hover Overlay with Eye Icon */}
                <div className="absolute inset-0 bg-[#008744]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center mb-2 transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    Click to View
                  </span>
                </div>
              </div>

              {/* Caption Box */}
              <div className="p-5 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights Callout Banner */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden border border-slate-800">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Video Highlights</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Watch Annual Day & Campus Stories
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Catch student musical performances, sports coverage, and documentary releases on our official YouTube channel.
              </p>
            </div>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 border border-emerald-400/30"
            >
              <span>Visit YouTube Channel</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. INTERACTIVE LIGHTBOX MODAL
      ======================================================== */}
      {activeItem && activeItemIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItemIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-60 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveItemIndex(
                (activeItemIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-60 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#008744] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveItemIndex(
                (activeItemIndex + 1) % filteredItems.length
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-60 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#008744] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="relative max-h-[70vh] sm:max-h-[75vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                    {activeItem.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeItem.year}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {activeItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeItem.caption}
                </p>
              </div>

              {/* Index Indicator */}
              <div className="text-xs font-mono font-semibold text-slate-400 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 shrink-0 self-start sm:self-center">
                {activeItemIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
