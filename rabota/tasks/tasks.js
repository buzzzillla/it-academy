let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("button");
let list = document.getElementById("list");
let count = 0;

function addTask () {
    // Создание нового элемента с помощью createElement
    let task = document.createElement("div");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let delButton = document.createElement("button");
    let taskNumber = document.createElement("div");

    function delTask() {
        task.remove();
        count = count - 1;
    }

    delButton.addEventListener ('click' , delTask);

    // Добавляем css классы на элементы
    task.classList.add("task");
    taskTitle.classList.add("taskTitle");
    taskDescription.classList.add("taskDescription");

    taskTitle.innerHTML = `Название: ${ title.value }`
    taskDescription.innerHTML = `Описание: ${ description.value }`
    delButton.innerHTML = 'Удалить'
    count = count + 1;
    taskNumber.innerHTML = `<b>Задача №${ count }</b>`
    task.append(taskNumber,taskTitle, taskDescription, delButton);
    // Добавление нового элемента в конец элемента
    list.append(task);
    title.value = '';
    description.value = '';
}
button.addEventListener("click", addTask);