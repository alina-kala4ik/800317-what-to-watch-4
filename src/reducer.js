import films from "./mocks/films.js";
import {extend, Genres} from "./utils.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

const initialState = {
  genre: Genres.ALL,
  films,
  countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTERED_FILMS: `FILTERED_FILMS`,
  INCREASE_COUNT_DISPLAYED_FILMS: `INCREASE_COUNT_DISPLAYED_FILMS`,
  RESET_COUNT_DISPLAYED_FILMS: `RESET_COUNT_DISPLAYED_FILMS`
};

const ActionCreator = {
  changeGenre: (genre)=>({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  filteredFilms: ()=>({
    type: ActionTypes.FILTERED_FILMS,
    payload: null
  }),
  increaseCountDisplayedFilms: ()=>({
    type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
    payload: DISPLAYED_NUMBER_OF_FILMS
  }),
  resetCountDisplayedFilms: ()=>({
    type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
    payload: DISPLAYED_NUMBER_OF_FILMS
  }),
};

const getFilteredFilms = (genre) => {
  const allFilms = initialState.films;

  if (genre === Genres.ALL) {
    return allFilms;
  }

  const filteredFilms = allFilms.filter((film) => film.genre === genre);

  return filteredFilms;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionTypes.FILTERED_FILMS:
      const filteredFilms = getFilteredFilms(state.genre);
      return extend(state, {
        films: filteredFilms
      });
    case ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        countDisplayedFilms: state.countDisplayedFilms + action.payload
      });
    case ActionTypes.RESET_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        countDisplayedFilms: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, getFilteredFilms};
