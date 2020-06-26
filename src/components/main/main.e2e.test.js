import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    screenshotSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Bohemian Rhapsody`,
    screenshotSrc: `img/bohemian-rhapsody.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Macbeth`,
    screenshotSrc: `img/macbeth.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Aviator`,
    screenshotSrc: `img/aviator.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `We need to talk about Kevin`,
    screenshotSrc: `img/we-need-to-talk-about-kevin.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `What We Do in the Shadows`,
    screenshotSrc: `img/what-we-do-in-the-shadows.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Revenant`,
    screenshotSrc: `img/revenant.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Johnny English`,
    screenshotSrc: `img/johnny-english.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

it(`Film title click`, () => {
  const onFilmTitleClick = jest.fn();

  const main = mount(
      <Main
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
        onFilmTitleClick={onFilmTitleClick}
        onFilmImgClick={()=>{}}
      />

  );

  const filmTitles = main.find(`a.small-movie-card__link`);

  filmTitles.forEach((title) =>
    title.simulate(`click`)
  );

  expect(onFilmTitleClick).toHaveBeenCalledTimes(8);
});

it(`Film image click`, () => {
  const onFilmImgClick = jest.fn();

  const main = mount(
      <Main
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
        onFilmTitleClick={()=>{}}
        onFilmImgClick={onFilmImgClick}
      />

  );

  const filmImg = main.find(`div.small-movie-card__image`);

  filmImg.forEach((img) =>
    img.simulate(`click`)
  );

  expect(onFilmImgClick).toHaveBeenCalledTimes(8);
});

it(`Validates data transmitted through props when clicked on film title`, () => {
  const onFilmTitleClick = jest.fn();
  const expectedData = {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    screenshotSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    yearRelease: `2017`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: `5,6`,
    numberVotes: `278`,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  };

  const main = mount(
      <Main
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
        onFilmTitleClick={onFilmTitleClick}
        onFilmImgClick={()=>{}}
      />

  );

  const filmOneTitles = main.find(`a.small-movie-card__link`).at(0);

  filmOneTitles.simulate(`click`);

  expect(onFilmTitleClick.mock.calls[0][0]).toMatchObject(expectedData);
});
