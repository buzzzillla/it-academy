// // Массивы в JavaScript
//
let users = ['Иван', 'Павел', 'Анна' ]

// Получение элемента из массива
// массив[индекс элемента]
// индекс - порядковый номер, считая с нуля
console.log(users[1]);

// Длина массива (количество элементов)
// массив.length
console.log('Кол-во пользователей:', users.length);

// Добавление элемента массива
users.push('Дмитрий');

// Удаление элемента из конца массива
users.pop();

// Добавление элемента в начало массива
users.unshift('Босс');

// Удаление элемента из начала массива
users.shift();

// // Удаление элемента по индексу
// // splice(индекс для удаления, кол-во элементов)
// // users.splice(1, 2)
//
console.log(users, users.length);
//
// // Объекты в JavaScript
//
users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Иван',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '07.02.1998',
    },
    {
        avatar: 'https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
        name: 'Павел',
        email: 'pavel@mail.ru',
        phone: '+7 (989) 888-100-10',
        birthday: '09.09.1999',
    },
    {
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-1024.png',
        name: 'Анна',
        email: 'anna@mail.ru',
        phone: '+7 (988) 111-100-11',
        birthday: '08.06.1996',
    },
]
//
// // Получение значения объекта по его ключу
let firstUser = users[0];

console.log('Первый пользователь:', firstUser);
console.log('Имя пользователя:', firstUser.name, firstUser['name']);

// Задать новое свойство объекта
firstUser['likes birds'] = true;
firstUser['phone'] = '7 (111) 011-00-01';

// Удалить свойство объекта
delete firstUser['likes birds'];

console.log(users)

let usersList = document.getElementById("users-list");
//
// // Функция для вывода пользователей на экран
function showUsers() {
    // Циклы в JavaScript
    // for (let элемент_массива of массив) {
    //  действия для выполнения над элементом
    // }
    usersList.innerHTML = ''
    for (let user of users) {
        // Создаем карточка пользователя
        let userCard = document.createElement('div');
        // Создаем аватар пользователя
        let userAvatar = document.createElement('div');
        // Создаем имя пользователя
        let userName = document.createElement('h2');
        // Создаем номер телефона пользователя
        let userPhone = document.createElement('p');
        // Создаем почту пользователя
        let userEmail = document.createElement('p');
        // Создаем дату рождения пользователя
        let userBirthday = document.createElement('p');
        // Добавляем к карточке пользователя класс user-card
        userCard.classList.add('user-card');
        // Добавляем к карточке пользователя класс user-avatar
        userAvatar.classList.add('user-avatar')
        // Добавляем к карточке пользователя класс user-name
        userName.classList.add('user-name');


        // Поместим картинку внутрь div-'ktvtynf
        userAvatar.innerHTML = `<img src="${user.avatar}"  alt="">`
        // Поместим имя внутрь userName
        userName.innerHTML = user.name;
        // Поместим телефон внутрь userPhone
        userPhone.innerHTML = `<b>Телефон:</b> ${user.phone}`;
        // Поместим почту пользователя внутрь userEmail
        userEmail.innerHTML = `<b>Email:</b> ${user.email}`;
        // Поместим др внутрь userBirthday
        userBirthday.innerHTML = `<b>День рождения</b> ${user.birthday}`;

        // Поместим аватар пользователя внутрь созданной карточки
        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday);

        // Поместить карточку пользователя в конец списка
        usersList.append(userCard);
    }
}

showUsers();


// let numbers = [1,2,3,4,5,6,7,8,9,10]
//
// for (let num of numbers) {
//     console.log('Элемент массива', num)
//     num = num + 1
// }

users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Иван',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '07.02.1998',
    },
]

function addInfo() {
    // let info = document.createElement('div')
    // let name = document.createElement('div');
    // let phone = document.createElement('div');
    // let email = document.createElement('div');
    // let birthday = document.createElement('div');
    // let addButton = document.createElement('button');
    // button.addEventListener('click', addInfo);
    let user = {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: name.value,
        email: email.value,
        phone: phone.value,
        birthday: birthday.value,
    }
    users.push(user)
    showUsers()
}

let info = document.getElementById("info")
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let button = document.getElementById("button");
let email = document.getElementById("email");
let birthday = document.getElementById("birthday");
let list = document.getElementById("list");

button.addEventListener("click", addInfo);


    // Добавляем css классы на элементы
    name.classList.add("name");
    phone.classList.add("phone");
    email.classList.add("pochta");
    birthday.classList.add("birthday");

    name.innerHTML = ` ${ name.value }`
    phone.innerHTML = `Телефон: ${ phone.value }`
    email.innerHTML = `Email: ${ email.value }`
    birthday.innerHTML = `День рождения: ${ birthday.value}`
    list.append(name, phone, email, birthday, );
    // Добавление нового элемента в конец элемента
    list.append(info);

//     title.value = '';
//     description.value = '';
// }
// button.addEventListener("click", addTask);


