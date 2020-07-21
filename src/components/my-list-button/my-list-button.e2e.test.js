import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListButton} from "./my-list-button.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const REMOVE_FROM_MY_LIST = 0;
const ADD_TO_MY_LIST = 1;

it(`Button add to my list are clickable`, () => {
  const onMyListClick = jest.fn();

  const myListButton = shallow(
      <MyListButton
        isFavorite={false}
        id={1}
        onMyListClick={onMyListClick}
      />
  );

  myListButton.find(`button.btn--list`).simulate(`click`);
  expect(onMyListClick).toHaveBeenCalledTimes(1);
  expect(onMyListClick).toHaveBeenNthCalledWith(1, 1, ADD_TO_MY_LIST, undefined);
});

it(`Button remove from my list are clickable`, () => {

  const onMyListClick = jest.fn();

  const myListButton = shallow(
      <MyListButton
        isFavorite={true}
        id={1}
        onMyListClick={onMyListClick}
      />
  );

  myListButton.find(`button.btn--list`).simulate(`click`);
  expect(onMyListClick).toHaveBeenCalledTimes(1);
  expect(onMyListClick).toHaveBeenNthCalledWith(1, 1, REMOVE_FROM_MY_LIST, undefined);
});
