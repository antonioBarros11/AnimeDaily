import { useState } from "react";
import { authLogin, authRegister } from "../../service/authService";
import { useUserContext } from "../../context/UserContext";
import { useCookies } from "react-cookie";

export default function RegisterPopup({ show, onClose, animate, ref }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleUser, userData } = useUserContext();
  const [cookies, setCookie] = useCookies(["sessionToken"]);

  const handleRegister = async () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("Completa los campos.");
      return;
    }
    setError("");
    const result = await authRegister({
      userName: username,
      email: email,
      password: password,
    });

    if (result.error) {
      setError(result.error);
      return;
    }
    console.log("Usuario registrado:", result);
    const userResponse = await authLogin(email, password);
    if (!userResponse) return;

    setCookie("sessionToken", userResponse.data.token, { path: "/" });
    handleUser({
      correo: userResponse.data.user.correo,
      username: userResponse.data.user.username,
    });
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className={`w-full flex justify-end absolute top-20 right-4 z-50 ${
        animate ? "fade-in" : "fade-out"
      }`}
    >
      <div ref={ref} className="w-[350px] bg-white rounded-3xl shadow-xl p-8">
        <div className="flex flex-col items-center gap-6 ">
          <div className="flex gap-2 items-center mb-2">
            <img src="/logoLogin.png" alt="Logo" className="w-8 h-8" />
            <h2 className="text-2xl font-bold text-gray-800">Register</h2>
          </div>

          <form>
            <div className="w-60 h-12 relative flex rounded-xl">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required=""
                className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl border border-[#4070f4] focus:shadow-md"
                id="address"
                type="text"
              />
              <label
                className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                for="address"
              >
                Username
              </label>
            </div>
          </form>

          <form>
            <div className="w-60 h-12 relative flex rounded-xl">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required=""
                className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl border border-[#4070f4] focus:shadow-md"
                id="address"
                type="text"
              />
              <label
                className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                for="address"
              >
                Email
              </label>
            </div>
          </form>

          <form>
            <div className="w-60 h-12 relative flex rounded-xl">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
                className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl border border-[#4070f4] focus:shadow-md"
                id="address"
                type="text"
              />
              <label
                className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                for="address"
              >
                Password
              </label>
            </div>
          </form>
          {error && (
            <div className="relative w-full max-w-64 flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-lg text-base font-medium border border-[#f85149] text-[#b22b2b] group bg-[linear-gradient(#f851491a,#f851491a)]">
              <button
                type="button"
                aria-label="close-error"
                className="absolute right-4 p-1 rounded-md transition-opacity text-[#f85149] border border-[#f85149] opacity-40 hover:opacity-100"
                onClick={() => setError("")}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="16"
                  width="16"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
              <p className="flex flex-row items-center mr-auto gap-x-2">
                {error}
              </p>
            </div>
          )}

          <button
            onClick={handleRegister}
            className="w-[150px] bg-indigo-600 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#5925DC] before:to-[rgb(80,10,160)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
