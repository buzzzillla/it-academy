let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let sum = document.getElementById("sum");
let art = document.getElementById("art");
let button = document.getElementById("button");
let list = document.getElementById("list");
let count = 0;

function addTask () {
    // Создание нового элемента с помощью createElement
    let task = document.createElement("div");
    let taskTitle = document.createElement("div");
    let taskDescription = document.createElement("div");
    let taskPrice = document.createElement("div");
    let taskSum = document.createElement("div");
    let taskArt = document.createElement("div");
    let delButton = document.createElement("button");
    let taskNumber = document.createElement("div");
    let clearButton = document.createElement("button2");


    function delTask() {
        task.remove();
        count = count - 1;

        if (count === 0) {
            list.innerHTML = '<p>Добавленные товары не найдены</p>'
        }
    }

    delButton.addEventListener ('click' , delTask);

    // Добавляем css классы на элементы
    task.classList.add("task");
    taskTitle.classList.add("taskTitle");
    taskDescription.classList.add("taskDescription");
    taskPrice.classList.add("taskPrice");
    taskSum.classList.add('taskSum')
    taskArt.classList.add('taskArt')
    taskTitle.innerHTML = `Название: ${ title.value }`
    taskDescription.innerHTML = `Описание: ${ description.value }`
    taskPrice.innerHTML = `Цена: ${ price.value }`
    taskSum.innerHTML = `Количество: ${ sum.value }`
    taskArt.innerHTML = `Артикул: ${ art.value }`
    delButton.innerHTML = 'Удалить'
    count = count + 1;
    taskTitle.innerHTML = `<b>Товар №${ count }</b>`
    task.append(taskNumber,taskTitle, taskDescription, taskPrice, taskSum, taskArt, delButton, clearButton);

    if (count === 1) {
        list.innerHTML = ''
    }

    // Добавление нового элемента в конец элемента
    list.append(task);
    title.value = '';
    description.value = '';
    price.value = ''
    sum.value = ''
    art.value = ''
}

function clearInput() {
    title.value = "";
    description.value = '';
    price.value = '';
    art.value = '';
    sum.value = '';
}

button.addEventListener("click", addTask);