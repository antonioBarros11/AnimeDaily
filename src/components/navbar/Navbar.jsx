import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useClickOutside } from "../../utils/useClickOutside";
import { authLogin } from "../../service/authService";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [animateLogin, setAnimateLogin] = useState(false);
  const [animateSignup, setAnimateSignup] = useState(false);

  {
    /**Login codigo */
  }

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [cookies, setCookie] = useCookies(["sessionToken"]);
  

  const handleLogin = async () => {
    const  userToken = await authLogin(loginEmail,loginPassword);
    if(!userToken){
      return;
   }

    setCookie("sessionToken", "12345", { path: "/" });
  };

  useEffect(() => {
    if (cookies.sessionToken) {
      console.log("estoy activo");
    } else {
      console.log("no estoy activo");
    }
  }, [cookies]);

  {
    /**Login codigo */
  }

  const loginRef = useClickOutside(() => closeLogin());
  const signupRef = useClickOutside(() => closeSignup());

  const handleSignup = () => {
    console.log("Signup ejecutado");
  };

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(!showLogin);
    setAnimateLogin(!showLogin);
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
    setTimeout(() => setShowSignup(false), 300);
  };

  return (
    <>
      <header className="flex flex-col w-full py-4 px-2 relative">
        <div className="w-full flex justify-around items-center">
          <Link to="/">
            <img
              src="/logoNavbar.png"
              alt="Logo"
              className="w-38 my-1 hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,0.5)] duration-200"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-4 text-white text-sm">
              <Link to="/anime-news">
                <li className="cursor-pointer hover:text-gray-300">Noticias</li>
              </Link>

              <Link to="/anime-popular">
                <li className="cursor-pointer hover:text-gray-300">
                  Populares
                </li>
              </Link>
            </ul>
          </nav>

          <div className="mr-2.5">
            <Link
              to="/anime-search"
              className="no-underline list-none text-white/60 hover:text-white transition-colors duration-200"
            >
              <p>Buscar...</p>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openLogin}
              className="bg-none border-none text-white/60 font-semibold text-sm cursor-pointer transition-colors duration-200 hover:text-white"
            >
              Login
            </button>

            <button
              onClick={openSignup}
              className="bg-[#5925dc] text-white font-bold border-none py-3 px-6 rounded-full text-sm cursor-pointer transition-colors duration-200 hover:bg-[#723ff1]"
            >
              SignUp
            </button>
          </div>
        </div>

        {showLogin && (
          <div
            className={`w-full flex justify-end absolute top-20 right-4 z-50 ${
              animateLogin ? "fade-in" : "fade-out"
            }`}
          >
            <div
              ref={loginRef}
              className="h-[300px] w-[300px] bg-[#5925DC] rounded-3xl shadow-lg"
            >
              <div className="flex flex-col items-center pt-10 gap-7">
                <div className="flex gap-2 items-center">
                  <img src="/logoLogin.png" alt="Logo" />
                  <h2 className="text-2xl font-bold text-white">Login</h2>
                </div>
                <div className="flex flex-col gap-2 px-6 w-full">
                  <input
                    onChange={(e) => {
                      setLoginEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                    className="border-b border-white bg-transparent text-white placeholder-white outline-none"
                  />
                  <input
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Contraseña"
                    className="border-b border-white bg-transparent text-white placeholder-white outline-none"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="text-[#5925DC] font-bold bg-[#D9D9D9] rounded-full px-8 py-2"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        )}

        {showSignup && (
          <div
            className={`w-full flex justify-end absolute top-20 right-4 z-50 ${
              animateSignup ? "fade-in" : "fade-out"
            }`}
          >
            <div
              ref={signupRef}
              className="h-[350px] w-[300px] bg-[#5925DC] rounded-3xl shadow-lg"
            >
              <div className="flex flex-col items-center pt-10 gap-4">
                <div className="flex gap-2 items-center">
                  <img src="/logoLogin.png" alt="Logo" />
                  <h2 className="text-2xl font-bold text-white">Register</h2>
                </div>
                <div className="flex flex-col gap-5 px-6 w-full">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="border-b border-white bg-transparent text-white placeholder-white outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Nombre Usuario"
                    className="border-b border-white bg-transparent text-white placeholder-white outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b border-white bg-transparent text-white placeholder-white outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="border-b border-white bg-transparent text-white placeholder-white outline-none"
                  />
                </div>
                <button
                  onClick={handleSignup}
                  className="text-[#5925DC] font-bold bg-[#D9D9D9] rounded-full px-8 py-2"
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
