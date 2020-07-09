import React from "react";
import PropTypes from "prop-types";
import MovieList from "./../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/app-state/app-state.js";
import {getCountDisplayedFilms} from "./../../reducer/app-state/selector.js";
import {getFilms} from "./../../reducer/data/selector.js";


const Catalog = (props) => {
  const {onFilmTitleClick, onFilmImgClick, countFilms, onShowMoreClick, isButtonDisplayed} = props;

  return <React.Fragment>
    <div className="catalog__movies-list">
      {<MovieList
        onFilmTitleClick={onFilmTitleClick}
        onFilmImgClick={onFilmImgClick}
        countFilms={countFilms}
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
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  countFilms: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  isButtonDisplayed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const countDisplayedFilms = getCountDisplayedFilms(state);
  const films = getFilms(state);

  const isButtonDisplayed = films.length > countDisplayedFilms ? true : false;

  return {
    isButtonDisplayed,
    countFilms: countDisplayedFilms
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.increaseCountDisplayedFilms());
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
