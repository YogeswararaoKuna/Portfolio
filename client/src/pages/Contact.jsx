// src/pages/Contact.jsx

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_u7hng2m",
        "template_xnuscby",
        form.current,
        "vPEAT4YKXHWRml5HFzITI"
      );

      alert("Message sent successfully ✅");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed ❌");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6
      bg-gradient-to-br from-gray-100 via-white to-gray-200
      dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]"
    >
      {/* CARD */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg p-10 rounded-2xl 
        backdrop-blur-lg bg-white/80 dark:bg-white/5
        border border-gray-200 dark:border-white/10
        shadow-2xl space-y-6 transition duration-500"
      >
        {/* ✅ HEADER */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Get In Touch
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Have a question, a project idea, or just want to say hello?
            Feel free to reach out using the form below, and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* NAME */}
        <div className="relative">
          <input
            type="text"
            name="user_name"
            required
            className="peer w-full px-4 pt-5 pb-2 rounded-lg border
            bg-transparent text-black dark:text-white
            border-gray-300 dark:border-gray-600
            focus:border-black dark:focus:border-white
            focus:outline-none"
          />
          <label
            className="absolute left-4 top-2 text-sm 
            text-gray-500 dark:text-gray-400
            transition-all
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-2 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
          >
            Name
          </label>
        </div>

        {/* EMAIL */}
        <div className="relative">
          <input
            type="email"
            name="user_email"
            required
            className="peer w-full px-4 pt-5 pb-2 rounded-lg border
            bg-transparent text-black dark:text-white
            border-gray-300 dark:border-gray-600
            focus:border-black dark:focus:border-white
            focus:outline-none"
          />
          <label
            className="absolute left-4 top-2 text-sm 
            text-gray-500 dark:text-gray-400
            transition-all
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-2 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
          >
            Email
          </label>
        </div>

        {/* SUBJECT */}
        <div className="relative">
          <input
            type="text"
            name="subject"
            required
            className="peer w-full px-4 pt-5 pb-2 rounded-lg border
            bg-transparent text-black dark:text-white
            border-gray-300 dark:border-gray-600
            focus:border-black dark:focus:border-white
            focus:outline-none"
          />
          <label
            className="absolute left-4 top-2 text-sm 
            text-gray-500 dark:text-gray-400
            transition-all
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-2 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
          >
            Subject
          </label>
        </div>

        {/* MESSAGE */}
        <div className="relative">
          <textarea
            name="message"
            rows="4"
            required
            className="peer w-full px-4 pt-5 pb-2 rounded-lg border
            bg-transparent text-black dark:text-white
            border-gray-300 dark:border-gray-600
            focus:border-black dark:focus:border-white
            focus:outline-none resize-none"
          />
          <label
            className="absolute left-4 top-2 text-sm 
            text-gray-500 dark:text-gray-400
            transition-all
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-2 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
          >
            Message
          </label>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold
          bg-black text-white 
          dark:bg-white dark:text-black
          hover:scale-105 hover:shadow-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}