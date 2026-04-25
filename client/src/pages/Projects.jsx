// src/pages/Projects.jsx

export default function Projects() {

  const projects = [
    {
      title: "Auycure (MERN Stack)",
      description:
        "A healthcare web application built using MongoDB, Express, React, and Node.js with authentication and real-time features.",
      image: "/project1.png",
      tools: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/YogeswararaoKuna/HealthCare"
    },
    {
      title: "GymAnalytics Dashboard",
      description:
        "Analytics dashboard to track gym performance, user activity, and business insights.",
      image: "/project2.jpg",
      tools: ["Power BI", "Excel", "SQL", "Power Query"],
      link: "https://youtu.be/t_8K-6yoiG8"
    },
    {
      title: "SuperStore Analytics Dashboard",
      description:
        "Data analytics dashboard for sales, profit trends, and business insights.",
      image: "/project3.jpeg",
      tools: ["Power BI", "SQL", "Excel", "Python"],
      link: "https://youtu.be/sj3OwjJph3k"
    },
    {
      title: "Tourist Guide (Full Stack)",
      description:
        "A full stack application for travel planning, locations, and bookings.",
      image: "/project4.jpg",
      tools: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-white dark:bg-[#020617]">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-6 text-black dark:text-white">
        My Projects
      </h1>

      {/* SUBTEXT */}
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        Here are some of my projects showcasing my skills in full-stack development and data analytics.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              if (project.link !== "#") {
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
            className={`group rounded-xl overflow-hidden 
            bg-gray-100 dark:bg-[#1e293b] 
            shadow-md hover:shadow-xl 
            transition duration-300 hover:scale-[1.03]
            ${project.link !== "#" ? "cursor-pointer" : "cursor-not-allowed opacity-70"}`}
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {project.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-black text-white 
                    dark:bg-white dark:text-black"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* 🔥 STYLISH BUTTON */}
              {project.link !== "#" ? (
                <div className="inline-block">
                  <span
                    className="flex items-center gap-2 px-5 py-2 rounded-full 
                    bg-black text-white 
                    dark:bg-white dark:text-black 
                    text-sm font-medium 
                    transition duration-300 
                    group-hover:scale-105 
                    group-hover:shadow-lg"
                  >
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              ) : (
                <div className="inline-block px-5 py-2 rounded-full 
                bg-gray-300 text-gray-500 text-sm">
                  Coming Soon
                </div>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}