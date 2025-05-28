import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useClickOutside } from "../../utils/useClickOutside";
import { authLogin } from "../../service/authService";

export default function LoginPopup({ show, onClose, animate, ref }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [cookies, setCookie] = useCookies(["sessionToken"]);
  const [error, setError] = useState("");

  const loginRef = useClickOutside(() => onClose());

  const handleLogin = async () => {
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setError("");
    const userToken = await authLogin(loginEmail, loginPassword);
    if (!userToken) return;

    setCookie("sessionToken", userToken, { path: "/" });
  };

  useEffect(() => {
    if (cookies.sessionToken) {
      console.log("estoy activo");
    } else {
      console.log("no estoy activo");
    }
  }, [cookies]);

  if (!show) return null;

  return (
    <div
      className={`w-full flex justify-end absolute top-20 right-4 z-50 ${
        animate ? "fade-in" : "fade-out"
      }`}
    >
      <div ref={ref} className="w-[350px] bg-white rounded-3xl shadow-xl p-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-2 items-center mb-2">
            <img src="/logoLogin.png" alt="Logo" className="w-8 h-" />
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          </div>

          <div className="w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Tu correo"
              onChange={(e) => setLoginEmail(e.target.value)}
              className="block w-full h-11 px-5 py-2.5 bg-white text-base text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              onChange={(e) => setLoginPassword(e.target.value)}
              className="block w-full h-11 px-5 py-2.5 bg-white text-base text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center w-full -mt-2">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full h-11 cursor-pointer bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 rounded-full shadow-xs text-white text-base font-semibold"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
