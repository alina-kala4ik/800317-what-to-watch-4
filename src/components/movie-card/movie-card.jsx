import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "./../video-player/video-player.jsx";
import {Pages} from "./../../utils.js";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, isPlaying, onMouseEnter, onMouseLeave} = props;
  const {title, screenshotSrc, previewVideoLink, id} = film;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link
      className="small-movie-card__image"
      to={Pages.FILM.replace(`:id`, id)}
    >
      <VideoPlayer
        src={previewVideoLink}
        poster={screenshotSrc}
        isPlaying={isPlaying}
      />
    </Link>
    <h3 className="small-movie-card__title">
      <Link
        to={Pages.FILM.replace(`:id`, id)}
        className="small-movie-card__link"
      >
        {title}
      </Link>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
