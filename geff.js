// GEFFSTYLES WEB SAT - Main Script

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}

// Header shadow on scroll
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// Contact form -> WhatsApp
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';
        const subject = document.getElementById('subject')?.value.trim() || 'Project Inquiry';

        if (name && email && message) {
            const whatsappMsg = `Hi GEFFSTYLES WEB SAT! I'm ${name} (${email}).\n\nSubject: ${subject}\n\n${message}`;
            const url = `https://wa.me/2347086797982?text=${encodeURIComponent(whatsappMsg)}`;
            window.open(url, '_blank');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Open clicked if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Scroll reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });

    // Skill bars
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const windowHeight = window.innerHeight;
        const elementTop = bar.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            bar.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Set active nav link based on current page
(function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();
