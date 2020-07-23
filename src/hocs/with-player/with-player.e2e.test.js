import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withPlayer} from "./with-player.jsx";
import PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter(),
});

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
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};


const historyProps = {
  match: {
    params: {id: 1}
  }
};


const MockComponent = (props) => {
  const {children, onPauseClick, onPlayClick, onFullScreenClick} = props;

  return <div>
    <button className="pause" onClick={onPauseClick} />
    <button className="play" onClick={onPlayClick} />
    <button className="fullScreen" onClick={onFullScreenClick} />
    {children}
  </div>;
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
};

const MockComponentWrapped = withPlayer(MockComponent);

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

it(`Testing pause`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
        historyProps={historyProps}
      />
  );

  const {videoRef} = wrapper.instance();
  jest.spyOn(videoRef.current, `pause`);
  wrapper.instance().componentDidMount();


  wrapper.find(`button.pause`).simulate(`click`);
  expect(videoRef.current.pause).toHaveBeenCalledTimes(1);
});

it(`Testing play`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
        historyProps={historyProps}
      />
  );

  wrapper.setState({
    isPlaying: false
  });

  const {videoRef} = wrapper.instance();
  jest.spyOn(videoRef.current, `play`);
  wrapper.instance().componentDidMount();


  wrapper.find(`button.play`).simulate(`click`);
  expect(videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Should change state isFullScreenMode when the player open player in full screen mode`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
        historyProps={historyProps}
      />
  );

  wrapper.instance().handleFullScreenClick(true);
  expect(wrapper.state().isFullScreenMode).toEqual(true);
});

