import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getReviews, getFlagReviewsFetching} from "./../../reducer/data/selector.js";
import {Operation, ActionCreator} from "./../../reducer/data/data.js";
import PropTypes from "prop-types";
import Reviews from "./../reviews/reviews.jsx";

class TabReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoad, filmId} = this.props;

    onLoad(filmId);
  }

  componentWillUnmount() {
    const {onReset} = this.props;
    onReset();
  }

  render() {
    const {reviews, isReviewsFetching} = this.props;

    if (isReviewsFetching) {
      return null;
    }

    const halfOfReviews = Math.ceil(reviews.length / 2);

    const firstHalfOfReviews = reviews.slice(0, halfOfReviews);
    const secondHalfOfReviews = reviews.slice(halfOfReviews);

    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        <Reviews reviews={firstHalfOfReviews} />

      </div>
      <div className="movie-card__reviews-col">

        <Reviews reviews={secondHalfOfReviews} />

      </div>
    </div>;
  }

}

TabReviews.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  reviews: PropTypes.array,
  filmId: PropTypes.number.isRequired,
  isReviewsFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  isReviewsFetching: getFlagReviewsFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(filmId) {
    dispatch(Operation.loadReviews(filmId));
  },
  onReset() {
    dispatch(ActionCreator.changeFlagReviewsFetching(true));
  }
});

export {TabReviews};
export default connect(mapStateToProps, mapDispatchToProps)(TabReviews);
