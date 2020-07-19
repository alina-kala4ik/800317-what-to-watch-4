import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {getFilteredFilms, getFavoriteFilms} from "./../../reducer/data/selector.js";
import withPlayingCard from "./../../hocs/with-playing-card/with-playing-card.jsx";

const MovieCardWrapped = withPlayingCard(MovieCard);

const MovieList = (props) => {
  const {films} = props;

  if (!films) {
    return null;
  }

  return films.map((film) =>
    <MovieCardWrapped
      key={film.title}
      film={film}
    />);
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  countFilms: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  myList: PropTypes.bool
};

const mapStateToProps = (state, props) => {
  let {countFilms, myList} = props;

  let films;
  if (myList) {
    films = getFavoriteFilms(state);
  } else {
    films = getFilteredFilms(state);
  }

  if (countFilms === `all`) {
    countFilms = films.length;
  }

  const displayedNumberOfFilms = films.slice(0, countFilms);

  return {
    films: displayedNumberOfFilms
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
