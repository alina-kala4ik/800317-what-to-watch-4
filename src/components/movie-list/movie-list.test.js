import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

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

it(`render MovieList`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      onFilmTitleClick={()=>{}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
