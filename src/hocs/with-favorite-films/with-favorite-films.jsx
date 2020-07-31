import React from "react";
import {getFavoriteFilms} from "./../../reducer/data/selector.js";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const withFavoriteFilms = (Component) => {
  const WithFavoriteFilms = (props) => {
    const {films} = props;

    return <Component
      {...props}
      films={films}
    />;
  };

  WithFavoriteFilms.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  return WithFavoriteFilms;

};

const mapStateToProps = (state) => {
  let films = getFavoriteFilms(state);

  return {
    films
  };
};

const composedHoc = compose(
    connect(mapStateToProps),
    withFavoriteFilms
);

export {withFavoriteFilms};
export default composedHoc;
