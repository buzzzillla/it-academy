let sumButton = document.getElementById ('button')
sumButton.addEventListener ('click' , function handleClick() {
    if (sumButton.textContent == 'Текст кнопки') {
        sumButton.textContent = 'Новый текст'
    }
    else if (sumButton.textContent == 'Новый текст') {
        sumButton.textContent = 'Текст кнопки'
    }

});
