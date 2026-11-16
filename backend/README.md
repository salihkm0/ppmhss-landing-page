# PPM HSS Backend Server

Standalone Node.js & Express REST API backend for PPM Higher Secondary School Portal.

## Features
- **Authentication**: JWT token-based authentication with bcrypt password encryption.
- **Database**: MongoDB with Mongoose ODM.
- **Modules**:
  - Site Settings & Contacts
  - Notices & Circulars
  - Teachers Directory
  - Photo Gallery
  - Syllabi & Downloads
  - Scholarships & Endowments
  - Student Clubs & Co-curricular Activities
  - Achievements
  - Admissions Enquiries
  - Contact Messages
  - Alumni Directory
- **CORS Enabled**: Supports incoming requests from the landing page and admin dashboard.

## Getting Started

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment:**
   Copy `.env.example` to `.env` and provide your MongoDB connection string:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/ppm_hss_db
   JWT_SECRET=ppmhss_jwt_super_secret_key_2025
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```

3. **Seed initial database (Optional):**
   ```bash
   npm run seed
   ```

4. **Run the server:**
   ```bash
   # Development (with auto-restart via nodemon)
   npm run dev

   # Production
   npm start
   ```

5. **API Endpoints:**
   - `POST /api/auth/login` - Admin login (returns JWT token)
   - `GET /api/auth/me` - Current admin profile (requires Bearer token)
   - `GET /api/stats` - Summary counters
   - `GET, PUT /api/settings` - School configuration & contacts
   - `GET, POST, PUT, DELETE /api/notices` - Notices & Circulars
   - `GET, POST, PUT, DELETE /api/teachers` - Faculty members
   - `GET, POST, PUT, DELETE /api/gallery` - Photo gallery
   - `GET, POST, PUT, DELETE /api/resources` - Study materials & downloads
   - `GET, POST, PUT, DELETE /api/scholarships` - Scholarships
   - `GET, POST, PUT, DELETE /api/clubs` - Clubs & Activities
   - `GET, POST, PUT, DELETE /api/achievements` - Student achievements
   - `POST /api/enquiries` - Submit admission enquiry
   - `GET, PUT, DELETE /api/enquiries` - Manage enquiries (Admin)
   - `POST /api/contacts` - Submit contact message
   - `GET, PUT, DELETE /api/contacts` - Manage contact messages (Admin)
   - `POST /api/alumni` - Submit alumni registration
   - `GET, PUT, DELETE /api/alumni` - Manage alumni registrations (Admin)

