import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://97d9-186-98-248-119.ngrok-free.app/api/animes",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

export default axiosInstance;
