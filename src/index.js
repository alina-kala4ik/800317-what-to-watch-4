import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const init = () => {
  ReactDOM.render(
      <App
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
      />,
      document.querySelector(`#root`)
  );
};

init();
