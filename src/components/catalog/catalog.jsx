import React from "react";
import PropTypes from "prop-types";
import MovieList from "./../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/app-state/app-state.js";
import {getDisplayedFilmsCount, getActiveGenre} from "./../../reducer/app-state/selector.js";
import {getFilteredFilms} from "./../../reducer/data/selector.js";
import withFilteredFilms from "./../../hocs/with-filtered-films/with-filtered-films.jsx";

const MovieListWrapped = withFilteredFilms(MovieList);

const Catalog = (props) => {
  const {countFilms, onShowMoreClick, isButtonDisplayed, genre} = props;

  return <React.Fragment>
    <div className="catalog__movies-list">
      {<MovieListWrapped
        countFilms={countFilms}
        genre={genre}
      />}
    </div>

    {isButtonDisplayed &&
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={onShowMoreClick}
        >
          Show more
        </button>
      </div>
    }
  </React.Fragment>;
};

Catalog.propTypes = {
  countFilms: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  isButtonDisplayed: PropTypes.bool.isRequired,
  genre: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const genre = getActiveGenre(state);
  const displayedFilmsCount = getDisplayedFilmsCount(state);
  const films = getFilteredFilms(state, genre);

  const isButtonDisplayed = films.length > displayedFilmsCount ? true : false;

  return {
    isButtonDisplayed,
    countFilms: displayedFilmsCount,
    genre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.increaseCountDisplayedFilms());
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
