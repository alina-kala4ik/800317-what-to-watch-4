import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";
import PropTypes from "prop-types";

const Promo = (props) => {
  const {onPlayClick, film} = props;
  const {title, posterSrc, movieCoverSrc, genre, yearRelease} = film;

  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={posterSrc} alt={title} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={movieCoverSrc} alt={`${title} poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{yearRelease}</span>
          </p>

          <div className="movie-card__buttons">
            <button
              className="btn btn--play movie-card__button"
              type="button"
              onClick={()=>{
                onPlayClick(film);
              }}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add" />
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

Promo.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
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
  }),
};

const mapStateToProps = (state) => {
  const film = state.films[0];

  return {
    film
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(film) {
    dispatch(ActionCreator.chooseMovieToWatch(film));
  }
});

export {Promo};
export default connect(mapStateToProps, mapDispatchToProps)(Promo);
