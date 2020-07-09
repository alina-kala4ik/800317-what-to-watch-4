import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {Genres} from "./../../utils.js";
import {getFilteredFilms} from "./../../reducer.js";
import withPlayingCard from "./../../hocs/with-playing-card/with-playing-card.jsx";

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
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoSrc: PropTypes.string.isRequired,
  })).isRequired,
  genre: PropTypes.string,
  countFilms: PropTypes.number.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const {genre = Genres.ALL, countFilms} = props;

  let films = state.films;

  if (genre !== Genres.ALL) {
    films = getFilteredFilms(genre, films);
  }

  const displayedNumberOfFilms = films.slice(0, countFilms);

  return {
    films: displayedNumberOfFilms
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
