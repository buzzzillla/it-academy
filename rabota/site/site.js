let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
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
    let clearButton = document.createElement("button2");
    let taskPrice = document.createElement("div");

    function delTask() {
        task.remove();
        count = count - 1;
    }

    function clearInput() {
        input.value = "";
    }

    delButton.addEventListener ('click' , delTask);
    clearButton.addEventListener ('click' , clearInput);

    // Добавляем css классы на элементы
    task.classList.add("task");
    taskTitle.classList.add("taskTitle");
    taskDescription.classList.add("taskDescription");
    taskPrice.classList.add("taskPrice");

    taskTitle.innerHTML = `Название: ${ title.value }`
    taskDescription.innerHTML = `Описание: ${ description.value }`
    taskPrice.innerHTML = `Цена: ${ price.value }`
    delButton.innerHTML = 'Удалить'
    count = count + 1;
    taskNumber.innerHTML = `<b>Товар №${ count }</b>`
    task.append(taskNumber,taskTitle, taskDescription, taskPrice, delButton);
    // Добавление нового элемента в конец элемента
    list.append(task);
    title.value = '';
    description.value = '';
    price.value = ''
}
button.addEventListener("click", addTask);