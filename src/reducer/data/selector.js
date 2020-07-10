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

const getFilteredFilms = (state, genre) => {
  const filtration = createSelector(
      getAllFilms,
      (films)=>{
        if (genre === Genres.ALL) {
          return films;
        }
        return films.filter((film) => film.genre === genre);
      }
  );

  return filtration(state);
};


export {getFilms, getPromoFilm, getFilteredFilms};
