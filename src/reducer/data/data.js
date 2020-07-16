import {extend, Genres} from "./../../utils.js";
import {adapter, adapterForArray} from "./../../adapters/films.js";

const initialState = {
  films: [],
  promoFilm: null,
  isFilmsFetching: true,
  isPromoFilmFetching: true,
  genreForFilter: Genres.ALL,
  isCommentPublishing: false,
  isCommentSendingError: false,
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SET_GENRE_FOR_FILTER: `SET_GENRE_FOR_FILTER`,
  CHANGE_FLAG_COMMENT_PUBLISHING: `CHANGE_FLAG_IS_COMMENT_PUBLISHING`,
  CHANGE_FLAG_COMMENT_SENDING_ERROR: `CHANGE_FLAG_COMMENT_SENDING_ERROR`,
};

const ActionCreator = {
  loadFilms: (films)=>({
    type: ActionTypes.LOAD_FILMS,
    payload: films
  }),
  loadPromoFilm: (film)=>({
    type: ActionTypes.LOAD_PROMO_FILM,
    payload: film
  }),
  setGenreForFilter: (genre)=>({
    type: ActionTypes.SET_GENRE_FOR_FILTER,
    payload: genre
  }),
  changeFlagCommentPublishing: (status)=>({
    type: ActionTypes.CHANGE_FLAG_COMMENT_PUBLISHING,
    payload: status
  }),
  changeFlagCommentSendingError: (status)=>({
    type: ActionTypes.CHANGE_FLAG_COMMENT_SENDING_ERROR,
    payload: status
  })
};

const Operation = {
  loadFilms: ()=>(dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response)=>{
        const films = adapterForArray(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoFilm: ()=>(dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response)=>{
        const promoFilm = adapter(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  },
  commentPost: (filmId, commentData)=>(dispatch, getState, api)=> {
    return api.post(`comments/${filmId}`, {
      rating: commentData.rating,
      comment: commentData.comment
    })
      .then(()=>{
        dispatch(ActionCreator.changeFlagCommentPublishing(false));
        dispatch(ActionCreator.changeFlagCommentSendingError(false));
      })
      .catch(()=>{
        dispatch(ActionCreator.changeFlagCommentPublishing(false));
        dispatch(ActionCreator.changeFlagCommentSendingError(true));
      });
  },
  changeFlagIsFavorite: (filmId, status)=>(dispatch, getState, api)=>{
    return api.post(`/favorite/${filmId}/${status}`)
      .then((response)=>{
        const promoFilm = adapter(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
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
    case ActionTypes.SET_GENRE_FOR_FILTER:
      return extend(state, {
        genreForFilter: action.payload
      });
    case ActionTypes.CHANGE_FLAG_COMMENT_PUBLISHING:
      return extend(state, {
        isCommentPublishing: action.payload
      });
    case ActionTypes.CHANGE_FLAG_COMMENT_SENDING_ERROR:
      return extend(state, {
        isCommentSendingError: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Operation};
