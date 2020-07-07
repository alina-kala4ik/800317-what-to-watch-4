import React from "react";
import ReactDOM from "react-dom";
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
    const onFullScreenClick = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          onExitClick={onExitClick}
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          isControllersVisible={true}
          onPlayClick={()=>{}}
          onPauseClick={onPauseClick}
          onFullScreenClick={onFullScreenClick}
          onMouseEnterControls={()=>{}}
          onMouseLeaveControls={()=>{}}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`button.player__exit`).simulate(`click`);
    movieViewingPage.find(`button.player__play`).simulate(`click`);
    movieViewingPage.find(`button.player__full-screen`).simulate(`click`);

    expect(onExitClick).toHaveBeenCalledTimes(1);
    expect(onPauseClick).toHaveBeenCalledTimes(1);
    expect(onFullScreenClick).toHaveBeenCalledTimes(1);
  });

  it(`Callback onPauseClick are working`, ()=>{
    const onPlayClick = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          isControllersVisible={true}
          onPlayClick={onPlayClick}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          onMouseEnterControls={()=>{}}
          onMouseLeaveControls={()=>{}}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`button.player__play`).simulate(`click`);
    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });

  it(`Callbacks react on mouse event are works`, ()=>{
    const onMouseEnterControls = jest.fn();
    const onMouseLeaveControls = jest.fn();

    const movieViewingPage = mount(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          isControllersVisible={false}
          onPlayClick={()=>{}}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          onMouseEnterControls={onMouseEnterControls}
          onMouseLeaveControls={onMouseLeaveControls}
        >
          <video />
        </MovieViewingPage>
    );

    movieViewingPage.find(`div.player__controls`).simulate(`mouseenter`);
    expect(onMouseEnterControls).toHaveBeenCalledTimes(1);

    movieViewingPage.find(`div.player__controls`).simulate(`mouseleave`);
    expect(onMouseLeaveControls).toHaveBeenCalledTimes(1);
  });
});

