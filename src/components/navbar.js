export function initNavbar() {
  return `
    <nav class="navbar" id="navbar">
      <style>
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }
        
        .navbar.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .logo-img {
          height: 55px;
          width: 55px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid var(--green-light);
        }
        
        .logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          background: linear-gradient(135deg, var(--green-deep) 0%, var(--blue-medium) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }
        
        .nav-link {
          font-weight: 500;
          color: var(--dark);
          position: relative;
          padding: 0.5rem 0;
          font-size: 0.9375rem;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--gradient-warm);
          transition: width 0.3s ease;
          border-radius: 3px;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link.join-btn {
          background: var(--gradient-warm);
          color: var(--dark);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .nav-link.join-btn::after {
          display: none;
        }
        
        .nav-link.join-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-warm);
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }
        
        .hamburger .bar {
          width: 28px;
          height: 3px;
          background: var(--dark);
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1.5rem;
          }
          
          .nav-menu {
            position: fixed;
            left: -100%;
            top: 80px;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.1);
            padding: 2rem 0;
            gap: 0;
          }
          
          .nav-menu.active {
            left: 0;
          }
          
          .nav-item {
            margin: 1rem 0;
          }
          
          .hamburger {
            display: flex;
          }
          
          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }
          
          .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          
          .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
          
          .logo-text {
            font-size: 1rem;
          }
          
          .logo-img {
            height: 45px;
            width: 45px;
          }
          
          .nav-link.join-btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.9375rem;
          }
        }
        
        @media (max-width: 1024px) and (min-width: 769px) {
          .nav-menu {
            gap: 1.5rem;
          }
          
          .nav-link.join-btn {
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
          }
          
          .logo-text {
            font-size: 1.1rem;
          }
        }
      </style>
      
      <div class="nav-container">
        <div class="nav-logo">
          <img src="/images/logo.png" alt="Baramulla Runners Club" class="logo-img">
          <span class="logo-text">Baramulla Runners Club</span>
        </div>
        
        <ul class="nav-menu" id="navMenu">
          <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#events" class="nav-link">Events</a></li>
          <li class="nav-item"><a href="#gallery" class="nav-link">Gallery</a></li>
          <li class="nav-item"><a href="#testimonials" class="nav-link">Stories</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Connect</a></li>
          <li class="nav-item"><a href="#join" class="nav-link join-btn">Join Our Family</a></li>
        </ul>
        
        <div class="hamburger" id="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  `;
}
