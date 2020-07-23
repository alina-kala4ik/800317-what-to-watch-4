import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFilteredFilms} from "./with-filtered-films.jsx";
import {Genres} from "../../utils.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockComponent = () => <div />;
const MockComponentWrapped = withFilteredFilms(mockComponent);

const films = [{}, {}, {}];

it(`Tests the presence of prop in HOC withFilteredFilms`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        films={films}
        countFilms={8}
        genre={Genres.ALL}
      />
  );

  expect(wrapper.props().films).toEqual(films);
});
