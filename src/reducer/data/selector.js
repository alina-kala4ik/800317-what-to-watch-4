import {NameSpace} from "./../name-space.js";
import {Genres} from "./../../utils.js";
import {createSelector} from "reselect";

const MAX_NUMBER_GENRES = 10;

const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

const getFilteredFilms = createSelector(
    getFilms,
    (state, genre) => genre,
    (state, genre, filmId) => filmId,
    (films, genre, filmId) => {
      if (genre === Genres.ALL) {
        return films;
      }
      return films.filter((film) => film.genre === genre && film.id !== filmId);
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
      return films.find((film) => film.id === Number(id));
    }
);

const getFavoriteFilms = (state) => {
  return state[NameSpace.DATA].favoriteFilms;
};

const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

const getFlagReviewsFetching = (state) => {
  return state[NameSpace.DATA].isReviewsFetching;
};

const getGenresList = createSelector(
    getFilms,
    (films) => {
      const genres = new Set();
      genres.add(`All genres`);
      films.forEach((film) => {
        genres.add(film.genre);
      });
      const genresList = Array.from(genres).slice(0, MAX_NUMBER_GENRES);
      return genresList;
    }
);


export {
  getFilms,
  getPromoFilm,
  getFilteredFilms,
  getIsFilmsFetching,
  getIsPromoFilmFetching,
  getFlagCommentPublishing,
  getFlagCommentSendingError,
  getFilmById,
  getFavoriteFilms,
  getReviews,
  getFlagReviewsFetching,
  getGenresList
};
