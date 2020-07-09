import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";
import films from "../../mocks/films.js";
import MovieViewingPage from "./../movie-viewing-page/movie-viewing-page.jsx";
import {connect} from "react-redux";
import withPlayer from "./../../hocs/with-player/with-player.jsx";
import {getPlayableMovie} from "./../../reducer/app-state/selector.js";

const MovieViewingPageWrapped = withPlayer(MovieViewingPage);

class App extends PureComponent {

  _renderApp() {
    const {activeItem: activeFilm, setActiveItem: onFilmOrImgClick, playableMovie} = this.props;

    const modal = playableMovie ? (<MovieViewingPageWrapped film={playableMovie}/>) : null;

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
            film={films[0]}
            onFilmTitleClick={onFilmOrImgClick}
            onFilmImgClick={onFilmOrImgClick}
          />
        </Route>
        <Route exact path="/movie">
          <MovieViewingPageWrapped film={films[0]} />
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
};

const mapStateToProps = (state) => ({
  playableMovie: getPlayableMovie(state)
});

export {App};
export default connect(mapStateToProps)(App);


