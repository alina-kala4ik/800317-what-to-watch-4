import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

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
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
};

const films = [
  {
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
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `Aviator`,
    src: `img/aviator.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `We need to talk about Kevin`,
    src: `img/we-need-to-talk-about-kevin.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCover: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
];

it(`render MoviePage`, () => {
  const tree = renderer
    .create(<MoviePage
      film={film}
      films={films}
      onFilmTitleClick={()=>{}}
      onFilmImgClick={()=>{}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
