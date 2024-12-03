let sumButton = document.getElementById('button')
let sumInput = document.getElementById('input')
let sumParagraph = document.getElementById('fag')
function changeText () {
sumParagraph.innerText = sumInput.value
}

sumButton.addEventListener('click', changeText)