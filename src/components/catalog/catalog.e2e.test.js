import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Catalog} from "./catalog.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`button show more are clickable`, ()=>{
  const onShowMoreClick = jest.fn();

  const catalog = shallow(
      <Catalog
        countFilms={8}
        onShowMoreClick={onShowMoreClick}
        isButtonDisplayed={true}
      />
  );

  const button = catalog.find(`button.catalog__button`);
  button.simulate(`click`);

  expect(onShowMoreClick).toHaveBeenCalledTimes(1);
});
