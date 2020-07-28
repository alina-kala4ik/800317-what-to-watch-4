import React from "react";
import PropTypes from "prop-types";

const Reviews = (props) => {
  const {reviews} = props;

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
};

Reviews.propTypes = {
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
  ).isRequired,
};

export default Reviews;
