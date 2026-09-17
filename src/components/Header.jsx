import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaBook, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/vivek.png'; // ✅ Your logo

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, []);

  // ✅ Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // ✅ Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    setMobileMenuOpen(false);
    navigate('/');
    scrollToTop();
    alert('You have been logged out successfully!');
  };

  // ✅ Handle navigation with scroll to top
  const handleNavigation = (e) => {
    setMobileMenuOpen(false);
    scrollToTop();
  };

  // ✅ Navigation links in correct order: Home, My Courses, About, Contact
  const navLinks = [
    { text: 'Home', path: '/', icon: FaHome },
    { text: 'My Courses', path: '/my-courses', icon: FaBook },
    { text: 'About', path: '/about', icon: FaInfoCircle },
    { text: 'Contact', path: '/contact', icon: FaEnvelope }
  ];

  // ✅ Check if link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-gradient-to-r from-[#0f1724] via-[#1a2332] to-[#0f1724] py-3 sticky top-0 z-[1000] shadow-lg border-b-2 border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* ✅ Logo - Fixed sizing */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link, i) => {
              const active = isActiveLink(link.path);
              const Icon = link.icon;
              
              return (
                <Link
                  key={i}
                  to={link.path}
                  className={`
                    relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm lg:text-base
                    ${active 
                      ? 'text-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20' 
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                    }
                    group
                  `}
                  onClick={scrollToTop}
                >
                  <span className="flex items-center gap-2">
                    <Icon className={`text-sm ${active ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'}`} />
                    {link.text}
                  </span>
                  
                  {/* ✅ Active indicator - Education themed underline */}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></span>
                  )}
                  
                  {/* ✅ Hover effect */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop - User info & logout */}
          <div className="hidden md:flex gap-4 items-center">
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <FaUser className="text-gray-900 text-sm" />
                  </div>
                  <span className="text-yellow-400 font-medium text-sm">
                    {userData?.name || 'User'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600/90 hover:bg-red-700 px-4 py-2 rounded-full transition duration-200 text-sm font-medium border border-red-500/30 hover:shadow-lg hover:shadow-red-600/20"
                >
                  <FaSignOutAlt className="text-xs" />
                  Logout
                </button>
              </>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden text-yellow-400 focus:outline-none p-2 hover:bg-yellow-400/10 rounded-lg transition duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[1040]"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu */}
          <div 
            ref={mobileMenuRef}
            className="md:hidden fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-[#1a2332] to-[#0f1724] p-6 z-[1050] shadow-2xl border-l-4 border-yellow-500/30 transform transition-all duration-300 ease-in-out"
          >
            {/* Close button inside menu */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition duration-200"
            >
              <FaTimes size={24} />
            </button>

            {/* Logo in mobile menu */}
            <div className="mb-8 pt-4">
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
              <div className="h-1 w-16 bg-yellow-400 rounded-full mt-2"></div>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link, i) => {
                const active = isActiveLink(link.path);
                const Icon = link.icon;
                
                return (
                  <Link
                    key={i}
                    to={link.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base
                      ${active 
                        ? 'bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400' 
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                      }
                    `}
                    onClick={handleNavigation}
                  >
                    <Icon className={`text-lg ${active ? 'text-yellow-400' : 'text-gray-400'}`} />
                    <span className="font-medium">{link.text}</span>
                    {active && (
                      <span className="ml-auto text-yellow-400">•</span>
                    )}
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="my-4 border-t border-gray-700/50"></div>

              {/* Mobile - User info & logout */}
              {isLoggedIn ? (
                <div className="space-y-3 mt-2">
                  <div className="flex items-center gap-3 bg-yellow-400/10 px-4 py-3 rounded-lg border border-yellow-400/20">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                      <FaUser className="text-gray-900" />
                    </div>
                    <div>
                      <div className="text-yellow-400 font-medium">{userData?.name || 'User'}</div>
                      <div className="text-gray-500 text-xs">Student</div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-red-600/90 hover:bg-red-700 px-4 py-3 rounded-lg transition duration-200 font-medium border border-red-500/30"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;