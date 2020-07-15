import {NameSpace} from "./../name-space.js";

const getAuthorizationStatus = (state) =>{
  return state[NameSpace.USER].authorizationStatus;
};

const getAvatar = (state) => {
  return state[NameSpace.USER].avatar;
};


export {getAuthorizationStatus, getAvatar};
