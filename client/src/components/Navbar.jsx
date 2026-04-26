// src/components/Navbar.jsx

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  const linkClass = (path) =>
    `block text-center py-2 ${
      location.pathname === path
        ? "font-bold text-black dark:text-white"
        : "text-gray-600 dark:text-gray-300"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#020617] shadow-md">

      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* LOGO */}
        <div className="bg-black text-white dark:bg-white dark:text-black 
        w-10 h-10 flex items-center justify-center 
        rounded-full font-bold shadow-md">
          YK
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 font-medium">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/about" className={linkClass("/about")}>About</Link>
          <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link to="/certificates" className={linkClass("/certificates")}>Certificates</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* ICONS (DESKTOP) */}
          <div className="hidden md:flex gap-4 text-lg">
            <a href="https://github.com/YogeswararaoKuna" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black dark:text-white hover:scale-110 transition" />
            </a>

            <a href="https://www.linkedin.com/in/yogeswara-rao-kuna-a166802b9" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
            </a>

            <a href="https://leetcode.com/u/kuna_yogeswararao/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="text-orange-500 hover:scale-110 transition" />
            </a>

            <a href="https://youtube.com/@yogidhoni?si=i3zL4SCPigHWB-P3" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-500 hover:scale-110 transition" />
            </a>
          </div>

          {/* DARK MODE */}
          <button
            onClick={toggleDark}
            className="border px-2 py-1 rounded-md text-sm 
            border-black dark:border-white"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-black dark:text-white"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#020617] 
        px-6 py-4 space-y-4 border-t dark:border-gray-700">

          {/* NAV LINKS */}
          <div className="flex flex-col gap-2 text-lg font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className={linkClass("/")}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className={linkClass("/about")}>About</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className={linkClass("/projects")}>Projects</Link>
            <Link to="/certificates" onClick={() => setMenuOpen(false)} className={linkClass("/certificates")}>Certificates</Link>
          </div>

          {/* ICONS (MOBILE FIXED VISIBILITY) */}
          <div className="flex justify-center gap-6 text-2xl pt-3">

            <a href="https://github.com/YogeswararaoKuna" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black dark:text-white" />
            </a>

            <a href="https://www.linkedin.com/in/yogeswara-rao-kuna-a166802b9" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500" />
            </a>

            <a href="https://leetcode.com/u/kuna_yogeswararao/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="text-orange-500" />
            </a>

            <a href="https://youtube.com/@yogidhoni?si=i3zL4SCPigHWB-P3" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-500" />
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}