# 🔧 Code Snippets & Customization Guide

## Quick Customization Reference

### 1. CHANGE PRIMARY COLOR

**Find & Replace in `ui-enhancement.css`:**

```css
/* OLD COLOR */
#ff6a00    /* Primary Orange */
#ff8a2e    /* Light Orange */

/* NEW COLOR - Replace with your color */
#your_color
```

**Example - Change to Blue:**
```bash
Search: #ff6a00
Replace: #0066ff

Search: #ff8a2e
Replace: #3399ff
```

---

### 2. ADJUST ANIMATION SPEED

**Slower animations:**
```css
/* Change 0.3s to 0.5s for slower */
transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
```

**Faster animations:**
```css
/* Change 0.3s to 0.2s for faster */
transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

### 3. ADJUST HOVER EFFECTS

**Button hover lift amount:**
```css
/* In .btn-primary:hover */
transform: translateY(-3px);  /* Change -3px to -5px for more lift */
```

**Card hover lift:**
```css
/* In .service-card:hover */
transform: translateY(-8px);  /* Change -8px to -12px for more lift */
```

**Image zoom amount:**
```css
/* In .img-fluid:hover */
transform: scale(1.05) translateY(-5px);  /* Change 1.05 to 1.10 for more zoom */
```

---

### 4. CHANGE SHADOW INTENSITY

**Stronger shadows:**
```css
/* OLD */
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);

/* NEW - More intense */
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
```

**Orange glow shadows:**
```css
/* OLD */
box-shadow: 0 8px 25px rgba(255, 106, 0, 0.35);

/* NEW - More intense */
box-shadow: 0 8px 25px rgba(255, 106, 0, 0.5);
```

---

### 5. MODIFY BORDER RADIUS

**More rounded:**
```css
/* OLD */
border-radius: 12px;

/* NEW - More rounded */
border-radius: 16px;

/* NEW - Very rounded (pill shape) */
border-radius: 20px;
```

**Less rounded:**
```css
/* OLD */
border-radius: 12px;

/* NEW - Less rounded */
border-radius: 6px;
```

---

### 6. CUSTOM EASING FUNCTION

**Current easing (bouncy):**
```css
cubic-bezier(0.34, 1.56, 0.64, 1)
```

**Alternative easings:**
```css
/* Linear (constant speed) */
linear

/* Ease-in-out (smooth) */
ease-in-out

/* Slow start, fast end */
cubic-bezier(0.42, 0, 1, 1)

/* Fast start, slow end */
cubic-bezier(0, 0, 0.58, 1)

/* Bounce (jQuery) */
cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

### 7. ADD ANIMATION TO NEW ELEMENTS

```html
<!-- Method 1: Using animate-in class -->
<div class="card animate-in">Content</div>

<!-- Method 2: Using inline style -->
<div class="card" style="animation: fadeInUp 0.6s ease-out;">
  Content
</div>
```

**JavaScript Method:**
```javascript
// Add animation class dynamically
const newCard = document.querySelector('.card');
newCard.classList.add('animate-in');
```

---

### 8. ENABLE PARALLAX ON ELEMENTS

```html
<!-- Add data-parallax attribute -->
<img src="image.jpg" data-parallax="0.5" alt="Parallax Image">

<!-- data-parallax value: 0-1 (slower) or 1+ (faster) -->
<!-- 0.3 = slower parallax -->
<!-- 0.5 = medium parallax -->
<!-- 0.8 = faster parallax -->
```

**JavaScript (in case it doesn't work):**
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const scrollPos = window.pageYOffset;
      const speed = element.getAttribute('data-parallax') || 0.5;
      element.style.transform = `translateY(${scrollPos * speed}px)`;
    });
  });
});
```

---

### 9. DISABLE SPECIFIC ANIMATION

**Remove from card:**
```css
/* Comment out or delete this block */
/*
.service-card:hover {
  transform: translateY(-8px);  /* Comment this line to disable lift */
}
*/
```

**Remove all animations:**
```css
* {
  animation: none !important;
  transition: none !important;
}
```

---

### 10. SHOW TOAST NOTIFICATION

**Usage:**
```javascript
// Success message
showToast('Submitted successfully!', 'success', 3000);

// Error message
showToast('Please fix the errors', 'error', 3000);

// Custom duration (5 seconds)
showToast('Saving...', 'success', 5000);
```

**Custom toast style:**
```javascript
// In ui-enhancements.js, modify the style section
toast.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #your_color;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  animation: slideInUp 0.3s ease-out;
  z-index: 9999;
`;
```

---

### 11. STOP BLUR EFFECT ON HEADER

**In `ui-enhancements.js`, find and comment out:**
```javascript
/*
// HEADER BLUR EFFECT ON SCROLL
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backdropFilter = 'blur(0px)';
    }
  });
}
*/
```

---

### 12. ADJUST STAGGER TIMING

**Currently: 50ms between each card**

```javascript
// In ui-enhancements.js, change:
const delay = index * 50;  /* Change 50 to your value */
```

**Examples:**
```javascript
const delay = index * 25;   /* Faster sequence (25ms) */
const delay = index * 100;  /* Slower sequence (100ms) */
const delay = index * 200;  /* Very slow sequence (200ms) */
```

---

### 13. CHANGE BUTTON PADDING

**In `ui-enhancement.css`:**
```css
.btn {
  padding: 12px 28px !important;  /* Change these values */
}

/* On mobile */
@media (max-width: 768px) {
  .btn {
    padding: 10px 20px !important;  /* Smaller on mobile */
  }
}
```

---

### 14. MODIFY CARD PADDING

```css
/* Service Cards */
.service-card {
  padding: 30px;  /* Change this value */
}

/* Package Cards */
.package-card {
  padding: 35px 25px;  /* Change these values */
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .service-card {
    padding: 20px;  /* Smaller on mobile */
  }
}
```

---

### 15. ADVANCED: CREATE NEW ANIMATION

**Add to `ui-enhancement.css`:**
```css
@keyframes myCustomAnimation {
  0% {
    opacity: 0;
    transform: rotateY(-180deg) scale(0.5);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scale(1);
  }
}

/* Use it */
.my-element {
  animation: myCustomAnimation 0.8s ease-out;
}
```

---

### 16. RIPPLE EFFECT CUSTOMIZATION

**In `ui-enhancements.js`, modify ripple styling:**
```javascript
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);  /* Change color/opacity */
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);  /* Change scale factor */
      opacity: 0;
    }
  }
`;
```

---

### 17. FORM VALIDATION FEEDBACK

**Show success/error without toast:**
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    
    // Add error class
    this.classList.add('was-validated');
    
    // Shake animation
    const inputs = this.querySelectorAll('input:invalid');
    inputs.forEach(input => {
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
    });
  }
});
```

---

### 18. DISABLE HOVER TILT EFFECT

**In `ui-enhancements.js`, comment out:**
```javascript
/*
// CARD HOVER TILT EFFECT
document.querySelectorAll('.service-card, .package-card, ...').forEach(card => {
  card.addEventListener('mousemove', function (e) {
    // ... tilt code ...
  });
});
*/
```

---

### 19. PERFORMANCE OPTIMIZATION

**Reduce animations on low-end devices:**
```javascript
// Detect if device prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.setProperty('--transition', 'none');
}
```

**Or disable animations for specific device:**
```css
@media (max-width: 480px) {
  /* Disable animations on very small screens */
  * {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
}
```

---

### 20. USEFUL CSS VARIABLES

**Add to `:root` in `ui-enhancement.css`:**
```css
:root {
  --primary-color: #ff6a00;
  --primary-light: #ff8a2e;
  --animation-duration: 0.3s;
  --animation-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --shadow-sm: 0 5px 20px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 10px 40px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.2);
  --border-radius: 12px;
  --border-radius-sm: 8px;
}
```

**Use them:**
```css
.btn-primary {
  background: var(--primary-color);
  transition: all var(--animation-duration) var(--animation-easing);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
}
```

---

### 21. DEBUGGING ANIMATIONS

**Check if animation is running:**
```javascript
// Open browser console and run:
const element = document.querySelector('.service-card');
console.log(window.getComputedStyle(element).animation);
```

**Force animation to restart:**
```javascript
const element = document.querySelector('.card');
element.style.animation = 'none';
setTimeout(() => {
  element.style.animation = 'fadeInUp 0.6s ease-out';
}, 10);
```

---

### 22. ACCESSIBILITY IMPROVEMENTS

**Respect user's motion preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📊 CSS Properties Quick Reference

```css
/* Transform */
transform: translateY(-8px);      /* Move vertically */
transform: scale(1.05);            /* Zoom in/out */
transform: translateX(5px);        /* Move horizontally */
transform: rotate(45deg);          /* Rotate */
transform: perspective(1000px) rotateX(10deg);  /* 3D effect */

/* Transition */
transition: all 0.3s ease;        /* All properties, 0.3s, ease timing */
transition: transform 0.3s;       /* Only transform property */

/* Box Shadow */
box-shadow: 0 8px 25px rgba(255, 106, 0, 0.35);
/* offset-x | offset-y | blur-radius | color */

/* Border Radius */
border-radius: 12px;              /* All corners */
border-radius: 12px 0 0 12px;     /* Individual corners */

/* Opacity */
opacity: 0;                       /* Fully transparent */
opacity: 0.5;                     /* Semi-transparent */
opacity: 1;                       /* Fully opaque */
```

---

## 🎯 Final Tips

✅ Always test changes in browser
✅ Use DevTools to inspect elements
✅ Check console for JavaScript errors
✅ Test on mobile devices
✅ Keep original files as backup
✅ Use vendor prefixes for older browsers
✅ Minify CSS/JS for production

---

**Happy customizing! 🚀**
