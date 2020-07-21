import React from "react";
import PropTypes from 'prop-types';
import MovieList from "./../movie-list/movie-list.jsx";
import AboutFilm from "./../about-film/about-film.jsx";
import withActiveItem from "./../../hocs/with-active-item/with-active-item.jsx";
import {Tabs, Pages} from "./../../utils.js";
import {connect} from "react-redux";
import {getFilmById} from "./../../reducer/data/selector.js";
import {Link} from "react-router-dom";
import Header from "./../header/header.jsx";
import MyListButton from "../my-list-button/my-list-button.jsx";
import withFilteredFilms from "./../../hocs/with-filtered-films/with-filtered-films.jsx";

const DISPLAYED_NUMBER_OF_FILMS = 4;
const MovieListWrapped = withFilteredFilms(MovieList);

const MoviePage = (props) => {
  const {film} = props;

  if (!film) {
    return null;
  }

  const {title, posterSrc, movieCoverSrc, genre, yearRelease, backgroundColor, id, isFavorite} = film;

  const AboutFilmWrapped = withActiveItem(AboutFilm, Tabs.OVERVIEW);

  return <React.Fragment>
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: `${backgroundColor}`}}
    >
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={posterSrc} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          uniqueClasses={`movie-card__head`}
          isActiveLogoLink
        />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{yearRelease}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                className="btn btn--play movie-card__button"
                type="button"
                to={Pages.PLAYER.replace(`:id`, id)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <MyListButton
                id={id}
                isFavorite={isFavorite}
              />
              <Link
                to={Pages.REVIEW.replace(`:id`, id)}
                className="btn movie-card__button"
              >
                Add review
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movieCoverSrc} alt={title} width="218" height="327" />
          </div>

          <AboutFilmWrapped
            film={film}
          />
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <MovieListWrapped
            countFilms={DISPLAYED_NUMBER_OF_FILMS}
            genre={genre}
          />
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};


MoviePage.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  historyProps: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  const {historyProps} = props;
  const id = historyProps.match.params.id;

  return {
    film: getFilmById(state, id)
  };
};

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);

