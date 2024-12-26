let sumButton2 = document.getElementById("but2");
let sumButton3 = document.getElementById("but3");
let sumButton4 = document.getElementById("but4");
let sumButton5 = document.getElementById("but5");
let sumButton = document.getElementById("but");

function colorWhite () {
   if (document.body.style.backgroundColor === "white") {
        document.body.style.color = 'black';
        }
}

function colorBlack () {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.color = "white";
    }
}

function colorGray () {
    document.body.style.backgroundColor = "gray";
}

function colorGoldenrod () {
    document.body.style.backgroundColor = "goldenrod";
}

function colorDarkblue () {
    if (document.body.style.backgroundColor === "darkblue") {
      document.body.style.color = "greenyellow"
    }
}

sumButton.addEventListener('click', colorWhite)
sumButton2.addEventListener("click", colorBlack);
sumButton3.addEventListener("click", colorGray);
sumButton4.addEventListener("click", colorGoldenrod);
sumButton5.addEventListener("click", colorDarkblue);
