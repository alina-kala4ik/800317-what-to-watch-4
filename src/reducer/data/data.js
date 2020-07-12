import {extend, Genres} from "./../../utils.js";
import {adapter, adapterForArray} from "./../../adapters/films.js";

const initialState = {
  films: [],
  promoFilm: null,
  isFilmsFetching: true,
  isPromoFilmFetching: true,
  genreForFilter: Genres.ALL
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SET_GENRE_FOR_FILTER: `SET_GENRE_FOR_FILTER`,
};

const ActionCreator = {
  loadFilms: (films)=>({
    type: ActionTypes.LOAD_FILMS,
    payload: films
  }),
  loadPromoFilm: (film)=>({
    type: ActionTypes.LOAD_PROMO_FILM,
    payload: film
  }),
  setGenreForFilter: (genre)=>({
    type: ActionTypes.SET_GENRE_FOR_FILTER,
    payload: genre
  })
};

const Operation = {
  loadFilms: ()=>(dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response)=>{
        const films = adapterForArray(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoFilm: ()=>(dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response)=>{
        const promoFilm = adapter(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        isFilmsFetching: false,
      });
    case ActionTypes.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
        isPromoFilmFetching: false
      });
    case ActionTypes.SET_GENRE_FOR_FILTER:
      return extend(state, {
        genreForFilter: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Operation};
