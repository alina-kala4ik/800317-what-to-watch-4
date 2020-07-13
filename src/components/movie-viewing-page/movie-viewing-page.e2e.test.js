import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieViewingPage} from "./movie-viewing-page.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`All callbacks are working`, ()=>{

  global.document.body.innerHTML = `<div id="modal-root"></div>`;

  it(`Some callbacks are working`, ()=>{
    const onExitClick = jest.fn();
    const onPauseClick = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          onExitClick={onExitClick}
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={()=>{}}
          onPauseClick={onPauseClick}
          onFullScreenClick={()=>{}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`button.player__exit`).simulate(`click`);
    movieViewingPage.find(`button.player__play`).simulate(`click`);

    expect(onExitClick).toHaveBeenCalledTimes(1);
    expect(onPauseClick).toHaveBeenCalledTimes(1);
  });

  it(`Callback onPauseClick are working`, ()=>{
    const onPlayClick = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          onPlayClick={onPlayClick}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          isFullScreenMode={false}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`button.player__play`).simulate(`click`);
    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });


});

