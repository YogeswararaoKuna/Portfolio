// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 
    dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center">
      
      <div className="bg-white dark:bg-gray-900 w-[95%] h-[92vh] 
      rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
      overflow-hidden border border-gray-200 dark:border-gray-700">
        
        <Navbar />
        <Hero />

      </div>
    </div>
  );
}