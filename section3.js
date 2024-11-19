const clickSound = document.getElementById("click-button");

function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}

document.getElementById("click1").addEventListener("click", playSound);
document.getElementById("showTimeButton").addEventListener("click", playSound);



document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = $('#DesignCarousel');
    const speedRange = document.getElementById('speedRange');
    const speedValue = document.getElementById('speedValue');

    // Initialize carousel
    carouselElement.carousel({
        interval: parseInt(speedRange.value),
        ride: 'carousel'
    });

    // Update interval dynamically
    speedRange.addEventListener('input', () => {
        const speed = parseInt(speedRange.value);
        speedValue.textContent = `${speed / 1000} seconds`;
        carouselElement.carousel('dispose'); // Stop the carousel
        carouselElement.carousel({interval: speed}); // Restart with new interval
    });
});



  window.addEventListener("scroll", () => {
        const cards = document.querySelectorAll(".info-block");

        // Получаем позицию прокрутки
        const scrollPosition = window.scrollY;

        cards.forEach(card => {
            // Вычисляем эффект увеличения
            const scale = 1 + scrollPosition / 2000; // Увеличение на 0.001 за каждый пиксель прокрутки
            card.style.transform = `scale(${scale})`; // Применяем масштаб
        });
    });

