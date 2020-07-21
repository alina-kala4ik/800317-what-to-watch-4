import React, {PureComponent} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getFilteredFilms} from "./../../reducer/data/selector.js";

const withFilteredFilms = (Component) => {
  class WithFilteredFilms extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {films} = this.props;

      return <Component
        {...this.props}
        films={films}
      />;
    }

  }

  WithFilteredFilms.propTypes = {
    films: PropTypes.array.isRequired,
    countFilms: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  };

  return WithFilteredFilms;
};

const mapStateToProps = (state, props) => {
  const {countFilms, genre} = props;

  const films = getFilteredFilms(state, genre);

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
