import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";
import mockFilms from "../../mocks/films.js";
import MovieViewingPage from "./../movie-viewing-page/movie-viewing-page.jsx";
import {connect} from "react-redux";
import withPlayer from "./../../hocs/with-player/with-player.jsx";
import {getPlayableMovie, gerServerStatus} from "./../../reducer/app-state/selector.js";
import {ServerStatus} from "./../../reducer/app-state/app-state.js";
import {getIsFilmsFetching, getIsPromoFilmFetching, getFilms, getPromoFilm} from "./../../reducer/data/selector.js";

const MovieViewingPageWrapped = withPlayer(MovieViewingPage);

class App extends PureComponent {

  _renderApp() {
    const {activeItem: activeFilm, setActiveItem: onFilmOrImgClick, playableMovie, films, promoFilm} = this.props;

    const modal = playableMovie ? (<MovieViewingPageWrapped film={playableMovie}/>) : null;

    if (!films || !promoFilm) {
      return <div style={{backgroundColor: `red`}}>У нашего сервера лапки</div>;
    }

    if (activeFilm === false) {
      return <React.Fragment>
        {modal}
        <Main
          onFilmTitleClick={onFilmOrImgClick}
          onFilmImgClick={onFilmOrImgClick}
        />
      </React.Fragment>;
    }

    return <React.Fragment>
      {modal}
      <MoviePage
        film={activeFilm}
        onFilmTitleClick={onFilmOrImgClick}
        onFilmImgClick={onFilmOrImgClick}
      />
    </React.Fragment>;
  }

  render() {
    const {setActiveItem: onFilmOrImgClick, serverStatus, isFilmsFetching, isPromoFilmFetching} = this.props;
    const app = (serverStatus === ServerStatus.ERROR) ? <div style={{backgroundColor: `red`}}>Сервер не доступен</div> : this._renderApp();
    const isNoFetching = (isFilmsFetching === false && isPromoFilmFetching === false);

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {isNoFetching && app}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage
            film={mockFilms[0]}
            onFilmTitleClick={onFilmOrImgClick}
            onFilmImgClick={onFilmOrImgClick}
          />
        </Route>
        <Route exact path="/movie">
          <MovieViewingPageWrapped film={mockFilms[0]} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  activeItem: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      screenshotSrc: PropTypes.string.isRequired,
      posterSrc: PropTypes.string.isRequired,
      movieCoverSrc: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      yearRelease: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      numberVotes: PropTypes.number.isRequired,
      producer: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string).isRequired,
      runTime: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  setActiveItem: PropTypes.func.isRequired,
  playableMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  }),
  serverStatus: PropTypes.string.isRequired,
  isFilmsFetching: PropTypes.bool.isRequired,
  isPromoFilmFetching: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoSrc: PropTypes.string.isRequired,
  })),
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    screenshotSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberVotes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  playableMovie: getPlayableMovie(state),
  serverStatus: gerServerStatus(state),
  isFilmsFetching: getIsFilmsFetching(state),
  isPromoFilmFetching: getIsPromoFilmFetching(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
});

export {App};
export default connect(mapStateToProps)(App);


