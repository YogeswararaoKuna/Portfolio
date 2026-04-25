// src/pages/Hero.jsx

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-start justify-center pt-20 px-10 
      bg-white dark:bg-[#020617] 
      text-black dark:text-white transition duration-500"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] 
            rounded-full overflow-hidden 
            border-4 border-black dark:border-white 
            shadow-2xl transform transition duration-500 
            hover:scale-110"
          >
            <img
              src="/profile.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 text-center md:text-left">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <br />
            <span className="block">
              YOGESWARA RAO KUNA
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            A passionate <span className="font-semibold">Full-Stack Developer </span> 
            building modern and scalable web applications.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-6 justify-center md:justify-start">

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download="YogeswaraRao_Resume.pdf"
              className="px-8 py-4 rounded-full text-lg 
              bg-black text-white 
              dark:bg-white dark:text-black 
              hover:opacity-80 transition"
            >
              Download Resume
            </a>

            {/* ✅ FIXED BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full text-lg border 
              border-black text-black 
              dark:border-white dark:text-white 
              hover:bg-black hover:text-white 
              dark:hover:bg-white dark:hover:text-black 
              transition"
            >
              Approach Me
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}