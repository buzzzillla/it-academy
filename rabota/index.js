let sumButton = document.getElementById('button')

function IzmCveta() {
    if (document.body.style.backgroundColor === 'aquamarine') {
        document.body.style.backgroundColor = 'black'
    }
    else {
        document.body.style.backgroundColor = 'aquamarine'
    }
}

sumButton.addEventListener('click', IzmCveta)