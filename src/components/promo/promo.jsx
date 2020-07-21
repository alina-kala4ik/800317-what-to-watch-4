import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getPromoFilm} from "./../../reducer/data/selector.js";
import Header from "./../header/header.jsx";
import {Link} from "react-router-dom";
import MyListButton from "../my-list-button/my-list-button.jsx";
import {Pages} from "../../utils.js";

class Promo extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props;
    const {title, posterSrc, movieCoverSrc, genre, yearRelease, isFavorite, id} = film;

    return <section className="movie-card">
      <div className="movie-card__bg">
        <img src={posterSrc} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        uniqueClasses="movie-card__head"
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
              <Link
                className="btn btn--play movie-card__button"
                type="button"
                to={Pages.PLAYER.replace(`:id`, id)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <MyListButton
                id={id}
                isFavorite={isFavorite}
                isPromoFilm={true}
              />
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
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
};

const mapStateToProps = (state) => {
  const film = getPromoFilm(state);

  return {
    film,
  };
};

export {Promo};
export default connect(mapStateToProps)(Promo);
