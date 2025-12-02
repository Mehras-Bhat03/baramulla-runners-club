export function initFooter() {
  return `
    <footer class="footer">
      <style>
        .footer {
          background: linear-gradient(135deg, var(--dark) 0%, #1a1a2e 100%);
          color: var(--white);
          padding: 3rem 0 1.5rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2.5rem;
        }
        
        .footer-brand h3 {
          color: var(--white);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .footer-tagline {
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.125rem;
          margin-bottom: 1rem;
          font-weight: 700;
          font-family: var(--font-heading);
        }
        
        .footer-description {
          color: var(--gray-medium);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          transition: var(--transition);
        }
        
        .social-link:hover {
          background: var(--orange-light);
          transform: translateY(-3px);
        }
        
        .footer-links h4 {
          color: var(--white);
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
        }
        
        .footer-links ul {
          list-style: none;
        }
        
        .footer-links ul li {
          margin-bottom: 0.875rem;
        }
        
        .footer-links ul li a {
          color: var(--gray-medium);
          transition: var(--transition);
          font-size: 0.9375rem;
        }
        
        .footer-links ul li a:hover {
          color: var(--orange-light);
          padding-left: 5px;
        }
        
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: var(--gray-medium);
          font-size: 0.9375rem;
        }
        
        .footer-bottom p {
          margin-bottom: 0.5rem;
        }
        
        .footer-heart {
          color: var(--orange);
          animation: pulse 2s infinite;
        }
        
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: var(--gradient-warm);
          color: var(--dark);
          border: none;
          border-radius: 50%;
          font-size: 1.25rem;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-warm);
          transition: var(--transition);
          z-index: 999;
        }
        
        .back-to-top.show {
          display: flex;
        }
        
        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 24px rgba(255, 159, 28, 0.4);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .back-to-top {
            width: 45px;
            height: 45px;
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      </style>
      
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Baramulla Runners Club</h3>
            <p class="footer-tagline">Run. Connect. Inspire.</p>
            <p class="footer-description">
              A welcoming community of runners in Baramulla, Jammu & Kashmir. Join us as we run together, support each other, and create lasting friendships.
            </p>
            <div class="footer-social">
              <a href="https://www.instagram.com/baramulla_runnersclub/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link" aria-label="WhatsApp" style="cursor: not-allowed; opacity: 0.5;">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h4>Community</h4>
            <ul>
              <li><a href="#testimonials">Member Stories</a></li>
              <li><a href="#join">Join Us</a></li>
              <li><a href="#contact">Connect</a></li>
              <li><a href="https://www.instagram.com/baramulla_runnersclub/" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Baramulla Runners Club. All rights reserved.</p>
          <p>Made with <span class="footer-heart">❤</span> for our running family</p>
        </div>
      </div>
      
      <button id="backToTop" class="back-to-top" aria-label="Back to top">
        <i class="fas fa-arrow-up"></i>
      </button>
    </footer>
  `;
}
