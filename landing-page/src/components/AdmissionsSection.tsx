"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  FileCheck,
  Send,
  HelpCircle,
  Phone,
  Mail,
  Download,
  AlertCircle,
  Clock,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { FAQ_LIST } from "@/data/schoolData";

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    seekingGrade: "Plus One (+1) Science",
    previousSchool: "",
    marksPercentage: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage("Your admission enquiry has been successfully recorded! The PPM HSS Admissions Cell will contact you shortly.");
        setFormData({
          studentName: "",
          parentName: "",
          phone: "",
          email: "",
          seekingGrade: "Plus One (+1) Science",
          previousSchool: "",
          marksPercentage: "",
          notes: "",
        });
      } else {
        setErrorMessage(data.message || "Failed to submit enquiry. Please check your entries.");
      }
    } catch {
      setErrorMessage("An error occurred while transmitting your request. Please try again or call the helpdesk.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      step: "01",
      title: "Online Registration & HSCAP",
      desc: "Apply via Kerala Single Window Portal (hscap.kerala.gov.in) selecting PPM HSS (Code: 11024) or fill our High School direct registration form.",
    },
    {
      step: "02",
      title: "Merit Allotment Publication",
      desc: "Trial and final allotment lists published by DHSE Kerala. Candidate status notified via SMS and campus noticeboard.",
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Visit the school admission cell with original certificates (TC, SSLC marklist, Conduct, Aadhaar card) for in-person verification.",
    },
    {
      step: "04",
      title: "Fee Waiver & Enrollment",
      desc: "Complete registration with 100% free tuition (government-aided). Submit nominal PTA contribution and receive student ID.",
    },
    {
      step: "05",
      title: "Orientation & Induction",
      desc: "Attend student-parent induction assembly, collect free textbooks/uniforms, and get familiar with campus departments.",
    },
  ];

  return (
    <section id="admissions" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Heading with Dual-Color Styling */}
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Admissions Portal</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Admissions <span className="text-[#008744]">2025-26</span>
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            High School and Higher Secondary admissions conducted as per Kerala General Education Department norms.
          </p>
        </div>

        {/* Step-by-Step Admission Process (Reference Image 2 Style with 01..05) */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-[#008744] uppercase tracking-wider">
            Admission Process Overview (Step-by-Step)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-3xl p-5 space-y-2 relative overflow-hidden group hover:shadow-md transition-all">
                <span className="text-3xl font-black text-slate-200 font-mono group-hover:text-orange-200 transition-colors">
                  {st.step}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{st.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Information Cards: Eligibility, Dates & Fees */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Eligibility Criteria */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] border-b border-slate-200 pb-2">
              Eligibility Criteria by Class
            </h4>
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <strong className="text-slate-900 block font-bold">High School (Classes 8, 9, 10):</strong>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Successful completion of previous class from any recognized state/central board with valid Transfer Certificate.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 block font-bold">Plus One (+1) Higher Secondary:</strong>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Passed SSLC / CBSE Class 10 / ICSE with qualification for higher studies (EHS). Science stream requires min B+ grade in Science & Mathematics.
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates Schedule */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] border-b border-slate-200 pb-2">
              Admission Schedule 2025-26
            </h4>
            <ul className="text-xs text-slate-700 space-y-2.5">
              <li className="flex justify-between border-b border-slate-200/80 pb-1.5">
                <span>HSCAP Portal Opens:</span>
                <strong className="text-slate-900 font-mono">May 12, 2025</strong>
              </li>
              <li className="flex justify-between border-b border-slate-200/80 pb-1.5">
                <span>Trial Allotment Published:</span>
                <strong className="text-slate-900 font-mono">May 24, 2025</strong>
              </li>
              <li className="flex justify-between border-b border-slate-200/80 pb-1.5">
                <span>First Allotment & Joining:</span>
                <strong className="text-slate-900 font-mono">June 02, 2025</strong>
              </li>
              <li className="flex justify-between pb-1">
                <span>Class 8 & 9 Direct Window:</span>
                <strong className="text-slate-900 font-mono">May 02 - May 28, 2025</strong>
              </li>
            </ul>
          </div>

          {/* Fee Structure */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] border-b border-slate-200 pb-2">
              100% Free Tuition Policy
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              As a recognized government-aided institution, <strong>tuition fee is completely free</strong> for all students
              under the Kerala Public Education Mission.
            </p>
            <div className="text-xs text-slate-600 bg-white border border-slate-200 rounded-2xl p-3 space-y-1">
              <div>• Free standard textbook distribution</div>
              <div>• Free noon-meal scheme for secondary students</div>
              <div>• Nominal voluntary PTA membership & laboratory fee as approved by General Body</div>
            </div>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#008744]" />
              <span>Mandatory Documents Checklist for Verification</span>
            </h3>
            <button
              onClick={() => alert("Downloading PPM HSS Admission Documents Checklist (PDF)")}
              className="text-xs font-bold text-[#008744] hover:text-orange-700 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download Printable Checklist</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1 text-xs text-slate-700">
            {[
              "Original Transfer Certificate (TC) from previous institution",
              "Original SSLC / Class 10 Qualifying Mark List & 2 copies",
              "Conduct & Character Certificate issued by previous Head",
              "Aadhaar Card of student & guardian (Original + Copy)",
              "4 recent passport-size colour photographs in white background",
              "Caste / Community / Income Certificate (for reservation if applicable)",
            ].map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Online Admission Form & Helpdesk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Admission Form (Connected to MERN /api/enquiry) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Online Admission Enquiry / Application Form
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Submit your details to register interest. Our Admissions Desk will guide you with stream allotment and documentation.
              </p>
            </div>

            {successMessage && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-300 text-red-900 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Enter student's official name"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Enter parent's full name"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Contact Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXXXXXXX"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Seeking Grade / Stream <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.seekingGrade}
                    onChange={(e) => setFormData({ ...formData, seekingGrade: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500 bg-white"
                  >
                    <option value="Standard 8 (High School)">Standard 8 (High School)</option>
                    <option value="Standard 9 (High School)">Standard 9 (High School)</option>
                    <option value="Standard 10 (SSLC)">Standard 10 (SSLC)</option>
                    <option value="Plus One (+1) Science (Bio-Maths)">Plus One (+1) Science (Bio-Maths)</option>
                    <option value="Plus One (+1) Science (Computer Science)">Plus One (+1) Science (Computer Science)</option>
                    <option value="Plus One (+1) Commerce (Computer Applications)">Plus One (+1) Commerce (Computer Applications)</option>
                    <option value="Plus One (+1) Humanities">Plus One (+1) Humanities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Previous School Attended
                  </label>
                  <input
                    type="text"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                    placeholder="Name of school previously studied"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Previous Marks / Percentage / GPA
                  </label>
                  <input
                    type="text"
                    value={formData.marksPercentage}
                    onChange={(e) => setFormData({ ...formData, marksPercentage: e.target.value })}
                    placeholder="e.g. 92% or 9 Full A+"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Additional Queries or Notes
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any specific query or subject preference"
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  Data stored securely in institution admission records.
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Transmitting..." : "Submit Application Enquiry"}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Admission Coordinator & Helpdesk Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] border-b border-slate-200 pb-2">
                Admission Helpdesk & Nodal Contact
              </h4>
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900 block font-bold text-sm">Sri. P. Venugopalan</strong>
                  <span className="text-slate-500">Nodal Officer, Higher Secondary HSCAP Admissions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Phone className="w-4 h-4 text-[#008744]" />
                  <span className="font-semibold">+91 483 2712240 (Ext: 104)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Mail className="w-4 h-4 text-[#008744]" />
                  <span className="font-semibold">admissions@ppmhsskottukkara.edu.in</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <Clock className="w-4 h-4 text-[#008744]" />
                  <span>Mon-Sat: 9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Offline Form Download */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Prefer Printable Physical Form?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download the official physical application form, print, fill manually, and submit at the school administrative counter.
              </p>
              <button
                onClick={() => alert("Downloading PPM HSS Offline Admission Application Form (PDF)")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#008744]" />
                <span>Download Admission Form (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <HelpCircle className="w-5 h-5 text-[#008744]" />
            <h3 className="text-lg font-bold">Frequently Asked Questions (Admissions)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQ_LIST.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-2">
                <h4 className="text-xs font-bold text-slate-900">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
