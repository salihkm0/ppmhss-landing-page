const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const getToken = () => localStorage.getItem("ppm_admin_jwt");
export const setToken = (token) => localStorage.setItem("ppm_admin_jwt", token);
export const removeToken = () => localStorage.removeItem("ppm_admin_jwt");

export async function apiRequest(endpoint, options = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;
  const response = await fetch(url, { ...options, headers });
  const data = await response.json();

  if (response.status === 401) {
    removeToken();
    window.dispatchEvent(new Event("auth:logout"));
  }

  if (!response.ok || data.success === false) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}

export const api = {
  login: (credentials) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
  getMe: () => apiRequest("/auth/me"),
  getStats: () => apiRequest("/stats"),
  getSettings: () => apiRequest("/settings"),
  updateSettings: (data) =>
    apiRequest("/settings", { method: "PUT", body: JSON.stringify(data) }),

  // Entities
  getNotices: (search = "") => apiRequest(`/notices${search ? `?search=${encodeURIComponent(search)}` : ""}`),
  createNotice: (data) => apiRequest("/notices", { method: "POST", body: JSON.stringify(data) }),
  updateNotice: (id, data) => apiRequest(`/notices/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteNotice: (id) => apiRequest(`/notices/${id}`, { method: "DELETE" }),

  getTeachers: (search = "") => apiRequest(`/teachers${search ? `?search=${encodeURIComponent(search)}` : ""}`),
  createTeacher: (data) => apiRequest("/teachers", { method: "POST", body: JSON.stringify(data) }),
  updateTeacher: (id, data) => apiRequest(`/teachers/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteTeacher: (id) => apiRequest(`/teachers/${id}`, { method: "DELETE" }),

  getGallery: (search = "") => apiRequest(`/gallery${search ? `?search=${encodeURIComponent(search)}` : ""}`),
  createGallery: (data) => apiRequest("/gallery", { method: "POST", body: JSON.stringify(data) }),
  updateGallery: (id, data) => apiRequest(`/gallery/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteGallery: (id) => apiRequest(`/gallery/${id}`, { method: "DELETE" }),

  getResources: (search = "") => apiRequest(`/resources${search ? `?search=${encodeURIComponent(search)}` : ""}`),
  createResource: (data) => apiRequest("/resources", { method: "POST", body: JSON.stringify(data) }),
  updateResource: (id, data) => apiRequest(`/resources/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteResource: (id) => apiRequest(`/resources/${id}`, { method: "DELETE" }),

  getScholarships: () => apiRequest("/scholarships"),
  createScholarship: (data) => apiRequest("/scholarships", { method: "POST", body: JSON.stringify(data) }),
  updateScholarship: (id, data) => apiRequest(`/scholarships/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteScholarship: (id) => apiRequest(`/scholarships/${id}`, { method: "DELETE" }),

  getClubs: () => apiRequest("/clubs"),
  createClub: (data) => apiRequest("/clubs", { method: "POST", body: JSON.stringify(data) }),
  updateClub: (id, data) => apiRequest(`/clubs/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteClub: (id) => apiRequest(`/clubs/${id}`, { method: "DELETE" }),

  getAchievements: () => apiRequest("/achievements"),
  createAchievement: (data) => apiRequest("/achievements", { method: "POST", body: JSON.stringify(data) }),
  updateAchievement: (id, data) => apiRequest(`/achievements/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteAchievement: (id) => apiRequest(`/achievements/${id}`, { method: "DELETE" }),

  getEnquiries: () => apiRequest("/enquiries"),
  updateEnquiry: (id, data) => apiRequest(`/enquiries/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteEnquiry: (id) => apiRequest(`/enquiries/${id}`, { method: "DELETE" }),

  getContacts: () => apiRequest("/contacts"),
  updateContact: (id, data) => apiRequest(`/contacts/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteContact: (id) => apiRequest(`/contacts/${id}`, { method: "DELETE" }),

  getAlumni: () => apiRequest("/alumni"),
  updateAlumni: (id, data) => apiRequest(`/alumni/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteAlumni: (id) => apiRequest(`/alumni/${id}`, { method: "DELETE" }),
};

