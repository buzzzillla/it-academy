let sumButton = document.getElementById('button')
let sumButton2 = document.getElementById('button2')
let sumButton3 = document.getElementById('button3')

function red() {
    document.body.style.backgroundColor = 'red' }
function green() {
    document.body.style.backgroundColor = 'green' }
function blue() {
    document.body.style.backgroundColor = 'blue '}

sumButton.addEventListener('click', red)
sumButton2.addEventListener('click', green)
sumButton3.addEventListener('click', blue)
