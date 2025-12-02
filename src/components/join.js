export function initJoin() {
  return `
    <section id="join" class="join section">
      <style>
        .join {
          background: linear-gradient(135deg, rgba(45, 106, 79, 0.95) 0%, rgba(0, 119, 182, 0.9) 100%),
                      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        
        .join::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255, 191, 105, 0.1) 0%, transparent 50%);
          opacity: 0.6;
        }
        
        .join-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        
        .join .section-tag {
          color: var(--yellow-warm);
        }
        
        .join .section-title {
          color: var(--white);
          font-size: clamp(2rem, 4vw, 3.5rem);
        }
        
        .join .section-description {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.25rem;
          max-width: 700px;
        }
        
        .join-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .benefit-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: var(--transition);
        }
        
        .benefit-card:hover {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-5px);
          border-color: var(--yellow-warm);
        }
        
        .benefit-card i {
          font-size: 3rem;
          color: var(--yellow-warm);
          margin-bottom: 1.25rem;
        }
        
        .benefit-card h4 {
          color: var(--white);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }
        
        .benefit-card p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }
        
        .join-cta {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .join-cta .btn {
          font-size: 1.125rem;
          padding: 1.25rem 3rem;
        }
        
        .join-note {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }
        
        .whatsapp-btn {
          background: #25D366;
          color: var(--white);
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
          cursor: not-allowed;
          opacity: 0.7;
        }
        
        @media (max-width: 768px) {
          .join-benefits {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="container">
        <div class="join-content">
          <div class="section-header">
            <span class="section-tag">Join Us</span>
            <h2 class="section-title">Become Part of Our Family</h2>
            <p class="section-description">
              Whether you're just starting out or you're a seasoned runner, there's a place for you here. Let's run together!
            </p>
          </div>
          
          <div class="join-benefits">
            <div class="benefit-card">
              <i class="fas fa-users"></i>
              <h4>Welcoming Community</h4>
              <p>Join a group that celebrates every runner, every pace, every journey</p>
            </div>
            
            <div class="benefit-card">
              <i class="fas fa-calendar-week"></i>
              <h4>Regular Runs</h4>
              <p>Group runs and training sessions that fit your schedule</p>
            </div>
            
            <div class="benefit-card">
              <i class="fas fa-hands-helping"></i>
              <h4>Support & Guidance</h4>
              <p>Get tips, encouragement, and motivation from experienced runners</p>
            </div>
            
            <div class="benefit-card">
              <i class="fas fa-smile"></i>
              <h4>Fun & Friendship</h4>
              <p>Make lasting friendships while staying active and healthy</p>
            </div>
            
            <div class="benefit-card">
              <i class="fas fa-trophy"></i>
              <h4>Events & Challenges</h4>
              <p>Participate in exciting runs, races, and group challenges</p>
            </div>
            
            <div class="benefit-card">
              <i class="fas fa-heartbeat"></i>
              <h4>Health & Wellness</h4>
              <p>Improve your fitness while exploring beautiful trails together</p>
            </div>
          </div>
          
          <div class="join-cta">
            <h3 style="color: var(--white); margin-bottom: 1rem;">Ready to Start Your Journey?</h3>
            <button class="btn whatsapp-btn" onclick="alert('WhatsApp group link will be available soon! Follow us on Instagram for updates.')">
              <i class="fab fa-whatsapp"></i>
              Join WhatsApp Community (Coming Soon)
            </button>
            <p class="join-note">
              <i class="fas fa-info-circle"></i>
              For now, follow us on Instagram to stay updated on runs and events!
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
