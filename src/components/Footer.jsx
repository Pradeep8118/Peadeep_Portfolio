import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Top section: About + Subscribe */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-12 mb-8">
          {/* About Text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Pradeep </h3>
          </div>

          {/* Subscribe Form */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col sm:flex-row items-center w-full gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 p-2 rounded-lg sm:rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg sm:rounded-r-lg "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row sm:justify-between gap-6 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pradeep. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start space-x-5">
            <a
              href="https://www.facebook.com/profile.php?id=100046774836573"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Pradeep50142678"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/hi-pradeep-patra/"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Pradeep8118"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex justify-center sm:justify-end space-x-5">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
