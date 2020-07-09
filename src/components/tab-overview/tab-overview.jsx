import React from "react";
import PropTypes from "prop-types";

const getRatingLevel = (rating) => {
  if (rating === 0 || rating < 3) {
    return `Bad`;
  }
  if (rating >= 3 || rating < 5) {
    return `Normal`;
  }
  if (rating >= 5 || rating < 8) {
    return `Good`;
  }
  if (rating >= 8 || rating < 10) {
    return `Very good`;
  }
  if (rating >= 10) {
    return `Awesome`;
  }
  return null;
};

const TabOverview = (props) => {
  const {film} = props;
  const {rating, numberVotes, description, producer, actors} = film;
  const ratingLevel = getRatingLevel(rating);
  const ratingStr = rating.toString().replace(`.`, `,`);

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{ratingStr}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{ratingLevel}</span>
        <span className="movie-rating__count">{numberVotes} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <p>{description}</p>

      <p className="movie-card__director"><strong>Director: {producer}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)}</strong></p>
    </div>
  </React.Fragment>;
};

TabOverview.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabOverview;
