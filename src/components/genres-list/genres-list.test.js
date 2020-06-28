import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";
import {Genres} from "./../../utils.js";


it(`render GenresList`, () => {
  const tree = renderer
    .create(
        <GenresList
          genre={Genres.ALL}
          onClick={()=>{}}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
