let sumButton = document.getElementById('button')
let sumInput = document.getElementById('input')
function changeText () {
    if (sumInput.value == 'Текст внутри input') {
        sumInput.value = 'Новый текст внутри input'
    }
    else if (sumInput.value == 'Новый текст внутри input') {
        sumInput.value = 'Текст внутри input';
    }
}
sumButton.addEventListener('click', changeText)