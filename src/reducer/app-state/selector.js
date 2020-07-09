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

export {getPlayableMovie, getCountDisplayedFilms, getGenre};

