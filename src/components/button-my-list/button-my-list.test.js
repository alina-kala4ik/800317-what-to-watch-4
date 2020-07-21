import React from "react";
import renderer from "react-test-renderer";
import {ButtonMyList} from "./button-my-list.jsx";

it(`render favorite ButtonMyList`, () => {
  const tree = renderer.create(
      <ButtonMyList
        isFavorite={true}
        id={1}
        onMyListClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render unfavored ButtonMyList`, () => {
  const tree = renderer.create(
      <ButtonMyList
        isFavorite={false}
        id={1}
        onMyListClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
