import {extend, Genres} from "./../../utils.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

const ServerStatus = {
  ERROR: `ERROR`,
  OK: `OK`
};

const initialState = {
  activeGenre: Genres.ALL,
  displayedFilmsCount: DISPLAYED_NUMBER_OF_FILMS,
  serverStatus: ServerStatus.OK,
};

const ActionTypes = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  INCREASE_COUNT_DISPLAYED_FILMS: `INCREASE_COUNT_DISPLAYED_FILMS`,
  RESET_COUNT_DISPLAYED_FILMS: `RESET_COUNT_DISPLAYED_FILMS`,
  CHANGE_SERVER_STATUS_ON_ERROR: `CHANGE_SERVER_STATUS_ON_ERROR`,
};

const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionTypes.CHANGE_ACTIVE_GENRE,
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
    case ActionTypes.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    case ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        displayedFilmsCount: state.displayedFilmsCount + action.payload
      });
    case ActionTypes.RESET_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        displayedFilmsCount: action.payload
      });
    case ActionTypes.CHANGE_SERVER_STATUS_ON_ERROR:
      return extend(state, {
        serverStatus: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, ServerStatus};
