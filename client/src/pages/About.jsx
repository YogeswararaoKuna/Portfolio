// src/pages/About.jsx

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPython,
  SiC,
} from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 
    bg-white dark:bg-[#020617] 
    text-black dark:text-white transition duration-500">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        About Me
      </h1>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">

        {/* IMAGE (ENLARGED) */}
        <div className="md:w-1/3 flex justify-center">
          <div
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] 
            rounded-full overflow-hidden 
            border-4 border-black dark:border-white 
            shadow-2xl 
            transition duration-500 hover:scale-105"
          >
            <img
              src="/profile.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="md:w-2/3 text-center md:text-left space-y-6">

          {/* BIG INTRO */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            I'm <span className="font-bold">Yogeswara Rao Kuna</span>
          </h2>

          {/* PROFESSIONAL ROLE */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            A dedicated <span className="font-semibold">Full Stack Developer </span> 
            and <span className="font-semibold">Data Analytics Enthusiast </span> 
            focused on building scalable web applications and extracting meaningful insights from data.
          </p>

          {/* PROFESSIONAL DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I specialize in developing modern web applications using the MERN stack and creating 
            interactive dashboards using tools like Power BI, SQL, and Python. I enjoy solving 
            real-world problems, optimizing performance, and designing user-friendly systems that 
            deliver value.
          </p>

          {/* HIGHLIGHT BOX */}
          <div className="p-5 rounded-xl bg-gray-100 dark:bg-[#1e293b] shadow-md">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Passionate about continuous learning, clean code, and building impactful solutions 
              in both software development and data analytics.
            </p>
          </div>

        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            { icon: <FaJava />, name: "Java" },
            { icon: <SiPython />, name: "Python" },
            { icon: <SiC />, name: "C" },
            { icon: <FaDatabase />, name: "SQL" },
            { icon: <FaReact />, name: "React" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <FaGitAlt />, name: "Git" },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl text-center 
              bg-gray-100 dark:bg-[#1e293b]
              shadow-md hover:shadow-xl 
              transition duration-300 hover:scale-105"
            >
              <div className="text-4xl mx-auto mb-3">
                {skill.icon}
              </div>
              <h3 className="text-md font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}