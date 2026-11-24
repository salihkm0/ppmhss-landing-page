import mongoose from "mongoose";
import {
  SCHOOL_INFO,
  ADMINISTRATION,
  STAFF_LIST,
  NOTICES_LIST,
  RESOURCES_LIST,
  GALLERY_DATA,
  ACHIEVEMENTS_LIST,
  CLUBS_DATA,
  SCHOLARSHIPS_LIST,
} from "@/data/schoolData";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ppm_hss_db";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  isConnected: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
  // eslint-disable-next-line no-var
  var fallbackStoreCache: any | undefined;
}

let cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
  isConnected: false,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<{ isConnected: boolean }> {
  if (cached.conn) {
    return { isConnected: true };
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2000, // fast timeout so if mongo is offline, fallback is instantaneous
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        cached.isConnected = true;
        return mongooseInstance;
      })
      .catch((err) => {
        console.warn("MongoDB connection could not be established; operating with fallback store:", err.message);
        cached.isConnected = false;
        return null as unknown as typeof mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
    return { isConnected: !!cached.conn && cached.isConnected };
  } catch {
    return { isConnected: false };
  }
}

// Global in-memory fallback stores populated with initial school data
export const fallbackStore = global.fallbackStoreCache || {
  notices: [...NOTICES_LIST],
  teachers: [...STAFF_LIST],
  gallery: [...GALLERY_DATA],
  resources: [...RESOURCES_LIST],
  scholarships: [...SCHOLARSHIPS_LIST],
  clubs: [...CLUBS_DATA],
  achievements: [...ACHIEVEMENTS_LIST],
  siteSettings: {
    schoolInfo: { ...SCHOOL_INFO },
    administration: { ...ADMINISTRATION },
    bannerAnnouncement: {
      text: "Admissions Open for Academic Year 2025–26 (Plus One & High School)",
      link: "/admissions",
      active: true,
    },
    homePageData: {
      heroSlides: [
        {
          id: "slide-1",
          badge: "ESTD 1976",
          titlePart1: "Inspiring & Bright",
          titleHighlight: "Academic Excellence",
          titlePart2: "at PPM HSS",
          desc: "Government-aided school nurturing over 5,100 students across 4.5 acres in Malappuram.",
          image: "https://images.unsplash.com/photo-1562774053-701939374585?q=85&w=1920&auto=format&fit=crop",
          caption: "Main Academic Block • 4.5-Acre Campus",
          tag: "Campus & Grounds",
        },
        {
          id: "slide-2",
          badge: "INFRASTRUCTURE",
          titlePart1: "Modern High-Tech",
          titleHighlight: "Laboratories & Science",
          titlePart2: "Wing",
          desc: "Fully equipped physics, chemistry, biology, and advanced research facilities.",
          image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1920&auto=format&fit=crop",
          caption: "Science & Research Laboratories",
          tag: "Research & Science",
        },
        {
          id: "slide-3",
          badge: "HIGHER SECONDARY",
          titlePart1: "Empowering",
          titleHighlight: "Classrooms & Learning",
          titlePart2: "Spaces",
          desc: "KITE ICT smart classrooms with dedicated faculty and 194 Full A+ in SSLC 2024.",
          image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=85&w=1920&auto=format&fit=crop",
          caption: "KITE ICT Smart Classrooms",
          tag: "Smart Classrooms",
        },
        {
          id: "slide-4",
          badge: "CAMPUS LIBRARY",
          titlePart1: "Central Reference",
          titleHighlight: "Library & Reading",
          titlePart2: "Pavilion",
          desc: "Comprehensive knowledge hub with over 15,000 volumes, periodicals, and study halls.",
          image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=85&w=1920&auto=format&fit=crop",
          caption: "15,000+ Volume Central Library",
          tag: "Resource Hub",
        },
      ],
      aboutSchool: {
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
      },
      whySchool: {
        badge: "Why PPM HSS",
        headingPart1: "Dedicated Mentorship &",
        headingHighlight: "Modern Campus",
        description: "We combine academic discipline with individual guidance, modern laboratories, and government-aided affordability.",
        cards: [
          {
            title: "Experienced Faculty",
            desc: "165+ teachers across high school and higher secondary.",
            icon: "users",
          },
          {
            title: "Modern Laboratories",
            desc: "Equipped physics, chemistry, biology, and computer labs.",
            icon: "sparkles",
          },
          {
            title: "Government Aided",
            desc: "Subsidized free tuition with state scholarship access.",
            icon: "award",
          },
          {
            title: "4.5-Acre Campus",
            desc: "Smart classrooms, central library, and sports grounds.",
            icon: "building",
          },
        ],
      },
    },
  },
  enquiries: [
    {
      id: "enq-1",
      studentName: "Fathima Nihala",
      parentName: "Abdul Majeed",
      phone: "+91 98471 23456",
      email: "majeed.k@gmail.com",
      seekingGrade: "Plus One (+1)",
      stream: "Science (Biology)",
      previousSchool: "PPM HS Kottukkara",
      marksPercentage: "96.5% (Full A+)",
      notes: "Interested in Medical entrance coaching stream.",
      status: "Shortlisted",
      createdAt: new Date().toISOString(),
    },
    {
      id: "enq-2",
      studentName: "Muhammed Rayan",
      parentName: "Musthafa P.",
      phone: "+91 94472 88990",
      email: "musthafa.p@yahoo.com",
      seekingGrade: "Class 8",
      stream: "General",
      previousSchool: "AMLPS Nediyiruppu",
      marksPercentage: "92%",
      notes: "Seeking English Medium division.",
      status: "Received",
      createdAt: new Date().toISOString(),
    },
  ],
  contacts: [
    {
      id: "cnt-1",
      name: "Haris K.",
      email: "haris.kondotty@gmail.com",
      phone: "+91 98460 11223",
      department: "Admissions & Allotment",
      subject: "Query regarding Class 11 Community Quota Allotment date",
      message: "Could you please inform the submission date for sports and community quota seats?",
      status: "In Progress",
      createdAt: new Date().toISOString(),
    },
  ],
  alumni: [
    {
      id: "alm-1",
      fullName: "Dr. Anoop Rahman",
      batchYear: "2012",
      stream: "Science (Biology)",
      higherEducation: "MBBS, MD General Medicine (GMC Kozhikode)",
      currentProfession: "Assistant Professor in Medicine",
      companyOrOrganization: "Government Medical College, Manjeri",
      location: "Malappuram, Kerala",
      email: "dr.anoop@gmail.com",
      phone: "+91 98470 99881",
      testimonial: "PPM HSS shaped my discipline and foundation in science. Eternally grateful to my teachers.",
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  ],
};

if (!global.fallbackStoreCache) {
  global.fallbackStoreCache = fallbackStore;
}
