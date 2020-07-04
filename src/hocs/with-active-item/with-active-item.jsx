import React, {PureComponent} from "react";

const withActiveItem = (Component, startingItemValue = false) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: startingItemValue
      };

      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        setActiveItem={this.setActiveItem}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
