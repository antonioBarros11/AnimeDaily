import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

const cookies = new Cookies();
const sessionToken = cookies.get("sessionToken");

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    "Refresh-Token": `${sessionToken}`,
  },
});

export default axiosInstance;
