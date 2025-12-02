export function initAbout() {
  return `
    <section id="about" class="about section">
      <style>
        .about {
          background: linear-gradient(180deg, var(--cream) 0%, var(--white) 100%);
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .about-content {
          max-width: 100%;
        }
        
        .about-visual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .about-visual img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          transition: var(--transition);
        }
        
        .about-visual img:hover {
          transform: scale(1.02);
          box-shadow: var(--shadow-xl);
        }
        
        .about-content h3 {
          color: var(--green-deep);
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }
        
        .mission-text {
          font-size: 1.125rem;
          line-height: 1.9;
          color: var(--gray-dark);
          margin-bottom: 2rem;
          background: linear-gradient(135deg, rgba(82, 183, 136, 0.08) 0%, rgba(72, 202, 228, 0.08) 100%);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--green-light);
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .stat-card {
          background: var(--white);
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          text-align: center;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        
        .stat-card i {
          font-size: 2.5rem;
          background: var(--gradient-fresh);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }
        
        .stat-card h4 {
          font-size: 0.9375rem;
          color: var(--gray-medium);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .stat-card p {
          font-weight: 700;
          color: var(--dark);
          font-size: 1.125rem;
          margin: 0;
        }
        
        .values-section {
          margin-top: 3rem;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .value-card {
          background: var(--white);
          padding: 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          border-top: 4px solid transparent;
        }
        
        .value-card:nth-child(1) { border-top-color: var(--orange); }
        .value-card:nth-child(2) { border-top-color: var(--green-light); }
        .value-card:nth-child(3) { border-top-color: var(--blue-light); }
        .value-card:nth-child(4) { border-top-color: var(--yellow); }
        
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        
        .value-card i {
          font-size: 3rem;
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.25rem;
        }
        
        .value-card h4 {
          color: var(--dark);
          margin-bottom: 1rem;
          font-size: 1.375rem;
        }
        
        .value-card p {
          color: var(--gray-dark);
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
        }
        
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .about-stats {
            grid-template-columns: 1fr;
          }
          
          .about-visual {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="container">
        <div class="section-header">
          <span class="section-tag">About Us</span>
          <h2 class="section-title">Built on Friendship, Fueled by Passion</h2>
          <p class="section-description">
            We're more than a running club – we're a family that supports each other every step of the way
          </p>
        </div>
        
        <div class="about-grid">
          <div class="about-content">
            <h3>Our Mission</h3>
            <div class="mission-text">
              To inspire and motivate individuals of all fitness levels to embrace running as a lifestyle, fostering a supportive community that promotes health, wellness, and personal growth through active participation and genuine connections.
            </div>
            
            <div class="about-stats">
              <div class="stat-card">
                <i class="fas fa-calendar-check"></i>
                <h4>Founded</h4>
                <p>2025</p>
              </div>
              <div class="stat-card">
                <i class="fas fa-users"></i>
                <h4>Community</h4>
                <p>Growing</p>
              </div>
              <div class="stat-card">
                <i class="fas fa-mountain"></i>
                <h4>Location</h4>
                <p>Baramulla</p>
              </div>
            </div>
            
            <div class="about-visual">
              <img src="./images/about-community.jpg" alt="Our Running Community" onerror="this.src='https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop'">
              <img src="./images/about-2.jpg" alt="BRC Community" onerror="this.src='https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop'">
            </div>
          </div>
        </div>
        
        <div class="values-section">
          <div class="section-header">
            <h3 class="section-title">What We Stand For</h3>
          </div>
          
          <div class="values-grid">
            <div class="value-card">
              <i class="fas fa-heart"></i>
              <h4>Community First</h4>
              <p>We believe in the power of running together. Every member matters, every story inspires.</p>
            </div>
            
            <div class="value-card">
              <i class="fas fa-hands-helping"></i>
              <h4>Support & Encouragement</h4>
              <p>From your first 5K to your toughest marathon, we're here cheering you on.</p>
            </div>
            
            <div class="value-card">
              <i class="fas fa-smile-beam"></i>
              <h4>Fun & Joy</h4>
              <p>Running should be enjoyable! We celebrate every milestone with smiles and laughter.</p>
            </div>
            
            <div class="value-card">
              <i class="fas fa-star"></i>
              <h4>Growth Together</h4>
              <p>We push each other to be better, stronger, and healthier – one run at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
