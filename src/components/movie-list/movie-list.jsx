import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {getFilteredFilms} from "./../../reducer/data/selector.js";
import withPlayingCard from "./../../hocs/with-playing-card/with-playing-card.jsx";

const MovieCardWrapped = withPlayingCard(MovieCard);

const MovieList = (props) => {
  const {films} = props;

  return films.map((film) =>
    <MovieCardWrapped
      key={film.title}
      film={film}
    />);
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  countFilms: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => {
  const {countFilms} = props;

  const films = getFilteredFilms(state);

  const displayedNumberOfFilms = films.slice(0, countFilms);

  return {
    films: displayedNumberOfFilms
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
