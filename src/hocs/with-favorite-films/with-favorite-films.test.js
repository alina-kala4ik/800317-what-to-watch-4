import React from "react";
import renderer from "react-test-renderer";
import {withFavoriteFilms} from "./with-favorite-films.jsx";

const films = [{}, {}, {}];

const MockComponent = () => {
  return <div></div>;
};

const MockComponentWrapped = withFavoriteFilms(MockComponent);

it(`render withFavoriteFilms`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        films={films}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
