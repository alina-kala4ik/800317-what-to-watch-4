import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";
import films from "./../../mocks/films.js";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: null,
    };

    this.handleFilmTitleClick = this.handleFilmTitleClick.bind(this);
    this.handleFilmImgClick = this.handleFilmImgClick.bind(this);
  }

  handleFilmTitleClick(film) {
    this.setState({
      selectedFilm: film
    });
  }

  handleFilmImgClick(film) {
    this.setState({
      selectedFilm: film
    });
  }

  _renderApp() {
    const {promotionTitle, promotionGenre, promotionReleaseDate} = this.props;

    if (this.state.selectedFilm === null) {
      return <Main
        promotionTitle={promotionTitle}
        promotionGenre={promotionGenre}
        promotionReleaseDate={promotionReleaseDate}
        onFilmTitleClick={this.handleFilmTitleClick}
        onFilmImgClick={this.handleFilmImgClick}
      />;
    }

    return <MoviePage
      film={this.state.selectedFilm}
      onFilmTitleClick={this.handleFilmTitleClick}
      onFilmImgClick={this.handleFilmImgClick}
    />;
  }

  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage
            film={films[0]}
            onFilmTitleClick={this.handleFilmTitleClick}
            onFilmImgClick={this.handleFilmImgClick}
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
};

export default App;
