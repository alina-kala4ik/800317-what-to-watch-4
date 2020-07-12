import React, {Component, createRef} from "react";
import ReactDOM from "react-dom";
import {ActionCreator} from "./../../reducer/app-state/app-state.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class MovieViewingPage extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement(`div`);
    this.modalRoot = document.getElementById(`modal-root`);

    this.playerRef = createRef();

    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
  }

  handleFullScreenClick(isFullScreenMode) {
    const player = this.playerRef.current;

    if (isFullScreenMode) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  render() {
    const {onExitClick, isPlaying, progress, timeLeft, children, onPlayClick, onPauseClick, onFullScreenClick, isFullScreenMode} = this.props;

    return ReactDOM.createPortal(<div
      className="player"
      ref={this.playerRef}
    >
      {children}

      <button
        type="button"
        className="player__exit"
        onClick={onExitClick}
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
            onClick={()=>{
              onFullScreenClick(!isFullScreenMode);
              this.handleFullScreenClick(!isFullScreenMode);
            }}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>

    </div>,
    this.element);
  }
}

MovieViewingPage.propTypes = {
  onExitClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  timeLeft: PropTypes.string,
  children: PropTypes.node.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  isFullScreenMode: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onExitClick() {
    dispatch(ActionCreator.chooseMovieToWatch(null));
  }
});

export {MovieViewingPage};
export default connect(null, mapDispatchToProps)(MovieViewingPage);


