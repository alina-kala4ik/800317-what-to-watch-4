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
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  yearRelease: `2017`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  rating: `5,6`,
  numberVotes: `278`,
  producer: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
};


it(`When you hover over a card with a movie, information about the movie enters the handlerr`, () => {
  const onMouseEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={film}
        onMouseEnter={onMouseEnter}
        onFilmTitleOrImgClick={()=>{}}
      />
  );

  const card = movieCard.find(`article.small-movie-card`);

  card.simulate(`mouseenter`);

  expect(onMouseEnter).toHaveBeenCalledTimes(1);
  expect(onMouseEnter.mock.calls[0][0]).toMatchObject(film);
});

