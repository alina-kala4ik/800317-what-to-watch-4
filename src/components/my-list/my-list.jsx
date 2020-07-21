import React, {PureComponent} from "react";
import Header from "./../header/header.jsx";
import MovieList from "./../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data";
import PropTypes from "prop-types";
import withFavoriteFilms from "./../../hocs/with-favorite-films/with-favorite-films.jsx";

const MovieListWrapped = withFavoriteFilms(MovieList);

class MyList extends PureComponent {
  constructor(props) {
    super(props);

    this.props.onLoad();
  }


  render() {
    return <div className="user-page">
      <Header
        isActiveLogoLink={true}
        uniqueClasses={`user-page__head`}
      >
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <MovieListWrapped />
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }

}

MyList.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(Operation.loadFavoriteFilms());
  }
});

export {MyList};
export default connect(null, mapDispatchToProps)(MyList);
