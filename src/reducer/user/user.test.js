import {ActionCreator, reducer, Operation, AuthorizationStatus, ActionTypes} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "./../../api.js";
import {SERVER_ADDRESS} from "./../../api.js";

describe(`testing user reducer`, () => {
  it(`Returns initial state at application start`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatar: null,
      isFetchingAuthStatus: true,
      isLoginDataValid: true,
    });
  });

  it(`change authorization status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isFetchingAuthStatus: true
    }, {
      type: ActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      isFetchingAuthStatus: false
    });
  });

  it(`add avatar`, () => {
    expect(reducer({
      avatar: null,
    }, {
      type: ActionTypes.ADD_AVATAR,
      payload: ``
    })).toEqual({
      avatar: ``
    });
  });

  it(`change flag login data valid`, () => {
    expect(reducer({
      isLoginDataValid: true
    }, {
      type: ActionTypes.CHANGE_FLAG_LOGIN_DATA_VALID,
      payload: false
    })).toEqual({
      isLoginDataValid: false
    });
  });
});

describe(`user action creators work correctly`, () => {

  it(`Action creators add avatar`, () => {
    expect(ActionCreator.addAvatar(`/img`)).toEqual({
      type: ActionTypes.ADD_AVATAR,
      payload: `${SERVER_ADDRESS}/img`
    });
  });

  it(`Action creators change authorization status`, () => {
    expect(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });

  it(`Action creators change flag login data valid`, () => {
    expect(ActionCreator.changeFlagLoginDataValid(false)).toEqual({
      type: ActionTypes.CHANGE_FLAG_LOGIN_DATA_VALID,
      payload: false
    });
  });

});

describe(`user operation work correctly`, () => {

  const onServerError = () => {};
  const onUnauthorized = () => {};

  const api = createAPI(onServerError, onUnauthorized);

  it(`Operation check auth`, () => {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/login`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Operation login`, () => {
    const authData = {
      email: `foo@gmail.com`,
      password: `foo`
    };

    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const login = Operation.login(authData);

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

  it(`Operation login with error`, () => {
    const authData = {
      email: `foo@gmail.com`,
      password: `foo`
    };

    const apiMock = new MockAdapter(api);
    apiMock
      .onPost(`/login`)
      .reply(`400`, [{fake: true}]);

    const dispatch = jest.fn();
    const login = Operation.login(authData);

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

});


