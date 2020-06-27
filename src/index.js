import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";

const settings = {
  promotionTitle: `The Grand Budapest Hotel`,
  promotionGenre: `Drama`,
  promotionReleaseDate: `2014`,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          promotionTitle={settings.promotionTitle}
          promotionGenre={settings.promotionGenre}
          promotionReleaseDate={settings.promotionReleaseDate}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
