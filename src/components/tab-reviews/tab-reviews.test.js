import React from "react";
import renderer from "react-test-renderer";
import TabReviews from "./tab-reviews.jsx";

it(`render TabReviews`, () => {
  const tree = renderer.create(
      <TabReviews/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
