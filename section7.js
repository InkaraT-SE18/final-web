 const ctx = document.getElementById('styleChart').getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Скандинавский стиль',
                    'Современный стиль',
                    'Лофт',
                    'Классический стиль',
                    'Минимализм',
                    'Прованс'
                ],
                datasets: [{
                    label: 'Популярность стилей интерьера (%)',
                    data: [35, 25, 15, 12, 8, 5],
                    backgroundColor: [
                        '#3B9D5A',
                        '#194954',
                        '#193154',
                        '#862C5E',
                        '#894C4C',
                        '#B3B659'
                    ],
                    borderColor: [
                        '#3B9D5A',
                        '#194954',
                        '#193154',
                        '#862C5E',
                        '#894C4C',
                        '#B3B659'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
          const items = document.querySelectorAll('.timeline-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.5, // Элемент должен быть виден наполовину
        });

        items.forEach(item => observer.observe(item));