import React, { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 80 });
    window.addEventListener("pageshow", () => AOS.refreshHard());
    return () => window.removeEventListener("pageshow", () => AOS.refreshHard());
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    emailjs
      .sendForm(
        'service_6tjs1wn',
        'template_dmwd64h',
        formRef.current,
        'iSknp5FonKfYVjmhC'
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setError(true);
          setLoading(false);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white py-20"
      id="contact"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Info */}
          <div className="flex-1 mb-12 md:mb-0">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-300">I'm open to discussing web development projects, collaborations, or anything creative.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-blue-400 mr-2" />
              <a href="mailto:examplepradeep6969@gmail.com" className="hover:underline">
                examplepradeep6969@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-blue-400 mr-2" />
              <span>+91 81180 35316</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-blue-400 mr-2" />
              <span>Street, City, Country, State</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-blue-500 focus:outline-none focus:border-blue-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-blue-500 focus:outline-none focus:border-blue-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-blue-500 focus:outline-none focus:border-blue-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>

              {/* Send Button with Icon or Spinner */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="min-w-[300px] min-h-[60px] bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg md:text-xl transform transition-transform duration-300 hover:scale-110 rounded-full font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send
                    </>
                  )}
                </button>
              </div>

              {/* Feedback */}
              {success && <p className="text-blue-400 mt-2 text-center">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-2 text-center">Failed to send message. Try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
