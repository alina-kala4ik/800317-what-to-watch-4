import {NameSpace} from "./../name-space.js";

const getPlayableMovie = (state) => {
  return state[NameSpace.APP_STATE].playableMovie;
};

const getCountDisplayedFilms = (state) => {
  return state[NameSpace.APP_STATE].countDisplayedFilms;
};

const getGenre = (state) => {
  return state[NameSpace.APP_STATE].genre;
};

const gerServerStatus = (state) => {
  return state[NameSpace.APP_STATE].serverStatus;
};

const getLogIn = (state) => {
  return state[NameSpace.APP_STATE].logIn;
};

export {getPlayableMovie, getCountDisplayedFilms, getGenre, gerServerStatus, getLogIn};

