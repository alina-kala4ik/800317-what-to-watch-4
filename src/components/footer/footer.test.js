import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";
import {Router} from "react-router-dom";
import history from "./../../history.js";

it(`render Footer with active logo link`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Footer isActiveLogoLink />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Footer with inactive logo link`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Footer isActiveLogoLink={false} />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
