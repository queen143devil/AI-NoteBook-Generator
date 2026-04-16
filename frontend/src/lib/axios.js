import axios from "axios";
import { API_BASE_URL } from "../utils/api-endpoints";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 80000,
  headers: {
    Accept: "application/json",
  },
});

/* ---------------- REQUEST INTERCEPTOR ---------------- */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Only attach if valid
    if (token && token !== "null" && token !== "undefined") {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    // Let browser set content-type automatically for FormData
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ---------------- RESPONSE INTERCEPTOR ---------------- */
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error?.response?.status;

    // 🔐 Auto logout if token expired
    if (status === 401) {
      console.warn("Session expired. Logging out...");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    // 🔥 Server error
    if (status === 500) {
      console.error("Server error. Please try again later.");
    }

    // ⏳ Timeout
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Server may be slow.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
