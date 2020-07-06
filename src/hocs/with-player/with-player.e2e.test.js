import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayer from "./with-player.jsx";
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
  yearRelease: `2017`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  rating: `5,6`,
  numberVotes: `278`,
  producer: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runTime: `1h 39m`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const MockComponent = (props) => {
  const {children, onPauseClick, onPlayClick} = props;

  return <div>
    <button className="pause" onClick={onPauseClick} />
    <button className="play" onClick={onPlayClick} />
    {children}
  </div>;
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
};

const MockComponentWrapped = withPlayer(MockComponent);

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

it(`Testing pause`, ()=>{

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
      />
  );

  const {_videoRef} = wrapper.instance();
  jest.spyOn(_videoRef.current, `pause`);
  wrapper.instance().componentDidMount();


  wrapper.find(`button.pause`).simulate(`click`);
  expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
});

it(`Testing play`, ()=>{

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
      />
  );

  wrapper.setState({
    isPlaying: false
  });

  const {_videoRef} = wrapper.instance();
  jest.spyOn(_videoRef.current, `play`);
  wrapper.instance().componentDidMount();


  wrapper.find(`button.play`).simulate(`click`);
  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Should change state isFullScreenMode and isControllersVisible when the player opens in full screen`, ()=>{

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
      />
  );

  wrapper.instance().handleFullScreenClick();
  expect(wrapper.state().isFullScreenMode).toEqual(true);
  expect(wrapper.state().isControllersVisible).toEqual(false);
});

it(`Should change state isControllersVisible when you mouse over the control panel`, ()=>{

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
      />
  );

  wrapper.setState({
    isFullScreenMode: true
  });

  wrapper.instance().handleMouseEnterControls();
  expect(wrapper.state().isControllersVisible).toEqual(true);
});

it(`Should change state isControllersVisible when the mouse is removed from the control panel`, ()=>{

  const wrapper = mount(
      <MockComponentWrapped
        film={film}
      />
  );

  wrapper.setState({
    isFullScreenMode: true
  });

  wrapper.instance().handleMouseLeaveControls();
  expect(wrapper.state().isControllersVisible).toEqual(false);
});
