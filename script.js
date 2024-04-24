// script.js
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.querySelector('.prev-btn').addEventListener('click', () => {
    changeImage('prev');
});

document.querySelector('.next-btn').addEventListener('click', () => {
    changeImage('next');
});

function changeImage(direction) {
    images[currentIndex].classList.remove('visible');
    images[currentIndex].style.opacity = "0"; // Hide the current image
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalImages;
    } else {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }
    images[currentIndex].classList.add('visible');
    images[currentIndex].style.opacity = "1"; // Show the new current image
    updateCarousel();
}

function updateCarousel() {
    const offset = -100 * currentIndex;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel(); // Initialize the carousel position
});
