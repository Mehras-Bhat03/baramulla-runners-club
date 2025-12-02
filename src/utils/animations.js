export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(`
    .event-card,
    .value-card,
    .gallery-item,
    .testimonial-card,
    .benefit-card,
    .contact-card,
    .stat-card,
    .about-content,
    .about-visual
  `);

  animatableElements.forEach(el => {
    observer.observe(el);
  });
}
