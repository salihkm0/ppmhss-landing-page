import mongoose, { Schema, Document } from "mongoose";

export interface ISiteSettings extends Document {
  schoolInfo: {
    name: string;
    shortName: string;
    code: string;
    established: number;
    motto: string;
    board: string;
    management: string;
    recognition: string;
    address: string;
    landmark: string;
    email: string;
    altEmail: string;
    principalEmail: string;
    phone: string;
    altPhone: string;
    officeHours: string;
    stats: Array<{ label: string; value: string; suffix: string }>;
  };
  administration: {
    manager: {
      name: string;
      title: string;
      qualification: string;
      tenure: string;
      photo: string;
      message: string;
      role: string;
    };
    secretary: {
      name: string;
      title: string;
      qualification: string;
      tenure: string;
      photo: string;
      message: string;
      role: string;
    };
    principal: {
      name: string;
      title: string;
      qualification: string;
      tenure: string;
      photo: string;
      message: string;
      role: string;
    };
    headmaster: {
      name: string;
      title: string;
      qualification: string;
      tenure: string;
      photo: string;
      message: string;
      role: string;
    };
    pta: {
      president: string;
      vicePresident: string;
      secretary: string;
      treasurer: string;
      overview: string;
      activities: string[];
      meetingSchedule: string;
      contactEmail: string;
    };
  };
  bannerAnnouncement: {
    text: string;
    link: string;
    active: boolean;
  };
  homePageData?: any;
  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    schoolInfo: { type: Schema.Types.Mixed, required: true },
    administration: { type: Schema.Types.Mixed, required: true },
    bannerAnnouncement: {
      text: { type: String, default: "Admissions Open for Academic Year 2025–26 (Plus One & High School)" },
      link: { type: String, default: "/admissions" },
      active: { type: Boolean, default: true },
    },
    homePageData: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export const SiteSettings =
  mongoose.models.SiteSettings ||
  mongoose.model<ISiteSettings>("SiteSettings", SiteSettingsSchema);

