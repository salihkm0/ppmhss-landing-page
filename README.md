# PPM HSS Kottukkara — Official Institution Web Portal

A full-stack institutional web portal for **Panakkad Pookkoya Thangal Memorial Higher Secondary School (PPM HSS), Kottukkara, Kondotty, Kerala** (School Code: 11024, Estd. 1976), built using the **MERN Stack (MongoDB, Next.js API Routes, React 19, Node.js)** on **Next.js (App Router)** with **TypeScript** and **Tailwind CSS**.

Designed with a **professional, standard, and minimal color aesthetic** (academic midnight navy `#0f172a`, warm slate `#f8fafc`, pure white `#ffffff`, and subtle burnished gold accents).

---

## 🧭 Dedicated Multi-Page Routing Architecture

Each section is structured as its own standalone, dedicated page in Next.js:

| Route | Page Name | Contents & Specifications |
| :--- | :--- | :--- |
| **`/`** | **Home** | Hero banner, Quick navigation portals, Ticker, Leadership messages, Toppers & news highlights, Photo gallery preview |
| **`/institute`** | **Institute** | History & founding story (Nediyiruppu MEA), Board affiliation, Vision & Mission, Manager & Principal profiles, PTA |
| **`/academics`** | **Academics** | High School (Std 8-10), Higher Secondary (+1 & +2 Science/Commerce/Humanities), Academic Calendar, Syllabus, Scholarships |
| **`/admissions`** | **Admissions** | HSCAP process, Eligibility criteria, Important dates, Free education policy, Document checklist, Online Enquiry Form (MongoDB) |
| **`/resources`** | **Resources** | Previous Question Papers (filtered by grade/subject), Question Banks, Holiday Worksheets, Circulars & GOs, Administrative Forms |
| **`/campus-life`**| **Campus Life** | Campus Facilities (smart classes, labs, library, auditorium, transport), Clubs (NSS, NCC, Scouts, SEED), Sports, Achievements, Media Gallery with lightbox |
| **`/news-events`** | **News & Notices**| Chronological school news, Scheduled events calendar, Urgent alerts, Digital Noticeboard with active & archived circulars |
| **`/alumni`** | **Alumni** | Old Students Association (OSA), Global Chapters (Kerala, UAE, KSA, Qatar, Bangalore), Testimonials, Online Registration Form (MongoDB) |
| **`/logins`** | **Portals / ERP** | Dedicated portals for Teachers, Students, Parents, and Administrative ERP, with links to Sampoorna, Samagra, and HSCAP |
| **`/contact`** | **Contact Us** | Address, Office hours, Phone/Email directory, Departmental contacts, Interactive Contact Form (MongoDB), Google Maps |

---

## 🛠️ Full-Stack Backend & MongoDB Integration

- **Database / ODM:** MongoDB with **Mongoose**.
  - `src/lib/mongodb.ts`: Resilient connection manager with connection caching. Works seamlessly with real MongoDB (`MONGODB_URI`) and features an in-memory fallback store so the portal functions 100% out of the box even without a local database server running.
  - Mongoose Models:
    - `Enquiry`: Admission inquiries and applicant records (`src/models/Enquiry.ts`).
    - `Contact`: Official correspondence messages (`src/models/Contact.ts`).
    - `Alumni`: Alumnus registration database (`src/models/Alumni.ts`).
- **RESTful API Routes:**
  - `POST /api/enquiry` & `GET /api/enquiry` — Admission inquiries
  - `POST /api/contact` — Official contact messages
  - `POST /api/alumni` & `GET /api/alumni` — Alumni registration & directory
  - `GET /api/notices` — Active and archived notices
  - `GET /api/resources` — Filtered question papers, banks, and downloads

---

## 🚀 Running the Project

```bash
# Production Run
npm run build
npm run start
```
The application runs at `http://localhost:3000`.
