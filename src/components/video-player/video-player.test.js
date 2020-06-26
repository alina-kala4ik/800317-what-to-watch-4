import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`render VideoPlayer`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
      poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
      isPlaying={false}
    />, {
      createNodeMock: ()=>{
        return {};
      }
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
