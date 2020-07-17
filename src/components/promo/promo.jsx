import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer/app-state/app-state.js";
import PropTypes from "prop-types";
import {getPromoFilm} from "./../../reducer/data/selector.js";
import {getAuthorizationStatus, getAvatar} from "./../../reducer/user/selector.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {Pages} from "./../../utils.js";
import {Operation} from "./../../reducer/data/data.js";

const REMOVE_FROM_MY_LIST = 0;
const ADD_TO_MY_LIST = 1;

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
    const {onPlayClick, film, authorizationStatus, avatar} = this.props;
    const {title, posterSrc, movieCoverSrc, genre, yearRelease, isFavorite} = film;

    const userBlock = authorizationStatus === AuthorizationStatus.AUTH ?
      <Link
        className="user-block__avatar"
        to={Pages.MY_LIST}>
        <img src={avatar} alt="User avatar" width="63" height="63"/>
      </Link> :
      <Link
        to={Pages.LOGIN}
        className="user-block__link">
        Sign in
      </Link>;

    const myListIcon = isFavorite ?
      <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg> :
      <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"/></svg>;

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
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={this.handleMyListClick}>
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
  onPlayClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  onMyListClick: PropTypes.func.isRequired,
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
  onMyListClick(filmId, status) {
    dispatch(Operation.changeFlagIsFavorite(filmId, status));
  }
});

export {Promo};
export default connect(mapStateToProps, mapDispatchToProps)(Promo);
