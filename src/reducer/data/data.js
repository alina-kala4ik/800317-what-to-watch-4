import {extend} from "./../../utils.js";
import {adapter, adapterForArray} from "./../../adapters/films.js";
import history from "./../../history.js";

const initialState = {
  films: [],
  promoFilm: null,
  favoriteFilms: [],
  isFilmsFetching: true,
  isPromoFilmFetching: true,
  isCommentSendingError: false,
  reviews: [],
  isReviewsFetching: true,
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  CHANGE_FLAG_COMMENT_SENDING_ERROR: `CHANGE_FLAG_COMMENT_SENDING_ERROR`,
  UPDATE_FILM: `UPDATE_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CHANGE_FLAG_REVIEWS_FETCHING: `CHANGE_FLAG_REVIEWS_FETCHING`,
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionTypes.LOAD_FILMS,
    payload: films
  }),
  loadPromoFilm: (film) => ({
    type: ActionTypes.LOAD_PROMO_FILM,
    payload: film
  }),
  changeFlagCommentSendingError: (status) => ({
    type: ActionTypes.CHANGE_FLAG_COMMENT_SENDING_ERROR,
    payload: status
  }),
  loadFavoriteFilms: (films) => ({
    type: ActionTypes.LOAD_FAVORITE_FILMS,
    payload: films
  }),
  updateFilm: (film) => ({
    type: ActionTypes.UPDATE_FILM,
    payload: film
  }),
  loadReviews: (reviews) => ({
    type: ActionTypes.LOAD_REVIEWS,
    payload: reviews
  }),
  changeFlagReviewsFetching: (status) => ({
    type: ActionTypes.CHANGE_FLAG_REVIEWS_FETCHING,
    payload: status
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = adapterForArray(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = adapter(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  },
  commentPost: (filmId, commentData) => (dispatch, getState, api) => {
    return api.post(`comments/${filmId}`, {
      rating: commentData.rating,
      comment: commentData.comment
    })
      .then(() => {
        dispatch(ActionCreator.changeFlagCommentSendingError(false));
        history.goBack();
      })
      .catch(() => {
        dispatch(ActionCreator.changeFlagCommentSendingError(true));
      });
  },
  changeFlagIsFavorite: (filmId, status, isPromoFilm) => (dispatch, getState, api) => {
    return api.post(`/favorite/${filmId}/${status}`)
      .then((response) => {
        const film = adapter(response.data);

        if (isPromoFilm) {
          dispatch(ActionCreator.loadPromoFilm(film));
        } else {
          dispatch(ActionCreator.updateFilm(film));
        }
      });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const films = adapterForArray(response.data);
        dispatch(ActionCreator.loadFavoriteFilms(films));
      });
  },
  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
        dispatch(ActionCreator.changeFlagReviewsFetching(false));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        isFilmsFetching: false,
      });
    case ActionTypes.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
        isPromoFilmFetching: false
      });
    case ActionTypes.CHANGE_FLAG_COMMENT_SENDING_ERROR:
      return extend(state, {
        isCommentSendingError: action.payload
      });
    case ActionTypes.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });
    case ActionTypes.UPDATE_FILM:
      const newFilm = action.payload;
      const allFilms = state.films;

      const films = allFilms.map((film) => {
        if (film.id === newFilm.id) {
          film = Object.assign({}, film, {isFavorite: !film.isFavorite});
        }
        return film;
      });
      return extend(state, {
        films
      });
    case ActionTypes.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionTypes.CHANGE_FLAG_REVIEWS_FETCHING:
      return extend(state, {
        isReviewsFetching: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Operation};
