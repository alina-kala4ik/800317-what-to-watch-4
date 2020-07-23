import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in.jsx";
import {Router} from "react-router-dom";
import history from "./../../history.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {NameSpace} from "./../../reducer/name-space.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
  }
});

it(`Button SignIn are clickable`, () => {
  const onSignInClick = jest.fn();
  const prevDefaultFn = jest.fn();

  const signIn = mount(
      <Router history={history}>
        <Provider store={store} >
          <SignIn
            onSignInClick={onSignInClick}
          />
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  );

  signIn.instance().loginRef = {
    current: {
      value: `foo@gmail.com`
    }
  };

  signIn.instance().passwordRef = {
    current: {
      value: `foo`
    }
  };

  const button = signIn.find(`button.sign-in__btn`);
  button.simulate(`click`, {
    preventDefault: prevDefaultFn,
  });

  expect(onSignInClick).toHaveBeenCalledTimes(1);
  expect(prevDefaultFn).toHaveBeenCalledTimes(1);
});
