import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import history from "./../../history.js";

class MovieViewingPage extends Component {
  constructor(props) {
    super(props);

    this.playerRef = createRef();

    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {isFullScreenMode} = this.props;
    const player = this.playerRef.current;

    if (this.props.isFullScreenMode !== prevProps.isFullScreenMode) {
      if (isFullScreenMode) {
        player.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }

  handleFullScreenClick() {
    const {onFullScreenClick} = this.props;
    onFullScreenClick();
  }

  handleExitClick() {
    history.goBack();
  }

  render() {
    const {isPlaying, progress, timeLeft, children, onPlayClick, onPauseClick} = this.props;

    return <div
      className="player"
      ref={this.playerRef}
    >
      {children}

      <button
        type="button"
        className="player__exit"
        onClick={this.handleExitClick}
      >
        Exit
      </button>

      <div
        className="player__controls"
      >
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying === false &&
            <button
              type="button"
              className="player__play"
              onClick={onPlayClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          }

          {isPlaying === true &&
            <button
              type="button"
              className="player__play"
              onClick={onPauseClick}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          }

          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={this.handleFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>

    </div>;
  }
}

MovieViewingPage.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  timeLeft: PropTypes.string,
  children: PropTypes.node.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  isFullScreenMode: PropTypes.bool.isRequired,
};

export default MovieViewingPage;

