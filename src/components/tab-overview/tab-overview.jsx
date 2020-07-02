import React from "react";
import PropTypes from "prop-types";

const getRatingLevel = (rating) => {
  const formattedRating = parseFloat(rating.replace(`,`, `.`));

  if (formattedRating === 0 || formattedRating < 3) {
    return `Bad`;
  }
  if (formattedRating >= 3 || formattedRating < 5) {
    return `Normal`;
  }
  if (formattedRating >= 5 || formattedRating < 8) {
    return `Good`;
  }
  if (formattedRating >= 8 || formattedRating < 10) {
    return `Very good`;
  }
  if (formattedRating >= 10) {
    return `Awesome`;
  }
  return null;
};

const TabOverview = (props) => {
  const {film} = props;
  const {rating, numberVotes, description, producer, actors} = film;
  const ratingLevel = getRatingLevel(rating);

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
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
    yearRelease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    numberVotes: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabOverview;
