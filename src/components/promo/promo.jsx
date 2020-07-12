import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/app-state/app-state.js";
import PropTypes from "prop-types";
import {getPromoFilm} from "./../../reducer/data/selector.js";
import {getAuthorizationStatus, getAvatar} from "./../../reducer/user/selector.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

class Promo extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSignInClick = this.handleSignInClick.bind(this);
  }

  handleSignInClick(evt) {
    const {onSignInClick} = this.props;

    evt.preventDefault();

    onSignInClick();
  }

  render() {
    const {onPlayClick, film, authorizationStatus, avatar} = this.props;
    const {title, posterSrc, movieCoverSrc, genre, yearRelease} = film;

    let userBlock;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      userBlock = <div className="user-block__avatar">
        <img src={avatar} alt="User avatar" width="63" height="63" />
      </div>;
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      userBlock = <a
        href="sign-in.html"
        className="user-block__link"
        onClick={this.handleSignInClick}
      >
        Sign in
      </a>;
    }

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
          {userBlock}
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
  }

}


Promo.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  avatar: PropTypes.string
};

const mapStateToProps = (state) => {
  const film = getPromoFilm(state);
  const authorizationStatus = getAuthorizationStatus(state);
  const avatar = getAvatar(state);

  return {
    film,
    authorizationStatus,
    avatar,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(film) {
    dispatch(ActionCreator.chooseMovieToWatch(film));
  },
  onSignInClick() {
    dispatch(ActionCreator.logIn(true));
  }
});

export {Promo};
export default connect(mapStateToProps, mapDispatchToProps)(Promo);
