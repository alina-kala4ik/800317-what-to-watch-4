import {NameSpace} from "./../name-space.js";

const getDisplayedFilmsCount = (state) => {
  return state[NameSpace.APP_STATE].displayedFilmsCount;
};

const getActiveGenre = (state) => {
  return state[NameSpace.APP_STATE].activeGenre;
};

const gerServerStatus = (state) => {
  return state[NameSpace.APP_STATE].serverStatus;
};


export {getDisplayedFilmsCount, getActiveGenre, gerServerStatus};

