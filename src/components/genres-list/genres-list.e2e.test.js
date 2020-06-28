import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenresList} from "./genres-list.jsx";
import {Genres} from "./../../utils.js";

Enzyme.configure({
  adapter: new Adapter()
});


it(`Genre items are clickable`, () => {
  const onClick = jest.fn();

  const genresList = shallow(
      <GenresList
        genre={Genres.ALL}
        onClick={onClick}
      />
  );

  const genreItems = genresList.find(`li.catalog__genres-item`);

  genreItems.forEach((item) => {
    item.simulate(`click`);
  });

  expect(onClick).toHaveBeenCalledTimes(10);
});

it(`When clicked, a function with the correct answer is called`, () => {
  const onClick = jest.fn();
  const expectedAnswer = Genres.COMEDIES;

  const genresList = shallow(
      <GenresList
        genre={Genres.ALL}
        onClick={onClick}
      />
  );

  const comediesItem = genresList.find(`li.catalog__genres-item`).at(1);

  comediesItem.simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick.mock.calls[0][0]).toEqual(expectedAnswer);
});

