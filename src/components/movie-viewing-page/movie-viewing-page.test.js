import React from "react";
import renderer from "react-test-renderer";
import MovieViewingPage from "./movie-viewing-page.jsx";


describe(`render MovieViewingPage`, () => {

  it(`render MovieViewingPage with during play`, () => {
    const tree = renderer.create(
        <MovieViewingPage
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={() => {}}
          onPauseClick={() => {}}
          onFullScreenClick={() => {}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render MovieViewingPage with during pause`, () => {
    const tree = renderer.create(
        <MovieViewingPage
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={() => {}}
          onPauseClick={() => {}}
          onFullScreenClick={() => {}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
