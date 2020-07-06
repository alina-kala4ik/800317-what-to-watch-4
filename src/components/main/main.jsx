import React from "react";
import PropTypes from 'prop-types';
import Catalog from "../catalog/catalog.jsx";
import GenresList from "./../genres-list/genres-list.jsx";
import Promo from "./../promo/promo.jsx";

const Main = (props) => {
  const {onFilmTitleClick, onFilmImgClick} = props;

  return <React.Fragment>
    <Promo />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />
        <Catalog
          onFilmTitleClick={onFilmTitleClick}
          onFilmImgClick={onFilmImgClick}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};


export default Main;

