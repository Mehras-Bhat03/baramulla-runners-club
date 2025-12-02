export function initContact() {
  return `
    <section id="contact" class="contact section">
      <style>
        .contact {
          background: linear-gradient(180deg, var(--cream) 0%, var(--white) 100%);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .contact-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: var(--transition);
          text-decoration: none;
          display: block;
        }
        
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        
        .contact-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          position: relative;
        }
        
        .contact-card.instagram .contact-icon {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }
        
        .contact-card.instagram .contact-icon i {
          color: var(--white);
        }
        
        .contact-card.whatsapp .contact-icon {
          background: #25D366;
        }
        
        .contact-card.whatsapp .contact-icon i {
          color: var(--white);
        }
        
        .contact-card h3 {
          color: var(--dark);
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
        }
        
        .contact-card p {
          color: var(--gray-dark);
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .contact-handle {
          display: inline-block;
          background: var(--gray-light);
          color: var(--dark);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9375rem;
          margin-top: 0.5rem;
        }
        
        .contact-card.instagram:hover .contact-handle {
          background: linear-gradient(45deg, #f09433 0%, #bc1888 100%);
          color: var(--white);
        }
        
        .contact-info {
          margin-top: 3rem;
          text-align: center;
          padding: 2.5rem;
          background: var(--white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }
        
        .contact-info h3 {
          color: var(--dark);
          margin-bottom: 1.5rem;
        }
        
        .info-items {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        
        .info-item i {
          font-size: 2rem;
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .info-item h4 {
          color: var(--gray-medium);
          font-size: 0.875rem;
          margin-bottom: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .info-item p {
          color: var(--dark);
          font-weight: 600;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .info-items {
            flex-direction: column;
            gap: 2rem;
          }
        }
      </style>
      
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Connect With Us</span>
          <h2 class="section-title">Let's Stay Connected</h2>
          <p class="section-description">
            Follow us on social media for daily inspiration, run updates, and community highlights!
          </p>
        </div>
        
        <div class="contact-grid">
          <a href="https://www.instagram.com/baramulla_runnersclub/" target="_blank" rel="noopener noreferrer" class="contact-card instagram">
            <div class="contact-icon">
              <i class="fab fa-instagram"></i>
            </div>
            <h3>Instagram</h3>
            <p>Follow us for daily inspiration, event updates, and community highlights</p>
            <span class="contact-handle">@baramulla_runnersclub</span>
          </a>
          
          <div class="contact-card whatsapp" style="cursor: not-allowed; opacity: 0.8;">
            <div class="contact-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <h3>WhatsApp</h3>
            <p>Join our community group chat (Coming Soon)</p>
            <span class="contact-handle">Link Coming Soon</span>
          </div>
        </div>
        
        <div class="contact-info">
          <h3>More Information</h3>
          <div class="info-items">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <h4>Location</h4>
              <p>Baramulla, Jammu & Kashmir</p>
            </div>
            
            <div class="info-item">
              <i class="fas fa-calendar-alt"></i>
              <h4>Established</h4>
              <p>2025</p>
            </div>
            
            <div class="info-item">
              <i class="fas fa-heart"></i>
              <h4>Our Mission</h4>
              <p>Run. Connect. Inspire.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
