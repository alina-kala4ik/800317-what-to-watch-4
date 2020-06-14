import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Film title click`, () => {
  const onFilmTitleClick = jest.fn();

  const main = shallow(
      <Main
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
        onFilmTitleClick={onFilmTitleClick}
      />
  );

  const filmTitles = main.find(`a.small-movie-card__link`);

  filmTitles.forEach((title) =>
    title.simulate(`click`)
  );

  expect(onFilmTitleClick).toHaveBeenCalledTimes(3);
});
