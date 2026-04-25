// src/pages/Certificates.jsx

import { useState } from "react";

export default function Certificates() {

  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { title: "C Programming", img: "/certificates/ciscoC.jpeg" },
    { title: "Python", img: "/certificates/ciscoPython.jpeg" },
    { title: "AI-ML Internship", img: "/certificates/EduskillsAWS-AIML.jpeg" },
    { title: "Cybersecurity", img: "/certificates/EduskillsCyberSecurity.jpeg" },
    { title: "Java Full Stack", img: "/certificates/EduskillsJAVAFullStack.jpeg" },
    { title: "SQL", img: "/certificates/HackerRankSQL.jpeg" },
    { title: "MS Excel", img: "/certificates/MicrosoftMSExcel.jpeg" },
    { title: "Power BI", img: "/certificates/MicrosoftPowerBI.jpeg" },
    { title: "Web Full Stack", img: "/certificates/EduskillsWEBFULLSTACK.jpeg" },
    { title: "NPTEL Java", img: "/certificates/NPTELJAVA.jpeg" },
    { title: "Power BI Workshop", img: "/certificates/PowerBI.jpeg" },
    { title: "TOEFL", img: "/certificates/Tofel.jpeg" },
  ];

  return (
    <div className="min-h-screen px-6 py-16 
    bg-white dark:bg-[#020617] 
    text-black dark:text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-12">
        My Certificates
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(cert.img)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg 
            bg-gray-100 dark:bg-gray-900 
            hover:scale-105 transition duration-300"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">
                {cert.title}
              </h2>
            </div>
          </div>
        ))}

      </div>

      {/* ✅ POPUP MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}