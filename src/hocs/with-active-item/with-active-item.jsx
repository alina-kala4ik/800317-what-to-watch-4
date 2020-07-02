import React, {PureComponent} from "react";

const withActiveItem = (Component, startingItemValue = null) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: startingItemValue
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onClick={this.handleClick}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
