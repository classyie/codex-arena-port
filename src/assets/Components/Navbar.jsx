import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import logo from "../imgs/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true); // State to track window size
  const [activeHash, setActiveHash] = useState(""); // Track active HashLink
  const location = useLocation(); // Get current location for HashLink active detection

  const handleLinkClick = (path) => {
    setIsMenuOpen(false); 
    if (path.startsWith("#")) {
      setActiveHash(path);
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/#Services", label: "Services", isHashLink: true },
    { path: "/#ContactUs", label: "Contact us", isHashLink: true },
    { path: "/team", label: "Our Team" },
  ];

  // Detect screen size and set the mobile flag
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 764); // Check if window width is more than 764px
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveHash(location.hash || "");
  }, [location]);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-gray-200"
      style={{ backgroundColor: "#F7F9F9" }}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to="/"
        >
          <img src={logo} className="h-8 rounded-lg lg:h-12 md:h-7" alt="Logo" />
          <span className="self-center text-2xl font-extrabold text-black md:text-xl lg:text-3xl md:pr- whitespace-nowrap font-arkitech">
            Codex Arena
          </span>
        </Link>
        <button
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white bg-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          } absolute top-0 left-0 w-full mt-16 bg-opacity-50 transition-all ease-in-out duration-300 z-50 md:hidden `}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg text-black bg-[#F7F9F9]">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.isHashLink ? (
                  <HashLink
                    smooth
                    to={item.path}
                    onClick={() => handleLinkClick(item.path.split("#")[1])}
                    className={`block px-3 py-2 text-black rounded ${
                      activeHash === item.path.split("#")[1]
                        ? "text-blue-700 font-bold"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {item.label}
                  </HashLink>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => handleLinkClick("")}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-black rounded ${
                        isActive ? "text-blue-700 font-bold" : "hover:bg-gray-200"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navbar (only visible if screen width > 764px) */}
        {isWideScreen && (
          <div className="flex">
            <ul className="flex flex-row p-0 mt-0 font-medium space-x-8 text-black bg-[#F7F9F9]">
              {navItems.map((item) => (
                <li key={item.path}>
                  {item.isHashLink ? (
                    <HashLink
                      smooth
                      to={item.path}
                      onClick={() => handleLinkClick(item.path.split("#")[1])}
                      className={`px-3 py-2 text-black rounded ${
                        activeHash === item.path.split("#")[1]
                          ? "text-blue-700 font-bold"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {item.label}
                    </HashLink>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => handleLinkClick("")}
                      className={({ isActive }) =>
                        `px-3 py-2 text-black rounded ${
                          isActive
                            ? "text-blue-700 font-bold"
                            : "hover:bg-gray-200"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
