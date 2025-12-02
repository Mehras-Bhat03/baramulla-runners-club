export function initEvents() {
  return `
    <section id="events" class="events section">
      <style>
        .events {
          background: var(--white);
        }
        
        .events-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .events-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .event-card {
          background: linear-gradient(135deg, var(--cream) 0%, var(--white) 100%);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          transition: var(--transition);
          border: 2px solid transparent;
        }
        
        .event-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
          border-color: var(--orange-light);
        }
        
        .event-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        
        .event-header {
          background: var(--gradient-fresh);
          color: var(--white);
          padding: 2rem;
          text-align: center;
          position: relative;
        }
        
        .event-date {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
          font-family: var(--font-heading);
        }
        
        .event-month {
          font-size: 1.125rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }
        
        .event-body {
          padding: 2rem;
        }
        
        .event-title {
          color: var(--dark);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .event-description {
          color: var(--gray-dark);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        
        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        
        .event-detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--gray-dark);
          font-size: 0.9375rem;
        }
        
        .event-detail-item i {
          color: var(--orange);
          font-size: 1.125rem;
          width: 20px;
        }
        
        .event-tag {
          display: inline-block;
          background: var(--gradient-warm);
          color: var(--dark);
          padding: 0.375rem 0.875rem;
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 600;
          margin-top: 1rem;
        }
        
        @media (max-width: 768px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Events & Runs</span>
          <h2 class="section-title">Run With Us</h2>
          <p class="section-description">
            Join our friendly group runs, training sessions, and community events. Everyone is welcome!
          </p>
        </div>
        
        <div class="events-container">
          <div class="events-grid">
            <div class="event-card">
              <img src="./images/herath-marathon.jpg" alt="Herath Half Marathon" class="event-image">
              <div class="event-header">
                <div class="event-date">08</div>
                <div class="event-month">February 2026</div>
              </div>
              <div class="event-body">
                <h3 class="event-title">3rd Herath Half Marathon</h3>
                <p class="event-description">
                  It is with immense pleasure that Jammu Hills Sports Foundation announces the 3rd Edition of the HERATH HALF MARATHON. Join us for this prestigious running event!
                </p>
                <div class="event-details">
                  <div class="event-detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Jammu, J&K</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-calendar"></i>
                    <span>08th February 2026</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-running"></i>
                    <span>Half Marathon Event</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-trophy"></i>
                    <span>Organized by Jammu Hills Sports Foundation</span>
                  </div>
                </div>
                <span class="event-tag">Featured Event</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
