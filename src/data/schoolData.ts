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
}

export const SCHOOL_INFO = {
  name: "Panakkad Pookkoya Thangal Memorial Higher Secondary School",
  shortName: "PPM HSS Kottukkara",
  code: "School Code: 11024",
  established: 1976,
  motto: "Knowledge, Character, Service",
  board: "General Education Department, Government of Kerala (DHSE & KBPE)",
  management: "Nediyiruppu Muslim Educational Association",
  recognition: "Recognized Government-Aided Minority Institution",
  address: "Kottukkara, Kondotty P.O., Malappuram District, Kerala, India - 673638",
  landmark: "Near Calicut International Airport, 2 km from Kondotty Town on NH 966",
  email: "office@ppmhsskottukkara.edu.in",
  principalEmail: "principal@ppmhsskottukkara.edu.in",
  phone: "+91 483 2712240",
  altPhone: "+91 483 2714420",
  officeHours: "Monday to Saturday: 8:45 AM - 4:45 PM (Closed on Second Saturdays & Sundays)",
  stats: [
    { label: "Year Established", value: "1976", suffix: "" },
    { label: "Students Enrolled", value: "4,600", suffix: "+" },
    { label: "Dedicated Educators", value: "165", suffix: "+" },
    { label: "Campus Acreage", value: "4.5", suffix: " Acres" },
    { label: "SSLC & +2 Pass Rate", value: "99.4", suffix: "%" },
  ],
};

export const ADMINISTRATION = {
  manager: {
    name: "Janab P.K. Basheer",
    title: "Manager & President, Nediyiruppu Muslim Educational Association",
    qualification: "Social Worker & Educational Philanthropist",
    tenure: "Managing Trustee since 2012",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    message:
      "When PPM HSS was established in 1976, the founders envisioned an educational bastion that would empower students from all walks of life with modern knowledge, moral uprightness, and social responsibility. Over nearly five decades, our alumni have become leaders in medicine, technology, governance, and community upliftment. We remain committed to nurturing young minds with standard infrastructure, dedicated mentorship, and compassionate values.",
    role: "Strategic governance, institutional growth, infrastructure modernisation, community engagement, and ensuring alignment with state educational standards.",
  },
  principal: {
    name: "Prof. K. Abdul Rasheed",
    title: "Principal (Higher Secondary Wing)",
    qualification: "M.Sc. (Physics), B.Ed., M.Phil., SET",
    tenure: "In service for 26 years; Principal since 2019",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    message:
      "Higher secondary education represents the critical bridge between school foundations and future professional callings. At PPM HSS, our academic rigor in Science, Commerce, and Humanities is complemented by career guidance, entrance coaching orientation, and holistic character building. We inspire every student to discover their true potential and pursue excellence with humility.",
    role: "Higher secondary academic administration, DHSE compliance, continuous faculty development, board examination leadership, and student career mentorship.",
  },
  headmaster: {
    name: "Sri. T. Mohammed Shafi",
    title: "Headmaster (High School Wing)",
    qualification: "M.A. (English), B.Ed., DSM",
    tenure: "Educator for 24 years; Headmaster since 2021",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    message:
      "The secondary school years lay the indelible bedrock for curiosity, foundational discipline, and ethical thinking. Our focus in Standards 8, 9, and 10 is on strengthening concepts, fostering creative problem-solving, and providing vibrant platforms in arts, sports, and social clubs.",
    role: "High school academic supervision, SSLC curriculum planning, student counseling, campus discipline, and co-curricular coordination.",
  },
  pta: {
    president: "Sri. K.P. Kunhimohammed Haji (PTA President)",
    vicePresident: "Smt. Suhara Teacher (Vice President)",
    secretary: "Principal (Ex-Officio Secretary)",
    treasurer: "Sri. P. Venugopalan (Staff Representative)",
    overview:
      "The Parent-Teacher Association (PTA) at PPM HSS is a proactive democratic body committed to bridging school and home. It plays a pivotal role in student welfare, academic monitoring, merit endowments, and campus development.",
    activities: [
      "Conducting regular term-wise class PTA conferences and individualized progress reviews.",
      "Sponsoring annual academic merit scholarships and endowment awards for top performers.",
      "Supporting student medical welfare camps, safe drinking water facilities, and campus hygiene.",
      "Organizing career guidance symposiums and adolescent counseling seminars.",
      "Co-funding infrastructure upgrades such as smart classroom audio systems and sports kits.",
    ],
    meetingSchedule: "General Body meets at term commencement (June) and conclusion (February). Executive committee convenes on the first Saturday of every month.",
    contactEmail: "pta@ppmhsskottukkara.edu.in",
  },
};

export const STAFF_LIST: StaffMember[] = [
  {
    id: "s1",
    name: "Dr. K. Abdul Rasheed",
    designation: "Principal & Senior HSST Physics",
    department: "Physics",
    qualification: "M.Sc. (Physics), M.Phil., B.Ed., SET",
    experience: "26 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    email: "principal@ppmhsskottukkara.edu.in",
    specialization: "Quantum Mechanics & Entrance Physics Coaching",
    quote: "True education ignites analytical thinking while anchoring students in compassion and civic duty.",
  },
  {
    id: "s2",
    name: "Smt. M. Radhika",
    designation: "Senior HSST Mathematics",
    department: "Mathematics",
    qualification: "M.Sc. (Mathematics), B.Ed., SET",
    experience: "21 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    email: "radhika.maths@ppmhsskottukkara.edu.in",
    specialization: "Calculus, Linear Algebra & Olympiad Training",
    quote: "Mathematics teaches problem solving, logical endurance, and the joy of abstract discovery.",
  },
  {
    id: "s3",
    name: "Sri. P. Venugopalan",
    designation: "HSST Chemistry & Exam Superintendent",
    department: "Chemistry",
    qualification: "M.Sc. (Chemistry), B.Ed., NET",
    experience: "19 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    email: "venugopalan.chem@ppmhsskottukkara.edu.in",
    specialization: "Organic Chemistry & Practical Laboratory Synthesis",
    quote: "Laboratory experimentation bridges classroom theory with real-world scientific inquiry.",
  },
  {
    id: "s4",
    name: "Smt. Fathimath Zuhara",
    designation: "HSST Botany & Eco Club Coordinator",
    department: "Biology",
    qualification: "M.Sc. (Botany), B.Ed., SET",
    experience: "17 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop",
    email: "zuhara.bio@ppmhsskottukkara.edu.in",
    specialization: "Cell Biology, Plant Genetics & Environmental Sciences",
    quote: "Understanding the natural world inspires reverence for life and ecological stewardship.",
  },
  {
    id: "s5",
    name: "Sri. K.T. Faisal",
    designation: "HSST Commerce & NSS Programme Officer",
    department: "Commerce",
    qualification: "M.Com., B.Ed., SET",
    experience: "18 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    email: "faisal.commerce@ppmhsskottukkara.edu.in",
    specialization: "Accountancy, Financial Auditing & Youth Leadership",
    quote: "Commerce education empowers students with integrity, strategic acumen, and enterprise.",
  },
  {
    id: "s6",
    name: "Smt. Deepa N.",
    designation: "HSST Economics & Career Guidance Cell",
    department: "Economics",
    qualification: "M.A. (Economics), B.Ed., SET",
    experience: "15 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    email: "deepa.econ@ppmhsskottukkara.edu.in",
    specialization: "Macroeconomics, Indian Development & Career Mentoring",
    quote: "Economics connects individual choices with national prosperity and social equity.",
  },
  {
    id: "s7",
    name: "Sri. C. Hameed",
    designation: "HSST Computer Applications & IT Lead",
    department: "Computer Science",
    qualification: "MCA, B.Ed.",
    experience: "14 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    email: "hameed.cs@ppmhsskottukkara.edu.in",
    specialization: "Python Programming, Linux Networks & Database Systems",
    quote: "Computational literacy is the fundamental tool for 21st-century problem solving.",
  },
  {
    id: "s8",
    name: "Smt. K. Sajitha",
    designation: "HSST English & Literary Society Mentor",
    department: "English",
    qualification: "M.A. (English Literature), B.Ed., SET",
    experience: "16 Years",
    wing: "Higher Secondary",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    email: "sajitha.eng@ppmhsskottukkara.edu.in",
    specialization: "Comparative Literature, Rhetoric & Oratory Training",
    quote: "Literature builds boundless empathy and sharpens articulate, thoughtful communication.",
  },
  {
    id: "s9",
    name: "Sri. T. Mohammed Shafi",
    designation: "Headmaster & Senior HST English",
    department: "English",
    qualification: "M.A. (English), B.Ed., DSM",
    experience: "24 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    email: "hm@ppmhsskottukkara.edu.in",
    specialization: "Foundational Grammar, School Administration & SSLC Mentorship",
    quote: "The middle and high school years lay the indelible bedrock for lifelong curiosity and discipline.",
  },
  {
    id: "s10",
    name: "Sri. K.V. Narayanan",
    designation: "HST Physical Science & Science Club",
    department: "Science",
    qualification: "B.Sc. (Physics), B.Ed.",
    experience: "22 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop",
    email: "narayanan.science@ppmhsskottukkara.edu.in",
    specialization: "Applied Physics, Working Models & Sasthrolsavam",
    quote: "Every scientific principle comes alive when experienced with one's own hands.",
  },
  {
    id: "s11",
    name: "Smt. Amina Beevi",
    designation: "HST Natural Science & Health Club",
    department: "Science",
    qualification: "B.Sc. (Zoology), B.Ed.",
    experience: "19 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
    email: "amina.bio@ppmhsskottukkara.edu.in",
    specialization: "Human Physiology, Health Education & Nature Studies",
    quote: "Cultivating respect for nature begins with understanding the marvels of living biology.",
  },
  {
    id: "s12",
    name: "Sri. P. Dinesh Kumar",
    designation: "HST Mathematics & Remedial Coach",
    department: "Mathematics",
    qualification: "B.Sc. (Maths), B.Ed.",
    experience: "17 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
    email: "dinesh.maths@ppmhsskottukkara.edu.in",
    specialization: "Arithmetic, Geometry & SSLC Board Preparation",
    quote: "Patience and practice transform mathematical apprehension into joyous confidence.",
  },
  {
    id: "s13",
    name: "Smt. Mary Thomas",
    designation: "HST Social Science & Scouts Leader",
    department: "Social Science",
    qualification: "M.A. (History), B.Ed.",
    experience: "18 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=600&auto=format&fit=crop",
    email: "mary.ss@ppmhsskottukkara.edu.in",
    specialization: "Indian History, Constitution & Civic Governance",
    quote: "A deep knowledge of history illuminates the present and equips young leaders for tomorrow.",
  },
  {
    id: "s14",
    name: "Sri. M.K. Musthafa",
    designation: "HST Malayalam & Magazine Editor",
    department: "Languages",
    qualification: "M.A. (Malayalam), B.Ed.",
    experience: "20 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    email: "musthafa.mal@ppmhsskottukkara.edu.in",
    specialization: "Malayalam Poetry, Cultural Heritage & Debate",
    quote: "Mother tongue connects us to our roots and gives wings to the deepest human expression.",
  },
  {
    id: "s15",
    name: "Sri. K. Babu",
    designation: "Physical Education Director & NCC Captain",
    department: "Physical Education",
    qualification: "M.P.Ed., NIS Certified",
    experience: "21 Years",
    wing: "High School",
    photoUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600&auto=format&fit=crop",
    email: "babu.sports@ppmhsskottukkara.edu.in",
    specialization: "Athletics, Football Coaching & NCC Army Cadets",
    quote: "Sports and military drill build enduring resilience, sportsmanship, and unyielding team spirit.",
  },
  {
    id: "s16",
    name: "Smt. Shamla Banu",
    designation: "Senior Grade Librarian & Resource In-Charge",
    department: "Library",
    qualification: "M.Li.Sc., PGDCA",
    experience: "16 Years",
    wing: "Administration",
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    email: "library@ppmhsskottukkara.edu.in",
    specialization: "Digital Cataloguing, Reading Circles & Reference Curation",
    quote: "A vibrant library is the heartbeat of any great school, opening doorways to every universe.",
  },
];

export const ACADEMIC_STREAMS = [
  {
    code: "01",
    name: "Science (Biology Stream)",
    coreSubjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Ideal foundation for medical, biotechnology, veterinary, pharmacy, and pure science careers.",
    seats: 120,
    labs: ["Advanced Physics Lab", "Organic & Analytical Chemistry Lab", "Bio-specimen & Microscope Lab"],
  },
  {
    code: "05",
    name: "Science (Computer Science Stream)",
    coreSubjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Focused curriculum for future engineers, software architects, data scientists, and robotics enthusiasts.",
    seats: 60,
    labs: ["High-Performance Computing Lab (Linux/Python)", "Physics & Electronics Lab"],
  },
  {
    code: "19",
    name: "Commerce (Computer Applications)",
    coreSubjects: ["Accountancy", "Business Studies", "Economics", "Computer Applications"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Rigorous blend of commerce principles, financial accounting, and modern business computing tools.",
    seats: 120,
    labs: ["Commerce & Tally Accounting Simulation Lab"],
  },
  {
    code: "28",
    name: "Humanities (Social Sciences)",
    coreSubjects: ["History", "Economics", "Political Science", "Sociology / Journalism"],
    languages: ["English", "Malayalam / Arabic / Hindi"],
    description: "Comprehensive study of socio-political frameworks, public administration, law, civil service, and journalism.",
    seats: 60,
    labs: ["Language & Social Sciences Resource Lab"],
  },
];

export const SCHOLARSHIPS_LIST = [
  {
    name: "National Means-cum-Merit Scholarship (NMMS)",
    target: "Class 8 Students",
    provider: "Ministry of Education, Govt. of India",
    amount: "₹12,000 per annum (from Class 9 to Class 12)",
    eligibility: "Students scoring min 55% in Class 7, parental annual income ≤ ₹3,50,000.",
    deadline: "October 31 annually",
  },
  {
    name: "Ushas / USS (Upper Primary Scholarship)",
    target: "Incoming High School Students",
    provider: "Kerala State Education Department",
    amount: "Merit endowment & certificate",
    eligibility: "Based on state-level USS examination qualification.",
    deadline: "August 15",
  },
  {
    name: "Post-Matric Minority Scholarship",
    target: "Higher Secondary (+1 & +2)",
    provider: "National Scholarship Portal (NSP)",
    amount: "Full tuition, maintenance & examination fee waiver",
    eligibility: "Min 50% in previous board exam; family income ≤ ₹2,00,000.",
    deadline: "November 30",
  },
  {
    name: "PPM Endowed Merit Award",
    target: "High School & Higher Secondary Top Scorers",
    provider: "PPM HSS Alumni Association & Management",
    amount: "Gold Medal & Cash Endowment (₹10,000 - ₹25,000)",
    eligibility: "SSLC Full A+ achievers and Higher Secondary school stream toppers.",
    deadline: "Annual Merit Day (July)",
  },
];

export const CLUBS_DATA: ClubItem[] = [
  {
    name: "National Service Scheme (NSS Unit 045)",
    category: "Community Service & Youth Leadership",
    coordinator: "Sri. K.T. Faisal",
    description: "Engages students in regular village community outreach, blood donation camps, digital literacy for senior citizens, and annual 7-day special residential camps.",
    activities: ["Vembanad environmental restoration awareness", "Palliative care support drives", "Campus herbal garden development"],
  },
  {
    name: "National Cadet Corps (NCC Army Wing)",
    category: "Discipline & National Integration",
    coordinator: "Capt. K. Babu",
    description: "Fosters leadership, physical endurance, parade discipline, rifle training orientation, and preparation for Armed Forces and Civil Services.",
    activities: ["Republic Day parade participation", "Annual training camp at Pangode", "Disaster management civil defense drills"],
  },
  {
    name: "Bharat Scouts & Guides",
    category: "Character & Outdoors",
    coordinator: "Smt. Mary Thomas",
    description: "Develops resourcefulness, camping survival, pioneering skills, and first-aid readiness.",
    activities: ["Rashtrapati Award test training", "State jamboree camps", "Traffic safety volunteerism"],
  },
  {
    name: "Mathrubhumi SEED / Eco Club",
    category: "Environmental Stewardship",
    coordinator: "Smt. Fathimath Zuhara",
    description: "Nurtures ecological responsibility with organic farming, zero-plastic drives, indigenous tree planting, and butterfly gardens.",
    activities: ["Vegetable harvest for mid-day meals", "Waste segregation initiative", "Energy audit in classrooms"],
  },
  {
    name: "Science & Innovation Club (STEM)",
    category: "Research & Experimentation",
    coordinator: "Sri. P. Venugopalan",
    description: "Hands-on robotics, astronomy sky-watching sessions, working science models, and participation in the Kerala State School Science Fair (Sasthrolsav).",
    activities: ["Annual science exposition", "Mobile planetarium workshop", "Olympiad training"],
  },
  {
    name: "Sahitya Samajam (Literary & Debate Club)",
    category: "Literature & Oratory",
    coordinator: "Sri. M.K. Musthafa",
    description: "Promotes reading habits, creative writing in Malayalam, English, and Arabic, manuscript magazines, and competitive inter-school debates.",
    activities: ["School magazine publication", "Vayana Varam (Reading Week)", "Elocution tournaments"],
  },
  {
    name: "Career Guidance & Counselling Cell",
    category: "Higher Education Mentorship",
    coordinator: "Smt. Deepa N.",
    description: "Empowers students with career aptitude tests, NEET/JEE and CUET orientation, university admissions seminars, and one-on-one counseling.",
    activities: ["Higher education expo", "Mock entrance tests", "Alumni career mentoring sessions"],
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "ach1",
    title: "100% Pass in SSLC Examination 2024",
    category: "Academic",
    year: "2024",
    description: "All 542 registered Class 10 candidates passed, with 194 students securing prestigious Full A+ in all subjects, setting an all-time school benchmark.",
    badge: "100% Pass / 194 Full A+",
  },
  {
    id: "ach2",
    title: "State 1st Rank in Higher Secondary Commerce",
    category: "Academic",
    year: "2024",
    description: "Master Adil Shereef scored a flawless 1200/1200 marks in the Kerala DHSE Higher Secondary Examination.",
    badge: "DHSE State 1st Rank (1200/1200)",
  },
  {
    id: "ach3",
    title: "State Kalolsavam 'A Grade' in Mappilappattu & Oppana",
    category: "Arts & Kalolsavam",
    year: "2024",
    description: "Our school troupe secured 'A' Grade with top honors at the 62nd Kerala School Kalolsavam held at Kollam.",
    badge: "State Kalolsavam A Grade",
  },
  {
    id: "ach4",
    title: "Malappuram Revenue District Sub-Junior Football Champions",
    category: "Sports",
    year: "2023",
    description: "The PPM HSS football team clinched the coveted district cup defeating opponents 3-1 in the finals.",
    badge: "District Football Champions",
  },
  {
    id: "ach5",
    title: "Best Eco-Friendly Green Campus Award",
    category: "Institutional",
    year: "2023",
    description: "Conferred by the Department of Environment & Climate Change for our comprehensive solar campus and rainwater harvesting system.",
    badge: "Haritha Vidyalayam Honor",
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
    title: "Plus One Single Window Admissions (HSCAP) 2025-26 - Online Helpdesk Active",
    date: "March 15, 2025",
    category: "Admissions",
    isUrgent: true,
    author: "Admissions Directorate",
    summary: "Helpdesk counter established in the Computer Lab to assist parents and applicants with HSCAP option submission and verification.",
    content: "The Higher Secondary Centralised Allotment Process (HSCAP) portal opens soon. PPM HSS has arranged an on-campus help desk equipped with high-speed internet and teacher mentors to assist candidates with form filling, stream selection guidance, and document verification from 9:30 AM to 4:00 PM on all working days.",
  },
  {
    id: "news2",
    title: "SSLC Board Examination Model Exams Commence on February 20",
    date: "February 12, 2025",
    category: "Academic",
    isUrgent: true,
    author: "Examination Cell",
    summary: "Detailed seating arrangements and hall-ticket clearance protocols published on the school noticeboard.",
    content: "The Kerala State Board Model Examinations for Class 10 SSLC candidates will take place from February 20 to February 28. Students must be seated in their allotted examination halls by 9:15 AM. Special revision clinics will run in the afternoon session for doubt clearance.",
  },
  {
    id: "news3",
    title: "Annual Sports Meet 'Citius 2025' Concludes with Record Turnout",
    date: "January 28, 2025",
    category: "Sports",
    isUrgent: false,
    author: "Department of Physical Education",
    summary: "Tagore House clinched the overall athletic championship shield after two days of spirited track and field competition.",
    content: "Over 1,200 student athletes participated in 48 events across Sub-Junior, Junior, and Senior categories. The event was inaugurated by District Sports Council officials, featuring a synchronized torch relay and March Past.",
  },
  {
    id: "news4",
    title: "PPM HSS Global Alumni Reunion 'Ormakoottu 2025' on April 12",
    date: "January 15, 2025",
    category: "Events",
    isUrgent: false,
    author: "Alumni Association Secretariat",
    summary: "Batches from 1980 to 2024 will gather at the main campus auditorium for a day of nostalgia, honorings, and future initiatives.",
    content: "The Old Students Association (OSA) cordially invites all former students and retired teachers to the grand annual homecoming. Registration is open online via the Alumni Portal. The day will feature felicitations for retired gurus, cultural performances, and the launch of the student merit fund.",
  },
  {
    id: "news5",
    title: "Science & Robotics Exhibition 'Invento 2024' Showcases 140+ Projects",
    date: "December 18, 2024",
    category: "Academic",
    isUrgent: false,
    author: "Science Club",
    summary: "Interactive exhibits included automated irrigation models, solar trackers, and AI-assisted waste sorting prototypes.",
    content: "The annual school science fair saw enthusiastic participation from Standards 8 through 12. Distinguished judges from Calicut University appreciated the practical social relevance of student inventions.",
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
    designation: "Consultant Interventional Cardiologist, Aster MIMS",
    location: "Kozhikode, Kerala",
    message:
      "PPM HSS Kottukkara instilled in me not just strong scientific concepts, but the ethics of empathy and community service. The teachers treated every student as family and encouraged us to aim high without fear.",
  },
  {
    id: "al2",
    name: "Aparna K. Menon",
    batch: "Class of 2011 (Humanities)",
    designation: "Sub-Collector & IAS Officer",
    location: "New Delhi",
    message:
      "The debate societies, literary forums, and library at PPM HSS were my training ground for civil services. The school shaped my analytical thinking and perspective on public welfare.",
  },
  {
    id: "al3",
    name: "Jamsheer Puthenpeedika",
    batch: "Class of 2008 (Commerce)",
    designation: "Chartered Accountant & Partner, JP Associates",
    location: "Dubai, UAE",
    message:
      "The commerce foundation and computer lab at PPM HSS gave us practical insights ahead of our time. Today, as I lead an international audit practice, I look back with immense gratitude.",
  },
  {
    id: "al4",
    name: "Nabeel V.P.",
    batch: "Class of 2016 (Computer Science)",
    designation: "Staff Software Engineer, Microsoft",
    location: "Bengaluru, Karnataka",
    message:
      "Writing my first lines of C++ and Python in the PPM HSS computer lab sparked a lifelong passion for computer science. The guidance of our mentors was world-class.",
  },
];

export const FAQ_LIST = [
  {
    q: "How can I apply for Class 11 (Plus One) admission at PPM HSS?",
    a: "Higher Secondary (+1) admissions in Kerala are conducted through the Government's Centralised Single Window System (HSCAP - hscap.kerala.gov.in). Candidates must select PPM HSS Kottukkara (School Code: 11024) as their preferred option during the allotment window. An on-campus helpdesk assists applicants throughout the process.",
  },
  {
    q: "What are the streams available for Higher Secondary?",
    a: "We offer Science (Biology & Maths), Science (Computer Science & Maths), Commerce (with Computer Applications), and Humanities (History, Economics, Political Science, Sociology).",
  },
  {
    q: "Is PPM HSS a government or private school?",
    a: "PPM HSS is a government-aided higher secondary school governed by the Nediyiruppu Muslim Educational Association and fully recognized by the Kerala State General Education Department. Education is free with standard government entitlements (textbooks, mid-day meals in high school, and uniforms as per state rules).",
  },
  {
    q: "How do I obtain a Transfer Certificate (TC) or Bonafide Certificate?",
    a: "You can download the TC Request or Bonafide Certificate application form from our Resources > Downloads section, fill it, and submit it at the administrative office counter between 9:30 AM and 3:30 PM. Processing takes 2 working days.",
  },
  {
    q: "Are school bus transport facilities available?",
    a: "Yes, our fleet of school buses covers major routes including Kondotty, Morayur, Mongam, Nediyiruppu, Calicut Airport road, and adjacent rural feeder points.",
  },
];

