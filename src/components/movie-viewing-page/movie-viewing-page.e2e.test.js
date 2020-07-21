import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieViewingPage from "./movie-viewing-page.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`All callbacks are working`, () => {

  it(`Callback onPauseClick are working`, () => {
    const onPauseClick = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={() => {}}
          onPauseClick={onPauseClick}
          onFullScreenClick={() => {}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`button.player__play`).simulate(`click`);

    expect(onPauseClick).toHaveBeenCalledTimes(1);
  });

  it(`Callback onPlayClick are working`, () => {
    const onPlayClick = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={onPlayClick}
          onPauseClick={() => {}}
          onFullScreenClick={() => {}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`button.player__play`).simulate(`click`);
    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });

});

