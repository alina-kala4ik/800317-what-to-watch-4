import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/app-state/app-state.js";
import PropTypes from "prop-types";
import {getPromoFilm} from "./../../reducer/data/selector.js";
import {Operation} from "./../../reducer/data/data.js";
import Header from "./../header/header.jsx";

const REMOVE_FROM_MY_LIST = 0;
const ADD_TO_MY_LIST = 1;
const UNIQUE_CLASSES_FROM_HEADER = `movie-card__head`;

class Promo extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMyListClick = this.handleMyListClick.bind(this);
  }

  handleMyListClick() {
    const {film, onMyListClick} = this.props;
    const {isFavorite, id} = film;
    const status = isFavorite ? REMOVE_FROM_MY_LIST : ADD_TO_MY_LIST;

    onMyListClick(id, status);
  }

  render() {
    const {film} = this.props;
    const {title, posterSrc, movieCoverSrc, genre, yearRelease, isFavorite} = film;

    const myListIcon = isFavorite ?
      <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg> :
      <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"/></svg>;

    return <section className="movie-card">
      <div className="movie-card__bg">
        <img src={posterSrc} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        uniqueClasses={UNIQUE_CLASSES_FROM_HEADER}
        isActiveLogoLink={false}
      />

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
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={this.handleMyListClick}
              >
                {myListIcon}
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }

}


Promo.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onMyListClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const film = getPromoFilm(state);

  return {
    film,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMyListClick(filmId, status) {
    dispatch(Operation.changeFlagIsFavorite(filmId, status));
  }
});

export {Promo};
export default connect(mapStateToProps, mapDispatchToProps)(Promo);
