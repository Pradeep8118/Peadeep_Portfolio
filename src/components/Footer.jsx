import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 60 });
    window.addEventListener("pageshow", () => AOS.refreshHard());
    return () => window.removeEventListener("pageshow", () => AOS.refreshHard());
  }, []);

  return (
    <footer
      className="bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white py-10 px-4 sm:px-6"
      id="footer"
      data-aos="fade-up"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Top section: About + Subscribe */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-12 mb-8">
          {/* About Text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Pradeep
            </h3>
            <p className="text-gray-400">Web Developer</p>
          </div>

          {/* Subscribe Form */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col sm:flex-row items-center w-full gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 p-2 rounded-lg sm:rounded-l-lg bg-gray-800 border border-blue-500 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg sm:rounded-r-lg hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row sm:justify-between gap-6 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pradeep. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start space-x-5 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100046774836573"
              className="text-blue-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Pradeep50142678"
              className="text-blue-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/hi-pradeep-patra/"
              className="text-blue-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Pradeep8118"
              className="text-blue-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex justify-center sm:justify-end space-x-5">
            <a href="#" className="text-blue-400 hover:text-white text-sm transition">
              Privacy
            </a>
            <a href="#" className="text-blue-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
