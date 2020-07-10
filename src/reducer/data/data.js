import {extend} from "./../../utils.js";
import {adapter, adapterForArray} from "./../../adapters/films.js";
import {getFilteredFilms} from "./selector.js";

const initialState = {
  allFilms: [],
  films: [],
  promoFilm: null,
};

const ActionTypes = {
  FILTERED_FILMS: `FILTERED_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
};

const ActionCreator = {
  filteredFilms: (genre)=>({
    type: ActionTypes.FILTERED_FILMS,
    payload: genre
  }),
  loadFilms: (films)=>({
    type: ActionTypes.LOAD_FILMS,
    payload: films
  }),
  loadPromoFilm: (film)=>({
    type: ActionTypes.LOAD_PROMO_FILM,
    payload: film
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
    case ActionTypes.FILTERED_FILMS:
      const genre = action.payload;
      const filteredFilms = getFilteredFilms(state, genre);
      return extend(state, {
        films: filteredFilms
      });
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        allFilms: action.payload
      });
    case ActionTypes.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Operation};
