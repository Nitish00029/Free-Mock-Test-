import React, { useState } from "react";
import { FaPlay, FaSearch, FaGraduationCap, FaBookOpen } from "react-icons/fa";

const MyCourses = () => {
  const [search, setSearch] = useState("");

  const tests = [
    {
      id: 1,
      title: "10th Mathematics Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 2,
      title: "10th Hindi Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 4,
      title: "10th English Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 5,
      title: "10th Social science Test Series",
      button: "Start",
      link: "/class-10-social-science"
    },
    {
      id: 6,
      title: "10th Science Test Series",
      button: "Start",
      link: "/class-10-science"
    },
    {
      id: 7,
      title: "12th Physic Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 8,
      title: "12th Chemistry Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 9,
      title: "12th Biology Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 10,
      title: "12th Hindi Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 11,
      title: "12th English Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 12,
      title: "12th Mathematics Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 13,
      title: "12th Accountancy Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 14,
      title: "12th Business Studies Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 15,
      title: "12th Economics Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 16,
      title: "12th Entepreneurship Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 17,
      title: "12th History Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 18,
      title: "12th Poltical Science Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 19,
      title: "12th Geography Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 20,
      title: "12th Economics Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 21,
      title: "12th Sociology Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 22,
      title: "12th Psychology Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 23,
      title: "12th Philosophy Test Series",
      button: "Start",
      link: "/bssc"
    },
    {
      id: 24,
      title: "12th Home Science Test Series",
      button: "Start",
      link: "/bssc"
    },
  ];

  const filteredTests = tests.filter((test) =>
    test.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="my-courses-page">
      <div className="my-courses-container">
        {/* Header Section */}
        <div className="courses-header">
          <div className="header-content">
            <div className="header-icon">
              <FaGraduationCap />
            </div>
            <div>
              <h1 className="header-title">My Mock Tests</h1>
              <p className="header-subtitle">
                <FaBookOpen className="inline mr-2" />
                {tests.length} tests available for you
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search mock test by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="clear-btn"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">{filteredTests.length}</span>
            <span className="stat-label">Tests Found</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{tests.length}</span>
            <span className="stat-label">Total Tests</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">⭐ 4.8</span>
            <span className="stat-label">Avg Rating</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="courses-grid">
          {filteredTests.map((test) => (
            <div key={test.id} className="course-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-number">#{test.id}</div>
                  <div className="card-badge">Mock Test</div>
                </div>
                <h2 className="card-title">{test.title}</h2>
                <div className="card-footer">
                  <button
                    onClick={() => window.location.href = test.link}
                    className="start-btn"
                  >
                    <FaPlay className="btn-icon" />
                    {test.button} Practice
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Result */}
        {filteredTests.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">No tests found</h3>
            <p className="empty-text">
              We couldn't find any mock tests matching your search.
            </p>
            <button
              onClick={() => setSearch("")}
              className="empty-btn"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .my-courses-page {
          min-height: 100vh;
          background: #f0f7ff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 20px 0 40px 0;
        }

        .my-courses-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .courses-header {
          background: linear-gradient(135deg, #1a3a5c 0%, #2c5f8a 50%, #4a90d9 100%);
          border-radius: 20px;
          padding: 30px 35px;
          margin-bottom: 25px;
          position: relative;
          overflow: hidden;
        }

        .courses-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 18px;
          position: relative;
          z-index: 2;
        }

        .header-icon {
          width: 55px;
          height: 55px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .header-title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin: 0;
        }

        .header-subtitle {
          color: rgba(255,255,255,0.8);
          font-size: 0.95rem;
          margin: 2px 0 0 0;
          display: flex;
          align-items: center;
        }

        /* Search */
        .search-wrapper {
          margin-bottom: 20px;
        }

        .search-container {
          position: relative;
          background: white;
          border-radius: 14px;
          padding: 4px 4px 4px 45px;
          box-shadow: 0 4px 20px rgba(74, 144, 217, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .search-container:focus-within {
          border-color: #4a90d9;
          box-shadow: 0 8px 30px rgba(74, 144, 217, 0.15);
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 16px;
        }

        .search-input {
          width: 100%;
          padding: 14px 45px 14px 0;
          border: none;
          outline: none;
          font-size: 1rem;
          background: transparent;
          color: #1a3a5c;
        }

        .search-input::placeholder {
          color: #94a3b8;
        }

        .clear-btn {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: #e2e8f0;
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          font-size: 14px;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .clear-btn:hover {
          background: #cbd5e1;
          color: #1a3a5c;
        }

        /* Stats Bar */
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 30px;
          background: white;
          border-radius: 14px;
          padding: 16px 30px;
          margin-bottom: 25px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          border: 1px solid #e8f0fe;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a3a5c;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .stat-divider {
          width: 2px;
          height: 35px;
          background: #e8f0fe;
        }

        /* Grid */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .course-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #e8f0fe;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(74, 144, 217, 0.12);
          border-color: #4a90d9;
        }

        .card-content {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .card-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: #94a3b8;
          background: #f1f5f9;
          padding: 2px 10px;
          border-radius: 6px;
        }

        .card-badge {
          font-size: 0.65rem;
          font-weight: 600;
          color: #4a90d9;
          background: #dbeafe;
          padding: 3px 12px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1a3a5c;
          line-height: 1.4;
          margin: 0 0 15px 0;
          flex: 1;
          min-height: 48px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          margin-top: auto;
        }

        .start-btn {
          width: 100%;
          padding: 12px 20px;
          background: linear-gradient(135deg, #4a90d9 0%, #3a7bc8 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(74, 144, 217, 0.3);
        }

        .start-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(74, 144, 217, 0.4);
          background: linear-gradient(135deg, #3a7bc8 0%, #2c5f8a 100%);
        }

        .btn-icon {
          font-size: 12px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 16px;
          border: 2px dashed #e8f0fe;
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 16px;
        }

        .empty-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a3a5c;
          margin-bottom: 8px;
        }

        .empty-text {
          color: #94a3b8;
          margin-bottom: 20px;
          font-size: 1rem;
        }

        .empty-btn {
          padding: 10px 30px;
          background: #4a90d9;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .empty-btn:hover {
          background: #3a7bc8;
          transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 18px;
          }
        }

        @media (max-width: 768px) {
          .my-courses-page {
            padding: 12px 0 30px 0;
          }

          .my-courses-container {
            padding: 0 16px;
          }

          .courses-header {
            padding: 24px 25px;
            border-radius: 16px;
          }

          .header-icon {
            width: 45px;
            height: 45px;
            font-size: 22px;
          }

          .header-title {
            font-size: 1.5rem;
          }

          .header-subtitle {
            font-size: 0.85rem;
          }

          .stats-bar {
            padding: 14px 20px;
            gap: 20px;
            flex-wrap: wrap;
          }

          .stat-number {
            font-size: 1.2rem;
          }

          .courses-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 16px;
          }

          .card-content {
            padding: 18px 20px 20px;
          }

          .card-title {
            font-size: 0.95rem;
            min-height: 42px;
          }

          .start-btn {
            font-size: 0.9rem;
            padding: 11px 16px;
          }
        }

        @media (max-width: 640px) {
          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .header-icon {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .header-title {
            font-size: 1.3rem;
          }

          .stats-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .stat-divider {
            display: none;
          }

          .stat-item {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            width: 100%;
            justify-content: space-between;
          }

          .courses-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .card-content {
            padding: 16px 18px 18px;
          }

          .card-title {
            font-size: 0.9rem;
            min-height: 38px;
          }

          .search-container {
            padding: 4px 4px 4px 40px;
          }

          .search-icon {
            left: 14px;
            font-size: 14px;
          }

          .search-input {
            font-size: 0.9rem;
            padding: 12px 40px 12px 0;
          }

          .clear-btn {
            right: 12px;
            width: 24px;
            height: 24px;
            font-size: 12px;
          }

          .empty-state {
            padding: 40px 16px;
          }

          .empty-icon {
            font-size: 3rem;
          }

          .empty-title {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 380px) {
          .courses-header {
            padding: 18px 16px;
          }

          .header-title {
            font-size: 1.1rem;
          }

          .card-content {
            padding: 14px 16px 16px;
          }

          .card-title {
            font-size: 0.85rem;
            min-height: 36px;
          }

          .start-btn {
            font-size: 0.8rem;
            padding: 10px 14px;
          }
        }

        /* Tablet specific optimizations */
        @media (min-width: 768px) and (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }

          .card-title {
            min-height: 52px;
            font-size: 0.95rem;
          }

          .header-title {
            font-size: 1.8rem;
          }

          .stats-bar {
            padding: 16px 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default MyCourses;