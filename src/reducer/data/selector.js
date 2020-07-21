import {NameSpace} from "./../name-space.js";
import {Genres} from "./../../utils.js";
import {createSelector} from "reselect";

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};


const getGenreForFilter = (state) => {
  return state[NameSpace.DATA].genreForFilter;
};

const getFilteredFilms = createSelector(
    getFilms,
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

const getFlagCommentPublishing = (state) => {
  return state[NameSpace.DATA].isCommentPublishing;
};

const getFlagCommentSendingError = (state) => {
  return state[NameSpace.DATA].isCommentSendingError;
};

const getFilmById = createSelector(
    getFilms,
    (state, id) => id,
    (films, id) => {
      const filteredFilms = films.filter((film) => film.id === Number(id));
      return filteredFilms[0];
    }
);

const getFavoriteFilms = (state) => {
  return state[NameSpace.DATA].favoriteFilms;
};


export {
  getFilms,
  getPromoFilm,
  getFilteredFilms,
  getIsFilmsFetching,
  getIsPromoFilmFetching,
  getFlagCommentPublishing,
  getFlagCommentSendingError,
  getFilmById,
  getFavoriteFilms
};
