# PPM HSS Admin Dashboard

Standalone React + Vite + Tailwind CSS Admin Dashboard for managing the entire PPM Higher Secondary School Portal.

## Features
- **Standalone Frontend**: Runs independently on port 5173 (or any custom port) and talks to the REST API server on port 5000.
- **Authentication**: JWT token storage, automatic logout on session expiration, protected dashboard routes.
- **Modules**:
  - Overview / Analytics Metrics
  - School Information & Contacts (Phone, Emails, Motto, Stats)
  - Notices & Circulars (Urgent notices toggle, date, category)
  - Faculty Directory (Wings, Departments, Qualifications)
  - Photo Gallery
  - Syllabi, Question Papers & Downloads
  - Scholarships & Endowments
  - Student Clubs & Co-curricular Activities
  - Student Achievements
  - Admissions Applications Manager (Received → Under Review → Shortlisted → Approved)
  - Contact Messages Manager
  - Alumni Directory & Verification

## Getting Started

1. **Install dependencies:**
   ```bash
   cd admin-dashboard
   npm install
   ```

2. **Configure API URL (Optional):**
   By default, it proxies `/api` to `http://localhost:5000`. You can also create `.env`:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Default Credentials:**
   - **Username**: `admin`
   - **Password**: `admin123`
