# PPM HSS Kottukkara Web Platform

Official digital platform for Panakkad Pookkoya Thangal Memorial Higher Secondary School (School Code: 11024), Kottukkara, Kondotty, Malappuram.

The project is organized into **3 distinct, dedicated folders**:

```
.
├── landing-page/      # Next.js 16 public landing page & school website
├── backend/           # Node.js + Express + MongoDB REST API server
└── admin-dashboard/   # React + Vite + Tailwind CSS admin control portal
```

---

## 1. `landing-page/` (Public School Portal)
Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS**.
- **Location**: [`landing-page/`](./landing-page)
- **Features**: Hero slider, institutional subpages (Vision, Leadership, PTA), academic streams, faculty directory, gallery with lightbox, study materials & downloads, admission inquiries, and alumni network.
- **Run independently**:
  ```bash
  cd landing-page
  npm install
  npm run dev     # Starts on http://localhost:3000
  ```

---

## 2. `backend/` (REST API Server)
Built with **Node.js**, **Express.js**, **Mongoose (MongoDB)**, and **JWT authentication**.
- **Location**: [`backend/`](./backend)
- **Features**: Full CRUD API endpoints for notices, faculty, gallery, downloads, scholarships, clubs, achievements, admission enquiries, and contact messages.
- **Run independently**:
  ```bash
  cd backend
  npm install
  npm run dev     # Starts on http://localhost:5000
  ```

---

## 3. `admin-dashboard/` (Administrative Control Panel)
Built with **React**, **Vite**, and **Tailwind CSS**.
- **Location**: [`admin-dashboard/`](./admin-dashboard)
- **Features**: Complete dashboard with metrics overview, live search, add/edit modals, status management, and real-time database updates.
- **Default Login**: `admin` / `admin123`
- **Run independently**:
  ```bash
  cd admin-dashboard
  npm install
  npm run dev     # Starts on http://localhost:5173
  ```

---

## Quick Root Commands
From the project root:
- `npm run dev:landing` - Run landing page (`localhost:3000`)
- `npm run dev:backend` - Run backend server (`localhost:5000`)
- `npm run dev:admin` - Run admin dashboard (`localhost:5173`)
- `npm run build` - Builds production landing page
