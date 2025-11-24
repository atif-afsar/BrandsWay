/**
 * PREMIUM UI ENHANCEMENTS - Animations & Interactions
 * Modern scroll animations, smooth transitions, and hover effects
 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  
  /* ================================================================
     SCROLL-TRIGGERED ANIMATIONS
     ================================================================ */
  
  // Observe all elements with animation classes
  const animationConfig = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered animation delay based on element position
        const delay = index * 50;
        entry.target.style.setProperty('--animation-delay', `${delay}ms`);
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, animationConfig);

  // Observe service cards
  document.querySelectorAll('.service-card').forEach(card => observer.observe(card));
  
  // Observe package cards
  document.querySelectorAll('.package-card').forEach(card => observer.observe(card));
  
  // Observe blog cards
  document.querySelectorAll('.blog-card').forEach(card => observer.observe(card));
  
  // Observe project cards
  document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
  
  // Observe team cards
  document.querySelectorAll('.team-card').forEach(card => observer.observe(card));

  /* ================================================================
     BUTTON RIPPLE EFFECT ON CLICK
     ================================================================ */
  
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ================================================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ================================================================ */
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ================================================================
     PARALLAX EFFECT ON SCROLL
     ================================================================ */
  
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      parallaxElements.forEach(element => {
        const scrollPos = window.pageYOffset;
        const speed = element.getAttribute('data-parallax') || 0.5;
        element.style.transform = `translateY(${scrollPos * speed}px)`;
      });
    });
  }

  /* ================================================================
     IMAGE LAZY LOADING WITH ANIMATION
     ================================================================ */
  
  const images = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          img.classList.add('image-loaded');
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }

  /* ================================================================
     CARD HOVER TILT EFFECT (Optional - subtle 3D effect)
     ================================================================ */
  
  document.querySelectorAll('.service-card, .package-card, .blog-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  /* ================================================================
     FORM VALIDATION WITH VISUAL FEEDBACK
     ================================================================ */
  
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        
        // Add error shake animation
        const inputs = this.querySelectorAll('input:invalid, textarea:invalid, select:invalid');
        inputs.forEach(input => {
          input.classList.add('shake');
          setTimeout(() => input.classList.remove('shake'), 500);
        });
      }
      this.classList.add('was-validated');
    }, false);
  });

  /* ================================================================
     HEADER BLUR EFFECT ON SCROLL
     ================================================================ */
  
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
      } else {
        header.style.backdropFilter = 'blur(0px)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
      }
    });
  }

  /* ================================================================
     STATS COUNTER WITH SCROLL ANIMATION
     ================================================================ */
  
  const counters = document.querySelectorAll('.counter');
  let counterAnimated = false;

  const animateStats = () => {
    if (counterAnimated) return;
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 16);
    });

    counterAnimated = true;
  };

  // Trigger stats animation when stats section is visible
  const statsSection = document.querySelector('#stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        statsObserver.unobserve(statsSection);
      }
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  /* ================================================================
     BUTTON GLOW EFFECT
     ================================================================ */
  
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 12px 35px rgba(255, 106, 0, 0.5)';
    });
    
    btn.addEventListener('mouseleave', function () {
      this.style.boxShadow = '0 8px 25px rgba(255, 106, 0, 0.35)';
    });
  });

  /* ================================================================
     SMOOTH TRANSITION FOR DROPDOWN MENUS
     ================================================================ */
  
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const menu = this.nextElementSibling;
      if (menu && menu.classList.contains('dropdown-menu')) {
        menu.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
    });
  });

  /* ================================================================
     TOAST NOTIFICATIONS (Optional)
     ================================================================ */
  
  window.showToast = function (message, type = 'success', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: ${type === 'success' ? '#ff6a00' : '#dc3545'};
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      animation: slideInUp 0.3s ease-out;
      z-index: 9999;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideInUp 0.3s ease-out reverse';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  /* ================================================================
     ANIMATED NUMBER FORMATTING
     ================================================================ */
  
  window.formatNumber = function (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

});

/* ================================================================
   UTILITY ANIMATIONS (CSS-in-JS)
   ================================================================ */

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .shake {
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }

  .animate-in {
    animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--animation-delay, 0ms);
  }

  .image-loaded {
    animation: fadeIn 0.4s ease-out;
  }
`;
document.head.appendChild(style);
