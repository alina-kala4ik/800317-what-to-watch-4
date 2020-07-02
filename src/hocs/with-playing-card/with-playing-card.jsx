import React, {PureComponent} from "react";

const withPlayingCard = (Component) => {
  class WithPlayingCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    handleCardMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    handleCardMouseLeave() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        onMouseEnter={this.handleCardMouseEnter}
        onMouseLeave={this.handleCardMouseLeave}
        isPlaying={isPlaying}
      />;
    }
  }

  return WithPlayingCard;
};

export default withPlayingCard;

