import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`
  },
  {
    title: `Aviator`,
    src: `img/aviator.jpg`,
  },
  {
    title: `We need to talk about Kevin`,
    src: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
  },
];

it(`render Main`, () => {
  const tree = renderer
    .create(<Main
      promotionTitle={settings.promotionTitle}
      promotionGenre={settings.promotionGenre}
      promotionReleaseDate={settings.promotionReleaseDate}
      films={films}
      onFilmTitleClick={()=>{}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
