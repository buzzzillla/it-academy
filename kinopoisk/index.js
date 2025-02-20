let filmsList = document.getElementById("movies");
let count = 1;

let films = [];

async function getFilms() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
        params: {
            page: count,
        },
        headers: {
            'X-API-KEY': 'c5d1b7b1-4b6f-41e9-855a-292c1e102820',
            'Content-Type': 'application/json',
        },
    });
    films = response.data.items;
    showFilms();
}

function showFilms() {
    filmsList.innerHTML = '';
    for (let film of films) {
        let filmCard = document.createElement('div')
        let filmRating = document.createElement('div');
        let filmPoster = document.createElement('div');
        let filmName = document.createElement('div');

        filmRating.innerHTML = `${ film.ratingKinopoisk || film.rating }`;
        filmPoster.innerHTML = `<img class="movie__cover" src = "${ film.posterUrl }"  alt = ''>`
        filmName.innerHTML = `${ film.nameRu } (${ film.year })`;

        filmCard.classList.add('movie');
        filmRating.classList.add('movie__average');
        filmPoster.classList.add('movie__cover-inner');
        filmName.classList.add('movie__title');



        filmCard.append(filmPoster, filmName, filmRating)

        filmsList.append(filmCard);
    }
}

function changePage() {
    let pageList = document.getElementsByClassName('page')

    async function change(event) {
        count = event.target.innerText
        await getFilms()

        for (let page of pageList) {
            page.classList.remove('active')
        }

        event.target.classList.add('active')
        window.scrollTo(0, 0);
    }

    for (let page of pageList) {

        page.addEventListener('click', change)
    }
}

let buttonPoisk = document.getElementById('poisk')

async function searchFilms() {
    let input = document.getElementById('input');
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword', {
        params: {
            keyword: input.value,
        },
        headers: {
            'X-API-KEY': 'c5d1b7b1-4b6f-41e9-855a-292c1e102820',
            'Content-Type': 'application/json',
        },
    });
    films = response.data.films;
    showFilms();
}

buttonPoisk.addEventListener('click', searchFilms);

let buttonCbroc = document.getElementById('sbros')

async function buttonSbros() {
    input.value = '';
    getFilms();
}

buttonCbroc.addEventListener('click', buttonSbros);

let movieCard = document.getElementById('movie');

async function redirectToMovie() {
    // Указываем ссылку на html-страницу о фильме movie.html
    // Добавляем к ссылке параметр id (записывается через ?=), в котором укажем id фильма на сайте кинопоиска
    let url = `movie.html?id=${ movie.kinopoiskId }`;
    // Откроем новое окно в браузере по ссылке вида: movie.html?id=123
    // Подробнее об открытии окон в браузере: https://learn.javascript.ru/popup-windows
    window.open(url, '_self');
}

movieCard.addEventListener('click', redirectToMovie);

getFilms();
changePage()

