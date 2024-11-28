let sumButton = document.getElementById ('button')
let sumText = document.getElementById ('text')
sumButton.addEventListener ('click', function handleClick() {
    if (sumText.innerText == 'Текст внутри div') {
        sumText.innerText = 'Новый текст внутри div'
    }
    else if (sumText.innerText == 'Новый текст внутри div') {
        sumText.innerText = 'Текст внутри div';
    }
});