import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import {MovieViewingPage} from "./movie-viewing-page.jsx";


describe(`render MovieViewingPage`, ()=>{

  global.document.body.innerHTML = `<div id="modal-root"></div>`;

  const defaultCreatePortal = ReactDOM.createPortal;

  beforeAll(()=>{
    ReactDOM.createPortal = (node) => node;
  });

  it(`render MovieViewingPage with during play`, ()=>{
    const tree = renderer.create(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={()=>{}}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render MovieViewingPage with during pause`, ()=>{
    const tree = renderer.create(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={()=>{}}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  afterAll(() => {
    ReactDOM.createPortal = defaultCreatePortal;
  });
});
