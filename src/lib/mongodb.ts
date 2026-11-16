import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ppm_hss_db";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  isConnected: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
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
        console.warn("MongoDB connection could not be established; operating with fallback mock store:", err.message);
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

// In-memory fallback stores to guarantee 100% reliable functionality when MongoDB is not running locally
export const fallbackStore = {
  enquiries: [] as Array<{
    id: string;
    studentName: string;
    parentName: string;
    phone: string;
    email?: string;
    seekingGrade: string;
    stream?: string;
    previousSchool?: string;
    marksPercentage?: string;
    notes?: string;
    status: string;
    createdAt: string;
  }>,
  contacts: [] as Array<{
    id: string;
    name: string;
    email: string;
    phone?: string;
    department: string;
    subject: string;
    message: string;
    createdAt: string;
  }>,
  alumni: [] as Array<{
    id: string;
    fullName: string;
    batchYear: string;
    stream: string;
    higherEducation?: string;
    currentProfession: string;
    companyOrOrganization?: string;
    location: string;
    email: string;
    phone: string;
    testimonial?: string;
    createdAt: string;
  }>,
};

