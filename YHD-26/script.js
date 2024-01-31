// JavaScript
function infiniteSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide-logo');

    let slideWidth = slides[0].offsetWidth;
    let totalWidth = slideWidth * slides.length;
    let position = 0;
    let animation;

    // Set container width to total width of all slides
    slider.style.width = totalWidth + 'px';

    function startAnimation() {
        animation = slider.animate(
            [
                { transform: `translateX(-${position}px)` },
                { transform: `translateX(-${position + slideWidth}px)` }
            ],
            {
                duration: 4000, // Adjust animation duration as needed
                easing: 'linear',
                fill: 'forwards' // Keeps the element at the end of the animation
            }
        );

        // Reset animation when it ends
        animation.onfinish = () => {
            position += slideWidth;
            if (position >= totalWidth) {
                position = 0;
                slider.style.transform = `translateX(0)`;
            }
            startAnimation();
        };
    }

    startAnimation();
}

document.addEventListener('DOMContentLoaded', infiniteSlider);

var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

