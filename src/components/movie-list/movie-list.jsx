import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {getFilteredFilms} from "./../../reducer/data/selector.js";
import withPlayingCard from "./../../hocs/with-playing-card/with-playing-card.jsx";
import {getGenre} from "./../../reducer/app-state/selector.js";

const MovieCardWrapped = withPlayingCard(MovieCard);

const MovieList = (props) => {
  const {films, onFilmTitleClick, onFilmImgClick} = props;

  return films.map((film) =>
    <MovieCardWrapped
      key={film.title}
      film={film}
      onFilmTitleClick={onFilmTitleClick}
      onFilmImgClick={onFilmImgClick}
    />);
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string,
  countFilms: PropTypes.number.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const {genre = getGenre(state), countFilms} = props;

  const films = getFilteredFilms(state);

  const displayedNumberOfFilms = films.slice(0, countFilms);

  return {
    films: displayedNumberOfFilms
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
