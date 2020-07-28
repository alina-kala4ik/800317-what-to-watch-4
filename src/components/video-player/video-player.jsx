import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.videoTimer = null;
  }

  componentDidMount() {
    const video = this.videoRef.current;
    video.muted = true;
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      this.onPlay();
    } else {
      clearTimeout(this.videoTimer);
      video.load();
    }
  }

  onPlay() {
    const video = this.videoRef.current;
    const videoPlay = () => {
      video.play();
    };
    this.videoTimer = setTimeout(videoPlay, 1000);
  }

  render() {
    const {src, poster} = this.props;

    return <video
      preload="none"
      width="280"
      height="175"
      loop={true}
      autoPlay={false}
      src={src}
      poster={poster}
      ref={this.videoRef}
    />;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
