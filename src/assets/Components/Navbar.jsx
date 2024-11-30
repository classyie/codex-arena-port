import { useState } from "react";
import logo from "../imgs/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuss = [
    "Home",
    "About us",
    "Services",
    "Our Projects",
    "Articles",
    "Contact us",
    "Support",
  ];

  return (
    <>
      <nav
        className="bg-white border-gray-200 sticky top-0 z-50"
        style={{ backgroundColor: "#F7F9F9" }}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href="/"
          >
            <img src={logo} className="h-8 rounded-lg" alt="Network Error" />
            <span className="self-center text-2xl whitespace-nowrap font-arkitech dark:text-black font-extrabold">
              Codex Arena
            </span>
          </a>
          <button
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            aria-controls="navbar-default"
            style={{ backgroundColor: "#1B1A1D" }}
            aria-expanded={isMenuOpen}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile Navbar */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-0 left-0 w-full mt-16 h-full bg-black bg-opacity-50 transition-all ease-in-out duration-300 z-50 md:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium ease-in-out border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#F7F9F9] bg-[#F7F9F9]">
              {menuss.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      href={`#${data}`}
                    >
                      {data}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex md:w-auto" id="navbar-default-desktop">
            <ul className="flex flex-col p-4 mt-4 font-medium ease-in-out border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#F7F9F9] dark:border-gray-700">
              {menuss.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      href={`#${data}`}
                    >
                      {data}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
