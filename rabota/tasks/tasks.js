let title = document.getElementById("title");
let description = document.getElementById("description");
let button = document.getElementById("button");
let list = document.getElementById("list");
let searchInput = document.getElementById("search");
let searchButton = document.getElementById("search-button");
let resetButton = document.getElementById("reset-button");
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

function searchTask(){
    let tasks = document.getElementsByClassName("task");
    for (let task of tasks) {
        let titles = task.getElementsByClassName("taskTitle");
        let title = titles[0];

        console.log('Пользователь хочет найти', searchInput.value);

        if (title.innerText.includes(searchInput.value) == false) {
            task.style.display = 'none'
        }
    }
}

searchButton.addEventListener("click", searchTask);

function resetTasks() {
    let tasks = document.getElementsByClassName("task")
    for (let task of tasks) {
        task.style.display = 'block'
    }
}

let postsList = document.getElementById('posts-list')
let posts = [];

    async function getPosts () {
        let response = await axios.get('https://dummyjson.com/posts');
        posts = response.data.posts;
    }

    function showPosts() {
        postsList.innerHTML = '';
        for (let post of posts) {
            let postTitle = document.createElement("div");
            let postBody = document.createElement("div");

            postTitle.innerHTML=''
            postBody.innerHTML=''
        }
    }
resetButton.addEventListener('click', resetTasks)