import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import withActiveItem from "./hocs/with-active-item/with-active-item.jsx";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Operation} from "./reducer/data/data.js";
import {ActionCreator} from "./reducer/app-state/app-state.js";

const onNotFound = () => {
  store.dispatch(ActionCreator.changeServerStatusOnError());
};

const api = createAPI(onNotFound);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadFilms());
store.dispatch(Operation.loadPromoFilm());

const AppWrapped = withActiveItem(App);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <AppWrapped />
      </Provider>,
      document.querySelector(`#root`)
  );
};


setTimeout(init, 1000);

