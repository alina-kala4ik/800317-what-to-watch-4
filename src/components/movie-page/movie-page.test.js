import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import configureStore from "redux-mock-store";
import {Genres} from "./../../utils.js";
import {Provider} from "react-redux";
import {NameSpace} from "./../../reducer/name-space.js";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  screenshotSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
  movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  yearRelease: 2017,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  rating: 5.6,
  numberVotes: 278,
  producer: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runTime: 99,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    screenshotSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Bohemian Rhapsody`,
    screenshotSrc: `img/bohemian-rhapsody.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Macbeth`,
    screenshotSrc: `img/macbeth.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Aviator`,
    screenshotSrc: `img/aviator.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `We need to talk about Kevin`,
    screenshotSrc: `img/we-need-to-talk-about-kevin.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `What We Do in the Shadows`,
    screenshotSrc: `img/what-we-do-in-the-shadows.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `Revenant`,
    screenshotSrc: `img/revenant.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `Johnny English`,
    screenshotSrc: `img/johnny-english.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 99,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const mockStore = configureStore([]);

it(`render MoviePage`, () => {
  const store = mockStore({
    [NameSpace.APP_STATE]: {
      genre: Genres.ALL,
      countDisplayedFilms: 4,
      playableMovie: null,
    },
    [NameSpace.DATA]: {
      films,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            film={film}
            onFilmTitleClick={()=>{}}
            onFilmImgClick={()=>{}}
            onPlayClick={()=>{}}
          />
        </Provider>, {
          createNodeMock: ()=>{
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
