import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator as appStateActionCreator} from "./../../reducer/app-state/app-state.js";
import {getActiveGenre} from "./../../reducer/app-state/selector.js";
import {getGenresList} from "./../../reducer/data/selector.js";
import {Genres} from "./../../utils.js";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    const {onReset} = this.props;

    onReset();
  }

  render() {
    const {genre, onClick, genresList} = this.props;

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
  onReset: PropTypes.func.isRequired,
  genresList: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  genre: getActiveGenre(state),
  genresList: getGenresList(state)
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

