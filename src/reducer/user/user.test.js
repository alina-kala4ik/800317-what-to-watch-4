import {ActionCreator, reducer, Operation, AuthorizationStatus, ActionTypes} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "./../../api.js";

describe(`testing user reducer`, () => {
  it(`Returns initial state at application start`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatar: null,
      isFetchingAuthStatus: true
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

});

describe(`user action creators work correctly`, () => {

  it(`Action creators add avatar`, () => {
    expect(ActionCreator.addAvatar(``)).toEqual({
      type: ActionTypes.ADD_AVATAR,
      payload: ``
    });
  });

  it(`Action creators change authorization status`, () => {
    expect(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });

});

describe(`user operation work correctly`, () => {

  const onNotFound = () => {};
  const onUnauthorized = () => {};

  const api = createAPI(onNotFound, onUnauthorized);

  it(`Operation check auth`, () => {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(`/login`)
      .reply(`200`);

    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
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
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

});


