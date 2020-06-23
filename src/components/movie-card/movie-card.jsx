import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {film, onMouseEnter, onFilmTitleClick, onFilmImgClick} = props;
  const {title, src} = film;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={()=>{
      onMouseEnter(film);
    }}
  >
    <div
      className="small-movie-card__image"
      onClick={()=>{
        onFilmImgClick(film);
      }}
    >
      <img src={src} alt={title} width="280" height="175" />
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
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

export default MovieCard;
