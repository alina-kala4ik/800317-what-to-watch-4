import React from "react";
import renderer from "react-test-renderer";
import {Promo} from "./promo.jsx";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import history from "./../../history.js";
import {Router} from "react-router-dom";

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
  isFavorite: false,
  id: 1,
};

it(`render Promo when user authorized and promo film checked as unfavored`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Promo
          onPlayClick={()=>{}}
          film={film}
          authorizationStatus={AuthorizationStatus.AUTH}
          avatar={`img/avatar.jpg`}
          onMyListClick={()=>{}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Promo when user authorized and promo film checked as favorite`, ()=>{
  const favoriteFilm = {
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
    isFavorite: true,
    id: 1,
  };

  const tree = renderer.create(
      <Router history={history}>
        <Promo
          onPlayClick={()=>{}}
          film={favoriteFilm}
          authorizationStatus={AuthorizationStatus.AUTH}
          avatar={`img/avatar.jpg`}
          onMyListClick={()=>{}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Promo when user authorized`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Promo
          onPlayClick={()=>{}}
          film={film}
          authorizationStatus={AuthorizationStatus.AUTH}
          avatar={`img/avatar.jpg`}
          onMyListClick={()=>{}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render Promo when user unauthorized`, ()=>{
  const tree = renderer.create(
      <Router history={history}>
        <Promo
          onPlayClick={()=>{}}
          film={film}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          avatar={`img/avatar.jpg`}
          onMyListClick={()=>{}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
