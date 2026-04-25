// src/components/Navbar.jsx

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const location = useLocation();

  // Load theme
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

  // Toggle dark mode
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

  // Active link style
  const linkClass = (path) =>
    `cursor-pointer ${
      location.pathname === path
        ? "font-bold text-black dark:text-white"
        : "text-gray-600 dark:text-gray-300"
    } hover:text-black dark:hover:text-white transition`;

  return (
    <div className="flex justify-between items-center px-8 py-4 
    bg-white dark:bg-[#020617] 
    dark:text-white transition duration-300 shadow-sm">

      {/* LEFT MENU */}
      <div className="flex gap-6 font-medium">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/about" className={linkClass("/about")}>About</Link>
        <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
        <Link to="/certificates" className={linkClass("/certificates")}>Certificates</Link>
      </div>

      {/* CENTER LOGO */}
      <div className="bg-black text-white dark:bg-white dark:text-black 
      w-10 h-10 flex items-center justify-center 
      rounded-full font-bold shadow-md">
        YK
      </div>

      {/* RIGHT ICONS */}
      <div className="flex gap-5 text-xl items-center">

        {/* GitHub */}
        <a href="https://github.com/YogeswararaoKuna" target="_blank" rel="noreferrer">
          <FaGithub className="cursor-pointer hover:scale-110 hover:opacity-70 transition" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/yogeswara-rao-kuna-a166802b9" target="_blank" rel="noreferrer">
          <FaLinkedin className="cursor-pointer hover:scale-110 hover:opacity-70 transition" />
        </a>

        {/* LeetCode */}
        <a href="https://leetcode.com/u/kuna_yogeswararao/" target="_blank" rel="noreferrer">
          <SiLeetcode className="cursor-pointer hover:scale-110 hover:opacity-70 transition" />
        </a>

        {/* YouTube */}
        <a href="https://youtube.com/@yogidhoni?si=i3zL4SCPigHWB-P3" target="_blank" rel="noreferrer">
          <FaYoutube className="cursor-pointer hover:scale-110 hover:opacity-70 transition" />
        </a>

        {/* DARK MODE */}
        <button
          onClick={toggleDark}
          className="border px-3 py-1 rounded-lg text-sm 
          border-black dark:border-white 
          hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
    </div>
  );
}