import {NameSpace} from "./../name-space.js";
import {Genres} from "./../../utils.js";
import {createSelector} from "reselect";

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

const getAllFilms = (state) => {
  if (state[NameSpace.DATA]) {
    return state[NameSpace.DATA].allFilms;
  }
  return state.allFilms;
};

const getGenreForFilter = (state) => {
  if (state[NameSpace.DATA]) {
    return state[NameSpace.DATA].genreForFilter;
  }
  return state.genreForFilter;
};

const getFilteredFilms = createSelector(
    getAllFilms,
    getGenreForFilter,
    (films, genre) => {
      if (genre === Genres.ALL) {
        return films;
      }
      return films.filter((film) => film.genre === genre);
    }
);

const getIsFilmsFetching = (state) => {
  return state[NameSpace.DATA].isFilmsFetching;
};

const getIsPromoFilmFetching = (state) => {
  return state[NameSpace.DATA].isPromoFilmFetching;
};


export {getFilms, getPromoFilm, getFilteredFilms, getIsFilmsFetching, getIsPromoFilmFetching};
