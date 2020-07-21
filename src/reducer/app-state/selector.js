import {NameSpace} from "./../name-space.js";

const getCountDisplayedFilms = (state) => {
  return state[NameSpace.APP_STATE].countDisplayedFilms;
};

const getActiveGenre = (state) => {
  return state[NameSpace.APP_STATE].activeGenre;
};

const gerServerStatus = (state) => {
  return state[NameSpace.APP_STATE].serverStatus;
};


export {getCountDisplayedFilms, getActiveGenre, gerServerStatus};

