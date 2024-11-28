// Функции
// function имя_функции()
// Tело функции 
// }

// Пример функции в javascript 
function sayHello() {
    alert('Привет');
}

// Вызов функции
sayHello();

// Получить кнопку из html
let button = document.getElementById('button');

console.log(button);

// Вызвать функцию при нажатии на кнопку
button.addEventListener('click', sayHello);

// Калькулятор

    function sumOfNumbers() {
    // Получение 1-го числа
    let input1 = document.getElementById('first');

    // Получение 1-го текстового числа
    let firstNumber = input1.value;

    // Получение 2-го числа
    let input2 = document.getElementById('second');

    // Получение 2-го текствого числа 
    let secondNumber = input2.value;

    // Сумма введенных чисел
    let sum = +firstNumber + +secondNumber;

    // Получаем span элемент со значением суммы
    let span = document.getElementById('sum');

    // Подставляем найденную сумму в span
    span.innerText = sum;
    }


// Получем кнопку для нахождения суммы
let sumButton = document.getElementById('sum-button');

// Отслеживаем нажатие на кнопку Найти сумму
sumButton.addEventListener('click', sumOfNumbers);

// Дополнительно
let body = document.body;

// Изменение
body.style.background = 'pink';

console.log(body);