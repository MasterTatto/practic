"use strict"


let numberOfFilms = prompt('how mach you watch films?', '')

const lastWatchFilm = prompt('last your film ?' , '')
const starForThisFilm = prompt('star for this film ?' , '')

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}
personalMovieDB.movies[lastWatchFilm] = starForThisFilm

console.log(personalMovieDB)

