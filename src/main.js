import './style.css';
import { initNavbar } from './components/navbar';
import { initHero } from './components/hero';
import { initAbout } from './components/about';
import { initEvents } from './components/events';
import { initGallery } from './components/gallery';
import { initTestimonials } from './components/testimonials';
import { initJoin } from './components/join';
import { initContact } from './components/contact';
import { initFooter } from './components/footer';
import { initScrollAnimations } from './utils/animations';

// Initialize app
document.querySelector('#app').innerHTML = `
  ${initNavbar()}
  ${initHero()}
  ${initAbout()}
  ${initEvents()}
  ${initGallery()}
  ${initTestimonials()}
  ${initJoin()}
  ${initContact()}
  ${initFooter()}
`;

// Initialize interactive features after DOM is loaded
setTimeout(() => {
  initScrollAnimations();
  setupNavigation();
  setupBackToTop();
  setupMobileMenu();
}, 100);

// Navigation functionality
function setupNavigation() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Sticky navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll and active link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('.nav-menu')?.classList.remove('active');
        document.querySelector('.hamburger')?.classList.remove('active');
      }
    });
  });
  
  // Active link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Mobile menu
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
  });
}

// Back to top button
function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });
  
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

console.log('%c Baramulla Runners Club ', 'background: linear-gradient(135deg, #40916c 0%, #0077b6 100%); color: white; font-size: 18px; font-weight: bold; padding: 10px;');
console.log('%c Run. Connect. Inspire. ', 'background: linear-gradient(135deg, #ff9f1c 0%, #ffd166 100%); color: #212529; font-size: 14px; font-weight: bold; padding: 8px;');
