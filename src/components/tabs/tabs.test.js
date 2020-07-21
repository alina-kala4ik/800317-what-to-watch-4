import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const listTabs = [`Overview`, `Details`, `Reviews`];

it(`render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      activeTab={`Overview`}
      listTabs={listTabs}
      onTabClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
