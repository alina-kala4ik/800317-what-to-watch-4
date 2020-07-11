import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "./../video-player/video-player.jsx";

const MovieCard = (props) => {
  const {film, onFilmTitleClick, onFilmImgClick, isPlaying, onMouseEnter, onMouseLeave} = props;
  const {title, screenshotSrc, previewVideoLink} = film;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div
      className="small-movie-card__image"
      onClick={()=>{
        onFilmImgClick(film);
      }}
    >
      <VideoPlayer
        src={previewVideoLink}
        poster={screenshotSrc}
        isPlaying={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a
        onClick={(evt)=>{
          evt.preventDefault();
          onFilmTitleClick(film);
        }}
        className="small-movie-card__link"
        href="movie-page.html"
      >{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  }).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
