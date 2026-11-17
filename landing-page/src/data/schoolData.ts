export interface StaffMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  photoUrl: string;
  wing: "High School" | "Higher Secondary" | "Administration";
  email?: string;
  specialization?: string;
  quote?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "Academic" | "Sports" | "Arts & Kalolsavam" | "Institutional";
  year: string;
  description: string;
  badge: string;
  imageUrl: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: "Question Paper" | "Question Bank" | "Holiday Worksheet" | "Circular & GO" | "Time Table" | "Form";
  grade: "Class 8" | "Class 9" | "SSLC (Class 10)" | "Plus One (+1)" | "Plus Two (+2)" | "General";
  subject?: string;
  year?: string;
  fileSize: string;
  downloadUrl: string;
  dateAdded: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Academic" | "Admissions" | "Events" | "Sports" | "Notices";
  summary: string;
  content: string;
  isUrgent?: boolean;
  author: string;
}

export interface ClubItem {
  name: string;
  category: string;
  coordinator: string;
  description: string;
  activities: string[];
  imageUrl: string;
}

export const SCHOOL_INFO = {
  name: "Panakkad Pookkoya Thangal Memorial Higher Secondary School",
  shortName: "PPM HSS Kottukkara",
  code: "School Code: 11024",
  established: 1976,
  motto: "Quality education and high standards for every student",
  board: "General Education Department, Government of Kerala (DHSE & KBPE)",
  management: "Nediyiruppu Muslim Educational Association (Reg. No. S.22/75)",
  recognition: "Recognized Government-Aided Minority Educational Institution (Under Sec 2(g) of NCMEI Act 2004)",
  address: "PPM Higher Secondary School, Kottukkara, Kondotty, Malappuram District, Kerala, India - 673638",
  landmark: "2 km from Kondotty Town, near Kozhikode-Palakkad National Highway (NH 966)",
  email: "ppmhss@gmail.com",
  altEmail: "ppmhsskottukkara@gmail.com",
  principalEmail: "principal@ppmhsskottukkara.edu.in",
  phone: "+91 483 2711374", // High School Section official line
  altPhone: "+91 483 2714174", // Higher Secondary Section official line
  officeHours: "Monday to Saturday: 8:45 AM - 4:45 PM (Closed on Second Saturdays & Sundays)",
  stats: [
    { label: "Year Established", value: "1976", suffix: "" },
    { label: "Students Enrolled", value: "5,100", suffix: "+" },
    { label: "Dedicated Faculty & Staff", value: "165", suffix: "+" },
    { label: "Campus Acreage", value: "4.5", suffix: " Acres" },
    { label: "SSLC & +2 Pass Rate", value: "99.4", suffix: "%" },
  ],
};

export const ADMINISTRATION = {
  manager: {
    name: "Janab P.K. Basheer",
    title: "Manager, Nediyiruppu Muslim Educational Association",
    qualification: "Social Worker & Educational Philanthropist",
    tenure: "Managing Trustee since 2012",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    message:
      "Founded in 1976 with 3 divisions and 112 students, PPM HSS now serves over 5,100 students. We remain committed to academic excellence and community upliftment.",
    role: "Governance, growth, and community engagement.",
  },
  secretary: {
    name: "General Secretary & Treasurer",
    title: "Secretary & Treasurer, Nediyiruppu MEA",
    qualification: "Community Leader & Educational Administrator",
    tenure: "Executive Committee of Nediyiruppu MEA",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    message:
      "PPM HSS has served the region's educational advancement for nearly five decades, nurturing over 5,100 students toward top universities and professional colleges.",
    role: "Financial administration and institutional expansion.",
  },
  principal: {
    name: "Prof. K. Abdul Rasheed",
    title: "Principal (Higher Secondary Wing)",
    qualification: "M.Sc. (Physics), B.Ed., M.Phil., SET",
    tenure: "In service for 26 years; Principal since 2019",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    message:
      "Since the Higher Secondary section began in 2000–2001, we focus on rigorous academics and holistic development through dedicated faculty and well-equipped labs.",
    role: "HS academic administration and board exam leadership.",
  },
  headmaster: {
    name: "Sri. Sunil Kumar P.K.",
    title: "Headmaster (High School Wing)",
    qualification: "M.A. (Malayalam), B.Ed.",
    tenure: "Senior Educator & Administrator",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    message:
      "High School builds the foundation for disciplined inquiry and character through academics, sports, and cultural activities.",
    role: "High school administration and SSLC academic planning.",
  },
  pta: {
    president: "Sri. K.P. Kunhimohammed Haji (PTA President)",
    vicePresident: "Smt. Suhara Teacher (Vice President)",
    secretary: "Principal (Ex-Officio Secretary)",
    treasurer: "Sri. P. Venugopalan (Staff Representative)",
    overview:
      "The PTA supports student welfare, academic progress reviews, and campus development.",
    activities: [
      "Regular term-wise class PTA conferences and progress reviews.",
      "Annual academic merit scholarships and endowment awards.",
      "Student welfare and campus infrastructure support.",
    ],
    meetingSchedule: "General Body meets in June and February; Executive meets monthly.",
    contactEmail: "ppmhss@gmail.com",
  },
};

export const STAFF_LIST: StaffMember[] = [
  // ========================================================
  // 1. LEADERSHIP & ADMINISTRATION
  // ========================================================
  {
    id: "s1",
    name: "Prof. K. Abdul Rasheed",
    designation: "Principal & Senior HSST Physics",
    department: "Physics",
    qualification: "M.Sc. (Physics), M.Phil., B.Ed., SET",
    experience: "26 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    email: "principal@ppmhsskottukkara.edu.in",
    specialization: "Quantum Mechanics & HS Administration",
  },
  {
    id: "s2",
    name: "Sri. Sunil Kumar P.K.",
    designation: "Headmaster & Senior HST Malayalam",
    department: "Malayalam",
    qualification: "M.A. (Malayalam), B.Ed.",
    experience: "24 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Malayalam Literature & Administration",
  },

  // ========================================================
  // 2. MATHEMATICS DEPARTMENT (Real Faculty from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "m1",
    name: "Sri. Jhonson C. P.",
    designation: "HST Mathematics (Dept. Head)",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "22 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Algebra, Geometry & High School Mathematics Olympiad",
  },
  {
    id: "m2",
    name: "Smt. Jayasree G.",
    designation: "HST Mathematics",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Trigonometry, Analytical Geometry & SSLC Coaching",
  },
  {
    id: "m3",
    name: "Sri. Sunil K. Joseph",
    designation: "HST Mathematics",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "18 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Applied Mathematics & Remedial Problem Solving",
  },
  {
    id: "m4",
    name: "Smt. Ayamma Shahina K.",
    designation: "HST Mathematics",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "15 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Foundational Arithmetic & Statistics",
  },
  {
    id: "m5",
    name: "Sri. Avaran Kutty P.",
    designation: "HST Mathematics",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "16 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "High School Curriculum & Math Club Mentor",
  },
  {
    id: "m6",
    name: "Sri. Anvar Sadath K. P.",
    designation: "HST Mathematics",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "14 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Interactive Math Fair Lab Models",
  },
  {
    id: "m7",
    name: "Sri. Kunhali P.",
    designation: "HST Mathematics",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "20 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "SSLC Board Examination Preparation",
  },

  // ========================================================
  // 3. PHYSICAL SCIENCE DEPARTMENT (Real Faculty from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "ps1",
    name: "Sri. Sundaran K.",
    designation: "HST Physical Science (Dept. Head)",
    department: "Physical Science",
    qualification: "B.Sc. (Physics), B.Ed.",
    experience: "21 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Physics Laboratory Experiments & Sasthrolsavam Mentor",
  },
  {
    id: "ps2",
    name: "Sri. Newman Thomson K.",
    designation: "HST Physical Science",
    department: "Physical Science",
    qualification: "B.Sc. (Chemistry), B.Ed.",
    experience: "18 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Chemical Reactions, Periodic Table & Science Fair Models",
  },
  {
    id: "ps3",
    name: "Smt. Najmunisa K. T.",
    designation: "HST Physical Science",
    department: "Physical Science",
    qualification: "B.Sc. (Physics), B.Ed.",
    experience: "16 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Optics, Electricity & Practical Lab Coordination",
  },
  {
    id: "ps4",
    name: "Sri. Noushad K. M.",
    designation: "HST Physical Science",
    department: "Physical Science",
    qualification: "B.Sc. (Physics), B.Ed.",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Mechanics, Sound & Energy Systems",
  },
  {
    id: "ps5",
    name: "Smt. Babysulfiya P. M.",
    designation: "HST Physical Science",
    department: "Physical Science",
    qualification: "B.Sc. (Chemistry), B.Ed.",
    experience: "15 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Inorganic Chemistry & Environmental Science Experiments",
  },

  // ========================================================
  // 4. NATURAL SCIENCE DEPARTMENT (Real Faculty from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "ns1",
    name: "Smt. Harifabeevi K.",
    designation: "HST Natural Science (Dept. Head)",
    department: "Natural Science",
    qualification: "B.Sc. (Botany), B.Ed.",
    experience: "22 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Plant Physiology, Biodiversity & Nature Club Lead",
  },
  {
    id: "ns2",
    name: "Sri. Shaji V. P.",
    designation: "HST Natural Science",
    department: "Natural Science",
    qualification: "B.Sc. (Zoology), B.Ed.",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Animal Anatomy, Health Education & Science Fair Mentorship",
  },
  {
    id: "ns3",
    name: "Sri. Najmul Babu K. P.",
    designation: "HST Natural Science",
    department: "Natural Science",
    qualification: "B.Sc. (Botany), B.Ed.",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Ecology, Genetics & Herbal Campus Initiatives",
  },
  {
    id: "ns4",
    name: "Smt. Aseena A.",
    designation: "HST Natural Science",
    department: "Natural Science",
    qualification: "B.Sc. (Zoology), B.Ed.",
    experience: "15 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Human Biology, Nutrition & Adolescent Health",
  },

  // ========================================================
  // 5. SOCIAL SCIENCE DEPARTMENT (Real Faculty from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "ss1",
    name: "Sri. Jamaludheen P.",
    designation: "HST Social Science (Dept. Head)",
    department: "Social Science",
    qualification: "M.A. (History), B.Ed.",
    experience: "23 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Indian National Movement, World History & Social Science Club",
  },
  {
    id: "ss2",
    name: "Sri. Ibrahim V.",
    designation: "HST Social Science",
    department: "Social Science",
    qualification: "M.A. (Political Science), B.Ed.",
    experience: "20 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Constitutional Studies, Civic Governance & Human Rights",
  },
  {
    id: "ss3",
    name: "Smt. Zuhra N. V.",
    designation: "HST Social Science",
    department: "Social Science",
    qualification: "M.A. (History), B.Ed.",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Kerala History, Geography & SSLC Social Science Training",
  },
  {
    id: "ss4",
    name: "Smt. Reena T. K.",
    designation: "HST Social Science",
    department: "Social Science",
    qualification: "M.A. (Economics), B.Ed.",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Developmental Economics & Resource Geography",
  },
  {
    id: "ss5",
    name: "Sri. V. P. A. Sidheeque",
    designation: "HST Social Science",
    department: "Social Science",
    qualification: "M.A. (Sociology), B.Ed.",
    experience: "18 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Social Anthropology, Heritage Clubs & Student Leadership",
  },

  // ========================================================
  // 6. ENGLISH DEPARTMENT (Real Faculty from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "eng1",
    name: "Sri. Abdurahiman A. K.",
    designation: "HST English (Dept. Head)",
    department: "English",
    qualification: "M.A. (English), B.Ed.",
    experience: "21 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Communicative English, Grammar & Literary Club Lead",
  },
  {
    id: "eng2",
    name: "Smt. Jaseela K. M.",
    designation: "HST English",
    department: "English",
    qualification: "M.A. (English), B.Ed.",
    experience: "18 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "English Prose, Poetry & Oratory Training",
  },
  {
    id: "eng3",
    name: "Sri. Abdurahiman V. P.",
    designation: "HST English",
    department: "English",
    qualification: "M.A. (English), B.Ed.",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Phonetics, Language Lab Activities & SSLC Guidance",
  },
  {
    id: "eng4",
    name: "Sri. Siyad P.",
    designation: "HST English",
    department: "English",
    qualification: "M.A. (English), B.Ed.",
    experience: "15 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Creative Writing, School Magazine & Debate Coaching",
  },

  // ========================================================
  // 7. MALAYALAM, HINDI & URDU LANGUAGES (Real Faculty from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "mal1",
    name: "Sri. Ramabhadran Pillai G.",
    designation: "HST Malayalam",
    department: "Malayalam",
    qualification: "M.A. (Malayalam), B.Ed.",
    experience: "22 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Classical Malayalam Poetry & Kerala Sahithya Vedhi",
  },
  {
    id: "mal2",
    name: "Sri. Joy Gustin",
    designation: "HST Malayalam",
    department: "Malayalam",
    qualification: "M.A. (Malayalam), B.Ed.",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Modern Prose, Drama & Kalolsavam Literary Events",
  },
  {
    id: "mal3",
    name: "Smt. Sajidha Arakkal",
    designation: "HST Malayalam",
    department: "Malayalam",
    qualification: "M.A. (Malayalam), B.Ed.",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Folklore, Linguistics & Cultural Mentorship",
  },
  {
    id: "hin1",
    name: "Sri. Rajan Nair P.",
    designation: "HST Hindi (Dept. Head)",
    department: "Hindi",
    qualification: "M.A. (Hindi), B.Ed.",
    experience: "23 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "National Language Promotion, Rashtrabhasha Prachar & Hindi Kalolsavam",
  },
  {
    id: "hin2",
    name: "Smt. Rasiya T. K.",
    designation: "HST Hindi",
    department: "Hindi",
    qualification: "M.A. (Hindi), B.Ed.",
    experience: "18 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Hindi Grammar, Storytelling & SSLC Board Prep",
  },
  {
    id: "urd1",
    name: "Sri. Abdussalam K.",
    designation: "HST Urdu (Dept. Head)",
    department: "Urdu",
    qualification: "M.A. (Urdu), B.Ed.",
    experience: "21 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Urdu Literature, Calligraphy & Cultural Gazal Competitions",
  },
  {
    id: "urd2",
    name: "Sri. Abdu Nasar K. K.",
    designation: "HST Urdu",
    department: "Urdu",
    qualification: "M.A. (Urdu), B.Ed.",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Urdu Poetry & Inter-School Cultural Competitions",
  },

  // ========================================================
  // 8. SPECIALIST TEACHERS, IT & HEALTH (Real from ppmhsskottukkara.com)
  // ========================================================
  {
    id: "sp1",
    name: "Sri. Shamsudheen P. T.",
    designation: "Physical Education Director (P.E.T)",
    department: "Physical Education",
    qualification: "M.P.Ed., NIS Certified",
    experience: "22 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Track & Field, District Sports Meet, Football & Sports Discipline",
  },
  {
    id: "sp2",
    name: "Sri. Jeevanandan",
    designation: "Specialist Drawing Instructor",
    department: "Fine Arts",
    qualification: "Diploma in Fine Arts (Painting)",
    experience: "20 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Watercolour, Pencil Sketching & Kerala School Kalolsavam Painting",
  },
  {
    id: "sp3",
    name: "Smt. Baby Mumthas P.",
    designation: "Crafts & Sewing Specialist Teacher",
    department: "Vocational Skills",
    qualification: "KGTE Needlework & Embroidery Certification",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Textile Arts, Hand Embroidery & Craft Work Exhibitions",
  },
  {
    id: "sp4",
    name: "Smt. Deepa M. P.",
    designation: "Music Instructor",
    department: "Performing Arts",
    qualification: "Ganabhooshanam (Vocal Music)",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Carnatic Music, Group Song & School Assembly Choir",
  },
  {
    id: "it1",
    name: "Sri. Aslam C.",
    designation: "IT Support & Smart Classroom Coordinator",
    department: "Information Technology",
    qualification: "B.Tech (Computer Science), KITE Master Trainer",
    experience: "12 Years",
    wing: "Administration",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "KITE GNU/Linux Labs, Broadband Networking & Smart Class Maintenance",
  },
  {
    id: "nr1",
    name: "Smt. Bindu K. K.",
    designation: "School Health Nurse",
    department: "Student Health & Wellness",
    qualification: "General Nursing & Midwifery (GNM)",
    experience: "14 Years",
    wing: "Administration",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Campus First Aid, Health Checkup Camps & Student Wellness Care",
  },
  {
    id: "adm1",
    name: "Sri. Hamza V. P.",
    designation: "Head Clerk (Office Superintendent)",
    department: "Office Administration",
    qualification: "B.Com., Government Secretarial Course",
    experience: "25 Years",
    wing: "Administration",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "School Service Records, Admissions & Government Accounts",
  },

  // ========================================================
  // 9. HIGHER SECONDARY (HSST) FACULTY DIRECTORY
  // ========================================================
  {
    id: "hsst1",
    name: "Smt. M. Radhika",
    designation: "Senior HSST Mathematics",
    department: "Mathematics",
    qualification: "M.Sc. (Mathematics), B.Ed., SET",
    experience: "21 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Calculus, Linear Algebra & Entrance Mathematics",
  },
  {
    id: "hsst2",
    name: "Sri. P. Venugopalan",
    designation: "HSST Chemistry & Exam Superintendent",
    department: "Chemistry",
    qualification: "M.Sc. (Chemistry), B.Ed., NET",
    experience: "19 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Organic Chemistry & Practical Laboratory Synthesis",
  },
  {
    id: "hsst3",
    name: "Smt. Fathimath Zuhara",
    designation: "HSST Botany & Eco Club Coordinator",
    department: "Biology",
    qualification: "M.Sc. (Botany), B.Ed., SET",
    experience: "17 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Plant Genetics, Biotechnology & Environmental Biology",
  },
  {
    id: "hsst4",
    name: "Sri. K.T. Faisal",
    designation: "HSST Commerce & NSS Programme Officer",
    department: "Commerce",
    qualification: "M.Com., B.Ed., SET",
    experience: "18 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Financial Accountancy, Business Auditing & NSS Leadership",
  },
  {
    id: "hsst5",
    name: "Smt. Deepa N.",
    designation: "HSST Economics & Career Guidance Cell",
    department: "Economics",
    qualification: "M.A. (Economics), B.Ed., SET",
    experience: "15 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Macroeconomics, Indian Economic Development & Career Counseling",
  },
  {
    id: "hsst6",
    name: "Sri. C. Hameed",
    designation: "HSST Computer Applications & IT Lead",
    department: "Computer Science",
    qualification: "MCA, B.Ed.",
    experience: "14 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Python Programming, Linux Networks & Database Management",
  },
  {
    id: "hsst7",
    name: "Smt. K. Sajitha",
    designation: "HSST English & Literary Society Mentor",
    department: "English",
    qualification: "M.A. (English Literature), B.Ed., SET",
    experience: "16 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    email: "ppmhss@gmail.com",
    specialization: "Comparative Literature, Rhetoric & Oratory Training",
  },
];

export interface AcademicStream {
  code: string;
  name: string;
  coreSubjects: string[];
  languages: string[];
  description: string;
  seats: number;
  labs: string[];
  imageUrl: string;
}

export interface ScholarshipItem {
  name: string;
  target: string;
  provider: string;
  amount: string;
  eligibility: string;
  deadline: string;
  imageUrl: string;
}

export const ACADEMIC_STREAMS: AcademicStream[] = [
  {
    code: "01",
    name: "Science (Biology Stream)",
    coreSubjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Foundation for medical, health sciences, and research careers.",
    seats: 120,
    labs: ["Physics Lab", "Chemistry Lab", "Biology Lab"],
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "05",
    name: "Science (Computer Science Stream)",
    coreSubjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Prepares students for engineering, IT, and software fields.",
    seats: 60,
    labs: ["Computer Lab (Linux/Python)", "Physics Lab"],
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "19",
    name: "Commerce (Computer Applications)",
    coreSubjects: ["Accountancy", "Business Studies", "Economics", "Computer Applications"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Combines commerce principles with computer application skills.",
    seats: 120,
    labs: ["Commerce & Tally Computer Lab"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "28",
    name: "Humanities (Social Sciences)",
    coreSubjects: ["History", "Economics", "Political Science", "Sociology / Journalism"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Study of history, economics, politics, and social sciences.",
    seats: 60,
    labs: ["Social Science Resource Room"],
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
  },
];

export const SCHOLARSHIPS_LIST: ScholarshipItem[] = [
  {
    name: "National Means-cum-Merit Scholarship (NMMS)",
    target: "Class 8 Students",
    provider: "Ministry of Education, Govt. of India",
    amount: "₹12,000 per annum (from Class 9 to Class 12)",
    eligibility: "Students scoring min 55% in Class 7, parental annual income ≤ ₹3,50,000.",
    deadline: "October 31 annually",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ushas / USS (Upper Primary Scholarship)",
    target: "Incoming High School Students",
    provider: "Kerala State Education Department",
    amount: "Merit endowment & certificate",
    eligibility: "Based on state-level USS examination qualification.",
    deadline: "August 15",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Post-Matric Minority Scholarship",
    target: "Higher Secondary (+1 & +2)",
    provider: "National Scholarship Portal (NSP)",
    amount: "Full tuition, maintenance & examination fee waiver",
    eligibility: "Min 50% in previous board exam; family income ≤ ₹2,00,000.",
    deadline: "November 30",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "PPM Endowed Merit Award",
    target: "High School & Higher Secondary Top Scorers",
    provider: "PPM HSS Alumni Association & Management",
    amount: "Gold Medal & Cash Endowment (₹10,000 - ₹25,000)",
    eligibility: "SSLC Full A+ achievers and Higher Secondary school stream toppers.",
    deadline: "Annual Merit Day (July)",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
  },
];

export const CLUBS_DATA: ClubItem[] = [
  {
    name: "National Service Scheme (NSS Unit 045)",
    category: "Community Service",
    coordinator: "Sri. K.T. Faisal",
    description: "Village outreach, blood donation drives, and 7-day annual residential camp in nearby rural pockets.",
    activities: ["Palliative care support", "Campus greening drives"],
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "National Cadet Corps (NCC Army Wing)",
    category: "Discipline & Leadership",
    coordinator: "Capt. K. Babu",
    description: "Parade discipline, physical endurance training, firing practice, and state-level camp activities.",
    activities: ["Republic Day parade participation", "Annual training camp"],
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Bharat Scouts & Guides",
    category: "Character & Outdoors",
    coordinator: "Smt. Mary Thomas",
    description: "Camping, pioneering, outdoor survival, first aid, and civic disaster management activities.",
    activities: ["Rashtrapati Award training", "State jamboree camps"],
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mathrubhumi SEED / Eco Club",
    category: "Environment",
    coordinator: "Smt. Fathimath Zuhara",
    description: "Campus biodiversity conservation, organic vegetable farming, composting, and plastic waste reduction.",
    activities: ["Vegetable gardening", "Campus clean-up drives"],
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Science & Innovation Club (STEM)",
    category: "Science & Innovation",
    coordinator: "Sri. P. Venugopalan",
    description: "Science working models, IoT & robotics demonstrations, and Kerala School Sasthrolsavam coaching.",
    activities: ["Annual science exhibition", "Science fair project coaching"],
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sahitya Samajam (Literary & Debate Club)",
    category: "Literature & Oratory",
    coordinator: "Sri. M.K. Musthafa",
    description: "Debates, manuscript magazines, elocution coaching, and literary competitions in Malayalam and English.",
    activities: ["Reading Week observances", "Elocution and debate competitions"],
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Career Guidance & Counselling Cell",
    category: "Higher Education Guidance",
    coordinator: "Smt. Deepa N.",
    description: "Aptitude assessments, KEAM/NEET/JEE coaching guidance, and university admissions counselling.",
    activities: ["Career orientation sessions", "Mock entrance tests"],
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "ach1",
    title: "100% Pass in SSLC Examination 2024",
    category: "Academic",
    year: "2024",
    description: "All 542 students passed, with 194 securing Full A+ across all subjects in the Kerala State Board.",
    badge: "100% Pass / 194 Full A+",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ach2",
    title: "State 1st Rank in Higher Secondary Commerce",
    category: "Academic",
    year: "2024",
    description: "Adil Shereef scored 1200/1200 marks in the Kerala DHSE board exam, setting an institutional milestone.",
    badge: "DHSE State 1st Rank (1200/1200)",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ach3",
    title: "State Kalolsavam 'A Grade' in Mappilappattu & Oppana",
    category: "Arts & Kalolsavam",
    year: "2024",
    description: "School cultural troupe secured top 'A' Grade honors at the 62nd Kerala School Kalolsavam.",
    badge: "State Kalolsavam A Grade",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ach4",
    title: "Malappuram District Sub-Junior Football Champions",
    category: "Sports",
    year: "2023",
    description: "School football team won the Malappuram revenue district championship against 48 competing schools.",
    badge: "District Football Champions",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ach5",
    title: "Best Eco-Friendly Green Campus Award",
    category: "Institutional",
    year: "2023",
    description: "Conferred for solar campus installations, zero-waste bio-bins, and comprehensive rainwater harvesting.",
    badge: "Haritha Vidyalayam Honor",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ach6",
    title: "Kerala School Sasthrolsavam State Science Fair Honors",
    category: "Academic",
    year: "2023",
    description: "Students represented Malappuram district with award-winning working models in renewable energy.",
    badge: "State Science Fair A Grade",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
  },
];

export const RESOURCES_LIST: ResourceItem[] = [
  {
    id: "res1",
    title: "SSLC Board Examination Model Question Paper - Mathematics",
    category: "Question Paper",
    grade: "SSLC (Class 10)",
    subject: "Mathematics",
    year: "2024",
    fileSize: "1.8 MB",
    downloadUrl: "#",
    dateAdded: "2024-02-10",
  },
  {
    id: "res2",
    title: "SSLC Physics Previous 5-Year Solved Board Papers",
    category: "Question Paper",
    grade: "SSLC (Class 10)",
    subject: "Physics",
    year: "2023",
    fileSize: "3.2 MB",
    downloadUrl: "#",
    dateAdded: "2024-01-18",
  },
  {
    id: "res3",
    title: "Plus Two Higher Secondary Physics Model Question Bank",
    category: "Question Bank",
    grade: "Plus Two (+2)",
    subject: "Physics",
    year: "2024",
    fileSize: "2.4 MB",
    downloadUrl: "#",
    dateAdded: "2024-02-05",
  },
  {
    id: "res4",
    title: "Plus Two Accountancy Comprehensive Unit-Wise Question Bank",
    category: "Question Bank",
    grade: "Plus Two (+2)",
    subject: "Accountancy",
    year: "2024",
    fileSize: "2.1 MB",
    downloadUrl: "#",
    dateAdded: "2024-01-28",
  },
  {
    id: "res5",
    title: "Plus One Chemistry First Terminal Exam Practice Sets",
    category: "Question Paper",
    grade: "Plus One (+1)",
    subject: "Chemistry",
    year: "2023",
    fileSize: "1.5 MB",
    downloadUrl: "#",
    dateAdded: "2023-11-12",
  },
  {
    id: "res6",
    title: "Summer Vacation Foundation Worksheet - Class 8 English & Science",
    category: "Holiday Worksheet",
    grade: "Class 8",
    subject: "English & Science",
    year: "2024",
    fileSize: "840 KB",
    downloadUrl: "#",
    dateAdded: "2024-04-05",
  },
  {
    id: "res7",
    title: "Onam Holiday Revision Module - Class 9 Mathematics & Social Science",
    category: "Holiday Worksheet",
    grade: "Class 9",
    subject: "Mathematics",
    year: "2024",
    fileSize: "1.1 MB",
    downloadUrl: "#",
    dateAdded: "2024-09-02",
  },
  {
    id: "res8",
    title: "Kerala DHSE Higher Secondary Academic Calendar 2024-25",
    category: "Circular & GO",
    grade: "General",
    subject: "Academic Administration",
    year: "2024",
    fileSize: "1.4 MB",
    downloadUrl: "#",
    dateAdded: "2024-06-01",
  },
  {
    id: "res9",
    title: "Annual Exam Time Table 2024-25 (Classes 8, 9, +1)",
    category: "Time Table",
    grade: "General",
    subject: "Examinations",
    year: "2025",
    fileSize: "620 KB",
    downloadUrl: "#",
    dateAdded: "2025-01-15",
  },
  {
    id: "res10",
    title: "Application for Transfer Certificate (TC) & Conduct Certificate",
    category: "Form",
    grade: "General",
    subject: "Office Documentation",
    year: "2024",
    fileSize: "320 KB",
    downloadUrl: "#",
    dateAdded: "2024-05-10",
  },
  {
    id: "res11",
    title: "Bonafide Student Certificate Request Form",
    category: "Form",
    grade: "General",
    subject: "Office Documentation",
    year: "2024",
    fileSize: "280 KB",
    downloadUrl: "#",
    dateAdded: "2024-05-10",
  },
  {
    id: "res12",
    title: "Student Leave & Absence Application Form",
    category: "Form",
    grade: "General",
    subject: "Discipline",
    year: "2024",
    fileSize: "210 KB",
    downloadUrl: "#",
    dateAdded: "2024-06-05",
  },
];

export const NEWS_EVENTS: NewsItem[] = [
  {
    id: "news1",
    title: "Plus One Admissions (HSCAP) 2025-26 - Helpdesk Active",
    date: "March 15, 2025",
    category: "Admissions",
    isUrgent: true,
    author: "Admissions Cell",
    summary: "Helpdesk active in the Computer Lab to assist applicants with HSCAP option submission.",
    content: "The HSCAP portal opens soon. An on-campus helpdesk in the Computer Lab assists candidates with option submission and document verification from 9:30 AM to 4:00 PM.",
  },
  {
    id: "news2",
    title: "SSLC Board Model Exams Commence on February 20",
    date: "February 12, 2025",
    category: "Academic",
    isUrgent: true,
    author: "Examination Cell",
    summary: "Seating arrangements and exam protocols published on the school noticeboard.",
    content: "Kerala State Model Exams for Class 10 run from February 20 to 28. Students should report by 9:15 AM with required materials.",
  },
  {
    id: "news3",
    title: "Annual Sports Meet 'Citius 2025' Concludes",
    date: "January 28, 2025",
    category: "Sports",
    isUrgent: false,
    author: "Physical Education Dept.",
    summary: "Tagore House clinched the overall athletic championship shield.",
    content: "Over 1,200 students participated across 48 track and field events. The meet concluded with an awards ceremony for individual and house champions.",
  },
  {
    id: "news4",
    title: "PPM HSS Alumni Reunion 'Ormakoottu 2025' on April 12",
    date: "January 15, 2025",
    category: "Events",
    isUrgent: false,
    author: "Alumni Association",
    summary: "Annual alumni homecoming at the school auditorium on April 12.",
    content: "Former students and teachers are invited for the annual reunion on April 12. Online registration is open on the Alumni page.",
  },
  {
    id: "news5",
    title: "Science & Robotics Exhibition 'Invento 2024'",
    date: "December 18, 2024",
    category: "Academic",
    isUrgent: false,
    author: "Science Club",
    summary: "Students presented 140+ science and robotics working models.",
    content: "Standards 8 through 12 showcased working models in renewable energy, robotics, and environment at the school auditorium.",
  },
];

export const NOTICES_LIST = [
  {
    id: "not1",
    title: "Notice regarding submission of examination fee for Plus Two Board Exam 2025",
    date: "2025-02-14",
    category: "Examinations",
    isUrgent: true,
    fileUrl: "#",
    archived: false,
  },
  {
    id: "not2",
    title: "Circular on Declaration of Local Holiday on Account of Kondotty Nercha",
    date: "2025-02-08",
    category: "General Orders",
    isUrgent: false,
    fileUrl: "#",
    archived: false,
  },
  {
    id: "not3",
    title: "PTA General Body Meeting Notice - Academic Progress Review",
    date: "2025-01-20",
    category: "PTA",
    isUrgent: false,
    fileUrl: "#",
    archived: false,
  },
  {
    id: "not4",
    title: "Special Coaching Schedule for SSLC Students with Subject Mentors",
    date: "2025-01-10",
    category: "Academic",
    isUrgent: false,
    fileUrl: "#",
    archived: false,
  },
  {
    id: "not5",
    title: "Christmas Vacation Closure & Reopening Date Circular (Archived)",
    date: "2024-12-22",
    category: "General Orders",
    isUrgent: false,
    fileUrl: "#",
    archived: true,
  },
  {
    id: "not6",
    title: "First Terminal Examination Timetable & Syllabus Allocation (Archived)",
    date: "2024-08-15",
    category: "Examinations",
    isUrgent: false,
    fileUrl: "#",
    archived: true,
  },
];

export const ALUMNI_TESTIMONIALS = [
  {
    id: "al1",
    name: "Dr. Mohammed Ansar K.",
    batch: "Class of 2004 (Science)",
    designation: "Consultant Cardiologist, Aster MIMS",
    location: "Kozhikode, Kerala",
    message:
      "PPM HSS gave me strong scientific foundations and teachers who always encouraged us to aim high.",
  },
  {
    id: "al2",
    name: "Aparna K. Menon",
    batch: "Class of 2011 (Humanities)",
    designation: "Sub-Collector & IAS Officer",
    location: "New Delhi",
    message:
      "The debate clubs and library at PPM HSS shaped my analytical thinking and civil service journey.",
  },
  {
    id: "al3",
    name: "Jamsheer Puthenpeedika",
    batch: "Class of 2008 (Commerce)",
    designation: "Chartered Accountant, JP Associates",
    location: "Dubai, UAE",
    message:
      "The commerce faculty and practical computer lab provided real-world skills that shaped my career.",
  },
  {
    id: "al4",
    name: "Nabeel V.P.",
    batch: "Class of 2016 (Computer Science)",
    designation: "Software Engineer, Microsoft",
    location: "Bengaluru, Karnataka",
    message:
      "Writing my first code in the school computer lab sparked a career in technology.",
  },
];

export const FAQ_LIST = [
  {
    q: "How can I apply for Class 11 (Plus One) admission at PPM HSS?",
    a: "Plus One admissions are conducted through Kerala HSCAP (hscap.kerala.gov.in). Choose PPM HSS Kottukkara (School Code: 11024) during allotment.",
  },
  {
    q: "What are the streams available for Higher Secondary?",
    a: "We offer Science (Biology), Science (Computer Science), Commerce (Computer Applications), and Humanities.",
  },
  {
    q: "Is PPM HSS a government or private school?",
    a: "PPM HSS is a government-aided school recognized by the Kerala General Education Department. Education is free under state rules.",
  },
  {
    q: "How do I obtain a Transfer Certificate (TC) or Bonafide Certificate?",
    a: "Download the application form from Downloads, fill it, and submit it at the office counter. Processing takes 2 working days.",
  },
  {
    q: "Are school bus transport facilities available?",
    a: "Yes, school buses cover Kondotty, Morayur, Mongam, Nediyiruppu, Airport road, and nearby feeder points.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Labs" | "Arts" | "Sports" | "Events" | "Clubs";
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  year: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Central Academic Block & Green Campus",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop",
    caption: "4.5-acre lush green campus in Kottukkara, Kondotty.",
    year: "2024",
  },
  {
    id: "g2",
    title: "Central Scholastic Library & Reading Hall",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    caption: "15,000+ academic volumes and dedicated reading room.",
    year: "2024",
  },
  {
    id: "g3",
    title: "School Auditorium & Assembly Hall",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    caption: "Venue for school assemblies, cultural events, and seminars.",
    year: "2024",
  },
  {
    id: "g4",
    title: "Modern KITE ICT Smart Classrooms",
    category: "Campus",
    categoryLabel: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    caption: "Interactive smart boards and high-speed broadband in classrooms.",
    year: "2024",
  },
  {
    id: "g5",
    title: "Higher Secondary Physics & Chemistry Lab",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    caption: "Fully equipped experimental stations for higher secondary science.",
    year: "2024",
  },
  {
    id: "g6",
    title: "Computer Science & Linux Networking Lab",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    caption: "GNU/Linux workstations supporting Python programming and ICT.",
    year: "2024",
  },
  {
    id: "g7",
    title: "Biology & Botany Microscope Lab",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop",
    caption: "Specimen analysis and microscope practical training.",
    year: "2024",
  },
  {
    id: "g8",
    title: "Annual Science Fair (Invento Expo)",
    category: "Labs",
    categoryLabel: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
    caption: "Student working models presented at the annual school science expo.",
    year: "2024",
  },
  {
    id: "g9",
    title: "Kerala School Kalolsavam Troupe",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    caption: "A Grade winners in Mappilappattu and folk events at State Kalolsavam.",
    year: "2024",
  },
  {
    id: "g10",
    title: "Traditional Dance & Stage Performance",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    caption: "Student cultural performances during the Annual School Youth Festival.",
    year: "2024",
  },
  {
    id: "g11",
    title: "Fine Arts & Pencil Drawing Contest",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    caption: "Art club students participating in the district painting competition.",
    year: "2023",
  },
  {
    id: "g12",
    title: "Literary Club Debates & Elocution",
    category: "Arts",
    categoryLabel: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    caption: "Inter-school debates organized by Sahitya Samajam.",
    year: "2024",
  },
  {
    id: "g13",
    title: "Annual Sports Meet Track & Sprint Events",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    caption: "Track and field competitions during the annual athletic meet.",
    year: "2025",
  },
  {
    id: "g14",
    title: "District Champions Football Squad",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    caption: "PPM HSS football team celebrating victory at Malappuram district cup.",
    year: "2024",
  },
  {
    id: "g15",
    title: "Badminton & Indoor Athletics Tournament",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop",
    caption: "Inter-house indoor sports competitions held on school grounds.",
    year: "2024",
  },
  {
    id: "g16",
    title: "Annual Sports Day March Past",
    category: "Sports",
    categoryLabel: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    caption: "House march past parade led by the school band and NCC contingent.",
    year: "2025",
  },
  {
    id: "g17",
    title: "Independence Day Flag Hoisting Ceremony",
    category: "Events",
    categoryLabel: "Events",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1200&auto=format&fit=crop",
    caption: "National celebrations on campus with staff, students, and guests.",
    year: "2024",
  },
  {
    id: "g18",
    title: "Annual Merit Day & Toppers Felicitations",
    category: "Events",
    categoryLabel: "Events",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    caption: "Honoring 194 Full A+ SSLC students and DHSE board toppers.",
    year: "2024",
  },
  {
    id: "g19",
    title: "PPM HSS Global Alumni Homecoming",
    category: "Events",
    categoryLabel: "Events",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    caption: "Ormakoottu reunion welcoming former students and retired educators.",
    year: "2024",
  },
  {
    id: "g20",
    title: "NSS & Scouts Community Outreach Drive",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    caption: "NSS Unit 045 students conducting community service in Nediyiruppu.",
    year: "2024",
  },
  {
    id: "g21",
    title: "Bharat Scouts & Guides Camping Jamboree",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    caption: "Weekend adventure camp and outdoor pioneering skills workshop.",
    year: "2024",
  },
  {
    id: "g22",
    title: "Mathrubhumi SEED Eco-Club Herbal Garden",
    category: "Clubs",
    categoryLabel: "Clubs",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    caption: "Students maintaining the campus organic vegetable and medicinal garden.",
    year: "2024",
  },
];


