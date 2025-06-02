import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { authRefresh } from "../../service/authService";
import { UserProvider } from "../../context/UserContext";

export default function Layout() {
  
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}
