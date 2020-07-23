import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFavoriteFilms} from "./with-favorite-films.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockComponent = () => <div />;
const MockComponentWrapped = withFavoriteFilms(mockComponent);

const films = [{}, {}, {}];

it(`Tests the presence of prop in HOC withFavoriteFilms`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        films={films}
      />
  );

  expect(wrapper.props().films).toEqual(films);
});
