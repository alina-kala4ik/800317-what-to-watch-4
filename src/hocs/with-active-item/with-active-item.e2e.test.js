import React from "react";
import withActiveItem from "./with-active-item.jsx";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockComponent = () => <div />;


it(`Should change active item`, () => {
  const MockComponentWrapped = withActiveItem(mockComponent);

  const wrapper = shallow(
      <MockComponentWrapped
        activeItem={false}
        setActiveItem={() => {}}
      />
  );

  expect(wrapper.props().activeItem).toEqual(false);

  wrapper.props().setActiveItem(`someParameter`);
  expect(wrapper.props().activeItem).toEqual(`someParameter`);
});
