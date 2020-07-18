import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Promo} from "./promo.jsx";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

Enzyme.configure({
  adapter: new Adapter()
});

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
  id: 1,
  isFavorite: false,
};

const REMOVE_FROM_MY_LIST = 0;
const ADD_TO_MY_LIST = 1;


it(`Button add to my list are clickable`, ()=>{
  const onMyListClick = jest.fn();

  const promo = shallow(
      <Promo
        onPlayClick={()=>{}}
        film={film}
        authorizationStatus={AuthorizationStatus.AUTH}
        avatar={`img/avatar.jpg`}
        onMyListClick={onMyListClick}
      />
  );

  promo.find(`button.btn--list`).simulate(`click`);
  expect(onMyListClick).toHaveBeenCalledTimes(1);
  expect(onMyListClick).toHaveBeenNthCalledWith(1, film.id, ADD_TO_MY_LIST);
});

it(`Button remove from my list are clickable`, ()=>{

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

  const onMyListClick = jest.fn();

  const promo = shallow(
      <Promo
        onPlayClick={()=>{}}
        film={favoriteFilm}
        authorizationStatus={AuthorizationStatus.AUTH}
        avatar={`img/avatar.jpg`}
        onMyListClick={onMyListClick}
      />
  );

  promo.find(`button.btn--list`).simulate(`click`);
  expect(onMyListClick).toHaveBeenCalledTimes(1);
  expect(onMyListClick).toHaveBeenNthCalledWith(1, favoriteFilm.id, REMOVE_FROM_MY_LIST);
});
