import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`render App`, () => {
  const tree = renderer
    .create(<App
      promotionTitle={settings.promotionTitle}
      promotionGenre={settings.promotionGenre}
      promotionReleaseDate={settings.promotionReleaseDate}
      films={films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
