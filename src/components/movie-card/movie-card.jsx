import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {film, onCardActive, onFilmTitleClick} = props;
  const {id, title, src} = film;

  return <article
    key={id} className="small-movie-card catalog__movies-card"
    onMouseEnter={()=>{
      onCardActive(id);
    }}
  >
    <div className="small-movie-card__image">
      <img src={src} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a
        onClick={onFilmTitleClick}
        className="small-movie-card__link"
        href="movie-page.html"
      >{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onCardActive: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default MovieCard;
