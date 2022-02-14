// Первое задание:

let numberOfFilms;

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// Второе задание

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// Третье задание

let lookFilm;
let filmRating;

lookFilm = prompt("Один из просмотренных фильмов?");
filmRating = prompt("На сколько оцените его?");

personalMovieDB.movies = `${lookFilm} : ${filmRating}`;

console.log(personalMovieDB);
