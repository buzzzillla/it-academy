let whiteButton = document.getElementById("white-button");
let blackButton = document.getElementById("black-button");
let greyButton = document.getElementById("grey-button");
let goldenButton = document.getElementById("golden-button");
let darkblueButton = document.getElementById("blue-button");

let minus10Button = document.getElementById("minus10");
let minus1Button = document.getElementById("minus1");
let plus10Button = document.getElementById("plus10");
let plus1Button = document.getElementById("plus1");
let changeButton = document.getElementById('change')
let total = document.getElementById('total')
let count = 0

let even = document.getElementById("even")
let three = document.getElementById("three")
let five = document.getElementById("five")
let seven = document.getElementById("seven")

let historyEven = document.getElementById("history-even")
let historyThree = document.getElementById("history-three")
let historyFive = document.getElementById('history-five')
let historySeven = document.getElementById("history-seven")
let history = document.getElementById('history')

function colorBlack() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

function colorWhite() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}

function colorGrey() {
    document.body.style.backgroundColor = 'grey'
    document.body.style.color = 'black'
}

function colorGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod'
    document.body.style.color = 'black'
}

function colorDarkblue() {
    document.body.style.backgroundColor = 'darkblue'
    document.body.style.color = 'greenyellow'
}

function checkEven() {
    if (count % 2 == 0) {
        even.innerText = 'Да'
    }
    else {
        even.innerText = 'Нет'
    }
}

function minus10() {
    count = count - 10
    total.innerHTML = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}
function minus1 () {
    count = count - 1
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}
function plus10 () {
    count = count + 10
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}
function plus1 () {
    count = count + 1
    total.innerText = count

    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}
function change() {
    count = +prompt('Укажите число')
    total.innerText = count

        checkEven()
        checkThree()
    checkFive()
    checkSeven()
    checkHistory()

    if (count % 2 == 0) {
        historyEven.innerText = historyEven.innerText + ' ' + count
    }
    if (count % 3 == 0) {
        historyThree.innerText = historyThree.innerText + ' ' + count
    }
    if (count % 5 == 0) {
        historyFive.innerText = historyFive.innerText + ' ' +  count
    }
    if (count % 7 == 0) {
        historySeven.innerText = historySeven.innerText + ' ' + count
    }
}

function checkHistory() {
    if (count % 2 == 0) {
        historyEven.innerText = historyEven.innerText + ' ' + count
    }
    if (count % 3 == 0) {
        historyThree.innerText = historyThree.innerText + ' ' + count
    }
    if (count % 5 == 0) {
        historyFive.innerText = historyFive.innerText + ' ' +  count
    }
    if (count % 7 == 0) {
        historySeven.innerText = historySeven.innerText + ' ' + count
    }
    if (count % 2 != 0 && count % 2 != 0 && count % 5 != 0 && count % 7 != 0) {
        history.innerText = history.innerText + ' ' + count
    }
}

function checkThree() {
    if (count % 3 == 0) {
        three.innerText = 'Да'
    }
    else {
        three.innerText = 'Нет'
    }
}

function checkFive() {
    if (count % 5 == 0) {
        five.innerText = 'Да'
    }
    else {
        five.innerText = 'Нет'
    }
}

function checkSeven() {
    if (count % 7 == 0) {
        seven.innerText = 'Да'
    }
    else {
        seven.innerText = 'Нет'
    }
}

blackButton.addEventListener("click", colorBlack)
whiteButton.addEventListener("click", colorWhite)
greyButton.addEventListener("click", colorGrey)
goldenButton.addEventListener('click', colorGoldenrod)
darkblueButton.addEventListener("click", colorDarkblue)
minus10Button.addEventListener('click', minus10)
minus1Button.addEventListener('click', minus1)
plus10Button.addEventListener('click', plus10)
plus1Button.addEventListener('click', plus1)
changeButton.addEventListener('click', change)