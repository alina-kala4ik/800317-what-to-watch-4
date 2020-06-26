import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._videoTimer = null;

    this.state = {
      isPlaying: this.props.isPlaying
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.muted = true;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    const onPlay = () => {
      video.play();
    };

    if (this.props.isPlaying) {
      this._videoTimer = setTimeout(onPlay, 1000);
    } else {
      clearTimeout(this._videoTimer);
      video.load();
    }
  }

  render() {
    const {videoPreview, screenshotSrc} = this.props;

    return <video
      preload="none"
      width="280"
      height="175"
      loop={true}
      autoPlay={false}
      src={videoPreview}
      poster={screenshotSrc}
      ref={this._videoRef}
    />;
  }
}

VideoPlayer.propTypes = {
  videoPreview: PropTypes.string.isRequired,
  screenshotSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
