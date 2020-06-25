import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "./../video-player/video-player.jsx";

const MovieCard = (props) => {
  const {film, onMouseEnter, onMouseLeave, onFilmTitleClick, onFilmImgClick, isPlaying} = props;
  const {title, src, videoPreview} = film;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={()=>{
      onMouseEnter(title);
    }}
    onMouseLeave={onMouseLeave}
  >
    <div
      className="small-movie-card__image"
      onClick={()=>{
        onFilmImgClick(film);
      }}
    >
      {<VideoPlayer
        videoPreview={videoPreview}
        src={src}
        isPlaying={isPlaying}
      />}
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
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    movieCover: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    numberVotes: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoPreview: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
