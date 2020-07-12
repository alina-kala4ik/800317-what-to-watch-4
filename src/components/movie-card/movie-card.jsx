import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from "./../video-player/video-player.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/data/data.js";

const MovieCard = (props) => {
  const {film, onFilmTitleClick, onFilmImgClick, isPlaying, onMouseEnter, onMouseLeave, setGenreForFilter} = props;
  const {title, screenshotSrc, previewVideoLink, genre} = film;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div
      className="small-movie-card__image"
      onClick={()=>{
        onFilmImgClick(film);
        setGenreForFilter(genre);
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
          setGenreForFilter(genre);
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
    previewVideoLink: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setGenreForFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setGenreForFilter(genre) {
    dispatch(ActionCreator.setGenreForFilter(genre));
  }
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
