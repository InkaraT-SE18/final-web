const navbarSound = document.getElementById("nav-sound");
// Функции для воспроизведения звуков
function playNavbarSound() {
    navbarSound.currentTime = 0;
    navbarSound.play();
}

// Добавляем событие для всех ссылок в навбаре
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", playNavbarSound);
});

 function displayCustomAlert(message) {
            // Устанавливаем текст сообщения
            document.getElementById('alertMessage').textContent = message;

            // Показываем затемнение и кастомный алерт
            document.getElementById('overlay').style.display = 'flex';
    // Закрытие кастомного алерта по нажатию на кнопку
            document.getElementById('closeButton').addEventListener('click', function() {
                document.getElementById('overlay').style.display = 'none';
            });
        }

        // Функция для показа приветствия на основе времени
        function displayGreeting() {
            const now = new Date();
            const hour = now.getHours();
            let greeting;

            if (hour < 12) {
                greeting = "Good morning!";
            } else if (hour < 18) {
                greeting = "Good afternoon!";
            }else {
                greeting = "Good evening!";
            }
            // Отображаем кастомный алерт с приветствием
            displayCustomAlert(greeting);
        }

        window.onload = displayGreeting;
 // Массив с URL страниц
document.addEventListener('DOMContentLoaded', () => {
    const weatherData = document.getElementById('weatherData');
    const city = 'Astana';
    async function getWeather() {
        try {
            const response = await fetch(`https://wttr.in/${city}?format=%C+%t&lang=ru`);
            const data = await response.text();
            weatherData.textContent = `Погода в ${city}: ${data}`;
        }
        catch (error) {
            weatherData.textContent = 'Не удалось загрузить данные о погоде.';
        }    }
    getWeather();
});
