// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Carousel Functionality
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const carousel = document.querySelector('.projects-carousel');

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: -530, // Adjusted based on new project-item width plus margin
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: 530, // Adjusted based on new project-item width plus margin
        behavior: 'smooth'
    });
});

// Navigation Menu Toggle (Mobile)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Typing effect for the description
document.addEventListener('DOMContentLoaded', () => {
    const descriptionElement = document.querySelector('.header .description');
    const descriptionText = 'Helping teams make informed business decisions by organizing data and creating clear insights.';
    let index = 0;

    // Create the text span and cursor element
    const textSpan = document.createElement('span');
    const cursorElement = document.createElement('span');
    cursorElement.classList.add('cursor');

    descriptionElement.appendChild(textSpan);
    descriptionElement.appendChild(cursorElement);

    function type() {
        if (index < descriptionText.length) {
            textSpan.textContent += descriptionText.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            // Typing complete; start blinking cursor
            cursorElement.classList.add('blink');
        }
    }

    // Cursor is visible during typing
    // Start typing effect
    type();
});