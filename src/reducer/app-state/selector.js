import {NameSpace} from "./../name-space.js";

const getCountDisplayedFilms = (state) => {
  return state[NameSpace.APP_STATE].countDisplayedFilms;
};

const getGenre = (state) => {
  return state[NameSpace.APP_STATE].genre;
};

const gerServerStatus = (state) => {
  return state[NameSpace.APP_STATE].serverStatus;
};


export {getCountDisplayedFilms, getGenre, gerServerStatus};

