import {extend} from "./../../utils.js";
import {adapter, adapterForArray} from "./../../adapters/films.js";

const initialState = {
  films: [],
  promoFilm: null,
  favoriteFilms: [],
  isFilmsFetching: true,
  isPromoFilmFetching: true,
  isCommentPublishing: false,
  isCommentSendingError: false,
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  CHANGE_FLAG_COMMENT_PUBLISHING: `CHANGE_FLAG_IS_COMMENT_PUBLISHING`,
  CHANGE_FLAG_COMMENT_SENDING_ERROR: `CHANGE_FLAG_COMMENT_SENDING_ERROR`,
  UPDATE_FILM: `UPDATE_FILM`,
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
  changeFlagCommentPublishing: (status) => ({
    type: ActionTypes.CHANGE_FLAG_COMMENT_PUBLISHING,
    payload: status
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
  })
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
        dispatch(ActionCreator.changeFlagCommentPublishing(false));
        dispatch(ActionCreator.changeFlagCommentSendingError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.changeFlagCommentPublishing(false));
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
    case ActionTypes.CHANGE_FLAG_COMMENT_PUBLISHING:
      return extend(state, {
        isCommentPublishing: action.payload
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
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Operation};
