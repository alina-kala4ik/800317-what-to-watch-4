import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};


it(`When you hover over a card with a movie, information about the movie enters the handlerr`, () => {
  const onMouseEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onMouseEnter={onMouseEnter}
        onFilmTitleClick={()=>{}}
      />
  );

  const card = movieCard.find(`article.small-movie-card`);

  card.simulate(`mouseenter`);

  expect(onMouseEnter).toHaveBeenCalledTimes(1);
  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(film);
});

