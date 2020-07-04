import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";
import films from "./../../mocks/films.js";
import withActiveItem from "./../../hocs/with-active-item/with-active-item.jsx";
import {Tabs} from "./../../utils.js";

const MoviePageWrapped = withActiveItem(MoviePage, Tabs.OVERVIEW);

class App extends PureComponent {

  _renderApp() {
    const {promotionTitle, promotionGenre, promotionReleaseDate, activeItem: activeFilm, setActiveItem: onFilmOrImgClick} = this.props;

    if (activeFilm === false) {
      return <Main
        promotionTitle={promotionTitle}
        promotionGenre={promotionGenre}
        promotionReleaseDate={promotionReleaseDate}
        onFilmTitleClick={onFilmOrImgClick}
        onFilmImgClick={onFilmOrImgClick}
      />;
    }

    return <MoviePageWrapped
      film={activeFilm}
      onFilmTitleClick={onFilmOrImgClick}
      onFilmImgClick={onFilmOrImgClick}
    />;
  }

  render() {
    const {onFilmOrImgClick} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/movie-page">
          <MoviePageWrapped
            film={films[0]}
            onFilmTitleClick={onFilmOrImgClick}
            onFilmImgClick={onFilmOrImgClick}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  promotionTitle: PropTypes.string.isRequired,
  promotionGenre: PropTypes.string.isRequired,
  promotionReleaseDate: PropTypes.string.isRequired,
  activeItem: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
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
  ]).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default App;


