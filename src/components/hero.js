export function initHero() {
  return `
    <section id="home" class="hero">
      <style>
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, rgba(45, 106, 79, 0.88) 0%, rgba(0, 119, 182, 0.82) 100%),
                      url('./images/hero-bg.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(82, 183, 136, 0.15) 0%, transparent 50%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: var(--white);
          max-width: 900px;
          padding: 0 2rem;
          animation: fadeInUp 1s ease;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9375rem;
          font-weight: 600;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hero-badge i {
          color: var(--yellow-warm);
          font-size: 1.25rem;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          margin-bottom: 1.5rem;
          color: var(--white);
          font-weight: 800;
          line-height: 1.1;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .hero-tagline {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, var(--orange-light) 0%, var(--yellow-warm) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          font-family: var(--font-heading);
        }
        
        .hero-description {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.7;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .hero-stats {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 3rem;
          z-index: 2;
        }
        
        .stat-box {
          text-align: center;
          color: var(--white);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          background: var(--gradient-warm);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        
        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          animation: bounce 2s infinite;
          cursor: pointer;
        }
        
        .scroll-hint i {
          font-size: 2rem;
          color: var(--white);
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
          }
          
          .hero-badge {
            font-size: 0.875rem;
            padding: 0.625rem 1.25rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-buttons .btn {
            font-size: 0.875rem;
            padding: 0.875rem 1.5rem;
            width: fit-content;
            margin: 0 auto;
          }
          
          .hero-stats {
            position: relative;
            bottom: 0;
            margin-top: 3rem;
            gap: 2rem;
            flex-wrap: wrap;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }
      </style>
      
      <div class="hero-content">
        <div class="hero-badge">
          <i class="fas fa-running"></i>
          <span>Baramulla's Running Community Since 2025</span>
        </div>
        
        <h1 class="hero-title">Where Every Step<br>Brings Us Together</h1>
        
        <p class="hero-tagline">Run. Connect. Inspire.</p>
        
        <p class="hero-description">
          Join our warm, welcoming community of runners in Baramulla. Whether you're taking your first steps or training for your next race, you'll find friends who run with you, celebrate with you, and grow with you.
        </p>
        
        <div class="hero-buttons">
          <a href="#join" class="btn btn-primary">
            <i class="fas fa-users"></i>
            Join Our Community
          </a>
          <a href="#about" class="btn btn-secondary">
            <i class="fas fa-heart"></i>
            Our Story
          </a>
        </div>
      </div>
      
      <div class="scroll-hint" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'})">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
  `;
}
