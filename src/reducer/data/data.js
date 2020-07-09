import {extend, Genres} from "./../../utils.js";
import {adapter as filmsAdapter} from "./../../adapters/films.js";
import mockFilms from "./../../mocks/films.js";

const initialState = {
  films: [],
  promoFilm: mockFilms[0],
};

const ActionTypes = {
  FILTERED_FILMS: `FILTERED_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  filteredFilms: ()=>({
    type: ActionTypes.FILTERED_FILMS,
    payload: null
  }),
  loadFilms: (films)=>({
    type: ActionTypes.LOAD_FILMS,
    payload: films
  }),
};

const Operation = {
  loadFilms: ()=>(dispatch, getState, api)=> {
    return api.get(`/films`)
      .then((response)=>{
        const films = filmsAdapter(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  }
};

const getFilteredFilms = (genre, allFilms) => {
  if (genre === Genres.ALL) {
    return allFilms;
  }

  const filteredFilms = allFilms.filter((film) => film.genre === genre);

  return filteredFilms;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILTERED_FILMS:
      const filteredFilms = getFilteredFilms(state.genre, state.films);
      return extend(state, {
        films: filteredFilms
      });
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, getFilteredFilms, Operation};
