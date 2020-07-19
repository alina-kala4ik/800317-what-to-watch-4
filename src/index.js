import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer/reducer.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {ActionCreator as AppStateActionCreator} from "./reducer/app-state/app-state.js";
import {ActionCreator as UserActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {Operation as UserOperation} from "./reducer/user/user.js";
import history from "./history.js";
import {Pages} from "./utils.js";


const onNotFound = () => {
  store.dispatch(AppStateActionCreator.changeServerStatusOnError());
};

const onUnauthorized = (response) => {
  const {url} = response.config;
  const getLoginURL = /\/login/;
  const isGetLoginURLRequest = getLoginURL.test(url);

  store.dispatch(UserActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
  if (isGetLoginURLRequest) {
    return;
  }
  history.push(Pages.LOGIN);
};

const api = createAPI(onNotFound, onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);


store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
