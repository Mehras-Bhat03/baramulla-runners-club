export function initGallery() {
  return `
    <section id="gallery" class="gallery section">
      <style>
        .gallery {
          background: linear-gradient(180deg, var(--cream) 0%, var(--white) 100%);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          aspect-ratio: 1;
          cursor: pointer;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          filter: brightness(0.95);
        }
        
        .gallery-item:hover img {
          transform: scale(1.08);
          filter: brightness(1);
        }
        
        .gallery-cta {
          text-align: center;
          margin-top: 3rem;
          padding: 3rem 2rem;
          background: var(--gradient-fresh);
          border-radius: var(--radius-xl);
          color: var(--white);
        }
        
        .gallery-cta h3 {
          color: var(--white);
          margin-bottom: 1rem;
        }
        
        .gallery-cta p {
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }
        
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      </style>
      
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Gallery</span>
          <h2 class="section-title">Moments That Matter</h2>
          <p class="section-description">
            Every run tells a story. Here are some of our favorite memories together!
          </p>
        </div>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="/images/gallery1.jpg" alt="BRC Group Run" loading="lazy">
          </div>
          
          <div class="gallery-item">
            <img src="/images/gallery2.jpg" alt="BRC Event" loading="lazy">
          </div>
          
          <div class="gallery-item">
            <img src="/images/gallery3.jpg" alt="BRC Community" loading="lazy">
          </div>
          
          <div class="gallery-item">
            <img src="/images/gallery4.jpg" alt="BRC Running" loading="lazy">
          </div>
          
          <div class="gallery-item">
            <img src="/images/gallery5.jpg" alt="BRC Team" loading="lazy">
          </div>
          
          <div class="gallery-item">
            <img src="/images/about-community.jpg" alt="BRC Family" loading="lazy">
          </div>
        </div>
        
        <div class="gallery-cta">
          <h3>Want to See Your Photos Here?</h3>
          <p>Join us on our runs and become part of our story!</p>
          <a href="#join" class="btn btn-primary">Join the Community</a>
        </div>
      </div>
    </section>
  `;
}
