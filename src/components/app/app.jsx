import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, Router, Redirect} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";
import MovieViewingPage from "./../movie-viewing-page/movie-viewing-page.jsx";
import {connect} from "react-redux";
import withPlayer from "./../../hocs/with-player/with-player.jsx";
import {getPlayableMovie, gerServerStatus} from "./../../reducer/app-state/selector.js";
import {ServerStatus} from "./../../reducer/app-state/app-state.js";
import {getIsFilmsFetching, getIsPromoFilmFetching, getFilms, getPromoFilm} from "./../../reducer/data/selector.js";
import SignIn from "./../sign-in/sign-in.jsx";
import {Pages} from "./../../utils.js";
import history from "./../../history.js";
import {getAuthorizationStatus} from "./../../reducer/user/selector.js";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

const MovieViewingPageWrapped = withPlayer(MovieViewingPage);

class App extends PureComponent {

  _renderApp() {
    const {
      playableMovie,
      films,
      promoFilm,
      serverStatus,
      isFilmsFetching,
      isPromoFilmFetching,
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

    return <React.Fragment>
      {modal}
      <Main />
    </React.Fragment>;


  }

  render() {
    const {authorizationStatus} = this.props;

    return <Router history={history}>
      <Switch>
        <Route exact path={Pages.ROOT}>
          {this._renderApp()}
        </Route>
        <Route
          exact
          path={Pages.LOGIN}
          render={()=>{
            return authorizationStatus === AuthorizationStatus.NO_AUTH ?
              <SignIn /> :
              <Redirect to={
                <Main />
              } />;
          }}
        />
        <Route exact path={Pages.MY_LIST}>
          <div>WIP</div>
        </Route>
        <Route
          exact
          path={`${Pages.FILM}:id?`}
          render={(props)=>{
            return <MoviePage historyProps={props} />;
          }}
        />
        <Route>
          <div>404 not found</div>
        </Route>
      </Switch>
    </Router>;
  }
}

App.propTypes = {
  playableMovie: PropTypes.object,
  serverStatus: PropTypes.string.isRequired,
  isFilmsFetching: PropTypes.bool.isRequired,
  isPromoFilmFetching: PropTypes.bool.isRequired,
  films: PropTypes.array,
  promoFilm: PropTypes.object,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  playableMovie: getPlayableMovie(state),
  serverStatus: gerServerStatus(state),
  isFilmsFetching: getIsFilmsFetching(state),
  isPromoFilmFetching: getIsPromoFilmFetching(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);


