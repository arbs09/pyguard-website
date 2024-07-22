// Define Smooth Scroll for Links
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Dropdown Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Close Mobile Menu
document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
});

// Close Mobile Menu on Click of Link
document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('#mobile-menu').classList.add('hidden');
    });
});