import {extend, Genres} from "./../../utils.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

const ServerStatus = {
  ERROR: `ERROR`,
  OK: `OK`
};

const initialState = {
  genre: Genres.ALL,
  countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS,
  serverStatus: ServerStatus.OK,
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREASE_COUNT_DISPLAYED_FILMS: `INCREASE_COUNT_DISPLAYED_FILMS`,
  RESET_COUNT_DISPLAYED_FILMS: `RESET_COUNT_DISPLAYED_FILMS`,
  CHANGE_SERVER_STATUS_ON_ERROR: `CHANGE_SERVER_STATUS_ON_ERROR`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  increaseCountDisplayedFilms: () => ({
    type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
    payload: DISPLAYED_NUMBER_OF_FILMS
  }),
  resetCountDisplayedFilms: () => ({
    type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
    payload: DISPLAYED_NUMBER_OF_FILMS
  }),
  changeServerStatusOnError: () => ({
    type: ActionTypes.CHANGE_SERVER_STATUS_ON_ERROR,
    payload: ServerStatus.ERROR
  })
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
    case ActionTypes.CHANGE_SERVER_STATUS_ON_ERROR:
      return extend(state, {
        serverStatus: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, ServerStatus};
