import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleCardMouseEnter(activeFilm) {
    this.setState({activeCard: activeFilm});
  }

  render() {
    const {films, onFilmTitleClick} = this.props;

    return films.map((film) =>
      <MovieCard
        key={film.title}
        film={film}
        onMouseEnter={(activeFilm) => this.setState({activeCard: activeFilm})}
        onFilmTitleClick={onFilmTitleClick}
      />);
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    movieCover: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    numberVotes: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default MovieList;
