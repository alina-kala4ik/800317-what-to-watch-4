import React from "react";
import renderer from "react-test-renderer";
import MoveCard from "./movie-card.jsx";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

it(`render MoveCard`, () => {
  const tree = renderer
    .create(<MoveCard
      film={film}
      onCardActive={()=>{}}
      onFilmTitleClick={()=>{}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
