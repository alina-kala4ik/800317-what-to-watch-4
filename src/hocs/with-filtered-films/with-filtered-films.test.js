import React from "react";
import renderer from "react-test-renderer";
import {withFilteredFilms} from "./with-filtered-films.jsx";
import {Genres} from "../../utils.js";

const films = [{}, {}, {}];

const MockComponent = () => {
  return <div></div>;
};

const MockComponentWrapped = withFilteredFilms(MockComponent);

it(`render withFilteredFilms`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        countFilms={8}
        genre={Genres.ALL}
        films={films}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
