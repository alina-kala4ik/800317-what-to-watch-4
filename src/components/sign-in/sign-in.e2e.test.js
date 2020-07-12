import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Button SignIn are clickable`, ()=>{
  const onSignInClick = jest.fn();
  const prevDefaultFn = jest.fn();

  const signIn = shallow(
      <SignIn
        onSignInClick={onSignInClick}
      />, {
        createNodeMock: ()=>{
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
