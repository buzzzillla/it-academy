let usersList = document.getElementById('users-list');

// Список пользователей
let users = [];
// Функция получения списка пользователей
//  Асинхронная функция получения списка пользователей
// Асинхронная функция умеет дожидаться выполнения
async function getUsers() {
    // Выполняем запрос на получение пользователей
    // await позволяет дождаться ответа от сервиса
    let response = await axios.get("https://dummyjson.com/users");
    users = response.data.users;
    showUsers();
}
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
        userAvatar.innerHTML = `<img src="${user.image}"  alt="">`
        // Поместим имя внутрь userName
        userName.innerHTML = user.firstName;
        // Поместим телефон внутрь userPhone
        userPhone.innerHTML = `<b>Телефон:</b> ${user.phone}`;
        // Поместим почту пользователя внутрь userEmail
        userEmail.innerHTML = `<b>Email:</b> ${user.email}`;
        // Поместим др внутрь userBirthday
        userBirthday.innerHTML = `<b>День рождения</b> ${user.birthDate}`;

        // Поместим аватар пользователя внутрь созданной карточки
        userCard.append(userAvatar, userName, userPhone, userEmail, userBirthday);

        // Поместить карточку пользователя в конец списка
        usersList.append(userCard);
    }
}

getUsers();


