import {reducer, ActionCreator, ActionTypes} from "./app-state.js";
import {Genres} from "./../../utils.js";
import {ServerStatus} from "./app-state.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

describe(`testing app-state reducer`, () => {
  it(`Returns initial state at application start`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeGenre: Genres.ALL,
      countDisplayedFilms: 8,
      serverStatus: ServerStatus.OK,
    });
  });

  it(`Change active genre`, () => {
    expect(reducer({
      activeGenre: Genres.ALL,
    }, {
      type: ActionTypes.CHANGE_ACTIVE_GENRE,
      payload: Genres.CRIME
    })).toEqual({
      activeGenre: Genres.CRIME,
    });
  });

  it(`Increase count displayed films`, () => {
    expect(reducer({
      countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS,
    }, {
      type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    })).toEqual({
      countDisplayedFilms: 16
    });
  });

  it(`reset count displayed films`, () => {
    expect(reducer({
      countDisplayedFilms: 16
    },
    {
      type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    })).toEqual({
      countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS
    });
  });

  it(`change server status on error`, () => {
    expect(reducer({
      serverStatus: ServerStatus.OK
    }, {
      type: ActionTypes.CHANGE_SERVER_STATUS_ON_ERROR,
      payload: ServerStatus.ERROR
    })).toEqual({
      serverStatus: ServerStatus.ERROR
    });
  });

});

describe(`Action creators in app-state work correctly`, () => {
  it(`Action creators change genre`, () => {
    expect(ActionCreator.changeActiveGenre(Genres.COMEDIES)).toEqual({
      type: ActionTypes.CHANGE_ACTIVE_GENRE,
      payload: Genres.COMEDIES,
    });
  });

  it(`Action creators increase count displayed films`, () => {
    expect(ActionCreator.increaseCountDisplayedFilms()).toEqual({
      type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    });
  });

  it(`Action creators reset count displayed films`, () => {
    expect(ActionCreator.resetCountDisplayedFilms()).toEqual({
      type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    });
  });

  it(`Action creators change server status on error`, () => {
    expect(ActionCreator.changeServerStatusOnError()).toEqual({
      type: ActionTypes.CHANGE_SERVER_STATUS_ON_ERROR,
      payload: ServerStatus.ERROR
    });
  });

});
