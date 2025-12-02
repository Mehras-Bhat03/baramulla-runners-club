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
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }
        
        .event-card {
          background: linear-gradient(135deg, var(--cream) 0%, var(--white) 100%);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 2px solid transparent;
        }
        
        .event-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
          border-color: var(--orange-light);
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
              <div class="event-header">
                <div class="event-date">Every</div>
                <div class="event-month">Week</div>
              </div>
              <div class="event-body">
                <h3 class="event-title">Morning Group Run</h3>
                <p class="event-description">
                  Start your day with energy! Join fellow runners for our regular morning run. All paces welcome – we run together, not apart.
                </p>
                <div class="event-details">
                  <div class="event-detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Baramulla Town</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-clock"></i>
                    <span>Early Morning</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-users"></i>
                    <span>All Levels Welcome</span>
                  </div>
                </div>
                <span class="event-tag">Regular Run</span>
              </div>
            </div>
            
            <div class="event-card">
              <div class="event-header" style="background: var(--gradient-calm);">
                <div class="event-date">TBD</div>
                <div class="event-month">Soon</div>
              </div>
              <div class="event-body">
                <h3 class="event-title">Beginner's Workshop</h3>
                <p class="event-description">
                  New to running? This is for you! Learn proper form, breathing techniques, and how to start your running journey safely.
                </p>
                <div class="event-details">
                  <div class="event-detail-item">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>Coaching & Tips</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-heart"></i>
                    <span>Friendly Environment</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-certificate"></i>
                    <span>No Experience Needed</span>
                  </div>
                </div>
                <span class="event-tag">Beginners</span>
              </div>
            </div>
            
            <div class="event-card">
              <div class="event-header" style="background: var(--gradient-warm);">
                <div class="event-date">Coming</div>
                <div class="event-month">2025</div>
              </div>
              <div class="event-body">
                <h3 class="event-title">Trail Adventure Run</h3>
                <p class="event-description">
                  Experience the beauty of Baramulla's nature! A special trail run exploring scenic routes and making memories together.
                </p>
                <div class="event-details">
                  <div class="event-detail-item">
                    <i class="fas fa-mountain"></i>
                    <span>Mountain Trails</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-camera"></i>
                    <span>Scenic Views</span>
                  </div>
                  <div class="event-detail-item">
                    <i class="fas fa-mug-hot"></i>
                    <span>Post-Run Hangout</span>
                  </div>
                </div>
                <span class="event-tag">Adventure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
