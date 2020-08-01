import {extend} from "./../../utils.js";
import history from "./../../history.js";
import {SERVER_ADDRESS} from "./../../api.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatar: null,
  isFetchingAuthStatus: true,
  isLoginDataValid: true,
};


const ActionTypes = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_AVATAR: `ADD_AVATAR`,
  CHANGE_FLAG_LOGIN_DATA_VALID: `CHANGE_FLAG_LOGIN_DATA_VALID`,
};

const ActionCreator = {
  requiredAuthorization: (status) => ({
    type: ActionTypes.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  addAvatar: (url) => ({
    type: ActionTypes.ADD_AVATAR,
    payload: `${SERVER_ADDRESS}${url}`
  }),
  changeFlagLoginDataValid: (status) => ({
    type: ActionTypes.CHANGE_FLAG_LOGIN_DATA_VALID,
    payload: status
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
        isFetchingAuthStatus: false
      });
    case ActionTypes.ADD_AVATAR:
      return extend(state, {
        avatar: action.payload
      });
    case ActionTypes.CHANGE_FLAG_LOGIN_DATA_VALID:
      return extend(state, {
        isLoginDataValid: action.payload
      });
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        const {avatar_url: avatarUrl} = response.data;

        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(avatarUrl));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((response) => {
        const {avatar_url: avatarUrl} = response.data;

        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(avatarUrl));
        dispatch(ActionCreator.changeFlagLoginDataValid(true));
        history.goBack();
      })
      .catch(() => {
        dispatch(ActionCreator.changeFlagLoginDataValid(false));
      });
  }
};

export {ActionCreator, reducer, Operation, AuthorizationStatus, ActionTypes};
