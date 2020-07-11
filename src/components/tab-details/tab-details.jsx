import React from "react";
import PropTypes from "prop-types";

const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  const minutesStr = minutes.toString().padStart(2, `0`);

  return `${hours}h ${minutesStr}m`;
};

const TabDetails = (props) => {
  const {film} = props;
  const {producer, actors, runTime: runTimeInMin, yearRelease, genre} = film;
  const runTime = getTimeFromMins(runTimeInMin);

  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{producer}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {actors.map((actor, i, arr)=>{
            return <React.Fragment
              key={actor}>
              {actor}{i === arr.length - 1 ? `` : `,`} <br />
            </React.Fragment>;
          })}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{runTime}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{yearRelease}</span>
      </p>
    </div>
  </div>;
};

TabDetails.propTypes = {
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabDetails;
