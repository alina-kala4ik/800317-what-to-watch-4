import React from "react";
import Catalog from "../catalog/catalog.jsx";
import GenresList from "./../genres-list/genres-list.jsx";
import Promo from "./../promo/promo.jsx";
import Footer from "./../footer/footer.jsx";

const Main = () => {

  return <React.Fragment>
    <Promo />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />
        <Catalog />
      </section>

      <Footer isActiveLogoLink={false} />

    </div>
  </React.Fragment>;
};


export default Main;

