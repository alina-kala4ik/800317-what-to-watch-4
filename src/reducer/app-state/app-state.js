import {extend, Genres} from "./../../utils.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

const initialState = {
  genre: Genres.ALL,
  countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS,
  playableMovie: null,
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREASE_COUNT_DISPLAYED_FILMS: `INCREASE_COUNT_DISPLAYED_FILMS`,
  RESET_COUNT_DISPLAYED_FILMS: `RESET_COUNT_DISPLAYED_FILMS`,
  CHOOSE_MOVIE_TO_WATCH: `CHOOSE_MOVIE_TO_WATCH`,
};

const ActionCreator = {
  changeGenre: (genre)=>({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  increaseCountDisplayedFilms: ()=>({
    type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
    payload: DISPLAYED_NUMBER_OF_FILMS
  }),
  resetCountDisplayedFilms: ()=>({
    type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
    payload: DISPLAYED_NUMBER_OF_FILMS
  }),
  chooseMovieToWatch: (film)=>({
    type: ActionTypes.CHOOSE_MOVIE_TO_WATCH,
    payload: film
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        countDisplayedFilms: state.countDisplayedFilms + action.payload
      });
    case ActionTypes.RESET_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        countDisplayedFilms: action.payload
      });
    case ActionTypes.CHOOSE_MOVIE_TO_WATCH:
      return extend(state, {
        playableMovie: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator};
