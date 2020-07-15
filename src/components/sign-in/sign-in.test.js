import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";


it(`render SignIn`, ()=>{
  const tree = renderer.create(
      <SignIn
        onSignInClick={()=>{}}
      />, {
        createNodeMock: ()=>{
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
