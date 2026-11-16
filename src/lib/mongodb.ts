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
