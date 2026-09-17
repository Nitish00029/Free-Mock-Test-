import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1>📞 Contact Us</h1>
          <p>We're here to help you 24×7</p>
        </div>

        {/* Main Contact Card */}
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p className="sub-text">Our support team is available around the clock to assist you with any issues.</p>

          {/* WhatsApp Support */}
          <div className="contact-section whatsapp-section">
            <h3>💬 WhatsApp Live Chat Support</h3>
            <p className="availability">✅ Available 24×7</p>
            
            <div className="contact-item">
              <span className="icon">📱</span>
              <div className="contact-details">
                <span className="label">Primary:</span>
                <a 
                  href="https://wa.me/917520655059" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +91 7520655059
                </a>
                <span className="badge whatsapp-badge">Chat Now</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📱</span>
              <div className="contact-details">
                <span className="label">Alternate:</span>
                <a 
                  href="https://wa.me/917631309758" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +91 7631309758
                </a>
                <span className="badge whatsapp-badge">Chat Now</span>
              </div>
            </div>
          </div>

          {/* Email Support */}
          <div className="contact-section email-section">
            <h3>📧 Email Support</h3>
            
            <div className="contact-item">
              <span className="icon">📧</span>
              <div className="contact-details">
                <span className="label">Email 1:</span>
                <a href="mailto:support1@ludogame.com" className="email-link">
                  support1@ludogame.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📧</span>
              <div className="contact-details">
                <span className="label">Email 2:</span>
                <a href="mailto:support2@ludogame.com" className="email-link">
                  support2@ludogame.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Response Info */}
          <div className="quick-response">
            <div className="response-time">
              <span className="response-icon">⚡</span>
              <div className="response-text">
                <h4>Quick Response</h4>
                <p>Avg. &lt; 2 min on WhatsApp</p>
              </div>
            </div>
            <div className="response-time">
              <span className="response-icon">🕐</span>
              <div className="response-text">
                <h4>24×7 Support</h4>
                <p>Available all day, every day</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>❓ Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>How do I contact support?</h4>
            <p>Simply click on any WhatsApp number above to start a live chat instantly.</p>
          </div>
          <div className="faq-item">
            <h4>Is the support really 24×7?</h4>
            <p>Yes! Our support team is available 24 hours a day, 7 days a week.</p>
          </div>
          <div className="faq-item">
            <h4>How quickly will I get a response?</h4>
            <p>We typically respond within 2 minutes on WhatsApp.</p>
          </div>
        </div>

        {/* Back Button */}
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back to Game
        </button>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .contact-container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Header Styles */
        .contact-header {
          text-align: center;
          color: white;
          margin-bottom: 24px;
          padding: 0 4px;
        }

        .contact-header h1 {
          font-size: 2.2rem;
          margin-bottom: 6px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          word-break: break-word;
        }

        .contact-header p {
          font-size: 1.1rem;
          opacity: 0.95;
        }

        /* Contact Card */
        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 28px 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
        }

        .contact-card h2 {
          color: #2c3e50;
          font-size: 1.6rem;
          margin-bottom: 4px;
        }

        .sub-text {
          color: #666;
          margin-bottom: 22px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Contact Sections */
        .contact-section {
          margin-bottom: 20px;
          padding: 18px 16px;
          border-radius: 12px;
          background: #f8f9fa;
        }

        .contact-section:last-child {
          margin-bottom: 0;
        }

        .whatsapp-section {
          border-left: 5px solid #25D366;
        }

        .email-section {
          border-left: 5px solid #667eea;
        }

        .contact-section h3 {
          color: #2c3e50;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .availability {
          color: #25D366;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 14px;
        }

        /* Contact Items */
        .contact-item {
          display: flex;
          align-items: center;
          padding: 12px 14px;
          background: white;
          border-radius: 10px;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          gap: 12px;
        }

        .contact-item:last-child {
          margin-bottom: 0;
        }

        .contact-item:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .icon {
          font-size: 1.4rem;
          flex-shrink: 0;
          width: 36px;
          text-align: center;
        }

        .contact-details {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px 10px;
          min-width: 0;
        }

        .label {
          font-weight: 600;
          color: #555;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        /* WhatsApp Links */
        .whatsapp-link {
          color: #25D366;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          word-break: break-word;
        }

        .whatsapp-link:hover {
          background: #25D366;
          color: white;
        }

        .whatsapp-link:active {
          background: #1da851;
          color: white;
          transform: scale(0.97);
        }

        /* Email Links */
        .email-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          word-break: break-all;
        }

        .email-link:hover {
          background: #667eea;
          color: white;
        }

        .email-link:active {
          background: #5a6fd6;
          color: white;
          transform: scale(0.97);
        }

        /* Badge */
        .badge {
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }

        .whatsapp-badge {
          background: #25D366;
          color: white;
        }

        /* Quick Response */
        .quick-response {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 22px;
        }

        .response-time {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          background: #f0f4ff;
          border-radius: 10px;
          gap: 12px;
        }

        .response-icon {
          font-size: 1.6rem;
          flex-shrink: 0;
        }

        .response-text {
          flex: 1;
          min-width: 0;
        }

        .response-text h4 {
          color: #2c3e50;
          font-size: 0.95rem;
          margin-bottom: 2px;
        }

        .response-text p {
          color: #666;
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.3;
        }

        /* FAQ Section */
        .faq-section {
          background: white;
          border-radius: 16px;
          padding: 24px 24px 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
        }

        .faq-section h3 {
          color: #2c3e50;
          font-size: 1.3rem;
          margin-bottom: 18px;
          text-align: center;
        }

        .faq-item {
          padding: 14px 0;
          border-bottom: 1px solid #eee;
        }

        .faq-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .faq-item:first-child {
          padding-top: 0;
        }

        .faq-item h4 {
          color: #2c3e50;
          margin-bottom: 5px;
          font-size: 0.95rem;
        }

        .faq-item p {
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }

        /* Back Button */
        .back-button {
          display: block;
          width: 100%;
          padding: 16px;
          background: white;
          color: #667eea;
          border: 2px solid white;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
          -webkit-tap-highlight-color: transparent;
        }

        .back-button:hover {
          background: transparent;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .back-button:active {
          transform: scale(0.97);
          background: rgba(255, 255, 255, 0.2);
        }

        /* ============================================ */
        /* RESPONSIVE BREAKPOINTS */
        /* ============================================ */

        /* Tablet */
        @media (max-width: 768px) {
          .contact-page {
            padding: 16px 12px;
          }

          .contact-card {
            padding: 24px 20px;
          }

          .contact-header h1 {
            font-size: 2rem;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .contact-page {
            padding: 12px 10px;
            align-items: flex-start;
            padding-top: 16px;
          }

          .contact-card {
            padding: 20px 16px;
            border-radius: 14px;
          }

          .contact-card h2 {
            font-size: 1.4rem;
          }

          .sub-text {
            font-size: 0.9rem;
            margin-bottom: 18px;
          }

          .contact-section {
            padding: 16px 14px;
            margin-bottom: 16px;
          }

          .contact-section h3 {
            font-size: 1rem;
          }

          .contact-item {
            padding: 12px;
            flex-wrap: wrap;
            gap: 8px;
          }

          .contact-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            width: 100%;
          }

          .label {
            font-size: 0.8rem;
            width: 100%;
          }

          .whatsapp-link {
            font-size: 0.95rem;
            padding: 4px 6px;
            width: 100%;
          }

          .email-link {
            font-size: 0.9rem;
            padding: 4px 6px;
            width: 100%;
            word-break: break-all;
          }

          .badge {
            font-size: 0.6rem;
            padding: 2px 10px;
            align-self: flex-start;
          }

          .icon {
            font-size: 1.3rem;
            width: 32px;
          }

          .quick-response {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 18px;
          }

          .response-time {
            padding: 12px 14px;
          }

          .response-icon {
            font-size: 1.4rem;
          }

          .response-text h4 {
            font-size: 0.9rem;
          }

          .response-text p {
            font-size: 0.75rem;
          }

          .faq-section {
            padding: 20px 16px 16px;
            border-radius: 14px;
          }

          .faq-section h3 {
            font-size: 1.15rem;
            margin-bottom: 14px;
          }

          .faq-item {
            padding: 12px 0;
          }

          .faq-item h4 {
            font-size: 0.9rem;
          }

          .faq-item p {
            font-size: 0.85rem;
          }

          .contact-header {
            margin-bottom: 18px;
          }

          .contact-header h1 {
            font-size: 1.8rem;
          }

          .contact-header p {
            font-size: 0.95rem;
          }

          .back-button {
            padding: 14px;
            font-size: 1rem;
            border-radius: 10px;
          }
        }

        /* Small Mobile */
        @media (max-width: 400px) {
          .contact-page {
            padding: 8px 6px;
            padding-top: 12px;
          }

          .contact-card {
            padding: 16px 12px;
            border-radius: 12px;
          }

          .contact-card h2 {
            font-size: 1.2rem;
          }

          .sub-text {
            font-size: 0.85rem;
            margin-bottom: 14px;
          }

          .contact-section {
            padding: 14px 12px;
            margin-bottom: 12px;
          }

          .contact-section h3 {
            font-size: 0.9rem;
          }

          .contact-item {
            padding: 10px;
            gap: 6px;
            border-radius: 8px;
          }

          .icon {
            font-size: 1.1rem;
            width: 28px;
          }

          .label {
            font-size: 0.75rem;
          }

          .whatsapp-link {
            font-size: 0.85rem;
            padding: 3px 5px;
          }

          .email-link {
            font-size: 0.8rem;
            padding: 3px 5px;
          }

          .badge {
            font-size: 0.55rem;
            padding: 2px 8px;
          }

          .response-time {
            padding: 10px 12px;
          }

          .response-icon {
            font-size: 1.2rem;
          }

          .response-text h4 {
            font-size: 0.8rem;
          }

          .response-text p {
            font-size: 0.7rem;
          }

          .faq-section {
            padding: 16px 12px 12px;
            border-radius: 12px;
          }

          .faq-section h3 {
            font-size: 1rem;
          }

          .faq-item h4 {
            font-size: 0.85rem;
          }

          .faq-item p {
            font-size: 0.8rem;
          }

          .contact-header h1 {
            font-size: 1.5rem;
          }

          .contact-header p {
            font-size: 0.85rem;
          }

          .availability {
            font-size: 0.8rem;
          }

          .back-button {
            padding: 12px;
            font-size: 0.9rem;
            border-radius: 8px;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 350px) {
          .contact-card {
            padding: 14px 10px;
          }

          .contact-item {
            padding: 8px;
            flex-direction: column;
            align-items: stretch;
          }

          .icon {
            align-self: center;
          }

          .contact-details {
            padding-left: 0;
          }

          .whatsapp-link,
          .email-link {
            font-size: 0.8rem;
            padding: 2px 4px;
          }
        }

        /* Landscape Mode */
        @media (max-height: 500px) and (orientation: landscape) {
          .contact-page {
            padding: 10px 12px;
            align-items: flex-start;
          }

          .contact-header {
            margin-bottom: 12px;
          }

          .contact-header h1 {
            font-size: 1.6rem;
          }

          .contact-header p {
            font-size: 0.9rem;
          }

          .contact-card {
            padding: 16px 18px;
          }

          .contact-card h2 {
            font-size: 1.2rem;
          }

          .sub-text {
            font-size: 0.85rem;
            margin-bottom: 12px;
          }

          .contact-section {
            padding: 12px;
            margin-bottom: 10px;
          }

          .contact-section h3 {
            font-size: 0.9rem;
            margin-bottom: 8px;
          }

          .contact-item {
            padding: 8px 10px;
            margin-bottom: 6px;
          }

          .icon {
            font-size: 1.1rem;
            width: 28px;
          }

          .quick-response {
            grid-template-columns: 1fr 1fr;
            margin-top: 12px;
            gap: 8px;
          }

          .response-time {
            padding: 8px 12px;
          }

          .faq-section {
            padding: 14px 16px 12px;
          }

          .faq-item {
            padding: 8px 0;
          }

          .back-button {
            padding: 10px;
            font-size: 0.9rem;
          }
        }

        /* Touch Devices - Disable Hover Effects */
        @media (hover: none) {
          .contact-item:hover {
            transform: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          }

          .whatsapp-link:hover {
            background: transparent;
            color: #25D366;
          }

          .email-link:hover {
            background: transparent;
            color: #667eea;
          }

          .back-button:hover {
            background: white;
            color: #667eea;
            transform: none;
          }

          .whatsapp-link:active {
            background: #25D366;
            color: white;
          }

          .email-link:active {
            background: #667eea;
            color: white;
          }

          .back-button:active {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(0.97);
          }
        }

        /* High DPI Screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .contact-card,
          .faq-section {
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;