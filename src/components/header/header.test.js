import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import {Router} from "react-router-dom";
import history from "./../../history.js";

it(`render Header when user authorized`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Header
          authorizationStatus={AuthorizationStatus.AUTH}
          avatar={``}
          isActiveLogoLink={false}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Header when user unauthorized`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          avatar={``}
          isActiveLogoLink={false}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Header with children`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          avatar={``}
          isActiveLogoLink={false}
        >
          <div></div>
        </Header>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Header with active logo and unique classes from header`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          avatar={``}
          isActiveLogoLink={true}
          uniqueClasses={`uniqueClasses`}
        >
          <div></div>
        </Header>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


