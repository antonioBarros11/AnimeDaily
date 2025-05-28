import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  title,
  options,
  selectedOption,
  handleSelectedOption,
}) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left px-2 w-44"
      ref={dropdownRef}
    >
      {title && <p className="mb-1 font-medium text-white text-sm">{title}</p>}

      <button
        type="button"
        onClick={() => {
          if (selectedOption) {
            handleSelectedOption(""); 
            setIsOpenDropdown(false);
          } else {
            setIsOpenDropdown(!isOpenDropdown); 
          }
        }}
        className="inline-flex justify-between items-center w-full px-3 py-2 text-sm font-normal text-white bg-[#1e1f26] rounded-md hover:bg-[#2a2b31] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        aria-haspopup="true"
        aria-expanded={isOpenDropdown}
      >
        {selectedOption || "Seleccion"}

        {selectedOption ? (
          
          <svg
            className="w-4 h-4 ml-2 text-red-400 hover:text-red-600 transition"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isOpenDropdown ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {isOpenDropdown && (
        <div className="absolute mt-1 z-20 max-h-56 w-full overflow-y-auto bg-[#1e1f26] rounded-md shadow-lg scrollbar-hide">
          <ul className="py-1 text-sm text-white">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleSelectedOption(option);
                    setIsOpenDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-[#2a2b31] transition"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
