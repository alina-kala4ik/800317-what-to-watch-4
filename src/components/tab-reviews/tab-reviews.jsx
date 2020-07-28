import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getReviews, getFlagReviewsFetching} from "./../../reducer/data/selector.js";
import {Operation, ActionCreator} from "./../../reducer/data/data.js";
import PropTypes from "prop-types";

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

  getReviews(reviews) {
    return reviews.map((review) => {
      const {id, user, rating, comment, date} = review;
      const {name} = user;

      const options = {
        year: `numeric`,
        month: `long`,
        day: `numeric`,
      };

      const reviewDate = new Date(date).toLocaleString(`en-US`, options);
      const dateTime = date.substr(0, 10);

      return <div key={id} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{name}</cite>
            <time className="review__date" dateTime={dateTime}>{reviewDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>;
    });
  }

  render() {
    const {reviews, isReviewsFetching} = this.props;

    if (isReviewsFetching) {
      return null;
    }

    const halfOfReviews = Math.ceil(reviews.length / 2);

    const firstHalfOfReviews = reviews.slice(0, halfOfReviews);
    const secondHalfOfReviews = reviews.slice(halfOfReviews);

    const firstColumnOfReviews = this.getReviews(firstHalfOfReviews);
    const secondColumnOfReviews = this.getReviews(secondHalfOfReviews);

    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {firstColumnOfReviews}

      </div>
      <div className="movie-card__reviews-col">

        {secondColumnOfReviews}

      </div>
    </div>;
  }

}

TabReviews.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        }),
        rating: PropTypes.number,
        comment: PropTypes.string,
        date: PropTypes.string,
      })
  ),
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
