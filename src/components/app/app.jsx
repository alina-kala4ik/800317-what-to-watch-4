import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";
import mockFilms from "../../mocks/films.js";
import MovieViewingPage from "./../movie-viewing-page/movie-viewing-page.jsx";
import {connect} from "react-redux";
import withPlayer from "./../../hocs/with-player/with-player.jsx";
import {getPlayableMovie, gerServerStatus, getLogIn} from "./../../reducer/app-state/selector.js";
import {ServerStatus} from "./../../reducer/app-state/app-state.js";
import {getIsFilmsFetching, getIsPromoFilmFetching, getFilms, getPromoFilm} from "./../../reducer/data/selector.js";
import SignIn from "./../sign-in/sign-in.jsx";

const MovieViewingPageWrapped = withPlayer(MovieViewingPage);

class App extends PureComponent {

  _renderApp() {
    const {
      activeItem: activeFilm,
      setActiveItem: onFilmOrImgClick,
      playableMovie,
      films,
      promoFilm,
      serverStatus,
      isFilmsFetching,
      isPromoFilmFetching,
      logIn
    } = this.props;

    const modal = playableMovie ? (<MovieViewingPageWrapped film={playableMovie}/>) : null;

    const isFetching = (isFilmsFetching && isPromoFilmFetching);

    if (isFetching) {
      return null;
    }

    if (!films || !promoFilm) {
      return <div style={{backgroundColor: `red`}}>У нашего сервера лапки</div>;
    }

    if (serverStatus === ServerStatus.ERROR) {
      return <div style={{backgroundColor: `red`}}>Сервер не доступен</div>;
    }

    if (logIn) {
      return <SignIn />;
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
    const {setActiveItem: onFilmOrImgClick} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
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
        <Route exact path="/login">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  activeItem: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  setActiveItem: PropTypes.func.isRequired,
  playableMovie: PropTypes.object,
  serverStatus: PropTypes.string.isRequired,
  isFilmsFetching: PropTypes.bool.isRequired,
  isPromoFilmFetching: PropTypes.bool.isRequired,
  films: PropTypes.array,
  promoFilm: PropTypes.object,
  logIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  playableMovie: getPlayableMovie(state),
  serverStatus: gerServerStatus(state),
  isFilmsFetching: getIsFilmsFetching(state),
  isPromoFilmFetching: getIsPromoFilmFetching(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  logIn: getLogIn(state),
});

export {App};
export default connect(mapStateToProps)(App);


