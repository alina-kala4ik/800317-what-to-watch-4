import React from "react";
import withActiveItem from "./with-active-item.jsx";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Tabs} from "../../utils.js";

Enzyme.configure({
  adapter: new Adapter(),
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
};

const mockComponent = () => <div />;


it(`Should change active tab`, ()=>{
  const MockComponentWrapped = withActiveItem(mockComponent, Tabs.OVERVIEW);

  const wrapper = shallow(
      <MockComponentWrapped
        film={film}
        onFilmTitleClick={()=>{}}
        onFilmImgClick={()=>{}}
      />
  );

  expect(wrapper.props().activeItem).toEqual(Tabs.OVERVIEW);

  wrapper.props().setActiveItem(Tabs.DETAILS);
  expect(wrapper.props().activeItem).toEqual(Tabs.DETAILS);

  wrapper.props().setActiveItem(Tabs.REVIEWS);
  expect(wrapper.props().activeItem).toEqual(Tabs.REVIEWS);
});

it(`Should change active film`, ()=>{
  const MockComponentWrapped = withActiveItem(mockComponent);

  const wrapper = shallow(
      <MockComponentWrapped
        promotionTitle={``}
        promotionGenre={``}
        promotionReleaseDate={``}
        activeItem={false}
        setActiveItem={()=>{}}
      />
  );

  expect(wrapper.props().activeItem).toEqual(false);

  wrapper.props().setActiveItem(film);
  expect(wrapper.props().activeItem).toEqual(film);
});
