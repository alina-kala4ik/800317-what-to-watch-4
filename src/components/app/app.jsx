import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "./../movie-page/movie-page.jsx";


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
    const {promotionTitle, promotionGenre, promotionReleaseDate, films} = this.props;

    if (this.state.selectedFilm === null) {
      return <Main
        promotionTitle={promotionTitle}
        promotionGenre={promotionGenre}
        promotionReleaseDate={promotionReleaseDate}
        films={films}
        onFilmTitleClick={this.handleFilmTitleClick}
        onFilmImgClick={this.handleFilmImgClick}
      />;
    }

    return <MoviePage
      film={this.state.selectedFilm}
      films={films}
      onFilmTitleClick={this.handleFilmTitleClick}
      onFilmImgClick={this.handleFilmImgClick}
    />;
  }

  render() {
    const {films} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage
            film={films[0]}
            films={films}
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
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default App;
