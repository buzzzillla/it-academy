// Массивы в JavaScript

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

// Удаление элемента по индексу
// splice(индекс для удаления, кол-во элементов)
// users.splice(1, 2)

console.log(users, users.length);

// Объекты в JavaScript

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

// Получение значения объекта по его ключу
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

// Функция для вывода пользователей на экран
function showUsers() {
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
    userAvatar.innerHTML = `<img src="${ firstUser.avatar}"  alt="">`
    // Поместим имя внутрь userName
    userName.innerHTML = firstUser.name;
    // Поместим телефон внутрь userPhone
    userPhone.innerHTML = `<b>Телефон:</b> ${ firstUser.phone}`;
    // Поместим почту пользователя внутрь userEmail
    userEmail.innerHTML = `<b>Email:</b> ${ firstUser.email}`;
    // Поместим др внутрь userBirthday
    userBirthday.innerHTML = `<b>День рождения</b> ${ firstUser.birthday}`;

    // Поместим аватар пользователя внутрь созданной карточки
    userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday);

    // Поместить карточку пользователя в конец списка
    usersList.append(userCard);
}

showUsers();