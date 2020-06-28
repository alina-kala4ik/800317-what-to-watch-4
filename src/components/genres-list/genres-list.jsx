import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";

const MAX_NUMBER_GENRES = 10;

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.allFilms = this.props.films;

    this.getGenresList = this.getGenresList.bind(this);
  }

  getGenresList() {
    const genres = new Set();
    genres.add(`All genres`);
    this.allFilms.forEach((film) => {
      genres.add(film.genre);
    });
    const genresList = Array.from(genres).slice(0, MAX_NUMBER_GENRES);
    return genresList;
  }

  render() {
    const {genre, onClick} = this.props;
    const genresList = this.getGenresList();

    return <ul className="catalog__genres-list">
      {genresList.map((item) => {
        const activeClass = genre === item ? `catalog__genres-item--active` : ``;

        return <li
          key={item}
          className={`catalog__genres-item ${activeClass}`}
          onClick={()=>{
            onClick(item);
          }}
        >
          <a href="#" className="catalog__genres-link">{item}</a>
        </li>;
      })}
    </ul>;
  }
}

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
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
  })),
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filteredFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

