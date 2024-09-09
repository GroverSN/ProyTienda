document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider ul');
    let currentIndex = 0;
    const slides = slider.children;
    const totalSlides = slides.length;
    const slideWidth = 100 / totalSlides;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }, 5000);  // Cambia de imagen cada 5 segundos
});
