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

        filmRating.innerHTML = `${ film.ratingKinopoisk }`;
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


getFilms();
changePage()
