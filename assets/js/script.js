'use strict';

/**
 * Add event listener to single or multiple elements
 */
const addEvent = (elem, type, callback) => {
  if (elem instanceof NodeList || Array.isArray(elem)) {
    elem.forEach(item => item.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * IntersectionObserver for scroll-animate (hero section)
 */
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target); // Stop observing once animated
          }, index * 50); // Stagger at 50ms
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});

/**
 * IntersectionObserver for fade-animate (services section)
 */
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-animate');

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-visible');
          }, index * 100); // Stagger at 50ms for sequential effect
        } else {
          entry.target.classList.remove('fade-visible');
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    }
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));
});


// ---heading scroll animation---

window.addEventListener("scroll", function() {
  const headings = document.querySelectorAll(".scroll-heading"); // Select all elements with this class
  const viewportHeight = window.innerHeight;

  headings.forEach(function(heading) {
    const headingPosition = heading.getBoundingClientRect().top;

    // When the heading enters the viewport, animate it
    if (headingPosition <= viewportHeight / 1.5) {
      heading.classList.add("visible");
    } else {
      heading.classList.remove("visible");
    }
  });
});


/**
 * Close navbar on link click
 */
document.querySelectorAll('[data-nav-link]').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  });
});

/**
 * Add active class to header on scroll + change nav-link color
 */
const header = document.querySelector('[data-header]');
const navLinks = document.querySelectorAll('.nav-link');

const toggleHeader = () => {
  header.classList.toggle('active', window.scrollY > 100);

  navLinks.forEach(link => {
    if (window.scrollY > 100) {
      link.classList.add('scrolled');
    } else {
      link.classList.remove('scrolled');
    }
  });
};
addEvent(window, 'scroll', toggleHeader);


/**
 * Toggle dropdown on mobile click
 */
const dropdownToggles = document.querySelectorAll('.nav-item.dropdown .nav-link');
addEvent(dropdownToggles, 'click', function (e) {
  if (window.innerWidth < 992) {
    e.preventDefault();
    const dropdown = this.parentElement;
    dropdown.classList.toggle('active');
  }
});


/**
 * Stats counter
 */
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // smaller = faster
    const increment = target / speed;

    const updateCount = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true;
      observer.disconnect(); // Stop observing after animation
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of #stats is visible
});

const statsSection = document.querySelector('#stats');
observer.observe(statsSection);


 document.addEventListener("DOMContentLoaded", function () {
            const marquee = document.querySelector('.marquee');
            marquee.innerHTML += marquee.innerHTML;
        });

document.addEventListener("DOMContentLoaded", function () {
    const marquees = document.querySelectorAll('.marquee, .partners-marquee');
    marquees.forEach(marquee => {
        const originalContent = marquee.innerHTML;
        marquee.innerHTML = originalContent + originalContent + originalContent; // Duplicate 3 times for seamless scroll
    });
});

// Existing in your script.js for scroll-heading
window.addEventListener("scroll", function() {
  const headings = document.querySelectorAll(".scroll-heading");
  const viewportHeight = window.innerHeight;
  headings.forEach(function(heading) {
    const headingPosition = heading.getBoundingClientRect().top;
    if (headingPosition <= viewportHeight / 1.5) {
      heading.classList.add("visible");
    } else {
      heading.classList.remove("visible");
    }
  });
});

// Existing in your script.js for fade-animate
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-animate');
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-visible');
          }, index * 100);
        } else {
          entry.target.classList.remove('fade-visible');
        }
      });
    },
    { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
  );
  fadeElements.forEach((el) => fadeObserver.observe(el));
});

// -------- packages--------------

document.addEventListener("DOMContentLoaded", function () {
  // Marquee duplication for partners and services
  const marquees = document.querySelectorAll('.marquee, .partners-marquee');
  marquees.forEach(marquee => {
    const originalContent = marquee.innerHTML;
    marquee.innerHTML = originalContent + originalContent + originalContent;
  });

  // Scroll heading animation
  window.addEventListener("scroll", function() {
    const headings = document.querySelectorAll(".scroll-heading, .scroll-heading-plan");
    const viewportHeight = window.innerHeight;
    headings.forEach(function(heading) {
      const headingPosition = heading.getBoundingClientRect().top;
      if (headingPosition <= viewportHeight / 1.5) {
        heading.classList.add("visible");
      } else {
        heading.classList.remove("visible");
      }
    });
  });

  // Fade animation
  const fadeElements = document.querySelectorAll('.fade-animate, .fade-animate-plan');
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-visible');
          }, index * 100);
        } else {
          entry.target.classList.remove('fade-visible');
        }
      });
    },
    { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
  );
  fadeElements.forEach((el) => fadeObserver.observe(el));
});


/**
 * HERO SECTION TEXT ROTATION
 */


/**
 * HERO SECTION TEXT ROTATION WITH TYPEWRITER EFFECT
 */

// Services array - yahan easily change karo (add/remove/edit text/icon)
const services = [
  { text: "Website<br>Development", icon: '<i class="fas fa-code me-2 text-danger"></i>' },
  { text: "Social Media<br>Marketing", icon: '<i class="fab fa-facebook-f me-2 text-danger"></i>' },
  { text: "E-commerce<br>Marketing", icon: '<i class="fas fa-shopping-cart me-2 text-danger"></i>' },
  { text: "Graphic<br>Designing", icon: '<i class="fas fa-paint-brush me-2 text-primary"></i>' },
  { text: "Performance<br>Marketing", icon: '<i class="fas fa-bullhorn me-2 text-primary"></i>' },
  { text: "Google Ads<br>& SEO", icon: '<i class="fab fa-google me-2 text-primary"></i>' }
];

let index = 0;
const el = document.getElementById("rotating-service");

// Typewriter function for word-by-word animation
function typeText(text, callback) {
  const lines = text.split('<br>');
  let lineIdx = 0;
  let wordIdx = 0;
  let letterIdx = 0;
  let html = '';
  const typeSpan = document.createElement('span');
  el.appendChild(typeSpan);

  function processNext() {
    if (lineIdx < lines.length) {
      const lineWords = lines[lineIdx].split(/\s+/).filter(w => w);
      if (wordIdx < lineWords.length) {
        const currentWord = lineWords[wordIdx];
        if (letterIdx < currentWord.length) {
          html += currentWord[letterIdx];
          typeSpan.innerHTML = html;
          letterIdx++;
          setTimeout(processNext, 150); // Speed per letter (adjust as needed)
          return;
        } else {
          // Word complete, add space
          html += ' ';
          typeSpan.innerHTML = html;
          letterIdx = 0;
          wordIdx++;
          setTimeout(processNext, 500); // Pause between words (adjust as needed)
          return;
        }
      } else {
        // Line complete
        if (lineIdx < lines.length - 1) {
          html = html.trim() + '<br>';
        } else {
          html = html.trim();
        }
        typeSpan.innerHTML = html;
        lineIdx++;
        wordIdx = 0;
        setTimeout(processNext, 500); // Pause between lines
        return;
      }
    } else {
      // Typing complete
      if (callback) callback();
    }
  }

  processNext();
}

function rotateService() {
  el.style.opacity = 0; // Fade out
  setTimeout(() => {
    const service = services[index];
    el.innerHTML = service.icon; // Set icon first
    // Start typing text
    typeText(service.text, () => {
      // After typing, cycle to next and schedule rotation
      index = (index + 1) % services.length;
      setTimeout(rotateService, 1000); // Delay before next rotation (adjust total cycle time)
    });
    el.style.opacity = 1; // Fade in (icon + typing happens visibly)
  }, 400); // Fade out duration
}

// Initial call
rotateService();

/**
 * CURSOR EFFECT
 */


// Cursor elements
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

// Check if custom cursor elements exist
if (cursor && cursorDot) {
  // Activate custom cursor class
  document.body.classList.add('custom-cursor-active');

  // Mouse position tracking
  let mouseX = 0;
  let mouseY = 0;

  // Follower position
  let followerX = 0;
  let followerY = 0;

  // Track mouse movement - dot follows instantly
  document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Black dot moves instantly with mouse
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
  });

  // Smooth follower animation
  function animateFollower() {
      // Calculate distance between follower and mouse
      const dx = mouseX - followerX;
      const dy = mouseY - followerY;
      
      // Move follower towards mouse position with easing
      followerX += dx * 0.1; // 0.1 is speed (higher = faster)
      followerY += dy * 0.1;
      
      // Update orange circle position
      cursor.style.left = followerX + 'px';
      cursor.style.top = followerY + 'px';
      
      // Continue animation
      requestAnimationFrame(animateFollower);
  }

  // Start follower animation
  animateFollower();


  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, input, textarea, select, [onclick]');

  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorDot.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorDot.classList.remove('hover');
    });
  });

  // Hide/show cursors
  document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
  });
}
// End of custom cursor initialization



//.............................. blog page...................

