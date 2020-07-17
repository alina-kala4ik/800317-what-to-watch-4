import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReview} from "./add-review.jsx";
import {Router} from "react-router-dom";
import history from "./../../history.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "./../../reducer/user/user.js";
import {NameSpace} from "./../../reducer/name-space.js";

Enzyme.configure({
  adapter: new Adapter()
});

const historyProps = {
  match: {
    params: {id: 1}
  }
};

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  screenshotSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterSrc: `img/bg-the-grand-budapest-hotel.jpg`,
  movieCoverSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  yearRelease: 2017,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  rating: 5.6,
  numberVotes: 278,
  producer: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runTime: 99,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 1,
  backgroundColor: `111111`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    avatar: ``,
  }
});

it(`callbacks are working`, ()=>{

  const onSubmit = jest.fn();

  const addReview = mount(
      <Provider store={store}>
        <Router history={history}>
          <AddReview
            isCommentPublishing={false}
            onSubmit={onSubmit}
            isCommentSendingError={false}
            historyProps={historyProps}
            film={film}
          />
        </Router>
      </Provider>
  );


  addReview.find(`form.add-review__form`).simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
