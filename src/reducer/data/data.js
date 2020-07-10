import {extend, Genres} from "./../../utils.js";
import {adapter as filmsAdapter} from "./../../adapters/films.js";
import mockFilms from "./../../mocks/films.js";
import {getFilteredFilms} from "./selector.js";

const initialState = {
  allFilms: [],
  films: [],
  promoFilm: mockFilms[0],
};

const ActionTypes = {
  FILTERED_FILMS: `FILTERED_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  filteredFilms: (genre)=>({
    type: ActionTypes.FILTERED_FILMS,
    payload: genre
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILTERED_FILMS:
      const genre = action.payload;
      const filteredFilms = getFilteredFilms(state, genre);
      return extend(state, {
        films: filteredFilms
      });
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        allFilms: action.payload
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Operation};
