import React from "react";
import withActiveItem from "./with-active-item.jsx";
import renderer from "react-test-renderer";

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

const MockComponentWrapped = withActiveItem(mockComponent);

it(`render movie page`, ()=>{
  const tree = renderer.create(
      <MockComponentWrapped
        film={film}
        onFilmTitleClick={()=>{}}
        onFilmImgClick={()=>{}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render main`, ()=>{
  const tree = renderer.create(
      <MockComponentWrapped
        promotionTitle={``}
        promotionGenre={``}
        promotionReleaseDate={``}
        activeItem={false}
        setActiveItem={()=>{}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
