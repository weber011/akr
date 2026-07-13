// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// WhatsApp Form Submission
const whatsappForm = document.getElementById('whatsapp-form');

whatsappForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;
  
  // Akr Carpenter WhatsApp Number
  const waNumber = '916201222325';
  
  // Construct the message
  const waMessage = `*New Website Enquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service Required:* ${service}%0A*Message:* ${message}`;
  
  // Create WhatsApp API URL
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
  
  // Open WhatsApp in a new tab
  window.open(waUrl, '_blank');
  
  // Reset form
  whatsappForm.reset();
});
