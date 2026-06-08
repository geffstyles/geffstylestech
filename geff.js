        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        const form = document.getElementById('contactForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                const whatsappMsg =
                    `Hi Geffstyles! I'm ${name} (${email}). ${message}`;
                const url =
                    `https://wa.me/2347086797982?text=${encodeURIComponent(whatsappMsg)}`;
                window.open(url, '_blank');
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.addEventListener('click', function (e) {

    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    if (
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navLinks.classList.remove('active');
    }

});
