import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": "d65c16d4409f4a1fa40bc8ab0e99d3e8",
  },
});

export default axiosInstance;
