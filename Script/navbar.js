// navbar.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

//"https://eduonixjsproject.netlify.app/"