let input = document.getElementById("input");
// Функция добавления элемента в input
function appendValue(value) {
    input.value = input.value + value;
}

// Функция для расчета
function compute() {
    // eval - функция для выполнения JavaScript
    input.value = eval('50+2');
}