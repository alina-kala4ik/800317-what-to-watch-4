import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator as appStateActionCreator} from "./../../reducer/app-state/app-state.js";
import {getActiveGenre} from "./../../reducer/app-state/selector.js";
import {getFilms} from "./../../reducer/data/selector.js";
import {Genres} from "./../../utils.js";

const MAX_NUMBER_GENRES = 10;

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.allFilms = this.props.films;

    this.getGenresList = this.getGenresList.bind(this);
  }

  componentWillUnmount() {
    const {onReset} = this.props;

    onReset();
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
          onClick={(evt) => {
            evt.preventDefault();
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
  films: PropTypes.array,
  onReset: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: getActiveGenre(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(appStateActionCreator.changeActiveGenre(genre));
    dispatch(appStateActionCreator.resetCountDisplayedFilms());
  },
  onReset() {
    dispatch(appStateActionCreator.changeActiveGenre(Genres.ALL));
    dispatch(appStateActionCreator.resetCountDisplayedFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

