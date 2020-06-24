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
    const {videoPreview, src} = this.props;

    return <video
      src={videoPreview}
      autoPlay={false}
      poster={src}
      loop={true}
      preload={`none`}
      width={280}
      height={175}
      muted={`muted`}
      ref={this._videoRef}
    />;
  }
}

VideoPlayer.propTypes = {
  videoPreview: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
