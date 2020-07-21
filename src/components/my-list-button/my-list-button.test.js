import React from "react";
import renderer from "react-test-renderer";
import {MyListButton} from "./my-list-button.jsx";

it(`render favorite MyListButton`, () => {
  const tree = renderer.create(
      <MyListButton
        isFavorite={true}
        id={1}
        onMyListClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render unfavored MyListButton`, () => {
  const tree = renderer.create(
      <MyListButton
        isFavorite={false}
        id={1}
        onMyListClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
