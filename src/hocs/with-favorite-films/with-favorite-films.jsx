import React, {PureComponent} from "react";
import {getFavoriteFilms} from "./../../reducer/data/selector.js";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const withFavoriteFilms = (Component) => {
  class WithFavoriteFilms extends PureComponent {
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

  WithFavoriteFilms.propTypes = {
    films: PropTypes.array.isRequired
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
