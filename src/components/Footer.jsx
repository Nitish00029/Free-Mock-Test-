import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaHeart, 
  FaArrowUp,
  FaTelegramPlane,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/vivek.png'; // Adjust the path according to your project structure

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Social media links
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61593944892381',
    youtube: 'https://www.youtube.com/@biharspecialmocktest',
    telegram: 'https://t.me/+pFsRLpD0wORkZTQ1',
    instagram: 'https://www.instagram.com/mastertest2?stkn=MW43bjh4a25wOHoxcw=='
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="Mock Test Logo" className="h-12 w-auto transform group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                MOCKTEST
              </span>
            </Link>
            <p className="text-gray-300 text-sm text-center md:text-left leading-relaxed mb-4">
              Your trusted platform for practice tests, exam preparation, and skill assessment.
            </p>
            
            {/* Social Media Icons - Updated */}
            <div className="flex space-x-3">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} className="hover:text-white" />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transform hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={20} className="hover:text-white" />
              </a>
              <a 
                href={socialLinks.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transform hover:scale-110 transition-all duration-300"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={20} className="hover:text-white" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} className="hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-blue-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-400"></span>
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link to="/" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Home</Link>
              <Link to="/mock-test" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Mock Test</Link>
              <Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">About Us</Link>
              <Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Contact</Link>
            </div>
          </div>

          {/* Exam Categories */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-green-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-400"></span>
              Exam Categories
            </h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link to="/exam/aptitude" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Aptitude Tests</Link>
              <Link to="/exam/reasoning" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Reasoning Tests</Link>
              <Link to="/exam/english" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">English Language</Link>
              <Link to="/exam/technical" onClick={scrollToTop} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Technical Tests</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-yellow-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400"></span>
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">123 MockTest St, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">+91 1234567890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">info@mocktest.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaClock className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm">Mon-Fri: 9AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 <span className="text-blue-400 font-semibold">MockTest</span>. All rights reserved.
              <span className="hidden sm:inline-block mx-2">|</span>
              <span className="text-xs text-gray-500">Made with <FaHeart className="inline text-red-500 animate-pulse" /> in India</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-white hover:underline transition-all duration-300">Privacy</Link>
              <Link to="/terms" onClick={scrollToTop} className="hover:text-white hover:underline transition-all duration-300">Terms</Link>
              <Link to="/safety" onClick={scrollToTop} className="hover:text-white hover:underline transition-all duration-300">Safety</Link>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-white hover:underline transition-all duration-300">Support</Link>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105"
            >
              <FaArrowUp className="animate-bounce" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;