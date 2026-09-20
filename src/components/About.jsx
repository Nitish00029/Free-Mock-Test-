import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaUsers, 
  FaAward, 
  FaClock, 
  FaChartBar,
  FaCheckCircle,
  FaUserGraduate,
  FaTrophy,
  FaLaptopCode,
  FaBrain,
  FaCalendarAlt,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaBullseye,
  FaEye,
  FaRocket
} from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();

  // 🔝 Helper: scroll to top + navigate
  const goToPage = (path) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate(path);
  };

  const features = [
    {
      icon: <FaBookOpen className="text-3xl text-white" />,
      title: "Comprehensive Test Series",
      description: "Access mock tests for Bihar Daroga, Bihar Police, Group D, GD, 10th & 12th BSEB Board, and Daily Current Affairs.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <FaBrain className="text-3xl text-white" />,
      title: "Real Exam Simulation",
      description: "Experience actual exam pattern with time-bound tests, real difficulty levels, and authentic question patterns.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaClock className="text-3xl text-white" />,
      title: "24/7 Access",
      description: "Practice anytime, anywhere with our platform. Take mock tests at your convenience, 24 hours a day.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <FaChartBar className="text-3xl text-white" />,
      title: "Detailed Performance Analysis",
      description: "Get comprehensive insights with subject-wise analysis, progress tracking, and comparison with toppers.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const exams = [
    {
      name: "Bihar Daroga",
      icon: <FaGraduationCap className="text-5xl" />,
      tests: "50+ Mock Tests",
      students: "25,000+ Students",
      color: "from-indigo-500 to-purple-600",
      path: "/bihar-daroga"
    },
    {
      name: "Bihar Police",
      icon: <FaUserGraduate className="text-5xl" />,
      tests: "40+ Mock Tests",
      students: "30,000+ Students",
      color: "from-blue-500 to-indigo-600",
      path: "/bihar-police"
    },
    {
      name: "Group D",
      icon: <FaUsers className="text-5xl" />,
      tests: "35+ Mock Tests",
      students: "20,000+ Students",
      color: "from-green-500 to-teal-600",
      path: "/group-d"
    },
    {
      name: "GD (General Duty)",
      icon: <FaTrophy className="text-5xl" />,
      tests: "30+ Mock Tests",
      students: "18,000+ Students",
      color: "from-red-500 to-pink-600",
      path: "/ssc-gd"
    },
    {
      name: "10th BSEB Board",
      icon: <FaBookOpen className="text-5xl" />,
      tests: "45+ Mock Tests",
      students: "35,000+ Students",
      color: "from-yellow-500 to-orange-600",
      path: "/bseb-10-12"
    },
    {
      name: "12th BSEB Board",
      icon: <FaLaptopCode className="text-5xl" />,
      tests: "45+ Mock Tests",
      students: "28,000+ Students",
      color: "from-purple-500 to-pink-600",
      path: "/bseb-10-12"
    },
    {
      name: "Daily Current Affairs",
      icon: <FaCalendarAlt className="text-5xl" />,
      tests: "365+ Quizzes",
      students: "40,000+ Students",
      color: "from-cyan-500 to-blue-600",
      path: "/daily-current-affairs"
    },
    {
      name: "BSSC Exams",
      icon: <FaAward className="text-5xl" />,
      tests: "30+ Mock Tests",
      students: "22,000+ Students",
      color: "from-pink-500 to-rose-600",
      path: "/bssc"
    },
    {
      name: "Bihar CTET",
      icon: <FaGraduationCap className="text-5xl" />,
      tests: "25+ Mock Tests",
      students: "15,000+ Students",
      color: "from-emerald-500 to-green-600",
      path: "/bihar-ctet"
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Active Students", icon: <FaUsers /> },
    { number: "250+", label: "Mock Tests Available", icon: <FaBookOpen /> },
    { number: "98%", label: "Success Rate", icon: <FaTrophy /> },
    { number: "7+", label: "Exam Categories", icon: <FaAward /> }
  ];

  const testimonials = [
    {
      name: "Amit Kumar",
      exam: "Bihar Daroga 2023",
      quote: "The mock tests were incredibly helpful. The questions were very close to the actual exam pattern. I cleared my exam in first attempt!",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Priya Singh",
      exam: "BSEB 12th Board 2024",
      quote: "I practiced daily on this platform. The detailed solutions and analysis helped me identify my weak areas and improve significantly.",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Rahul Sharma",
      exam: "Bihar Police 2023",
      quote: "The time management feature was a game-changer. I could simulate real exam conditions and build confidence for the main exam.",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const whyPracticePoints = [
    "Latest exam pattern and updated syllabus",
    "Detailed solutions with step-by-step explanations",
    "Performance tracking and progress reports",
    "Expert tips and strategies for each exam",
    "Previous year question papers and practice sets",
    "Bilingual support (Hindi & English) for all tests"
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      
      {/* ==================== Hero Section ==================== */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse">
            <span className="text-sm font-semibold">🎯 India's Most Trusted Mock Test Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            About Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Mock Test Platform
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-indigo-100">
            Your Gateway to Success in Bihar's Most Competitive Examinations
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-white/20 shadow-2xl">
            <FaQuoteLeft className="text-4xl text-yellow-300 mb-4 mx-auto" />
            <p className="text-lg md:text-xl italic leading-relaxed">
              "Empowering students with high-quality mock tests, comprehensive study materials, and 
              expert guidance to crack Bihar's most competitive examinations."
            </p>
          </div>

          {/* Quick CTA in hero — USING onClick to scroll top */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={() => goToPage('/my-courses')}
              className="bg-white text-indigo-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Explore Tests <FaArrowRight />
            </button>
            <button
              onClick={() => goToPage('/contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-indigo-700 transition-all inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ==================== Mission & Vision ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <FaBullseye className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide accessible, high-quality, and affordable mock test preparation to every 
                student in Bihar. We aim to level the playing field and ensure that every aspirant 
                gets the best chance to succeed in competitive examinations.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <FaEye className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the preferred mock test platform for students across Bihar, known for our 
                quality content, innovative features, and proven track record of producing successful 
                candidates in every competitive exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Why Choose Us ==================== */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality mock tests, comprehensive analysis, and expert guidance — all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-indigo-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Stats Section ==================== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto text-center">
            {achievements.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl text-yellow-300 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-2">{stat.number}</div>
                <div className="text-indigo-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Exams Section ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              EXAM CATEGORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Exam Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive preparation for all major competitive exams in Bihar — 
              <span className="font-semibold text-indigo-600"> click any card to start practicing</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {exams.map((exam, index) => (
              // 👇 Using button + onClick instead of Link, to guarantee scroll-to-top
              <button
                key={index}
                onClick={() => goToPage(exam.path)}
                className={`group relative bg-gradient-to-br ${exam.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden text-left w-full`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {exam.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{exam.name}</h3>
                  <div className="flex justify-between text-sm opacity-90 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full">{exam.tests}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">{exam.students}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Start Practicing <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Testimonials ==================== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from students who achieved their dreams with our mock tests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
              >
                <FaQuoteLeft className={`absolute top-4 right-4 text-4xl bg-gradient-to-br ${testimonial.color} bg-clip-text text-transparent opacity-20`} />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-indigo-600 font-medium">{testimonial.exam}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Why Practice with Us ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                BENEFITS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Practice with Us?
              </h2>
              <ul className="space-y-4">
                {whyPracticePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="bg-indigo-100 group-hover:bg-indigo-600 rounded-full p-1 mt-1 flex-shrink-0 transition-colors">
                      <FaCheckCircle className="text-indigo-600 group-hover:text-white text-sm transition-colors" />
                    </div>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <FaRocket className="text-5xl text-yellow-300 mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="mb-6 text-indigo-100 text-lg">
                  Join 50,000+ students who are already preparing for their dream exams with us.
                </p>
                <button
                  onClick={() => goToPage('/my-courses')}
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl hover:scale-105 w-full justify-center"
                >
                  Start Free Trial <FaArrowRight />
                </button>
                <p className="text-center text-sm mt-4 text-indigo-200">
                  No credit card required • Free forever plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Final CTA Section ==================== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your Exam Preparation Today!
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-indigo-100">
            Access the best mock tests in Bihar and take the first step towards your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => goToPage('/my-courses')}
              className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Explore Tests <FaArrowRight />
            </button>
            <button
              onClick={() => goToPage('/bihar-exam')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-700 transition-all inline-flex items-center justify-center gap-2"
            >
              View All Exams
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
