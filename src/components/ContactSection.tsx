"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Bus,
  GraduationCap,
  FileText,
  Share2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Administrative Office",
    subject: "",
    message: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage("Thank you for contacting PPM HSS. Your communication has been dispatched to the designated office.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "General Administrative Office",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage(data.message || "Failed to deliver message. Please verify your entries.");
      }
    } catch {
      setErrorMessage("Network error during submission. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const departments = [
    {
      name: "Higher Secondary Section (+1 / +2)",
      lead: "Principal's Office",
      phone: "+91 483 2714174",
      email: "ppmhss@gmail.com",
      hours: "9:00 AM - 4:30 PM",
    },
    {
      name: "High School Section (Std 8 - 10)",
      lead: "Headmaster's Office",
      phone: "+91 483 2711374",
      email: "ppmhsskottukkara@gmail.com",
      hours: "9:00 AM - 4:30 PM",
    },
    {
      name: "Admissions & HSCAP Assistance Desk",
      lead: "Admissions Coordinator",
      phone: "+91 483 2714174",
      email: "ppmhss@gmail.com",
      hours: "8:30 AM - 5:00 PM",
    },
    {
      name: "School Bus Transport & Logistics",
      lead: "Transport Supervisor",
      phone: "+91 483 2711374",
      email: "ppmhsskottukkara@gmail.com",
      hours: "7:30 AM - 6:00 PM",
    },
    {
      name: "Office Accounts & Administrative Counter",
      lead: "Head Clerk (Hamza V. P.)",
      phone: "+91 483 2711374",
      email: "ppmhss@gmail.com",
      hours: "9:00 AM - 4:30 PM",
    },
  ];

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Reach Out & <span className="text-[#008744]">Contact Us</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We are here to assist with admissions guidance, administrative verification, student records,
            parent communications, and public queries.
          </p>
        </div>

        {/* 3 Top Cards (Address, Phone, Email) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 hover:shadow-xl hover:border-emerald-300 transition-all flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#008744] text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-[#008744]">Location</span>
              <h4 className="text-sm font-bold text-slate-900">Campus Address</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                P.P.M. Higher Secondary School, Kottukkara, Kondotty, Malappuram District, Kerala - 673638
                <br />
                <span className="text-slate-500 text-[11px] font-medium">Near Calicut Airport • 2 km from Kondotty on NH 966</span>
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 hover:shadow-xl hover:border-emerald-300 transition-all flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-[#008744]">Telephone</span>
              <h4 className="text-sm font-bold text-slate-900">Official Phone Lines</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High School Section: <strong>+91 483 2711374</strong><br />
                Higher Secondary: <strong>+91 483 2714174</strong>
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 hover:shadow-xl hover:border-emerald-300 transition-all flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0b5446] text-white flex items-center justify-center shrink-0 shadow-md">
              <Mail className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-[#008744]">Email</span>
              <h4 className="text-sm font-bold text-slate-900">Official Electronic Mail</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ppmhss@gmail.com<br />
                ppmhsskottukkara@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Form and Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase text-[#008744]">Send an Inquiry</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Leave a Message for the School Administration
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Your communication will be forwarded to the designated head of section for prompt resolution.
              </p>
            </div>

            {successMessage && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                    placeholder="e.g. K. Radhakrishnan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Contact Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                    placeholder="+91 98470 12345"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                  >
                    <option value="General Administrative Office">General Administrative Office</option>
                    <option value="Admissions & Counseling">Admissions & Counseling</option>
                    <option value="Higher Secondary Wing">Higher Secondary Wing (+1 / +2)</option>
                    <option value="High School Wing">High School Wing (Std 8 - 10)</option>
                    <option value="School Transport & Fleet">School Transport & Fleet</option>
                    <option value="PTA Executive Cell">PTA Executive Cell</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Subject of Inquiry <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                  placeholder="e.g. Plus One Admission Transfer Certificate Procedure"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message / Detailed Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:bg-white"
                  placeholder="Please state your query clearly including student details if applicable..."
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Dispatching..." : "Send Official Message"}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Department Directory & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 text-white space-y-4">
              <span className="text-xs font-bold uppercase text-emerald-400">Institutional Directory</span>
              <h3 className="text-xl font-black text-white">Department Desks</h3>

              <div className="space-y-3 pt-1">
                {departments.map((dept, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1.5 text-xs"
                  >
                    <div className="font-bold text-emerald-300">{dept.name}</div>
                    <div className="text-[11px] text-slate-300 font-medium">Head: {dept.lead}</div>
                    <div className="text-slate-200 flex items-center gap-1.5 pt-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="text-slate-300 text-[11px] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Hours: {dept.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Visiting Hours */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#008744]" />
                <span>Office Visiting Hours</span>
              </h4>
              <div className="space-y-1.5 text-slate-600">
                <p><strong>Monday to Friday:</strong> 9:00 AM to 4:30 PM</p>
                <p><strong>Saturday:</strong> 9:30 AM to 1:30 PM (Except 2nd Saturday)</p>
                <p><strong>Sunday & Public Holidays:</strong> Closed</p>
                <p className="text-[11px] text-slate-500 pt-1">
                  Principal Visiting Time: 2:30 PM - 4:00 PM on working days (prior appointment recommended).
                </p>
              </div>
            </div>

            {/* Social Media Links Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase text-[#008744]">Connect with Us</span>
              <h4 className="text-sm font-bold text-slate-900">Official Social Media Channels</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stay updated with campus life, student achievements, live events, and official circulars:
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {[
                  { name: "Facebook Page", handle: "@ppmhsskottukkara", color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
                  { name: "Instagram Channel", handle: "@ppmhss_official", color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
                  { name: "YouTube Channel", handle: "PPM HSS Media Hub", color: "hover:bg-red-50 hover:text-red-600 hover:border-red-200" },
                  { name: "WhatsApp Desk", handle: "+91 94471 22400", color: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200" },
                ].map((social, i) => (
                  <button
                    key={i}
                    onClick={() => alert(`Opening PPM HSS ${social.name}`)}
                    className={`p-3 rounded-xl border border-slate-200 bg-slate-50 text-left transition-all cursor-pointer ${social.color}`}
                  >
                    <div className="font-bold text-xs text-slate-900">{social.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{social.handle}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map & Transport Route */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg space-y-4 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#008744]">Interactive Location</span>
              <h3 className="text-xl font-black text-slate-900">How to Reach PPM HSS Kottukkara</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Situated 2.5 km from Kondotty town on the Calicut Airport - Kondotty road link.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=PPM+HSS+Kottukkara"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#008744] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-200">
            <iframe
              title="PPM HSS Kottukkara Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.626244510168!2d75.9589886!3d11.1444747!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3ba64e29202a0aab%3A0x88484e9c704f56f1!2sP.P.M.H.S.S%20Kottukkara!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
