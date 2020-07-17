import React from "react";
import Catalog from "../catalog/catalog.jsx";
import GenresList from "./../genres-list/genres-list.jsx";
import Promo from "./../promo/promo.jsx";

const Main = () => {

  return <React.Fragment>
    <Promo />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />
        <Catalog />
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


export default Main;

