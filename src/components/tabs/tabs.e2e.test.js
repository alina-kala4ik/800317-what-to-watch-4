import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from "./Tabs.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const listTabs = [`Overview`, `Details`, `Reviews`];

it(`All Tabs are clickable`, () => {
  const onTabClick = jest.fn();

  const tabs = shallow(
      <Tabs
        activeTab={`Overview`}
        listTabs={listTabs}
        onTabClick={onTabClick}
      />
  );

  const TabsLinks = tabs.find(`a.movie-nav__link`);

  TabsLinks.forEach((tab)=>{
    tab.simulate(`click`);
  });

  expect(onTabClick).toHaveBeenCalledTimes(3);
});


it(`When you click on the tab, the expected information is transmitted`, ()=>{
  const onTabClick = jest.fn();
  const expectedAnswer = `Overview`;

  const tabs = shallow(
      <Tabs
        activeTab={`Overview`}
        listTabs={listTabs}
        onTabClick={onTabClick}
      />
  );

  const tabLink = tabs.find(`a.movie-nav__link`).at(0);

  tabLink.simulate(`click`);

  expect(onTabClick.mock.calls[0][0]).toEqual(expectedAnswer);
});

