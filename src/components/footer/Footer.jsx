import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl  text-white">
        <div className="flex flex-col items-center justify-evenly gap-6 border-t border-b py-10 md:flex-row">
          <Link to="/">
            <img
              src="/LogoFooter.png"
              alt="Logo"
              className="w-43 my-1 hover:drop-shadow-[2px_2px_8px_rgba(255,255,255,0.5)] duration-200"
            />
          </Link>
          <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 md:gap-8">
            <Link to="/anime-news">
              <p className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                Noticias
              </p>
            </Link>

            <Link to="/anime-popular">
              <p className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                Populares
              </p>
            </Link>

            <Link
              to="/anime-search"
              className=" text-white/60 hover:text-white transition-colors duration-200"
            >
              <p className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                Más Animes
              </p>
            </Link>
          </nav>
          <div className="flex gap-8 justify-center items-center">
            <a
              href="https://www.instagram.com/antony.v31"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <div className="group relative inline-block">
                <button className="focus:outline-none">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
                    fill="currentColor"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                  </svg>
                </button>
                <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                  Instagram
                </span>
              </div>
            </a>

            <a
              href="https://github.com/antonioBarros11/AnimeDaily"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <div className="group relative inline-block">
                <button className="focus:outline-none">
                  <svg
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </button>
                <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                  GitHub
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="py-8 text-center text-sm text-white">
          © 2025 - Present AnimeDaily. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
