import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Genres} from "./../../utils.js";
import {NameSpace} from "./../../reducer/name-space.js";
import {ServerStatus} from "./../../reducer/app-state/app-state.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 1,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 2,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 3,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 4,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 5,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 6,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 7,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isFavorite: false,
    id: 8,
  },
];

const mockStore = configureStore([]);

it(`render App without server error`, () => {
  const store = mockStore({
    [NameSpace.APP_STATE]: {
      genre: Genres.ALL,
      countDisplayedFilms: 8,
      serverStatus: ServerStatus.OK,
    },
    [NameSpace.DATA]: {
      films,
      promoFilm: films[0],
      allFilms: films,
      isFilmsFetching: false,
      isPromoFilmFetching: false,
      genreForFilter: Genres.ALL
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatar: `img/avatar.jpg`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            serverStatus={ServerStatus.OK}
            isFilmsFetching={false}
            isPromoFilmFetching={false}
            films={films}
            promoFilm={films[0]}
          />
        </Provider>, {
          createNodeMock: ()=>{
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`render App with server error`, () => {
  const store = mockStore({
    [NameSpace.APP_STATE]: {
      genre: Genres.ALL,
      countDisplayedFilms: 8,
      serverStatus: ServerStatus.ERROR,
    },
    [NameSpace.DATA]: {
      films,
      promoFilm: films[0],
      allFilms: films,
      isFilmsFetching: false,
      isPromoFilmFetching: false,
      genreForFilter: Genres.ALL
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatar: `img/avatar.jpg`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            serverStatus={ServerStatus.ERROR}
            isFilmsFetching={false}
            isPromoFilmFetching={false}
            films={films}
            promoFilm={films[0]}
          />
        </Provider>, {
          createNodeMock: ()=>{
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`render App when films null`, () => {
  const store = mockStore({
    [NameSpace.APP_STATE]: {
      genre: Genres.ALL,
      countDisplayedFilms: 8,
      serverStatus: ServerStatus.OK,
    },
    [NameSpace.DATA]: {
      films: null,
      promoFilm: films[0],
      allFilms: films,
      isFilmsFetching: false,
      isPromoFilmFetching: false,
      genreForFilter: Genres.ALL
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatar: `img/avatar.jpg`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            serverStatus={ServerStatus.OK}
            isFilmsFetching={false}
            isPromoFilmFetching={false}
            films={null}
            promoFilm={films[0]}
          />
        </Provider>, {
          createNodeMock: ()=>{
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`render App when promoFilm null`, () => {
  const store = mockStore({
    [NameSpace.APP_STATE]: {
      genre: Genres.ALL,
      countDisplayedFilms: 8,
      serverStatus: ServerStatus.OK,
    },
    [NameSpace.DATA]: {
      films,
      promoFilm: null,
      allFilms: films,
      isFilmsFetching: false,
      isPromoFilmFetching: false,
      genreForFilter: Genres.ALL
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      avatar: `img/avatar.jpg`
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            serverStatus={ServerStatus.OK}
            isFilmsFetching={false}
            isPromoFilmFetching={false}
            films={films}
            promoFilm={null}
          />
        </Provider>, {
          createNodeMock: ()=>{
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
