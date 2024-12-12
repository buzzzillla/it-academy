let input = document.getElementById("input");
function appendValue(value) {
    input.value = input.value + value;
}

function append(value) {
    input.value = input.value - value;
}

function app(value) {
    input.value = input.value / value;
}

function ap(value) {
    input.value = input.value * value;
}

function clearInput() {
    input.value = '';
}

function compute() {
    let newValue = input.value.replace('/', '/');
    newValue = input.value.replace('*', '*');
    try {
        input.value = eval(newValue);
    }
    catch(e) {
        input.value = 'Ошибка!'
    }
}

function deleteKey(event) {
    console.log(event)
    let keys = [ '1', '2', '3', '4', '5' ]
    if (keys.includes(event.key) == false) {
        event.preventDefault();
    }
}

input.addEventListener('keypress', deleteKey);

