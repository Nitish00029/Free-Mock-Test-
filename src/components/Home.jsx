import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleDailyAffairsClick = () => {
    navigate('/daily-current-affairs');
  };

  const handleExploreCourses = () => {
    navigate('/my-courses');
  };

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Hero Section - Welcome */}
        <div className="hero-section">
          <div className="hero-bg-pattern"></div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Welcome to ExamMaster
            </div>
            <h1>
              Your Journey to
              <span className="highlight"> Success</span>
              <br />
              Begins Here
            </h1>
            <p>
              Master competitive exams with our comprehensive mock tests, 
              daily current affairs, and expert-curated content. Join 50K+ 
              successful students.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleExploreCourses}>
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-secondary" onClick={handleDailyAffairsClick}>
                Daily Affairs
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">800+</span>
                <span className="stat-label">Mock Tests</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-element el1">📚</div>
            <div className="floating-element el2">🏆</div>
            <div className="floating-element el3">⭐</div>
            <div className="floating-element el4">🎯</div>
            <div className="hero-circle"></div>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search mock tests, categories, exams..." 
              className="search-input"
            />
            <div className="search-filters">
              <select className="filter-select">
                <option>All Categories</option>
                <option>BPSC</option>
                <option>UPSC</option>
                <option>Bihar Police</option>
                <option>SSC GD</option>
              </select>
              <select className="filter-select">
                <option>All Levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Advanced</option>
              </select>
            </div>
            <button className="search-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Daily Current Affairs Section */}
        <div className="daily-section">
          <div className="section-header">
            <div className="header-left">
              <span className="section-badge">📅 Daily Update</span>
              <h2>Current Affairs</h2>
              <p>Stay updated with today's most important news and events</p>
            </div>
            <button className="view-all" onClick={handleDailyAffairsClick}>
              View All →
            </button>
          </div>

          <div className="daily-grid">
            <div className="daily-card featured">
              <div className="card-badge">🔥 Top Story</div>
              <h3>Union Budget 2025-26 Highlights</h3>
              <p>Key announcements and policy changes including tax reforms and infrastructure spending.</p>
              <div className="card-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 25 Questions</span>
              </div>
              <button className="card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-card">
              <div className="card-badge blue">📰 Important</div>
              <h3>New Education Policy Updates</h3>
              <p>Major reforms in higher education and research initiatives.</p>
              <div className="card-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 18 Questions</span>
              </div>
              <button className="card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-card">
              <div className="card-badge green">🌍 Global</div>
              <h3>International Relations Updates</h3>
              <p>Diplomatic developments and strategic partnerships.</p>
              <div className="card-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 20 Questions</span>
              </div>
              <button className="card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-card">
              <div className="card-badge orange">💼 Economy</div>
              <h3>GDP Growth & Economic Outlook</h3>
              <p>Analysis of India's economic performance and projections.</p>
              <div className="card-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 22 Questions</span>
              </div>
              <button className="card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-section">
          <div className="section-header center">
            <span className="section-badge">Why Choose Us</span>
            <h2>Built for Your Success</h2>
            <p>Everything you need to crack competitive exams in one place</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Expert Curated Content</h3>
              <p>800+ mock tests designed by experienced educators and subject matter experts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Daily Current Affairs</h3>
              <p>Stay ahead with daily updates on national and international events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your performance with detailed analytics and personalized insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏅</div>
              <h3>Competitive Edge</h3>
              <p>Regular practice and expert tips to help you outperform the competition.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <div className="section-header center">
            <span className="section-badge">Testimonials</span>
            <h2>What Our Students Say</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The daily current affairs section is a game-changer! It helped me stay updated and ace my exams."</p>
              <div className="student">
                <div className="student-avatar">AK</div>
                <div>
                  <div className="student-name">Amit Kumar</div>
                  <div className="student-role">BPSC Topper 2024</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Best platform for exam preparation. The mock tests are challenging and very relevant."</p>
              <div className="student">
                <div className="student-avatar">PS</div>
                <div>
                  <div className="student-name">Priya Singh</div>
                  <div className="student-role">UPSC CSE 2024</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Daily practice with current affairs boosted my confidence. Highly recommended!"</p>
              <div className="student">
                <div className="student-avatar">RS</div>
                <div>
                  <div className="student-name">Rahul Sharma</div>
                  <div className="student-role">Bank PO 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Ace Your Exams?</h2>
            <p>Join thousands of aspirants and start your journey to success today</p>
            <div className="cta-actions">
              <button className="cta-primary" onClick={handleExploreCourses}>
                Start Free Trial
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="cta-secondary" onClick={handleDailyAffairsClick}>
                Explore Daily Affairs
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background: #f0f7ff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 20px 0 40px 0;
        }

        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #1a3a5c 0%, #2c5f8a 50%, #4a90d9 100%);
          border-radius: 24px;
          padding: 50px 50px 40px;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 40px;
          align-items: center;
        }

        .hero-bg-pattern {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 15px;
        }

        .highlight {
          color: #93c5fd;
          position: relative;
        }

        .hero-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 25px;
        }

        .hero-actions {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 35px;
          background: white;
          border: none;
          border-radius: 50px;
          color: #1a3a5c;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .btn-secondary {
          padding: 14px 30px;
          background: transparent;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
          transform: translateY(-3px);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #93c5fd;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .stat-divider {
          width: 2px;
          height: 40px;
          background: rgba(255,255,255,0.2);
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 300px;
        }

        .hero-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border: 2px solid rgba(255,255,255,0.1);
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .floating-element {
          position: absolute;
          font-size: 2.5rem;
          animation: float 6s ease-in-out infinite;
        }

        .el1 { top: 10%; left: 10%; animation-delay: 0s; }
        .el2 { top: 10%; right: 10%; animation-delay: 1s; }
        .el3 { bottom: 10%; left: 15%; animation-delay: 2s; }
        .el4 { bottom: 10%; right: 15%; animation-delay: 3s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }

        /* Search Section */
        .search-section {
          margin-bottom: 30px;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 16px;
          padding: 6px 6px 6px 20px;
          box-shadow: 0 4px 20px rgba(74, 144, 217, 0.1);
          gap: 12px;
          flex-wrap: wrap;
        }

        .search-icon {
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          padding: 14px 0;
          border: none;
          outline: none;
          font-size: 0.95rem;
          background: transparent;
          min-width: 150px;
          color: #1a3a5c;
        }

        .search-input::placeholder {
          color: #94a3b8;
        }

        .search-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-select {
          padding: 10px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.85rem;
          background: #f8fafc;
          color: #1a3a5c;
          cursor: pointer;
          outline: none;
          transition: all 0.3s ease;
        }

        .filter-select:hover {
          border-color: #4a90d9;
          background: white;
        }

        .search-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 30px;
          background: #4a90d9;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background: #3a7bc8;
          transform: scale(1.02);
        }

        /* Daily Section */
        .daily-section {
          margin-bottom: 40px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .section-header.center {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .header-left h2 {
          font-size: 1.8rem;
          color: #1a3a5c;
          margin: 5px 0 5px;
        }

        .header-left p {
          color: #64748b;
          font-size: 0.95rem;
        }

        .section-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4a90d9;
          background: #dbeafe;
          padding: 4px 14px;
          border-radius: 12px;
          letter-spacing: 0.5px;
        }

        .view-all {
          background: none;
          border: none;
          color: #4a90d9;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all:hover {
          color: #2c5f8a;
          transform: translateX(5px);
        }

        .daily-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .daily-card {
          background: white;
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid #e8f0fe;
        }

        .daily-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(74, 144, 217, 0.12);
          border-color: #4a90d9;
        }

        .daily-card.featured {
          grid-column: 1 / -1;
          border-left: 4px solid #4a90d9;
          background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
        }

        .card-badge {
          display: inline-block;
          padding: 3px 14px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
          background: #4a90d9;
          color: white;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-badge.blue { background: #3b82f6; }
        .card-badge.green { background: #22c55e; }
        .card-badge.orange { background: #f59e0b; }

        .daily-card h3 {
          font-size: 1.05rem;
          color: #1a3a5c;
          margin-bottom: 8px;
        }

        .daily-card p {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .card-meta {
          display: flex;
          gap: 15px;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 14px;
        }

        .card-btn {
          padding: 8px 25px;
          background: #4a90d9;
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .card-btn:hover {
          background: #3a7bc8;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(74, 144, 217, 0.3);
        }

        /* Why Section */
        .why-section {
          margin-bottom: 40px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: white;
          padding: 30px 25px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e8f0fe;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(74, 144, 217, 0.1);
          border-color: #4a90d9;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .feature-card h3 {
          color: #1a3a5c;
          font-size: 1.05rem;
          margin-bottom: 8px;
        }

        .feature-card p {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Testimonials */
        .testimonials-section {
          margin-bottom: 40px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          border: 1px solid #e8f0fe;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(74, 144, 217, 0.08);
        }

        .stars {
          color: #f59e0b;
          font-size: 1rem;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .testimonial-card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
          font-style: italic;
        }

        .student {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }

        .student-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #dbeafe;
          color: #4a90d9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .student-name {
          font-weight: 700;
          color: #1a3a5c;
          font-size: 0.9rem;
        }

        .student-role {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1a3a5c 0%, #4a90d9 100%);
          border-radius: 24px;
          padding: 50px 40px;
          text-align: center;
          color: white;
        }

        .cta-content h2 {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .cta-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .cta-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 35px;
          background: white;
          border: none;
          border-radius: 50px;
          color: #1a3a5c;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }

        .cta-secondary {
          padding: 14px 30px;
          background: transparent;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
          transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 40px 30px;
          }

          .hero-content p {
            margin: 0 auto 25px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            height: 200px;
          }

          .hero-circle {
            width: 150px;
            height: 150px;
          }

          .floating-element {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }

          .search-box {
            flex-direction: column;
            align-items: stretch;
            padding: 15px;
          }

          .search-filters {
            flex-direction: column;
          }

          .filter-select {
            width: 100%;
          }

          .search-btn {
            width: 100%;
            justify-content: center;
          }

          .daily-grid {
            grid-template-columns: 1fr;
          }

          .daily-card.featured {
            grid-column: 1;
          }

          .features-grid {
            grid-template-columns: 1fr 1fr;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .cta-content h2 {
            font-size: 1.8rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .hero-stats {
            gap: 15px;
            flex-wrap: wrap;
          }

          .stat-divider {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }

          .hero-section {
            padding: 30px 20px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .view-all {
            align-self: flex-start;
          }

          .floating-element {
            font-size: 1.5rem;
          }

          .hero-circle {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;