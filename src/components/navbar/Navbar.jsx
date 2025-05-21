import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="flex justify-around items-center w-full py-4 px-2">
      <div className="">
        <Link to="/">
          <img
            src="/logoNavbar.png"
            alt=""
            className="w-38 my-1 hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,0.5)] duration-200"
          />
        </Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-4 text-white text-sm">
          <Link to="/anime-news">
            <li className="cursor-pointer hover:text-gray-300">Noticias</li>
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

      <div className="flex items-center  lg: gap-4">
        <button className="bg-none border-none text-white/60 font-semibold text-sm cursor-pointer transition-colors duration-200 hover:text-white">
          Login
        </button>
        <button className="bg-[#5925dc] text-white font-bold border-none py-3 px-6 rounded-full text-sm cursor-pointer transition-colors duration-200 hover:bg-[#723ff1]">
          SignUp
        </button>
      </div>
    </header>
  );
}
