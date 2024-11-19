 function addTask(taskText) {
            const taskList = document.getElementById('task-list');

            const newTask = document.createElement('li');
            newTask.classList.add('task');
            newTask.textContent = taskText;

            // Добавляем новую задачу в список
            taskList.appendChild(newTask);

            // Делаем задачу перетаскиваемой
            interact('.task')
                .draggable({
                    onmove: function (event) {
                        var target = event.target;
                        var dataX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                        var dataY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                        target.style.transform = 'translate(' + dataX + 'px, ' + dataY + 'px)';

                        target.setAttribute('data-x', dataX);
                        target.setAttribute('data-y', dataY);
                    }
                })
                .on('dragstart', function (event) {
                    document.getElementById('trash').classList.add('show');
                })
                .on('dragend', function (event) {
                    document.getElementById('trash').classList.remove('show');
                });

            // Добавляем возможность удаления задачи, перетаскивая её в корзину
            interact('#trash').dropzone({
                accept: '.task',
                overlap: 0.75,
                ondrop: function (event) {
                    var task = event.relatedTarget;
                    task.remove();
                }
            });
        }

        // Добавление задачи по клику на кнопку
        document.getElementById('add-task-button').addEventListener('click', function() {
            const taskInput = document.getElementById('task-input');
            const taskText = taskInput.value.trim();

            if (taskText) {
                addTask(taskText);
                taskInput.value = '';  // Очистить поле ввода
            }
        });

        // Добавление задачи по нажатию клавиши Enter
        document.getElementById('task-input').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const taskText = event.target.value.trim();
                if (taskText) {
                    addTask(taskText);
                    event.target.value = '';  // Очистить поле ввода
                }
            }
        });


