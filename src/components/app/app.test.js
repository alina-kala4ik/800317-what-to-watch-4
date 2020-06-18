import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const films = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
  },
  {
    id: 3,
    title: `Macbeth`,
    src: `img/macbeth.jpg`
  },
  {
    id: 4,
    title: `Aviator`,
    src: `img/aviator.jpg`,
  },
  {
    id: 5,
    title: `We need to talk about Kevin`,
    src: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    id: 6,
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    id: 7,
    title: `Revenant`,
    src: `img/revenant.jpg`,
  },
  {
    id: 8,
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
  },
];

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
