import {reducer, ActionCreator, ActionTypes, Operation} from "./data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "./../../api.js";

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
    id: 1,
    isFavorite: false
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
    id: 2,
    isFavorite: false
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
    id: 3,
    isFavorite: false
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
    id: 4,
    isFavorite: false
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
    id: 5,
    isFavorite: false
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
    id: 6,
    isFavorite: false
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
    id: 7,
    isFavorite: false
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
    id: 8,
    isFavorite: false
  },
];

const reviews = [{
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`,
}];

describe(`testing reducer`, () => {
  it(`Returns initial state at application start`, () => {
    expect(reducer(undefined, {})).toEqual({
      films: [],
      promoFilm: null,
      isFilmsFetching: true,
      isPromoFilmFetching: true,
      isCommentSendingError: false,
      favoriteFilms: [],
      reviews: [],
      isReviewsFetching: true,
    });
  });

  it(`uploads films`, () => {
    expect(reducer({
      films: []
    }, {
      type: ActionTypes.LOAD_FILMS,
      payload: films
    })).toEqual({
      films,
      isFilmsFetching: false,
    });
  });

  it(`uploads promo film`, () => {
    expect(reducer({
      promoFilm: null
    }, {
      type: ActionTypes.LOAD_PROMO_FILM,
      payload: films[0]
    })).toEqual({
      promoFilm: films[0],
      isPromoFilmFetching: false,
    });
  });

  it(`change flag comment sending error`, () => {
    expect(reducer({
      isCommentSendingError: false
    }, {
      type: ActionTypes.CHANGE_FLAG_COMMENT_SENDING_ERROR,
      payload: true
    })).toEqual({
      isCommentSendingError: true
    });
  });

  it(`load favorite films`, () => {
    expect(reducer({
      favoriteFilms: []
    }, {
      type: ActionTypes.LOAD_FAVORITE_FILMS,
      payload: films
    })).toEqual({
      favoriteFilms: films
    });
  });

  it(`update film`, () => {
    const newFilm = {
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
      id: 1,
      isFavorite: true
    };
    const newFilms = [
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
        id: 1,
        isFavorite: true
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
        id: 2,
        isFavorite: false
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
        id: 3,
        isFavorite: false
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
        id: 4,
        isFavorite: false
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
        id: 5,
        isFavorite: false
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
        id: 6,
        isFavorite: false
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
        id: 7,
        isFavorite: false
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
        id: 8,
        isFavorite: false
      },
    ];

    expect(reducer({
      films
    }, {
      type: ActionTypes.UPDATE_FILM,
      payload: newFilm
    })).toEqual({
      films: newFilms
    });
  });

  it(`load reviews`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionTypes.LOAD_REVIEWS,
      payload: reviews
    })).toEqual({
      reviews
    });
  });

  it(`change flag reviews fetching`, () => {
    expect(reducer({
      isReviewsFetching: true
    }, {
      type: ActionTypes.CHANGE_FLAG_REVIEWS_FETCHING,
      payload: false
    })).toEqual({
      isReviewsFetching: false
    });
  });

});

describe(`Action creators work correctly`, () => {

  it(`Action creators load films`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionTypes.LOAD_FILMS,
      payload: films
    });
  });

  it(`Action creators load promo films`, () => {
    expect(ActionCreator.loadPromoFilm(films[0])).toEqual({
      type: ActionTypes.LOAD_PROMO_FILM,
      payload: films[0]
    });
  });

  it(`Action creators change flag comment sending error`, () => {
    expect(ActionCreator.changeFlagCommentSendingError(true)).toEqual({
      type: ActionTypes.CHANGE_FLAG_COMMENT_SENDING_ERROR,
      payload: true
    });
  });

  it(`Action creators load favorite films`, () => {
    expect(ActionCreator.loadFavoriteFilms(films)).toEqual({
      type: ActionTypes.LOAD_FAVORITE_FILMS,
      payload: films
    });
  });

  it(`Action creators update film`, () => {
    expect(ActionCreator.updateFilm(films[0])).toEqual({
      type: ActionTypes.UPDATE_FILM,
      payload: films[0]
    });
  });

  it(`Action creators load reviews`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionTypes.LOAD_REVIEWS,
      payload: reviews
    });
  });

  it(`Action creators change flag reviews fetching`, () => {
    expect(ActionCreator.changeFlagReviewsFetching(false)).toEqual({
      type: ActionTypes.CHANGE_FLAG_REVIEWS_FETCHING,
      payload: false
    });
  });

});

describe(`Operation work correctly`, () => {

  const onServerError = () => {};

  const api = createAPI(onServerError);
  const apiMock = new MockAdapter(api);

  const adaptedFilm = {
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
  };

  it(`load films`, () => {
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

    apiMock
      .onGet(`/films`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.LOAD_FILMS,
          payload: adaptedFilms
        });
      });
  });

  it(`load promoFilm`, () => {

    apiMock
      .onGet(`/films/promo`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const promoFilmLoader = Operation.loadPromoFilm();

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.LOAD_PROMO_FILM,
          payload: adaptedFilm
        });
      });
  });

  it(`comment post success`, () => {

    const commentData = {
      rating: ``,
      comment: ``
    };

    apiMock
      .onPost(`comments/1`, {
        rating: ``,
        comment: ``
      })
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const commentPost = Operation.commentPost(1, commentData);

    return commentPost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

  it(`comment post error`, () => {

    const commentData = {
      rating: ``,
      comment: ``
    };

    apiMock
      .onPost(`comments/1`, {
        rating: ``,
        comment: ``
      })
      .reply(`400`, [{fake: true}]);

    const dispatch = jest.fn();
    const commentPost = Operation.commentPost(1, commentData);

    return commentPost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`change flag is favorite in promo film`, () => {
    apiMock
      .onPost(`/favorite/1/1`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const changeFlagIsFavorite = Operation.changeFlagIsFavorite(1, 1, true);

    return changeFlagIsFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.LOAD_PROMO_FILM,
          payload: adaptedFilm
        });
      });
  });

  it(`change flag is favorite in film`, () => {
    apiMock
      .onPost(`/favorite/1/1`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const changeFlagIsFavorite = Operation.changeFlagIsFavorite(1, 1);

    return changeFlagIsFavorite(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.UPDATE_FILM,
          payload: adaptedFilm
        });
      });
  });

  it(`load favorite films`, () => {
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

    apiMock
      .onGet(`/favorite`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const loadFavoriteFilms = Operation.loadFavoriteFilms();

    return loadFavoriteFilms(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_FAVORITE_FILMS,
        payload: adaptedFilms
      });
    });
  });

  it(`load reviews`, () => {
    apiMock
      .onGet(`/comments/1`)
      .reply(`200`, [{fake: true}]);

    const dispatch = jest.fn();
    const loadReviews = Operation.loadReviews(1);

    return loadReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

});
