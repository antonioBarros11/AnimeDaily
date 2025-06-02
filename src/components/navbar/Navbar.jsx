import { Link } from "react-router-dom";
import { useState } from "react";
import { useClickOutside } from "../../utils/useClickOutside";
import LoginPopup from "../loginPopup/LoginPopup";
import RegisterPopup from "../loginRegister/RegisterPopup";
import { useUserContext } from "../../context/UserContext";
import { Cookies } from "react-cookie";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [animateLogin, setAnimateLogin] = useState(false);
  const [animateSignup, setAnimateSignup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userData, handleUser } = useUserContext();
  const cookies = new Cookies();

  const loginRef = useClickOutside(() => closeLogin());
  const signupRef = useClickOutside(() => closeSignup());

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(!showLogin);
    setAnimateLogin(!showLogin);
  };

  const handleLogout = () => {
    handleUser(null);
    
    cookies.remove("sessionToken");
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(!showSignup);
    setAnimateSignup(!showSignup);
  };

  const closeLogin = () => {
    setAnimateLogin(false);
    setTimeout(() => setShowLogin(false), 300);
  };

  const closeSignup = () => {
    setAnimateSignup(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="lg:pb-12">
      <div className="mx-auto w-full px-2 md:px-8">
        <header className="flex items-center justify-between py-2 md:py-4">
          <Link
            to="/"
            className="inline-flex cursor-pointer items-center gap-2"
            aria-label="logo"
          >
            <img src="/logoNavbar.png" alt="Logo" className="h-10 lg:h-12" />
          </Link>

          <nav className="hidden gap-12 lg:flex">
            <Link
              to="/anime-news"
              className="text-dm font-semibold  text-white hover:text-gray-400"
            >
              Noticias
            </Link>
            <Link
              to="/anime-popular"
              className="text-dm font-semibold text-white hover:text-gray-400"
            >
              Populares
            </Link>
            <Link
              to="/anime-search"
              className="text-dm font-semibold text-white hover:text-gray-400"
            >
              Buscar
            </Link>
          </nav>

          {!userData ? (
            <div className="hidden lg:flex gap-4 items-center">
              <button
                onClick={openLogin}
                className="text-dm font-semibold cursor-pointer text-white hover:hover:text-gray-400"
              >
                Login
              </button>
              <button
                onClick={openSignup}
                className="text-dm font-semibold cursor-pointer text-white bg-[#5925DC] px-6 py-2 rounded-full hover:bg-purple-900"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-end gap-4">
                <div className="font-medium dark:text-white">
                  {userData.username}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold text-white bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </>
          )}

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center gap-2 rounded-lg text-white px-2.5 py-2 text-sm font-semibold  hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </header>

        {isMobileMenuOpen && (
          <nav className="flex flex-col gap-4  lg:hidden">
            <Link
              to="/anime-search"
              className="text-base font-medium text-white hover:text-indigo-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buscar
            </Link>
            <Link
              to="/anime-news"
              className="text-base font-medium text-white hover:text-indigo-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Noticias
            </Link>
            <Link
              to="/anime-popular"
              className="text-base font-medium text-white hover:text-indigo-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Populares
            </Link>

            {!userData ? (
              <div className="flex flex-col gap-4  justify-center">
                <button
                  onClick={() => {
                    openLogin();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold text-gray-500 hover:text-indigo-500"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    openSignup();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold text-white bg-indigo-500 px-4 py-1 rounded-lg hover:bg-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-end gap-4">
                  <div className="font-medium dark:text-white">
                    {userData.username}
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold text-white bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        )}

        {showLogin && (
          <LoginPopup
            show={showLogin}
            onClose={closeLogin}
            animate={animateLogin}
            ref={loginRef}
          />
        )}

        {showSignup && (
          <RegisterPopup
            show={showSignup}
            onClose={closeSignup}
            animate={animateSignup}
            ref={signupRef}
          />
        )}
      </div>
    </div>
  );
}
