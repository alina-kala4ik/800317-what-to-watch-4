import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCard from "./../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {Genres} from "./../../utils.js";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmTitle: null
    };

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    this.getFilteredMovies = this.getFilteredMovies.bind(this);
  }

  handleCardMouseEnter(filmTitle) {
    this.setState({activeFilmTitle: filmTitle});
  }

  getFilteredMovies() {
    const {genre, films} = this.props;
    const relatedMovies = films.filter((film)=>film.genre === genre);
    return relatedMovies;
  }

  render() {
    const {genre = Genres.ALL, onFilmTitleClick, onFilmImgClick} = this.props;
    let {films} = this.props;

    if (genre !== Genres.ALL) {
      films = this.getFilteredMovies();
    }

    return films.map((film) =>
      <MovieCard
        key={film.title}
        film={film}
        onMouseEnter={this.handleCardMouseEnter}
        onMouseLeave={this.handleCardMouseLeave}
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
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films
});

export {MovieList};
export default connect(mapStateToProps)(MovieList);
