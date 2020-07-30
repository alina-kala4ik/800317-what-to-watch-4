import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import {Router} from "react-router-dom";
import history from "./../../history.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {NameSpace} from "./../../reducer/name-space.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
  }
});

it(`render SignIn`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <SignIn
            onSignInClick={() => {}}
            isLoginDataValid={true}
          />
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render SignIn with error`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <SignIn
            onSignInClick={() => {}}
            isLoginDataValid={false}
          />
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
