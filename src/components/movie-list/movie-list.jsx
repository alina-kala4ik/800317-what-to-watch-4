import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {Genres} from "./../../utils.js";
import {getFilteredFilms} from "./../../reducer.js";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onFilmTitleClick, onFilmImgClick} = this.props;

    return films.map((film) =>
      <MovieCard
        key={film.title}
        film={film}
        onFilmTitleClick={onFilmTitleClick}
        onFilmImgClick={onFilmImgClick}
      />);
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    numberVotes: PropTypes.string.isRequired,
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
    films = getFilteredFilms(genre);
  }

  const displayedNumberOfFilms = films.slice(0, countFilms);

  return {
    films: displayedNumberOfFilms
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
