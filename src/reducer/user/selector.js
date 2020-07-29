import {NameSpace} from "./../name-space.js";

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getAvatar = (state) => {
  return state[NameSpace.USER].avatar;
};

const getFlagIsFetchingAuthStatus = (state) => {
  return state[NameSpace.USER].isFetchingAuthStatus;
};

const getFlagLoginDataValid = (state) => {
  return state[NameSpace.USER].isLoginDataValid;
}

export {getAuthorizationStatus, getAvatar, getFlagIsFetchingAuthStatus, getFlagLoginDataValid};
