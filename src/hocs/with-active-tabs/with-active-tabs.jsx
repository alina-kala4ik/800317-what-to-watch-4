import React, {PureComponent} from "react";
import {TABS} from "./../../utils.js";

const withActiveTabs = (Component) => {
  class WithActiveTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TABS.overview
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        onTabClick={this.handleTabClick}
      />;
    }
  }

  return WithActiveTabs;
};

export default withActiveTabs;
