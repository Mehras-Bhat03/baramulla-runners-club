export function initTestimonials() {
  return `
    <section id="testimonials" class="testimonials section">
      <style>
        .testimonials {
          background: var(--white);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, var(--cream) 0%, var(--white) 100%);
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          position: relative;
          border-top: 4px solid var(--orange-light);
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        
        .quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 3rem;
          color: var(--orange-light);
          opacity: 0.2;
        }
        
        .testimonial-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--white);
          box-shadow: var(--shadow-md);
          margin-bottom: 1.5rem;
        }
        
        .testimonial-text {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: var(--gray-dark);
          font-style: italic;
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .author-info h4 {
          color: var(--dark);
          margin-bottom: 0.25rem;
          font-size: 1.125rem;
        }
        
        .author-info p {
          color: var(--gray-medium);
          font-size: 0.9375rem;
          margin: 0;
        }
        
        .author-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          background: var(--gradient-warm);
          color: var(--dark);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }
        
        .testimonial-heart {
          display: flex;
          gap: 0.25rem;
          margin-top: 1rem;
        }
        
        .testimonial-heart i {
          color: var(--orange);
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Member Stories</span>
          <h2 class="section-title">Why We Run Together</h2>
          <p class="section-description">
            Hear from our amazing community members about their journey with us
          </p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <i class="fas fa-quote-left quote-icon"></i>
            <img src="https://ui-avatars.com/api/?name=Member+One&size=80&background=52b788&color=fff" alt="Member" class="testimonial-avatar">
            <p class="testimonial-text">
              "Joining this club changed my life! The support and encouragement from everyone made me fall in love with running. It's not just about the miles – it's about the friendships."
            </p>
            <div class="author-info">
              <div>
                <h4>Club Member</h4>
                <p>Running Enthusiast</p>
                <span class="author-badge">
                  <i class="fas fa-star"></i> Active Member
                </span>
              </div>
            </div>
            <div class="testimonial-heart">
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
            </div>
          </div>
          
          <div class="testimonial-card">
            <i class="fas fa-quote-left quote-icon"></i>
            <img src="https://ui-avatars.com/api/?name=Member+Two&size=80&background=0077b6&color=fff" alt="Member" class="testimonial-avatar">
            <p class="testimonial-text">
              "I was nervous about joining as a beginner, but everyone was so welcoming! Now I can't imagine my week without our group runs. Best decision ever!"
            </p>
            <div class="author-info">
              <div>
                <h4>Club Member</h4>
                <p>Beginner Runner</p>
                <span class="author-badge">
                  <i class="fas fa-award"></i> New Member
                </span>
              </div>
            </div>
            <div class="testimonial-heart">
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
            </div>
          </div>
          
          <div class="testimonial-card">
            <i class="fas fa-quote-left quote-icon"></i>
            <img src="https://ui-avatars.com/api/?name=Member+Three&size=80&background=ff9f1c&color=fff" alt="Member" class="testimonial-avatar">
            <p class="testimonial-text">
              "The energy in this group is incredible! Whether it's a tough training day or a fun trail run, we always have each other's backs. Running together makes us stronger."
            </p>
            <div class="author-info">
              <div>
                <h4>Club Member</h4>
                <p>Marathon Runner</p>
                <span class="author-badge">
                  <i class="fas fa-fire"></i> Core Member
                </span>
              </div>
            </div>
            <div class="testimonial-heart">
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
