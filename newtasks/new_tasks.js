let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resetButton = document.getElementById('reset-button');

let new_tasks = [];

// Функция для получения списка задач с dummyjson
async function getTasks() {
    let response = await axios.get('https://dummyjson.com/posts');
    // Записываем полученные данные в переменную new_tasks
    new_tasks = response.data.posts;
    showTasks();
}

// Функция для вывода задач на экран пользователя
function showTasks() {
    // очищаем список задач перед выводом элементов на экран
    list.innerHTML = ""
    for (const [index, new_task] of new_tasks.entries()) {

        // Создание нового элемента с помощью createElement
        let task = document.createElement("div");
        let taskTitle = document.createElement("div");
        let taskDescription = document.createElement("div");
        let delButton = document.createElement("button");


        async function delTask() {
            let ok = confirm(`Вы уверены, что хотите удалить задачу "${ new_task.title }?`);
            if (ok) {
                let response = await axios.delete(`https://dummyjson.com/posts/${new_task.id}`)
                let task = response.data;
                // если задача была успешно удалена
                if (task.isDeleted) {
                    new_tasks.splice(index, 1);
                    showTasks();
                }
            }
        }

        delButton.addEventListener('click', delTask);

        // Добавляем css классы на элементы
        task.classList.add("task");
        taskTitle.classList.add("taskTitle");
        taskDescription.classList.add("taskDescription");

        taskTitle.innerHTML = `<b>Название:</b> ${new_task.title}`;
        taskDescription.innerHTML = `<b>Описание:</b> ${new_task.body}`;
        delButton.innerHTML = 'Удалить'
        task.append(taskTitle, taskDescription, delButton);
        // Добавление нового элемента в конец элемента
        list.append(task);
    }
}

// Функция добавления новой задачи
async function addTask() {
    let response = await axios.post('https://dummyjson.com/posts/add', {
        title: title.value,
        body: description.value,
        userId: 5,
    });
    let task = response.data;
    // Если для задачи создался уник номер, то задача успешно выполнена
    if (task.id) {
        new_tasks.unshift(task);
        showTasks();
    }
}
// Связываем кнопку с функцией добавления задачи
button.addEventListener("click", addTask);

async function searchTasks() {
    // выполняем поиск задач по слову
    let response = await axios.get(`https://dummyjson.com/posts/search?q=${ searchInput.value }`);
    new_tasks = response.data.posts;
    showTasks();
}

searchButton.addEventListener('click', searchTasks);

// Сброс найденных задач
resetButton.addEventListener('click', getTasks);

// Получим список задач при загрузке страницы
getTasks();