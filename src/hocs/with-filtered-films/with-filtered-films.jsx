import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getFilteredFilms} from "./../../reducer/data/selector.js";

const withFilteredFilms = (Component) => {
  const WithFilteredFilms = (props) => {
    const {films} = props;

    return <Component
      {...props}
      films={films}
    />;
  };

  WithFilteredFilms.propTypes = {
    films: PropTypes.array.isRequired,
    countFilms: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    filmId: PropTypes.number
  };

  return WithFilteredFilms;
};

const mapStateToProps = (state, props) => {
  const {countFilms, genre, filmId} = props;

  const films = getFilteredFilms(state, genre, filmId);

  const displayedNumberOfFilms = films.slice(0, countFilms);

  return {
    films: displayedNumberOfFilms
  };
};

const composedHoc = compose(
    connect(mapStateToProps),
    withFilteredFilms
);

export {withFilteredFilms};
export default composedHoc;
