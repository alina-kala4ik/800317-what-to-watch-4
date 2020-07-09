import {reducer, ActionCreator, ActionTypes, Operation} from "./reducer.js";
import {Genres} from "./utils.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "./api.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

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
  },
  {
    title: `Bohemian Rhapsody`,
    screenshotSrc: `img/bohemian-rhapsody.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Documentary`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
  },
  {
    title: `Macbeth`,
    screenshotSrc: `img/macbeth.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Horror`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
  },
  {
    title: `Aviator`,
    screenshotSrc: `img/aviator.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Comedies`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: 99,
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
  },
  {
    title: `What We Do in the Shadows`,
    screenshotSrc: `img/what-we-do-in-the-shadows.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Sci-Fi`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 99,
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
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 99,
  },
  {
    title: `Johnny English`,
    screenshotSrc: `img/johnny-english.jpg`,
    posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
    movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Thrillers`,
    yearRelease: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 5.6,
    numberVotes: 278,
    producer: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 99,
  },
];

describe(`testing reducer`, ()=>{
  it(`Returns initial state at application start`, ()=>{
    expect(reducer(undefined, {})).toEqual({
      genre: Genres.ALL,
      films: [],
      countDisplayedFilms: 8,
      playableMovie: null,
      promoFilm: films[0]
    });
  });

  it(`Change genre`, ()=>{
    expect(reducer({
      genre: Genres.ALL,
      films,
    }, {
      type: ActionTypes.CHANGE_GENRE,
      payload: Genres.CRIME
    })).toEqual({
      genre: Genres.CRIME,
      films,
    });
  });

  it(`Filtered films`, ()=>{
    expect(reducer({
      genre: Genres.COMEDIES,
      films,
    }, {
      type: ActionTypes.FILTERED_FILMS,
      payload: null
    })).toEqual({
      genre: Genres.COMEDIES,
      films: [{
        title: `Aviator`,
        screenshotSrc: `img/aviator.jpg`,
        posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
        movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
        genre: `Comedies`,
        yearRelease: 2017,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        rating: 5.6,
        numberVotes: 278,
        producer: `Wes Andreson`,
        actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runTime: 99,
      }],
    });
  });

  it(`Increase count displayed films`, ()=>{
    expect(reducer({
      countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS,
    }, {
      type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    })).toEqual({
      countDisplayedFilms: 16
    });
  });

  it(`reset count displayed films`, ()=>{
    expect(reducer({
      countDisplayedFilms: 16
    },
    {
      type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    })).toEqual({
      countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS
    });
  });

  it(`adds a movie to watch`, ()=>{
    expect(reducer({
      playableMovie: null,
    }, {
      type: ActionTypes.CHOOSE_MOVIE_TO_WATCH,
      payload: films[0],
    })).toEqual({
      playableMovie: films[0]
    });
  });

  it(`deletes the viewed movie`, ()=>{
    expect(reducer({
      playableMovie: films[0],
    }, {
      type: ActionTypes.CHOOSE_MOVIE_TO_WATCH,
      payload: null,
    })).toEqual({
      playableMovie: null
    });
  });

  it(`uploads films`, ()=>{
    expect(reducer({
      films: []
    }, {
      type: ActionTypes.LOAD_FILMS,
      payload: films
    })).toEqual({
      films
    });
  });

});

describe(`Action creators work correctly`, ()=>{
  it(`Action creators change genre`, ()=>{
    expect(ActionCreator.changeGenre(Genres.COMEDIES)).toEqual({
      type: ActionTypes.CHANGE_GENRE,
      payload: Genres.COMEDIES,
    });
  });

  it(`Action creators filterd films`, ()=>{
    expect(ActionCreator.filteredFilms()).toEqual({
      type: ActionTypes.FILTERED_FILMS,
      payload: null,
    });
  });

  it(`Action creators increase count displayed films`, ()=>{
    expect(ActionCreator.increaseCountDisplayedFilms()).toEqual({
      type: ActionTypes.INCREASE_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    });
  });

  it(`Action creators reset count displayed films`, ()=>{
    expect(ActionCreator.resetCountDisplayedFilms()).toEqual({
      type: ActionTypes.RESET_COUNT_DISPLAYED_FILMS,
      payload: DISPLAYED_NUMBER_OF_FILMS
    });
  });

  it(`Action creators choose movie to watch`, ()=>{
    expect(ActionCreator.chooseMovieToWatch(films[0])).toEqual({
      type: ActionTypes.CHOOSE_MOVIE_TO_WATCH,
      payload: films[0]
    });
  });

  it(`Action creators load films`, ()=>{
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionTypes.LOAD_FILMS,
      payload: films
    });
  });

});

const adaptedFilms = [
  {
    "actors": undefined,
    "backgroundColor": undefined,
    "description": undefined,
    "genre": undefined,
    "id": undefined,
    "isFavorite": undefined,
    "movieCoverSrc": undefined,
    "numberVotes": undefined,
    "posterSrc": undefined,
    "previewVideoLink": undefined,
    "producer": undefined,
    "rating": undefined,
    "runTime": undefined,
    "screenshotSrc": undefined,
    "title": undefined,
    "videoSrc": undefined,
    "yearRelease": undefined,
  },
];


it(`Operation work correctly`, ()=>{
  const api = createAPI();

  const apiMock = new MockAdapter(api);
  apiMock
    .onGet(`/films`)
    .reply(`200`, [{fake: true}]);

  const dispatch = jest.fn();
  const filmsLoader = Operation.loadFilms();

  return filmsLoader(dispatch, ()=>{}, api)
    .then(()=>{
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_FILMS,
        payload: adaptedFilms
      });
    });
});

