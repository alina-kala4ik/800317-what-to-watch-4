import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onFilmTitleClick} = this.props;

    return films.map((film) =>
      <MovieCard
        key={film.title}
        film={film}
        onCardActive={(activeFilm)=>{
          this.setState({activeCard: activeFilm});
        }}
        onFilmTitleClick={onFilmTitleClick}
      />);
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default MovieList;