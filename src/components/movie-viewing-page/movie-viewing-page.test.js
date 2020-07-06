import React from "react";
import renderer from "react-test-renderer";
import {MovieViewingPage} from "./movie-viewing-page.jsx";

describe(`render MovieViewingPage`, ()=>{
  it(`render MovieViewingPage with player controls and during play`, ()=>{
    const tree = renderer.create(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          isControllersVisible={true}
          onPlayClick={()=>{}}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          onMouseEnterControls={()=>{}}
          onMouseLeaveControls={()=>{}}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render MovieViewingPage with player controls and during pause`, ()=>{
    const tree = renderer.create(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={false}
          progress={0}
          timeLeft={`01:00:00`}
          isControllersVisible={true}
          onPlayClick={()=>{}}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          onMouseEnterControls={()=>{}}
          onMouseLeaveControls={()=>{}}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`render MovieViewingPage without player controls`, ()=>{
    const tree = renderer.create(
        <MovieViewingPage
          onExitClick={()=>{}}
          isPlaying={true}
          progress={0}
          timeLeft={`01:00:00`}
          isControllersVisible={false}
          onPlayClick={()=>{}}
          onPauseClick={()=>{}}
          onFullScreenClick={()=>{}}
          onMouseEnterControls={()=>{}}
          onMouseLeaveControls={()=>{}}
        >
          <video />
        </MovieViewingPage>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
