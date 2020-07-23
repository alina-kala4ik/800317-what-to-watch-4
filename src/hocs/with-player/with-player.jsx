import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmById} from "./../../reducer/data/selector.js";
import {compose} from "redux";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        isPlaying: true,
        progress: 0,
        timeLeft: `00:00:00`,
        isFullScreenMode: false
      };

      this.handlePlayClick = this.handlePlayClick.bind(this);
      this.handlePauseClick = this.handlePauseClick.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    }

    componentDidMount() {
      const {film} = this.props;

      if (film) {
        const video = this.videoRef.current;

        video.onloadedmetadata = () => {
          video.ontimeupdate = () =>
            this.setState({
              progress: (Math.floor(video.currentTime) * 100) / video.duration,
              timeLeft: this.secondsToTime(video.duration - video.currentTime),
            });
        };
      }
    }

    componentWillUnmount() {
      const {film} = this.props;

      if (film) {
        const video = this.videoRef.current;
        video.onloadedmetadata = null;
        video.ontimeupdate = null;
      }
    }

    componentDidUpdate() {
      const {film} = this.props;

      if (film) {
        const {isPlaying} = this.state;
        const video = this.videoRef.current;

        if (isPlaying && !video.ended) {
          video.play();
        } else {
          video.pause();
        }
      }
    }

    secondsToTime(seconds) {
      const date = new Date(0);
      date.setSeconds(seconds);
      const timeString = date.toISOString().substr(11, 8);
      return timeString;
    }

    handlePlayClick() {
      this.setState({
        isPlaying: true
      });
    }

    handlePauseClick() {
      this.setState({
        isPlaying: false
      });
    }

    handleFullScreenClick() {
      this.setState((prevState) => ({
        isFullScreenMode: !prevState.isFullScreenMode
      }));
    }

    render() {
      const {isPlaying, progress, timeLeft, isFullScreenMode} = this.state;
      const {film} = this.props;

      if (!film) {
        return null;
      }

      const {videoSrc, screenshotSrc} = film;

      return <Component
        {...this.props}
        isPlaying={isPlaying}
        progress={progress}
        timeLeft={timeLeft}
        onPlayClick={this.handlePlayClick}
        onPauseClick={this.handlePauseClick}
        onFullScreenClick={this.handleFullScreenClick}
        isFullScreenMode={isFullScreenMode}
      >
        <video
          src={videoSrc}
          className="player__video"
          poster={screenshotSrc}
          autoPlay={true}
          loop={false}
          ref={this.videoRef}
        />
      </Component>;
    }
  }

  WithPlayer.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      screenshotSrc: PropTypes.string.isRequired,
      posterSrc: PropTypes.string.isRequired,
      movieCoverSrc: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      yearRelease: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      numberVotes: PropTypes.number.isRequired,
      producer: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string).isRequired,
      runTime: PropTypes.number.isRequired,
      videoSrc: PropTypes.string.isRequired
    }),
  };

  return WithPlayer;
};

const mapStateToProps = (state, props) => {
  const {historyProps} = props;
  const id = historyProps.match.params.id;

  return {
    film: getFilmById(state, id),
  };
};

const composedHoc = compose(
    connect(mapStateToProps),
    withPlayer
);

export {withPlayer};

export default composedHoc;
