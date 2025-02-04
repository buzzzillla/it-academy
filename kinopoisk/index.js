let filmsList = document.getElementById("movies");

let films = [];

async function getFilms() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
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
        let filmYear = document.createElement('div');

        filmRating.innerHTML = `${film.ratingKinopoisk}`;
        filmPoster.innerHTML = `<img src = "${film.posterUrl}"  alt = ''>`
        filmName.innerHTML = `${film.nameRu}`;
        filmYear.innerHTML = `${film.year}`;

        filmRating.classList.add('film-rating');
        filmPoster.classList.add('film-poster');
        filmName.classList.add('film-name');
        filmYear.classList.add('film-year');

        filmCard.append(filmRating, filmName, filmPoster, filmYear)

        filmsList.append(filmCard);
    }
}

getFilms();
